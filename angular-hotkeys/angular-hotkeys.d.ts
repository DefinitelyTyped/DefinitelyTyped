// Type definitions for angular-hotkeys
// Project: https://github.com/chieffancypants/angular-hotkeys
// Definitions by: Jason Zhao <https://github.com/jlz27>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ng.hotkeys {

    interface HotkeysProvider {
        template: string;
        includeCheatSheet: boolean;
        cheatSheetHotkey: string;
        cheatSheetDescription: string;

        add(combo: string, description: string, callback: (event: Event, hotkeys: ng.hotkeys.Hotkey) => void): void;

        add(hotkeyObj: ng.hotkeys.Hotkey): void;

        bindTo(scope : ng.IScope): ng.hotkeys.HotkeysProviderChained;

        del(combo: string): void;

        get(combo: string): ng.hotkeys.Hotkey;

        toggleCheatSheet(): void;
    }

    interface HotkeysProviderChained {
        add(combo: string, description: string, callback: (event: Event, hotkeys: ng.hotkeys.Hotkey) => void): HotkeysProviderChained;

        add(hotkeyObj: ng.hotkeys.Hotkey): HotkeysProviderChained;
    }

    interface Hotkey {
        combo: string;
        description?: string;
        callback: (event: Event, hotkey: ng.hotkeys.Hotkey) => void;
    }
}
