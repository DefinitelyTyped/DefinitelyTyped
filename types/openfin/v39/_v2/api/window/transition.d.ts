export interface TransitionBase {
    duration: number;
    relative?: boolean;
}
export interface Opacity extends TransitionBase {
    opacity: number;
}
export interface Position extends TransitionBase {
    left: number;
    top: number;
}
export interface Size extends TransitionBase {
    width: number;
    height: number;
}
export interface TransitionOptions {
    interrupt: boolean;
    tween?: string;
}
export interface Transition {
    opacity?: Opacity;
    position?: Position;
    size?: Size;
}
