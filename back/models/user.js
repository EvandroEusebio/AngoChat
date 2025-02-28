"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Messages, {
        foreignKey: "senderId",
        onDelete: "CASCADE",
        as: "messages",
      });
      User.belongsToMany(models.Conversations, {
        through: "Participants",
        as: "chats",
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: {
        type: DataTypes.INTEGER,
        validate: {
          len: [9, 11],
          isUnique: async function (value) {
            const user = await User.findOne({ where: { phone: value } });
            if (user) {
              throw new Error("Este Numero já existe");
            }
          },
        },
      },
      about: DataTypes.STRING,
      age: DataTypes.STRING,
      picture: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
