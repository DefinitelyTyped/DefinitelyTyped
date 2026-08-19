/*
 * nw.App Tests
 */

var argv = nw.App.argv;
var fullArgv = nw.App.fullArgv;
// `filteredArgv` is a list of RegExp patterns, not plain objects
var filteredArgv: RegExp[] = nw.App.filteredArgv;
filteredArgv.forEach(function(pattern) {
    console.log(pattern.test("--url=https://github.com"));
});
var startPath = nw.App.startPath;
var dataPath = nw.App.dataPath;
var manifest = nw.App.manifest;

// Known manifest fields are typed; unknown `package.json` fields still resolve
console.log(manifest.main, manifest.name, manifest["node-main"], manifest.dependencies);

// `webview` permissions in the manifest
if (manifest.webview && manifest.webview.partitions) {
    manifest.webview.partitions.forEach(function(partition) {
        console.log(partition.name, partition.accessible_resources);
    });
}

var trustedManifest: NWJS_Helpers.Manifest = {
    main: "index.html",
    name: "my-app",
    window: {
        title: "My App",
        frame: false,
        focus: true,
    },
    webkit: {
        plugin: false,
    },
    webview: {
        partitions: [
            {
                name: "trusted",
                accessible_resources: ["<all_urls>"],
            },
        ],
    },
};
console.log(trustedManifest);

nw.App.clearCache();
nw.App.clearAppCache("/path/to/manifest_url");
nw.App.closeAllWindows();
nw.App.crashBrowser();
nw.App.crashRenderer();
nw.App.enableComponent("WIDEVINE", (version) => {
    console.log(version);
});
nw.App.getProxyForURL("https://github.com/alirdn");
nw.App.setProxyConfig("http=foopy:80;ftp=foopy2", "http://127.0.0.1:80");
nw.App.quit();
nw.App.setCrashDumpDir("/path/to/crash_dump_dir");
nw.App.addOriginAccessWhitelistEntry("https://github.com/", "chrome-extension", location.host, true);
nw.App.removeOriginAccessWhitelistEntry("https://github.com/", "chrome-extension", location.host, true);
nw.App.updateComponent("WIDEVINE", (success) => {
    console.log(success);
});

/*
 * Note:
 * nw.App.registerGlobalHotKey() tested in Shortcut Tests
 * nw.App.unregisterGlobalHotKey() tested in Shortcut Tests
 */

nw.App.on("open", function(args) {
    console.log(args);
});

nw.App.on("reopen", function() {
    console.log("reopened");
});

/**
 * nw.Clipboard Tests
 */
// get the system clipboard
var clipboard = nw.Clipboard.get();
// Read from clipboard
var text = clipboard.get("text");
console.log(text);

// Or write something
clipboard.set("I love NW.js :)", "text");

// And clear it!
clipboard.clear();

/**
 * nw.Menu Tests
 */
// Create an empty context menu. The option argument, and its `type` field, are optional
var menu = new nw.Menu();

// Add some items
menu.append(new nw.MenuItem({ label: "Item A" }));
menu.append(new nw.MenuItem({ label: "Item B" }));
menu.append(new nw.MenuItem({ type: "separator" }));
menu.append(new nw.MenuItem({ label: "Item C" }));

// Remove one item
menu.removeAt(1);

// Popup as context menu
menu.popup(10, 10);

// Iterate menu's items
for (var i = 0; i < menu.items.length; ++i) {
    console.log(menu.items[i]);
}

// `type` only accepts "menubar" or "contextmenu"
var contextMenuOption: NWJS_Helpers.MenuOption = { type: "contextmenu" };
console.log(new nw.Menu(contextMenuOption));

// Create an empty menubar
var menu = new nw.Menu({ type: "menubar" });

// Create a submenu as the 2nd level menu
var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({ label: "Item A" }));
submenu.append(new nw.MenuItem({ label: "Item B" }));

// Create and append the 1st level menu to the menubar
menu.append(
    new nw.MenuItem({
        label: "First Menu",
        submenu: submenu,
    }),
);

// Assign it to `window.menu` to get the menu displayed
nw.Window.get().menu = menu;

// Setting the menubar to null removes it
nw.Window.get().menu = null;

// Mac only: populate the builtin App, Edit and Window menus
menu.createMacBuiltin("My App", { hideEdit: false, hideWindow: true });

/**
 * nw.MenuItem Tests
 */
var item: any;

// Create a separator
item = new nw.MenuItem({ type: "separator" });

// Create a normal item with label and icon
item = new nw.MenuItem({
    type: "normal",
    label: "I'm a menu item",
    icon: "img/icon.png",
});

// Or you can omit the 'type' field for normal items
item = new nw.MenuItem({ label: "Simple item" });

