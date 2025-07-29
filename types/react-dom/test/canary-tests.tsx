/// <reference types="../canary"/>
import React = require("react");
import ReactDOM = require("react-dom");
import ReactDOMClient = require("react-dom/client");

function cacheSignalTest() {
    const cacheSignal = React.cacheSignal;

    const signal = cacheSignal();
    if (signal !== null) {
        // $ExpectType CacheSignal
        signal;
        if (signal.aborted) {
            console.error(signal.reason);
        }
    }
}
