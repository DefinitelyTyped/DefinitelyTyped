/**
 * Typescript definition tests for d3/d3-force module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */


import * as d3Force from 'd3-force';

// -------------------------------------------------------------------------------------
// Preparatory Steps
// -------------------------------------------------------------------------------------

interface SimNode extends d3Force.SimulationNodeDatum {
    id: string;
    group: number;
    r: number;
}

interface SimLink extends d3Force.SimulationLinkDatum<SimNode> {
    value: number;
    d: number;
    s: number;
}

interface Graph {
    nodes: Array<SimNode>;
    links: Array<SimLink>;
}


let graph: Graph = {
    nodes: [
        { id: 'Myriel', group: 1, r: 5 },
        { id: 'Napoleon', group: 1, r: 10 },
        { id: 'Mlle.Baptistine', group: 1, r: 5 },
        { id: 'Mme.Magloire', group: 1, r: 10 },
        { id: 'CountessdeLo', group: 1, r: 5 }
    ],
    links: [
        { source: 'Napoleon', target: 'Myriel', value: 1, d: 60, s: 0.95 },
        { source: 'Mlle.Baptistine', target: 'Myriel', value: 8, d: 100, s: 0.85 },
        { source: 'Mme.Magloire', target: 'Myriel', value: 10, d: 80, s: 0.85 },
        { source: 'Mme.Magloire', target: 'Mlle.Baptistine', value: 6, d: 60, s: 0.95 }
    ]
};

let simNode: SimNode;
let simLink: SimLink;

let simNodes: Array<SimNode>;
let simLinks: Array<SimLink>;

let num: Number;

let canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width,
    height = canvas.height;

// -------------------------------------------------------------------------------------
// Test Pre-Defined Forces
// -------------------------------------------------------------------------------------

// Centering ===========================================================================

// create Centering force --------------------------------------------------------------

let forceCenter: d3Force.ForceCenter<SimNode>;

// without specified center point (i.e. defaults to [0, 0])
forceCenter = d3Force.forceCenter<SimNode>();

// with x-coordinate of center point
forceCenter = d3Force.forceCenter<SimNode>(100);

// with x- and y-coordinate of center point
forceCenter = d3Force.forceCenter<SimNode>(100, 100);

// Configure Centering force -----------------------------------------------------------

forceCenter = forceCenter.x(150);
num = forceCenter.x();

forceCenter = forceCenter.y(150);
num = forceCenter.y();

// Use Centering force -----------------------------------------------------------------

forceCenter.initialize(graph.nodes);
forceCenter(0.1); // alpha

// Collision ===========================================================================

// create Collision force --------------------------------------------------------------

let forceCollide: d3Force.ForceCollide<SimNode>;

// without radius
forceCollide = d3Force.forceCollide<SimNode>();

// with fixed radius
forceCollide = d3Force.forceCollide<SimNode>(15);

// with radius accessor function
forceCollide = d3Force.forceCollide<SimNode>(function (node, index, nodes) {
    let n: SimNode = node;
    let i: number = index;
    let ns: Array<SimNode> = nodes;
    return n.r;
});


// Configure Collision force -----------------------------------------------------------

let radiusAccessor: (node: SimNode, i: number, nodes: Array<SimNode>) => number;

// radius

forceCollide = forceCollide.radius(20);
forceCollide = forceCollide.radius(function (node, index, nodes) {
    let n: SimNode = node;
    let i: number = index;
    let ns: Array<SimNode> = nodes;
    return 2 * n.r;
});

radiusAccessor = forceCollide.radius();

// strength

forceCollide = forceCollide.strength(0.5);
num = forceCollide.strength();

// iterations

forceCollide = forceCollide.iterations(10);
num = forceCollide.iterations();


// Use Collision force -----------------------------------------------------------------

forceCollide.initialize(graph.nodes);
forceCollide(0.1); // alpha

// Link ================================================================================

// create Link force --------------------------------------------------------------

let forceLink: d3Force.ForceLink<SimNode, SimLink>;

// without link data
forceLink = d3Force.forceLink<SimNode, SimLink>();

// with link data
forceLink = d3Force.forceLink<SimNode, SimLink>(graph.links);


// Configure Link force -----------------------------------------------------------

let linkNumberAccessor: (link: SimLink, i: number, links: Array<SimLink>) => number;
let nodeIdAccessor: (node: SimNode, i: number, nodes: Array<SimNode>) => number | string;

// links

forceLink = forceLink.links(graph.links);

simLinks = forceLink.links();

simLink = simLinks[0];

simNode = (typeof simLink.source !== 'number' && typeof simLink.source !== 'string') ? simLink.source : undefined;
simNode = (typeof simLink.target !== 'number' && typeof simLink.target !== 'string') ? simLink.target : undefined;

