import * as React from "react";
import * as JSONPretty from "react-json-pretty";

export class Test extends React.Component {
    render() {
        const json = {
            foo: "bar"
        };

        return (
            <div>
                <JSONPretty json={ json } />
                <JSONPretty json={ JSON.stringify(json) } />
            </div>
        );
    }
}
