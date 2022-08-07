import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';
function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__header_special">
               {verified && <VerifiedIcon className="post__badge" />} @{username}
              </span>
            </h3>
          </div>
          <div className="header__desription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="gif"/>
        <div className="post__footer">
          <ChatBubbleIcon/>
          <RepeatOnIcon/>
          <FavoriteIcon/>
          <PublishIcon/>
        </div>
      </div>
    </div>
  );
}

export default Post;
