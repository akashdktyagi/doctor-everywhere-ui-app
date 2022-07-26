import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UserProfileComponent = () => {
    return (
        <>
            <Container fluid className='w-75 my-5'>
                <Row>
                    <h1>User profile</h1>
                </Row>
            </Container>
        </>
    );
}

export default UserProfileComponent;
