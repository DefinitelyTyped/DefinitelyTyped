import PropTypes = require("prop-types");
import React = require("react");

interface SCProps {
    foo?: number | undefined;
}
const FunctionComponent: React.FunctionComponent<SCProps> = ({ foo }: SCProps) => {
    return <div>{foo}</div>;
};
FunctionComponent.displayName = "FunctionComponent3";
FunctionComponent.defaultProps = {
    foo: 42
};
<FunctionComponent />;
<slot name="slot1"></slot>;

const FunctionComponent2: React.FunctionComponent<SCProps> = ({ foo, children }) => {
    return <div>{foo}{children}</div>;
};
FunctionComponent2.displayName = "FunctionComponent4";
FunctionComponent2.defaultProps = {
    foo: 42
};
<FunctionComponent2>24</FunctionComponent2>;

const VoidFunctionComponent: React.VoidFunctionComponent<SCProps> = ({ foo }: SCProps) => {
    return <div>{foo}</div>;
};
VoidFunctionComponent.displayName = "VoidFunctionComponent1";
VoidFunctionComponent.defaultProps = {
    foo: 42
};
<VoidFunctionComponent />;

// @ts-expect-error
const VoidFunctionComponent2: React.VoidFunctionComponent<SCProps> = ({ foo, children }) => {
    return <div>{foo}{children}</div>;
};
VoidFunctionComponent2.displayName = "VoidFunctionComponent2";
VoidFunctionComponent2.defaultProps = {
    foo: 42
};
// @ts-expect-error
<VoidFunctionComponent2>24</VoidFunctionComponent2>;

// svg sanity check
<svg viewBox="0 0 1000 1000">
    <g>
        <text x="200" y="300" strokeWidth="5" stroke="black" alignmentBaseline="middle">
            Hello, world!
            <animateMotion
                path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
                dur="5s"
                repeatCount="indefinite"
            />
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

// button type attribute
<button type="submit">foo</button>;
<button type="reset">foo</button>;
<button type="button">foo</button>;
// @ts-expect-error
<button type="botton">foo</button>;
// @ts-expect-error
<button type={"botton" as string}>foo</button>;

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

// unstable APIs should not be part of the typings
// @ts-expect-error
const ContextUsingUnstableObservedBits = React.createContext(undefined, (previous, next) => 7);
// @ts-expect-error
<ContextWithRenderProps.Consumer unstable_observedBits={4}>
    {(value: unknown) => null}
</ContextWithRenderProps.Consumer>;

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
      // @ts-expect-error
      this.setState({ foo: '' });
      this.setState({ foo: true });
      this.setState({ foo: true, bar: true });
      this.setState({});
      this.setState(null);
      // @ts-expect-error
      this.setState({ foo: true, foo2: true });
      // @ts-expect-error
      this.setState(() => ({ foo: '' }));
      this.setState(() => ({ foo: true }));
      this.setState(() => ({ foo: true, bar: true }));
      // @ts-expect-error
      this.setState(() => ({ foo: true, foo2: true }));
      // @ts-expect-error
      this.setState(() => ({ foo: '', foo2: true }));
      this.setState(() => ({ })); // ok!
      // @ts-expect-error
      this.setState({ foo: true, bar: undefined});
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
//        foo() {
//            this.setState({ baseProp: 'foobar' });
//        }
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
// @ts-expect-error
componentWithBadLifecycle.getSnapshotBeforeUpdate = () => {
    return 'number';
};
// @ts-expect-error
componentWithBadLifecycle.componentDidUpdate = (prevProps: {}, prevState: {}, snapshot?: string) => {
    return;
};

const Memoized1 = React.memo(function Foo(props: { foo: string }) { return null; });
<Memoized1 foo='string'/>;

const Memoized2 = React.memo(
    function Bar(props: { bar: string }) { return null; },
    (prevProps, nextProps) => prevProps.bar === nextProps.bar
);
<Memoized2 bar='string'/>;

const Memoized3 = React.memo(class Test extends React.Component<{ x?: string | undefined }> {});
<Memoized3 ref={ref => { if (ref) { ref.props.x; } }}/>;

const memoized4Ref = React.createRef<HTMLDivElement>();
const Memoized4 = React.memo(React.forwardRef((props: {}, ref: React.Ref<HTMLDivElement>) => <div ref={ref}/>));
<Memoized4 ref={memoized4Ref}/>;

const Memoized5 = React.memo<{ test: boolean }>(
    prop => <>{prop.test && prop.children}</>,
    (prevProps, nextProps) => nextProps.test ? prevProps.children === nextProps.children : prevProps.test
);

<Memoized5 test/>;

const Memoized6: React.NamedExoticComponent<object> = React.memo(props => null);
<Memoized6/>;
// @ts-expect-error
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
// @ts-expect-error
<React.Suspense/>;

// unstable API should not be part of the typings
// @ts-expect-error
<React.Suspense fallback={null} unstable_avoidThisFallback />;

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
    context: { foo: React.ReactNode } = { foo: {} as React.ReactNode };

    render() {
        // $ExpectType ReactNode
        this.context.foo;
        return this.context.foo;
    }
}

