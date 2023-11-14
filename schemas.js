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
    Level: {
      type: Number,
      default: 1,
    },
    XP: {
      type: Number,
      default: 0,
    },
  },
  Inventory: {
    type: Object,
    Gold: {
      type: Number,
      default: 0,
    },
    Sword: {
      type: Object,
      default: new Sword(),
    },
    Bow: {
      type: Object,
      default: new Bow(),
    },
    Health: {
      type: Number,
      default: 50,
    },
    Armor: {
      type: Object,
      default: {
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
