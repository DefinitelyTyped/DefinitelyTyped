import * as React from "react";
import * as ReactDOM from "react-dom";
import { WithContext as ReactTags } from "react-tag-input";

let tags = Array({ id: 0, text: "test" }, { id: 1, text: "testing" });

let suggestions = Array("test1", "test2");

ReactDOM.render(
    <ReactTags tags={tags}
        suggestions={suggestions}
        handleDelete={(i: number) => console.log("Delete: " + i)}
        handleAddition={(tag: string) => console.log("Add: " + tag)}
        handleDrag={(tag: { id: number; text: string; }, currPos: number, newPos: number) => console.log("Drag: " + tag.text)} />,
    document.getElementById("app")
);