class NewContext extends React.Component {
    static contextType = ContextWithRenderProps;
    context: React.ContextType<typeof ContextWithRenderProps> = "";

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
// @ts-expect-error
<ForwardRef ref='string'/>;
<ForwardRef2 ref={divFnRef}/>;
<ForwardRef2 ref={divRef}/>;
// @ts-expect-error
<ForwardRef2 ref='string'/>;

const htmlElementFnRef = (instance: HTMLElement | null) => {};
const htmlElementRef = React.createRef<HTMLElement>();
<div ref={htmlElementFnRef} />;
<div ref={htmlElementRef} />;
// `current` is nullable
const unsoundDivFnRef = (current: HTMLDivElement) => {};
declare const unsoundDivObjectRef: { current: HTMLDivElement };
// `current` is nullable but type-checks
// this is consistent with ref objects
// If this ever not type-checks, `<div ref={unsoundDivObjectRef}` should also fail type-checking
<div ref={unsoundDivFnRef} />;
<div ref={unsoundDivObjectRef} />;

const newContextRef = React.createRef<NewContext>();
<NewContext ref={newContextRef}/>;
<NewContext ref='string'/>;

const ForwardNewContext = React.forwardRef((_props: {}, ref?: React.Ref<NewContext>) => <NewContext ref={ref}/>);
<ForwardNewContext ref={newContextRef}/>;
// @ts-expect-error
<ForwardNewContext ref='string'/>;

const ForwardRef3 = React.forwardRef(
    (props: JSX.IntrinsicElements['div'] & Pick<JSX.IntrinsicElements['div'] & { theme?: {} | undefined }, 'ref'|'theme'>, ref?: React.Ref<HTMLDivElement>) =>
        <div {...props} ref={ref}/>
);

<ForwardRef3 ref={divFnRef}/>;
<ForwardRef3 ref={divRef}/>;

const { Profiler } = React;

// 'id' is missing
// @ts-expect-error
<Profiler />;
// 'onRender' is missing
// @ts-expect-error
<Profiler id="test" />;
// 'number' is not assignable to 'string'
// @ts-expect-error
<Profiler id={2} />;

<Profiler
  id="test"
  onRender={(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    const message = `${id} ${phase} took ${actualDuration.toFixed(2)}s actual, ${baseDuration.toFixed(2)}s base`;

    const commitMessage = `commit started ${startTime.toFixed(2)} within ${commitTime}`;

    const interactionsSummary = Array.from(interactions)
      .map(interaction => {
        return `${interaction.id}: '${interaction.name}' started at ${interaction.timestamp.toFixed(2)}`;
      })
      .join("\n");
    const interactionMessage = `there were ${interactions.size} interactions:\n${interactionsSummary}`;
  }}
>
  <div />
</Profiler>;

type ImgProps = React.ComponentProps<'img'>;
const imgProps: ImgProps = {};
// the order of the strings in the union seems to vary
// with the typescript version, so test assignment instead
imgProps.decoding = 'async';
imgProps.decoding = 'auto';
imgProps.decoding = 'sync';
imgProps.loading = 'eager';
imgProps.loading = 'lazy';
// @ts-expect-error
imgProps.loading = 'nonsense';
// @ts-expect-error
imgProps.decoding = 'nonsense';
type ImgPropsWithRef = React.ComponentPropsWithRef<'img'>;
// $ExpectType ((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null | undefined
type ImgPropsWithRefRef = ImgPropsWithRef['ref'];
type ImgPropsWithoutRef = React.ComponentPropsWithoutRef<'img'>;
// $ExpectType false
type ImgPropsHasRef = 'ref' extends keyof ImgPropsWithoutRef ? true : false;

const HasClassName: React.ReactType<{ className?: string | undefined }> = 'a';
// @ts-expect-error
const HasFoo: React.ReactType<{ foo: boolean }> = 'a';
const HasFoo2: React.ReactType<{ foo: boolean }> = (props: { foo: boolean }) => null;
// @ts-expect-error
const HasFoo3: React.ReactType<{ foo: boolean }> = (props: { foo: string }) => null;
const HasHref: React.ReactType<{ href?: string | undefined }> = 'a';
// @ts-expect-error
const HasHref2: React.ReactType<{ href?: string | undefined }> = 'div';

// @ts-expect-error
const CustomElement: React.ReactType = 'my-undeclared-element';

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
    foo?: string | undefined;
}
interface TestPropTypesProps2 {
    foo: string | null;
}
interface TestPropTypesProps3 {
    foo?: string | null | undefined;
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
function CustomSelect(props: {
    children: ReadonlyArray<
      React.ReactElement<
        React.ComponentPropsWithoutRef<typeof CustomSelectOption>
      >
    >;
  }): JSX.Element {
    return (
      <div>
        <ul>{props.children}</ul>
        <select>
          {React.Children.map(props.children, child => (
            // key should be mappable from children.
            <option key={child.key} value={child.props.value}>
              {child.props.children}
            </option>
          ))}
        </select>
      </div>
    );
}
function CustomSelectOption(props: {
    value: string;
    children: React.ReactNode;
}): JSX.Element {
    return <li data-value={props.value}>{props.children}</li>;
}
function Example() {
    return (
        <CustomSelect>
        <CustomSelectOption value="one">One</CustomSelectOption>
        <CustomSelectOption value="two">Two</CustomSelectOption>
        </CustomSelect>
    );
}

function reactNodeTests() {
    function *createChildren() {
        yield <div key="one">one</div>;
        yield <div key="two">two</div>;
    }

    <div>{Object.freeze([<div key="one">one</div>, <div key="two">two</div>])}</div>;
    <div>{new Set([<div key="one">one</div>, <div key="two">two</div>])}</div>;
    // TODO: This warns at runtime so we should probably reject it as well
    <div>
        {
            new Map([
                ['one', <div key="one">one</div>],
                ['two', <div key="two">two</div>],
            ])
        }
    </div>;
    <div>{createChildren()}</div>;
}

function elementTypeTests() {
    const ReturnVoid = () => {};
    // Test disabled since it fails in TypeScript 4.8 (intended) but not earlier.
    // class RenderVoid extends React.Component {
    //     // @ts-expect-error
    //     render() {}
    // }

    const ReturnUndefined = () => undefined;
    class RenderUndefined extends React.Component {
        // Undesired behavior: Return `undefined` will throw at runtime.
        // Though this behavior was changed in 18 for this specific reason: A single type for returning and taking children is better.
        // We'll probably break a lot of existing code if we would reject with little gain for runtime safety.
        render() {
          return undefined;
        }
    }

    const ReturnNull = () => null;
    class RenderNull extends React.Component {
        render() {
          return null;
        }
    }

    const ReturnNumber = () => 0xeac1;
    class RenderNumber extends React.Component {
        render() {
          return 0xeac1;
        }
    }

    const ReturnString = () => 'Hello, Dave!';
    class RenderString extends React.Component {
        render() {
          return 'Hello, Dave!';
        }
    }

    const ReturnSymbol = () => Symbol.for('react');
    class RenderSymbol extends React.Component {
        // Undesired behavior that we can't change in 17 but was fixed in 18.
        // Accepted because `ReactNode` includes `{}`
        render() {
          return Symbol.for('react');
        }
    }

    const ReturnArray = () => [<div key="one" />];
    class RenderArray extends React.Component {
        render() {
          return [<div key="one" />];
        }
    }

    const ReturnElement = () => <div />;
    class RenderElement extends React.Component {
        render() {
          return <div />;
        }
    }

    const ReturnReactNode = ({children}: {children?: React.ReactNode}) => children;
    class RenderReactNode extends React.Component<{children?: React.ReactNode}> {
        render() {
          return this.props.children;
        }
    }

    // Undesired behavior. Returning `void` should be rejected in all forms.
    // Only TypeScript 4.8 rejects `<RenderVoid />`
    // @ts-expect-error
    <ReturnVoid />;
    // @ts-expect-error
    React.createElement(ReturnVoid);
    // Test disabled since it fails in TypeScript 4.8 (intended) but not earlier.
    // <RenderVoid />;
    // React.createElement(RenderVoid);

    // Undesired behavior. Returning `undefined` should be rejected in all forms.
    // @ts-expect-error
    <ReturnUndefined />;
    // @ts-expect-error
    React.createElement(ReturnUndefined);
    <RenderUndefined />;
    React.createElement(RenderUndefined);

    // Desired behavior.
    <ReturnNull />;
    React.createElement(ReturnNull);
    <RenderNull />;
    React.createElement(RenderNull);

    // Undesired behavior. Returning `number` should be accepted in all forms.
    // @ts-expect-error
    <ReturnNumber />;
    // @ts-expect-error
    React.createElement(ReturnNumber);
    <RenderNumber />;
    React.createElement(RenderNumber);

    // Undesired behavior. Returning `string` should be accepted in all forms.
    // @ts-expect-error
    <ReturnString />;
    // @ts-expect-error
    React.createElement(ReturnString);
    <RenderString />;
    React.createElement(RenderString);

    // Undesired behavior. Returning `Symbol` should be rejected in all forms.
    // We can't change in 17 but was fixed in 18.
    // Accepted because `ReactNode` includes `{}`
    // @ts-expect-error
    <ReturnSymbol />;
    // @ts-expect-error
    React.createElement(ReturnSymbol);
    <RenderSymbol />;
    React.createElement(RenderSymbol);

    // Undesired behavior. Returning `Array` should be accepted in all forms.
    // @ts-expect-error
    <ReturnArray />;
    // @ts-expect-error
    React.createElement(ReturnArray);
    <RenderArray />;
    React.createElement(RenderArray);

    // Desired behavior.
    <ReturnElement />;
    React.createElement(ReturnElement);
    <RenderElement />;
    React.createElement(RenderElement);

    // Undesired behavior. Returning `ReactNode` should be accepted in all forms.
    // @ts-expect-error
    <ReturnReactNode />;
    // @ts-expect-error
    React.createElement(ReturnReactNode);
    <RenderReactNode />;
    React.createElement(RenderReactNode);
}
