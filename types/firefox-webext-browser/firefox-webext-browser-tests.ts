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
port.postMessage({ test: 'ok' });

port.onDisconnect.addListener(p => {
    if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
    }
});

port.onMessage.addListener(response => {
    console.log('Received: ' + response);
});

browser.bookmarks.getTree();

browser.proxy.onError.addListener(error => {
    console.error(`Proxy error: ${error.message}`);
});

browser.proxy.onRequest.addListener(
    d => {
        console.log(d.requestId);
    },
    {
        urls: ['test'],
    },
    ['requestHeaders'],
);

browser.webNavigation.onBeforeNavigate.addListener(
    d => {
        console.log(d.url, d.timeStamp);
    },
    {
        url: [{ hostContains: 'something' }, { hostPrefix: 'somethineelse' }],
    },
);

browser.runtime.connect().onDisconnect.addListener(() => {
    console.log('ok');
});

browser.storage.onChanged.addListener((changes, area) => {
    for (const key in changes) {
        console.log(changes[key].oldValue);
        console.log(changes[key].newValue);
    }
});

/* Test to make sure function optionals work properly */

browser.runtime.connect();
browser.runtime.connect({ name: 'my-port-name' });
browser.runtime.connect({});
browser.runtime.connect('extension-id', { name: 'my-port-name' });
browser.runtime.connect('extension-id', {});
browser.runtime.connect('extension-id');

browser.tabs.reload();
browser.tabs.reload(15);
browser.tabs.reload(15, {
    bypassCache: true,
});
browser.tabs.reload({
    bypassCache: true,
});

browser.tabs.captureTab();
browser.tabs.captureTab(15);
browser.tabs.captureTab(15, {format: 'png'});
browser.tabs.captureTab({format: 'png'});

browser.tabs.captureVisibleTab();
browser.tabs.captureVisibleTab(15);
browser.tabs.captureVisibleTab(15, {format: 'png'});
browser.tabs.captureVisibleTab({format: 'png'});
