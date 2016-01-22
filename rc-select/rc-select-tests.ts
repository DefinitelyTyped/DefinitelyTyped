/// <reference path="rc-select.d.ts" />
/// <reference path="../react/react.d.ts" />

import React = require('react');
import Select = require('rc-select');

class Component extends React.Component<any, any> {    

    private onChange(value: any) {
        console.log('selected', value);
    }

    private onSelect(value: string, option: RcSelect.Option) {
        console.log('selected value', value);
        console.log('selected option', option);
    }

    private onSearch() {
        console.log('input changed');
    }

    private defaultSelectProps: RcSelect.SelectProps = {
        className: "my-select",
        prefixCls: "prefix",
        animation: "slide-up",
        transitionName: "my-animation",
        choiceTransitionName: "multiple-animation",
        dropdownMatchSelectWidth: true,
        dropdownClassName: "my-dropdown",
        dropdownStyle: { backgroundColor: "green" },
        dropdownMenuStyle: { backgroundColor: "red" },
        notFoundContent: "Something went wrong...",
        showSearch: true,
        allowClear: true,
        tags: false,
        maxTagTextLength: 30,
        combobox: false,
        multiple: true,
        disabled: false,
        filterOption: false,
        defaultValue: "Option2",
        value: "Option2",
        defaultLabel: "Option2",
        defaultActiveFirstOption: false
    };

    private defaultOptGroupProps: RcSelect.OptGroupProps = {
        label: "Option group",
        key: "option-group-0",
        value: "option-group-0"
    };

    private defaultOptionProps: RcSelect.OptionProps = {
        className: "option",
        disabled: true,
        key: "option-0",
        value: "option-0"        
    };

    private createOptions(count: number): React.ReactElement<RcSelect.OptionProps>[] {
        let options: React.ReactElement<RcSelect.OptionProps>[] = [];

        for (let i = 0; i < count; i++) {
            let props = this.defaultOptionProps;
            props.key = `option-${i}`;
            props.value = `option-${i}`;

            options.push(React.createElement(Select.Option, props));
        }

        return options;
    }

    render() {

        let options: React.ReactElement<RcSelect.OptionProps>[] = this.createOptions(10);

        let optionGroup: React.ReactElement<RcSelect.OptGroupProps> = React.createElement(Select.OptGroup, this.defaultOptGroupProps, options);        

        let select: React.ReactElement<RcSelect.SelectProps> = React.createElement(Select.default, this.defaultSelectProps, optionGroup);

        return select;
    }
}
