var db = require("../models");

module.exports = function(pokemon, moves) {
  this.id = pokemon[0].id;
  this.name = pokemon[0].name;
  this.type_1 = pokemon[0].type_1;
  this.type_2 = pokemon[0].type_2;
  this.hp = pokemon[0].hp;
  this.atk = pokemon[0].attack;
  this.def = pokemon[0].defense;
  this.satk = pokemon[0].spec_attack;
  this.sdef = pokemon[0].spec_defense;
  this.spd = pokemon[0].speed;
  this.total = pokemon[0].total;
  this.dex = pokemon[0].dex_1;
  this.dmgMod = {
    normal: pokemon[0].normal,
    fire: pokemon[0].fire,
    water: pokemon[0].water,
    electric: pokemon[0].electric,
    grass: pokemon[0].grass,
    ice: pokemon[0].ice,
    fighting: pokemon[0].fighting,
    poison: pokemon[0].poison,
    ground: pokemon[0].ground,
    flying: pokemon[0].flying,
    psychic: pokemon[0].psychic,
    bug: pokemon[0].bug,
    rock: pokemon[0].rock,
    ghost: pokemon[0].ghost,
    dragon: pokemon[0].dragon,
    dark: pokemon[0].dark,
    steel: pokemon[0].steel,
    fairy: pokemon[0].fairy
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
