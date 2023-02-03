const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// create our Tag model
class Tag extends Model {}

// create fields/columns for tag model
// mini project models/location
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