// Bind a callback to item
item = new nw.MenuItem({
    label: "Click me",
    click: function() {
        console.log("I'm clicked");
    },
    key: "s",
    modifiers: "ctrl+alt",
});

// You can have submenu!
var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({ label: "Item 1" }));
submenu.append(new nw.MenuItem({ label: "Item 2" }));
submenu.append(new nw.MenuItem({ label: "Item 3" }));
item.submenu = submenu;

// And everything can be changed at runtime
item.label = "New label";
item.click = function() {
    console.log("New click callback");
};

/**
 * nw.Screen Tests
 */
// init must be called once during startup, before any function to nw.Screen can be called
nw.Screen.Init();

var screens: NWJS_Helpers.screen[] = nw.Screen.screens;
screens.forEach(function(screen) {
    console.log(screen.id, screen.bounds.width, screen.work_area.height, screen.scaleFactor);
    console.log(screen.isBuiltIn, screen.rotation, screen.touchSupport);
});

var screenCB = {
    onDisplayBoundsChanged: function(screen: any) {
        console.log("displayBoundsChanged", screen);
    },

    onDisplayAdded: function(screen: any) {
        console.log("displayAdded", screen);
    },

    onDisplayRemoved: function(screen: any) {
        console.log("displayRemoved", screen);
    },
};

// listen to screen events
nw.Screen.on("displayBoundsChanged", screenCB.onDisplayBoundsChanged);
nw.Screen.on("displayAdded", screenCB.onDisplayAdded);
nw.Screen.on("displayRemoved", screenCB.onDisplayRemoved);

/**
 * nw.Screen.chooseDesktopMedia() Tests
 */
nw.Screen.Init(); // you only need to call this once
nw.Screen.chooseDesktopMedia(["window", "screen"], function(streamId) {
    var vid_constraint = {
        mandatory: {
            chromeMediaSource: "desktop",
            chromeMediaSourceId: streamId,
            maxWidth: 1920,
            maxHeight: 1080,
        },
        optional: [] as any[],
    };
    // navigator.webkitGetUserMedia( { audio: false, video: constraint }, success_func, fallback_func );
});

/**
 * nw.Screen.DesktopCaptureMonitor Tests
 */
var dcm = nw.Screen.DesktopCaptureMonitor;
nw.Screen.Init();
dcm.on("added", function(id, name, order, type, primary) {
    // `registerStream` returns the stream id to pass as `chromeMediaSourceId`
    var registeredStreamId: string = dcm.registerStream(id);

    // select first stream and shutdown
    var constraints = {
        audio: {
            mandatory: {
                chromeMediaSource: "system",
                chromeMediaSourceId: registeredStreamId,
            },
        },
        video: {
            mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: registeredStreamId,
            },
        },
    };

    // TODO: call getUserMedia with contraints

    dcm.stop();
});

dcm.on("removed", function(id) {});
dcm.on("orderchanged", function(id, new_order, old_order) {});
dcm.on("namechanged", function(id, name) {});
dcm.on("thumbnailchanged", function(id, thumbnail) {});
dcm.start(true, true);
console.log(dcm.started);

/**
 * nw.Shell Tests
 */
// Open URL with default browser.
nw.Shell.openExternal("https://github.com/nwjs/nw.js");

// Open a text file with default text editor.
nw.Shell.openItem("test.txt");

// Show a file in parent folder with file manager.
nw.Shell.showItemInFolder("test.txt");

/**
 * nw.Shortcut Tests
 */
var option = {
    key: "Ctrl+Shift+A",
    active: function() {
        console.log("Global desktop keyboard shortcut: " + this.key + " active.");
    },
    failed: function(msg: any) {
        // :(, fail to register the |key| or couldn't parse the |key|.
        console.log(msg);
    },
};

// Create a shortcut with |option|.
var shortcut = new nw.Shortcut(option);

// Register global desktop shortcut, which can work without focus.
nw.App.registerGlobalHotKey(shortcut);

// If register |shortcut| successfully and user struck "Ctrl+Shift+A", |shortcut|
// will get an "active" event.

// You can also add listener to shortcut's active and failed event.
shortcut.on("active", function() {
    console.log("Global desktop keyboard shortcut: " + shortcut.key + " active.");
});

shortcut.on("failed", function(msg: any) {
    console.log(msg);
});

// Unregister the global desktop shortcut.
nw.App.unregisterGlobalHotKey(shortcut);

/**
 * nw.Tray Tests
 */
// Create a tray icon
var tray = new nw.Tray({ title: "Tray", icon: "img/icon.png" });

// Give it a menu
var menu = new nw.Menu();
menu.append(new nw.MenuItem({ type: "checkbox", label: "box1", enabled: true }));
tray.menu = menu;

// Remove the tray
tray.remove();
Object.assign(tray, null);

/**
 * nw.Window Tests
 */
// Get the current window
var win = nw.Window.get();

