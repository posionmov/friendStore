import React from 'react';
import logo from '../logo.svg';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { PrivateRoute } from '../components/PrivateRoute'

import { history } from '../utils/history'

import { HomePage } from '../pages/home/HomePage';
import { LoginPage } from '../pages/login/LoginPage';
import { RegistrationPage } from '../pages/register/RegisterPage'



class App extends React.Component {
    constructor(props) {
        super(props);
        history.listen(
            (location, action) => {
              //todo alerts
            }
        );
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {/* {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        } */}
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegistrationPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
