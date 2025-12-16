interface props {
    params: Promise<{
     category: string ;  
    }>
}

const Page = async ({params}:props) =>{
   const {category} = await params;
    return (
        <div>
            Category{category} Page
        </div>
    );
}

export default Page;