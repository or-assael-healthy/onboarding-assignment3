const User = require("../db").models.User;
const { Op } = require("sequelize");
const messenger = require("../messenger");
const routingKeys = require("../enums/routingKeys");

const createUser = async (name, phoneNumber, email) => {
  const isUserExists = await User.findOne({
    where: {
      [Op.or]: [{ email: email }, { phoneNumber: phoneNumber }],
    },
  });
  if (isUserExists) {
    throw new Error("User already exists");
  }
  const userCreated = await User.create({
    fullName: name,
    email: email,
    phoneNumber: phoneNumber,
  });
  await messenger.publish({
    exchangeName: process.env.EXCHANGE_NAME,
    routingKey: routingKeys.USER_CREATED,
    payload: userCreated,
  });
  return userCreated;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const deleteUser = async (id) => {
  await User.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  deleteUser,
};
