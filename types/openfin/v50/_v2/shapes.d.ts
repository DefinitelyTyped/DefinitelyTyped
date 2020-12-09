import { Identity } from "./identity";

export declare type AnchorType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface TransitionOptions {
    interrupt: boolean;
    tween?: string;
}
export interface Transition {
    opacity?: Opacity;
    position?: Position;
    size?: Size;
}
export interface Size extends TransitionBase {
    width: number;
    height: number;
}
export interface Opacity extends TransitionBase {
    opacity: number;
}
export interface TransitionBase {
    duration: number;
    relative?: boolean;
}
export interface Position extends TransitionBase {
    left: number;
    top: number;
}
export interface Bounds {
    height: number;
    width: number;
    top: number;
    left: number;
    right?: number;
    bottom?: number;
}
export declare type ViewBounds = Pick<Bounds, Exclude<keyof Bounds, 'right' | 'bottom'>>;
export interface RGB {
    red: number;
    blue: number;
    green: number;
}
export interface ContextMenuSettings {
    enable: boolean;
    devtools?: boolean;
    reload?: boolean;
}
export interface Hotkey {
    keys: string;
    preventDefault?: boolean;
}
export interface ShortcutOverride extends Hotkey {
    command: string;
}
export interface ProviderIdentity extends Identity {
    channelId?: string;
    channelName?: string;
    isExternal?: boolean;
    runtimeUuid?: string;
}

export interface ClientIdentity extends Identity {
    endpointId?: string;
}

export interface PreloadScript {
    mandatory?: boolean;
    state?: 'load-started' | 'load-failed' | 'load-succeeded' | 'failed' | 'succeeded';
    url: string;
}
