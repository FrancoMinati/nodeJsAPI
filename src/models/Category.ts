// src/models/Category.ts
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database"; // Import your database configuration

class Category extends Model {
  public id!: string; // UUID
  public name!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Category',
  }
);

export default Category;
