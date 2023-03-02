import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Switch>
            {/* Setting routes for components (i.e 'exact' for strict route comparasion) */}
            <Route path="/" exact> <Main /> </Route>
            <Route path="/create" exact> <NewPost /> </Route>
            <Route path="/posts/:id"> <PostDetails /> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
