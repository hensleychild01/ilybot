const { Sword } = require("./sword");
const { Bow } = require("./bow");

class Player {
  constructor(username, userID) {
    this.username = username;
    this.id = userID;
    this.level = 1;
    this.xp = 0;
    this.gold = 0;
    this.weapons = {
      sword: new Sword(),
      bow: new Bow(),
    };
    this.health = 50;
    this.armor = {
      helm: { material: "wood", defense: 2 },
      breastplate: { material: "wood", defense: 2 },
      boots: { material: "wood", defense: 2 },
    };
    this.fights = {
      wins: 0,
      losses: 0,
    };
  }

  createUser() {}
}

module.exports = { Player };
