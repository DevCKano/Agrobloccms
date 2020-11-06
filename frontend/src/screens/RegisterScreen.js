import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const HandleLogin = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password did not match");
    }
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8001/api/auth/register",
        {
          name,
          email,
          password,
        }
      );
      console.log(data);
      //localStorage.setItem("userLogin", JSON.stringify(data));
      setMessage(data.message);
      history.push("/");
    } catch (error) {
      //alert(error);
      console.log(error);
    }
  };
  return (
    <FormContainer>
      <h2>Agbloc CMS Sign Up</h2>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already a User? <Link to="/login">Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
