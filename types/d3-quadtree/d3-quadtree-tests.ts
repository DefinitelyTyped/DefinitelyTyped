/**
 * Typescript definition tests for d3/d3-quadtree module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Quadtree from 'd3-quadtree';

// ---------------------------------------------------------------------------
// Preparatory Steps
// ---------------------------------------------------------------------------

// custom type guard
function isLeaf(a: any): a is d3Quadtree.QuadtreeLeaf<any> {
    return a.data !== undefined;
}

let num: number;
let extent: [[number, number], [number, number]];

interface TestDatum {
    x: number;
    y: number;
}

let testDatum: TestDatum;

let testData: TestDatum[] = [
    { x: 10, y: 20 },
    { x: 30, y: 10 },
    { x: 15, y: 80 },
    { x: 50, y: 30 },
    { x: 35, y: 60 },
    { x: 70, y: 20 }
];

let node: d3Quadtree.QuadtreeInternalNode<TestDatum> | d3Quadtree.QuadtreeLeaf<TestDatum>;
let numberAccessor: (d: TestDatum) => number;

let simpleTestData: Array<[number, number]> = [
    [10, 20],
    [30, 10],
    [15, 80],
    [50, 30],
    [35, 60],
    [70, 20]
];

// ---------------------------------------------------------------------------
// Quadtree
// ---------------------------------------------------------------------------

// Create Quadtree ===========================================================

// with default data type [number, number] -----------------------------------

let defaultQuadtree: d3Quadtree.Quadtree<[number, number]>;

// test with data passed in right away
defaultQuadtree = d3Quadtree.quadtree(simpleTestData);

// test without data
defaultQuadtree = d3Quadtree.quadtree();

// with custom data type -----------------------------------------------------

let quadtree: d3Quadtree.Quadtree<TestDatum>;

// test with data passed in right away
quadtree = d3Quadtree.quadtree(testData); // inferred type underlying quadtree TestDatum
quadtree = d3Quadtree.quadtree<TestDatum>(testData); // explicitly typed to TestDatum

// test with data AND accessors passed in right away
quadtree = d3Quadtree.quadtree(
    testData, // data type Array<TestDatum>
    d => d.x, // x accessor with d of type TestDatum
    d => d.y // y accessor with d of type TestDatum
); // inferred type underlying quadtree TestDatum

quadtree = d3Quadtree.quadtree<TestDatum>(testData); // explicitly typed to TestDatum

// test without data
quadtree = d3Quadtree.quadtree<TestDatum>();
// quadtree = d3Quadtree.quadtree(); fails, wrong underlying data type

// Configure Quadtree ========================================================

// x(...) --------------------------------------------------------------------

quadtree = quadtree.x(d => d.x); // d of type TestDatum

numberAccessor = quadtree.x();

// y(...) --------------------------------------------------------------------

quadtree = quadtree.y(d => d.y); // d of type TestDatum

numberAccessor = quadtree.y();

// extent(...) ---------------------------------------------------------------

quadtree = quadtree.extent([[0, 0], [80, 80]]);
extent = quadtree.extent();

// cover(...) ----------------------------------------------------------------

quadtree = quadtree.cover(50, 90);

// add(...) ------------------------------------------------------------------

quadtree = quadtree.add({ x: 35, y: 35 });
// quadtree = quadtree.add({x: 35}); // fails, incompatible data type

// addAll(...) ---------------------------------------------------------------

quadtree = quadtree.addAll(testData);
// quadtree = quadtree.addAll([{x: 35}, {x: 55, y: 13}]); // fails, incompatible data type

// remove(...) ---------------------------------------------------------------

quadtree = quadtree.remove({ x: 35, y: 35 });

// removeAll(...) ------------------------------------------------------------

quadtree = quadtree.removeAll([{ x: 10, y: 20 }, { x: 30, y: 10 }]);

// Use Quadtree ==============================================================

// copy(...) -----------------------------------------------------------------

let copiedQuadtree: d3Quadtree.Quadtree<TestDatum>;

copiedQuadtree = quadtree.copy();

// root(...) -----------------------------------------------------------------

node = quadtree.root();

// data() --------------------------------------------------------------------

testData = quadtree.data();

// size() --------------------------------------------------------------------

num = quadtree.size();

// find() --------------------------------------------------------------------

// without radius
testDatum = quadtree.find(20, 30);

// with radius
testDatum = quadtree.find(20, 30, 10);

// visit() --------------------------------------------------------------------

quadtree = quadtree.visit((node, x0, y0, x1, y1) => {
    let bound: number;
    bound = x0; // number
    bound = y0; // number
    bound = x1; // number
    bound = y1; // number

    let nodeRef: d3Quadtree.QuadtreeInternalNode<TestDatum> | d3Quadtree.QuadtreeLeaf<TestDatum>;
    nodeRef = node;

    if (isLeaf(node)) {
        console.log(node.data);
    } else {
        console.log('Top-Right Quadrant: ', node[0]);
    }
    // void -> undefined return treated as falsey
});

quadtree = quadtree.visit((node, x0, y0, x1, y1) => {
    let bound: number;
    bound = x0; // number
    bound = y0; // number
    bound = x1; // number
    bound = y1; // number

    let nodeRef: d3Quadtree.QuadtreeInternalNode<TestDatum> | d3Quadtree.QuadtreeLeaf<TestDatum>;
    nodeRef = node;

    if (isLeaf(node)) {
        return true; // boolean return
    } else {
        return false;
    }
});

// quadtree = quadtree.visit(function (node, x0, y0, x1, y1) {
//     return 10; // fails wrong return type
// });

// visitAfter() ---------------------------------------------------------------

quadtree = quadtree.visitAfter((node, x0, y0, x1, y1) => {
    let bound: number;
    bound = x0; // number
    bound = y0; // number
    bound = x1; // number
    bound = y1; // number

    let nodeRef: d3Quadtree.QuadtreeInternalNode<TestDatum> | d3Quadtree.QuadtreeLeaf<TestDatum>;
    nodeRef = node;

    if (isLeaf(node)) {
        console.log(node.data);
    } else {
        console.log('Top-Right Quadrant: ', node[0]);
    }
});

// Test  QuadtreeLeaf =========================================================

let leaf: d3Quadtree.QuadtreeLeaf<TestDatum>;
let nextLeaf: d3Quadtree.QuadtreeLeaf<TestDatum> | undefined;

testDatum = leaf.data;

nextLeaf = leaf.next ? leaf.next : undefined;

// Test  QuadtreeInternalNode =================================================

let internalNode: d3Quadtree.QuadtreeInternalNode<TestDatum>;
let quadNode: d3Quadtree.QuadtreeInternalNode<TestDatum> | d3Quadtree.QuadtreeLeaf<TestDatum> | undefined;

quadNode = internalNode[0];
quadNode = internalNode[1];
quadNode = internalNode[2];
quadNode = internalNode[3];
