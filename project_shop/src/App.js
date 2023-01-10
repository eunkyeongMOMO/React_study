import './App.css';
//bottstrap 설치, 활용 
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
//html에서 image 가져다 쓸때 꼭 import로 불러온 다음 사용해야함
//상대주소가 있는 이미지의 경우 그냥 src="절대경로 주소" 넣으면 됨
//public 폴더 아마자를 쓸때에는 <img src={process.env.PUBLIC_URL + '이미지경로'} 이렇게 쓰면됨
// import mainVisual from './img/main01.jpeg';

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

    <div className='visual'>

    </div>

    </div>
  );
}

export default App;
