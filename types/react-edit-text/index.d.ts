// Type definitions for react-edit-text 2.0
// Project: https://github.com/bymi15/react-edit-text#readme
// Definitions by: Brian Min <https://github.com/bymi15>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export type inputTextType =
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'week';

export interface onSaveProps {
    name: string;
    value: string;
}

export interface SharedProps {
    /**
     * id attribute set for both input and div element
     */
    id?: string;
    /**
     * name attribute set for input element
     */
    name?: string;
    /**
     * className attribute set for both input and div element
     */
    className?: string;
    /**
     * value sets the defaultValue for input element and display text of div element
     */
    value?: string;
    /**
     * placeholder is displayed in the div element when value is empty
     */
    placeholder?: string;
    /**
     * onSave is called when the input blur event is triggered or enter key is pressed
     * returns an object: {name, value} which correspond to the input name and value
     */
    onSave?: ({ name, value }: onSaveProps) => void;
    /**
     * Sets the css styling for both input and div elements
     */
    style?: React.CSSProperties;
    /**
     * Displays only the view element when set to true,
     * default: false
     */
    readonly?: boolean;
}

export interface EditTextProps extends SharedProps {
    /**
     * type attribute set for input element,
     * default: 'text'
     */
    type?: inputTextType;
    /**
     * Sets the element display to inline when set to true,
     * default: false
     */
    inline?: boolean;
}

export interface EditTextareaProps extends SharedProps {
    /**
     * the number of visible rows,
     * default: 3
     */
    rows?: number;
}

export class EditText extends React.Component<EditTextProps> {}

export class EditTextarea extends React.Component<EditTextareaProps> {}
