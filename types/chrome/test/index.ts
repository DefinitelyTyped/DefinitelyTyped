/// <reference types="jquery" />
/// <reference types="jqueryui" />

// https://developer.chrome.com/extensions/examples/api/bookmarks/basic/popup.js
function bookmarksExample() {
    $(function () {
        $('#search').change(function () {
            $('#bookmarks').empty();
            dumpBookmarks($('#search').val());
        });
    });
    // Traverse the bookmark tree, and print the folder and nodes.
    function dumpBookmarks(query?) {
        var bookmarkTreeNodes = chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
            $('#bookmarks').append(dumpTreeNodes(bookmarkTreeNodes, query));
        });
    }
    function dumpTreeNodes(bookmarkNodes, query) {
        var list = $('<ul>');
        var i;
        for (i = 0; i < bookmarkNodes.length; i++) {
            list.append(dumpNode(bookmarkNodes[i], query));
        }
        return list;
    }
    function dumpNode(bookmarkNode, query) {
        var span = $('<span>');
        if (bookmarkNode.title) {
            if (query && !bookmarkNode.children) {
                if (String(bookmarkNode.title).indexOf(query) == -1) {
                    return $('<span></span>');
                }
            }
            var anchor = $('<a>');
            anchor.attr('href', bookmarkNode.url);
            anchor.text(bookmarkNode.title);
            /*
             * When clicking on a bookmark in the extension, a new tab is fired with
             * the bookmark url.
             */
            anchor.click(function () {
                chrome.tabs.create({ url: bookmarkNode.url });
            });
            var options = bookmarkNode.children
                ? $('<span>[<a href="#" id="addlink">Add</a>]</span>')
                : $('<span>[<a id="editlink" href="#">Edit</a> <a id="deletelink" ' + 'href="#">Delete</a>]</span>');
            var edit = bookmarkNode.children
                ? $(
                      '<table><tr><td>Name</td><td>' +
                          '<input id="title"></td></tr><tr><td>URL</td><td><input id="url">' +
                          '</td></tr></table>',
                  )
                : $('<input>');
            // Show add and edit links when hover over.
            span.hover(
                function () {
                    span.append(options);
                    $('#deletelink').click(function () {
                        $('#deletedialog')
                            .empty()
                            .dialog({
                                autoOpen: false,
                                title: 'Confirm Deletion',
                                resizable: false,
                                height: 140,
                                modal: true,
                                buttons: {
                                    'Yes, Delete It!': function () {
                                        chrome.bookmarks.remove(String(bookmarkNode.id));
                                        span.parent().remove();
                                        $(this).dialog('destroy');
                                    },
                                    Cancel: function () {
                                        $(this).dialog('destroy');
                                    },
                                },
                            })
                            .dialog('open');
                    });
                    $('#addlink').click(function () {
                        $('#adddialog')
                            .empty()
                            .append(edit)
                            .dialog({
                                autoOpen: false,
                                closeOnEscape: true,
                                title: 'Add New Bookmark',
                                modal: true,
                                buttons: {
                                    Add: function () {
                                        chrome.bookmarks.create({
                                            parentId: bookmarkNode.id,
                                            title: $('#title').val() as string,
                                            url: $('#url').val() as string,
                                        });
                                        $('#bookmarks').empty();
                                        $(this).dialog('destroy');
                                        dumpBookmarks();
                                    },
                                    Cancel: function () {
                                        $(this).dialog('destroy');
                                    },
                                },
                            })
                            .dialog('open');
                    });
                    $('#editlink').click(function () {
                        edit.val(anchor.text());
                        $('#editdialog')
                            .empty()
                            .append(edit)
                            .dialog({
                                autoOpen: false,
                                closeOnEscape: true,
                                title: 'Edit Title',
                                modal: true,
                                show: 'slide',
                                buttons: {
                                    Save: function () {
                                        chrome.bookmarks.update(String(bookmarkNode.id), {
                                            title: edit.val() as string,
                                        });
                                        anchor.text(edit.val() as string);
                                        options.show();
                                        $(this).dialog('destroy');
                                    },
                                    Cancel: function () {
                                        $(this).dialog('destroy');
                                    },
                                },
                            })
                            .dialog('open');
                    });
                    options.fadeIn();
                },
                // unhover
                function () {
                    options.remove();
                },
            ).append(anchor);
        }
        var li = $(bookmarkNode.title ? '<li>' : '<div>').append(span);
        if (bookmarkNode.children && bookmarkNode.children.length > 0) {
            li.append(dumpTreeNodes(bookmarkNode.children, query));
        }
        return li;
    }

    document.addEventListener('DOMContentLoaded', function () {
        dumpBookmarks();
    });
}

