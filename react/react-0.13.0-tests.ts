/// <reference path="react-0.13.0.d.ts" />

// requiring react/addons instead of react so react.d.ts doesn't get picked up
import React = require('react/addons'); 

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

interface Context {
    someValue?: string;
}

interface ChildContext {
    someOtherValue: string;
}

interface MyComponent extends React.Component<Props, State, Context> {
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

var reactClassicClass: React.ClassicComponentClass<Props, State, Context> = React.createClass<Props, State, Context>({
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

var reactClass: React.ComponentClass<Props, State, Context> = reactClassicClass;

class ModernComponent extends React.Component<Props, State, Context> implements React.ChildContextProvider<ChildContext> {
    constructor(props: Props, context: Context) {
        super(props, context);
        this.state = {
            inputValue: context.someValue,
            seconds: props.foo
        };
    }
    
    // this should work but doesn't. Due to TypeScript bug?
    //static propTypes = {
    //    foo: React.PropTypes.number
    //}
    
    //static contextTypes = {
    //    someValue: React.PropTypes.string
    //}
    
    //static childContextTypes = {
    //    someOtherValue: React.PropTypes.string
    //}
    
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

ModernComponent.propTypes = {
    foo: React.PropTypes.string,
}

ModernComponent.contextTypes = {
    someValue: React.PropTypes.string
}

ModernComponent.childContextTypes = {
    someOtherValue: React.PropTypes.string
}

var reactElement: React.ReactElement<Props>;
reactElement = React.createElement<Props>(reactClass, props);
reactElement = React.createElement(ModernComponent, props);

var reactFactory: React.ComponentFactory<Props>;
reactFactory = React.createFactory<Props>(reactClass);
reactFactory = React.createFactory<Props>(ModernComponent);

var component: React.Component<Props, State, Context> =
    React.render<Props, State>(reactElement, container);

var unmounted: boolean = React.unmountComponentAtNode(container);
var str: string = React.renderToString(reactElement);
var markup: string = React.renderToStaticMarkup(reactElement);
var notValid: boolean = React.isValidElement(props); // false
var isValid = React.isValidElement(reactElement); // true
React.initializeTouchEvents(true);
var domNode: Element = React.findDOMNode(component);

var reactClassicElement: React.ReactClassicElement<Props>;
reactClassicElement = React.createElement<Props>(reactClassicClass, props);
var classicComponent: React.ClassicComponent<Props, State, Context>;
classicComponent = React.render<Props, State>(reactClassicElement, container);

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

// modern
var initialState: State = component.state;
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

var PropTypesSpecification: React.ComponentSpec<any, any, any> = {
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

var ContextTypesSpecification: React.ComponentSpec<any, any, any> = {
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
interface Timer extends React.Component<{}, TimerState, any> {
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
