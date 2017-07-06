// Type definitions for angular-hotkeys
// Project: https://github.com/chieffancypants/angular-hotkeys
// Definitions by: Jason Zhao <https://github.com/jlz27>, Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
//readme written by David Valentine <https://github.com/dvalenti314/>


/// <reference types="angular" />

import * as ng from 'angular';

declare module 'angular' {
    export namespace hotkeys {

        interface HotkeysProvider {
            template: string;
            templateTitle: string;
            includeCheatSheet: boolean;
            cheatSheetHotkey: string;
            cheatSheetDescription: string;

            add(combo: string | string[], callback: (event: Event, hotkey?: Hotkey) => void, action?: string, allowIn?: Array<string>, persistent?: boolean): ng.hotkeys.Hotkey;

            add(combo: string | string[], description: string, callback: (event: Event, hotkey?: Hotkey) => void, action?: string, allowIn?: Array<string>, persistent?: boolean): ng.hotkeys.Hotkey;

            add(hotkeyObj: ng.hotkeys.Hotkey): ng.hotkeys.Hotkey;

            bindTo(scope: ng.IScope): ng.hotkeys.HotkeysProviderChained;

            del(combo: string | string[]): void;

            del(hotkeyObj: ng.hotkeys.Hotkey): void;

            get(combo: string | string[]): ng.hotkeys.Hotkey;

            toggleCheatSheet(): void;

            purgeHotkeys(): void;
        }

        interface HotkeysProviderChained {
            add(combo: string | string[], description: string, callback: (event: Event, hotkeys: ng.hotkeys.Hotkey) => void): HotkeysProviderChained;

            add(hotkeyObj: ng.hotkeys.Hotkey): HotkeysProviderChained;
        }

        interface Hotkey {
            combo: string | string[];
            description?: string;
            callback: (event: Event, hotkey: ng.hotkeys.Hotkey) => void;
            action?: string;
            allowIn?: Array<string>;
            persistent?: boolean;
        }
    }
}