// https://developer.chrome.com/extensions/examples/api/browserAction/make_page_red/background.js
function pageRedder() {
    chrome.browserAction.onClicked.addListener(function (tab) {
        // No tabs or host permissions needed!
        console.log('Turning ' + tab.url + ' red!');
        chrome.tabs.executeScript({
            code: 'document.body.style.backgroundColor="red"',
        });
    });
}

// https://developer.chrome.com/extensions/examples/api/browserAction/print/background.js
function printPage() {
    chrome.browserAction.onClicked.addListener(function (tab) {
        var action_url = 'javascript:window.print();';
        chrome.tabs.update(tab.id!, { url: action_url });
    });
}

// https://developer.chrome.com/extensions/examples/extensions/catblock/background.js
function catBlock() {
    var loldogs: string[];
    chrome.webRequest.onBeforeRequest.addListener(
        function (info) {
            console.log('Cat intercepted: ' + info.url);
            // Redirect the lolcal request to a random loldog URL.
            var i = Math.round(Math.random() * loldogs.length);
            return { redirectUrl: loldogs[i] };
        },
        // filters
        {
            urls: ['https://i.chzbgr.com/*'],
            types: ['image'],
        },
        // extraInfoSpec
        ['blocking'],
    );
}

// webNavigation.onBeforeNavigate.addListener example
function beforeRedditNavigation() {
    chrome.webNavigation.onBeforeNavigate.addListener(
        function (requestDetails) {
            console.log('URL we want to redirect to: ' + requestDetails.url);
            // NOTE: This will search for top level frames with the value -1.
            if (requestDetails.parentFrameId != -1) {
                return;
            }

            alert('Were you trying to go on reddit, during working hours? :(');
        },
        {
            url: [{ hostSuffix: '.reddit.com' }],
        },
    );
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
        function (details) {
            if (details.tabId === chrome.tabs.TAB_ID_NONE) {
                console.log('Request not related to a tab. %o', details);
                return;
            }
            // ...
        },
        {
            urls: ['<all_urls>'],
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
    chrome.proxy.settings.set({ value: 'something' });

    // add a scope and callback
    chrome.proxy.settings.set(
        {
            value: 'something',
            scope: 'regular',
        },
        () => {},
    );

    chrome.proxy.settings.clear({});

    // clear with a scope set
    chrome.proxy.settings.clear({ scope: 'regular' });
}

// https://developer.chrome.com/extensions/examples/api/contentSettings/popup.js
function contentSettings() {
    var incognito;
    var url;

    function settingChanged() {
        var type = this.id;
        var setting = this.value;
        var pattern = /^file:/.test(url) ? url : url.replace(/\/[^\/]*?$/, '/*');
        console.log(type + ' setting for ' + pattern + ': ' + setting);
        // HACK: [type] is not recognised by the docserver's sample crawler, so
        // mention an explicit
        // type: chrome.contentSettings.cookies.set - See http://crbug.com/299634
        chrome.contentSettings[type].set({
            primaryPattern: pattern,
            setting: setting,
            scope: incognito ? 'incognito_session_only' : 'regular',
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        chrome.tabs.query({ active: true, currentWindow: true, url: ['http://*/*', 'https://*/*'] }, function (tabs) {
            var current = tabs[0];
            incognito = current.incognito;
            url = current.url;
            var types = [
                'cookies',
                'images',
                'javascript',
                'location',
                'plugins',
                'popups',
                'notifications',
                'fullscreen',
                'mouselock',
                'microphone',
                'camera',
                'unsandboxedPlugins',
                'automaticDownloads',
            ];
            types.forEach(function (type) {
                // HACK: [type] is not recognised by the docserver's sample crawler, so
                // mention an explicit
                // type: chrome.contentSettings.cookies.get - See http://crbug.com/299634
                chrome.contentSettings[type] &&
                    chrome.contentSettings[type].get(
                        {
                            primaryUrl: url,
                            incognito: incognito,
                        },
                        function (details) {
                            var input = <HTMLInputElement>document.getElementById(type);
                            input.disabled = false;
                            input.value = details.setting;
                        },
                    );
            });
        });

        var selects = document.querySelectorAll('select');
        for (var i = 0; i < selects.length; i++) {
            selects[i].addEventListener('change', settingChanged);
        }
    });
}

// tabs: https://developer.chrome.com/extensions/tabs#
async function testTabInterface() {
    const options = { active: true, currentWindow: true, url: ['http://*/*', 'https://*/*'] };

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
    const options = { collapsed: false, title: 'Test' };

    chrome.tabGroups.query(options, tabGroups => {
        // $ExpectType TabGroup[]
        tabGroups;

        const [tabGroup] = tabGroups;
        tabGroup.collapsed; // $ExpectType boolean
        tabGroup.color; // $ExpectType ColorEnum
        tabGroup.id; // $ExpectType number
        tabGroup.title; // $ExpectType string | undefined
        tabGroup.windowId; // $ExpectType number
    });
  }

// https://developer.chrome.com/extensions/runtime#method-openOptionsPage
function testOptionsPage() {
    chrome.runtime.openOptionsPage();
    chrome.runtime.openOptionsPage(function () {
        // Do a thing ...
    });
}

function testGetManifest() {
    const manifest = chrome.runtime.getManifest();

    manifest.name; // $ExpectType string
    manifest.version; // $ExpectType string

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

        manifest.content_security_policy = "default-src 'self'"; // $ExpectError
        manifest.content_security_policy = {
            extension_pages: "default-src 'self'",
            sandbox: "default-src 'self'",
        };

        manifest.host_permissions; // $ExpectType string[] | undefined
        manifest.optional_permissions; // $ExpectType ManifestPermissions[] | undefined
        manifest.permissions; // $ExpectType ManifestPermissions[] | undefined

        manifest.web_accessible_resources = [{ matches: ['https://*/*'], resources: ['resource.js'] }];
        manifest.web_accessible_resources = ['script.js']; // $ExpectError
    }

    const mv2: chrome.runtime.Manifest = {
        manifest_version: 2,
        name: 'manifest version 2',
        version: '2.0.0',
        background: { persistent: true, scripts: ['background.js'] },
        browser_action: {
            default_icon: {
                16: 'icon-16.png',
            },
        },
        content_security_policy: "default-src 'self'",
        optional_permissions: ['https://*/*'],
        permissions: ['https://*/*'],
        web_accessible_resources: ['some-page.html'],
    };

    const mv3: chrome.runtime.Manifest = {
        manifest_version: 3,
        name: 'manifest version 3',
        version: '3.0.0',
        background: { service_worker: 'bg-sw.js', type: 'module' },
        content_security_policy: {
            extension_pages: "default-src 'self'",
            sandbox: "default-src 'self'",
        },
        host_permissions: ['http://*/*'],
        optional_permissions: ['cookies'],
        permissions: ['activeTab'],
        web_accessible_resources: [
            {
                matches: ['https://*/*'],
                resources: ['some-script.js'],
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
                chromeMediaSource: 'tab',
                echoCancellation: true,
            },
        },
        videoConstraints: {
            mandatory: {
                chromeMediaSource: 'tab',
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
    chrome.debugger.attach({ tabId: 123 }, '1.23', () => {
        console.log('This is a callback!');
    });

    chrome.debugger.detach({ tabId: 123 }, () => {
        console.log('This is a callback!');
    });

    chrome.debugger.sendCommand({ targetId: 'abc' }, 'Debugger.Cmd', { param1: 'x' }, result => {
        console.log('Do something with the result.' + result);
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
            console.log('Hello World.');
        }
    });

    chrome.debugger.onDetach.addListener((source, reason) => {
        if (source.tabId == 123) {
            console.log('Hello World.');
        }
    });
}

// https://developer.chrome.com/extensions/declarativeContent
function testDeclarativeContent() {
    const activeIcon: ImageData = new ImageData(32, 32);

    const rule: chrome.events.Rule = {
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostContains: 'test.com',
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
    function getCallback(loadedData: { [key: string]: any }) {
        var myValue: { x: number } = loadedData['myKey'];
    }

    chrome.storage.sync.get(getCallback);
    chrome.storage.sync.get('myKey', getCallback);
    chrome.storage.sync.get(['myKey', 'myKey2'], getCallback);
    chrome.storage.sync.get({ foo: 1, bar: 2 }, getCallback);
    chrome.storage.sync.get(null, getCallback);

    function getBytesInUseCallback(bytesInUse: number) {
        console.log(bytesInUse);
    }

    chrome.storage.sync.getBytesInUse(getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse('myKey', getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse(['myKey', 'myKey2'], getBytesInUseCallback);
    chrome.storage.sync.getBytesInUse(null, getBytesInUseCallback);

    function doneCallback() {
        console.log('done');
    }

    chrome.storage.sync.set({ foo: 1, bar: 2 });
    chrome.storage.sync.set({ foo: 1, bar: 2 }, doneCallback);

    chrome.storage.sync.remove('myKey');
    chrome.storage.sync.remove('myKey', doneCallback);
    chrome.storage.sync.remove(['myKey', 'myKey2']);
    chrome.storage.sync.remove(['myKey', 'myKey2'], doneCallback);

    chrome.storage.sync.clear();
    chrome.storage.sync.clear(doneCallback);

    chrome.storage.onChanged.addListener(function (changes) {
        var myNewValue: { x: number } = changes['myKey'].newValue;
        var myOldValue: { x: number } = changes['myKey'].oldValue;
    });
}

// https://developer.chrome.com/apps/tts#type-TtsVoice
function testTtsVoice() {
    chrome.tts.getVoices(voices =>
        voices.forEach(voice => {
            console.log(voice.voiceName);
            console.log('\tlang: ' + voice.lang);
            console.log('\tremote: ' + voice.remote);
            console.log('\textensionId: ' + voice.extensionId);
            console.log('\teventTypes: ' + voice.eventTypes);
        }),
    );
}

chrome.devtools.network.onRequestFinished.addListener((request: chrome.devtools.network.Request) => {
    request; // $ExpectType Request
    console.log('request: ', request);
});

chrome.devtools.network.getHAR((harLog: chrome.devtools.network.HARLog) => {
    harLog; // $ExpectType HARLog
    console.log('harLog: ', harLog);
});

function testDevtools() {
    chrome.devtools.inspectedWindow.eval('1+1', undefined, result => {
        console.log(result);
    });
}

function testAssistiveWindow() {
    chrome.input.ime.setAssistiveWindowProperties({
        contextID: 0,
        properties: {
            type: 'undo',
            visible: true,
        },
    });

    chrome.input.ime.setAssistiveWindowButtonHighlighted({
        contextID: 0,
        buttonID: 'undo',
        windowType: 'undo',
        announceString: 'Undo button highlighted',
        highlighted: true,
    });

    chrome.input.ime.setAssistiveWindowButtonHighlighted({
        contextID: 0,
        buttonID: 'undo',
        windowType: 'undo',
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
    const suggestion: chrome.omnibox.Suggestion = { description: 'description' };
    chrome.omnibox.setDefaultSuggestion(suggestion);

    function onInputEnteredCallback(text: string, disposition: chrome.omnibox.OnInputEnteredDisposition) {
        if (disposition === 'currentTab') {
        }
        if (disposition === 'newForegroundTab') {
        }
        if (disposition === 'newBackgroundTab') {
        }
    }
    chrome.omnibox.onInputEntered.addListener(onInputEnteredCallback);

    const suggestResult1: chrome.omnibox.SuggestResult = {
        content: 'content',
        description: 'description',
    };
    const suggestResult2: chrome.omnibox.SuggestResult = {
        content: 'content',
        description: 'description',
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

    const DISPOSITIONS: chrome.search.Disposition[] = ['CURRENT_TAB', 'NEW_TAB', 'NEW_WINDOW'];

    DISPOSITIONS.forEach(disposition => {
        chrome.search.query(
            {
                disposition,
                tabId: 1,
                text: 'text',
            },
            getCallback,
        );
    });
}

// https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/
async function testDeclarativeNetRequest() {
    chrome.declarativeNetRequest.getDynamicRules(rules => {
        // $ExpectType Rule[]
        rules;

        const rule = rules[0]
        rule.action; // $ExpectType RuleAction
        rule.condition; // $ExpectType RuleCondition
        rule.id; // $ExpectType number
        rule.priority; // $ExpectType number
    })

    chrome.declarativeNetRequest.getAvailableStaticRuleCount(count => {
        // $ExpectType number
        count;
    })

    chrome.declarativeNetRequest.getEnabledRulesets(sets => {
        // $ExpectType string[]
        sets;
    })
}

// https://developer.chrome.com/docs/extensions/reference/browserAction/#method-setBadgeText
function testSetBrowserBadgeText() {
    chrome.browserAction.setBadgeText({});
    chrome.browserAction.setBadgeText({text: "test"});
    chrome.browserAction.setBadgeText({tabId: 123});
    chrome.browserAction.setBadgeText({text: "test", tabId: 123});
    chrome.browserAction.setBadgeText({}, () => {});

    chrome.browserAction.setBadgeText(); // $ExpectError
    chrome.browserAction.setBadgeText(undefined); // $ExpectError
}

// https://developer.chrome.com/docs/extensions/reference/action/
async function testActionForPromise() {
    await chrome.action.disable();
    await chrome.action.enable();
    await chrome.action.disable(0);
    await chrome.action.enable(0);
    await chrome.action.getBadgeBackgroundColor({});
    await chrome.action.getBadgeText({});
    await chrome.action.getPopup({});
    await chrome.action.getTitle({});
    await chrome.action.setBadgeBackgroundColor({color: 'white'});
    await chrome.action.setBadgeText({text: 'text1'});
    await chrome.action.setPopup({popup: 'popup1'});
    await chrome.action.setTitle({title: 'title1'});
}

// https://developer.chrome.com/docs/extensions/reference/alarms/
async function testAlarmsForPromise() {
    await chrome.alarms.getAll();
    await chrome.alarms.clearAll();
    await chrome.alarms.clear();
    await chrome.alarms.clear('name1');
    await chrome.alarms.get();
    await chrome.alarms.get('name1');
}

// https://developer.chrome.com/docs/extensions/reference/bookmarks
async function testBookmarksForPromise() {
    await chrome.bookmarks.search('query1');
    await chrome.bookmarks.search({});
    await chrome.bookmarks.getTree();
    await chrome.bookmarks.getRecent(0);
    await chrome.bookmarks.get('id1');
    await chrome.bookmarks.get(['id1']);
    await chrome.bookmarks.create({});
    await chrome.bookmarks.move('id1', {});
    await chrome.bookmarks.update('id1', {});
    await chrome.bookmarks.remove('id1');
    await chrome.bookmarks.getChildren('id1');
    await chrome.bookmarks.getSubTree('id1');
    await chrome.bookmarks.removeTree('id1');
}

// https://developer.chrome.com/docs/extensions/reference/browserAction
async function testBrowserActionForPromise() {
    await chrome.browserAction.enable(0);
    await chrome.browserAction.setBadgeBackgroundColor({color: 'color1'});
    await chrome.browserAction.setBadgeText({});
    await chrome.browserAction.setTitle({title: 'title1'});
    await chrome.browserAction.getBadgeText({});
    await chrome.browserAction.setPopup({popup: 'popup1'});
    await chrome.browserAction.disable(0);
    await chrome.browserAction.getTitle({});
    await chrome.browserAction.getBadgeBackgroundColor({});
    await chrome.browserAction.getPopup({});
}

// https://developer.chrome.com/docs/extensions/reference/cookies
async function testCookieForPromise() {
    await chrome.cookies.getAllCookieStores();
    await chrome.cookies.getAll({});
    await chrome.cookies.set({url: 'url1'});
    await chrome.cookies.remove({url: 'url1', name: 'name1'});
    await chrome.cookies.get({url: 'url1', name: 'name1'});
}

// https://developer.chrome.com/docs/extensions/reference/management
async function testManagementForPromise() {
    await chrome.management.setEnabled('id1', true);
    await chrome.management.getPermissionWarningsById('id1');
    await chrome.management.get('id1');
    await chrome.management.getAll();
    await chrome.management.getPermissionWarningsByManifest('manifestStr1');
    await chrome.management.launchApp('id1');
    await chrome.management.uninstall('id1');
    await chrome.management.uninstall('id1', {});
    await chrome.management.getSelf();
    await chrome.management.uninstallSelf({});
    await chrome.management.uninstallSelf();
    await chrome.management.createAppShortcut('id1');
    await chrome.management.setLaunchType('id1', 'launchType1');
    await chrome.management.generateAppForLink('url1', 'title1');
}

// https://developer.chrome.com/docs/extensions/reference/scripting
async function testScriptingForPromise() {
    await chrome.scripting.executeScript({ target: { tabId: 0 } }); // $ExpectError
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => {} });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => {}, args: [] });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string) => {}, args: [''] });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string, n: number) => {}, args: ['', 0] });
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string, n: number) => {}, args: [0, ''] }); // $ExpectError
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (str: string) => {}, args: [0] }); // $ExpectError
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => {}, args: [''] }); // $ExpectError
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: (name: string) => {}, args: [] }); // $ExpectError
    await chrome.scripting.executeScript({ target: { tabId: 0 }, func: () => {}, args: {} }); // $ExpectError
    await chrome.scripting.executeScript({ target: { tabId: 0 }, files: ['script.js'] });

    await chrome.scripting.insertCSS({ target: { tabId: 0 } });
}

