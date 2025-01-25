/// <reference types="jquery" />
/// <reference types="jqueryui" />

// https://developer.chrome.com/extensions/examples/api/bookmarks/basic/popup.js
function bookmarksExample() {
    $(function() {
        $("#search").change(function() {
            $("#bookmarks").empty();
            dumpBookmarks($("#search").val());
        });
    });
    // Traverse the bookmark tree, and print the folder and nodes.
    function dumpBookmarks(query?) {
        var bookmarkTreeNodes = chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
            $("#bookmarks").append(dumpTreeNodes(bookmarkTreeNodes, query));
        });
    }
    function dumpTreeNodes(bookmarkNodes, query) {
        var list = $("<ul>");
        var i;
        for (i = 0; i < bookmarkNodes.length; i++) {
            list.append(dumpNode(bookmarkNodes[i], query));
        }
        return list;
    }
    function dumpNode(bookmarkNode, query) {
        var span = $("<span>");
        if (bookmarkNode.title) {
            if (query && !bookmarkNode.children) {
                if (String(bookmarkNode.title).indexOf(query) == -1) {
                    return $("<span></span>");
                }
            }
            var anchor = $("<a>");
            anchor.attr("href", bookmarkNode.url);
            anchor.text(bookmarkNode.title);
            /*
             * When clicking on a bookmark in the extension, a new tab is fired with
             * the bookmark url.
             */
            anchor.click(function() {
                chrome.tabs.create({ url: bookmarkNode.url });
            });
            var options = bookmarkNode.children
                ? $("<span>[<a href=\"#\" id=\"addlink\">Add</a>]</span>")
                : $(
                    "<span>[<a id=\"editlink\" href=\"#\">Edit</a> <a id=\"deletelink\" "
                        + "href=\"#\">Delete</a>]</span>",
                );
            var edit = bookmarkNode.children
                ? $(
                    "<table><tr><td>Name</td><td>"
                        + "<input id=\"title\"></td></tr><tr><td>URL</td><td><input id=\"url\">"
                        + "</td></tr></table>",
                )
                : $("<input>");
            // Show add and edit links when hover over.
            span.hover(
                function() {
                    span.append(options);
                    $("#deletelink").click(function() {
                        $("#deletedialog")
                            .empty()
                            .dialog({
                                autoOpen: false,
                                title: "Confirm Deletion",
                                resizable: false,
                                height: 140,
                                modal: true,
                                buttons: {
                                    "Yes, Delete It!": function() {
                                        chrome.bookmarks.remove(String(bookmarkNode.id));
                                        span.parent().remove();
                                        $(this).dialog("destroy");
                                    },
                                    Cancel: function() {
                                        $(this).dialog("destroy");
                                    },
                                },
                            })
                            .dialog("open");
                    });
                    $("#addlink").click(function() {
                        $("#adddialog")
                            .empty()
                            .append(edit)
                            .dialog({
                                autoOpen: false,
                                closeOnEscape: true,
                                title: "Add New Bookmark",
                                modal: true,
                                buttons: {
                                    Add: function() {
                                        chrome.bookmarks.create({
                                            parentId: bookmarkNode.id,
                                            title: $("#title").val() as string,
                                            url: $("#url").val() as string,
                                        });
                                        $("#bookmarks").empty();
                                        $(this).dialog("destroy");
                                        dumpBookmarks();
                                    },
                                    Cancel: function() {
                                        $(this).dialog("destroy");
                                    },
                                },
                            })
                            .dialog("open");
                    });
                    $("#editlink").click(function() {
                        edit.val(anchor.text());
                        $("#editdialog")
                            .empty()
                            .append(edit)
                            .dialog({
                                autoOpen: false,
                                closeOnEscape: true,
                                title: "Edit Title",
                                modal: true,
                                show: "slide",
                                buttons: {
                                    Save: function() {
                                        chrome.bookmarks.update(String(bookmarkNode.id), {
                                            title: edit.val() as string,
                                        });
                                        anchor.text(edit.val() as string);
                                        options.show();
                                        $(this).dialog("destroy");
                                    },
                                    Cancel: function() {
                                        $(this).dialog("destroy");
                                    },
                                },
                            })
                            .dialog("open");
                    });
                    options.fadeIn();
                },
                // unhover
                function() {
                    options.remove();
                },
            ).append(anchor);
        }
        var li = $(bookmarkNode.title ? "<li>" : "<div>").append(span);
        if (bookmarkNode.children && bookmarkNode.children.length > 0) {
            li.append(dumpTreeNodes(bookmarkNode.children, query));
        }
        return li;
    }

    document.addEventListener("DOMContentLoaded", function() {
        dumpBookmarks();
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

// for chrome.tabs.InjectDetails.frameId
function executeScriptFramed() {
    const tabId = 123;
    const frameId = 0;

    const code = "alert('hi');";

    chrome.tabs.executeScript({ frameId, code });
    chrome.tabs.insertCSS({ frameId, code });

    chrome.tabs.executeScript(tabId, { frameId, code });
    chrome.tabs.insertCSS(tabId, { frameId, code });
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

    chrome.proxy.settings.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<ProxyConfig>
    });
    chrome.proxy.settings.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<ProxyConfig>
    });
    chrome.proxy.settings.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<ProxyConfig>
    });
    chrome.proxy.settings.onChange.hasListeners(); // $ExpectType boolean
}

function testNotificationCreation() {
    // @ts-expect-error
    chrome.notifications.create("id", {});
    // @ts-expect-error
    chrome.notifications.create("id", { message: "", type: "", title: "" });
    // @ts-expect-error
    chrome.notifications.create("id", { iconUrl: "", type: "", title: "" });
    // @ts-expect-error
    chrome.notifications.create("id", { iconUrl: "", message: "", title: "" });
    // @ts-expect-error
    chrome.notifications.create("id", { iconUrl: "", message: "", type: "" });
    // @ts-expect-error
    chrome.notifications.create("id", { iconUrl: "", message: "", type: "", title: "" });
    chrome.notifications.create("id", { iconUrl: "", message: "", type: "basic", title: "" });
}

