import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";
import * as PropTypes from "prop-types";
import createFragment = require("react-addons-create-fragment");
import * as LinkedStateMixin from "react-addons-linked-state-mixin";
import * as PureRenderMixin from "react-addons-pure-render-mixin";
import shallowCompare = require("react-addons-shallow-compare");
import update = require("react-addons-update");
import createReactClass = require("create-react-class");
import * as DOM from "react-dom-factories";

// NOTE: forward declarations for tests
declare function setInterval(...args: any[]): any;
declare function clearInterval(...args: any[]): any;
declare var console: Console;
interface Console {
    log(...args: any[]): void;
}

interface Props {
    hello: string;
    world?: string | null | undefined;
    foo: number;
}

interface State {
    inputValue?: string | null | undefined;
    seconds?: number | undefined;
}

interface Snapshot {
    baz: string;
}

interface Context {
    someValue?: string | null | undefined;
}

interface ChildContext {
    someOtherValue: string;
}

interface MyComponent extends React.Component<Props, State> {
    reset(): void;
}

// use any for ClassAttribute type sine we're using string refs
const props: Props & React.ClassAttributes<any> = {
    key: 42,
    ref: "myComponent42",
    hello: "world",
    foo: 42
};

const scProps: SCProps = {
    foo: 42
};

declare const container: Element;

//
// Top-Level API
// --------------------------------------------------------------------------
{
    interface State {
        inputValue: string;
        seconds: number;
    }
    class SettingStateFromCtorComponent extends React.Component<Props, State, Snapshot> {
        constructor(props: Props) {
            super(props);
            // @ts-expect-error
            this.state = {
                inputValue: 'hello'
            };
        }
        render() { return null; }
    }

    class BadlyInitializedState extends React.Component<Props, State, Snapshot> {
        // state = {
        //     secondz: 0,
        //     inputValuez: 'hello'
        // };
        render() { return null; }
    }
    class BetterPropsAndStateChecksComponent extends React.Component<Props, State, Snapshot> {
        render() { return null; }
        componentDidMount() {
            console.log(this.state.inputValue);
        }
        mutateState() {
            // @ts-expect-error
            this.state = {
                inputValue: 'hello'
            };

            // Even if state is not set, this is allowed by React
            this.setState({ inputValue: 'hello' });
            this.setState((prevState, props) => {
                // @ts-expect-error
                props = { foo: 'nope' };
                // @ts-expect-error
                props.foo = 'nope';

                return { inputValue: prevState.inputValue + ' foo' };
            });
        }
        mutateProps() {
            // @ts-expect-error
            this.props = {};
            // @ts-expect-error
            this.props = {
                key: 42,
                ref: "myComponent42",
                hello: "world",
                foo: 42
            };
        }
    }
}

class ModernComponent extends React.Component<Props, State, Snapshot>
    implements MyComponent, React.ChildContextProvider<ChildContext> {
    static propTypes: React.ValidationMap<Props> = {
        hello: PropTypes.string.isRequired,
        world: PropTypes.string,
        foo: PropTypes.number.isRequired
    };

    static contextTypes: React.ValidationMap<Context> = {
        someValue: PropTypes.string
    };

    static childContextTypes: React.ValidationMap<ChildContext> = {
        someOtherValue: PropTypes.string.isRequired
    };

    context: Context = {};

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

    private readonly _myComponent: MyComponent;
    private _input: HTMLInputElement | null;

    render() {
        return DOM.div(null,
            DOM.input({
                ref: input => this._input = input,
                value: this.state.inputValue ? this.state.inputValue : undefined
            }),
            DOM.input({
                onChange: event => console.log(event.target)
            }));
    }

    shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: any): boolean {
        return shallowCompare(this, nextProps, nextState);
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Props>) {
        return { baz: `${prevProps.foo}baz` };
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot: Snapshot) {
        return;
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
    foo?: number | undefined;
}

function FunctionComponent(props: SCProps) {
    return props.foo ? DOM.div(null, props.foo) : null;
}

