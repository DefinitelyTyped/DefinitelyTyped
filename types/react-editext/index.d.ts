// Type definitions for react-editext 3.1
// Project: https://github.com/alioguzhan/react-editext
// Definitions by: Ali Oguzhan Yildiz <https://github.com/alioguzhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import * as React from 'react';
export type EdiTextType =
    | 'text'
    | 'textarea'
    | 'email'
    | 'number'
    | 'date'
    | 'datetime-local'
    | 'time'
    | 'month'
    | 'url'
    | 'week'
    | 'tel';

export interface EdiTextProps {
    /**
     * Props to be passed to input element.
     * Any kind of valid DOM attributes are welcome
     */
    inputProps?: object;
    /**
     * Props to be passed to div element that shows the text.
     * You can specify your own `styles` or `className`
     */
    viewProps?: object;
    /**
     * Value of the content [in view mode] and input [in edit mode]
     */
    value: string;
    /**
     * A simple hint message appears at the bottom of input element.
     * Any valid element is allowed.
     */
    hint?: React.ReactNode;
    /**
     * If validation fails this message will appear
     */
    validationMessage?: string;
    /**
     * Pass your own validation function.
     * takes one param -> `value`.
     * It must return `true` or `false`
     */
    validation?: (...args: string[]) => boolean;
    /**
     * will be called when validation fails.
     * takes one param <value> which is the current value of input
     */
    onValidationFail?: (...args: string[]) => any;
    /**
     * Input type. Possible options are:
     * `text`, `number`, `email`, `textarea`, `date`,
     * `datetime-local`, `time`, `month`, `url`, `week`, `tel`
     */
    type: EdiTextType;
    /**
     * will be called when user clicked cancel button
     */
    onCancel?: (...args: any[]) => any;
    /**
     * will be called when user clicked save button.
     * takes one param <value> which is the current value of input
     */
    onSave: (...args: string[]) => any;
    /**
     * Custom class name for SAVE button.
     */
    saveButtonClassName?: string;
    /**
     * Custom class name for EDIT button.
     */
    editButtonClassName?: string;
    /**
     * Custom class name for CANCEL button.
     */
    cancelButtonClassName?: string;
    /**
     * Content for CANCEL button. Any valid element and node are allowed.
     */
    cancelButtonContent?: any;
    /**
     * Content for SAVE button. Any valid element and node are allowed.
     */
    saveButtonContent?: any;
    /**
     * Content for EDIT button. Any valid element and node are allowed.
     */
    editButtonContent?: any;
    /**
     * Set it to `true` if you don't want to see default icons
     * on action buttons.See Examples page for more details.
     */
    hideIcons?: boolean;
}

export default class EdiText extends React.Component<EdiTextProps, any> {
    render(): JSX.Element;
}