num = simLink.index;

num = simLink.value;
num = simLink.d;
num = simLink.s;


// id (node id accessor)

forceLink = forceLink.id(function (node, index, nodes) {
    let n: SimNode = node;
    let i: number = index;
    let ns: Array<SimNode> = nodes;
    return n.id;
});

// distance

forceLink = forceLink.distance(50);
forceLink = forceLink.distance(function (link, index, links) {
    let l: SimLink = link;
    let i: number = index;
    let ls: Array<SimLink> = links;
    return l.d;
});

linkNumberAccessor = forceLink.distance();

// strength

forceLink = forceLink.strength(0.95);
forceLink = forceLink.strength(function (link, index, links) {
    let l: SimLink = link;
    let i: number = index;
    let ls: Array<SimLink> = links;
    return l.s;
});

linkNumberAccessor = forceLink.strength();

// iterations

forceLink = forceLink.iterations(10);
num = forceLink.iterations();


// Use Link force -----------------------------------------------------------------

forceLink.initialize(graph.nodes);
forceLink(0.1); // alpha


// ManyBody ============================================================================

// create ManyBody force --------------------------------------------------------------

let forceCharge: d3Force.ForceManyBody<SimNode>;

forceCharge = d3Force.forceManyBody<SimNode>();

// Configure ManyBody force -----------------------------------------------------------

let simNodeNumberAccessor: (node: SimNode, i: number, nodes: Array<SimNode>) => number;

// strength

forceCharge = forceCharge.strength(-3000);
forceCharge = forceCharge.strength(function (node, index, nodes) {
    let n: SimNode = node;
    let i: number = index;
    let ns: Array<SimNode> = nodes;
    return -1000 * n.group;
});
simNodeNumberAccessor = forceCharge.strength();

// theta

forceCharge = forceCharge.theta(0.8);
num = forceCharge.theta();


// distanceMin

forceCharge = forceCharge.distanceMin(1);
num = forceCharge.distanceMin();

// distanceMax

forceCharge = forceCharge.distanceMax(1000);
num = forceCharge.distanceMax();


// Use ManyBody force -----------------------------------------------------------------

forceCharge.initialize(graph.nodes);
forceCharge(0.1); // alpha


// ForceX ==============================================================================

// create ForceX force --------------------------------------------------------------

let forcePosX: d3Force.ForceX<SimNode>;

forcePosX = d3Force.forceX<SimNode>();

// Configure ForceX force -----------------------------------------------------------

// strength

forcePosX = forcePosX.strength(0.2);
forcePosX = forcePosX.strength(function (node, index, nodes) {
    let n: SimNode = node;
    let i: number = index;
    let ns: Array<SimNode> = nodes;
    return 0.1 * n.group;
});
simNodeNumberAccessor = forcePosX.strength();

// x

forcePosX = forcePosX.x(100);
forcePosX = forcePosX.x(function (node, index, nodes) {
    let n: SimNode = node;
    let i: number = index;
    let ns: Array<SimNode> = nodes;
    let target: number;
    switch (n.group) {
        case 1:
            target = 100;
            break;
        case 2:
            target = 200;
            break;
        case 3:
            target = 300;
            break;
        default:
            target = 0;
            break;
    }

    return target;
});

simNodeNumberAccessor = forcePosX.x();

// Use ForceX force -----------------------------------------------------------------

forcePosX.initialize(graph.nodes);
forcePosX(0.1); // alpha


// ForceY ==============================================================================

// create ForceY force --------------------------------------------------------------

let forcePosY: d3Force.ForceY<SimNode>;

forcePosY = d3Force.forceY<SimNode>();

// Configure ForceY force -----------------------------------------------------------

// strength

forcePosY = forcePosY.strength(0.2);
forcePosY = forcePosY.strength(function (node, index, nodes) {
    let n: SimNode = node;
    let i: number = index;
    let ns: Array<SimNode> = nodes;
    return 0.1 * n.group;
});
simNodeNumberAccessor = forcePosY.strength();

// y

forcePosY = forcePosY.y(100);
forcePosY = forcePosY.y(function (node, index, nodes) {
    let n: SimNode = node;
    let i: number = index;
    let ns: Array<SimNode> = nodes;
    let target: number;
    switch (n.group) {
        case 1:
            target = 100;
            break;
        case 2:
            target = 200;
            break;
        case 3:
            target = 300;
            break;
        default:
            target = 0;
            break;
    }

    return target;
});

simNodeNumberAccessor = forcePosY.y();

// Use ForceY force -----------------------------------------------------------------

forcePosY.initialize(graph.nodes);
forcePosY(0.1); // alpha

