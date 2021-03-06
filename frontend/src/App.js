import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddScreen from "./screens/AddScreen";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/addcontact" component={AddScreen} />
            <Route path="/register" component={RegisterScreen} />
          </Container>
        </main>
      </Router>
    </>
  );
}

export default App;
