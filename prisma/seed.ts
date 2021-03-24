import { name, random } from 'faker';
// files
import prisma from '../src/services/prismaClient';
let timeout: NodeJS.Timeout;

// A `seed` function so that we can use async/await
async function seed(num: number) {
  for (let i = 0; i < num; i++) {
    timeout = setTimeout(async () => {
      const user = await prisma.user.create({
        data: {
          name: name.findName(),
          age: random.number(70),
        },
      });

      console.log(`new user created`, user.id);
    }, 1000);
  }
}

seed(10)
  .catch((e) => {
    clearTimeout(timeout);
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    clearTimeout(timeout);
    await prisma.$disconnect();
  });
