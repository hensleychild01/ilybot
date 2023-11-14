const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  Colors,
} = require("discord.js");
const { DB } = require("../schemas");

module.exports = {
  name: "rpg-signup",
  description: "Create an RPG account",
  options: [
    {
      name: "user",
      description: "Create a username for your RPG account",
      type: 3,
      required: true,
    },
  ],

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const Player = await DB.findOne({ ID: interaction.user.id });
    if (Player) {
      await interaction.reply({
        embeds: [
          new EmbedBuilder().setColor(Colors.Red).addFields({
            name: "You already have an account, silly!",
            value: "Use /rpg-cmds to see available commands.",
          }),
        ],
        ephemeral: true,
      });
    } else {
      await DB.create({
        ID: interaction.user.id,
        Profile: {
          Username: interaction.options.getString("user"),
          Status: "Idle",
        },
      });
      await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setColor(Colors.Green)
            .setTitle("Success!")
            .setTimestamp(),
        ],
        ephemeral: true,
      });
    }
  },
};