// https://developer.chrome.com/docs/extensions/reference/system_cpu
async function testSystemCpuForPromise() {
    await chrome.system.cpu.getInfo();
}

// https://developer.chrome.com/docs/extensions/reference/system_storage
async function testSystemStorageForPromise() {
    await chrome.system.storage.getInfo();
    await chrome.system.storage.ejectDevice('id1');
    await chrome.system.storage.getAvailableCapacity('id1');
}

// https://developer.chrome.com/docs/extensions/reference/system_display
async function testSystemDisplayForPromise() {
    await chrome.system.display.getInfo();
    await chrome.system.display.getInfo({});
    await chrome.system.display.getDisplayLayout();
    await chrome.system.display.setDisplayProperties('id1', {});
    await chrome.system.display.setDisplayLayout([]);
    await chrome.system.display.showNativeTouchCalibration('id1');
    await chrome.system.display.setMirrorMode({});
}

// https://developer.chrome.com/docs/extensions/reference/tabs
async function testTabsForPromise() {
    await chrome.tabs.executeScript({});
    await chrome.tabs.executeScript(0, {});
    await chrome.tabs.get(0);
    await chrome.tabs.getAllInWindow();
    await chrome.tabs.getAllInWindow(0);
    await chrome.tabs.getCurrent();
    await chrome.tabs.getSelected();
    await chrome.tabs.getSelected(0);
    await chrome.tabs.create({});
    await chrome.tabs.move(0, {index: 0});
    await chrome.tabs.move([0], {index: 0});
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
    await chrome.tabs.highlight({tabs: 0});
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
    await chrome.tabGroups.move(0, {index: 0});
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
    await chrome.declarativeNetRequest.isRegexSupported({regex: 'regex1'});
    await chrome.declarativeNetRequest.setExtensionActionOptions({});
    await chrome.declarativeNetRequest.updateDynamicRules({});
    await chrome.declarativeNetRequest.updateEnabledRulesets({});
    await chrome.declarativeNetRequest.updateSessionRules({});
}

