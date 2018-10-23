// Type definitions for React-Tags (react-tag-input) 5.0
// Project: https://github.com/prakhar1989/react-tags
// Definitions by: Ogglas <https://github.com/Ogglas>
//                  Jan Karres <https://github.com/jankarres>
//                  Matthew Berryman <https://github.com/matthewberryman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface ReactTagsProps {
    tags?: Array<{ id: string, text: string }>;
    suggestions?: Array<{ id: string, text: string }>;
    delimiters?: number[];
    placeholder?: string;
    labelField?: string;

    handleAddition: ((tag: {id: string, text: string}) => void);
    handleDelete: ((i: number) => void);
    handleDrag?: ((tag: { id: string; text: string; }, currPos: number, newPos: number) => void);
    handleInputChange?: ((value: string) => void);
    handleFilterSuggestions?: ((textInputValue: string, possibleSuggestionsArray: Array<{ id: string, text: string }>) => Array<{ id: string, text: string }>);
    handleInputBlur?: ((textInputValue: string) => void);

    autofocus?: boolean;
    allowDeleteFromEmptyInput?: boolean;
    minQueryLength?: number;
    removeComponent?: React.Component<any, any>;
    autocomplete?: boolean | 1;
    readOnly?: boolean;
    maxLength?: number;

    name?: string;
    id?: string;
}

export class WithContext extends React.Component<ReactTagsProps> { }
export class WithOutContext extends React.Component<ReactTagsProps> { }

export default WithContext;
