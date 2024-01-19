import { Avatar } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import RepeatIcon from '@mui/icons-material/Repeat';
import { DragHandleOutlined } from '@mui/icons-material';

const Post = ({ avatar, displayName, userName, text, pic, createdAt }) => {
    const [likes, setLikes] = useState(0)
    return (
        <div className='flex flex-start border-b-4 p-4'>
            <div>
                <Avatar src={avatar} className='m-2' />
            </div>
            <div className='p-2'>
                <div>
                    <span className='font-extrabold'>{displayName} <span className='font-light text-xs'>@{userName}</span></span>
                </div>
                <span className='font-extralight text-xs'>{createdAt ? createdAt.toDate().toLocaleString() : "Getting Date"}</span>
                {/* {console.log(createdAt.toDate())} */}
                <div><p>{text}</p></div>
                <img className='rounded-2xl w-full' src={pic} />
                <div className='flex justify-between mt-3'>
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <button ><FavoriteBorderIcon /> {likes}</button>
                    <SendIcon />
                </div>
            </div>
        </div >
    )
}

export default Post