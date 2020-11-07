import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const HomeScreen = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>

        <Col md={9}>
          <Row>
            <Col md={6}>
              <Card className="my-3 py-3 rounded">
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
