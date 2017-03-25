import * as React from "react"
import { StatelessComponent } from "react"
import { render } from "react-dom"
import { default as reactCSS, hover, loop, LoopableProps, HoverProps } from "reactcss"

interface TestProps extends HoverProps { }

var styles: any = reactCSS({
    default: {},
    hover: {}
}, { hover: true })

var loopProps: LoopableProps = loop(1, 10)

var TestComponent: StatelessComponent<TestProps>
var Test = hover(TestComponent)

render(
    <Test />,
    document.getElementById("main")
)
