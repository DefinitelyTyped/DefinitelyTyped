// Type definitions for react-editext 4.0
// Project: https://github.com/alioguzhan/react-editext
// Definitions by: Ali Oguzhan Yildiz <https://github.com/alioguzhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import * as React from "react";
export type EdiTextType =
    | "text"
    | "textarea"
    | "email"
    | "number"
    | "date"
    | "datetime-local"
    | "time"
    | "month"
    | "url"
    | "week"
    | "tel";

export type ButtonsAlignment = "after" | "before";

export type InputProps =
    | React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    | React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export interface EdiTextProps {
    /**
     * Props to be passed to input element.
     * Any kind of valid DOM attributes are welcome
     */
    inputProps?: InputProps;
    /**
     * Props to be passed to div element that shows the text.
     * You can specify your own `styles` or `className`
     */
    viewProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * Class name for the root container of the EdiText.
     */
    className?: string;
    /**
     * Props to be passed to div element that is container for all elements.
     * You can use this if you want to style or select the whole container.
     */
    containerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
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
    validationMessage?: any;
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
     * @default "text"
     */
    type?: EdiTextType;
    /**
     * will be called when user clicked cancel button
     * @param value the current value of input when cancelled.
     * @param inputProps inputProps that passed to the element.
     */
    onCancel?: (value: any, inputProps?: InputProps) => any;
    /**
     * will be called when user clicked save button.
     * @param value the current value of input
     * @param inputProps inputProps that passed to the element.
     */
    onSave: (value: any, inputProps?: InputProps) => any;
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
     * @default "false"
     */
    hideIcons?: boolean;
    /**
     * Decides whether buttons will be located _BEFORE_ or _AFTER_
     * the input element.
     * @default "after"
     */
    buttonsAlign?: ButtonsAlignment;
    /**
     * Custom class name for the container in view mode.
     */
    viewContainerClassName?: string;
    /**
     * Custom class name for the container in edit mode.
     * Will be set to viewContainerClassName if you set it and omit this.
     */
    editContainerClassName?: string;
    /**
     * Custom class name for the top-level main container.
     * @deprecated please use `containerProps` instead of this
     */
    mainContainerClassName?: string;
    /**
     * Set it to `true` if you want clicking on the view to activate the editor.
     * @default false
     */
    editOnViewClick?: boolean;
    /**
     * Set it to `true` if you want the view state to be edit mode
     * @default false
     */
    editing?: boolean;
    /**
     * Will be called when the editing mode is active.
     *
     * @param value the value of the input at the time when editing started.
     * @param inputProps inputProps that passed to the element.
     */
    onEditingStart?: (value: any, inputProps?: InputProps) => any;
    /**
     * Set it to `true` if you want to display action buttons **only**
     * when the text hovered by the user.
     * @default false
     */
    showButtonsOnHover?: boolean;
    /**
     * Set it to `true` if you want to submit the form when `Enter`
     * is pressed.
     * @default false
     */
    submitOnEnter?: boolean;
    /**
     * Set it to `true` if you want to cancel the form when `Escape`
     * is pressed.
     * @default false
     */
    cancelOnEscape?: boolean;
    /**
     * Set it to `true` if you want to cancel the form when the input
     * is unfocused.
     * @default false
     */
    cancelOnUnfocus?: boolean;
    /**
     * Set it to `true` if you want to save the form when the input
     * is unfocused.
     * @default false
     */
    submitOnUnfocus?: boolean;
    /**
     * An helper shortcut in case you want to pass the same tabIndex to both
     * `viewProps` and `inputProps`.
     *
     * NOTE: This will be overriden if you pass the tabIndex in `viewProps`
     * or `inputProps`.
     */
    tabIndex?: number;
    /**
     * Activates the edit mode when the view container is in focus.
     */
    startEditingOnFocus?: boolean;
    /**
     * Activates the edit mode when the `Enter` key is pressed if the view
     * container is focused.
     *
     * NOTE: This requires the element to be in focus.
     */
    startEditingOnEnter?: boolean;
    /**
     * Custom render method for the content in the view mode.
     * Use this prop to customize the displayed value in view mode.
     * The return value from this function will be rendered in view mode.
     * You can return string or JSX. Both are allowed.
     */
    renderValue?: (value: any) => any;
}

export default function EdiText(props: EdiTextProps): JSX.Element;
