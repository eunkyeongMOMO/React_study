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
4월초부터 리액트 프로젝트 시작
>그 전에 기본부터 한번씩 다보고 정리 하기

## React Project
