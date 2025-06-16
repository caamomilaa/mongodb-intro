const UserModel = require('../models/user.model');

const usersController = {};

usersController.getAllUsers = async (req, res) => {
  const allUsers = await UserModel.find();
  res.send(allUsers);
};

module.exports = usersController;
