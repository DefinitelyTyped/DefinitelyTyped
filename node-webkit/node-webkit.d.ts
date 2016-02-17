// Type definitions for node-webkit
// Project: https://github.com/rogerwang/node-webkit
// Definitions by: Pedro Casaubon <https://github.com/xperiments>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "nw.gui" {

    interface IEventEmitter {
        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }

    class EventEmitter implements IEventEmitter {
        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }

    export interface MenuConfig {
        type?: string;
    }

    export interface HideMenusOptions {
        hideEdit: boolean;
        hideWindow: boolean;
    }

    export interface MenuItemConfig {
        label?: string;
        click?: Function;
        type?: string;
        submenu?: Menu;
        icon?: string;
        tooltip?: string;
        checked?: boolean;
        enabled?: boolean;
        key?: string;
        modifiers?: string;
    }

    export class MenuItem extends EventEmitter implements MenuItemConfig {
        constructor(config: MenuItemConfig);
        label: string;
        click: Function;
        type: string;
        submenu: Menu;
        icon: string;
        tooltip: string;
        checked: boolean;
        enabled: boolean;
        key: string;
        modifiers: string;
    }

    export class Menu {
        constructor(config?: MenuConfig);
        items: MenuItem[];
        append(item: MenuItem): void;
        remove(item: MenuItem): void;
        insert(item: MenuItem, atPosition: number): void;
        removeAt(index: number): void;
        popup(x: number, y: number): void;
        // since v0.10.0-rc1
        createMacBuiltin(appname: string, options?: HideMenusOptions): void;

    }

    export interface ShortcutOption {
        key: string;
        active: Function;
        failed: Function;
    }

    export class Shortcut extends EventEmitter {
        constructor(option: ShortcutOption);
        key: string;
        active: Function;
        failed: Function;
    }

    export interface WindowManifestOptions {

        title?: string;
        icon?: string;
        toolbar?: boolean;
        frame?: boolean;
        width?: number;
        height?: number;
        position?: string;
        min_width?: number;
        min_height?: number;
        max_width?: number;
        max_height?: number;
    }

    export class Window extends EventEmitter {
        static get(windowObject?: any): Window;
        static open(url: string, options?: WindowManifestOptions): Window;
        x: number;
        y: number;
        width: number;
        height: number;
        title: string;
        menu: Menu;
        isFullScreen: boolean;
        isKioskMode: boolean;
        zoomLevel: number;
        moveTo(x: number, y: number): void;
        moveBy(x: number, y: number): void;
        resizeTo(width: number, height: number): void;
        resizeBy(width: number, height: number): void;
        focus(): void;
        blur(): void;
        show(): void;
        hide(): void;
        close(force?: boolean): void;
        reload(): void;
        reloadIgnoringCache(): void;
        maximize(): void;
        unmaximize(): void;
        minimize(): void;
        restore(): void;
        enterFullscreen(): void;
        leaveFullscreen(): void;
        toggleFullscreen(): void;
        enterKioskMode(): void;
        leaveKioskMode(): void;
        toggleKioskMode(): void;
        showDevTools(id?: string, headless?: boolean): void;
        showDevTools(id: HTMLIFrameElement, headless?: boolean): void;
        closeDevTools(): void;
        isDevToolsOpen(): boolean;
        setMaximumSize(width: number, height: number): void;
        setMinimumSize(width: number, height: number): void;
        setResizable(resizable: boolean): void;
        setAlwaysOnTop(top: boolean): void;
        setPosition(position: string): void;
        setShowInTaskbar(show: boolean): void;
        requestAttention(attention: boolean): void;
        requestAttention(attention: number): void;
        capturePage(callback: Function, imageformat?: string): void;
        capturePage(callback: Function, config_object: { format: string; datatype: string }): void;
        setProgressBar(progress: number): void;
        setBadgeLabel(label: string): void;
        eval(frame: HTMLIFrameElement, script: string): void;
    }

    export interface App {
        argv: any;
        fullArgv: any;
        dataPath: string;
        manifest: any;
        clearCache(): void;
        closeAllWindows(): void;
        crashBrowser(): void;
        crashRenderer(): void;
        getProxyForURL(url: string): void;
        quit(): void;
        setCrashDumpDir(dir: string): void;
        addOriginAccessWhitelistEntry(
            sourceOrigin: string
            , destinationProtocol: string
            , destinationHost: string
            , allowDestinationSubdomains: boolean
            ): void;
        removeOriginAccessWhitelistEntry(
            sourceOrigin: string
            , destinationProtocol: string
            , destinationHost: string
            , allowDestinationSubdomains: boolean
            ): void;
        registerGlobalHotKey(shortcut: Shortcut): void;
        unregisterGlobalHotKey(shortcut: Shortcut): void;
    }

    export class Clipboard {
        static get(): Clipboard;
        get(type?: string): string;
        set(data: string, type?: string): void;
        clear(): void;
    }

    export interface TrayOption {
        title?: string;
        tooltip?: string;
        icon?: string;
        alticon?: string;
        menu?: Menu;
    }

    export class Tray implements TrayOption {
        constructor(option: TrayOption);
        title: string;
        tooltip: string;
        icon: string;
        alticon: string;
        menu: Menu;
        remove(): void;
    }

    interface Shell {
        openExternal(uri: string): void;
        openItem(file_path: string): void;
        showItemInFolder(file_path: string): void;
    }

    export var App: App;
    export var Shell: Shell;

}
