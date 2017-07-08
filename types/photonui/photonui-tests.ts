

// All exemple scripts from PhotonUI documentation:

// Accel Manager
// We add a field to test accels
var field = new photonui.TextField({
    value: "Text Field"
});
photonui.domInsert(field, "demo");

// ... And  a label to display things
var label = new photonui.Label({text: ""});
photonui.domInsert(label, "demo");

// We create the accel
var accel = new photonui.AccelManager();

// "Ctrl+A" / "Command+A" accelerator that is disabled if
// a field is focused
accel.addAccel("accel1", "ctrl + a", function() {
    label.text += "'Ctrl + A' accelerator\n";
});
accel.addAccel("accel1-mac", "command + a", function() {
    label.text += "'Command + A' accelerator\n";
});

// "Ctrl+R" accelerator that works even if the field is focused
accel.addAccel("accel3", "ctrl + r", function() {
    label.text += "'Ctrl + R' accelerator\n";
}, false);

// A more complexe sequence (hold "Ctrl+X", and then press "C")
accel.addAccel("accel4", "ctrl + x > c", function() {
    label.text += "'Ctrl + X > C' accelerator\n";
});

// BoxLayout
var box = new photonui.BoxLayout({
    orientation: "vertical",  // "vertical" or "horizontal"
    spacing: 5,               // spacing between widgets
    children: [
        new photonui.Button(),
        new photonui.Button(),
        new photonui.Button()
    ]
});

photonui.domInsert(box, "demo");

// Button
var btn = new photonui.Button({
    text: "My Button",
    leftIcon: new photonui.FAIcon("fa-send"),
    callbacks: {
        click: function(widget: any, event: any) {
            alert("Someone clicked on " + widget.text);
        }
    }
});

photonui.domInsert(btn, "demo");

// canvas
var canvas = new photonui.Canvas({
    width: 200,
    height: 150
});

photonui.domInsert(canvas, "demo");

var ctx = canvas.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeStyle = "#DB624F";

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(40, 140);
ctx.lineTo(50, 30);
ctx.lineTo(190, 100);
ctx.stroke();

// Checkbox
var check = new photonui.CheckBox({
    value: true
});

photonui.domInsert(check, "demo");

// Color
var color = new photonui.Color("red");

console.log(color.hexString);
// "#FF0000"
var color = new photonui.Color("red");

console.log(color.hexString);
// "#FF0000"

console.log(color.rgbString);
// "rgb(255, 0, 0)"

console.log(color.rgbaString);
// "rgb(255, 0, 0, 1)"

console.log(color.getRGB());
// Array [ 255, 0, 0 ]

console.log(color.getRGBA());
// Array [ 255, 0, 0, 255 ]

console.log(color.red, color.green, color.blue);
// 255 0 0

console.log(color.hue, color.saturation, color.brightness);
// 0 100 100

color.brightness = 50;
console.log(color.hexString);
// "#7F0000"

color.hue = 204;
console.log(color.hexString);
// #004C7F

// ColorButton
var btn2 = new photonui.ColorButton({
    value: "#4EC8DB",
    callbacks: {
        "value-changed": function(widget: any, value: any) {
            var header = document.getElementsByTagName("header")[0];
            header.style.backgroundColor = value;
        }
    }
});

photonui.domInsert(btn2, "demo");

// colorpalette
var palette = new photonui.ColorPalette({
    callbacks: {
        "value-changed": function(widget: any, value: any) {
            var header = document.getElementsByTagName("header")[0];
            header.style.backgroundColor = value;
        }
    }
});

photonui.domInsert(palette, "demo");

var palette = new photonui.ColorPalette({
    palette: [
        ["#D32F2F", "#F44336", "#E91E63", "#9C27B0", "#673AB7"],
        ["#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688"],
        ["#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107"],
        ["#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"]
    ],
    callbacks: {
        "value-changed": function(widget: any, value: any) {
            var header = document.getElementsByTagName("header")[0];
            header.style.backgroundColor = value;
        }
    }
});

photonui.domInsert(palette, "demo");

// ColorPicker
var colorPicker = new photonui.ColorPicker({
    value: "#4EC8DB",
    callbacks: {
        "value-changed": function(widget: any, value: any) {
            var header = document.getElementsByTagName("header")[0];
            header.style.backgroundColor = value;
        }
    }
});

photonui.domInsert(colorPicker, "demo");

