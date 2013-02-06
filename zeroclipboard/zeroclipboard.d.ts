// Type definitions for ZeroClipboard
// Project: https://github.com/jonrohan/ZeroClipboard
// Definitions by: Eric J. Smith <https://github.com/ejsmith>
// Updated by: Blake Niemyjski <https://github.com/niemyjski>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class ZeroClipboard {
    constructor(elements?: any, options?: ZeroClipboardOptions);
    setCurrent(element: any);
    setText(newText: string);
    setTitle(newTitle: string);
    setSize(width: number, height: number);
    setHandCursor(enabled: bool);
    version: string;
    moviePath: string;
    trustedDomains: any;
    text: string;
    hoverClass: string;
    activeClass: string;
    resetBridge();
    ready: bool;
    reposition();
    on(eventName, func);
    addEventListener(eventName: string, func);
    off(eventName: string, func);
    removeEventListener(eventName: string, func);
    receiveEvent(eventName: string, args);
    glue(elements: any);
    unglue(elements: any);
    static setDefaults(options: ZeroClipboardOptions);
    static destroy();
    static detectFlashSupport(): bool;
    static dispatch(eventName: string, func);
}

interface ZeroClipboardOptions {
    moviePath?: string;
    trustedDomains?: any;
    hoverClass?: string;
    activeClass?: string;
}
