import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import App from './Layout';
import Profile from "./profile/Profile";
const NoMatchPage = () => {
    return(
        <h3>404 - Not Found</h3>
    );
};
export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={ true } path='/' component={ App } />
                <Route exact path='/chat/:chatId/' render={ obj => <App chatId={ Number(obj.match.params.chatId) }
                    />
                    }
                />
                <Route exact ={true}
                       path='/profile/'
                       component={ Profile } />
                <Route component={NoMatchPage}/>
            </Switch>

        )
    }
}
