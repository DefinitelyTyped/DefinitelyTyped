import * as React from "react";

export type inputTextType =
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url"
    | "week";

export interface onSaveProps {
    name: string;
    value: string;
    previousValue: string;
}

export interface SharedProps {
    /**
     * id attribute set for both input and display element
     */
    id?: string;
    /**
     * name attribute set for input element
     */
    name?: string;
    /**
     * class attribute set for display element
     */
    className?: string;
    /**
     * class attribute set for input element
     */
    inputClassName?: string;
    /**
     * value sets the input value and text of display element
     */
    value?: string;
    /**
     * defaultValue sets the defaultValue for input element and initial text of display element
     */
    defaultValue?: string;
    /**
     * placeholder is shown in the display element when value is empty
     */
    placeholder?: string;
    /**
     * formatDisplayText is used to pass in a function which takes in a value and returns a formatted value
     * which is used to format the text shown in the display element
     * default: (val) => val
     */
    formatDisplayText?: (value: string) => string;
    /**
     * onSave is called when the input blur event is triggered or enter key is pressed
     * returns an object: {name, value, previousValue} which correspond to the input name, value, and previous value before changes were made
     */
    onSave?: ({ name, value, previousValue }: onSaveProps) => void;
    /**
     * onChange is called when the input value changes and
     * returns a string which corresponds to the new input value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * onEditMode is a callback function triggered when the display
     * component is clicked and edit mode is toggled on
     */
    onEditMode?: () => void;
    /**
     * onBlur is a callback function triggered when the focus is blurred
     * and edit mode is toggled off
     */
    onBlur?: () => void;
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
    /**
     * Displays an edit button that can be pressed to enable edit mode,
     * default: false
     */
    showEditButton?: boolean;
    /**
     * Sets the content for the edit button. This can be any valid element,
     * default: <EditIcon />
     */
    editButtonContent?: React.ReactNode;
    /**
     * Sets the props passed to the edit button. This can be any valid DOM attribute,
     * default: {}
     */
    editButtonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
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
