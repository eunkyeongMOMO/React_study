# React_Remind_230320

프로젝트 전 기본 문법 리마인드 

**git에서 pull받고 npm start 안될때 해결하는방법**
1. pull받은 파일 중 package-lock.json 삭제
2. 터미널에 npm install 후에 npm start 하면 잘 됨! 히히
----------------------------------

1. class말고 className으로 클래스명 부여
2. 데이터 바인딩 {변수}
3. 인라인 방식으로 style 적용시 style={}으로 적용, 카멜케이스로 작성해야함.

```js
<div className="header__inner">
    <p style={color:blue, fontSize:'1.25rem'}>헬로</p>
<div>
```

## State

일반 변수는 값이 변경되어도 자동으로 재랜더링 되지 않지만, State를 쓰면 값이 변경될 때마다 html이 자동으로 재랜더링됨

> 자주 바뀌지 않는 값, 상수인 변수는 state를 쓰지 않고, **자주 변경되는 것만 state로 저장**

``` js
import { useState } from 'react'
let [원래값, 변경함수] = useState('저장할 내용')
```
>state변경시, 반드시 변경함수를 사용해서 변경해야 변경되고 재랜더링된다. 
>state 변경함수를 써도 변경할 값과 기존값이 같을 경우, 변경되지 않는다 (array, object변경시 주의)
array, object 는 원본을 보존해 두는것이 좋음, 딥카피본을 만들어서 카피해야함.

```js
()=>{
    let arrayCopy=[...array];
    arrayCopy[0] = '수정수정수정'
    변경함수(arrayCopy);
}
```

## Component

>복잡한 html 코드를 함축적으로 사용할수 있고 재사용에 용이하다. 
>작명시, 첫글자는 반드시 영어 대문자로 만들어야한다 (기존 태그들과 헷갈리지 않도록)
>기본으로 있는 function App(){} 밖에서 만들어야 한다.
>함수를 만들고 return (여기에 html태그들 정리) 하면 된다.

>> Component는 언제쓰는게 좋을까?
1. 반복적인 html 축약할때
2. 큰페이지
3. 자주 변경되는 UI들 

>> Component 단점?
>> state 쓸때 문제가 생길수 있다. [변수의 범위때문에 문법을 늘려야한다.]

>**연달아서 가져다 쓸때 <Modal/>라고만 작성하면 1개만 출력될수 있음으로 되도록이면 <Modal></Modal>이렇게 다 적어주는게 좋음**


```js
const Modal = () =>{
    return(
        //html 태그들 여기에 넣으면 됨.
        //여기안에는 병렬기입불가, 만약 써야한다면 <></> 로 묶어 쓰면 된다.
    )
}
```

### 동적 UI

1. html,css로 UI를 먼저 구성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성하면댐

```js
let [madal, setmodal] = useState(false);
```

**UI변경 함수는 set을 붙여서 만드는게 관습**

if문 대신 삼함연산자
조건식 ? true일때 실행할 코드 : false일때 실행할 코드

```js
{
   modal == true ? <Modal/> : null
}
```

글제목을 한번 더 누르면 모달창이 닫히게 해야한다. 그렇게 하려면 어떻게 코드짜야함?

```js
onclick(()=>{if(modal==false){setmodal(true)}else{setmodal(false)}})
//!를 사용해서 짜면 더 간단하게 짤수 있다.
onClick(()=>{setmodal(!modal)})
```
**!는 우측 자료값을 반대로 바꿔줌 !true == false, !false ==true**



### map

array.map(()=>{})

1. array 자료 갯수만큼 콜백함수 실행 
2. 첫번째 파라미터는 array안의 자료, 두번째 파라미터는 index 
3. return 에 적혀있는걸 자료 갯수만큼 다시 array에 담아서 반환해줌

## props

부모가 가지고 있는 state를 자식에게 전달하는 방법
**부모 -> 자식으로만 전달 가능**
 1. <자식컴포넌트 작명 = {state이름}>
 2. 자식 컴포넌트의 파라미터로 props등록후 props.작명 사용
 3. props로 전달 받은 값은 수정이 불가하다.
 ```js

      {
      modal == true ? <Modal posts={posts}></Modal> : null 
      }

const Modal = (props)=>{
  return(
      <div className="modal">
      
        <h4>{props.posts[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
 ```
 > props를 생략하고 Destructuring 방법으로도 전달이 가능하다

 ```js
       {
      modal == true ? <Modal title={title} posts={posts}></Modal> : null 
      }

const Modal = ({posts, title})=>{
  return(
      <div className="modal">
      
        <h4>{posts[title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
```

