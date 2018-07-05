/*
 * nw.App Tests
 */
var argv = nw.App.argv;
var fullArgv = nw.App.fullArgv;
var filteredArgv = nw.App.filteredArgv;
var dataPath = nw.App.dataPath;
var manifest = nw.App.manifest;

nw.App.clearCache();
nw.App.closeAllWindows();
nw.App.crashBrowser();
nw.App.crashRenderer();
nw.App.getProxyForURL( 'https://github.com/alirdn' );
nw.App.setProxyConfig( 'http=foopy:80;ftp=foopy2' );
nw.App.quit();
nw.App.addOriginAccessWhitelistEntry( 'https://github.com/', 'chrome-extension', location.host, true );
nw.App.removeOriginAccessWhitelistEntry( 'https://github.com/', 'chrome-extension', location.host, true );

/*
 * Note:
 * nw.App.registerGlobalHotKey() tested in Shortcut Tests
 * nw.App.unregisterGlobalHotKey() tested in Shortcut Tests
 * */

nw.App.on( 'open', function ( args ) {
    console.log( args );
});

nw.App.on( 'reopen', function () {
    console.log( 'reopened' );
});

/**
 * nw.Clipboard Tests
 */
// get the system clipboard
var clipboard = nw.Clipboard.get();
// Read from clipboard
var text = clipboard.get( 'text' );
console.log( text );

// Or write something
clipboard.set( 'I love NW.js :)', 'text' );

// And clear it!
clipboard.clear();

/**
 * nw.Menu Tests
 */
// Create an empty context menu
var menu = new nw.Menu();

// Add some items
menu.append( new nw.MenuItem( { label: 'Item A' }) );
menu.append( new nw.MenuItem( { label: 'Item B' }) );
menu.append( new nw.MenuItem( { type: 'separator' }) );
menu.append( new nw.MenuItem( { label: 'Item C' }) );

// Remove one item
menu.removeAt( 1 );

// Popup as context menu
menu.popup( 10, 10 );

// Iterate menu's items
for ( var i = 0; i < menu.items.length; ++i ) {
    console.log( menu.items[i] );
}
// Create an empty menubar
var menu = new nw.Menu( { type: 'menubar' });

// Create a submenu as the 2nd level menu
var submenu = new nw.Menu();
submenu.append( new nw.MenuItem( { label: 'Item A' }) );
submenu.append( new nw.MenuItem( { label: 'Item B' }) );

// Create and append the 1st level menu to the menubar
menu.append( new nw.MenuItem( {
    label: 'First Menu',
    submenu: submenu
}) );

// Assign it to `window.menu` to get the menu displayed
nw.Window.get().menu = menu;

/**
 * nw.MenuItem Tests
 */
var item: any;

// Create a separator
item = new nw.MenuItem( { type: 'separator' });

// Create a normal item with label and icon
item = new nw.MenuItem( {
    type: "normal",
    label: "I'm a menu item",
    icon: "img/icon.png"
});

// Or you can omit the 'type' field for normal items
item = new nw.MenuItem( { label: 'Simple item' });

// Bind a callback to item
item = new nw.MenuItem( {
    label: "Click me",
    click: function () {
        console.log( "I'm clicked" );
    },
    key: "s",
    modifiers: "ctrl+alt",
});

// You can have submenu!
var submenu = new nw.Menu();
submenu.append( new nw.MenuItem( { label: 'Item 1' }) );
submenu.append( new nw.MenuItem( { label: 'Item 2' }) );
submenu.append( new nw.MenuItem( { label: 'Item 3' }) );
item.submenu = submenu;

// And everything can be changed at runtime
item.label = 'New label';
item.click = function () {
    console.log( 'New click callback' );
};

/**
 * nw.Screen Tests
 */
//init must be called once during startup, before any function to nw.Screen can be called
nw.Screen.Init();

var screenCB = {
    onDisplayBoundsChanged: function ( screen: any ) {
        console.log( 'displayBoundsChanged', screen );
    },

    onDisplayAdded: function ( screen: any ) {
        console.log( 'displayAdded', screen );
    },

    onDisplayRemoved: function ( screen: any ) {
        console.log( 'displayRemoved', screen )
    }
};

// listen to screen events
nw.Screen.on( 'displayBoundsChanged', screenCB.onDisplayBoundsChanged );
nw.Screen.on( 'displayAdded', screenCB.onDisplayAdded );
nw.Screen.on( 'displayRemoved', screenCB.onDisplayRemoved );

/**
 * nw.Screen.chooseDesktopMedia() Tests
 */
