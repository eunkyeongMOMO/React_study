import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
App.prototype ={
  title: PropTypes.number,
  posts:PropTypes.object
}
//axios 되는지 확인하긔
axios({
  method :'post',
  url:'',
  data:{
  }
})
.then((rsp)=>{
console.log(rsp)
})
.catch((error)=>{
  console.log(error);
})

function App() {
  let [posts, setPosts] = useState(['첫번째','두번째','세번째']);
  let [likes, setLikes]= useState([0,0,0]);
  let [modal, setmodal] = useState(false);
  let [title, settitle] =useState(0);
  let [inputValue, setInputValue] =useState('');

//like버튼 눌렀을때 state변경 예제
  let likePlus = (index) =>{
    let copyLikes = [...likes];
    copyLikes[index]= copyLikes[index]+1;
    setLikes(copyLikes);
  }

  //글 수정버튼 예제
  let subjectModify = () =>{
    let copy =[...posts];
    copy[0]='수정했습니다.';
    setPosts(copy);
  }

  //포스트 추가
  let addPost = ()=>{
    let copy = [...posts];
    if(inputValue===!''){
    copy.unshift(inputValue);} //null 값 일땐 추가 안되게
    setPosts(copy);
  }
  //포스트 삭제
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
      modal === true ? <Modal title={title} subjectModify={subjectModify} posts={posts}></Modal> : null 
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
