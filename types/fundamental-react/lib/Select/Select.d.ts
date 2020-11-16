import * as React from "react";

export interface Option { key: string; text: string; }
export interface SelectProps {
    className?: string;
    formMessageProps?: Record<string, any>;
    innerRefClassName?: string;
    popperClassName?: string;
    referenceClassName?: string;
    wrapperProps?: Record<string, any>;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    emptyAriaLabel?: string;
    id?: string;
    includeEmptyOption?: boolean;
    listClassName?: string;
    listItemClassName?: string;
    listItemTextClassName?: string;
    placeholder?: string;
    readOnly?: boolean;
    selectedKey?: string;
    textContentClassName?: string;
    triggerClassName?: string;
    validationState?: {
        state?: 'error' | 'warning' | 'information' | 'success';
        text?: string;
    };
    options?: Option[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
    onSelect?: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>, selectedOption: Option) => void;
}

declare const Select: React.FunctionComponent<SelectProps> & {
    displayName: "Select";
};

export default Select;
