// Type definitions for D3JS d3-scale module v1.0.3
// Project: https://github.com/d3/d3-scale/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CountableTimeInterval, TimeInterval } from 'd3-time';

// -------------------------------------------------------------------------------
// Shared Types and Interfaces
// -------------------------------------------------------------------------------


export interface InterpolatorFactory<T, U> {
    (a: T, b: T): ((t: number) => U);
}


// -------------------------------------------------------------------------------
// Linear Scale Factory
// -------------------------------------------------------------------------------


export interface ScaleLinear<Range, Output> {
    (value: number | { valueOf(): number }): Output;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: number | { valueOf(): number }): number;
    domain(): Array<number>;
    domain(domain: Array<number | { valueOf(): number }>): this;
    range(): Array<Range>;
    range(range: Array<Range>): this;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric.
     */
    rangeRound(range: Array<number | { valueOf(): number }>): this;
    clamp(): boolean;
    clamp(clamp: boolean): ScaleLinear<Range, Output>;
    interpolate(): InterpolatorFactory<any, any>;
    interpolate(interpolate: InterpolatorFactory<Range, Output>): this;
    interpolate<NewOutput>(interpolate: InterpolatorFactory<Range, NewOutput>): ScaleLinear<Range, NewOutput>;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: number | { valueOf(): number }) => string);
    nice(count?: number): this;
    copy(): ScaleLinear<Range, Output>;
}

export function scaleLinear(): ScaleLinear<number, number>;
export function scaleLinear<Output>(): ScaleLinear<Output, Output>;
export function scaleLinear<Range, Output>(): ScaleLinear<Range, Output>;

// -------------------------------------------------------------------------------
// Power Scale Factories
// -------------------------------------------------------------------------------


export interface ScalePower<Range, Output> {
    (value: number | { valueOf(): number }): Output;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: number | { valueOf(): number }): number;
    domain(): Array<number>;
    domain(domain: Array<number | { valueOf(): number }>): this;
    range(): Array<Range>;
    range(range: Array<Range>): this;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric.
     */
    rangeRound(range: Array<number | { valueOf(): number }>): this;
    clamp(): boolean;
    clamp(clamp: boolean): this;
    interpolate(): InterpolatorFactory<any, any>;
    interpolate(interpolate: InterpolatorFactory<Range, Output>): this;
    interpolate<NewOutput>(interpolate: InterpolatorFactory<Range, NewOutput>): ScalePower<Range, NewOutput>;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: number | { valueOf(): number }) => string);
    nice(count?: number): this;
    copy(): ScalePower<Range, Output>;

    exponent(): number;
    exponent(exponent: number): this;
}

export function scalePow(): ScalePower<number, number>;
export function scalePow<Output>(): ScalePower<Output, Output>;
export function scalePow<Range, Output>(): ScalePower<Range, Output>;

export function scaleSqrt(): ScalePower<number, number>;
export function scaleSqrt<Output>(): ScalePower<Output, Output>;
export function scaleSqrt<Range, Output>(): ScalePower<Range, Output>;

// -------------------------------------------------------------------------------
// Logarithmic Scale Factory
// -------------------------------------------------------------------------------


export interface ScaleLogarithmic<Range, Output> {
    (value: number | { valueOf(): number }): Output;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: number | { valueOf(): number }): number;
    domain(): Array<number>;
    domain(domain: Array<number | { valueOf(): number }>): this;
    range(): Array<Range>;
    range(range: Array<Range>): this;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric.
     */
    rangeRound(range: Array<number | { valueOf(): number }>): this;
    clamp(): boolean;
    clamp(clamp: boolean): this;
    interpolate(): InterpolatorFactory<any, any>;
    interpolate(interpolate: InterpolatorFactory<Range, Output>): this;
    interpolate<NewOutput>(interpolate: InterpolatorFactory<Range, NewOutput>): ScaleLogarithmic<Range, NewOutput>;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: number | { valueOf(): number }) => string);
    nice(count?: number): this;
    copy(): ScaleLogarithmic<Range, Output>;

    base(): number;
    base(base: number): this;
}

export function scaleLog(): ScaleLogarithmic<number, number>;
export function scaleLog<Output>(): ScaleLogarithmic<Output, Output>;
export function scaleLog<Range, Output>(): ScaleLogarithmic<Range, Output>;

// -------------------------------------------------------------------------------
// Identity Scale Factory
// -------------------------------------------------------------------------------


