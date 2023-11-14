const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  Colors,
} = require("discord.js");
const { DB } = require("../schemas");

module.exports = {
  name: "rpg-reset",
  description: "Reset your entire RPG account",

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const Player = await DB.findOne({ ID: interaction.user.id });

    if (Player) {
      await DB.findOneAndDelete({ ID: Player.ID });
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setColor(Colors.Green)
            .setTitle("Account successfully deleted"),
        ],
        ephemeral: true,
      });
    } else {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("You have no account to delete")
            .setColor(Colors.Red),
        ],
        ephemeral: true,
      });
    }
  },
};
