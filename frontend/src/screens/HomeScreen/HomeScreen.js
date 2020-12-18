import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import Product from '../../components/Product/Product';
const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <>
            <h3> Latest Products </h3>   
            {
                loading ? <h3> loading </h3> : error ? <h3> {error} </h3> :
                    <Row>
                        {
                             products.map((product) => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))
                        }
                    </Row>
            }
            
        </>
    );
};

export default HomeScreen;