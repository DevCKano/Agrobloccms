import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const HomeScreen = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>

        <Col md={9}>List of Contacts</Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
