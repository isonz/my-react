import React from "react";
import {Link} from "react-router-dom";
import {renderRoutes} from "react-router-config";


function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="##" onClick={handleClick}>
            Click me
        </a>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    // 注意: 这是 *实验性* 语法。
    handleClick1 = () => {
        console.log('this is:', this);
    }

    deleteRow2(id) {
        console.log('delete id='+id);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                <button onClick={(e) => this.deleteRow2(1, e)}>Delete Row</button>
                <button onClick={this.deleteRow2.bind(this, 2)}>Delete Row</button>

                <button onClick={this.handleClick1}>handleClick</button>
            </div>
        );
    }
}


function Example4(props) {
    const route = props.route;
    return (
        <div className="examples example-4">
            <h1>Example 4 : 事件处理</h1>
            <div><Toggle /></div>
            <div><ActionLink/></div>

            <Link to="/discover/earth">discover earth</Link><br />
            <Link to="/discover/star"> discover star</Link><br />

            <a href="/example7">example7</a><br />

            { renderRoutes( route.childrens,{user:'hello'} ) }


        </div>
    );
}

export default Example4;
