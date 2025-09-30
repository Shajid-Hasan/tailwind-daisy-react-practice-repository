import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';
import link from './link';
const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];
const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='flex justify-between mx-20'>
            <span className='flex' onClick={() => setOpen(!open)}>


                {   
                    open?
                    <X className='md:hidden'></X> : 
                    <Menu className='md:hidden'></Menu>
                    
                }

                <ul>
                    {link}
                </ul>

                <h3 className='ml-4'>My Navbar</h3>
            </span>
            <ul className='flex justify-around gap-10'>
                {
                    navLinks.map(route => <Link key={route.id} route={route}></Link>)
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