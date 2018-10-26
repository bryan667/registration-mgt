import React from 'react';

const LargeButton = ({clickYeah}) => {
    return (
        <div>
            <div className='large_button'
                onClick={(event)=> clickYeah(event)}
            >Register</div>
        </div>
    );
};

export default LargeButton;