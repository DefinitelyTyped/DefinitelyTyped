import React = require('react');

export type ItemPropType = string | { value: string | number; label: string };

export interface DropdownProps {
    autocomplete?: boolean;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    selectedItem?: ItemPropType;
    helperText?: string;
    /** More about stateAndHelpers parameter here https://github.com/downshift-js/downshift#children-function */
    onChange?: (selectedItem?: React.ElementType | null, stateAndHelpers?: any) => void;
    items?: ItemPropType[];
    theme?: {
        colors?: object;
        spacing?: object;
        baseFontSize?: number;
    };
}

export default class Dropdown extends React.Component<DropdownProps> {}
