import './App.css';
//bottstrap 설치, 활용 
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

//html에서 image 가져다 쓸때 꼭 import로 불러온 다음 사용해야함
//상대주소가 있는 이미지의 경우 그냥 src="절대경로 주소" 넣으면 됨
//public 폴더 아마자를 쓸때에는 <img src={process.env.PUBLIC_URL + '이미지경로'} 이렇게 쓰면됨
// import mainVisual from './img/main01.jpeg';

import product from './data.js';
/*export, import
다른 파일에 있는 함수, 변수를 가져올때 사용한다. 
한개의 함수를 내보낼때는 export default 변수명;
-> import 변수명(내보낸 이름과 동일하지 않아도 됨) from '파일경로' js 파일의 경우, js을 생략해도된다.
한개 이상의 함수를 내보낼때는 export {변수명, 변수명};
->import {변수명, 변수명} from '파일경로'; 로 적어주면된다.
*/
import {Routes,Route,Link} from 'react-router-dom';
/*
router 사용시 반드시 import해와야한다. 
<Routes>
<Route path="경로지정" element={해당 경로에서 출력할 컴포넌트/태그}/>
</Routes>
<Link to="Route에서 지정한 경로"></Link>
*/
function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className='logo'><Link to="/">FREITAG</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
  );
}

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

const About = () =>{
  return <>
  <div className='subVisual'></div>
    <div className='infoTop'>
      <div>HOME > ABOUT > HISTORY</div>
      <span>THE BIRTH OF FREITAG</span>
      <p>With a sewing machine in the kitchen and a laundry in the bathtub: Oliver Gemperle, a former roommate of Daniel and Markus Freitag, tells us how the FREITAG story began back in the early 90s.</p>
    </div>
    <ul className='history'>
    <li>
      <span>LET'S GO BACK TO 1993</span>
      <p>My room in the apartment cost me all of 300 bucks. No wonder. The flat was a dump, the plaster was peeling off the walls in pieces as big as plates, and wheezing away in the bathroom was a gas-powered flow water heater. Directly in front of the house, trucks thundered noisily across the bridge that cut the city in two.</p>
      <img src={process.env.PUBLIC_URL + './img/historyimg1.webp'} ></img>
      <p>One of my two roommates was a guy called Markus Freitag. I only found out more about his plans one gray afternoon when he returned from one of the city's less salubrious industrial areas. In the trailer attached to his bike was an old tarp he'd managed to procure from a trucking company. He heaved the bulky, stinking monster of a tarp up the staircase and, with one final effort, dumped it into our living room. "I'm gonna make a bag out of it," he said. A bag. For cyclists, he explained, but one that would work for other people too. All made of recycled stuff like tarps and inner tubes and car safety belts. Right.</p>
    </li>
    <li>
      <span>BETWEEN MATTRESS AND STEREO SYSTEM</span>
      <p>In his room, between the mattress and his stereo system, Markus spread out the washed truck tarp and drew a pattern on it. Our apartment was transformed into a bag factory. When I got up in the morning – well, let's say noonish – and wanted to take a shower, the bath was awash with bits of truck tarp floating in this blackish brew. The corridor was packed with boxes full of bicycle inner tubes. Rattling away in the kitchen from morning till night was an industrial sewing machine that effortlessly drowned out the street noise. </p>
      <img src={process.env.PUBLIC_URL + './img/historyimg2.avif'} ></img>
      <p>In the meantime, Daniel had got back from a trip to the US and installed a computer and printer in the last free bit of space in the apartment. He was developing a database for orders, deliveries, inventories, etc. I had no idea whether he’d moved in or whether he just worked all the way through the night. Did the two brothers ever sleep? Who knows? These were exceptional circumstances, and I knew it couldn’t go on like that for ever. </p>
    </li>
    
  </ul>
  </>
}

export default App;
