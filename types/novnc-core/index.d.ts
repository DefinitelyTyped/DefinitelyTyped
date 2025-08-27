import Display from "./lib/display";
import { Keyboard, Mouse } from "./lib/input/devices";

export default class RFB {
    constructor(defaults?: NvRFBDefaults);
    get_target(): HTMLCanvasElement;
    set_target(target: HTMLCanvasElement): void;
    get_focusContainer(): HTMLElement;
    set_focusContainer(container: HTMLElement): void;
    get_encrypt(): boolean;
    set_encrypt(encrypt: boolean): void;
    get_local_cursor(): boolean;
    set_local_cursor(localCursor: boolean): void;
    get_shared(): boolean;
    set_shared(shared: boolean): void;
    get_view_only(): boolean;
    set_view_only(viewOnly: boolean): void;
    get_xvp_password_sep(): string;
    set_xvp_password_sep(xvpPasswordSep: string): void;
    get_disconnectTimeout(): number;
    set_disconnectTimeout(disconnectTimeout: number): void;
    get_wsProtocols(): string[];
    set_wsProtocols(wsProtocols: string[]): void;
    get_repeaterID(): string;
    set_repeaterID(repeaterID: string): void;
    get_viewportDrag(): boolean;
    set_viewportDrag(viewportDrag: boolean): void;
    get_onUpdateState(): (rfb: this, state: NvConnectionState, oldstate: NvConnectionState) => void;
    set_onUpdateState(handler: (rfb: this, state: NvConnectionState, oldstate: NvConnectionState) => void): void;
    get_onNotification(): (
        rfb: this,
        msg: string,
        level: "normal" | "warn" | "error",
        options?: { [key: string]: any },
    ) => void;
    set_onNotification(
        handler: (rfb: this, msg: string, level: "normal" | "warn" | "error", options?: { [key: string]: any }) => void,
    ): void;
    get_onDisconnected(): (rfb: this, reason?: string) => void;
    set_onDisconnected(handler: (rfb: this, reason?: string) => void): void;
    get_onPasswordRequired(): (rfb: this, msg?: string) => void;
    set_onPasswordRequired(handler: (rfb: this, msg?: string) => void): void;
    get_onClipboard(): (rfb: this, text: string) => void;
    set_onClipboard(handler: (rfb: this, text: string) => void): void;
    get_onBell(): (rfb: this) => void;
    set_onBell(handler: (rfb: this) => void): void;
    get_onFBUReceive(): (rfb: this, fbu: NvFBU) => void;
    set_onFBUReceive(handler: (rfb: this, fbu: NvFBU) => void): void;
    get_onFBUComplete(): (rfb: this, fbu: NvFBU) => void;
    set_onFBUComplete(handler: (rfb: this, fbu: NvFBU) => void): void;
    get_onFBResize(): (rfb: this, width: number, height: number) => void;
    set_onFBResize(handler: (rfb: this, width: number, height: number) => void): void;
    get_onDesktopName(): (rfb: this, name: string) => void;
    set_onDesktopName(handler: (rfb: this, name: string) => void): void;
    get_onXvpInit(): (version: number) => void;
    set_onXvpInit(handler: (rfb: this, name: string) => void): void;
    get_display(): Display;
    get_keyboard(): Keyboard;
    get_mouse(): Mouse;
    connect(host: string, port: number, password?: string, path?: string): boolean;
    disconnect(): void;
    sendPassword(passwd: string): void;
    sendCtrlAltDel(): boolean;
    xvpOp(version: number, op: NvXvpOperation): boolean;
    xvpShutdown(): boolean;
    xvpReboot(): boolean;
    xvpReset(): boolean;
    sendKey(keysym: number, code: string, down?: boolean): boolean;
    clipboardPasteFrom(text: string): void;
    requestDesktopSize(width: number, height: number): boolean;
}

export interface NvRFBDefaults {
    target?: HTMLCanvasElement | undefined;
    focusContainer?: HTMLElement | undefined;
    encrypt?: boolean | undefined;
    local_cursor?: boolean | undefined;
    shared?: boolean | undefined;
    view_only?: boolean | undefined;
    xvp_password_sep?: string | undefined;
    disconnectTimeout?: number | undefined;
    wsProtocols?: string[] | undefined;
    repeaterID?: string | undefined;
    viewportDrag?: boolean | undefined;
    onUpdateState?(rfb: RFB, state: NvConnectionState, oldstate: NvConnectionState): void;
    onNotification?(rfb: RFB, msg: string, level: "normal" | "warn" | "error", options?: { [key: string]: any }): void;
    onDisconnected?(rfb: RFB, reason?: string): void;
    onPasswordRequired?(rfb: RFB, msg?: string): void;
    onClipboard?(rfb: RFB, text: string): void;
    onBell?(rfb: RFB): void;
    onFBUReceive?(rfb: RFB, fbu: NvFBU): void;
    onFBUComplete?(rfb: RFB, fbu: NvFBU): void;
    onFBResize?(rfb: RFB, width: number, height: number): void;
    onDesktopName?(rfb: RFB, name: string): void;
    onXvpInit?(version: number): void;
}

export interface NvFBU {
    x: number;
    y: number;
    width: number;
    height: number;
    encoding: number;
    encodingName: string;
}

export type NvConnectionState = "connecting" | "connected" | "disconnecting" | "disconnected";

export const enum NvXvpOperation {
    shutdown = 2,
    reboot,
    reset,
}
