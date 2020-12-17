import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import products from '../../products';
const HomeScreen = () => {
    return (
        <>
            <h3> Latest Products </h3>   
            <Row>
                {
                    products.map((product) => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Product key={product._id} product={product} />
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default HomeScreen;