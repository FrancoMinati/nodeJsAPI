"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/config/database.ts
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables from .env file
dotenv_1.default.config({ path: path_1.default.join(__dirname, '../../resources/.env') });
const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'your_username';
const dbPort = process.env.DB_PORT || '3306'; // Use default MySQL port if not set
const dbPassword = process.env.DB_PASSWORD || 'your_password';
const dbName = process.env.DB_NAME || 'your_database';
// Create a new instance of Sequelize
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: Number(dbPort),
    dialect: 'mysql', // Ensure this matches your database
});
// Test the database connection
sequelize.authenticate()
    .then(() => {
    console.log('Database connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
exports.default = sequelize;
//# sourceMappingURL=database.js.map