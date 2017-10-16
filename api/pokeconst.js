var db = require("../models");

module.exports = function(pokemon, moves) {
  this.id = pokemon[0].id;
  this.name = pokemon[0].name;
  this.type_1 = pokemon[0].type_1;
  this.type_2 = pokemon[0].type_2;
  this.hp = (pokemon[0].hp*2) + 110;
  this.atk = (pokemon[0].attack*2) + 5;
  this.def = (pokemon[0].defense*2) + 5;
  this.satk = (pokemon[0].spec_attack*2) + 5;
  this.sdef = (pokemon[0].spec_defense*2) + 5;
  this.spd = (pokemon[0].speed*2) + 5;
  this.total = pokemon[0].total;
  this.dex = pokemon[0].dex_1;
  this.dmgMod = {
    Normal: pokemon[0].normal,
    Fire: pokemon[0].fire,
    Water: pokemon[0].water,
    Electric: pokemon[0].electric,
    Grass: pokemon[0].grass,
    Ice: pokemon[0].ice,
    Fighting: pokemon[0].fighting,
    Poison: pokemon[0].poison,
    Ground: pokemon[0].ground,
    Flying: pokemon[0].flying,
    Psychic: pokemon[0].psychic,
    Bug: pokemon[0].bug,
    Rock: pokemon[0].rock,
    Ghost: pokemon[0].ghost,
    Dragon: pokemon[0].dragon,
    Dark: pokemon[0].dark,
    Steel: pokemon[0].steel,
    Fairy: pokemon[0].fairy
  };
  this.moveFinder = function() {
    var finalMoveset = [];
    for (var i = 0; i < 4; i++) {
      var seed = Math.floor(Math.random() * moves.length);
      console.log(moves.length);
       console.log(seed);
      console.log(moves[i]);
      finalMoveset.push(moves.splice(seed, 1));
    }
      return finalMoveset;
  };
  this.moves = this.moveFinder();
}
