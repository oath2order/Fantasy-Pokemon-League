var db = require("../models");

module.exports = function(pokemon) {
  console.log(pokemon[0])
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
  //THIS WILL NOT WORK reason is that I cannot figure out how to escape the qoutes
  this.moveFinder = function() {
    var moveId = "move";
    console.log(moveId);
    moveId += (Math.floor(Math.random() * 64) + 1);
    db.sequelize.query(`
      SELECT :move, type, category, power FROM movesets 
      left join moves on movesets.:move = moves.move
      where species = :name;
      `, { replacements: { move: moveId, name: this.name }, type: db.sequelize.QueryTypes.SELECT }).then(function(moves) {
      console.log("test")
      console.log(moves);
    });
  }
  this.moves = {
    move_1: this.moveFinder(),
    move_2: {},
    move_3: {},
    move_4: {}
  }
}


// this.fullText = fullText;
// this.cloze = cloze;
// this.removeCloze = function() {
//   var newString = "";
//   if (this.fullText.indexOf(this.cloze) != -1) {
//     newString = this.fullText.replace(cloze, ' ... ');
//     return newString;
//   } else {
//     newString = "Error! Not a valid Cloze card!";
//     return newString;
//   }
// };