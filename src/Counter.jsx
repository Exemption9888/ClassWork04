import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
  
    render() {
        return (
            <div className="module">
                <h1><u>Module 2</u></h1>
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>
                    Increment
                </button>
            </div>
        );
    }
}

export default Counter;