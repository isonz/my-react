import React from "react";
import './example3.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('componentWillUnmount');
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


function Example3(props) {
    return (
        <div className="examples example-3">
            <h1>Example 3 : State & 生命周期</h1>
            <Clock />
            <Clock />
        </div>
    );
}

export default Example3;
