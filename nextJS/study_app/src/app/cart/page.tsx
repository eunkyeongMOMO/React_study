

const Cart = () =>{

    const ProductData = [
        {product:'Heart Balloon Sweat Shirt-Red',price:'45,700원'},
        {product:'헤비 코튼 오버 럭비 맨투맨_Midnight Blue',price:'71,000원'},
        {product:'Classic Flower MTM [Black]',price:'55,600원'}
    ]

    return(
      <section>
            <h3>장바구니 페이지입니다.</h3>
            <ul>
            {
                ProductData.map((item, index)=>{
                    return(
                        <li key={index}>
                            <p>삼풍명 : {item.product}</p>
                            <p>가격 : {item.price}</p>
                        </li>
                    )
                })
            }
            </ul>
        </section>
    )
}

export default Cart;