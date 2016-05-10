
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference path="./react-select-0.9.10.d.ts" />

import * as React from "react"
import * as ReactDOM from "react-dom"

import Select from "react-select"

class SelectTest extends React.Component<React.Props<{}>, {}> {

    render() {
        return <div>
           <Select />
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
