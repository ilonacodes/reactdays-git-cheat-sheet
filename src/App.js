import React, {Component} from 'react';
import './App.css';
import {GitCheatSheet} from './GitCheatSheet';
import {Search} from './Search';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Search/>
                <GitCheatSheet/>
            </div>
        );
    }
}

export default App;
