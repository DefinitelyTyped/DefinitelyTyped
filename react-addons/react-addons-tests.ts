/// <reference path="react-addons.d.ts" />
import React = require("react/addons");

var PropTypesSpecification: React.Specification<any, any> = {
    propTypes: {
        // You can declare that a prop is a specific JS primitive. By default, these
        // are all optional.
        optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,

        // Anything that can be rendered: numbers, strings, components or an array
        // containing these types.
        optionalRenderable: React.PropTypes.node,

        // A React component.
        optionalComponent: React.PropTypes.component,

        // You can also declare that a prop is an instance of a class. This uses
        // JS's instanceof operator.
        optionalMessage: React.PropTypes.instanceOf(Date),

        // You can ensure that your prop is limited to specific values by treating
        // it as an enum.
        optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

        // An object that could be one of many types
        optionalUnion: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.instanceOf(Date)
        ]),

        // An array of a certain type
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

        // An object with property values of a certain type
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

        // An object taking on a particular shape
        optionalObjectWithShape: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number
        }),

        // You can chain any of the above with `isRequired` to make sure a warning
        // is shown if the prop isn't provided.
        requiredFunc: React.PropTypes.func.isRequired,

        // A value of any data type
        requiredAny: React.PropTypes.any.isRequired,

        // You can also specify a custom validator. It should return an Error
        // object if the validation fails. Don't `console.warn` or throw, as this
        // won't work inside `oneOfType`.
        customProp: function(props, propName, componentName) {
            if (!/matchme/.test(props[propName])) {
                return new Error('Validation failed!');
            }
            return null;
        }
    },
    render: (): React.ReactHTMLElement => {
        return null;
    }
};

React.createClass(PropTypesSpecification);

var mountNode: Element;

var HelloMessage = React.createClass({displayName: 'HelloMessage',
    render: function() {
        return React.DOM.div(null, "Hello ", (<React.Component<{name: string}, any>>this).props.name);
    }
});

React.render(HelloMessage({name: "John"}), mountNode);

var Timer = React.createClass({displayName: 'Timer',
    getInitialState: function() {
        return {secondsElapsed: 0};
    },
    tick: function() {
        (<React.Component<any, {secondsElapsed: number}>>this).setState({
            secondsElapsed: (<React.Component<any, {secondsElapsed: number}>>this).state.secondsElapsed + 1
        });
    },
    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function() {
        return React.DOM.div(
            null,
            "Seconds Elapsed: ",
            (<React.Component<any, {secondsElapsed: number}>>this).state.secondsElapsed
        );
    }
});

React.render(Timer(null), mountNode);

// TestUtils
var that: React.Component<any, any>;
var node = that.refs['input'].getDOMNode();
React.addons.TestUtils.Simulate.click(node);
React.addons.TestUtils.Simulate.change(node);
React.addons.TestUtils.Simulate.keyDown(node, {key: "Enter"});

var Greeting = React.createClass({displayName: 'Greeting',
    getInitialState: function() {
        return {morning: true};
    },
    render: function() {
        var me = <React.Component<{name: string}, {morning: boolean}>>this;
        return React.DOM.div(null, (me.state.morning ? "Hello" : "Goodbye "), me.props.name);
    }
});

var root = React.addons.TestUtils.renderIntoDocument(Greeting({name: "John"}));
var greeting = React.addons.TestUtils.findRenderedComponentWithType(root, Greeting);
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
