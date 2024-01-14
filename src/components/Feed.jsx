import React from 'react'
import Quackbox from './Quackbox';
import Post from './Post';
const Feed = () => {
    return (
        <>
            <div className='flex-1 border-r-2 border-solid overflow-auto scrollbar-hide w-fit'>

                <div className='sticky z-10 py-4 px-5'>
                    <Quackbox />
                    <Post />
                </div>
            </div>
        </>
    )
}

export default Feed;