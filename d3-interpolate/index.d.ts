// Type definitions for D3JS d3-interpolate module 1.1.0
// Project: https://github.com/d3/d3-interpolate/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ColorSpaceObject } from '../d3-color';


// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------


export interface ZoomInterpolator extends Function {
    (t: number): ZoomView;
    /**
     * Recommended duration of zoom transition in ms
     */
    duration: number;
}

export interface ColorGammaInterpolationFactory extends Function {
    (a: string | ColorSpaceObject, b: string | ColorSpaceObject): ((t: number) => string);
    gamma(g: number): ColorGammaInterpolationFactory;
}

/**
 * Type zoomView is used to represent a numeric array with three elements.
 * In order of appearance the elements correspond to:
 * - cx: x-coordinate of the center of the viewport
 * - cy: y-coordinate of the center of the viewport
 * - width: size of the viewport
 */
export type ZoomView = [number, number, number];

// --------------------------------------------------------------------------
// Interpolation Function Factories
// --------------------------------------------------------------------------

export function interpolate(a: any, b: null): ((t: number) => null);
export function interpolate(a: number | { valueOf(): number }, b: number): ((t: number) => number);
export function interpolate(a: any, b: ColorSpaceObject): ((t: number) => string);
export function interpolate(a: Date, b: Date): ((t: number) => Date);
export function interpolate(a: string | { toString(): string }, b: string): ((t: number) => string);
export function interpolate<U extends Array<any>>(a: Array<any>, b: U): ((t: number) => U);
export function interpolate(a: number | { valueOf(): number }, b: { valueOf(): number }): ((t: number) => number);
export function interpolate<U extends Object>(a: any, b: U): ((t: number) => U);
export function interpolate(a: any, b: { [key: string]: any }): ((t: number) => { [key: string]: any });


export function interpolateNumber(a: number | { valueOf(): number }, b: number | { valueOf(): number }): ((t: number) => number);

export function interpolateRound(a: number | { valueOf(): number }, b: number | { valueOf(): number }): ((t: number) => number);

export function interpolateString(a: string | { toString(): string }, b: string | { toString(): string }): ((t: number) => string);

export function interpolateDate(a: Date, b: Date): ((t: number) => Date);

export function interpolateArray<A extends Array<any>>(a: Array<any>, b: A): ((t: number) => A);

export function interpolateObject<U extends Object>(a: any, b: U): ((t: number) => U);
export function interpolateObject(a: { [key: string]: any }, b: { [key: string]: any }): ((t: number) => { [key: string]: any });



export function interpolateTransformCss(a: string, b: string): ((t: number) => string);
export function interpolateTransformSvg(a: string, b: string): ((t: number) => string);

/**
 * Create Interpolator for zoom views
 */
export function interpolateZoom(a: ZoomView, b: ZoomView): ZoomInterpolator;


export function quantize<T>(interpolator: ((t: number) => T), n: number): Array<T>;

// Color interpolation related

export var interpolateRgb: ColorGammaInterpolationFactory;

export function interpolateRgbBasis(colors: Array<string | ColorSpaceObject>): ((t: number) => string);
export function interpolateRgbBasisClosed(colors: Array<string | ColorSpaceObject>): ((t: number) => string);

export function interpolateHsl(a: string | ColorSpaceObject, b: string | ColorSpaceObject): ((t: number) => string);
export function interpolateHslLong(a: string | ColorSpaceObject, b: string | ColorSpaceObject): ((t: number) => string);
export function interpolateLab(a: string | ColorSpaceObject, b: string | ColorSpaceObject): ((t: number) => string);
export function interpolateHcl(a: string | ColorSpaceObject, b: string | ColorSpaceObject): ((t: number) => string);
export function interpolateHclLong(a: string | ColorSpaceObject, b: string | ColorSpaceObject): ((t: number) => string);
export var interpolateCubehelix: ColorGammaInterpolationFactory;
export var interpolateCubehelixLong: ColorGammaInterpolationFactory;

// Spline related

export function interpolateBasis(splineNodes: Array<number>): ((t: number) => number);
export function interpolateBasisClosed(splineNodes: Array<number>): ((t: number) => number);
