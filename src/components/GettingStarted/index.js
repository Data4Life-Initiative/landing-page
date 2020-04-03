import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

class GettingStarted extends React.Component {
  render() {
    return (
      <Jumbotron>
        <div className="container">
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
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
