import * as React from 'react';
import ReactTags, { TagComponentProps, SuggestionComponentProps, Tag } from 'react-tag-autocomplete';

const TestRequired = () => {
    const onAddTag = (tag: { id: string | number; name: string }) => {};
    const onDeleteTag = (i: number) => {};
    return <ReactTags onAddition={onAddTag} onDelete={onDeleteTag} />;
};

const TestRequiredNegative = () => {
    const onAddTag = (tag: { id: string | number; name: string }) => {};
    // @ts-expect-error
    return <ReactTags onAddition={onAddTag} />;
};

const SuggestionComponent = ({ item, query }: SuggestionComponentProps) => (
    <span>
        {item.name} {query}
    </span>
);

class TestAll extends React.Component {
    render() {
        const classNamesObj = {
            root: 'react-tags',
            rootFocused: 'is-focused',
            selected: 'react-tags__selected',
            selectedTag: 'react-tags__selected-tag',
            selectedTagName: 'react-tags__selected-tag-name',
            search: 'react-tags__search',
            searchInput: 'react-tags__search-input',
            suggestions: 'react-tags__suggestions',
            suggestionActive: 'is-active',
            suggestionDisabled: 'is-disabled',
        };
        const onAddTag = (tag: { id: string | number; name: string }) => {};
        const onDeleteTag = (i: number) => {};
        const onBlur = () => {};
        const onFocus = () => {};
        const onInputChange = (input: string) => {};
        const onValidate = (tag: { id: string | number; name: string }) => true;
        const inputAttributes = { maxLength: 10 };
        const suggestions = [
            { id: 3, name: 'Bananas' },
            { id: 4, name: 'Mangos' },
            { id: 5, name: 'Lemons' },
            { id: 6, name: 'Apricots', disabled: true },
        ];
        const suggestionFilter = (tag: { id: string | number; name: string }, query: string) => true;
        const tagComponent = (props: TagComponentProps) => <button onClick={props.onDelete}>{props.tag.name}</button>;
        const tags = [
            { id: 1, name: 'Apples' },
            { id: 2, name: 'Pears' },
        ];
        const suggestionsTransform = (query: string, suggestions: Tag[]) => {
            return [];
        };
        return (
            <ReactTags
                id="42"
                addOnBlur={true}
                allowBackspace={false}
                allowNew={false}
                autofocus={false}
                autoresize={false}
                classNames={classNamesObj}
                clearInputOnDelete={false}
                delimiters={['Enter', 'Tab']}
                onAddition={onAddTag}
                onBlur={onBlur}
                onDelete={onDeleteTag}
                onFocus={onFocus}
                onInput={onInputChange}
                onValidate={onValidate}
                inputAttributes={inputAttributes}
                maxSuggestionsLength={10}
                minQueryLength={5}
                newTagText="new-"
                noSuggestionsText="no results"
                placeholderText=""
                removeButtonText="Delete"
                suggestions={suggestions}
                suggestionsFilter={suggestionFilter}
                tagComponent={tagComponent}
                suggestionComponent={SuggestionComponent}
                suggestionsTransform={suggestionsTransform}
                tags={tags}
            />
        );
    }
}
