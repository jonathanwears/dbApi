import User from './models/User';

const userController = {};

userController.registerUser = async((req, res) => {
  try {
    await User.registerUser(req);
  } catch (err) {
    console.log(err);
  }
}); 
