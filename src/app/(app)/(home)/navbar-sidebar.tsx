import Link  from "next/link";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
}from "@/components/ui/sheet";
import { ScrollArea } from  "@/components/ui/scroll-area";


interface navbarItem {
    href: string;
    children: React.ReactNode;
}
interface props{
    items: navbarItem[];
    open:boolean;
    onOpenChange:(open: boolean) => void;
}

export const NavbarSidebar = (
{items,
open,
onOpenChange,
}: props) =>  {
return (
    <Sheet open={open} onOpenChange={onOpenChange}>
     <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
             <SheetTitle >
                menu
             </SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
         {items.map((item) => (
            <Link  

            key={item.href}
            href={item.href}
            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        onClick={() => onOpenChange(false)}>
               {item.children}
            </Link>
         )) }
        <div className="border-t">
             <Link 
               onClick={() => onOpenChange(false)}
               href="/sign-in"
               className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium" onClick={() => onOpenChange(false)}>
                Log in 
             </Link>
             <Link 
               onClick={() => onOpenChange(false)}
                href="/sign-up" 
                className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                start selling
             </Link>
        </div>
        
        </ScrollArea>
     </SheetContent>
    </Sheet>
)
};