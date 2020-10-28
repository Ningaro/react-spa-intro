import React from 'react';
import './WhiteForm.css';

import { Link } from 'react-router-dom';

function WhiteForm(props) {
    return (
        <div className='WhiteForm col p-3'>
        {props.children}
        </div>
    );
}

export default WhiteForm;
