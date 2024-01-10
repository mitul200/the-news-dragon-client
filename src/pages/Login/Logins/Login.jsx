import { Button, Col, Container, Row } from "react-bootstrap";
// import { Form } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Form } from "react-router-dom";

const Login = () => {
  return (
    <Container className="mx-auto w-25">
      <h4 className="mt-2">Please Login !!!</h4>
           <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="px-5 ">
        LogIn
      </Button>
      <br />
      <Form.Text className=" fw-bold text-secondary">
         Dont Have an account? <Link to='/register' className="text-danger ">Register</Link>
        </Form.Text>
    </Form>
    
    </Container>
  );
};

export default Login;