export interface ScaleIdentity {
    (value: number | { valueOf(): number }): number;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: number | { valueOf(): number }): number;
    domain(): Array<number>;
    domain(domain: Array<number | { valueOf(): number }>): this;
    range(): Array<number>;
    range(range: Array<Range | { valueOf(): number }>): this;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: number | { valueOf(): number }) => string);
    nice(count?: number): this;
    copy(): ScaleIdentity;
}

export function scaleIdentity(): ScaleIdentity;


// -------------------------------------------------------------------------------
// Time Scale Factories
// -------------------------------------------------------------------------------

export interface ScaleTime<Range, Output> {
    (value: Date): Output;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invert(value: number | { valueOf(): number }): Date;
    domain(): Array<Date>;
    domain(domain: Array<Date>): this;
    range(): Array<Range>;
    range(range: Array<Range>): this;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric.
     */
    rangeRound(range: Array<number | { valueOf(): number }>): this;
    clamp(): boolean;
    clamp(clamp: boolean): this;
    interpolate(): InterpolatorFactory<any, any>;
    interpolate(interpolate: InterpolatorFactory<Range, Output>): this;
    interpolate<NewOutput>(interpolate: InterpolatorFactory<Range, NewOutput>): ScaleTime<Range, NewOutput>;
    ticks(): Array<Date>;
    ticks(count: number): Array<Date>;
    ticks(interval: TimeInterval): Array<Date>;
    tickFormat(): ((d: Date) => string);
    tickFormat(count: number, specifier?: string): ((d: Date) => string);
    tickFormat(interval: TimeInterval, specifier?: string): ((d: Date) => string);
    nice(): this;
    nice(count: number): this;
    nice(interval: CountableTimeInterval, step?: number): this;
    copy(): ScaleTime<Range, Output>;
}

export function scaleTime(): ScaleTime<number, number>;
export function scaleTime<Output>(): ScaleTime<Output, Output>;
export function scaleTime<Range, Output>(): ScaleTime<Range, Output>;

export function scaleUtc(): ScaleTime<number, number>;
export function scaleUtc<Output>(): ScaleTime<Output, Output>;
export function scaleUtc<Range, Output>(): ScaleTime<Range, Output>;

// -------------------------------------------------------------------------------
// Sequential Scale Factory
// -------------------------------------------------------------------------------


export interface ScaleSequential<Output> {
    (value: number | { valueOf(): number }): Output;
    domain(): [number, number];
    domain(domain: [number | { valueOf(): number }, number | { valueOf(): number }]): this;
    clamp(): boolean;
    clamp(clamp: boolean): this;
    interpolator(): ((t: number) => Output);
    interpolator(interpolator: ((t: number) => Output)): this;
    interpolator<NewOutput>(interpolator: ((t: number) => NewOutput)): ScaleSequential<NewOutput>;
    copy(): ScaleSequential<Output>;
}

export function scaleSequential<Output>(interpolator: ((t: number) => Output)): ScaleSequential<Output>;

// -------------------------------------------------------------------------------
// Color Interpolators for Sequential Scale Factory
// -------------------------------------------------------------------------------


export function interpolateViridis(t: number): string;

export function interpolateMagma(t: number): string;

export function interpolateInferno(t: number): string;

export function interpolatePlasma(t: number): string;

export function interpolateRainbow(t: number): string;

export function interpolateWarm(t: number): string;

export function interpolateCool(t: number): string;

export function interpolateCubehelixDefault(t: number): string;

// -------------------------------------------------------------------------------
// Quantize Scale Factory
// -------------------------------------------------------------------------------

export interface ScaleQuantize<Range> {
    (value: number | { valueOf(): number }): Range;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invertExtent(value: Range): [number, number];
    domain(): [number, number];
    domain(domain: [number | { valueOf(): number }, number | { valueOf(): number }]): this;
    range(): Array<Range>;
    range(range: Array<Range>): this;
    ticks(count?: number): Array<number>;
    tickFormat(count?: number, specifier?: string): ((d: number | { valueOf(): number }) => string);
    nice(count?: number): this;
    copy(): ScaleQuantize<Range>;
}

export function scaleQuantize(): ScaleQuantize<number>;
export function scaleQuantize<Range>(): ScaleQuantize<Range>;

// -------------------------------------------------------------------------------
// Quantile Scale Factory
// -------------------------------------------------------------------------------

export interface ScaleQuantile<Range> {
    (value: number | { valueOf(): number }): Range;
    invertExtent(value: Range): [number, number];
    domain(): Array<number>;
    domain(domain: Array<number | { valueOf(): number }>): this;
    range(): Array<Range>;
    range(range: Array<Range>): this;
    quantiles(): Array<number>;
    copy(): ScaleQuantile<Range>;
}

