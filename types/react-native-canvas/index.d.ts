// Type definitions for react-native-canvas 0.1
// Project: https://github.com/iddan/react-native-canvas#readme
// Definitions by: hmajid2301 <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface IImageData {
    data: number[];
    height: number;
    width: number;
}

//
export interface IImage {
}

export interface CanvasRenderingContext2D {
    fillStyle: string;
    font: string;
    globalAlpha: number;
    globalCompositionOperation: string;
    linecap: string;
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
    arc: (
        x: number,
        y: number,
        r: number,
        sAngle: number,
        eAngle: number,
        counterClockwise?: number
    ) => void;
    arcTo: (x1: number, y1: number, x2: number, y2: number, r: number) => void;
    beginPath: () => void;
    bezierCurveTo: (
        cp1x: number,
        cp1y: number,
        cp2x: number,
        cp2y: number,
        x: number,
        y: number
    ) => void;
    clearRect: (x: number, y: number, width: number, height: number) => void;
    clip: () => void;
    closePath: () => void;
    createImageData: ( //
        width: number,
        height: number,
        imageData: IImageData
    ) => void;
    createLinearGradient: (
        x0: number,
        yo: number,
        x1: number,
        y1: number
    ) => void;
    createPattern: () => void;
    createRadialGradient: (x0: number, y0: number, r0: number, x1: number, y1: number, r1: number);
    drawFocusIfNeeded: (html: any) => void; //
    drawImage: (image: IImage, sx?: number, sy?: number, sWidth?: number, sHeight?: number, dx: number, dy: number, dWidth?: number, dHeight?: number) => void; //
    drawWidgetAsOnScreen: (window: any) => void; //
    drawWindow: (window: any, x: number, y: number, w: number, h: number, bgColor: string, flags?: any) => void; //
    fill: (fillRule?: any, Path2D: Path2D) => void; //
    fillRect: (x: number, y: number, width: number, height: number) => void;
    fillText: (text: string, x:number, y: number, maxWidth?: number) => void;
    getImageData: (sx: number, sy: number, sw: number, sh: number) => IImageData;
    getLineDash: () => number[];
    isPointInPath: (x: number, y: number, fillRule: any, path: Path2D) => boolean;
    isPointInStroke: (x: number, y: number, path: Path2D) => boolean;
    lineTo: (x: number, y: number) => void;
    measureText: (text: string) => any; //
    moveTo: (x: number, y: number) => void;
    putImageData: (imageData: IImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number) => void;
    quadraticCurveTo: (cpx: number, cpy: number, x: number, y: number) => void;
    rect: (x: number, y: number, width: number, height: number) => void;
    restore: () => void;
    rotate: (angle: number) => void;
    save: () => void;
    scale: (x: number, y: number) => void;
    setLineDash: (segments: number[]) => void;
    setTransform: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    stroke: (path: Path2D) => void;
    strokeRect: (x: number, y:number, width: number, height: number) => void;
    strokeText: (text: string, x: number, y: number, maxWidth?: number) => void;
    transform: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    translate: (x: number, y: number) => void;
}

export interface ICanvas {
    getContext: (context: string) => CanvasRenderingContext2D;
}

export interface CanvasProps {
    baseUrl?: string;
    originWhitelist?: string[];
    ref: (canvas: ICanvas) => void;
    style?: StyleProp<ViewStyle>;
}

export default class Canvas extends React.Component<CanvasProps> {}
export class Image extends React.Component {}
export class ImageData extends React.Component {}
export class Path2D extends React.Component {}
