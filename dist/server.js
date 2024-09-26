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
// fileName: server.ts
const express_1 = __importDefault(require("express"));
const messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
const loggerMiddleware_1 = require("./middleware/loggerMiddleware");
const database_1 = __importDefault(require("./config/database"));
const userRoutes_1 = __importDefault(require("./routes/api/users/userRoutes"));
const DatabaseTables_1 = __importDefault(require("./models/DatabaseTables"));
// Create an instance of Express
const app = (0, express_1.default)();
//-----------------  EXPOSED CONTROLLERS ---------------------------------//
app.use(loggerMiddleware_1.logger);
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("<h1>Hello, Express.js with TypeScript!</h1>");
});
app.use("/message", messageRoutes_1.default);
app.use("/user", userRoutes_1.default);
const port = 3000;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tables = DatabaseTables_1.default;
        console.log("Defining tables: " + tables);
        yield database_1.default.sync(); // Sync models with the database
        app.listen(port, () => {
            console.log(`Express server is running on port ${port}`);
        });
    }
    catch (error) {
        console.error("Unable to start the server:", error);
    }
});
startServer();
//# sourceMappingURL=server.js.map