"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.Note = exports.User = void 0;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Note_1 = __importDefault(require("./Note"));
exports.Note = Note_1.default;
const Category_1 = __importDefault(require("./Category"));
exports.Category = Category_1.default;
// Define relationships
User_1.default.hasMany(Note_1.default, { foreignKey: 'userId' });
Note_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
Note_1.default.belongsToMany(Category_1.default, { through: 'NoteCategories' });
Category_1.default.belongsToMany(Note_1.default, { through: 'NoteCategories' });
//# sourceMappingURL=Relations.js.map