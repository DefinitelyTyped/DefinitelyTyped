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
    createImageData: (
        width: number,
        height: number,
        imageData: IImageData
    ) => void;
    createLinearGradient;
    createPattern;
    createRadialGradient;
    drawFocusIfNeeded;
    drawImage;
    drawWidgetAsOnScreen;
    drawWindow;
    fill;
    fillRect: (x: number, y: number, width: number, height: number) => void;
    fillText;
    getImageData;
    getLineDash;
    isPointInPath;
    isPointInStroke;
    lineTo;
    measureText;
    moveTo;
    putImageData;
    quadraticCurveTo;
    rect;
    restore;
    rotate;
    save;
    scale;
    setLineDash;
    setTransform;
    stroke;
    strokeRect;
    strokeText;
    transform;
    translate;
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
