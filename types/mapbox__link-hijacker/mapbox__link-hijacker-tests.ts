import linkHijacker = require("@mapbox/link-hijacker");

const { hijack } = linkHijacker;

function callback(link: HTMLAnchorElement, ev: MouseEvent) {
}

let unhijack = hijack(callback);

unhijack = hijack({
    root: document.createElement("div"),
    skipModifierKeys: false,
    skipDownload: false,
    skipTargetBlank: false,
    skipExternal: false,
    skipMailTo: false,
    skipOtherOrigin: false,
    skipFragment: false,
    preventDefault: false,
    skipFilter(link: HTMLAnchorElement) {
        return false;
    }
}, callback);

unhijack();
