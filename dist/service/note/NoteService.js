"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotes = exports.createNote = void 0;
const Category_1 = __importDefault(require("../../models/Category"));
const Note_1 = __importDefault(require("../../models/Note"));
const User_1 = __importDefault(require("../../models/User"));
const createNote = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newNote = yield Note_1.default.create(data);
    return newNote;
});
exports.createNote = createNote;
const getNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield Note_1.default.findAll({
        include: [{ model: User_1.default }, { model: Category_1.default }],
    });
    return notes;
});
exports.getNotes = getNotes;
//# sourceMappingURL=NoteService.js.map