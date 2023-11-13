const { swordStats } = require("./stats");

module.exports = class Sword {
  constructor() {
    this.level = 1;
    this.damage = swordStats.damage[this.level - 1];
    this.durability = swordStats.durability[this.level - 1];
  }

  levelUp() {
    this.level++;
  }
};
