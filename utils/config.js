import dotenv from 'dotenv';

dotenv.config();

const config = {};

config.dbHost = process.env.DB_HOST;
config.dbName = process.env.DB_NAME;

export default config;
