///<reference path="../node/node.d.ts"/>
///<reference path="node-webkit.d.ts"/>
// Load native UI library
var gui: typeof nw.gui;


/* WINDOW */

    // Get the current window
    var win = gui.Window.get();

    // Listen to the minimize event
    win.on('minimize', function() {
        console.log('Window is minimized');
    });

    // Minimize the window
    win.minimize();

    // Unlisten the minimize event
    win.removeAllListeners('minimize');

    // Create a new window and get it
    var new_win = gui.Window.get(
        window.open('https://github.com')
    );

    // And listen to new window's focus event
    new_win.on('focus', function() {
        console.log('New window is focused');
    });


    // Get the current window
    var win = gui.Window.get();

    // Create a new window and get it
    var new_win = gui.Window.get(
        window.open('https://github.com')
    );

    // png as base64string
    win.capturePage(function(base64string:string){
        // do something with the base64string
    }, { format : 'png', datatype : 'raw'} );

    // png as node buffer
    win.capturePage(function(buffer:Buffer){
        // do something with the buffer
    }, { format : 'png', datatype : 'buffer'} );


    // Open a new window.
    var win = gui.Window.get(
        window.open('popup.html')
    );

    // Release the 'win' object here after the new window is closed.
    win.on('closed', function() {
        win = null;
    });

    // Listen to main window's close event
    gui.Window.get().on('close', function() {
        // Hide the window to give user the feeling of closing immediately
        this.hide();

        // If the new window is still open then close it.
        if (win != null)
            win.close(true);

        // After closing the new window, close the main window.
        this.close(true);
    });


/* MENU */

    // Create an empty menu
    var menu = new gui.Menu();

    // Add some items
    menu.append(new gui.MenuItem({ label: 'Item A' }));
    menu.append(new gui.MenuItem({ label: 'Item B' }));
    menu.append(new gui.MenuItem({ type: 'separator' }));
    menu.append(new gui.MenuItem({ label: 'Item C' }));

    // Remove one item
    menu.removeAt(1);

    // Popup as context menu
    menu.popup(10, 10);

    // Iterate menu's items
    for (var i = 0; i < menu.items.length; ++i) {
        console.log(menu.items[i]);
    }


    var win = gui.Window.get();
    var nativeMenuBar = new gui.Menu({ type: "menubar" });
    nativeMenuBar.createMacBuiltin("My App");
    win.menu = nativeMenuBar;

    nativeMenuBar.createMacBuiltin("My App", {
        hideEdit: true,
        hideWindow: true
    });

/* MENU ITEM */

    var itemc:nw.gui.MenuItem;

    // Create a separator
    itemc = new gui.MenuItem({ type: 'separator' });

    // Create a normal item with label and icon
    itemc = new gui.MenuItem({
        type: "normal",
        label: "I'm a menu item",
        icon: "img/icon.png"
    });

    // Or you can omit the 'type' field for normal items
    itemc = new gui.MenuItem({ label: 'Simple item' });

    // Bind a callback to item
    itemc = new gui.MenuItem({
        label: "Click me",
        click: function() {
            console.log("I'm clicked");
        },
        key: "s",
        modifiers: "ctrl-alt",
    });

    // You can have submenu!
    var submenu = new gui.Menu();
    submenu.append(new gui.MenuItem({ label: 'Item 1' }));
    submenu.append(new gui.MenuItem({ label: 'Item 2' }));
    submenu.append(new gui.MenuItem({ label: 'Item 3' }));
    itemc.submenu = submenu;

    // And everything can be changed at runtime
    itemc.label = 'New label';
    itemc.click = function() { console.log('New click callback'); };


/* APP */

    // Print arguments
    console.log(gui.App.argv);

    // Quit current app
    gui.App.quit();

    // Get the name field in manifest
    gui.App.manifest.name

    gui.App.addOriginAccessWhitelistEntry('http://github.com/', 'app', 'myapp', true);


/* CLIPBOARD */

    // We can not create a clipboard, we have to receive the system clipboard
    var clipboard = gui.Clipboard.get();

    // Read from clipboard
    var text = clipboard.get('text');
    console.log(text);

    // Or write something
    clipboard.set('I love node-webkit :)', 'text');

    // And clear it!
    clipboard.clear();


/* TRAY */

    // Create a tray icon
    var tray = new gui.Tray({ title: 'Tray', icon: 'img/icon.png' });

    // Give it a menu
    var menu = new gui.Menu();
    menu.append(new gui.MenuItem({ type: 'checkbox', label: 'box1' }));
    tray.menu = menu;

    // Remove the tray
    tray.remove();
    tray = null;


/* SHELL */

    // Open URL with default browser.
    gui.Shell.openExternal('https://github.com/rogerwang/node-webkit');

    // Open a text file with default text editor.
    gui.Shell.openItem('test.txt');

    // Open a file in file explorer.
    gui.Shell.showItemInFolder('test.txt');