/**
 * Typescript definition tests for d3/d3-sankey module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Sankey from 'd3-sankey';
import {select, Selection} from 'd3-selection';
import { Link } from 'd3-shape';

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
    customNodes: SNode[];
    customLinks: SLink[];
}

const graph: DAG = {
  customNodes: [{
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
  customLinks: [{
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
let extent: [[number, number], [number, number]];

const svgLinkPaths = select<SVGSVGElement, undefined>('svg').selectAll<SVGPathElement, SLink>('.linkPath'); // assume mock DOM

let sGraph: d3Sankey.SankeyGraph<SNodeExtra, SLinkExtra>;

// ---------------------------------------------------------------------------
// Obtain SankeyLayout Generator
// ---------------------------------------------------------------------------

let slgDefault: d3Sankey.SankeyLayout<d3Sankey.SankeyGraph<{}, {}>, {}, {}> = d3Sankey.sankey();
let slgDAG: d3Sankey.SankeyLayout<DAG, SNodeExtra, SLinkExtra> = d3Sankey.sankey<DAG, SNodeExtra, SLinkExtra>();

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
// Extent
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.extent([[0, 0], [1200, 800]]);

// Get -----------------------------------------------------------------------

extent = slgDAG.extent();

// ---------------------------------------------------------------------------
// Size
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.size([1200, 800]);

// Get -----------------------------------------------------------------------

size = slgDAG.size();

// ---------------------------------------------------------------------------
// Iterations
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.iterations(40);

// Get -----------------------------------------------------------------------

num = slgDAG.iterations();

// ---------------------------------------------------------------------------
// Nodes
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// Use array and test return type for chainability
slgDAG = slgDAG.nodes(graph.customNodes);

// Use accessor function and test return type for chainability
slgDAG = slgDAG.nodes(d => d.customNodes);

// Get -----------------------------------------------------------------------

let nodesAccessor: (d: DAG) => SNode[] = slgDAG.nodes();

// ---------------------------------------------------------------------------
// Links
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.links(graph.customLinks);

// Use accessor function and test return type for chainability
slgDAG = slgDAG.links(d => d.customLinks);

// Get -----------------------------------------------------------------------

let linksAccessor: (d: DAG) => SLink[] = slgDAG.links();

// ---------------------------------------------------------------------------
// Compute Initial Layout
// ---------------------------------------------------------------------------

sGraph = slgDAG(graph);
// With additional arguments, although here unused.
sGraph = slgDAG(graph, "foo", 50);

// ---------------------------------------------------------------------------
// Update Layout
// ---------------------------------------------------------------------------

sGraph = slgDAG.update(sGraph);

// ---------------------------------------------------------------------------
// Obtain and Use Horizontal Link Path Generator
// ---------------------------------------------------------------------------

let defaultPathGen: Link<any, d3Sankey.SankeyLink<{}, {}>, [number, number]>;
let pathGen: Link<any, SLink, [number, number]>;

defaultPathGen = d3Sankey.sankeyLinkHorizontal();

pathGen = d3Sankey.sankeyLinkHorizontal<SNodeExtra, SLinkExtra>();

// Render to svg path

let svgPathString: string | null = pathGen(sGraph.links[0]);
svgLinkPaths.attr('d', pathGen);

// Render to canvas

declare const ctx: CanvasRenderingContext2D;

pathGen.context(ctx);
pathGen(sGraph.links[0]);

// ---------------------------------------------------------------------------
// Shape test Node/Link related interfaces and types
// ---------------------------------------------------------------------------

// Sankey Node --------------------------------------------------------------

sNodes = sGraph.nodes;
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

sLinks = sGraph.links;
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
