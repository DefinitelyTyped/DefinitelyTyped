import { ColorLike } from '../colorlike';
import BaseObject from '../Object';
import { Size } from '../size';
import Fill from '../style/Fill';
import Stroke from '../style/Stroke';
import { Transform } from '../transform';
import { ReplayImageOrLabelArgs } from './canvas/Executor';

export type DeclutterImageWithText = { [key: number]: ReplayImageOrLabelArgs };
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
export interface Label {
    width: number;
    height: number;
    contextInstructions: (string | number)[];
}
export interface SerializableInstructions {
    instructions: any[];
    hitDetectionInstructions: any[];
    coordinates: number[];
    textStates?: { [key: string]: TextState };
    fillStates?: { [key: string]: FillState };
    strokeStates?: { [key: string]: StrokeState };
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
    scale?: Size;
    padding?: number[];
}
export const checkedFonts: BaseObject;
export const defaultFillStyle: ColorLike;
export const defaultFont: string;
export const defaultLineCap: CanvasLineCap;
export const defaultLineDash: number[];
export const defaultLineDashOffset: number;
export const defaultLineJoin: CanvasLineJoin;
export const defaultLineWidth: number;
export const defaultMiterLimit: number;
export const defaultPadding: number[];
export const defaultStrokeStyle: ColorLike;
export const defaultTextAlign: string;
export const defaultTextBaseline: string;
/**
 * The label cache for text rendering. To change the default cache size of 2048
 * entries, use {@link module:ol/structs/LRUCache#setSize}.
 * Deprecated - there is no label cache any more.
 */
export const labelCache: any;
/**
 * Clears the label cache when a font becomes available.
 */
export const registerFont: (fontSpec: string) => void;
export const textHeights: { [key: string]: number };
export function createTransformString(transform: Transform): string;
export function drawImageOrLabel(
    context: CanvasRenderingContext2D,
    transform: Transform | null,
    opacity: number,
    labelOrImage: Label | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement,
    originX: number,
    originY: number,
    w: number,
    h: number,
    x: number,
    y: number,
    scale: Size,
): void;
/**
 * Measure text width using a cache.
 */
export function measureAndCacheTextWidth(font: string, text: string, cache: { [key: string]: number }): number;
export function measureTextHeight(font: string): Size;
export function measureTextWidth(font: string, text: string): number;
export function measureTextWidths(font: string, lines: string[], widths: number[]): number;
export function rotateAtOffset(
    context: CanvasRenderingContext2D,
    rotation: number,
    offsetX: number,
    offsetY: number,
): void;
