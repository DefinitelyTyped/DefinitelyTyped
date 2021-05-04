import Observer = require('../src/util/observer');
import { XHROptions } from './xhr';

export interface WaveSurferUtil {
    absMax(values: ReadonlyArray<number>): number;
    clamp(val: number, min: number, max: number): number;
    fetchFile(options: XHROptions): Observer;
    frame<T>(fn: (arg: T) => void): (arg: T) => void;
    getId(prefix: string): string;
    max(values: ReadonlyArray<number>): number;
    min(values: ReadonlyArray<number>): number;
    Observer: Observer;
    preventClick(): void;
    requestAnimationFrame(): (fn: (t: number) => void) => number;
    style<T extends HTMLElement>(el: T, styles: Styles): T;
}

export interface Styles {
    [styleName: string]: string;
}

export interface DrawingContextAttributes {
    desynchronized: boolean;
}
