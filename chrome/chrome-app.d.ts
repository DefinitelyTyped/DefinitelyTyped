﻿// Type definitions for Chrome packaged application development
// Project: http://developer.chrome.com/apps/
// Definitions by: Adam Lay <https://github.com/AdamLay>, MIZUNE Pine <https://github.com/pine613>
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


////////////////////
// Sockets
////////////////////
declare module chrome.sockets.tcp {
    interface CreateInfo {
        socketId: number;
    }

    interface SendInfo {
        resultCode: number;
        bytesSent?: number;
    }

    interface Event<T> {
        addListener(callback: (info: T) => void): void;
    }

    interface ReceiveEventArgs {
        socketId: number;
        data: ArrayBuffer;
    }

    interface ReceiveErrorEventArgs {
        socketId: number;
        resultCode: number;
    }

    interface SocketProperties {
        persistent?: boolean;
        name?: string;
        bufferSize?: number;
    }

    interface SocketInfo {
        socketId: number;
        persistent: boolean;
        name?: string;
        bufferSize?: number;
        paused: boolean;
        connected: boolean;
        localAddress?: string;
        localPort?: number;
        peerAddress?: string;
        peerPort?: number;
    }

    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;

    export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;
    export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;

    export function setKeepAlive(socketId: number,
        enable: boolean, callback: (result: number) => void): void;
    export function setKeepAlive(socketId: number,
        enable: boolean, delay: number, callback: (result: number) => void): void;

    export function setNoDelay(socketId: number, noDelay: boolean, callback: (result: number) => void): void;
    export function connect(socketId: number,
        peerAddress: string, peerPort: number, callback: (result: number) => void): void;
    export function disconnect(socketId: number, callback?: () => void): void;
    export function send(socketId: number, data: ArrayBuffer, callback: (sendInfo: SendInfo) => void): void;
    export function close(socketId: number, callback?: () => void): void;
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;
    export function getSockets(socketId: number, callback: (socketInfos: SocketInfo[]) => void): void;

    var onReceive: Event<ReceiveEventArgs>;
    var onReceiveError: Event<ReceiveErrorEventArgs>;
}

declare module chrome.sockets.udp {
    interface CreateInfo {
        socketId: number;
    }

    interface SendInfo {
        resultCode: number;
        bytesSent?: number;
    }

    interface Event<T> {
        addListener(callback: (info: T) => void): void;
    }

    interface ReceiveEventArgs {
        socketId: number;
        data: ArrayBuffer;
        remoteAddress: string;
        remotePort: number;
    }

    interface ReceiveErrorEventArgs {
        socketId: number;
        resultCode: number;
    }

    interface SocketProperties {
        persistent?: boolean;
        name?: string;
        bufferSize?: number;
    }

    interface SocketInfo {
        socketId: number;
        persistent: boolean;
        name?: string;
        bufferSize?: number;
        paused: boolean;
        localAddress?: string;
        localPort?: number;
    }

    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function create(properties: SocketProperties,
        callback: (createInfo: CreateInfo) => void): void;

    export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;
    export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;
    export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;
    export function send(socketId: number, data: ArrayBuffer, address: string, port: number, callback: (sendInfo: SendInfo) => void): void;
    export function close(socketId: number, callback?: () => void): void;
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;
    export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;
    export function joinGroup(socketId: number, address: string, callback: (result: number) => void): void;
    export function leaveGroup(socketId: number, address: string, callback: (result: number) => void): void;
    export function setMulticastTimeToLive(socketId: number, ttl: number, callback: (result: number) => void): void;
    export function setMulticastLoopbackMode(socketId: number, enabled: boolean, callback: (result: number) => void): void;
    export function getJoinedGroups(socketId: number, callback: (groups: string[]) => void): void;

    var onReceive: Event<ReceiveEventArgs>;
    var onReceiveError: Event<ReceiveErrorEventArgs>;
}

declare module chrome.sockets.tcpServer {
    interface CreateInfo {
        socketId: number;
    }

    interface Event<T> {
        addListener(callback: (info: T) => void): void;
    }

    interface AcceptEventArgs {
        socketId: number;
        clientSocketId: number;
    }

    interface AcceptErrorEventArgs {
        socketId: number;
        resultCode: number;
    }

    interface SocketProperties {
        persistent?: boolean;
        name?: string;
    }

    interface SocketInfo {
        socketId: number;
        persistent: boolean;
        name?: string;
        paused: boolean;
        localAddress?: string;
        localPort?: number;
    }

    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;

    export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;
    export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;

    export function listen(socketId: number, address: string,
        port: number, backlog: number, callback: (result: number) => void): void;
    export function listen(socketId: number, address: string,
        port: number, callback: (result: number) => void): void;

    export function disconnect(socketId: number, callback?: () => void): void;
    export function close(socketId: number, callback?: () => void): void;
    export function getInfo(socketId: number, callback: (socketInfos: SocketInfo[]) => void): void;

    var onAccept: Event<AcceptEventArgs>;
    var onAcceptError: Event<AcceptErrorEventArgs>;
}