import './App.css';
import { useState } from 'react'
import PropTypes from 'prop-types'
App.prototype ={
  title: PropTypes.number,
  posts:PropTypes.object
}

function App() {
  let [posts, setPosts] = useState(['첫번째','두번째','세번째']);
  let [likes, setLikes]= useState([0,0,0]);
  let [modal, setmodal] = useState(false);
  let [title, settitle] =useState(0);
  let [inputValue, setInputValue] =useState('');


  let likePlus = (index) =>{
    let copyLikes = [...likes];
    copyLikes[index]= copyLikes[index]+1;
    setLikes(copyLikes);
  }
  let subjectModify = () =>{
    let copy =[...posts];
    copy[0]='수정했습니다.';
    setPosts(copy);
  }
  let addPost = ()=>{
    let copy = [...posts];
    copy.unshift(inputValue);
    setPosts(copy);
  }
  let deletePost = (i)=>{
    let copy =[...posts];
    copy.splice(i,1)
    setPosts(copy);
    let copyLikes =[...likes]
    copyLikes.splice(i,1)
    setLikes(copyLikes);
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
            <span onClick={(e)=>{
              e.stopPropagation();
              likePlus(index)}}>❤️</span>
            <span>{likes[index]}</span>
            <button onClick={(e)=>{e.stopPropagation(); deletePost(index)}}>글삭제</button>
          </li>)
        })
   }
      </ul>
      <input onChange={(e)=>{setInputValue(e.target.value)}}></input>
      <button onClick={addPost}>글추가</button>
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
