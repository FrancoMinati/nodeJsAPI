// src/models/Note.ts
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database"; // Import your database configuration
import Category from "./Category";
import User from "./User";

class Note extends Model {
  public id!: string; // UUID
  public header!: string;
  public text!: string;
  public date!: string; // Format: dd/mm/yyyy
  public title!: string;
  public statusActive!: boolean; // Soft delete
  public userId!: string; // Foreign key for User

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Note.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    header: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statusActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Assume true means active
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false, // Ensure this is required for the relationship
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Note",
  }
);

// Define relationships
Note.belongsTo(User, { foreignKey: "userId" }); // One Note belongs to one User
User.hasMany(Note, { foreignKey: "userId" }); // One User can have many Notes
Note.hasMany(Category, { foreignKey: "noteId" }); // Assuming noteId is the foreign key in the Category model
Category.belongsTo(Note, { foreignKey: "noteId" });

export default Note;
