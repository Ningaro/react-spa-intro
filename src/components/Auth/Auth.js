import React from 'react';
import './Auth.css';
import { Redirect } from 'react-router-dom';
import WhiteForm from '../WhiteForm/WhiteForm';
import users from '../../users';


class Auth extends React.Component {
    state = {
        login: '',
        loginError: null,
        password: '',
        passwordError: null,
        user: null,
        admin: null,
        userData: null
    };

    loginChangeHandler = event => {
        const login = event.target.value;
        this.setState({
            login,
            loginError: !login
        });
    };

    passwordChangeHandler = event => {
        const password = event.target.value;
        this.setState({
            password,
            passwordError: !password
        });
    };

    submitHandler = event => {
        event.preventDefault();
        const { login, password } = this.state;
        console.log(login,password);

        if (login && password) {

          if ((users.find(user => user.id === login) != null)&&(users.find(user => user.id === login).id != 'admin')) this.setState({ user: true, userData: users.find(user => user.id === login) });
          if (login == 'admin') this.setState({ admin: true, userData: users.find(user => user.id === login) });
            this.setState({
                login: '',
                loginError: false,
                password: '',
                passwordError: false
            });
            return;
        }

        this.setState({
            loginError: !login,
            passwordError: !password
        });
    };

    render() {
      const { login, loginError, password, passwordError, user, admin, userData } = this.state;
    return (
        <WhiteForm>
          {console.log('user: '+user, 'admin: '+admin)}
        {user ? (<Redirect push to={{ pathname: "/tests", state: userData }} />) : (null)}
        {admin ? (<Redirect push to={{ pathname: "/panel", state: userData }} />): (null)}
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label>Логин</label>
              <input type="text" value={login} onChange={this.loginChangeHandler} className="form-control"></input>
            </div>
            <div className="form-group">
              <label>Пароль</label>
              <input type="password" value={password} onChange={this.passwordChangeHandler} className="form-control"></input>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input"></input>
              <label className="form-check-label">Запомнить</label>
            </div>
            <button type="submit" className="btn btn-primary">Войти</button>
          </form>
        </WhiteForm>
    );
  }
}

export default Auth;
