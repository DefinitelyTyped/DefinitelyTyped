/**
 * Typescript definition tests for d3/d3-brush module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Brush from 'd3-brush';
import { ArrayLike, event, select, Selection } from 'd3-selection';
import { Transition } from 'd3-transition';

// -----------------------------------------------------------------------------
// Preparatory Steps
// -----------------------------------------------------------------------------

interface BrushDatum {
    extent: [[number, number], [number, number]];
    filterZoomEvent: boolean;
}

// -----------------------------------------------------------------------------
// Test Define BrushBehavior
// -----------------------------------------------------------------------------

let brush: d3Brush.BrushBehavior<BrushDatum> = d3Brush.brush<BrushDatum>();

const brushX: d3Brush.BrushBehavior<BrushDatum> = d3Brush.brushX<BrushDatum>();

const brushY: d3Brush.BrushBehavior<BrushDatum> = d3Brush.brushY<BrushDatum>();

// extent() ----------------------------------------------------------------------

let extent: (this: SVGGElement, d: BrushDatum, i: number, group: SVGGElement[] | ArrayLike<SVGGElement>) => [[number, number], [number, number]];
extent = brush.extent();

// chainable with array
brush = brush.extent([[0, 0], [300, 200]]);

// chainable with function
brush = brush.extent(function(d, i, group) {
    console.log('Owner SVG Element of svg group: ', this.ownerSVGElement); // this is of type SVGGElement
    return d.extent; // datum of type BrushDatum
});

// filter() ----------------------------------------------------------------

// chainable
brush = brush.filter(function(d, i, group) {
    // Cast d3 event to D3ZoomEvent to be used in filter logic
    const e = event as d3Brush.D3BrushEvent<BrushDatum>;

    console.log('Owner SVG Element of svg group: ', this.ownerSVGElement); // this is of type SVGGElement
    return e.sourceEvent.type !== 'zoom' || !d.filterZoomEvent; // datum type is BrushDatum (as propagated to SVGGElement with brush event attached)
});

let filterFn: (this: SVGGElement, d: BrushDatum, index: number, group: SVGGElement[]) => boolean;
filterFn = brush.filter();

// handleSize() ----------------------------------------------------------------

// chainable
brush = brush.handleSize(7);
const handleSize: number = brush.handleSize();

// on() ------------------------------------------------------------------------

let brushed: ((this: SVGGElement, datum: BrushDatum, index: number, group: SVGGElement[] | ArrayLike<SVGGElement>) => void) | undefined;
brushed = (d, i, group) => {
    // do anything
};

// let wrongHandler1: (this: SVGSVGElement, datum: BrushDatum, index: number, group: SVGSVGElement[] | ArrayLike<SVGSVGElement>) => void;
// let wrongHandler2: (this: SVGGElement, datum: { test: string }, index: number, group: SVGGElement[] | ArrayLike<SVGGElement>) => void;

// chainable
brush = brush.on('end', brushed);
// brush = brush.on('end', wrongHandler1); // fails, wrongHandler event handler has wrong this
// brush = brush.on('end', wrongHandler2); // fails, wrongHandler event handler has wrong datum type

brushed = brush.on('end');

// chainable remove handler
brush = brush.on('end', null);

// re-apply
brush.on('end', function(d, i, g) {
    const datum: BrushDatum = d;
    const index: number = i;
    const group: SVGGElement[] | ArrayLike<SVGGElement> = g;
    console.log('Owner SVG Element of svg group: ', this.ownerSVGElement); // this is of type SVGGElement
    console.log('Extent as per data: ', d.extent); // datum of type BrushDatum
    // do anything
});

// -----------------------------------------------------------------------------
// Test Attach Brush Behavior
// -----------------------------------------------------------------------------

const g = select<SVGSVGElement, any>('svg')
    .append('g')
    .classed('brush', true)
    .datum<BrushDatum>({
        extent: [[0, 0], [300, 200]],
        filterZoomEvent: true
    });

g.call(brush);

const gX = select<SVGSVGElement, any>('svg')
    .append('g')
    .classed('brush', true)
    .datum<BrushDatum>({
        extent: [[0, 0], [300, 200]],
        filterZoomEvent: true
    });

gX.call(brushX);

// -----------------------------------------------------------------------------
// Test Use Brush Behavior
// -----------------------------------------------------------------------------

const gTransition = g.transition();

// 2d brush move with Selection
brush.move(g, [[10, 10], [50, 50]]); // two-dimensional brush
brush.move(g, function(d, i, group) {
    console.log('Owner SVG Element of svg group: ', this.ownerSVGElement); // this is of type SVGGElement
    const selection: [[number, number], [number, number]] = [[0, 0], [0, 0]];
    selection[0][0] = d.extent[0][0] + 10; // datum type is brushDatum
    selection[0][1] = d.extent[0][1] + 10;
    selection[1][0] = d.extent[0][0] + 40;
    selection[1][1] = d.extent[0][1] + 40;
    return selection;
});

// 2d brush move with Transition
brush.move(gTransition, [[10, 10], [50, 50]]); // two-dimensional brush
brush.move(gTransition, function(d, i, group) {
    console.log('Owner SVG Element of svg group: ', this.ownerSVGElement); // this is of type SVGGElement
    const selection: [[number, number], [number, number]] = [[0, 0], [0, 0]];
    selection[0][0] = d.extent[0][0] + 10; // datum type is brushDatum
    selection[0][1] = d.extent[0][1] + 10;
    selection[1][0] = d.extent[0][0] + 40;
    selection[1][1] = d.extent[0][1] + 40;
    return selection;
});

const gXTransition = gX.transition();

// 1d brush move with Selection
brush.move(gX, [10, 40]); // two-dimensional brush
brush.move(gX, function(d, i, group) {
    console.log('Owner SVG Element of svg group: ', this.ownerSVGElement); // this is of type SVGGElement
    const selection: [number, number] = [0, 0];
    selection[0] = d.extent[0][0] + 10; // datum type is brushDatum
    selection[1] = d.extent[0][0] + 40;
    return selection;
});

// 1d brush move with Transition
brush.move(gXTransition, [10, 40]); // two-dimensional brush
brush.move(gXTransition, function(d, i, group) {
    console.log('Owner SVG Element of svg group: ', this.ownerSVGElement); // this is of type SVGGElement
    const selection: [number, number] = [0, 0];
    selection[0] = d.extent[0][0] + 10; // datum type is brushDatum
    selection[1] = d.extent[0][0] + 40;
    return selection;
});

// -----------------------------------------------------------------------------
// Test Brush Event Interface
// -----------------------------------------------------------------------------

const e: d3Brush.D3BrushEvent<BrushDatum> = event;

const target: d3Brush.BrushBehavior<BrushDatum> = e.target;
const type: 'start' | 'brush' | 'end' | string = e.type;
const brushSelection: d3Brush.BrushSelection = e.selection;
const sourceEvent: any = e.sourceEvent;
