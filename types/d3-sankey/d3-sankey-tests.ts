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

// Create interfaces for the user-provided node/link attributes, which are NOT mandated or calculated by
// the Sankey layout generator. The latter are reflected in the SankeyNode and SankeyLink interfaces provided
// by the definitions file
interface SNodeExtra {
    nodeId: number;
    name: string;
}

interface SLinkExtra {
    uom: string;
}

// For convenience
type SNode = d3Sankey.SankeyNode<SNodeExtra, SLinkExtra>;
type SLink = d3Sankey.SankeyLink<SNodeExtra, SLinkExtra>;

interface DAG {
    nodes: SNode[];
    links: SLink[];
}

const graph: DAG = {
  nodes: [{
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
  links: [{
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

let sNodes: SNode[];
let sLinks: SLink[];

let num: number;
let numMaybe: number | undefined;
let str: string;
let size: [number, number];

const svgLinkPaths = select<SVGSVGElement, undefined>('svg').selectAll<SVGPathElement, SLink>('.linkPath'); // assume mock DOM

// ---------------------------------------------------------------------------
// Obtain SankeyLayout Generator
// ---------------------------------------------------------------------------

let slgDefault: d3Sankey.SankeyLayout<{}, {}> = d3Sankey.sankey();
let slgDAG: d3Sankey.SankeyLayout<SNodeExtra, SLinkExtra> = d3Sankey.sankey<SNodeExtra, SLinkExtra>();

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
slgDAG = slgDAG.layout(22);

// ---------------------------------------------------------------------------
// Relayout
// ---------------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.relayout();

// ---------------------------------------------------------------------------
// Obtain and Use Link SVG Path Generator
// ---------------------------------------------------------------------------

let pathGen: d3Sankey.SankeyLinkPathGenerator<SNodeExtra, SLinkExtra>;

pathGen = slgDAG.link();

// Adjust Link SVG Path Generator curvature ----------------------------------

// test return type
pathGen = pathGen.curvature(0.6);
num = pathGen.curvature();

// uses

let svgPathString: string = pathGen(slgDAG.links()[0]);
svgLinkPaths.attr('d', pathGen);

// ---------------------------------------------------------------------------
// Shape test Node/Link related interfaces and types
// ---------------------------------------------------------------------------

// Sankey Node --------------------------------------------------------------

let sNode = sNodes[0];

// User-specified extra properties:

num = sNode.nodeId;
str = sNode.name;

// Sankey Layout calculated (if layout has been run, otherwise undefined):

numMaybe = sNode.dx;
numMaybe = sNode.x;
numMaybe = sNode.dy;
numMaybe = sNode.y;
numMaybe = sNode.value;

let linksArrMaybe: SLink[] | undefined;

linksArrMaybe = sNode.sourceLinks;
linksArrMaybe = sNode.targetLinks;

// Sankey Link --------------------------------------------------------------

let sLink = sLinks[0];

// User-specified extra properties:

str = sLink.uom;

// Sankey Layout mandated link properties:

num = sLink.value;

// Node depending on initialization strategy and whether
// layout(...) was invoked, the source and target nodes may be numbers
// objects without the Sankey layout coordinates, or objects with calculated
// information
let numOrSankeyNode: number  | SNode;

numOrSankeyNode = sLink.source;
numOrSankeyNode = sLink.target;

// Sankey Layout calculated (if layout has been run, otherwise undefined):

numMaybe = sLink.sy;
numMaybe = sLink.ty;
numMaybe = sLink.dy;
