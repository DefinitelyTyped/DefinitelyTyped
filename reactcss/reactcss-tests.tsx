// ReactCSS Test
// ================================================================================
///<reference path="reactcss.d.ts"/>
///<reference path="../react/react.d.ts"/>
///<reference path="../react/react-dom.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import * as React from "react"
import { StatelessComponent } from "react"
import { render } from "react-dom"
import { default as reactCSS, hover, loop } from "reactcss"

interface TestProps extends ReactCSS.HoverProps {}

var styles: any = reactCSS({
    default : {},
    hover   : {}
}, { hover : true })

var loopProps: ReactCSS.LoopableProps = loop(1, 10)

var TestComponent: StatelessComponent<TestProps>
var Test = hover(TestComponent)

render(
    <Test />,
    document.getElementById("main")
)
