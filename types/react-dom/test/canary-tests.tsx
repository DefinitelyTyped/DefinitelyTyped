/// <reference types="../canary"/>
import React = require("react");
import ReactDOM = require("react-dom");
import ReactDOMClient = require("react-dom/client");

function requestFormResetTest(form: HTMLFormElement, button: HTMLButtonElement) {
    ReactDOM.requestFormReset(form);
    // @ts-expect-error
    ReactDOM.requestFormReset(button);
    // @ts-expect-error
    ReactDOM.requestFormReset(null);
}
