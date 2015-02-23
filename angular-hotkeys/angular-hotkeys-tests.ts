/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="angular-hotkeys.d.ts" />

var scope: angular.IScope;
var hotkeyProvider: angular.hotkeys.HotkeysProvider;
var hotkeyObj: angular.hotkeys.Hotkey;

hotkeyProvider.add("mod+s", "saves a file", (event: Event, hotkey: angular.hotkeys.Hotkey) => {} );
hotkeyProvider.add(["mod+s"], "saves a file", (event: Event, hotkey: angular.hotkeys.Hotkey) => {} );
hotkeyProvider.add(hotkeyObj);
hotkeyProvider.bindTo(scope);
hotkeyProvider.del("mod+s");
hotkeyProvider.del(["mod+s"]);
hotkeyProvider.get("mod+s");
hotkeyProvider.get(["mod+s"]);
hotkeyProvider.toggleCheatSheet();

hotkeyProvider.add(hotkeyObj.combo, hotkeyObj.description ,hotkeyObj.callback);

hotkeyProvider.bindTo(scope)
	.add(hotkeyObj)
	.add(hotkeyObj)
	.add({
		combo: 'w',
		description: 'blah blah',
		callback: function() {}
	})
	.add({
		combo: ['w', 'mod+w'],
		description: 'blah blah',
		callback: function() {}
	});

