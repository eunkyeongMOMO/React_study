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
    <ul className='postList'>
      <li>
        <p>{posts[0]}</p>
        <span onClick={()=>{likesModify(likes+1)}}>❤️</span>
        <span>{likes}</span>
      </li>
      <li>
        <p>{posts[1]}</p>
        <span onClick={()=>{likesModify(likes+1)}}>❤️</span>
        <span>{likes}</span>
      </li>
      <li>
        <p>{posts[2]}</p>
        <span onClick={()=>{likesModify(likes+1)}}>❤️</span>
        <span>{likes}</span>
      </li>
    </ul>

    </div>
  );
}

const Modal = ()=>{
  return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

  )
}
export default App;
