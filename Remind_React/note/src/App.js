import './App.css';
import { useState } from 'react'
import PropTypes from 'prop-types'
App.prototype ={
  title: PropTypes.number,
  posts:PropTypes.object
}

function App() {
  let [posts, postsModify] = useState(['기본','연습','저장']);
  let [likes, likesModify]=useState([0,0,0]);
  let [modal, setmodal] = useState(false);
  let [title, settitle] =useState(0);

  let likePlus = (index) =>{
    let copyLikes = [...likes];
    copyLikes[index]= copyLikes[index]+1;
    likesModify(copyLikes);
  }
  let subjectModify = () =>{
    let copy =[...posts];
    copy[0]='수정했습니다.';
    postsModify(copy);
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
          <li key={index} onClick={()=>{setmodal(!modal)}}>
            <p onClick={()=>{settitle(index)}}>{value}</p>
            <span onClick={()=>{likePlus(index)}}>❤️</span>
            <span>{likes[index]}</span>
          </li>)
        })
   }
      </ul>
   <button onClick={subjectModify}>글제목 변경</button>
      {
      modal == true ? <Modal title={title} subjectModify={subjectModify} posts={posts}></Modal> : null 
      }
    </div>
  );
}

const Modal = ({posts, title, subjectModify})=>{
  return(
      <div className="modal">
        <h4>{posts[title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      <button onClick={subjectModify}>글제목변경</button>
      </div>
  )
}
export default App;
