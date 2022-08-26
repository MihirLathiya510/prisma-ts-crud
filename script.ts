import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({ data: { name: "nikhil" } }); // creation
  await prisma.user.delete({
    where: {
      id: 7,
    },
  }); // delete
  await prisma.user.findMany(); // update
  await prisma.user.update({
    where: {
      id: 5,
    },
    data: {
      name: "ashit",
    },
  }); // update
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