// tslint:disable-next-line:no-namespace
namespace FunctionComponent {
    export const displayName = "FunctionComponent";
    export const defaultProps = { foo: 42 };
}

const FunctionComponent2: React.FunctionComponent<SCProps> =
    // props is contextually typed
    props => DOM.div(null, props.foo);
FunctionComponent2.displayName = "FunctionComponent2";
FunctionComponent2.defaultProps = {
    foo: 42
};

const LegacyStatelessComponent2: React.SFC<SCProps> =
    // props is contextually typed
    props => DOM.div(null, props.foo);
LegacyStatelessComponent2.displayName = "LegacyStatelessComponent2";
LegacyStatelessComponent2.defaultProps = {
    foo: 42
};

const FunctionComponent3: React.FunctionComponent<SCProps> =
    // allows usage of props.children
    // allows null return
    props => props.foo ? DOM.div(null, props.foo, props.children) : null;

const LegacyStatelessComponent3: React.SFC<SCProps> =
    // allows usage of props.children
    // allows null return
    props => props.foo ? DOM.div(null, props.foo, props.children) : null;

// allows null as props
const FunctionComponent4: React.FunctionComponent = props => null;

// undesired: Rejects `false` because of https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
// leaving here to document limitation and inspect error message
// @ts-expect-error
const FunctionComponent5: React.FunctionComponent = () => false;

// React.createFactory
const factory: React.CFactory<Props, ModernComponent> =
    React.createFactory(ModernComponent);
const factoryElement: React.CElement<Props, ModernComponent> =
    factory(props);

const functionComponentFactory: React.FunctionComponentFactory<SCProps> =
    React.createFactory(FunctionComponent);
const functionComponentFactoryElement: React.FunctionComponentElement<SCProps> =
    functionComponentFactory(props);

const legacyStatelessComponentFactory: React.SFCFactory<SCProps> =
    React.createFactory(FunctionComponent);
const legacyStatelessComponentFactoryElement: React.SFCElement<SCProps> =
    legacyStatelessComponentFactory(props);

const domFactory: React.DOMFactory<React.DOMAttributes<{}>, Element> =
    React.createFactory("div");
const domFactoryElement: React.DOMElement<React.DOMAttributes<{}>, Element> =
    domFactory();

// React.createElement
const element: React.CElement<Props, ModernComponent> = React.createElement(ModernComponent, props);
const elementNoState: React.CElement<Props, ModernComponentNoState> = React.createElement(ModernComponentNoState, props);
const elementNullProps: React.CElement<{}, ModernComponentNoPropsAndState> = React.createElement(ModernComponentNoPropsAndState, null);
const functionComponentElement: React.FunctionComponentElement<SCProps> = React.createElement(FunctionComponent, scProps);
const functionComponentElementNullProps: React.FunctionComponentElement<SCProps> = React.createElement(FunctionComponent4, null);
const legacyStatelessComponentElement: React.SFCElement<SCProps> = React.createElement(FunctionComponent, scProps);
const legacyStatelessComponentElementNullProps: React.SFCElement<SCProps> = React.createElement(FunctionComponent4, null);
const domElement: React.DOMElement<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> = React.createElement("div");
const domElementNullProps = React.createElement("div", null);
const htmlElement = React.createElement("input", { type: "text" });
const inputElementNullProps: React.DOMElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = React.createElement("input", null);
const svgElement = React.createElement("svg", { accentHeight: 12 });
const svgElementNullProps = React.createElement("svg", null);
const fragmentElement: React.ReactElement<{}> = React.createElement(React.Fragment, {}, [React.createElement("div"), React.createElement("div")]);
const fragmentElementNullProps: React.ReactElement<{}> = React.createElement(React.Fragment, null, [React.createElement("div"), React.createElement("div")]);

const customProps: React.HTMLProps<HTMLElement> = props;
const customDomElement = "my-element";
const nonLiteralElement = React.createElement(customDomElement, customProps);
const customDomElementNullProps = React.createElement(customDomElement, null);

// https://github.com/Microsoft/TypeScript/issues/15019

