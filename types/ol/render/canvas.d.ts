import { ColorLike } from '../colorlike';
import BaseObject from '../Object';
import { Size } from '../size';
import Fill from '../style/Fill';
import Stroke from '../style/Stroke';
import { Transform } from '../transform';

/**
 * Container for decluttered replay instructions that need to be rendered or
 * omitted together, i.e. when styles render both an image and text, or for the
 * characters that form text along lines. The basic elements of this array are
 * [minX, minY, maxX, maxY, count], where the first four entries are the
 * rendered extent of the group in pixel space. count is the number of styles
 * in the group, i.e. 2 when an image and a text are grouped, or 1 otherwise.
 * In addition to these four elements, declutter instruction arrays (i.e. the
 * arguments to {@link module:ol/render/canvas~drawImage} are appended to the array.
 */
export type DeclutterGroup = any[];
/**
 * Declutter groups for support of multi geometries.
 */
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
export interface Label {
    width: number;
    height: number;
    contextInstructions: (string | number)[];
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
export const measureTextHeight: (font: string) => Size;
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
export function measureTextWidth(font: string, text: string): number;
export function measureTextWidths(font: string, lines: string[], widths: number[]): number;
export function rotateAtOffset(
    context: CanvasRenderingContext2D,
    rotation: number,
    offsetX: number,
    offsetY: number,
): void;
