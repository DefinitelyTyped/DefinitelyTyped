import * as React from 'react';
import * as RcSelect from 'rc-select';

class Component extends React.Component {

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

    private readonly defaultSelectProps = {
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

    private readonly defaultOptGroupProps = {
        label: "Option group",
        key: "option-group-0",
        value: "option-group-0"
    };

    private readonly defaultOptionProps = {
        className: "option",
        disabled: true,
        key: "option-0",
        value: "option-0"
    };

    private createOptions(count: number) {
        let options : any = [];

        for (let i = 0; i < count; i++) {
            let props = this.defaultOptionProps;
            props.key = `option-${i}`;
            props.value = `option-${i}`;

            options.push(React.createElement(RcSelect.Option, props));
        }

        return options;
    }

    render() {

        let options = this.createOptions(10);

        let optionGroup = React.createElement(RcSelect.OptGroup, this.defaultOptGroupProps, options);

        let select = React.createElement(RcSelect.default, this.defaultSelectProps, optionGroup);

        return select;
    }
}
