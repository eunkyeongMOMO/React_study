# React

## Learning React 책 정리

**리액트는 브라우저 DON을 갱신해주기 위해 만들어진 라이브러리**
> Rect Element는 개념상 HTMLElement와 비슷하지만 실제로는 자바스크립트 객체인 가상 DOM이다.
> 랜더링과정을 통해 리액트는 가상 DOM을 실제 DOM Element로 변환한다.

Rect Element는 리액트에게 DOM element구성하는 방법을 알려주는 자바스크립트 리터럴에 불과하다.
Rect Element는 객체 형태로 key, ref, type, props필드가 중요하다.

Rect Element 객체는 아래와 같은 모습이다.
```js
{
$$typeof : symbol(React.element),
"type":"h1",
"key":null,
"ref":null,
"props": {id:'입력한 아이디' , children:'노드안에 들어가는 텍스트'},
"_owner":null,
"store":{}
}
```

Props 프로퍼티는 DOM Element를 만들기 위해 필요한 데이터나 자식 멜러먼트들을 표현한다. 




## React_study
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

라우터를 사용하면 웹사이트 각 세션에 대한 경로를 설정할 수 있다. 앱은 요청 받은 경로에 따라 적절한 콘텐츠를 랜더링해 보여준다.

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
Routes | |Route wrap 하는 컴포넌트
Route|`<Route path='/경로지정'>` | 페이지 path지정할때 사용
Nested Routes|`<Route><Route/></Route>`| 경로안에 경로! detail/123 장점, 코드를 줄일수 있음
Link  | `<Link to='path값'></Link>`| Link걸때 사용 (a 태그와 같다)
useNavigate| `let navigate = useNavigate() onClick(()=>{navigate(이동할 경로)})`| 페이지 이동을 도와주는 함수, 일반적으로 변수에 담아 사용, link 대신 사용하는용도, `useNavigate(1)` 앞으로 한페이지이동, `useNavigate(-1)` 뒤로 한페이지 이동
Outlet | `<Outlet></Outlet>`|Nested Routes 사용시 상위요소 어디에 보여줄지 정하는것. 상위요소랑 하위요소 둘다 같이 보여주고싶을때 사용..!


**Route**

`<Route path='*'>` 오타 포함한 경로가 없는 모든 주소

각페이지에 해당하는 내용을 담을 컴포넌트를 pages.js에만들고 app.js에 import하는 방식으로 사용하는것도 좋은 방식이다.[여러 js파일을 만들지 않아도 된다는 이점이 있다]

### 라우터 프로퍼티

리액트 라우터는 랜더링하는 컴포넌트에게 프로퍼티를 넘긴다. 예를 들어 현재 위치(주소)를 프로퍼티에서 얻을 수 있다. 

**404 Not Found**

location 값을 통해 사용자가 방문했던 경로의 값을 표시할수 있다.
```js
export funtion Whoops404(){
let location = use Location();
  return(
  <div>
    <h1>Resourece nit found</h1>
  </div>
  )
}

App.js

<Route path="*" element={<Whoops404/>}/>
```

## Lifecycle / useEffect

> 컴포넌트의 주기,

페이지에 출력(장착)되는것 [mount]
state변환등으로 인해 업데이트되는것(재랜더링) [update]
페이지에 출력되지 않는것(제거되는것) [unmount]


**useEffect()**
> 컴포넌트가 mount, update될 때 코드를 추가하여 실행하기 위한 훅
>> useEffect() 랜더러가 랜더링을 한 직후에 부수효과로 실행하고 싶은 코드를 실행하는것 
>useEffect 안에 있는 코드는 두번 실행됨.[디버깅을 위한것 / *빌드하고 배포시에는 한번 실행됨*] - 이거 싫으면 index.js 에 <React.StrictMode>이거 삭제하고 실핼하면 됨.
> 장점 - useEffect 안에 있는 코드는 html 랜더링이 다 된 후에 동작합니다. [비동기적으로 사용하기 좋음 예)타이머, 서버에서 데이터가져오는것]
>>side Effect? 함수의 핵심기능과 상관없는 부가기능 그래서 useEffect임, 
>>side Effect? 함수의 핵심기능과 상관없는 부가기능 그래서 훅 이름이 useEffect임, useEffect는 페이지 랜더와 별개의 부가기능을 추가하는것임
> useEffect 두번째 파라미터로 []를 넣을수 있다. 여기에는 변수,state를 넣을수 있는데 **[]안에 있는 변수, state가 변할때만 useEffect안의 코드를 실행해줌** 아무것도 안쓰면 로드시(mount) 최초 1회만 실행 ->재랜덩링되어도 실행안됨, 
>>[]안에 여러개의 state,변수를 넣을수 있다. - 컴포넌트안에서 선언된 state, 변수만 넣을수 있음.
> use effect실행전에 실행하고 싶은 코드는 return ()=>{}에 넣어 실행시키면 됨
```js
import { useEffect } from "react";
//import해와야 실행됨
 useEffect(()=>{
    let setTimeOut= setTimeout(()=>{
        setalert(alert=false);
         return () => {clearTimeout(setTimeOut)}
    },2000), [] 
    //clean up function
     return () => {clearTimeout(setTimeOut)} 
    
})
```
**clean up function**
리액트특성상, 랜더링이 자주 일어나기때문에 기존 작업들을 제거하는 작업이 필요하다. 비효율 방지. mount시에는 실행안됨, unmount때는 실행됨


