import React from 'react'
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder='Search Twitter' type="text"/>
        </div>
        <div className='widgets__widgetContainer'>
          <h2>What's happening?</h2>

          <TwitterTweetEmbed tweetId ={"1595074940859998213"} />
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='GuilhermeCOCM'
            options={{height: 400}}
          />
          <TwitterShareButton
          url = {"https://twitter.com/GuilhermeCOCM"}
          options={{text: "#reactjs is awesome", via: "GuilhermeCOCM"}}
          />
        </div>
    </div>
  )
}

export default Widgets