import React from "react";


function NumberList1(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

//--------------------------------

function ListItem2(props) {
    // 正确！这里不需要指定 key：
    return <li>{props.value}</li>;
}

function NumberList2(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 正确！key 应该在数组的上下文中被指定
        <ListItem2 key={number.toString()} value={number} />

    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

function NumberList3(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem2 key={number.toString()} value={number} />
            )}
        </ul>
    );
}

//-----------------------------------------------

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id} data={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id} data={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            {content}
        </div>
    );
}

//===============================================

function Example6(props) {
    const nums = [1, 2, 3, 4, 5];
    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    return (
        <div className="examples example-6">
            <h1>Example 6 : 列表 & Key</h1>
            <NumberList1 numbers={nums} />
            <NumberList2 numbers={nums} />
            <Blog posts={posts} />
            <NumberList3 numbers={nums} />

            <p>route.childrens: extraProps = {props.user}</p>
        </div>
    );
}

export default Example6;
