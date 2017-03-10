import React = require("react");

interface SCProps {
    foo?: number;
}

var StatelessComponent: React.SFC<SCProps> = ({ foo }: SCProps) => {
    return <div>{ foo }</div>;
};
StatelessComponent.displayName = "StatelessComponent3";
StatelessComponent.defaultProps = {
    foo: 42
};

<StatelessComponent />;

var StatelessComponent2: React.SFC<SCProps> = ({ foo, children }) => {
    return <div>{ foo }{ children }</div>;
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
</div>
