import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import TestsPage from './pages/tests';
import PanelPage from './pages/panel';

class App extends React.Component {
    render() {
        return (
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/tests' component={TestsPage} />
                        <Route path='/panel' component={PanelPage} />
                    </Switch>
        );
    }
}

export default App;
