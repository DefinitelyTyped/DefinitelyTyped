/**
 * Typescript definition tests for d3/d3-drag module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Drag from 'd3-drag';
import { ArrayLike, event, select, Selection } from 'd3-selection';

// NB: Consider alternative approach to getting live event-binding
// when using webpack as suggested by @ocombe in response to
// event binding question https://github.com/d3/d3-zoom/issues/32#issuecomment-229889310
// d3.getEvent = () => require("d3-selection").event;
//
// This can be used in callbacks

// -----------------------------------------------------------------------------
// Preparatory Steps
// -----------------------------------------------------------------------------

interface CircleDatum {
    nodeId: string;
    name: string;
    label: string;
    x: number;
    y: number;
    r: number;
    color: string;
}

interface CustomSubject {
    nodeId: string;
    name: string;
    cx: number;
    cy: number;
    r: number;
}

const svg: SVGSVGElement = select<SVGSVGElement, any>('svg').node()!; // mock

const circles: Selection<SVGCircleElement, CircleDatum, SVGSVGElement, any> = select<SVGSVGElement, any>('svg').selectAll<SVGCircleElement, CircleDatum>('circle'); // mock

// -----------------------------------------------------------------------------
// Test Define DragBehavior
// -----------------------------------------------------------------------------

// variables to hold drag behaviors to be attached to svg circles with CircleDatum datum type

// This drag behavior will use the default subject accessor which returns the current datum of the dragged element,
// or, if the datum is undefined, returns the position object {x: number, y: number} for the dragged element.
let circleDrag: d3Drag.DragBehavior<SVGCircleElement, CircleDatum, CircleDatum | d3Drag.SubjectPosition>;

// This drag behavior will use a custom subject accessor to set the subject of the drag event
let circleCustomDrag: d3Drag.DragBehavior<SVGCircleElement, CircleDatum, CustomSubject | d3Drag.SubjectPosition>;

// create new drag behavior ------------------------------------------

circleDrag = d3Drag.drag<SVGCircleElement, CircleDatum>(); // Use short form method
circleCustomDrag = d3Drag.drag<SVGCircleElement, CircleDatum, CustomSubject | d3Drag.SubjectPosition>();

// set and get container element/accessor ----------------------------

let containerAccessor: (this: SVGCircleElement, d: CircleDatum, i: number, group: SVGCircleElement[] | ArrayLike<SVGCircleElement>) => d3Drag.DragContainerElement;

containerAccessor = function(d, i, group) {
    console.log('Node Id of circle: ', d.nodeId);
    // console.log(this.a); // fails, a is not a property of SVGCircleElement
    /* tslint:disable-next-line:no-unnecessary-type-assertion */
    return this.ownerSVGElement!; // this-type is SVGCircleElement
};

// Test chainability
circleDrag = circleDrag
    .container(function(d, i, group) { // container accessor function setter
        console.log('Node Id of circle: ', d.nodeId); // CircleDatum type
        // console.log(this.a); // fails, a is not a property of SVGCircleElement
        /* tslint:disable-next-line:no-unnecessary-type-assertion */
        return this.ownerSVGElement!; // this-type is SVGCircleElement
    });

// Test chainability
circleDrag = circleDrag
    .container(containerAccessor);

// Test chainability
circleDrag = circleDrag
    .container(svg); // fixed container element

containerAccessor = circleDrag.container();

// clickDistance(...) ---------------------------------------------------------

circleDrag = circleDrag.clickDistance(5);

const distance: number  = circleDrag.clickDistance();

// set and get filter ---------------------------------------------------------

let filterFn: (this: SVGCircleElement, datum: CircleDatum, index: number, group: SVGCircleElement[] | NodeListOf<SVGCircleElement>) => boolean;

filterFn = function(d) {
    return (d.color !== 'green' && this.r.baseVal.value < 10) ? !event.button : true; // 'this' is SVGCircleElement and d is CircleDatum
};

// chainable
circleDrag = circleDrag.filter(function(d, i, group) {
    return (d.color !== 'green' && this.r.baseVal.value < 10) ? !event.button : true; // 'this' is SVGCircleElement and d is CircleDatum
});

// getter
filterFn = circleDrag.filter();

// set and get touchable ---------------------------------------------------------

let touchableFn: (this: SVGCircleElement, datum: CircleDatum, index: number, group: SVGCircleElement[] | NodeListOf<SVGCircleElement>) => boolean;

// chainable

circleDrag = circleDrag.touchable(true);

circleDrag = circleDrag.touchable(function(d, i, group) {
    const that: SVGCircleElement = this;
    const datum: CircleDatum = d;
    const g: SVGCircleElement[] | ArrayLike<SVGCircleElement> = group;
    return "ontouchstart" in this && datum.color === 'green';
});

// getter
touchableFn = circleDrag.touchable();

// set and get subject ---------------------------------------------------------

