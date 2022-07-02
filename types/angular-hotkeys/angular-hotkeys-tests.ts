import { HotkeysProvider, Hotkey } from 'angular-hotkeys';
import { module } from 'angular';

module('myApp', ['cfp.hotkeys'])
    .config((hotkeysProvider: HotkeysProvider) => {
        hotkeysProvider.includeCheatSheet = false;
        const somehotKeyObj: Hotkey = {
            combo: '',
            callback: () => { }
        };
    });

function someInjectionService(
    scope: ng.IScope,
    hotkeyProvider: ng.hotkeys.HotkeysProvider,
    hotkeyObj: ng.hotkeys.Hotkey
) {
    hotkeyProvider.add("mod+s", "saves a file", (event: Event, hotkey: ng.hotkeys.Hotkey) => { });
    hotkeyProvider.add(["mod+s"], "saves a file", (event: Event, hotkey: ng.hotkeys.Hotkey) => { });
    hotkeyProvider.add(hotkeyObj);
    hotkeyProvider.bindTo(scope);
    hotkeyProvider.del("mod+s");
    hotkeyProvider.del(["mod+s"]);
    hotkeyProvider.get("mod+s");
    hotkeyProvider.get(["mod+s"]);
    hotkeyProvider.toggleCheatSheet();

    hotkeyProvider.add(hotkeyObj.combo, hotkeyObj.description, hotkeyObj.callback);

    hotkeyProvider.bindTo(scope)
        .add(hotkeyObj)
        .add(hotkeyObj)
        .add({
            combo: 'w',
            description: 'blah blah',
            callback: () => { }
        })
        .add({
            combo: ['w', 'mod+w'],
            description: 'blah blah',
            callback: () => { }
        });

    hotkeyProvider.add({
        combo: 'ctrl+w',
        description: 'Description goes here',
        callback: (event, hotkey) => {
            event.preventDefault();
        }
    });

    hotkeyProvider.add({
        combo: 'ctrl+x',
        callback: (event, hotkey) => {
            //
        }
    });

    hotkeyProvider.add({
        combo: 'ctrl+w',
        description: 'Description goes here',
        allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
        callback(event, hotkey) {
            event.preventDefault();
        }
    });
}
