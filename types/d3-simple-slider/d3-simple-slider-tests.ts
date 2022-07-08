/**
 * Typescript definition tests for d3-simple-slider module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3SimpleSlider from 'd3-simple-slider';
import { scaleLinear } from 'd3-scale';
import { select, Selection } from 'd3-selection';
import { format } from 'd3-format';

let axisScaleNumber: d3SimpleSlider.SliderScale<number>;

axisScaleNumber = scaleLinear();

// --------------------------------------------------------------------------
// Test AxisContainerElement
// --------------------------------------------------------------------------

let containerElement: d3SimpleSlider.SliderContainerElement;
const svg: SVGSVGElement = select<SVGSVGElement, any>('svg').node()!; // mock
const g: SVGGElement = select<SVGGElement, any>('g').node()!; // mock
const canvas: HTMLCanvasElement = select<HTMLCanvasElement, any>('canvas').node()!; // mock

containerElement = svg;
containerElement = g;
// @ts-expect-error
containerElement = canvas; // fails, incompatible type

// --------------------------------------------------------------------------
// Test Slider Generators
// --------------------------------------------------------------------------

let topSlider: d3SimpleSlider.Slider<number> = d3SimpleSlider.sliderTop(scaleLinear());
let leftSlider: d3SimpleSlider.Slider<number> = d3SimpleSlider.sliderLeft(scaleLinear());

// --------------------------------------------------------------------------
// Test Configure Slider
// --------------------------------------------------------------------------

// domain(...) ----------------------------------------------------------------

leftSlider = leftSlider.domain([0, 10]);
const domain: [number, number] = leftSlider.domain();

// @ts-expect-error
topSlider = topSlider.domain([0]); // fails, domain incompatible with slider

// ticks(...) ----------------------------------------------------------------

topSlider = topSlider.ticks(20);

const ticks: number[] | null = topSlider.ticks();

// tickValues(...) ----------------------------------------------------------------

topSlider = topSlider.tickValues([1, 3, 5, 7]);
leftSlider = leftSlider.tickValues(null);

const tickValues: number[] | null = topSlider.tickValues();

// tickFormat(...) ----------------------------------------------------------------

topSlider = topSlider.tickFormat(format(',.0f'));
topSlider = topSlider.tickFormat(null);

const formatFn: ((domainValue: number, index: number) => string) | null = topSlider.tickFormat();

leftSlider.tickFormat((d, i) => '#' + i);
leftSlider.tickFormat(d => d + '!');

// on(...) ----------------------------------------------------------------

let listener: undefined | ((val: number) => void);

topSlider = topSlider.on('click', val => {
    console.log('onclick print val: ', val);
});

// get current listener
listener = topSlider.on('click');

if (listener) {
    // returns 'this' selection
    topSlider = topSlider.on('click', listener); // check chaining return type by re-assigning
}

// remove listener
topSlider = topSlider.on('click', null); // check chaining return type by re-assigning

// --------------------------------------------------------------------------
// Test Apply Slider
// --------------------------------------------------------------------------

const gSelection: Selection<SVGGElement, any, any, any> = select<SVGGElement, any>('g');

gSelection.call(topSlider);

const svgSelection: Selection<SVGSVGElement, any, any, any> = select<SVGSVGElement, any>('svg');

svgSelection.call(leftSlider);

const canvasSelection: Selection<HTMLCanvasElement, any, any, any> = select<HTMLCanvasElement, any>('canvas');

// @ts-expect-error
canvasSelection.call(leftSlider); // fails, incompatible context container element
