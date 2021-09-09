import React from 'react';
import classes from './App.module.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage';

function App() {
    return (
        <div className={classes.app}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
