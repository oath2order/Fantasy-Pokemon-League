function thunderDome(a1, a2) {
  poke1 = a1;
  poke2 = a2;
  poke1Attack = {};
  poke2Attack = {};
  winner = {};
  turnStart = function() {
    console.log("start of a new turn")
    this.poke1Attack = this.attackAI(this.poke1, this.poke2);
    this.poke2Attack = this.attackAI(this.poke2, this.poke1);
    console.log(this.poke1.name, 'has chosen to use', this.poke1Attack.move);
    console.log(this.poke2.name, 'has chosen to use', this.poke2Attack.move);
    this.speedCheck();
  };
  attackAI = function(attacker, defender) {
    var moveSpinner = [];
    for (var i = 0; i < attacker.moves.length; i++) {
      for (var j = 0; j < (defender.dmgMod[attacker.moves[i][0].type] * 4); j++) {
        moveSpinner.push(attacker.moves[i][0]);
      }
    }
    return moveSpinner[Math.floor(Math.random() * moveSpinner.length)];
  };
  speedCheck = function() {
    if (this.poke1.spd >= this.poke2.spd) {
      this.poke2.hp = this.dmgCalc(this.poke1, this.poke2, this.poke1Attack);
      if (this.poke2.hp > 0) {
        this.poke1.hp = this.dmgCalc(this.poke2, this.poke1, this.poke2Attack);
      }
    } else {
      this.poke1.hp = this.dmgCalc(this.poke2, this.poke1, this.poke2Attack);
      if (this.poke1.hp > 0) {
        this.poke2.hp = this.dmgCalc(this.poke1, this.poke2, this.poke1Attack);
      }
    }
    this.resolve();
  };
  dmgCalc = function(attacker, defender, move) {
    console.log(attacker.name, 'will attack', defender.name);
    var attackStat = "";
    var defenseStat = "";
    var stab = 1;
    var multihit = 1;
    var type = defender.dmgMod[move.type];
    console.log(attacker);
    console.log(move);
    if (move.multihit == 1) {
      var multihit = Math.floor(Math.random() * (5 - 2)) + 2
    }
    if (move.type == attacker.type_1 || move.type == attacker.type_2) {
      stab = 1.5;
    };

    if (move.category == "Physical") {
      attackStat = "atk";
      defenseStat = "def";
    } else {
      attackStat = "satk";
      defenseStat = "sdef";
    }
    //console.log(attacker[attackStat], defender[defenseStat], move.power)
    var damage = (((((2 * 100) / 5) + 2) * move.power * (attacker[attackStat] / defender[defenseStat])) / 50) + 2;
    var mod = stab * type;
    var finalDmg = Math.floor((damage * mod) * multihit);
    console.log("they did", finalDmg);
    return defender.hp - finalDmg;
  };
  resolve = function() {
    if (this.poke1.hp <= 0) {
      this.winner = this.poke2;
    } else if (this.poke2.hp <= 0) {
      this.winner = this.poke1;
    } else { this.turnStart() };

  };
  console.log(this.poke1.name, "will fight", this.poke2.name);
  this.turnStart();
  return this.winner;
}