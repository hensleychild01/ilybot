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
    if (DB.findOne({ ID: interaction.user.id })) {
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
      DB.create({
        ID: interaction.client.id,
        Profile: {
          Username: interaction.options.getString("user"),
          Status: "Idle",
        },
      });
      interaction.reply({
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
