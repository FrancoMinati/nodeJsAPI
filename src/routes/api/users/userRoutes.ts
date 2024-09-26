
import { CreateUserRequest } from "../../../interfaces/UserRequest";
import { Router, Request, Response } from 'express';
import { createUserService } from "../../../service/user/userService";

// Create a new router instance
const userRouter: Router = Router();
// Controller example using both

userRouter.post('/save', async (req: Request<CreateUserRequest>, res: Response) => {
    const data:CreateUserRequest = req.body; // Access request body
  try {
        const newUser = await createUserService(data);
        res.status(201).json({
            user: newUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error });
    }
});

export default userRouter;