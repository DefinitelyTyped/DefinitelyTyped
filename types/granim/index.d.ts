// Type definitions for granim 2.0
// Project: https://github.com/sarcadass/granim.js
// Definitions by: Raiper34 <https://github.com/Raiper34>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare class Granim {
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
  customDirection?: {x0: string; y0: string; x1: string; y1: string};
  isPausedWhenNotInView?: boolean;
  scrollDebounceThreshold?: number;
  stateTransitionSpeed?: number;
  defaultStateName?: string;
  states: {[stateName: string]: State};
  image?: Image;
  onStart?: () => void;
  onGradientChange?: (colorDetails: OnGradientChangeObject) => void;
  onEnd?: () => void;
}

export interface State {
  gradients: string[][] | {color: string, pos: number}[][];
  transitionSpeed?: number;
  loop?: boolean;
}

type stretchMode = 'none' | 'stretch' | 'stretch-if-smaller' | 'stretch-if-bigger';

export interface Image {
  source: string;
  position?: ['left' | 'center' | 'right', 'top' | 'center' | 'bottom'];
  stretchMode?: [stretchMode, stretchMode];
  blendingMode?: string;
}
