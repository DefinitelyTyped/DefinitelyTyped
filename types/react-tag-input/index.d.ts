// Type definitions for React-Tags (react-tag-input) 4.7
// Project: https://github.com/prakhar1989/react-tags
// Definitions by: Ogglas <https://github.com/Ogglas>
//                  Jan Karres <https://github.com/jankarres>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export interface ReactTagsProps {
    tags?: Array<{ id: number, text: string }>;
    suggestions?: string[];
    delimiters?: number[];
    placeholder?: string;
    labelField?: string;

    handleAddition: ((tag: string) => void);
    handleDelete: ((i: number) => void);
    handleDrag?: ((tag: { id: number; text: string; }, currPos: number, newPos: number) => void);
    handleInputChange?: ((value: string) => void);
    handleFilterSuggestions?: ((textInputValue: string, possibleSuggestionsArray: string[]) => boolean);
    handleInputBlur?: (() => void);

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