// ColorPickerDialog
var dlg = new photonui.ColorPickerDialog({
    value: "#4EC8DB",
    callbacks: {
        "value-changed": function(widget: any, value: any) {
            var header = document.getElementsByTagName("header")[0];
            header.style.backgroundColor = value;
        }
    }
});

// Add a button to show up the dialog
var btn = new photonui.Button({
    text: "Display the dialog",
    callbacks: {
        click: dlg.show.bind(dlg)
    }
});

photonui.domInsert(btn, "demo");

// Dialog
var pos = photonui.Helpers.getAbsolutePosition("demo");

new photonui.Dialog({
    title: "My Dialog",
    visible: true,
    x: pos.x, y: pos.y,
    child: new photonui.Label("Hello, I'm a dialog"),
    padding: 10,
    buttons: [
        new photonui.Button()
    ],
    callbacks: {
        "close-button-clicked": function(widget: any) {
            widget.destroy();
        }
    }
});

// FAIcon
var icon = new photonui.FAIcon({
    iconName: "fa-camera",
    size: "fa-3x",  // "", "fa-lg", "fa-2x", "fa-3x", "fa-4x", "fa5x"
    color: "#DB624F"
});

photonui.domInsert(icon, "demo");

// FileManager
// File manager that accepts PNG, JPEG, BMP and SVG files
var fm = new photonui.FileManager({
    acceptedMimes: ["image/png", "image/jpeg"], 
    acceptedExts: ["bmp", "svg"],
    dropZone: document,        // Enable file d&d
    multiselect: true,         // Allow to select more than one file
    callbacks: {
        "file-open": function(widget: any, file: any, x: number, y: number) {
            // x and y are defined only with d&d
            if (x !== undefined) {
                alert(file.name + " dropped at ("+x+", "+y+")");
            }
            else {
                alert(file.name + " opened");
            }
        }
    }
});

// Button to show the "file open" dialog
var btn = new photonui.Button({
    text: "Open",
    callbacks: {
        click: function(widget: any, event: any) {
            fm.open();
        }
    }
});

photonui.domInsert(btn, "demo");

// FluidLayout
var fl = new photonui.FluidLayout({
    children: [
        new photonui.Button(),
        new photonui.Button(),
        new photonui.Button(),
        new photonui.Button(),
        new photonui.Button(),
        new photonui.Button(),
        new photonui.Button()
    ]
});

photonui.domInsert(fl, "demo");

// FontSelect
var select = new photonui.FontSelect({
    value: "item1",
    fonts: [
        "Arial",
        "Arial Black",
        "Cantarell",
        "Courier New",
        "Impact",
        "Time New Roman",
        "Titillium Web",
        "Verdana"
    ],
    callbacks: {
        "value-changed": function(widget: any, value: any) {
            alert("Value changed: " + value);
        }
    }
});

photonui.domInsert(select, "demo");

// GridLayout
var grid = new photonui.GridLayout({
    horizontalPadding: 0,
    verticalPadding: 0,
    horizontalSpacing: 5,
    verticalSpacing: 5,
    children: [
        new photonui.Button({
            text: "Widget 1",
            layoutOptions: {
                x: 0, y: 0,
                cols: 1, rows: 1
            }
        }),
        new photonui.Button({
            text: "Widget 2",
            layoutOptions: {
                x: 1, y: 0,
                cols: 1, rows: 1
            }
        }),
        new photonui.Button({
            text: "Widget 3",
            layoutOptions: {
                x: 2, y: 0,
                cols: 1, rows: 2
            }
        }),
        new photonui.Button({
            text: "Widget 4",
            layoutOptions: {
                x: 0, y: 1,
                cols: 2, rows: 1
            }
        })
    ]
});

photonui.domInsert(grid, "demo");

// Image
var img = new photonui.Image({
    url: "../../images/favicon.png"
});

photonui.domInsert(img, "demo");

// Label
var label = new photonui.Label({
    text: "My Label",
    textAlign: "left"
});

photonui.domInsert(label, "demo");

// Menu
var menu = new photonui.Menu({
    iconVisible: true,
    children: [
        new photonui.MenuItem({
            text: "Menu Item 1",
            icon: new photonui.FAIcon("fa-paper-plane")
        }),
        new photonui.MenuItem({
            text: "Menu Item 2",
            icon: new photonui.FAIcon("fa-gears")
        }),
        new photonui.MenuItem({
            text: "Menu Item 3",
            icon: new photonui.FAIcon("fa-paw")
        })
    ]
});

