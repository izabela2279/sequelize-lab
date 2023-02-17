'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Walk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Walk.belongsTo(models.Dog, {
        foreignKey: 'dogId',
      })
    }
  }
  Walk.init({
    name: DataTypes.STRING,
    walk: {
      type: DataTypes.ENUM('Morning', 'Noon', 'Evening'),
      defaultValue: 'Noon'
    },
    dogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Dogs',
        key: 'id'      
      }
    }
  }, {
    sequelize,
    modelName: 'Walk',
  });
  return Walk;
};