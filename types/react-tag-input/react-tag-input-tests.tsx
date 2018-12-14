import * as React from "react";
import * as ReactDOM from "react-dom";
import { WithContext as ReactTags } from "react-tag-input";

const tags = Array({ id: "0", text: "test" }, { id: "1", text: "testing" });

const suggestions = Array({ id: "0", text: "test" }, { id: "1", text: "testing" });

ReactDOM.render(
    <ReactTags
        tags={tags}
        suggestions={suggestions}
        delimiters={[13, 8, 188]} // Enter, Tab and Comma
        placeholder="Some placeholder text"
        labelField="Some label"

        handleAddition={(tag: { id: string, text: string }) => console.log("Add: " + tag.text)}
        handleDelete={(i: number) => console.log("Delete: " + i)}
        handleDrag={(tag: { id: string; text: string; }, currPos: number, newPos: number) => console.log("Drag: " + tag.text)}
        handleInputChange={(value: string) => console.log("Changed to: ", value)}
        handleFilterSuggestions={(textInputValue: string, possibleSuggestionsArray: Array<{ id: string, text: string }>) => suggestions}
        handleInputBlur={() => console.log("Blured")}

        autofocus={false}
        allowDeleteFromEmptyInput={false}
        minQueryLength={0}
        removeComponent={null}
        autocomplete={true}
        readOnly={false}
        maxLength={64}

        name="react-tags-field"
        id="react-tags-field"
    />,
    document.getElementById("app")
);
