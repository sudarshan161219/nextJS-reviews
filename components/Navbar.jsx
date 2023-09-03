import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className=' flex justify-between'>
            <Link href="/" className='font-orbitron font-bold'>INDIE_GAMER</Link>
            <ul className=' flex gap-5'>
                <li>
                    <Link className=' text-orange-800 hover:underline' href="/">Home</Link>
                </li>
                <li>
                    <Link className=' text-orange-800 hover:underline' href="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link className=' text-orange-800 hover:underline' href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar