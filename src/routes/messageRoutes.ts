// fileName: userRoutes.ts
import { Router, Request, Response } from 'express';

// Create a new router instance
const messageRouter: Router = Router();

// Define a route for the root path
messageRouter.get('/', (req: Request, res: Response) => {
    
    res.send('this is messagery route');
});

messageRouter.get('/:id', (req: Request, res: Response) => {
    const messageId = req.params.id; // Access path parameter
    res.send(`Message ID: ${messageId}`); // Respond with user ID
});

// Export the router module so that it can be used in other files
export default messageRouter;
