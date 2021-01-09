import './App.css';
import firebase from 'firebase';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core/'

import Header from './component/Header';
import Post from './component/Post';
import Account from './component/Account';
import ImageUpload from './component/ImageUpload';

import Direct from './page/Direct';
import Explore from './page/Explore';

function getModalStyle() {
  const top = 50;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSingIn] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const [userImg] = useState('https://image.gamechosun.co.kr/wlwl_upload/dataroom/df/2017/09/05/490022_1504544287.jpg');

  const logoUrl = "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        console.log(authUser);
        setUser(authUser);
      }
      else {
        setUser(null);
      }
    })
    return () => {
      unsubscribe();
    }
  }, [user, username]);

  useEffect(() => {
    db
      .collection('posts')
      .orderBy("timestamp", 'desc')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data(),
        })));
      })
  }, []); 

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
          photoURL: userImg,
        });
      })
      .catch((error) => alert(error.message));
  }

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))

    setOpenSingIn(false); 
  }

  return (
    <div className="App">
      <Route path="/" exact>
      <Modal
        open={open}
        onClose={() => {setOpen(false)}}
      > 
        <div style={modalStyle} className={classes.paper}>
          <form>
            <center className="SignUp">
              <img src={logoUrl} className="Header-logo" draggable="false" alt=""/>
              <Input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
              />
              <Input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
              <Input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
              />
              <Button type="submit" onClick={signUp}>Sign  Up</Button>
            </center>
          </form>
        </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => {setOpenSingIn(false)}}
      >
        <div style={modalStyle} className={classes.paper}>
          <form>
            <center className="SignIn">
              <img src={logoUrl} className="Header-logo" draggable="false" alt=""/>
              <Input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
              <Input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
              />
              <Button type="submit" onClick={signIn}>Log In</Button>
            </center>
          </form>
        </div>
      </Modal>  
        <div>
          <Header logoUrl={logoUrl}/>
        </div>

        <div className="AppBody">
          <div className="AppPost">
            {posts.map(({id, post}) => (
              <Post
                key={id} 
                postId={id}
                user={user}
                userImg={post.userImg} 
                username={post.username} 
                postImg={post.postImg} 
                caption={post.caption} 
                likes={post.likes}
                likeNum={post.likeNum}
                count={post.count}
                // createdTime={diff(post.timestamp)}
              />
            ))}
          </div>
          
          <div className="AccountModule"> 
            {user 
            ? <div className="true">
                <div className="trueinfo">
                  <Account username={user.displayName} email={user.email}/>
                  <Button onClick={() => auth.signOut()}>Log Out</Button>
                </div>
                <div>
                  <ImageUpload username={user.displayName} userImg={user.photoURL}/>
                </div>
              </div>
            : <div className="LoginContainer">
                <Button onClick={() => setOpenSingIn(true)}>Sign In</Button>
                <Button onClick={() => setOpen(true)}>Sign Up</Button>
              </div>
            }
          </div>
        </div>
        

      </Route>
      <Route path="/direct" component={Direct}/>
      <Route path="/explore" component={Explore}/>
    </div>
  );
}

export default App;