function foo3(child: React.ComponentClass<{ name: string }> | React.FunctionComponent<{ name: string }> | string) {
    React.createElement(child, { name: "bar" });
}

function foo4(child: React.ComponentClass<{ name: string }> | React.SFC<{ name: string }> | string) {
    React.createElement(child, { name: "bar" });
}

// React.cloneElement
const clonedElement: React.CElement<Props, ModernComponent> = React.cloneElement(element, { foo: 43 });

React.cloneElement(element, {});
React.cloneElement(element, {}, null);

const clonedElement2: React.CElement<Props, ModernComponent> =
    React.cloneElement(element, {
        ref: c => c && c.reset()
    });
const clonedElement3: React.CElement<Props, ModernComponent> =
    React.cloneElement(element, {
        key: "8eac7",
        foo: 55
    });
const clonedfunctionComponentElement: React.FunctionComponentElement<SCProps> =
    React.cloneElement(functionComponentElement, { foo: 44 });
const clonedlegacyStatelessComponentElement: React.SFCElement<SCProps> =
    React.cloneElement(legacyStatelessComponentElement, { foo: 44 });
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

const componentElementOrNull: ModernComponent = ReactDOM.render(element, container);
const componentNoState: ModernComponentNoState = ReactDOM.render(elementNoState, container);
const componentNoStateElementOrNull: ModernComponentNoState = ReactDOM.render(elementNoState, container);
const domComponent: Element = ReactDOM.render(domElement, container);

// Other Top-Level API
const unmounted: boolean = ReactDOM.unmountComponentAtNode(container);
const str: string = ReactDOMServer.renderToString(element);
const markup: string = ReactDOMServer.renderToStaticMarkup(element);
const notValid: boolean = React.isValidElement(props); // false
const isValid = React.isValidElement(element); // true
let domNode = ReactDOM.findDOMNode(component);
domNode = ReactDOM.findDOMNode(domNode as Element);
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

interface ForwardingRefComponentProps {
    hello: string;
    world?: string | null | undefined;
    foo: number;
}

const ForwardingRefComponent = React.forwardRef((props: ForwardingRefComponentProps, ref: React.Ref<RefComponent>) => {
    return React.createElement(RefComponent, { ref });
});

// Declaring forwardRef render function separately (not inline).
const ForwardRefRenderFunction = (props: ForwardingRefComponentProps, ref: React.ForwardedRef<RefComponent>)  => {
    return React.createElement(RefComponent, { ref });
};
React.forwardRef(ForwardRefRenderFunction);

const ForwardingRefComponentPropTypes: React.WeakValidationMap<ForwardingRefComponentProps> = {};
ForwardingRefComponent.propTypes = ForwardingRefComponentPropTypes;

// render function tests
// need the explicit type declaration for typescript < 3.1
const ForwardRefRenderFunctionWithPropTypes: { (): null, propTypes?: {} | undefined } = () => null;
// Warning: forwardRef render functions do not support propTypes or defaultProps
// @ts-expect-error
React.forwardRef(ForwardRefRenderFunctionWithPropTypes);

const ForwardRefRenderFunctionWithDefaultProps: { (): null, defaultProps?: {} | undefined } = () => null;
// Warning: forwardRef render functions do not support propTypes or defaultProps
// @ts-expect-error
React.forwardRef(ForwardRefRenderFunctionWithDefaultProps);

function RefCarryingComponent() {
    const ref = React.createRef<RefComponent>();
    // Without the explicit type argument, TypeScript infers `{ref: React.RefObject<RefComponent>}`
    // from the second argument because both of the inferences generated by the first argument
    // (both to the `P` in the call signature and the `P` in `defaultProps`) have low priority.
    // Then we get a type error because `ForwardingRefComponent.defaultProps` has the wrong type.
    // Can/should this be fixed somehow?
    return React.createElement<React.RefAttributes<RefComponent> & ForwardingRefComponentProps>(
        ForwardingRefComponent,
        {
            ref,
            hello: 'there',
            foo: 0,
        },
    );
}
const ForwardingRefComponent2 = React.forwardRef<HTMLElement>((props, ref) => {
    return React.createElement('div', {
        ref(e: HTMLDivElement) {
            if (typeof ref === 'function') {
                ref(e);
            } else if (ref) {
                ref.current = e;
            }
        }
    });
});

