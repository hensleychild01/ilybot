class Sword { 
    constructor(level=1) {
        this.damage;
        switch (level) {
            case 1:
                this.damage = 2;
                break;
            case 2: 
                this.damage = 5;
                break;
            case 3: 
                this.damage = 10;
                break;
            case 4: 
                this.damage = 15;
                break;
        }
    }
}

class Player {
  constructor(username, userID) {
    this.id = userID;
    this.user = username;
    this.weapons = {
      sword: { level: 1, pointer: new Sword(), durability: 20 },
      bow: { arrows: 20 },
    };
    this.armor = {level: 1, durability: 30}
  }
}
