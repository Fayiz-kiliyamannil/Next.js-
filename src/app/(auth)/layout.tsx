'use client'
import Link from "next/link"
import '../styles.css'
import { usePathname } from "next/navigation"




const navigation = [
    { name: 'login', href: '/login' },
    { name: 'register', href: "/register" },
    { name: 'forgot-password', href: "/forgot-password" }
]


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    return (

        <>

            {
                navigation.map((obj) => {
                    const isActive = pathname.startsWith(obj.href)
                    return (
                        < Link className={isActive ? "text-red-500 p-2" : '"text-gray-900 p-2 text-center"'}
                            key={obj.name} href={obj.href} >
                            {obj.name}
                        </Link >
                    )
                })
            }

            <h4> Auth page  </h4>
            {children}

        </>

    )
}