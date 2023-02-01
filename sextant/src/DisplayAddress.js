import React, { Component } from 'react';

class DisplayAddress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            address: null
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then((response) => response.json())
            .then((data) => this.setState({ address: data.ip }));
    }

    render() {
        return (
            <span className="DisplayAddress">
                {this.state.address}
            </span>
            );
    }
}

export default DisplayAddress