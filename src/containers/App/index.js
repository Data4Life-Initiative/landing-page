import React from 'react';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">MyData4Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Admin Dashboard</Nav.Link>
                  <Nav.Link href="#link">User Portal</Nav.Link>
                  <Nav.Link href="#link">Developers</Nav.Link>
                  <Nav.Link href="#link">About Us</Nav.Link>

              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="container">
       
      </div>
    </div>
  );
}
export default App;