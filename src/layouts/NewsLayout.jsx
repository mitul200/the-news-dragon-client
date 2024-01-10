import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightNav from "../Shared/Rightnav/RightNav";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const NewsLayout = () => {
  return (
    <div>
        <Header></Header>
      <Container className="mt-5">
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
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

export default NewsLayout;
