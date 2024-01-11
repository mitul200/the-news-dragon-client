import { useContext } from "react";
import { Button, Container} from "react-bootstrap";
// import { Form } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { Form } from "react-router-dom";

const Login = () => {
  const {singIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  console.log('login page location',location);
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const from = location?.state?.form?.pathname || '/'

    console.log(email, password, name);
    singIn(email , password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser);
      navigate(from, { replace: true })
    })
    .catch(error =>{
      console.log(error);
    })
  };

  return (
    <Container className="mx-auto w-25">
      <h4 className="mt-2">Please Login !!!</h4>
      <Form onSubmit={handelLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="px-5 ">
          LogIn
        </Button>
        <br />
        <Form.Text className=" fw-bold text-secondary">
          Dont Have an account?{" "}
          <Link to="/register" className="text-danger ">
            Register
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
