//
// Examples from https://github.com/kayahr/jquery-fullscreen-plugin
//

function enteringFullScreen() {

    $(document).fullScreen(true);
    $('#myVideo').fullScreen(true);
}

function exitingFullScreen() {

    $(document).fullScreen(false);
    $('#myVideo').fullScreen(false);
}


function queryingFullScreenMode() {

    //The method returns the current fullscreen element (or true if browser doesn't support this) when fullscreen mode is active,
    // false if not active or null when the browser does not support fullscreen mode at all
    var isFullScreen = $(document).fullScreen() != null;
}

function fullScreenNotifications() {

    $(document).bind("fullscreenchange", () => {
        console.log("Fullscreen " + ($(document).fullScreen() ? "on" : "off"));
    });

    $(document).bind("fullscreenerror", () => {
        alert("Browser rejected fullscreen change");
    });
}