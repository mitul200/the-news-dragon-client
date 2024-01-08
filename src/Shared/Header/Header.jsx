import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>{" "}
        <Marquee className="text-danger" speed={50}>
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... 
        </Marquee>
      </div>
      {/* nav-bar */}
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Button variant="secondary">Log In</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </Container>
  );
};

export default Header;
