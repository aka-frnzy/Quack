import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarTheming from './SidebarTheming';
import { Link } from 'react-router-dom';


const Sidebar = ({ auth }) => {
    return (
        <>
            <div className='flex flex-col border-r-2 border-solid pl-5 pr-5'>
                <div className='flex'>
                    <img src="https://i.postimg.cc/MHWd0jL6/quack.png" alt="logo" className="h-10 w-14 cursor-pointer mx-4 rounded-full" />
                    <span className='font-bold items-center justify-center'>Quacker</span>
                </div>
                <Link to='/'><SidebarTheming text='Home' Icon={HomeIcon} active={true} /></Link>
                <SidebarTheming text='Explore' Icon={SearchIcon} />
                <SidebarTheming text='Notifications' Icon={NotificationsIcon} />
                <SidebarTheming text='Messages' Icon={MessageIcon} />
                <SidebarTheming text='Bookmarks' Icon={BookmarkIcon} />
                <Link to='/profile'><SidebarTheming text='Profile' Icon={AccountCircleIcon} /></Link>
                <SidebarTheming text='More' Icon={MoreHorizIcon} />

                <button className=
                    ' text-slate-700 bg-yellow-400 p-3 rounded-3xl text-base w-full font-extrabold mr-2 mt-5'
                >Quack</button>
                <button onClick={() => auth.signOut()}
                    className=
                    ' text-slate-700 bg-yellow-400 p-3 rounded-3xl text-base w-full font-extrabold mr-2 mt-5'
                >SignOut</button>
            </div >
        </>
    )
}

export default Sidebar;