// https://developer.chrome.com/docs/extensions/reference/storage
function testStorageForPromise() {
    chrome.storage.sync.getBytesInUse().then(() => {});
    chrome.storage.sync.getBytesInUse(null).then(() => {});
    chrome.storage.sync.getBytesInUse('testKey').then(() => {});
    chrome.storage.sync.getBytesInUse(['testKey']).then(() => {});

    chrome.storage.sync.clear().then(() => {});

    chrome.storage.sync.set({ testKey: 'testValue' }).then(() => {});

    chrome.storage.sync.remove('testKey').then(() => {});
    chrome.storage.sync.remove(['testKey']).then(() => {});

    chrome.storage.sync.get().then(() => {});
    chrome.storage.sync.get(null).then(() => {});
    chrome.storage.sync.get('testKey').then(() => {});
    chrome.storage.sync.get(['testKey']).then(() => {});
    chrome.storage.sync.get({ testKey: 'testDefaultValue' }).then(() => {});
}

function testRuntimeSendMessage() {
    chrome.runtime.sendMessage("Hello World!");
    chrome.runtime.sendMessage("Hello World!", console.log);
    chrome.runtime.sendMessage<string>("Hello World!", console.log);
    chrome.runtime.sendMessage<string, number>("Hello World!", console.log);
    chrome.runtime.sendMessage<number>("Hello World!", console.log); // $ExpectError
    chrome.runtime.sendMessage<string, boolean>("Hello World!", (num: number) => alert(num+1)); // $ExpectError

    chrome.runtime.sendMessage('extension-id', 'Hello World!');
    chrome.runtime.sendMessage('extension-id', 'Hello World!', console.log);
    chrome.runtime.sendMessage<string>('extension-id', 'Hello World!', console.log);
    chrome.runtime.sendMessage<string, number>('extension-id', 'Hello World!', console.log);
    chrome.runtime.sendMessage<number>('extension-id', 'Hello World!', console.log); // $ExpectError
    chrome.runtime.sendMessage<string, boolean>('extension-id', 'Hello World!', (num: number) => alert(num+1)); // $ExpectError
}

