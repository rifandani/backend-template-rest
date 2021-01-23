import { Request, Response } from 'express';

// GET /
export const getUsers = (req: Request, res: Response) => {
  res.status(200);
  res.json({ success: true, users: ['Tri', 'Rizeki', 'Rifandani'] });
};
