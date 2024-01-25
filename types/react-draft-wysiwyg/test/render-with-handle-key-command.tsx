import * as React from "react";
import { Editor, EditorProps } from "react-draft-wysiwyg";

const RenderWithHandleKeyCommand = () => {
    const handleKeyCommand: EditorProps["handleKeyCommand"] = command => {
        if (command === "bold") {
            return "handled";
        }

        return "not-handled";
    };

    return <Editor handleKeyCommand={handleKeyCommand} />;
};
