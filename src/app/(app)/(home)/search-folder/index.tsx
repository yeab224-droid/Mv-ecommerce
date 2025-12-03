import { SearchInput } from "./search-input";
import { Categories } from "./categories";
interface props {
    data: any;
}

export const SearchFilters = ({data}: props) =>{
    return (
        <div className="px-4 lg:px-12 py-8 flex flex-col gap-4 w-full"> 
        <SearchInput />
        <Categories data={data} />
            </div>
    )
}