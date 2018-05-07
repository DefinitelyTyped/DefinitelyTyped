import * as React from "react";
import Textarea from "react-textarea-autosize";

class Test extends React.Component {
    public ref: HTMLTextAreaElement

    public inputRef = (ref: HTMLTextAreaElement) => {
        this.ref = ref
    }

    public render() {
        return (
            <Textarea
                rows={5}
                minRows={5}
                maxRows={8}
                value="test"
                useCacheForDOMMeasurements
                className="test"
                inputRef={ this.inputRef }
                id="test"/>
        );
    }
}
