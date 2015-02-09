/// <reference path="java-applet.d.ts" />

/**
 * @summary Test for the applet status.
 */
function testStatus() {
    var java: Java = {
        status: AppletStatus.Loading
    };
}

/**
 * @summary Test for the handlers.
 */
function testHandlers() {
    var handler: Function = () => {};
    var java: Java = {
        onError: handler,
        onLoad: handler,
        onStop: handler
    };
}
