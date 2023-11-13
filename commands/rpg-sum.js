const { Client, ChatInputCommandInteraction, Colors, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "rpg-sum",
  description: "Load a summary of the user's RPG stats",

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    interaction.reply({embeds: [
        new EmbedBuilder()
        .setTitle("RPG Summary")
        .setColor(Colors.Green)
    ]});
  },
};
