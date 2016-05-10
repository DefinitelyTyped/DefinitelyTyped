/// <reference types="react" />
/// <reference types="react-dom" />


import * as React from "react";
import * as ReactDOM from "react-dom";

import Select from "react-select";

class SelectTest extends React.Component<React.Props<{}>, {}> {

    render() {
        const options: ReactSelect.Option[] = [{ label: "Foo", value: "bar" }];
        const onChange = (value: any) => console.log(value);
        const onOpen = () => { return; };
        const onClose = () => { return; };
        const optionRenderer = (option: ReactSelect.Option) => <span>{option.label}</span>
        return <div>
            <Select
                name="test-select"
                className="test-select"
                key="1"
                options={options}
                optionRenderer={optionRenderer}
                matchPos={"any"}
                matchProp={"any"}
                multi={true}
                onValueClick={onChange}
                onOpen={onOpen}
                onClose={onClose}
                valueKey="github"
                labelKey="name"
                onChange={onChange}
                simpleValue
                value={options}
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
        const options: ReactSelect.Option[] = [{ label: "Foo", value: "bar" }];
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
            />
        </div>;
    }

}
