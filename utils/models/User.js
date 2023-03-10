import Mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
})

const UserModel = Mongoose.model('user', userSchema);

UserModel.createUser = (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    const newUser = new UserModel({
      email: email,
      password: hash,
    });
    newUser.save();
  });
};

UserModel.login = (req, res) => {

}

