import React from 'react';

const FormLabel = ({formdata}) => {
    return (
        <div>
            <div className='register_labels'
                style={{
                    padding: '5px 10px 5px 10px',
                    backgroundColor: '#ff7c48',
                    display: 'inline-block'
                }}
            >{formdata.config.label}</div>
        </div>
    );
};

export default FormLabel;