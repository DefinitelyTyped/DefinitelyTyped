export declare type AnchorType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface TransitionOptions {
    interrupt: boolean;
    tween?: string | undefined;
}
export interface Transition {
    opacity?: Opacity | undefined;
    position?: Position | undefined;
    size?: Size | undefined;
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
    relative?: boolean | undefined;
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
    right?: number | undefined;
    bottom?: number | undefined;
}
export declare type ViewBounds = Pick<Bounds, Exclude<keyof Bounds, 'right' | 'bottom'>>;
export interface RGB {
    red: number;
    blue: number;
    green: number;
}
export interface ContextMenuSettings {
    enable: boolean;
    devtools?: boolean | undefined;
    reload?: boolean | undefined;
}
export interface Hotkey {
    keys: string;
    preventDefault?: boolean | undefined;
}
export interface ShortcutOverride extends Hotkey {
    command: string;
}
