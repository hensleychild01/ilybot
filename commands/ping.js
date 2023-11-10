const { ChatInputCommandInteraction, Client } = require("discord.js");

module.exports = {
  name: "ping",
  description: "hello there",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const now = Date.now();
    interaction.deferReply({ ephemeral: true }).then(async () => {
      const latency = Date.now() - now;

      return interaction.editReply({
        content: `${client.ws.ping}ms | ${latency}ms`,
      });
    });
  },
};
