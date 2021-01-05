import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Post from "./pages/Post"
function App() {
  
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/posts/:postId" component={Post}/>
      </Switch>
    </BrowserRouter>
    
  );
}
// posts.map(post => <h2 key={post._id}>{post.title}</h2>)
export default App;
