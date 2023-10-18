export interface KeyboardEventLike {
    key: string;
    which: number;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}

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
    options?: HotKeyOptions,
): (event: KeyboardEventLike) => boolean;

export function isHotkey(hotkey: string | ReadonlyArray<string>, event: KeyboardEventLike): boolean;

export function isHotkey(
    hotkey: string | ReadonlyArray<string>,
    options: HotKeyOptions,
    event: KeyboardEventLike,
): boolean;

export function isCodeHotkey(hotkey: string | ReadonlyArray<string>): (event: KeyboardEventLike) => boolean;
export function isCodeHotkey(hotkey: string | ReadonlyArray<string>, event: KeyboardEventLike): boolean;

export function isKeyHotkey(hotkey: string | ReadonlyArray<string>): (event: KeyboardEventLike) => boolean;
export function isKeyHotkey(hotkey: string | ReadonlyArray<string>, event: KeyboardEventLike): boolean;

/**
 * Parse.
 */
export function parseHotkey(hotkey: string, options?: HotKeyOptions): HotKey;

/**
 * Compare.
 */
export function compareHotkey(object: HotKey, event: KeyboardEventLike): boolean;

/**
 * Utils.
 */
export function toKeyCode(name: string): number;
export function toKeyName(name: string): string;

/**
 * Export.
 */
export default isHotkey;
