import * as React from "react";
import { Editor } from "react-draft-wysiwyg";

const RenderWithTestId = () => (
    <div>
        <Editor webDriverTestID="test" />
    </div>
);
