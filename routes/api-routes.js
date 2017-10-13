// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var api = require("../api/pokeconst")

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/test", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.pokemon.findAll({
      include: [db.movesets],
      where: {
        type_1: "Grass",
        type_2: "Ghost"
      }
    }).then(function(dbPokemon) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbPokemon);
    });
  });

  app.get("/test2", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.pokemon.findAll({
      include: [{
        model: db.types,
        on: {
          col1: db.sequelize.where(db.sequelize.col("pokemon.type_1"), "=", db.sequelize.col("types.type1")),
          col2: db.sequelize.where(db.sequelize.col("pokemon.type_2"), "=", db.sequelize.col("types.type2"))
        }
      }],
      where: {
        type_1: "Grass",
        type_2: "Ghost"
      }
    }).then(function(dbPokemon) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbPokemon);
    });
  });



  app.get("/", function(req, res) {
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
      select move, type, category, power from pokemon_db.moves
      where locate( move, (select concat_ws(",", move1, move2, move3, move4, move5, move6, move7, move8, move9, move10, move11, move12,
            move13, move14, move15, move16, move17, move18, move19, move20, move21, move22, move23, move24, move25, move26, move27,
            move28, move29, move30, move31, move32, move33, move34, move35, move36, move37, move38, move39, move40, move41, move42,
            move43, move44, move45, move46, move47, move48, move49, move50, move51, move52, move53, move54, move55, move56, move57,
            move58, move59, move60, move61, move62, move63, move64) as 'test' from pokemon_db.movesets where id = ?));
      `, { replacements: [seed], type: db.sequelize.QueryTypes.SELECT }).then(function(moves) {
            var newPokemon = new api(dbPokemon, moves);
            res.json(newPokemon);
      });


    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Todo.create({
        text: req.body.text,
        complete: req.body.complete
      }).then(function(dbTodo) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbTodo);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update({
        text: req.body.text,
        complete: req.body.complete
      }, {
        where: {
          id: req.body.id
        }
      }).then(function(dbTodo) {
        res.json(dbTodo);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};