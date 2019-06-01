browser.nonexistentNS; // $ExpectError
browser.nonexistentNS.unknownMethod(); // $ExpectError

// Test that out overwritten things at least worked
browser.runtime.getManifest(); // $ExpectType WebExtensionManifest
browser.test; // $ExpectError
browser.manifest; // $ExpectError
browser._manifest; // $ExpectError

// browser.runtime
const port = browser.runtime.connect();
port.postMessage(); // $ExpectError
port.postMessage({test: "ok"});

port.onDisconnect.addListener((p) => {
    if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
    }
});

port.onMessage.addListener((response) => {
    console.log("Received: " + response);
});

browser.bookmarks.getTree();

browser.proxy.onProxyError.addListener(error => {
    console.error(`Proxy error: ${error.message}`);
});

browser.proxy.onRequest.addListener(d => {
    console.log(d.requestId);
}, {
    urls: ['test']
}, ["requestHeaders"]);

browser.webNavigation.onBeforeNavigate.addListener(d => {
    console.log(d.url, d.timeStamp);
}, {
    url: [
        {hostContains: 'something'},
        {hostPrefix: 'somethineelse'}
    ]
});

browser.runtime.connect().onDisconnect.addListener(() => {
    console.log('ok');
});

browser.storage.onChanged.addListener((changes, area) => {
    for (const key in changes) {
        console.log(changes[key].oldValue);
        console.log(changes[key].newValue);
    }
});
