const { bowStats } = require("./stats");

module.exports = class Bow {
  constructor() {
    this.level = 1;
    this.damage = bowStats.damage[this.level - 1];
    this.durability = bowStats.durability[this.level - 1];
  }

  levelUp() {
    this.level++;
  }
};
