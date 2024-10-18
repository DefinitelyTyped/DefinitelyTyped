// @ts-expect-error
browser.nonexistentNS;
// @ts-expect-error
browser.nonexistentNS.unknownMethod();

// browser.runtime
const port = browser.runtime.connect();
// @ts-expect-error
port.postMessage();
port.postMessage({ test: "ok" });
port.onDisconnect.addListener(p => {
    if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
    }
});
port.onMessage.addListener(response => {
    console.log("Received: " + response);
});

// test for existence of namespaces
// $ExpectType Promise<MailAccount[]>
messenger.accounts.list();
// $ExpectType Promise<AddressBookNode>
browser.addressBooks.get("x");
// $ExpectType boolean
messenger.addressBooks.provider.onSearchRequest.hasListener(() => undefined);
// $ExpectType Promise<ColorArray>
browser.browserAction.getBadgeBackgroundColor({ tabId: 7 });

// test overloads - second string argument is optional
// $ExpectType Promise<string>
messenger.contacts.create("a", "b", { c: null });
// $ExpectType Promise<string>
messenger.contacts.create("e", { f: "g" });

// tests from the Firefox version
browser.proxy.onError.addListener(error => {
    console.error(`Proxy error: ${error.message}`);
});

browser.proxy.onRequest.addListener(
    d => {
        console.log(d.requestId);
    },
    {
        urls: ["test"],
    },
    ["requestHeaders"],
);

browser.webNavigation.onBeforeNavigate.addListener(
    d => {
        console.log(d.url, d.timeStamp);
    },
    {
        url: [{ hostContains: "something" }, { hostPrefix: "somethineelse" }],
    },
);

browser.runtime.connect().onDisconnect.addListener(() => {
    console.log("ok");
});

browser.storage.onChanged.addListener((changes, area) => {
    for (const key in changes) {
        console.log(changes[key].oldValue);
        console.log(changes[key].newValue);
    }
});
