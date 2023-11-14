const {
  ChatInputCommandInteraction,
  EmbedBuilder,
  Colors,
} = require("discord.js");

module.exports = {
  name: "majeure",
  description: "Some MS Word flukes",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`Force Majeure`)
          .setColor(Colors.Blurple)
          .setImage(
            "https://cdn.discordapp.com/attachments/1011393179389534229/1172231155307782154/image.png?ex=655f9056&is=654d1b56&hm=c283f06ebec4829bbeba98db0f2cc38ab073840c0bf1a7f59f83f7d68431101d&"
          ),
      ],
      ephemeral: true,
    });
  },
};
