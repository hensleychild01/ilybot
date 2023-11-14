const { Sword, Bow } = require("./rpg assets/weapons");
const { Schema, model } = require("mongoose");

const PlayerStorage = new Schema({
  ID: {
    type: String,
    required: true,
  },
  Profile: {
    Username: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      default: "Idle",
    },
    Level: { type: Number, default: 1 },
    XP: { type: Number, default: 0 },
  },
  Inventory: {
    type: Object,
    default: {
      Gold: 0,
      Sword: new Sword(),
      Bow: new Bow(),
      Health: 50,
      Armor: {
        helm: { material: "wood", defense: 2 },
        breastplate: { material: "wood", defense: 2 },
        boots: { material: "wood", defense: 2 },
      },
    },
  },
  Fights: {
    type: Object,
    default: { wins: 0, losses: 0 },
  },
});

module.exports = {
  DB: model("playerBase", PlayerStorage),
};
