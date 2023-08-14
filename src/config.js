import { config } from "dotenv";
config(); // load .env file into process.env variables

export const PORT = process.env.PORT || 3005;
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.BD_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_LIBRARY || 'LIBRARY'
