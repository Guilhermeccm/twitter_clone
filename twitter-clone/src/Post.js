import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
        <Avatar src="https://yt3.ggpht.com/yti/AHyvSCAlG92PXPd1UOKIjngsFRZo3s1YDJW8sGXspNRyrA=s88-c-k-c0x00ffffff-no-rj-mo"></Avatar>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post_headerText'>
                    <h3>
                        Guilherme Matos  <span>
                            <VerifiedIcon className='post_badge' /> @Guilhermeccm
                        </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>I built a twitter clone using react!!!!</p>
                </div>
            </div>
            <div>
                <img src='https://media3.giphy.com/media/SZ1gNOOqmVXOwdKv5A/giphy.gif?cid=ecf05e477a18ecf3f190e2c3a5973ab702fe36ad530c8a79&ep=v1_gifs_gifId&rid=giphy.gif&ct=g' alt=''></img>
                <div className='post__footer'>
                        <ChatBubbleOutlineIcon fontSize = "small" />
                        <RepeatIcon fontSize = "small" />
                        <FavoriteBorderIcon fontSize = "small" />
                        <PublishIcon fontSize = "small" />
                </div>            
            </div>
        </div>
    </div>
  )
}

export default Post