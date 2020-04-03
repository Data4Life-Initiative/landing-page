import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table
} from "react-bootstrap";

// components
import GettingStarted from './../../components/GettingStarted'
import UsefulResources from './../../components/UsefulResources'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <div className="container">
            <Navbar.Brand href="#home">MyData4Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Admin Dashboard</Nav.Link>
                <Nav.Link href="#link">User Portal</Nav.Link>
                <Nav.Link href="#link">Developers</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>

      <GettingStarted></GettingStarted>
      <UsefulResources></UsefulResources>
      <div className="container"></div>
    </div>
  );
}
export default App;
