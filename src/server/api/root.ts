import { musingsRouter } from "~/server/api/routers/musings";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  musings: musingsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
