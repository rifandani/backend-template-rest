import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['info', 'error'],
});

export default prisma;
