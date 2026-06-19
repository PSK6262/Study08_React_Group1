
import {Route, Routes} from 'react-router'
import { Button, Spinner, Container, Nav, Navbar, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.png'
import Main from './Main'
function Navigation(){
    
    
    return(
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                <Navbar.Brand href="/"><img src={Logo} className='logo'/></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">메인화면으로 돌아가기</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
            </Routes>
        </>
    )
}
export default Navigation