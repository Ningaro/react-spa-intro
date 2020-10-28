import React from 'react';
import './Table.css';
import users from '../../users';
import { Link } from 'react-router-dom';
import TableRow from '../TableRow/TableRow';

function Table(props) {
    return (
      <div className="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Login</th>
              <th scope="col">Paswword</th>
              <th scope="col">Имя</th>
              <th scope="col">Уровень навыков</th>
              <th scope="col">Дата и время прохождения теста</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
                        <TableRow key={user.id} user={user} />
                    ))}
          </tbody>
        </table>
      </div>
    );
}

export default Table;
