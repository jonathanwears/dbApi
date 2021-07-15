import mongoose from 'mongoose';
import config from './config.js';

async function connectToDb() {
  try {
    await mongoose.connect(`mongodb+srv://${config.dbHost}${config.dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(`error from connect.js: ${err}`);
  }
}

export default connectToDb;
