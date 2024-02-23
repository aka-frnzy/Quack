import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import db from "./Firebase";

function Profile({ user, usrname }) {
  console.log();
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setCollection(
          snapshot.docs
            .filter((doc) => doc.data().userName === usrname)
            .map((doc) => doc.data())
        );
      });
  }, [usrname]);

  return (
    <>
      <div>
        <div className="flex ">
          <img className="m-2 rounded-full" src={user.photoURL} />
          <div className="flex flex-col">
            <span className="font-extrabold text-5xl">{user.displayName}</span>
            <span className="font-extralight text-2xl">@{usrname}</span>
          </div>
        </div>
        <div className="flex  flex-col">
          <h1 className="font-extrabold text-xl text-center">Posts</h1>
          <div>
            {collection ? (
              collection.map((post, index) => (
                <Post
                  key={index}
                  createdAt={post.createdAt}
                  avatar={post.avatar}
                  userName={post.userName}
                  displayName={post.displayName}
                  text={post.text}
                  pic={post.pic}
                />
              ))
            ) : (
              <h2>You have not posted anything yet</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
