"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Conversations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Conversations.hasMany(models.Messages, {
        foreignKey: "conversationId",
        as: "messages",
      });
    }
  }
  Conversations.init(
    {
      type: DataTypes.ENUM(["private", "group"]),
    },
    {
      sequelize,
      modelName: "Conversations",
    }
  );
  return Conversations;
};
