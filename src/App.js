import './App.css';
import { Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './component/Header';
import Post from './component/Post';

import Direct from './page/Direct';
import Explore from './page/Explore';

function App() {
  const [posts, setPosts] = useState([
    {
      userImg : "https://www.zotero.org/static/images/icons/edge-old-icon-128%402x.png",
      username : "vctr",
      postImg : "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      caption : "새해 복 많이 받으세요~마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ",
      comments : [
        {
          "user" : "daniel_likees", 
          "comment" : "가나다라 마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ"
        },
        {
          "user" : "christine", 
          "comment" : "ㅋㅋㅋㅋㅋ"
        }
      ,
      ],
      curTime : String(new Date())
    },
    {
      userImg : "https://icon-library.com/images/facebook-icon-32-x-32/facebook-icon-32-x-32-3.jpg",
      username : "daniel",
      postImg : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      caption : "새해 복 많이 받으세요~마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ",
      comments : [
        {
          "user" : "vvvc", 
          "comment" : "가나다라 aasdasd"
        }
      ],
      curTime : String(new Date())
    },
    {
      userImg : "https://www.zotero.org/static/images/icons/edge-old-icon-128%402x.png",
      username : "vctr",
      postImg : "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      caption : "새해 복 많이 받으세요~마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ",
      comments : [
        {
          "user" : "daniel_likees", 
          "comment" : "가나다라 마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ"
        },
        {
          "user" : "christine", 
          "comment" : "ㅋㅋㅋㅋㅋ"
        }
      ,
      ],
      curTime : String(new Date())
    },
    {
      userImg : "https://www.zotero.org/static/images/icons/edge-old-icon-128%402x.png",
      username : "vctr",
      postImg : "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      caption : "새해 복 많이 받으세요~마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ",
      comments : [
        {
          "user" : "daniel_likees", 
          "comment" : "가나다라 마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ"
        },
        {
          "user" : "christine", 
          "comment" : "ㅋㅋㅋㅋㅋ"
        }
      ,
      ],
      curTime : String(new Date())
    }
  ]);



  return (
    <div>
      <Route path="/" exact>
        <div className="appHeader">
          <Header className="Header"/>
        </div>
        <div className="appPost">
          {posts.map(post => (
            <Post 
              userImg={post.userImg} 
              username={post.username} 
              postImg={post.postImg} 
              caption={post.caption} 
              comments={post.comments} 
              curTime={post.curTime} 
            />
          ))}
        </div>
        
      </Route>
      <Route path="/direct" component={Direct}/>
      <Route path="/explore" component={Explore}/>
    </div>
  );
}

export default App;
