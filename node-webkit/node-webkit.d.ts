//
// Copyright (c) JBaron.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//


declare module nw.gui {

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
    class EventEmitter implements IEventEmitter
    {
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
        append(item: MenuItem);
        remove(item: MenuItem);
        insert(item: MenuItem, atPosition: number);
        removeAt(index: number);
        popup(x: number, y: number);
        // since v0.10.0-rc1
        createMacBuiltin(appname: string, options?: HideMenusOptions);


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
        moveTo(x: number, y: number);
        moveBy(x: number, y: number);
        resizeTo(width: number, height: number);
        resizeBy(width: number, height: number);
        focus();
        blur();
        show();
        hide();
        close(force?: boolean);
        reload();
        reloadIgnoringCache();
        maximize();
        unmaximize();
        minimize();
        restore();
        enterFullscreen();
        leaveFullscreen();
        toggleFullscreen();
        enterKioskMode();
        leaveKioskMode();
        toggleKioskMode();
        showDevTools(id?: string, headless?: boolean);
        showDevTools(id: HTMLIFrameElement, headless?: boolean);
        closeDevTools();
        isDevToolsOpen(): boolean;
        setMaximumSize(width: number, height: number);
        setMinimumSize(width: number, height: number);
        setResizable(resizable: boolean);
        setAlwaysOnTop(top: boolean);
        setPosition(position: string);
        setShowInTaskbar(show: boolean);
        requestAttention(attention: boolean);
        requestAttention(attention: number);
        capturePage(callback, imageformat?: string);
        capturePage(callback, config_object: { format: string; datatype: string });
        setProgressBar(progress: number);
        setBadgeLabel(label: string);
        eval(frame: HTMLIFrameElement, script: string);
    }
    export interface App {
        argv: any;
        fullArgv: any;
        dataPath: string;
        manifest: any;
        clearCache();
        closeAllWindows();
        crashBrowser();
        crashRenderer();
        getProxyForURL(url: string);
        quit();
        setCrashDumpDir(dir: string);
        addOriginAccessWhitelistEntry(
            sourceOrigin: string
            , destinationProtocol: string
            , destinationHost: string
            , allowDestinationSubdomains: boolean
            );
        removeOriginAccessWhitelistEntry(
            sourceOrigin: string
            , destinationProtocol: string
            , destinationHost: string
            , allowDestinationSubdomains: boolean
            );
        registerGlobalHotKey(shortcut: Shortcut);
        unregisterGlobalHotKey(shortcut: Shortcut);
    }


    export class Clipboard {
        static get(): Clipboard;
        get(type?: string);
        set(data: string, type?: string);
        clear();
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
        remove();
    }

    interface Shell {
        openExternal(uri: string);
        openItem(file_path: string);
        showItemInFolder(file_path: string);
    }

    export var App: App;
    export var Shell: Shell;

}
