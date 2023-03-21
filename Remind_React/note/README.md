# React_Remind_230320

프로젝트 전 기본문법 리마인드 

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
