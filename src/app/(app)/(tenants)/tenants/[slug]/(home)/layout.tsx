import { DEFAULT_LIMIT } from "@/constants";
import { Footer } from "@/modules/tenants/components/ui/footer";
import { Navbar, NavbarSkeleton } from "@/modules/tenants/components/ui/navbar";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

interface LayoutProps {
    children: React.ReactNode;
    params:Promise<{slug: string}>
}

const Layout = async ({children, params}:LayoutProps)=>{
    const {slug} = await params;
    const queryclient = getQueryClient();
       void queryclient.prefetchQuery(trpc.tenants.getOne.queryOptions({
       slug,
       }));
    
    return (
    <div className="min-h-screen bg-[#f4f4f0] flex flex-col"  >
        <HydrationBoundary state={dehydrate(queryclient)}>
            <Suspense fallback={<NavbarSkeleton />}>
                <Navbar slug={slug} />
                </Suspense>
   </HydrationBoundary>
   <div className="flex-1">
   <div className="max-w-(--breakpoint-xl) mx-auto ">
   {children}
   </div>
</div>
   <Footer />
    </div>
    )
}
export default Layout;