## React에서 Axios 사용
`npm install axios` 로 라이브러리 설치후 최상단 컴포넌트 파일에 
`import {axios} from 'axios'` 임포트 한 다음 GET, POST요청 하면 된다.

```js
  axios.get('요청할 url')
    .then(결과)=>{
      결과.data //요청한 데이터만 가져와 사용할경우. .data로 입력해줘야 데이터만 가져와짐. 결과로 입력하면 다른 값들도 같이 넘어오기때문에 에러 발생할수도 있긔...!
    }
  .carch(()=>{})//서버 통신 실패했을때 실행할 코드 입력
```
성공시 atatus:200값을 같이 넘겨주기때문에 해당값을 확인-> 성공여부를 체크해서 코드를 넣을수있다

## Redux 사용하기
> Component 들이 props 없이 state 공유
props 사용안해도 됨.
state공유에 용이하고 유지보수하기에도 편해서 씀
간단한 작업은 그냥 props쓰는게 편함...!
설치
`npm install @reduxjs/toolkit react-redux`

index.js

```js
import store from './store.js'
   <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
```


store.js
```js
import { configureStore,createSlice } from '@reduxjs/toolkit'
//state만들기
createSlice({
  name: 'state이름',
  initialState:'state값'
})
export default configureStore({
  reducer: {
    //state 등록하기
    state이름 : simba.reducer
    //뒤에 꼭 reducer라고 붙여야함.
   }
}) 
```
**가져다가 쓸때**
```js
import {} from 'react-redux'
//store에 등록된 모든 state들을 가져옴
let 변수 = useSeclector((state)=>{return state})
//store에 등록된 특정 state를 가져오고싶을때
let 변수 = useSeclector((state)=>{return state.simba})
```
Reducx state 변경하는 함수

store.js
```js
import { configureStore,createSlice } from '@reduxjs/toolkit'
//state만들기
createSlice({
  name: 'state이름',
  initialState:'state값',
  reducers :{
    state변경함수(state){ //파라미터로 기존 state값을 가져올수 있음
    return '새로운 state'
    },
    
  }
})

export let {export 할 함수명} = state명.actions //state 변경 함수들, 여러개내보낼수 있음

```

App.js
```js
import {state 변경함수} from './store';

let dispatch = useDispatch() //store.js한테 요청을 보내는 함수

dispatch(state 변경함수()) //dispatch에 감싸서 써야함.

```
장점 컴포넌트가 여러개일 경우, 오류가 났을때 디버깅하기 쉽당...!
버그 생기면 무조건 store.js 부터 살펴보면댐

공유가 필요없는 state의 경우, 사용되는 곳에서 useState쓰는게 훨씬나음

## useMemo

컴포넌트 성능을 최적화 시킬수 있는 hooks, 컴포넌트가 랜더링될때 최초 한번만 실행해줌 
useEffect랑 비슷하게 사용할수있음.
> useEffect랑 다른점은 실행시점이 다른것, useEffect는 컴포넌트가 랜더링 된 이후에 실행되지만 useMemo는 컴포넌트가 랜더링 될때 같이 실행됨.

```js
const result = useMemo(()=>{return 실행할 함수()},[state])
//state 변화할때만 변경시킬수 있음
```




## react - mongoDB 연동

mongoDB 설치 `npm install mongoose ---save`
index.js 파일에 아래 코드 입력

```js
const mongoose = require('mongoose');



## React Project
