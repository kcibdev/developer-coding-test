const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");

const createUser = async (parent, args, context, info) => {
  const { userName, userEmail, userPassword } = args.user;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(userPassword, salt);

  const createdUser = await User.create({
    userName,
    userEmail,
    userPassword: hashPassword,
  });

  return createdUser;
};

const getUser = async (parent, args, context, info) => {
  const { userId } = args;

  const user = await User.findByPk(userId);

  return user;
};

module.exports = {
  createUser,
  getUser,
};
