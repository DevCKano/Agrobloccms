import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const AddScreen = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [anniversary, setAnniversary] = useState("");
  const [birthday, setBirthday] = useState("");

  const HandleAddContact = async (e) => {
    e.preventDefault();
    const contact = {
      fullname,
      email,
      phone_number,
      anniversary,
      birthday,
    };
    console.log(contact);
    const { data } = await axios.post(
      "http://localhost:5000/api/contacts",
      contact
    );
    console.log(data);
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <h2>Add Contact</h2>
          <Form onSubmit={HandleAddContact}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="fullname">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="phone_number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="Anniversary">
              <Form.Label>Anniversary</Form.Label>
              <Form.Control
                type="date"
                value={anniversary}
                onChange={(e) => setAnniversary(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="birthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Add Contact
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddScreen;
