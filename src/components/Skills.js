import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import tick from '../images/tick.png';
import AR from '../images/AR.png';
import web from '../images/web.png';
import ml from '../images/ML.jpg';
import uiux from '../images/uiux.png';
import unity from '../images/unity.png';
import microsoft from '../images/microsoft.png';
import pr from '../images/pr.png';
import ps from '../images/ps.png';
import './skills.css';

const Skills = () => {
    return(
        <Container fluid id="skills" style={{padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px"}}>Skills</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={AR} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Augmented Reality</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={web} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Web Development</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={ml} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Machine Learning</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={unity} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Unity</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={microsoft} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Microsoft Office</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={uiux} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>UI/UX</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={ps} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Adobe Photoshop</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={pr} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Adobe Premiere</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;