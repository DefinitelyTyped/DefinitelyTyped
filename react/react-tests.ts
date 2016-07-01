/// <reference path="react.d.ts" />
/// <reference path="react-dom.d.ts" />
/// <reference path="react-addons-create-fragment.d.ts" />
/// <reference path="react-addons-css-transition-group.d.ts" />
/// <reference path="react-addons-linked-state-mixin.d.ts" />
/// <reference path="react-addons-perf.d.ts" />
/// <reference path="react-addons-pure-render-mixin.d.ts" />
/// <reference path="react-addons-shallow-compare.d.ts" />
/// <reference path="react-addons-test-utils.d.ts" />
/// <reference path="react-addons-transition-group.d.ts" />
/// <reference path="react-addons-update.d.ts" />

import React = require("react");
import ReactDOM = require("react-dom");
import ReactDOMServer = require("react-dom/server");
import createFragment = require("react-addons-create-fragment");
import CSSTransitionGroup = require("react-addons-css-transition-group");
import LinkedStateMixin = require("react-addons-linked-state-mixin");
import Perf = require("react-addons-perf");
import PureRenderMixin = require("react-addons-pure-render-mixin");
import shallowCompare = require("react-addons-shallow-compare");
import TestUtils = require("react-addons-test-utils");
import TransitionGroup = require("react-addons-transition-group");
import update = require("react-addons-update");

