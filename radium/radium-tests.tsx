/// <reference path="radium.d.ts" />
/// <reference path="../react/react.d.ts" />

import * as React from "react";
import * as Radium from 'radium';

@Radium
export default class TestComponent extends React.Component<any, any> {

	render() {
		return (
			<div >
				Test with Radium
			</div>
		);
	}
}
