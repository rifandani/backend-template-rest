import { Request, Response, NextFunction } from 'express';

// GET /
export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
  res.json({ success: true, users: ['Tri', 'Rizeki', 'Rifandani'] });
};
