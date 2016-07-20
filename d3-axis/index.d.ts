// Type definitions for D3JS d3-axis module 1.0.0
// Project: https://github.com/d3/d3-axis/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Selection, TransitionLike } from 'd3-selection';

// TODO: The below import is commented out, as d3-axis does not have a dependency
// on d3-time. d3-time may only be loaded, if the use case requires a TimeInterval (or CountableTimeInterval)
// for an axis. In which case, the ticks(...) signature with interval argument, would be best-specified
// with the below import. 

// import { TimeInterval } from 'd3-time';

// --------------------------------------------------------------------------
// Shared Types and Interfaces
// --------------------------------------------------------------------------


/**
 * An interface to which a scale passed into axis must conform (at a minimum)
 * for axis to use the scale without error
 */
export interface AxisScale<Domain> {
    (x: Domain): number;
    domain(): Array<Domain>;
    range(): Array<number>;
    copy(): AxisScale<Domain>;
    bandwidth?(): number;
    ticks?(count?: number): Array<number> | Array<Date>;
    tickFormat?(count?: number, specifier?: string): ((d: number) => string) | ((d: Date) => string);
}


export type AxisContainerElement = SVGSVGElement | SVGGElement;

export interface Axis<Domain> {
    (context: Selection<AxisContainerElement, any, any, any>): void;
    (context: TransitionLike<AxisContainerElement, any>): void;

    scale(): AxisScale<Domain>;
    scale(scale: AxisScale<Domain>): Axis<Domain>;
    ticks(counter: number, specifier?: string): Axis<Domain>;
    // TODO: proper typing of interval argument is commented out to avoid import from a
    // module that is not a dependency of d3-time (see imports above)

    // ticks(interval: TimeInterval, specifier?: string): Axis<Domain>;

    // HACK: use `any` instead of TimeInterval 
    ticks(interval: any, specifier?: string): Axis<Domain>;
    ticks(arg0: any, ...args: any[]): Axis<Domain>;
    tickArguments(): any[];
    tickArguments(args: any[]): Axis<Domain>;
    tickValues(): Domain[] | null;
    tickValues(values: Domain[]): Axis<Domain>;
    tickValues(values: null): Axis<Domain>;
    tickFormat(): (domainValue: Domain) => string;
    tickFormat(format: (domainValue: Domain) => string): Axis<Domain>;
    tickFormat(format: null): Axis<Domain>;
    tickSize(): number;
    tickSize(size: number): Axis<Domain>;
    tickSizeInner(): number;
    tickSizeInner(size: number): Axis<Domain>;
    tickSizeOuter(): number;
    tickSizeOuter(size: number): Axis<Domain>;
    tickPadding(): number;
    tickPadding(padding: number): Axis<Domain>;

}

export function axisTop<Domain>(scale: AxisScale<Domain>): Axis<Domain>;
export function axisRight<Domain>(scale: AxisScale<Domain>): Axis<Domain>;
export function axisBottom<Domain>(scale: AxisScale<Domain>): Axis<Domain>;
export function axisLeft<Domain>(scale: AxisScale<Domain>): Axis<Domain>;