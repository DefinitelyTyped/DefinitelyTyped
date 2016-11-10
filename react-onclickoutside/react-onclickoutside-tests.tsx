// React onClickOutside Test
// ================================================================================
/// <reference path="react-onclickoutside.d.ts"/>
/// <reference path='../react/react.d.ts' />
/// <reference path='../react/react-dom.d.ts' />

// Imports
// --------------------------------------------------------------------------------
import * as React from "react"
import { Component, StatelessComponent, MouseEvent } from "react"
import { render } from "react-dom"
import * as onClickOutside from "react-onclickoutside"

interface TestProps extends ReactOnClickOutside.OnClickOutsideProps {}

var TestStateless: StatelessComponent<TestProps> = (props: TestProps) => {
    return (<div>Test</div>)
}
var TestStatelessWrapped = onClickOutside(TestStateless)

class Test extends Component<TestProps, any> implements ReactOnClickOutside.OnClickOutsideComponent {
    handleClickOutside (e: MouseEvent) {}

    render () {
        return (<div>Test</div>)
    }
}
var TestWrapped = onClickOutside(Test)

render(
    <TestStatelessWrapped eventTypes="click"
                          disableOnClickOutside
                          preventDefault
                          stopPropagation
                          outsideClickIgnoreClass="ignore" />,
    document.getElementById("main")
)

render(
    <TestWrapped eventTypes={ ["click", "touchend"] }
                 disableOnClickOutside
                 preventDefault
                 stopPropagation
                 outsideClickIgnoreClass="ignore" />,
    document.getElementById("main")
)
