
/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./react-select.d.ts" />

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
