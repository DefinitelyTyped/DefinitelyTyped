// Type definitions for Mousetrap 1.4.6's global-bind extension
// Project: http://craig.is/killing/mice#extensions.global
// Definitions by: Andrew Bradley <https://github.com/cspotcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface MousetrapStatic {
    bindGlobal(keyArray: string|string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
}
