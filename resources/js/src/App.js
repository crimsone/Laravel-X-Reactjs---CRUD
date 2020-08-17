import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Mapping from './components/Mapping';

const App = () => {
    return (
        <Router className="App_Container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/edit/:id">
                    <Edit />
                </Route>
                <Route path="/mapping">
                    <Mapping />
                </Route>
            </Switch>
        </Router>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));