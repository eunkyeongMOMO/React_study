import { Outlet } from 'react-router-dom';
import product from './data.js';
const Main = () =>{

 return <>
     <div className='visual'></div>
        <ul className='productList row'>
        {/* 데이터 출력 확인
        <li className='col-md-4'>
        <img src={process.env.PUBLIC_URL + './img/bag1.webp'} width="400px"></img>
            <span>{product[0].product}</span>
            <p>{product[0].description}</p>
            <span>{product[0].price}</span>
        </li> */}
        {
          product.map(
            (a, i)=>{
              return <Products product={product[i]} i={i}></Products>
            }
            //i는 이미지 순서번대로 뽑기위해 넘긴 props -> i는 0부터 시작하니 +1해줘야함
          )
        }
        </ul>
        <Outlet></Outlet>
        {/* 하위 페이지 접속시 이 위치에 하위페이지가 뜹니당 */}
    </>
    }
    
    const Products = (props)=>{
      return <li className='col-md-3'>
        <img src={process.env.PUBLIC_URL + './img/bag'+(props.i+1)+'.webp'} width="400px"></img>
          <span>{props.product.product}</span>
          <p>{props.product.description}</p>
          <span>{props.product.price}</span>
      </li>
    } 
export default Main;    