// Type definitions for iScroll 5.1.3 (iscroll-zoom)
// Project: http://iscrolljs.com/
// Definitions by: Igor Yegorov <https://github.com/iyegoroff/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='iscroll.d.ts' />

interface IScrollInstance {
    zoom(scale: number, x?: number, y?: number, time?: number): void;
}

interface IScrollOptions {
    zoom?: boolean;
    zoomMax?: number;
    zoomMin?: number;
    startZoom?: number;
    wheelAction?: string;
}
