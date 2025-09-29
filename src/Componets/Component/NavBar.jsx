import React from 'react';

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];
const NavBar = () => {
    return (
        <nav>
            <ul className='flex gap-10 text-2xl'>
                {
                    navLinks.map(route=> <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
            {/* <ul className='flex justify-around text-center'>
                <li><a href="/"></a>Home</li>
                <li><a href="/"></a>About</li>
                <li><a href="/"></a>Blog</li>
            </ul> */}
        </nav>


    );
};

export default NavBar;