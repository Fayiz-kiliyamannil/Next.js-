import  Link from 'next/link'
export default function prouducts () {
    return (
        <div>
            <h1>All products </h1>
           <Link href='/product/1' > <h4>product  1 </h4></Link>
           <Link href='/product/2' > <h4>product  2 </h4></Link>
           <Link href='/product/3' > <h4>product  3 </h4></Link>
           <Link href='/product/4' > <h4>product  4 </h4></Link>
           <Link href='/product/5' > <h4>product  5 </h4></Link>
           <Link href='/product/6' > <h4>product  6 </h4></Link>
        </div>
    )
}