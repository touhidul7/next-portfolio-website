import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const menus=[
        {
            name:"Home",
            path:"/"
        },
        {
            name:"Projects",
            path:"/projects"
        },
      /*   {
            name:"Resume",
            path:"/resume"
        }, */
        {
            name:"Contact",
            path:"/contact"
        },
    ]
    return (
        <div className="absolute top-0 right-0">
            <ul className='flex justify-between items-center  bg-[#282829] gap-[1px] px-4 rounded-tr-xl rounded-bl-xl'>
                {menus.map((menu, i)=>(
                    <Link className='bg- p-4 w-full text-center' href={menu.path} key={i}>{menu.name}</Link>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;