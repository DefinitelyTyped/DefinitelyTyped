// Type definitions for granim 2.0
// Project: https://github.com/sarcadass/granim.js
// Definitions by: Raiper34 <https://github.com/Raiper34>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Granim {
    constructor(options: Options);
    play(): void;
    pause(): void;
    clear(): void;
    changeState(stateName: string): void;
    changeDirection(directionName: string): void;
    changeBlendingMode(blendingModeName: string): void;
    destroy(): void;
}
export interface OnGradientChangeObject {
    activeState: string;
    colorsFrom: [string, string];
    colorsTo: [string, string];
    isLooping: boolean;
}
export interface Options {
    element: string | HTMLCanvasElement;
    name?: string;
    elToSetClassOn?: string;
    direction?: 'diagonal' | 'left-right' | 'top-bottom' | 'radial' | 'custom';
    customDirection?: { x0: string; y0: string; x1: string; y1: string };
    isPausedWhenNotInView?: boolean;
    scrollDebounceThreshold?: number;
    stateTransitionSpeed?: number;
    defaultStateName?: string;
    states: { [stateName: string]: State };
    image?: Image;
    onStart?: () => void;
    onGradientChange?: (colorDetails: OnGradientChangeObject) => void;
    onEnd?: () => void;
}
export interface Gradient {
    color: string;
    pos: number;
}
export interface State {
    gradients: string[][] | Gradient[][];
    transitionSpeed?: number;
    loop?: boolean;
}
export type stretchMode = 'none' | 'stretch' | 'stretch-if-smaller' | 'stretch-if-bigger';
export interface Image {
    source: string;
    position?: ['left' | 'center' | 'right', 'top' | 'center' | 'bottom'];
    stretchMode?: [stretchMode, stretchMode];
    blendingMode?: string;
}
