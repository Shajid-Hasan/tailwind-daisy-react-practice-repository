import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];
const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navLinks.map(route => <Link key={route.id} route={route}></Link>)


    return (
        <nav className='flex justify-between mx-10 mt-4 mb-60'>
            <span className='flex' onClick={() => setOpen(!open)}>


                {   
                    open?
                    <X className='md:hidden'></X> : 
                    <Menu className='md:hidden'></Menu>
                }

                <ul className={`md:hidden absolute duration-1000 text-black
                    ${open ? 'top-12' : '-top-60'}
                    bg-amber-200`}>
                    {links}
                </ul>

                <h3 className='ml-4'>My Navbar</h3>

            </span>

            <ul className='md:flex justify-around gap-10 hidden'>
                {
                    links
                }
            </ul>
            {/* <ul className='flex gap-10 text-2xl'>
                {
                    navLinks.map(route=> <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
            {/* <ul className='flex justify-around text-center'>
                <li><a href="/"></a>Home</li>
                <li><a href="/"></a>About</li>
                <li><a href="/"></a>Blog</li>
            </ul> */}
            <button>Sign In</button>
        </nav>


    );
};

export default NavBar;