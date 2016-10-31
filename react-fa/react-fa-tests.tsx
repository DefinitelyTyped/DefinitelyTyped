// React Fa Test
// ================================================================================
/// <reference path="react-fa.d.ts"/>
/// <reference path="../react/react-dom.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import * as React from "react"
import { render } from "react-dom"
import { Icon, IconStack } from "react-fa"

render(
	<Icon spin name="spinner" rotate="90" size="2x" Component="span" />,
	document.getElementById("main")
)

render(
	<IconStack size="2x">
		<Icon name="test" stack="2x" />
		<Icon name="test" stack="1x" />
	</IconStack>,
	document.getElementById("main")
)
