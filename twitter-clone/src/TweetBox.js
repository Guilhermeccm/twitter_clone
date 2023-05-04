import React from 'react'
import "./TweetBox.css";
import {Avatar, Button} from "@mui/material"

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://yt3.ggpht.com/yti/AHyvSCAlG92PXPd1UOKIjngsFRZo3s1YDJW8sGXspNRyrA=s88-c-k-c0x00ffffff-no-rj-mo"></Avatar>
                <input placeholder="What's happening?" type="text"></input>
            </div>
                <input className='tweetBox__imageInput' placeholder="Enter image URL" type="text"></input>
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox