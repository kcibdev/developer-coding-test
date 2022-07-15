const Article = require("../models/articles.model.js");

const createArticle = async (parent, args, context, info) => {
  const { userId, articleTitle, articleDescription } = args.article;

  const createdArticle = await Article.create({
    userId,
    articleTitle,
    articleDescription,
  });

  return createdArticle;
};

const getArticle = async (parent, args, context, info) => {
  const articles = await Article.findAll();

  return articles;
};

module.exports = {
  createArticle,
  getArticle,
};
