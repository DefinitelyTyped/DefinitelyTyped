

//http://medialize.github.io/jQuery-contextMenu/docs.html

//Disable a contextMenu trigger
$(".some-selector").contextMenu(false);

//Manually show a contextMenu
$(".some-selector").contextMenu();
$(".some-selector").contextMenu({x: 123, y: 123});

//Manually hide a contextMenu
$(".some-selector").contextMenu("hide");

//Unregister contextMenu
$.contextMenu('destroy', ".some-selector");

//Unregister all contextMenus
$.contextMenu('destroy');
