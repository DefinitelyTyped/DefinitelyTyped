import * as React from "react";
import * as ReactDOM from "react-dom";
import { WithContext as ReactTags, Tag } from "react-tag-input";

const tags = Array({ id: "0", text: "test" }, { id: "1", text: "testing" });

const suggestions = Array({ id: "0", text: "test" }, { id: "1", text: "testing" });

ReactDOM.render(
    <ReactTags
        tags={tags}
        suggestions={suggestions}
        delimiters={[13, 8, 188]} // Enter, Tab and Comma
        placeholder="Some placeholder text"
        labelField="Some label"
        handleAddition={(tag: Tag) =>
            console.log('Add: ' + tag.text)
        }
        handleDelete={(i: number) => console.log('Delete: ' + i)}
        handleDrag={(
            tag: Tag,
            currPos: number,
            newPos: number,
        ) => console.log('Drag: ' + tag.text)}
        handleInputChange={(value: string) => console.log('Changed to: ', value)}
        handleFilterSuggestions={(
            textInputValue: string,
            possibleSuggestionsArray: Tag[],
        ) => suggestions}
        handleInputBlur={() => console.log('Blurred')}
        autofocus={false}
        allowAdditionFromPaste={false}
        allowDeleteFromEmptyInput={false}
        minQueryLength={0}
        removeComponent={null}
        autocomplete={true}
        readOnly={false}
        resetInputOnDelete={false}
        maxLength={64}
        inputValue="Some input value"
        inputFieldPosition="top"
        renderSuggestion={({ id, text }: Tag, query: string) => console.log('tag' + id, text)}
        shouldRenderSuggestions={ q => q !== 'ignore_query' }
        name="react-tags-field"
        id="react-tags-field"
        classNames={{
            tags: 'tagsClass',
            tagInput: 'tagInputClass',
            tagInputField: 'tagInputFieldClass',
            selected: 'selectedClass',
            tag: 'tagClass',
            remove: 'removeClass',
            suggestions: 'suggestionsClass',
            activeSuggestion: 'activeSuggestionClass',
        }}
    />,
    document.getElementById('app'),
);
