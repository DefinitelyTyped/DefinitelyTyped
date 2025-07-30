/**
 * Check all listeners for a Chrome event.
 * @param event - The event to check.
 * @param callback - The callback to check.
 */
const checkChromeEvent = <T extends chrome.events.Event<(...args: any) => void>>(
    event: T,
    callback: Parameters<T["addListener"]>[0],
) => {
    event.addListener(callback); // $ExpectType void
    event.removeListener(callback); // $ExpectType void
    event.hasListener(callback); // $ExpectType boolean
    event.hasListeners(); // $ExpectType boolean
};

// https://developer.chrome.com/docs/extensions/reference/api/bookmarks
function testBookmarks() {
    chrome.bookmarks.BookmarkTreeNodeUnmodifiable.MANAGED === "managed";

    chrome.bookmarks.FolderType.BOOKMARKS_BAR === "bookmarks-bar";
    chrome.bookmarks.FolderType.MANAGED === "managed";
    chrome.bookmarks.FolderType.MOBILE === "mobile";
    chrome.bookmarks.FolderType.OTHER === "other";

    chrome.bookmarks.MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE === 1000000;

    chrome.bookmarks.MAX_WRITE_OPERATIONS_PER_HOUR === 1000000;

    const bookmarkDetails: chrome.bookmarks.CreateDetails = {
        index: 0,
        parentId: "1",
        title: "title",
        url: "https://example.com",
    };

    const checkBookmarkTreeNodeResult = (result: chrome.bookmarks.BookmarkTreeNode) => {
        result.children; // $ExpectType BookmarkTreeNode[] | undefined
        result.dateAdded; // $ExpectType number | undefined
        result.dateGroupModified; // $ExpectType number | undefined
        result.dateLastUsed; // $ExpectType number | undefined
        result.folderType; // $ExpectType  "bookmarks-bar" | "other" | "mobile" | "managed" | undefined
        result.id; // $ExpectType string
        result.index; // $ExpectType number | undefined
        result.parentId; // $ExpectType string | undefined
        result.syncing; // $ExpectType boolean
        result.title; // $ExpectType string
        result.unmodifiable; // $ExpectType "managed" | undefined
        result.url; // $ExpectType string | undefined
    };

    chrome.bookmarks.create(bookmarkDetails); // $ExpectType Promise<BookmarkTreeNode>
    chrome.bookmarks.create(bookmarkDetails, checkBookmarkTreeNodeResult); // $ExpectType void
    // @ts-expect-error
    chrome.bookmarks.create(bookmarkDetails, () => {}).then(() => {});

    chrome.bookmarks.get("1"); // $ExpectType Promise<BookmarkTreeNode[]>
    chrome.bookmarks.get(["1"]); // $ExpectType Promise<BookmarkTreeNode[]>
    chrome.bookmarks.get("1", ([result]) => checkBookmarkTreeNodeResult(result)); // $ExpectType void
    chrome.bookmarks.get(["1"], ([result]) => checkBookmarkTreeNodeResult(result)); // $ExpectType void
    // @ts-expect-error
    chrome.bookmarks.get([]);
    // @ts-expect-error
    chrome.bookmarks.get("1", () => {}).then(() => {});

    chrome.bookmarks.getChildren("1"); // $ExpectType Promise<BookmarkTreeNode[]>
    chrome.bookmarks.getChildren("1", ([result]) => checkBookmarkTreeNodeResult(result)); // $ExpectType void);
    // @ts-expect-error
    chrome.bookmarks.getChildren("1", () => {}).then(() => {});

    chrome.bookmarks.getRecent(1); // $ExpectType Promise<BookmarkTreeNode[]>
    chrome.bookmarks.getRecent(1, ([result]) => checkBookmarkTreeNodeResult(result)); // $ExpectType void
    // @ts-expect-error
    chrome.bookmarks.getRecent(1, () => {}).then(() => {});

    chrome.bookmarks.getSubTree("1"); // $ExpectType Promise<BookmarkTreeNode[]>
    chrome.bookmarks.getSubTree("1", ([result]) => checkBookmarkTreeNodeResult(result)); // $ExpectType void
    // @ts-expect-error
    chrome.bookmarks.getSubTree("1", () => {}).then(() => {});

    chrome.bookmarks.getTree(); // $ExpectType Promise<BookmarkTreeNode[]>
    chrome.bookmarks.getTree(([result]) => checkBookmarkTreeNodeResult(result)); // $ExpectType void
    // @ts-expect-error
    chrome.bookmarks.getTree(() => {}).then(() => {});

    const destination: chrome.bookmarks.MoveDestination = {
        index: 0,
        parentId: "1",
    };

    chrome.bookmarks.move("1", destination); // $ExpectType Promise<BookmarkTreeNode>
    chrome.bookmarks.move("1", destination, checkBookmarkTreeNodeResult); // $ExpectType void
    // @ts-expect-error
    chrome.bookmarks.move("1", destination, () => {}).then(() => {});

    chrome.bookmarks.remove("1"); // $ExpectType Promise<void>
    chrome.bookmarks.remove("1", () => void 0);
    // @ts-expect-error
    chrome.bookmarks.remove("1", () => {}).then(() => {});

    chrome.bookmarks.removeTree("1"); // $ExpectType Promise<void>
    chrome.bookmarks.removeTree("1", () => void 0);
    // @ts-expect-error
    chrome.bookmarks.removeTree("1", () => {}).then(() => {});

    chrome.bookmarks.search("query"); // $ExpectType Promise<BookmarkTreeNode[]>
    chrome.bookmarks.search("query", ([result]) => checkBookmarkTreeNodeResult(result)); // $ExpectType void
    // @ts-expect-error
    chrome.bookmarks.search("query", () => {}).then(() => {});

    const changes: chrome.bookmarks.UpdateChanges = {
        title: "new title",
        url: "https://example.com",
    };

    chrome.bookmarks.update("1", changes); // $ExpectType Promise<BookmarkTreeNode>
    chrome.bookmarks.update("1", changes, checkBookmarkTreeNodeResult); // $ExpectType void
    // @ts-expect-error
    chrome.bookmarks.update("1", changes, () => {}).then(() => {});

    checkChromeEvent(chrome.bookmarks.onChanged, (id, changeInfo) => {
        id; // $ExpectType string
        changeInfo.title; // $ExpectType string
        changeInfo.url; // $ExpectType string | undefined
    });

    checkChromeEvent(chrome.bookmarks.onChildrenReordered, (id, reorderInfo) => {
        id; // $ExpectType string
        reorderInfo.childIds; // $ExpectType string[]
    });

    checkChromeEvent(chrome.bookmarks.onCreated, (id, bookmark) => {
        id; // $ExpectType string
        checkBookmarkTreeNodeResult(bookmark);
    });

    checkChromeEvent(chrome.bookmarks.onImportBegan, () => void 0);

    checkChromeEvent(chrome.bookmarks.onImportEnded, () => void 0);

    checkChromeEvent(chrome.bookmarks.onMoved, (id, moveInfo) => {
        id; // $ExpectType string
        moveInfo.index; // $ExpectType number
        moveInfo.oldIndex; // $ExpectType number
        moveInfo.parentId; // $ExpectType string
        moveInfo.oldParentId; // $ExpectType string
    });

    checkChromeEvent(chrome.bookmarks.onRemoved, (id, removeInfo) => {
        id; // $ExpectType string
        removeInfo.index; // $ExpectType number
        removeInfo.parentId; // $ExpectType string
        checkBookmarkTreeNodeResult(removeInfo.node);
    });
}

// https://developer.chrome.com/extensions/examples/api/browserAction/make_page_red/background.js
function pageRedder() {
    chrome.browserAction.onClicked.addListener(function(tab) {
        // No tabs or host permissions needed!
        console.log("Turning " + tab.url + " red!");
        chrome.tabs.executeScript({
            code: "document.body.style.backgroundColor=\"red\"",
        });
    });
}

// https://developer.chrome.com/extensions/examples/api/browserAction/print/background.js
function printPage() {
    chrome.browserAction.onClicked.addListener(function(tab) {
        var action_url = "javascript:window.print();";
        chrome.tabs.update(tab.id!, { url: action_url });
    });
}

// webNavigation.onBeforeNavigate.addListener example
function beforeRedditNavigation() {
    chrome.webNavigation.onBeforeNavigate.addListener(
        function(requestDetails) {
            console.log("URL we want to redirect to: " + requestDetails.url);
            // NOTE: This will search for top level frames with the value -1.
            if (requestDetails.parentFrameId != -1) {
                return;
            }

            alert("Were you trying to go on reddit, during working hours? :(");
        },
        {
            url: [{ hostSuffix: ".reddit.com" }],
        },
    );
}

// https://developer.chrome.com/docs/extensions/reference/webNavigation/#method-getFrame
async function getFrame() {
    const testTabId = 0;
    const testFrameId = 0;

    chrome.webNavigation.getFrame({
        tabId: testTabId,
        frameId: testFrameId,
    }, (frame: chrome.webNavigation.GetFrameResultDetails | null) => {
        console.log("Frame (in-callback): ", frame);
    });

    const frame: chrome.webNavigation.GetFrameResultDetails | null = await chrome.webNavigation.getFrame({
        tabId: testTabId,
        frameId: testFrameId,
    });

    console.log("Frame (promise resolved):", frame);
}

// https://developer.chrome.com/docs/extensions/reference/webNavigation/#method-getAllFrames
async function getAllFrames() {
    const testTabId = 0;

    chrome.webNavigation.getAllFrames({
        tabId: testTabId,
    }, (frames: chrome.webNavigation.GetAllFrameResultDetails[] | null) => {
        console.log("All frames (in-callback): ", frames);
    });

    const frames: chrome.webNavigation.GetAllFrameResultDetails[] = await chrome.webNavigation.getAllFrames({
        tabId: testTabId,
    }) || [];

    console.log("All frames (promise resolved):", frames);
}

