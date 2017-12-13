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
>
    <b>foo</b>
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

class Comp extends React.Component<{}, { foo: boolean, bar: boolean }> {
    handleSomething = () => {
      this.setState({ foo: '' }); // $ExpectError
      this.setState({ foo: true });
      this.setState({ foo: true, bar: true });
      this.setState({});
      this.setState({ foo: true, foo2: true }); // $ExpectError
      this.setState(() => ({ foo: '' })); // $ExpectError
      this.setState(() => ({ foo: true }));
      this.setState(() => ({ foo: true, bar: true }));
      this.setState(() => ({ foo: true, foo2: true })); // $ExpectError
      this.setState(() => ({ foo: '', foo2: true })); // $ExpectError
      this.setState(() => ({ })); // ok!
      this.setState({ foo: true, bar: undefined}); // $ExpectError
    }
}
