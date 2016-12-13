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
