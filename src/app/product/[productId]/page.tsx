export default function productId ({params}:{
    params:{
        productId:string
    }
} ) {
    return <h1> {params.productId} product Details </h1>
}