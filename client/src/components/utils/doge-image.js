import React from 'react';
import Doge from '../../resources/images/doge.png'

const DogeImage = ({padding}) => {
    return (
        <div style={{
            background: `url(${Doge}) center no-repeat`,
            padding: padding,
            margin: 'auto',
            backgroundSize: '100%'
        }}
        className='circle'
        ></div>
    );
};

export default DogeImage;