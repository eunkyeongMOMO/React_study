const Main = (props)=>{
    <>
    <ul className="row product_list">
    {
        props.bagData.map(
            (a, i)=>{
                return<Product key={i} bagData={props.bagData[i]} i={i}></Product>
            }
        )
    }
    </ul>
    </>
}

const Product = (props)=>{

    return <li className="col-md-3">
        <img src={process.env.PUBLIC_URL + './img/bag'+(props.i)+'.webp'} width="400px"/>
        <span>{props.bagData.product}</span>
        <span>{props.bagData.price}</span>
    </li>
}
export default Main;