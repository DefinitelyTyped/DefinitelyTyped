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
    onChange?: () => void;
    items?: ItemPropType[];
    theme?: {
        colors?: object;
        spacing?: object;
        baseFontSize?: number;
    };
}

export default class Dropdown extends React.Component<DropdownProps> {}
