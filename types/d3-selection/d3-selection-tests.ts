/**
 * Typescript definition tests for d3/d3-selection module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Selection from 'd3-selection';

// ---------------------------------------------------------------------------------------
// Some preparatory work for definition testing below
// ---------------------------------------------------------------------------------------

// Generic DOM related variables
const xDoc: Document = document;
let xWindow: Window = window;

interface BodyDatum {
    foo: string;
    bar: number;
}

interface DivDatum {
    padding: string;
    text: string;
}

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
}

interface CircleDatumAlternative {
    nodeId: string;
    name: string;
    label: string;
    cx: number;
    cy: number;
    r: number;
    color: string;
}

// ---------------------------------------------------------------------------------------
// Tests of Top-Level Selection Functions
// ---------------------------------------------------------------------------------------

// test top-level .selection() -----------------------------------------------------------

const topSelection: d3Selection.Selection<HTMLElement, any, null, undefined> = d3Selection.selection();

// test top-level select() ---------------------------------------------------------------

// Using select() with string argument and no type parameters creates selection
// with Group element of type BaseType and datum of type 'any'. The parent element is of type HTMLElement with datum of type 'any'

const baseTypeEl: d3Selection.Selection<d3Selection.BaseType, any, HTMLElement, any> = d3Selection.select('body');

// Using select() with string argument and type parameters creates selection
// with Group element of type HTMLBodyElement and datum of BodyDatum type. The parent element is of type HTMLElement with datum of type 'any'

let body: d3Selection.Selection<HTMLBodyElement, BodyDatum, HTMLElement, any> = d3Selection.select<HTMLBodyElement, BodyDatum>('body');

// Using select() with node argument and no type parameters creates selection
// with Group element of type BaseType and datum of type 'any' The parent element is of type 'null' with datum of type 'undefined'

const baseTypeEl2: d3Selection.Selection<d3Selection.BaseType, any, null, undefined> = d3Selection.select(baseTypeEl.node());
// @ts-expect-error
const body2: d3Selection.Selection<HTMLElement, any, null, undefined> = d3Selection.select(baseTypeEl.node()); // fails as baseTypeEl.node() is of type cannot be assigned to HTMLElement

const body3: d3Selection.Selection<HTMLBodyElement, any, null, undefined> = d3Selection.select(body.node()!); // element types match, but datum is of type 'any' as it cannot be inferred from .node()

// Using select() with node argument and type parameters creates selection
// with Group element of type HTMLBodyElement and datum of BodyDatum type. The parent element is of type 'null' with datum of type 'undefined'

const body4: d3Selection.Selection<HTMLBodyElement, BodyDatum, null, undefined> = d3Selection.select<HTMLBodyElement, BodyDatum>(body.node()!);

//  Explicitly cast body.node() to HTMLBodyElement to narrow selection definition.
const body5: d3Selection.Selection<HTMLBodyElement, BodyDatum, null, undefined> = d3Selection.select<HTMLBodyElement, BodyDatum>(body.node()!);

// @ts-expect-error
d3Selection.select<HTMLBodyElement, BodyDatum>(baseTypeEl.node()!); // fails as baseTypeEl.node() is not of type HTMLBodyElement

// test, when it is not certain, whether an element of the type to be selected exists
let maybeSVG1: d3Selection.Selection<SVGSVGElement | null, any, HTMLElement, undefined>;
maybeSVG1 = d3Selection.select<SVGSVGElement | null, any>('svg');

let maybeSVG2: d3Selection.Selection<SVGSVGElement | null, any, null, undefined>;
// @ts-expect-error
maybeSVG2 = d3Selection.select<SVGSVGElement, any>(maybeSVG1.node()); // fails with strict function types
maybeSVG2 = d3Selection.select<SVGSVGElement | null, any>(maybeSVG1.node());

// fails, as node type mismatches selection type
// @ts-expect-error
const body7: d3Selection.Selection<HTMLBodyElement | null, any, HTMLElement, undefined> = d3Selection.select<HTMLBodyElement | null, any>(maybeSVG1.node());

// test "special case DOM objects"

d3Selection.select(xDoc);
d3Selection.select(xWindow);

// test top-level selectAll() -------------------------------------------------------------

// Using selectAll(), selectAll(null) or selectAll(undefined) creates an empty selection

let emptyRootSelection: d3Selection.Selection<null, undefined, null, undefined> = d3Selection.selectAll();
emptyRootSelection = d3Selection.selectAll(null);
emptyRootSelection = d3Selection.selectAll(undefined);

// Using selectAll(...) with string argument and no type parameters creates selection
// with Group elements of type BaseType and datum of type 'any'. The parent element is of type HTMLElement with datum of type 'any'

const baseTypeElements: d3Selection.Selection<d3Selection.BaseType, any, HTMLElement, any> = d3Selection.selectAll('div');

// Using selectAll() with string argument and type parameters creates selection
// with Group element of type HTMLDivElement and datum of DivDatum type. The parent element is of type HTMLElement with datum of type 'any'

const divElements: d3Selection.Selection<HTMLDivElement, DivDatum, HTMLElement, any> = d3Selection.selectAll<HTMLDivElement, DivDatum>('div');

// Using selectAll(...) with node array argument and no type parameters creates selection
// with Group element of type BaseType and datum of type 'any' The parent element is of type 'null' with datum of type 'undefined'

const baseTypeElements2: d3Selection.Selection<d3Selection.BaseType, any, null, undefined> = d3Selection.selectAll(baseTypeElements.nodes());
// fails, group elements types not of compatible for baseTypeElements
// @ts-expect-error
const divElements2: d3Selection.Selection<HTMLDivElement, any, null, undefined> = d3Selection.selectAll(baseTypeElements.nodes());

// element types match, but datum is of type 'any' as it cannot be inferred from .nodes()
const divElements3: d3Selection.Selection<HTMLDivElement, any, null, undefined> = d3Selection.selectAll(divElements.nodes());

// Using selectAll(...) with node array argument and type parameters creates selection
// with Group element of type HTMLDivElement and datum of DivDatum type. The parent element is of type 'null' with datum of type 'undefined'

const divElements4: d3Selection.Selection<HTMLDivElement, DivDatum, null, undefined> = d3Selection.selectAll<HTMLDivElement, DivDatum>(divElements.nodes());

// @ts-expect-error
d3Selection.selectAll<HTMLDivElement, DivDatum>(baseTypeElements.nodes()); // fails as baseTypeEl.node() is not of type HTMLBodyElement

// selectAll(...) accepts NodeListOf<...> argument

const xSVGCircleElementList: NodeListOf<SVGCircleElement> = document.querySelectorAll('circle');
const circleSelection: d3Selection.Selection<SVGCircleElement, any, null, undefined> = d3Selection.selectAll(xSVGCircleElementList);

// selectAll(...) accepts HTMLCollection, HTMLCollectionOf<...> argument
const documentLinks: d3Selection.Selection<HTMLAnchorElement | HTMLAreaElement, any, null, undefined> = d3Selection.selectAll<HTMLAnchorElement | HTMLAreaElement, any>(document.links);

// ---------------------------------------------------------------------------------------
// Tests of Sub-Selection Functions
// ---------------------------------------------------------------------------------------

// select(...) sub-selection --------------------------------------------------------------

// Expected: datum propagates down from selected element to sub-selected descendant element
// Parent element and Parent Datum of sub-selected element is the same as starting selection

// Using select(...) sub-selection with a string argument.

const svgEl: d3Selection.Selection<SVGSVGElement, SVGDatum, HTMLElement, any> = d3Selection.select<SVGSVGElement, SVGDatum>('svg');

let firstG: d3Selection.Selection<SVGGElement, SVGDatum, HTMLElement, any> = svgEl.select<SVGGElement>('g');
// @ts-expect-error
const firstG_2: d3Selection.Selection<SVGGElement, SVGDatum, SVGSVGElement, any> = svgEl.select<SVGGElement>('g'); // fails, parent element of selection does not change with .select(...)
// firstG = svgEl.select<SVGSVGElement>('svg'); // fails, element type of SVGSVGElement provided, but SVGGElement expected on left-hand side (silly test to begin with)

// test, when it is not certain, whether an element of the type to be selected exists
let maybeG: d3Selection.Selection<SVGGElement | null, SVGDatum, HTMLElement, any>;
// maybeG = svgEl.select<SVGGElement>('g'); // fails, with strictFunctionTypes
maybeG = svgEl.select<SVGGElement | null>('g');

// Using select(...) sub-selection with a selector function argument.

function svgGroupSelector(this: SVGSVGElement, d: SVGDatum, i: number, groups: SVGSVGElement[] | ArrayLike<SVGSVGElement>): SVGGElement {
    return this.querySelector('g')!; // this-type compatible with group element-type to which the selector function will be applied
}

firstG = svgEl.select(svgGroupSelector);

firstG = svgEl.select(function() {
    const that: SVGSVGElement = this;
    // @ts-expect-error
    const that2: HTMLElement  = this; // fails, type mismatch
    console.log('Get <svg> Element width using "this": ', this.width.baseVal.value); // 'this' type is SVGSVGElement
    return this.querySelector('g')!; // this of type SVGSVGElement by type inference
});

firstG = svgEl.select(function(d, i, g) {
    const that: SVGSVGElement = this;
    // @ts-expect-error
    const that2: HTMLElement  = this; // fails, type mismatch
    const datum: SVGDatum = d;
    const index: number = i;
    const group: SVGSVGElement[] | d3Selection.ArrayLike<SVGSVGElement> = g;
    console.log('Get <svg> Element width using "this": ', this.width.baseVal.value); // 'this' type is SVGSVGElement
    console.log('Width in datum:', d.width); // d is type of originating selection element Datum:  SVGDatum
    if (g.length > 1) {
        console.log('Get width of 2nd <svg> Element in group: ', g[1].width.baseVal.value); // type is SVGSVGElement
    }
    return this.querySelector('g')!; // this of type SVGSVGElement by type inference
});

// @ts-expect-error
firstG = svgEl.select(function() {
    return this.querySelector('a'); // fails, return type HTMLAnchorElement is not compatible with SVGGElement expected by firstG
});

// selectAll(...) sub-selection --------------------------------------------------------------

// Expected: datum from selected element(s) does not propagate down to sub-selected descendant elements.
// Group elements of original selection become Parent elements in sub-selection.

// selectAll(), selectAll(null) selectAll(undefined) return empty sub-selection

let emptySubSelection: d3Selection.Selection<null, undefined, SVGSVGElement, SVGDatum> = svgEl.selectAll();
emptySubSelection = svgEl.selectAll(null);
emptySubSelection = svgEl.selectAll(undefined);

// Using selectAll(...) sub-selection with a string argument.

let elementsUnknownData: d3Selection.Selection<SVGGElement, any, SVGSVGElement, SVGDatum> = svgEl.selectAll<SVGGElement, any>('g');
// let elementsAndDataUnknown: d3Selection.Selection<d3Selection.BaseType, any, SVGSVGElement, SVGDatum> = svgEl.selectAll('g'); // fails with strictFunctionTypes
let gElementsOldData: d3Selection.Selection<SVGGElement, CircleDatum, SVGSVGElement, SVGDatum> = svgEl.selectAll<SVGGElement, CircleDatum>('g');

// Using selectAll(...) sub-selection with a selector function argument.

function svgGroupSelectorAll(this: SVGSVGElement, d: SVGDatum, i: number, groups: SVGSVGElement[] | d3Selection.ArrayLike<SVGSVGElement>): NodeListOf<SVGGElement> {
    return this.querySelectorAll('g'); // this-type compatible with group element-type to which the selector function will be applied
}

gElementsOldData = svgEl.selectAll<SVGGElement, CircleDatum>(svgGroupSelectorAll);

function wrongSvgGroupSelectorAll(this: HTMLElement, d: SVGDatum, i: number, groups: HTMLElement[]): NodeListOf<SVGGElement> {
    return this.querySelectorAll('g');
}
// @ts-expect-error
gElementsOldData = svgEl.selectAll<SVGGElement, CircleDatum>(wrongSvgGroupSelectorAll); // fails, wrong this context

gElementsOldData = svgEl.selectAll<SVGGElement, CircleDatum>(function() {
    const that: SVGSVGElement = this;
    // @ts-expect-error
    const that2: HTMLElement  = this; // fails, type mismatch
    console.log('Get <svg> Element width using "this": ', this.width.baseVal.value); // 'this' type is SVGSVGElement
    return this.querySelectorAll('g'); // this of type SVGSVGElement by type inference
});

gElementsOldData = svgEl.selectAll<SVGGElement, CircleDatum>(function(d, i, g) {
    const that: SVGSVGElement = this;
    // @ts-expect-error
    const that2: HTMLElement  = this; // fails, type mismatch
    const datum: SVGDatum = d;
    const index: number = i;
    const group: SVGSVGElement[] | d3Selection.ArrayLike<SVGSVGElement> = g;
    console.log('Get <svg> Element width using "this": ', this.width.baseVal.value); // 'this' type is SVGSVGElement
    console.log('Width in datum:', d.width); // type of d is SVGDatum
    if (g.length > 1) {
        console.log('Get width of 2nd <svg> Element in group: ', g[1].width.baseVal.value); // type of group is SVGSVGElement[]
    }
    return this.querySelectorAll('g');
});

// @ts-expect-error
gElementsOldData = svgEl.selectAll<SVGGElement, CircleDatum>(function() {  // fails, return type HTMLAnchorElement is not compatible with SVGGElement expected by selectAll-typing
    return this.querySelectorAll('a');
});

elementsUnknownData = svgEl.selectAll(svgGroupSelectorAll);

elementsUnknownData = svgEl.selectAll(function() {
    const that: SVGSVGElement = this;
    // @ts-expect-error
    const that2: HTMLElement  = this; // fails, type mismatch
    console.log('Get <svg> Element width using "this": ', this.width.baseVal.value); // 'this' type is SVGSVGElement
    return this.querySelectorAll('g'); // this of type SVGSVGElement by type inference
});

// @ts-expect-error
gElementsUnknownData = svgEl.selectAll(function() { // fails, return type HTMLAnchorElement is not compatible with SVGGElement
    return this.querySelectorAll('a');
});

maybeG.selectAll(function(d, i, g) {
    const that: SVGGElement | null = this;
    // @ts-expect-error
    const that2: SVGGElement = this; // fails with strictNullChecks
    // @ts-expect-error
    const that3: HTMLElement | null  = this; // fails, type mismatch
    const datum: SVGDatum = d;
    const index: number = i;
    const group: Array<SVGGElement | null> | d3Selection.ArrayLike<SVGGElement | null> = g;
    return that ? that.querySelectorAll('circle') : ([] as Iterable<SVGCircleElement>);
});

// Selection Helper methods -------------------------------------------------------------

// selector(...) and selectorAll(...) ----------------------------------------------------

// @ts-expect-error
d3Selection.select<SVGGElement>(d3Selection.selector<SVGGElement>('g')); // fails, selector as argument to top-level select not supported

// supported on sub-selection
firstG = svgEl.select(d3Selection.selector<SVGGElement>('g')); // type parameter of select(...) inferred
// @ts-expect-error
firstG = svgEl.select<SVGGElement>(d3Selection.selector<HTMLDivElement>('div')); // fails, select and selector mismatch

gElementsOldData = svgEl.selectAll<SVGGElement, CircleDatum>(d3Selection.selectorAll<SVGGElement>('g'));

// filter() ------------------------------------------------------------------------------

// Scenario 1: Filter retaining the element type of the select group (i.e. no type narrowing during filtering)

let filteredGElements: d3Selection.Selection<SVGGElement, CircleDatum, SVGSVGElement, SVGDatum>;

filteredGElements = gElementsOldData.filter('.top-level');

filteredGElements = gElementsOldData.filter(function(d, i, g) {
    const that: SVGGElement = this;
    // @ts-expect-error
    const that2: HTMLElement  = this; // fails, type mismatch
    const datum: CircleDatum = d;
    const index: number = i;
    const group: SVGGElement[] | d3Selection.ArrayLike<SVGGElement> = g;
    console.log('Element Id of <g> DOM element: ', this.id); // this context SVGGElement
    if (g.length > 0) {
        console.log('Element Id of first <g> DOM element in group: ', g[0].id); // group: Array<SVGGElement>
    }
    return d.r > 10; // uses CircleDatum
});

// Scenario 2: Filtering narrows the type of selected elements in a known way

// assume the class ".any-svg-type" can only be assigned to SVGElements in the DOM
let filteredGElements2: d3Selection.Selection<SVGGElement, any, HTMLElement, any>;

filteredGElements2 = d3Selection.selectAll<SVGElement, any>('.any-svg-type').filter<SVGGElement>('g');
// @ts-expect-error
filteredGElements2 = d3Selection.selectAll('.any-type').filter('g'); // fails without using narrowing generic on filter method

filteredGElements2 = d3Selection.selectAll<SVGElement, any>('.any-svg-type').filter<SVGGElement>(function() {
    const that: SVGElement = this;
    return that.tagName === 'g' || that.tagName === 'G';
});
// @ts-expect-error
filteredGElements2 = d3Selection.selectAll<SVGElement, any>('.any-svg-type').filter(function() {
    const that: SVGElement = this;
    return that.tagName === 'g' || that.tagName === 'G';
}); // fails without using narrowing generic on filter method

// matcher() -----------------------------------------------------------------------------

filteredGElements = gElementsOldData.filter(d3Selection.matcher('.top-level'));

// selectChild() -------------------------------------------------------------------------

firstG = svgEl.selectChild<SVGGElement>();
firstG = svgEl.selectChild<SVGGElement>('.test');
firstG = svgEl.selectChild<SVGGElement, SVGGElement>((child, i, children) => true);

// selectChild() -------------------------------------------------------------------------

gElementsOldData = svgEl.selectChildren<SVGGElement, CircleDatum>();
gElementsOldData = svgEl.selectChildren<SVGGElement, CircleDatum>('.test');
gElementsOldData = svgEl.selectChildren<SVGGElement, CircleDatum, SVGGElement>((child, i, children) => true);

// selection() ---------------------------------------------------------------------------

firstG = firstG.selection();

// ---------------------------------------------------------------------------------------
// Tests of Modification
// ---------------------------------------------------------------------------------------

// Getter return values tests -------------------------------------------------------------

let flag: boolean;
let str: string;
let dummy: any;

flag = body.classed('any-class');
str = body.attr('class');
str = body.style('background-color');
dummy = body.property('foo'); // arbitrary property
str = body.text();
str = body.html();

// Setters tests -------------------------------------------------------------------------

let circles: d3Selection.Selection<SVGCircleElement, CircleDatumAlternative, HTMLElement, any>;
let divs: d3Selection.Selection<HTMLDivElement, DivDatum, HTMLElement, any>;

// attr(...) Tests

circles = d3Selection.selectAll<SVGCircleElement, CircleDatumAlternative>('circle')
    .attr('cx', 10) // number
    .attr('stroke', 'blue'); // string

circles = circles // re-assignment test chaining return-type
    .attr('cx', function(d, i, g) {
        const that: SVGGElement = this;
        // @ts-expect-error
        const that2: HTMLElement  = this; // fails, type mismatch
        const datum: CircleDatum = d;
        const index: number = i;
        const group: SVGGElement[] | d3Selection.ArrayLike<SVGGElement> = g;
        console.log('Pre-change center x-coordinate: ', this.cx.baseVal.value); // this context SVGCircleElement
        if (g.length > 0) {
            console.log('Owner SVG Element of first group element:', g[0].ownerSVGElement); // group : Array<SVGCircleElement>
        }
        return d.cx; // numeric return value
    })
    .attr('stroke', d => d.color); // string return value

divs = d3Selection.selectAll<HTMLDivElement, DivDatum>('div')
    .attr('contenteditable', false) // boolean
    .attr('contenteditable', () => false); // boolean return value

// classed(...) Tests

divs = divs
    .classed('success', true);

divs = divs
    .classed('zero-px-padding', function(d, i, g) {
        const that: HTMLDivElement = this;
        // @ts-expect-error
        const that2: SVGElement  = this; // fails, type mismatch
        const datum: DivDatum = d;
        const index: number = i;
        const group: HTMLDivElement[] | d3Selection.ArrayLike<HTMLDivElement> = g;
        console.log('Client Rectangle Top: ', this.getBoundingClientRect().top); // this context HTMLDivElement
        if (g.length > 0) {
            console.log('Alignment of first group element:', g[0].align); // group : Array<HTMLDivElement>
        }
        return d.padding === '0px'; // boolean return value
    });

// style(...) Tests

divs = divs
    .style('background-color', 'blue') // string
    .style('hidden', false); // boolean
// @ts-expect-error
divs = divs.style('color', 'green', 'test') // fails, invalid priority value
    .style('color', 'green', 'important');

divs = divs
    .style('padding', function(d, i, g) {
        const that: HTMLDivElement = this;
        // @ts-expect-error
        const that2: SVGElement  = this; // fails, type mismatch
        const datum: DivDatum = d;
        const index: number = i;
        const group: HTMLDivElement[] | d3Selection.ArrayLike<HTMLDivElement> = g;
        console.log('Client Rectangle Top: ', this.getBoundingClientRect().top); // this context HTMLDivElement
        if (g.length > 0) {
            console.log('Alignment of first group element:', g[0].align); // group : Array<HTMLDivElement>
        }
        return d.padding; // string return value
    })
    .style('hidden', () => true, null); // boolean return + test: priority = null
// @ts-expect-error
divs = divs.style('color', () => 'green', 'test') // fails, test: invalid priority value
    .style('color', () => 'green', 'important'); // boolean return + test: priority = 'important';

// property(...) Tests

circles = circles
    .property('__hitchhikersguide__', {
        value: 42,
        survival: 'towel'
    }); // any

circles = circles
    .property('__hitchhikersguide__', function(d, i, g) {
        const that: SVGCircleElement = this;
        // @ts-expect-error
        const that2: HTMLElement  = this; // fails, type mismatch
        const datum: CircleDatumAlternative = d;
        const index: number = i;
        const group: SVGCircleElement[] | d3Selection.ArrayLike<SVGCircleElement> = g;
        console.log('Pre-change center x-coordinate: ', this.cx.baseVal.value); // this context SVGCircleElement
        if (g.length > 0) {
            console.log('Owner SVG Element of first group element:', g[0].ownerSVGElement); // group : Array<SVGCircleElement>
        }
        return {
            value: 42,
            survival: 'towel'
        }; // returns not so arbitrary object, again
    });

// text(...) test

body = body
    .text('Not so meaningful blurp.') // string
    .text(42) // number will be converted to string by D3
    .text(true); // boolean will be converted to string by D3

body = body
    .text(function(d, i, g) {
        const that: HTMLBodyElement = this;
        // @ts-expect-error
        const that2: SVGElement  = this; // fails, type mismatch
        const datum: BodyDatum = d;
        const index: number = i;
        const group: HTMLBodyElement[] | d3Selection.ArrayLike<HTMLBodyElement> = g;
        console.log('Body background color: ', this.bgColor); // this context HTMLBodyElement
        return d.foo; // BodyDatum
    })
    .text(d => 42) // number will be converted to string by D3
    .text(d => true); // boolean will be converted to string by D3

body = body
    .html('<div> 42 </div>');

body = body
    .html(function(d, i, g) {
        const that: HTMLBodyElement = this;
        // @ts-expect-error
        const that2: SVGElement  = this; // fails, type mismatch
        const datum: BodyDatum = d;
        const index: number = i;
        const group: HTMLBodyElement[] | d3Selection.ArrayLike<HTMLBodyElement> = g;
        return `<div> Body Background Color: ${this.bgColor}, Foo Datum: ${d.foo}</div>`; // this context HTMLBodyElement, datum BodyDatum
    });

// ---------------------------------------------------------------------------------------
// Tests of Datum and Data Join
// ---------------------------------------------------------------------------------------

const data: CircleDatum[] = [
    { nodeId: 'c1', cx: 10, cy: 10, r: 5, name: 'foo', label: 'Foo' },
    { nodeId: 'c2', cx: 20, cy: 20, r: 5, name: 'bar', label: 'Bar' },
    { nodeId: 'c3', cx: 30, cy: 30, r: 5, name: 'fooBar', label: 'Foo Bar' }
];

const data2: CircleDatumAlternative[] = [
    { nodeId: 'c1', cx: 10, cy: 10, r: 5, name: 'foo', label: 'Foo', color: 'seagreen' },
    { nodeId: 'c2', cx: 20, cy: 20, r: 5, name: 'bar', label: 'Bar', color: 'midnightblue' },
    { nodeId: 'c4', cx: 10, cy: 15, r: 10, name: 'newbie', label: 'Newbie', color: 'red' }
];

// Tests of Datum -----------------------------------------------------------------------

// TEST GETTER
const bodyDatum: BodyDatum = body.datum();

// TEST REMOVE DATUM
body.datum(null); // removes datum, i.e. return type has group datum type 'undefined'

// TEST SETTER METHODS

let newBodyDatum: { newFoo: string };

// object-based

newBodyDatum = body.datum({ newFoo: 'new foo' }).datum(); // inferred type

// @ts-expect-error
body.datum<BodyDatum>({ newFoo: 'new foo' }); // fails, data type incompatible

// function-based

newBodyDatum = body.datum(function(d, i, g) {
    const that: HTMLBodyElement = this;
    // @ts-expect-error
    const that2: SVGElement  = this; // fails, type mismatch
    const datum: BodyDatum = d;
    const index: number = i;
    const group: HTMLBodyElement[] | d3Selection.ArrayLike<HTMLBodyElement> = g;
    console.log('HTML5 Custom Data Attributes of body: ', this.dataset); // this typings HTMLBodyElement
    console.log('Old foo:', d.foo); // current data of type BodyDatum
    return { newFoo: 'new foo' };
}).datum(); // inferred type

// @ts-expect-error
newBodyDatum = body.datum<BodyDatum>(function(d) { // fails, data type incompatible with return value type
    console.log('HTML5 Custom Data Attributes of body: ', this.dataset); // this typings HTMLBodyElement
    return { newFoo: 'new foo' };
}).datum(); // inferred type

// SCENARIO 1: Fully type-parameterized

// object-based

d3Selection.select<SVGSVGElement, SVGDatum>('#svg-1')
    .select<SVGGElement>('g.circles-group') // first matching element only
    .datum<CircleDatumAlternative[]>(data2)
    .classed('has-transform-property', function(d) {
        console.log('Color of first data element array', d.length > 0 ? d[0].color : 'Data array empty');
        return this.transform !== undefined;
    });

// SCENARIO 2: Partially type-parameterized (To have DOM object type -> 'this' and datum-type in 'classed' method call)

d3Selection.select('#svg-1') // irrelevant typing to get contextual typing in last step of chain
    .select<SVGGElement>('g.circles-group')
    .datum(data2) // new data type inferred
    .classed('has-transform-property', function(d, i, g) {
        const that: SVGGElement = this;
        // @ts-expect-error
        const that2: HTMLElement  = this; // fails, type mismatch
        const datum: CircleDatumAlternative[] = d;
        const index: number = i;
        const group: SVGGElement[] | d3Selection.ArrayLike<SVGGElement> = g;
        console.log('Color of first data element array', d.length > 0 ? d[0].color : 'Data array empty'); // CircleDatumAlternative type
        return this.transform !== undefined;
    });

// below fails, as 'this' in .classed(...) will default to BaseType, which may be null and does not have 'transform' property
d3Selection.select('#svg-1') // irrelevant typing to get contextual typing in last step of chain
    .select('g.circles-group') // missing typing of selected DOM element for use in .classed(...)
    .datum(data2) // new data type inferred
    .classed('has-transform-property', function(d) {
        console.log('Color of first data element array', d.length > 0 ? d[0].color : 'Data array empty'); // CircleDatumAlternative type
        // @ts-expect-error
        return this!.transform !== undefined;
    });

// SCENARIO 3: Only inferred typing (To have datum-type in 'classed' method call, no need for DOM object access)

d3Selection.select('#svg-1') // irrelevant typing to get contextual typing in last step of chain
    .select('g.circles-group') // irrelevant typing to get contextual typing in last step of chain
    .datum(data2) // new data type inferred
    .classed('has-green-first-data-element', function(d, i, g) {
        const that: d3Selection.BaseType = this;
        // @ts-expect-error
        const that2: Element  = this; // fails, type mismatch
        const datum: CircleDatumAlternative[] = d;
        const index: number = i;
        const group: d3Selection.BaseType[] | d3Selection.ArrayLike<d3Selection.BaseType> = g;
        return d.length > 0 && d[0].color === 'green';
    });

// Tests of Data Join --------------------------------------------------------------------

const dimensions: SVGDatum = {
    width: 500,
    height: 300
};

const startCircleData: Iterable<CircleDatumAlternative> = [
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

const endCircleData: CircleDatumAlternative[] = [
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

let circles2: d3Selection.Selection<SVGCircleElement, CircleDatumAlternative, SVGSVGElement, SVGDatum>;

// Test creating initial data-driven circle selection
// and append materialized SVGCircleElement per enter() selection element
// - use data(...) with array-signature and infer data type from array type passed into data(...)
// - use enter() to obtain enter selection
// - materialize svg circles using append(...) with type-parameter and string argument

circles2 = d3Selection.select<SVGSVGElement, any>('#svg2')
    .datum(dimensions)
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .selectAll() // create empty Selection
    .data(startCircleData) // assign data for circles to be added (no previous circles)
    .enter() // obtain enter selection
    .append('circle');

// UPDATE-selection with continuation in data type ---------------------------------

// Assign new data and use key(...) function for mapping
circles2 = circles2 // returned update selection has the same type parameters as original selection, if data type is unchanged
    .data<CircleDatumAlternative>(endCircleData, d => d.nodeId);

// @ts-expect-error
circles2.data<DivDatum>(endCircleData, (d) => d.nodeId); // fails, forced data type parameter and data argument mismatch

// ENTER-selection -----------------------------------------------------------------

// TODO: Related to BaseType Choice issue

let enterElements: d3Selection.Selection<d3Selection.EnterElement, CircleDatumAlternative, SVGSVGElement, SVGDatum>;

enterElements = circles2.enter(); // enter selection

const enterCircles = enterElements
    .append('circle') // enter selection with materialized DOM elements (svg circles)
    .attr('cx', d => d.cx)
    .attr('cy', d => d.cy)
    .attr('r', d => d.r)
    .style('stroke', d => d.color)
    .style('fill', d => d.color);

// EXIT-selection ----------------------------------------------------------------------

// tests exit(...) and remove()

const exitCircles = circles2.exit<CircleDatumAlternative>(); // Note: need to re-type datum type, as the exit selection elements have the 'old data'

exitCircles
    .style('opacity', function(d, i, g) {
        const that: SVGCircleElement = this;
        // @ts-expect-error
        const that2: HTMLElement  = this; // fails, type mismatch
        const datum: CircleDatumAlternative = d;
        const index: number = i;
        const group: SVGCircleElement[] | d3Selection.ArrayLike<SVGCircleElement> = g;
        console.log('Circle Radius exit node: ', this.r.baseVal.value); // this type is SVGCircleElement
        return d.color === 'green' ? 1 : 0; // data type as per .exit<...>() parameterization
    })
    .remove();

// Note: the alternative using only .exit() without typing, will fail, if access to datum properties is attempted.
// If access to d is not required, the short-hand is acceptable e.g. circles2.exit().remove();

const exitCircles2 = circles2.exit(); // Note: Without explicit re-typing to the old data type, the data type default to '{}'
exitCircles2
    .style('opacity', function(d) {
        console.log('Circle Radius exit node: ', this.r.baseVal.value);
        // @ts-expect-error
        return d.color === 'green' ? 1 : 0; // fails, as data type is defaulted to {}. If datum access is required, this should trigger the thought to type .exit<...>
    });

// MERGE ENTER + UPDATE ------------------------------------------------------------------

circles2 = enterCircles.merge(circles2); // merge enter and update selections
declare const transition: d3Selection.TransitionLike<SVGCircleElement, CircleDatumAlternative>;
circles2 = circles2.merge(transition);

// FURTHER DATA-JOIN TESTs (function argument, changes in data type between old and new data)

const matrix = [
    [11975, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907]
];

// SCENARIO 1 - Fully type parameterized, when there is a need for `this` typings in callbacks
// and enforcement of type of data used in data join as input to data(...)

let nMatrix: number[][];
let nRow: number[];

let tr: d3Selection.Selection<HTMLTableRowElement, number[], HTMLTableElement, any>;
tr = d3Selection.select('body')
    .append('table')
    .selectAll()
    .data(matrix)
    .enter().append('tr');

let li: d3Selection.Selection<HTMLLIElement, number, HTMLElement, any>;
li = d3Selection.select('li')
    .data(matrix[0], d => <number> d)
    .enter().append('li');

const tr1 = d3Selection.select("body")
    .append("table")
    .selectAll("tr")
    .data(matrix)
    .join("tr")
    .selectAll("td")
    .data(d => d, e => <number> e)
    .join("td")
    .text(d => d);

nMatrix = tr.data(); // i.e. matrix

let td: d3Selection.Selection<HTMLTableDataCellElement, number, HTMLTableRowElement, number[]>;
td = tr.selectAll()
    .data(d => d) // d : Array<number> inferred (Array[4] of number per parent <tr>)
    .enter().append('td')
    .text(function(d, i, g) {
        const that: HTMLTableDataCellElement = this;
        const datum: number = d;
        const index: number = i;
        const group: HTMLTableDataCellElement[] | d3Selection.ArrayLike<HTMLTableDataCellElement> = g;
        console.log('Abbreviated text for object', this.abbr); // this-type HTMLTableDataCellElement (demonstration only)
        return d;
    }); // d:number inferred

nRow = td.data(); // flattened matrix (Array[16] of number)

// SCENARIO 2 - Completely inferred types, when there is no need for `this` typings

const tr2 = d3Selection.select('body')
    .append('table')
    .selectAll('tr')
    .data(matrix)
    .enter().append('tr');

nMatrix = tr2.data(); // i.e. matrix

const td2 = tr2.selectAll('td')
    .data(d => d) // d : Array<number> inferred (Array[4] of number per parent <tr>)
    .enter().append('td')
    .text(d => d); // d:number inferred

nRow = td2.data(); // flattened matrix (Array[16] of number)

// ---------------------------------------------------------------------------------------
// Tests of Alternative DOM Manipulation
// ---------------------------------------------------------------------------------------

// append(...), creator(...) and create(...) ---------------------------------------------

let newCircle: d3Selection.Selection<SVGCircleElement, BodyDatum, HTMLElement, any>;
newCircle = body.append('circle');

let newDiv: d3Selection.Selection<HTMLDivElement, BodyDatum, HTMLElement, any>;
newDiv = body.append('div');

newDiv = body.append<HTMLDivElement>('div');

// using creator
newCircle = body.append(d3Selection.creator('circle'));
newDiv = body.append(d3Selection.creator('div'));
newDiv = body.append(d3Selection.creator<HTMLDivElement>('custom_div_elem'));
// @ts-expect-error
newDiv = body.append(d3Selection.creator('a'));
// @ts-expect-error
newDiv = body.append(d3Selection.creator<HTMLAnchorElement>('a'));

newDiv = body.append(function(d, i, g) {
    const that: HTMLBodyElement = this;
    // @ts-expect-error
    const that2: SVGElement  = this; // fails, type mismatch
    const datum: BodyDatum = d;
    const index: number = i;
    const group: HTMLBodyElement[] | d3Selection.ArrayLike<HTMLBodyElement> = g;
    console.log('Body element foo property: ', d.foo); // data of type BodyDatum
    // tslint:disable-next-line:no-unnecessary-type-assertion
    return this.ownerDocument!.createElement('div'); // this-type HTMLBodyElement
});

// @ts-expect-error
newDiv = body.append<HTMLDivElement>(function(d) {
    // tslint:disable-next-line:no-unnecessary-type-assertion
    return this.ownerDocument!.createElement('a'); // fails, HTMLDivElement expected by type parameter, HTMLAnchorElement returned
});

// @ts-expect-error
newDiv = body.append(function(d) {
    // tslint:disable-next-line:no-unnecessary-type-assertion
    return this.ownerDocument!.createElement('a'); // fails, HTMLDivElement expected by inference, HTMLAnchorElement returned
});

// create a detached element

let detachedCircle: d3Selection.Selection<SVGCircleElement, undefined, null, undefined>;

detachedCircle = d3Selection.create('circle');

let detachedDiv: d3Selection.Selection<HTMLDivElement, undefined, null, undefined>;

detachedDiv = d3Selection.create('div');
detachedDiv = d3Selection.create<HTMLDivElement>('custom_div_elem');

// insert(...) ---------------------------------------------------------------------------

// Two arguments; the first can be string, selection, or a

const typeValueFunction = function(
  this: HTMLBodyElement,
  d: BodyDatum,
  i: number,
  g: HTMLBodyElement[] | d3Selection.ArrayLike<HTMLBodyElement>
) {
    // tslint:disable-next-line:no-unnecessary-type-assertion
    return this.ownerDocument!.createElement('p'); // this-type HTMLParagraphElement
};

const beforeValueFunction = function(
  this: HTMLBodyElement,
  d: BodyDatum,
  i: number,
  g: HTMLBodyElement[] | d3Selection.ArrayLike<HTMLBodyElement>
) {
    return this.children[0];
};

let newParagraph: d3Selection.Selection<HTMLParagraphElement, BodyDatum, HTMLElement, any>;

// 1 args, with 3 possibilities each, makes 3 possible combinations:
newParagraph = body.insert('p', 'p.second-paragraph');
newParagraph = body.insert('p', beforeValueFunction);
newParagraph = body.insert('p');

// 2 args, with 3 possibilities each, makes 9 possible combinations:
newParagraph = body.insert<HTMLParagraphElement>('p', 'p.second-paragraph');
newParagraph = body.insert<HTMLParagraphElement>('p', beforeValueFunction);
newParagraph = body.insert<HTMLParagraphElement>('p');

newParagraph = body.insert(d3Selection.creator<HTMLParagraphElement>('p'), 'p.second-paragraph');
newParagraph = body.insert(d3Selection.creator<HTMLParagraphElement>('p'), beforeValueFunction);
newParagraph = body.insert(d3Selection.creator<HTMLParagraphElement>('p'));

newParagraph = body.insert(typeValueFunction, 'p.second-paragraph');
newParagraph = body.insert(typeValueFunction, beforeValueFunction);
newParagraph = body.insert(typeValueFunction);

// clone(...) ----------------------------------------------------------------------------

let clonedParagraph: d3Selection.Selection<HTMLParagraphElement, BodyDatum, HTMLElement, any>;

// shallow clone
clonedParagraph = newParagraph.clone();

// deep clone

newParagraph.append('span');
clonedParagraph = newParagraph.clone(true);

// sort(...) -----------------------------------------------------------------------------

// NB: Return new selection of same type
circles2 = circles2.sort((a, b) => b.r - a.r);

// order(...) ----------------------------------------------------------------------------

// returns 'this' selection
circles2 = circles2.order();

// raise() -------------------------------------------------------------------------------

// returns 'this' selection
circles2 = circles2.raise();

// lower() -------------------------------------------------------------------------------

// returns 'this' selection
circles2 = circles2.lower();

// ---------------------------------------------------------------------------------------
// Control FLow
// ---------------------------------------------------------------------------------------

// empty() -------------------------------------------------------------------------------
const emptyFlag = gElementsOldData.empty();

// node() and nodes() --------------------------------------------------------------------

const bodyNode: HTMLBodyElement | null = body.node();

const gElementsNodes: SVGGElement[] = gElementsOldData.nodes();

// size() --------------------------------------------------------------------------------

const size: number = gElementsOldData.size();

// [Symbol.iterator]() --------------------------------------------------------------------------------

const iterator: Iterator<SVGElement> = gElementsOldData[Symbol.iterator]();

// each() -------------------------------------------------------------------------------

// returns 'this' selection
circles = circles.each(function(d, i, g) {  // check chaining return type by re-assigning
    const that: SVGCircleElement = this;
    // @ts-expect-error
    const that2: HTMLElement  = this; // fails, type mismatch
    const datum: CircleDatum = d;
    const index: number = i;
    const group: SVGCircleElement[] | d3Selection.ArrayLike<SVGCircleElement> = g;
    if (this.r.baseVal.value < d.r) { // this of type SVGCircleElement, datum of type CircleDatumAlternative
        d3Selection.select(this).attr('r', d.r);
    }
    console.log(g[i].cx.baseVal.value); // group : Array<SVGCircleElement>
});

// call() -------------------------------------------------------------------------------

function enforceMinRadius(selection: d3Selection.Selection<SVGCircleElement, CircleDatumAlternative, any, any>, minRadius: number): void {
    selection.attr('r', function(d) {
        const r: number = +d3Selection.select(this).attr('r');
        return Math.max(r, minRadius);
    });
}

// returns 'this' selection
circles = circles.call(enforceMinRadius, 40); // check chaining return type by re-assigning

// @ts-expect-error
circles.call((selection: d3Selection.Selection<HTMLDivElement, CircleDatum, any, any>) => {
    // fails, group element types of selection not compatible: SVGCircleElement v HTMLDivElement
});

// @ts-expect-error
circles.call((selection: d3Selection.Selection<SVGCircleElement, DivDatum, any, any>) => {
    // fails, group datum types of selection not compatible: CircleDatumAlternative v DivDatum
});

// ---------------------------------------------------------------------------------------
// Tests of Event Handling
// ---------------------------------------------------------------------------------------

// on(...) -------------------------------------------------------------------------------

let listener: undefined | ((this: HTMLBodyElement, event: any, datum: BodyDatum) => void);

body = body.on('click', function(event, d) {
    const that: HTMLBodyElement = this;
    // @ts-expect-error
    const that2: SVGElement  = this; // fails, type mismatch
    const datum: BodyDatum = d;
    console.log('onclick print body background color: ', this.bgColor); // HTMLBodyElement
    console.log('onclick print "foo" datum property: ', d.foo); // BodyDatum type
});

// get current listener
listener = body.on('click');

if (listener) {
    // returns 'this' selection
    body = body.on('click', listener); // check chaining return type by re-assigning
}

// remove listener
body = body.on('click', null); // check chaining return type by re-assigning

// dispatch(...) -------------------------------------------------------------------------

const fooEventParam: d3Selection.CustomEventParameters = {
    cancelable: true,
    bubbles: true,
    detail: [1, 2, 3, 4]
};

// returns 'this' selection
body = body.dispatch('fooEvent', fooEventParam); // re-assign for chaining test;

body = body.dispatch('fooEvent', function(d, i, g) { // re-assign for chaining test;
    const that: HTMLBodyElement = this;
    // @ts-expect-error
    const that2: SVGElement  = this; // fails, type mismatch
    const datum: BodyDatum = d;
    const index: number = i;
    const group: HTMLBodyElement[] | d3Selection.ArrayLike<HTMLBodyElement> = g;
    let eParam: d3Selection.CustomEventParameters;
    console.log('fooEvent dispatch body background color', this.bgColor);
    eParam = {
        cancelable: true,
        bubbles: true,
        detail: d.foo // d is of type BodyDatum
    };
    return eParam;
});

// pointer() and pointers() ---------------------------------------------------------------------

let position: [number, number];
let positions: Array<[number, number]>;
body = body.on('click', (event) => {
    position = d3Selection.pointer(event);
    position = d3Selection.pointer(event, event.currentTarget);
    positions = d3Selection.pointers(event);
    positions = d3Selection.pointers(event, event.currentTarget);
});

// ---------------------------------------------------------------------------------------
// Tests of style
// ---------------------------------------------------------------------------------------

declare let n: Element;
str = d3Selection.style(n, 'opacity');

// ---------------------------------------------------------------------------------------
// Tests of Local
// ---------------------------------------------------------------------------------------

const xElement: Element = d3Selection.select<Element, any>('foo').node()!;
const foo: d3Selection.Local<number[]> = d3Selection.local<number[]>();
const propName: string = foo.toString();

// direct get & set on Local<T> object
let array: number[] | undefined = foo.get(xElement);
array = foo.set(xElement, [1, 2, 3]);

// test read & write of .property() access to locals
array = d3Selection.select(xElement)
    .property(foo, [3, 2, 1])
    .property(foo, () => [999])
    .property(foo);

foo.remove(xElement);

// ---------------------------------------------------------------------------------------
// Tests of Namespace
// ---------------------------------------------------------------------------------------

const predefinedNamespaces: d3Selection.NamespaceMap = d3Selection.namespaces;

const svgNamespace: string = predefinedNamespaces['svg'];

const svgTextObject: d3Selection.NamespaceLocalObject | string = d3Selection.namespace('svg:text');

predefinedNamespaces['dummy'] = 'http://www.w3.org/2020/dummynamespace';

// ---------------------------------------------------------------------------------------
// Tests of Window
// ---------------------------------------------------------------------------------------

xWindow = d3Selection.window(xElement);
xWindow = d3Selection.window(xDoc);
xWindow = d3Selection.window(xWindow);

// ---------------------------------------------------------------------------------------
// JOIN - Convenient alternative to explicit enter update and exit methods
// ---------------------------------------------------------------------------------------

interface OldDatum {
    oldData: number;
}

interface Datum {
    data: string;
}

let selText: d3Selection.Selection<SVGTextElement, Datum, SVGSVGElement, SVGDatum>;
let selTextAndCircle: d3Selection.Selection<SVGTextElement | SVGCircleElement, Datum, SVGSVGElement, SVGDatum>;

const text = svgEl.selectAll<SVGTextElement, OldDatum>('text').data<Datum>([{data: 'a'}]);

declare const r: () => boolean;

// with only enter param

selText = text.join('text');
selText = text.join<SVGTextElement>('custom');
selText = text.join(enter => enter.append('text').text(d => d.data));

// @ts-expect-error
selText = text.join('circle');
// @ts-expect-error
selText = text.join<SVGCircleElement>('custom');
// @ts-expect-error
selText = text.join(enter => enter.append('circle'));

selTextAndCircle = text.join('circle');
selTextAndCircle = text.join<SVGCircleElement>('custom');
selTextAndCircle = text.join(enter => enter.append('circle').text(d => d.data));

// with all param

selText = text.join(
    'text',
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.data).remove(),
);

selText = text.join<SVGTextElement>(
    'custom',
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.data).remove(),
);

selText = text.join(
    enter => enter.append('text').text(d => d.data),
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.data).remove(),
);

selTextAndCircle = text.join(
    'circle',
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.data).remove(),
);

selTextAndCircle = text.join<SVGCircleElement>(
    'custom',
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.data).remove(),
);

selTextAndCircle = text.join(
    enter => enter.append('circle').text(d => d.data),
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.data).remove(),
);

// with all param and old datum

selText = text.join<'text', OldDatum>(
    'text',
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => `Bye ${d.oldData}`).remove(),
);

selText = text.join<SVGTextElement, OldDatum>(
    'custom',
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => `Bye ${d.oldData}`).remove(),
);

selText = text.join<SVGTextElement, OldDatum>(
    enter => enter.append('text').text(d => d.data),
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.oldData).remove(),
);

selTextAndCircle = text.join<'circle', OldDatum>(
    'circle',
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.oldData).remove(),
);

selTextAndCircle = text.join<SVGCircleElement, OldDatum>(
    'circle',
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.oldData).remove(),
);

selTextAndCircle = text.join<SVGCircleElement, OldDatum>(
    enter => enter.append('circle').text(d => d.data),
    update => r() ? undefined : update.text(d => d.data).attr('fill', 'gray'),
    exit => exit.text(d => d.oldData).remove(),
);

// Example from: https://github.com/d3/d3-selection/issues/194#issuecomment-427577484
const groups = svgEl.selectAll<SVGGElement, {}>('g')
    .data([{r: 10, text: 'hi'}])
    .join(
        (enter) => {
            const g = enter.append('g').attr('class', 'tick');
            g.append('circle');
            g.append('text');
            return g;
        },
        () => undefined,
        (exit) => exit.remove()
    )
    .attr('transform', (_, i) => `translate(0, ${i})`);

    groups.select('circle')
        .attr('r', d => d.r);

    groups.select('text')
        .text(d => d.text)
        .attr('dy', '0.32em');

declare const mockTransition: <GElement extends d3Selection.BaseType, Datum>(
    selection: d3Selection.Selection<GElement, Datum, HTMLElement, unknown>
) => d3Selection.TransitionLike<GElement, Datum>;

d3Selection
    .select(document.body)
    .selectAll<HTMLElement, number | string>("p")
    .datum(function() { return this.textContent; })
    .data([1, 3], d => d!)
    .join(
        enter => mockTransition(enter.append("p").attr("class", "enter").text(d => d)),
        update => mockTransition(update.attr("class", "update")),
        exit => mockTransition(exit.attr("class", "exit"))
    );
