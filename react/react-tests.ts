/// <reference path="react.d.ts" />
import React = require("react");

interface Props {
    hello: string;
    world?: string;
    foo: number;
    bar: boolean;
}

interface State {
    inputValue?: string;
    seconds?: number;
}

interface MyComponentInstance extends React.ComponentInstance<Props, State> {
    reset(): void;
}

var props: Props = {
    hello: "world",
    foo: 42,
    bar: true
};

var container: Element;
var INPUT_REF: string = "input";

//
// Top-Level API
// --------------------------------------------------------------------------

var reactClass: React.ComponentClass<Props> = React.createClass<Props>({
    getDefaultProps: () => {
        return <Props>{
            hello: undefined,
            world: "peace",
            foo: undefined,
            bar: undefined
        };
    },
    getInitialState: () => {
        return {
            inputValue: "React.js",
            seconds: 0
        };
    },
    reset: () => {
        this.replaceState(this.getInitialState());
    },
    render: () => {
        return React.DOM.div(null,
            React.DOM.input({
                ref: INPUT_REF,
                value: this.state.inputValue
            }));
    }
});

var reactElement: React.ReactElement<Props> =
    React.createElement<Props>(reactClass, props);

var reactFactory: React.Factory<Props> =
    React.createFactory<Props>(reactClass);

var reactInstance: React.ElementInstance<Props> =
    React.render<Props>(reactElement, container);

var unmounted: boolean = React.unmountComponentAtNode(container);
var str: string = React.renderToString(reactElement);
var markup: string = React.renderToStaticMarkup(reactElement);
var notValid: boolean = React.isValidElement(props); // false
var isValid = React.isValidElement(reactElement); // true
React.initializeTouchEvents(true);

//
// React Elements
// --------------------------------------------------------------------------

var type = reactElement.type;
var elementProps: Props = reactElement.props;
var key = reactElement.key;
var ref: string = reactElement.ref;
var factoryElement: React.ReactElement<Props> = reactFactory(elementProps);

//
// React Components
// --------------------------------------------------------------------------

var displayName: string = reactClass.displayName;
var defaultProps: Props = reactClass.getDefaultProps();
var propTypes: React.ValidationMap<Props> = reactClass.propTypes;

//
// Component API
// --------------------------------------------------------------------------

var htmlElement: Element = reactInstance.getDOMNode();
var divElement: HTMLDivElement = reactInstance.getDOMNode<HTMLDivElement>();
var isMounted: boolean = reactInstance.isMounted();
reactInstance.setProps(elementProps);
reactInstance.replaceProps(props);

var componentInstance: React.ComponentInstance<Props, State> =
    <React.ComponentInstance<Props, State>>reactInstance;
var initialState: State = componentInstance.state;
componentInstance.setState({ inputValue: "!!!" });
componentInstance.replaceState({ inputValue: "???", seconds: 60 });
componentInstance.forceUpdate();

var inputRef: React.ElementInstance<React.HTMLAttributes> =
    componentInstance.refs[INPUT_REF];
var value: string = inputRef.getDOMNode<HTMLInputElement>().value;

var myComponentInstance = <MyComponentInstance>componentInstance;
myComponentInstance.reset();

//
// PropTypes
// --------------------------------------------------------------------------

var PropTypesSpecification: React.ComponentSpec<any, any> = {
    propTypes: {
        optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,
        optionalNode: React.PropTypes.node,
        optionalElement: React.PropTypes.element,
        optionalMessage: React.PropTypes.instanceOf(Date),
        optionalEnum: React.PropTypes.oneOf(["News", "Photos"]),
        optionalUnion: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.instanceOf(Date)
        ]),
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
        optionalObjectWithShape: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number
        }),
        requiredFunc: React.PropTypes.func.isRequired,
        requiredAny: React.PropTypes.any.isRequired,
        customProp: function(props: any, propName: string, componentName: string) {
            if (!/matchme/.test(props[propName])) {
                return new Error("Validation failed!");
            }
            return null;
        }
    },
    render: (): React.ReactHTMLElement => {
        return null;
    }
};

//
// Example from http://facebook.github.io/react/
// --------------------------------------------------------------------------

interface TimerState {
    secondsElapsed: number;
}
interface TimerInstance extends React.ComponentInstance<{}, TimerState> {
}
var Timer = React.createClass({
    displayName: "Timer",
    getInitialState: () => {
        return { secondsElapsed: 0 };
    },
    tick: () => {
        var me = <TimerInstance>this;
        me.setState({
            secondsElapsed: me.state.secondsElapsed + 1
        });
    },
    componentDidMount: () => {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: () => {
        clearInterval(this.interval);
    },
    render: () => {
        var me = <TimerInstance>this;
        return React.DOM.div(
            null,
            "Seconds Elapsed: ",
            me.state.secondsElapsed
        );
    }
});
var mountNode: Element;
React.render(React.createElement(Timer, null), mountNode);