const MemoizedForwardingRefComponent = React.memo(ForwardingRefComponent);
const LazyComponent = React.lazy(() => Promise.resolve({ default: RefComponent }));

type ClassComponentAsRef = React.ElementRef<typeof RefComponent>; // $ExpectType RefComponent
type FunctionComponentWithoutPropsAsRef = React.ElementRef<typeof RefCarryingComponent>; // $ExpectType never
type FunctionComponentWithPropsAsRef = React.ElementRef<typeof FunctionComponent>; // $ExpectType never
type HTMLIntrinsicAsRef = React.ElementRef<'div'>; // $ExpectType HTMLDivElement
type SVGIntrinsicAsRef = React.ElementRef<'svg'>; // $ExpectType SVGSVGElement
type ForwardingRefComponentAsRef = React.ElementRef<typeof ForwardingRefComponent>; // $ExpectType RefComponent
type MemoizedForwardingRefComponentAsRef = React.ElementRef<typeof MemoizedForwardingRefComponent>; // $ExpectType RefComponent
type LazyComponentAsRef = React.ElementRef<typeof LazyComponent>; // $ExpectType RefComponent

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
        const currentTarget: EventTarget & HTMLElement = event.currentTarget;
    },
    onBlur: (event: React.FocusEvent) => {
        const {
            // $ExpectType (EventTarget & Element) | null
            relatedTarget,
            // $ExpectType EventTarget & Element
            target
        } = event;
    },
    onFocus: (event: React.FocusEvent) => {
        const {
            // $ExpectType (EventTarget & Element) | null
            relatedTarget,
            // $ExpectType EventTarget & Element
            target
        } = event;
    },
    dangerouslySetInnerHTML: {
        __html: "<strong>STRONG</strong>"
    },
    unselectable: 'on',
    'aria-atomic': false,
    'aria-checked': 'true',
    'aria-colcount': 7,
    'aria-label': 'test',
    'aria-relevant': 'additions removals'
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
// React.Children
// --------------------------------------------------------------------------

const mappedChildrenArray: number[] =
    React.Children.map(children, (child: any) => 42);
const childrenArray: Array<React.ReactElement<{ p: number }>> = children;
const mappedChildrenArrayWithKnownChildren: number[] =
    React.Children.map(childrenArray, (child) => child.props.p);
React.Children.forEach(children, (child) => { });
const nChildren: number = React.Children.count(children);
let onlyChild: React.ReactElement = React.Children.only(DOM.div()); // ok
onlyChild = React.Children.only([null, [[["Hallo"], true]], false]); // error
const childrenToArray: Array<Exclude<React.ReactNode, boolean | null | undefined>> = React.Children.toArray(children);

declare const numberChildren: number[];
declare const nodeChildren: React.ReactNode;
declare const elementChildren: JSX.Element[];
declare const mixedChildren: Array<JSX.Element | string>;
declare const singlePluralChildren: JSX.Element | JSX.Element[];
declare const renderPropsChildren: () => JSX.Element;

