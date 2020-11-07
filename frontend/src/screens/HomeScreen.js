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
              <Card style={{ width: "20rem" }} className="card-side">
                <Card.Body>
                  <Card.Title>Contact Card</Card.Title>
                  <Row>
                    <Col md={6}>
                      <Card.Text>
                        <i className="fas fa-user-nurse"></i> Mubarak Aminu
                      </Card.Text>
                      <Card.Text>
                        <i className="fas fa-envelope"></i>mubi@gmail.com
                      </Card.Text>
                    </Col>
                    <Col md={6}>
                      <Card.Text>
                        <i className="fas fa-phone-square-alt"></i> 08037287834
                      </Card.Text>
                      <Card.Text>
                        <i className="fas fa-birthday-cake"></i> 01-01-2000
                      </Card.Text>
                      <Card.Text>
                        <i class="fas fa-asterisk"></i> 01-01-2000
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card style={{ width: "20rem" }} className="card-side">
                <Card.Body>
                  <Card.Title>Contact Card</Card.Title>
                  <Row>
                    <Col md={6}>
                      <Card.Text>
                        <i className="fas fa-user-nurse"></i> Mubarak Aminu
                      </Card.Text>
                      <Card.Text>
                        <i className="fas fa-envelope"></i>mubi@gmail.com
                      </Card.Text>
                    </Col>
                    <Col md={6}>
                      <Card.Text>
                        <i className="fas fa-phone-square-alt"></i> 08037287834
                      </Card.Text>
                      <Card.Text>
                        <i className="fas fa-birthday-cake"></i> 01-01-2000
                      </Card.Text>
                      <Card.Text>
                        <i class="fas fa-asterisk"></i> 01-01-2000
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card style={{ width: "20rem" }} className="card-side">
                <Card.Body>
                  <Card.Title>Contact Card</Card.Title>
                  <Row>
                    <Col md={6}>
                      <Card.Text>
                        <i className="fas fa-user-nurse"></i> Mubarak Aminu
                      </Card.Text>
                      <Card.Text>
                        <i className="fas fa-envelope"></i>mubi@gmail.com
                      </Card.Text>
                    </Col>
                    <Col md={6}>
                      <Card.Text>
                        <i className="fas fa-phone-square-alt"></i> 08037287834
                      </Card.Text>
                      <Card.Text>
                        <i className="fas fa-birthday-cake"></i> 01-01-2000
                      </Card.Text>
                      <Card.Text>
                        <i class="fas fa-asterisk"></i> 01-01-2000
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card style={{ width: "20rem" }} className="card-side">
                <Card.Body>
                  <Card.Title>Contact Card</Card.Title>
                  <Row>
                    <Col md={6}>
                      <Card.Text>
                        <i className="fas fa-user-nurse"></i> Mubarak Aminu
                      </Card.Text>
                      <Card.Text>
                        <i className="fas fa-envelope"></i>mubi@gmail.com
                      </Card.Text>
                    </Col>
                    <Col md={6}>
                      <Card.Text>
                        <i className="fas fa-phone-square-alt"></i> 08037287834
                      </Card.Text>
                      <Card.Text>
                        <i className="fas fa-birthday-cake"></i> 01-01-2000
                      </Card.Text>
                      <Card.Text>
                        <i class="fas fa-asterisk"></i> 01-01-2000
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
