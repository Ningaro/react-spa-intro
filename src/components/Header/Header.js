import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="row pb-3 pt-3">
          <div className='header col d-flex justify-content-between p-2'>
          {props.children}
          </div>
        </div>
    );
}

export default Header;
