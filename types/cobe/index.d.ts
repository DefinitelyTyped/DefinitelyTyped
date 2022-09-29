// Type definitions for cobe 0.4
// Project: https://github.com/shuding/cobe
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Phenomenon from 'phenomenon';

declare namespace cobe {
    interface Marker {
        location: [number, number];
        size: number;
    }

    interface Options {
        baseColor?: number[];
        dark?: number;
        devicePixelRatio?: number;
        diffuse?: number;
        glowColor?: number[];
        height: number;
        mapBrightness?: number;
        mapSamples?: number;
        markerColor?: number[];
        markers: Marker[];
        phi?: number;
        theta?: number;
        width: number;

        onRender?(state: Record<string, unknown>): void;
    }
}

declare function cobe(canvas: HTMLCanvasElement, opts: cobe.Options): Phenomenon;

export = cobe;
