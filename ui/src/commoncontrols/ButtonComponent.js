import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {BrowserRouter as Redirect} from 'react-router-dom';

export default function ButtonComponent(props) {
    
    return (
        <>
        <Container>
            <Row className='mt-3'>
                <Col lg={12} md={8}>
                    <Button variant={props.variant} size="lg" className='custombtn w-25' onClick={props.triggerClick}>
                        {props.btnName}
                    </Button>
                </Col>
            </Row>
        </Container>
        </>
    );
}
