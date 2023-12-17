export default function reviewId ({params}:{
    params:{
        productId:string,
        reviewId:string,
    }
}) {
    return <h1> products Details {params.productId} and  review Details {params.reviewId}  </h1>
}