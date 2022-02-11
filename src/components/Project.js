import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Project = () => {
    return(
        <Container fluid id="projects" style={{backgroundColor: "#343a40", padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#dee2e6"}}>Projects</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>LandPro</Card.Title>
                            <Card.Text>
                            Landpro is an application that provides property rental/sale and purchase services, 
                            making it easier to find and advertise properties.
                            </Card.Text>
                            <form action="https://landpro.id/" method="get" target="_blank">
                            <Button type="submit" variant="primary">Landpro</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%', margin: "20px 0" }}>
                        <Card.Body>
                            <Card.Title>Mono</Card.Title>
                            <Card.Text>
                            Mono is an AR game created by Unity. Won "The Best Augmented Reality Game" in Global Game Jam 2022
                            </Card.Text>
                            <form action="https://globalgamejam.org/2022/games/mono-1" method="get" target="_blank">
                            <Button type="submit" variant="primary">Mono</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Elert</Card.Title>
                            <Card.Text>
                            Elert is an application that lets users report any harassment cases in their area.
                            </Card.Text>
                            <form action="https://devpost.com/software/alert-731fwb?ref_content=my-projects-tab&ref_feature=my_projects" method="get" target="_blank">
                            <Button type="submit" variant="primary">Elert</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Project;