function testTabsSendMessage() {
    chrome.tabs.sendMessage(1, "Hello World!");
    chrome.tabs.sendMessage(2, "Hello World!", console.log);
    chrome.tabs.sendMessage(3, "Hello World!", { }, console.log);
    chrome.tabs.sendMessage<string>(4, "Hello World!", console.log);
    chrome.tabs.sendMessage<string, number>(5, "Hello World!", console.log);
    chrome.tabs.sendMessage<number>(6, "Hello World!", console.log); // $ExpectError
    chrome.tabs.sendMessage<string, string>(7, "Hello World!", (num: number) => alert(num+1)); // $ExpectError
}

function testTabsSendRequest() {
    chrome.tabs.sendRequest(1, "Hello World!");
    chrome.tabs.sendRequest(2, "Hello World!", console.log);
    chrome.tabs.sendRequest(3, "Hello World!", console.log);
    chrome.tabs.sendRequest<string>(4, "Hello World!", console.log);
    chrome.tabs.sendRequest<string, number>(5, "Hello World!", console.log);
    chrome.tabs.sendRequest<number>(6, "Hello World!", console.log); // $ExpectError
    chrome.tabs.sendRequest<string, string>(7, "Hello World!", (num: number) => alert(num+1)); // $ExpectError
}

function testExtensionSendRequest() {
    chrome.extension.sendRequest("dummy-id", "Hello World!");
    chrome.extension.sendRequest("dummy-id", "Hello World!", console.log);
    chrome.extension.sendRequest("dummy-id", "Hello World!", console.log);
    chrome.extension.sendRequest<string>("dummy-id", "Hello World!", console.log);
    chrome.extension.sendRequest<string, number>("dummy-id", "Hello World!", console.log);
    chrome.extension.sendRequest<number>("dummy-id", "Hello World!", console.log); // $ExpectError
    chrome.extension.sendRequest<string, string>("dummy-id", "Hello World!", (num: number) => alert(num+1)); // $ExpectError
}