nw.Screen.Init(); // you only need to call this once
nw.Screen.chooseDesktopMedia( ["window", "screen"],
    function ( streamId ) {
        var vid_constraint = {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: streamId,
                maxWidth: 1920,
                maxHeight: 1080
            },
            optional: <any[]>[]
        };
        //navigator.webkitGetUserMedia( { audio: false, video: constraint }, success_func, fallback_func );
    }
);

/**
 * nw.Screen.DesktopCaptureMonitor Tests
 */
var dcm = nw.Screen.DesktopCaptureMonitor;
nw.Screen.Init();
dcm.on( "added", function ( id, name, order, type ) {
    //select first stream and shutdown
    var constraints = {
        audio: {
            mandatory: {
                chromeMediaSource: "system",
                chromeMediaSourceId: dcm.registerStream( id )
            }
        },
        video: {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: dcm.registerStream( id )
            }
        }
    };

    // TODO: call getUserMedia with contraints

    dcm.stop();
});

dcm.on( "removed", function ( id ) {
});
dcm.on( "orderchanged", function ( id, new_order, old_order ) {
});
dcm.on( "namechanged", function ( id, name ) {
});
dcm.on( "thumbnailchanged", function ( id, thumbnail ) {
});
dcm.start( true, true );

/**
 * nw.Shell Tests
 */
// Open URL with default browser.
nw.Shell.openExternal( 'https://github.com/nwjs/nw.js' );

// Open a text file with default text editor.
nw.Shell.openItem( 'test.txt' );

// Show a file in parent folder with file manager.
nw.Shell.showItemInFolder( 'test.txt' );

/**
 * nw.Shortcut Tests
 */
var option = {
    key: "Ctrl+Shift+A",
    active: function () {
        console.log( "Global desktop keyboard shortcut: " + this.key + " active." );
    },
    failed: function ( msg: any ) {
        // :(, fail to register the |key| or couldn't parse the |key|.
        console.log( msg );
    }
};

// Create a shortcut with |option|.
var shortcut = new nw.Shortcut( option );

// Register global desktop shortcut, which can work without focus.
nw.App.registerGlobalHotKey( shortcut );

// If register |shortcut| successfully and user struck "Ctrl+Shift+A", |shortcut|
// will get an "active" event.

// You can also add listener to shortcut's active and failed event.
shortcut.on( 'active', function () {
    console.log( "Global desktop keyboard shortcut: " + this.key + " active." );
});

shortcut.on( 'failed', function ( msg: any ) {
    console.log( msg );
});

// Unregister the global desktop shortcut.
nw.App.unregisterGlobalHotKey( shortcut );

/**
 * nw.Tray Tests
 */
// Create a tray icon
var tray = new nw.Tray( { title: 'Tray', icon: 'img/icon.png' });

// Give it a menu
var menu = new nw.Menu();
menu.append( new nw.MenuItem( { type: 'checkbox', label: 'box1' }) );
tray.menu = menu;

// Remove the tray
tray.remove();
tray = null;

/**
 * nw.Window Tests
 */
// Get the current window
var win = nw.Window.get();

// Listen to the minimize event
win.on( 'minimize', function () {
    console.log( 'Window is minimized' );
});

// Minimize the window
win.minimize();

// Unlisten the minimize event
win.removeAllListeners( 'minimize' );

// Create a new window and get it
nw.Window.open( 'https://github.com', {}, function ( new_win ) {
    // And listen to new window's focus event
    new_win.on( 'focus', function () {
        console.log( 'New window is focused' );
    });
});

// Get the current window
var win = nw.Window.get();

// Create a new window and get it
nw.Window.open( 'https://github.com/nwjs/nw.js', {}, function ( new_win ) {
    // do something with the newly created window
});

win.on( 'close', function () {
    this.hide(); // Pretend to be closed already
    console.log( "We're closing..." );
    this.close( true ); // then close it forcely
});

win.close();

// png as base64string
win.capturePage( function ( base64string ) {
    // do something with the base64string
}, { format: 'png', datatype: 'raw' });

// png as node buffer
win.capturePage( function ( buffer ) {
    // do something with the buffer
}, { format: 'png', datatype: 'buffer' });

// Open a new window.
nw.Window.open( 'popup.html', {}, function ( win ) {

    // Release the 'win' object here after the new window is closed.
    win.on( 'closed', function () {
        win = null;
    });

    // Listen to main window's close event
    nw.Window.get().on( 'close', function () {
        // Hide the window to give user the feeling of closing immediately
        this.hide();

        // If the new window is still open then close it.
        if ( win != null )
            win.close( true );

        // After closing the new window, close the main window.
        this.close( true );
    });

});

nw.Window.get().on( 'new-win-policy', function ( frame, url, policy ) {
    // do not open the window
    policy.ignore();
    // and open it in external browser
    nw.Shell.openExternal( url );
});
