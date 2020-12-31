import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                       <div style={{ height: '1rem' }}>
                        MERN || PRO SHOP 
                       </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;