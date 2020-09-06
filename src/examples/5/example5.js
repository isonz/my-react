import React from "react";

function UserGreeting(props) {
    return <h2>Welcome back!</h2>;
}

function GuestGreeting(props) {
    return <h2>Please sign up.</h2>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

//---------------------------------

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button1;
        if (isLoggedIn) {
            button1 = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button1 = <LoginButton onClick={this.handleLoginClick} />;
        }

        let button2 = isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />;

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button1}
                {button2}
            </div>
        );
    }
}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

//-------------------------------------

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h2>Hello!</h2>
            {unreadMessages.length > 0 &&
            <h3>
                You have {unreadMessages.length} unread messages.
            </h3>
            }
        </div>
    );
}
//-----------------------------------

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

//===============================================

function Example5(props) {
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    return (
        <div className="examples example-5">
            <h1>Example 5 : 条件渲染</h1>
            <Greeting isLoggedIn={true} />
            <LoginControl/>
            <Mailbox unreadMessages={messages}/>
            <Page/>

            <p>route.childrens: extraProps = {props.user}</p>
        </div>
    );
}

export default Example5;
