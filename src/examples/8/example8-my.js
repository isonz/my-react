import React from "react";

class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    setData = (e) =>{
        this.setState({
            value: e.target.value
        });
        this.props.toConver(e.target.name, e.target.value);
    }

    render() {
        const scale_name = {two: '二进制', eight: '八进制', ten: '十进制',  sixteen: '十六进制'};
        const set_value = this.props.setValue;
        return(
            <p>{scale_name[this.props.scale]}：<input name={this.props.scale} value={set_value} onChange={this.setData} /></p>
        );
    }
}

class Cover extends React.Component{
    constructor(props) {
        super(props);
        this.state = {two: 0, eight: 0, ten: 0, sixteen: 0};
    }

    conver = (name, value) => {
        console.log(name, value);
        if ('two' === name) {
            this.setState({
                two : value,
                eight : parseInt(value, 8),
                ten : parseInt(value, 10),
                sixteen : parseInt(value, 16)
            });
        }
        if ('eight' === name) {
            this.setState({
                two : value,
                eight : parseInt(value, 8),
                ten : parseInt(value, 10),
                sixteen : parseInt(value, 16)
            });
        }
        if ('ten' === name) {
            this.setState({
                two : parseInt(value, 2),
                eight : parseInt(value, 8),
                ten : parseInt(value, 10),
                sixteen : parseInt(value, 16)
            });
        }
        if ('sixteen' === name) {
            this.setState({
                two : value,
                eight : parseInt(value, 8),
                ten : parseInt(value, 10),
                sixteen : parseInt(value, 16)
            });
        }
    }

    render() {
        return (
            <fieldset>
                <legend>进制互转:</legend>
                {this.state.two}, {this.state.eight}, {this.state.ten}, {this.state.sixteen}
                <Page scale='two' toConver={this.conver} setValue={this.state.two}/>
                <Page scale='eight' toConver={this.conver} setValue={this.state.eight}/>
                <Page scale='ten' toConver={this.conver} setValue={this.state.ten}/>
                <Page scale='sixteen' toConver={this.conver} setValue={this.state.sixteen}/>
            </fieldset>
        );
    }
}

//===============================================

function Example8My(props) {
    return (
        <div className="examples example-8-my">
            <h1>Example 8-my : 练习 -  二进制，八进制， 十进制， 十六进制互转</h1>
            <Cover />
        </div>
    );
}

export default Example8My;
