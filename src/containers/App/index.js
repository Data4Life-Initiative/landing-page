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
import logoImage from '../../assets/images/logo192_blue.png'; 

function App() {
  return (
    <div className="App" >
      <header>
        <Navbar expand="lg" variant="dark" >
          <div className="container">
           <Navbar.Brand href="#home"><img src={logoImage}/>Data4Life</Navbar.Brand>
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
      <footer id="footer" >
        <div className="row w-100">
          <div className="col-md-4 col-sm-4">
              <p className="copyright text-xs-center">&copy; 2020-<span id="copyrt"></span> Data4life, Sweden </p>
          </div>
          <div className="col-md-4 col-sm-4">
              <div>
                <a href="https://www.who.int" target="_blank"  > WHO </a> | 
                <a href="https://www.worldometers.info" target="_blank" > Worldometer </a>| 
                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" > COVID-19 </a> 
              </div>
          </div>
           <div className="col-md-4 col-sm-4">
              <div>
                <a href="">  </a> 
              </div>
          </div> 
        </div>
      </footer>
    </div>
  );
}
export default App;
