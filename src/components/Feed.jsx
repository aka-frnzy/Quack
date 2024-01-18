import React from 'react'
import { useState, useEffect } from 'react'
import Quackbox from './Quackbox';
import Post from './Post';
import db from './Firebase'
const Feed = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, []);
    return (
        <>
            <div className='flex-1 border-r-2 border-solid overflow-auto scrollbar-hide w-fit'>

                <div className='sticky z-10 py-4 px-5'>
                    <Quackbox avatar="https://avatars.githubusercontent.com/u/117916707?v=4" />
                    {posts.map(post => (
                        <Post avatar={post.avatar}
                            userName={post.userName}
                            displayName={post.displayName}
                            text={post.text}
                            pic={post.pic}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Feed;