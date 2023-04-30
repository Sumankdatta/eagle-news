import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogout=()=>{
    logOut()
    .then(()=>{
      console.log('logout');
    })
    .catch(error=>{
      console.error(error)
    })
  }

  return (
    <div className='sticky-lg-top md-5'>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand ><Link to='/'>Eagle News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>


            </Nav>
            <Nav>
              <>
                {
                  user?.uid ?
                  <>
                  <p className='mt-3'>{user?.displayName}</p>
                  <button onClick={handleLogout} className='border border-0 p-2 ms-2'>Sign Out</button>
                  </>
                  :
                  <>
                 <Link to='/register'> <button className='border border-0 p-2 me-2'>SignUp</button></Link>
                 <Link to='/login'> <button className='border border-0 p-2'>Login</button></Link>
                  </>
                }
              </>
              <Nav.Link eventKey={2} >
                {
                  user?.uid ?
                    <Image style={{ height: '30px' }} src={user?.photoURL} roundedCircle></Image>
                    : <FaUser></FaUser>
                }
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  );
};

export default Header;