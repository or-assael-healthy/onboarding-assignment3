const User = require("../db").models.User;

const createUser = async (name, phoneNumber, email) => {
  const userCreated = await User.create({
    fullName: name,
    email: email,
    phoneNumber: phoneNumber,
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