interface Props {
    hello: string;
    world?: string;
    foo: number;
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

var props: Props & React.ClassAttributes<{}> = {
    key: 42,
    ref: "myComponent42",
    hello: "world",
    foo: 42
};

var container: Element;

//
// Top-Level API
// --------------------------------------------------------------------------

var ClassicComponent: React.ClassicComponentClass<Props> =
    React.createClass<Props, State>({
        getDefaultProps() {
            return {
                hello: undefined,
                world: "peace",
                foo: undefined
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
    implements MyComponent, React.ChildContextProvider<ChildContext> {

    static propTypes: React.ValidationMap<Props> = {
        foo: React.PropTypes.number
    };

    static contextTypes: React.ValidationMap<Context> = {
        someValue: React.PropTypes.string
    };

    static childContextTypes: React.ValidationMap<ChildContext> = {
        someOtherValue: React.PropTypes.string
    };

    context: Context;

    getChildContext() {
        return {
            someOtherValue: "foo"
        };
    }

    state = {
        inputValue: this.context.someValue,
        seconds: this.props.foo
    };

    reset() {
        this._myComponent.reset();
        this.setState({
            inputValue: this.context.someValue,
            seconds: this.props.foo
        });
    }

    private _myComponent: MyComponent;
    private _input: HTMLInputElement;

    render() {
        return React.DOM.div(null,
            React.DOM.input({
                ref: input => this._input = <HTMLInputElement>input,
                value: this.state.inputValue
            }));
    }

    shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: any): boolean {
        return shallowCompare(this, nextProps, nextState);
    }
}

class ModernComponentNoState extends React.Component<Props, void> {}

interface SCProps {
    foo?: number;
}

function StatelessComponent(props: SCProps) {
    return React.DOM.div(null, props.foo);
};
namespace StatelessComponent {
    export var displayName = "StatelessComponent";
    export var defaultProps = { foo: 42 };
}

var StatelessComponent2: React.SFC<SCProps> =
    // props is contextually typed
    props => React.DOM.div(null, props.foo);
StatelessComponent2.displayName = "StatelessComponent2";
StatelessComponent2.defaultProps = {
    foo: 42
};

// React.createFactory
var factory: React.CFactory<Props, ModernComponent> =
    React.createFactory(ModernComponent);
var factoryElement: React.CElement<Props, ModernComponent> =
    factory(props);

var statelessFactory: React.SFCFactory<SCProps> =
    React.createFactory(StatelessComponent);
var statelessFactoryElement: React.SFCElement<SCProps> =
    statelessFactory(props);

var classicFactory: React.ClassicFactory<Props> =
    React.createFactory(ClassicComponent);
var classicFactoryElement: React.ClassicElement<Props> =
    classicFactory(props);

var domFactory: React.DOMFactory<React.DOMAttributes, Element> =
    React.createFactory("foo");
var domFactoryElement: React.DOMElement<React.DOMAttributes, Element> =
    domFactory();

// React.createElement
var element: React.CElement<Props, ModernComponent> =
    React.createElement(ModernComponent, props);
var elementNoState: React.CElement<Props, ModernComponentNoState> =
    React.createElement(ModernComponentNoState, props);
var statelessElement: React.SFCElement<SCProps> =
    React.createElement(StatelessComponent, props);
var classicElement: React.ClassicElement<Props> =
    React.createElement(ClassicComponent, props);
var domElement: React.ReactHTMLElement<HTMLDivElement> =
    React.createElement("div");

// React.cloneElement
var clonedElement: React.CElement<Props, ModernComponent> =
    React.cloneElement(element, { foo: 43 });
var clonedElement2: React.CElement<Props, ModernComponent> =
    // known problem: cloning with key or ref requires cast
    React.cloneElement(element, <React.ClassAttributes<ModernComponent>>{
        ref: c => c.reset()
    });
var clonedElement3: React.CElement<Props, ModernComponent> =
    React.cloneElement(element, <{ foo: number } & React.Attributes>{
        key: "8eac7",
        foo: 55
    });
var clonedStatelessElement: React.SFCElement<SCProps> =
    // known problem: cloning with optional props don't work properly
    // workaround: cast to actual props type
    React.cloneElement(statelessElement, <SCProps>{ foo: 44 });
var clonedClassicElement: React.ClassicElement<Props> =
    React.cloneElement(classicElement, props);
var clonedDOMElement: React.ReactHTMLElement<HTMLDivElement> =
    React.cloneElement(domElement, {
        className: "clonedElement"
    });

// React.render
var component: ModernComponent =
    ReactDOM.render(element, container);
var componentNoState: ModernComponentNoState =
    ReactDOM.render(elementNoState, container);
var classicComponent: React.ClassicComponent<Props, any> =
    ReactDOM.render(classicElement, container);
var domComponent: Element =
    ReactDOM.render(domElement, container);

// Other Top-Level API
var unmounted: boolean = ReactDOM.unmountComponentAtNode(container);
var str: string = ReactDOMServer.renderToString(element);
var markup: string = ReactDOMServer.renderToStaticMarkup(element);
var notValid: boolean = React.isValidElement(props); // false
var isValid = React.isValidElement(element); // true
var domNode: Element = ReactDOM.findDOMNode(component);
domNode = ReactDOM.findDOMNode(domNode);

//
// React Elements
// --------------------------------------------------------------------------

var type: React.ComponentClass<Props> = element.type;
var elementProps: Props = element.props;
var key: React.Key = element.key;

var t: React.ReactType;
var name = typeof t === "string" ? t : t.displayName;

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
var isMounted: boolean = classicComponent.isMounted();
classicComponent.replaceState({ inputValue: "???", seconds: 60 });

var myComponent = <MyComponent>component;
myComponent.reset();

//
// Refs
// --------------------------------------------------------------------------

interface RCProps {
}

class RefComponent extends React.Component<RCProps, {}> {
    static create = React.createFactory(RefComponent);
    refMethod() {
    }
}

var componentRef: RefComponent;
RefComponent.create({ ref: "componentRef" });
// type of c should be inferred
RefComponent.create({ ref: c => componentRef = c });
componentRef.refMethod();

var domNodeRef: Element;
React.DOM.div({ ref: "domRef" });
// type of node should be inferred
React.DOM.div({ ref: node => domNodeRef = node });

var inputNodeRef: HTMLInputElement;
React.DOM.input({ ref: node => inputNodeRef = <HTMLInputElement>node });

//
// Attributes
// --------------------------------------------------------------------------

var children: any[] = ["Hello world", [null], React.DOM.span(null)];
var divStyle: React.CSSProperties = { // CSSProperties
    flex: "1 1 main-size",
    backgroundImage: "url('hello.png')"
};
var htmlAttr: React.HTMLProps<HTMLElement> = {
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

var mappedChildrenArray: number[] =
    React.Children.map<number>(children, (child) => { return 42; });
React.Children.forEach(children, (child) => {});
var nChildren: number = React.Children.count(children);
var onlyChild: React.ReactElement<any> = React.Children.only(React.DOM.div()); // ok
onlyChild = React.Children.only([null, [[["Hallo"], true]], false]); // error
var childrenToArray: React.ReactChild[] = React.Children.toArray(children);

//
// Example from http://facebook.github.io/react/
// --------------------------------------------------------------------------

interface TimerState {
    secondsElapsed: number;
}
class Timer extends React.Component<{}, TimerState> {
    state = {
        secondsElapsed: 0
    };
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
ReactDOM.render(React.createElement(Timer), container);

//
// createFragment addon
// --------------------------------------------------------------------------
createFragment({
    a: React.DOM.div(),
    b: ["a", false, React.createElement("span")]
});

//
// CSSTransitionGroup addon
// --------------------------------------------------------------------------
React.createFactory(CSSTransitionGroup)({
    component: React.createClass({
        render: (): React.ReactElement<any> => null
    }),
    childFactory: (c) => c,
    transitionName: "transition",
    transitionAppear: false,
    transitionEnter: true,
    transitionLeave: true,
    id: "some-id",
    className: "some-class"
});

React.createFactory(CSSTransitionGroup)({
    transitionName: {
        enter: "enter",
        enterActive: "enterActive",
        leave: "leave",
        leaveActive: "leaveActive",
        appear: "appear",
        appearActive: "appearActive"
    }
});

//
// LinkedStateMixin addon
// --------------------------------------------------------------------------
React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function() {
        return {
            isChecked: false,
            message: "hello!"
        };
    },
    render: function() {
        return React.DOM.div(null,
            React.DOM.input({
                type: "checkbox",
                checkedLink: this.linkState("isChecked")
            }),
            React.DOM.input({
                type: "text",
                valueLink: this.linkState("message")
            })
        );
    }
});

//
// Perf addon
// --------------------------------------------------------------------------
Perf.start();
Perf.stop();
var measurements = Perf.getLastMeasurements();
Perf.printInclusive(measurements);
Perf.printExclusive(measurements);
Perf.printWasted(measurements);
Perf.printOperations(measurements);
Perf.printInclusive();
Perf.printExclusive();
Perf.printWasted();
Perf.printOperations();

console.log(Perf.getExclusive());
console.log(Perf.getInclusive());
console.log(Perf.getWasted());
console.log(Perf.getOperations());
console.log(Perf.getExclusive(measurements));
console.log(Perf.getInclusive(measurements));
console.log(Perf.getWasted(measurements));
console.log(Perf.getOperations(measurements));

// Renamed to printOperations().  Please use it instead.
Perf.printDOM(measurements);
Perf.printDOM();

//
// PureRenderMixin addon
// --------------------------------------------------------------------------
React.createClass({
  mixins: [PureRenderMixin],
  render: function() { return React.DOM.div(null); }
});

//
// TestUtils addon
// --------------------------------------------------------------------------

var inst: ModernComponent = TestUtils.renderIntoDocument<ModernComponent>(element);
var node: Element = TestUtils.renderIntoDocument(React.DOM.div());

TestUtils.Simulate.click(node);
TestUtils.Simulate.change(node);
TestUtils.Simulate.keyDown(node, { key: "Enter", cancelable: false });

var renderer: React.ShallowRenderer =
    TestUtils.createRenderer();
renderer.render(React.createElement(Timer));
var output: React.ReactElement<React.Props<Timer>> =
    renderer.getRenderOutput();

var foundComponent: ModernComponent = TestUtils.findRenderedComponentWithType(
    inst, ModernComponent);
var foundComponents: ModernComponent[] = TestUtils.scryRenderedComponentsWithType(
    inst, ModernComponent);

// ReactTestUtils custom type guards

var emptyElement: React.ReactElement<{}>;
if (TestUtils.isElementOfType(emptyElement, StatelessComponent)) {
    emptyElement.props.foo;
}

var anyInstance: Element | React.Component<any, any>;
if (TestUtils.isDOMComponent(anyInstance)) {
    anyInstance.getAttribute("className");
} else if (TestUtils.isCompositeComponent(anyInstance)) {
    anyInstance.props;
}

//
// TransitionGroup addon
// --------------------------------------------------------------------------
React.createFactory(TransitionGroup)({ component: "div" });

//
// update addon
// --------------------------------------------------------------------------
{
// These are copied from https://facebook.github.io/react/docs/update.html
let initialArray = [1, 2, 3];
let newArray = update(initialArray, {$push: [4]}); // => [1, 2, 3, 4]

let collection = [1, 2, {a: [12, 17, 15]}];
let newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
// => [1, 2, {a: [12, 13, 14, 15]}]

let obj = {a: 5, b: 3};
let newObj = update(obj, {b: {$apply: function(x) {return x * 2;}}});
// => {a: 5, b: 6}
let newObj2 = update(obj, {b: {$set: obj.b * 2}});

let objShallow = {a: 5, b: 3};
let newObjShallow = update(obj, {$merge: {b: 6, c: 7}}); // => {a: 5, b: 6, c: 7}
}
