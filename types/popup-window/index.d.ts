interface PopupWindowConfig {
    name?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    left?: number | undefined;
    top?: number | undefined;
    menubar?: boolean | undefined;
    toolbar?: boolean | undefined;
    location?: boolean | undefined;
    status?: boolean | undefined;
    resizable?: boolean | undefined;
    scrollbars?: boolean | undefined;
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
