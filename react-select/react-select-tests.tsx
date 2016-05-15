/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./react-select.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Option, MenuRendererProps } from "react-select-props";
import Select = require("react-select");

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
                optionComponent={<div></div>}
                required={false}
                resetValue={"resetValue"}
                scrollMenuIntoView={false}
                valueKey="github"
                labelKey="name"
                onChange={onChange}
                simpleValue
                value={options}
                valueComponent={<span></span>}
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
