
/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./react-select.d.ts" />

import * as React from "react"
import * as ReactDOM from "react-dom"

import * as Select from "react-select"

class SelectTest extends React.Component<React.Props<{}>, {}> {

    render() {
        const options: ReactSelect.Option[] = [{ label: "Foo", value: "bar" }]
        const onOpen = () => { return; };
        const onClose = () => { return; };
        return <div>
           <Select options={options} onOpen={onOpen} onClose={onClose} />
        </div>
    }

}

class SelectAsyncTest extends React.Component<React.Props<{}>, {}> {

    render() {
        return <div>
           <Select.Async />
        </div>
    }

}
