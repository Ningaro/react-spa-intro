import React from 'react';
import Auth from '../../components/Auth/Auth';

class HomePage extends React.Component {

    render() {

        return (
          <div className="d-flex align-items-center justify-content-center col-4">
                  <Auth/>
          </div>
        );
    }
}

export default HomePage;
