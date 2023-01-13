import {Route, Routes, link, useNavigate, Outlet} from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';
import './App.css';
import bagData from './data';
import Main from './main';
function App() {
  let navigate=useNavigate();

  return (
    <div className="App">
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Main></Main>
      {/* <Routes>
        <Route path='/' element={<Main bagData={bagData}/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
