interface props {
    params: Promise<{
     category: string ; 
     subcategory: string 
    }>
}

const Page = async ({params}:props) =>{
   const {category,subcategory} = await params;
    return (
        <div>
             Category {category} <br />
             subcategory {subcategory}
        </div>
    );
}

export default Page;