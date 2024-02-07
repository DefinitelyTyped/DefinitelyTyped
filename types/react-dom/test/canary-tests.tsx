/// <reference types="../canary"/>
import React = require("react");
import ReactDOM = require("react-dom");
import ReactDOMClient = require("react-dom/client");

function createRoot(validContainer: Element | DocumentFragment | Document) {
    ReactDOMClient.createRoot(document, {
        onUncaughtError: (error, errorInfo) => {
            // $ExpectType unknown
            error;
            // $ExpectType string | undefined
            errorInfo.componentStack;
            // @ts-expect-error -- only on onRecoverableError
            errorInfo.digest;
            // @ts-expect-error -- only on onCaughtError
            errorInfo.errorBoundary;
        },
        onCaughtError: (error, errorInfo) => {
            // $ExpectType unknown
            error;
            // $ExpectType string | undefined
            errorInfo.componentStack;
            // @ts-expect-error -- only on onRecoverableError
            errorInfo.digest;
            // $ExpectType Component<unknown, {}, any> | undefined
            errorInfo.errorBoundary;
        },
    });

    ReactDOMClient.hydrateRoot(document.body, null, {
        onUncaughtError: (error, errorInfo) => {
            // $ExpectType unknown
            error;
            // $ExpectType string | undefined
            errorInfo.componentStack;
            // @ts-expect-error -- only on onRecoverableError
            errorInfo.digest;
            // @ts-expect-error -- only on onCaughtError
            errorInfo.errorBoundary;
        },
        onCaughtError: (error, errorInfo) => {
            // $ExpectType unknown
            error;
            // $ExpectType string | undefined
            errorInfo.componentStack;
            // @ts-expect-error -- only on onRecoverableError
            errorInfo.digest;
            // $ExpectType Component<unknown, {}, any> | undefined
            errorInfo.errorBoundary;
        },
    });
}

function requestFormResetTest(form: HTMLFormElement, button: HTMLButtonElement) {
    ReactDOM.requestFormReset(form);
    // @ts-expect-error
    ReactDOM.requestFormReset(button);
    // @ts-expect-error
    ReactDOM.requestFormReset(null);
}
