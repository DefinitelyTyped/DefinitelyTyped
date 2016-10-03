/// <reference path="react.d.ts" />
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
