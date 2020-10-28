import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import WhiteForm from '../../components/WhiteForm/WhiteForm';
import Table from '../../components/Table/Table';

class PanelPage extends React.Component {

    render() {
        const  userData = this.props.location.state;
        const baseUrl = process.env.PUBLIC_URL; // will be /hypercomp
        return (
          <div className="col-12 col-md-8">
            <Header>
              <div>Здраствуйте, {userData.name}</div>
              <Link to={baseUrl + "/"}>Выйти</Link>
            </Header>
            <WhiteForm>
            <Table/>
            </WhiteForm>
          </div>
        );
    }
}

export default PanelPage;
