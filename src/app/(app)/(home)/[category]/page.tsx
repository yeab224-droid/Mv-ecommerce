
import { SearchParams } from "nuqs/server";
import { getQueryClient,trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { loadProductFilters } from "@/modules/products/search-params";
import { ProductListView } from "@/modules/products/ui/components/views/product-list-view";
import { DEFAULT_LIMIT } from "@/constants";

interface props {
    params: Promise<{
     category: string ;  
    }>,
    searchParams:Promise<SearchParams>;
};

const Page = async ({params,searchParams}:props) =>{
   const {category} = await params;
   const filters = await loadProductFilters(searchParams);



   const queryclient = getQueryClient();
   void queryclient.prefetchInfiniteQuery(trpc.products.getMany.infiniteQueryOptions({
    category,
    ...filters,
    limit:DEFAULT_LIMIT,
   }));

    return (
 <HydrationBoundary state={dehydrate(queryclient)}>
    <ProductListView category={category}/>
    </HydrationBoundary>
    );
}

export default Page;