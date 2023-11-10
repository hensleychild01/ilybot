const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  ActivityType,
  EmbedBuilder,
  Colors,
} = require("discord.js");
const { token } = require("./config.json");
const fs = require("fs");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

/**
 *
 * @param {Client} client
 */
async function loadCommands(client) {
  const Files = await loadFiles("commands");
  const cmdArr = [];

  Files.forEach(async (file) => {
    const Command = require(file);

    if (!Command.name)
      return console.log(`${file.split("/").pop()} does not have a name!`);

    client.commands.set(Command.name, Command);
    cmdArr.push(Command);
  });

  client.application.commands.set(cmdArr);

  return console.log(
    `Loaded ${cmdArr.length} global application (/) commands.`
  );
}

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);

  loadCommands(c);
  console.log("Commands loaded");

  client.user.setPresence({
    status: "online",
    activities: [
      {
        name: "you from your walls",
        type: ActivityType.Listening,
      },
    ],
  });
});

client.on(Events.InteractionCreate, async (i) => {
  if (!i.isChatInputCommand()) return;

  const Command = client.commands.get(i.commandName);

  if (!Command) return i.reply({ content: "Outdated command" });

  try {
    Command.execute(i, client);
  } catch (error) {
    console.log(`Error executing command ${error}`);

    fs.appendFile("./logs/errors.txt", `${error} ${Date()}\n`, function(err) {});

    i.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Error :/")
          .setColor(Colors.Red)
          .addFields({ name: "Error executing command", value: `Error has been logged to console` }),
      ],
      ephemeral: true,
    });
  }
});

client.login(token);

/**
 *
 * @param {String} dirName
 */
async function loadFiles(dirName) {
  const glob = require("glob");
  const { promisify } = require("node:util");

  const pg = promisify(glob);

  const Files = await pg(
    `${process.cwd().replace(/\\/g, "/")}/${dirName}/**/*.js`
  );

  Files.forEach((file) => delete require.cache[require.resolve(file)]);

  return Files;
}
