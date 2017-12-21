import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";
import createFragment = require("react-addons-create-fragment");
import * as CSSTransitionGroup from "react-addons-css-transition-group";
import * as LinkedStateMixin from "react-addons-linked-state-mixin";
import * as Perf from "react-addons-perf";
import * as PureRenderMixin from "react-addons-pure-render-mixin";
import * as shallowCompare from "react-addons-shallow-compare";
import * as TestUtils from "react-addons-test-utils";
import * as TransitionGroup from "react-addons-transition-group";
import update = require("react-addons-update");
import * as createReactClass from "create-react-class";
import * as PropTypes from "prop-types";
import * as DOM from "react-dom-factories";

interface Props extends React.Attributes {
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

const props: Props & React.ClassAttributes<{}> = {
    key: 42,
    ref: "myComponent42",
    hello: "world",
    foo: 42
};

const container: Element = document.createElement("div");

//
// Top-Level API
// --------------------------------------------------------------------------

class ModernComponent extends React.Component<Props, State>
    implements MyComponent, React.ChildContextProvider<ChildContext> {
    static propTypes: React.ValidationMap<Props> = {
        foo: PropTypes.number
    };

    static contextTypes: React.ValidationMap<Context> = {
        someValue: PropTypes.string
    };

    static childContextTypes: React.ValidationMap<ChildContext> = {
        someOtherValue: PropTypes.string
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
    private _input: HTMLInputElement | null;

    render() {
        return DOM.div(null,
            DOM.input({
                ref: input => this._input = input,
                value: this.state.inputValue
            }),
            DOM.input({
                onChange: event => console.log(event.target)
            }));
    }

    shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: any): boolean {
        return shallowCompare(this, nextProps, nextState);
    }
}

class ModernComponentArrayRender extends React.Component<Props> {
    render() {
        return [DOM.h1({ key: "1" }, "1"),
                DOM.h1({ key: "2" }, "2")];
    }
}

class ModernComponentNoState extends React.Component<Props> { }
class ModernComponentNoPropsAndState extends React.Component { }

interface SCProps {
    foo?: number;
}

function StatelessComponent(props: SCProps) {
    return props.foo ? DOM.div(null, props.foo) : null;
}

// tslint:disable-next-line:no-namespace
namespace StatelessComponent {
    export const displayName = "StatelessComponent";
    export const defaultProps = { foo: 42 };
}

const StatelessComponent2: React.SFC<SCProps> =
    // props is contextually typed
    props => DOM.div(null, props.foo);
StatelessComponent2.displayName = "StatelessComponent2";
StatelessComponent2.defaultProps = {
    foo: 42
};

const StatelessComponent3: React.SFC<SCProps> =
    // allows usage of props.children
    // allows null return
    props => props.foo ? DOM.div(null, props.foo, props.children) : null;

// React.createFactory
const factory: React.CFactory<Props, ModernComponent> =
    React.createFactory(ModernComponent);
const factoryElement: React.CElement<Props, ModernComponent> =
    factory(props);

const statelessFactory: React.SFCFactory<SCProps> =
    React.createFactory(StatelessComponent);
const statelessFactoryElement: React.SFCElement<SCProps> =
    statelessFactory(props);

const domFactory: React.DOMFactory<React.DOMAttributes<{}>, Element> =
    React.createFactory("div");
const domFactoryElement: React.DOMElement<React.DOMAttributes<{}>, Element> =
    domFactory();

// React.createElement
const element: React.CElement<Props, ModernComponent> = React.createElement(ModernComponent, props);
const elementNoState: React.CElement<Props, ModernComponentNoState> = React.createElement(ModernComponentNoState, props);
const statelessElement: React.SFCElement<SCProps> = React.createElement(StatelessComponent, props);
const domElement: React.DOMElement<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> = React.createElement("div");
const htmlElement = React.createElement("input", { type: "text" });
const svgElement = React.createElement("svg", { accentHeight: 12 });
const fragmentElement: React.ReactElement<{}> = React.createElement(React.Fragment, {}, [React.createElement("div"), React.createElement("div")]);

const customProps: React.HTMLProps<HTMLElement> = props;
const customDomElement = "my-element";
const nonLiteralElement = React.createElement(customDomElement, customProps);

// https://github.com/Microsoft/TypeScript/issues/15019

function foo3(child: React.ComponentClass<{ name: string }> | React.StatelessComponent<{ name: string }> | string) {
    React.createElement(child, { name: "bar" });
}

// React.cloneElement
const clonedElement: React.CElement<Props, ModernComponent> = React.cloneElement(element, { foo: 43 });

React.cloneElement(element, {});
React.cloneElement(element, {}, null);

const clonedElement2: React.CElement<Props, ModernComponent> =
    // known problem: cloning with key or ref requires cast
    React.cloneElement(element, {
        ref: c => c && c.reset()
    } as React.ClassAttributes<ModernComponent>);
const clonedElement3: React.CElement<Props, ModernComponent> =
    React.cloneElement(element, {
        key: "8eac7",
        foo: 55
    } as { foo: number } & React.Attributes);
const clonedStatelessElement: React.SFCElement<SCProps> =
    // known problem: cloning with optional props don't work properly
    // workaround: cast to actual props type
    React.cloneElement(statelessElement, { foo: 44 } as SCProps);
// Clone base DOMElement
const clonedDOMElement: React.DOMElement<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> =
    React.cloneElement(domElement, {
        className: "clonedDOMElement"
    });
// Clone ReactHTMLElement
const clonedHtmlElement: React.ReactHTMLElement<HTMLInputElement> =
    React.cloneElement(htmlElement, {
        className: "clonedHTMLElement"
    });
// Clone ReactSVGElement
const clonedSvgElement: React.ReactSVGElement =
    React.cloneElement(svgElement, {
        className: "clonedVGElement"
    });

// React.render
const component: ModernComponent = ReactDOM.render(element, container);
const componentNullContainer: ModernComponent = ReactDOM.render(element, null);

const componentElementOrNull: ModernComponent = ReactDOM.render(element, document.getElementById("anelement"));
const componentNoState: ModernComponentNoState = ReactDOM.render(elementNoState, container);
const componentNoStateElementOrNull: ModernComponentNoState = ReactDOM.render(elementNoState, document.getElementById("anelement"));
const domComponent: Element = ReactDOM.render(domElement, container);

// Other Top-Level API
const unmounted: boolean = ReactDOM.unmountComponentAtNode(container);
const str: string = ReactDOMServer.renderToString(element);
const markup: string = ReactDOMServer.renderToStaticMarkup(element);
const notValid: boolean = React.isValidElement(props); // false
const isValid = React.isValidElement(element); // true
let domNode: Element = ReactDOM.findDOMNode(component);
domNode = ReactDOM.findDOMNode(domNode);
const fragmentType: React.ComponentType = React.Fragment;

//
// React Elements
// --------------------------------------------------------------------------

const type: React.ComponentClass<Props> = element.type;
const elementProps: Props = element.props;
const key = element.key;

//
// Component API
// --------------------------------------------------------------------------

// modern
const componentState: State = component.state;
component.setState({ inputValue: "!!!" });
component.forceUpdate();

const myComponent = component as MyComponent;
myComponent.reset();

//
// Refs
// --------------------------------------------------------------------------

// tslint:disable-next-line:no-empty-interface
interface RCProps { }

class RefComponent extends React.Component<RCProps> {
    static create = React.createFactory(RefComponent);
    refMethod() {
    }
}

let componentRef: RefComponent | null = new RefComponent({});
RefComponent.create({ ref: "componentRef" });
// type of c should be inferred
RefComponent.create({ ref: c => componentRef = c });
componentRef.refMethod();

let domNodeRef: Element | null;
DOM.div({ ref: "domRef" });
// type of node should be inferred
DOM.div({ ref: node => domNodeRef = node });

let inputNodeRef: HTMLInputElement | null;
DOM.input({ ref: node => inputNodeRef = node as HTMLInputElement });

//
// Attributes
// --------------------------------------------------------------------------

const children: any[] = ["Hello world", [null], DOM.span(null)];
const divStyle: React.CSSProperties = { // CSSProperties
    flex: "1 1 main-size",
    backgroundImage: "url('hello.png')"
};
const htmlAttr: React.HTMLProps<HTMLElement> = {
    key: 36,
    ref: "htmlComponent",
    children,
    className: "test-attr",
    style: divStyle,
    slot: "HTMLComponent",
    onClick: (event: React.MouseEvent<{}>) => {
        event.preventDefault();
        event.stopPropagation();
    },
    onClickCapture: (event: React.MouseEvent<{}>) => {
        event.preventDefault();
        event.stopPropagation();
    },
    onAnimationStart: event => {
        console.log(event.currentTarget.className);
    },
    dangerouslySetInnerHTML: {
        __html: "<strong>STRONG</strong>"
    }
};
DOM.div(htmlAttr);
DOM.span(htmlAttr);
DOM.input(htmlAttr);

DOM.svg({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
},
    DOM.rect({
        className: 'foobar',
        id: 'foo',
        color: 'black',
        x: 22,
        y: 10,
        width: 4,
        height: 28,
        strokeDasharray: '30%',
        strokeDashoffset: '20%'
    }),
    DOM.rect({
        x: 10,
        y: 22,
        width: 28,
        height: 4,
        strokeDasharray: 30,
        strokeDashoffset: 20
    }),
    DOM.path({
        d: "M0,0V3H3V0ZM1,1V2H2V1Z",
        fill: "#999999",
        fillRule: "evenodd"
    })
);

//
// PropTypes
// --------------------------------------------------------------------------

const PropTypesSpecification: React.ComponentSpec<any, any> = {
    propTypes: {
        optionalArray: PropTypes.array,
        optionalBool: PropTypes.bool,
        optionalFunc: PropTypes.func,
        optionalNumber: PropTypes.number,
        optionalObject: PropTypes.object,
        optionalString: PropTypes.string,
        optionalNode: PropTypes.node,
        optionalElement: PropTypes.element,
        optionalMessage: PropTypes.instanceOf(Date),
        optionalEnum: PropTypes.oneOf(["News", "Photos"]),
        optionalUnion: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date)
        ]),
        optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
        optionalObjectOf: PropTypes.objectOf(PropTypes.number),
        optionalObjectWithShape: PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.number
        }),
        requiredFunc: PropTypes.func.isRequired,
        requiredAny: PropTypes.any.isRequired,
        customProp(props: any, propName: string, componentName: string): Error | null {
            if (!/matchme/.test(props[propName])) {
                return new Error("Validation failed!");
            }
            return null;
        },
        // https://facebook.github.io/react/warnings/dont-call-proptypes.html#fixing-the-false-positive-in-third-party-proptypes
        percentage: (object: any, key: string, componentName: string, ...rest: any[]): Error | null => {
            const error = PropTypes.number(object, key, componentName, ...rest);
            if (error) {
                return error;
            }
            if (object[key] < 0 || object[key] > 100) {
                return new Error(`prop ${key} must be between 0 and 100`);
            }
            return null;
        }
    },
    render: (): React.ReactElement<any> | null => {
        return null;
    }
};

