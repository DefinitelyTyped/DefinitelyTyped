// Type definitions for ZeroClipboard
// Project: https://github.com/jonrohan/ZeroClipboard
// Definitions by: Eric J. Smith <https://github.com/ejsmith>
// Definitions by: Blake Niemyjski <https://github.com/niemyjski>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class ZeroClipboard {
    constructor(elements?: any, options?: ZeroClipboardOptions);
    setCurrent(element: any): void;
    setText(newText: string): void;
    setTitle(newTitle: string): void;
    setSize(width: number, height: number): void;
    setHandCursor(enabled: boolean): void;
    version: string;
    moviePath: string;
    trustedDomains: any;
    text: string;
    hoverClass: string;
    activeClass: string;
    resetBridge(): void;
    ready: boolean;
    reposition(): void; // returns false in some scenarios, but never returns true
    on(eventName: string, func: Function): void;
    addEventListener(eventName: string, func: Function): void;
    off(eventName: string, func: Function): void;
    removeEventListener(eventName: string, func: Function): void;
    receiveEvent(eventName: string, args: any): void;
    glue(elements: any): void;
    unglue(elements: any): void;
    static setDefaults(options: ZeroClipboardOptions): void;
    static destroy(): void;
    static detectFlashSupport(): boolean;
    static dispatch(eventName: string, args: any): void;
}

interface ZeroClipboardOptions {
    moviePath?: string;
    trustedDomains?: any;
    hoverClass?: string;
    activeClass?: string;
}
