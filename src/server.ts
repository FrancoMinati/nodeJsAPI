// fileName: server.ts
import express, { Request, Response } from "express";
import messageRouter from "./routes/messageRoutes";
import { logger } from "./middleware/loggerMiddleware";
import sequelize from "./config/database";
import userRouter from "./routes/api/users/userRoutes";
import DatabaseTables from "./models/DatabaseTables";

// Create an instance of Express
const app = express();

//-----------------  EXPOSED CONTROLLERS ---------------------------------//
app.use(logger);
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello, Express.js with TypeScript!</h1>");
});
app.use("/message", messageRouter);
app.use("/user", userRouter);
const port: number = 3000;

const startServer = async () => {
  try {
    const tables = DatabaseTables;
    console.log("Defining tables: " + tables);
    await sequelize.sync(); // Sync models with the database
    app.listen(port, () => {
      console.log(`Express server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to start the server:", error);
  }
};

startServer();
