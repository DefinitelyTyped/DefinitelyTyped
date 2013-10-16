// Type definitions for Chrome packaged application development.
// Project: http://developer.chrome.com/apps/
// Definitions by: Adam Lay <https://github.com/AdamLay>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

////////////////////
// App Runtime
////////////////////
declare module chrome.app.runtime {
    interface LaunchData {
        id?: string;
        items?: LaunchDataItem[];
        url?: string;
        referrerUrl?: string;
        isKioskSession?: boolean;
    }

    interface LaunchDataItem {
        entry: File;
        type: string;
    }

    interface LaunchedEvent {
        addListener(callback: (launchData: LaunchData) => void);
    }

    interface RestartedEvent {
        addListener(callback: () => void);
    }

    var onLaunched: LaunchedEvent;
    var onRestarted: RestartedEvent;
}

////////////////////
// App Window
////////////////////
declare module chrome.app.window {
    interface Bounds {
        left?: number;
        top?: number;
        width?: number;
        height?: number;
    }

    interface AppWindow {
        focus: () => void;
        fullscreen: () => void;
        isFullscreen: () => boolean;
        minimize: () => void;
        isMinimized: () => boolean;
        maximize: () => void;
        isMaximized: () => boolean;
        restore: () => void;
        moveTo: (left: number, top: number) => void;
        resizeTo: (width: number, height: number) => void;
        drawAttention: () => void;
        clearAttention: () => void;
        close: () => void;
        show: () => void;
        hide: () => void;
        getBounds: () => Bounds;
        setBounds: (bounds: Bounds) => void;
        contentWindow: Window;
    }

    interface CreateOptions {
        id?: string;
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
        frame?: string; // "none", "chrome"
        bounds?: Bounds;
        transparentBackground?: boolean;
        state?: string; // "normal", "fullscreen", "maximized", "minimized" 
        hidden?: boolean;
        resizable?: boolean;
        singleton?: boolean;
    }

    export function create(url: string, options?: CreateOptions, callback?: (created_window: AppWindow) => void): void;
    export function current(): AppWindow;

    interface WindowEvent {
        addListener(callback: () => void): void;
    }

    var onBoundsChanged: WindowEvent;
    var onClosed: WindowEvent;
    var onFullscreened: WindowEvent;
    var onMaximized: WindowEvent;
    var onMinimized: WindowEvent;
    var onRestored: WindowEvent;
}