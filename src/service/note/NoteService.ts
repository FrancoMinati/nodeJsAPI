import Category from "../../models/Category";
import Note from "../../models/Note";
import User from "../../models/User";



export const createNote = async (data: any) => {
    const newNote = await Note.create(data);
    return newNote;
};

export const getNotes = async () => {
    const notes = await Note.findAll({
        include: [{ model: User }, { model: Category }],
    });
    return notes;
};
