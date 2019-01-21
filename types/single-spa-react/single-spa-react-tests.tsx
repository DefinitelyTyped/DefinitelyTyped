import singleSpaReact = require("single-spa-react");
import * as React from "react";
import * as ReactDOM from "react-dom";

type customProps = { name: string };

const rootComponent: React.SFC<customProps> = (props: customProps) => {
    return <div> hello{props.name} !</div>;
};

// $ExpectType Lifecycles
singleSpaReact({
    React,
    ReactDOM,
    rootComponent
});
