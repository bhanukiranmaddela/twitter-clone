import React from "react";
import { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMsg, setTweetMsg] = useState("");
  const [img, setImg] = useState("");
  const sendTwt = (ev) => {
    ev.preventDefault();
    if (tweetMsg !== "") {
      db.collection("posts").add({
        dispayName: "Bhanu",
        username: "Kiran",
        verified: true,
        text: tweetMsg,
        image: img,
        avatar:
          "https://www.kaseya.com/wp-content/uploads/2019/02/Contest-Winners-1024x784.png",
      });
      setTweetMsg("");
      setImg("");
    }
  };
  return (
    <div className="tweetBox">
      <form onSubmit={sendTwt}>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cQQ07JhtUF0lZ8yUrYsYFfCT0s0jD43tBIIhNiqa6dgrjGZvUxzhqlteS4ZSak8SOdI&usqp=CAU" />
          <input
            value={tweetMsg}
            onChange={(ev) => setTweetMsg(ev.target.value)}
            placeholder="what's happening"
            type="text"
          />
        </div>
        <input
          value={img}
          onChange={(ev) => setImg(ev.target.value)}
          placeholder="image url"
          type="text"
          className="tweetBox__image"
        />
        <Button type="submit" className="tweetbox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
