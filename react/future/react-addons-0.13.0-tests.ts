/// <reference path="react-addons-0.13.0.d.ts" />
import React = require("react/addons");

interface Props extends React.Props {
    hello: string;
    world?: string;
    foo: number;
    bar: boolean;
}

interface State {
    inputValue?: string;
    seconds?: number;
}

interface Context {
    someValue?: string;
}

interface ChildContext {
    someOtherValue: string;
}

interface MyComponent extends React.Component<Props, State> {
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

var ClassicComponent: React.ClassicComponentClass<Props, State> =
    React.createClass<Props, State>({
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
                inputValue: this.context.someValue,
                seconds: this.props.foo
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

class ModernComponent extends React.Component<Props, State>
    implements React.ChildContextProvider<ChildContext> {

    constructor(props: Props, context: Context) {
        super(props, context);
        this.state = {
            inputValue: context.someValue,
            seconds: props.foo
        };
    }
    
    static propTypes: React.ValidationMap<Props> = {
        foo: React.PropTypes.number
    }
    
    static contextTypes: React.ValidationMap<Context> = {
        someValue: React.PropTypes.string
    }
    
    static childContextTypes: React.ValidationMap<ChildContext> = {
        someOtherValue: React.PropTypes.string
    }
    
    getChildContext() {
        return {
            someOtherValue: 'foo'
        }
    }
    
    state = {
        inputValue: this.context.someValue,
        seconds: this.props.foo
    }
    
    reset() {
        this.setState({
            inputValue: this.context.someValue,
            seconds: this.props.foo
        });
    }
    
    render() {
        return React.DOM.div(null,
            React.DOM.input({
                ref: INPUT_REF,
                value: this.state.inputValue
            }));
    }
}

// React.createFactory
var factory: React.Factory<Props> =
    React.createFactory(ModernComponent);
var factoryElement: React.ReactElement<Props> =
    factory(props);

var classicFactory: React.ClassicFactory<Props> =
    React.createFactory(ClassicComponent);
var classicFactoryElement: React.ReactClassicElement<Props> =
    classicFactory(props);

var domFactory: React.DOMFactory<any> =
    React.createFactory("foo");
var domFactoryElement: React.ReactDOMElement<any> =
    domFactory();

// React.createElement
var element: React.ReactElement<Props> =
    React.createElement(ModernComponent, props);
var classicElement: React.ReactClassicElement<Props> =
    React.createElement(ClassicComponent, props);
var domElement: React.ReactHTMLElement =
    React.createElement("div");

// React.render
var component: React.Component<Props, any> =
    React.render(element, container);
var classicComponent: React.ClassicComponent<Props, any> =
    React.render(classicElement, container);
var domComponent: React.DOMComponent<any> =
    React.render(domElement, container);

// Other Top-Level API
var unmounted: boolean = React.unmountComponentAtNode(container);
var str: string = React.renderToString(element);
var markup: string = React.renderToStaticMarkup(element);
var notValid: boolean = React.isValidElement(props); // false
var isValid = React.isValidElement(element); // true
React.initializeTouchEvents(true);
var domNode: Element = React.findDOMNode(component);
domNode = React.findDOMNode(domNode);

//
// React Elements
// --------------------------------------------------------------------------

var type = element.type;
var elementProps: Props = element.props;
var key = element.key;
var ref: string = element.ref;

//
// React Components
// --------------------------------------------------------------------------

var displayName: string = ClassicComponent.displayName;
var defaultProps: Props = ClassicComponent.getDefaultProps();
var propTypes: React.ValidationMap<Props> = ClassicComponent.propTypes;

//
// Component API
// --------------------------------------------------------------------------

// modern
var componentState: State = component.state;
component.setState({ inputValue: "!!!" });
component.forceUpdate();

// classic
var htmlElement: Element = classicComponent.getDOMNode();
var divElement: HTMLDivElement = classicComponent.getDOMNode<HTMLDivElement>();
var isMounted: boolean = classicComponent.isMounted();
classicComponent.setProps(elementProps);
classicComponent.replaceProps(props);
classicComponent.replaceState({ inputValue: "???", seconds: 60 });

var inputRef: React.HTMLComponent =
    <React.HTMLComponent>component.refs[INPUT_REF];
var value: string = inputRef.getDOMNode<HTMLInputElement>().value;

var myComponent = <MyComponent>component;
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
// ContextTypes
// --------------------------------------------------------------------------

var ContextTypesSpecification: React.ComponentSpec<any, any> = {
    contextTypes: {
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
var onlyChild = React.Children.only([null, [[["Hallo"], true]], false]);

//
// Example from http://facebook.github.io/react/
// --------------------------------------------------------------------------

interface TimerState {
    secondsElapsed: number;
}
class Timer extends React.Component<{}, TimerState> {
    static state = {
        secondsElapsed: 0
    }
    private _interval: number;
    tick() {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }
    componentDidMount() {
        var me = this;
        this._interval = setInterval(() => me.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this._interval);
    }
    render() {
        return React.DOM.div(
            null,
            "Seconds Elapsed: ",
            this.state.secondsElapsed
        );
    }
}
React.render(React.createElement(Timer), container);

//
// React.addons
// --------------------------------------------------------------------------

var cx = React.addons.classSet;
var className: string = cx({ a: true, b: false, c: true });
className = cx("a", null, "b");

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

var node: Element;
React.addons.TestUtils.Simulate.click(node);
React.addons.TestUtils.Simulate.change(node);
React.addons.TestUtils.Simulate.keyDown(node, { key: "Enter" });

