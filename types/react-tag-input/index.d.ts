import * as React from "react";

export interface Tag {
    id: string;
    text: string;
}

export interface ReactTagsProps {
    tags?: Tag[] | undefined;
    suggestions?: Tag[] | undefined;
    delimiters?: number[] | undefined;
    placeholder?: string | undefined;
    labelField?: string | undefined;

    handleAddition: (tag: { id: string; text: string }) => void;
    handleDelete: (i: number) => void;
    handleDrag?: ((tag: { id: string; text: string }, currPos: number, newPos: number) => void) | undefined;
    handleFilterSuggestions?: ((textInputValue: string, possibleSuggestionsArray: Tag[]) => Tag[]) | undefined;
    handleTagClick?: ((i: number) => void) | undefined;

    autofocus?: boolean | undefined;
    allowAdditionFromPaste?: boolean | undefined;
    allowDeleteFromEmptyInput?: boolean | undefined;
    handleInputChange?: ((value: string) => void) | undefined;
    handleInputFocus?: ((value: string) => void) | undefined;
    handleInputBlur?: ((textInputValue: string) => void) | undefined;
    minQueryLength?: number | undefined;
    removeComponent?: React.Component<any, any> | React.FC<any> | undefined;
    autocomplete?: boolean | 1 | undefined;
    readOnly?: boolean | undefined;

    name?: string | undefined;
    id?: string | undefined;
    maxLength?: number | undefined;
    inputValue?: string | undefined;

    inline?: boolean | undefined;
    inputFieldPosition?: "top" | "bottom" | "inline" | undefined;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement> | undefined;
    allowUnique?: boolean | undefined;
    allowDragDrop?: boolean | undefined;
    renderSuggestion?(tag: Tag, query: string): React.ReactChild | void;
    shouldRenderSuggestions?: ((query: string) => boolean) | undefined;

    classNames?: {
        tags?: string | undefined;
        tagInput?: string | undefined;
        tagInputField?: string | undefined;
        selected?: string | undefined;
        tag?: string | undefined;
        remove?: string | undefined;
        suggestions?: string | undefined;
        activeSuggestion?: string | undefined;
    } | undefined;
}

export class WithContext extends React.Component<ReactTagsProps> {}
export class WithOutContext extends React.Component<ReactTagsProps> {}

export default WithContext;
