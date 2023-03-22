import {Route, Routes, link, useNavigate, Outlet} from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';
import './App.css';
import data from './data';
import Main from './main';


function App() {
  let navigate=useNavigate();
  let bagData = data;
  return (
    <div className="App">
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>MOMO SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="visual"></div>
    <Main bagData={bagData}/>
    </div>
  );
  
}

export default App;
