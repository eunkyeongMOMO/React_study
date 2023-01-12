import './App.css';
//bottstrap 설치, 활용 
import product from './data.js';
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

//html에서 image 가져다 쓸때 꼭 import로 불러온 다음 사용해야함
//상대주소가 있는 이미지의 경우 그냥 src="절대경로 주소" 넣으면 됨
//public 폴더 아마자를 쓸때에는 <img src={process.env.PUBLIC_URL + '이미지경로'} 이렇게 쓰면됨
// import mainVisual from './img/main01.jpeg';
import About from './about';
import Main from './Main';
import Detail from './Detail';
/*export, import
다른 파일에 있는 함수, 변수를 가져올때 사용한다. 
한개의 함수를 내보낼때는 export default 변수명;
-> import 변수명(내보낸 이름과 동일하지 않아도 됨) from '파일경로' js 파일의 경우, js을 생략해도된다.
한개 이상의 함수를 내보낼때는 export {변수명, 변수명};
->import {변수명, 변수명} from '파일경로'; 로 적어주면된다.
*/
import {Routes,Route,Link,useNavigate, Outlet} from 'react-router-dom';
/*
router 사용시 반드시 import해와야한다. 
<Routes>
<Route path="경로지정" element={해당 경로에서 출력할 컴포넌트/태그}/>
</Routes>
<Link to="Route에서 지정한 경로"></Link>
useNavigate? Link대신 사용 페이지 이동하는 함수로 경로말고(-1)뒤로가기 (1)앞으로가기로도 사용가능
let navigate = useNavigate();
<Nav onClick={()=>{navigate('/about')}}></> 
*/
function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className='logo'><Link to="/">FREITAG</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('./about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('./event')}}>Event</Nav.Link>
            {/* useNavigate 이용하여 페이지 이동시키기 (Link대신 사용) */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Main product={product} navigate={navigate}/>}>
        <Route path="history" element={<div>히스토리보여주긔</div>}/>
        {/* 
        서브경로 만들수 있는 nested routes
        2뎁스 경로를 만들거나 여러 페이지를 같이 보여줄때 유용함 
        페이지안에 같이 넣고싶은 위치에 <Outlet></Outlet>으로 넣을 공간을 지정해줘야하면 됨
        동일한 코드 중복을 막을수있음
        */}
      </Route>
      <Route path='*' element={<div className='info'>주소를 잘못입력하셨습니다.</div>}/>
      {/* 없는 주소일때, 혹은 오타로 잘못입력했을때 띄워주는 페이지 */}
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:id' element={<Detail product={product}/>}/>
      {/* URL파라미터 사용하기  상세페이지등 동일한 ui의 새부페이지가 여러개일때 변수를 넘겨 사용하는것*/}
      <Route path='/event' element={<Event/>}>
        <Route path='one' element={<div className='eventInner'>신촌에서 집까지 너무 먼제 언제가지?</div>}/>
        <Route path='two' element={<div className='eventInner'>이거까지 마무리하고 집에가서 더해야지 404페이지도해야함</div>}/>
      </Route>
       </Routes>
    </div>
  );
}

const Event = ()=>{
  return <div>
    <p className='info'>오늘의 이벤트!</p>
    <Outlet></Outlet>
  </div>
}

export default App;
