import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
class GettingStarted extends React.Component {
  render() {
    return (
      <Jumbotron>
        <div className="container">
          <h1>Data4Life</h1>
          <p>
            This is an opensource initiative to look at using data for 
            good during pandemics, providing services to citizens.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
       </Jumbotron>
    );
  }
}

export default GettingStarted;
