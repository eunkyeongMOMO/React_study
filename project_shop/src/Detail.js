import { useParams } from "react-router-dom"

const Detail = (props) => {
    let {id} = useParams()
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