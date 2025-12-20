import { Suspense } from "react";
import { ProductList, ProductListSkeleton } from "@/modules/products/ui/components/product-list";
import { getQueryClient,trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ProductListView } from "@/modules/products/ui/components/views/product-list-view";
import { SearchParams } from "nuqs";
import { loadProductFilters } from "@/modules/products/search-params";


interface props {
    params: Promise<{
     subcategory: string ;  
    }>
      searchParams:Promise<SearchParams>;
};

const Page = async ({params,searchParams}:props) =>{
   const {subcategory} = await params;
   const filters = await loadProductFilters(searchParams);



   const queryclient = getQueryClient();
   void queryclient.prefetchQuery(trpc.products.getMany.queryOptions({
    category:subcategory,
    ...filters
   }
   ))

    return (
 <HydrationBoundary state={dehydrate(queryclient)}>
    <ProductListView category={subcategory}/>
    </HydrationBoundary>
    );
}
export default Page