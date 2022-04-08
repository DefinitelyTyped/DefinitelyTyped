// Type definitions for popup-window 1.0
// Project: https://github.com/webdeveric/popup-window#readme
// Definitions by: Aram Khachatrian <https://github.com/aramwram>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PopupWindowConfig {
    name?: string;
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    menubar?: boolean;
    toolbar?: boolean;
    location?: boolean;
    status?: boolean;
    resizable?: boolean;
    scrollbars?: boolean;
}

declare class PopupWindow {
    readonly url: string;
    readonly name: string;

    constructor(url?: string, config?: PopupWindowConfig);

    /**
     * Open a new browser window.
     */
    open(): PopupWindow;

    /**
     * Close the browser window.
     */
    close(): PopupWindow;

    /**
     * Accepts a callback - the callback is called when the window is opened.
     */
    opened(callback: (win: PopupWindow) => void): PopupWindow;

    /**
     * Accepts a callback - the callback is called when the window is closed.
     */
    blocked(callback: (win: PopupWindow) => void): PopupWindow;

    /**
     * Accepts a callback - the callback is called when the window is blocked from opening.
     */
    closed(callback: (win: PopupWindow) => void): PopupWindow;
}

export = PopupWindow;
