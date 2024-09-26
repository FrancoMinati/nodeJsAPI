// src/services/categoryService.ts

import Category from "../../models/Category";


export const createCategory = async (data: any) => {
    const newCategory = await Category.create(data);
    return newCategory;
};

export const getCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};
