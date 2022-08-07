import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* Header */}

      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* displayName, username, verified, text, image, avatar  */}
      {posts.map((each) => {
        return (
          <Post
          key={Date.now()}
            displayName={each.displayName}
            username={each.username}
            verified={each.verified}
            text={each.text}
            image={each.image}
            avatar={each.avatar}
          />
        );
      })}
    </div>
  );
}

export default Feed;
