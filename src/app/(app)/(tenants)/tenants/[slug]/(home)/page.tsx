import { DEFAULT_LIMIT } from "@/constants";
import { loadProductFilters } from "@/modules/products/search-params";
import { ProductListView } from "@/modules/products/ui/components/views/product-list-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { SearchParams } from "nuqs/server";

interface Props {
 SearchParams: Promise<SearchParams>;
 params: Promise<{ slug: string }>;
}

const Page = async ({ SearchParams, params }: Props) => {
const {slug} = await params;
const filters = await loadProductFilters(SearchParams)
const queryclient = getQueryClient();
   void queryclient.prefetchInfiniteQuery(trpc.products.getMany.infiniteQueryOptions({
   
    ...filters,
    tenantSlug: slug,
    limit:DEFAULT_LIMIT,
   }));

  return(
    
 <HydrationBoundary state={dehydrate(queryclient)}>
    <ProductListView tenantSlug={slug}/>
    </HydrationBoundary>
  )

}
export default Page