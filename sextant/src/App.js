import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner text="Sextant" />
                <Exhibit name="Item1"></Exhibit>
                <Exhibit name="Item2"></Exhibit>
                <Exhibit name="Item3"></Exhibit>
            </div>
        );
    }
}

export default App;
