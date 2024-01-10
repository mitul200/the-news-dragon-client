import { Button, Container } from "react-bootstrap";
// import { Form } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="mx-auto w-25">
      <h4 className="mt-2">Please Register !!!</h4>
      <Form>
        {/* name--site */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </Form.Group>
        {/* photo-site */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Photo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Photo Url"
            name="photo"
            required
          />
        </Form.Group>
        {/* Email--site */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>
        {/* password--site */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Apcets them & conditions"
            name="accept"
            className=" text-secondary"
          />
        </Form.Group>
        <Button variant="secondary" type="submit" className="px-5 ">
          Register
        </Button>
        <br />
        <Form.Text className=" fw-bold text-secondary">
          Already Have an account? Please{" "}
          <Link to="/login" className="text-danger ">
            LogIn
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