export function scaleQuantile(): ScaleQuantile<number>;
export function scaleQuantile<Range>(): ScaleQuantile<Range>;

// -------------------------------------------------------------------------------
// Threshold Scale Factory
// -------------------------------------------------------------------------------

// TODO: review Domain Type, should be naturally orderable
export interface ScaleThreshold<Domain extends number | string | Date, Range> {
    (value: Domain): Range;
    /**
     * Important: While value should come out of range R, this is method is only applicable to
     * values that can be coerced to numeric. Otherwise, returns NaN
     */
    invertExtent(value: Range): [Domain, Domain] | [undefined, Domain] | [Domain, undefined] | [undefined, undefined];
    domain(): Array<Domain>;
    domain(domain: Array<Domain>): this;
    range(): Array<Range>;
    range(range: Array<Range>): this;
    copy(): ScaleThreshold<Domain, Range>;
}

export function scaleThreshold(): ScaleThreshold<number, number>;
export function scaleThreshold<Domain extends number | string | Date, Range>(): ScaleThreshold<Domain, Range>;

// -------------------------------------------------------------------------------
// Ordinal Scale Factory
// -------------------------------------------------------------------------------


export interface ScaleOrdinal<Domain extends { toString(): string }, Range> {
    (x: Domain): Range;
    domain(): Array<Domain>;
    domain(domain: Array<Domain>): this;
    range(): Array<Range>;
    range(range: Array<Range>): this;
    unknown(): Range | { name: 'implicit' };
    unknown(value: Range | { name: 'implicit' }): this;
    copy(): ScaleOrdinal<Domain, Range>;
}

export function scaleOrdinal<Range>(range?: Array<Range>): ScaleOrdinal<string, Range>;
export function scaleOrdinal<Domain extends { toString(): string }, Range>(range?: Array<Range>): ScaleOrdinal<Domain, Range>;

export const scaleImplicit: { name: 'implicit' };


// -------------------------------------------------------------------------------
// Band Scale Factory
// -------------------------------------------------------------------------------

export interface ScaleBand<Domain extends { toString(): string }> {
    (x: Domain): number | undefined;
    domain(): Array<Domain>;
    domain(domain: Array<Domain>): this;
    range(): [number, number];
    range(range: [number | { valueOf(): number }, number | { valueOf(): number }]): this;
    rangeRound(range: [number | { valueOf(): number }, number | { valueOf(): number }]): this;
    round(): boolean;
    round(round: boolean): this;
    paddingInner(): number;
    paddingInner(padding: number): this;
    paddingOuter(): number;
    paddingOuter(padding: number): this;
    /**
     * Returns the inner padding.
     */
    padding(): number;
    /**
     * A convenience method for setting the inner and outer padding to the same padding value.
     */
    padding(padding: number): this;
    align(): number;
    align(align: number): this;
    bandwidth(): number;
    step(): number;
    copy(): ScaleBand<Domain>;
}

export function scaleBand(): ScaleBand<string>;
export function scaleBand<Domain extends { toString(): string }>(): ScaleBand<Domain>;

// -------------------------------------------------------------------------------
// Point Scale Factory
// -------------------------------------------------------------------------------

export interface ScalePoint<Domain extends { toString(): string }> {
    (x: Domain): number | undefined;
    domain(): Array<Domain>;
    domain(domain: Array<Domain>): this;
    range(): [number, number];
    range(range: [number | { valueOf(): number }, number | { valueOf(): number }]): this;
    rangeRound(range: [number | { valueOf(): number }, number | { valueOf(): number }]): this;
    round(): boolean;
    round(round: boolean): this;
    /**
     * Returns the current outer padding which defaults to 0.
     * The outer padding determines the ratio of the range that is reserved for blank space
     * before the first point and after the last point.
     */
    padding(): number;
    /**
     * Sets the outer padding to the specified value which must be in the range [0, 1].
     * The outer padding determines the ratio of the range that is reserved for blank space
     * before the first point and after the last point.
     */
    padding(padding: number): this;
    align(): number;
    align(align: number): this;
    bandwidth(): number;
    step(): number;
    copy(): ScalePoint<Domain>;
}

export function scalePoint(): ScalePoint<string>;
export function scalePoint<Domain extends { toString(): string }>(): ScalePoint<Domain>;


// -------------------------------------------------------------------------------
// Categorical Color Schemas for Ordinal Scales
// -------------------------------------------------------------------------------

export const schemeCategory10: Array<string>;

export const schemeCategory20: Array<string>;

export const schemeCategory20b: Array<string>;

export const schemeCategory20c: Array<string>;
