// Type definitions for electron-util 0.2
// Project:  https://github.com/sindresorhus/electron-util
// Definitions by: Kai Puth <https://github.com/kputh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const app: {
    app: any,
    BrowserWindow: any,
    dialog: any,
};

export const is: {
    macos: boolean,
    linux: boolean,
    windows: boolean,
    main: boolean,
    renderer: boolean,
    development: boolean,
    usingAsar: boolean,
    macAppStore: boolean,
    windowsStore: boolean,
};

export const appReady: Promise<void>;
export const electronVersion: string;
export const chromeVersion: string;

export interface PlatformsParameter<T> {
    macos?: T | (() => T);
    windows?: T | (() => T);
    linux?: T | (() => T);
    default?: T | (() => T);
}

export function platform<T>(platforms: PlatformsParameter<T>): T;

export function activeWindow(): any;

export function runJS(code: string, window?: any): Promise<any>;

export function fixPathForAsarUnpack(path: string): string;
