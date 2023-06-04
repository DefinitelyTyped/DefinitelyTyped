import * as React from "react";

interface SCProps {
    foo?: number | undefined;
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

// Below tests that setState() works properly for both regular and callback modes
class SetStateTest extends React.Component<{}, { foo: boolean, bar: boolean }> {
    handleSomething = () => {
      // @ts-expect-error
      this.setState({ foo: '' });
      this.setState({ foo: true });
      this.setState({ foo: true, bar: true });
      this.setState({});
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

// Undesired. Should error but v15 types accept any string as a valid element type.
const CustomElement: React.ReactType = 'my-undeclared-element';
// @ts-expect-error
<my-undeclared-element />;

// custom elements now need to be declared as intrinsic elements
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'my-declared-element': {};
        }
    }
}

// Augmentations of the global namespace flow into the scoped JSX namespace
// This is deprecated and will be removed in next next major of `@types/react`
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'my-declared-element-deprecated': {};
        }
    }
}

const CustomElement2: React.ElementType = 'my-declared-element-deprecated';
<my-declared-element-deprecated />;

const CustomElement3: React.ElementType = 'my-declared-element';
<my-declared-element />;

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
