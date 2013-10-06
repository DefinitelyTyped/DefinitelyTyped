/// <reference path="chrome-app.d.ts" />

import runtime = chrome.app.runtime;
import cwindow = chrome.app.window;

var createOptions: cwindow.CreateOptions = {
    id: "My Window",
    bounds: {
        left: 0,
        top: 0,
        width: 640,
        height: 480
    },
    resizable: true
};

//Create new window on app launch
chrome.app.runtime.onLaunched.addListener(function (launchData: runtime.LaunchData) {
    chrome.app.window.create('app/url', createOptions, function (created_window: cwindow.AppWindow) {
        return;
    });
});

chrome.app.runtime.onRestarted.addListener(function () { return; });

// Get Current Window
var currentWindow: cwindow.AppWindow = chrome.app.window.current();