function testContextMenusCreate() {
    chrome.contextMenus.create({
        id: 'dummy-id',
        documentUrlPatterns: ['https://*/*'],
        checked: false,
        title: 'Hello World!',
        contexts: ['all'],
        enabled: true,
        targetUrlPatterns: ['https://example.com/*'],
        onclick: (info, tab: chrome.tabs.Tab) => console.log(tab),
        parentId: 1,
        type: 'normal',
        visible: true
    }, () => console.log('created'));
}

function testContextMenusRemove() {
    chrome.contextMenus.remove(1);
    chrome.contextMenus.remove(1, () => console.log('removed'));
    chrome.contextMenus.remove(1, (invalid: any) => console.log('removed')); // $ExpectError
    chrome.contextMenus.remove('dummy-id');
    chrome.contextMenus.remove('dummy-id', () => console.log('removed'));
    chrome.contextMenus.remove('dummy-id', (invalid: any) => console.log('removed')); // $ExpectError
}

function testContextMenusRemoveAll() {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.removeAll(() => console.log('removed all'));
    chrome.contextMenus.removeAll((invalid: any) => console.log('removed')); // $ExpectError
}

function testContextMenusUpdate() {
    chrome.contextMenus.update(1, {title: 'Hello World!'});
    chrome.contextMenus.update(1, {title: 'Hello World!'}, () => console.log('updated'));
    chrome.contextMenus.update(1, {title: 'Hello World!'}, (invalid: any) => console.log('updated')); // $ExpectError
    chrome.contextMenus.update('dummy-id', {title: 'Hello World!'});
    chrome.contextMenus.update('dummy-id', {title: 'Hello World!'}, () => console.log('updated'));
    chrome.contextMenus.update('dummy-id', {title: 'Hello World!'}, (invalid: any) => console.log('updated')); // $ExpectError

    chrome.contextMenus.update(2, {
        documentUrlPatterns: ['https://*/*'],
        checked: false,
        title: 'Hello World!',
        contexts: ['all'],
        enabled: true,
        targetUrlPatterns: ['https://example.com/*'],
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
            console.log(tab, checked, editable, frameId, frameUrl, linkUrl, mediaType, menuItemId, pageUrl, parentMenuItemId, selectionText, srcUrl, wasChecked),
        parentId: 1,
        type: 'normal',
        visible: true
    });

    chrome.contextMenus.update(1, {documentUrlPatterns: false}); // $ExpectError
    chrome.contextMenus.update(1, {checked: 'invalid'}); // $ExpectError
    chrome.contextMenus.update(1, {title: 1}); // $ExpectError
    chrome.contextMenus.update(1, {contexts: true}); // $ExpectError
    chrome.contextMenus.update(1, {enabled: 'invalid'}); // $ExpectError
    chrome.contextMenus.update(1, {targetUrlPatterns: false}); // $ExpectError
    chrome.contextMenus.update(1, {onclick: false}); // $ExpectError
    chrome.contextMenus.update(1, {parentId: false}); // $ExpectError
    chrome.contextMenus.update(1, {type: false}); // $ExpectError
    chrome.contextMenus.update(1, {visible: 1}); // $ExpectError
}
