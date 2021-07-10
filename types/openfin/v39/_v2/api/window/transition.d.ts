export interface TransitionBase {
    duration: number;
    relative?: boolean | undefined;
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
    tween?: string | undefined;
}
export interface Transition {
    opacity?: Opacity | undefined;
    position?: Position | undefined;
    size?: Size | undefined;
}
