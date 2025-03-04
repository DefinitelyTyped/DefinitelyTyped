import * as browser from "webextension-polyfill";
// eslint-disable-next-line no-duplicate-imports
import type { Browser, Tabs } from "webextension-polyfill";

const x: Browser = browser;

const promise: Promise<Tabs.Tab> = browser.tabs.create({});

// Do not handle message
browser.runtime.onMessage.addListener((message, sender) => false);

// Handle message sync
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    sendResponse("ok");
});

// Handle message deferred
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    setTimeout(() => {
        sendResponse("ok");
    }, 100);
    return true;
});

// Handle message async
browser.runtime.onMessage.addListener(async (message, sender) => "ok");

// Optionally handle message async
browser.runtime.onMessage.addListener((message, sender) => Math.random() < 0.5 ? Promise.resolve("ok") : undefined);
browser.runtime.onMessage.addListener((message, sender) => Math.random() < 0.5 ? Promise.resolve("ok") : false);

// Conditionally handle via all possible methods.
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const r = Math.random();

    if (r < 0.1) {
        // Ignore
        return false;
    }
    if (r < 0.2) {
        // Handle deferred
        setTimeout(() => sendResponse("ok"), 100);
        return true;
    }
    if (r < 0.3) {
        // Handle sync
        sendResponse("ok");
        return;
    }
    // Handle async
    return Promise.resolve("ok");
});
