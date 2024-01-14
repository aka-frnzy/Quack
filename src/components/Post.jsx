import { Avatar } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import RepeatIcon from '@mui/icons-material/Repeat';
const Post = ({ displayName, userName, text, pic }) => {
    return (
        <div className='flex flex-start border-b-4 p-4'>
            <div>
                <Avatar src="https://avatars.githubusercontent.com/u/117916707?v=4" className='m-2' />
            </div>
            <div className='p-2'>
                <div>
                    <span className='font-extrabold'>Suraj Dhakal <span className='font-extralight text-xs'>@itsyaboifrnzy</span></span>
                </div>
                <div><p>This is some random text for Some Random Post</p></div>
                <img className='rounded-2xl w-full' src="https://media.giphy.com/media/Q8COxfEcyDdwJQIBan/giphy.gif" />
                <div className='flex justify-between mt-3'>
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <FavoriteBorderIcon />
                    <SendIcon />
                </div>
            </div>
        </div >
    )
}

export default Post