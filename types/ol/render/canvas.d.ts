import { ColorLike } from '../colorlike';
import Fill from '../style/Fill';
import Stroke from '../style/Stroke';
import { Transform } from '../transform';
import LabelCache from './canvas/LabelCache';

export type DeclutterGroup = any[];
export type DeclutterGroups = DeclutterGroup[];
export interface FillState {
    fillStyle: ColorLike;
}
export interface FillStrokeState {
    currentFillStyle?: ColorLike;
    currentStrokeStyle?: ColorLike;
    currentLineCap?: CanvasLineCap;
    currentLineDash: number[];
    currentLineDashOffset?: number;
    currentLineJoin?: CanvasLineJoin;
    currentLineWidth?: number;
    currentMiterLimit?: number;
    lastStroke?: number;
    fillStyle?: ColorLike;
    strokeStyle?: ColorLike;
    lineCap?: CanvasLineCap;
    lineDash: number[];
    lineDashOffset?: number;
    lineJoin?: CanvasLineJoin;
    lineWidth?: number;
    miterLimit?: number;
}
export interface StrokeState {
    lineCap: CanvasLineCap;
    lineDash: number[];
    lineDashOffset: number;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
    miterLimit: number;
    strokeStyle: ColorLike;
}
export interface TextState {
    font: string;
    textAlign?: string;
    textBaseline: string;
    placement?: string;
    maxAngle?: number;
    overflow?: boolean;
    backgroundFill?: Fill;
    backgroundStroke?: Stroke;
    scale?: number;
    padding?: number[];
}
export const labelCache: LabelCache;
export function drawImage(
    context: CanvasRenderingContext2D,
    transform: Transform | null,
    opacity: number,
    image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
    originX: number,
    originY: number,
    w: number,
    h: number,
    x: number,
    y: number,
    scale: number,
): void;
export function measureAndCacheTextWidth(font: string, text: string, cache: { [key: string]: number }): number;
export function measureTextWidth(font: string, text: string): number;
export function measureTextWidths(font: string, lines: string[], widths: number[]): number;
export function rotateAtOffset(
    context: CanvasRenderingContext2D,
    rotation: number,
    offsetX: number,
    offsetY: number,
): void;
