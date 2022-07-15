const { gql } = require("apollo-server-express");

const User = require("../models/user.model.js");
const { createUser, getUser } = require("../controllers/user.controller.js");
const {
  createArticle,
  getArticle,
} = require("../controllers/articles.controller.js");

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getArticle: getArticle,
  },
  Mutation: {
    createUser: createUser,
    getUser: getUser,
    createArticle: createArticle,
  },
};

module.exports = resolvers;
