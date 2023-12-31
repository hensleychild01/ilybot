const {
  Client,
  ChatInputCommandInteraction,
  Colors,
  EmbedBuilder,
} = require("discord.js");
const { DB } = require("../schemas");

module.exports = {
  name: "rpg-sum",
  description: "Load a summary of the user's RPG stats",

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const Player = await DB.findOne({ ID: interaction.user.id });

    if (Player) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("RPG Summary")
            .setColor(Colors.Blue)
            .addFields({ name: "Status", value: Player.Profile.Status }),
        ],
      });
    } else {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Oops! This account does not exist.")
            .setColor(Colors.Red)
            .addFields({
              name: "You can make an account using /rpg-signup.",
              value: " guten tag",
            }),
        ],
        ephemeral: true,
      });
    }
  },
};
