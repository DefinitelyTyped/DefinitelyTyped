// Type definitions for react-native-canvas 0.1
// Project: https://github.com/iddan/react-native-canvas#readme
// Definitions by: hmajid2301 <https://github.com/hmajid2301>
//                 Kelvin Chu <https://github.com/ragebill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface CanvasProps {
    baseUrl?: string;
    originWhitelist?: string[];
    ref: ((canvas: Canvas) => any) | React.RefObject<Canvas>;
    style?: StyleProp<ViewStyle>;
}

export interface DOMMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
}

export interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}

export interface CanvasPattern {
    setTransform(transform?: DOMMatrix2DInit): void;
}

export interface CanvasRenderingContext2D {
    fillStyle: string | CanvasGradient | CanvasPattern;
    font: string;
    globalAlpha: number;
    globalCompositionOperation: string;
    lineCap: string;
    lineDashOffset: number;
    lineJoin: string;
    lineWidth: number;
    miterLimit: number;
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    strokeStyle: string;
    textAlign: string;
    textBaseline: string;
    arc: (x: number, y: number, r: number, sAngle: number, eAngle: number, counterClockwise?: boolean) => void;
    arcTo: (x1: number, y1: number, x2: number, y2: number, r: number) => void;
    beginPath: () => void;
    bezierCurveTo: (cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) => void;
    clearRect: (x: number, y: number, width: number, height: number) => void;
    clip: () => void;
    closePath: () => void;
    createImageData: (
        //
        width: number,
        height: number,
        imageData: ImageData,
    ) => void;
    createLinearGradient: (x0: number, yo: number, x1: number, y1: number) => CanvasGradient;
    createPattern: () => void;
    createRadialGradient: (x0: number, y0: number, r0: number, x1: number, y1: number, r1: number) => void;
    drawFocusIfNeeded: (html: HTMLElement) => void;
    drawImage: (
        image: Image,
        dx: number,
        dy: number,
        sx?: number,
        sy?: number,
        sWidth?: number,
        sHeight?: number,
        dWidth?: number,
        dHeight?: number,
    ) => void;
    drawWidgetAsOnScreen: (window: any) => void;
    drawWindow: (window: any, x: number, y: number, w: number, h: number, bgColor: string, flags?: any) => void; //
    fill: (Path2D?: Path2D, fillRule?: any) => void;
    fillRect: (x: number, y: number, width: number, height: number) => void;
    fillText: (text: string, x: number, y: number, maxWidth?: number) => void;
    ellipse: (
        x: number,
        y: number,
        radiusX: number,
        radiusY: number,
        rotation: number,
        startAngle: number,
        endAngle: number,
        anticlockwise?: boolean,
    ) => void;
    getImageData: (sx: number, sy: number, sw: number, sh: number) => Promise<ImageData>;
    getLineDash: () => number[];
    isPointInPath: (x: number, y: number, fillRule: any, path: Path2D) => boolean;
    isPointInStroke: (x: number, y: number, path: Path2D) => boolean;
    lineTo: (x: number, y: number) => void;
    measureText: (text: string) => any;
    moveTo: (x: number, y: number) => void;
    putImageData: (
        imageData: ImageData,
        dx: number,
        dy: number,
        dirtyX?: number,
        dirtyY?: number,
        dirtyWidth?: number,
        dirtyHeight?: number,
    ) => void;
    quadraticCurveTo: (cpx: number, cpy: number, x: number, y: number) => void;
    rect: (x: number, y: number, width: number, height: number) => void;
    restore: () => void;
    rotate: (angle: number) => void;
    save: () => void;
    scale: (x: number, y: number) => void;
    setLineDash: (segments: number[]) => void;
    setTransform: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    stroke: (path?: Path2D) => void;
    strokeRect: (x: number, y: number, width: number, height: number) => void;
    strokeText: (text: string, x: number, y: number, maxWidth?: number) => void;
    transform: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    translate: (x: number, y: number) => void;
}

export default class Canvas extends React.Component<CanvasProps> {
    width: number;
    height: number;
    toDataURL: (type?: string, encoderOptions?: number) => Promise<string>;
    getContext: (context: string) => CanvasRenderingContext2D;
}

export class Image {
    constructor(canvas: Canvas, height?: number, width?: number);
    crossOrigin: string | undefined;
    height: number;
    width: number;
    src: string;
    addEventListener: (event: string, func: (...args: any) => any) => void;
}

export class ImageData {
    constructor(canvas: Canvas, data: number[], height: number, width: number);
    readonly data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
}

export class Path2D {
    constructor(canvas: Canvas, ...args: any);
    addPath: (
        path: Path2D,
        transform?: {
            a: number;
            b: number;
            c: number;
            d: number;
            e: number;
            f: number;
        },
    ) => void;

    closePath: CanvasRenderingContext2D['closePath'];
    moveTo: CanvasRenderingContext2D['moveTo'];
    lineTo: CanvasRenderingContext2D['lineTo'];
    bezierCurveTo: CanvasRenderingContext2D['bezierCurveTo'];
    quadraticCurveTo: CanvasRenderingContext2D['quadraticCurveTo'];
    arc: CanvasRenderingContext2D['arc'];
    arcTo: CanvasRenderingContext2D['arcTo'];
    ellipse: CanvasRenderingContext2D['ellipse'];
    rect: CanvasRenderingContext2D['rect'];
}