win.isDevToolsOpen((status: boolean) => {
    console.log(status);
});

// Listen to the minimize event
win.on("minimize", function() {
    console.log("Window is minimized");
});

// Minimize the window
win.minimize();

// Unlisten the minimize event
win.removeAllListeners("minimize");

// Create a new window and get it
nw.Window.open("https://github.com", {}, function(new_win) {
    // And listen to new window's focus event
    new_win.on("focus", function() {
        console.log("New window is focused");
    });
});

// The opened window is not focused by default; `focus` opts back in
nw.Window.open("https://github.com/nwjs/nw.js", {
    position: "center",
    width: 901,
    height: 127,
    focus: true,
    new_instance: true,
    mixed_context: true,
    inject_js_start: "inject_start.js",
    inject_js_end: "inject_end.js",
    id: "main-window",
});

// Get the current window
var win = nw.Window.get();

// Create a new window and get it
nw.Window.open("https://github.com/nwjs/nw.js", {}, function(new_win) {
    // do something with the newly created window
});

nw.Window.getAll(function(windows: NWJS_Helpers.win[]) {
    console.log(`There are ${windows.length} windows open`);
});

win.on("close", function() {
    win.hide(); // Pretend to be closed already
    console.log("We're closing...");
    win.close(true); // then close it forcely
});

win.close();

// png as base64string
win.capturePage(
    function(base64string) {
        // do something with the base64string
    },
    { format: "png", datatype: "raw" },
);

// png as node buffer
win.capturePage(
    function(buffer) {
        // do something with the buffer
    },
    { format: "png", datatype: "buffer" },
);

// captureScreenshot with a callback...
win.captureScreenshot({ fullSize: true, format: "png" }, function(err, data) {
    if (err !== null) {
        console.error(err);
        return;
    }
    console.log(data);
});

// ...or without one, in which case it resolves with the base64 encoded image
win.captureScreenshot({
    format: "jpeg",
    quality: 80,
    clip: { x: 0, y: 0, width: 800, height: 600, scale: 1 },
}).then(function(data: string) {
    console.log(data);
});

// Open a new window.
nw.Window.open("popup.html", {}, function(win) {
    // Release the 'win' object here after the new window is closed.
    win.on("closed", function() {
        Object.assign(win, null);
    });

    // Listen for window click event
    win.window.addEventListener("on", function() {
        // Create div element notifying of click
        var el = win.window.document.createElement("div");
        el.innerText = "Window clicked!";

        // Append it to the body
        win.window.document.body.append(el);
    });

    // Listen to main window's close event
    nw.Window.get().on("close", function() {
        // Hide the window to give user the feeling of closing immediately
        win.hide();

        // If the new window is still open then close it.
        if (win != null) win.close(true);

        // After closing the new window, close the main window.
        win.close(true);
    });
});

nw.Window.get().on("new-win-policy", function(frame, url, policy) {
    // do not open the window
    policy.ignore();
    // and open it in external browser
    nw.Shell.openExternal(url);
});

nw.Window.get().on("navigation", function(frame, url, policy) {
    if (policy) policy.ignore();
});

/**
 * <webview> Tag Tests
 */
declare var webviewEl: NWJS_Helpers.webview;

// Show the DevTools of the guest contents in a new window...
webviewEl.showDevTools(true);

// ...or inside another, trusted, webview
declare var devtoolsContainer: NWJS_Helpers.webview;
webviewEl.showDevTools(true, devtoolsContainer);

webviewEl.inspectElementAt(120, 240);

// The store id can be passed to the chrome.cookies API
var cookieStoreId: string = webviewEl.getCookieStoreId();
console.log(cookieStoreId);

// `mainWorld` can be added to the InjectDetails of webview.executeScript()
var injectDetails: NWJS_Helpers.WebviewInjectDetails = { mainWorld: true };
console.log(injectDetails);

/**
 * JavaScript Contexts Tests
 */
// Require a package
var fs = nw.require("fs");

// The Node context's global object and process module
var nodeGlobal = nw.global;
console.log(nodeGlobal);

console.log(nw.process.versions.nw);
console.log(nw.process.versions.chromium);
console.log(nw.process.versions["nw-flavor"]);
console.log(process.versions.nw, process.versions["nw-flavor"]);

/**
 * Changes to DOM Tests
 */
var fileinput = document.querySelector("input[type=file]") as HTMLInputElement;

// The value contains the native path of the local file
var nativePath: string = fileinput.value;
console.log(nativePath);

// And so does `path` on each item of `files`
var files = fileinput.files;
if (files !== null) {
    for (var f = 0; f < files.length; ++f) {
        console.log(files[f].path);
    }
}

// The nw* attributes are content attributes with no reflected IDL property
fileinput.setAttribute("nwsaveas", "filename.txt");
fileinput.setAttribute("nwworkingdir", "/home/path/");
