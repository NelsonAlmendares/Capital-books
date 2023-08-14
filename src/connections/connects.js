import { createPool } from "mysql2/promise";
import { DB_USER, DB_HOST, DB_PASSWORD, DB_PORT, DB_DATABASE } from "../config.js";

export const pool = createPool({
    user :  DB_USER,
    host:DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    password:DB_PASSWORD,
});
