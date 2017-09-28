var scope: ng.IScope;
var hotkeyProvider: ng.hotkeys.HotkeysProvider;
var hotkeyObj: ng.hotkeys.Hotkey;

hotkeyProvider.add("mod+s", "saves a file", (event: Event, hotkey: ng.hotkeys.Hotkey) => {} );
hotkeyProvider.add(["mod+s"], "saves a file", (event: Event, hotkey: ng.hotkeys.Hotkey) => {} );
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

