import { Suspense } from "react";
import { ProductList, ProductListSkeleton } from "@/modules/products/ui/components/product-list";
import { getQueryClient,trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ProductFilters } from "@/modules/products/ui/components/products-filters";


interface props {
    params: Promise<{
     category: string ;  
    }>
};

const Page = async ({params}:props) =>{
   const {category} = await params;

   const queryclient = getQueryClient();
   void queryclient.prefetchQuery(trpc.products.getMany.queryOptions(
    {category}
   ))

    return (
    <HydrationBoundary state={dehydrate(queryclient)}>
      <div className="px-4 lg:px-12 py-8 flex flex-col gap-4">
    <div  className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-12">
      <div className="lg:col-span-2 xl:col-span-2">
       <ProductFilters />
       </div>
           <div className="lg:col-span-4 xl:col-span-6">
       <Suspense fallback={ <ProductListSkeleton/>}>
         <ProductList category={category}/>
       </Suspense>
       </div>

    </div>
  </div>
    </HydrationBoundary>
    );
}

export default Page;