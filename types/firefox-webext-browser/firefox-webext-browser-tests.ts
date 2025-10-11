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
// @ts-expect-error
browser.trialML;

// browser.runtime
const port = browser.runtime.connect();
// @ts-expect-error
port.postMessage();
port.postMessage({ test: "ok" });

{
    const manifest = browser.runtime.getManifest();

    // WebExtensionManifest
    const background = manifest.background;
    if (background) {
        background.preferred_environment = ["service_worker", "document"];
    }
    manifest.options_page; // $ExpectType string | undefined
    manifest.content_scripts?.every(item => {
        item.match_origin_as_fallback; // $ExpectType boolean | undefined
        item.world; // $ExpectType ExecutionWorld | undefined
    });
    manifest.optional_host_permissions; // $ExpectType string[] | undefined
    // @ts-expect-error
    manifest.telemetry;
    // @ts-expect-error
    manifest.chrome_settings_overrides?.search_provider.params;

    // ManifestBase
    manifest.manifest_version; // $ExpectType number
    manifest.applications?.gecko?.admin_install_only; // $ExpectType boolean | undefined
    manifest.applications?.gecko?.data_collection_permissions?.required; // $ExpectType DataCollectionPermission[] | undefined
    manifest.developer?.name; // $ExpectType string | undefined
}

browser.runtime.getContexts({
    contextIds: ["contextId"],
    contextTypes: ["BACKGROUND", "POPUP", "SIDE_PANEL", "TAB"],
    documentIds: ["documentId"],
    documentOrigins: ["documentOrigin"],
    documentUrls: ["documentUrl"],
    frameIds: [0],
    tabIds: [0],
    windowIds: [browser.windows.WINDOW_ID_CURRENT],
    incognito: true,
}).then(ctxs => {
    ctxs.every(ctx => {
        ctx.contextId; // $ExpectType string
        ctx.contextType = "BACKGROUND";
        ctx.contextType = "POPUP";
        ctx.contextType = "SIDE_PANEL";
        ctx.contextType = "TAB";
        ctx.documentId; // $ExpectType string | undefined
        ctx.documentOrigin; // $ExpectType string | undefined
        ctx.documentUrl; // $ExpectType string | undefined
        ctx.incognito; // $ExpectType boolean
        ctx.frameId; // $ExpectType number
        ctx.tabId; // $ExpectType number
        ctx.windowId; // $ExpectType number
    });
});

port.onDisconnect.addListener(p => {
    if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
    }
});

port.onMessage.addListener(response => {
    console.log("Received: " + response);
});

browser.bookmarks.create({ title: "Mozilla Developer Network (MDN)" });
browser.bookmarks.get("bookmarkId");
browser.bookmarks.get(["bookmarkId_1", "bookmarkId_2"]);
browser.bookmarks.getChildren("bookmarkId");
browser.bookmarks.getRecent(2);
browser.bookmarks.getSubTree("bookmarkId");
browser.bookmarks.getTree();
browser.bookmarks.move("bookmarkId", { index: 0 });
browser.bookmarks.remove("bookmarkId");
browser.bookmarks.removeTree("bookmarkId");
browser.bookmarks.search({});
browser.bookmarks.update("bookmarkId", { title: "Mozilla Developer Network (MDN)" });

// Test https://bugzil.la/1707405
browser.menus.onClicked.addListener(info => {
    // @ts-expect-error
    console.log(info.bookmarkId.toString());
});

browser.menus.create({ contexts: ["page_action", "browser_action", "action"] });

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

/* Test to make sure function optionals work properly */

browser.runtime.connect();
browser.runtime.connect({ name: "my-port-name" });
browser.runtime.connect({});
browser.runtime.connect("extension-id", { name: "my-port-name" });
browser.runtime.connect("extension-id", {});
browser.runtime.connect("extension-id");

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
browser.tabs.captureTab(15, { format: "png" });
browser.tabs.captureTab({ format: "png" });

browser.tabs.captureVisibleTab();
browser.tabs.captureVisibleTab(15);
browser.tabs.captureVisibleTab(15, { format: "png" });
browser.tabs.captureVisibleTab({ format: "png" });

browser.tabs.onUpdated.addListener(
    (tabId, changeInfo, tab) => {
        console.log(tabId, changeInfo.title, tab.groupId);
    },
    { properties: ["groupId"], cookieStoreId: "storeId" },
);
browser.tabGroups.onCreated;
browser.tabGroups.onMoved;
browser.tabGroups.onRemoved.addListener((group, removeInfo) => {
    group; // $ExpectType TabGroup
    removeInfo.isWindowClosing; // $ExpectType boolean
});
browser.tabGroups.onUpdated;

