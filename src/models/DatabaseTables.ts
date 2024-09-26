import Category from "./Category";
import Note from "./Note";
import User from "./User";

interface DatabaseTables {
    User: typeof User;
    Note: typeof Note;
    Category: typeof Category;
}

export default {User,Category,Note} as DatabaseTables;