import * as React from "react";

export interface Option<T extends string = string> {
    key: T;
    text: string;
}
export interface SelectProps<T extends string = string> {
    className?: string | undefined;
    formMessageProps?: Record<string, any> | undefined;
    innerRefClassName?: string | undefined;
    popperClassName?: string | undefined;
    referenceClassName?: string | undefined;
    wrapperProps?: Record<string, any> | undefined;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    emptyAriaLabel?: string | undefined;
    id?: string | undefined;
    includeEmptyOption?: boolean | undefined;
    listClassName?: string | undefined;
    listItemClassName?: string | undefined;
    listItemTextClassName?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    selectedKey?: T | undefined;
    textContentClassName?: string | undefined;
    triggerClassName?: string | undefined;
    validationState?:
        | {
            state?: "error" | "warning" | "information" | "success" | undefined;
            text?: string | undefined;
        }
        | undefined;
    options?: Array<Option<T>> | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
    onSelect?:
        | ((
            event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
            selectedOption: Option<T>,
        ) => void)
        | undefined;
    ref?: React.Ref<HTMLDivElement> | undefined;
}

declare const Select:
    & (<T extends string = string>(props: SelectProps<T> & { selectedKey?: T }) => React.JSX.Element)
    & {
        displayName: "Select";
    };

export default Select;
