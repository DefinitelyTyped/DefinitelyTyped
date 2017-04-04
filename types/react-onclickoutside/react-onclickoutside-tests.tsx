import * as React from "react";
import { Component, StatelessComponent, MouseEvent } from "react";
import { render } from "react-dom";
import * as onClickOutside from "react-onclickoutside";

const TestStateless: StatelessComponent<{}> = (props) => {
    return (
        <div>Test</div>
    );
};

const TestStatelessWrapped = onClickOutside(TestStateless);

render(
    <TestStatelessWrapped eventTypes="click"
                          disableOnClickOutside
                          preventDefault
                          stopPropagation
                          outsideClickIgnoreClass="ignore" />,
    document.getElementById("main")
);
