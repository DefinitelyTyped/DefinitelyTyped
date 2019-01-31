import PropTypes = require("prop-types");
import React = require("react");

interface SCProps {
    foo?: number;
}
const FunctionComponent: React.FunctionComponent<SCProps> = ({ foo }: SCProps) => {
    return <div>{foo}</div>;
};
FunctionComponent.displayName = "FunctionComponent3";
FunctionComponent.defaultProps = {
    foo: 42
};
<FunctionComponent />;

const FunctionComponent2: React.FunctionComponent<SCProps> = ({ foo, children }) => {
    return <div>{foo}{children}</div>;
};
FunctionComponent2.displayName = "FunctionComponent4";
FunctionComponent2.defaultProps = {
    foo: 42
};
<FunctionComponent2>24</FunctionComponent2>;

// svg sanity check
<svg viewBox="0 0 1000 1000">
    <g>
        <text x="200" y="300" strokeWidth="5" stroke="black" alignmentBaseline="middle">
            Hello, world!
        </text>
        <div slot="Some Div"> Hello again! </div>
    </g>
</svg>;

// React-specific Attributes
<div
    defaultChecked
    defaultValue="some value"
    contentEditable
    suppressContentEditableWarning
    suppressHydrationWarning
>
    <b>foo</b>
</div>;

// WAI-ARIA 1.1 Attributes
<div
    aria-atomic={false}
    aria-checked='true'
    aria-colcount={7}
    aria-label='test'
>
    <b>bar</b>
</div>;

interface Props {
    hello: string;
}
interface State {
    foobar: string;
}
class ComponentWithPropsAndState extends React.Component<Props, State> {
}
<ComponentWithPropsAndState hello="TypeScript" />;

class ComponentWithoutState extends React.Component<Props> {
}
<ComponentWithoutState hello="TypeScript" />;

class ComponentWithoutPropsAndState extends React.Component {
}
<ComponentWithoutPropsAndState />;

const FunctionComponentWithoutProps: React.FunctionComponent = (props) => {
    return <div />;
};
<FunctionComponentWithoutProps />;

// React.createContext
const ContextWithRenderProps = React.createContext('defaultValue');

// Fragments
<div>
    <React.Fragment>
        <React.Fragment key="foo">
            <span>Child 1</span>
            <span>Child 2</span>
        </React.Fragment>
        <React.Fragment key="bar">
            <span>Child 3</span>
            <span>Child 4</span>
        </React.Fragment>
    </React.Fragment>
</div>;

// Strict Mode
<div>
    <React.StrictMode>
        <div />
    </React.StrictMode>
</div>;

// Below tests that setState() works properly for both regular and callback modes
class SetStateTest extends React.Component<{}, { foo: boolean, bar: boolean }> {
    handleSomething = () => {
      this.setState({ foo: '' }); // $ExpectError
      this.setState({ foo: true });
      this.setState({ foo: true, bar: true });
      this.setState({});
      this.setState(null);
      this.setState({ foo: true, foo2: true }); // $ExpectError
      this.setState(() => ({ foo: '' })); // $ExpectError
      this.setState(() => ({ foo: true }));
      this.setState(() => ({ foo: true, bar: true }));
      this.setState(() => ({ foo: true, foo2: true })); // $ExpectError
      this.setState(() => ({ foo: '', foo2: true })); // $ExpectError
      this.setState(() => ({ })); // ok!
      this.setState({ foo: true, bar: undefined}); // $ExpectError
      this.setState(prevState => (prevState.bar ? { bar: false } : null));
    }
}

// Below tests that extended types for state work
export abstract class SetStateTestForExtendsState<P, S extends { baseProp: string }> extends React.Component<P, S> {
	foo() {
		this.setState({ baseProp: 'foobar' });
	}
}

// Below tests that & generic still works
// This is invalid because 'S' may specify a different type for `baseProp`.
// export abstract class SetStateTestForAndedState<P, S> extends React.Component<P, S & { baseProp: string }> {
// 	   foo() {
// 	       this.setState({ baseProp: 'foobar' });
// 	   }
// }

interface NewProps { foo: string; }
interface NewState { bar: string; }

class ComponentWithNewLifecycles extends React.Component<NewProps, NewState, { baz: string }> {
    static getDerivedStateFromProps: React.GetDerivedStateFromProps<NewProps, NewState> = (nextProps) => {
        return { bar: `${nextProps.foo}bar` };
    }

    state = {
        bar: 'foo'
    };

