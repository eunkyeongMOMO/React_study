import './App.css';
//bottstrap 설치, 활용 
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

//html에서 image 가져다 쓸때 꼭 import로 불러온 다음 사용해야함
//상대주소가 있는 이미지의 경우 그냥 src="절대경로 주소" 넣으면 됨
//public 폴더 아마자를 쓸때에는 <img src={process.env.PUBLIC_URL + '이미지경로'} 이렇게 쓰면됨
// import mainVisual from './img/main01.jpeg';

import product from './data';
/*export, import
다른 파일에 있는 함수, 변수를 가져올때 사용한다. 
한개의 함수를 내보낼때는 export default 변수명;
-> import 변수명(내보낸 이름과 동일하지 않아도 됨) from '파일경로' js 파일의 경우, js을 생략해도된다.
한개 이상의 함수를 내보낼때는 export {변수명, 변수명};
->import {변수명, 변수명} from '파일경로'; 로 적어주면된다.
*/
function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className='logo' href="#home">FREITAG</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='visual'></div>
    <ul className='productList'>

    </ul>

    </div>
  );
}

const products = (props)=>{
  return <li>
    <img src={process.env.PUBLIC_URL + '../public/img/bag'}></img>
    <dl>
      <dt>{props}</dt>
      <dd>{props}</dd>
      <dd>{props}</dd>
    </dl>
  </li>
} 

export default App;
