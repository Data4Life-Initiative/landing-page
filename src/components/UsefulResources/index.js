import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class UsefulResources extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/100" />
              <Card.Body>
                <Card.Title>COVID-19</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/100" />
              <Card.Body>
                <Card.Title>Basic protective measures</Card.Title>
                <Card.Text>
                <ul>
                  <li>Wash your hands frequently</li>
                  <li>Maintain social distancing</li>
                  <li>Avoid touching eyes, nose and mouth</li>
                  <li>Practice respiratory hygiene</li>
                  <li>If you have fever, cough and difficulty breathing, seek medical care early</li>
                  <li>Stay informed and follow advice given by your healthcare provider</li>
                </ul> 
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/100" />
              <Card.Body>
                <Card.Title>Protection measures</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Follow the guidance outlined </li>
                    <li>Stay at home if you begin to feel unwell, even with mild symptoms such as headache and slight
                        runny nose, until you recover. 
                    </li>
                    <li>If you develop fever, cough and difficulty breathing, seek medical advice promptly as this
                        may be due to a respiratory infection or other serious condition. 
                        Call in advance and tell your provider of any recent travel or contact with travelers.
                    </li>
                  </ul>
                 </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UsefulResources;
