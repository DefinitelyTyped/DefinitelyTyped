import * as React from "react";
import * as ReactDOM from "react-dom";

import Select = require("react-select");
import { Option, ReactSelectProps, ReactCreatableSelectProps, ReactAsyncSelectProps, MenuRendererProps, AutocompleteResult } from "react-select";

const CustomOption = React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        className: React.PropTypes.string,
        isDisabled: React.PropTypes.bool,
        isFocused: React.PropTypes.bool,
        isSelected: React.PropTypes.bool,
        onFocus: React.PropTypes.func,
        onSelect: React.PropTypes.func,
        option: React.PropTypes.object.isRequired,
    },
    handleMouseDown (event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSelect(this.props.option, event);
    },
    handleMouseEnter (event: Event) {
        this.props.onFocus(this.props.option, event);
    },
    handleMouseMove (event: Event) {
        if (this.props.isFocused) return;
        this.props.onFocus(this.props.option, event);
    },
    render () {
        return (
            <div className="Select-option"
                    onMouseDown={this.handleMouseDown}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseMove={this.handleMouseMove}
                    title={this.props.option.title}>
                {this.props.children}
            </div>
        );
    }
});

const CustomValue = React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.object
    },
    render () {
        return (
            <div className="Select-value" title={this.props.value.title}>
                <span className="Select-value-label">
                    {this.props.children}
                </span>
            </div>
        );
    }
});

const filterOptions = (options: Array<Option>, filter: string, values: Array<Option>) => {
    // Filter already selected values
    let filteredOptions = options.filter(option => values.indexOf(option) < 0);

    // Filter by label
    if (filter != null && filter.length > 0) {
        filteredOptions = filteredOptions.filter(option => RegExp(filter, 'ig').test(option.label));
    }

    // Append Addition option
    if (filteredOptions.length === 0) {
        filteredOptions.push({
            label:  `Create: ${filter}`,
            value:  filter
        });
    }

    return filteredOptions;
};

class SelectTest extends React.Component<React.Props<{}>> {

    render() {
        const options: Option[] = [{ label: "Foo", value: "bar" }];
        const onChange = (value: any) => console.log(value);
        const renderMenu = ({
            focusedOption,
            focusOption,
            labelKey,
            options,
            selectValue,
            valueArray
        }: MenuRendererProps) => { return <div></div> };
        const onOpen = () => { return; };
        const onClose = () => { return; };
        const optionRenderer = (option: Option) => <span>{option.label}</span>

        const selectProps: ReactSelectProps = {
            name: "test-select",
            className: "test-select",
            key: "1",
            options: options,
            optionClassName: 'test-select-option',
            optionRenderer: optionRenderer,
            autofocus: true,
            autosize: true,
            clearable: true,
            escapeClearsValue: true,
            filterOptions: filterOptions,
            ignoreAccents: true,
            instanceId: 'custom-instance-id',
            joinValues: false,
            matchPos: "any",
            matchProp: "any",
            menuContainerStyle: {},
            menuRenderer: renderMenu,
            menuStyle: {},
            multi: true,
            onMenuScrollToBottom: () => {},
            onValueClick: onChange,
            onOpen: onOpen,
            onClose: onClose,
            openAfterFocus: false,
            optionComponent: CustomOption,
            removeSelected: true,
            required: false,
            resetValue: "resetValue",
            scrollMenuIntoView: false,
            valueKey: "github",
            labelKey: "name",
            onChange: onChange,
            value: options,
            valueComponent: CustomValue,
            valueRenderer: optionRenderer
        };

        return <div>
            <Select {...selectProps} />
        </div>;
    }
}

class SelectWithStringValueTest extends React.Component<React.Props<{}>> {

    render() {
        const options: Option[] = [{
            label: "Foo",
            value: "bar",
        }, {
            label: "Foo2",
            value: "bar2",
            clearableValue: false,
            disabled: true
        }];
        const onChange = (value: any) => console.log(value);

        const selectProps: ReactSelectProps = {
            name: "test-select-with-string-value",
            value: "bar",
            options: options,
            onChange: onChange
        };

        return <div>
            <Select {...selectProps} />
        </div>;
    }
}

class SelectAsyncTest extends React.Component<React.Props<{}>> {

