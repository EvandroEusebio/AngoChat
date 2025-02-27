'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Messages.belongsTo(models.Conversations, {
        foreignKey: 'conversationId',
        as: 'conversation',
      });
      Messages.belongsTo(models.User, {
        foreignKey: 'senderId',
        as: 'sender',
      });
    }
  }
  Messages.init({
    conversationId: DataTypes.INTEGER,
    senderId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    type: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};