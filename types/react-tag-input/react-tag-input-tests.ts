import * as React from "react";
import { WithContext as ReactTags, TagItem } from "react-tag-input";

let tags = [
    { id: 0, text: "test" }, { id: 1, text: "testing" }
];

let suggestions = ["test", "testar"];

ReactDOM.render(	
	<ReactTags tags={tags}
        suggestions={suggestions}
        handleDelete={(i: number) => console.log("Delete: " + i)}
        handleAddition={(tag: string) => console.log("Add: " + tag)}
        handleDrag={(tag: TagItem, currPos: number, newPos: number) => console.log("Drag: " + tag.text)} />
	document.getElementById("tag-input")
	
);