import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class UsefulResources extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xl={4} lg={4} md={12} xs={12} className="d-flex">
            <Card className="pb-4 mb-4">
              <Card.Header >
                <Card.Title className="mb-0">Protect yourself</Card.Title> 
              </Card.Header> 
              <Card.Body>
                <Card.Text>
                    Individuals an app to self-assess their situation and risk of unknowingly 
                    transmitting the virus and take action accordingly. It also gives them a
                    means to contribute their data, in life and for posthumous data donation  
                    for the public good.  
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={12} xs={12}>
            <Card className="pb-4 mb-4">
             <Card.Header >
                <Card.Title className="mb-0">Protect the society</Card.Title> 
              </Card.Header> 
              <Card.Body>
                <Card.Text>
                     By re-using the contributed personal data for population health research 
                     the solution also supports predictive health recommendations and helps 
                     to prevent spread and future breakouts. The solution also opens up for a
                     posthumous data donation register to give custodianship to e.g. Socialstyrelsen.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={12} xs={12}>
            <Card className="pb-4 mb-4">
              <Card.Header >
                <Card.Title className="mb-0">Help the authority</Card.Title> 
              </Card.Header> 
              <Card.Body>
                <Card.Text>
                    Authorities can make informed decisions based on the data collected 
                    through Data4Life, optimizing the public resources (e.g. identifying 
                    hotspots for sanitation, contact tracing, resource planning at nursing 
                    homes). By being transparent, authorities can create trust in the society 
                    and reduce panic in emergency situations.
                </Card.Text>
          
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UsefulResources;
