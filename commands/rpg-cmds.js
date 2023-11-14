const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  Colors,
} = require("discord.js");

module.exports = {
  name: "rpg-cmds",
  description: "View starting commands for RPG game",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Starting rpg commands")
          .setFields(
            { name: "/rpg-signup", value: "Create your RPG account" },
            { name: "/rpg-sum", value: "Responds with info about the user" }
          )
          .setColor(Colors.DarkGrey),
      ],
      ephemeral: true,
    });
  },
};
