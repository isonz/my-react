import React from 'react';
import {Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

//变量的导出用export，而不是export default
export const About = (props)=>{
    const route = props.route
    return (
        <div>
            <h1>这是关于</h1>
            <a href="/">去home</a><br />
            <a href="/discover">去discover</a><br />
            <Link to="/about/my">关于我的</Link><br />
            <br />
            <Link to="/about/you">关于你的</Link>
            {/*使用renderRoutes方法继续渲染子路由，第二个参数可以进行传参*/}
            { renderRoutes( route.childrens,{user:'hello'} ) }
        </div>
    );
};
