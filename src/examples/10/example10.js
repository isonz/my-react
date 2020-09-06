import React from "react";
import './example10.css';
import {Link} from "react-router-dom";
import {renderRoutes} from "react-router-config";

const json_data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class Page extends React.Component{

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {search: '', stock: false};
    }

    handleOnChange(e){
        const target = e.target;
        const value = target.name === 'stock' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='page'>
                <div><input name="search" className='search' value={this.state.search} onChange={this.handleOnChange}/></div>
                <div><input name="stock" className='stock' checked={this.state.stock}  type='checkbox' onChange={this.handleOnChange}/>只显示有库存</div>
                <div className="show-panel">
                    <table style={{fontSize: '14px'}}>
                        <thead style={{fontWeight: 'bold', fontSize: '18px'}}><tr><th>Name</th><th>Price</th></tr></thead>
                        <tbody>
                            <tr style={{fontWeight: 'bold'}}><td>Sporting Goods</td></tr>
                            {json_data.map((data) =>
                                this.state.stock ?
                                    ('Sporting Goods' === data.category && data.stocked === true ?
                                        <tr key={data.name}>
                                            <td>{data.name}</td><td>{data.price}</td>
                                        </tr>: null)
                                    :
                                    ('Sporting Goods' === data.category ?
                                        <tr key={data.name}>
                                            <td>{data.name}</td><td>{data.price}</td>
                                        </tr>: null)
                            )}

                            <tr style={{fontWeight: 'bold'}}><td>Electronics</td></tr>
                            {json_data.map((data) =>
                                this.state.stock ?
                                    ('Electronics' === data.category && data.stocked === true ?
                                        <tr key={data.name}>
                                            <td>{data.name}</td><td>{data.price}</td>
                                        </tr>: null)
                                    :
                                    ('Electronics' === data.category ?
                                        <tr key={data.name}>
                                            <td>{data.name}</td><td>{data.price}</td>
                                        </tr>: null)
                            )}

                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
        )
    }

}



//===============================================

function Example10(props) {
    const route = props.route;

    return (
        <div className="examples example-10">
            <h1>Example 10 : React 哲学</h1>
            <Page/>

            <a href="/">HOME</a><br />

            <Link to="/example10/2"> example10 - 2</Link><br />
            { renderRoutes( route.childrens,{user:'hello'} ) }
        </div>
    );
}

export default Example10;