// https://developer.chrome.com/extensions/examples/api/contentSettings/popup.js
function contentSettings() {
    var incognito;
    var url;

    function settingChanged() {
        var type = this.id;
        var setting = this.value;
        var pattern = /^file:/.test(url) ? url : url.replace(/\/[^\/]*?$/, "/*");
        console.log(type + " setting for " + pattern + ": " + setting);
        // HACK: [type] is not recognised by the docserver's sample crawler, so
        // mention an explicit
        // type: chrome.contentSettings.cookies.set - See http://crbug.com/299634
        chrome.contentSettings[type].set({
            primaryPattern: pattern,
            setting: setting,
            scope: incognito ? "incognito_session_only" : "regular",
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        chrome.tabs.query({ active: true, currentWindow: true, url: ["http://*/*", "https://*/*"] }, function(tabs) {
            var current = tabs[0];
            incognito = current.incognito;
            url = current.url;
            var types = [
                "cookies",
                "images",
                "javascript",
                "location",
                "plugins",
                "popups",
                "notifications",
                "fullscreen",
                "mouselock",
                "microphone",
                "camera",
                "unsandboxedPlugins",
                "automaticDownloads",
            ];
            types.forEach(function(type) {
                // HACK: [type] is not recognised by the docserver's sample crawler, so
                // mention an explicit
                // type: chrome.contentSettings.cookies.get - See http://crbug.com/299634
                chrome.contentSettings[type]
                    && chrome.contentSettings[type].get(
                        {
                            primaryUrl: url,
                            incognito: incognito,
                        },
                        function(details) {
                            var input = <HTMLInputElement> document.getElementById(type);
                            input.disabled = false;
                            input.value = details.setting;
                        },
                    );
            });
        });

        var selects = document.querySelectorAll("select");
        for (var i = 0; i < selects.length; i++) {
            selects[i].addEventListener("change", settingChanged);
        }
    });
}

// tabs: https://developer.chrome.com/extensions/tabs#
async function testTabInterface() {
    const options = { active: true, currentWindow: true, url: ["http://*/*", "https://*/*"] };

    chrome.tabs.query(options, tabs => {
        // $ExpectType Tab[]
        tabs;

        const [tab] = tabs;
        tab.id; // $ExpectType number | undefined
        tab.index; // $ExpectType number
        tab.windowId; // $ExpectType number
        tab.openerTabId; // $ExpectType number | undefined
        tab.selected; // $ExpectType boolean
        tab.highlighted; // $ExpectType boolean
        tab.active; // $ExpectType boolean
        tab.pinned; // $ExpectType boolean
        tab.audible; // $ExpectType boolean | undefined
        tab.discarded; // $ExpectType boolean
        tab.autoDiscardable; // $ExpectType boolean
        tab.groupId; // $ExpectType number
        tab.mutedInfo; // $ExpectType MutedInfo | undefined
        tab.url; // $ExpectType string | undefined
        tab.pendingUrl; // $ExpectType string | undefined
        tab.title; // $ExpectType string | undefined
        tab.favIconUrl; // $ExpectType string | undefined
        tab.status; // $ExpectType string | undefined
        tab.incognito; // $ExpectType boolean
        tab.width; // $ExpectType number | undefined
        tab.height; // $ExpectType number | undefined
        tab.sessionId; // $ExpectType string | undefined
    });

    // $ExpectType Tab[]
    const tabs = await chrome.tabs.query(options);

    const [tab] = tabs;
    tab.id; // $ExpectType number | undefined
    tab.index; // $ExpectType number
    tab.windowId; // $ExpectType number
    tab.openerTabId; // $ExpectType number | undefined
    tab.selected; // $ExpectType boolean
    tab.highlighted; // $ExpectType boolean
    tab.active; // $ExpectType boolean
    tab.pinned; // $ExpectType boolean
    tab.audible; // $ExpectType boolean | undefined
    tab.discarded; // $ExpectType boolean
    tab.autoDiscardable; // $ExpectType boolean
    tab.groupId; // $ExpectType number
    tab.mutedInfo; // $ExpectType MutedInfo | undefined
    tab.url; // $ExpectType string | undefined
    tab.pendingUrl; // $ExpectType string | undefined
    tab.title; // $ExpectType string | undefined
    tab.favIconUrl; // $ExpectType string | undefined
    tab.status; // $ExpectType string | undefined
    tab.incognito; // $ExpectType boolean
    tab.width; // $ExpectType number | undefined
    tab.height; // $ExpectType number | undefined
    tab.sessionId; // $ExpectType string | undefined
}

// tabGroups: https://developer.chrome.com/extensions/tabGroups#
async function testTabGroupInterface() {
    const options = { collapsed: false, title: "Test" };

    chrome.tabGroups.query(options, tabGroups => {
        // $ExpectType TabGroup[]
        tabGroups;

        const [tabGroup] = tabGroups;
        tabGroup.collapsed; // $ExpectType boolean
        tabGroup.color; // $ExpectType ColorEnum
        tabGroup.id; // $ExpectType number
        tabGroup.title; // $ExpectType string | undefined
        tabGroup.windowId; // $ExpectType number

        tabGroup.color = "grey";
        tabGroup.color = "blue";
        tabGroup.color = "red";
        tabGroup.color = "yellow";
        tabGroup.color = "green";
        tabGroup.color = "pink";
        tabGroup.color = "purple";
        tabGroup.color = "cyan";
        tabGroup.color = "orange";
    });
}

// https://developer.chrome.com/extensions/runtime#method-openOptionsPage
function testOptionsPage() {
    chrome.runtime.openOptionsPage();
    chrome.runtime.openOptionsPage(function() {
        // Do a thing ...
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
        manifest.optional_permissions; // $ExpectType string[] | undefined
        manifest.permissions; // $ExpectType string[] | undefined

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
        manifest.optional_permissions; // $ExpectType ManifestPermissions[] | undefined
        manifest.optional_host_permissions; // $ExpectType string[] | undefined
        manifest.permissions; // $ExpectType ManifestPermissions[] | undefined

        manifest.web_accessible_resources = [{ matches: ["https://*/*"], resources: ["resource.js"] }];
        // @ts-expect-error
        manifest.web_accessible_resources = ["script.js"];
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

// https://developer.chrome.com/docs/extensions/reference/runtime/#method-restart
function testRestart() {
    chrome.runtime.restart();
}

// https://developer.chrome.com/docs/extensions/reference/runtime/#method-restartAfterDelay
function testRestartAfterDelay() {
    chrome.runtime.restartAfterDelay(10);
    chrome.runtime.restartAfterDelay(10, () => {
        console.log("This is a callback!");
    });
}

async function testGetPlatformInfo() {
    chrome.runtime.getPlatformInfo(platformInfo => {
        platformInfo; // $ExpectType PlatformInfo

        platformInfo.arch; // $ExpectType PlatformArch
        platformInfo.nacl_arch; // $ExpectType PlatformNaclArch
        platformInfo.os; // $ExpectType PlatformOs

        // @ts-expect-error
        platformInfo.arch = "invalid-arch";
        // @ts-expect-error
        platformInfo.nacl_arch = "invalid-nacl_arch";
        // @ts-expect-error
        platformInfo.os = "invalid-os";
    });
}

async function testGetPlatformForPromise() {
    chrome.runtime.getPlatformInfo().then(platformInfo => {
        platformInfo; // $ExpectType PlatformInfo

        platformInfo.arch; // $ExpectType PlatformArch
        platformInfo.nacl_arch; // $ExpectType PlatformNaclArch
        platformInfo.os; // $ExpectType PlatformOs

        // @ts-expect-error
        platformInfo.arch = "invalid-arch";
        // @ts-expect-error
        platformInfo.nacl_arch = "invalid-nacl_arch";
        // @ts-expect-error
        platformInfo.os = "invalid-os";
    });
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

// https://developer.chrome.com/extensions/debugger
function testDebugger() {
    chrome.debugger.attach({ tabId: 123 }, "1.23", () => {
        console.log("This is a callback!");
    });

    chrome.debugger.detach({ tabId: 123 }, () => {
        console.log("This is a callback!");
    });

    chrome.debugger.sendCommand({ targetId: "abc" }, "Debugger.Cmd", { param1: "x" }, result => {
        console.log("Do something with the result." + result);
    });

    chrome.debugger.getTargets(results => {
        for (let result of results) {
            if (result.tabId == 123) {
                // Do Something.
            }
        }
    });

    chrome.debugger.onEvent.addListener((source, methodName, params) => {
        if (source.tabId == 123) {
            console.log("Hello World.");
        }
    });

    chrome.debugger.onDetach.addListener((source, reason) => {
        if (source.tabId == 123) {
            console.log("Hello World.");
        }
    });
}

// https://developer.chrome.com/extensions/debugger
async function testDebuggerForPromise() {
    await chrome.debugger.attach({ tabId: 123 }, "1.23");
    await chrome.debugger.detach({ tabId: 123 });
    await chrome.debugger.sendCommand({ targetId: "abc" }, "Debugger.Cmd", { param1: "x" });
    await chrome.debugger.getTargets();
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

// https://developer.chrome.com/docs/extensions/reference/windows
function testWindows() {
    chrome.windows.onCreated.addListener(function(window) {
        var windowResult: chrome.windows.Window = window;
    }, { windowTypes: ["normal"] });
    chrome.windows.onRemoved.addListener(function(windowId) {
        var windowIdResult: number = windowId;
    }, { windowTypes: ["normal"] });
    chrome.windows.onBoundsChanged.addListener(function(window) {
        var windowResult: chrome.windows.Window = window;
    }, { windowTypes: ["normal"] });
    chrome.windows.onFocusChanged.addListener(function(windowId) {
        var windowIdResult: number = windowId;
    }, { windowTypes: ["normal"] });
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
    chrome.storage.sync.get((data) => {
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

// https://developer.chrome.com/apps/tts#type-TtsVoice
async function testTtsVoice() {
    chrome.tts.getVoices(voices =>
        voices.forEach(voice => {
            console.log(voice.voiceName);
            console.log("\tlang: " + voice.lang);
            console.log("\tremote: " + voice.remote);
            console.log("\textensionId: " + voice.extensionId);
            console.log("\teventTypes: " + voice.eventTypes);
        })
    );

    const voices = await chrome.tts.getVoices();
    voices.forEach(voice => {
        console.log(voice.voiceName);
        console.log("\tlang: " + voice.lang);
        console.log("\tremote: " + voice.remote);
        console.log("\textensionId: " + voice.extensionId);
        console.log("\teventTypes: " + voice.eventTypes);
    });
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

    chrome.ttsEngine.onInstallLanguageRequest.addListener((requestor, lang) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
    });
    chrome.ttsEngine.onInstallLanguageRequest.removeListener((requestor, lang) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
    });
    chrome.ttsEngine.onInstallLanguageRequest.hasListener((requestor, lang) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
    });
    chrome.ttsEngine.onInstallLanguageRequest.hasListeners(); // $ExpectType boolean

    chrome.ttsEngine.onLanguageStatusRequest.addListener((requestor, lang) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
    });
    chrome.ttsEngine.onLanguageStatusRequest.removeListener((requestor, lang) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
    });
    chrome.ttsEngine.onLanguageStatusRequest.hasListener((requestor, lang) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
    });
    chrome.ttsEngine.onLanguageStatusRequest.hasListeners(); // $ExpectType boolean

    chrome.ttsEngine.onPause.addListener(() => {}); // $ExpectType void
    chrome.ttsEngine.onPause.removeListener(() => {}); // $ExpectType void
    chrome.ttsEngine.onPause.hasListener(() => {}); // $ExpectType boolean
    chrome.ttsEngine.onPause.hasListeners(); // $ExpectType boolean

    chrome.ttsEngine.onResume.addListener(() => {}); // $ExpectType void
    chrome.ttsEngine.onResume.removeListener(() => {}); // $ExpectType void
    chrome.ttsEngine.onResume.hasListener(() => {}); // $ExpectType boolean
    chrome.ttsEngine.onResume.hasListeners(); // $ExpectType boolean

    chrome.ttsEngine.onSpeak.addListener((utterance, options, sendTtsEvent) => {
        utterance; // $ExpectType string
        options; // $ExpectType SpeakOptions
        sendTtsEvent(TtsEvent);
    });
    chrome.ttsEngine.onSpeak.removeListener((utterance, options, sendTtsEvent) => {
        utterance; // $ExpectType string
        options; // $ExpectType SpeakOptions
        sendTtsEvent(TtsEvent);
    });
    chrome.ttsEngine.onSpeak.hasListener((utterance, options, sendTtsEvent) => {
        utterance; // $ExpectType string
        options; // $ExpectType SpeakOptions
        sendTtsEvent(TtsEvent);
    });
    chrome.ttsEngine.onSpeak.hasListeners(); // $ExpectType boolean

    const audioBuffer: chrome.ttsEngine.AudioBuffer = {
        audioBuffer: new ArrayBuffer(8),
        charIndex: 0,
        isLastBuffer: false,
    };

    chrome.ttsEngine.onSpeakWithAudioStream.addListener(
        (utterance, options, audioStreamOptions, sendTtsAudio, sendError) => {
            utterance; // $ExpectType string
            options; // $ExpectType SpeakOptions
            audioStreamOptions; // $ExpectType AudioStreamOptions
            sendTtsAudio(audioBuffer);
            sendError("error");
        },
    );
    chrome.ttsEngine.onSpeakWithAudioStream.removeListener(
        (utterance, options, audioStreamOptions, sendTtsAudio, sendError) => {
            utterance; // $ExpectType string
            options; // $ExpectType SpeakOptions
            audioStreamOptions; // $ExpectType AudioStreamOptions
            sendTtsAudio(audioBuffer);
            sendError("error");
        },
    );
    chrome.ttsEngine.onSpeakWithAudioStream.hasListener(
        (utterance, options, audioStreamOptions, sendTtsAudio, sendError) => {
            utterance; // $ExpectType string
            options; // $ExpectType SpeakOptions
            audioStreamOptions; // $ExpectType AudioStreamOptions
            sendTtsAudio(audioBuffer);
            sendError("error");
        },
    );
    chrome.ttsEngine.onSpeakWithAudioStream.hasListeners(); // $ExpectType boolean

    chrome.ttsEngine.onStop.addListener(() => {}); // $ExpectType void
    chrome.ttsEngine.onStop.removeListener(() => {}); // $ExpectType void
    chrome.ttsEngine.onStop.hasListener(() => {}); // $ExpectType boolean
    chrome.ttsEngine.onStop.hasListeners(); // $ExpectType boolean

    chrome.ttsEngine.onUninstallLanguageRequest.addListener((requestor, lang, uninstallOptions) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
        uninstallOptions; // $ExpectType LanguageUninstallOptions
    });
    chrome.ttsEngine.onUninstallLanguageRequest.removeListener((requestor, lang, uninstallOptions) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
        uninstallOptions; // $ExpectType LanguageUninstallOptions
    });
    chrome.ttsEngine.onUninstallLanguageRequest.hasListener((requestor, lang, uninstallOptions) => {
        requestor; // $ExpectType TtsClient
        lang; // $ExpectType string
        uninstallOptions; // $ExpectType LanguageUninstallOptions
    });
    chrome.ttsEngine.onUninstallLanguageRequest.hasListeners(); // $ExpectType boolean
}

chrome.runtime.onInstalled.addListener((details) => {
    details; // $ExpectType InstalledDetails
    details.reason; // $ExpectType OnInstalledReason
    details.previousVersion; // $ExpectType string | undefined
    details.id; // $ExpectType string | undefined

    // @ts-expect-error
    details.reason = "not-real-reason";
});

function testRuntimeOnMessageAddListener() {
    // @ts-expect-error
    chrome.runtime.onMessage.addListener();
    // @ts-expect-error
    chrome.runtime.onMessage.addListener((_1, _2, _3, _4) => {});

    chrome.runtime.onMessage.addListener((_, sender) => {
        console.log(
            sender.documentId,
            sender.documentLifecycle,
            sender.frameId,
            sender.id,
            sender.nativeApplication,
            sender.origin,
            sender.tab,
            sender.tlsChannelId,
            sender.url,
        );

        // @ts-expect-error
        console.log(sender.documentLifecycle === "invalid_value");
    });
}

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

function testDevtools() {
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
    await chrome.action.disable();
    await chrome.action.enable();
    await chrome.action.disable(0);
    await chrome.action.enable(0);
    await chrome.action.getBadgeBackgroundColor({});
    await chrome.action.getBadgeText({});
    chrome.action.getBadgeTextColor({}, (color: chrome.action.ColorArray) => void 0);
    chrome.action.getBadgeTextColor({ tabId: 0 }, (color: chrome.action.ColorArray) => void 0);
    const getBackTextColor1: chrome.action.ColorArray = await chrome.action.getBadgeTextColor({});
    const getBackTextColor2: chrome.action.ColorArray = await chrome.action.getBadgeTextColor({ tabId: 0 });
    await chrome.action.getPopup({});
    await chrome.action.getTitle({});
    await chrome.action.getUserSettings();
    chrome.action.isEnabled(0, (isEnabled: boolean) => void 0);
    chrome.action.isEnabled(undefined, (isEnabled: boolean) => void 0);
    const isEnabled1: boolean = await chrome.action.isEnabled();
    const isEnabled2: boolean = await chrome.action.isEnabled(0);
    await chrome.action.openPopup({ windowId: 1 });
    await chrome.action.setBadgeBackgroundColor({ color: "white" });
    await chrome.action.setBadgeText({ text: "text1" });
    await chrome.action.setBadgeTextColor({ color: "white" });
    await chrome.action.setIcon({ path: { "16": "path/to/icon.png" } });
    await chrome.action.setPopup({ popup: "popup1" });
    await chrome.action.setTitle({ title: "title1" });

    chrome.action.onClicked.addListener((tab) => {
        tab; // $ExpectType Tab
    });
    chrome.action.onClicked.removeListener((tab) => {
        tab; // $ExpectType Tab
    });
    chrome.action.onClicked.hasListener((tab) => {
        tab; // $ExpectType Tab
    });
    chrome.action.onClicked.hasListeners();

    chrome.action.onUserSettingsChanged.addListener((change) => {
        change; // $ExpectType UserSettingsChange
    });
    chrome.action.onUserSettingsChanged.removeListener((change) => {
        change; // $ExpectType UserSettingsChange
    });
    chrome.action.onUserSettingsChanged.hasListener((change) => {
        change; // $ExpectType UserSettingsChange
    });
    chrome.action.onUserSettingsChanged.hasListeners();
}

// https://developer.chrome.com/docs/extensions/reference/alarms/
async function testAlarmsForPromise() {
    await chrome.alarms.getAll();
    await chrome.alarms.create("name1", { when: Date.now() });
    await chrome.alarms.create({ when: Date.now() });
    await chrome.alarms.clearAll();
    await chrome.alarms.clear();
    await chrome.alarms.clear("name1");
    await chrome.alarms.get();
    await chrome.alarms.get("name1");
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

    chrome.audio.onDeviceListChanged.addListener(devices => {
        devices; // $ExpectType AudioDeviceInfo[]
    });
    chrome.audio.onDeviceListChanged.removeListener(devices => {
        devices; // $ExpectType AudioDeviceInfo[]
    });
    chrome.audio.onDeviceListChanged.hasListener(devices => {
        devices; // $ExpectType AudioDeviceInfo[]
    });
    chrome.audio.onDeviceListChanged.hasListeners(); // $ExpectType boolean

    chrome.audio.onLevelChanged.addListener(event => {
        event; // $ExpectType LevelChangedEvent
    });
    chrome.audio.onLevelChanged.removeListener(event => {
        event; // $ExpectType LevelChangedEvent
    });
    chrome.audio.onLevelChanged.hasListener(event => {
        event; // $ExpectType LevelChangedEvent
    });
    chrome.audio.onLevelChanged.hasListeners(); // $ExpectType boolean
    chrome.audio.onMuteChanged.addListener(event => {
        event; // $ExpectType MuteChangedEvent
    });
    chrome.audio.onMuteChanged.removeListener(event => {
        event; // $ExpectType MuteChangedEvent
    });
    chrome.audio.onMuteChanged.hasListener(event => {
        event; // $ExpectType MuteChangedEvent
    });
    chrome.audio.onMuteChanged.hasListeners(); // $ExpectType boolean
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

    chrome.cookies.onChanged.addListener((changeInfo) => {
        changeInfo; // $ExpectType CookieChangeInfo
    });
    chrome.cookies.onChanged.removeListener((changeInfo) => {
        changeInfo; // $ExpectType CookieChangeInfo
    });
    chrome.cookies.onChanged.hasListener((changeInfo) => {
        changeInfo; // $ExpectType CookieChangeInfo
    });
    chrome.cookies.onChanged.hasListeners(); // $ExpectType boolean
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

// https://developer.chrome.com/docs/extensions/reference/scripting
async function testScriptingForPromise() {
    // @ts-expect-error
    await chrome.scripting.executeScript({ target: { tabId: 0 } });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => {} });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: function() {} });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => {}, args: [] });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: function() {}, args: [] });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string) => {}, args: [""] });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string, n: number) => {}, args: ["", 0] });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => {} }); // $ExpectType InjectionResult<void>[]
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => 0 }); // $ExpectType InjectionResult<number>[]
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => "" }); // $ExpectType InjectionResult<string>[]
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string, n: number) => {}, args: ["", 0] }); // $ExpectType InjectionResult<void>[]
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string, n: number) => 0, args: ["", 0] }); // $ExpectType InjectionResult<number>[]
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string, n: number) => "", args: ["", 0] }); // $ExpectType InjectionResult<string>[]
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: async () => {} }); // $ExpectType InjectionResult<void>[]
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: async () => 0 }); // $ExpectType InjectionResult<number>[]
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: async () => "" }); // $ExpectType InjectionResult<string>[]
    // $ExpectType InjectionResult<void>[]
    await chrome.scripting.executeScript({
        target: { tabId: 0 },
        func: async (str: string, n: number) => {},
        args: ["", 0],
    });
    // $ExpectType InjectionResult<number>[]
    await chrome.scripting.executeScript({
        target: { tabId: 0 },
        func: async (str: string, n: number) => 0,
        args: ["", 0],
    });
    // $ExpectType InjectionResult<string>[]
    await chrome.scripting.executeScript({
        target: { tabId: 0 },
        func: async (str: string, n: number) => "",
        args: ["", 0],
    });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, world: "ISOLATED", func: () => {} });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, injectImmediately: true, func: () => {} }); // $ExpectType InjectionResult<void>[]
    await chrome.scripting.executeScript({ target: { tabId: 0 }, injectImmediately: false, func: () => {} }); // $ExpectType InjectionResult<void>[]
    // @ts-expect-error
    await chrome.scripting.executeScript({ target: { tabId: 0 }, world: "not-real-world", func: () => {} });
    // @ts-expect-error
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string, n: number) => {}, args: [0, ""] });
    // @ts-expect-error
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string) => {}, args: [0] });
    // @ts-expect-error
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => {}, args: [""] });
    // @ts-expect-error
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (name: string) => {}, args: [] });
    // @ts-expect-error
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => {}, args: {} });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, files: ["script.js"] }); // $ExpectType InjectionResult<unknown>[]

    await chrome.scripting.insertCSS({ target: { tabId: 0 } });

    await chrome.scripting.removeCSS({ target: { tabId: 0 } });

    await chrome.scripting.registerContentScripts([
        { id: "id1", js: ["script1.js"] },
        { id: "id2", js: ["script2.js"], runAt: "document_start", allFrames: true, world: "ISOLATED" },
        {
            id: "id3",
            css: ["style1.css"],
            excludeMatches: ["*://*.example.com/*"],
            runAt: "document_end",
            allFrames: true,
            world: "MAIN",
        },
    ]);
    await chrome.scripting.updateContentScripts([
        { id: "id1", js: ["script1.js"] },
        { id: "id2", js: ["script2.js"], runAt: "document_start", allFrames: true, world: "ISOLATED" },
        {
            id: "id3",
            css: ["style1.css"],
            excludeMatches: ["*://*.example.com/*"],
            runAt: "document_end",
            allFrames: true,
            world: "MAIN",
        },
    ]);
    await chrome.scripting.unregisterContentScripts({ ids: ["id1", "id2"] });
    await chrome.scripting.unregisterContentScripts({ files: ["script1.js", "style1.css"] });
    await chrome.scripting.getRegisteredContentScripts();
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

    chrome.system.display.onDisplayChanged.addListener(() => {}); // $ExpectType void
    chrome.system.display.onDisplayChanged.removeListener(() => {}); // $ExpectType void
    chrome.system.display.onDisplayChanged.hasListener(() => {}); // $ExpectType boolean
    chrome.system.display.onDisplayChanged.hasListeners(); // $ExpectType boolean
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
    const tabId = 0;
    const windowId = 0;
    const groupId = 0;
    const frameId = 0;
    const documentId = "id";

    const windowCaptureOptions: chrome.tabs.CaptureVisibleTabOptions = {
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
    chrome.tabs.captureVisibleTab(windowId, (dataUrl) => {
        dataUrl; // $ExpectType string
    });
    chrome.tabs.captureVisibleTab(windowCaptureOptions, (dataUrl) => {
        dataUrl; // $ExpectType string
    });
    chrome.tabs.captureVisibleTab(windowId, windowCaptureOptions, (dataUrl) => {
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
        index: 0,
    };

    chrome.tabs.create(createProperties); // $ExpectType Promise<Tab>
    chrome.tabs.create(createProperties, (tab) => {
        tab; // $ExpectType Tab
    });
    // @ts-expect-error
    chrome.tabs.create(() => {}).then(() => {});

    chrome.tabs.detectLanguage(); // $ExpectType Promise<string>
    chrome.tabs.detectLanguage(tabId); // $ExpectType Promise<string>
    chrome.tabs.detectLanguage((language) => {
        language; // $ExpectType string
    });
    chrome.tabs.detectLanguage(tabId, (language) => {
        language; // $ExpectType string
    });
    // @ts-expect-error
    chrome.tabs.detectLanguage(() => {}).then(() => {});

    chrome.tabs.discard(); // $ExpectType Promise<Tab>
    chrome.tabs.discard(tabId); // $ExpectType Promise<Tab>
    chrome.tabs.discard((tab) => {
        tab; // $ExpectType Tab
    });
    chrome.tabs.discard(tabId, (tab) => {
        tab; // $ExpectType Tab
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
    chrome.tabs.get(tabId, (tab) => {
        tab; // $ExpectType Tab
    });
    // @ts-expect-error
    chrome.tabs.get(() => {}).then(() => {});

    chrome.tabs.getCurrent(); // $ExpectType Promise<Tab | undefined>
    chrome.tabs.getCurrent((tab) => {
        tab; // $ExpectType Tab | undefined
    });
    // @ts-expect-error
    chrome.tabs.getCurrent(() => {}).then(() => {});

    chrome.tabs.getZoom(); // $ExpectType Promise<number>
    chrome.tabs.getZoom(tabId); // $ExpectType Promise<number>
    chrome.tabs.getZoom((zoomFactor) => {
        zoomFactor; // $ExpectType number
    });
    chrome.tabs.getZoom(tabId, (zoomFactor) => {
        zoomFactor; // $ExpectType number
    });
    // @ts-expect-error
    chrome.tabs.getZoom(() => {}).then(() => {});

    chrome.tabs.getZoomSettings(); // $ExpectType Promise<ZoomSettings>
    chrome.tabs.getZoomSettings(tabId); // $ExpectType Promise<ZoomSettings>
    chrome.tabs.getZoomSettings((zoomSettings) => {
        zoomSettings; // $ExpectType ZoomSettings
    });
    chrome.tabs.getZoomSettings(tabId, (zoomSettings) => {
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
    chrome.tabs.group(groupOptions, (groupId) => {
        groupId; // $ExpectType number
    });
    // @ts-expect-error
    chrome.tabs.group(() => {}).then(() => {});

    const highlightInfo: chrome.tabs.HighlightInfo = {
        windowId,
        tabs: [tabId],
    };

    chrome.tabs.highlight(highlightInfo); // $ExpectType Promise<Window>
    chrome.tabs.highlight(highlightInfo, (window) => {
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
    chrome.tabs.move(tabId, moveProperties, (tab) => {
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
    chrome.tabs.query(queryInfo, (tabs) => {
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
    chrome.tabs.sendMessage(tabId, message, (response) => {
        response; // $ExpectType any
    });
    chrome.tabs.sendMessage(tabId, message, { frameId }, (response) => {
        response; // $ExpectType any
    });
    chrome.tabs.sendMessage(tabId, message, { documentId }, (response) => {
        response; // $ExpectType any
    });
    chrome.tabs.sendMessage<string, number>(tabId, message); // $ExpectType Promise<number>
    chrome.tabs.sendMessage<string, number>(tabId, message, (response) => {
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
    chrome.tabs.update(updateProperties, (tab) => {
        tab; // $ExpectType Tab | undefined
    });
    chrome.tabs.update(tabId, updateProperties, (tab) => {
        tab; // $ExpectType Tab | undefined
    });
    // @ts-expect-error
    chrome.tabs.update(() => {}).then(() => {});

    chrome.tabs.onActivated.addListener((activeInfo) => {
        activeInfo; // $ExpectType TabActiveInfo
    });
    chrome.tabs.onActivated.removeListener((activeInfo) => {
        activeInfo; // $ExpectType TabActiveInfo
    });
    chrome.tabs.onActivated.hasListener((activeInfo) => {
        activeInfo; // $ExpectType TabActiveInfo
    });
    chrome.tabs.onActivated.hasListeners(); // $ExpectType boolean

    chrome.tabs.onAttached.addListener((tabId, attachInfo) => {
        tabId; // $ExpectType number
        attachInfo; // $ExpectType TabAttachInfo
    });
    chrome.tabs.onAttached.removeListener((tabId, attachInfo) => {
        tabId; // $ExpectType number
        attachInfo; // $ExpectType TabAttachInfo
    });
    chrome.tabs.onAttached.hasListener((tabId, attachInfo) => {
        tabId; // $ExpectType number
        attachInfo; // $ExpectType TabAttachInfo
    });
    chrome.tabs.onAttached.hasListeners(); // $ExpectType boolean

    chrome.tabs.onCreated.addListener((tab) => {
        tab; // $ExpectType Tab
    });
    chrome.tabs.onCreated.removeListener((tab) => {
        tab; // $ExpectType Tab
    });
    chrome.tabs.onCreated.hasListener((tab) => {
        tab; // $ExpectType Tab
    });
    chrome.tabs.onCreated.hasListeners(); // $ExpectType boolean

    chrome.tabs.onDetached.addListener((tabId, detachInfo) => {
        tabId; // $ExpectType number
        detachInfo; // $ExpectType TabDetachInfo
    });
    chrome.tabs.onDetached.removeListener((tabId, detachInfo) => {
        tabId; // $ExpectType number
        detachInfo; // $ExpectType TabDetachInfo
    });
    chrome.tabs.onDetached.hasListener((tabId, detachInfo) => {
        tabId; // $ExpectType number
        detachInfo; // $ExpectType TabDetachInfo
    });
    chrome.tabs.onDetached.hasListeners(); // $ExpectType boolean

    chrome.tabs.onHighlighted.addListener((highlightInfo) => {
        highlightInfo; // $ExpectType TabHighlightInfo
    });
    chrome.tabs.onHighlighted.removeListener((highlightInfo) => {
        highlightInfo; // $ExpectType TabHighlightInfo
    });
    chrome.tabs.onHighlighted.hasListener((highlightInfo) => {
        highlightInfo; // $ExpectType TabHighlightInfo
    });
    chrome.tabs.onHighlighted.hasListeners(); // $ExpectType boolean

    chrome.tabs.onMoved.addListener((tabId, moveInfo) => {
        tabId; // $ExpectType number
        moveInfo; // $ExpectType TabMoveInfo
    });
    chrome.tabs.onMoved.removeListener((tabId, moveInfo) => {
        tabId; // $ExpectType number
        moveInfo; // $ExpectType TabMoveInfo
    });
    chrome.tabs.onMoved.hasListener((tabId, moveInfo) => {
        tabId; // $ExpectType number
        moveInfo; // $ExpectType TabMoveInfo
    });
    chrome.tabs.onMoved.hasListeners(); // $ExpectType boolean

    chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
        tabId; // $ExpectType number
        removeInfo; // $ExpectType TabRemoveInfo
    });
    chrome.tabs.onRemoved.removeListener((tabId, removeInfo) => {
        tabId; // $ExpectType number
        removeInfo; // $ExpectType TabRemoveInfo
    });
    chrome.tabs.onRemoved.hasListener((tabId, removeInfo) => {
        tabId; // $ExpectType number
        removeInfo; // $ExpectType TabRemoveInfo
    });
    chrome.tabs.onRemoved.hasListeners(); // $ExpectType boolean

    chrome.tabs.onReplaced.addListener((addedTabId, removedTabId) => {
        addedTabId; // $ExpectType number
        removedTabId; // $ExpectType number
    });
    chrome.tabs.onReplaced.removeListener((addedTabId, removedTabId) => {
        addedTabId; // $ExpectType number
        removedTabId; // $ExpectType number
    });
    chrome.tabs.onReplaced.hasListener((addedTabId, removedTabId) => {
        addedTabId; // $ExpectType number
        removedTabId; // $ExpectType number
    });
    chrome.tabs.onReplaced.hasListeners(); // $ExpectType boolean

    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        tabId; // $ExpectType number
        changeInfo; // $ExpectType TabChangeInfo
        tab; // $ExpectType Tab
    });
    chrome.tabs.onUpdated.removeListener((tabId, changeInfo, tab) => {
        tabId; // $ExpectType number
        changeInfo; // $ExpectType TabChangeInfo
        tab; // $ExpectType Tab
    });
    chrome.tabs.onUpdated.hasListener((tabId, changeInfo, tab) => {
        tabId; // $ExpectType number
        changeInfo; // $ExpectType TabChangeInfo
        tab; // $ExpectType Tab
    });
    chrome.tabs.onUpdated.hasListeners(); // $ExpectType boolean

    chrome.tabs.onZoomChange.addListener((zoomChangeInfo) => {
        zoomChangeInfo; // $ExpectType ZoomChangeInfo
    });
    chrome.tabs.onZoomChange.removeListener((zoomChangeInfo) => {
        zoomChangeInfo; // $ExpectType ZoomChangeInfo
    });
    chrome.tabs.onZoomChange.hasListener((zoomChangeInfo) => {
        zoomChangeInfo; // $ExpectType ZoomChangeInfo
    });
    chrome.tabs.onZoomChange.hasListeners(); // $ExpectType boolean
}

// https://developer.chrome.com/docs/extensions/reference/tabGroups
async function testTabGroupsForPromise() {
    await chrome.tabGroups.get(0);
    await chrome.tabGroups.move(0, { index: 0 });
    await chrome.tabGroups.query({});
    await chrome.tabGroups.update(0, {});
}

// https://developer.chrome.com/docs/extensions/reference/windows
async function testWindowsForPromise() {
    await chrome.windows.get(0);
    await chrome.windows.get(0, {});
    await chrome.windows.getCurrent();
    await chrome.windows.getCurrent({});
    await chrome.windows.create();
    await chrome.windows.create({});
    await chrome.windows.getAll();
    await chrome.windows.getAll({});
    await chrome.windows.update(0, {});
    await chrome.windows.remove(0);
    await chrome.windows.getLastFocused();
    await chrome.windows.getLastFocused({});
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

    await chrome.declarativeNetRequest.getAvailableStaticRuleCount();
    chrome.declarativeNetRequest.getAvailableStaticRuleCount(count => {
        // $ExpectType number
        count;
    });
    await chrome.declarativeNetRequest.getDynamicRules();
    chrome.declarativeNetRequest.getDynamicRules(rules => {
        // $ExpectType Rule[]
        rules;

        const rule = rules[0];
        rule.action; // $ExpectType RuleAction
        rule.condition; // $ExpectType RuleCondition
        rule.id; // $ExpectType number
        rule.priority; // $ExpectType number | undefined
        rule.condition.excludedResponseHeaders; // $ExpectType HeaderInfo[] | undefined
        rule.condition.responseHeaders; // $ExpectType HeaderInfo[] | undefined
    });

    await chrome.declarativeNetRequest.getEnabledRulesets();
    chrome.declarativeNetRequest.getEnabledRulesets(sets => {
        // $ExpectType string[]
        sets;
    });
    await chrome.declarativeNetRequest.getMatchedRules({});
    await chrome.declarativeNetRequest.getMatchedRules();
    await chrome.declarativeNetRequest.getSessionRules();
    await chrome.declarativeNetRequest.isRegexSupported({ regex: "regex1" });
    await chrome.declarativeNetRequest.setExtensionActionOptions({});
    await chrome.declarativeNetRequest.updateDynamicRules({});
    await chrome.declarativeNetRequest.updateEnabledRulesets({});
    await chrome.declarativeNetRequest.updateSessionRules({});

    await chrome.declarativeNetRequest.updateDynamicRules({});
    await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [{
            action: {
                type: chrome.declarativeNetRequest.RuleActionType.ALLOW,
            },
            condition: {
                initiatorDomains: ["www.example.com"],
                tabIds: [2, 3, 76],
            },
            id: 2,
            priority: 3,
        }],
    });

    await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [{
            action: {
                type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
                requestHeaders: [{
                    header: "X-Test-Header",
                    operation: chrome.declarativeNetRequest.HeaderOperation.SET,
                    value: "test-value",
                }],
            },
            condition: {
                resourceTypes: [chrome.declarativeNetRequest.ResourceType.MAIN_FRAME],
                domains: ["www.example.com"],
            },
            id: 2,
            priority: 3,
        }],
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

// https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getContexts
function testRuntimeGetContexts() {
    chrome.runtime.ContextType.TAB === "TAB";
    chrome.runtime.ContextType.POPUP === "POPUP";
    chrome.runtime.ContextType.BACKGROUND === "BACKGROUND";
    chrome.runtime.ContextType.OFFSCREEN_DOCUMENT === "OFFSCREEN_DOCUMENT";
    chrome.runtime.ContextType.SIDE_PANEL === "SIDE_PANEL";
    chrome.runtime.ContextType.DEVELOPER_TOOLS === "DEVELOPER_TOOLS";

    const options = { incognito: true, tabIds: [1, 2, 3] };

    chrome.runtime.getContexts(options);
}

// https://developer.chrome.com/docs/extensions/reference/runtime/#method-sendMessage
function testRuntimeSendMessage() {
    const options = { includeTlsChannelId: true };

    chrome.runtime.sendMessage("Hello World!").then(() => {});
    chrome.runtime.sendMessage("Hello World!", console.log);
    chrome.runtime.sendMessage<string>("Hello World!", console.log);
    chrome.runtime.sendMessage<string, number>("Hello World!", console.log);
    // @ts-expect-error
    chrome.runtime.sendMessage<number>("Hello World!", console.log);
    // @ts-expect-error
    chrome.runtime.sendMessage<string, boolean>("Hello World!", (num: number) => alert(num + 1));
    chrome.runtime.sendMessage("Hello World!", options).then(() => {});
    chrome.runtime.sendMessage("Hello World!", options, console.log);
    chrome.runtime.sendMessage<string>("Hello World!", options, console.log);
    chrome.runtime.sendMessage<string, number>("Hello World!", options, console.log);
    // @ts-expect-error
    chrome.runtime.sendMessage<number>("Hello World!", options, console.log);
    // @ts-expect-error
    chrome.runtime.sendMessage<string, boolean>("Hello World!", options, (num: number) => alert(num + 1));

    chrome.runtime.sendMessage("extension-id", "Hello World!").then(() => {});
    chrome.runtime.sendMessage("extension-id", "Hello World!", console.log);
    chrome.runtime.sendMessage<string>("extension-id", "Hello World!", console.log);
    chrome.runtime.sendMessage<string, number>("extension-id", "Hello World!", console.log);
    // @ts-expect-error
    chrome.runtime.sendMessage<number>("extension-id", "Hello World!", console.log);
    // @ts-expect-error
    chrome.runtime.sendMessage<string, boolean>("extension-id", "Hello World!", (num: number) => alert(num + 1));
    chrome.runtime.sendMessage("extension-id", "Hello World!", options).then(() => {});
    chrome.runtime.sendMessage("extension-id", "Hello World!", options, console.log);
    chrome.runtime.sendMessage<string>("extension-id", "Hello World!", options, console.log);
    chrome.runtime.sendMessage<string, number>("extension-id", "Hello World!", options, console.log);
    // @ts-expect-error
    chrome.runtime.sendMessage<number>("extension-id", "Hello World!", console.log);
    // @ts-expect-error
    chrome.runtime.sendMessage<string, boolean>("extension-id", "Hello World!", (num: number) => alert(num + 1));

    chrome.runtime.sendMessage(undefined, "Hello World!", console.log);
    chrome.runtime.sendMessage(null, "Hello World!", console.log);
}

function testRuntimeSendNativeMessage() {
    chrome.runtime.sendNativeMessage("application", console.log).then(() => {});
    chrome.runtime.sendNativeMessage("application", console.log, (num: number) => alert(num + 1));
}

function testTabsSendRequest() {
    chrome.tabs.sendRequest(1, "Hello World!");
    chrome.tabs.sendRequest(2, "Hello World!", console.log);
    chrome.tabs.sendRequest(3, "Hello World!", console.log);
    chrome.tabs.sendRequest<string>(4, "Hello World!", console.log);
    chrome.tabs.sendRequest<string, number>(5, "Hello World!", console.log);
    // @ts-expect-error
    chrome.tabs.sendRequest<number>(6, "Hello World!", console.log);
    // @ts-expect-error
    chrome.tabs.sendRequest<string, string>(7, "Hello World!", (num: number) => alert(num + 1));
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

function testContextMenusCreate() {
    const creationOptions: chrome.contextMenus.CreateProperties = {
        id: "dummy-id",
        documentUrlPatterns: ["https://*/*"],
        checked: false,
        title: "Hello World!",
        contexts: ["all"],
        enabled: true,
        targetUrlPatterns: ["https://example.com/*"],
        onclick: (info, tab: chrome.tabs.Tab) => console.log(tab),
        parentId: 1,
        type: "normal",
        visible: true,
    };
    chrome.contextMenus.create(creationOptions, () => console.log("created")); // $ExpectType string | number
    chrome.contextMenus.create({ ...creationOptions, contexts: ["action", "page_action"] }); // $ExpectType string | number
    chrome.contextMenus.create({ ...creationOptions, contexts: "page_action" }); // $ExpectType string | number
    // @ts-expect-error
    chrome.contextMenus.create({ ...creationOptions, contexts: ["wrong"] });
}

function testContextMenusRemove() {
    chrome.contextMenus.remove(1); // $ExpectType Promise<void>
    chrome.contextMenus.remove(1, () => console.log("removed")); // $ExpectType void
    // @ts-expect-error
    chrome.contextMenus.remove(1, (invalid: any) => console.log("removed"));
    chrome.contextMenus.remove("dummy-id");
    chrome.contextMenus.remove("dummy-id", () => console.log("removed"));
    // @ts-expect-error
    chrome.contextMenus.remove("dummy-id", (invalid: any) => console.log("removed"));
    chrome.contextMenus.remove(Math.random() > 0.5 ? "1" : 1);
}

function testContextMenusRemoveAll() {
    chrome.contextMenus.removeAll(); // $ExpectType Promise<void>
    chrome.contextMenus.removeAll(() => console.log("removed all")); // $ExpectType void
    // @ts-expect-error
    chrome.contextMenus.removeAll((invalid: any) => console.log("removed"));
}

function testContextMenusUpdate() {
    chrome.contextMenus.update(1, { title: "Hello World!" }); // $ExpectType Promise<void>
    chrome.contextMenus.update(1, { title: "Hello World!" }, () => console.log("updated")); // $ExpectType void
    chrome.contextMenus.update(Math.random() > 0.5 ? "1" : 1, { title: "Hello World!" }, () => console.log("updated"));
    // @ts-expect-error
    chrome.contextMenus.update(1, { title: "Hello World!" }, (invalid: any) => console.log("updated"));
    chrome.contextMenus.update("dummy-id", { title: "Hello World!" });
    chrome.contextMenus.update("dummy-id", { title: "Hello World!" }, () => console.log("updated"));
    // @ts-expect-error
    chrome.contextMenus.update("dummy-id", { title: "Hello World!" }, (invalid: any) => console.log("updated"));

    chrome.contextMenus.update(2, {
        documentUrlPatterns: ["https://*/*"],
        checked: false,
        title: "Hello World!",
        contexts: ["all"],
        enabled: true,
        targetUrlPatterns: ["https://example.com/*"],
        onclick: ({
            checked,
            editable,
            frameId,
            frameUrl,
            linkUrl,
            mediaType,
            menuItemId,
            pageUrl,
            parentMenuItemId,
            selectionText,
            srcUrl,
            wasChecked,
        }, tab: chrome.tabs.Tab) =>
            console.log(
                tab,
                checked,
                editable,
                frameId,
                frameUrl,
                linkUrl,
                mediaType,
                menuItemId,
                pageUrl,
                parentMenuItemId,
                selectionText,
                srcUrl,
                wasChecked,
            ),
        parentId: 1,
        type: "normal",
        visible: true,
    });

    // @ts-expect-error
    chrome.contextMenus.update(1, { documentUrlPatterns: false });
    // @ts-expect-error
    chrome.contextMenus.update(1, { checked: "invalid" });
    // @ts-expect-error
    chrome.contextMenus.update(1, { title: 1 });
    // @ts-expect-error
    chrome.contextMenus.update(1, { contexts: true });
    // @ts-expect-error
    chrome.contextMenus.update(1, { enabled: "invalid" });
    // @ts-expect-error
    chrome.contextMenus.update(1, { targetUrlPatterns: false });
    // @ts-expect-error
    chrome.contextMenus.update(1, { onclick: false });
    // @ts-expect-error
    chrome.contextMenus.update(1, { parentId: false });
    // @ts-expect-error
    chrome.contextMenus.update(1, { type: false });
    // @ts-expect-error
    chrome.contextMenus.update(1, { visible: 1 });
}

// https://developer.chrome.com/docs/extensions/reference/api/permissions
function testPermissions() {
    const permissions: chrome.permissions.Permissions = {
        permissions: ["tabs"],
        origins: ["https://example.com/*"],
    };

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

    chrome.permissions.onAdded.addListener((permissions) => {
        permissions; // $ExpectType Permissions
    });
    chrome.permissions.onAdded.removeListener((permissions) => {
        permissions; // $ExpectType Permissions
    });
    chrome.permissions.onAdded.hasListener((permissions) => {
        permissions; // $ExpectType Permissions
    });
    chrome.permissions.onAdded.hasListeners(); // $ExpectType boolean

    chrome.permissions.onRemoved.addListener((permissions) => {
        permissions; // $ExpectType Permissions
    });
    chrome.permissions.onRemoved.removeListener((permissions) => {
        permissions; // $ExpectType Permissions
    });
    chrome.permissions.onRemoved.hasListener((permissions) => {
        permissions; // $ExpectType Permissions
    });
    chrome.permissions.onRemoved.hasListeners(); // $ExpectType boolean
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

// https://developer.chrome.com/docs/extensions/reference/downloads
function testDownloads() {
    chrome.downloads.search({}, (results) => {});
    chrome.downloads.pause(1, () => {});
    chrome.downloads.getFileIcon(1, (iconURL) => {});
    chrome.downloads.getFileIcon(1, {}, (iconURL) => {});
    chrome.downloads.resume(1, () => {});
    chrome.downloads.cancel(1, () => {});
    chrome.downloads.download({ url: "https://example.com" }, (downloadId) => {});
    chrome.downloads.open(1);
    chrome.downloads.show(1);
    chrome.downloads.showDefaultFolder();
    chrome.downloads.erase({}, (erasedIds) => {});
    chrome.downloads.removeFile(1, () => {});
    chrome.downloads.acceptDanger(1, () => {});
    chrome.downloads.drag(1);
    chrome.downloads.setShelfEnabled(true);
    chrome.downloads.setUiOptions({ enabled: true }, () => {});
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

// https://developer.chrome.com/docs/extensions/reference/identity/
async function testIdentity() {
    // $ExpectType void
    chrome.identity.launchWebAuthFlow({ url: "https://example.com " }, () => {});

    chrome.identity.clearAllCachedAuthTokens(() => {});
    chrome.identity.getAccounts((accounts: chrome.identity.AccountInfo[]) => {});
    chrome.identity.getAuthToken({}, (token?: string, grantedScopes?: string[]) => {});
    chrome.identity.removeCachedAuthToken({ token: "1234" }, () => {});
}

// https://developer.chrome.com/docs/extensions/reference/identity/
async function testIdentityForPromise() {
    // $ExpectType string | undefined
    await chrome.identity.launchWebAuthFlow({ url: "https://example.com " });

    await chrome.identity.clearAllCachedAuthTokens();
    const accounts: chrome.identity.AccountInfo[] = await chrome.identity.getAccounts();
    const token = await chrome.identity.getAuthToken({});
    await chrome.identity.removeCachedAuthToken({ token: "1234" });
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
        reasons: [chrome.offscreen.Reason.CLIPBOARD],
        url: "https://example.com",
        justification: "Example",
    });
    await chrome.offscreen.hasDocument();
    await chrome.offscreen.closeDocument();
}

// https://developer.chrome.com/docs/extensions/reference/fileSystemProvider/
function testFileSystemProvider() {
    // Checking onGetMetadataRequested, its option and EntryMetadata.
    chrome.fileSystemProvider.onGetMetadataRequested.addListener(
        (
            options: chrome.fileSystemProvider.MetadataRequestedEventOptions,
            successCallback: (metadata: chrome.fileSystemProvider.EntryMetadata) => void,
            errorCallback: (error: string) => void,
        ) => {
            const entryMetadata: chrome.fileSystemProvider.EntryMetadata = {};
            if (options.isDirectory) {
                entryMetadata.isDirectory = true;
            }
            if (options.name) {
                entryMetadata.name = "some-file.txt";
            }
            if (options.size) {
                entryMetadata.size = 42;
            }
            if (options.modificationTime) {
                entryMetadata.modificationTime = new Date();
            }
            if (options.mimeType) {
                entryMetadata.mimeType = "text/plain";
            }
            if (options.thumbnail) {
                entryMetadata.thumbnail = "DaTa:ImAgE/pNg;base64";
            }
            if (options.cloudIdentifier) {
                entryMetadata.cloudIdentifier = { providerName: "provider-name", id: "id" };
            }
            if (options.cloudFileInfo) {
                entryMetadata.cloudFileInfo = { versionTag: "versionA" };
            }
        },
    );

    // Checking onReadDirectoryRequested.
    chrome.fileSystemProvider.onReadDirectoryRequested.addListener(
        (
            options: chrome.fileSystemProvider.DirectoryPathRequestedEventOptions,
            successCallback: (entries: chrome.fileSystemProvider.EntryMetadata[], hasMore: boolean) => void,
            errorCallback: (error: string) => void,
        ) => {},
    );

    // Checking onGetActionsRequested.
    chrome.fileSystemProvider.onGetActionsRequested.addListener(
        (
            options: chrome.fileSystemProvider.GetActionsRequestedOptions,
            successCallback: (actions: chrome.fileSystemProvider.Action[]) => void,
            errorCallback: (error: string) => void,
        ) => {},
    );

    // Checking onExecuteActionRequested.
    chrome.fileSystemProvider.onExecuteActionRequested.addListener(
        (
            options: chrome.fileSystemProvider.ExecuteActionRequestedOptions,
            successCallback: () => void,
            errorCallback: (error: string) => void,
        ) => {},
    );

    // Checking onCreateDirectoryRequested.
    chrome.fileSystemProvider.onCreateDirectoryRequested.addListener(
        (
            options: chrome.fileSystemProvider.CreateDirectoryRequestedEventOptions,
            successCallback: Function,
            errorCallback: (error: string) => void,
        ) => {},
    );

    // Checking onOpenFileRequested.
    chrome.fileSystemProvider.onOpenFileRequested.addListener(
        (
            options: chrome.fileSystemProvider.OpenFileRequestedEventOptions,
            successCallback: (metadata?: chrome.fileSystemProvider.EntryMetadata) => void,
            errorCallback: (error: string) => void,
        ) => {},
    );
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
    const worldProperties = { csp: "script-src 'self'", messaging: true };
    chrome.userScripts.configureWorld(worldProperties); // $ExpectType Promise<void>
    chrome.userScripts.configureWorld(worldProperties, () => void 0); // $ExpectType void

    const userScriptFilter = { ids: ["scriptId1", "scriptId2"] };
    chrome.userScripts.getScripts(userScriptFilter); // $ExpectType Promise<RegisteredUserScript[]>
    chrome.userScripts.getScripts(userScriptFilter, (scripts: chrome.userScripts.RegisteredUserScript[]) => void 0); // $ExpectType void

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

    const badScripts = [
        {
            id: "badScriptId",
            matches: ["*://example.com/*"],
        },
    ];

    chrome.userScripts.register(scripts); // $ExpectType Promise<void>
    chrome.userScripts.register(scripts, () => void 0); // $ExpectType void
    // @ts-expect-error Missing required property 'js'.
    chrome.userScripts.register(badScripts);

    chrome.userScripts.unregister(userScriptFilter); // $ExpectType Promise<void>
    chrome.userScripts.unregister(userScriptFilter, () => void 0); // $ExpectType void

    chrome.userScripts.update(scripts); // $ExpectType Promise<void>
    chrome.userScripts.update(scripts, () => void 0); // $ExpectType void
    // @ts-expect-error Missing required property 'js'.
    chrome.userScripts.update(badScripts);
}

// https://developer.chrome.com/docs/extensions/reference/api/enterprise/platformKeys
function testEnterPrisePlatformKeys() {
    chrome.enterprise.platformKeys.Scope.MACHINE === "MACHINE";
    chrome.enterprise.platformKeys.Scope.USER === "USER";

    chrome.enterprise.platformKeys.Algorithm.ECDSA === "ECDSA";
    chrome.enterprise.platformKeys.Algorithm.RSA === "RSA";

    chrome.enterprise.platformKeys.challengeKey({ // $ExpectType void
        scope: "MACHINE",
        challenge: new ArrayBuffer(0),
        registerKey: { algorithm: "ECDSA" },
    }, () => {});

    chrome.enterprise.platformKeys.challengeMachineKey(new ArrayBuffer(0), true, response => {}); // $ExpectType void
    chrome.enterprise.platformKeys.challengeMachineKey(new ArrayBuffer(0), response => {}); // $ExpectType void

    chrome.enterprise.platformKeys.challengeUserKey(new ArrayBuffer(0), true, response => {}); // $ExpectType void

    chrome.enterprise.platformKeys.getCertificates("tokenId", certificates => {}); // $ExpectType void

    chrome.enterprise.platformKeys.getTokens(tokens => {}); // $ExpectType void

    chrome.enterprise.platformKeys.importCertificate("tokenId", new ArrayBuffer(0), () => {}); // $ExpectType void

    chrome.enterprise.platformKeys.removeCertificate("tokenId", new ArrayBuffer(0), () => {}); // $ExpectType void
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

    chrome.printing.onJobStatusChanged.addListener((jobId, status) => {
        jobId; // $ExpectType string
        status; // $ExpectType JobStatus
    });
    chrome.printing.onJobStatusChanged.removeListener((jobId, status) => {
        jobId; // $ExpectType string
        status; // $ExpectType JobStatus
    });
    chrome.printing.onJobStatusChanged.hasListener((jobId, status) => {
        jobId; // $ExpectType string
        status; // $ExpectType JobStatus
    });
    chrome.printing.onJobStatusChanged.hasListeners();
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

    chrome.printingMetrics.onPrintJobFinished.addListener((jobInfo) => {
        jobInfo; // $ExpectType PrintJobInfo
    });
    chrome.printingMetrics.onPrintJobFinished.removeListener((jobInfo) => {
        jobInfo; // $ExpectType PrintJobInfo
    });
    chrome.printingMetrics.onPrintJobFinished.hasListener((jobInfo) => {
        jobInfo; // $ExpectType PrintJobInfo
    });
    chrome.printingMetrics.onPrintJobFinished.hasListeners();
}

// https://developer.chrome.com/docs/extensions/reference/api/webRequest
function testWebRequest() {
    const filter: chrome.webRequest.RequestFilter = {
        tabId: 1,
        urls: ["https://example.com/*"],
        types: ["main_frame"],
        windowId: 2,
    };
    const extraInfoSpec = ["extraHeaders"];

    const blockingResponse = {
        cancel: true,
        redirectUrl: "https://example.com",
        requestHeaders: [{ name: "name", value: "value" }],
    };

    chrome.webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES === 20;

    chrome.webRequest.handlerBehaviorChanged(() => {}); // $ExpectType void
    chrome.webRequest.handlerBehaviorChanged(); // $ExpectType Promise<void>
    // @ts-expect-error
    chrome.webRequest.handlerBehaviorChanged(() => {}).then(() => {});

    chrome.webRequest.onAuthRequired.addListener(
        ({ frameId }, asyncCallback) => {
            frameId; // $ExpectType number
            if (!asyncCallback) return;
            asyncCallback(blockingResponse); // $ExpectType void
        },
        filter,
        extraInfoSpec,
    );
    chrome.webRequest.onAuthRequired.removeListener(({ frameId }, asyncCallback) => {
        frameId; // $ExpectType number
        if (!asyncCallback) return;
        asyncCallback(blockingResponse); // $ExpectType void
    });
    chrome.webRequest.onAuthRequired.hasListener(({ frameId }, asyncCallback) => {
        frameId; // $ExpectType number
        if (!asyncCallback) return;
        asyncCallback(blockingResponse); // $ExpectType void
    });
    chrome.webRequest.onAuthRequired.hasListeners();

    chrome.webRequest.onBeforeRedirect.addListener(
        ({ frameId }) => {
            frameId; // $ExpectType number
        },
        filter,
        extraInfoSpec,
    );
    chrome.webRequest.onBeforeRedirect.removeListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onBeforeRedirect.hasListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onBeforeRedirect.hasListeners();

    chrome.webRequest.onBeforeRequest.addListener(
        ({ frameId }) => {
            frameId; // $ExpectType number
        },
        filter,
        extraInfoSpec,
    );
    chrome.webRequest.onBeforeRequest.removeListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onBeforeRequest.hasListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onBeforeRequest.hasListeners();

    chrome.webRequest.onBeforeSendHeaders.addListener(
        (details) => {
            details; // $ExpectType WebRequestHeadersDetails
        },
        filter,
        extraInfoSpec,
    );
    chrome.webRequest.onBeforeSendHeaders.removeListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onBeforeSendHeaders.hasListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onBeforeSendHeaders.hasListeners();

    chrome.webRequest.onCompleted.addListener(
        (details) => {
            details; // $ExpectType WebResponseCacheDetails
        },
        filter,
        extraInfoSpec,
    );
    chrome.webRequest.onCompleted.removeListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onCompleted.hasListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onCompleted.hasListeners();

    chrome.webRequest.onErrorOccurred.addListener(
        (details) => {
            details; // $ExpectType WebResponseErrorDetails
        },
        filter,
        extraInfoSpec,
    );
    chrome.webRequest.onErrorOccurred.removeListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onErrorOccurred.hasListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onErrorOccurred.hasListeners();

    chrome.webRequest.onHeadersReceived.addListener(
        (details) => {
            details; // $ExpectType WebResponseHeadersDetails
        },
        filter,
        extraInfoSpec,
    );
    chrome.webRequest.onHeadersReceived.removeListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onHeadersReceived.hasListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onHeadersReceived.hasListeners();

    chrome.webRequest.onResponseStarted.addListener(
        (details) => {
            details; // $ExpectType WebResponseCacheDetails
        },
        filter,
        extraInfoSpec,
    );
    chrome.webRequest.onResponseStarted.removeListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onResponseStarted.hasListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onResponseStarted.hasListeners();

    chrome.webRequest.onSendHeaders.addListener(
        (details) => {
            details; // $ExpectType WebRequestHeadersDetails
        },
        filter,
        extraInfoSpec,
    );
    chrome.webRequest.onSendHeaders.removeListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onSendHeaders.hasListener(({ frameId }) => {
        frameId; // $ExpectType number
    });
    chrome.webRequest.onSendHeaders.hasListeners();
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

    chrome.accessibilityFeatures.animationPolicy.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<"allowed" | "once" | "none">
    });
    chrome.accessibilityFeatures.animationPolicy.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<"allowed" | "once" | "none">
    });
    chrome.accessibilityFeatures.animationPolicy.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<"allowed" | "once" | "none">
    });
    chrome.accessibilityFeatures.animationPolicy.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.autoclick.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.autoclick.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.autoclick.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.autoclick.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.caretHighlight.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.caretHighlight.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.caretHighlight.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.caretHighlight.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.cursorColor.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.cursorColor.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.cursorColor.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.cursorColor.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.cursorHighlight.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.cursorHighlight.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.cursorHighlight.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.cursorHighlight.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.dictation.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.dictation.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.dictation.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.dictation.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.dockedMagnifier.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.dockedMagnifier.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.dockedMagnifier.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.dockedMagnifier.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.focusHighlight.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.focusHighlight.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.focusHighlight.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.focusHighlight.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.highContrast.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.highContrast.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.highContrast.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.highContrast.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.largeCursor.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.largeCursor.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.largeCursor.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.largeCursor.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.screenMagnifier.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.screenMagnifier.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.screenMagnifier.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.screenMagnifier.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.selectToSpeak.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.selectToSpeak.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.selectToSpeak.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.selectToSpeak.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.spokenFeedback.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.spokenFeedback.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.spokenFeedback.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.spokenFeedback.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.stickyKeys.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.stickyKeys.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.stickyKeys.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.stickyKeys.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.switchAccess.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.switchAccess.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.switchAccess.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.switchAccess.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.accessibilityFeatures.virtualKeyboard.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.virtualKeyboard.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.virtualKeyboard.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.accessibilityFeatures.virtualKeyboard.onChange.hasListeners(); // $ExpectType boolean
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

    chrome.privacy.services.alternateErrorPagesEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.alternateErrorPagesEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.alternateErrorPagesEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.alternateErrorPagesEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.services.autofillAddressEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.autofillAddressEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.autofillAddressEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.autofillAddressEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.services.autofillCreditCardEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.autofillCreditCardEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.autofillCreditCardEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.autofillCreditCardEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.services.autofillEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.autofillEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.autofillEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.autofillEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.services.passwordSavingEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.passwordSavingEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.passwordSavingEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.passwordSavingEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.services.safeBrowsingEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.safeBrowsingEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.safeBrowsingEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.safeBrowsingEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.services.searchSuggestEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.searchSuggestEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.searchSuggestEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.searchSuggestEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.services.spellingServiceEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.spellingServiceEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.spellingServiceEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.spellingServiceEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.services.translationServiceEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.translationServiceEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.translationServiceEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.services.translationServiceEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.network.networkPredictionEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.network.networkPredictionEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.network.networkPredictionEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.network.networkPredictionEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.network.webRTCIPHandlingPolicy.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<"default" | "default_public_and_private_interfaces" | "default_public_interface_only" | "disable_non_proxied_udp">
    });
    chrome.privacy.network.webRTCIPHandlingPolicy.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<"default" | "default_public_and_private_interfaces" | "default_public_interface_only" | "disable_non_proxied_udp">
    });
    chrome.privacy.network.webRTCIPHandlingPolicy.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<"default" | "default_public_and_private_interfaces" | "default_public_interface_only" | "disable_non_proxied_udp">
    });
    chrome.privacy.network.webRTCIPHandlingPolicy.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.websites.adMeasurementEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.adMeasurementEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.adMeasurementEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.adMeasurementEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.websites.doNotTrackEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.doNotTrackEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.doNotTrackEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.doNotTrackEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.websites.fledgeEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.fledgeEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.fledgeEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.fledgeEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.websites.hyperlinkAuditingEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.hyperlinkAuditingEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.hyperlinkAuditingEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.hyperlinkAuditingEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.websites.protectedContentEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.protectedContentEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.protectedContentEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.protectedContentEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.websites.referrersEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.referrersEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.referrersEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.referrersEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.websites.relatedWebsiteSetsEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.relatedWebsiteSetsEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.relatedWebsiteSetsEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.relatedWebsiteSetsEnabled.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.websites.thirdPartyCookiesAllowed.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.thirdPartyCookiesAllowed.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.thirdPartyCookiesAllowed.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.thirdPartyCookiesAllowed.onChange.hasListeners(); // $ExpectType boolean

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

    chrome.privacy.websites.topicsEnabled.onChange.addListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.topicsEnabled.onChange.removeListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.topicsEnabled.onChange.hasListener(details => {
        details; // $ExpectType ChromeSettingOnChangeDetails<boolean>
    });
    chrome.privacy.websites.topicsEnabled.onChange.hasListeners(); // $ExpectType boolean
}
