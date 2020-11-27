import singleSpaReact = require("single-spa-react");
import * as React from "react";
import * as ReactDOM from "react-dom";

interface customProps {
    name: string;
}

class rootComponent extends React.Component<customProps> {
    render() {
        return <div> hello{this.props.name} !</div>;
    }
}

// $ExpectType Lifecycles
singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    errorBoundary(err: Error, _info: React.ErrorInfo, _props: any) {
        console.log(err, _info, _props);
    },
});
