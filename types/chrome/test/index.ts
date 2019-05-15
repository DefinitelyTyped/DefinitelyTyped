
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
        var bookmarkTreeNodes = chrome.bookmarks.getTree(
            function (bookmarkTreeNodes) {
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
            var options = bookmarkNode.children ?
                $('<span>[<a href="#" id="addlink">Add</a>]</span>') :
                $('<span>[<a id="editlink" href="#">Edit</a> <a id="deletelink" ' +
                    'href="#">Delete</a>]</span>');
            var edit = bookmarkNode.children ? $('<table><tr><td>Name</td><td>' +
                '<input id="title"></td></tr><tr><td>URL</td><td><input id="url">' +
                '</td></tr></table>') : $('<input>');
            // Show add and edit links when hover over.
            span.hover(function () {
                span.append(options);
                $('#deletelink').click(function () {
                    $('#deletedialog').empty().dialog({
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
                            }
                        }
                    }).dialog('open');
                });
                $('#addlink').click(function () {
                    $('#adddialog').empty().append(edit).dialog({
                        autoOpen: false,
                        closeOnEscape: true, title: 'Add New Bookmark', modal: true,
                        buttons: {
                            'Add': function () {
                                chrome.bookmarks.create({
                                    parentId: bookmarkNode.id,
                                    title: $('#title').val() as string, url: $('#url').val() as string
                                });
                                $('#bookmarks').empty();
                                $(this).dialog('destroy');
                                dumpBookmarks();
                            },
                            'Cancel': function () {
                                $(this).dialog('destroy');
                            }
                        }
                    }).dialog('open');
                });
                $('#editlink').click(function () {
                    edit.val(anchor.text());
                    $('#editdialog').empty().append(edit).dialog({
                        autoOpen: false,
                        closeOnEscape: true, title: 'Edit Title', modal: true,
                        show: 'slide', buttons: {
                            'Save': function () {
                                chrome.bookmarks.update(String(bookmarkNode.id), {
                                    title: edit.val() as string
                                });
                                anchor.text(edit.val() as string);
                                options.show();
                                $(this).dialog('destroy');
                            },
                            'Cancel': function () {
                                $(this).dialog('destroy');
                            }
                        }
                    }).dialog('open');
                });
                options.fadeIn();
            },
                // unhover
                function () {
                    options.remove();
                }).append(anchor);
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
            code: 'document.body.style.backgroundColor="red"'
        });
    });
}

// https://developer.chrome.com/extensions/examples/api/browserAction/print/background.js
function printPage() {
    chrome.browserAction.onClicked.addListener(function (tab) {
        var action_url = "javascript:window.print();";
        chrome.tabs.update(tab.id!, { url: action_url });
    });
}

// https://developer.chrome.com/extensions/examples/extensions/catblock/background.js
function catBlock () {
    var loldogs: string[];
    chrome.webRequest.onBeforeRequest.addListener(
        function(info) {
            console.log("Cat intercepted: " + info.url);
            // Redirect the lolcal request to a random loldog URL.
            var i = Math.round(Math.random() * loldogs.length);
            return {redirectUrl: loldogs[i]};
        },
        // filters
        {
            urls: [
                "https://i.chzbgr.com/*"
            ],
            types: ["image"]
        },
        // extraInfoSpec
        ["blocking"]);
}

// webNavigation.onBeforeNavigate.addListener example
function beforeRedditNavigation() {
    chrome.webNavigation.onBeforeNavigate.addListener(function (requestDetails) {
        console.log("URL we want to redirect to: " + requestDetails.url);
        // NOTE: This will search for top level frames with the value -1.
        if (requestDetails.parentFrameId != -1) {
            return;
        }

        alert("Were you trying to go on reddit, during working hours? :(")
    },{url: [
        {hostSuffix: ".reddit.com"}
    ]});
}

// for chrome.tabs.InjectDetails.frameId
function executeScriptFramed () {

    const tabId = 123;
    const frameId = 0;

    const code = "alert('hi');";

    chrome.tabs.executeScript({frameId, code});
    chrome.tabs.insertCSS({frameId, code});

    chrome.tabs.executeScript(tabId, {frameId, code});
    chrome.tabs.insertCSS(tabId, {frameId, code});

}