// -------------------------------------------------------------------------------------
// Test Force Simulation
// -------------------------------------------------------------------------------------

// Create Force Simulation =============================================================


let nodeSimulation: d3Force.Simulation<SimNode, undefined>;
let nodeLinkSimulation: d3Force.Simulation<SimNode, SimLink>;

// Force Simulation without Links / No node data
nodeSimulation = d3Force.forceSimulation<SimNode>();

// Force Simulation without Links / With node data
nodeSimulation = d3Force.forceSimulation<SimNode>(graph.nodes);

// Force Simulation with Links / No node data
nodeLinkSimulation = d3Force.forceSimulation<SimNode, SimLink>();

// Force Simulation with Links / With node data
nodeLinkSimulation = d3Force.forceSimulation<SimNode, SimLink>(graph.nodes);

// nodes() -----------------------------------------------------------------------------

nodeSimulation = nodeSimulation.nodes(graph.nodes);

simNodes = nodeSimulation.nodes();

// alpha() -----------------------------------------------------------------------------

nodeLinkSimulation = nodeLinkSimulation.alpha(0.3);
num = nodeLinkSimulation.alpha();

// alphaMin() -----------------------------------------------------------------------------

nodeLinkSimulation = nodeLinkSimulation.alphaMin(0.0001);
num = nodeLinkSimulation.alphaMin();

// alphaDecay() -----------------------------------------------------------------------------

nodeLinkSimulation = nodeLinkSimulation.alphaDecay(0.02);
num = nodeLinkSimulation.alphaDecay();

// alphaTarget() -----------------------------------------------------------------------------

nodeLinkSimulation = nodeLinkSimulation.alphaTarget(0);
num = nodeLinkSimulation.alphaTarget();

// velocityDecay() -----------------------------------------------------------------------------

nodeLinkSimulation = nodeLinkSimulation.velocityDecay(0.4);
num = nodeLinkSimulation.velocityDecay();


// force() -----------------------------------------------------------------------------

nodeSimulation = nodeSimulation.force('posx', forcePosX);
nodeSimulation.force('posy', forcePosY);

// Remove force
nodeSimulation = nodeSimulation.force('posx', null);


nodeLinkSimulation = nodeLinkSimulation.force('link', forceLink);

nodeLinkSimulation
    .force('charge', forceCharge)
    .force('center', forceCenter);

let f: d3Force.Force<SimNode, SimLink>;

f = nodeLinkSimulation.force('charge');
f = nodeLinkSimulation.force('link');

let fLink: d3Force.ForceLink<SimNode, SimLink>;

// fLink = nodeLinkSimulation.force('link'); // fails, as ForceLink specific properties are missing from 'generic' force

// Need explicit, careful type casting to a specific force type
fLink = <d3Force.ForceLink<SimNode, SimLink>>nodeLinkSimulation.force('link');

// This is mainly an issue for ForceLinks, if once wants to get the links from an initialized force
// or re-set new links for an initialized force, e.g.:

simLinks = (<d3Force.ForceLink<SimNode, SimLink>>nodeLinkSimulation.force('link')).links();

// The same could be followed for custom  forces.

// on() --------------------------------------------------------------------------------

function drawLink(d: SimLink) {
    let source: SimNode, target: SimNode;
    source = (typeof d.source !== 'string' && typeof d.source !== 'number') ? d.source : undefined;
    target = (typeof d.target !== 'string' && typeof d.target !== 'number') ? d.target : undefined;
    if (source && target) {
        context.moveTo(source.x, source.y);
        context.lineTo(target.x, target.y);
    }
}

function drawNode(d: SimNode) {
    context.moveTo(d.x + 3, d.y);
    context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
}

nodeLinkSimulation = nodeLinkSimulation.on('tick', function ticked() {

    let that: d3Force.Simulation<SimNode, SimLink> = this;

    context.clearRect(0, 0, width, height);

    context.beginPath();
    graph.links.forEach(drawLink);
    context.strokeStyle = '#aaa';
    context.stroke();

    context.beginPath();
    graph.nodes.forEach(drawNode);
    context.fill();
    context.strokeStyle = '#fff';
    context.stroke();
});

// remove listener
nodeSimulation = nodeSimulation.on('tick', null);

// Configure and Use Force Simulation ===================================================

// restart() --------------------------------------------------------------------------

nodeLinkSimulation.restart();

// stop() -----------------------------------------------------------------------------

nodeLinkSimulation.stop();

// tick() -----------------------------------------------------------------------------

nodeLinkSimulation.tick();

// find() -----------------------------------------------------------------------------

simNode = nodeLinkSimulation.find(100, 100);
simNode = nodeLinkSimulation.find(100, 100, 20);