photonui.domInsert(menu, "demo");

// MenuItem
var menu = new photonui.Menu({
    iconVisible: true,
    children: [
        new photonui.MenuItem({
            text: "Menu Item 1",
            icon: new photonui.FAIcon("fa-paper-plane"),
            callbacks: {
                click: function(widget: any, event: any) {
                    alert("You clicked on me!");
                }
            }
        }),
        new photonui.MenuItem({
            text: "Menu Item 2",
            icon: new photonui.FAIcon("fa-gears")
        }),
        new photonui.MenuItem({
            text: "Menu Item 3",
            icon: new photonui.FAIcon("fa-paw")
        })
    ]
});

photonui.domInsert(menu, "demo");

// Mouse Manager
var img = new photonui.Image({
    url: "../../images/favicon.png"
});

var mouse = new photonui.MouseManager({
    element: img,
    callbacks: {
        "click": function(manager: any, mstate: any) {
            alert("You clicked on the image at " + 
                  mstate.x + ", " + mstate.y);
        }
    }
});

photonui.domInsert(img, "demo");

// Numeric Filed
var field2 = new photonui.NumericField({
    placeholder: "placeholder",
    decimalDigits: 2,
    min: -10, max: 10,
    step: 0.5,           // When scrolling over the field
    decimalSymbol: ".",  // "." or ","
    value: 5.5
});

photonui.domInsert(field2, "demo");

// PopupMenu
var pos = photonui.Helpers.getAbsolutePosition("demo");

var popup = new photonui.PopupMenu({
    children: [
        new photonui.MenuItem({
            text: "Menu Item 1",
            icon: new photonui.FAIcon("fa-paper-plane"),
            callbacks: {
                click: function(widget: any, event: any) {
                    alert("You clicked on me!");
                }
            }
        }),
        new photonui.MenuItem({
            text: "Menu Item 2",
            icon: new photonui.FAIcon("fa-gears")
        }),
        new photonui.MenuItem({
            text: "Menu Item 3",
            icon: new photonui.FAIcon("fa-paw")
        })
    ]
});

popup.popupXY(pos.x, pos.y);

// PopupWindow
var pos = photonui.Helpers.getAbsolutePosition("demo");

var popup = new photonui.PopupWindow({
    padding: 10,
    width: 200,
    height: 200,
    child: new photonui.Label({
        text: "Click anywhere to close"
    })
});

popup.popupXY(pos.x, pos.y);

// ProgressBar
var pb = new photonui.ProgressBar({
    textVisible: true,
    value: 0.42
});

photonui.domInsert(pb, "demo");

// Select
var select2 = new photonui.Select({
    value: "item1",
    children: [
        new photonui.MenuItem({value: "item1", text: "Item 1"}),
        new photonui.MenuItem({value: "item2", text: "Item 2"}),
        new photonui.MenuItem({value: "item3", text: "Item 3"})
    ],
    callbacks: {
        "value-changed": function(widget: any, value: any) {
            alert("Value changed: " + value);
        }
    }
});

photonui.domInsert(select2, "demo");

// Separator
var separator = new photonui.Separator();

photonui.domInsert(separator, "demo");

// Slider
var box = new photonui.BoxLayout({
    children: [
        new photonui.Slider({
            fieldVisible: false,
            min: 0, max: 100,
            step: 5,
            value: 50
        }),
        new photonui.Slider({
            fieldVisible: true,
            min: -100, max: 100,
            step: 10,
            value: -50
        }),
        new photonui.Slider({
            fieldVisible: true,
            min: 0, max: 1,
            decimalDigits: 2,
            decimalSymbol: ".",
            step: 0.05,
            value: 0.5
        })
    ]
});

photonui.domInsert(box, "demo");

// SpriteIcon
// Create the spritesheet
var spriteSheet = new photonui.SpriteSheet({
    name: "default",
    imageUrl: "./spritesheet.png",
    size: 16,
    icons: {
        "remove":    [ 0,  0],
        "add":       [16,  0],
        "grayHeart": [32,  0],
        "redHeart":  [48,  0],
        "battery1":  [ 0, 16],
        "battery2":  [16, 16],
        "battery3":  [32, 16],
        "battery4":  [48, 16]
    }
});

// Create an icon from the spritesheet
var icon2 = new photonui.SpriteIcon("default/redHeart");

