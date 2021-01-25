import { Request, Response, NextFunction } from 'express';

// GET /
export const getHome = (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
  res.json({ success: true, msg: 'Welcome to /home' });
};
