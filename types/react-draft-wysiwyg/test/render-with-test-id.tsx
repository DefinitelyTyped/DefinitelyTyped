import * as React from "react";
import * as ReactDOM from "react-dom";
import { Editor } from "react-draft-wysiwyg";

const RenderWithTestId = () => (
    <div>
        <Editor webDriverTestID="test" />
    </div>
);

ReactDOM.render(<RenderWithTestId />, document.getElementById("target"));
