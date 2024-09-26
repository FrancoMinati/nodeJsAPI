"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Note.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database")); // Import your database configuration
const Category_1 = __importDefault(require("./Category"));
const User_1 = __importDefault(require("./User"));
class Note extends sequelize_1.Model {
}
Note.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    header: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    statusActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true, // Assume true means active
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false, // Ensure this is required for the relationship
        references: {
            model: User_1.default,
            key: "id",
        },
    },
}, {
    sequelize: database_1.default,
    modelName: "Note",
});
// Define relationships
Note.belongsTo(User_1.default, { foreignKey: "userId" }); // One Note belongs to one User
User_1.default.hasMany(Note, { foreignKey: "userId" }); // One User can have many Notes
Note.hasMany(Category_1.default, { foreignKey: "noteId" }); // Assuming noteId is the foreign key in the Category model
Category_1.default.belongsTo(Note, { foreignKey: "noteId" });
exports.default = Note;
//# sourceMappingURL=Note.js.map