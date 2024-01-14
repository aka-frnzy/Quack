import React from 'react'

const SidebarTheming = ({ active, text, Icon }) => {
    const baseClass = "flex items-center cursor-pointer rounded-full hover:bg-yellow-100 hover:text-yellow-500 transition ease-in-out duration-300";
    const activeClass = active ? 'text-yellow-500' : '';
    return (
        <div className={`${baseClass} ${activeClass}`} >
            <Icon className='m-6' />
            <span className='font-extrabold m-6 '>{text}</span>
        </div>
    )
}

export default SidebarTheming;