
import { authRouter } from '@/modules/categories/auth/server/procedures';
import {  createTRPCRouter } from '../init';
import { productsRouter } from '@/modules/products/server/procedure';
import { categoriesRouter } from '@/modules/categories/server/procedure';
import { tagsRouter } from '@/modules/tags/server/procedure';


export const appRouter = createTRPCRouter({
  auth: authRouter,
  tags:tagsRouter,
  products:productsRouter,
  categories: categoriesRouter,
  
});
// export type definition of API
export type AppRouter = typeof appRouter;