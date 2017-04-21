/**
 * Typescript definition tests for d3/d3-sankey module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Sankey from 'd3-sankey';
import {select, Selection} from 'd3-selection';

// ---------------------------------------------------------------------------
// Preparatory Steps
// ---------------------------------------------------------------------------

interface SNode extends d3Sankey.SankeyNode {
    nodeId: number;
    name: string;
}

interface SLink extends d3Sankey.SankeyLink<SNode>{
    uom: string;
}

interface DAG {
    nodes: SNode[];
    links: SLink[];
}

const graph: DAG = {
  "nodes": [{
    nodeId: 0,
    name: "node0"
  }, {
    nodeId: 1,
    name: "node1"
  }, {
    nodeId: 2,
    name: "node2"
  }, {
    nodeId: 3,
    name: "node3"
  }, {
    nodeId: 4,
    name: "node4"
  }],
  "links": [{
    source: 0,
    target: 2,
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: 1,
    target: 2,
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: 1,
    target: 3,
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: 0,
    target: 4,
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: 2,
    target: 3,
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: 2,
    target: 4,
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: 3,
    target: 4,
    value: 4,
    uom: 'Widget(s)'
  }]
};

let sNode: SNode;
let sLink: SLink;

let sNodes: SNode[];
let sLinks: SLink[];

let num: number;
let size: [number, number];

const svgLinkPaths = select<SVGSVGElement, undefined>('svg').selectAll<SVGPathElement, SLink>('.linkPath');
let svgPathString: string;

// ---------------------------------------------------------------------------
// Obtain SankeyLayout Generator
// ---------------------------------------------------------------------------

let slgDefault: d3Sankey.SankeyLayout<d3Sankey.SankeyNode, d3Sankey.SankeyLink<d3Sankey.SankeyNode>> = d3Sankey.sankey();
let slgDAG: d3Sankey.SankeyLayout<SNode, SLink> = d3Sankey.sankey<SNode, SLink>();

// ---------------------------------------------------------------------------
// NodeWidth
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.nodeWidth(32);

// Get -----------------------------------------------------------------------

num = slgDAG.nodeWidth();

// ---------------------------------------------------------------------------
// NodePadding
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.nodePadding(8);

// Get -----------------------------------------------------------------------

num = slgDAG.nodePadding();

// ---------------------------------------------------------------------------
// Size
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.size([1200, 800]);

// Get -----------------------------------------------------------------------

size = slgDAG.size();

// ---------------------------------------------------------------------------
// Nodes
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.nodes(graph.nodes);

// Get -----------------------------------------------------------------------

sNodes = slgDAG.nodes();

// ---------------------------------------------------------------------------
// Links
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.links(graph.links);

// Get -----------------------------------------------------------------------

sLinks = slgDAG.links();


// ---------------------------------------------------------------------------
// Compute Layout
// ---------------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.layout(32);

// ---------------------------------------------------------------------------
// Relayout
// ---------------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.relayout();

// ---------------------------------------------------------------------------
// Obtain and Use Link SVG Path Generator
// ---------------------------------------------------------------------------

let pathGen: (link: SLink) => string;

pathGen = slgDAG.link();

svgLinkPaths.attr('d', pathGen);
