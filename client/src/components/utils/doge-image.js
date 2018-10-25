import React from 'react';
import Doge from '../../resources/images/doge.png'

const DogeImage = ({padding}) => {
    return (
        <div style={{
            background: `url(${Doge}) center no-repeat`,
            padding: padding,
            margin: 'auto',
            backgroundSize: 'contain',
            border: '10px solid #ff7c48',
            borderRadius: '50%',
        }}
        ></div>
    );
};

export default DogeImage;