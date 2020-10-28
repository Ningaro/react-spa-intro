import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import TestsPage from './pages/tests';
import PanelPage from './pages/panel';

class App extends React.Component {
    render() {
        const baseUrl = process.env.PUBLIC_URL; // will be /hypercomp
        return (
                    <Switch>
                        <Route exact path={baseUrl + "/"} component={HomePage} />
                        <Route path={baseUrl + '/tests'} component={TestsPage} />
                        <Route path={baseUrl + '/panel'} component={PanelPage} />
                    </Switch>
        );
    }
}

export default App;
