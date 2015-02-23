// Type definitions for angular-hotkeys
// Project: https://github.com/chieffancypants/angular-hotkeys
// Definitions by: Jason Zhao <https://github.com/jlz27>, Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.hotkeys {

    interface HotkeysProvider {
        template: string;
        templateTitle:string;
        includeCheatSheet: boolean;
        cheatSheetHotkey: string;
        cheatSheetDescription: string;

        add(combo: string|string[], callback: (event: Event, hotkey?: Hotkey) => void, action?: string, allowIn?: Array<string>, persistent?: boolean): angular.hotkeys.Hotkey;

        add(combo: string|string[], description: string, callback: (event: Event, hotkey?: Hotkey) => void, action?: string, allowIn?: Array<string>, persistent?: boolean): angular.hotkeys.Hotkey;

        add(hotkeyObj: angular.hotkeys.Hotkey): angular.hotkeys.Hotkey;

        bindTo(scope : angular.IScope): angular.hotkeys.HotkeysProviderChained;

        del(combo: string|string[]): void;

        del(hotkeyObj: angular.hotkeys.Hotkey): void;

        get(combo: string|string[]): angular.hotkeys.Hotkey;

        toggleCheatSheet(): void;

        purgeHotkeys(): void;
    }

    interface HotkeysProviderChained {
        add(combo: string|string[], description: string, callback: (event: Event, hotkeys: angular.hotkeys.Hotkey) => void): HotkeysProviderChained;

        add(hotkeyObj: angular.hotkeys.Hotkey): HotkeysProviderChained;
    }

    interface Hotkey {
        combo: string|string[];
        description?: string;
        callback: (event: Event, hotkey: angular.hotkeys.Hotkey) => void;
        action?: string;
        allowIn?: Array<string>;
        persistent?: boolean;
    }
}
