// Type definitions for react-edit-text 4.0
// Project: https://github.com/bymi15/react-edit-text#readme
// Definitions by: Brian Min <https://github.com/bymi15>
//                 sakana15 <https://github.com/sakana15>
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
    previousValue: string;
}

export interface SharedProps {
    /**
     * id attribute set for both input and div element
     */
    id?: string | undefined;
    /**
     * name attribute set for input element
     */
    name?: string | undefined;
    /**
     * className attribute set for both input and div element
     */
    className?: string | undefined;
    /**
     * value sets the input value and display text of div element
     */
    value?: string | undefined;
    /**
     * defaultValue sets the defaultValue for input element and initial display text of div element
     */
    defaultValue?: string | undefined;
    /**
     * placeholder is displayed in the div element when value is empty
     */
    placeholder?: string | undefined;
    /**
     * onSave is called when the input blur event is triggered or enter key is pressed
     * returns an object: {name, value, previousValue} which correspond to the input name, value, and previous value before changes were made
     */
    onSave?: (({ name, value, previousValue }: onSaveProps) => void) | undefined;
    /**
     * onChange is called when the input value changes and
     * returns a string which corresponds to the new input value
     */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Sets the css styling for both input and div elements
     */
    style?: React.CSSProperties | undefined;
    /**
     * Displays only the view element when set to true,
     * default: false
     */
    readonly?: boolean | undefined;
}

export interface EditTextProps extends SharedProps {
    /**
     * type attribute set for input element,
     * default: 'text'
     */
    type?: inputTextType | undefined;
    /**
     * Sets the element display to inline when set to true,
     * default: false
     */
    inline?: boolean | undefined;
}

export interface EditTextareaProps extends SharedProps {
    /**
     * the number of visible rows,
     * default: 3
     */
    rows?: number | undefined;
}

export class EditText extends React.Component<EditTextProps> {}

export class EditTextarea extends React.Component<EditTextareaProps> {}
