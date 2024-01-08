import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg1 from '../../assets/bg1.png'

const RightNav = () => {
  return (
    <div>
      <h4>log in</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> LogIn with Google
      </Button>{" "}
      <Button variant="outline-secondary">
        <FaGithub /> LogIn with Github
      </Button>{" "}
      <div>
        <h4 className="text-secondary">Find Us On</h4>

        <ListGroup className="mt-5">
          <ListGroup.Item><FaFacebook/> facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg1} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
