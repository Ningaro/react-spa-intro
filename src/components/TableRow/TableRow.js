import React from 'react';
import './TableRow.css';

import { Link } from 'react-router-dom';

function TableRow(props) {
    const user = props.user;
    return (
      <tr>
        <th scope="row">{user.id}</th>
        <td>*</td>
        <td>{user.name}</td>
        <td>{user.description}</td>
        <td>{user.lastTest}</td>
      </tr>
    );
}

export default TableRow;
