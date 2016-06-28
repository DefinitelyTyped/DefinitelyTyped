/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./react-select.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Option, MenuRendererProps } from "react-select-props";
import Select = require("react-select");

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

class SelectTest extends React.Component<React.Props<{}>, {}> {

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

        return <div>
            <Select
                name="test-select"
                className="test-select"
                key="1"
                options={options}
                optionRenderer={optionRenderer}
                allowCreate={true}
                autofocus={true}
                autosize={true}
                clearable={true}
                escapeClearsValue={true}
                ignoreAccents={true}
                joinValues={false}
                matchPos={"any"}
                matchProp={"any"}
                menuContainerStyle={{}}
                menuRenderer={renderMenu}
                menuStyle={{}}
                multi={true}
                onMenuScrollToBottom={() => {}}
                onValueClick={onChange}
                onOpen={onOpen}
                onClose={onClose}
                openAfterFocus={false}
                optionComponent={CustomOption}
                required={false}
                resetValue={"resetValue"}
                scrollMenuIntoView={false}
                valueKey="github"
                labelKey="name"
                onChange={onChange}
                simpleValue
                value={options}
                valueComponent={CustomValue}
                 />
        </div>;
    }
}

class SelectAsyncTest extends React.Component<React.Props<{}>, {}> {

    render() {
        const getOptions = (input: string, callback: Function) => {
            setTimeout(function() {
                callback(null, options);
            }, 500);
        };
        const options: Option[] = [{ label: "Foo", value: "bar" }];
        const onChange = (value: any) => console.log(value);
        return <div>
            <Select.Async
                name="test-select"
                className="test-select"
                key="1"
                matchPos={"any"}
                matchProp={"any"}
                multi={true}
                onValueClick={onChange}
                valueKey="github"
                labelKey="name"
                onChange={onChange}
                simpleValue
                value={options}
                loadOptions={getOptions}
                cache={{}}
                ignoreAccents={false}
                ignoreCase={{}}
                isLoading={false}
                minimumInput={5}
                searchPromptText={"search..."}
                searchingText={"searching..."}
            />
        </div>;
    }

}
