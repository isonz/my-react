import React from "react";
import './example2.css';

function Welcome1(props) {
    return <h2>Hello, {props.name}</h2>;
}

class Welcome2 extends React.Component {
    render() {
        return <h2>Hello, {this.props.name}</h2>;
    }
}

function Example2(props) {
    return (
        <div className="examples example-2">
            <h1>Example 2 : 组件 & Props</h1>
            <Welcome1 name="Sara" />
            <Welcome2 name="Cahal" />
            <Welcome2 name="Edite" />
        </div>
    );
}
export default Example2;
