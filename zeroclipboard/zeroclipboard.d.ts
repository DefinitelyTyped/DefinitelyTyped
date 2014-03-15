// Type definitions for ZeroClipboard
// Project: https://github.com/jonrohan/ZeroClipboard
// Definitions by: Eric J. Smith <https://github.com/ejsmith>
// Definitions by: Blake Niemyjski <https://github.com/niemyjski>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class ZeroClipboard {
    constructor(elements?: any, options?: ZeroClipboardOptions);
    activate(element: any): void;
    setText(newText: string): void;
    title(newTitle: string): void;
    setSize(width: number, height: number): void;
    forceHandCursor(enabled: boolean): void;
    version: string;
    moviePath: string;
    trustedDomains: any;
    text: string;
    hoverClass: string;
    activeClass: string;
    deactivate(): void;
    ready: boolean;
    reposition(): void; // returns false in some scenarios, but never returns true
    on(eventName: string, func: Function): void;
    off(eventName: string, func: Function): void;
    clip(elements: any): void;
    unclip(elements: any): void;
    static config(options: ZeroClipboardOptions): void;
    static destroy(): void;
    static emit(eventName: string, args: any): void;
}

interface ZeroClipboardOptions {
    moviePath?: string;
    trustedDomains?: any;
    hoverClass?: string;
    activeClass?: string;
}
