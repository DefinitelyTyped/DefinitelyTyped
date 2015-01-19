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

interface MyComponent extends React.CompositeComponent<Props, State> {
    reset(): void;
}

var props: Props = {
    key: 42,
    ref: "myComponent42",
    hello: "world",
    foo: 42,
    bar: true
};

var container: Element;
var INPUT_REF: string = "input";

//
// Top-Level API
// --------------------------------------------------------------------------

var reactClass = React.createClass<Props>({
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

var reactFactory: React.ComponentFactory<Props> =
    React.createFactory<Props>(reactClass);

var component: React.Component<Props> =
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

var htmlElement: Element = component.getDOMNode();
var divElement: HTMLDivElement = component.getDOMNode<HTMLDivElement>();
var isMounted: boolean = component.isMounted();
component.setProps(elementProps);
component.replaceProps(props);

var compComponent: React.CompositeComponent<Props, State> =
    <React.CompositeComponent<Props, State>>component;
var initialState: State = compComponent.state;
compComponent.setState({ inputValue: "!!!" });
compComponent.replaceState({ inputValue: "???", seconds: 60 });
compComponent.forceUpdate();

var inputRef: React.HTMLComponent =
    <React.HTMLComponent>compComponent.refs[INPUT_REF];
var value: string = inputRef.getDOMNode<HTMLInputElement>().value;

var myComponent = <MyComponent>compComponent;
myComponent.reset();

//
// Attributes
// --------------------------------------------------------------------------

var children = ["Hello world", [null], React.DOM.span(null)];
var divStyle = { // CSSProperties
    flex: "1 1 main-size",
    backgroundImage: "url('hello.png')"
};
var htmlAttr: React.HTMLAttributes = {
    key: 36,
    ref: "htmlComponent",
    children: children,
    className: "test-attr",
    style: divStyle,
    onClick: (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
    },
    dangerouslySetInnerHTML: {
        __html: "<strong>STRONG</strong>"
    }
};
React.DOM.div(htmlAttr);
React.DOM.span(htmlAttr);
React.DOM.input(htmlAttr);

//
// React.PropTypes
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
// React.Children
// --------------------------------------------------------------------------

var childMap: { [key: string]: number } =
    React.Children.map<number>(children, (child) => { return 42; });
React.Children.forEach(children, (child) => {});
var nChildren: number = React.Children.count(children);
var onlyChild = React.Children.only([null, [[["Hallo"], true]], false, {
    test: null
}]);

//
// Example from http://facebook.github.io/react/
// --------------------------------------------------------------------------

interface TimerState {
    secondsElapsed: number;
}
interface Timer extends React.CompositeComponent<{}, TimerState> {
}
var Timer = React.createClass({
    displayName: "Timer",
    getInitialState: () => {
        return { secondsElapsed: 0 };
    },
    tick: () => {
        var me = <Timer>this;
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
        var me = <Timer>this;
        return React.DOM.div(
            null,
            "Seconds Elapsed: ",
            me.state.secondsElapsed
        );
    }
});
var mountNode: Element;
React.render(React.createElement(Timer, null), mountNode);

