// @ts-expect-error
browser.nonexistentNS;
// @ts-expect-error
browser.nonexistentNS.unknownMethod();

// Test that out overwritten things at least worked
browser.runtime.getManifest(); // $ExpectType WebExtensionManifest
// @ts-expect-error
browser.test;
// @ts-expect-error
browser.manifest;
// @ts-expect-error
browser._manifest;

// browser.runtime
const port = browser.runtime.connect();
// @ts-expect-error
port.postMessage();
port.postMessage({ test: 'ok' });

port.onDisconnect.addListener((p) => {
    if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
    }
});

port.onMessage.addListener((response) => {
    console.log('Received: ' + response);
});

browser.bookmarks.create({ title: 'Mozilla Developer Network (MDN)' });
browser.bookmarks.get('bookmarkId');
browser.bookmarks.get(['bookmarkId_1', 'bookmarkId_2']);
browser.bookmarks.getChildren('bookmarkId');
browser.bookmarks.getRecent(2);
browser.bookmarks.getSubTree('bookmarkId');
browser.bookmarks.getTree();
browser.bookmarks.move('bookmarkId', { index: 0 });
browser.bookmarks.remove('bookmarkId');
browser.bookmarks.removeTree('bookmarkId');
browser.bookmarks.search({});
browser.bookmarks.update('bookmarkId', { title: 'Mozilla Developer Network (MDN)' });

browser.proxy.onError.addListener((error) => {
    console.error(`Proxy error: ${error.message}`);
});

browser.proxy.onRequest.addListener(
    (d) => {
        console.log(d.requestId);
    },
    {
        urls: ['test'],
    },
    ['requestHeaders']
);

browser.webNavigation.onBeforeNavigate.addListener(
    (d) => {
        console.log(d.url, d.timeStamp);
    },
    {
        url: [{ hostContains: 'something' }, { hostPrefix: 'somethineelse' }],
    }
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
browser.tabs.captureTab(15, { format: 'png' });
browser.tabs.captureTab({ format: 'png' });

browser.tabs.captureVisibleTab();
browser.tabs.captureVisibleTab(15);
browser.tabs.captureVisibleTab(15, { format: 'png' });
browser.tabs.captureVisibleTab({ format: 'png' });

/* Test SteamFilter */
const filter = browser.webRequest.filterResponseData('1234');
filter.onerror = () => console.log(filter.error);
filter.ondata = ({ data }) => console.log(data);
filter.onstart = () => console.log('start');
filter.onstop = (_event: Event) => console.log('stop');
filter.suspend();
filter.resume();
filter.write(new Uint8Array(32));
filter.close();
filter.disconnect();
console.log(filter.status);
