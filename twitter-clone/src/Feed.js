import React, {useState, useEffect} from 'react';
import "./Feed.css"
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);    

  useEffect(() => {  /* Gets access to all the posts and their data! Using firebase*/
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);




  return (
    <div className='feed'>
        
         {/* Header*/}
        <div className='feed__header'>

            <h2>Home</h2>
        </div>
        <TweetBox />
      {posts.map(posts => (
        <Post
        displayName={posts.displayName}
        username={posts.username}
        verified = {posts.verified}
        text= {posts.text}
        avatar = {posts.avatar}
        image = {posts.image}
         />
      ))}
        <Post />
        <Post />
        <Post />
      

    </div>
  )
}

export default Feed