import * as React from "react";
import Highlight from "react-highlighter";

export class ReactHolderTest extends React.Component {
    render() {
        return (
            <div>
                <Highlight search="test">test</Highlight>
            </div>
        );
    }
}
