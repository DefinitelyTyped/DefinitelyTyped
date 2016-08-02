/**
 * Typescript definition tests for d3/d3-axis module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Axis from 'd3-axis';
import {
    scaleLinear,
    ScaleLinear,
    scaleOrdinal,
    ScaleOrdinal,
    scalePow,
    scaleTime,
    ScaleTime,
} from 'd3-scale';
import { Selection } from 'd3-selection';
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

// --------------------------------------------------------------------------
// Test AxisContainerElement
// --------------------------------------------------------------------------

let containerElement: d3Axis.AxisContainerElement;
let svg: SVGSVGElement,
    g: SVGGElement,
    canvas: HTMLCanvasElement;

containerElement = svg;
containerElement = g;
// containerElement = canvas; // fails, incompatible type

// --------------------------------------------------------------------------
// Test Axis Generators
// --------------------------------------------------------------------------

let topAxis: d3Axis.Axis<number | { valueOf(): number }> = d3Axis.axisTop(scaleLinear());
let rightAxis: d3Axis.Axis<Date> = d3Axis.axisRight(scaleTime());
let bottomAxis: d3Axis.Axis<string> = d3Axis.axisBottom(scaleOrdinal<number>());
let leftAxis: d3Axis.Axis<number | { valueOf(): number }> = d3Axis.axisLeft(scaleLinear<number>());

// --------------------------------------------------------------------------
// Test Configure Axis
// --------------------------------------------------------------------------

// scale(...) ----------------------------------------------------------------

leftAxis = leftAxis.scale(scalePow());

// bottomAxis = bottomAxis.scale(scalePow()) // fails, domain of scale incompatible with domain of axis

let axisScale: d3Axis.AxisScale<string> = bottomAxis.scale();
// let ordinalScale: ScaleOrdinal<string, number> = bottomAxis.scale(); // fails, without casting as AxisScale is purposely  generic

// ticks(...) ----------------------------------------------------------------

topAxis = topAxis.ticks(20, ',f');

rightAxis = rightAxis.ticks(timeMinute.every(5));

// tickArguments(...) ----------------------------------------------------------------

topAxis = topAxis.tickArguments([20, 's']);

rightAxis = rightAxis.tickArguments([timeMinute.every(5)]);

let tickArguments: Array<any> = leftAxis.tickArguments();

// tickValues(...) ----------------------------------------------------------------

topAxis = topAxis.tickValues([1, 3, 5, 7]);

bottomAxis = bottomAxis.tickValues(['strongly negative', 'strongly positive']);

leftAxis = leftAxis.tickValues(null);

let tickValues: Array<Date> = rightAxis.tickValues();

// tickFormat(...) ----------------------------------------------------------------

topAxis = topAxis.tickFormat(format(',.0f'));
topAxis = topAxis.tickFormat(null);

let formatFn: (domainValue: string) => string = bottomAxis.tickFormat();

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

let gSelection: Selection<SVGGElement, any, any, any>;
let gTransition = gSelection.transition();

gSelection.call(topAxis);
gTransition.call(topAxis);

let svgSelection: Selection<SVGSVGElement, any, any, any>;
let svgTransition = svgSelection.transition();

svgSelection.call(leftAxis);
svgTransition.call(leftAxis);

let canvasSelection: Selection<HTMLCanvasElement, any, any, any>;
let canvasTransition = canvasSelection.transition();

// canvasSelection.call(rightAxis); // fails, incompatible context container element
// canvasTransition.call(rightAxis); // fails, incompatible context container element
