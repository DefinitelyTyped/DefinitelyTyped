import * as React from "react";

interface SCProps {
    foo?: number;
}
const StatelessComponent: React.SFC<SCProps> = ({ foo }: SCProps) => {
    return <div>{foo}</div>;
};
StatelessComponent.displayName = "StatelessComponent3";
StatelessComponent.defaultProps = {
    foo: 42
};
<StatelessComponent />;

const StatelessComponent2: React.SFC<SCProps> = ({ foo, children }) => {
    return <div>{foo}{children}</div>;
};
StatelessComponent2.displayName = "StatelessComponent4";
StatelessComponent2.defaultProps = {
    foo: 42
};
<StatelessComponent2>24</StatelessComponent2>;

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

const StatelessComponentWithoutProps: React.SFC = (props) => {
    return <div />;
};
<StatelessComponentWithoutProps />;

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
