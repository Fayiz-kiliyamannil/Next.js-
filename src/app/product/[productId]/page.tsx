import { Metadata } from "next"

type Props={
    params:{
        productId:string
    }
}

export const  generateMetaData = ({params}:Props) : Metadata=>{
    return{
        title:`product ${params.productId}`
    }
}


export default function productId ({params}:Props)
 {
    return (

        <h1> {params.productId} product Details... </h1>
        
    )
}