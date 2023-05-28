import { PrismaClient } from '@prisma/client'
import conf from '../package.json'
import fs from 'fs';
import { z } from 'zod';

const prisma = new PrismaClient()

const musingImportSchema = z.object({
  title: z.string(),
  body: z.string(),
  writtenAt: z.string().datetime(),
  author: z.string().refine((val) => val === 'Adam' || val === 'Stella'),
}).array();

const main = () => {
  if (!conf.seedPath) {
    throw new Error('Seed path not defined');
  }

  // validate seed path data
  const data = fs.readFileSync(conf.seedPath, 'utf-8');

  const musings = musingImportSchema.parse(JSON.parse(data));
  console.log(musings)

  return Promise.all(
    musings.map(async (musing) => {
      await prisma.musing.create({
        data: {
          title: musing.title,
          body: musing.body,
          writtenAt: musing.writtenAt,
          author: musing.author,
        },
      });
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })