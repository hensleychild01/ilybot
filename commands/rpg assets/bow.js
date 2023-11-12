module.exports = class Bow {
  constructor() {
    this.level = 1;
    this.damage = weaponStatsByLevel.bow.damage[this.level - 1];
    this.durability = weaponStatsByLevel.bow.durability[this.level - 1];
  }

  levelUp() {
    this.level++;
  }
};
