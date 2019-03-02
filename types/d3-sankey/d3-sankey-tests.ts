/**
 * Typescript definition tests for d3/d3-sankey module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Sankey from 'd3-sankey';
import { select, Selection } from 'd3-selection';
import { Link } from 'd3-shape';

// ---------------------------------------------------------------------------
// Preparatory Steps
// ---------------------------------------------------------------------------

// Create interfaces for the user-provided node/link attributes, which are NOT mandated or calculated by
// the Sankey layout generator. The latter are reflected in the SankeyNode and SankeyLink interfaces provided
// by the definitions file
interface SNodeExtra {
  name: string;
}

interface SNodeExtraCustomId {
  nodeId: string;
  name: string;
}

interface SLinkExtra {
  uom: string;
}

// For convenience
type SNode = d3Sankey.SankeyNode<SNodeExtra, SLinkExtra>;
type SNodeCustomId = d3Sankey.SankeyNode<SNodeExtraCustomId, SLinkExtra>;
type SLink = d3Sankey.SankeyLink<SNodeExtra, SLinkExtra>;
type SLinkCustomId = d3Sankey.SankeyLink<SNodeExtraCustomId, SLinkExtra>;

interface DAG {
  customNodes: SNode[];
  customLinks: SLink[];
}

interface DAGCustomId {
  customNodes: SNodeCustomId[];
  customLinks: SLinkCustomId[];
}

const graphDefault: DAG = {
  customNodes: [{
    name: "node0"
  }, {
    name: "node1"
  }, {
    name: "node2"
  }, {
    name: "node3"
  }, {
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

const graphCustomId: DAGCustomId = {
  customNodes: [{
    nodeId: "n0",
    name: "node0"
  }, {
    nodeId: "n1",
    name: "node1"
  }, {
    nodeId: "n2",
    name: "node2"
  }, {
    nodeId: "n3",
    name: "node3"
  }, {
    nodeId: "n4",
    name: "node4"
  }],
  customLinks: [{
    source: "n0",
    target: "n2",
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: "n1",
    target: "n2",
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: "n1",
    target: "n3",
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: "n0",
    target: "n4",
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: "n2",
    target: "n3",
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: "n2",
    target: "n4",
    value: 2,
    uom: 'Widget(s)'
  }, {
    source: "n3",
    target: "n4",
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

const slgDefault: d3Sankey.SankeyLayout<d3Sankey.SankeyGraph<{}, {}>, {}, {}> = d3Sankey.sankey();
let slgDAG: d3Sankey.SankeyLayout<DAG, SNodeExtra, SLinkExtra> = d3Sankey.sankey<DAG, SNodeExtra, SLinkExtra>();
let slgDAGCustomId: d3Sankey.SankeyLayout<DAGCustomId, SNodeExtraCustomId, SLinkExtra> = d3Sankey.sankey<DAGCustomId, SNodeExtraCustomId, SLinkExtra>();

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
// Node Id
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

slgDAGCustomId = slgDAGCustomId.nodeId((d) => {
  const node: SNodeCustomId = d;
  return d.nodeId;
});

// Get -----------------------------------------------------------------------

let nodeIdAccessor: (d: SNodeCustomId) => string | number;

nodeIdAccessor = slgDAGCustomId.nodeId();

// ---------------------------------------------------------------------------
// Node Alignment
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

declare const testNode: SNode;

// Test pre-defined alignment functions
slgDAG = slgDAG.nodeAlign(d3Sankey.sankeyLeft);
num = d3Sankey.sankeyLeft(testNode, 10);
slgDAG = slgDAG.nodeAlign(d3Sankey.sankeyRight);
num = d3Sankey.sankeyRight(testNode, 10);
slgDAG = slgDAG.nodeAlign(d3Sankey.sankeyCenter);
num = d3Sankey.sankeyCenter(testNode, 10);
slgDAG = slgDAG.nodeAlign(d3Sankey.sankeyJustify);
num = d3Sankey.sankeyJustify(testNode, 10);

// Test custom
slgDAG = slgDAG.nodeAlign((node, maxN) => {
  const n: SNode = node;
  const mN: number = maxN;
  return node.depth || 0;
});

// Get -----------------------------------------------------------------------

let nodeAlignmentFn: (d: SNode, n: number) => number;

nodeAlignmentFn = slgDAG.nodeAlign();

// ---------------------------------------------------------------------------
// Nodes
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// Use array and test return type for chainability
slgDAG = slgDAG.nodes(graphDefault.customNodes);

// Use accessor function and test return type for chainability
slgDAG = slgDAG.nodes(d => d.customNodes);

// Get -----------------------------------------------------------------------

const nodesAccessor: (d: DAG) => SNode[] = slgDAG.nodes();

// ---------------------------------------------------------------------------
// Links
// ---------------------------------------------------------------------------

// Set -----------------------------------------------------------------------

// test return type for chainability
slgDAG = slgDAG.links(graphDefault.customLinks);

// Use accessor function and test return type for chainability
slgDAG = slgDAG.links(d => d.customLinks);

// Get -----------------------------------------------------------------------

const linksAccessor: (d: DAG) => SLink[] = slgDAG.links();

// ---------------------------------------------------------------------------
// Compute Initial Layout
// ---------------------------------------------------------------------------

sGraph = slgDAG(graphDefault);
// With additional arguments, although here unused.
sGraph = slgDAG(graphDefault, "foo", 50);

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

const svgPathString: string | null = pathGen(sGraph.links[0]);
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
const sNode = sNodes[0];

// User-specified extra properties:

str = sNode.name;

// Sankey Layout calculated (if layout has been run, otherwise undefined):

numMaybe = sNode.x0;
numMaybe = sNode.x1;
numMaybe = sNode.y0;
numMaybe = sNode.y1;
numMaybe = sNode.value;
numMaybe = sNode.index;
numMaybe = sNode.depth;
numMaybe = sNode.height;

let linksArrMaybe: SLink[] | undefined;

linksArrMaybe = sNode.sourceLinks;
linksArrMaybe = sNode.targetLinks;

// Sankey Link --------------------------------------------------------------

sLinks = sGraph.links;
const sLink = sLinks[0];

// User-specified extra properties:

str = sLink.uom;

// Sankey Layout mandated link properties:

num = sLink.value;

// Node depending on initialization strategy and whether
// layout(...) was invoked, the source and target nodes may be numbers
// objects without the Sankey layout coordinates, or objects with calculated
// information
let numStringOrSankeyNode: number | string | SNode;

numStringOrSankeyNode = sLink.source;
numStringOrSankeyNode = sLink.target;

// Sankey Layout calculated (if layout has been run, otherwise undefined):

numMaybe = sLink.y0;
numMaybe = sLink.y1;
numMaybe = sLink.width;
numMaybe = sLink.index;
