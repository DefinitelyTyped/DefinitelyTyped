// http://medialize.github.io/jQuery-contextMenu/docs.html

// Disable a contextMenu trigger
$(".some-selector").contextMenu(false);

// Manually show a contextMenu
$(".some-selector").contextMenu();
$(".some-selector").contextMenu({ x: 123, y: 123 });

// Manually hide a contextMenu
$(".some-selector").contextMenu("hide");

// Register a contextMenu with option object
$.contextMenu({
    selector: ".some-selector",
});

// Register a contextMenu with position function
$.contextMenu({
    selector: ".some-selector",
    position: function(opt, x, y) {
        opt.$menu.css({ top: 123, left: 123 });
    },
});

// Unregister contextMenu
$.contextMenu("destroy", ".some-selector");

// Unregister all contextMenus
$.contextMenu("destroy");