    getSnapshotBeforeUpdate(prevProps: Readonly<NewProps>) {
        return { baz: `${prevProps.foo}baz` };
    }

    componentDidUpdate(prevProps: Readonly<NewProps>, prevState: Readonly<NewState>, snapshot: { baz: string }) {
        return;
    }

    render() {
        return this.state.bar;
    }
}
<ComponentWithNewLifecycles foo="bar" />;

class PureComponentWithNewLifecycles extends React.PureComponent<NewProps, NewState, { baz: string }> {
    static getDerivedStateFromProps: React.GetDerivedStateFromProps<NewProps, NewState> = (nextProps) => {
        return { bar: `${nextProps.foo}bar` };
    }

    state = {
        bar: 'foo'
    };

    getSnapshotBeforeUpdate(prevProps: Readonly<NewProps>) {
        return { baz: `${prevProps.foo}baz` };
    }

    componentDidUpdate(prevProps: Readonly<NewProps>, prevState: Readonly<NewState>, snapshot: { baz: string }) {
        return;
    }

    render() {
        return this.state.bar;
    }
}
<PureComponentWithNewLifecycles foo="bar" />;

class ComponentWithLargeState extends React.Component<{}, Record<'a'|'b'|'c', string>> {
    static getDerivedStateFromProps: React.GetDerivedStateFromProps<{}, Record<'a'|'b'|'c', string>> = () => {
        return { a: 'a' };
    }
}
const AssignedComponentWithLargeState: React.ComponentClass = ComponentWithLargeState;

const componentWithBadLifecycle = new (class extends React.Component<{}, {}, number> {})({});
componentWithBadLifecycle.getSnapshotBeforeUpdate = () => { // $ExpectError
    return 'number';
};
componentWithBadLifecycle.componentDidUpdate = (prevProps: {}, prevState: {}, snapshot?: string) => { // $ExpectError
    return;
};

const Memoized1 = React.memo(function Foo(props: { foo: string }) { return null; });
<Memoized1 foo='string'/>;

const Memoized2 = React.memo(
    function Bar(props: { bar: string }) { return null; },
    (prevProps, nextProps) => prevProps.bar === nextProps.bar
);
<Memoized2 bar='string'/>;

const Memoized3 = React.memo(class Test extends React.Component<{ x?: string }> {});
<Memoized3 ref={ref => { if (ref) { ref.props.x; } }}/>;

const memoized4Ref = React.createRef<HTMLDivElement>();
const Memoized4 = React.memo(React.forwardRef((props: {}, ref: React.Ref<HTMLDivElement>) => <div ref={ref}/>));
<Memoized4 ref={memoized4Ref}/>;

const Memoized5 = React.memo<{ test: boolean }>(
    prop => <>{prop.test && prop.children}</>,
    (prevProps, nextProps) => nextProps.test ? prevProps.children === nextProps.children : prevProps.test
);

<Memoized5 test/>;

// for some reason the ExpectType doesn't work if the type is namespaced
// $ExpectType NamedExoticComponent<{}>
const Memoized6 = React.memo(props => null);
<Memoized6/>;
// $ExpectError
<Memoized6 foo/>;

// NOTE: this test _requires_ TypeScript 3.1
// It is passing, for what it's worth.
// const Memoized7 = React.memo((() => {
//     function HasDefaultProps(props: { test: boolean }) { return null; }
//     HasDefaultProps.defaultProps = {
//         test: true
//     };
//     return HasDefaultProps;
// })());
// // $ExpectType boolean
// Memoized7.type.defaultProps.test;

const LazyClassComponent = React.lazy(async () => ({ default: ComponentWithPropsAndState }));
const LazyMemoized3 = React.lazy(async () => ({ default: Memoized3 }));
const LazyRefForwarding = React.lazy(async () => ({ default: Memoized4 }));

<React.Suspense fallback={<Memoized1 foo='string' />}>
    <LazyClassComponent hello='test'/>
    <LazyClassComponent ref={ref => { if (ref) { ref.props.hello; } }} hello='test'/>
    <LazyMemoized3 ref={ref => { if (ref) { ref.props.x; } }}/>
    <LazyRefForwarding ref={memoized4Ref}/>
</React.Suspense>;

<React.Suspense fallback={null}/>;
// $ExpectError
<React.Suspense/>;

class LegacyContext extends React.Component {
    static contextTypes = { foo: PropTypes.node.isRequired };

    render() {
        // $ExpectType any
        this.context.foo;
        return this.context.foo;
    }
}

