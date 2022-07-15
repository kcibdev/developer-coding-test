require("dotenv").config();
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const sequelize = require("./config/dbconn.js");
const User = require("./models/user.model.js");
const Article = require("./models/articles.model.js");

const typeDefs = require("./graphql/type.defs.js");
const resolvers = require("./graphql/resolvers.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  await apolloServer.applyMiddleware({ app });

  sequelize
    .sync()
    .then((result) => {
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    })
    .catch((err) => {
      console.log("Error syncing database", err);
    });
};

startServer();
