import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
// import { Form } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [appceted , setAppceted] = useState(false)
  const  {creatUser} = useContext(AuthContext)
  // console.log(creatUser);


  const handelRegister = (event)=>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const name = form.name.value
    console.log(email,password,name);
    creatUser(email , password)
    .then(result => {
      const loggedUser = result.user
      console.log(loggedUser);
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  const handelCheackOut =(event)=>{
    setAppceted(event.target.checked);


  }


  return (
    <Container className="mx-auto w-25">
      <h4 className="mt-2">Please Register !!!</h4>
      <Form onSubmit={handelRegister}>
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
          onClick={handelCheackOut}
            type="checkbox"
            label={<>Appcets <Link to='/trams'>them & conditions</Link></>}
            name="accept"
            className=" text-secondary"
            
          />
        </Form.Group>
        <Button variant="secondary"  disabled={!appceted} type="submit" className="px-5 ">
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
