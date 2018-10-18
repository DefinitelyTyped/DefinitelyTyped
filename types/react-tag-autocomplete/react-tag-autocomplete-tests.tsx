import * as React from "react";
import ReactTags, { TagComponentProps } from "react-tag-autocomplete";

class TestRequired extends React.Component {
    render() {
        const onAddTag = (tag: { id: string | number; name: string }) => {};
        const onDeleteTag = (i: number) => {};
        return (
            <ReactTags handleAddition={onAddTag} handleDelete={onDeleteTag} />
        );
    }
}

class TestAll extends React.Component {
    render() {
        const classNamesObj = {
            root: "react-tags",
            rootFocused: "is-focused",
            selected: "react-tags__selected",
            selectedTag: "react-tags__selected-tag",
            selectedTagName: "react-tags__selected-tag-name",
            search: "react-tags__search",
            searchInput: "react-tags__search-input",
            suggestions: "react-tags__suggestions",
            suggestionActive: "is-active",
            suggestionDisabled: "is-disabled"
        };
        const onAddTag = (tag: { id: string | number; name: string }) => {};
        const onDeleteTag = (i: number) => {};
        const onBlur = () => {};
        const onFocus = () => {};
        const onInputChange = (input: string) => {};
        const inputAttributes = { maxLength: 10 };
        const suggestions = [
            { id: 3, name: "Bananas" },
            { id: 4, name: "Mangos" },
            { id: 5, name: "Lemons" },
            { id: 6, name: "Apricots", disabled: true }
        ];
        const tagComponent = (props: TagComponentProps) => (
            <button onClick={props.onDelete}>{props.tag.name}</button>
        );
        const tags = [{ id: 1, name: "Apples" }, { id: 2, name: "Pears" }];
        return (
            <ReactTags
                allowBackspace={false}
                allowNew={false}
                autofocus={false}
                autoresize={false}
                classNames={classNamesObj}
                delimiterChars={[",", " "]}
                delimiters={[9, 13]}
                handleAddition={onAddTag}
                handleBlur={onBlur}
                handleDelete={onDeleteTag}
                handleFocus={onFocus}
                handleInputChange={onInputChange}
                inputAttributes={inputAttributes}
                maxSuggestionsLength={10}
                minQueryLength={5}
                placeholder=""
                suggestions={suggestions}
                tagComponent={tagComponent}
                tags={tags}
            />
        );
    }
}
