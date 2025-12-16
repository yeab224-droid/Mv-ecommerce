import { Suspense } from "react";
import { ProductList, ProductListSkeleton } from "@/modules/products/ui/components/product-list";
import { getQueryClient,trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";


interface props {
    params: Promise<{
     subcategory: string ;  
    }>
};

const Page = async ({params}:props) =>{
   const {subcategory} = await params;

   const queryclient = getQueryClient();
   void queryclient.prefetchQuery(trpc.products.getMany.queryOptions(
    {category:subcategory}
   ))

    return (
    <HydrationBoundary state={dehydrate(queryclient)}>
       <Suspense fallback={ <ProductListSkeleton/>}>
         <ProductList category={subcategory}/>
       </Suspense>
       
    </HydrationBoundary>
    );
}

export default Page;