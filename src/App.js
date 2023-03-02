import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';
import Route404 from './components/Route404';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Switch>
            {/* Setting routes for components (i.e "exact" for strict route comparasion) */}
            <Route path="/" exact> <Main /> </Route>
            <Route path="/create" exact> <NewPost /> </Route>
            <Route path="/posts/:id"> <PostDetails /> </Route>
            {/* Displaying error component whenever the url/path doesn't match any of the paths in th Switch block */}
            {/* Passing/Rendering "location" object as a prop into "Route404" to get url "pathname" in component */}
            <Route path="*" render={(location) => <Route404 {...location} />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
