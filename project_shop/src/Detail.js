import { useParams } from "react-router-dom"
import styled from "styled-components"

/* 스타일 컴포넌트 라이브러리 사용하기 
npm intall style-components 입력하여 라이브러리 설치
사용할 js 파일에 import styled from "styled-components" 입력
let 컴포넌트명 = styled.태그명 `스타일 속성:값 작성`(백틱)
props속성을 이용하여 요소별로 바꿀수있음
props로 지정할 속성: ${props => props.props명} 
장점이자 단점. 해당 파일에서 밖에 못씀. 쓰려면 export, import해야함.
-> css와 뭐가 다른지?
css 파일을 특정 컴포넌트에서만 사용하고 싶을때 
css 파일명 -> 컴포넌트명.module.css로 적으면 해당 컴포넌트에만 적용됨.
*/
// let Button =styled.button`
// backgroud: ${ props => props.back};
// color:#fff;
// border-radius: 10px;
// padding: 10px 20px;
// `
// //기존 스타일 복사 + 추가
// let NewButton = styled.button(Button)`
// margin:20px auto;

//component Lifecycle
/**
페이지에 장착되기도 하고 [mount]
업데이트되기도 하고[update]
필요가 없어지면 삭제되기도 하고 [unmount]
 */

const Detail = (props) => {
    let {id} = useParams();
    //:id로 넘겼다면 위와 같이 변수로 지정하여 사용. 
    //useParams()메소드를 사용하여 url에 입력된 값을 받을수 있다.
    let findProduct = props.product.find((x)=>{return x.id == id});

    return  <div className="container">
      <div className="row">
        <div className="col-md-6">
        <img src={process.env.PUBLIC_URL + './img/bag'+(findProduct)+'.webp'} width="100%"></img>
        </div>
        <div className="col-md-6">
             <span>{findProduct.product}</span>
              <p>{findProduct.description}</p>
              <span>{findProduct.price}</span>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
}

export default Detail;