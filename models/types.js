/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Types = sequelize.define('types', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    type1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    normal: {
      type: "DOUBLE",
      allowNull: true
    },
    fire: {
      type: "DOUBLE",
      allowNull: true
    },
    water: {
      type: "DOUBLE",
      allowNull: true
    },
    electric: {
      type: "DOUBLE",
      allowNull: true
    },
    grass: {
      type: "DOUBLE",
      allowNull: true
    },
    ice: {
      type: "DOUBLE",
      allowNull: true
    },
    fighting: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    poison: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ground: {
      type: "DOUBLE",
      allowNull: true
    },
    flying: {
      type: "DOUBLE",
      allowNull: true
    },
    psychic: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    bug: {
      type: "DOUBLE",
      allowNull: true
    },
    rock: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ghost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dragon: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dark: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    steel: {
      type: "DOUBLE",
      allowNull: true
    },
    fairy: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'types',
    timestamps: false
  });
  Types.associate = function(db) {
   Types.belongsToMany(db.types, {through: 'type1',  as: "Types", otherkey:"type_1"});
  };
  return Types;
};