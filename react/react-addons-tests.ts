/// <reference path="react.d.ts" />
import React = require("react/addons");

var isImportant: boolean;
var isRead: boolean;
var classSet: React.ClassSet = {
    "message": true,
    "message-important": isImportant,
    "message-read": isRead
};
var cx = React.addons.classSet;
var classes: string = cx(classSet);

//
// React.addons (Transitions)
// --------------------------------------------------------------------------

React.createFactory(React.addons.TransitionGroup)({ component: "div" });
React.createFactory(React.addons.CSSTransitionGroup)({
    component: React.createClass({
        render: (): React.ReactElement<any> => null
    }),
    childFactory: (c) => c,
    transitionName: "transition",
    transitionAppear: false,
    transitionEnter: true,
    transitionLeave: true
});

//
// React.addons.TestUtils
// --------------------------------------------------------------------------

var that: React.CompositeComponent<any, any>;
var node = that.refs["input"].getDOMNode();
React.addons.TestUtils.Simulate.click(node);
React.addons.TestUtils.Simulate.change(node);
React.addons.TestUtils.Simulate.keyDown(node, {key: "Enter"});

interface GreetingProps {
    name: string;
}
interface GreetingState {
    morning: boolean;
}
interface Greeting extends React.CompositeComponent<GreetingProps, GreetingState> {
}
var Greeting = React.createClass({
    displayName: "Greeting",
    getInitialState: function() {
        return {morning: true};
    },
    render: function() {
        var me = <Greeting>this;
        return React.DOM.div(
            null,
            me.state.morning ? "Hello " : "Goodbye ",
            me.props.name);
    }
});

var root = React.addons.TestUtils.renderIntoDocument(
    React.createElement(Greeting, {name: "John"}));
var greeting = <Greeting>React.addons.TestUtils
    .findRenderedComponentWithType(root, Greeting);
greeting.setState({
    morning: false
});