circleCustomDrag.subject(function(d, i, g) {
    // Cast event type for completeness, otherwise event is of type any.
    const e = <d3Drag.D3DragEvent<SVGCircleElement, CircleDatum, CustomSubject | d3Drag.SubjectPosition>> event;
    const that: SVGCircleElement = this;
    const datum: CircleDatum = d;
    const index: number = i;
    const group: SVGCircleElement[] | ArrayLike<SVGCircleElement> = g;

    if (d == null) {
        return { x: e.x, y: e.y };
    } else {
        // remap input data to subject output data
        return {
            nodeId: d.nodeId,
            name: d.name,
            cx: d.x,
            cy: d.y,
            r: d.r
        };
    }
});

// test getter
let subjectAccessor: (this: SVGCircleElement, datum: CircleDatum, index: number, group: SVGCircleElement[] | NodeListOf<SVGCircleElement>) => CustomSubject | d3Drag.SubjectPosition;

subjectAccessor = circleCustomDrag.subject();

// set and get event handler ---------------------------------------------------

function dragstarted(this: SVGCircleElement, d: CircleDatum) {
    // cast d3 event to drag event. Otherwise, d3 event is currently defined as type 'any'
    const e = <d3Drag.D3DragEvent<SVGCircleElement, CircleDatum, CircleDatum | d3Drag.SubjectPosition>> event;
    e.sourceEvent.stopPropagation();
    select(this).classed('dragging', true);
}

function dragged(this: SVGCircleElement, d: CircleDatum) {
    // cast d3 event to drag event. Otherwise, d3 event is currently defined as type 'any'
    const e = <d3Drag.D3DragEvent<SVGCircleElement, CircleDatum, CircleDatum | d3Drag.SubjectPosition>> event;
    select(this).attr('cx', d.x = e.x).attr('cy', d.y = e.y);
}

function dragended(this: SVGCircleElement, d: CircleDatum) {
    select(this).classed('dragging', false);
}

function wrongDragHandler1(this: SVGCircleElement, d: { wrongData: number }) {
    // do whatever;
}

function wrongDragHandler2(this: SVGRectElement, d: CircleDatum) {
    // do whatever;
}

// Test chainability
circleDrag = circleDrag
    // .on('start', wrongDragHandler1) // fails, wrong datum type in handler
    // .on('start', wrongDragHandler2) // fails, wrong this-type for DOM Element context
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);

// remove event listeners for a drag event type
circleDrag.on('start.tmp', null);

let handler: ((this: SVGCircleElement, d: CircleDatum, i: number, group: SVGCircleElement[] | NodeListOf<SVGCircleElement>) => void) | undefined = circleDrag.on('start');
// fails, wrong dragged DOM event
// let wrongHandler1: ((this:SVGRectElement, d:CircleDatum, i: number, group: SVGRectElement[] | NodeListOf<SVGRectElement>)=> void) | undefined = circleDrag.on('start');
// fails, handler with wrong datum type
// let wrongHandler2: ((this:SVGCircleElement, d:{test: number}, i: number, group: SVGCircleElement[] | NodeListOf<SVGCircleElement>)=> void) | undefined = circleDrag.on('start');
// -----------------------------------------------------------------------------
// Test Attach Drag Behavior
// -----------------------------------------------------------------------------

circles.call(circleDrag);

const wrongSelection: Selection<HTMLDivElement, any, any, any> = select<HTMLDivElement, any>('div');

// wrongSelection.call(circleDrag); // fails, as dragged elements are not of type specified for drag behavior

// -----------------------------------------------------------------------------
// Test Drag Event Interface
// -----------------------------------------------------------------------------

let e: d3Drag.D3DragEvent<SVGCircleElement, CircleDatum, CircleDatum | d3Drag.SubjectPosition> = event;

circleDrag = e.target; // target return drag behavior

const type: string = e.type;
const subject: CircleDatum | d3Drag.SubjectPosition = e.subject;
const x: number = e.x;
const y: number = e.y;
const dx: number = e.dx;
const dy: number = e.dy;
const identified: 'mouse' | number = e.identifier;
const active: number = e.active;
const sourceEvent: any = e.sourceEvent;

// register temporary event listeners (i.e. for current drag gesture in progress only)
// As always, the below tests are for signature only, no functional purpose

// remove event listeners for a given event type
e = e.on('start.tmp', null); // chainability test through reassignment

e = e.on('drag', dragged);
// e = e.on('drag', wrongDragHandler1); // fails, wrong datum type in handler
// e = e.on('drag', wrongDragHandler2); // fails, wrong this-type for DOM Element context

handler = e.on('dragged');
// fails, wrong dragged DOM event
// let wrongHandler3: ((this:SVGRectElement, d:CircleDatum, i: number, group: SVGRectElement[] | NodeListOf<SVGRectElement>)=> void) | undefined = e.on('dragged');
// fails, handler with wrong datum type
// let wrongHandler4: ((this:SVGCircleElement, d:{test: number}, i: number, group: SVGCircleElement[] | NodeListOf<SVGCircleElement>)=> void) | undefined = e.on('dragged');

// -----------------------------------------------------------------------------
// Test dragDisable() and dragEnable()
// -----------------------------------------------------------------------------

const w: Window = window;

d3Drag.dragDisable(w);

d3Drag.dragEnable(w);

d3Drag.dragEnable(w, true);
