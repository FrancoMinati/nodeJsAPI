import { Request, Response, NextFunction } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); // Pass control to the next middleware or route handler
};
