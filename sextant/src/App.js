import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import DisplayAddress from './DisplayAddress';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner text="Sextant" />
                <Exhibit name="IPV4 Address">
                    <DisplayAddress url="https://api.ipify.org?format=json"></DisplayAddress>
                </Exhibit>
                <Exhibit name="IPV6 Address">
                    <DisplayAddress url="https://api64.ipify.org?format=json"></DisplayAddress>
                </Exhibit>
            </div>
        );
    }
}

export default App;
