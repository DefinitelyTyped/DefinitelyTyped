/// <reference path="react.d.ts" />
import React = require("react/addons");

// TestUtils
var that: React.ComponentInstance<any, any>;
var node = that.refs['input'].getDOMNode();
React.addons.TestUtils.Simulate.click(node);
React.addons.TestUtils.Simulate.change(node);
React.addons.TestUtils.Simulate.keyDown(node, {key: "Enter"});

interface GreetingProps {
    name: string;
}
interface GreetingState {
    morning: boolean;
}
interface GreetingInstance extends React.ComponentInstance<GreetingProps, GreetingState> {
}
var Greeting = React.createClass({displayName: 'Greeting',
    getInitialState: function() {
        return {morning: true};
    },
    render: function() {
        var me = <GreetingInstance>this;
        return React.DOM.div(null, (me.state.morning ? "Hello" : "Goodbye "), me.props.name);
    }
});

var root = React.addons.TestUtils.renderIntoDocument(React.createElement(Greeting, {name: "John"}));
var greeting = <GreetingInstance>React.addons.TestUtils.findRenderedComponentWithType(root, Greeting);
greeting.setState({
    morning: false
});

var isImportant: boolean;
var isRead: boolean;
var cx = React.addons.classSet;
var classes: string = cx({
    'message': true,
    'message-important': isImportant,
    'message-read': isRead
});
