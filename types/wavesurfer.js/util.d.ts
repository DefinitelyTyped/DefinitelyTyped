import * as WaveSurfer from './wavesurfer';

declare module './wavesurfer' {
    interface WaveSurferUtil {
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
}