    render() {
        const getOptions = (input: string, callback: (err: any, result: AutocompleteResult) => any) => {
            setTimeout(function() {
                callback(null, {
                    options: options,
                    complete: true
                });
            }, 500);
        };
        const options: Option[] = [{ label: "Foo", value: "bar" }];
        const onChange = (value: any) => console.log(value);

        const asyncSelectProps: ReactAsyncSelectProps = {
            name: "test-select",
            className: "test-select",
            key: "1",
            matchPos: "any",
            matchProp: "any",
            multi: true,
            onValueClick: onChange,
            valueKey: "github",
            labelKey: "name",
            onChange: onChange,
            simpleValue: undefined,
            value: options,
            loadOptions: getOptions,
            cache: {},
            ignoreAccents: false,
            ignoreCase: true,
            isLoading: false,
            minimumInput: 5,
            searchPromptText: "search...",
            searchingText: "searching...",
        };

        return <div>
            <Select.Async {...asyncSelectProps} />
        </div>;
    }

}

class SelectAsyncPromiseTest extends React.Component<React.Props<{}>> {

    render() {
        const getOptions = (input: string): Promise<AutocompleteResult> => {
            return new Promise(resolve => {
                setTimeout(function() {
                    return resolve({
                        options: options,
                        complete: true
                    });
                }, 500);
            });
        };
        const options: Option[] = [{ label: "Foo", value: "bar" }];
        const onChange = (value: any) => console.log(value);

        const asyncSelectProps: ReactAsyncSelectProps = {
            name: "test-select-async-promise",
            className: "test-select",
            key: "1",
            matchPos: "any",
            matchProp: "any",
            multi: true,
            onValueClick: onChange,
            valueKey: "github",
            labelKey: "name",
            onChange: onChange,
            simpleValue: undefined,
            value: options,
            loadOptions: getOptions,
            cache: {},
            ignoreAccents: false,
            ignoreCase: true,
            isLoading: false,
            minimumInput: 5,
            searchPromptText: "search...",
            searchingText: "searching...",
        };

        return <div>
            <Select.Async {...asyncSelectProps} />
        </div>;
    }

}

class SelectCreatableTest extends React.Component<React.Props<{}>> {

    render() {
        const options: Option[] = [{ label: "Foo", value: "bar" }];
        const onChange = (value: any) => console.log(value);

        const creatableSelectProps: ReactCreatableSelectProps = {
            name: "test-creatable-select",
            value: "bar",
            options: options,
            onChange: onChange,
            isOptionUnique: () => { return true; },
            isValidNewOption: () => { return true; },
            newOptionCreator: () => { return { label: "NewFoo", value: "newBar" }; },
            promptTextCreator: () => { return ""; },
            shouldKeyDownEventCreateNewOption: () => { return true; }
        };

        return <div>
            <Select.Creatable {...creatableSelectProps} />
        </div>
    }

}

class SelectAsyncCreatableTest extends React.Component<React.Props<{}>> {

    render() {
        const getOptions = (input: string, callback: Function) => {
            setTimeout(function() {
                callback(null, options);
            }, 500);
        };
        const options: Option[] = [{ label: "Foo", value: "bar" }];
        const onChange = (value: any) => console.log(value);

        const asyncCreatableSelectProps: ReactCreatableSelectProps & ReactAsyncSelectProps = {
            name: "test-select-async-creatable",
            className: "test-select-async-creatable",
            key: "1",
            matchPos: "any",
            matchProp: "any",
            multi: true,
            onValueClick: onChange,
            valueKey: "github",
            labelKey: "name",
            onChange: onChange,
            simpleValue: undefined,
            value: options,
            loadOptions: getOptions,
            cache: {},
            ignoreAccents: false,
            ignoreCase: true,
            isLoading: false,
            minimumInput: 5,
            searchPromptText: "search...",
            searchingText: "searching...",
            isOptionUnique: () => { return true; },
            isValidNewOption: () => { return true; },
            newOptionCreator: () => { return { label: "NewFoo", value: "newBar" }; },
            promptTextCreator: () => { return ""; },
            shouldKeyDownEventCreateNewOption: () => { return true; }
        };

        return <div>
            <Select.AsyncCreatable {...asyncCreatableSelectProps} />
        </div>
    }

}