// https://developer.chrome.com/docs/extensions/reference/api/proxy
function proxySettings() {
    chrome.proxy.settings.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<ProxyConfig>>
    chrome.proxy.settings.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<ProxyConfig>
    });
    // @ts-expect-error
    chrome.proxy.settings.get({}, () => {}).then(() => {});

    chrome.proxy.settings.set({ value: { mode: "" }, scope: "regular" }); // $ExpectType Promise<void>
    chrome.proxy.settings.set({ value: { mode: "" }, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.proxy.settings.set({ value: { mode: "" }, scope: "regular" }, () => {}).then(() => {});

    chrome.proxy.settings.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.proxy.settings.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.proxy.settings.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.proxy.settings.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<ProxyConfig>
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/notifications
function testNotification() {
    chrome.notifications.PermissionLevel.DENIED === "denied";
    chrome.notifications.PermissionLevel.GRANTED === "granted";

    chrome.notifications.TemplateType.BASIC === "basic";
    chrome.notifications.TemplateType.IMAGE === "image";
    chrome.notifications.TemplateType.LIST === "list";
    chrome.notifications.TemplateType.PROGRESS === "progress";

    const notificationId = "2199ce04-c5ca-4651-a8a9-5f4afd4c5a05";

    chrome.notifications.clear(notificationId); // $ExpectType Promise<boolean>
    chrome.notifications.clear(notificationId, (wasCleared) => { // $ExpectType void
        wasCleared; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.notifications.clear(notificationId, () => {}).then(() => {});

    const notificationCreateOptions: chrome.notifications.NotificationCreateOptions = {
        title: "Title",
        message: "Message",
        iconUrl: "https://fakeimg.pl/300",
        type: "basic",
    };

    chrome.notifications.create(notificationId, notificationCreateOptions); // $ExpectType Promise<string>
    chrome.notifications.create(notificationId, notificationCreateOptions, (notificationId) => { // $ExpectType void
        notificationId; // $ExpectType string
    });
    // @ts-expect-error Some of the required properties are missing: type, iconUrl, title and message.
    chrome.notifications.create(notificationId, {});
    // @ts-expect-error
    chrome.notifications.create(notificationId, notificationCreateOptions, () => {}).then(() => {});

    chrome.notifications.getAll(); // $ExpectType Promise<{ [key: string]: true }>
    chrome.notifications.getAll((notifications) => { // $ExpectType void
        notifications; // $ExpectType { [key: string]: true }
    });
    // @ts-expect-error
    chrome.notifications.getAll(() => {}).then(() => {});

    chrome.notifications.getPermissionLevel(); // $ExpectType Promise<"denied" | "granted">
    chrome.notifications.getPermissionLevel((permissionLevel) => { // $ExpectType void
        permissionLevel; // $ExpectType "denied" | "granted"
    });
    // @ts-expect-error
    chrome.notifications.getPermissionLevel(() => {}).then(() => {});

    checkChromeEvent(chrome.notifications.onButtonClicked, (notificationId, buttonIndex) => {
        notificationId; // $ExpectType string
        buttonIndex; // $ExpectType number
    });

    checkChromeEvent(chrome.notifications.onClicked, (notificationId) => {
        notificationId; // $ExpectType string
    });

    checkChromeEvent(chrome.notifications.onClosed, (notificationId, byUser) => {
        notificationId; // $ExpectType string
        byUser; // $ExpectType boolean
    });

    checkChromeEvent(chrome.notifications.onPermissionLevelChanged, (permissionLevel) => {
        permissionLevel; // $ExpectType "denied" | "granted"
    });

    checkChromeEvent(chrome.notifications.onShowSettings, () => void 0);

    chrome.notifications.update(notificationId, {}); // $ExpectType Promise<boolean>
    chrome.notifications.update(notificationId, {}, (wasUpdated) => { // $ExpectType void
        wasUpdated; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.notifications.update(notificationId, {}, () => {}).then(() => {});
}

// https://developer.chrome.com/docs/extensions/reference/api/contentSettings
function testContentSettings() {
    chrome.contentSettings.AutoVerifyContentSetting.ALLOW === "allow";
    chrome.contentSettings.AutoVerifyContentSetting.BLOCK === "block";

    chrome.contentSettings.CameraContentSetting.ALLOW === "allow";
    chrome.contentSettings.CameraContentSetting.ASK === "ask";
    chrome.contentSettings.CameraContentSetting.BLOCK === "block";

    chrome.contentSettings.ClipboardContentSetting.ALLOW === "allow";
    chrome.contentSettings.ClipboardContentSetting.ASK === "ask";
    chrome.contentSettings.ClipboardContentSetting.BLOCK === "block";

    chrome.contentSettings.CookiesContentSetting.ALLOW === "allow";
    chrome.contentSettings.CookiesContentSetting.BLOCK === "block";
    chrome.contentSettings.CookiesContentSetting.SESSION_ONLY === "session_only";

    chrome.contentSettings.FullscreenContentSetting.ALLOW === "allow";

    chrome.contentSettings.ImagesContentSetting.ALLOW === "allow";
    chrome.contentSettings.ImagesContentSetting.BLOCK === "block";

    chrome.contentSettings.JavascriptContentSetting.ALLOW === "allow";
    chrome.contentSettings.JavascriptContentSetting.BLOCK === "block";

    chrome.contentSettings.LocationContentSetting.ALLOW === "allow";
    chrome.contentSettings.LocationContentSetting.ASK === "ask";
    chrome.contentSettings.LocationContentSetting.BLOCK === "block";

    chrome.contentSettings.MicrophoneContentSetting.ALLOW === "allow";
    chrome.contentSettings.MicrophoneContentSetting.ASK === "ask";
    chrome.contentSettings.MicrophoneContentSetting.BLOCK === "block";

    chrome.contentSettings.MouselockContentSetting.ALLOW === "allow";

    chrome.contentSettings.MultipleAutomaticDownloadsContentSetting.ALLOW === "allow";
    chrome.contentSettings.MultipleAutomaticDownloadsContentSetting.ASK === "ask";
    chrome.contentSettings.MultipleAutomaticDownloadsContentSetting.BLOCK === "block";

    chrome.contentSettings.PluginsContentSetting.BLOCK === "block";

    chrome.contentSettings.PopupsContentSetting.ALLOW === "allow";
    chrome.contentSettings.PopupsContentSetting.BLOCK === "block";

    chrome.contentSettings.PpapiBrokerContentSetting.BLOCK === "block";

    chrome.contentSettings.Scope.INCOGNITO_SESSION_ONLY === "incognito_session_only";
    chrome.contentSettings.Scope.REGULAR === "regular";

    const contentSettingsGetParams: chrome.contentSettings.ContentSettingGetParams = {
        primaryUrl: "https://example.com",
        secondaryUrl: "https://example2.com",
        incognito: false,
        resourceIdentifier: {
            id: "id",
        },
    };

    const contentSettingsSetParams: chrome.contentSettings.ContentSettingSetParams<"allow"> = {
        primaryPattern: "<all_urls>",
        secondaryPattern: "<all_urls>",
        scope: "regular",
        resourceIdentifier: {
            id: "id",
        },
        setting: "allow",
    };

    const contentSettingsClearParams: chrome.contentSettings.ContentSettingClearParams = {
        scope: "regular",
    };

    // autoVerify
    chrome.contentSettings.autoVerify.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block">>
    chrome.contentSettings.autoVerify.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block"
    });
    chrome.contentSettings.autoVerify.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.autoVerify.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.autoVerify.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.autoVerify.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.autoVerify.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.autoVerify.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // automaticDownloads
    chrome.contentSettings.automaticDownloads.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block" | "ask">>
    chrome.contentSettings.automaticDownloads.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block" | "ask"
    });
    chrome.contentSettings.automaticDownloads.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.automaticDownloads.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.automaticDownloads.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.automaticDownloads.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.automaticDownloads.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.automaticDownloads.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // camera
    chrome.contentSettings.camera.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block" | "ask">>
    chrome.contentSettings.camera.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block" | "ask"
    });
    chrome.contentSettings.camera.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.camera.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.camera.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.camera.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.camera.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.camera.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // clipboard
    chrome.contentSettings.clipboard.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block" | "ask">>
    chrome.contentSettings.clipboard.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block" | "ask"
    });
    chrome.contentSettings.clipboard.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.clipboard.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.clipboard.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.clipboard.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.clipboard.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.clipboard.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // cookies
    chrome.contentSettings.cookies.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block" | "session_only">>
    chrome.contentSettings.cookies.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block" | "session_only"
    });
    chrome.contentSettings.cookies.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.cookies.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.cookies.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.cookies.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.cookies.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.cookies.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // fullscreen
    chrome.contentSettings.fullscreen.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow">>
    chrome.contentSettings.fullscreen.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow"
    });
    chrome.contentSettings.fullscreen.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.fullscreen.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.fullscreen.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.fullscreen.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.fullscreen.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.fullscreen.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // images
    chrome.contentSettings.images.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block">>
    chrome.contentSettings.images.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block"
    });
    chrome.contentSettings.images.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.images.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.images.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.images.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.images.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.images.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // javascript
    chrome.contentSettings.javascript.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block">>
    chrome.contentSettings.javascript.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block"
    });
    chrome.contentSettings.javascript.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.javascript.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.javascript.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.javascript.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.javascript.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.javascript.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // location
    chrome.contentSettings.location.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block"| "ask">>
    chrome.contentSettings.location.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block"| "ask"
    });
    chrome.contentSettings.location.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.location.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.location.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.location.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.location.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.location.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // microphone
    chrome.contentSettings.microphone.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block"| "ask">>
    chrome.contentSettings.microphone.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block"| "ask"
    });
    chrome.contentSettings.microphone.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.microphone.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.microphone.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.microphone.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.microphone.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.microphone.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // mouselock
    chrome.contentSettings.mouselock.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow">>
    chrome.contentSettings.mouselock.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow"
    });
    chrome.contentSettings.mouselock.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.mouselock.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.mouselock.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.mouselock.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.mouselock.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.mouselock.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // notifications
    chrome.contentSettings.notifications.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block"| "ask">>
    chrome.contentSettings.notifications.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block"| "ask"
    });
    chrome.contentSettings.notifications.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.notifications.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.notifications.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.notifications.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.notifications.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.notifications.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // plugins
    chrome.contentSettings.plugins.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"block">>
    chrome.contentSettings.plugins.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "block"
    });
    chrome.contentSettings.plugins.set({ primaryPattern: "<all_urls>", setting: "block" }); // $ExpectType Promise<void>
    chrome.contentSettings.plugins.set({ primaryPattern: "<all_urls>", setting: "block" }, () => {}); // $ExpectType void
    chrome.contentSettings.plugins.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.plugins.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.plugins.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.plugins.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // popups
    chrome.contentSettings.popups.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"allow" | "block">>
    chrome.contentSettings.popups.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType "allow" | "block"
    });
    chrome.contentSettings.popups.set(contentSettingsSetParams); // $ExpectType Promise<void>
    chrome.contentSettings.popups.set(contentSettingsSetParams, () => {}); // $ExpectType void
    chrome.contentSettings.popups.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.popups.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.popups.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.popups.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });

    // unsandboxedPlugins
    chrome.contentSettings.unsandboxedPlugins.get(contentSettingsGetParams); // $ExpectType Promise<ContentSettingGetResult<"block">>
    chrome.contentSettings.unsandboxedPlugins.get(contentSettingsGetParams, (details) => { // $ExpectType void
        details.setting; // $ExpectType  "block"
    });
    chrome.contentSettings.unsandboxedPlugins.set({ primaryPattern: "<all_urls>", setting: "block" }); // $ExpectType Promise<void>
    chrome.contentSettings.unsandboxedPlugins.set({ primaryPattern: "<all_urls>", setting: "block" }, () => {}); // $ExpectType void
    chrome.contentSettings.unsandboxedPlugins.clear(contentSettingsClearParams); // $ExpectType Promise<void>
    chrome.contentSettings.unsandboxedPlugins.clear(contentSettingsClearParams, () => {}); // $ExpectType void
    chrome.contentSettings.unsandboxedPlugins.getResourceIdentifiers(); // $ExpectType Promise<ResourceIdentifier[] | undefined>
    chrome.contentSettings.unsandboxedPlugins.getResourceIdentifiers((resourceIdentifiers) => { // $ExpectType void
        resourceIdentifiers; // $ExpectType ResourceIdentifier[] | undefined
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/runtime
function testRuntime() {
    chrome.runtime.id; // $ExpectType string
    chrome.runtime.lastError; // $ExpectType LastError | undefined

    chrome.runtime.ContextType.BACKGROUND === "BACKGROUND";
    chrome.runtime.ContextType.DEVELOPER_TOOLS === "DEVELOPER_TOOLS";
    chrome.runtime.ContextType.OFFSCREEN_DOCUMENT === "OFFSCREEN_DOCUMENT";
    chrome.runtime.ContextType.POPUP === "POPUP";
    chrome.runtime.ContextType.SIDE_PANEL === "SIDE_PANEL";
    chrome.runtime.ContextType.TAB === "TAB";

    chrome.runtime.OnInstalledReason.CHROME_UPDATE === "chrome_update";
    chrome.runtime.OnInstalledReason.INSTALL === "install";
    chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE === "shared_module_update";
    chrome.runtime.OnInstalledReason.UPDATE === "update";

    chrome.runtime.OnRestartRequiredReason.APP_UPDATE === "app_update";
    chrome.runtime.OnRestartRequiredReason.OS_UPDATE === "os_update";
    chrome.runtime.OnRestartRequiredReason.PERIODIC === "periodic";

    chrome.runtime.PlatformArch.ARM === "arm";
    chrome.runtime.PlatformArch.ARM64 === "arm64";
    chrome.runtime.PlatformArch.MIPS === "mips";
    chrome.runtime.PlatformArch.MIPS64 === "mips64";
    chrome.runtime.PlatformArch.X86_32 === "x86-32";
    chrome.runtime.PlatformArch.X86_64 === "x86-64";

    chrome.runtime.PlatformNaclArch.ARM === "arm";
    chrome.runtime.PlatformNaclArch.MIPS === "mips";
    chrome.runtime.PlatformNaclArch.MIPS64 === "mips64";
    chrome.runtime.PlatformNaclArch.X86_32 === "x86-32";
    chrome.runtime.PlatformNaclArch.X86_64 === "x86-64";

    chrome.runtime.PlatformOs.ANDROID === "android";
    chrome.runtime.PlatformOs.CROS === "cros";
    chrome.runtime.PlatformOs.FUCHSIA === "fuchsia";
    chrome.runtime.PlatformOs.LINUX === "linux";
    chrome.runtime.PlatformOs.MAC === "mac";
    chrome.runtime.PlatformOs.OPENBSD === "openbsd";
    chrome.runtime.PlatformOs.WIN === "win";

    chrome.runtime.RequestUpdateCheckStatus.NO_UPDATE === "no_update";
    chrome.runtime.RequestUpdateCheckStatus.THROTTLED === "throttled";
    chrome.runtime.RequestUpdateCheckStatus.UPDATE_AVAILABLE === "update_available";

    const extensionId = "abcdefghijklmnopqrstuvwxyzabcdef";
    const application = "com.example.app";

    const connectInfo: chrome.runtime.ConnectInfo = {
        includeTlsChannelId: true,
        name: "test",
    };

    chrome.runtime.connect(); // $ExpectType Port
    chrome.runtime.connect(extensionId); // $ExpectType Port
    chrome.runtime.connect(connectInfo); // $ExpectType Port
    chrome.runtime.connect(extensionId, connectInfo); // $ExpectType Port

    chrome.runtime.connectNative(application); // $ExpectType Port

    chrome.runtime.getBackgroundPage(); // $ExpectType Promise<Window | undefined>
    chrome.runtime.getBackgroundPage((backgroundPage) => { // $ExpectType void
        backgroundPage; // $ExpectType Window | undefined
    });
    // @ts-expect-error
    chrome.runtime.getBackgroundPage(() => {}).then(() => {});

    const filter: chrome.runtime.ContextFilter = {
        contextIds: ["id"],
        contextTypes: ["TAB", chrome.runtime.ContextType.BACKGROUND],
        documentIds: ["id"],
        documentOrigins: ["https://example.com"],
        documentUrls: ["https://example.com/file.html"],
        frameIds: [1],
        incognito: true,
        tabIds: [1],
        windowIds: [1],
    };

    chrome.runtime.getContexts(filter); // $ExpectType Promise<ExtensionContext[]>
    chrome.runtime.getContexts(filter, (contexts) => { // $ExpectType void
        contexts; // $ExpectType ExtensionContext[]
    });
    // @ts-expect-error
    chrome.runtime.getContexts(() => {}).then(() => {});

    chrome.runtime.getManifest(); // $ExpectType Manifest

    chrome.runtime.getPackageDirectoryEntry(); // $ExpectType Promise<FileSystemDirectoryEntry>
    chrome.runtime.getPackageDirectoryEntry((directoryEntry) => { // $ExpectType void
        directoryEntry; // $ExpectType FileSystemDirectoryEntry
    });
    // @ts-expect-error
    chrome.runtime.getPackageDirectoryEntry(() => {}).then(() => {});

    chrome.runtime.getPlatformInfo(); // $ExpectType Promise<PlatformInfo>
    chrome.runtime.getPlatformInfo((platformInfo) => { // $ExpectType void
        platformInfo.arch; // $ExpectType "arm" | "arm64" | "x86-32" | "x86-64" | "mips" | "mips64"
        platformInfo.nacl_arch; // $ExpectType "arm" | "mips" | "mips64" | "x86-32" | "x86-64"
        platformInfo.os; // $ExpectType "android" | "cros" | "fuchsia" | "linux" | "mac" | "openbsd" | "win"
    });
    // @ts-expect-error
    chrome.runtime.getPlatformInfo(() => {}).then(() => {});

    chrome.runtime.getURL(""); // $ExpectType string

    chrome.runtime.openOptionsPage(); // $ExpectType Promise<void>
    chrome.runtime.openOptionsPage(() => {}); // $ExpectType void
    // @ts-expect-error
    chrome.runtime.openOptionsPage(() => {}).then(() => {});

    chrome.runtime.reload(); // $ExpectType void

    chrome.runtime.requestUpdateCheck(); // $ExpectType Promise<RequestUpdateCheckResult>
    chrome.runtime.requestUpdateCheck((status, details) => { // $ExpectType void
        status; // $ExpectType "throttled" | "no_update" | "update_available"
        if (details) {
            details.version; // $ExpectType string
        }
    });
    // @ts-expect-error
    chrome.runtime.requestUpdateCheck(() => {}).then(() => {});

    chrome.runtime.restart(); // $ExpectType void

    chrome.runtime.restartAfterDelay(10); // $ExpectType Promise<void>
    chrome.runtime.restartAfterDelay(10, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.runtime.restartAfterDelay(10, () => {}).then(() => {});

    const message = "Hello, world!";

    const options: chrome.runtime.MessageOptions = {
        includeTlsChannelId: true,
    };

    chrome.runtime.sendMessage(message); // $ExpectType Promise<any>
    chrome.runtime.sendMessage(extensionId, message); // $ExpectType Promise<any>
    chrome.runtime.sendMessage(extensionId, message, options); // $ExpectType Promise<any>
    chrome.runtime.sendMessage(message, options); // $ExpectType Promise<any>
    chrome.runtime.sendMessage<string, string>(message, options); // $ExpectType Promise<string>
    chrome.runtime.sendMessage<number, number>(10, options); // $ExpectType Promise<number>
    chrome.runtime.sendMessage(message, (response) => { // $ExpectType void
        response; // $ExpectType any
    });
    chrome.runtime.sendMessage(extensionId, message, (response) => { // $ExpectType void
        response; // $ExpectType any
    });
    chrome.runtime.sendMessage(extensionId, message, options, (response) => { // $ExpectType void
        response; // $ExpectType any
    });
    chrome.runtime.sendMessage(message, options, (response) => { // $ExpectType void
        response; // $ExpectType any
    });
    chrome.runtime.sendMessage<string, string>(message, options, (response) => { // $ExpectType void
        response; // $ExpectType string
    });
    chrome.runtime.sendMessage<number, number>(10, options, (response) => { // $ExpectType void
        response; // $ExpectType number
    });
    // @ts-expect-error
    chrome.runtime.sendMessage(message, () => {}).then(() => {});

    chrome.runtime.sendNativeMessage(application, {}); // $ExpectType Promise<any>
    chrome.runtime.sendNativeMessage(application, {}, (response) => { // $ExpectType void
        response; // $ExpectType any
    });
    // @ts-expect-error
    chrome.runtime.sendNativeMessage(application, {}, () => {}).then(() => {});

    const url = "https://example.com";

    chrome.runtime.setUninstallURL(url); // $ExpectType Promise<void>
    chrome.runtime.setUninstallURL(url, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.runtime.setUninstallURL(url, () => {}).then(() => {});

    checkChromeEvent(chrome.runtime.onBrowserUpdateAvailable, () => {});

    checkChromeEvent(chrome.runtime.onConnect, (port) => {
        port.name; // $ExpectType string
        port.onDisconnect; // $ExpectType Event<(port: Port) => void>
        port.onMessage; // $ExpectType Event<(message: any, port: Port) => void>
        port.sender; // $ExpectType MessageSender | undefined
        port.disconnect(); // $ExpectType void
        port.postMessage(""); // $ExpectType void
    });

    checkChromeEvent(chrome.runtime.onConnectExternal, (port) => {
        port.name; // $ExpectType string
        port.onDisconnect; // $ExpectType Event<(port: Port) => void>
        port.onMessage; // $ExpectType Event<(message: any, port: Port) => void>
        port.sender; // $ExpectType MessageSender | undefined
        port.disconnect(); // $ExpectType void
        port.postMessage(""); // $ExpectType void
    });

    checkChromeEvent(chrome.runtime.onConnectNative, (port) => {
        port.name; // $ExpectType string
        port.onDisconnect; // $ExpectType Event<(port: Port) => void>
        port.onMessage; // $ExpectType Event<(message: any, port: Port) => void>
        port.sender; // $ExpectType MessageSender | undefined
        port.disconnect(); // $ExpectType void
        port.postMessage(""); // $ExpectType void
    });

    checkChromeEvent(chrome.runtime.onInstalled, (details) => {
        details.id; // $ExpectType string | undefined
        details.previousVersion; // $ExpectType string | undefined
        details.reason; // $ExpectType "install" | "update" | "chrome_update" | "shared_module_update"
    });

    checkChromeEvent(chrome.runtime.onMessage, (message, sender, sendResponse) => {
        message; // $ExpectType any
        sender; // $ExpectType MessageSender
        sendResponse(); // $ExpectType void
    });

    checkChromeEvent(chrome.runtime.onMessageExternal, (message, sender, sendResponse) => {
        message; // $ExpectType any
        sender; // $ExpectType MessageSender
        sendResponse(); // $ExpectType void
    });

    checkChromeEvent(chrome.runtime.onRestartRequired, (reason) => {
        reason; // $ExpectType "app_update" | "os_update" | "periodic"
    });

    checkChromeEvent(chrome.runtime.onStartup, () => {});

    checkChromeEvent(chrome.runtime.onSuspend, () => {});

    checkChromeEvent(chrome.runtime.onSuspendCanceled, () => {});

    checkChromeEvent(chrome.runtime.onUpdateAvailable, (details) => {
        details.version; // $ExpectType string
    });

    checkChromeEvent(chrome.runtime.onUserScriptConnect, (port) => {
        port.name; // $ExpectType string
        port.onDisconnect; // $ExpectType Event<(port: Port) => void>
        port.onMessage; // $ExpectType Event<(message: any, port: Port) => void>
        port.sender; // $ExpectType MessageSender | undefined
        port.disconnect(); // $ExpectType void
        port.postMessage(""); // $ExpectType void
    });

    checkChromeEvent(chrome.runtime.onUserScriptMessage, (message, sender, sendResponse) => {
        message; // $ExpectType any
        sender; // $ExpectType MessageSender
        sendResponse(); // $ExpectType void
    });
}

function testGetManifest() {
    const manifest = chrome.runtime.getManifest();

    manifest.name; // $ExpectType string
    manifest.version; // $ExpectType string
    if (manifest.author) {
        manifest.author.email; // $ExpectType string
    }

    if (manifest.manifest_version === 2) {
        manifest.browser_action; // $ExpectType ManifestAction | undefined
        manifest.page_action; // $ExpectType ManifestAction | undefined

        manifest.content_security_policy; // $ExpectType string | undefined

        manifest.host_permissions; // $ExpectType any
        manifest.optional_permissions; // $ExpectType ManifestOptionalPermissions[] | string[] | undefined
        manifest.permissions; // $ExpectType ManifestPermissions[] |string[] | undefined

        manifest.web_accessible_resources; // $ExpectType string[] | undefined
    } else if (manifest.manifest_version === 3) {
        manifest.action; // $ExpectType ManifestAction | undefined

        // @ts-expect-error
        manifest.content_security_policy = "default-src 'self'";
        manifest.content_security_policy = {
            extension_pages: "default-src 'self'",
            sandbox: "default-src 'self'",
        };

        manifest.host_permissions; // $ExpectType string[] | undefined
        manifest.optional_permissions; // $ExpectType ManifestOptionalPermissions[] | undefined
        manifest.optional_host_permissions; // $ExpectType string[] | undefined
        manifest.permissions; // $ExpectType ManifestPermissions[] | undefined

        manifest.web_accessible_resources = [{ matches: ["https://*/*"], resources: ["resource.js"] }];
        // @ts-expect-error
        manifest.web_accessible_resources = ["script.js"];

        // @ts-expect-error Permission 'debugger' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["debugger"];
        // @ts-expect-error Permission 'declarativeNetRequest' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["declarativeNetRequest"];
        // @ts-expect-error Permission 'devtools' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["devtools"];
        // @ts-expect-error Permission 'experimental' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["experimental"];
        // @ts-expect-error Permission 'fontSettings' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["fontSettings"];
        // @ts-expect-error Permission 'geolocation' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["geolocation"];
        // @ts-expect-error Permission 'proxy' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["proxy"];
        // @ts-expect-error Permission 'tts' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["tts"];
        // @ts-expect-error Permission 'ttsEngine' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["ttsEngine"];
        // @ts-expect-error Permission 'unlimitedStorage' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["unlimitedStorage"];
        // @ts-expect-error Permission 'wallpaper' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["wallpaper"];
        // @ts-expect-error Permission 'webAuthenticationProxy' cannot be listed as optional. This permission will be omitted.
        manifest.optional_permissions = ["webAuthenticationProxy"];
    }

    const mv2: chrome.runtime.Manifest = {
        manifest_version: 2,
        name: "manifest version 2",
        version: "2.0.0",
        background: { persistent: true, scripts: ["background.js"] },
        browser_action: {
            default_icon: {
                16: "icon-16.png",
            },
        },
        content_security_policy: "default-src 'self'",
        optional_permissions: ["https://*/*"],
        permissions: ["https://*/*"],
        web_accessible_resources: ["some-page.html"],
    };

    const mv3: chrome.runtime.Manifest = {
        manifest_version: 3,
        name: "manifest version 3",
        version: "3.0.0",
        background: { service_worker: "bg-sw.js", type: "module" },
        content_scripts: [
            {
                matches: ["https://github.com/*"],
                js: ["cs.js"],
                world: "MAIN",
            },
        ],
        content_security_policy: {
            extension_pages: "default-src 'self'",
            sandbox: "default-src 'self'",
        },
        host_permissions: ["http://*/*"],
        optional_permissions: ["cookies"],
        permissions: ["activeTab"],
        web_accessible_resources: [
            {
                matches: ["https://*/*"],
                resources: ["some-script.js"],
            },
        ],
    };
}

// https://developer.chrome.com/extensions/tabCapture#type-CaptureOptions
function testTabCaptureOptions() {
    // Constraints based on:
    // https://github.com/muaz-khan/WebRTC-Experiment/blob/master/Chrome-Extensions/tabCapture/tab-capturing.js

    const resolutions = {
        maxWidth: 1920,
        maxHeight: 1080,
    };

    const constraints: chrome.tabCapture.CaptureOptions = {
        audio: true,
        video: true,
        audioConstraints: {
            mandatory: {
                chromeMediaSource: "tab",
                echoCancellation: true,
            },
        },
        videoConstraints: {
            mandatory: {
                chromeMediaSource: "tab",
                maxWidth: resolutions.maxWidth,
                maxHeight: resolutions.maxHeight,
                minFrameRate: 30,
                minAspectRatio: 1.77,
            },
        },
    };

    let constraints2: chrome.tabCapture.CaptureOptions;
    constraints2 = constraints;
}

// https://developer.chrome.com/docs/extensions/reference/api/debugger
function testDebugger() {
    chrome.debugger.DetachReason.CANCELED_BY_USER === "canceled_by_user";
    chrome.debugger.DetachReason.TARGET_CLOSED === "target_closed";

    chrome.debugger.TargetInfoType.BACKGROUND_PAGE === "background_page";
    chrome.debugger.TargetInfoType.OTHER === "other";
    chrome.debugger.TargetInfoType.PAGE === "page";
    chrome.debugger.TargetInfoType.WORKER === "worker";

    const debuggee: chrome.debugger.Debuggee = {
        tabId: 123,
    };

    chrome.debugger.attach(debuggee, "0.1"); // $ExpectType Promise<void>
    chrome.debugger.attach(debuggee, "0.1", () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.debugger.attach(debuggee, "0.1", () => {}).then(() => {});

    chrome.debugger.detach(debuggee); // $ExpectType Promise<void>
    chrome.debugger.detach(debuggee, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.debugger.detach(debuggee, () => {}).then(() => {});

    chrome.debugger.getTargets(); // $ExpectType Promise<TargetInfo[]>
    chrome.debugger.getTargets(([result]) => { // $ExpectType void
        result.type; // $ExpectType "background_page" | "other" | "page" | "worker";
        result.id; // $ExpectType string;
        result.tabId; // $ExpectType number | undefined;
        result.extensionId; // $ExpectType string | undefined;
        result.attached; // $ExpectType boolean
        result.title; // $ExpectType string
        result.url; // $ExpectType string
        result.faviconUrl; // $ExpectType string | undefined
    });
    // @ts-expect-error
    chrome.debugger.getTargets(() => {}).then(() => {});

    const debuggerSession: chrome.debugger.DebuggerSession = {
        sessionId: "123",
    };

    chrome.debugger.sendCommand(debuggerSession, "Debugger.Cmd", {}); // $ExpectType Promise<object | undefined>
    chrome.debugger.sendCommand(debuggerSession, "Debugger.Cmd", {}, (result) => { // $ExpectType void
        result; // $ExpectType object | undefined
    });
    // @ts-expect-error
    chrome.debugger.sendCommand(debuggerSession, "Debugger.Cmd", {}, () => {}).then(() => {});

    checkChromeEvent(chrome.debugger.onEvent, (source, methodName, params) => {
        source; // $ExpectType DebuggerSession
        methodName; // $ExpectType string
        params; // $ExpectType object | undefined
    });

    checkChromeEvent(chrome.debugger.onDetach, (source, reason) => {
        source; // $ExpectType Debuggee
        reason; // $ExpectType "canceled_by_user" | "target_closed"
    });
}

// https://developer.chrome.com/extensions/declarativeContent
function testDeclarativeContent() {
    const activeIcon: ImageData = new ImageData(32, 32);

    const rule: chrome.events.Rule = {
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostContains: "test.com",
                },
            }),
        ],
        actions: [
            new chrome.declarativeContent.SetIcon({
                imageData: activeIcon,
            }),
        ],
    };
}

// https://developer.chrome.com/extensions/storage#type-StorageArea
function testStorage() {
    interface StorageData {
        myKey: {
            x: number;
            y: number;
            z?: number;
        };
        myKey2: string;
    }

    function getCallback(loadedData: { [key: string]: any }) {
        console.log(loadedData.myKey.x + loadedData.myKey.y);
    }

    function getCallbackTyped(loadedData: StorageData) {
        console.log(loadedData.myKey.x + loadedData.myKey.y);
    }

    // @ts-expect-error
    const testNoInferX: chrome.storage.NoInferX<string> = "This test checks if NoInferX is accidentally exported";

    chrome.storage.sync.get("myKey", getCallback);
    chrome.storage.sync.get("badKey", getCallback);
    // @ts-expect-error
    chrome.storage.sync.get("badKey", getCallbackTyped);
    // @ts-expect-error
    chrome.storage.sync.get({ myKey: { badKey: true } }, getCallbackTyped);
    chrome.storage.sync.get(null, (data) => {
        console.log(data.myKey);
    });
    chrome.storage.sync.get((data: any) => {
        console.log(data.badKey);
    });

    chrome.storage.sync.get<StorageData>(getCallbackTyped);
    chrome.storage.sync.get<StorageData>("myKey", getCallbackTyped);
    chrome.storage.sync.get<StorageData>(["myKey", "myKey2"], getCallbackTyped);
    chrome.storage.sync.get<StorageData>({ myKey: { x: 1, y: 2 } }, getCallbackTyped);
    // @ts-expect-error
    chrome.storage.sync.get<StorageData>({ myKey: { badKey: true } }, getCallback);
    // @ts-expect-error
    chrome.storage.sync.get<StorageData>({ myKey: { badKey: true } }, getCallbackTyped);
    chrome.storage.sync.get<StorageData>(null, getCallbackTyped);

    function getBytesInUseCallback(bytesInUse: number) {
        console.log(bytesInUse);
    }

    chrome.storage.sync.getBytesInUse(getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse("myKey", getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse("badKey", getBytesInUseCallback);

    chrome.storage.sync.getBytesInUse<StorageData>("myKey", getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse<StorageData>(["myKey", "myKey2"], getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse<StorageData>(null, getBytesInUseCallback);
    // @ts-expect-error
    chrome.storage.sync.getBytesInUse<StorageData>(["badKey", "myKey2"], getBytesInUseCallback);

    function doneCallback() {
        console.log("done");
    }

    chrome.storage.sync.set({ badKey: true });
    chrome.storage.sync.set<StorageData>({ myKey: { x: 1, y: 2 } });
    chrome.storage.sync.set<StorageData>({ myKey2: "hello world" }, doneCallback);
    // @ts-expect-error
    chrome.storage.sync.set<StorageData>({ badKey: "hello world" }, doneCallback);

    chrome.storage.sync.remove("badKey");
    chrome.storage.sync.remove<StorageData>("myKey");
    chrome.storage.sync.remove<StorageData>("myKey", doneCallback);
    chrome.storage.sync.remove<StorageData>(["myKey", "myKey2"]);
    chrome.storage.sync.remove<StorageData>(["myKey", "myKey2"], doneCallback);
    // @ts-expect-error
    chrome.storage.sync.remove<StorageData>(["badKey", "myKey2"], doneCallback);

    chrome.storage.sync.clear();
    chrome.storage.sync.clear(doneCallback);

    chrome.storage.sync.setAccessLevel({ accessLevel: chrome.storage.AccessLevel.TRUSTED_AND_UNTRUSTED_CONTEXTS });
    chrome.storage.sync.setAccessLevel(
        { accessLevel: chrome.storage.AccessLevel.TRUSTED_AND_UNTRUSTED_CONTEXTS },
        doneCallback,
    );

    chrome.storage.sync.onChanged.addListener(function(changes) {
        var myNewValue: { x: number } = changes["myKey"].newValue;
        var myOldValue: { x: number } = changes["myKey"].oldValue;
    });

    chrome.storage.onChanged.addListener(function(changes, areaName) {
        var area: string = areaName;
        var myNewValue: { x: number } = changes["myKey"].newValue;
        var myOldValue: { x: number } = changes["myKey"].oldValue;
    });

    chrome.storage.sync.getKeys(); // $ExpectType Promise<string[]>
    chrome.storage.sync.getKeys((keys) => { // $ExpectType void
        keys; // $ExpectType string[]
    });
    // @ts-expect-error
    chrome.storage.sync.getKeys(() => {}).then(() => {});
}

// https://developer.chrome.com/docs/extensions/reference/api/tss
function testTts() {
    chrome.tts.EventType.CANCELLED === "cancelled";
    chrome.tts.EventType.END === "end";
    chrome.tts.EventType.ERROR === "error";
    chrome.tts.EventType.INTERRUPTED === "interrupted";
    chrome.tts.EventType.MARKER === "marker";
    chrome.tts.EventType.PAUSE === "pause";
    chrome.tts.EventType.RESUME === "resume";
    chrome.tts.EventType.SENTENCE === "sentence";
    chrome.tts.EventType.START === "start";
    chrome.tts.EventType.WORD === "word";

    chrome.tts.VoiceGender.FEMALE === "female";
    chrome.tts.VoiceGender.MALE === "male";

    chrome.tts.getVoices(); // $ExpectType Promise<TtsVoice[]>
    chrome.tts.getVoices(([voice]) => { // $ExpectType void
        voice.eventTypes; // $ExpectType ("start" | "end" | "word" | "sentence" | "marker" | "interrupted" | "cancelled" | "error" | "pause" | "resume")[] | undefined
        voice.extensionId; // $ExpectType string | undefined
        voice.lang; // $ExpectType string | undefined
        voice.voiceName; // $ExpectType string | undefined
        voice.remote; // $ExpectType boolean | undefined
    });
    // @ts-expect-error
    chrome.tts.getVoices(() => {}).then(() => {});

    chrome.tts.isSpeaking(); // $ExpectType Promise<boolean>
    chrome.tts.isSpeaking((speaking) => { // $ExpectType void
        speaking; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.tts.isSpeaking(() => {}).then(() => {});

    chrome.tts.pause(); // $ExpectType void

    chrome.tts.resume(); // $ExpectType void

    const ttsOptions: chrome.tts.TtsOptions = {
        lang: "en",
    };

    chrome.tts.speak("Hello, World!"); // $ExpectType Promise<void>
    chrome.tts.speak("Hello, World!", ttsOptions); // $ExpectType Promise<void>
    chrome.tts.speak("Hello, World!", () => {}); // $ExpectType void
    chrome.tts.speak("Hello, World!", ttsOptions, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.tts.speak("Hello, World!", () => {}).then(() => {});

    chrome.tts.stop(); // $ExpectType void

    checkChromeEvent(chrome.tts.onVoicesChanged, () => void 0);
}

// https://developer.chrome.com/docs/extensions/reference/api/ttsEngine
function testTtsEngine() {
    const TtsEvent: chrome.tts.TtsEvent = {
        type: "start",
    };

    chrome.ttsEngine.LanguageInstallStatus.FAILED === "failed";
    chrome.ttsEngine.LanguageInstallStatus.INSTALLED === "installed";
    chrome.ttsEngine.LanguageInstallStatus.INSTALLING === "installing";
    chrome.ttsEngine.LanguageInstallStatus.NOT_INSTALLED === "notInstalled";

    chrome.ttsEngine.TtsClientSource.CHROMEFEATURE === "chromefeature";
    chrome.ttsEngine.TtsClientSource.EXTENSION === "extension";

    chrome.ttsEngine.VoiceGender.MALE === "male";
    chrome.ttsEngine.VoiceGender.FEMALE === "female";

    chrome.ttsEngine.updateLanguage({
        lang: "en",
        installStatus: "installed",
    });
    chrome.ttsEngine.updateLanguage({
        lang: "en",
        installStatus: chrome.ttsEngine.LanguageInstallStatus.INSTALLED,
    });

    chrome.ttsEngine.updateVoices([{ voiceName: "voice", lang: "en" }]); // $ExpectType void

    checkChromeEvent(chrome.ttsEngine.onInstallLanguageRequest, (requestor, lang) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
    });

    checkChromeEvent(chrome.ttsEngine.onLanguageStatusRequest, (requestor, lang) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
    });

    checkChromeEvent(chrome.ttsEngine.onPause, () => void 0);

    checkChromeEvent(chrome.ttsEngine.onResume, () => void 0);

    checkChromeEvent(chrome.ttsEngine.onSpeak, (utterance, options, sendTtsEvent) => {
        utterance; // $ExpectType string
        options; // $ExpectType SpeakOptions
        sendTtsEvent(TtsEvent);
    });

    const audioBuffer: chrome.ttsEngine.AudioBuffer = {
        audioBuffer: new ArrayBuffer(8),
        charIndex: 0,
        isLastBuffer: false,
    };

    checkChromeEvent(
        chrome.ttsEngine.onSpeakWithAudioStream,
        (utterance, options, audioStreamOptions, sendTtsAudio, sendError) => {
            utterance; // $ExpectType string
            options; // $ExpectType SpeakOptions
            audioStreamOptions; // $ExpectType AudioStreamOptions
            sendTtsAudio(audioBuffer);
            sendError("error");
        },
    );

    checkChromeEvent(chrome.ttsEngine.onStop, () => void 0);

    checkChromeEvent(chrome.ttsEngine.onUninstallLanguageRequest, (requestor, lang, uninstallOptions) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
        uninstallOptions; // $ExpectType LanguageUninstallOptions
    });
}

function testDevtools() {
    chrome.devtools.network.onRequestFinished.addListener((request: chrome.devtools.network.Request) => {
        request; // $ExpectType Request
        console.log("request: ", request);
    });

    chrome.devtools.performance.onProfilingStarted.addListener(() => {
        console.log("Profiling started");
    });

    chrome.devtools.performance.onProfilingStopped.addListener(() => {
        console.log("Profiling stopped");
    });

    chrome.devtools.network.getHAR((harLog: chrome.devtools.network.HARLog) => {
        harLog; // $ExpectType HARLog
        console.log("harLog: ", harLog);
    });

    chrome.devtools.inspectedWindow.eval("1+1", undefined, result => {
        console.log(result);
    });

    chrome.devtools.inspectedWindow.reload();
    chrome.devtools.inspectedWindow.reload({});
    chrome.devtools.inspectedWindow.reload({
        userAgent: "Best Browser",
        ignoreCache: true,
        injectedScript: "console.log(\"Hello World!\")",
    });

    const view = chrome.devtools.recorder.createView("title", "replay.html"); // $ExpectType RecorderView
    checkChromeEvent(view.onHidden, () => void 0);
    checkChromeEvent(view.onShown, () => void 0);
    view.show(); // $ExpectType void

    const plugin: chrome.devtools.recorder.RecorderExtensionPlugin = {
        replay: () => {},
        stringify: () => {},
        stringifyStep: () => {},
    };
    chrome.devtools.recorder.registerRecorderExtensionPlugin({}, "MyPlugin", "application/json"); // $ExpectType void
    chrome.devtools.recorder.registerRecorderExtensionPlugin(plugin, "MyPlugin", "application/json"); // $ExpectType void

    chrome.devtools.panels.setOpenResourceHandler((resource, lineNumber) => { // $ExpectType void
        resource; // $ExpectType Resource
        lineNumber; // $ExpectType number
    });
}

function testAssistiveWindow() {
    chrome.input.ime.setAssistiveWindowProperties({
        contextID: 0,
        properties: {
            type: "undo",
            visible: true,
        },
    });

    chrome.input.ime.setAssistiveWindowButtonHighlighted({
        contextID: 0,
        buttonID: "undo",
        windowType: "undo",
        announceString: "Undo button highlighted",
        highlighted: true,
    });

    chrome.input.ime.setAssistiveWindowButtonHighlighted({
        contextID: 0,
        buttonID: "undo",
        windowType: "undo",
        highlighted: false,
    });

    chrome.input.ime.onAssistiveWindowButtonClicked.addListener(
        (details: chrome.input.ime.AssistiveWindowButtonClickedDetails) => {
            details;
            console.log(`${details.buttonID} button in ${details.windowType} window clicked`);
        },
    );
}

// https://developer.chrome.com/extensions/omnibox#types
function testOmnibox() {
    const suggestion: chrome.omnibox.Suggestion = { description: "description" };
    chrome.omnibox.setDefaultSuggestion(suggestion);

    function onInputEnteredCallback(text: string, disposition: chrome.omnibox.OnInputEnteredDisposition) {
        if (disposition === "currentTab") {
        }
        if (disposition === "newForegroundTab") {
        }
        if (disposition === "newBackgroundTab") {
        }
    }
    chrome.omnibox.onInputEntered.addListener(onInputEnteredCallback);

    const suggestResult1: chrome.omnibox.SuggestResult = {
        content: "content",
        description: "description",
    };
    const suggestResult2: chrome.omnibox.SuggestResult = {
        content: "content",
        description: "description",
        deletable: true,
    };
    function onInputChangedCallback(text: string, suggest: (suggestResults: chrome.omnibox.SuggestResult[]) => void) {
        suggest([suggestResult1, suggestResult2]);
    }
    chrome.omnibox.onInputChanged.addListener(onInputChangedCallback);

    chrome.omnibox.onInputStarted.addListener(() => {});

    chrome.omnibox.onInputCancelled.addListener(() => {});

    chrome.omnibox.onDeleteSuggestion.addListener((text: string) => {});
}

function testSearch() {
    function getCallback() {}

    const DISPOSITIONS: chrome.search.Disposition[] = ["CURRENT_TAB", "NEW_TAB", "NEW_WINDOW"];

    DISPOSITIONS.forEach(disposition => {
        chrome.search.query(
            {
                disposition,
                tabId: 1,
                text: "text",
            },
            getCallback,
        );
    });
}

// https://developer.chrome.com/docs/extensions/reference/search/
async function testSearchForPromise() {
    const DISPOSITIONS: chrome.search.Disposition[] = ["CURRENT_TAB", "NEW_TAB", "NEW_WINDOW"];

    for (const disposition of DISPOSITIONS) {
        await chrome.search.query(
            {
                disposition,
                tabId: 1,
                text: "text",
            },
        );
    }
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-enable
function testBrowserAcionEnable() {
    chrome.browserAction.enable();
    chrome.browserAction.enable(console.log);
    chrome.browserAction.enable(0);
    chrome.browserAction.enable(0, console.log);
    chrome.browserAction.enable(null);
    chrome.browserAction.enable(null, console.log);
    chrome.browserAction.enable(undefined);
    chrome.browserAction.enable(undefined, console.log);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-disable
function testBrowserAcionDisable() {
    chrome.browserAction.disable();
    chrome.browserAction.disable(console.log);
    chrome.browserAction.disable(0);
    chrome.browserAction.disable(0, console.log);
    chrome.browserAction.disable(null);
    chrome.browserAction.disable(null, console.log);
    chrome.browserAction.disable(undefined);
    chrome.browserAction.disable(undefined, console.log);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-getBadgeBackgroundColor
function testBrowserAcionGetBadgeBackgroundColor() {
    chrome.browserAction.getBadgeBackgroundColor({}, console.log);
    chrome.browserAction.getBadgeBackgroundColor({ tabId: 0 }, console.log);
    chrome.browserAction.getBadgeBackgroundColor({ tabId: null }, console.log);
    chrome.browserAction.getBadgeBackgroundColor({ tabId: undefined }, console.log);

    // @ts-expect-error
    chrome.browserAction.getBadgeBackgroundColor();
    // @ts-expect-error
    chrome.browserAction.getBadgeBackgroundColor(null);
    // @ts-expect-error
    chrome.browserAction.getBadgeBackgroundColor(undefined);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-getBadgeText
function testBrowserAcionGetBadgeText() {
    chrome.browserAction.getBadgeText({}, console.log);
    chrome.browserAction.getBadgeText({ tabId: 0 }, console.log);
    chrome.browserAction.getBadgeText({ tabId: null }, console.log);
    chrome.browserAction.getBadgeText({ tabId: undefined }, console.log);

    // @ts-expect-error
    chrome.browserAction.getBadgeText();
    // @ts-expect-error
    chrome.browserAction.getBadgeText(null);
    // @ts-expect-error
    chrome.browserAction.getBadgeText(undefined);
    // @ts-expect-error
    chrome.browserAction.getBadgeText(console.log);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-getPopup
function testBrowserAcionGetPopup() {
    chrome.browserAction.getPopup({});
    chrome.browserAction.getPopup({}, console.log);
    chrome.browserAction.getPopup({ tabId: 0 });
    chrome.browserAction.getPopup({ tabId: 0 }, console.log);
    chrome.browserAction.getPopup({ tabId: null });
    chrome.browserAction.getPopup({ tabId: null }, console.log);
    chrome.browserAction.getPopup({ tabId: undefined });
    chrome.browserAction.getPopup({ tabId: undefined }, console.log);

    // @ts-expect-error
    chrome.browserAction.getPopup();
    // @ts-expect-error
    chrome.browserAction.getPopup(null);
    // @ts-expect-error
    chrome.browserAction.getPopup(undefined);
    // @ts-expect-error
    chrome.browserAction.getPopup(console.log);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-getPopup
function testBrowserAcionGetTitle() {
    chrome.browserAction.getTitle({});
    chrome.browserAction.getTitle({}, console.log);
    chrome.browserAction.getTitle({ tabId: 0 });
    chrome.browserAction.getTitle({ tabId: 0 }, console.log);
    chrome.browserAction.getTitle({ tabId: null });
    chrome.browserAction.getTitle({ tabId: null }, console.log);
    chrome.browserAction.getTitle({ tabId: undefined });
    chrome.browserAction.getTitle({ tabId: undefined }, console.log);

    // @ts-expect-error
    chrome.browserAction.getTitle();
    // @ts-expect-error
    chrome.browserAction.getTitle(null);
    // @ts-expect-error
    chrome.browserAction.getTitle(undefined);
    // @ts-expect-error
    chrome.browserAction.getTitle(console.log);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-setBadgeBackgroundColor
function testBrowserAcionSetBadgeBackgroundColor() {
    chrome.browserAction.setBadgeBackgroundColor({ color: "red" });
    chrome.browserAction.setBadgeBackgroundColor({ color: "red" }, console.log);
    chrome.browserAction.setBadgeBackgroundColor({ color: "red", tabId: 0 });
    chrome.browserAction.setBadgeBackgroundColor({ color: "red", tabId: 0 }, console.log);
    chrome.browserAction.setBadgeBackgroundColor({ color: [1, 2, 3, 4], tabId: 0 });
    chrome.browserAction.setBadgeBackgroundColor({ color: [1, 2, 3, 4], tabId: 0 }, console.log);

    // @ts-expect-error
    chrome.browserAction.setBadgeBackgroundColor();
    // @ts-expect-error
    chrome.browserAction.setBadgeBackgroundColor({});
    // @ts-expect-error
    chrome.browserAction.setBadgeBackgroundColor({ tabId: 0 });
    // @ts-expect-error
    chrome.browserAction.setBadgeBackgroundColor({ color: [1, 2, 3] }, console.log);
    // @ts-expect-error
    chrome.browserAction.setBadgeBackgroundColor(null);
    // @ts-expect-error
    chrome.browserAction.setBadgeBackgroundColor(undefined);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-setBadgeText
function testBrowserActionSetBrowserBadgeText() {
    chrome.browserAction.setBadgeText({});
    chrome.browserAction.setBadgeText({ text: "test" });
    chrome.browserAction.setBadgeText({ text: null });
    chrome.browserAction.setBadgeText({ text: undefined });
    chrome.browserAction.setBadgeText({ tabId: 123 });
    chrome.browserAction.setBadgeText({ text: "test", tabId: 123 });
    chrome.browserAction.setBadgeText({}, () => {});

    // @ts-expect-error
    chrome.browserAction.setBadgeText();
    // @ts-expect-error
    chrome.browserAction.setBadgeText(undefined);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-setIcon
function testBrowserAcionSetIcon() {
    chrome.browserAction.setIcon({ path: "/icon.png" });
    chrome.browserAction.setIcon({ path: "/icon.png" }, console.log);
    chrome.browserAction.setIcon({ path: { 16: "/icon.png" } });
    chrome.browserAction.setIcon({ path: { 16: "/icon.png" } }, console.log);
    chrome.browserAction.setIcon({ path: { 16: "/icon.png" }, tabId: 0 });
    chrome.browserAction.setIcon({ path: { 16: "/icon.png" }, tabId: 0 }, console.log);

    // @ts-expect-error
    chrome.browserAction.setIcon();
    // @ts-expect-error
    chrome.browserAction.setIcon(null);
    // @ts-expect-error
    chrome.browserAction.setIcon(undefined);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-setPopup
function testBrowserAcionSetPopup() {
    chrome.browserAction.setPopup({ popup: "index.html" });
    chrome.browserAction.setPopup({ popup: "index.html" }, console.log);
    chrome.browserAction.setPopup({ popup: "index.html", tabId: 0 });
    chrome.browserAction.setPopup({ popup: "index.html", tabId: 0 }, console.log);
    chrome.browserAction.setPopup({ popup: "index.html", tabId: null });
    chrome.browserAction.setPopup({ popup: "index.html", tabId: null }, console.log);
    chrome.browserAction.setPopup({ popup: "index.html", tabId: undefined });
    chrome.browserAction.setPopup({ popup: "index.html", tabId: undefined }, console.log);

    // @ts-expect-error
    chrome.browserAction.setPopup();
    // @ts-expect-error
    chrome.browserAction.setPopup(null);
    // @ts-expect-error
    chrome.browserAction.setPopup(undefined);
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-setTitle
function testBrowserAcionSetTitle() {
    chrome.browserAction.setTitle({ title: "Title" });
    chrome.browserAction.setTitle({ title: "Title" }, console.log);
    chrome.browserAction.setTitle({ title: "Title", tabId: 0 });
    chrome.browserAction.setTitle({ title: "Title", tabId: 0 }, console.log);
    chrome.browserAction.setTitle({ title: "Title", tabId: null });
    chrome.browserAction.setTitle({ title: "Title", tabId: null }, console.log);
    chrome.browserAction.setTitle({ title: "Title", tabId: undefined });
    chrome.browserAction.setTitle({ title: "Title", tabId: undefined }, console.log);

    // @ts-expect-error
    chrome.browserAction.setTitle();
    // @ts-expect-error
    chrome.browserAction.setTitle(null);
    // @ts-expect-error
    chrome.browserAction.setTitle(undefined);
}

// https://developer.chrome.com/docs/extensions/reference/api/action
async function testAction() {
    const tabId = 0;

    chrome.action.disable(); // $ExpectType Promise<void>
    chrome.action.disable(tabId); // $ExpectType Promise<void>
    chrome.action.disable(() => void 0); // $ExpectType void
    chrome.action.disable(tabId, () => void 0); // $ExpectType void
    // @ts-expect-error
    chrome.action.disable(() => {}).then(() => {});

    chrome.action.enable(); // $ExpectType Promise<void>
    chrome.action.enable(tabId); // $ExpectType Promise<void>
    chrome.action.enable(() => void 0); // $ExpectType void
    chrome.action.enable(tabId, () => void 0); // $ExpectType void
    // @ts-expect-error
    chrome.action.enable(() => {}).then(() => {});

    const tabDetails: chrome.action.TabDetails = { tabId };

    chrome.action.getBadgeBackgroundColor(tabDetails); // $ExpectType Promise<ColorArray>
    chrome.action.getBadgeBackgroundColor(tabDetails, (result) => { // $ExpectType void
        result[0]; // $ExpectType number
        result[1]; // $ExpectType number
        result[2]; // $ExpectType number
        result[3]; // $ExpectType number
        // @ts-expect-error
        result[4];
    });
    // @ts-expect-error
    chrome.action.getBadgeBackgroundColor(tabDetails, () => {}).then(() => {});

    chrome.action.getBadgeText(tabDetails); // $ExpectType Promise<string>
    chrome.action.getBadgeText(tabDetails, (result) => { // $ExpectType void
        result; // $ExpectType string
    });
    // @ts-expect-error
    chrome.action.getBadgeText(tabDetails, () => {}).then(() => {});

    chrome.action.getBadgeTextColor(tabDetails); // $ExpectType Promise<ColorArray>
    chrome.action.getBadgeTextColor(tabDetails, (result) => { // $ExpectType void
        result[0]; // $ExpectType number
        result[1]; // $ExpectType number
        result[2]; // $ExpectType number
        result[3]; // $ExpectType number
        // @ts-expect-error
        result[4];
    });
    // @ts-expect-error
    chrome.action.getBadgeTextColor(tabDetails, () => {}).then(() => {});

    const popupDetails: chrome.action.PopupDetails = { tabId, popup: "index.html" };

    chrome.action.getPopup(popupDetails); // $ExpectType Promise<string>
    chrome.action.getPopup(popupDetails, (result) => { // $ExpectType void
        result; // $ExpectType string
    });
    // @ts-expect-error
    chrome.action.getPopup(popupDetails, () => {}).then(() => {});

    chrome.action.getTitle(popupDetails); // $ExpectType Promise<string>
    chrome.action.getTitle(popupDetails, (result) => { // $ExpectType void
        result; // $ExpectType string
    });
    // @ts-expect-error
    chrome.action.getTitle(popupDetails, () => {}).then(() => {});

    chrome.action.getUserSettings(); // $ExpectType Promise<UserSettings>
    chrome.action.getUserSettings(userSettings => { // $ExpectType void
        userSettings.isOnToolbar; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.action.getUserSettings(() => {}).then(() => {});

    chrome.action.isEnabled(); // $ExpectType Promise<boolean>
    chrome.action.isEnabled(tabId); // $ExpectType Promise<boolean>
    chrome.action.isEnabled((isEnabled) => { // $ExpectType void
        isEnabled; // $ExpectType boolean
    });
    chrome.action.isEnabled(tabId, (isEnabled) => {
        isEnabled; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.action.isEnabled(tabId, () => {}).then(() => {});

    const openPopupOptions: chrome.action.OpenPopupOptions = { windowId: 1 };

    chrome.action.openPopup(); // $ExpectType Promise<void>
    chrome.action.openPopup(openPopupOptions); // $ExpectType Promise<void>
    chrome.action.openPopup(() => {}); // $ExpectType void
    chrome.action.openPopup(openPopupOptions, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.action.openPopup(() => {}).then(() => {});

    const badgeColorDetails: chrome.action.BadgeColorDetails = { color: [0, 0, 0, 0], tabId };

    chrome.action.setBadgeBackgroundColor(badgeColorDetails); // $ExpectType Promise<void>
    chrome.action.setBadgeBackgroundColor(badgeColorDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.action.setBadgeBackgroundColor(() => {}).then(() => {});

    const badgeTextDetails: chrome.action.BadgeTextDetails = { text: "text1", tabId };

    chrome.action.setBadgeText(badgeTextDetails); // $ExpectType Promise<void>
    chrome.action.setBadgeText(badgeTextDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.action.setBadgeText(() => {}).then(() => {});

    chrome.action.setBadgeTextColor(badgeColorDetails); // $ExpectType Promise<void>
    chrome.action.setBadgeTextColor(badgeColorDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.action.setBadgeTextColor(() => {}).then(() => {});

    const tabIconDetails: chrome.action.TabIconDetails = { path: { "16": "path/to/icon.png" }, tabId };

    chrome.action.setIcon(tabIconDetails); // $ExpectType Promise<void>
    chrome.action.setIcon(tabIconDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.action.setIcon(() => {}).then(() => {});

    chrome.action.setPopup(popupDetails); // $ExpectType Promise<void>
    chrome.action.setPopup(popupDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.action.setPopup(() => {}).then(() => {});

    const titleDetails: chrome.action.TitleDetails = { title: "title1", tabId };

    chrome.action.setTitle(titleDetails); // $ExpectType Promise<void>
    chrome.action.setTitle(titleDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.action.setTitle(() => {}).then(() => {});

    checkChromeEvent(chrome.action.onClicked, (tab) => {
        tab; // $ExpectType Tab
    });

    checkChromeEvent(chrome.action.onUserSettingsChanged, (change) => {
        change; // $ExpectType UserSettingsChange
    });
}

// https://developer.chrome.com/docs/extensions/reference/alarms/
async function testAlarms() {
    const alarmCreateInfo: chrome.alarms.AlarmCreateInfo = {
        delayInMinutes: 1,
        periodInMinutes: 1,
        when: 1,
    };

    chrome.alarms.create(alarmCreateInfo); // $ExpectType Promise<void>
    chrome.alarms.create("name", alarmCreateInfo); // $ExpectType Promise<void>
    chrome.alarms.create(alarmCreateInfo, () => {}); // $ExpectType void
    chrome.alarms.create("name", alarmCreateInfo, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.alarms.create("name", alarmCreateInfo, () => {}).then(() => {});

    chrome.alarms.getAll(); // $ExpectType Promise<Alarm[]>
    chrome.alarms.getAll((alarms) => { // $ExpectType void
        alarms[0].name; // $ExpectType string
        alarms[0].periodInMinutes; // $ExpectType number | undefined
        alarms[0].scheduledTime; // $ExpectType number
    });
    // @ts-expect-error
    chrome.alarms.getAll(() => {}).then(() => {});

    chrome.alarms.clearAll(); // $ExpectType Promise<boolean>
    chrome.alarms.clearAll((wasCleared) => { // $ExpectType void
        wasCleared; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.alarms.clearAll(() => {}).then(() => {});

    chrome.alarms.clear(); // $ExpectType Promise<boolean>
    chrome.alarms.clear("name"); // $ExpectType Promise<boolean>
    chrome.alarms.clear((wasCleared) => { // $ExpectType void
        wasCleared; // $ExpectType boolean
    });
    chrome.alarms.clear("name", (wasCleared) => { // $ExpectType void
        wasCleared; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.alarms.clear("name", () => {}).then(() => {});

    chrome.alarms.get(); // $ExpectType Promise<Alarm | undefined>
    chrome.alarms.get("name"); // $ExpectType Promise<Alarm | undefined>
    chrome.alarms.get((alarm) => { // $ExpectType void
        alarm; // $ExpectType Alarm | undefined
        if (alarm) {
            alarm.name; // $ExpectType string
            alarm.periodInMinutes; // $ExpectType number | undefined
            alarm.scheduledTime; // $ExpectType number
        }
    });
    chrome.alarms.get("name", (alarm) => { // $ExpectType void
        alarm; // $ExpectType Alarm | undefined
        if (alarm) {
            alarm.name; // $ExpectType string
            alarm.periodInMinutes; // $ExpectType number | undefined
            alarm.scheduledTime; // $ExpectType number
        }
    });
    // @ts-expect-error
    chrome.alarms.get("name", () => {}).then(() => {});

    checkChromeEvent(chrome.alarms.onAlarm, (alarm) => {
        alarm.name; // $ExpectType string
        alarm.periodInMinutes; // $ExpectType number | undefined
        alarm.scheduledTime; // $ExpectType number
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/audio
function testAudio() {
    chrome.audio.DeviceType.ALSA_LOOPBACK === "ALSA_LOOPBACK";
    chrome.audio.DeviceType.BLUETOOTH === "BLUETOOTH";
    chrome.audio.DeviceType.FRONT_MIC === "FRONT_MIC";
    chrome.audio.DeviceType.HDMI === "HDMI";
    chrome.audio.DeviceType.HEADPHONE === "HEADPHONE";
    chrome.audio.DeviceType.HOTWORD === "HOTWORD";
    chrome.audio.DeviceType.INTERNAL_MIC === "INTERNAL_MIC";
    chrome.audio.DeviceType.INTERNAL_SPEAKER === "INTERNAL_SPEAKER";
    chrome.audio.DeviceType.KEYBOARD_MIC === "KEYBOARD_MIC";
    chrome.audio.DeviceType.LINEOUT === "LINEOUT";
    chrome.audio.DeviceType.MIC === "MIC";
    chrome.audio.DeviceType.OTHER === "OTHER";
    chrome.audio.DeviceType.POST_DSP_LOOPBACK === "POST_DSP_LOOPBACK";
    chrome.audio.DeviceType.POST_MIX_LOOPBACK === "POST_MIX_LOOPBACK";
    chrome.audio.DeviceType.REAR_MIC === "REAR_MIC";
    chrome.audio.DeviceType.USB === "USB";

    chrome.audio.StreamType.INPUT === "INPUT";
    chrome.audio.StreamType.OUTPUT === "OUTPUT";

    chrome.audio.getDevices(); // $ExpectType Promise<AudioDeviceInfo[]>
    chrome.audio.getDevices({}); // $ExpectType Promise<AudioDeviceInfo[]>
    chrome.audio.getDevices(devices => {}); // $ExpectType void
    chrome.audio.getDevices({}, devices => {}); // $ExpectType void
    // @ts-expect-error
    chrome.audio.getDevices(() => {}).then(devices => {});

    chrome.audio.getMute("INPUT"); // $ExpectType Promise<boolean>
    chrome.audio.getMute("INPUT", value => {}); // $ExpectType void
    // @ts-expect-error
    chrome.audio.getMute("INPUT", value => {}).then(value => {});

    chrome.audio.setActiveDevices({}); // $ExpectType Promise<void>
    chrome.audio.setActiveDevices({}, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.audio.setActiveDevices(() => {}).then(() => {});

    chrome.audio.setMute("INPUT", true); // $ExpectType Promise<void>
    chrome.audio.setMute("INPUT", true, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.audio.setMute("INPUT", true, () => {}).then(() => {});

    chrome.audio.setProperties("INPUT", {}); // $ExpectType Promise<void>
    chrome.audio.setProperties("INPUT", {}, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.audio.setProperties("INPUT", {}, () => {}).then(() => {});

    checkChromeEvent(chrome.audio.onDeviceListChanged, (devices) => {
        devices; // $ExpectType AudioDeviceInfo[]
    });

    checkChromeEvent(chrome.audio.onLevelChanged, (event) => {
        event; // $ExpectType LevelChangedEvent
    });

    checkChromeEvent(chrome.audio.onMuteChanged, (event) => {
        event; // $ExpectType MuteChangedEvent
    });
}

// https://developer.chrome.com/docs/extensions/reference/bookmarks
async function testBookmarksForPromise() {
    await chrome.bookmarks.search("query1");
    await chrome.bookmarks.search({});
    await chrome.bookmarks.getTree();
    await chrome.bookmarks.getRecent(0);
    await chrome.bookmarks.get("id1");
    await chrome.bookmarks.get(["id1"]);
    await chrome.bookmarks.create({});
    await chrome.bookmarks.move("id1", {});
    await chrome.bookmarks.update("id1", {});
    await chrome.bookmarks.remove("id1");
    await chrome.bookmarks.getChildren("id1");
    await chrome.bookmarks.getSubTree("id1");
    await chrome.bookmarks.removeTree("id1");
}

// https://developer.chrome.com/docs/extensions/reference/browserAction
async function testBrowserActionForPromise() {
    await chrome.browserAction.enable(0);
    await chrome.browserAction.setBadgeBackgroundColor({ color: "color1" });
    await chrome.browserAction.setBadgeText({});
    await chrome.browserAction.setTitle({ title: "title1" });
    await chrome.browserAction.getBadgeText({});
    await chrome.browserAction.setPopup({ popup: "popup1" });
    await chrome.browserAction.disable(0);
    await chrome.browserAction.getTitle({});
    await chrome.browserAction.getBadgeBackgroundColor({});
    await chrome.browserAction.getPopup({});
}

// https://developer.chrome.com/docs/extensions/reference/api/cookies
async function testCookie() {
    const cookieDetails: chrome.cookies.CookieDetails = {
        url: "https://example.com",
        name: "example",
        partitionKey: {
            topLevelSite: "https://example.com",
            hasCrossSiteAncestor: false,
        },
    };

    chrome.cookies.get(cookieDetails); // $ExpectType Promise<Cookie | null>
    chrome.cookies.get(cookieDetails, (cookie) => {
        cookie; // $ExpectType Cookie | null
    });
    // @ts-expect-error
    chrome.cookies.get(cookieDetails, () => {}).then(() => {});

    chrome.cookies.getAll(cookieDetails); // $ExpectType Promise<Cookie[]>
    chrome.cookies.getAll(cookieDetails, (cookies) => {
        cookies; // $ExpectType Cookie[]
    });
    // @ts-expect-error
    chrome.cookies.getAll(cookieDetails, () => {}).then(() => {});

    chrome.cookies.getAllCookieStores(); // $ExpectType Promise<CookieStore[]>
    chrome.cookies.getAllCookieStores((cookieStores) => {
        cookieStores; // $ExpectType CookieStore[]
    });
    // @ts-expect-error
    chrome.cookies.getAllCookieStores(() => {}).then(() => {});

    const frameDetails: chrome.cookies.FrameDetails = {
        tabId: 0,
    };

    chrome.cookies.getPartitionKey(frameDetails); // $ExpectType Promise<{ partitionKey: CookiePartitionKey }>
    chrome.cookies.getPartitionKey(frameDetails, ({ partitionKey }) => {
        partitionKey; // $ExpectType CookiePartitionKey
    });
    // @ts-expect-error
    chrome.cookies.getPartitionKey(frameDetails, () => {}).then(() => {});

    chrome.cookies.remove(cookieDetails); // $ExpectType Promise<CookieDetails>
    chrome.cookies.remove(cookieDetails, (details) => {
        details; // $ExpectType CookieDetails
    });
    // @ts-expect-error
    chrome.cookies.remove(cookieDetails, () => {}).then(() => {});

    chrome.cookies.set(cookieDetails); // $ExpectType Promise<Cookie | null>
    chrome.cookies.set(cookieDetails, (cookie) => {
        cookie; // $ExpectType Cookie | null
    });
    // @ts-expect-error
    chrome.cookies.set(cookieDetails, () => {}).then(() => {});

    checkChromeEvent(chrome.cookies.onChanged, (changeInfo) => {
        changeInfo; // $ExpectType CookieChangeInfo
    });
}

// https://developer.chrome.com/docs/extensions/reference/management
async function testManagementForPromise() {
    await chrome.management.setEnabled("id1", true);
    await chrome.management.getPermissionWarningsById("id1");
    await chrome.management.get("id1");
    await chrome.management.getAll();
    await chrome.management.getPermissionWarningsByManifest("manifestStr1");
    await chrome.management.launchApp("id1");
    await chrome.management.uninstall("id1");
    await chrome.management.uninstall("id1", {});
    await chrome.management.getSelf();
    await chrome.management.uninstallSelf({});
    await chrome.management.uninstallSelf();
    await chrome.management.createAppShortcut("id1");
    await chrome.management.setLaunchType("id1", "launchType1");
    await chrome.management.generateAppForLink("url1", "title1");
}

// https://developer.chrome.com/docs/extensions/reference/api/scripting
async function testScripting() {
    chrome.scripting.ExecutionWorld.ISOLATED === "ISOLATED";
    chrome.scripting.ExecutionWorld.MAIN === "MAIN";

    chrome.scripting.StyleOrigin.AUTHOR === "AUTHOR";
    chrome.scripting.StyleOrigin.USER === "USER";

    const target: chrome.scripting.InjectionTarget = {
        tabId: 0,
    };

    chrome.scripting.executeScript({ target, func: () => {} }); // $ExpectType Promise<InjectionResult<void>[]>
    chrome.scripting.executeScript({ target, func: () => {}, args: [] }); // $ExpectType Promise<InjectionResult<void>[]>
    chrome.scripting.executeScript({ target, func: (str: string) => {}, args: [""] }); // $ExpectType Promise<InjectionResult<void>[]>
    chrome.scripting.executeScript({ target, func: (str: string, n: number) => {}, args: ["", 0] }); // $ExpectType Promise<InjectionResult<void>[]>
    chrome.scripting.executeScript({ target, func: () => {} }); // $ExpectType Promise<InjectionResult<void>[]>
    chrome.scripting.executeScript({ target, func: () => 0 }); // $ExpectType Promise<InjectionResult<number>[]>
    chrome.scripting.executeScript({ target, func: () => "" }); // $ExpectType Promise<InjectionResult<string>[]>
    chrome.scripting.executeScript({ target, func: (str: string, n: number) => {}, args: ["", 0] }); // $ExpectType Promise<InjectionResult<void>[]>
    chrome.scripting.executeScript({ target, func: (str: string, n: number) => 0, args: ["", 0] }); // $ExpectType Promise<InjectionResult<number>[]>
    chrome.scripting.executeScript({ target, func: (str: string, n: number) => "", args: ["", 0] }); // $ExpectType Promise<InjectionResult<string>[]>
    chrome.scripting.executeScript({ target, func: async () => {} }); // $ExpectType Promise<InjectionResult<void>[]>
    chrome.scripting.executeScript({ target, func: async () => 0 }); // $ExpectType Promise<InjectionResult<number>[]>
    chrome.scripting.executeScript({ target, func: async () => "" }); // $ExpectType Promise<InjectionResult<string>[]>
    chrome.scripting.executeScript({ target, func: async (str: string, n: number) => {}, args: ["", 0] }); // $ExpectType Promise<InjectionResult<void>[]>
    chrome.scripting.executeScript({ target, func: async (str: string, n: number) => 0, args: ["", 0] }); // $ExpectType Promise<InjectionResult<number>[]>
    chrome.scripting.executeScript({ target, func: async (str: string, n: number) => "", args: ["", 0] }); // $ExpectType Promise<InjectionResult<string>[]>
    chrome.scripting.executeScript({ target, world: "ISOLATED", injectImmediately: true, func: () => {} }); // $ExpectType Promise<InjectionResult<void>[]>
    chrome.scripting.executeScript( // $ExpectType void
        { target, world: "ISOLATED", injectImmediately: true, func: () => {} },
        (results) => {
            results; // $ExpectType InjectionResult<void>[]
        },
    );
    chrome.scripting.executeScript({ target, files: ["script.js"] }); // $ExpectType Promise<InjectionResult<unknown>[]
    chrome.scripting.executeScript({ target, files: ["script.js"] }, (results) => { // $ExpectType void
        results; // $ExpectType InjectionResult<unknown>[]
    });
    // @ts-expect-error Exactly one of 'func' and 'files' must be specified.
    chrome.scripting.executeScript({ target });
    // @ts-expect-error Exactly one of 'func' and 'files' must be specified.
    chrome.scripting.executeScript({ target, func: () => {}, files: [] });
    // @ts-expect-error 'args' may not be used with file injections.
    chrome.scripting.executeScript({ target, files: [], args: [] });
    // @ts-expect-error Cannot specify both 'frameIds' and 'documentIds'.
    chrome.scripting.executeScript({ target: { tabId: 0, frameIds: [], documentIds: [] }, func: () => {} });
    chrome.scripting.executeScript({
        // @ts-expect-error Cannot specify 'allFrames' if either 'frameIds' or 'documentIds' is specified.
        target: { tabId: 0, allFrames: true, frameIds: [], documentIds: [] },
        func: () => {},
    });
    // @ts-expect-error
    chrome.scripting.executeScript({ target, func: (str: string, n: number) => {}, args: [0, ""] });
    // @ts-expect-error
    chrome.scripting.executeScript({ target, func: (str: string) => {}, args: [0] });
    // @ts-expect-error
    chrome.scripting.executeScript({ target, func: () => {}, args: [""] });
    // @ts-expect-error
    chrome.scripting.executeScript({ target, func: (name: string) => {}, args: [] });
    // @ts-expect-error
    chrome.scripting.executeScript({ target, func: () => {}, args: {} });

    const contentScriptFilter: chrome.scripting.ContentScriptFilter = {
        ids: ["id1", "id2"],
    };

    const registeredContentScript: chrome.scripting.RegisteredContentScript = {
        allFrames: true,
        css: ["style.css"],
        excludeMatches: [],
        id: "id",
        js: ["script.js"],
        matchOriginAsFallback: true,
        matches: ["*://*.example.com/*"],
        persistAcrossSessions: true,
        runAt: "document_start",
        world: "ISOLATED",
    };

    chrome.scripting.getRegisteredContentScripts(); // $ExpectType Promise<RegisteredContentScript[]>
    chrome.scripting.getRegisteredContentScripts(contentScriptFilter); // $ExpectType Promise<RegisteredContentScript[]>
    chrome.scripting.getRegisteredContentScripts((scripts) => { // $ExpectType void
        scripts; // $ExpectType RegisteredContentScript[]
    });
    chrome.scripting.getRegisteredContentScripts(contentScriptFilter, (scripts) => { // $ExpectType void
        scripts; // $ExpectType RegisteredContentScript[]
    });
    // @ts-expect-error
    chrome.scripting.getRegisteredContentScripts(() => {}).then(() => {});

    chrome.scripting.insertCSS({ target, css: "styles" }); // $ExpectType Promise<void>
    chrome.scripting.insertCSS({ target, files: ["styles.css"] }); // $ExpectType Promise<void>
    chrome.scripting.insertCSS({ target, css: "styles" }, () => {}); // $ExpectType void
    chrome.scripting.insertCSS({ target, files: ["styles.css"] }, () => {}); // $ExpectType void
    // @ts-expect-error Exactly one of 'css' and 'files' must be specified.
    chrome.scripting.insertCSS({ target });
    // @ts-expect-error Exactly one of 'css' and 'files' must be specified.
    chrome.scripting.insertCSS({ target, css: "styles", files: [] });
    // @ts-expect-error Cannot specify both 'frameIds' and 'documentIds'.
    chrome.scripting.insertCSS({ target: { tabId: 0, frameIds: [], documentIds: [] }, css: "styles" });
    // @ts-expect-error Cannot specify 'allFrames' if either 'frameIds' or 'documentIds' is specified.
    chrome.scripting.insertCSS({ target: { tabId: 0, allFrames: true, frameIds: [], documentIds: [] }, css: "styles" });
    // @ts-expect-error
    chrome.scripting.insertCSS({ target }, () => {}).then(() => {});

    chrome.scripting.registerContentScripts([registeredContentScript]); // $ExpectType Promise<void>
    chrome.scripting.registerContentScripts([registeredContentScript], () => {}); // $ExpectType void
    // @ts-expect-error must specify at least one js or css file.
    chrome.scripting.registerContentScripts([{ id: "id", matches: ["*://*.example.com/*"] }], () => {});
    // @ts-expect-error
    chrome.scripting.registerContentScripts([], () => {}).then(() => {});

    chrome.scripting.removeCSS({ target, css: "styles" }); // $ExpectType Promise<void>
    chrome.scripting.removeCSS({ target, files: ["styles.css"] }); // $ExpectType Promise<void>
    chrome.scripting.removeCSS({ target, css: "styles" }, () => {}); // $ExpectType void
    chrome.scripting.removeCSS({ target, files: ["styles.css"] }, () => {}); // $ExpectType void
    // @ts-expect-error Exactly one of 'css' and 'files' must be specified.
    chrome.scripting.removeCSS({ target });
    // @ts-expect-error Exactly one of 'css' and 'files' must be specified.
    chrome.scripting.removeCSS({ target, css: "styles", files: [] });
    // @ts-expect-error Cannot specify both 'frameIds' and 'documentIds'.
    chrome.scripting.removeCSS({ target: { tabId: 0, frameIds: [], documentIds: [] }, css: "styles" });
    // @ts-expect-error Cannot specify 'allFrames' if either 'frameIds' or 'documentIds' is specified.
    chrome.scripting.removeCSS({ target: { tabId: 0, allFrames: true, frameIds: [], documentIds: [] }, css: "styles" });
    // @ts-expect-error
    chrome.scripting.removeCSS({ target }, () => {}).then(() => {});

    chrome.scripting.unregisterContentScripts(); // $ExpectType Promise<void>
    chrome.scripting.unregisterContentScripts(contentScriptFilter); // $ExpectType Promise<void>
    chrome.scripting.unregisterContentScripts(() => {}); // $ExpectType void
    chrome.scripting.unregisterContentScripts(contentScriptFilter, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.scripting.unregisterContentScripts(() => {}).then(() => {});

    chrome.scripting.updateContentScripts([registeredContentScript]); // $ExpectType Promise<void>
    chrome.scripting.updateContentScripts([registeredContentScript], () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.scripting.updateContentScripts([], () => {}).then(() => {});
}

// https://developer.chrome.com/docs/extensions/reference/system_cpu
async function testSystemCpuForPromise() {
    await chrome.system.cpu.getInfo();
}

// https://developer.chrome.com/docs/extensions/reference/system_storage
async function testSystemStorageForPromise() {
    await chrome.system.storage.getInfo();
    await chrome.system.storage.ejectDevice("id1");
    await chrome.system.storage.getAvailableCapacity("id1");
}

// https://developer.chrome.com/docs/extensions/reference/api/system/display
async function testSystemDisplay() {
    chrome.system.display.ActiveState.ACTIVE === "active";
    chrome.system.display.ActiveState.INACTIVE === "inactive";

    chrome.system.display.LayoutPosition.BOTTOM === "bottom";
    chrome.system.display.LayoutPosition.LEFT === "left";
    chrome.system.display.LayoutPosition.RIGHT === "right";
    chrome.system.display.LayoutPosition.TOP === "top";

    chrome.system.display.MirrorMode.MIXED === "mixed";
    chrome.system.display.MirrorMode.NORMAL === "normal";
    chrome.system.display.MirrorMode.OFF === "off";

    chrome.system.display.clearTouchCalibration("id"); // $ExpectType void

    const point = { x: 0, y: 0 };
    const touchCalibrationPair = { displayPoint: point, touchPoint: point };
    const touchCalibrationPairs = {
        pair1: touchCalibrationPair,
        pair2: touchCalibrationPair,
        pair3: touchCalibrationPair,
        pair4: touchCalibrationPair,
    };
    const bound = { left: 0, top: 0, width: 0, height: 0 };
    chrome.system.display.completeCustomTouchCalibration(touchCalibrationPairs, bound); // $ExpectType void

    chrome.system.display.enableUnifiedDesktop(true); // $ExpectType void
    chrome.system.display.enableUnifiedDesktop(false); // $ExpectType void

    chrome.system.display.getDisplayLayout(); // $ExpectType Promise<DisplayLayout[]>
    chrome.system.display.getDisplayLayout((layouts) => { // $ExpectType void
        layouts; // $ExpectType DisplayLayout[]
    });
    // @ts-expect-error
    chrome.printing.getPrinterInfo(() => {}).then(() => {});

    const flags = { singleUnified: true };
    chrome.system.display.getInfo(); // $ExpectType Promise<DisplayUnitInfo[]>
    chrome.system.display.getInfo((displayInfo) => { // $ExpectType void
        displayInfo; // $ExpectType DisplayUnitInfo[]
    });
    chrome.system.display.getInfo(flags); // $ExpectType Promise<DisplayUnitInfo[]>
    chrome.system.display.getInfo(flags, (displayInfo) => { // $ExpectType void
        displayInfo; // $ExpectType DisplayUnitInfo[]
    });
    // @ts-expect-error
    chrome.system.display.getInfo(() => {}).then(() => {});

    const insets = { left: 0, top: 0, right: 0, bottom: 0 };
    chrome.system.display.overscanCalibrationAdjust("id", insets); // $ExpectType void

    chrome.system.display.overscanCalibrationComplete("id"); // $ExpectType void

    chrome.system.display.overscanCalibrationReset("id"); // $ExpectType void

    chrome.system.display.overscanCalibrationStart("id"); // $ExpectType void

    const displayLayout = {
        id: "id",
        parentId: "parentId",
        position: "top",
        offset: 0,
    } as const;
    chrome.system.display.setDisplayLayout([displayLayout]); // $ExpectType Promise<void>
    chrome.system.display.setDisplayLayout([displayLayout], () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.system.display.setDisplayLayout([displayLayout], () => {}).then(() => {});

    const displayProperties = {
        isUnified: true,
        mirroringSourceId: "",
        isPrimary: true,
        overscan: insets,
        rotation: 90,
        boundsOriginX: 0,
        boundsOriginY: 0,
        displayZoomFactor: 0,
    } as const;
    chrome.system.display.setDisplayProperties("id", displayProperties); // $ExpectType Promise<void>
    chrome.system.display.setDisplayProperties("id", displayProperties, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.system.display.setDisplayProperties("id", displayProperties, () => {}).then(() => {});

    const mirrorModeInfo = {
        mode: "off",
    } as const;
    chrome.system.display.setMirrorMode(mirrorModeInfo); // $ExpectType Promise<void>
    chrome.system.display.setMirrorMode(mirrorModeInfo, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.system.display.setMirrorMode(mirrorModeInfo, () => {}).then(() => {});

    chrome.system.display.showNativeTouchCalibration("id"); // $ExpectType Promise<boolean>
    chrome.system.display.showNativeTouchCalibration("id", (success) => { // $ExpectType void
        success; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.system.display.showNativeTouchCalibration("id", () => {}).then(() => {});

    chrome.system.display.startCustomTouchCalibration("id"); // $ExpectType void

    checkChromeEvent(chrome.system.display.onDisplayChanged, () => void 0);
}

// https://developer.chrome.com/docs/extensions/reference/api/systemLog
function testSystemLog() {
    chrome.systemLog.add({ message: "" }); // $ExpectType Promise<void>
    chrome.systemLog.add({ message: "" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.systemLog.add({ message: "" }, () => {}).then(() => {});
}

// https://developer.chrome.com/docs/extensions/reference/api/tabs
async function testTabs() {
    chrome.tabs.MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND === 2;

    chrome.tabs.MutedInfoReason.CAPTURE === "capture";
    chrome.tabs.MutedInfoReason.EXTENSION === "extension";
    chrome.tabs.MutedInfoReason.USER === "user";

    chrome.tabs.TAB_ID_NONE === -1;

    chrome.tabs.TAB_INDEX_NONE === -1;

    chrome.tabs.TabStatus.COMPLETE === "complete";
    chrome.tabs.TabStatus.LOADING === "loading";
    chrome.tabs.TabStatus.UNLOADED === "unloaded";

    chrome.tabs.WindowType.APP === "app";
    chrome.tabs.WindowType.DEVTOOLS === "devtools";
    chrome.tabs.WindowType.NORMAL === "normal";
    chrome.tabs.WindowType.PANEL === "panel";
    chrome.tabs.WindowType.POPUP === "popup";

    chrome.tabs.ZoomSettingsMode.AUTOMATIC === "automatic";
    chrome.tabs.ZoomSettingsMode.DISABLED === "disabled";
    chrome.tabs.ZoomSettingsMode.MANUAL === "manual";

    chrome.tabs.ZoomSettingsScope.PER_ORIGIN === "per-origin";
    chrome.tabs.ZoomSettingsScope.PER_TAB === "per-tab";

    const tabId = 0;
    const windowId = 0;
    const groupId = 0;
    const frameId = 0;
    const documentId = "id";

    const windowCaptureOptions: chrome.extensionTypes.ImageDetails = {
        quality: 100,
        format: "jpeg",
    };

    chrome.tabs.captureVisibleTab(); // $ExpectType Promise<string>
    chrome.tabs.captureVisibleTab(windowId); // $ExpectType Promise<string>
    chrome.tabs.captureVisibleTab(windowCaptureOptions); // $ExpectType Promise<string>
    chrome.tabs.captureVisibleTab(windowId, windowCaptureOptions); // $ExpectType Promise<string>
    chrome.tabs.captureVisibleTab((dataUrl) => {
        dataUrl; // $ExpectType string
    });
    chrome.tabs.captureVisibleTab(windowId, (dataUrl) => { // $ExpectType void
        dataUrl; // $ExpectType string
    });
    chrome.tabs.captureVisibleTab(windowCaptureOptions, (dataUrl) => { // $ExpectType void
        dataUrl; // $ExpectType string
    });
    chrome.tabs.captureVisibleTab(windowId, windowCaptureOptions, (dataUrl) => { // $ExpectType void
        dataUrl; // $ExpectType string
    });
    // @ts-expect-error
    chrome.tabs.captureVisibleTab(windowCaptureOptions, windowId);
    // @ts-expect-error
    chrome.tabs.captureVisibleTab(() => {}).then(() => {});

    const connectInfo: chrome.tabs.ConnectInfo = {
        name: "name",
        frameId,
    };

    chrome.tabs.connect(tabId); // $ExpectType Port
    chrome.tabs.connect(tabId, connectInfo); // $ExpectType Port

    const createProperties: chrome.tabs.CreateProperties = {
        active: true,
        index: 0,
        openerTabId: tabId,
        pinned: true,
        selected: true,
        url: "url",
        windowId,
    };

    chrome.tabs.create(createProperties); // $ExpectType Promise<Tab>
    chrome.tabs.create(createProperties, (tab) => { // $ExpectType void
        tab; // $ExpectType Tab
    });
    // @ts-expect-error
    chrome.tabs.create(() => {}).then(() => {});

    chrome.tabs.detectLanguage(); // $ExpectType Promise<string>
    chrome.tabs.detectLanguage(tabId); // $ExpectType Promise<string>
    chrome.tabs.detectLanguage((language) => { // $ExpectType void
        language; // $ExpectType string
    });
    chrome.tabs.detectLanguage(tabId, (language) => {
        language; // $ExpectType string
    });
    // @ts-expect-error
    chrome.tabs.detectLanguage(() => {}).then(() => {});

    chrome.tabs.discard(); // $ExpectType Promise<Tab | undefined>
    chrome.tabs.discard(tabId); // $ExpectType Promise<Tab | undefined>
    chrome.tabs.discard((tab) => { // $ExpectType void
        tab; // $ExpectType Tab | undefined
    });
    chrome.tabs.discard(tabId, (tab) => { // $ExpectType void
        tab; // $ExpectType Tab | undefined
    });
    // @ts-expect-error
    chrome.tabs.discard(() => {}).then(() => {});

    chrome.tabs.duplicate(tabId); // $ExpectType Promise<Tab | undefined>
    chrome.tabs.duplicate(tabId, (tab) => {
        tab; // $ExpectType Tab | undefined
    });
    // @ts-expect-error
    chrome.tabs.duplicate(() => {}).then(() => {});

    chrome.tabs.get(tabId); // $ExpectType Promise<Tab>
    chrome.tabs.get(tabId, (tab) => { // $ExpectType void
        tab; // $ExpectType Tab
    });
    // @ts-expect-error
    chrome.tabs.get(() => {}).then(() => {});

    chrome.tabs.getCurrent(); // $ExpectType Promise<Tab | undefined>
    chrome.tabs.getCurrent((tab) => { // $ExpectType void
        tab; // $ExpectType Tab | undefined
    });
    // @ts-expect-error
    chrome.tabs.getCurrent(() => {}).then(() => {});

    chrome.tabs.getZoom(); // $ExpectType Promise<number>
    chrome.tabs.getZoom(tabId); // $ExpectType Promise<number>
    chrome.tabs.getZoom((zoomFactor) => { // $ExpectType void
        zoomFactor; // $ExpectType number
    });
    chrome.tabs.getZoom(tabId, (zoomFactor) => { // $ExpectType void
        zoomFactor; // $ExpectType number
    });
    // @ts-expect-error
    chrome.tabs.getZoom(() => {}).then(() => {});

    chrome.tabs.getZoomSettings(); // $ExpectType Promise<ZoomSettings>
    chrome.tabs.getZoomSettings(tabId); // $ExpectType Promise<ZoomSettings>
    chrome.tabs.getZoomSettings((zoomSettings) => { // $ExpectType void
        zoomSettings; // $ExpectType ZoomSettings
    });
    chrome.tabs.getZoomSettings(tabId, (zoomSettings) => { // $ExpectType void
        zoomSettings; // $ExpectType ZoomSettings
    });
    // @ts-expect-error
    chrome.tabs.getZoomSettings(() => {}).then(() => {});

    chrome.tabs.goBack(); // $ExpectType Promise<void>
    chrome.tabs.goBack(tabId); // $ExpectType Promise<void>
    chrome.tabs.goBack(() => {}); // $ExpectType void
    chrome.tabs.goBack(tabId, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.tabs.goBack(() => {}).then(() => {});

    chrome.tabs.goForward(); // $ExpectType Promise<void>
    chrome.tabs.goForward(tabId); // $ExpectType Promise<void>
    chrome.tabs.goForward(() => {}); // $ExpectType void
    chrome.tabs.goForward(tabId, () => {}); // $ExpectType void

    const groupOptions: chrome.tabs.GroupOptions = {
        createProperties: {
            windowId,
        },
        groupId,
        tabIds: [tabId],
    };

    chrome.tabs.group(groupOptions); // $ExpectType Promise<number>
    chrome.tabs.group(groupOptions, (groupId) => { // $ExpectType void
        groupId; // $ExpectType number
    });
    // @ts-expect-error Value did not match any choice.
    chrome.tabs.group({ tabIds: [] });
    // @ts-expect-error
    chrome.tabs.group(() => {}).then(() => {});

    const highlightInfo: chrome.tabs.HighlightInfo = {
        windowId,
        tabs: [tabId],
    };

    chrome.tabs.highlight(highlightInfo); // $ExpectType Promise<Window>
    chrome.tabs.highlight(highlightInfo, (window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    // @ts-expect-error
    chrome.tabs.highlight(() => {}).then(() => {});

    const moveProperties: chrome.tabs.MoveProperties = {
        index: 0,
        windowId,
    };

    chrome.tabs.move(tabId, moveProperties); // $ExpectType Promise<Tab>
    chrome.tabs.move([tabId], moveProperties); // $ExpectType Promise<Tab[]>
    chrome.tabs.move(tabId, moveProperties, (tab) => { // $ExpectType void
        tab; // $ExpectType Tab
    });
    chrome.tabs.move([tabId], moveProperties, (tabs) => {
        tabs; // $ExpectType Tab[]
    });
    // @ts-expect-error
    chrome.tabs.move(() => {}).then(() => {});

    const queryInfo: chrome.tabs.QueryInfo = {
        active: true,
        audible: true,
        autoDiscardable: true,
        currentWindow: true,
        discarded: true,
        frozen: true,
        groupId,
        highlighted: true,
        index: 0,
        lastFocusedWindow: true,
        muted: true,
        pinned: true,
        status: "complete",
        title: "title",
        url: "url",
        windowId,
        windowType: "normal",
    };

    chrome.tabs.query(queryInfo); // $ExpectType Promise<Tab[]>
    chrome.tabs.query(queryInfo, (tabs) => { // $ExpectType void
        tabs; // $ExpectType Tab[]
    });
    // @ts-expect-error
    chrome.tabs.query(() => {}).then(() => {});

    const reloadProperties: chrome.tabs.ReloadProperties = {
        bypassCache: true,
    };

    chrome.tabs.reload(); // $ExpectType Promise<void>
    chrome.tabs.reload(tabId); // $ExpectType Promise<void>
    chrome.tabs.reload(reloadProperties); // $ExpectType Promise<void>
    chrome.tabs.reload(tabId, reloadProperties); // $ExpectType Promise<void>
    chrome.tabs.reload(tabId, () => {}); // $ExpectType void
    chrome.tabs.reload(reloadProperties, () => {}); // $ExpectType void
    chrome.tabs.reload(tabId, reloadProperties, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.tabs.reload(() => {}).then(() => {});

    chrome.tabs.remove(tabId); // $ExpectType Promise<void>
    chrome.tabs.remove([tabId]); // $ExpectType Promise<void>
    chrome.tabs.remove(tabId, () => {}); // $ExpectType void
    chrome.tabs.remove([tabId], () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.tabs.remove(() => {}).then(() => {});

    const message = "Hello World";

    chrome.tabs.sendMessage(tabId, message); // $ExpectType Promise<any>
    chrome.tabs.sendMessage(tabId, message, { frameId }); // $ExpectType Promise<any>
    chrome.tabs.sendMessage(tabId, message, { documentId }); // $ExpectType Promise<any>
    chrome.tabs.sendMessage(tabId, message, (response) => { // $ExpectType void
        response; // $ExpectType any
    });
    chrome.tabs.sendMessage(tabId, message, { frameId }, (response) => { // $ExpectType void
        response; // $ExpectType any
    });
    chrome.tabs.sendMessage(tabId, message, { documentId }, (response) => { // $ExpectType void
        response; // $ExpectType any
    });
    chrome.tabs.sendMessage<string, number>(tabId, message); // $ExpectType Promise<number>
    chrome.tabs.sendMessage<string, number>(tabId, message, (response) => { // $ExpectType void
        response; // $ExpectType number
    });
    // @ts-expect-error message should be a number
    chrome.tabs.sendMessage<number>(tabId, message);
    // @ts-expect-error
    chrome.tabs.sendMessage(() => {}).then(() => {});

    const zoomFactor = 2;

    chrome.tabs.setZoom(zoomFactor); // $ExpectType Promise<void>
    chrome.tabs.setZoom(tabId, zoomFactor); // $ExpectType Promise<void>
    chrome.tabs.setZoom(zoomFactor, () => {}); // $ExpectType void
    chrome.tabs.setZoom(tabId, zoomFactor, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.tabs.setZoom(() => {}).then(() => {});

    const zoomSettings: chrome.tabs.ZoomSettings = {
        mode: "automatic",
        scope: "per-origin",
        defaultZoomFactor: 1,
    };

    chrome.tabs.setZoomSettings(zoomSettings); // $ExpectType Promise<void>
    chrome.tabs.setZoomSettings(tabId, zoomSettings); // $ExpectType Promise<void>
    chrome.tabs.setZoomSettings(zoomSettings, () => {}); // $ExpectType void
    chrome.tabs.setZoomSettings(tabId, zoomSettings, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.tabs.setZoomSettings(() => {}).then(() => {});

    chrome.tabs.ungroup(tabId); // $ExpectType Promise<void>
    chrome.tabs.ungroup([tabId]); // $ExpectType Promise<void>
    chrome.tabs.ungroup(tabId, () => {}); // $ExpectType void
    chrome.tabs.ungroup([tabId], () => {}); // $ExpectType void
    // @ts-expect-error Value did not match any choice.
    chrome.tabs.ungroup([]);
    // @ts-expect-error
    chrome.tabs.ungroup(() => {}).then(() => {});

    const updateProperties: chrome.tabs.UpdateProperties = {
        active: true,
        autoDiscardable: true,
        highlighted: true,
        muted: true,
        openerTabId: tabId,
        pinned: true,
        url: "url",
    };

    chrome.tabs.update(updateProperties); // $ExpectType Promise<Tab | undefined>
    chrome.tabs.update(tabId, updateProperties); // $ExpectType Promise<Tab | undefined>
    chrome.tabs.update(updateProperties, (tab) => { // $ExpectType void
        tab; // $ExpectType Tab | undefined
    });
    chrome.tabs.update(tabId, updateProperties, (tab) => { // $ExpectType void
        tab; // $ExpectType Tab | undefined
    });
    // @ts-expect-error
    chrome.tabs.update(() => {}).then(() => {});

    checkChromeEvent(chrome.tabs.onActivated, (activeInfo) => {
        activeInfo.tabId; // $ExpectType number
        activeInfo.windowId; // $ExpectType number
    });

    checkChromeEvent(chrome.tabs.onAttached, (tabId, attachInfo) => {
        tabId; // $ExpectType number
        attachInfo.newPosition; // $ExpectType number
        attachInfo.newWindowId; // $ExpectType number
    });

    checkChromeEvent(chrome.tabs.onCreated, (tab) => {
        tab; // $ExpectType Tab
    });

    checkChromeEvent(chrome.tabs.onDetached, (tabId, detachInfo) => {
        tabId; // $ExpectType number
        detachInfo.oldPosition; // $ExpectType number
        detachInfo.oldWindowId; // $ExpectType number
    });

    checkChromeEvent(chrome.tabs.onHighlighted, (highlightInfo) => {
        highlightInfo.tabIds; // $ExpectType number[]
        highlightInfo.windowId; // $ExpectType number
    });

    checkChromeEvent(chrome.tabs.onMoved, (tabId, moveInfo) => {
        tabId; // $ExpectType number
        moveInfo.fromIndex; // $ExpectType number
        moveInfo.toIndex; // $ExpectType number
        moveInfo.windowId; // $ExpectType number
    });

    checkChromeEvent(chrome.tabs.onRemoved, (tabId, removeInfo) => {
        tabId; // $ExpectType number
        removeInfo.isWindowClosing; // $ExpectType boolean
        removeInfo.windowId; // $ExpectType number
    });

    checkChromeEvent(chrome.tabs.onReplaced, (addedTabId, removedTabId) => {
        addedTabId; // $ExpectType number
        removedTabId; // $ExpectType number
    });

    checkChromeEvent(chrome.tabs.onUpdated, (tabId, changeInfo, tab) => {
        tabId; // $ExpectType number
        changeInfo.audible; // $ExpectType boolean | undefined
        changeInfo.autoDiscardable; // $ExpectType boolean | undefined
        changeInfo.discarded; // $ExpectType boolean | undefined
        changeInfo.favIconUrl; // $ExpectType string | undefined
        changeInfo.frozen; // $ExpectType boolean | undefined
        changeInfo.groupId; // $ExpectType number | undefined
        changeInfo.mutedInfo; // $ExpectType MutedInfo | undefined
        changeInfo.pinned; // $ExpectType boolean | undefined
        changeInfo.status; // $ExpectType "unloaded" | "loading" | "complete" | undefined
        changeInfo.title; // $ExpectType string | undefined
        changeInfo.url; // $ExpectType string | undefined
        tab; // $ExpectType Tab
    });

    checkChromeEvent(chrome.tabs.onZoomChange, (zoomChangeInfo) => {
        zoomChangeInfo.tabId; // $ExpectType number
        zoomChangeInfo.newZoomFactor; // $ExpectType number
        zoomChangeInfo.oldZoomFactor; // $ExpectType number
        zoomChangeInfo.zoomSettings; // $ExpectType ZoomSettings
    });

    const details: chrome.extensionTypes.InjectDetails = {
        allFrames: true,
        code: "alert('hello world');",
        cssOrigin: "author",
        file: "file.js",
        frameId,
        matchAboutBlank: true,
        runAt: "document_idle",
    };

    chrome.tabs.executeScript(details); // $ExpectType Promise<any[] | undefined>
    chrome.tabs.executeScript(tabId, details); // $ExpectType Promise<any[] | undefined>
    chrome.tabs.executeScript(details, (result) => { // $ExpectType void
        result; // $ExpectType any[] | undefined
    });
    chrome.tabs.executeScript(tabId, details, (result) => { // $ExpectType void
        result; // $ExpectType any[] | undefined
    });
    // @ts-expect-error
    chrome.tabs.executeScript(() => {}).then(() => {});

    chrome.tabs.getAllInWindow(); // $ExpectType Promise<Tab[]>
    chrome.tabs.getAllInWindow(windowId); // $ExpectType Promise<Tab[]>
    chrome.tabs.getAllInWindow((tabs) => { // $ExpectType void
        tabs; // $ExpectType Tab[]
    });
    chrome.tabs.getAllInWindow(windowId, (tabs) => { // $ExpectType void
        tabs; // $ExpectType Tab[]
    });
    // @ts-expect-error
    chrome.tabs.getAllInWindow(() => {}).then(() => {});

    chrome.tabs.getSelected(); // $ExpectType Promise<Tab>
    chrome.tabs.getSelected(windowId); // $ExpectType Promise<Tab>
    chrome.tabs.getSelected((tab) => { // $ExpectType void
        tab; // $ExpectType Tab
    });
    chrome.tabs.getSelected(windowId, (tab) => { // $ExpectType void
        tab; // $ExpectType Tab
    });
    // @ts-expect-error
    chrome.tabs.getSelected(() => {}).then(() => {});

    chrome.tabs.insertCSS(details); // $ExpectType Promise<void>
    chrome.tabs.insertCSS(tabId, details); // $ExpectType Promise<void>
    chrome.tabs.insertCSS(details, () => {}); // $ExpectType void
    chrome.tabs.insertCSS(tabId, details, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.tabs.insertCSS(() => {}).then(() => {});

    const request = "Hello World!";

    chrome.tabs.sendRequest(tabId, request); // $ExpectType Promise<any>
    chrome.tabs.sendRequest<string, string>(4, "Hello World!"); // $ExpectType Promise<string>
    chrome.tabs.sendRequest<string, number>(5, "Hello World!"); // $ExpectType Promise<number>
    chrome.tabs.sendRequest(tabId, request, (result) => { // $ExpectType void
        result; // $ExpectType any
    });
    // @ts-expect-error
    chrome.tabs.sendRequest<number>(6, "Hello World!", console.log);
    // @ts-expect-error
    chrome.tabs.sendRequest<string, string>(7, "Hello World!", (num: number) => alert(num + 1));
    // @ts-expect-error
    chrome.tabs.sendRequest(() => {}).then(() => {});

    checkChromeEvent(chrome.tabs.onActiveChanged, (tabId, selectInfo) => {
        tabId; // $ExpectType number
        selectInfo.windowId; // $ExpectType number
    });

    checkChromeEvent(chrome.tabs.onHighlightChanged, (selectInfo) => {
        selectInfo.tabIds; // $ExpectType number[]
        selectInfo.windowId; // $ExpectType number
    });

    checkChromeEvent(chrome.tabs.onSelectionChanged, (tabId, selectInfo) => {
        tabId; // $ExpectType number
        selectInfo.windowId; // $ExpectType number
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/tabGroups
async function testTabGroup() {
    chrome.tabGroups.Color.BLUE === "blue";
    chrome.tabGroups.Color.CYAN === "cyan";
    chrome.tabGroups.Color.GREEN === "green";
    chrome.tabGroups.Color.GREY === "grey";
    chrome.tabGroups.Color.ORANGE === "orange";
    chrome.tabGroups.Color.PINK === "pink";
    chrome.tabGroups.Color.PURPLE === "purple";
    chrome.tabGroups.Color.RED === "red";
    chrome.tabGroups.Color.YELLOW === "yellow";

    chrome.tabGroups.TAB_GROUP_ID_NONE === -1;

    const groupId = 1;

    chrome.tabGroups.get(groupId); // $ExpectType Promise<TabGroup>
    chrome.tabGroups.get(groupId, (group) => { // $ExpectType void
        group.collapsed; // $ExpectType boolean
        group.color; // $ExpectType "blue" | "cyan" | "green" | "grey" | "orange" | "pink" | "purple" | "red" | "yellow"
        group.id; // $ExpectType number
        group.shared; // $ExpectType boolean
        group.title; // $ExpectType string | undefined
        group.windowId; // $ExpectType number
    });
    // @ts-expect-error
    chrome.tabGroups.get(() => {}).then(() => {});

    const moveProperties: chrome.tabGroups.MoveProperties = {
        index: 0,
        windowId: 0,
    };

    chrome.tabGroups.move(groupId, moveProperties); // $ExpectType Promise<TabGroup | undefined>
    chrome.tabGroups.move(groupId, moveProperties, (group) => { // $ExpectType void
        group; // $ExpectType TabGroup | undefined
    });
    // @ts-expect-error
    chrome.tabGroups.move(() => {}).then(() => {});

    const queryInfo: chrome.tabGroups.QueryInfo = {
        collapsed: false,
        shared: false,
        title: "Test",
    };

    chrome.tabGroups.query(queryInfo); // $ExpectType Promise<TabGroup[]>
    chrome.tabGroups.query(queryInfo, (groups) => { // $ExpectType void
        groups; // $ExpectType TabGroup[]
    });
    // @ts-expect-error
    chrome.tabGroups.query(() => {}).then(() => {});

    const updateProperties: chrome.tabGroups.UpdateProperties = {
        collapsed: false,
        title: "Test",
        color: "blue",
    };

    chrome.tabGroups.update(groupId, updateProperties); // $ExpectType Promise<TabGroup | undefined>
    chrome.tabGroups.update(groupId, updateProperties, (group) => { // $ExpectType void
        group; // $ExpectType TabGroup | undefined
    });
    // @ts-expect-error
    chrome.tabGroups.update(() => {}).then(() => {});

    checkChromeEvent(chrome.tabGroups.onCreated, (group) => {
        group; // $ExpectType TabGroup
    });

    checkChromeEvent(chrome.tabGroups.onMoved, (group) => {
        group; // $ExpectType TabGroup
    });

    checkChromeEvent(chrome.tabGroups.onRemoved, (group) => {
        group; // $ExpectType TabGroup
    });

    checkChromeEvent(chrome.tabGroups.onUpdated, (group) => {
        group; // $ExpectType TabGroup
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/windows
function testWindows() {
    chrome.windows.CreateType.NORMAL === "normal";
    chrome.windows.CreateType.PANEL === "panel";
    chrome.windows.CreateType.POPUP === "popup";

    chrome.windows.WINDOW_ID_CURRENT === -2;
    chrome.windows.WINDOW_ID_NONE === -1;

    chrome.windows.WindowState.FULLSCREEN === "fullscreen";
    chrome.windows.WindowState.LOCKED_FULLSCREEN === "locked-fullscreen";
    chrome.windows.WindowState.MAXIMIZED === "maximized";
    chrome.windows.WindowState.MINIMIZED === "minimized";
    chrome.windows.WindowState.NORMAL === "normal";

    chrome.windows.WindowType.APP === "app";
    chrome.windows.WindowType.DEVTOOLS === "devtools";
    chrome.windows.WindowType.NORMAL === "normal";
    chrome.windows.WindowType.PANEL === "panel";
    chrome.windows.WindowType.POPUP === "popup";

    const createData: chrome.windows.CreateData = {
        focused: true,
        height: 100,
        incognito: true,
        left: 100,
        setSelfAsOpener: true,
        state: "maximized",
        tabId: 0,
        top: 100,
        type: "normal",
        url: "https://www.example.com",
        width: 100,
    };

    chrome.windows.create(); // $ExpectType Promise<Window | undefined>
    chrome.windows.create(createData); // $ExpectType Promise<Window | undefined>
    chrome.windows.create((window) => { // $ExpectType void
        window; // $ExpectType Window | undefined
    });
    chrome.windows.create(createData, (window) => { // $ExpectType void
        window; // $ExpectType Window | undefined
    });
    // @ts-expect-error
    chrome.windows.create(() => {}).then(() => {});

    const windowId = 0;
    const queryOptions: chrome.windows.QueryOptions = {
        populate: true,
        windowTypes: ["normal", chrome.windows.WindowType.POPUP],
    };

    chrome.windows.get(windowId); // $ExpectType Promise<Window>
    chrome.windows.get(windowId, queryOptions); // $ExpectType Promise<Window>
    chrome.windows.get(windowId, (window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    chrome.windows.get(windowId, queryOptions, (window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    // @ts-expect-error
    chrome.windows.get(() => {}).then(() => {});

    chrome.windows.getAll(); // $ExpectType Promise<Window[]>
    chrome.windows.getAll(queryOptions); // $ExpectType Promise<Window[]>
    chrome.windows.getAll((windows) => { // $ExpectType void
        windows; // $ExpectType Window[]
    });
    chrome.windows.getAll(queryOptions, (windows) => { // $ExpectType void
        windows; // $ExpectType Window[]
    });
    // @ts-expect-error
    chrome.windows.getAll(() => {}).then(() => {});

    chrome.windows.getCurrent(); // $ExpectType Promise<Window>
    chrome.windows.getCurrent(queryOptions); // $ExpectType Promise<Window>
    chrome.windows.getCurrent((window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    chrome.windows.getCurrent(queryOptions, (window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    // @ts-expect-error
    chrome.windows.getCurrent(() => {}).then(() => {});

    chrome.windows.getLastFocused(); // $ExpectType Promise<Window>
    chrome.windows.getLastFocused(queryOptions); // $ExpectType Promise<Window>
    chrome.windows.getLastFocused((window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    chrome.windows.getLastFocused(queryOptions, (window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    // @ts-expect-error
    chrome.windows.getLastFocused(() => {}).then(() => {});

    chrome.windows.remove(windowId); // $ExpectType Promise<void>
    chrome.windows.remove(windowId, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.windows.remove(() => {}).then(() => {});

    const updateInfo: chrome.windows.UpdateInfo = {
        drawAttention: true,
        focused: true,
        height: 100,
        left: 100,
        state: "maximized",
        top: 100,
        width: 100,
    };

    chrome.windows.update(windowId, updateInfo); // $ExpectType Promise<Window>
    chrome.windows.update(windowId, updateInfo, (window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    // @ts-expect-error
    chrome.windows.update(() => {}).then(() => {});

    chrome.windows.onBoundsChanged.addListener((window) => { // $ExpectType void
        window.alwaysOnTop; // $ExpectType boolean
        window.focused; // $ExpectType boolean
        window.height; // $ExpectType number | undefined
        window.id; // $ExpectType number | undefined
        window.incognito; // $ExpectType boolean
        window.left; // $ExpectType number | undefined
        window.sessionId; // $ExpectType string | undefined
        window.state; // $ExpectType "fullscreen" | "locked-fullscreen" | "maximized" | "minimized" | "normal" | undefined
        window.tabs; // $ExpectType Tab[] | undefined
        window.top; // $ExpectType number | undefined
        window.type; // $ExpectType "app" | "devtools" | "normal" | "panel" | "popup" | undefined
        window.width; // $ExpectType number | undefined
    });
    chrome.windows.onBoundsChanged.removeListener((window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    chrome.windows.onBoundsChanged.hasListener((window) => { // $ExpectType boolean
        window; // $ExpectType Window
    });
    chrome.windows.onBoundsChanged.hasListeners(); // $ExpectType boolean

    chrome.windows.onCreated.addListener((window) => { // $ExpectType void
        window.alwaysOnTop; // $ExpectType boolean
        window.focused; // $ExpectType boolean
        window.height; // $ExpectType number | undefined
        window.id; // $ExpectType number | undefined
        window.incognito; // $ExpectType boolean
        window.left; // $ExpectType number | undefined
        window.sessionId; // $ExpectType string | undefined
        window.state; // $ExpectType "fullscreen" | "locked-fullscreen" | "maximized" | "minimized" | "normal" | undefined
        window.tabs; // $ExpectType Tab[] | undefined
        window.top; // $ExpectType number | undefined
        window.type; // $ExpectType "app" | "devtools" | "normal" | "panel" | "popup" | undefined
        window.width; // $ExpectType number | undefined
    }, { windowTypes: ["normal", chrome.windows.WindowType.POPUP] });
    chrome.windows.onCreated.removeListener((window) => { // $ExpectType void
        window; // $ExpectType Window
    });
    chrome.windows.onCreated.hasListener((window) => { // $ExpectType boolean
        window; // $ExpectType Window
    });
    chrome.windows.onCreated.hasListeners(); // $ExpectType boolean

    chrome.windows.onFocusChanged.addListener((windowId) => { // $ExpectType void
        windowId; // $ExpectType number
    }, { windowTypes: ["normal", chrome.windows.WindowType.POPUP] });
    chrome.windows.onFocusChanged.removeListener((windowId) => { // $ExpectType void
        windowId; // $ExpectType number
    });
    chrome.windows.onFocusChanged.hasListener((windowId) => { // $ExpectType boolean
        windowId; // $ExpectType number
    });
    chrome.windows.onFocusChanged.hasListeners(); // $ExpectType boolean

    chrome.windows.onRemoved.addListener((windowId) => { // $ExpectType void
        windowId; // $ExpectType number
    }, { windowTypes: ["normal", chrome.windows.WindowType.POPUP] });
    chrome.windows.onRemoved.removeListener((windowId) => { // $ExpectType void
        windowId; // $ExpectType number
    });
    chrome.windows.onRemoved.hasListener((windowId) => { // $ExpectType boolean
        windowId; // $ExpectType number
    });
    chrome.windows.onRemoved.hasListeners(); // $ExpectType boolean
}

// https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest
async function testDeclarativeNetRequest() {
    chrome.declarativeNetRequest.DYNAMIC_RULESET_ID === "_dynamic";

    chrome.declarativeNetRequest.DomainType.FIRST_PARTY === "firstParty";
    chrome.declarativeNetRequest.DomainType.THIRD_PARTY === "thirdParty";

    chrome.declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL === 10;

    chrome.declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES === 30000;

    chrome.declarativeNetRequest.HeaderOperation.APPEND === "append";
    chrome.declarativeNetRequest.HeaderOperation.REMOVE === "remove";
    chrome.declarativeNetRequest.HeaderOperation.SET === "set";

    chrome.declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL === 20;

    chrome.declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES === 5000;

    chrome.declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES === 30000;

    chrome.declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS === 50;

    chrome.declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES === 1000;

    chrome.declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES === 5000;

    chrome.declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS === 100;

    chrome.declarativeNetRequest.MAX_NUMBER_OF_UNSAFE_DYNAMIC_RULES === 5000;

    chrome.declarativeNetRequest.MAX_NUMBER_OF_UNSAFE_SESSION_RULES === 5000;

    chrome.declarativeNetRequest.RequestMethod.CONNECT === "connect";
    chrome.declarativeNetRequest.RequestMethod.DELETE === "delete";
    chrome.declarativeNetRequest.RequestMethod.GET === "get";
    chrome.declarativeNetRequest.RequestMethod.HEAD === "head";
    chrome.declarativeNetRequest.RequestMethod.OPTIONS === "options";
    chrome.declarativeNetRequest.RequestMethod.OTHER === "other";
    chrome.declarativeNetRequest.RequestMethod.PATCH === "patch";
    chrome.declarativeNetRequest.RequestMethod.POST === "post";
    chrome.declarativeNetRequest.RequestMethod.PUT === "put";

    chrome.declarativeNetRequest.ResourceType.CSP_REPORT === "csp_report";
    chrome.declarativeNetRequest.ResourceType.FONT === "font";
    chrome.declarativeNetRequest.ResourceType.IMAGE === "image";
    chrome.declarativeNetRequest.ResourceType.MAIN_FRAME === "main_frame";
    chrome.declarativeNetRequest.ResourceType.MEDIA === "media";
    chrome.declarativeNetRequest.ResourceType.OBJECT === "object";
    chrome.declarativeNetRequest.ResourceType.OTHER === "other";
    chrome.declarativeNetRequest.ResourceType.PING === "ping";
    chrome.declarativeNetRequest.ResourceType.SCRIPT === "script";
    chrome.declarativeNetRequest.ResourceType.STYLESHEET === "stylesheet";
    chrome.declarativeNetRequest.ResourceType.SUB_FRAME === "sub_frame";
    chrome.declarativeNetRequest.ResourceType.WEBBUNDLE === "webbundle";
    chrome.declarativeNetRequest.ResourceType.WEBSOCKET === "websocket";
    chrome.declarativeNetRequest.ResourceType.WEBTRANSPORT === "webtransport";
    chrome.declarativeNetRequest.ResourceType.XMLHTTPREQUEST === "xmlhttprequest";

    chrome.declarativeNetRequest.RuleActionType.ALLOW === "allow";
    chrome.declarativeNetRequest.RuleActionType.ALLOW_ALL_REQUESTS === "allowAllRequests";
    chrome.declarativeNetRequest.RuleActionType.BLOCK === "block";
    chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS === "modifyHeaders";
    chrome.declarativeNetRequest.RuleActionType.REDIRECT === "redirect";
    chrome.declarativeNetRequest.RuleActionType.UPGRADE_SCHEME === "upgradeScheme";

    chrome.declarativeNetRequest.SESSION_RULESET_ID === "_session";

    chrome.declarativeNetRequest.UnsupportedRegexReason.MEMORY_LIMIT_EXCEEDED === "memoryLimitExceeded";
    chrome.declarativeNetRequest.UnsupportedRegexReason.SYNTAX_ERROR === "syntaxError";

    chrome.declarativeNetRequest.getAvailableStaticRuleCount(); // $ExpectType Promise<number>
    chrome.declarativeNetRequest.getAvailableStaticRuleCount((count) => { // $ExpectType void
        count; // $ExpectType number
    });
    // @ts-expect-error
    chrome.declarativeNetRequest.getAvailableStaticRuleCount(() => {}).then(() => {});

    chrome.declarativeNetRequest.getDynamicRules(); // $ExpectType Promise<Rule[]>
    chrome.declarativeNetRequest.getDynamicRules(([rule]) => { // $ExpectType void
        rule.action; // $ExpectType RuleAction
        rule.condition; // $ExpectType RuleCondition
        rule.id; // $ExpectType number
        rule.priority; // $ExpectType number | undefined
        rule.condition.excludedResponseHeaders; // $ExpectType HeaderInfo[] | undefined
        rule.condition.responseHeaders; // $ExpectType HeaderInfo[] | undefined
    });
    // @ts-expect-error
    chrome.declarativeNetRequest.getDynamicRules(() => {}).then(() => {});

    chrome.declarativeNetRequest.getEnabledRulesets(); // $ExpectType Promise<string[]>
    chrome.declarativeNetRequest.getEnabledRulesets((rulesetIds) => { // $ExpectType void
        rulesetIds; // $ExpectType string[]
    });
    // @ts-expect-error
    chrome.declarativeNetRequest.getEnabledRulesets(() => {}).then(() => {});

    const matchedRulesFilter: chrome.declarativeNetRequest.MatchedRulesFilter = {
        tabId: 0,
        minTimeStamp: 0,
    };

    chrome.declarativeNetRequest.getMatchedRules(); // $ExpectType Promise<RulesMatchedDetails>
    chrome.declarativeNetRequest.getMatchedRules(matchedRulesFilter); // $ExpectType Promise<RulesMatchedDetails>
    chrome.declarativeNetRequest.getMatchedRules((details) => { // $ExpectType void
        details; // $ExpectType RulesMatchedDetails
    });
    chrome.declarativeNetRequest.getMatchedRules(matchedRulesFilter, (details) => { // $ExpectType void
        details; // $ExpectType RulesMatchedDetails
    });
    // @ts-expect-error
    chrome.declarativeNetRequest.getMatchedRules(() => {}).then(() => {});

    chrome.declarativeNetRequest.getSessionRules(); // $ExpectType Promise<Rule[]>
    chrome.declarativeNetRequest.getSessionRules((rules) => { // $ExpectType void
        rules; // $ExpectType Rule[]
    });
    // @ts-expect-error
    chrome.declarativeNetRequest.getSessionRules(() => {}).then(() => {});

    const regexOptions: chrome.declarativeNetRequest.RegexOptions = {
        regex: "regex1",
        isCaseSensitive: true,
        requireCapturing: true,
    };

    chrome.declarativeNetRequest.isRegexSupported(regexOptions); // $ExpectType Promise<IsRegexSupportedResult>
    chrome.declarativeNetRequest.isRegexSupported(regexOptions, (result) => { // $ExpectType void
        result; // $ExpectType IsRegexSupportedResult
    });
    // @ts-expect-error
    chrome.declarativeNetRequest.isRegexSupported(() => {}).then(() => {});

    const extensionActionOptions: chrome.declarativeNetRequest.ExtensionActionOptions = {
        displayActionCountAsBadgeText: true,
        tabUpdate: {
            increment: 1,
            tabId: 1,
        },
    };

    chrome.declarativeNetRequest.setExtensionActionOptions(extensionActionOptions); // $ExpectType Promise<void>
    chrome.declarativeNetRequest.setExtensionActionOptions(extensionActionOptions, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.declarativeNetRequest.setExtensionActionOptions(extensionActionOptions, () => {}).then(() => {});

    const testMatchRequestDetails: chrome.declarativeNetRequest.TestMatchRequestDetails = {
        type: "image",
        url: "https://example.com",
        tabId: 1,
        initiator: "https://example.com",
        method: "get",
        responseHeaders: {},
    };

    chrome.declarativeNetRequest.testMatchOutcome(testMatchRequestDetails); // $ExpectType Promise<TestMatchOutcomeResult>
    chrome.declarativeNetRequest.testMatchOutcome(testMatchRequestDetails, (result) => { // $ExpectType void
        result.matchedRules; // $ExpectType MatchedRule[]
    });
    // @ts-expect-error
    chrome.declarativeNetRequest.testMatchOutcome(testMatchRequestDetails, () => {}).then(() => {});

    const rule: chrome.declarativeNetRequest.Rule = {
        id: 1,
        priority: 1,
        action: { type: "allow", requestHeaders: [], responseHeaders: [] },
        condition: {
            domainType: "firstParty",
            excludedResourceTypes: [chrome.declarativeNetRequest.ResourceType.IMAGE, "object"],
            excludedRequestMethods: [chrome.declarativeNetRequest.RequestMethod.POST, "get"],
        },
    };

    const updateRuleOptions: chrome.declarativeNetRequest.UpdateRuleOptions = {
        addRules: [rule],
        removeRuleIds: [1, 2, 3],
    };

    chrome.declarativeNetRequest.updateDynamicRules(updateRuleOptions); // $ExpectType Promise<void>
    chrome.declarativeNetRequest.updateDynamicRules(updateRuleOptions, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.declarativeNetRequest.updateDynamicRules(updateRuleOptions, () => {}).then(() => {});

    const updateRulesetOptions: chrome.declarativeNetRequest.UpdateRulesetOptions = {
        disableRulesetIds: ["ruleset1"],
        enableRulesetIds: ["ruleset2"],
    };

    chrome.declarativeNetRequest.updateEnabledRulesets(updateRulesetOptions); // $ExpectType Promise<void>
    chrome.declarativeNetRequest.updateEnabledRulesets(updateRulesetOptions, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.declarativeNetRequest.updateEnabledRulesets(updateRulesetOptions, () => {}).then(() => {});

    chrome.declarativeNetRequest.updateSessionRules(updateRuleOptions); // $ExpectType Promise<void>
    chrome.declarativeNetRequest.updateSessionRules(updateRuleOptions, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.declarativeNetRequest.updateSessionRules(updateRuleOptions, () => {}).then(() => {});

    const updateStaticRulesOptions: chrome.declarativeNetRequest.UpdateStaticRulesOptions = {
        disableRuleIds: [1, 2, 3],
        enableRuleIds: [1, 2, 3],
        rulesetId: "ruleset1",
    };

    chrome.declarativeNetRequest.updateStaticRules(updateStaticRulesOptions); // $ExpectType Promise<void>
    chrome.declarativeNetRequest.updateStaticRules(updateStaticRulesOptions, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.declarativeNetRequest.updateStaticRules(updateStaticRulesOptions, () => {}).then(() => {});

    checkChromeEvent(chrome.declarativeNetRequest.onRuleMatchedDebug, (info) => {
        info; // $ExpectType MatchedRuleInfoDebug
    });
}

// https://developer.chrome.com/docs/extensions/reference/storage
function testStorageForPromise() {
    chrome.storage.sync.getBytesInUse().then(() => {});
    chrome.storage.sync.getBytesInUse(null).then(() => {});
    chrome.storage.sync.getBytesInUse("testKey").then(() => {});
    chrome.storage.sync.getBytesInUse(["testKey"]).then(() => {});

    chrome.storage.sync.clear().then(() => {});

    chrome.storage.sync.set({ testKey: "testValue" }).then(() => {});

    chrome.storage.sync.remove("testKey").then(() => {});
    chrome.storage.sync.remove(["testKey"]).then(() => {});

    chrome.storage.sync.get().then(() => {});
    chrome.storage.sync.get(null).then(() => {});
    chrome.storage.sync.get("testKey").then(() => {});
    chrome.storage.sync.get(["testKey"]).then(() => {});
    chrome.storage.sync.get({ testKey: "testDefaultValue" }).then(() => {});

    chrome.storage.sync.setAccessLevel({ accessLevel: chrome.storage.AccessLevel.TRUSTED_AND_UNTRUSTED_CONTEXTS }).then(
        () => {},
    );
}

function testExtensionSendRequest() {
    chrome.extension.sendRequest("dummy-id", "Hello World!");
    chrome.extension.sendRequest("dummy-id", "Hello World!", console.log);
    chrome.extension.sendRequest("dummy-id", "Hello World!", console.log);
    chrome.extension.sendRequest<string>("dummy-id", "Hello World!", console.log);
    chrome.extension.sendRequest<string, number>("dummy-id", "Hello World!", console.log);
    // @ts-expect-error
    chrome.extension.sendRequest<number>("dummy-id", "Hello World!", console.log);
    // @ts-expect-error
    chrome.extension.sendRequest<string, string>("dummy-id", "Hello World!", (num: number) => alert(num + 1));
}

// https://developer.chrome.com/docs/extensions/reference/api/contextMenus
function testContextMenus() {
    chrome.contextMenus.ContextType.ACTION === "action";
    chrome.contextMenus.ContextType.ALL === "all";
    chrome.contextMenus.ContextType.AUDIO === "audio";
    chrome.contextMenus.ContextType.BROWSER_ACTION === "browser_action";
    chrome.contextMenus.ContextType.EDITABLE === "editable";
    chrome.contextMenus.ContextType.FRAME === "frame";
    chrome.contextMenus.ContextType.IMAGE === "image";
    chrome.contextMenus.ContextType.LAUNCHER === "launcher";
    chrome.contextMenus.ContextType.LINK === "link";
    chrome.contextMenus.ContextType.PAGE === "page";
    chrome.contextMenus.ContextType.PAGE_ACTION === "page_action";
    chrome.contextMenus.ContextType.SELECTION === "selection";
    chrome.contextMenus.ContextType.VIDEO === "video";

    chrome.contextMenus.ItemType.CHECKBOX === "checkbox";
    chrome.contextMenus.ItemType.NORMAL === "normal";
    chrome.contextMenus.ItemType.RADIO === "radio";
    chrome.contextMenus.ItemType.SEPARATOR === "separator";

    chrome.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT === 6;

    const creationOptions: chrome.contextMenus.CreateProperties = {
        id: "dummy-id",
        documentUrlPatterns: ["https://*/*"],
        checked: false,
        title: "Hello World!",
        contexts: ["all"],
        enabled: true,
        targetUrlPatterns: ["https://example.com/*"],
        onclick: () => {},
        parentId: 1,
        type: "normal",
        visible: true,
    };

    chrome.contextMenus.create(creationOptions); // $ExpectType string | number
    // @ts-expect-error Error at property 'contexts': Invalid type: expected array, found string.
    chrome.contextMenus.create({ ...creationOptions, contexts: "page_action" });

    chrome.contextMenus.remove(1); // $ExpectType Promise<void>
    chrome.contextMenus.remove("1"); // $ExpectType Promise<void>
    chrome.contextMenus.remove(1, () => {}); // $ExpectType void
    chrome.contextMenus.remove("1", () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.contextMenus.remove(1, () => {}).then(() => {});

    chrome.contextMenus.removeAll(); // $ExpectType Promise<void>
    chrome.contextMenus.removeAll(() => {}); // $ExpectType void
    // @ts-expect-error
    chrome.contextMenus.removeAll(() => {}).then(() => {});

    const checkInfo = (info: chrome.contextMenus.OnClickData) => {
        info.checked; // $ExpectType boolean | undefined
        info.editable; // $ExpectType boolean
        info.frameId; // $ExpectType number | undefined
        info.frameUrl; // $ExpectType string | undefined
        info.linkUrl; // $ExpectType string | undefined
        info.mediaType; // $ExpectType "image" | "video" | "audio" | undefined
        info.menuItemId; // $ExpectType number | string
        info.pageUrl; // $ExpectType string | undefined
        info.parentMenuItemId; // $ExpectType number | string | undefined
        info.selectionText; // $ExpectType string | undefined
        info.srcUrl; // $ExpectType string | undefined
        info.wasChecked; // $ExpectType boolean | undefined
    };

    const updateProperties: Omit<chrome.contextMenus.CreateProperties, "id"> = {
        documentUrlPatterns: ["https://*/*"],
        checked: false,
        title: "Hello World!",
        contexts: ["all"],
        enabled: true,
        targetUrlPatterns: ["https://example.com/*"],
        onclick: (info, tab) => {
            checkInfo(info);
            tab; // $ExpectType Tab
        },
        parentId: 1,
        type: "normal",
        visible: true,
    };

    chrome.contextMenus.update(1, updateProperties); // $ExpectType Promise<void>
    chrome.contextMenus.update(1, updateProperties, () => {}); // $ExpectType void
    chrome.contextMenus.update("1", updateProperties); // $ExpectType Promise<void>
    chrome.contextMenus.update("1", updateProperties, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.contextMenus.update(1, updateProperties, () => {}).then(() => {});

    checkChromeEvent(chrome.contextMenus.onClicked, (info, tab) => {
        checkInfo(info);
        tab; // $ExpectType Tab | undefined
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/permissions
function testPermissions() {
    const permissions: chrome.permissions.Permissions = {
        permissions: ["tabs"],
        origins: ["https://example.com/*"],
    };

    const request: chrome.permissions.AddHostAccessRequest | chrome.permissions.RemoveHostAccessRequest = {
        documentId: "1",
        pattern: "",
        tabId: 1,
    };

    chrome.permissions.addHostAccessRequest(request); // $ExpectType Promise<void>
    chrome.permissions.addHostAccessRequest(request, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.permissions.addHostAccessRequest(request, () => {}).then(() => {});

    chrome.permissions.contains(permissions); // $ExpectType Promise<boolean>
    chrome.permissions.contains(permissions, (result: boolean) => {}); // $ExpectType void
    // @ts-expect-error
    chrome.permissions.contains(permissions, () => {}).then(() => {});
    // @ts-expect-error : 'test' is not a recognized permission.
    chrome.permissions.contains({ permissions: ["test"] });

    chrome.permissions.getAll(); // $ExpectType Promise<Permissions>
    chrome.permissions.getAll((permissions: chrome.permissions.Permissions) => {}); // $ExpectType void
    // @ts-expect-error
    chrome.permissions.getAll(() => {}).then(() => {});

    chrome.permissions.request(permissions); // $ExpectType Promise<boolean>
    chrome.permissions.request(permissions, (granted: boolean) => {}); // $ExpectType void
    // @ts-expect-error
    chrome.permissions.request(permissions, () => {}).then(() => {});
    // @ts-expect-error : 'test' is not a recognized permission.
    chrome.permissions.request({ permissions: ["test"] });

    chrome.permissions.remove(permissions); // $ExpectType Promise<boolean>
    chrome.permissions.remove(permissions, (removed: boolean) => {}); // $ExpectType void
    // @ts-expect-error
    chrome.permissions.remove(permissions, () => {}).then(() => {});
    // @ts-expect-error : 'test' is not a recognized permission.
    chrome.permissions.remove({ permissions: ["test"] });

    chrome.permissions.removeHostAccessRequest(request); // $ExpectType Promise<void>
    chrome.permissions.removeHostAccessRequest(request, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.permissions.removeHostAccessRequest(request, () => {}).then(() => {});

    checkChromeEvent(chrome.permissions.onAdded, (permissions) => {
        permissions; // $ExpectType Permissions
    });

    checkChromeEvent(chrome.permissions.onRemoved, (permissions) => {
        permissions; // $ExpectType Permissions
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/documentScan
function testDocumentScan() {
    chrome.documentScan.Configurability.HARDWARE_CONFIGURABLE === "HARDWARE_CONFIGURABLE";
    chrome.documentScan.Configurability.NOT_CONFIGURABLE === "NOT_CONFIGURABLE";
    chrome.documentScan.Configurability.SOFTWARE_CONFIGURABLE === "SOFTWARE_CONFIGURABLE";

    chrome.documentScan.ConnectionType.NETWORK === "NETWORK";
    chrome.documentScan.ConnectionType.UNSPECIFIED === "UNSPECIFIED";
    chrome.documentScan.ConnectionType.USB === "USB";

    chrome.documentScan.ConstraintType.FIXED_LIST === "FIXED_LIST";
    chrome.documentScan.ConstraintType.FIXED_RANGE === "FIXED_RANGE";
    chrome.documentScan.ConstraintType.INT_LIST === "INT_LIST";
    chrome.documentScan.ConstraintType.INT_RANGE === "INT_RANGE";
    chrome.documentScan.ConstraintType.STRING_LIST === "STRING_LIST";

    chrome.documentScan.OperationResult.ACCESS_DENIED === "ACCESS_DENIED";
    chrome.documentScan.OperationResult.ADF_EMPTY === "ADF_EMPTY";
    chrome.documentScan.OperationResult.ADF_JAMMED === "ADF_JAMMED";
    chrome.documentScan.OperationResult.CANCELLED === "CANCELLED";
    chrome.documentScan.OperationResult.COVER_OPEN === "COVER_OPEN";
    chrome.documentScan.OperationResult.DEVICE_BUSY === "DEVICE_BUSY";
    chrome.documentScan.OperationResult.EOF === "EOF";
    chrome.documentScan.OperationResult.INTERNAL_ERROR === "INTERNAL_ERROR";
    chrome.documentScan.OperationResult.INVALID === "INVALID";
    chrome.documentScan.OperationResult.IO_ERROR === "IO_ERROR";
    chrome.documentScan.OperationResult.MISSING === "MISSING";
    chrome.documentScan.OperationResult.NO_MEMORY === "NO_MEMORY";
    chrome.documentScan.OperationResult.SUCCESS === "SUCCESS";
    chrome.documentScan.OperationResult.UNKNOWN === "UNKNOWN";
    chrome.documentScan.OperationResult.UNREACHABLE === "UNREACHABLE";
    chrome.documentScan.OperationResult.UNSUPPORTED === "UNSUPPORTED";
    chrome.documentScan.OperationResult.WRONG_TYPE === "WRONG_TYPE";

    chrome.documentScan.OptionType.BOOL === "BOOL";
    chrome.documentScan.OptionType.BUTTON === "BUTTON";
    chrome.documentScan.OptionType.FIXED === "FIXED";
    chrome.documentScan.OptionType.GROUP === "GROUP";
    chrome.documentScan.OptionType.INT === "INT";
    chrome.documentScan.OptionType.STRING === "STRING";
    chrome.documentScan.OptionType.UNKNOWN === "UNKNOWN";

    chrome.documentScan.OptionUnit.BIT === "BIT";
    chrome.documentScan.OptionUnit.DPI === "DPI";
    chrome.documentScan.OptionUnit.MICROSECOND === "MICROSECOND";
    chrome.documentScan.OptionUnit.MM === "MM";
    chrome.documentScan.OptionUnit.PERCENT === "PERCENT";
    chrome.documentScan.OptionUnit.PIXEL === "PIXEL";
    chrome.documentScan.OptionUnit.UNITLESS === "UNITLESS";

    const jobId = "job-id" as const;
    chrome.documentScan.cancelScan(jobId); // $ExpectType Promise<CancelScanResponse<"job-id">>
    chrome.documentScan.cancelScan(jobId, response => { // $ExpectType void
        response.job; // $ExpectType "job-id"
        response.result; // $ExpectType "UNKNOWN" | "SUCCESS" | "UNSUPPORTED" | "CANCELLED" | "DEVICE_BUSY" | "INVALID" | "WRONG_TYPE" | "EOF" | "ADF_JAMMED" | "ADF_EMPTY" | "COVER_OPEN" | "IO_ERROR" | "ACCESS_DENIED" | "NO_MEMORY" | "UNREACHABLE" | "MISSING" | "INTERNAL_ERROR"
    });
    // @ts-expect-error
    chrome.documentScan.cancelScan(jobId, () => {}).then(() => {});

    const scannerHandle = "handle" as const;
    chrome.documentScan.closeScanner(scannerHandle); // $ExpectType Promise<CloseScannerResponse<"handle">>;
    chrome.documentScan.closeScanner(scannerHandle, response => { // $ExpectType void
        response.scannerHandle; // $ExpectType "handle"
        response.result; // $ExpectType "UNKNOWN" | "SUCCESS" | "UNSUPPORTED" | "CANCELLED" | "DEVICE_BUSY" | "INVALID" | "WRONG_TYPE" | "EOF" | "ADF_JAMMED" | "ADF_EMPTY" | "COVER_OPEN" | "IO_ERROR" | "ACCESS_DENIED" | "NO_MEMORY" | "UNREACHABLE" | "MISSING" | "INTERNAL_ERROR"
    });
    // @ts-expect-error
    chrome.documentScan.closeScanner(scannerHandle, () => {}).then(() => {});

    chrome.documentScan.getOptionGroups(scannerHandle); // $ExpectType Promise<GetOptionGroupsResponse<"handle">>
    chrome.documentScan.getOptionGroups(scannerHandle, response => { // $ExpectType void
        response.scannerHandle; // $ExpectType "handle"
        response.result; // $ExpectType "UNKNOWN" | "SUCCESS" | "UNSUPPORTED" | "CANCELLED" | "DEVICE_BUSY" | "INVALID" | "WRONG_TYPE" | "EOF" | "ADF_JAMMED" | "ADF_EMPTY" | "COVER_OPEN" | "IO_ERROR" | "ACCESS_DENIED" | "NO_MEMORY" | "UNREACHABLE" | "MISSING" | "INTERNAL_ERROR"
        response.groups; // $ExpectType OptionGroup[] | undefined
    });
    // @ts-expect-error
    chrome.documentScan.getOptionGroups(scannerHandle, () => {}).then(() => {});

    const deviceFilter: chrome.documentScan.DeviceFilter = {
        local: true,
        secure: true,
    };
    chrome.documentScan.getScannerList(deviceFilter); // $ExpectType Promise<GetScannerListResponse>
    chrome.documentScan.getScannerList(deviceFilter, response => { // $ExpectType void
        response.result; // $ExpectType "UNKNOWN" | "SUCCESS" | "UNSUPPORTED" | "CANCELLED" | "DEVICE_BUSY" | "INVALID" | "WRONG_TYPE" | "EOF" | "ADF_JAMMED" | "ADF_EMPTY" | "COVER_OPEN" | "IO_ERROR" | "ACCESS_DENIED" | "NO_MEMORY" | "UNREACHABLE" | "MISSING" | "INTERNAL_ERROR"
        response.scanners; // $ExpectType ScannerInfo[]
    });
    // @ts-expect-error
    chrome.documentScan.getScannerList(deviceFilter, () => {}).then(() => {});

    const scannerId = "scanner-id" as const;
    chrome.documentScan.openScanner(scannerId); // $ExpectType Promise<OpenScannerResponse<"scanner-id">>
    chrome.documentScan.openScanner(scannerId, response => { // $ExpectType void
        response.scannerId; // $ExpectType "scanner-id"
        response.options; // $ExpectType { [name: string]: unknown } | undefined
        response.scannerHandle; // $ExpectType string | undefined
        response.result; // $ExpectType "UNKNOWN" | "SUCCESS" | "UNSUPPORTED" | "CANCELLED" | "DEVICE_BUSY" | "INVALID" | "WRONG_TYPE" | "EOF" | "ADF_JAMMED" | "ADF_EMPTY" | "COVER_OPEN" | "IO_ERROR" | "ACCESS_DENIED" | "NO_MEMORY" | "UNREACHABLE" | "MISSING" | "INTERNAL_ERROR"
    });
    // @ts-expect-error
    chrome.documentScan.openScanner(scannerId, () => {}).then(() => {});

    chrome.documentScan.readScanData(jobId); // $ExpectType Promise<ReadScanDataResponse<"job-id">>
    chrome.documentScan.readScanData(jobId, response => { // $ExpectType void
        response.job; // $ExpectType "job-id"
        response.data; // $ExpectType ArrayBuffer | undefined
        response.estimatedCompletion; // $ExpectType number | undefined
        response.result; // $ExpectType "UNKNOWN" | "SUCCESS" | "UNSUPPORTED" | "CANCELLED" | "DEVICE_BUSY" | "INVALID" | "WRONG_TYPE" | "EOF" | "ADF_JAMMED" | "ADF_EMPTY" | "COVER_OPEN" | "IO_ERROR" | "ACCESS_DENIED" | "NO_MEMORY" | "UNREACHABLE" | "MISSING" | "INTERNAL_ERROR"
    });
    // @ts-expect-error
    chrome.documentScan.readScanData(jobId, () => {}).then(() => {});

    const scanOptions: chrome.documentScan.ScanOptions = {
        maxImages: 1,
        mimeTypes: ["image/jpeg"],
    };
    chrome.documentScan.scan(scanOptions); // $ExpectType Promise<ScanResults>
    chrome.documentScan.scan(scanOptions, result => { // $ExpectType void
        result.dataUrls; // $ExpectType string[]
        result.mimeType; // $ExpectType string
    });
    // @ts-expect-error
    chrome.documentScan.scan(scanOptions, () => {}).then(() => {});

    const optionSettings: chrome.documentScan.OptionSetting[] = [{
        name: "name",
        type: "GROUP",
        value: "value",
    }];
    chrome.documentScan.setOptions(scannerHandle, optionSettings); // $ExpectType Promise<SetOptionsResponse<"handle">>
    chrome.documentScan.setOptions(scannerHandle, optionSettings, response => { // $ExpectType void
        response.scannerHandle; // $ExpectType "handle"
        response.results; // $ExpectType SetOptionResult[]
        response.options; // $ExpectType { [name: string]: unknown } | undefined
    });
    // @ts-expect-error
    chrome.documentScan.setOptions(scannerHandle, optionSettings, () => {}).then(() => {});

    const startScanOptions: chrome.documentScan.StartScanOptions = {
        format: "image/jpeg",
        maxReadSize: 100,
    };
    chrome.documentScan.startScan(scannerHandle, startScanOptions); // $ExpectType Promise<StartScanResponse<"handle">>
    chrome.documentScan.startScan(scannerHandle, startScanOptions, response => { // $ExpectType void
        response.scannerHandle; // $ExpectType "handle"
        response.job; // $ExpectType string | undefined
        response.result; // $ExpectType "UNKNOWN" | "SUCCESS" | "UNSUPPORTED" | "CANCELLED" | "DEVICE_BUSY" | "INVALID" | "WRONG_TYPE" | "EOF" | "ADF_JAMMED" | "ADF_EMPTY" | "COVER_OPEN" | "IO_ERROR" | "ACCESS_DENIED" | "NO_MEMORY" | "UNREACHABLE" | "MISSING" | "INTERNAL_ERROR"
    });
}

// https://developer.chrome.com/docs/extensions/reference/enterprise_deviceAttributes
function testEnterpriseDeviceAttributes() {
    chrome.enterprise.deviceAttributes.getDirectoryDeviceId((deviceId) => {});
    chrome.enterprise.deviceAttributes.getDeviceSerialNumber((serialNumber) => {});
    chrome.enterprise.deviceAttributes.getDeviceAssetId((assetId) => {});
    chrome.enterprise.deviceAttributes.getDeviceAnnotatedLocation((annotatedLocation) => {});
    chrome.enterprise.deviceAttributes.getDeviceHostname((hostName) => {});
}

// https://developer.chrome.com/docs/extensions/reference/api/enterprise/hardwarePlatform
function testEnterpriseHardwarePlatform() {
    chrome.enterprise.hardwarePlatform.getHardwarePlatformInfo((info) => {}); // $ExpectType void
    chrome.enterprise.hardwarePlatform.getHardwarePlatformInfo(); // $ExpectType Promise<HardwarePlatformInfo>
    // @ts-expect-error
    chrome.enterprise.hardwarePlatform.getHardwarePlatformInfo((info) => {}).then((info) => {});
}

// https://developer.chrome.com/docs/extensions/reference/browsingData
function testBrowsingData() {
    // @ts-expect-error
    chrome.browsingData.removeServiceWorkers();
    chrome.browsingData.removeServiceWorkers({});
    chrome.browsingData.removeServiceWorkers({}, () => {});
    chrome.browsingData.settings((result) => {});
    chrome.browsingData.removePluginData({}, () => {});
    chrome.browsingData.removeServiceWorkers({}, () => {});
    chrome.browsingData.removeFormData({}, () => {});
    chrome.browsingData.removeFileSystems({}, () => {});
    chrome.browsingData.remove({}, {}, () => {});
    chrome.browsingData.removePasswords({}, () => {});
    chrome.browsingData.removeCookies({}, () => {});
    chrome.browsingData.removeWebSQL({}, () => {});
    chrome.browsingData.removeAppcache({}, () => {});
    chrome.browsingData.removeCacheStorage({}, () => {});
    chrome.browsingData.removeDownloads({}, () => {});
    chrome.browsingData.removeCache({}, () => {});
    chrome.browsingData.removeHistory({}, () => {});
    chrome.browsingData.removeIndexedDB({}, () => {});
}

// https://developer.chrome.com/docs/extensions/reference/browsingData
async function testBrowsingDataForPromise() {
    await chrome.browsingData.settings();
    await chrome.browsingData.removePluginData({});
    await chrome.browsingData.removeServiceWorkers({});
    await chrome.browsingData.removeFormData({});
    await chrome.browsingData.removeFileSystems({});
    await chrome.browsingData.remove({}, {});
    await chrome.browsingData.removePasswords({});
    await chrome.browsingData.removeCookies({});
    await chrome.browsingData.removeWebSQL({});
    await chrome.browsingData.removeAppcache({});
    await chrome.browsingData.removeCacheStorage({});
    await chrome.browsingData.removeDownloads({});
    await chrome.browsingData.removeCache({});
    await chrome.browsingData.removeHistory({});
    await chrome.browsingData.removeIndexedDB({});
}

// https://developer.chrome.com/docs/extensions/reference/api/certificateProvider
function testCertificateProvider() {
    chrome.certificateProvider.Algorithm.RSASSA_PKCS1_V1_5_MD5_SHA1 === "RSASSA_PKCS1_v1_5_MD5_SHA1";
    chrome.certificateProvider.Algorithm.RSASSA_PKCS1_V1_5_SHA1 === "RSASSA_PKCS1_v1_5_SHA1";
    chrome.certificateProvider.Algorithm.RSASSA_PKCS1_V1_5_SHA256 === "RSASSA_PKCS1_v1_5_SHA256";
    chrome.certificateProvider.Algorithm.RSASSA_PKCS1_V1_5_SHA384 === "RSASSA_PKCS1_v1_5_SHA384";
    chrome.certificateProvider.Algorithm.RSASSA_PKCS1_V1_5_SHA512 === "RSASSA_PKCS1_v1_5_SHA512";
    chrome.certificateProvider.Algorithm.RSASSA_PSS_SHA256 === "RSASSA_PSS_SHA256";
    chrome.certificateProvider.Algorithm.RSASSA_PSS_SHA384 === "RSASSA_PSS_SHA384";
    chrome.certificateProvider.Algorithm.RSASSA_PSS_SHA512 === "RSASSA_PSS_SHA512";

    chrome.certificateProvider.Error.GENERAL_ERROR === "GENERAL_ERROR";

    chrome.certificateProvider.Hash.MD5_SHA1 === "MD5_SHA1";
    chrome.certificateProvider.Hash.SHA1 === "SHA1";
    chrome.certificateProvider.Hash.SHA256 === "SHA256";
    chrome.certificateProvider.Hash.SHA384 === "SHA384";
    chrome.certificateProvider.Hash.SHA512 === "SHA512";

    chrome.certificateProvider.PinRequestErrorType.INVALID_PIN === "INVALID_PIN";
    chrome.certificateProvider.PinRequestErrorType.INVALID_PUK === "INVALID_PUK";
    chrome.certificateProvider.PinRequestErrorType.MAX_ATTEMPTS_EXCEEDED === "MAX_ATTEMPTS_EXCEEDED";
    chrome.certificateProvider.PinRequestErrorType.UNKNOWN_ERROR === "UNKNOWN_ERROR";

    chrome.certificateProvider.PinRequestType.PIN === "PIN";
    chrome.certificateProvider.PinRequestType.PUK === "PUK";

    const reportSignatureDetails: chrome.certificateProvider.ReportSignatureDetails = {
        error: "GENERAL_ERROR",
        signRequestId: 1,
    };

    chrome.certificateProvider.reportSignature(reportSignatureDetails); // $ExpectType Promise<void>
    chrome.certificateProvider.reportSignature(reportSignatureDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.certificateProvider.reportSignature(reportSignatureDetails, () => {}).then(() => {});

    const requestPinDetails: chrome.certificateProvider.RequestPinDetails = {
        attemptsLeft: 0,
        errorType: "INVALID_PIN",
        requestType: "PIN",
        signRequestId: 0,
    };

    chrome.certificateProvider.requestPin(requestPinDetails); // $ExpectType Promise<PinResponseDetails | undefined>
    chrome.certificateProvider.requestPin(requestPinDetails, (details) => { // $ExpectType void
        details; // $ExpectType PinResponseDetails | undefined
        if (!details) return;
        details.userInput; // $ExpectType string | undefined
    });
    // @ts-expect-error
    chrome.certificateProvider.requestPin(requestPinDetails, () => {}).then(() => {});

    const setCertificatesDetails: chrome.certificateProvider.SetCertificatesDetails = {
        certificatesRequestId: 0,
        clientCertificates: [{ certificateChain: [], supportedAlgorithms: [] }],
        error: "GENERAL_ERROR",
    };

    chrome.certificateProvider.setCertificates(setCertificatesDetails); // $ExpectType Promise<void>
    chrome.certificateProvider.setCertificates(setCertificatesDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.certificateProvider.setCertificates(setCertificatesDetails, () => {}).then(() => {});

    const stopPinRequestDetails: chrome.certificateProvider.StopPinRequestDetails = {
        signRequestId: 0,
        errorType: "INVALID_PIN",
    };

    chrome.certificateProvider.stopPinRequest(stopPinRequestDetails); // $ExpectType Promise<void>
    chrome.certificateProvider.stopPinRequest(stopPinRequestDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.certificateProvider.stopPinRequest(stopPinRequestDetails, () => {}).then(() => {});

    checkChromeEvent(chrome.certificateProvider.onCertificatesUpdateRequested, (request) => {
        request.certificatesRequestId; // $ExpectType number
    });

    checkChromeEvent(chrome.certificateProvider.onSignatureRequested, (request) => {
        request.algorithm; // $ExpectType "RSASSA_PKCS1_v1_5_MD5_SHA1" | "RSASSA_PKCS1_v1_5_SHA1" | "RSASSA_PKCS1_v1_5_SHA256" | "RSASSA_PKCS1_v1_5_SHA384" | "RSASSA_PKCS1_v1_5_SHA512" | "RSASSA_PSS_SHA256" | "RSASSA_PSS_SHA384" | "RSASSA_PSS_SHA512";
        request.certificate; // $ExpectType ArrayBuffer
        request.input; // $ExpectType ArrayBuffer
        request.signRequestId; // $ExpectType number
    });
}

// https://developer.chrome.com/docs/extensions/reference/commands
async function testCommands() {
    await chrome.commands.getAll();
    chrome.commands.getAll((commands) => {});
}

// https://developer.chrome.com/docs/extensions/reference/i18n
function testI18n() {
    chrome.i18n.getAcceptLanguages((languages) => {});
    chrome.i18n.getMessage("dummy-id", "Hello World!");
    chrome.i18n.getUILanguage();
    chrome.i18n.detectLanguage("dummy-id", (result) => {});
}

// https://developer.chrome.com/docs/extensions/reference/i18n
async function testI18nForPromise() {
    await chrome.i18n.getAcceptLanguages();
    await chrome.i18n.detectLanguage("dummy-id");
}

async function testPageCapture() {
    chrome.pageCapture.saveAsMHTML({ tabId: 0 }, (data: Blob | undefined) => {}); // $ExpectType void
    await chrome.pageCapture.saveAsMHTML({ tabId: 0 }); // $ExpectType Blob | undefined
}

// https://developer.chrome.com/docs/extensions/reference/api/downloads
function testDownloads() {
    chrome.downloads.DangerType.ACCEPTED === "accepted";
    chrome.downloads.DangerType.ACCOUNT_COMPROMISE === "accountCompromise";
    chrome.downloads.DangerType.ALLOWLISTED_BY_POLICY === "allowlistedByPolicy";
    chrome.downloads.DangerType.ASYNC_LOCAL_PASSWORD_SCANNING === "asyncLocalPasswordScanning";
    chrome.downloads.DangerType.ASYNC_SCANNING === "asyncScanning";
    chrome.downloads.DangerType.BLOCKED_SCAN_FAILED === "blockedScanFailed";
    chrome.downloads.DangerType.BLOCKED_TOO_LARGE === "blockedTooLarge";
    chrome.downloads.DangerType.CONTENT === "content";
    chrome.downloads.DangerType.DEEP_SCANNED_FAILED === "deepScannedFailed";
    chrome.downloads.DangerType.DEEP_SCANNED_OPENED_DANGEROUS === "deepScannedOpenedDangerous";
    chrome.downloads.DangerType.DEEP_SCANNED_SAFE === "deepScannedSafe";
    chrome.downloads.DangerType.FILE === "file";
    chrome.downloads.DangerType.HOST === "host";
    chrome.downloads.DangerType.PASSWORD_PROTECTED === "passwordProtected";
    chrome.downloads.DangerType.PROMPT_FOR_LOCAL_PASSWORD_SCANNING === "promptForLocalPasswordScanning";
    chrome.downloads.DangerType.PROMPT_FOR_SCANNING === "promptForScanning";
    chrome.downloads.DangerType.SAFE === "safe";
    chrome.downloads.DangerType.SENSITIVE_CONTENT_BLOCK === "sensitiveContentBlock";
    chrome.downloads.DangerType.SENSITIVE_CONTENT_WARNING === "sensitiveContentWarning";
    chrome.downloads.DangerType.UNCOMMON === "uncommon";
    chrome.downloads.DangerType.UNWANTED === "unwanted";
    chrome.downloads.DangerType.URL === "url";

    chrome.downloads.FilenameConflictAction.OVERWRITE === "overwrite";
    chrome.downloads.FilenameConflictAction.PROMPT === "prompt";
    chrome.downloads.FilenameConflictAction.UNIQUIFY === "uniquify";

    chrome.downloads.HttpMethod.GET === "GET";
    chrome.downloads.HttpMethod.POST === "POST";

    chrome.downloads.InterruptReason.CRASH === "CRASH";
    chrome.downloads.InterruptReason.FILE_ACCESS_DENIED === "FILE_ACCESS_DENIED";
    chrome.downloads.InterruptReason.FILE_BLOCKED === "FILE_BLOCKED";
    chrome.downloads.InterruptReason.FILE_FAILED === "FILE_FAILED";
    chrome.downloads.InterruptReason.FILE_HASH_MISMATCH === "FILE_HASH_MISMATCH";
    chrome.downloads.InterruptReason.FILE_NAME_TOO_LONG === "FILE_NAME_TOO_LONG";
    chrome.downloads.InterruptReason.FILE_NO_SPACE === "FILE_NO_SPACE";
    chrome.downloads.InterruptReason.FILE_SAME_AS_SOURCE === "FILE_SAME_AS_SOURCE";
    chrome.downloads.InterruptReason.FILE_SECURITY_CHECK_FAILED === "FILE_SECURITY_CHECK_FAILED";
    chrome.downloads.InterruptReason.FILE_TOO_LARGE === "FILE_TOO_LARGE";
    chrome.downloads.InterruptReason.FILE_TOO_SHORT === "FILE_TOO_SHORT";
    chrome.downloads.InterruptReason.FILE_TRANSIENT_ERROR === "FILE_TRANSIENT_ERROR";
    chrome.downloads.InterruptReason.FILE_VIRUS_INFECTED === "FILE_VIRUS_INFECTED";
    chrome.downloads.InterruptReason.NETWORK_DISCONNECTED === "NETWORK_DISCONNECTED";
    chrome.downloads.InterruptReason.NETWORK_FAILED === "NETWORK_FAILED";
    chrome.downloads.InterruptReason.NETWORK_INVALID_REQUEST === "NETWORK_INVALID_REQUEST";
    chrome.downloads.InterruptReason.NETWORK_SERVER_DOWN === "NETWORK_SERVER_DOWN";
    chrome.downloads.InterruptReason.NETWORK_TIMEOUT === "NETWORK_TIMEOUT";
    chrome.downloads.InterruptReason.SERVER_BAD_CONTENT === "SERVER_BAD_CONTENT";
    chrome.downloads.InterruptReason.SERVER_CERT_PROBLEM === "SERVER_CERT_PROBLEM";
    chrome.downloads.InterruptReason.SERVER_CONTENT_LENGTH_MISMATCH === "SERVER_CONTENT_LENGTH_MISMATCH";
    chrome.downloads.InterruptReason.SERVER_CROSS_ORIGIN_REDIRECT === "SERVER_CROSS_ORIGIN_REDIRECT";
    chrome.downloads.InterruptReason.SERVER_FAILED === "SERVER_FAILED";
    chrome.downloads.InterruptReason.SERVER_FORBIDDEN === "SERVER_FORBIDDEN";
    chrome.downloads.InterruptReason.SERVER_NO_RANGE === "SERVER_NO_RANGE";
    chrome.downloads.InterruptReason.SERVER_UNAUTHORIZED === "SERVER_UNAUTHORIZED";
    chrome.downloads.InterruptReason.SERVER_UNREACHABLE === "SERVER_UNREACHABLE";
    chrome.downloads.InterruptReason.USER_CANCELED === "USER_CANCELED";
    chrome.downloads.InterruptReason.USER_SHUTDOWN === "USER_SHUTDOWN";

    chrome.downloads.State.COMPLETE === "complete";
    chrome.downloads.State.INTERRUPTED === "interrupted";
    chrome.downloads.State.IN_PROGRESS === "in_progress";

    const downloadId = 1;

    chrome.downloads.acceptDanger(downloadId); // $ExpectType Promise<void>
    chrome.downloads.acceptDanger(downloadId, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.downloads.acceptDanger(downloadId, () => {}).then(() => {});

    chrome.downloads.cancel(downloadId); // $ExpectType Promise<void>
    chrome.downloads.cancel(downloadId, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.downloads.cancel(downloadId, () => {}).then(() => {});

    const downloadOptions: chrome.downloads.DownloadOptions = {
        body: "body",
        conflictAction: "overwrite",
        filename: "filename",
        headers: [{
            name: "Content-Type",
            value: "application/json",
        }],
        method: "GET",
        saveAs: true,
        url: "https://example.com",
    };

    chrome.downloads.download(downloadOptions); // $ExpectType Promise<number>
    chrome.downloads.download(downloadOptions, (downloadId) => { // $ExpectType void
        downloadId; // $ExpectType number
    });
    // @ts-expect-error
    chrome.downloads.download(downloadOptions, () => {}).then(() => {});

    const downloadQuery: chrome.downloads.DownloadQuery = {
        bytesReceived: 100,
        danger: "safe",
        endTime: "2025-05-30",
        endedAfter: "2025-05-30",
        endedBefore: "2025-05-30",
        error: "CRASH",
        exists: true,
        fileSize: 100,
        filename: "filename",
        filenameRegex: "https://example.com/*",
        finalUrl: "https://example.com",
        finalUrlRegex: "https://example.com/*",
        id: 1,
        limit: 100,
        mime: "application/json",
        orderBy: ["startTime"],
        paused: true,
        query: ["https://example.com/*"],
        startTime: "2025-05-30",
        startedAfter: "2025-05-30",
        startedBefore: "2025-05-30",
        state: "complete",
        totalBytes: 100,
        url: "https://example.com",
        urlRegex: "https://example.com/*",
    };

    chrome.downloads.erase(downloadQuery); // $ExpectType Promise<number[]>
    chrome.downloads.erase(downloadQuery, (erasedIds) => { // $ExpectType void
        erasedIds; // $ExpectType number[]
    });
    // @ts-expect-error
    chrome.downloads.erase(downloadQuery, () => {}).then(() => {});

    const getFileIconOptions: chrome.downloads.GetFileIconOptions = {
        size: 32,
    };

    chrome.downloads.getFileIcon(downloadId); // $ExpectType Promise<string | undefined>
    chrome.downloads.getFileIcon(downloadId, getFileIconOptions); // $ExpectType Promise<string | undefined>
    chrome.downloads.getFileIcon(downloadId, (iconURL) => { // $ExpectType void
        iconURL; // $ExpectType string | undefined
    });
    chrome.downloads.getFileIcon(downloadId, getFileIconOptions, (iconURL) => { // $ExpectType void
        iconURL; // $ExpectType string | undefined
    });
    // @ts-expect-error
    chrome.downloads.getFileIcon(downloadId, () => {}).then(() => {});

    chrome.downloads.open(downloadId); // $ExpectType Promise<void>
    chrome.downloads.open(downloadId, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.downloads.open(downloadId, () => {}).then(() => {});

    chrome.downloads.pause(downloadId); // $ExpectType Promise<void>
    chrome.downloads.pause(downloadId, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.downloads.pause(downloadId, () => {}).then(() => {});

    chrome.downloads.removeFile(downloadId); // $ExpectType Promise<void>
    chrome.downloads.removeFile(downloadId, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.downloads.removeFile(downloadId, () => {}).then(() => {});

    chrome.downloads.resume(downloadId); // $ExpectType Promise<void>
    chrome.downloads.resume(downloadId, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.downloads.resume(downloadId, () => {}).then(() => {});

    chrome.downloads.search(downloadQuery); // $ExpectType Promise<DownloadItem[]>
    chrome.downloads.search(downloadQuery, ([result]) => { // $ExpectType void
        result.byExtensionId; // $ExpectType string | undefined
        result.byExtensionName; // $ExpectType string | undefined
        result.bytesReceived; // $ExpectType number
        result.canResume; // $ExpectType boolean
        result.danger; // $ExpectType "file" | "url" | "content" | "uncommon" | "host" | "unwanted" | "safe" | "accepted" | "allowlistedByPolicy" | "asyncScanning" | "asyncLocalPasswordScanning" | "passwordProtected" | "blockedTooLarge" | "sensitiveContentWarning" | "sensitiveContentBlock" | "deepScannedFailed" | "deepScannedSafe" | "deepScannedOpenedDangerous" | "promptForScanning" | "promptForLocalPasswordScanning" | "accountCompromise" | "blockedScanFailed"
        result.endTime; // $ExpectType string | undefined
        result.error; // $ExpectType "CRASH" | "FILE_ACCESS_DENIED" | "FILE_BLOCKED" | "FILE_FAILED" | "FILE_HASH_MISMATCH" | "FILE_NAME_TOO_LONG" | "FILE_NO_SPACE" | "FILE_SAME_AS_SOURCE" | "FILE_SECURITY_CHECK_FAILED" | "FILE_TOO_LARGE" | "FILE_TOO_SHORT" | "FILE_TRANSIENT_ERROR" | "FILE_VIRUS_INFECTED" | "NETWORK_DISCONNECTED" | "NETWORK_FAILED" | "NETWORK_INVALID_REQUEST" | "NETWORK_SERVER_DOWN" | "NETWORK_TIMEOUT" | "SERVER_BAD_CONTENT" | "SERVER_CERT_PROBLEM" | "SERVER_CONTENT_LENGTH_MISMATCH" | "SERVER_CROSS_ORIGIN_REDIRECT" | "SERVER_FAILED" | "SERVER_FORBIDDEN" | "SERVER_NO_RANGE" | "SERVER_UNAUTHORIZED" | "SERVER_UNREACHABLE" | "USER_CANCELED" | "USER_SHUTDOWN" | undefined
        result.estimatedEndTime; // $ExpectType string | undefined
        result.exists; // $ExpectType boolean
        result.fileSize; // $ExpectType number
        result.filename; // $ExpectType string
        result.finalUrl; // $ExpectType string
        result.id; // $ExpectType number
        result.incognito; // $ExpectType boolean
        result.mime; // $ExpectType string
        result.paused; // $ExpectType boolean
        result.referrer; // $ExpectType string
        result.startTime; // $ExpectType string
        result.state; // $ExpectType "complete" | "in_progress" | "interrupted"
        result.url; // $ExpectType string
    });
    // @ts-expect-error
    chrome.downloads.search(downloadQuery, () => {}).then(() => {});

    chrome.downloads.setShelfEnabled(true); // $ExpectType void

    const uiOptions: chrome.downloads.UiOptions = {
        enabled: true,
    };

    chrome.downloads.setUiOptions(uiOptions); // $ExpectType Promise<void>
    chrome.downloads.setUiOptions(uiOptions, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.downloads.setUiOptions(uiOptions, () => {}).then(() => {});

    chrome.downloads.show(downloadId); // $ExpectType void

    chrome.downloads.showDefaultFolder(); // $ExpectType void

    checkChromeEvent(chrome.downloads.onChanged, (downloadDelta) => {
        downloadDelta.canResume; // $ExpectType BooleanDelta | undefined
        downloadDelta.danger; // $ExpectType StringDelta | undefined
        downloadDelta.endTime; // $ExpectType StringDelta | undefined
        downloadDelta.error; // $ExpectType StringDelta | undefined
        downloadDelta.exists; // $ExpectType BooleanDelta | undefined
        downloadDelta.fileSize; // $ExpectType DoubleDelta | undefined
        downloadDelta.filename; // $ExpectType StringDelta | undefined
        downloadDelta.finalUrl; // $ExpectType StringDelta | undefined
        downloadDelta.id; // $ExpectType number
        downloadDelta.mime; // $ExpectType StringDelta | undefined
        downloadDelta.paused; // $ExpectType BooleanDelta | undefined
        downloadDelta.startTime; // $ExpectType StringDelta | undefined
        downloadDelta.state; // $ExpectType StringDelta | undefined
        downloadDelta.totalBytes; // $ExpectType DoubleDelta | undefined
        downloadDelta.url; // $ExpectType StringDelta | undefined
    });

    checkChromeEvent(chrome.downloads.onCreated, (downloadItem) => {
        downloadItem.byExtensionId; // $ExpectType string | undefined
        downloadItem.byExtensionName; // $ExpectType string | undefined
        downloadItem.bytesReceived; // $ExpectType number
        downloadItem.canResume; // $ExpectType boolean
        downloadItem.danger; // $ExpectType "file" | "url" | "content" | "uncommon" | "host" | "unwanted" | "safe" | "accepted" | "allowlistedByPolicy" | "asyncScanning" | "asyncLocalPasswordScanning" | "passwordProtected" | "blockedTooLarge" | "sensitiveContentWarning" | "sensitiveContentBlock" | "deepScannedFailed" | "deepScannedSafe" | "deepScannedOpenedDangerous" | "promptForScanning" | "promptForLocalPasswordScanning" | "accountCompromise" | "blockedScanFailed"
        downloadItem.endTime; // $ExpectType string | undefined
        downloadItem.error; // $ExpectType "CRASH" | "FILE_ACCESS_DENIED" | "FILE_BLOCKED" | "FILE_FAILED" | "FILE_HASH_MISMATCH" | "FILE_NAME_TOO_LONG" | "FILE_NO_SPACE" | "FILE_SAME_AS_SOURCE" | "FILE_SECURITY_CHECK_FAILED" | "FILE_TOO_LARGE" | "FILE_TOO_SHORT" | "FILE_TRANSIENT_ERROR" | "FILE_VIRUS_INFECTED" | "NETWORK_DISCONNECTED" | "NETWORK_FAILED" | "NETWORK_INVALID_REQUEST" | "NETWORK_SERVER_DOWN" | "NETWORK_TIMEOUT" | "SERVER_BAD_CONTENT" | "SERVER_CERT_PROBLEM" | "SERVER_CONTENT_LENGTH_MISMATCH" | "SERVER_CROSS_ORIGIN_REDIRECT" | "SERVER_FAILED" | "SERVER_FORBIDDEN" | "SERVER_NO_RANGE" | "SERVER_UNAUTHORIZED" | "SERVER_UNREACHABLE" | "USER_CANCELED" | "USER_SHUTDOWN" | undefined
        downloadItem.estimatedEndTime; // $ExpectType string | undefined
        downloadItem.exists; // $ExpectType boolean
        downloadItem.fileSize; // $ExpectType number
        downloadItem.filename; // $ExpectType string
        downloadItem.finalUrl; // $ExpectType string
        downloadItem.id; // $ExpectType number
        downloadItem.incognito; // $ExpectType boolean
        downloadItem.mime; // $ExpectType string
        downloadItem.paused; // $ExpectType boolean
        downloadItem.referrer; // $ExpectType string
        downloadItem.startTime; // $ExpectType string
        downloadItem.state; // $ExpectType "complete" | "in_progress" | "interrupted"
        downloadItem.totalBytes; // $ExpectType number
        downloadItem.url; // $ExpectType string
    });

    const filenameSuggestion: chrome.downloads.FilenameSuggestion = {
        filename: "filename",
        conflictAction: "overwrite",
    };

    checkChromeEvent(chrome.downloads.onDeterminingFilename, (downloadItem, suggest) => {
        downloadItem; // $ExpectType DownloadItem
        suggest(filenameSuggestion); // $ExpectType void
    });

    checkChromeEvent(chrome.downloads.onErased, (downloadId) => {
        downloadId; // $ExpectType number
    });
}

// https://developer.chrome.com/docs/extensions/reference/downloads
async function testDownloadsForPromise() {
    await chrome.downloads.search({});
    await chrome.downloads.pause(1);
    await chrome.downloads.getFileIcon(1);
    await chrome.downloads.getFileIcon(1, {});
    await chrome.downloads.resume(1);
    await chrome.downloads.cancel(1);
    await chrome.downloads.download({ url: "https://example.com" });
    await chrome.downloads.erase({});
    await chrome.downloads.removeFile(1);
    await chrome.downloads.acceptDanger(1);
    await chrome.downloads.setUiOptions({ enabled: true });
}

// https://developer.chrome.com/docs/extensions/reference/extension
function testExtension() {
    chrome.extension.getBackgroundPage();
    chrome.extension.getURL("/");
    chrome.extension.setUpdateUrlData("");
    chrome.extension.getViews({});
    chrome.extension.isAllowedFileSchemeAccess((isAllowedAccess) => {});
    chrome.extension.isAllowedIncognitoAccess((isAllowedAccess) => {});
    chrome.extension.getExtensionTabs(1);
}

// https://developer.chrome.com/docs/extensions/reference/extension
async function testExtensionForPromise() {
    await chrome.extension.isAllowedFileSchemeAccess();
    await chrome.extension.isAllowedIncognitoAccess();
}

// https://developer.chrome.com/docs/extensions/reference/fontSettings
function testFontSettings() {
    chrome.fontSettings.setDefaultFontSize({ pixelSize: 1 }, () => {});
    // @ts-expect-error
    chrome.fontSettings.getFont({}, (details) => {});
    // @ts-expect-error
    chrome.fontSettings.getFont({ genericFamily: "" }, (details) => {});
    chrome.fontSettings.getFont({ genericFamily: "cursive" }, (details) => {});
    chrome.fontSettings.getDefaultFontSize({}, (options) => {});
    chrome.fontSettings.getMinimumFontSize({}, (options) => {});
    chrome.fontSettings.setMinimumFontSize({ pixelSize: 1 }, () => {});
    chrome.fontSettings.getDefaultFixedFontSize({}, (details) => {});
    chrome.fontSettings.clearDefaultFontSize({}, () => {});
    chrome.fontSettings.setDefaultFixedFontSize({ pixelSize: 1 }, () => {});
    chrome.fontSettings.clearFont({ genericFamily: "cursive" }, () => {});
    chrome.fontSettings.setFont({ genericFamily: "cursive", fontId: "" }, () => {});
    chrome.fontSettings.clearMinimumFontSize({}, () => {});
    chrome.fontSettings.getFontList((results) => {});
    chrome.fontSettings.clearDefaultFixedFontSize({}, () => {});
}

// https://developer.chrome.com/docs/extensions/reference/fontSettings
async function testFontSettingsForPromise() {
    await chrome.fontSettings.setDefaultFontSize({ pixelSize: 1 });
    await chrome.fontSettings.getFont({ genericFamily: "cursive" });
    await chrome.fontSettings.getDefaultFontSize({});
    await chrome.fontSettings.getMinimumFontSize({});
    await chrome.fontSettings.setMinimumFontSize({ pixelSize: 1 });
    await chrome.fontSettings.getDefaultFixedFontSize({});
    await chrome.fontSettings.clearDefaultFontSize({});
    await chrome.fontSettings.setDefaultFixedFontSize({ pixelSize: 1 });
    await chrome.fontSettings.clearFont({ genericFamily: "cursive" });
    await chrome.fontSettings.setFont({ genericFamily: "cursive", fontId: "" });
    await chrome.fontSettings.clearMinimumFontSize({});
    await chrome.fontSettings.getFontList();
    await chrome.fontSettings.clearDefaultFixedFontSize({});
}

// https://developer.chrome.com/docs/extensions/reference/api/gcm
function testGcm() {
    chrome.gcm.MAX_MESSAGE_SIZE === 4096;

    const senderIds = ["id1", "id2"];

    chrome.gcm.register(senderIds); // $ExpectType Promise<string>
    chrome.gcm.register(senderIds, (registrationId) => { // $ExpectType void
        registrationId; // $ExpectType string
    });
    // @ts-expect-error
    chrome.gcm.register(senderIds, () => {}).then(() => {});

    const message: chrome.gcm.OutgoingMessage = {
        destinationId: "destinationId",
        messageId: "messageId",
        data: {
            key: "value",
        },
        timeToLive: 1000,
    };

    chrome.gcm.send(message); // $ExpectType Promise<string>
    chrome.gcm.send(message, (messageId) => { // $ExpectType void
        messageId; // $ExpectType string
    });
    // @ts-expect-error
    chrome.gcm.send(message, () => {}).then(() => {});

    chrome.gcm.unregister(); // $ExpectType Promise<void>
    chrome.gcm.unregister(() => {}); // $ExpectType void
    // @ts-expect-error
    chrome.gcm.unregister(senderIds, () => {}).then(() => {});

    checkChromeEvent(chrome.gcm.onMessage, (message) => {
        message.collapseKey; // $ExpectType string | undefined
        message.data; // $ExpectType { [key: string]: unknown; }
        message.from; // $ExpectType string | undefined
    });

    checkChromeEvent(chrome.gcm.onMessagesDeleted, () => void 0);

    checkChromeEvent(chrome.gcm.onSendError, (error) => {
        error.details; // $ExpectType { [key: string]: unknown; }
        error.errorMessage; // $ExpectType string
        error.messageId; // $ExpectType string | undefined
    });
}

// https://developer.chrome.com/docs/extensions/reference/history
function testHistory() {
    // @ts-expect-error
    chrome.history.search({}, (results) => {});
    chrome.history.search({ text: "" }, (results) => {});
    // @ts-expect-error
    chrome.history.addUrl({}, () => {});
    chrome.history.addUrl({ url: "https://example.com" }, () => {});
    // @ts-expect-error
    chrome.history.deleteRange({}, () => {});
    chrome.history.deleteRange({ startTime: 1646172000000, endTime: 1646258400000 }, () => {});
    chrome.history.deleteAll(() => {});
    chrome.history.deleteUrl({ url: "https://example.com" }, () => {});
    chrome.history.getVisits({ url: "https://example.com" }, () => {});
}

// https://developer.chrome.com/docs/extensions/reference/history
async function testHistoryForPromise() {
    await chrome.history.search({ text: "" });
    await chrome.history.addUrl({ url: "https://example.com" });
    await chrome.history.deleteRange({ startTime: 1646172000000, endTime: 1646258400000 });
    await chrome.history.deleteAll();
    await chrome.history.deleteUrl({ url: "https://example.com" });
    await chrome.history.getVisits({ url: "https://example.com" });
}

// https://developer.chrome.com/docs/extensions/reference/api/identity
function testIdentity() {
    chrome.identity.AccountStatus.ANY === "ANY";
    chrome.identity.AccountStatus.SYNC === "SYNC";

    chrome.identity.clearAllCachedAuthTokens(); // $ExpectType Promise<void>
    chrome.identity.clearAllCachedAuthTokens(() => void 0); // $ExpectType void
    // @ts-expect-error
    chrome.identity.clearAllCachedAuthTokens(() => void 0).then(() => void 0);

    const tokenDetails: chrome.identity.TokenDetails = {
        interactive: true,
        account: { id: "1234" },
        enableGranularPermissions: true,
        scopes: ["scope1", "scope2"],
    };
    chrome.identity.getAccounts(); // $ExpectType Promise<AccountInfo[]>
    chrome.identity.getAccounts(accounts => { // $ExpectType void
        accounts; // $ExpectType AccountInfo[]
    });
    // @ts-expect-error
    chrome.identity.getAccounts(() => {}).then(() => {});

    chrome.identity.getAuthToken(); // $ExpectType Promise<GetAuthTokenResult>
    chrome.identity.getAuthToken(tokenDetails); // $ExpectType Promise<GetAuthTokenResult>
    chrome.identity.getAuthToken(result => { // $ExpectType void
        result.token; // $ExpectType string | undefined
        result.grantedScopes; // $ExpectType string[] | undefined
    });
    chrome.identity.getAuthToken(tokenDetails, result => { // $ExpectType void
        result.token; // $ExpectType string | undefined
        result.grantedScopes; // $ExpectType string[] | undefined
    });
    // @ts-expect-error
    chrome.identity.getAuthToken(() => {}).then(() => {});

    chrome.identity.getProfileUserInfo(); // $ExpectType Promise<ProfileUserInfo>
    chrome.identity.getProfileUserInfo(userInfo => { // $ExpectType void
        userInfo.email; // $ExpectType string
        userInfo.id; // $ExpectType string
    });
    // @ts-expect-error
    chrome.identity.getProfileUserInfo(() => {}).then(() => {});

    chrome.identity.getRedirectURL(); // $ExpectType string
    chrome.identity.getRedirectURL("path"); // $ExpectType string

    const webAuthFlowDetails: chrome.identity.WebAuthFlowDetails = {
        url: "https://example.com",
        interactive: true,
        abortOnLoadForNonInteractive: true,
        timeoutMsForNonInteractive: 10000,
    };
    chrome.identity.launchWebAuthFlow(webAuthFlowDetails); // $ExpectType Promise<string | undefined>
    chrome.identity.launchWebAuthFlow(webAuthFlowDetails, result => { // $ExpectType void
        result; // $ExpectType string | undefined
    });
    // @ts-expect-error
    chrome.identity.launchWebAuthFlow(webAuthFlowDetails, () => {}).then(() => {});

    checkChromeEvent(chrome.identity.onSignInChanged, (account, signedIn) => {
        account.id; // $ExpectType string
        signedIn; // $ExpectType boolean
    });

    const invalidTokenDetails: chrome.identity.InvalidTokenDetails = {
        token: "token",
    };
    chrome.identity.removeCachedAuthToken(invalidTokenDetails); // $ExpectType Promise<void>
    chrome.identity.removeCachedAuthToken(invalidTokenDetails, () => void 0); // $ExpectType void
    // @ts-expect-error
    chrome.identity.removeCachedAuthToken(invalidTokenDetails, () => void 0).then(() => void 0);
}

// https://developer.chrome.com/docs/extensions/reference/topSites/
function testTopSites() {
    chrome.topSites.get(() => {});
}

// https://developer.chrome.com/docs/extensions/reference/topSites/
async function testTopSitesForPromise() {
    await chrome.topSites.get();
}

// https://developer.chrome.com/docs/extensions/reference/offscreen/
async function testOffscreenDocument() {
    await chrome.offscreen.createDocument({
        reasons: [
            chrome.offscreen.Reason.CLIPBOARD,
            "AUDIO_PLAYBACK", // Accept both enum values and strings
        ],
        url: "https://example.com",
        justification: "Example",
    });
    await chrome.offscreen.hasDocument();
    await chrome.offscreen.closeDocument();
}

// https://developer.chrome.com/docs/extensions/reference/api/fileSystemProvider
function testFileSystemProvider() {
    chrome.fileSystemProvider.ChangeType.CHANGED === "CHANGED";
    chrome.fileSystemProvider.ChangeType.DELETED === "DELETED";

    chrome.fileSystemProvider.CommonActionId.OFFLINE_NOT_NECESSARY == "OFFLINE_NOT_NECESSARY";
    chrome.fileSystemProvider.CommonActionId.SAVE_FOR_OFFLINE == "SAVE_FOR_OFFLINE";
    chrome.fileSystemProvider.CommonActionId.SHARE == "SHARE";

    chrome.fileSystemProvider.OpenFileMode.READ == "READ";
    chrome.fileSystemProvider.OpenFileMode.WRITE == "WRITE";

    chrome.fileSystemProvider.ProviderError.ABORT == "ABORT";
    chrome.fileSystemProvider.ProviderError.ACCESS_DENIED == "ACCESS_DENIED";
    chrome.fileSystemProvider.ProviderError.EXISTS == "EXISTS";
    chrome.fileSystemProvider.ProviderError.FAILED == "FAILED";
    chrome.fileSystemProvider.ProviderError.INVALID_OPERATION == "INVALID_OPERATION";
    chrome.fileSystemProvider.ProviderError.INVALID_URL == "INVALID_URL";
    chrome.fileSystemProvider.ProviderError.IN_USE == "IN_USE";
    chrome.fileSystemProvider.ProviderError.IO == "IO";
    chrome.fileSystemProvider.ProviderError.NOT_A_DIRECTORY == "NOT_A_DIRECTORY";
    chrome.fileSystemProvider.ProviderError.NOT_A_FILE == "NOT_A_FILE";
    chrome.fileSystemProvider.ProviderError.NOT_EMPTY == "NOT_EMPTY";
    chrome.fileSystemProvider.ProviderError.NOT_FOUND == "NOT_FOUND";
    chrome.fileSystemProvider.ProviderError.NO_MEMORY == "NO_MEMORY";
    chrome.fileSystemProvider.ProviderError.NO_SPACE == "NO_SPACE";
    chrome.fileSystemProvider.ProviderError.OK == "OK";
    chrome.fileSystemProvider.ProviderError.SECURITY == "SECURITY";
    chrome.fileSystemProvider.ProviderError.TOO_MANY_OPENED == "TOO_MANY_OPENED";

    const fileSystemId = "my-drive" as const;

    const mountOptions: chrome.fileSystemProvider.MountOptions = {
        displayName: "My Drive",
        fileSystemId,
        openedFilesLimit: 10,
        persistent: true,
        supportsNotifyTag: true,
        writable: true,
    };

    chrome.fileSystemProvider.get(mountOptions.fileSystemId); // $ExpectType Promise<FileSystemInfo>
    chrome.fileSystemProvider.get(mountOptions.fileSystemId, (fileSystemInfo) => { // $ExpectType void
        fileSystemInfo.displayName; // $ExpectType string
        fileSystemInfo.fileSystemId; // $ExpectType string
        fileSystemInfo.openedFiles; // $ExpectType OpenedFile[]
        fileSystemInfo.openedFilesLimit; // $ExpectType number
        fileSystemInfo.supportsNotifyTag; // $ExpectType boolean | undefined
        fileSystemInfo.watchers; // $ExpectType Watcher[]
        fileSystemInfo.writable; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.fileSystemProvider.get(mountOptions.fileSystemId, () => {}).then(() => {});

    chrome.fileSystemProvider.getAll(); // $ExpectType Promise<FileSystemInfo[]>
    chrome.fileSystemProvider.getAll(([fileSystemInfo]) => { // $ExpectType void
        fileSystemInfo.displayName; // $ExpectType string
        fileSystemInfo.fileSystemId; // $ExpectType string
        fileSystemInfo.openedFiles; // $ExpectType OpenedFile[]
        fileSystemInfo.openedFilesLimit; // $ExpectType number
        fileSystemInfo.supportsNotifyTag; // $ExpectType boolean | undefined
        fileSystemInfo.watchers; // $ExpectType Watcher[]
        fileSystemInfo.writable; // $ExpectType boolean
    });
    // @ts-expect-error
    chrome.fileSystemProvider.getAll(() => {}).then(() => {});

    chrome.fileSystemProvider.mount(mountOptions); // $ExpectType Promise<void>
    chrome.fileSystemProvider.mount(mountOptions, () => void 0); // $ExpectType void
    // @ts-expect-error
    chrome.fileSystemProvider.mount(mountOptions, () => void 0).then(() => void 0);

    const notifyOptions: chrome.fileSystemProvider.NotifyOptions = {
        changeType: "CHANGED",
        changes: [],
        fileSystemId,
        observedPath: "path",
        recursive: true,
        tag: "tag",
    };

    chrome.fileSystemProvider.notify(notifyOptions); // $ExpectType Promise<void>
    chrome.fileSystemProvider.notify(notifyOptions, () => void 0); // $ExpectType void
    // @ts-expect-error
    chrome.fileSystemProvider.notify(notifyOptions, () => void 0).then(() => void 0);

    chrome.fileSystemProvider.unmount({ fileSystemId }); // $ExpectType Promise<void>
    chrome.fileSystemProvider.unmount({ fileSystemId }, () => void 0); // $ExpectType void
    // @ts-expect-error
    chrome.fileSystemProvider.unmount({ fileSystemId }, () => void 0).then(() => void 0);

    checkChromeEvent(chrome.fileSystemProvider.onAbortRequested, (options, successCallback, errorCallback) => {
        options.fileSystemId; // $ExpectType string
        options.operationRequestId; // $ExpectType number
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onAddWatcherRequested, (options, successCallback, errorCallback) => {
        options.entryPath; // $ExpectType string
        options.fileSystemId; // $ExpectType string
        options.recursive; // $ExpectType boolean
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onCloseFileRequested, (options, successCallback, errorCallback) => {
        options.fileSystemId; // $ExpectType string
        options.openRequestId; // $ExpectType number
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onConfigureRequested, (options, successCallback, errorCallback) => {
        options.fileSystemId; // $ExpectType string
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onCopyEntryRequested, (options, successCallback, errorCallback) => {
        options.fileSystemId; // $ExpectType string
        options.requestId; // $ExpectType number
        options.sourcePath; // $ExpectType string
        options.targetPath; // $ExpectType string
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(
        chrome.fileSystemProvider.onCreateDirectoryRequested,
        (options, successCallback, errorCallback) => {
            options.directoryPath; // $ExpectType string
            options.fileSystemId; // $ExpectType string
            options.recursive; // $ExpectType boolean
            options.requestId; // $ExpectType number
            successCallback(); // $ExpectType void
            errorCallback("OK"); // $ExpectType void
        },
    );

    checkChromeEvent(chrome.fileSystemProvider.onCreateFileRequested, (options, successCallback, errorCallback) => {
        options.filePath; // $ExpectType string
        options.fileSystemId; // $ExpectType string
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onDeleteEntryRequested, (options, successCallback, errorCallback) => {
        options.entryPath; // $ExpectType string
        options.fileSystemId; // $ExpectType string
        options.recursive; // $ExpectType boolean
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onExecuteActionRequested, (options, successCallback, errorCallback) => {
        options.actionId; // $ExpectType string
        options.entryPaths; // $ExpectType string[]
        options.fileSystemId; // $ExpectType string
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    const actions: chrome.fileSystemProvider.Action[] = [{
        id: "id",
        title: "title",
    }];

    checkChromeEvent(chrome.fileSystemProvider.onGetActionsRequested, (options, successCallback, errorCallback) => {
        options.entryPaths; // $ExpectType string[]
        options.fileSystemId; // $ExpectType string
        options.requestId; // $ExpectType number
        successCallback(actions); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    const entryMetadata: chrome.fileSystemProvider.EntryMetadata = {
        cloudFileInfo: { versionTag: "versionA" },
        cloudIdentifier: { id: "id", providerName: "provider-name" },
        isDirectory: true,
        mimeType: "text/plain",
        modificationTime: new Date(),
        name: "some-file.txt",
        size: 42,
        thumbnail: "DaTa:ImAgE/pNg;base64",
    };

    checkChromeEvent(chrome.fileSystemProvider.onGetMetadataRequested, (options, successCallback, errorCallback) => {
        options.cloudFileInfo; // $ExpectType boolean
        options.cloudIdentifier; // $ExpectType boolean
        options.entryPath; // $ExpectType string
        options.fileSystemId; // $ExpectType string
        options.isDirectory; // $ExpectType boolean
        options.mimeType; // $ExpectType boolean
        options.modificationTime; // $ExpectType boolean
        options.name; // $ExpectType boolean
        options.requestId; // $ExpectType number
        options.size; // $ExpectType boolean
        options.thumbnail; // $ExpectType boolean
        successCallback(entryMetadata); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onMountRequested, (successCallback, errorCallback) => {
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onMoveEntryRequested, (options, successCallback, errorCallback) => {
        options.fileSystemId; // $ExpectType string
        options.requestId; // $ExpectType number
        options.sourcePath; // $ExpectType string
        options.targetPath; // $ExpectType string
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onOpenFileRequested, (options, successCallback, errorCallback) => {
        options.filePath; // $ExpectType string
        options.fileSystemId; // $ExpectType string
        options.mode; // $ExpectType "READ" | "WRITE"
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onReadDirectoryRequested, (options, successCallback, errorCallback) => {
        options.directoryPath; // $ExpectType string
        options.fileSystemId; // $ExpectType string
        options.isDirectory; // $ExpectType boolean
        options.mimeType; // $ExpectType boolean
        options.modificationTime; // $ExpectType boolean
        options.name; // $ExpectType boolean
        options.requestId; // $ExpectType number
        options.size; // $ExpectType boolean
        options.thumbnail; // $ExpectType boolean
        successCallback([entryMetadata], true); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    const arrayBuffer = new ArrayBuffer(1);

    checkChromeEvent(chrome.fileSystemProvider.onReadFileRequested, (options, successCallback, errorCallback) => {
        options.fileSystemId; // $ExpectType string
        options.length; // $ExpectType number
        options.offset; // $ExpectType number
        options.openRequestId; // $ExpectType number
        options.requestId; // $ExpectType number
        successCallback(arrayBuffer, true); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onRemoveWatcherRequested, (options, successCallback, errorCallback) => {
        options.entryPath; // $ExpectType string
        options.fileSystemId; // $ExpectType string
        options.recursive; // $ExpectType boolean
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onTruncateRequested, (options, successCallback, errorCallback) => {
        options.filePath; // $ExpectType string
        options.fileSystemId; // $ExpectType string
        options.length; // $ExpectType number
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onUnmountRequested, (options, successCallback, errorCallback) => {
        options.fileSystemId; // $ExpectType string
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });

    checkChromeEvent(chrome.fileSystemProvider.onWriteFileRequested, (options, successCallback, errorCallback) => {
        options.data; // $ExpectType ArrayBuffer
        options.fileSystemId; // $ExpectType string
        options.offset; // $ExpectType number
        options.openRequestId; // $ExpectType number
        options.requestId; // $ExpectType number
        successCallback(); // $ExpectType void
        errorCallback("OK"); // $ExpectType void
    });
}

// https://developer.chrome.com/docs/extensions/reference/sessions/
function testSessions() {
    const myMax = { maxResults: 1 };
    chrome.sessions.getDevices(devices => {});
    chrome.sessions.getDevices({}, devices => {});
    chrome.sessions.getDevices(myMax, devices => {});
    chrome.sessions.getRecentlyClosed(sessions => {});
    chrome.sessions.getRecentlyClosed({}, sessions => {});
    chrome.sessions.getRecentlyClosed(myMax, sessions => {});
    chrome.sessions.restore(restoredSession => {});
    chrome.sessions.restore("myString", restoredSession => {});
    chrome.sessions.onChanged.addListener(() => {});
}

// https://developer.chrome.com/docs/extensions/reference/sessions/
async function testSessionsForPromise() {
    const myMax = { maxResults: 1 };
    await chrome.sessions.getDevices();
    await chrome.sessions.getDevices({});
    await chrome.sessions.getDevices(myMax);
    await chrome.sessions.getRecentlyClosed();
    await chrome.sessions.getRecentlyClosed({});
    await chrome.sessions.getRecentlyClosed(myMax);
    await chrome.sessions.restore();
    await chrome.sessions.restore("myString");
}

// Test for chrome.sidePanel API
function testSidePanelAPI() {
    let getPanelOptions: chrome.sidePanel.GetPanelOptions = {
        tabId: 123,
    };

    chrome.sidePanel.getOptions(getPanelOptions, (options: chrome.sidePanel.PanelOptions) => {
        console.log("Using callback:");
        console.log(options.enabled);
        console.log(options.path);
        console.log(options.tabId);
    });

    chrome.sidePanel.getOptions(getPanelOptions).then((options: chrome.sidePanel.PanelOptions) => {
        console.log("Using promise:");
        console.log(options.enabled);
        console.log(options.path);
        console.log(options.tabId);
    });

    chrome.sidePanel.getPanelBehavior((behavior: chrome.sidePanel.PanelBehavior) => {
        console.log("Using callback:", behavior.openPanelOnActionClick);
    });

    chrome.sidePanel.getPanelBehavior().then((behavior) => {
        console.log("Using promise:", behavior.openPanelOnActionClick);
    });

    let openOptionsTab: chrome.sidePanel.OpenOptions = {
        tabId: 1234567890,
    };

    let openOptionsWindow: chrome.sidePanel.OpenOptions = {
        windowId: 9876543210,
    };

    let openOptionsTabAndWindow: chrome.sidePanel.OpenOptions = {
        tabId: 1234567890,
        windowId: 9876543210,
    };

    chrome.sidePanel.open(openOptionsTab, () => {
        console.log("Side panel opened in tab using callback");
    });

    chrome.sidePanel.open(openOptionsTab).then(() => {
        console.log("Side panel opened in tab using promise");
    });

    chrome.sidePanel.open(openOptionsWindow, () => {
        console.log("Side panel opened in window using callback");
    });

    chrome.sidePanel.open(openOptionsWindow).then(() => {
        console.log("Side panel opened in window using promise");
    });

    chrome.sidePanel.open(openOptionsTabAndWindow, () => {
        console.log("Side panel opened in tab in window using callback");
    });

    chrome.sidePanel.open(openOptionsTabAndWindow).then(() => {
        console.log("Side panel opened in tab in window using promise");
    });

    let setPanelOptions: chrome.sidePanel.PanelOptions = {
        enabled: true,
        path: "path/to/sidePanel.html",
        tabId: 123,
    };

    chrome.sidePanel.setOptions(setPanelOptions, () => {
        console.log("Options set successfully using callback.");
    });

    chrome.sidePanel.setOptions(setPanelOptions).then(() => {
        console.log("Options set successfully using promise.");
    });

    let setPanelBehavior: chrome.sidePanel.PanelBehavior = {
        openPanelOnActionClick: true,
    };

    chrome.sidePanel.setPanelBehavior(setPanelBehavior, () => {
        console.log("Behavior set successfully using callback.");
    });

    chrome.sidePanel.setPanelBehavior(setPanelBehavior).then(() => {
        console.log("Behavior set successfully using promise.");
    });
}

function testInstanceID() {
    chrome.instanceID.deleteID(); // $ExpectType Promise<void>
    chrome.instanceID.deleteID(() => void 0); // $ExpectType void

    const deleteTokenParams = { authorizedEntity: "", scope: "" };
    chrome.instanceID.deleteToken(deleteTokenParams); // $ExpectType Promise<void>
    chrome.instanceID.deleteToken(deleteTokenParams, () => void 0); // $ExpectType void

    chrome.instanceID.getCreationTime(); // $ExpectType Promise<number>
    chrome.instanceID.getCreationTime((creationTime: number) => void 0); // $ExpectType void

    chrome.instanceID.getID(); // $ExpectType Promise<string>
    chrome.instanceID.getID((id: string) => void 0); // $ExpectType void

    chrome.instanceID.getToken({ authorizedEntity: "", scope: "" }); // $ExpectType Promise<string>
    chrome.instanceID.getToken({ authorizedEntity: "", scope: "" }, (token: string) => void 0); // $ExpectType void

    chrome.instanceID.onTokenRefresh.addListener(() => void 0);
}

function testUserScripts() {
    const worldProperties: chrome.userScripts.WorldProperties = {
        csp: "script-src 'self'",
        messaging: true,
        worldId: "customId",
    };
    chrome.userScripts.configureWorld(worldProperties); // $ExpectType Promise<void>
    chrome.userScripts.configureWorld(worldProperties, () => void 0); // $ExpectType void

    const userScriptFilter = { ids: ["scriptId1", "scriptId2"] };
    chrome.userScripts.getScripts(userScriptFilter); // $ExpectType Promise<RegisteredUserScript[]>
    chrome.userScripts.getScripts(userScriptFilter, (scripts: chrome.userScripts.RegisteredUserScript[]) => void 0); // $ExpectType void

    const badScripts = [
        {
            id: "badScriptId",
            matches: ["*://example.com/*"],
        },
    ];
    const scripts = [
        {
            id: "scriptId1",
            js: [{ code: "console.log(\"Hello from scriptId1!\");" }],
            matches: ["*://example.com/*"],
        },
        {
            id: "scriptId2",
            js: [{ code: "console.log(\"Hello from scriptId2!\");" }],
            matches: ["*://example.org/*"],
        },
    ];
    const jsInjections: chrome.userScripts.ScriptSource[] = [
        {
            file: "./the/script.js",
        },
        {
            code: "console.log(\"Wow the script works!\");",
        },
    ];
    const injectionTarget: chrome.userScripts.InjectionTarget = {
        tabId: 46,
        allFrames: true,
    };

    const badExeOptions = {};
    const exeOptions: chrome.userScripts.UserScriptInjection = {
        injectImmediately: true,
        js: jsInjections,
        target: injectionTarget,
        worldId: "USER_SCRIPT",
    };

    chrome.userScripts.getWorldConfigurations(); // $ExpectType Promise<WorldProperties[]>
    chrome.userScripts.getWorldConfigurations(([world]) => { // $ExpectType void
        world.csp; // $ExpectType string | undefined
        world.messaging; // $ExpectType boolean | undefined
        world.worldId; // $ExpectType string | undefined
    });
    // @ts-expect-error
    chrome.userScripts.getWorldConfigurations(() => {}).then(() => {});

    // @ts-expect-error
    chrome.userScripts.execute(badExeOptions);
    chrome.userScripts.execute(exeOptions); // $ExpectType Promise<InjectionResult[]>
    chrome.userScripts.execute(exeOptions, (result) => { // $ExpectType void
        result; // $ExpectType InjectionResult[]
    });

    chrome.userScripts.register(scripts); // $ExpectType Promise<void>
    chrome.userScripts.register(scripts, () => void 0); // $ExpectType void
    // @ts-expect-error Missing required property 'js'.
    chrome.userScripts.register(badScripts);

    chrome.userScripts.resetWorldConfiguration(); // $ExpectType Promise<void>
    chrome.userScripts.resetWorldConfiguration("scriptId1"); // $ExpectType Promise<void>
    chrome.userScripts.resetWorldConfiguration(() => {}); // $ExpectType void
    chrome.userScripts.resetWorldConfiguration("scriptId1", () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.userScripts.resetWorldConfiguration(() => {}).then(() => {});

    chrome.userScripts.unregister(userScriptFilter); // $ExpectType Promise<void>
    chrome.userScripts.unregister(userScriptFilter, () => void 0); // $ExpectType void

    chrome.userScripts.update(scripts); // $ExpectType Promise<void>
    chrome.userScripts.update(scripts, () => void 0); // $ExpectType void
    // @ts-expect-error Missing required property 'js'.
    chrome.userScripts.update(badScripts);
}

// https://developer.chrome.com/docs/extensions/reference/api/enterprise/platformKeys
function testEnterPrisePlatformKeys() {
    const tokenId = "tokenId";

    chrome.enterprise.platformKeys.Scope.MACHINE === "MACHINE";
    chrome.enterprise.platformKeys.Scope.USER === "USER";

    chrome.enterprise.platformKeys.Algorithm.ECDSA === "ECDSA";
    chrome.enterprise.platformKeys.Algorithm.RSA === "RSA";

    chrome.enterprise.platformKeys.challengeKey({ // $ExpectType void
        scope: "MACHINE",
        challenge: new ArrayBuffer(0),
        registerKey: { algorithm: "ECDSA" },
    }, () => {});

    chrome.enterprise.platformKeys.challengeMachineKey(new ArrayBuffer(0)); // $ExpectType Promise<ArrayBuffer>
    chrome.enterprise.platformKeys.challengeMachineKey(new ArrayBuffer(0), true); // $ExpectType Promise<ArrayBuffer>
    chrome.enterprise.platformKeys.challengeMachineKey(new ArrayBuffer(0), response => { // $ExpectType void
        response; // $ExpectType ArrayBuffer
    });
    chrome.enterprise.platformKeys.challengeMachineKey(new ArrayBuffer(0), true, response => { // $ExpectType void
        response; // $ExpectType ArrayBuffer
    });
    // @ts-expect-error
    chrome.enterprise.platformKeys.challengeMachineKey(new ArrayBuffer(0), () => {}).then(() => {});

    chrome.enterprise.platformKeys.challengeUserKey(new ArrayBuffer(0), true); // $ExpectType Promise<ArrayBuffer>
    chrome.enterprise.platformKeys.challengeUserKey(new ArrayBuffer(0), true, response => { // $ExpectType void
        response; // $ExpectType ArrayBuffer
    });
    // @ts-expect-error
    chrome.enterprise.platformKeys.challengeUserKey(new ArrayBuffer(0), true, () => {}).then(() => {});

    chrome.enterprise.platformKeys.getCertificates(tokenId); // $ExpectType Promise<ArrayBuffer[]>
    chrome.enterprise.platformKeys.getCertificates(tokenId, certificates => { // $ExpectType void
        certificates; // $ExpectType ArrayBuffer[]
    });
    // @ts-expect-error
    chrome.enterprise.platformKeys.getCertificates(tokenId, () => {}).then(() => {});

    chrome.enterprise.platformKeys.getTokens(); // $ExpectType Promise<Token[]>
    chrome.enterprise.platformKeys.getTokens(tokens => { // $ExpectType void
        tokens; // $ExpectType Token[]
    });
    // @ts-expect-error
    chrome.enterprise.platformKeys.getTokens(() => {}).then(() => {});

    chrome.enterprise.platformKeys.importCertificate(tokenId, new ArrayBuffer(0)); // $ExpectType Promise<void>
    chrome.enterprise.platformKeys.importCertificate(tokenId, new ArrayBuffer(0), () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.enterprise.platformKeys.importCertificate(tokenId, new ArrayBuffer(0), () => {}).then(() => {});

    chrome.enterprise.platformKeys.removeCertificate(tokenId, new ArrayBuffer(0)); // $ExpectType Promise<void>
    chrome.enterprise.platformKeys.removeCertificate(tokenId, new ArrayBuffer(0), () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.enterprise.platformKeys.removeCertificate(tokenId, new ArrayBuffer(0), () => {}).then(() => {});
}

// https://developer.chrome.com/docs/extensions/reference/api/power
function testPower() {
    chrome.power.Level.DISPLAY === "display";
    chrome.power.Level.SYSTEM === "system";

    chrome.power.releaseKeepAwake(); // $ExpectType void
    chrome.power.requestKeepAwake(chrome.power.Level.SYSTEM); // $ExpectType void
    chrome.power.requestKeepAwake("system"); // $ExpectType void
    // @ts-expect-error
    chrome.power.requestKeepAwake("other"); // $ExpectType void
    chrome.power.reportActivity(() => {}); // $ExpectType void
    chrome.power.reportActivity(); // $ExpectType Promise<void>
    // @ts-expect-error
    chrome.power.reportActivity(() => {}).then(() => {});
}

// https://developer.chrome.com/docs/extensions/reference/api/platformKeys
function testPlatformKeys() {
    chrome.platformKeys.ClientCertificateType.ECDSA_SIGN === "ecdsaSign";
    chrome.platformKeys.ClientCertificateType.RAS_SIGN === "rasSign";

    const arrayBuffer = new ArrayBuffer(0);

    chrome.platformKeys.getKeyPair(arrayBuffer, {}, (publicKey, privateKey) => { // $ExpectType void
        publicKey; // $ExpectType CryptoKey
        privateKey; // $ExpectType CryptoKey | null
    });

    chrome.platformKeys.getKeyPairBySpki(arrayBuffer, {}, (publicKey, privateKey) => { // $ExpectType void
        publicKey; // $ExpectType CryptoKey
        privateKey; // $ExpectType CryptoKey | null
    });

    const selectDetails: chrome.platformKeys.SelectDetails = {
        clientCerts: [],
        interactive: true,
        request: {
            certificateAuthorities: [],
            certificateTypes: ["ecdsaSign", chrome.platformKeys.ClientCertificateType.RAS_SIGN],
        },
    };

    chrome.platformKeys.selectClientCertificates(selectDetails); // Promise<Match[]>
    chrome.platformKeys.selectClientCertificates(selectDetails, matches => { // $ExpectType void
        matches; // $ExpectType Match[]
    });
    // @ts-expect-error
    chrome.platformKeys.selectClientCertificates(selectDetails, () => {}).then(() => {});

    chrome.platformKeys.subtleCrypto(); // $ExpectType SubtleCrypto | undefined

    const verificationDetails: chrome.platformKeys.VerificationDetails = {
        hostname: "",
        serverCertificateChain: [],
    };

    chrome.platformKeys.verifyTLSServerCertificate(verificationDetails); // $ExpectType Promise<VerificationResult>
    chrome.platformKeys.verifyTLSServerCertificate(verificationDetails, (result) => { // $ExpectType void
        result; // $ExpectType VerificationResult
    });
    // @ts-expect-error
    chrome.platformKeys.verifyTLSServerCertificate(verificationDetails, () => {}).then(() => {});
}

// https://developer.chrome.com/docs/extensions/reference/api/printing
function testPrinting() {
    chrome.printing.MAX_GET_PRINTER_INFO_CALLS_PER_MINUTE === 20;
    chrome.printing.MAX_SUBMIT_JOB_CALLS_PER_MINUTE === 40;

    chrome.printing.JobStatus.CANCELED === "CANCELED";
    chrome.printing.JobStatus.FAILED === "FAILED";
    chrome.printing.JobStatus.IN_PROGRESS === "IN_PROGRESS";
    chrome.printing.JobStatus.PENDING === "PENDING";
    chrome.printing.JobStatus.PRINTED === "PRINTED";

    chrome.printing.PrinterSource.POLICY === "POLICY";
    chrome.printing.PrinterSource.USER === "USER";

    chrome.printing.PrinterStatus.AVAILABLE === "AVAILABLE";
    chrome.printing.PrinterStatus.DOOR_OPEN === "DOOR_OPEN";
    chrome.printing.PrinterStatus.EXPIRED_CERTIFICATE === "EXPIRED_CERTIFICATE";
    chrome.printing.PrinterStatus.GENERIC_ISSUE === "GENERIC_ISSUE";
    chrome.printing.PrinterStatus.OUTPUT_FULL === "OUTPUT_FULL";
    chrome.printing.PrinterStatus.OUT_OF_INK === "OUT_OF_INK";
    chrome.printing.PrinterStatus.OUT_OF_PAPER === "OUT_OF_PAPER";
    chrome.printing.PrinterStatus.PAPER_JAM === "PAPER_JAM";
    chrome.printing.PrinterStatus.STOPPED === "STOPPED";
    chrome.printing.PrinterStatus.TRAY_MISSING === "TRAY_MISSING";
    chrome.printing.PrinterStatus.UNREACHABLE === "UNREACHABLE";

    chrome.printing.SubmitJobStatus.OK === "OK";
    chrome.printing.SubmitJobStatus.USER_REJECTED === "USER_REJECTED";

    chrome.printing.cancelJob(""); // $ExpectType Promise<void>
    chrome.printing.cancelJob("", () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.printing.cancelJob("", () => {}).then(() => {});

    chrome.printing.getJobStatus(""); // $ExpectType Promise<"PENDING" | "IN_PROGRESS" | "FAILED" | "CANCELED" | "PRINTED">
    chrome.printing.getJobStatus("", status => { // $ExpectType void
        status; // $ExpectType "PENDING" | "IN_PROGRESS" | "FAILED" | "CANCELED" | "PRINTED"
    });
    // @ts-expect-error
    chrome.printing.getJobStatus("", status => {}).then(status => {});

    chrome.printing.getPrinterInfo(""); // $ExpectType Promise<GetPrinterInfoResponse>
    chrome.printing.getPrinterInfo("", response => {}); // $ExpectType void
    // @ts-expect-error
    chrome.printing.getPrinterInfo("", response => {}).then(response => {});

    chrome.printing.getPrinters(); // $ExpectType Promise<Printer[]>
    chrome.printing.getPrinters(printers => {}); // $ExpectType void
    // @ts-expect-error
    chrome.printing.getPrinters(printers => {}).then(printers => {});

    const submitJobRequest = {
        job: {
            printerId: "",
            title: "",
            ticket: {},
            contentType: "",
            document: new Blob(),
        },
    };
    chrome.printing.submitJob(submitJobRequest); // $ExpectType Promise<SubmitJobResponse>
    chrome.printing.submitJob(submitJobRequest, response => {}); // $ExpectType void
    // @ts-expect-error
    chrome.printing.submitJob(submitJobRequest, response => {}).then(response => {});

    checkChromeEvent(chrome.printing.onJobStatusChanged, (jobId, status) => {
        jobId; // $ExpectType string
        status; // $ExpectType "PENDING" | "IN_PROGRESS" | "FAILED" | "CANCELED" | "PRINTED"
    });
}

function testPrintingMetrics() {
    chrome.printingMetrics.ColorMode.BLACK_AND_WHITE === "BLACK_AND_WHITE";
    chrome.printingMetrics.ColorMode.COLOR === "COLOR";

    chrome.printingMetrics.DuplexMode.ONE_SIDED === "ONE_SIDED";
    chrome.printingMetrics.DuplexMode.TWO_SIDED_LONG_EDGE === "TWO_SIDED_LONG_EDGE";
    chrome.printingMetrics.DuplexMode.TWO_SIDED_SHORT_EDGE === "TWO_SIDED_SHORT_EDGE";

    chrome.printingMetrics.PrintJobSource.ANDROID_APP === "ANDROID_APP";
    chrome.printingMetrics.PrintJobSource.EXTENSION === "EXTENSION";
    chrome.printingMetrics.PrintJobSource.ISOLATED_WEB_APP === "ISOLATED_WEB_APP";
    chrome.printingMetrics.PrintJobSource.PRINT_PREVIEW === "PRINT_PREVIEW";

    chrome.printingMetrics.PrintJobStatus.CANCELED === "CANCELED";
    chrome.printingMetrics.PrintJobStatus.FAILED === "FAILED";
    chrome.printingMetrics.PrintJobStatus.PRINTED === "PRINTED";

    chrome.printingMetrics.PrinterSource.POLICY === "POLICY";
    chrome.printingMetrics.PrinterSource.USER === "USER";

    chrome.printingMetrics.getPrintJobs(); // $ExpectType Promise<PrintJobInfo[]>
    chrome.printingMetrics.getPrintJobs(jobs => {}); // $ExpectType void
    // @ts-expect-error
    chrome.printingMetrics.getPrintJobs(jobs => {}).then(jobs => {});

    checkChromeEvent(chrome.printingMetrics.onPrintJobFinished, (jobInfo) => {
        jobInfo; // $ExpectType PrintJobInfo
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/webAuthenticationProxy
function testWebAuthenticationProxy() {
    chrome.webAuthenticationProxy.attach(); // $ExpectType Promise<string | undefined>
    chrome.webAuthenticationProxy.attach((error) => { // $ExpectType void
        error; // $ExpectType string | undefined
    });
    // @ts-expect-error
    chrome.webAuthenticationProxy.attach(() => {}).then(() => {});

    const createResponseDetails: chrome.webAuthenticationProxy.CreateResponseDetails = {
        requestId: 1,
        error: { name: "NOT_ALLOWED", message: "Not allowed" },
        responseJson: "{}",
    };

    chrome.webAuthenticationProxy.completeCreateRequest(createResponseDetails); // $ExpectType Promise<void>
    chrome.webAuthenticationProxy.completeCreateRequest(createResponseDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.webAuthenticationProxy.completeCreateRequest(createResponseDetails, () => {}).then(() => {});

    const getResponseDetails: chrome.webAuthenticationProxy.GetResponseDetails = {
        requestId: 1,
        error: { name: "NOT_ALLOWED", message: "Not allowed" },
        responseJson: "{}",
    };

    chrome.webAuthenticationProxy.completeGetRequest(getResponseDetails); // $ExpectType Promise<void>
    chrome.webAuthenticationProxy.completeGetRequest(getResponseDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.webAuthenticationProxy.completeGetRequest(getResponseDetails, () => {}).then(() => {});

    const isUvpaaResponseDetails: chrome.webAuthenticationProxy.IsUvpaaResponseDetails = {
        isUvpaa: true,
        requestId: 1,
    };

    chrome.webAuthenticationProxy.completeIsUvpaaRequest(isUvpaaResponseDetails); // $ExpectType Promise<void>
    chrome.webAuthenticationProxy.completeIsUvpaaRequest(isUvpaaResponseDetails, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.webAuthenticationProxy.completeIsUvpaaRequest(isUvpaaResponseDetails, () => {}).then(() => {});

    chrome.webAuthenticationProxy.detach(); // $ExpectType Promise<string | undefined>
    chrome.webAuthenticationProxy.detach((error) => { // $ExpectType void
        error; // $ExpectType string | undefined
    });
    // @ts-expect-error
    chrome.webAuthenticationProxy.detach(() => {}).then(() => {});

    checkChromeEvent(chrome.webAuthenticationProxy.onCreateRequest, (requestInfo) => {
        requestInfo.requestDetailsJson; // $ExpectType string
        requestInfo.requestId; // $ExpectType number
    });

    checkChromeEvent(chrome.webAuthenticationProxy.onGetRequest, (requestInfo) => {
        requestInfo.requestDetailsJson; // $ExpectType string
        requestInfo.requestId; // $ExpectType number
    });

    checkChromeEvent(chrome.webAuthenticationProxy.onIsUvpaaRequest, (requestInfo) => {
        requestInfo.requestId; // $ExpectType number
    });

    checkChromeEvent(chrome.webAuthenticationProxy.onRemoteSessionStateChange, () => void 0);

    checkChromeEvent(chrome.webAuthenticationProxy.onRequestCanceled, (requestId) => {
        requestId; // $ExpectType number
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/webRequest
function testWebRequest() {
    const filter: chrome.webRequest.RequestFilter = {
        tabId: 1,
        urls: ["https://example.com/*"],
        types: ["main_frame"],
        windowId: 2,
    };

    /**
     * Check all listeners for a webRequest event.
     * @param event - The event to check.
     * @param callback - The callback to check.
     * @param extraInfoSpec - The extra info spec to check.
     */
    const checkWebRequestEvent = <T extends chrome.webRequest.WebRequestEvent<(...args: any) => unknown, string[]>>(
        event: T,
        callback: Parameters<T["addListener"]>[0],
        extraInfoSpec: Parameters<T["addListener"]>[2],
    ) => {
        event.addListener(callback, filter, extraInfoSpec); // $ExpectType void
        event.removeListener(callback); // $ExpectType void
        event.hasListener(callback); // $ExpectType boolean
        event.hasListeners(); // $ExpectType boolean
    };

    chrome.webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES === 20;

    chrome.webRequest.IgnoredActionType.AUTH_CREDENTIALS === "auth_credentials";
    chrome.webRequest.IgnoredActionType.REDIRECT === "redirect";
    chrome.webRequest.IgnoredActionType.REQUEST_HEADERS === "request_headers";
    chrome.webRequest.IgnoredActionType.RESPONSE_HEADERS === "response_headers";

    chrome.webRequest.OnAuthRequiredOptions.ASYNC_BLOCKING === "asyncBlocking";
    chrome.webRequest.OnAuthRequiredOptions.BLOCKING === "blocking";
    chrome.webRequest.OnAuthRequiredOptions.EXTRA_HEADERS === "extraHeaders";
    chrome.webRequest.OnAuthRequiredOptions.RESPONSE_HEADERS === "responseHeaders";

    chrome.webRequest.OnBeforeRedirectOptions.EXTRA_HEADERS === "extraHeaders";
    chrome.webRequest.OnBeforeRedirectOptions.RESPONSE_HEADERS === "responseHeaders";

    chrome.webRequest.OnBeforeRequestOptions.BLOCKING === "blocking";
    chrome.webRequest.OnBeforeRequestOptions.EXTRA_HEADERS === "extraHeaders";
    chrome.webRequest.OnBeforeRequestOptions.REQUEST_BODY === "requestBody";

    chrome.webRequest.OnBeforeSendHeadersOptions.BLOCKING === "blocking";
    chrome.webRequest.OnBeforeSendHeadersOptions.EXTRA_HEADERS === "extraHeaders";
    chrome.webRequest.OnBeforeSendHeadersOptions.REQUEST_HEADERS === "requestHeaders";

    chrome.webRequest.OnCompletedOptions.EXTRA_HEADERS === "extraHeaders";
    chrome.webRequest.OnCompletedOptions.RESPONSE_HEADERS === "responseHeaders";

    chrome.webRequest.OnErrorOccurredOptions.EXTRA_HEADERS === "extraHeaders";

    chrome.webRequest.OnHeadersReceivedOptions.BLOCKING === "blocking";
    chrome.webRequest.OnHeadersReceivedOptions.EXTRA_HEADERS === "extraHeaders";
    chrome.webRequest.OnHeadersReceivedOptions.RESPONSE_HEADERS === "responseHeaders";

    chrome.webRequest.OnResponseStartedOptions.EXTRA_HEADERS === "extraHeaders";
    chrome.webRequest.OnResponseStartedOptions.RESPONSE_HEADERS === "responseHeaders";

    chrome.webRequest.OnSendHeadersOptions.EXTRA_HEADERS === "extraHeaders";
    chrome.webRequest.OnSendHeadersOptions.REQUEST_HEADERS === "requestHeaders";

    chrome.webRequest.ResourceType.CSP_REPORT === "csp_report";
    chrome.webRequest.ResourceType.FONT === "font";
    chrome.webRequest.ResourceType.IMAGE === "image";
    chrome.webRequest.ResourceType.MAIN_FRAME === "main_frame";
    chrome.webRequest.ResourceType.MEDIA === "media";
    chrome.webRequest.ResourceType.OBJECT === "object";
    chrome.webRequest.ResourceType.OTHER === "other";
    chrome.webRequest.ResourceType.PING === "ping";
    chrome.webRequest.ResourceType.SCRIPT === "script";
    chrome.webRequest.ResourceType.STYLESHEET === "stylesheet";
    chrome.webRequest.ResourceType.SUB_FRAME === "sub_frame";
    chrome.webRequest.ResourceType.WEBBUNDLE === "webbundle";
    chrome.webRequest.ResourceType.WEBSOCKET === "websocket";
    chrome.webRequest.ResourceType.XMLHTTPREQUEST === "xmlhttprequest";

    chrome.webRequest.handlerBehaviorChanged(() => {}); // $ExpectType void
    chrome.webRequest.handlerBehaviorChanged(); // $ExpectType Promise<void>
    // @ts-expect-error
    chrome.webRequest.handlerBehaviorChanged(() => {}).then(() => {});

    chrome.webRequest.onActionIgnored.addListener((details) => { // $ExpectType void
        details.action; // $ExpectType "redirect" | "request_headers" | "response_headers" | "auth_credentials"
        details.requestId; // $ExpectType string
    });
    chrome.webRequest.onActionIgnored.removeListener((details) => { // $ExpectType void
        details.action; // $ExpectType "redirect" | "request_headers" | "response_headers" | "auth_credentials"
        details.requestId; // $ExpectType string
    });
    chrome.webRequest.onActionIgnored.hasListener((details) => { // $ExpectType boolean
        details.action; // $ExpectType "redirect" | "request_headers" | "response_headers" | "auth_credentials"
        details.requestId; // $ExpectType string
    });
    chrome.webRequest.onActionIgnored.hasListeners(); // $ExpectType boolean

    const blockingResponse: chrome.webRequest.BlockingResponse = {
        cancel: true,
        redirectUrl: "https://example.com",
        responseHeaders: [{ name: "name", value: "value" }],
        authCredentials: {
            password: "password",
            username: "username",
        },
        requestHeaders: [{ name: "name", value: "value" }],
    };

    checkWebRequestEvent(chrome.webRequest.onAuthRequired, (details, asyncCallback) => {
        details.challenger.host; // $ExpectType string
        details.challenger.port; // $ExpectType number
        details.documentId; // $ExpectType string
        details.documentLifecycle; // $ExpectType DocumentLifecycle
        details.frameId; // $ExpectType number
        details.frameType; // $ExpectType FrameType
        details.initiator; // $ExpectType string | undefined
        details.isProxy; // $ExpectType boolean
        details.method; // $ExpectType string
        details.parentDocumentId; // $ExpectType string | undefined
        details.parentFrameId; // $ExpectType number
        details.realm; // $ExpectType string | undefined
        details.requestId; // $ExpectType string
        details.responseHeaders?.[0].name; // $ExpectType string | undefined
        details.responseHeaders?.[0].value; // $ExpectType string | undefined
        details.responseHeaders?.[0].binaryValue; // $ExpectType ArrayBuffer | undefined
        details.scheme; // $ExpectType string
        details.statusCode; // $ExpectType number
        details.statusLine; // $ExpectType string
        details.tabId; // $ExpectType number
        details.timeStamp; // $ExpectType number
        details.type; // $ExpectType "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "webbundle" | "other";
        details.url; // $ExpectType string

        if (!asyncCallback) return blockingResponse;
        asyncCallback?.(blockingResponse); // $ExpectType void
    }, ["responseHeaders", "blocking", "asyncBlocking", "extraHeaders"]);

    checkWebRequestEvent(chrome.webRequest.onBeforeRedirect, (details) => {
        details.documentId; // $ExpectType string
        details.documentLifecycle; // $ExpectType DocumentLifecycle
        details.frameId; // $ExpectType number
        details.frameType; // $ExpectType FrameType
        details.fromCache; // $ExpectType boolean
        details.initiator; // $ExpectType string | undefined
        details.ip; // $ExpectType string | undefined
        details.method; // $ExpectType string
        details.parentDocumentId; // $ExpectType string | undefined
        details.parentFrameId; // $ExpectType number
        details.redirectUrl; // $ExpectType string
        details.requestId; // $ExpectType string
        details.responseHeaders?.[0].name; // $ExpectType string | undefined
        details.responseHeaders?.[0].value; // $ExpectType string | undefined
        details.responseHeaders?.[0].binaryValue; // $ExpectType ArrayBuffer | undefined
        details.statusCode; // $ExpectType number
        details.statusLine; // $ExpectType string
        details.tabId; // $ExpectType number
        details.timeStamp; // $ExpectType number
        details.type; // $ExpectType "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "webbundle" | "other";
        details.url; // $ExpectType string
    }, ["responseHeaders", "extraHeaders"]);

    checkWebRequestEvent(chrome.webRequest.onBeforeRequest, (details) => {
        details.documentId; // $ExpectType string | undefined
        details.documentLifecycle; // $ExpectType DocumentLifecycle | undefined
        details.frameId; // $ExpectType number
        details.frameType; // $ExpectType FrameType | undefined
        details.initiator; // $ExpectType string | undefined
        details.method; // $ExpectType string
        details.parentDocumentId; // $ExpectType string | undefined
        details.parentFrameId; // $ExpectType number
        details.requestBody?.error; // $ExpectType string | undefined
        details.requestBody?.formData; // $ExpectType { [key: string]: FormDataItem[] } | undefined
        details.requestBody?.raw?.[0]?.bytes; // $ExpectType ArrayBuffer | undefined
        details.requestBody?.raw?.[0]?.file; // $ExpectType string | undefined
        details.requestId; // $ExpectType string
        details.tabId; // $ExpectType number
        details.timeStamp; // $ExpectType number
        details.type; // $ExpectType "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "webbundle" | "other";
        details.url; // $ExpectType string

        return blockingResponse;
    }, ["blocking", "requestBody", "extraHeaders"]);

    checkWebRequestEvent(
        chrome.webRequest.onBeforeSendHeaders,
        (details) => {
            details.documentId; // $ExpectType string
            details.documentLifecycle; // $ExpectType DocumentLifecycle
            details.frameId; // $ExpectType number
            details.frameType; // $ExpectType FrameType
            details.initiator; // $ExpectType string | undefined
            details.method; // $ExpectType string
            details.parentDocumentId; // $ExpectType string | undefined
            details.parentFrameId; // $ExpectType number
            details.requestHeaders?.[0].name; // $ExpectType string | undefined
            details.requestHeaders?.[0].value; // $ExpectType string | undefined
            details.requestHeaders?.[0].binaryValue; // $ExpectType ArrayBuffer | undefined
            details.requestId; // $ExpectType string
            details.tabId; // $ExpectType number
            details.timeStamp; // $ExpectType number
            details.type; // $ExpectType "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "webbundle" | "other";
            details.url; // $ExpectType string

            return blockingResponse;
        },
        ["requestHeaders", "blocking", "extraHeaders"],
    );

    checkWebRequestEvent(chrome.webRequest.onCompleted, (details) => {
        details.documentId; // $ExpectType string
        details.documentLifecycle; // $ExpectType DocumentLifecycle
        details.frameId; // $ExpectType number
        details.frameType; // $ExpectType FrameType
        details.fromCache; // $ExpectType boolean
        details.initiator; // $ExpectType string | undefined
        details.ip; // $ExpectType string | undefined
        details.method; // $ExpectType string
        details.parentDocumentId; // $ExpectType string | undefined
        details.parentFrameId; // $ExpectType number
        details.requestId; // $ExpectType string
        details.responseHeaders?.[0].name; // $ExpectType string | undefined
        details.responseHeaders?.[0].value; // $ExpectType string | undefined
        details.responseHeaders?.[0].binaryValue; // $ExpectType ArrayBuffer | undefined
        details.statusCode; // $ExpectType number
        details.statusLine; // $ExpectType string
        details.tabId; // $ExpectType number
        details.timeStamp; // $ExpectType number
        details.type; // $ExpectType "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "webbundle" | "other";
        details.url; // $ExpectType string
    }, ["responseHeaders", "extraHeaders"]);

    checkWebRequestEvent(chrome.webRequest.onErrorOccurred, (details) => {
        details.documentId; // $ExpectType string
        details.documentLifecycle; // $ExpectType DocumentLifecycle
        details.error; // $ExpectType string
        details.frameId; // $ExpectType number
        details.frameType; // $ExpectType FrameType
        details.fromCache; // $ExpectType boolean
        details.initiator; // $ExpectType string | undefined
        details.ip; // $ExpectType string | undefined
        details.method; // $ExpectType string
        details.parentDocumentId; // $ExpectType string | undefined
        details.parentFrameId; // $ExpectType number
        details.requestId; // $ExpectType string
        details.tabId; // $ExpectType number
        details.timeStamp; // $ExpectType number
        details.type; // $ExpectType "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "webbundle" | "other";
        details.url; // $ExpectType string
    }, ["extraHeaders"]);

    checkWebRequestEvent(chrome.webRequest.onHeadersReceived, (details) => {
        details.documentId; // $ExpectType string
        details.documentLifecycle; // $ExpectType DocumentLifecycle
        details.frameId; // $ExpectType number
        details.frameType; // $ExpectType FrameType
        details.initiator; // $ExpectType string | undefined
        details.method; // $ExpectType string
        details.parentDocumentId; // $ExpectType string | undefined
        details.parentFrameId; // $ExpectType number
        details.requestId; // $ExpectType string
        details.responseHeaders?.[0].name; // $ExpectType string | undefined
        details.responseHeaders?.[0].value; // $ExpectType string | undefined
        details.responseHeaders?.[0].binaryValue; // $ExpectType ArrayBuffer | undefined
        details.statusCode; // $ExpectType number
        details.statusLine; // $ExpectType string
        details.tabId; // $ExpectType number
        details.timeStamp; // $ExpectType number
        details.type; // $ExpectType "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "webbundle" | "other";
        details.url; // $ExpectType string

        return blockingResponse;
    }, ["blocking", "responseHeaders", "extraHeaders"]);

    checkWebRequestEvent(chrome.webRequest.onResponseStarted, (details) => {
        details.documentId; // $ExpectType string
        details.documentLifecycle; // $ExpectType DocumentLifecycle
        details.frameId; // $ExpectType number
        details.frameType; // $ExpectType FrameType
        details.fromCache; // $ExpectType boolean
        details.initiator; // $ExpectType string | undefined
        details.ip; // $ExpectType string | undefined
        details.method; // $ExpectType string
        details.parentDocumentId; // $ExpectType string | undefined
        details.parentFrameId; // $ExpectType number
        details.requestId; // $ExpectType string
        details.responseHeaders?.[0].name; // $ExpectType string | undefined
        details.responseHeaders?.[0].value; // $ExpectType string | undefined
        details.responseHeaders?.[0].binaryValue; // $ExpectType ArrayBuffer | undefined
        details.statusCode; // $ExpectType number
        details.statusLine; // $ExpectType string
        details.tabId; // $ExpectType number
        details.timeStamp; // $ExpectType number
        details.type; // $ExpectType "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "webbundle" | "other";
        details.url; // $ExpectType string
    }, ["responseHeaders", "extraHeaders"]);

    checkWebRequestEvent(chrome.webRequest.onSendHeaders, (details) => {
        details.documentId; // $ExpectType string
        details.documentLifecycle; // $ExpectType DocumentLifecycle
        details.frameId; // $ExpectType number
        details.frameType; // $ExpectType FrameType
        details.initiator; // $ExpectType string | undefined
        details.method; // $ExpectType string
        details.parentDocumentId; // $ExpectType string | undefined
        details.parentFrameId; // $ExpectType number
        details.requestHeaders?.[0].name; // $ExpectType string | undefined
        details.requestHeaders?.[0].value; // $ExpectType string | undefined
        details.requestHeaders?.[0].binaryValue; // $ExpectType ArrayBuffer | undefined
        details.requestId; // $ExpectType string
        details.tabId; // $ExpectType number
        details.timeStamp; // $ExpectType number
        details.type; // $ExpectType "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "webbundle" | "other";
        details.url; // $ExpectType string
    }, ["requestHeaders", "extraHeaders"]);
}

// https://developer.chrome.com/docs/extensions/reference/api/accessibilityFeatures
function testAccessibilityFeatures() {
    // animationPolicy
    chrome.accessibilityFeatures.animationPolicy.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<"allowed" | "once" | "none">>
    chrome.accessibilityFeatures.animationPolicy.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<"allowed" | "once" | "none">
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.animationPolicy.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.animationPolicy.set({ value: "allowed", scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.animationPolicy.set({ value: "allowed", scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.animationPolicy.set({ value: "allowed", scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.animationPolicy.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.animationPolicy.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.animationPolicy.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.animationPolicy.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<"allowed" | "once" | "none">
    });

    // autoclick
    chrome.accessibilityFeatures.autoclick.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.autoclick.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.autoclick.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.autoclick.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.autoclick.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.autoclick.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.autoclick.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.autoclick.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.autoclick.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.autoclick.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // caretHighlight
    chrome.accessibilityFeatures.caretHighlight.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.caretHighlight.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.caretHighlight.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.caretHighlight.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.caretHighlight.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.caretHighlight.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.caretHighlight.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.caretHighlight.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.caretHighlight.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.caretHighlight.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // cursorColor
    chrome.accessibilityFeatures.cursorColor.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.cursorColor.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.cursorColor.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.cursorColor.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.cursorColor.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.cursorColor.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.cursorColor.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.cursorColor.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.cursorColor.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.cursorColor.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // cursorHighlight
    chrome.accessibilityFeatures.cursorHighlight.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.cursorHighlight.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });

    // @ts-expect-error
    chrome.accessibilityFeatures.cursorHighlight.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.cursorHighlight.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.cursorHighlight.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.cursorHighlight.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.cursorHighlight.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.cursorHighlight.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.cursorHighlight.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.cursorHighlight.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // dictation
    chrome.accessibilityFeatures.dictation.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.dictation.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });

    // @ts-expect-error
    chrome.accessibilityFeatures.dictation.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.dictation.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.dictation.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.dictation.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.dictation.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.dictation.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.dictation.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.dictation.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // dockedMagnifier
    chrome.accessibilityFeatures.dockedMagnifier.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.dockedMagnifier.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });

    // @ts-expect-error
    chrome.accessibilityFeatures.dockedMagnifier.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.dockedMagnifier.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.dockedMagnifier.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.dockedMagnifier.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.dockedMagnifier.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.dockedMagnifier.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.dockedMagnifier.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.dockedMagnifier.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // focusHighlight
    chrome.accessibilityFeatures.focusHighlight.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.focusHighlight.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.focusHighlight.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.focusHighlight.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.focusHighlight.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.focusHighlight.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.focusHighlight.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.focusHighlight.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.focusHighlight.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.focusHighlight.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // highContrast
    chrome.accessibilityFeatures.highContrast.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.highContrast.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.highContrast.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.highContrast.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.highContrast.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.highContrast.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.highContrast.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.highContrast.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.highContrast.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.highContrast.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // largeCursor
    chrome.accessibilityFeatures.largeCursor.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.largeCursor.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.largeCursor.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.largeCursor.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.largeCursor.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.largeCursor.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.largeCursor.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.largeCursor.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.largeCursor.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.largeCursor.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // screenMagnifier
    chrome.accessibilityFeatures.screenMagnifier.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.screenMagnifier.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.screenMagnifier.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.screenMagnifier.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.screenMagnifier.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.screenMagnifier.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.screenMagnifier.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.screenMagnifier.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.screenMagnifier.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.screenMagnifier.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // selectToSpeak
    chrome.accessibilityFeatures.selectToSpeak.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.selectToSpeak.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.selectToSpeak.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.selectToSpeak.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.selectToSpeak.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.selectToSpeak.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.selectToSpeak.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.selectToSpeak.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.selectToSpeak.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.selectToSpeak.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // spokenFeedback
    chrome.accessibilityFeatures.spokenFeedback.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.spokenFeedback.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.spokenFeedback.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.spokenFeedback.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.spokenFeedback.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.spokenFeedback.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.spokenFeedback.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.spokenFeedback.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.spokenFeedback.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.spokenFeedback.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // stickyKeys
    chrome.accessibilityFeatures.stickyKeys.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.stickyKeys.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.stickyKeys.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.stickyKeys.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.stickyKeys.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.stickyKeys.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.stickyKeys.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.stickyKeys.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.stickyKeys.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.stickyKeys.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // switchAccess
    chrome.accessibilityFeatures.switchAccess.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.switchAccess.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.switchAccess.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.switchAccess.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.switchAccess.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.switchAccess.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.switchAccess.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.switchAccess.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.switchAccess.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.switchAccess.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // virtualKeyboard
    chrome.accessibilityFeatures.virtualKeyboard.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.accessibilityFeatures.virtualKeyboard.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.accessibilityFeatures.virtualKeyboard.get({}, () => {}).then(() => {});

    chrome.accessibilityFeatures.virtualKeyboard.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.virtualKeyboard.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.virtualKeyboard.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.accessibilityFeatures.virtualKeyboard.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.accessibilityFeatures.virtualKeyboard.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.accessibilityFeatures.virtualKeyboard.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.accessibilityFeatures.virtualKeyboard.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/privacy
function testPrivacy() {
    chrome.privacy.IPHandlingPolicy.DEFAULT === "default";
    chrome.privacy.IPHandlingPolicy.DEFAULT_PUBLIC_AND_PRIVATE_INTERFACES === "default_public_and_private_interfaces";
    chrome.privacy.IPHandlingPolicy.DEFAULT_PUBLIC_INTERFACE_ONLY === "default_public_interface_only";
    chrome.privacy.IPHandlingPolicy.DISABLE_NON_PROXIED_UDP === "disable_non_proxied_udp";

    // virtualKeyboard
    chrome.privacy.services.alternateErrorPagesEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.alternateErrorPagesEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.alternateErrorPagesEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.alternateErrorPagesEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.alternateErrorPagesEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.alternateErrorPagesEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.services.alternateErrorPagesEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.alternateErrorPagesEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.alternateErrorPagesEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.alternateErrorPagesEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // autofillAddressEnabled
    chrome.privacy.services.autofillAddressEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.autofillAddressEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.autofillAddressEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.autofillAddressEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.autofillAddressEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.autofillAddressEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.services.autofillAddressEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.autofillAddressEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.autofillAddressEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.autofillAddressEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // autofillCreditCardEnabled
    chrome.privacy.services.autofillCreditCardEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.autofillCreditCardEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.autofillCreditCardEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.autofillCreditCardEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.autofillCreditCardEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.autofillCreditCardEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.services.autofillCreditCardEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.autofillCreditCardEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.autofillCreditCardEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.autofillCreditCardEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // autofillEnabled
    chrome.privacy.services.autofillEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.autofillEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.autofillEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.autofillEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.autofillEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.autofillEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.services.autofillEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.autofillEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.autofillEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.autofillEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // passwordSavingEnabled
    chrome.privacy.services.passwordSavingEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.passwordSavingEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.passwordSavingEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.passwordSavingEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.passwordSavingEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.passwordSavingEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.services.passwordSavingEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.passwordSavingEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.passwordSavingEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.passwordSavingEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // safeBrowsingEnabled
    chrome.privacy.services.safeBrowsingEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.safeBrowsingEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.safeBrowsingEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.safeBrowsingEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.safeBrowsingEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.safeBrowsingEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.services.safeBrowsingEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.safeBrowsingEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.safeBrowsingEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.safeBrowsingEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // safeBrowsingExtendedReportingEnabled
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.set({ value: true, scope: "regular" }, () => {}).then(
        () => {},
    );

    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.safeBrowsingExtendedReportingEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // searchSuggestEnabled
    chrome.privacy.services.searchSuggestEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.searchSuggestEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.searchSuggestEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.searchSuggestEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.searchSuggestEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.searchSuggestEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.services.searchSuggestEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.searchSuggestEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.searchSuggestEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.searchSuggestEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // spellingServiceEnabled
    chrome.privacy.services.spellingServiceEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.spellingServiceEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.spellingServiceEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.spellingServiceEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.spellingServiceEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.spellingServiceEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.services.spellingServiceEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.spellingServiceEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.spellingServiceEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.spellingServiceEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // translationServiceEnabled
    chrome.privacy.services.translationServiceEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.services.translationServiceEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.services.translationServiceEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.services.translationServiceEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.translationServiceEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.translationServiceEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.services.translationServiceEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.services.translationServiceEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.services.translationServiceEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.services.translationServiceEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // networkPredictionEnabled
    chrome.privacy.network.networkPredictionEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.network.networkPredictionEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.network.networkPredictionEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.network.networkPredictionEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.network.networkPredictionEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.network.networkPredictionEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.network.networkPredictionEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.network.networkPredictionEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.network.networkPredictionEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.network.networkPredictionEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // webRTCIPHandlingPolicy
    chrome.privacy.network.webRTCIPHandlingPolicy.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<"default" | "default_public_and_private_interfaces" | "default_public_interface_only" | "disable_non_proxied_udp">>
    chrome.privacy.network.webRTCIPHandlingPolicy.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<"default" | "default_public_and_private_interfaces" | "default_public_interface_only" | "disable_non_proxied_udp">
    });
    // @ts-expect-error
    chrome.privacy.network.webRTCIPHandlingPolicy.get({}, () => {}).then(() => {});

    chrome.privacy.network.webRTCIPHandlingPolicy.set({ // $ExpectType Promise<void>
        value: chrome.privacy.IPHandlingPolicy.DEFAULT,
        scope: "regular",
    });
    chrome.privacy.network.webRTCIPHandlingPolicy.set({ value: "default", scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.network.webRTCIPHandlingPolicy.set({ value: "default", scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.network.webRTCIPHandlingPolicy.set({ value: "default", scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.network.webRTCIPHandlingPolicy.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.network.webRTCIPHandlingPolicy.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.network.webRTCIPHandlingPolicy.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.network.webRTCIPHandlingPolicy.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<"default" | "default_public_and_private_interfaces" | "default_public_interface_only" | "disable_non_proxied_udp">
    });

    // adMeasurementEnabled
    chrome.privacy.websites.adMeasurementEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.websites.adMeasurementEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.websites.adMeasurementEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.websites.adMeasurementEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.adMeasurementEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.adMeasurementEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.websites.adMeasurementEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.adMeasurementEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.adMeasurementEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.websites.adMeasurementEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // doNotTrackEnabled
    chrome.privacy.websites.doNotTrackEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.websites.doNotTrackEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.websites.doNotTrackEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.websites.doNotTrackEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.doNotTrackEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.doNotTrackEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.websites.doNotTrackEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.doNotTrackEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.doNotTrackEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.websites.doNotTrackEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // fledgeEnabled
    chrome.privacy.websites.fledgeEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.websites.fledgeEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.websites.fledgeEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.websites.fledgeEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.fledgeEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.fledgeEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.websites.fledgeEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.fledgeEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.fledgeEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.websites.fledgeEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // hyperlinkAuditingEnabled
    chrome.privacy.websites.hyperlinkAuditingEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.websites.hyperlinkAuditingEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.websites.hyperlinkAuditingEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.websites.hyperlinkAuditingEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.hyperlinkAuditingEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.hyperlinkAuditingEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.websites.hyperlinkAuditingEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.hyperlinkAuditingEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.hyperlinkAuditingEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.websites.hyperlinkAuditingEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // protectedContentEnabled
    chrome.privacy.websites.protectedContentEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.websites.protectedContentEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.websites.protectedContentEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.websites.protectedContentEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.protectedContentEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.protectedContentEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.websites.protectedContentEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.protectedContentEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.protectedContentEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.websites.protectedContentEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // referrersEnabled
    chrome.privacy.websites.referrersEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.websites.referrersEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.websites.referrersEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.websites.referrersEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.referrersEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.referrersEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.websites.referrersEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.referrersEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.referrersEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.websites.referrersEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // relatedWebsiteSetsEnabled
    chrome.privacy.websites.relatedWebsiteSetsEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.websites.relatedWebsiteSetsEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.websites.relatedWebsiteSetsEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.websites.relatedWebsiteSetsEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.relatedWebsiteSetsEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.relatedWebsiteSetsEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.websites.relatedWebsiteSetsEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.relatedWebsiteSetsEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.relatedWebsiteSetsEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.websites.relatedWebsiteSetsEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // thirdPartyCookiesAllowed
    chrome.privacy.websites.thirdPartyCookiesAllowed.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.websites.thirdPartyCookiesAllowed.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.websites.thirdPartyCookiesAllowed.get({}, () => {}).then(() => {});

    chrome.privacy.websites.thirdPartyCookiesAllowed.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.thirdPartyCookiesAllowed.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.thirdPartyCookiesAllowed.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.websites.thirdPartyCookiesAllowed.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.thirdPartyCookiesAllowed.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.thirdPartyCookiesAllowed.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.websites.thirdPartyCookiesAllowed.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });

    // topicsEnabled
    chrome.privacy.websites.topicsEnabled.get({ incognito: false }); // $ExpectType Promise<ChromeSettingGetResult<boolean>>
    chrome.privacy.websites.topicsEnabled.get({ incognito: false }, (details) => { // $ExpectType void
        details; // $ExpectType ChromeSettingGetResult<boolean>
    });
    // @ts-expect-error
    chrome.privacy.websites.topicsEnabled.get({}, () => {}).then(() => {});

    chrome.privacy.websites.topicsEnabled.set({ value: true, scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.topicsEnabled.set({ value: true, scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.topicsEnabled.set({ value: true, scope: "regular" }, () => {}).then(() => {});

    chrome.privacy.websites.topicsEnabled.clear({ scope: "regular" }); // $ExpectType Promise<void>
    chrome.privacy.websites.topicsEnabled.clear({ scope: "regular" }, () => {}); // $ExpectType void
    // @ts-expect-error
    chrome.privacy.websites.topicsEnabled.clear({ scope: "regular" }, () => {}).then(() => {});

    checkChromeEvent(chrome.privacy.websites.topicsEnabled.onChange, (details) => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/readingList
function testReadingList() {
    const {
        addEntry,
        query,
        removeEntry,
        updateEntry,
        onEntryAdded,
        onEntryRemoved,
        onEntryUpdated,
    } = chrome.readingList;

    const testAddEntry = () => {
        const entry = {
            hasBeenRead: true,
            title: "title",
            url: "url",
        };

        // @ts-expect-error
        addEntry();

        // @ts-expect-error
        addEntry({});
        addEntry(entry); // $ExpectType Promise<void>

        // @ts-expect-error
        addEntry({}, () => {});
        addEntry(entry, () => {}); // $ExpectType void

        // @ts-expect-error
        addEntry(entry, () => {}).then(() => {});
    };

    const testQuery = () => {
        const info = {
            hasBeenRead: true,
            title: "title",
            url: "url",
        };

        // @ts-expect-error
        query();

        query({}); // $ExpectType Promise<ReadingListEntry[]>
        query(info); // $ExpectType Promise<ReadingListEntry[]>

        query({}, () => {}); // $ExpectType void
        query(info, () => {}); // $ExpectType void

        // @ts-expect-error
        query(info, () => {}).then(() => {});
    };

    const testRemoveEntry = () => {
        const info = {
            url: "url",
        };

        // @ts-expect-error
        removeEntry();

        // @ts-expect-error
        removeEntry({});
        removeEntry(info); // $ExpectType Promise<void>

        // @ts-expect-error
        removeEntry({}, () => {});
        removeEntry(info, () => {}); // $ExpectType void

        // @ts-expect-error
        removeEntry(info, () => {}).then(() => {});
    };

    const testUpdateEntry = () => {
        const info = {
            hasBeenRead: true,
            title: "title",
            url: "url",
        };

        // @ts-expect-error
        updateEntry();

        // @ts-expect-error
        updateEntry({});
        updateEntry({ url: "url" }); // $ExpectType Promise<void>
        updateEntry(info); // $ExpectType Promise<void>

        // @ts-expect-error
        updateEntry({}, () => {});
        updateEntry({ url: "url" }, () => {}); // $ExpectType void
        updateEntry(info, () => {}); // $ExpectType void

        // @ts-expect-error
        updateEntry(info, () => {}).then(() => {});
    };

    checkChromeEvent(onEntryAdded, (entry) => {
        entry; // $ExpectType ReadingListEntry
    });

    checkChromeEvent(onEntryRemoved, (entry) => {
        entry; // $ExpectType ReadingListEntry
    });

    checkChromeEvent(onEntryUpdated, (entry) => {
        entry; // $ExpectType ReadingListEntry
    });
}

// https://developer.chrome.com/docs/extensions/reference/api/dom
function testDom() {
    chrome.dom.openOrClosedShadowRoot(document.body); // $ExpectType ShadowRoot | null
}
