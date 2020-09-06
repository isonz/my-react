import React from "react";

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <div className="welcome-dialog">
            <Dialog
                title="Welcome"
                message="Thank you for visiting our spacecraft!" />
        </div>
    );
}

//-----------------------------------------------

function Contacts() {
    return <div className="Contacts">Contacts</div>;
}

function Chat() {
    return <div className="Chat">Chat</div>;
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

//===============================================

function Example9(props) {
    return (
        <div className="examples example-9">
            <h1>Example 9 : 组合 vs 继承</h1>
            <WelcomeDialog/>

            <SplitPane left={<Contacts />} right={ <Chat />} />

            <a href="/example10">example10</a><br />
        </div>
    );
}

export default Example9;
