/// <reference path="angular-hotkeys.d.ts" />

var hotkeyProvider: ng.hotkeys.HotkeysProvider;
var hotkeyObj: ng.hotkeys.Hotkey;

hotkeyProvider.add("mod+s", "saves a file", (event: Event, hotkey: ng.hotkeys.Hotkey) => {} );
hotkeyProvider.add(hotkeyObj);
hotkeyProvider.del("mod+s");
hotkeyProvider.get("mod+s");
hotkeyProvider.toggleCheatSheet();

hotkeyProvider.add(hotkeyObj.combo, hotkeyObj.description ,hotkeyObj.callback);

