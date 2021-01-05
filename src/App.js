import './App.css';
import { Route } from 'react-router-dom';
import Header from './component/Header';
import Post from './component/Post';

import Direct from './page/Direct';
import Explore from './page/Explore';

function App() {
  return (
    <div>
      <Route path="/" exact>
        <div className="App">
          <Header className="Header"/>
        </div>
        <div>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        
      </Route>
      <Route path="/direct" component={Direct}/>
      <Route path="/explore" component={Explore}/>
    </div>
  );
}

export default App;
