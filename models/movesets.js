/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Movesets = sequelize.define('movesets', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    species: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move9: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move10: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move11: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move12: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move13: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move14: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move15: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move16: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move17: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move18: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move19: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move20: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move21: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move22: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move23: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move24: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move25: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move26: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move27: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move28: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move29: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move30: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move31: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move32: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move33: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move34: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move35: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move36: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move37: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move38: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move39: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move40: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move41: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move42: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move43: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move44: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move45: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move46: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move47: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move48: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move49: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move50: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move51: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move52: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move53: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move54: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move55: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move56: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move57: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move58: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move59: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move60: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move61: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move62: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move63: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move64: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'movesets',
    timestamps: false
  });

  Movesets.associate = function(db) {
   Movesets.belongsTo(db.pokemon, {foreignKey: 'id'});
  };

  return Movesets;
};
