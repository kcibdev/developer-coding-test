const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    userId: Int
    userName: String
    userEmail: String
    userPassword: String
  }

  input UserInput {
    userName: String
    userEmail: String
    userPassword: String
  }

  type Article {
    articleId: Int
    userId: Int
    articleTitle: String
    articleDescription: String
    createdAt: String
  }

  input ArticleInput {
    userId: Int
    articleTitle: String
    articleDescription: String
  }

  type Query {
    hello: String
    getArticle: [Article]
  }

  type Mutation {
    createUser(user: UserInput): User
    getUser(userId: Int): User

    createArticle(article: ArticleInput): Article
  }
`;

module.exports = typeDefs;