// tabs in tabGroups
browser.tabs.query({
    currentWindow: true,
    groupId: browser.tabGroups.TAB_GROUP_ID_NONE,
});
browser.tabs.group({
    tabIds: [0],
    groupId: undefined,
    createProperties: { windowId: browser.windows.WINDOW_ID_CURRENT },
});
browser.tabGroups.get(0).then(group => {
    group.collapsed; // $ExpectType boolean
    group.color; // $ExpectType Color
    group.id; // $ExpectType number
    group.title; // $ExpectType string | undefined
    group.windowId; // $ExpectType number
});
browser.tabGroups.update(0, {
    collapsed: true,
    color: "red",
    title: "title",
});
browser.tabGroups.query({
    collapsed: false,
    color: "blue",
    title: "title",
    windowId: browser.windows.WINDOW_ID_CURRENT,
});
browser.tabGroups.move(0, {
    index: -1,
    windowId: browser.windows.WINDOW_ID_CURRENT,
});
browser.tabs.ungroup(0);

/* Test SteamFilter */
const filter = browser.webRequest.filterResponseData("1234");
filter.onerror = () => console.log(filter.error);
filter.ondata = ({ data }) => console.log(data);
filter.onstart = () => console.log("start");
filter.onstop = (_event: Event) => console.log("stop");
filter.suspend();
filter.resume();
filter.write(new Uint8Array(32));
filter.close();
filter.disconnect();
console.log(filter.status);

// @ts-expect-error
browser.webRequest.onBeforeRequest.addListener(() => {}, { urls: ["url"], types: ["object_subrequest"] }, []);
browser.webRequest.onBeforeRequest.addListener(
    details => {
        const urlClassification = details.urlClassification;
        if (urlClassification) {
            urlClassification.firstParty = urlClassification.thirdParty = [
                "any_social_tracking",
                "consentmanager",
                "antifraud",
            ];
        }
    },
    { urls: ["url"], types: ["json"] },
    ["blocking", "requestBody"],
);
browser.webRequest.onAuthRequired.addListener(
    (details, asyncCallback) => {
        details.urlClassification; // $ExpectType UrlClassification | undefined
        asyncCallback?.({ cancel: true });
    },
    { urls: ["url"] },
    ["responseHeaders", "blocking", "asyncBlocking"],
);

browser.storage.sync.QUOTA_BYTES;
browser.storage.sync.QUOTA_BYTES_PER_ITEM;
browser.storage.sync.MAX_ITEMS;
browser.storage.sync.MAX_WRITE_OPERATIONS_PER_HOUR;
browser.storage.sync.MAX_WRITE_OPERATIONS_PER_MINUTE;
browser.storage.sync.MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE;
browser.storage.sync.getKeys().then(keys => {
    keys; // $ExpectType string[]
});
browser.storage.local.QUOTA_BYTES;
browser.storage.local.getKeys().then(keys => {
    keys; // $ExpectType string[]
});
browser.storage.managed.QUOTA_BYTES;
browser.storage.managed.getKeys().then(keys => {
    keys; // $ExpectType string[]
});
browser.storage.session.QUOTA_BYTES;
browser.storage.session.get("sessionObject");
browser.storage.session.getKeys().then(keys => {
    keys; // $ExpectType string[]
});
browser.storage.session.set({ "sessionObject": "value" });

browser.browserAction.setTitle({ title: "actionTitle" });
browser.browserAction.setIcon({ imageData: undefined, path: undefined });
browser.browserAction.setPopup({ popup: ".html" });
browser.browserAction.setBadgeText({ text: "badgeText" });
browser.browserAction.setBadgeBackgroundColor({ color: [0, 0, 0, 0] });
browser.browserAction.setBadgeTextColor({ color: [0, 0, 0, 0] });
browser.browserAction.onUserSettingsChanged.addListener(change => change.isOnToolbar === true);

browser.contentScripts.register({ matches: ["<all_urls>"], matchOriginAsFallback: true, world: "MAIN" });
browser.contentScripts.register({ matches: ["<all_urls>"], world: "ISOLATED" });

browser.contextualIdentities.move("storeId", 0);

browser.cookies.get({ url: "url", name: "name" }).then(cookies => cookies?.partitionKey?.hasCrossSiteAncestor === true);

