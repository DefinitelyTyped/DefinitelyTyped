/// <reference path="jquery.fullscreen.d.ts"/>

//
// Examples from https://github.com/kayahr/jquery-fullscreen-plugin
//

$(document).on('ready', () => {
    function checkBrowserSupport() {
        console.log("Native Browser support: ", $.fullscreen.isNativelySupported());
    }

    function activateFullscreen() {
        $(document).fullscreen();
    }

    function exitFullscreen() {
        $.fullscreen.exit();
    }

    function fullscreenStatus() {
        var state = ($.fullscreen.isFullScreen()) ? 'is active' : 'is inactive' ;
        console.log("Fullscreen is %s", state);
    }

    function runTests() {
        checkBrowserSupport();
        activateFullscreen();
        fullscreenStatus();
        exitFullscreen();
        fullscreenStatus();
    }

    runTests();
});