// for chrome.tabs.TAB_ID_NONE
function realTabsOnly () {
    chrome.webRequest.onBeforeRequest.addListener(function (details) {
        if (details.tabId === chrome.tabs.TAB_ID_NONE) {
            console.log("Request not related to a tab. %o", details);
            return;
        }
        // ...
    }, {
        urls: ["<all_urls>"]
    });
}

// contrived settings example
function proxySettings() {
    chrome.proxy.settings.get({ incognito: true }, (details) => {
        var val = details.value;
        var level: string = details.levelOfControl;
        var incognito: boolean = details.incognitoSpecific!;
    });

    // bare minimum set call
    chrome.proxy.settings.set({ value: 'something' });

    // add a scope and callback
    chrome.proxy.settings.set({
        value: 'something',
        scope: 'regular'
    }, () => {});

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
    console.log(type+' setting for '+pattern+': '+setting);
    // HACK: [type] is not recognised by the docserver's sample crawler, so
    // mention an explicit
    // type: chrome.contentSettings.cookies.set - See http://crbug.com/299634
    chrome.contentSettings[type].set({
          'primaryPattern': pattern,
          'setting': setting,
          'scope': (incognito ? 'incognito_session_only' : 'regular')
        });
  }

  document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({active: true, currentWindow: true, url: ['http://*/*', 'https://*/*'] }, function(tabs) {
      var current = tabs[0];
      incognito = current.incognito;
      url = current.url;
      var types = ['cookies', 'images', 'javascript', 'location', 'plugins',
                   'popups', 'notifications', 'fullscreen', 'mouselock',
                   'microphone', 'camera', 'unsandboxedPlugins',
                   'automaticDownloads'];
      types.forEach(function(type) {
        // HACK: [type] is not recognised by the docserver's sample crawler, so
        // mention an explicit
        // type: chrome.contentSettings.cookies.get - See http://crbug.com/299634
        chrome.contentSettings[type] && chrome.contentSettings[type].get({
              'primaryUrl': url,
              'incognito': incognito
            },
            function(details) {
              var input = <HTMLInputElement>document.getElementById(type);
              input.disabled = false;
              input.value = details.setting;
            });
      });
    });

    var selects = document.querySelectorAll('select');
    for (var i = 0; i < selects.length; i++) {
      selects[i].addEventListener('change', settingChanged);
    }
  });
}

// https://developer.chrome.com/extensions/runtime#method-openOptionsPage
function testOptionsPage() {
  chrome.runtime.openOptionsPage();
  chrome.runtime.openOptionsPage(function() {
    // Do a thing ...
  });
}

// https://developer.chrome.com/extensions/debugger
function testDebugger() {
	chrome.debugger.attach({tabId: 123}, '1.23', () => {
		console.log('This is a callback!');
	});

	chrome.debugger.detach({tabId: 123}, () => {
		console.log('This is a callback!');
	});

	chrome.debugger.sendCommand(
		{targetId: 'abc'}, 'Debugger.Cmd', {param1: 'x'}, (result) => {
			console.log('Do something with the result.' + result);
	});

	chrome.debugger.getTargets((results) => {
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

// https://developer.chrome.com/extensions/storage#type-StorageArea
function testStorage() {
    function getCallback(loadedData: { [key: string]: any; }) {
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

    chrome.storage.sync.set({ foo: 1, bar: 2});
    chrome.storage.sync.set({ foo: 1, bar: 2}, doneCallback);

    chrome.storage.sync.remove("myKey");
    chrome.storage.sync.remove("myKey", doneCallback);
    chrome.storage.sync.remove(["myKey", "myKey2"]);
    chrome.storage.sync.remove(["myKey", "myKey2"], doneCallback);

    chrome.storage.sync.clear();
    chrome.storage.sync.clear(doneCallback);

    chrome.storage.onChanged.addListener(function (changes) {
        var myNewValue: { x: number } = changes["myKey"].newValue;
        var myOldValue: { x: number } = changes["myKey"].oldValue;
    });
}