class LegacyContextAnnotated extends React.Component {
    static contextTypes = { foo: PropTypes.node.isRequired };
    context!: { foo: React.ReactNode };

    render() {
        // $ExpectType ReactNode
        this.context.foo;
        return this.context.foo;
    }
}

class NewContext extends React.Component {
    static contextType = ContextWithRenderProps;
    context!: React.ContextType<typeof ContextWithRenderProps>;

    render() {
        // $ExpectType string
        this.context;
        return this.context;
    }
}

const ForwardRef = React.forwardRef((props: JSX.IntrinsicElements['div'], ref?: React.Ref<HTMLDivElement>) => <div {...props} ref={ref}/>);
const ForwardRef2 = React.forwardRef((props: React.ComponentProps<typeof ForwardRef>, ref?: React.Ref<HTMLDivElement>) => <ForwardRef {...props} ref={ref}/>);
const divFnRef = (ref: HTMLDivElement|null) => { /* empty */ };
const divRef = React.createRef<HTMLDivElement>();

<ForwardRef ref={divFnRef}/>;
<ForwardRef ref={divRef}/>;
<ForwardRef ref='string'/>; // $ExpectError
<ForwardRef2 ref={divFnRef}/>;
<ForwardRef2 ref={divRef}/>;
<ForwardRef2 ref='string'/>; // $ExpectError

const newContextRef = React.createRef<NewContext>();
<NewContext ref={newContextRef}/>;
<NewContext ref='string'/>;

const ForwardNewContext = React.forwardRef((_props: {}, ref?: React.Ref<NewContext>) => <NewContext ref={ref}/>);
<ForwardNewContext ref={newContextRef}/>;
<ForwardNewContext ref='string'/>; // $ExpectError

const ForwardRef3 = React.forwardRef(
    (props: JSX.IntrinsicElements['div'] & Pick<JSX.IntrinsicElements['div'] & { theme?: {} }, 'ref'|'theme'>, ref?: React.Ref<HTMLDivElement>) =>
        <div {...props} ref={ref}/>
);

<ForwardRef3 ref={divFnRef}/>;
<ForwardRef3 ref={divRef}/>;

type ImgProps = React.ComponentProps<'img'>;
// $ExpectType "async" | "auto" | "sync" | undefined
type ImgPropsDecoding = ImgProps['decoding'];
type ImgPropsWithRef = React.ComponentPropsWithRef<'img'>;
// $ExpectType ((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null | undefined
type ImgPropsWithRefRef = ImgPropsWithRef['ref'];
type ImgPropsWithoutRef = React.ComponentPropsWithoutRef<'img'>;
// $ExpectType false
type ImgPropsHasRef = 'ref' extends keyof ImgPropsWithoutRef ? true : false;

const HasClassName: React.ReactType<{ className?: string }> = 'a';
const HasFoo: React.ReactType<{ foo: boolean }> = 'a'; // $ExpectError
const HasFoo2: React.ReactType<{ foo: boolean }> = (props: { foo: boolean }) => null;
const HasFoo3: React.ReactType<{ foo: boolean }> = (props: { foo: string }) => null; // $ExpectError
const HasHref: React.ReactType<{ href?: string }> = 'a';
const HasHref2: React.ReactType<{ href?: string }> = 'div'; // $ExpectError

const CustomElement: React.ReactType = 'my-undeclared-element'; // $ExpectError

// custom elements now need to be declared as intrinsic elements
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'my-declared-element': {};
        }
    }
}

const CustomElement2: React.ReactType = 'my-declared-element';

interface TestPropTypesProps {
    foo: string;
}
interface TestPropTypesProps1 {
    foo?: string;
}
interface TestPropTypesProps2 {
    foo: string | null;
}
interface TestPropTypesProps3 {
    foo?: string | null;
}
const testPropTypes = {
    foo: PropTypes.string
};
type DeclaredPropTypes<P> = Required<Exclude<React.FunctionComponent<P>['propTypes'], undefined>>;
// $ExpectType false
type propTypesTest = typeof testPropTypes extends DeclaredPropTypes<TestPropTypesProps> ? true : false;
// $ExpectType true
type propTypesTest1 = typeof testPropTypes extends DeclaredPropTypes<TestPropTypesProps1> ? true : false;
// $ExpectType true
type propTypesTest2 = typeof testPropTypes extends DeclaredPropTypes<TestPropTypesProps2> ? true : false;
// $ExpectType true
type propTypesTest3 = typeof testPropTypes extends DeclaredPropTypes<TestPropTypesProps3> ? true : false;