browser.declarativeNetRequest.updateDynamicRules({
    addRules: [{ id: 0, condition: { resourceTypes: ["json"] }, action: { type: "allow" } }],
});
browser.declarativeNetRequest.getDynamicRules({ ruleIds: [0] });
browser.declarativeNetRequest.getSessionRules({ ruleIds: [0] });
browser.declarativeNetRequest.updateStaticRules({ rulesetId: "rulesetId" });
browser.declarativeNetRequest.getDisabledRuleIds({ rulesetId: "rulesetId" });
browser.declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS;
browser.declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES;
browser.declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES;

browser.geckoProfiler.start({
    bufferSize: 0,
    interval: 0,
    features: ["cpufreq", "bandwidth", "memory", "tracing", "sandbox", "flows"],
});

browser.i18n.getPreferredSystemLanguages().then(languageCodes => {
    languageCodes; // $ExpectType string[]
});

browser.management.getSelf().then(extensionInfo => {
    extensionInfo; // $ExpectType ExtensionInfo
    extensionInfo.installType = "admin";
});

browser.permissions.getAll().then(anyPermissions => {
    anyPermissions.data_collection; // $ExpectType OptionalDataCollectionPermission[] | undefined
});
browser.permissions.onAdded.addListener(permissions => {
    permissions.data_collection; // $ExpectType OptionalDataCollectionPermission[] | undefined
});

browser.scripting.executeScript({
    target: { tabId: 1 },
    func: () => {},
});

browser.scripting.executeScript({
    target: { tabId: 1 },
    // @ts-expect-error
    args: [true],
    func: (_n: number) => {},
});

browser.scripting.executeScript({
    target: { tabId: 1 },
    args: [0, "", false, [], {}],
    func: (_n: number, _s: string, _b: boolean, _a: [], _o: {}) => {},
});
browser.scripting.executeScript({ target: { tabId: 0 }, world: "MAIN" });
browser.scripting.registerContentScripts([{ id: "scriptId", matchOriginAsFallback: true, world: "MAIN" }]);
browser.scripting.updateContentScripts([{ id: "scriptId", persistAcrossSessions: true, world: "MAIN" }]);

// @ts-expect-error
browser.telemetry.submitEncryptedPing;

// MV2
browser.userScripts.register({ js: [{ file: ".js" }, { code: "document;" }], matches: ["<all_urls>"] }).then(
    legacyRegisteredUserScript => {
        legacyRegisteredUserScript.unregister();
    },
);
// MV3
browser.userScripts.register([{ id: "scriptId", js: [{ file: ".js" }, { code: "document;" }], world: "MAIN" }]);
browser.userScripts.register([{ id: "scriptId", js: [{ file: ".js" }, { code: "document;" }], world: "USER_SCRIPT" }]);

browser.userScripts.update([{ id: "scriptId" }]);
browser.userScripts.unregister({ ids: ["scriptId"] });
browser.userScripts.getScripts({ ids: ["scriptId"] }).then(scripts => {
    scripts.every(script => {
        script.id = "scriptId";
        script.js = [{ file: ".js" }, { code: "document;" }];
        script.world = "MAIN";
    });
});
browser.userScripts.configureWorld({ worldId: "worldId", csp: "policy", messaging: true });
browser.userScripts.resetWorldConfiguration("worldId");
browser.userScripts.getWorldConfigurations().then(propertiesArray => {
    propertiesArray.every(properties => {
        properties.worldId = "worldId";
        properties.csp = "policy";
        properties.messaging = true;
    });
});

browser.commands.openShortcutSettings();
browser.commands.onCommand.addListener((command, tab) => {
    command; // $ExpectType string
    tab.active; // $ExpectType boolean
});

browser.windows.getAll({ populate: true, windowTypes: ["normal", "popup", "panel", "app", "devtools"] });

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    sender.userScriptWorldId; // $ExpectType string | undefined
    return true;
});
browser.runtime.onPerformanceWarning.addListener(details => {
    details.category = "content_script";
    details.severity = "low";
    details.severity = "medium";
    details.severity = "high";
    details.tabId = 0;
    details.description; // $ExpectType string
});

browser.runtime.onUserScriptConnect.addListener(port => {
    port.disconnect();
});
browser.runtime.onUserScriptMessage.addListener((message, sender, sendResponse) => {
    sender.userScriptWorldId; // $ExpectType string | undefined
    return true;
});

browser.browserSettings.verticalTabs.get({ incognito: true });

browser.alarms.create({ when: 42, delayInMinutes: 4 });
browser.alarms.create("alarmName", { periodInMinutes: 2 });
