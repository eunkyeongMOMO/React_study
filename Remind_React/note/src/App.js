import './App.css';
import { useState } from 'react'

function App() {
  let [posts, postsModify] = useState(['기본','연습','저장']);
  let [likes, likesModify]=useState(0)

  return (
    <div className="App">
      <header>
        <div className="header__inner">
          <h1>My_Note</h1>
        </div>
      </header>
    <ul>
      <li>
        <p>{posts[0]}</p>
        <span onClick={()=>{likesModify(likes+1)}}>❤️</span>
        {likes}
      </li>
      <li>
        <p>{posts[1]}</p>
        <span onClick={()=>{likesModify(likes+1)}}>❤️</span>
        {likes}
      </li>
      <li>
        <p>{posts[2]}</p>
        <span onClick={()=>{likesModify(likes+1)}}>❤️</span>
        {likes}
      </li>
    </ul>


    </div>
  );
}

export default App;
