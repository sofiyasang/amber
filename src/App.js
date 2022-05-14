
import './styles/App.css';
import React, {useState} from 'react';
import Counter from './components/counter';


function App() {
  // const [likes, setLike] = useState(0);
  const [posts, setPosts] = useState([
    {id:1, title:'HelloWorld', body:'Description'},
    {id:2, title:'HelloWorld', body:'Description'},
    {id:3, title:'HelloWorld', body:'Description'}
  ]);

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>
        Hello CodeSandbox
      </h1>
     {posts.map(post =>
      <Counter post={post} key={post.id}/>
     )}
    </div>
  );
}
      
 

export default App;
