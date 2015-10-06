/// <reference path="react.d.ts" />
import React = require("react");

interface Props extends React.Props<MyComponent> {
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

//
// Top-Level API
// --------------------------------------------------------------------------

var ClassicComponent: React.ClassicComponentClass<Props> =
    React.createClass<Props, State>({
        getDefaultProps() {
            return <Props>{
                hello: undefined,
                world: "peace",
                foo: undefined,
                bar: undefined,
            };
        },
        getInitialState() {
            return {
                inputValue: this.context.someValue,
                seconds: this.props.foo
            };
        },
        reset() {
            this.replaceState(this.getInitialState());
        },
        render() {
            return React.DOM.div(null,
                React.DOM.input({
                    ref: input => this._input = input,
                    value: this.state.inputValue
                }));
        }
    });

class ModernComponent extends React.Component<Props, State>
    implements React.ChildContextProvider<ChildContext> {
    
    static propTypes: React.ValidationMap<Props> = {
        foo: React.PropTypes.number
    }
    
    static contextTypes: React.ValidationMap<Context> = {
        someValue: React.PropTypes.string
    }
    
    static childContextTypes: React.ValidationMap<ChildContext> = {
        someOtherValue: React.PropTypes.string
    }
    
    static defaultProps: Props;
    
    context: Context;
    
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

    private _input: React.HTMLComponent;
    
    render() {
        return React.DOM.div(null,
            React.DOM.input({
                ref: input => this._input = input,
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
var classicFactoryElement: React.ClassicElement<Props> =
    classicFactory(props);

var domFactory: React.DOMFactory<any> =
    React.createFactory("foo");
var domFactoryElement: React.DOMElement<any> =
    domFactory();

// React.createElement
var element: React.ReactElement<Props> =
    React.createElement(ModernComponent, props);
var classicElement: React.ClassicElement<Props> =
    React.createElement(ClassicComponent, props);
var domElement: React.HTMLElement =
    React.createElement("div");

// React.cloneElement
var clonedElement: React.ReactElement<Props> =
    React.cloneElement(element, props);
var clonedClassicElement: React.ClassicElement<Props> =
    React.cloneElement(classicElement, props);
var clonedDOMElement: React.HTMLElement =
    React.cloneElement(domElement);

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

var myComponent = <MyComponent>component;
myComponent.reset();

//
// Attributes
// --------------------------------------------------------------------------

var children: any[] = ["Hello world", [null], React.DOM.span(null)];
var divStyle: React.CSSProperties = { // CSSProperties
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

React.DOM.svg({ viewBox: "0 0 48 48" },
    React.DOM.rect({
      x: 22,
      y: 10,
      width: 4,
      height: 28
    }),
    React.DOM.rect({
      x: 10,
      y: 22,
      width: 28,
      height: 4
    }));


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
    render: (): React.ReactElement<any> => {
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
    render: (): React.ReactElement<any> => {
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
    state = {
        secondsElapsed: 0
    }
    private _interval: number;
    tick() {
        this.setState((prevState, props) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }
    componentDidMount() {
        this._interval = setInterval(() => this.tick(), 1000);
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

