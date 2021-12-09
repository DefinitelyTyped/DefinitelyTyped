import { ColorLike } from '../colorlike';
import LRUCache from '../structs/LRUCache';
import Fill from '../style/Fill';
import Stroke from '../style/Stroke';
import { Transform } from '../transform';

export type DeclutterGroup = any[];
export interface FillState {
    fillStyle: ColorLike;
}
export interface FillStrokeState {
    currentFillStyle?: ColorLike | undefined;
    currentStrokeStyle?: ColorLike | undefined;
    currentLineCap?: string | undefined;
    currentLineDash: number[];
    currentLineDashOffset?: number | undefined;
    currentLineJoin?: string | undefined;
    currentLineWidth?: number | undefined;
    currentMiterLimit?: number | undefined;
    lastStroke?: number | undefined;
    fillStyle?: ColorLike | undefined;
    strokeStyle?: ColorLike | undefined;
    lineCap?: string | undefined;
    lineDash: number[];
    lineDashOffset?: number | undefined;
    lineJoin?: string | undefined;
    lineWidth?: number | undefined;
    miterLimit?: number | undefined;
}
export interface StrokeState {
    lineCap: string;
    lineDash: number[];
    lineDashOffset: number;
    lineJoin: string;
    lineWidth: number;
    miterLimit: number;
    strokeStyle: ColorLike;
}
export interface TextState {
    font: string;
    textAlign?: string | undefined;
    textBaseline: string;
    placement?: string | undefined;
    maxAngle?: number | undefined;
    overflow?: boolean | undefined;
    backgroundFill?: Fill | undefined;
    backgroundStroke?: Stroke | undefined;
    scale?: number | undefined;
    padding?: number[] | undefined;
}
export const labelCache: LRUCache<HTMLCanvasElement>;
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
    scale: number
): void;
export function measureTextWidth(font: string, text: string): number;
export function rotateAtOffset(context: CanvasRenderingContext2D, rotation: number, offsetX: number, offsetY: number): void;
