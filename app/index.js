import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { observer, inject, Provider } from "mobx-react";
import { observable } from "mobx";

const colors = observable({
    red: "red",
    blue: "blue",
    green: "green",
});

@inject("colors") @observer
class Button extends React.Component {

    render() {
        return (
            <button style={{ background: this.props.colors.green }}>
                {this.props.children}
            </button>
        );
    }
}

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends React.Component {
    render() {
        const children = this.props.messages.map((message, index) =>
            <Message key={index} text={message} />
        );
        return <Provider colors={colors}>
            <div>
                {children}
            </div>
        </Provider>;
    }
}
ReactDOM.render(<MessageList messages={['a', 'b']} />, document.getElementById('root'));