//
// ContextTypes
// --------------------------------------------------------------------------

const ContextTypesSpecification: React.ComponentSpec<any, any> = {
    contextTypes: {
        optionalArray: PropTypes.array,
        optionalBool: PropTypes.bool,
        optionalFunc: PropTypes.func,
        optionalNumber: PropTypes.number,
        optionalObject: PropTypes.object,
        optionalString: PropTypes.string,
        optionalNode: PropTypes.node,
        optionalElement: PropTypes.element,
        optionalMessage: PropTypes.instanceOf(Date),
        optionalEnum: PropTypes.oneOf(["News", "Photos"]),
        optionalUnion: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date)
        ]),
        optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
        optionalObjectOf: PropTypes.objectOf(PropTypes.number),
        optionalObjectWithShape: PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.number
        }),
        requiredFunc: PropTypes.func.isRequired,
        requiredAny: PropTypes.any.isRequired,
        customProp(props: any, propName: string, componentName: string): Error | null {
            if (!/matchme/.test(props[propName])) {
                return new Error("Validation failed!");
            }
            return null;
        }
    },
    render: (): null => {
        return null;
    }
};

//
// React.Children
// --------------------------------------------------------------------------

const mappedChildrenArray: number[] =
    React.Children.map<number>(children, (child) => 42);
