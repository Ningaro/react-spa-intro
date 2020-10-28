import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import WhiteForm from '../../components/WhiteForm/WhiteForm';

class HomePage extends React.Component {
  state = {
    testingMod: null
  };
  openTest = () => {
    this.setState({testingMod:!this.state.testingMod})
  }
    render() {
        const userData = this.props.location.state;
        const {testingMod} = this.state;
        return (
          <div className="col-6">
            <Header>
              <div>Здраствуйте, {userData.name}</div>
              <Link to="/">Выйти</Link>
            </Header>
            <div className="row">
              <WhiteForm>
              {testingMod ? (
              <a onClick={this.openTest} className="">Тест.</a>
              ) : (
              <div>
                Ваш стаж - {userData.description}
                <br/>
                Последнее тестирование - {userData.lastTest}
                <br/>
                <div className="d-flex justify-content-center pt-2">
                <button onClick={this.openTest} type="button" className="btn btn-success">Пройти тестирование</button>
                </div>
              </div>
            )}

              </WhiteForm>
                  {console.log(userData)}
            </div>
          </div>
        );
    }
}

export default HomePage;
