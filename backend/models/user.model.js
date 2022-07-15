const Sequelize = require("sequelize");
const sequelize = require("../config/dbconn.js");

const User = sequelize.define("user", {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userPassword: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
