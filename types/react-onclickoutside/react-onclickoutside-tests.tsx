import * as React from "react"
import { Component, StatelessComponent, MouseEvent } from "react"
import { render } from "react-dom"
import * as onClickOutside from "react-onclickoutside"

interface TestProps {}

var TestStateless: StatelessComponent<TestProps> = (props: TestProps) => {
    return (<div>Test</div>)
}

var TestStatelessWrapped = onClickOutside(TestStateless)

render(
    <TestStatelessWrapped eventTypes="click"
                          disableOnClickOutside
                          preventDefault
                          stopPropagation
                          outsideClickIgnoreClass="ignore" />,
    document.getElementById("main")
)