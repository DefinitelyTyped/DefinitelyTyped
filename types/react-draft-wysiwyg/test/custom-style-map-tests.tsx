import * as React from "react";
import { Editor } from "react-draft-wysiwyg";

const CustomStyleMapEditor = () => (
    <div>
        <Editor
            customStyleMap={{
                STRIKETHROUGH: {
                    textDecoration: "line-through",
                    color: "red",
                },
            }}
        />
    </div>
);
