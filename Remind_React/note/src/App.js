import './App.css';
import { useState } from 'react'

function App() {
  let [posts, postsModify] = useState(['기본','연습','저장']);
  let [likes, likesModify]=useState([0,0,0]);
  let [modal, setmodal] = useState(false);

  let likePlus = (index) =>{
    let copyLikes = [...likes];
    copyLikes[index]= copyLikes[index]+1;
    likesModify(copyLikes);
  }
  return (
    <div className="App">
      <header>
        <div className="header__inner">
          <h1>My_Note</h1>
        </div>
      </header>
    <ul className='postList'>
    {
      posts.map(
       function(value, index){
          return ( 
          <li key={index} onClick={()=>{
          if(modal==false){setmodal(true)}else{setmodal(false)}}}>
            <p>{value}</p>
            <span onClick={()=>{likePlus(index)}}>❤️</span>
            <span>{likes[index]}</span>
          </li>)
        })
   }
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