photonui.domInsert(icon2, "demo");

// SubMenuItem
var menu = new photonui.Menu({
    iconVisible: true,
    children: [
        new photonui.SubMenuItem({
            text: "Submenu Item",
            menuName: "submenu1",
            icon: new photonui.FAIcon("fa-paw")
        }),
        new photonui.Menu({
            visible: true,  // false to hide it by default
            name: "submenu1",
            iconVisible: true,
            children: [
                new photonui.MenuItem({
                    text: "Submenu Item 1",
                    icon: new photonui.FAIcon("fa-gamepad")
                }),
                new photonui.MenuItem({
                    text: "Sumbenu Item 2",
                    icon: new photonui.FAIcon("fa-flask")
                })
            ]
        })
    ]
});

photonui.domInsert(menu, "demo");

// Switch
var sw = new photonui.Switch({
    value: true
});

photonui.domInsert(sw, "demo");

// TabItem
var tabs = new photonui.TabLayout({
    tabsPosition: "top",  // "top", "bottom", "left" or "right"
    children: [
        new photonui.TabItem({
            title: "Tab 1",
            child: new photonui.Label("Widget inside the first tab")
        }),
        new photonui.TabItem({
            title: "Tab 2",
            child: new photonui.Button()
        }),
        new photonui.TabItem({
            title: "Tab 3"
        })
    ]
});

photonui.domInsert(tabs, "demo");
document.getElementById("demo")
    .className += " photonui-container-expand-child";

// TabLayout
var tabs = new photonui.TabLayout({
    tabsPosition: "top",  // "top", "bottom", "left" or "right"
    children: [
        new photonui.TabItem({
            title: "Tab 1",
            child: new photonui.Label("Widget inside the first tab")
        }),
        new photonui.TabItem({
            title: "Tab 2",
            child: new photonui.Button()
        }),
        new photonui.TabItem({
            title: "Tab 3"
        })
    ]
});

photonui.domInsert(tabs, "demo");
document.getElementById("demo")
    .className += " photonui-container-expand-child";

// Text
var text = new photonui.Text({
    rawHtml: "<strong>Lorem ipsum</strong> dolor sit amet..."
});

photonui.domInsert(text, "demo");

// TextAreaField
var field3 = new photonui.TextAreaField({
    placeholder: "placeholder",
    value: "This is a\nTextArea"
});

photonui.domInsert(field3, "demo");

// TextField
var field = new photonui.TextField({
    placeholder: "placeholder",
    value: "Text"
});

photonui.domInsert(field, "demo");

var grid = new photonui.GridLayout({
    verticalSpacing: 5,
    horizontalSpacing: 5,
    children: [
        new photonui.Label({
            text: "Username:",
            forInputName: "username-field",
            layoutOptions: {
                gridX: 0,
                gridY: 0
            }
        }),
        new photonui.TextField({
            name: "username-field",
            placeholder: "Username",
            value: "Anakin",
            layoutOptions: {
                gridX: 1,
                gridY: 0
            }
        }),
        new photonui.Label({
            text: "Password:",
            forInputName: "password-field",
            layoutOptions: {
                gridX: 0,
                gridY: 1
            }
        }),
        new photonui.TextField({
            name: "password-field",
            type: "password",
            placeholder: "password",
            value: "D4RK51D3",
            layoutOptions: {
                gridX: 1,
                gridY: 1
            }
        }),
        new photonui.Button({
            text: "Login",
            leftIcon: new photonui.FAIcon("fa-sign-in"),
            callbacks: {
                click: function(widget: any, event: any) {
                    var usernameField = photonui.getWidget("username-field");
                    var passwordField = photonui.getWidget("password-field");
                    alert(
                        "Username: " + (<photonui.TextField>usernameField).value +
                        ", Password: " + (<photonui.TextField>passwordField).value
                    );
                }
            },
            layoutOptions: {
                gridX: 0,
                gridY: 2,
                gridWidth: 2
            }
        })
    ]
});

photonui.domInsert(grid, "demo");

// ToggleButton
var toggle = new photonui.ToggleButton({
    value: false,
    text: "Toggle Button"
});

photonui.domInsert(toggle, "demo");

var toggle2 = new photonui.ToggleButton({
    value: false,
    text: "Value: off",
    buttonColor: "red",
    callbacks: {
        "value-changed": function(widget: any, value: any) {
            widget.text = "Value: " + ((value) ? "on" : "off");
            widget.buttonColor = (value) ? "green" : "red";
        }
    }
});

