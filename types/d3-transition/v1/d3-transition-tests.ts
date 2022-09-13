/**
 * Typescript definition tests for d3/d3-transition module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import {
    ArrayLike,
    selection,
    select,
    selectAll,
    Selection
} from 'd3-selection';

import * as d3Transition from 'd3-transition';
import {
    interpolateString,
    interpolateRgb
} from 'd3-interpolate';

// ---------------------------------------------------------------------------------------
// Some preparatory work for definition testing below
// ---------------------------------------------------------------------------------------

interface SVGDatum {
    width: number;
    height: number;
}

interface CircleDatum {
    nodeId: string;
    name: string;
    label: string;
    cx: number;
    cy: number;
    r: number;
    color: string;
}

const dimensions: SVGDatum = {
    width: 500,
    height: 300
};

const startCircleData: CircleDatum[] = [
    {
        nodeId: 'n1',
        name: 'node_1',
        label: 'Test Node 1',
        cx: 10,
        cy: 10,
        r: 5,
        color: 'slateblue'
    },
    {
        nodeId: 'n2',
        name: 'node_2',
        label: 'Test Node 2',
        cx: 30,
        cy: 30,
        r: 10,
        color: 'slateblue'
    }
];

const endCircleData: CircleDatum[] = [
    {
        nodeId: 'n1',
        name: 'node_1',
        label: 'Test Node 1',
        cx: 15,
        cy: 15,
        r: 5,
        color: 'slateblue'
    },
    {
        nodeId: 'n3',
        name: 'node_3',
        label: 'Test Node 3',
        cx: 40,
        cy: 40,
        r: 20,
        color: 'red'
    }
];

// --------------------------------------------------------------------------
// Tests of plain selections
// --------------------------------------------------------------------------

// Setup selection for transition testing and test that 'standard' selection properties are
// working unaffected by module augmentation of Selection by d3-transition

let circles: Selection<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>;

circles = select<SVGSVGElement, any>('svg')
    .datum(dimensions)
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .selectAll()
    .data(startCircleData)
    .enter()
    .append('circle')
    .attr('cx', d => d.cx)
    .attr('cy', d => d.cy)
    .attr('r', d => d.r)
    .style('stroke', d => d.color)
    .style('fill', d => d.color);

circles = circles
    .data(endCircleData, d => d.nodeId);

const enterCircles = circles
    .enter()
    .append('circle')
    .classed('big', d => d.r > 10)
    .attr('cx', d => d.cx)
    .attr('cy', d => d.cy)
    .attr('r', d => d.r)
    .style('stroke', d => d.color)
    .style('fill', d => d.color);

const exitCircles = circles.exit<CircleDatum>(); // Note: need to re-type datum type, as the exit selection elements have the 'old data'

// --------------------------------------------------------------------------
// Create Transition from Selection
// --------------------------------------------------------------------------

let updateTransition: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>;
let enterTransition: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>;
let exitTransition: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>;

updateTransition = circles.transition('update');
enterTransition = enterCircles.transition('enter');
exitTransition = exitCircles.transition('exit');

// Test creation from existing transition

let newEnterTransition: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>;
newEnterTransition = enterCircles.transition(enterTransition);

let differentElementTypeTransition: d3Transition.Transition<SVGSVGElement, CircleDatum, HTMLBodyElement, any>;
let differentDatumTypeTransition: d3Transition.Transition<SVGCircleElement, { different: string }, SVGSVGElement, any>;

// Comparable use cases arise e.g. when using an existing transition to generate a new transition
// on a different selection to synchronize them (see e.g. Mike Bostock's Brush & Zoom II Example https://bl.ocks.org/mbostock/f48fcdb929a620ed97877e4678ab15e6)
differentElementTypeTransition = select<HTMLBodyElement, any>('body').selectAll<SVGSVGElement, CircleDatum>('svg').transition();
newEnterTransition = enterCircles.transition(differentElementTypeTransition);
differentDatumTypeTransition = select<SVGSVGElement, any>('svg').selectAll<SVGCircleElement, { different: string }>('circle').transition();
newEnterTransition = enterCircles.transition(differentDatumTypeTransition);

// --------------------------------------------------------------------------
// Test Transition Configuration (Timing)
// --------------------------------------------------------------------------

// duration() ---------------------------------------------------------------

enterTransition = enterTransition.duration(2000); // settable and chainable
const duration: number = enterTransition.duration();

// delay() ---------------------------------------------------------------

enterTransition = enterTransition.delay(500); // settable and chainable
const delay: number = enterTransition.delay();

// ease() ---------------------------------------------------------------

let easingFn: (normalizedTime: number) => number;

enterTransition = enterTransition.ease(t => t); // settable and chainable
easingFn = enterTransition.ease();

// --------------------------------------------------------------------------
// Test sub-selection from transition
// --------------------------------------------------------------------------

interface BodyDatum {
    foo: string;
    bar: number;
}

interface ParagraphDatum {
    text: string;
}

// assume body was previously selected and its data were set to BodyDatum type using .datum()
const bodyTransition: d3Transition.Transition<HTMLBodyElement, BodyDatum, HTMLElement, any> = select<HTMLBodyElement, BodyDatum>('body').transition();

// select() ------------------------------------------------------------------

// assume body was previously selected and its data were set to BodyDatum type using .datum()

let firstDivTransition: d3Transition.Transition<HTMLDivElement, BodyDatum, HTMLElement, any> = bodyTransition.select<HTMLDivElement>('div');

firstDivTransition = bodyTransition.select(function(d, i, g) {
    const that: HTMLBodyElement = this;
    // const that2: SVGElement  = this; // fails, type mismatch
    const datum: BodyDatum = d;
    const index: number = i;
    const group: HTMLBodyElement[] | ArrayLike<HTMLBodyElement> = g;

    console.log('Body Datum foo', d.foo); // d is of type BodyDatum
    return this.querySelector('div')!; // 'this' type is HTMLElement, return type is HTMLDivElement
});

// selectAll() ---------------------------------------------------------------

// assume paragraphs were previously selected and their data were set to ParagraphDatum type

let paragraphsTransition: d3Transition.Transition<HTMLParagraphElement, ParagraphDatum, HTMLDivElement, BodyDatum> = firstDivTransition.selectAll<HTMLParagraphElement, ParagraphDatum>('p');

paragraphsTransition = firstDivTransition.selectAll<HTMLParagraphElement, ParagraphDatum>(function(d, i, g) {
    const that: HTMLDivElement = this;
    // const that2: SVGElement  = this; // fails, type mismatch
    const datum: BodyDatum = d;
    const index: number = i;
    const group: HTMLDivElement[] | ArrayLike<HTMLDivElement> = g;
    console.log('Body Datum foo', d.foo); // d is of type BodyDatum
    return this.querySelectorAll('p'); // 'this' type is HTMLElement, return type is HTMLParagraphElement
});

// filter () -----------------------------------------------------------------

// Scenario 1: Filter retaining the element type of the select group (i.e. no type narrowing during filtering)

enterTransition = enterTransition.filter('.big');

exitTransition = exitTransition.filter(function(d, i, g) {
    const that: SVGCircleElement = this;
    // const that2: HTMLElement  = this; // fails, type mismatch
    const datum: CircleDatum = d;
    const index: number = i;
    const group: SVGCircleElement[] | ArrayLike<SVGCircleElement> = g;
    // console.log(this.x) // fails, x property not defined on SVGCircleElement
    return this.r.baseVal.value < i * d.r; // this-type SVGCircleElement, datum type CircleDatum
});

// Scenario 2: Filtering narrows the type of selected elements in a known way

// assume the class ".any-svg-type" can only be assigned to SVGElements in the DOM
let filteredGElements2: d3Transition.Transition<SVGGElement, any, HTMLElement, any>;

filteredGElements2 = selectAll<SVGElement, any>('.any-svg-type').transition().filter<SVGGElement>('g');
// filteredGElements2 = selectAll('.any-type').transition().filter('g'); // fails without using narrowing generic on filter method

filteredGElements2 = selectAll<SVGElement, any>('.any-svg-type').transition().filter<SVGGElement>(function(d, i, g) {
    const that: SVGElement = this;
    // const that2: HTMLElement  = this; // fails, type mismatch
    const datum: CircleDatum = d;
    const index: number = i;
    const group: SVGElement[] | ArrayLike<SVGElement> = g;
    return that.tagName === 'g' || that.tagName === 'G';
});
// filteredGElements2 = selectAll<SVGElement, any>('.any-svg-type').transition().filter(function(){
//     const that: SVGElement = this;
//     return that.tagName === 'g'|| that.tagName === 'G';
// }); // fails without using narrowing generic on filter method

// --------------------------------------------------------------------------
// Obtain Selection underlying a transition
// --------------------------------------------------------------------------

circles = updateTransition.selection();

// --------------------------------------------------------------------------
// Test Modifying
// --------------------------------------------------------------------------

// Target Value Setting =====================================================

enterTransition = enterTransition // re-assignment test chaining return-type
    .attr('cx', 10) // number
    .attr('stroke', 'blue'); // string

enterTransition = enterTransition // re-assignment test chaining return-type
    .attr('cx', function(d, i, g) {
        const that: SVGCircleElement = this;
        // const that2: HTMLElement  = this; // fails, type mismatch
        const datum: CircleDatum = d;
        const index: number = i;
        const group: SVGCircleElement[] | ArrayLike<SVGCircleElement> = g;
        console.log('Pre-change center x-coordinate: ', this.cx.baseVal.value); // this context SVGCircleElement
        if (group.length > 0) {
            console.log('Owner SVG Element of first group element:', g[0].ownerSVGElement); // group : Array<SVGCircleElement>
        }
        return d.cx; // numeric return value
    })
    .attr('stroke', d => d.color); // string return value

enterTransition = enterTransition
    .style('fill', 'blue') // string
    .style('hidden', false) // boolean
    // .style('stroke', 'green', 'test') // fails, invalid priority value
    .style('stroke', 'green', 'important');

enterTransition = enterTransition
    .style('fill', function(d, i, g) {
        const that: SVGCircleElement = this;
        // const that2: HTMLElement  = this; // fails, type mismatch
        const datum: CircleDatum = d;
        const index: number = i;
        const group: SVGCircleElement[] | ArrayLike<SVGCircleElement> = g;
        console.log('Client Rectangle Top: ', this.getBoundingClientRect().top); // this context SVGCircleElement
        if (g.length > 0) {
            console.log('Radius of first group element:', g[0].r.baseVal.value); // group : Array<SVGCircleElement>
        }
        return d.color; // string return value
    })
    .style('hidden', () => true, null) // boolean return + test: priority = null
    //   .style('stroke', function() { return 'green'; }, 'test') // fails, test: invalid priority value
    .style('stroke', () => 'green', 'important'); // string return + test: priority = 'important';

select<HTMLBodyElement, { test: string }>('body')
    .datum({ test: 'New text.' })
    .transition().duration(500)
    .text('const us start with this transition text.')
    .transition().duration(100)
    .text(d => d.test); // selection datum type

// test, when it is not certain, whether an element of the type to be selected exists

let maybeG1: d3Transition.Transition<SVGCircleElement | null, any, SVGSVGElement, undefined>;
maybeG1 = selectAll<SVGSVGElement, any>('svg')
    .selectAll<SVGCircleElement | null, any>('circle')
    .transition()
    .duration(500)
    .attr('fill', function(d, i, g) {
        const that: SVGCircleElement | null = this;
        // const that2: HTMLElement  = this; // fails, type mismatch
        const datum: CircleDatum = d;
        const index: number = i;
        const group: Array<SVGCircleElement | null> | ArrayLike<SVGCircleElement | null> = g;

        if (that) {
            return that.r.baseVal.value < 5 ? 'slateblue' : 'seagreen';
        } else {
            return null;
        }
    });

// Tweening Function Use =====================================================

enterTransition = enterTransition.attrTween('r', function(d, i, g) {
    // const that2: HTMLElement  = this; // fails, type mismatch
    const datum: CircleDatum = d;
    const index: number = i;
    const group: SVGCircleElement[] | ArrayLike<SVGCircleElement> = g;
    console.log(this.r.baseVal.value); // this type is SVGCircleElement
    return interpolateString(0, d.r); // datum type is CircleDatum
});

exitTransition = exitTransition.styleTween('fill', function(d, i, group) {
    console.log(this.r.baseVal.value); // this type is SVGCircleElement
    const c: string = select(this).style('fill');
    return interpolateRgb(c, d.color); // datum type is CircleDatum
});

let tweenFnAccessor: undefined | ((this: SVGCircleElement, datum?: CircleDatum, i?: number, group?: SVGCircleElement[] | ArrayLike<SVGCircleElement>) => ((t: number) => void));

tweenFnAccessor = updateTransition.textTween();

updateTransition = updateTransition.textTween(null);

exitTransition = exitTransition.textTween(function(d, i, group) {
    console.log(this.r.baseVal.value); // this type is SVGCircleElement
    const c: string = select(this).style('fill');
    return interpolateRgb(c, d.color); // datum type is CircleDatum
});

// chainable
updateTransition = updateTransition.tween('fillColor', null); // remove named tween

// chainable
updateTransition = updateTransition.tween('fillColor', function(d, i, g) {
    // const that2: HTMLElement  = this; // fails, type mismatch
    const datum: CircleDatum = d;
    const index: number = i;
    const group: SVGCircleElement[] | ArrayLike<SVGCircleElement> = g;
    const c: string | null = this.getAttribute('fill');
    const interpolator = interpolateRgb(c ? c : 'blue', d.color); // datum type CircleDatum
    console.log('Radius ', this.r.baseVal.value); // this type SVGCircleElement
    return function(t) {
        this.setAttribute('fill', interpolator(t));
    };
});

tweenFnAccessor = updateTransition.tween('fillColor');

// --------------------------------------------------------------------------
// Merge Transitions
// --------------------------------------------------------------------------

enterTransition = enterTransition.merge(updateTransition);
// enterTransition = enterTransition.merge(wrongElementTypeTransition); // fails, wrong group element type
// enterTransition = enterTransition.merge(wrongDatumTypeTransition); // fails, wrong datum type

// --------------------------------------------------------------------------
// Additional DOM Manipulation
// --------------------------------------------------------------------------

exitTransition.remove();

// --------------------------------------------------------------------------
// Test Event Handling
// --------------------------------------------------------------------------

let listener: undefined | ((this: SVGCircleElement, datum: CircleDatum, index: number, group: SVGCircleElement[] | ArrayLike<SVGCircleElement>) => void);

enterTransition = enterTransition.on('end', function(d, i, g) {
    const that: SVGCircleElement = this;
    // const that2: HTMLElement  = this; // fails, type mismatch
    const datum: CircleDatum = d;
    const index: number = i;
    const group: SVGCircleElement[] | ArrayLike<SVGCircleElement> = g;
    console.log('transition end radius: ', this.r.baseVal.value); // SVGCircleElement
    console.log('end event datum color property: ', d.color); // CircleDatum type
});

// get current listener
listener = enterTransition.on('end');

if (listener) {
    // returns 'this' transition
    enterTransition = enterTransition.on('end', listener); // check chaining return type by re-assigning
}

// remove listener
enterTransition = enterTransition.on('end', null); // check chaining return type by re-assigning

// check end method exists
enterTransition.end();

// --------------------------------------------------------------------------
// Test Control Flow
// --------------------------------------------------------------------------

// each() -------------------------------------------------------------------------------

// each(valueFn: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | ArrayLike<GElement>) => void): Transition<GElement, Datum, PElement, PDatum>;

// returns 'this' transition
enterTransition = enterTransition.each(function(d, i, g) {  // check chaining return type by re-assigning
    const that: SVGCircleElement = this;
    // const that2: HTMLElement  = this; // fails, type mismatch
    const datum: CircleDatum = d;
    const index: number = i;
    const group: SVGCircleElement[] | ArrayLike<SVGCircleElement> = g;
    if (this.r.baseVal.value < d.r) { // this of type SVGCircleElement, datum of type CircleDatum
        console.log('Color of circles with current radius smaller than data radius: ', d.color);
    }
    console.log(g[i].cx.baseVal.value); // group : Array<SVGCircleElement>
});

// call() -------------------------------------------------------------------------------

function changeExitColor(transition: d3Transition.Transition<SVGCircleElement, CircleDatum, any, any>, fill: string, stroke: string) {
    transition
        .style('fill', d => (d.r < 10) ? fill : 'black') // datum type is CircleDatum
        .style('stroke', function(d) { return (this.r.baseVal.value < 10) ? stroke : 'black'; }); // this type is SVGCircleElement
}

// returns 'this' transition
exitTransition = exitTransition.call(changeExitColor, 'midnightblue', 'black'); // check chaining return type by re-assigning

// exitTransition.call(function(transition: d3Transition.Transition<HTMLDivElement, CircleDatum, any, any>): void {
//     // fails, group element types of selection not compatible: SVGCircleElement v HTMLDivElement
// });

// exitTransition.call(function(transition: d3Transition.Transition<SVGCircleElement, DivDatum, any, any>): void {
//     // fails, group datum types of selection not compatible: CircleDatum v DivDatum
// });

// empty() -------------------------------------------------------------------------------

const empty: boolean = enterTransition.empty();

// node() and nodes() --------------------------------------------------------------------

const firstCircleNode: SVGCircleElement = enterTransition.node()!;
const circleNodes: SVGCircleElement[] = enterTransition.nodes();

// size() --------------------------------------------------------------------------------

const size: number = enterTransition.size();

// --------------------------------------------------------------------------
// Sequencing transitions on the same selection
// --------------------------------------------------------------------------

exitTransition = exitTransition
    .duration(200)
    .style('fill', 'red')
    .transition() // sequenced transition on exiting circles.
    .duration(1000)
    .attr('r', 0)
    .remove();
// --------------------------------------------------------------------------
// Tests of Top-Level Transition Functions
// --------------------------------------------------------------------------

// transition(...) ----------------------------------------------------------

let topTransition: d3Transition.Transition<HTMLElement, any, null, undefined>;
topTransition = d3Transition.transition('top');

// test creation from existing transition

topTransition = d3Transition.transition(enterTransition);

// tests with pre-existing datum (typed as string)
// set datum with a type of string
select('html').datum('test');
let topTransition2: d3Transition.Transition<HTMLElement, string, null, undefined>;
topTransition2 = d3Transition.transition<string>('top');
topTransition2 = d3Transition.transition<string>(enterTransition);

// active(...) ----------------------------------------------------------

let updateTransitionActive: d3Transition.Transition<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum> | null;

updateTransitionActive = d3Transition.active<SVGCircleElement, CircleDatum, SVGSVGElement, SVGDatum>(circles.nodes()[0], 'update');

// interrupt(...) ----------------------------------------------------------

const topSelection = topTransition.selection();
const topNode = topSelection.node();

d3Transition.interrupt(topNode);
d3Transition.interrupt(topNode, 'top');

// test selection interrupt
topSelection.interrupt().selectAll('*').interrupt();
