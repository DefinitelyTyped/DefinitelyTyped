/// <reference path="../react/react.d.ts" />
/// <reference path="./react-textarea-autosize.d.ts" />

import * as React from "react";
import Textarea from "react-textarea-autosize";

class Test extends React.Component<{}, {}> {
    public render() {
        return (
            <Textarea minRows={5} maxRows={8}
                value="test"
                useCacheForDOMMeasurements
                className="test"
                id="test"/>
        );
    }
}
