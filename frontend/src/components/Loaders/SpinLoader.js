import React from 'react';
import { Spinner } from 'react-bootstrap';
const SpinLoader = () => {
    return (
        <Spinner
            animation='border'
            role='status'
            style={{
                margin: 'auto',
                display: 'block'
            }}
        >
            <span className='sr-only'> loading... </span>
        </Spinner>
    );
};

export default SpinLoader;