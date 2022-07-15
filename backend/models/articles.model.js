const Sequelize = require("sequelize");
const sequelize = require("../config/dbconn.js");

const Article = sequelize.define("article", {
  articleId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  articleTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  articleDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Article;
