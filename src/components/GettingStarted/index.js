import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

class GettingStarted extends React.Component {
  render() {
    return (
      <Jumbotron className="bgimage" display block>
        <div className="container" >
          <h1>Data4Life</h1>
          <p>
             The Data4Life solution is tackling the citizen/employee journey throughout 
             the pandemic to be a contributor, part of a collective impact. Other than a
             superior UX and integration to societal systems for retention, the fundamentals
             of data availability and concerns around digital surveillance. The solution 
             makes it easy for individuals to allow the use of personal data for the public
             good (aka ‘data altruism’) in compliance with data protection and privacy 
             regulations. The solution supports individuals’ risk assessment and decision 
             making and thereby helps save lives and also helps society to a speedy economic
             and social recovery by “unlocking the paralysis”, helping people to make decisions
             that will benefit society. Longer term, this solution can also help prevent future
             outbreaks and enable preventive care.
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
