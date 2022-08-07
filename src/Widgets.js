import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTweetEmbed,TwitterShareButton, TwitterTimelineEmbed } from "react-twitter-embed";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Whats happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="bhanu"
          options={{ height: 400 }}
        />
        <TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />
      </div>
    </div>
  );
}

export default Widgets;
