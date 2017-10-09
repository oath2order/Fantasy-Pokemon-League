/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moves', {
    move: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    power: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    accuracy: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'moves',
    timestamps: false
  });
};
