import * as React from 'react';

export interface SelectProps {
    className?: string;
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
    options?: Array<{ key: string; text: string }>;
    onClick?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
}

declare const Select: React.FunctionComponent<SelectProps> & {
    displayName: 'Select';
};

export default Select;