**props 타입 관리**
```js
import PropTypes from 'prop-types'

App.prototype ={
  title: PropTypes.number,
  posts:PropTypes.object
}
```

<<<<<<< HEAD
### React 이미지 넣기

이미지 파일 src/image/img01.jpg

css 에서는 ./image/img01.jpg 그대로 씁니다.
app.js 에서는 import해서 써야한다. 

`import 이미지명 from '이미지 경로'`

근데 이렇게 했을때 안되는경우가 있음, json으로 불러온다던가...
그럴땐 public에 넣으면 더 쉽게 불러올수 있음 아래 문법 쓰면 됨
`<img src={process.env.PUBLIC_URL + '/logo192.png'} /> `


## export, import

`export default 변수명`

파일에서 특정 변수를 내보내고 싶을때 씁니다.

`import 변수명 from '변수있는 파일 경로'`

변수, 함수 자료형 전부 export가능합니다. 
파일마다 export default는 하나만 사용가능합니다. 따라서 여러개를 내보내고 싶을경우

`export { 변수명01, 변수명02 }`
`import { 변수명01, 변수명02 } from '파일경로';`

이렇게 쓰면 됨. 변수명은 바꿀수없음. export한 이름 그대로 써야함.

## Router 라이브러리 이용

`npm install react-router-dom@6`

index.js

```js
import {BrowserRouter} from 'react-router-dom';
    <BrowserRouter>
    <App />
    </BrowserRouter>
```

App.js

```js
import {Routes, Route, Link, useNavigate,Outlet} from 'react-router-dom'
//라우터 라이브러리에서 사용할 속성 가지고 오기
  <Routes>
      <Route path='/' element={메인페이지}/>
      <Route path='/product' element={보여줄 페이지내용}/>
  </Routes>
  //Routes -> Route [나눌 페이지 갯수만큼 생성
```
함수명 | 사용법 | 이유
--|--|--
Routes | |Route 묶을때 사용 
Route|`<Route path='/경로지정'>` | 페이지 path지정할때 사용
Nested Routes|`<Route><Route/></Route>`| 경로안에 경로! detail/123 장점, 코드를 줄일수 있음
Link  | `<Link to='path값'></Link>`| Link걸때 사용 (a 태그와 같다)
useNavigate| `let navigate = useNavigate() onClick(()=>{navigate(이동할 경로)})`| 페이지 이동을 도와주는 함수, 일반적으로 변수에 담아 사용, link 대신 사용하는용도, `useNavigate(1)` 앞으로 한페이지이동, `useNavigate(-1)` 뒤로 한페이지 이동
Outlet | `<Outlet></Outlet>`|Nested Routes 사용시 상위요소 어디에 보여줄지 정하는것. 상위요소랑 하위요소 둘다 같이 보여주고싶을때 사용..!
```js
//예제

    <Route path='/event' element={<Event></Event>}>
        <Route path='one' element={<p>첫주문시 양배추즙 서비스</p>}/>
        <Route path='two' element={<p>생일기념 쿠폰받기</p>}/>
      </Route>

function Event(){
  return(
    <>
    <h3>오늘의 이벤트</h3>
    <Outlet></Outlet>
    </>
  )
}

```

**Route**

`<Route path='*'>` 오타 포함한 경로가 없는 모든 주소

## URL 파라미터 
> 페이지 여러개 만들고 싶을때 사용하는것. 
```js
//app.js
<Route path="detail/:id" element={<Detail/>}>

//detail.js

import { useParams } from "react-router-dom";

let 변수 = useParams();
```

## react - mongoDB 연동

mongoDB 설치 `npm install mongoose ---save`
index.js 파일에 아래 코드 입력

```js
const mongoose = require('mongoose');
```
>>>>>>> ff1414512bb4a9e30b15b43fab773deb3346baff
