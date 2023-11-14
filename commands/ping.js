const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  Colors,
} = require("discord.js");

module.exports = {
  name: "ping",
  description: "Hello there",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const now = Date.now();

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTimestamp()
          .setTitle("Pong!")
          .addFields({ name: "Latency", value: `${Date.now() - now}ms` })
          .setColor(Colors.Blue),
      ],
      ephemeral: true,
    });
  },
};
