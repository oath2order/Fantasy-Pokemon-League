/* jshint indent: 2 */
    // timestamps: false,
    // createdAt: false,

    // updatedAt: false,
module.exports = function(sequelize, DataTypes) {
  var Pokemon = sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    type_1: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    type_2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    hp: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    attack: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    spec_attack: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    defense: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    spec_defense: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dex_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dex_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    preevolution: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'pokemon',
    timestamps: false
  });

  Pokemon.associate = function(models) {
    Pokemon.hasMany(models.movesets, {foreignKey: 'id'});
    
  };

    Pokemon.associate = function(models) {
    Pokemon.belongsToMany(models.types, {through: 'type1', as: "Types", otherkey:"type_1"});
  };
  return Pokemon;
};
