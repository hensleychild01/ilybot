const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  Colors,
} = require("discord.js");

module.exports = {
  name: "rpg-ready",
  description: "view starting commands for RPG game",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Starting rpg commands")
          .setFields(
            {name: "/rpg-sum", value: "Responds with info about the user"},
          ) 
          .setColor(Colors.DarkGrey),
      ],
      ephemeral: true,
    });
  },
};
