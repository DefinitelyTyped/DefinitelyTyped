/**
 * Typescript definition tests for d3/d3-axis module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Axis from 'd3-axis';
import {
    scaleBand,
    ScaleBand,
    scaleLinear,
    ScaleLinear,
    scaleOrdinal,
    ScaleOrdinal,
    scalePoint,
    ScalePoint,
    scalePow,
    ScalePower,
    scaleTime,
    ScaleTime
} from 'd3-scale';
import { select, Selection } from 'd3-selection';
import { Transition } from 'd3-transition';
import { timeMinute } from 'd3-time';
import { format } from 'd3-format';

// --------------------------------------------------------------------------
// Preparatory Steps
// --------------------------------------------------------------------------

let num: number;

let axisScaleNumber: d3Axis.AxisScale<number>;
let axisScaleDate: d3Axis.AxisScale<Date>;
let axisScaleString: d3Axis.AxisScale<string>;

// --------------------------------------------------------------------------
// Test AxisScale Helper Interface
// --------------------------------------------------------------------------

axisScaleNumber = scaleLinear();
axisScaleDate = scaleTime();
axisScaleString = scaleOrdinal<number>();
axisScaleNumber = scaleBand<number>();
axisScaleNumber = scalePoint<number>();
axisScaleString = scaleBand();
axisScaleString = scalePoint();
// --------------------------------------------------------------------------
// Test AxisContainerElement
// --------------------------------------------------------------------------

let containerElement: d3Axis.AxisContainerElement;
const svg: SVGSVGElement = select<SVGSVGElement, any>('svg').node() !; // mock
const g: SVGGElement = select<SVGGElement, any>('g').node() !; // mock
const canvas: HTMLCanvasElement = select<HTMLCanvasElement, any>('canvas').node() !; // mock

containerElement = svg;
containerElement = g;
// containerElement = canvas; // fails, incompatible type

// --------------------------------------------------------------------------
// Test Axis Generators
// --------------------------------------------------------------------------

let topAxis: d3Axis.Axis<number | { valueOf(): number }> = d3Axis.axisTop(scaleLinear());
let rightAxis: d3Axis.Axis<Date> = d3Axis.axisRight<Date>(scaleTime());
let bottomAxis: d3Axis.Axis<string> = d3Axis.axisBottom(scaleOrdinal<number>());
let leftAxis: d3Axis.Axis<number | { valueOf(): number }> = d3Axis.axisLeft(scaleLinear<number>());

// --------------------------------------------------------------------------
// Test Configure Axis
// --------------------------------------------------------------------------

// scale(...) ----------------------------------------------------------------

leftAxis = leftAxis.scale(scalePow());
const powerScale: ScalePower<number, number> = leftAxis.scale<ScalePower<number, number>>();
// powerScale = leftAxis.scale(); // fails, without casting as AxisScale is purposely  generic

bottomAxis = bottomAxis.scale(scaleOrdinal<number>());
// bottomAxis = bottomAxis.scale(scalePow()) // fails, domain of scale incompatible with domain of axis

const axisScale: d3Axis.AxisScale<string> = bottomAxis.scale();
const ordinalScale: ScaleOrdinal<string, number> = bottomAxis.scale<ScaleOrdinal<string, number>>();
// ordinalScale = bottomAxis.scale(); // fails, without casting as AxisScale is purposely  generic

// ticks(...) ----------------------------------------------------------------

topAxis = topAxis.ticks(20, ',f');

rightAxis = rightAxis.ticks(timeMinute.every(5));

// tickArguments(...) ----------------------------------------------------------------

topAxis = topAxis.tickArguments([20, 's']);

rightAxis = rightAxis.tickArguments([timeMinute.every(5)]);

const tickArguments: any[] = leftAxis.tickArguments();

// tickValues(...) ----------------------------------------------------------------

topAxis = topAxis.tickValues([1, 3, 5, 7]);

bottomAxis = bottomAxis.tickValues(['strongly negative', 'strongly positive']);

leftAxis = leftAxis.tickValues(null);

const tickValues: Date[] | null = rightAxis.tickValues();

// tickFormat(...) ----------------------------------------------------------------

topAxis = topAxis.tickFormat(format(',.0f'));
topAxis = topAxis.tickFormat(null);

const formatFn: ((domainValue: string, index: number) => string) | null = bottomAxis.tickFormat();

bottomAxis.tickFormat((d, i) => '#' + i);
bottomAxis.tickFormat(d => d + '!');
// tickSize(...) ----------------------------------------------------------------

rightAxis = rightAxis.tickSize(5);
num = rightAxis.tickSize();

// tickSizeInner(...) ----------------------------------------------------------------

rightAxis = rightAxis.tickSizeInner(3);
num = rightAxis.tickSizeInner();

// tickSizeOuter(...) ----------------------------------------------------------------

rightAxis = rightAxis.tickSizeOuter(4);
num = rightAxis.tickSizeOuter();

// tickPadding(...) ----------------------------------------------------------------

rightAxis = rightAxis.tickPadding(5);
num = rightAxis.tickPadding();

// --------------------------------------------------------------------------
// Test Apply Axis
// --------------------------------------------------------------------------

const gSelection: Selection<SVGGElement, any, any, any> = select<SVGGElement, any>('g');
const gTransition = gSelection.transition();

gSelection.call(topAxis);
gTransition.call(topAxis);

const svgSelection: Selection<SVGSVGElement, any, any, any> = select<SVGSVGElement, any>('g');
const svgTransition = svgSelection.transition();

svgSelection.call(leftAxis);
svgTransition.call(leftAxis);

const canvasSelection: Selection<HTMLCanvasElement, any, any, any> = select<HTMLCanvasElement, any>('canvas');
const canvasTransition = canvasSelection.transition();

// canvasSelection.call(rightAxis); // fails, incompatible context container element
// canvasTransition.call(rightAxis); // fails, incompatible context container element
