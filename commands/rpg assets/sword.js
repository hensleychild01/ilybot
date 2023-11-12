module.exports = class Sword {
  constructor() {
    this.level = 1;
    this.damage = weaponStatsByLevel.sword.damage[this.level - 1];
    this.durability = weaponStatsByLevel.sword.durability[this.level - 1];
  }

  levelUp() {
    this.level += 1;
  }
};
