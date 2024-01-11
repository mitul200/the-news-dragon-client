
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const { user , logOut } = useContext(AuthContext);

    const handelLogout=()=>{
      logOut()
      .then()
      .catch(error => console.log(error) )
    }
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link to="/category/0" className="text-decoration-none">
                  Home
                </Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <p className='px-2'>{user&& user.email}</p>
              {user &&
                <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
                }
             {user ?<Button variant="secondary" onClick={handelLogout}>Log Out</Button>: <Link to='/login'><Button variant="secondary">Log In</Button></Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default Navigation;