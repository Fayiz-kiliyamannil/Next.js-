export default function documents({params}:{
    params:{
    slug:string
    }
}){
    if(params.slug?.length === 2){
        return   <h1> params slung page... {params.slug[1]}..........{params.slug[0]} </h1>    
    }else if(params.slug?.length === 1){
        return   <h1> params slung page... {params.slug[0]} ....... </h1>    }
        
        return <h1> doc home page.... </h1>
        
}

