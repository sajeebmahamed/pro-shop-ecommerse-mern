import React from 'react';
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title> { title } </title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'Welcome to Mern Pro Shop',
    description: 'Explore world best products in your best price',
    keywords: 'latop, phone, mobile'
}

export default Meta;