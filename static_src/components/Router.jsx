import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import App from './Layout';


export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={ true } path='/' component={ App } />
                <Route
                    exact
                    path='/chat/:chatId/'
                    render={ obj => <App
                        chatId={ Number(obj.match.params.chatId) }
                    />
                    }
                />
                <Route
                    exact
                    path='/profile/'
                    render={ obj => <App />
                    }
                />
                <Redirect to={'/'}/>
            </Switch>

        )
    }
}
