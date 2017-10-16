// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var api = require("../api/pokeconst");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {



    app.get("/pokeapi", function(req, res) {
        // findAll returns all entries for a table when used with no options
        var seed = Math.floor(Math.random() * 802) + 1;
        db.sequelize.query(`
      SELECT pokemon.id, pokemon.name, type_1, type_2, hp, attack, spec_attack, defense, spec_defense, speed, total, dex_1, dex_2,
      class, preevolution, species, move1, move2, move3, move4, move5, move6, move7, move8, move9, move10, move11, move12,
      move13, move14, move15, move16, move17, move18, move19, move20, move21, move22, move23, move24, move25, move26, move27
      move28, move29, move30, move31, move32, move33, move34, move35, move36, move37, move38, move39, move40, move41, move42
      move43, move44, move45, move46, move47, move48, move49, move50, move51, move52, move53, move54, move55, move56, move57
      move58, move59, move60, move61, move62, move63, move64, normal, fire, water, electric, grass, ice, fighting,
      poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy FROM pokemon 
      JOIN movesets on pokemon.id = movesets.id
      JOIN types ON pokemon.type_1 = types.type1 AND pokemon.type_2 = types.type2
      WHERE pokemon.id = ?
      `, { replacements: [seed], type: db.sequelize.QueryTypes.SELECT }).then(function(dbPokemon) {

            db.sequelize.query(`
      select move, type, category, power, priority, multihit from pokemon_db.moves
      where locate( move, (select concat_ws(",", move1, move2, move3, move4, move5, move6, move7, move8, move9, move10, move11, move12,
            move13, move14, move15, move16, move17, move18, move19, move20, move21, move22, move23, move24, move25, move26, move27,
            move28, move29, move30, move31, move32, move33, move34, move35, move36, move37, move38, move39, move40, move41, move42,
            move43, move44, move45, move46, move47, move48, move49, move50, move51, move52, move53, move54, move55, move56, move57,
            move58, move59, move60, move61, move62, move63, move64) as 'moveString' from pokemon_db.movesets where id = ?));
      `, { replacements: [seed], type: db.sequelize.QueryTypes.SELECT }).then(function(moves) {
                var newPokemon = new api(dbPokemon, moves);
                res.json(newPokemon);
            });


        });
    });

    app.get("/", function(req, res) {
      //this loads up the static html file when the page is loaded
        // res.sendFile(path.join(__dirname, "../views/startPage.html"));

        //uncomment this out to try to load the page with handlebars
        res.render("index",null);
    });


};