const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String
  },
  { timestamps: true, collection: 'usersCollection' }
);

const UserModel = mongoose.model('User', userSchema); //para que js pueda entender el esquema

module.exports = UserModel;
