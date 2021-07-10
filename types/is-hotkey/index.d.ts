// Type definitions for is-hotkey 0.1
// Project: https://github.com/ianstormtaylor/is-hotkey#readme
// Definitions by: Pierre-Marc Airoldi <https://github.com/petester42>
//                 Kalley Powell <https://github.com/kalley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface HotKeyOptions {
    byKey: boolean;
}

export interface HotKey {
    which?: number | undefined;
    key?: string | undefined;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}

/**
 * Is hotkey?
 */
export function isHotkey(
    hotkey: string | ReadonlyArray<string>,
    options?: HotKeyOptions
): (event: KeyboardEvent) => boolean;

export function isHotkey(
    hotkey: string | ReadonlyArray<string>,
    event: KeyboardEvent
): boolean;

export function isHotkey(
    hotkey: string | ReadonlyArray<string>,
    options: HotKeyOptions,
    event: KeyboardEvent
): boolean;

export function isCodeHotkey(
    hotkey: string | ReadonlyArray<string>
): (event: KeyboardEvent) => boolean;
export function isCodeHotkey(
    hotkey: string | ReadonlyArray<string>,
    event: KeyboardEvent
): boolean;

export function isKeyHotkey(
    hotkey: string | ReadonlyArray<string>
): (event: KeyboardEvent) => boolean;
export function isKeyHotkey(
    hotkey: string | ReadonlyArray<string>,
    event: KeyboardEvent
): boolean;

/**
 * Parse.
 */
export function parseHotkey(hotkey: string, options?: HotKeyOptions): HotKey;

/**
 * Compare.
 */
export function compareHotkey(object: HotKey, event: KeyboardEvent): boolean;

/**
 * Utils.
 */
export function toKeyCode(name: string): number;
export function toKeyName(name: string): string;

/**
 * Export.
 */
export default isHotkey;
