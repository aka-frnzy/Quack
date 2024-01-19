import React from 'react'
import { useState, useEffect } from 'react'
import Quackbox from './Quackbox';
import Post from './Post';
import db from './Firebase'
const Feed = ({ user, usrname }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy("createdAt", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <>
            <div className='flex-1 border-r-2 border-solid overflow-auto scrollbar-hide w-fit max-w-full'>

                <div className='sticky z-10 py-4 px-5'>
                    <Quackbox user={user} avatar={user.photoURL} usrname={usrname} />
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            user={user}
                            createdAt={post.createdAt}
                            avatar={post.avatar}
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