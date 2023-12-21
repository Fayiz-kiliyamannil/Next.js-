
import { notFound } from "next/navigation"


export default function reviewId ({params}:{
    params:{
        productId:string,
        reviewId:string,
    }
}) {
  if(parseInt(params.reviewId) > 1000){
    return notFound()
  }

    return <h1> products Details {params.productId} and  review Details {params.reviewId} </h1>
}