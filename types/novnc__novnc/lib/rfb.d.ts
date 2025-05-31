import EventTargetMixin from "./util/eventtarget";

export interface RFBCredentials {
    username?: string | undefined;
    password?: string | undefined;
    target?: string | undefined;
    ardPublicKey?: ArrayBuffer | ArrayBufferView | null | undefined; // For ARD auth
    ardCredentials?: ArrayBuffer | ArrayBufferView | null | undefined; // For ARD auth
}

export interface RFBOptions {
    credentials?: RFBCredentials;
    shared?: boolean;
    repeaterID?: string;
    wsProtocols?: string[];
    target?: Element;
    url?: string | WebSocket | RTCDataChannel;
}

export interface RFBConstructor {
    new (target: Element, url: string | WebSocket | RTCDataChannel, options?: RFBOptions): RFB;
}

export enum PowerButtonAction {
    Signal = "signal",
    Press = "press",
    Release = "release",
}

export interface EncodedRect {
    x: number;
    y: number;
    width: number;
    height: number;
    encoding: number;
    data: Uint8Array;
}

export type BellCallback = (this: RFB, ev: BellEvent) => any;

export type BellEvent = CustomEvent<Record<string, never>>;
export type ConnectEvent = CustomEvent<Record<string, never>>;
export type CredentialsRequiredEvent = CustomEvent<{ types: Array<keyof RFBCredentials> }>;
export type DesktopNameEvent = CustomEvent<{ name: string }>;
export type DisconnectEvent = CustomEvent<{ clean: boolean; reason?: string }>;
export type SecurityFailureEvent = CustomEvent<{ status: number; reason?: string }>;
export type ClipboardEvent = CustomEvent<{ text: string }>;

export interface RFBCapabilities {
    power?: boolean;
    [key: string]: any;
}

export type CapabilitiesEvent = CustomEvent<{ capabilities: RFBCapabilities }>;
export type ClippingViewportEvent = CustomEvent<boolean>;
export type ServerVerificationEvent = CustomEvent<{ reason: string }>;

export default class RFB extends EventTargetMixin {
    constructor(target: Element, url: string | WebSocket | RTCDataChannel, options?: RFBOptions);

    // Properties
    background: string;
    readonly capabilities: RFBCapabilities;
    readonly clippingViewport: boolean;
    clipViewport: boolean;
    compressionLevel: number; // 0-9
    dragViewport: boolean;
    focusOnClick: boolean;
    qualityLevel: number; // 0-9
    resizeSession: boolean;
    scaleViewport: boolean;
    showDotCursor: boolean;
    viewOnly: boolean;
    scale: number;
    onbell: BellCallback | null;

    // Methods
    disconnect(): void;
    approveServer(): void;
    sendCredentials(credentials: RFBCredentials): void;
    sendCtrlAltDel(): void;
    machineShutdown(): void;
    machineReboot(): void;
    machineReset(): void;
    sendKey(keysym: number, code: string | null, down?: boolean): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    clipboardPasteFrom(text: string): void;
    getImageData(): ImageData;
    toDataURL(type?: string, encoderOptions?: number): string;
    toBlob(callback: (blob: Blob | null) => void, type?: string, quality?: number): void;

    // Events
    addEventListener(type: "bell", listener: (event: BellEvent) => void): void;
    addEventListener(type: "capabilities", listener: (event: CapabilitiesEvent) => void): void;
    addEventListener(type: "clipboard", listener: (event: ClipboardEvent) => void): void;
    addEventListener(type: "clippingviewport", listener: (event: ClippingViewportEvent) => void): void;
    addEventListener(type: "connect", listener: (event: ConnectEvent) => void): void;
    addEventListener(type: "credentialsrequired", listener: (event: CredentialsRequiredEvent) => void): void;
    addEventListener(type: "desktopname", listener: (event: DesktopNameEvent) => void): void;
    addEventListener(type: "disconnect", listener: (event: DisconnectEvent) => void): void;
    addEventListener(type: "securityfailure", listener: (event: SecurityFailureEvent) => void): void;
    addEventListener(type: "serververification", listener: (event: ServerVerificationEvent) => void): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;

    removeEventListener(type: "bell", listener: (event: BellEvent) => void): void;
    removeEventListener(type: "capabilities", listener: (event: CapabilitiesEvent) => void): void;
    removeEventListener(type: "clipboard", listener: (event: ClipboardEvent) => void): void;
    removeEventListener(type: "clippingviewport", listener: (event: ClippingViewportEvent) => void): void;
    removeEventListener(type: "connect", listener: (event: ConnectEvent) => void): void;
    removeEventListener(type: "credentialsrequired", listener: (event: CredentialsRequiredEvent) => void): void;
    removeEventListener(type: "desktopname", listener: (event: DesktopNameEvent) => void): void;
    removeEventListener(type: "disconnect", listener: (event: DisconnectEvent) => void): void;
    removeEventListener(type: "securityfailure", listener: (event: SecurityFailureEvent) => void): void;
    removeEventListener(type: "serververification", listener: (event: ServerVerificationEvent) => void): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
}

// Remove the NoVncClient interface from here as it's in index.d.ts
// interface NoVncClient extends RFB {}
