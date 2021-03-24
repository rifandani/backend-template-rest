import { Request, Response } from 'express';
// files
import prisma from '../services/prismaClient';
import logger from '../utils/winstonLogger';

// GET /users
export const getUsers = async (_: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();

    res.status(200);
    res.json({ success: true, users });
  } catch (err) {
    logger.error('GET /users prisma error');
    res.status(500);
    res.json({ success: false, msg: err.message, err });
  } finally {
    await prisma.$disconnect();
  }
};

// GET /users/:id
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(req.params?.id),
      },
    });

    res.status(200);
    res.json({ success: true, user });
  } catch (err) {
    logger.error('GET /users/:id prisma error');
    res.status(500);
    res.json({ success: false, msg: err.message, err });
  } finally {
    await prisma.$disconnect();
  }
};

// POST /users
export const postUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, age } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        age,
      },
    });

    res.status(200);
    res.json({ success: true, user });
  } catch (err) {
    logger.error('POST /users prisma error');
    res.status(500);
    res.json({ success: false, msg: err.message, err });
  } finally {
    await prisma.$disconnect();
  }
};

// PUT /users/:id
export const putUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, age } = req.body;

    // TODO: check first if user exists biar gak error 500

    const user = await prisma.user.update({
      where: {
        id: parseInt(req.params?.id),
      },
      data: {
        name,
        age,
      },
    });

    res.status(200);
    res.json({ success: true, user });
  } catch (err) {
    logger.error('PUT /users/:id prisma error');
    res.status(500);
    res.json({ success: false, msg: err.message, err });
  } finally {
    await prisma.$disconnect();
  }
};

// DELETE /users/:id
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // TODO: check first if user exists biar gak error 500

    const user = await prisma.user.delete({
      where: {
        id: parseInt(req.params?.id),
      },
    });

    res.status(200);
    res.json({ success: true, user });
  } catch (err) {
    logger.error('DELETE /users/:id prisma error');
    res.status(500);
    res.json({ success: false, msg: err.message, err });
  } finally {
    await prisma.$disconnect();
  }
};
