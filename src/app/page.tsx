import Link from "next/link"

export default function home () {
return (
    <>
    <h1> Home page..!  </h1>
    <Link href='/blog' > blog </Link>
    <Link href='/product' > product </Link>
    </>
)
}