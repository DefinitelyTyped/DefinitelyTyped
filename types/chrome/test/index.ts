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

// https://developer.chrome.com/extensions/examples/extensions/catblock/background.js
function catBlock() {
    var loldogs: string[];
    chrome.webRequest.onBeforeRequest.addListener(
        function(info) {
            console.log("Cat intercepted: " + info.url);
            // Redirect the lolcat request to a random loldog URL.
            var i = Math.round(Math.random() * loldogs.length);
            return { redirectUrl: loldogs[i] };
        },
        // filters
        {
            urls: ["https://i.chzbgr.com/*"],
            types: ["image"],
        },
        // extraInfoSpec
        ["blocking"],
    );
}

// webNavigation.onSendHeaders.addListener example
function webRequestAddListenerMandatoryFilters() {
    // @ts-expect-error
    chrome.webRequest.onBeforeRequest.addListener(info => {});

    chrome.webRequest.onSendHeaders.addListener(details => {
        console.log(
            (details.requestHeaders ?? [])[0].name,
            details.documentId,
            details.documentLifecycle,
            details.frameType,
            details.frameId,
            details.initiator,
            details.parentDocumentId,
            details.parentFrameId,
            details.requestId,
            details.tabId,
            details.timeStamp,
            details.type,
            details.url,
        );
    }, {
        urls: ["<all_urls>"],
    }, ["requestHeaders"]);
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

// for chrome.tabs.TAB_ID_NONE
function realTabsOnly() {
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            if (details.tabId === chrome.tabs.TAB_ID_NONE) {
                console.log("Request not related to a tab. %o", details);
                return;
            }
            // ...
        },
        {
            urls: ["<all_urls>"],
        },
    );
}