photonui.domInsert(toggle2, "demo");

// Translation
var translation = new photonui.Translation();

translation.addCatalogs({
    "fr": {
        "messages": {
            "Hello World": ["Bonjour le monde"]
        }
    }
});

translation.locale = "fr";  // Change the locale to test

var label = new photonui.Label({
    text: _("Hello World"),
    text2: translation.lazyGettext("Hello World")
});

photonui.domInsert(label, "demo");

var tr = new photonui.Translation();
tr.addCatalogs({
    "fr": {
        "plural-forms": "nplurals=2; plural=(n > 1);",
        "messages": {
            "Hello World": ["Bonjour le monde"],
            'Browser language is "{lang}".': ["La langue du navigateur est « {lang} »."],
            "Close": ["Fermer"]
        }
    },
    "it": {
        "plural-forms": "nplurals=2; plural=(n != 1);",
        "messages": {
            "Hello World": ["Buongiorno il mondo"],
            'Browser language is "{lang}".': ['La lingua del browser è "{lang}".'],
            "Close": ["Chiudere"]
        }
    }
});
tr.locale = tr.guessUserLanguage();  // Browser language

// Language selector
var layout = new photonui.BoxLayout({
    orientation: "vertical",
    children: [
        new photonui.Label({
            text: _('Browser language is "{lang}".', {
                lang: tr.guessUserLanguage()
            })
        }),
        new photonui.Select({
            name: "lang",
            placeholder: "Choose a language...",
            value: tr.locale,
            children: [
                new photonui.MenuItem({value: "en", text: "English"}),
                new photonui.MenuItem({value: "fr", text: "Français"}),
                new photonui.MenuItem({value: "it", text: "Italiano"}),
            ],
            callbacks: {
                "value-changed": function(widget: any, value: any) {
                    tr.locale = value;
                }
            }
        })
    ]
});
photonui.domInsert(layout, "demo");

// A window
var pos = photonui.Helpers.getAbsolutePosition("demo");
var win = new photonui.Window({
    visible: true,
    title: _("Hello World"),
    x: pos.x, y: pos.y + 100,
    width: 250,
    padding: 20,
    child: new photonui.Button({
        text: _("Close"),
        callbacks: {
            "click": function() { win.hide(); }
        }
    }),
    callbacks: {
        "close-button-clicked": function(widget: any) { widget.hide(); }
    }
});

// Viewport
var viewport = new photonui.Viewport({
    width: 300,
    height: 200,
    padding: 5,
    horizontalScrollbar: false,  // true, false or null (= auto)
    verticalScrollbar: null,     // true, false or null (= auto)
    child: new photonui.BoxLayout({
        children: [
            new photonui.Button(),
            new photonui.Button(),
            new photonui.Button(),
            new photonui.Button(),
            new photonui.Button(),
            new photonui.Button(),
            new photonui.Button(),
            new photonui.Button(),
            new photonui.Button(),
            new photonui.Button()
        ]
    })
});

photonui.domInsert(viewport, "demo");

// Window
var pos = photonui.Helpers.getAbsolutePosition("demo");

new photonui.Window({
    title: "My Window",
    visible: true,
    x: pos.x, y: pos.y,
    width: 300, height: 100,
    callbacks: {
        "close-button-clicked": function(widget: any) {
            widget.destroy();
        },
        "position-changed": function(widget: any, x: number, y: number) {
            widget.title = "My Window (x: " + x + ", y: " + y + ")";
        }
    }
});

// Get the position of the #demo area to display windows
// in the right place
var pos = photonui.Helpers.getAbsolutePosition("demo");

// Create a window with a button to center it (x axis) on the page
var win1 = new photonui.Window({
    title: "Window 1",
    visible: true,
    padding: 10,
    x: pos.x + 20, y: pos.y + 50,
    child: new photonui.Button({
        text: "Center Me",
        callbacks: {
            click: function(widget: any, event: any) {
                win1.center();
                win1.y = pos.y;
            }
        }
    }),
    callbacks: {
        "close-button-clicked": function(widget: any) {
            widget.destroy();
        }
    }
});

// Create a second window without "close" button
var win2 = new photonui.Window({
    title: "Window 2",
    visible: true,
    height: 100,
    closeButtonVisible: false,
    x: pos.x, y: pos.y
});

// Focus the first window
win1.show();