// $ExpectType null
const mappedChildrenArray0 = React.Children.map(null, num => num);
// $ExpectType undefined
const mappedChildrenArray1 = React.Children.map(undefined, num => num);
// $ExpectType number[]
const mappedChildrenArray2 = React.Children.map(numberChildren, num => num);
// $ExpectType Element[]
const mappedChildrenArray3 = React.Children.map(elementChildren, element => element);
// $ExpectType (string | Element)[]
const mappedChildrenArray4 = React.Children.map(mixedChildren, elementOrString => elementOrString);
// This test uses a conditional type because otherwise it gets flaky and can resolve to either Key or ReactText, both
// of which are aliases for `string | number`.
const mappedChildrenArray5 = React.Children.map(singlePluralChildren, element => element.key);
// $ExpectType true
type mappedChildrenArray5Type = typeof mappedChildrenArray5 extends React.Key[] ? true : false;
// $ExpectType string[]
const mappedChildrenArray6 = React.Children.map(renderPropsChildren, element => element.name);
// The return type may not be an array
// @ts-expect-error
const mappedChildrenArray7 = React.Children.map(nodeChildren, node => node).map;

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
// PureRenderMixin addon
// --------------------------------------------------------------------------
createReactClass({
    mixins: [PureRenderMixin],
    render() { return DOM.div(null); }
});

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
// Events
// --------------------------------------------------------------------------
function eventHandler<T extends React.BaseSyntheticEvent>(e: T) {}

function handler(e: React.MouseEvent) {
    eventHandler(e);
}

const keyboardExtendsUI: React.UIEventHandler = (e: React.KeyboardEvent) => {};

//
// The SyntheticEvent.target.value should be accessible for onChange
// --------------------------------------------------------------------------
class SyntheticEventTargetValue extends React.Component<{}, { value: string }> {
    state: { value: string };
    constructor(props: {}) {
        super(props);
        this.state = { value: 'a' };
    }
    render() {
        return DOM.textarea({
            value: this.state.value,
            onChange: e => {
                const target: HTMLTextAreaElement = e.target;
            }
        });
    }
}

DOM.input({
    onChange: event => {
        // `event.target` is guaranteed to be HTMLInputElement
        const target: HTMLInputElement = event.target;
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
        prop3?: string | undefined;
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

const Memoized1 = React.memo(function Foo(props: { foo: string }) { return null; });
React.createElement(Memoized1, { foo: 'string' });

const Memoized2 = React.memo<{ bar: string }>(
    function Bar(props: { bar: string }) { return null; },
    (prevProps, nextProps) => prevProps.bar === nextProps.bar
);
React.createElement(Memoized2, { bar: 'string' });

const specialSfc1: React.ExoticComponent<any> = Memoized1;
const functionComponent: React.FunctionComponent<any> = Memoized2;
const sfc: React.SFC<any> = Memoized2;
// this $ExpectError is failing on TypeScript@next
// // @ts-expect-error Property '$$typeof' is missing in type
// const specialSfc2: React.SpecialSFC = props => null;

const propsWithChildren: React.PropsWithChildren<Props> = {
    hello: "world",
    foo: 42,
    children: functionComponent,
};

// JSXElemenConstructor vs Component assignability
{
    interface ExactProps {
        value: 'A' | 'B';
    }
    interface NarrowerProps {
        value: 'A';
    }
    interface WiderProps {
        value: 'A' | 'B' | 'C';
    }

    // We don't actually care about the concrete type of `Wrapper` i.e.
    // we don't care about the value created by `new Wrapper()`.
    // We only care about the props we can pass to the component.
    let Wrapper: React.JSXElementConstructor<ExactProps>;
    // @ts-expect-error
    Wrapper = class Narrower extends React.Component<NarrowerProps> {};
    // @ts-expect-error
    Wrapper = (props: NarrowerProps) => null;
    Wrapper = class Exact extends React.Component<ExactProps> {};
    Wrapper = (props: ExactProps) => null;
    Wrapper = class Wider extends React.Component<WiderProps> {};
    Wrapper = (props: WiderProps) => null;

    React.createElement(Wrapper, { value: 'A' });
    React.createElement(Wrapper, { value: 'B' });
    // @ts-expect-error
    React.createElement(Wrapper, { value: 'C' });
}

// ComponentPropsWithRef and JSXElementConstructor
{
    interface Props {
        value: string;
    }
    type InferredProps = React.ComponentPropsWithRef<React.JSXElementConstructor<Props>>;
    const props: Props = {
        value: 'inferred',
        // @ts-expect-error
        notImplemented: 5
    };
    const inferredProps: InferredProps = {
        value: 'inferred',
        // @ts-expect-error
        notImplemented: 5
    };
}
