// src/config/database.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import Note from '../models/Note';
import User from '../models/User';
import Category from '../models/Category';


// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../../resources/.env') });

const dbHost: string = process.env.DB_HOST || 'localhost';
const dbUser: string = process.env.DB_USER || 'your_username';
const dbPort: string = process.env.DB_PORT || '3306'; // Use default MySQL port if not set
const dbPassword: string = process.env.DB_PASSWORD || 'your_password';
const dbName: string = process.env.DB_NAME || 'your_database';



// Create a new instance of Sequelize
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
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

export default sequelize;
