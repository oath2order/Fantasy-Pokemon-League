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


  //THI will not work, returns a random Id
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    var seed = Math.floor(Math.random() * 802) + 1;
    db.sequelize.query(`
      SELECT * FROM pokemon 
      JOIN movesets on pokemon.id = movesets.id
      JOIN types ON pokemon.type_1 = types.type1 AND pokemon.type_2 = types.type2
      WHERE pokemon.id = ?
      `, { replacements: [seed], type: db.sequelize.QueryTypes.SELECT }).then(function(dbPokemon) {
        var newPokemon = new api(dbPokemon);
        console.log(newPokemon);
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