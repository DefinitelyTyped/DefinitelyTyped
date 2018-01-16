// Type definitions for React Select v5.9.0
// Project: https://github.com/react-component/select
// Definitions by: Denis Tirilis <https://github.com/DenisTirilis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
        className?: string;
        prefixCls?: string;
        animation?: string;
        transitionName?: string;
        choiceTransitionName?: string;
        dropdownMatchSelectWidth?: boolean;
        dropdownClassName?: string;
        dropdownStyle?: { [key: string]: string };
        dropdownMenuStyle?: { [key: string]: string };
        notFoundContent?: string;
        showSearch?: boolean;
        allowClear?: boolean;
        tags?: boolean;
        maxTagTextLength?: number;
        combobox?: boolean;
        multiple?: boolean;
        disabled?: boolean;
        filterOption?: boolean;
        optionFilterProp?: string;
        optionLabelProp?: string;
        defaultValue?: string | Array<string>;
        value?: string | Array<string>;
        onChange?: (value: string, label: string) => void;
        onSearch?: Function;
        onSelect?: (value: string, ontion: Option) => void;
        onDeselect?: Function;
        defaultLabel?: string | Array<string>;
        defaultActiveFirstOption?: boolean;
        getPopupContainer?: (trigger: Node) => Node;
    }
    export class Select extends React.Component<SelectProps> { }
    interface OptionProps {
        className?: string;
        disabled?: boolean;
        key?: string;
        value?: string;
    }
    export class Option extends React.Component<OptionProps> { }

    interface OptGroupProps {
        label?: string | React.ReactElement<any>;
        key?: string;
        value?: string;
    }
    export class OptGroup extends React.Component<OptGroupProps> { }
}
