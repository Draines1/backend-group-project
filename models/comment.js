'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Chore, {
        foreignKey: 'itemID'
      }),
      Comment.belongsTo(models.User, {
        foreignKey: 'userID'
      })
    }
  };
  Comment.init({
    itemID: {
      type: DataTypes.STRING,
      references: 'Chore',
      key: 'id'
    },
    userID: {
      type: DataTypes.STRING,
      references: 'User',
      key: 'id'
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};