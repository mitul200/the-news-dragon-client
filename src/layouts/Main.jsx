import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import LeftNev from "../Shared/LeftNev/LeftNev";
import RightNav from "../Shared/Rightnav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="mt-5">
        <Row>
          <Col lg={3}>
           <LeftNev></LeftNev>
          </Col>
          <Col lg={3}>
            <h4>main content Coming ...</h4>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
