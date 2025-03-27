import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import './project.css'
import data from '../assets/data.png'
import pred from '../assets/pred.jpg'
import Frame from '../assets/Frame.jpg'
import Dash from '../assets/Dash.jpg'
function Projectoverview() {
  return (
     <div>
       <h2 className="pro"> Project Over View</h2>
         <Container className="project-container">
         
      <Row className="justify-content-center">
        
        {/* First Card */}
        <Col md={7} sm={9} xs={19}>
          <Card className="project-card">
            <Card.Img variant="top" src={data} />
            <Card.Body>
              <Card.Title>Data-Driven AI Model
              </Card.Title>
              <Card.Text>
              
                  Our project utilizes a sophisticated AI
                 model that is trained on extensive clinical trial datasets, molecular compositions,  pharmacokinetic and pharmacodynamic
                  properties. This model aims to enhance drug discovery by providing accurate predictions based on historical data.

              </Card.Text>
              <br></br>
              <Button variant="primary">Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

       
        <Col md={4} sm={6} xs={12}>
          <Card className="project-card">
            <Card.Img variant="top" src={pred} />
            <Card.Body>
              <Card.Title>Predictive Simulation Engine
              </Card.Title>
              <Card.Text>
                <br></br>
               
              We have developed a predictive
simulation engine that effectively models drug interactions within virtual human and animal environments. This
engine allows researchers to visualize potential outcomes of drug combinations before real-would testing.

              </Card.Text>
              <br></br>
              <Button variant="primary">Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

       
        <Col md={4} sm={6} xs={12}>
          <Card className="project-card">
            <Card.Img variant="top" src={Dash} />
            <Card.Body>
              <Card.Title>User-Friendly Dashboard
              </Card.Title>
              <Card.Text>
              <h4>Interface</h4>
The dashboard interface is designed for researchers to easily input drug parameters and receive real-time
f eights on predicted outcomes. This feature enhances the usability of our project and facilitates informed
decision-making.

              </Card.Text>
              <br></br>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={6} xs={12}>
          <Card className="project-card">
            <Card.Img variant="top" src={Frame} />
            <Card.Body>
              <Card.Title>Regulatory Framework
              </Card.Title>
              <Card.Text>
             <h4> Integration</h4>
              Our project incorporates integration with regulatory frameworks to ensure compliance with safety and ethical guidelines.
               This alignment with regulations is crucial for the acceptance and implementation of our findings in real-world applications
              </Card.Text>
              <br></br>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
     </div>
  );
}

export default Projectoverview;
