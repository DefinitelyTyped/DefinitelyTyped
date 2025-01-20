// From https://github.com/jpuri/react-draft-wysiwyg/blob/master/stories/

import * as React from "react";
import { Editor } from "react-draft-wysiwyg";

const Basic = () => (
    <div>
        <Editor
            ref={(ref: Editor | null): void => {
                console.log("hey ref", ref?.focusEditor.toString());
            }}
        />
    </div>
);