React.Children.forEach(children, (child) => { });
const nChildren: number = React.Children.count(children);
let onlyChild: React.ReactElement<any> = React.Children.only(DOM.div()); // ok
onlyChild = React.Children.only([null, [[["Hallo"], true]], false]); // error
const childrenToArray: React.ReactChild[] = React.Children.toArray(children);

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
    private _interval: NodeJS.Timer;
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
        return DOM.div(
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
    a: DOM.div(),
    b: ["a", false, React.createElement("span")]
});

//
// CSSTransitionGroup addon
// --------------------------------------------------------------------------
React.createFactory(CSSTransitionGroup)({
    component: createReactClass({
        render: (): null => null
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
createReactClass({
    mixins: [LinkedStateMixin],
    getInitialState() {
        return {
            isChecked: false,
            message: "hello!"
        };
    },
    render() {
        return DOM.div(null,
            DOM.input({
                type: "checkbox",
                checkedLink: this.linkState("isChecked")
            }),
            DOM.input({
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
const measurements = Perf.getLastMeasurements();
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
createReactClass({
    mixins: [PureRenderMixin],
    render() { return DOM.div(null); }
});

//
// TestUtils addon
// --------------------------------------------------------------------------

const inst: ModernComponent = TestUtils.renderIntoDocument<ModernComponent>(element);
const node: Element = TestUtils.renderIntoDocument(DOM.div());

TestUtils.Simulate.click(node);
TestUtils.Simulate.change(node);
TestUtils.Simulate.keyDown(node, { key: "Enter", cancelable: false });

const renderer: TestUtils.ShallowRenderer = TestUtils.createRenderer();
renderer.render(React.createElement(Timer));
const output: React.ReactElement<React.Props<Timer>> =
    renderer.getRenderOutput();

const foundComponent: ModernComponent = TestUtils.findRenderedComponentWithType(
    inst, ModernComponent);
const foundComponents: ModernComponent[] = TestUtils.scryRenderedComponentsWithType(
    inst, ModernComponent);

// ReactTestUtils custom type guards

const emptyElement1: React.ReactElement<{}> = React.createElement(ModernComponent);
if (TestUtils.isElementOfType(emptyElement1, StatelessComponent)) {
    emptyElement1.props.foo;
}
const emptyElement2: React.ReactElement<{}> = React.createElement(StatelessComponent);
if (TestUtils.isElementOfType(emptyElement2, StatelessComponent)) {
    emptyElement2.props.foo;
}

if (TestUtils.isDOMComponent(container)) {
    container.getAttribute("className");
} else if (TestUtils.isCompositeComponent(new ModernComponent({ hello: 'hi', foo: 3 }))) {
    new ModernComponent({ hello: 'hi', foo: 3 }).props;
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
    const initialArray = [1, 2, 3];
    const newArray = update(initialArray, { $push: [4] }); // => [1, 2, 3, 4]

    const collection = [1, 2, { a: [12, 17, 15] }];
    const newCollection = update(collection, { 2: { a: { $splice: [[1, 1, 13, 14]] } } });
    // => [1, 2, {a: [12, 13, 14, 15]}]

    const obj = { a: 5, b: 3 };
    const newObj = update(obj, {
        b: {
            $apply: (x) => x * 2
        }
    });
    // => {a: 5, b: 6}
    const newObj2 = update(obj, { b: { $set: obj.b * 2 } });

    const objShallow = { a: 5, b: 3 };
    const newObjShallow = update(obj, { $merge: { b: 6, c: 7 } }); // => {a: 5, b: 6, c: 7}
}

//
// The SyntheticEvent.target.value should be accessible for onChange
// --------------------------------------------------------------------------
class SyntheticEventTargetValue extends React.Component<{}, { value: string }> {
    constructor(props: {}) {
        super(props);
        this.state = { value: 'a' };
    }
    render() {
        return DOM.textarea({
            value: this.state.value,
            onChange: e => this.setState({ value: e.target.value })
        });
    }
}

DOM.input({
    onChange: event => {
        // `event.target` is guaranteed to be HTMLInputElement
        event.target.value;
    }
});

// A ChangeEvent is a valid FormEvent (maintain compatibility with existing
// event handlers)

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputFormEvent = React.FormEvent<HTMLInputElement>;
const changeEvent: InputChangeEvent = undefined as any;
const formEvent: InputFormEvent = changeEvent;

// defaultProps should be optional of props
{
    interface ComponentProps {
        prop1: string;
        prop2: string;
        prop3?: string;
    }
    class ComponentWithDefaultProps extends React.Component<ComponentProps> {
        static defaultProps = {
            prop3: "default value",
        };
    }
    const VariableWithAClass: React.ComponentClass<ComponentProps> = ComponentWithDefaultProps;
}

// complex React.DOMElement type
declare var x: React.DOMElement<{
    className: string;
    style: {
        height: string;
        overflowY: "auto";
        transition: string;
    };
}, Element>;

// React 16 should be able to render its children directly
class RenderChildren extends React.Component {
    render() {
        const { children } = this.props;
        return children !== undefined ? children : null;
    }
}