// contrived settings example
function proxySettings() {
    chrome.proxy.settings.get({ incognito: true }, details => {
        var val = details.value;
        var level: string = details.levelOfControl;
        var incognito: boolean = details.incognitoSpecific!;
    });

    // bare minimum set call
    chrome.proxy.settings.set({ value: "something" });

    // add a scope and callback
    chrome.proxy.settings.set(
        {
            value: "something",
            scope: "regular",
        },
        () => {},
    );

    chrome.proxy.settings.clear({});

    // clear with a scope set
    chrome.proxy.settings.clear({ scope: "regular" });
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
    function getCallback(loadedData: { [key: string]: any }) {
        var myValue: { x: number } = loadedData["myKey"];
    }

    chrome.storage.sync.get(getCallback);
    chrome.storage.sync.get("myKey", getCallback);
    chrome.storage.sync.get(["myKey", "myKey2"], getCallback);
    chrome.storage.sync.get({ foo: 1, bar: 2 }, getCallback);
    chrome.storage.sync.get(null, getCallback);

    function getBytesInUseCallback(bytesInUse: number) {
        console.log(bytesInUse);
    }

    chrome.storage.sync.getBytesInUse(getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse("myKey", getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse(["myKey", "myKey2"], getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse(null, getBytesInUseCallback);

    function doneCallback() {
        console.log("done");
    }

    chrome.storage.sync.set({ foo: 1, bar: 2 });
    chrome.storage.sync.set({ foo: 1, bar: 2 }, doneCallback);

    chrome.storage.sync.remove("myKey");
    chrome.storage.sync.remove("myKey", doneCallback);
    chrome.storage.sync.remove(["myKey", "myKey2"]);
    chrome.storage.sync.remove(["myKey", "myKey2"], doneCallback);

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

// https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/
async function testDeclarativeNetRequest() {
    chrome.declarativeNetRequest.getDynamicRules(rules => {
        // $ExpectType Rule[]
        rules;

        const rule = rules[0];
        rule.action; // $ExpectType RuleAction
        rule.condition; // $ExpectType RuleCondition
        rule.id; // $ExpectType number
        rule.priority; // $ExpectType number | undefined
    });

    chrome.declarativeNetRequest.getAvailableStaticRuleCount(count => {
        // $ExpectType number
        count;
    });

    chrome.declarativeNetRequest.getEnabledRulesets(sets => {
        // $ExpectType string[]
        sets;
    });
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

// https://developer.chrome.com/docs/extensions/reference/action/
async function testActionForPromise() {
    await chrome.action.disable();
    await chrome.action.enable();
    await chrome.action.disable(0);
    await chrome.action.enable(0);
    await chrome.action.getBadgeBackgroundColor({});
    await chrome.action.getBadgeText({});
    const getBackTextColor1: chrome.action.ColorArray = await chrome.action.getBadgeTextColor({});
    const getBackTextColor2: chrome.action.ColorArray = await chrome.action.getBadgeTextColor({ tabId: 0 });
    await chrome.action.getPopup({});
    await chrome.action.getTitle({});
    await chrome.action.getUserSettings();
    const isEnabled1: boolean = await chrome.action.isEnabled();
    const isEnabled2: boolean = await chrome.action.isEnabled(0);
    await chrome.action.openPopup({ windowId: 1 });
    await chrome.action.setBadgeBackgroundColor({ color: "white" });
    await chrome.action.setBadgeText({ text: "text1" });
    await chrome.action.setBadgeTextColor({ color: "white" });
    await chrome.action.setIcon({ path: { "16": "path/to/icon.png" } });
    await chrome.action.setPopup({ popup: "popup1" });
    await chrome.action.setTitle({ title: "title1" });
}

// https://developer.chrome.com/docs/extensions/reference/action/
async function testActionForCallback() {
    chrome.action.getBadgeTextColor({}, (color: chrome.action.ColorArray) => void 0);
    chrome.action.getBadgeTextColor({ tabId: 0 }, (color: chrome.action.ColorArray) => void 0);
    chrome.action.isEnabled(0, (isEnabled: boolean) => void 0);
    chrome.action.isEnabled(undefined, (isEnabled: boolean) => void 0);
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

// https://developer.chrome.com/docs/extensions/reference/cookies
async function testCookieForPromise() {
    await chrome.cookies.getAllCookieStores();
    await chrome.cookies.getAll({});
    await chrome.cookies.set({ url: "url1" });
    await chrome.cookies.remove({ url: "url1", name: "name1" });
    await chrome.cookies.get({ url: "url1", name: "name1" });
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

// https://developer.chrome.com/docs/extensions/reference/system_display
async function testSystemDisplayForPromise() {
    await chrome.system.display.getInfo();
    await chrome.system.display.getInfo({});
    await chrome.system.display.getDisplayLayout();
    await chrome.system.display.setDisplayProperties("id1", {});
    await chrome.system.display.setDisplayLayout([]);
    await chrome.system.display.showNativeTouchCalibration("id1");
    await chrome.system.display.setMirrorMode({});
}

// https://developer.chrome.com/docs/extensions/reference/tabs
async function testTabsForPromise() {
    await chrome.tabs.executeScript({});
    await chrome.tabs.executeScript(0, {});
    await chrome.tabs.get(0);
    await chrome.tabs.getAllInWindow();
    await chrome.tabs.getAllInWindow(0);
    await chrome.tabs.getCurrent(); // $ExpectType Tab | undefined
    await chrome.tabs.getSelected();
    await chrome.tabs.getSelected(0);
    await chrome.tabs.create({});
    await chrome.tabs.duplicate(0); // $ExpectType Tab | undefined
    await chrome.tabs.move(0, { index: 0 });
    await chrome.tabs.move([0], { index: 0 });
    await chrome.tabs.update({});
    await chrome.tabs.update(0, {});
    await chrome.tabs.remove(0);
    await chrome.tabs.remove([0]);
    await chrome.tabs.captureVisibleTab();
    await chrome.tabs.captureVisibleTab(0);
    await chrome.tabs.captureVisibleTab({});
    await chrome.tabs.captureVisibleTab(0, {});
    await chrome.tabs.reload(0, {});
    await chrome.tabs.reload({});
    await chrome.tabs.reload();
    await chrome.tabs.insertCSS({});
    await chrome.tabs.insertCSS(0, {});
    await chrome.tabs.highlight({ tabs: 0 });
    await chrome.tabs.query({});
    await chrome.tabs.detectLanguage();
    await chrome.tabs.detectLanguage(0);
    await chrome.tabs.setZoom(0);
    await chrome.tabs.setZoom(0, 0);
    await chrome.tabs.getZoom();
    await chrome.tabs.getZoom(0);
    await chrome.tabs.setZoomSettings({});
    await chrome.tabs.setZoomSettings(0, {});
    await chrome.tabs.getZoomSettings();
    await chrome.tabs.getZoomSettings(0);
    await chrome.tabs.discard(0);
    await chrome.tabs.goForward();
    await chrome.tabs.goForward(0);
    await chrome.tabs.goBack();
    await chrome.tabs.goBack(0);
    await chrome.tabs.group({});
    await chrome.tabs.ungroup(0);
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

// https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest
async function testDeclarativeNetRequestForPromise() {
    await chrome.declarativeNetRequest.getAvailableStaticRuleCount();
    await chrome.declarativeNetRequest.getDynamicRules();
    await chrome.declarativeNetRequest.getEnabledRulesets();
    await chrome.declarativeNetRequest.getMatchedRules({});
    await chrome.declarativeNetRequest.getMatchedRules();
    await chrome.declarativeNetRequest.getSessionRules();
    await chrome.declarativeNetRequest.isRegexSupported({ regex: "regex1" });
    await chrome.declarativeNetRequest.setExtensionActionOptions({});
    await chrome.declarativeNetRequest.updateDynamicRules({});
    await chrome.declarativeNetRequest.updateEnabledRulesets({});
    await chrome.declarativeNetRequest.updateSessionRules({});
}

async function testDynamicRules() {
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
function testRunTimeGetContexts() {
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

function testTabsSendMessage() {
    chrome.tabs.sendMessage(1, "Hello World!");
    chrome.tabs.sendMessage(2, "Hello World!").then(() => {});
    chrome.tabs.sendMessage(3, "Hello World!", console.log);
    chrome.tabs.sendMessage(4, "Hello World!", {}).then(() => {});
    chrome.tabs.sendMessage(5, "Hello World!", {}, console.log);
    chrome.tabs.sendMessage(6, "Hello World!", { frameId: 1 }, console.log);
    chrome.tabs.sendMessage(7, "Hello World!", { documentId: "id" }, console.log);
    chrome.tabs.sendMessage(8, "Hello World!", { documentId: "id", frameId: 0 }, console.log);
    chrome.tabs.sendMessage<string>(6, "Hello World!", console.log);
    chrome.tabs.sendMessage<string, number>(7, "Hello World!", console.log);
    // @ts-expect-error
    chrome.tabs.sendMessage<number>(8, "Hello World!", console.log);
    // @ts-expect-error
    chrome.tabs.sendMessage<string, string>(9, "Hello World!", (num: number) => alert(num + 1));
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
    chrome.contextMenus.remove(1);
    chrome.contextMenus.remove(1, () => console.log("removed"));
    // @ts-expect-error
    chrome.contextMenus.remove(1, (invalid: any) => console.log("removed"));
    chrome.contextMenus.remove("dummy-id");
    chrome.contextMenus.remove("dummy-id", () => console.log("removed"));
    // @ts-expect-error
    chrome.contextMenus.remove("dummy-id", (invalid: any) => console.log("removed"));
    chrome.contextMenus.remove(Math.random() > 0.5 ? "1" : 1);
}

function testContextMenusRemoveAll() {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.removeAll(() => console.log("removed all"));
    // @ts-expect-error
    chrome.contextMenus.removeAll((invalid: any) => console.log("removed"));
}

function testContextMenusUpdate() {
    chrome.contextMenus.update(1, { title: "Hello World!" });
    chrome.contextMenus.update(1, { title: "Hello World!" }, () => console.log("updated"));
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

function testPermissions() {
    const permissions: chrome.permissions.Permissions = {
        origins: ["https://example.com/*"],
    };
    chrome.permissions.contains(permissions, (exists: boolean) => {});
    chrome.permissions.remove(permissions, (wasRemoved: boolean) => {});
    chrome.permissions.request(permissions, (wasAdded: boolean) => {});
    chrome.permissions.getAll((permissions: chrome.permissions.Permissions) => {});
}

async function testPermissionsForPromise() {
    const permissions: chrome.permissions.Permissions = {
        origins: ["https://example.com/*"],
    };
    if (await chrome.permissions.contains(permissions)) {
        let wasRemoved: boolean = await chrome.permissions.remove(permissions);
    } else {
        let wasAdded: boolean = await chrome.permissions.request(permissions);
    }

    const existing: chrome.permissions.Permissions = await chrome.permissions.getAll();
}

// https://developer.chrome.com/docs/extensions/reference/enterprise_deviceAttributes
function testEnterpriseDeviceAttributes() {
    chrome.enterprise.deviceAttributes.getDirectoryDeviceId((deviceId) => {});
    chrome.enterprise.deviceAttributes.getDeviceSerialNumber((serialNumber) => {});
    chrome.enterprise.deviceAttributes.getDeviceAssetId((assetId) => {});
    chrome.enterprise.deviceAttributes.getDeviceAnnotatedLocation((annotatedLocation) => {});
    chrome.enterprise.deviceAttributes.getDeviceHostname((hostName) => {});
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

    chrome.fileSystemProvider.onCreateDirectoryRequested.addListener(
        (
            options: chrome.fileSystemProvider.CreateDirectoryRequestedEventOptions,
            successCallback: Function,
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
