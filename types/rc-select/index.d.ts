// Type definitions for React Select v5.9.0
// Project: https://github.com/react-component/select
// Definitions by: Denis Tirilis <https://github.com/DenisTirilis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

import * as React from "react";

import Select = RcSelect.Select;
import Option = RcSelect.Option;
import OptGroup = RcSelect.OptGroup;

export default Select;
export {
    Option,
    OptGroup
};

declare namespace RcSelect {
    interface SelectProps {
        allowClear?: boolean;
        animation?: string;
        choiceTransitionName?: string;
        className?: string;
        combobox?: boolean;
        defaultActiveFirstOption?: boolean;
        defaultLabel?: string | Array<string>;
        defaultValue?: string | Array<string>;
        disabled?: boolean;
        dropdownClassName?: string;
        dropdownMatchSelectWidth?: boolean;
        dropdownMenuStyle?: { [key: string]: string };
        dropdownStyle?: { [key: string]: string };
        filterOption?: boolean;
        getPopupContainer?: (trigger: Node) => Node;
        getInputElement?: () => Node;
        id?: string;
        labelInValue?: boolean;
        maxTagCount?: number;
        maxTagPlaceholder?: React.ReactNode | Function;
        maxTagTextLength?: number;
        multiple?: boolean;
        notFoundContent?: string;
        onBlur?: () => void;
        onChange?: (value: string, label: string) => void;
        onDeselect?: (value: string, option: Option) => void;
        onFocus?: () => void;
        onInputKeyDown?: (e: Event) => void;
        onPopupScroll?: () => void;
        onSearch?: () => void;
        onSelect?: (value: string, ontion: Option) => void;
        optionFilterProp?: string;
        optionLabelProp?: string;
        placeholder?: React.ReactNode;
        prefixCls?: string;
        showAction?: string[];
        showArrow?: boolean;
        showSearch?: boolean;
        tags?: boolean;
        tokenSeparators?: string[];
        transitionName?: string;
        value?: string | Array<string>;
    }
    export class Select extends React.Component<SelectProps> { }
    interface OptionProps {
        className?: string;
        disabled?: boolean;
        key?: string;
        title?: string;
        value?: string;
    }
    export class Option extends React.Component<OptionProps> { }

    interface OptGroupProps {
        label?: string | React.ReactElement;
        key?: string;
        value?: string;
    }
    export class OptGroup extends React.Component<OptGroupProps> { }
}
