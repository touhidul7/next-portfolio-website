import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menus = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "Experience",
            path: "/experience"
        },
        {
            name: "Technologies",
            path: "/technology"
        },
        /*   {
              name:"Resume",
              path:"/resume"
          }, */
        {
            name: "Contact",
            path: "/contact"
        },
    ]
    return (

        <>
            {/* Navbar for Desktop */}
            <div className="absolute top-0 right-0 lg:block hidden">
                <ul className='flex justify-between items-center  bg-[#282829] gap-[1px] px-4 rounded-tr-xl rounded-bl-xl'>
                    {menus.map((menu, i) => (
                        <Link className='bg- p-4 w-full text-center' href={menu.path} key={i}>{menu.name}</Link>
                    ))}
                </ul>
            </div>

            {/* Navbar for Mobile */}
            <div className="absolute top-0 right-0 w-full z-50">

                {/* Mobile Hamburger */}
                <div className="lg:hidden flex justify-end items-center p-4">
                    <button
                        aria-label="Open menu"
                        className="focus:outline-none"
                        onClick={() => setOpen(true)}
                    >
                        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Slider Menu */}
                <div className={`fixed top-0 right-0 h-full w-2/3 bg-[#282829] shadow-lg z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                    <div className="flex justify-end p-4">
                        <button
                            aria-label="Close menu"
                            className="focus:outline-none"
                            onClick={() => setOpen(false)}
                        >
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col items-center gap-4 mt-8">
                        {menus.map((menu, i) => (
                            <Link className="p-4 w-full text-center text-lg" href={menu.path} key={i} onClick={() => setOpen(false)}>{menu.name}</Link>
                        ))}
                    </ul>
                </div>
                {/* Overlay when menu is open */}
                {open && <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg::hidden" onClick={() => setOpen(false)}></div>}
            </div>
        </>







    );
};

export default Navbar;