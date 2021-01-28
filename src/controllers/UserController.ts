import {
  Request,
  Response,
  // NextFunction
} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /users
export const getUsers = async (
  req: Request,
  res: Response
  // next: NextFunction
): Promise<void> => {
  try {
    const users = await prisma.user.findMany();

    res.status(200);
    res.json({ success: true, users });
  } catch (err) {
    res.status(500);
    res.json({ success: false, msg: err.message, err });
  } finally {
    await prisma.$disconnect();
  }
};

// GET /users/:id
export const getUser = async (
  req: Request,
  res: Response
  // next: NextFunction
): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(req.params?.id),
      },
    });

    res.status(200);
    res.json({ success: true, user });
  } catch (err) {
    res.status(500);
    res.json({ success: false, msg: err.message, err });
  } finally {
    await prisma.$disconnect();
  }
};

// POST /users
export const postUser = async (
  req: Request,
  res: Response
  // next: NextFunction
): Promise<void> => {
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
    res.status(500);
    res.json({ success: false, msg: err.message, err });
  } finally {
    await prisma.$disconnect();
  }
};

// PUT /users/:id
export const putUser = async (
  req: Request,
  res: Response
  // next: NextFunction
): Promise<void> => {
  try {
    const { name, age } = req.body;

    // TODO: check first if user exists

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
  // next: NextFunction
): Promise<void> => {
  try {
    // TODO: check first if user exists

    const user = await prisma.user.delete({
      where: {
        id: parseInt(req.params?.id),
      },
    });

    res.status(200);
    res.json({ success: true, user });
  } catch (err) {
    res.status(500);
    res.json({ success: false, msg: err.message, err });
  } finally {
    await prisma.$disconnect();
  }
};
