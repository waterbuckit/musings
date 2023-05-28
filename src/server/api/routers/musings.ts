import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const musingsRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.musing.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.musing.findMany({
      orderBy: {
        writtenAt: "desc",
      },
      select: {
        title: true,
        author: true,
        writtenAt: true,
        id: true,
      },
    });
  }),
});
