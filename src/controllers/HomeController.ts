import { Request, Response } from 'express';

// GET /
export const getHome = (req: Request, res: Response) => {
  res.status(200);
  res.json({ success: true, msg: 'Welcome to /home' });
};
