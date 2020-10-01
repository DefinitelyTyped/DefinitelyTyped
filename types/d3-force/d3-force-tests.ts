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
    nodes: SimNode[];
    links: SimLink[];
}

const graph: Graph = {
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

let simNode: SimNode | undefined;
let simLink: SimLink;

let simNodes: SimNode[];
let simLinks: SimLink[];

let num: number;

const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

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

forceCenter = forceCenter.strength(0.05);
num = forceCenter.strength();

// Use Centering force -----------------------------------------------------------------

forceCenter.initialize(graph.nodes, () => 1);
forceCenter(0.1); // alpha

// Collision ===========================================================================

// create Collision force --------------------------------------------------------------

let forceCollide: d3Force.ForceCollide<SimNode>;

// without radius
forceCollide = d3Force.forceCollide<SimNode>();

// with fixed radius
forceCollide = d3Force.forceCollide<SimNode>(15);

// with radius accessor function
forceCollide = d3Force.forceCollide<SimNode>((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
    return n.r;
});

// Configure Collision force -----------------------------------------------------------

let radiusAccessor: (node: SimNode, i: number, nodes: SimNode[]) => number;

// radius

forceCollide = forceCollide.radius(20);
forceCollide = forceCollide.radius((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
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

forceCollide.initialize(graph.nodes, () => 1);
forceCollide(0.1); // alpha

// Link ================================================================================

// create Link force --------------------------------------------------------------

let forceLink: d3Force.ForceLink<SimNode, SimLink>;

// without link data
forceLink = d3Force.forceLink<SimNode, SimLink>();

// with link data
forceLink = d3Force.forceLink<SimNode, SimLink>(graph.links);

// Configure Link force -----------------------------------------------------------

let linkNumberAccessor: (link: SimLink, i: number, links: SimLink[]) => number;
// let nodeIdAccessor: (node: SimNode, i: number, nodes: SimNode[]) => number | string;

// links

forceLink = forceLink.links(graph.links);

simLinks = forceLink.links();

simLink = simLinks[0];

simNode = (typeof simLink.source !== 'number' && typeof simLink.source !== 'string') ? simLink.source : undefined;
simNode = (typeof simLink.target !== 'number' && typeof simLink.target !== 'string') ? simLink.target : undefined;

const maybeNum: number | undefined = simLink.index; // Ex-ante type before initialization of links
num = simLink.index!; // Ex-post after link initialization, use ! non-null assertion operator to narrow to number

num = simLink.value;
num = simLink.d;
num = simLink.s;

// id (node id accessor)

forceLink = forceLink.id((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
    return n.id;
});

// distance

forceLink = forceLink.distance(50);
forceLink = forceLink.distance((link, index, links) => {
    const l: SimLink = link;
    const i: number = index;
    const ls: SimLink[] = links;
    return l.d;
});

linkNumberAccessor = forceLink.distance();

// strength

forceLink = forceLink.strength(0.95);
forceLink = forceLink.strength((link, index, links) => {
    const l: SimLink = link;
    const i: number = index;
    const ls: SimLink[] = links;
    return l.s;
});

linkNumberAccessor = forceLink.strength();

// iterations

forceLink = forceLink.iterations(10);
num = forceLink.iterations();

// Use Link force -----------------------------------------------------------------

forceLink.initialize(graph.nodes, () => 1);
forceLink(0.1); // alpha

// ManyBody ============================================================================

// create ManyBody force --------------------------------------------------------------

let forceCharge: d3Force.ForceManyBody<SimNode>;

forceCharge = d3Force.forceManyBody<SimNode>();

// Configure ManyBody force -----------------------------------------------------------

let simNodeNumberAccessor: (node: SimNode, i: number, nodes: SimNode[]) => number;

// strength

forceCharge = forceCharge.strength(-3000);
forceCharge = forceCharge.strength((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
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

forceCharge.initialize(graph.nodes, () => 1);
forceCharge(0.1); // alpha

// ForceX ==============================================================================

// create ForceX force --------------------------------------------------------------

let forcePosX: d3Force.ForceX<SimNode>;

forcePosX = d3Force.forceX<SimNode>();

// Configure ForceX force -----------------------------------------------------------

// strength

forcePosX = forcePosX.strength(0.2);
forcePosX = forcePosX.strength((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
    return 0.1 * n.group;
});
simNodeNumberAccessor = forcePosX.strength();

// x

forcePosX = forcePosX.x(100);
forcePosX = forcePosX.x((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
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

forcePosX.initialize(graph.nodes, () => 1);
forcePosX(0.1); // alpha

// ForceY ==============================================================================

// create ForceY force --------------------------------------------------------------

let forcePosY: d3Force.ForceY<SimNode>;

forcePosY = d3Force.forceY<SimNode>();

// Configure ForceY force -----------------------------------------------------------

// strength

forcePosY = forcePosY.strength(0.2);
forcePosY = forcePosY.strength((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
    return 0.1 * n.group;
});
simNodeNumberAccessor = forcePosY.strength();

// y

forcePosY = forcePosY.y(100);
forcePosY = forcePosY.y((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
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

forcePosY.initialize(graph.nodes, () => 1);
forcePosY(0.1); // alpha

// ForceRadial ==============================================================================

// create ForceRadial force --------------------------------------------------------------

let forceRadial: d3Force.ForceRadial<SimNode>;

// Radius set only
forceRadial = d3Force.forceRadial<SimNode>(50);
forceRadial = d3Force.forceRadial<SimNode>((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
    return 50 * n.group;
});

// Radius and x-coordinate of center set only
forceRadial = d3Force.forceRadial<SimNode>(50, 10);
forceRadial = d3Force.forceRadial<SimNode>(
    50, // radius
    (node, index, nodes) => {
        const n: SimNode = node;
        const i: number = index;
        const ns: SimNode[] = nodes;
        return 10 * n.group;
    } // center-x
);

// Radius and center set
forceRadial = d3Force.forceRadial<SimNode>(50, 10, 10);
forceRadial = d3Force.forceRadial<SimNode>(
    50, // radius
    10, // center-x
    (node, index, nodes) => {
        const n: SimNode = node;
        const i: number = index;
        const ns: SimNode[] = nodes;
        return 10 * n.group;
    } // center-y
);

forceRadial = d3Force.forceRadial<SimNode>(
    (node, index, nodes) => {
        const n: SimNode = node;
        const i: number = index;
        const ns: SimNode[] = nodes;
        return 50 * n.group;
    }, // radius
    (node, index, nodes) => {
        const n: SimNode = node;
        const i: number = index;
        const ns: SimNode[] = nodes;
        return 10 * n.group;
    }, // center-x
    (node, index, nodes) => {
        const n: SimNode = node;
        const i: number = index;
        const ns: SimNode[] = nodes;
        return 10 * n.group;
    } // center-y
);
// Configure ForceRadial force -----------------------------------------------------------

// strength

forceRadial = forceRadial.strength(0.2);
forceRadial = forceRadial.strength((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
    return 0.1 * n.group;
});
simNodeNumberAccessor = forceRadial.strength();

// radius

forceRadial = forceRadial.radius(100);
forceRadial = forceRadial.radius((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
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

simNodeNumberAccessor = forceRadial.radius();

// x

forceRadial = forceRadial.x(100);
forceRadial = forceRadial.x((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
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

simNodeNumberAccessor = forceRadial.x();

// y

forceRadial = forceRadial.y(100);
forceRadial = forceRadial.y((node, index, nodes) => {
    const n: SimNode = node;
    const i: number = index;
    const ns: SimNode[] = nodes;
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

simNodeNumberAccessor = forceRadial.y();

// Use ForceRadial force -----------------------------------------------------------------

forceRadial.initialize(graph.nodes, () => 1);
forceRadial(0.1); // alpha

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

let maybeF: d3Force.Force<SimNode, SimLink> | undefined;
let f: d3Force.Force<SimNode, SimLink>;

// getter with generic force returned

maybeF = nodeLinkSimulation.force('charge');
maybeF = nodeLinkSimulation.force('link');

// assuming certainty that force has been previously assigned
f = nodeLinkSimulation.force<d3Force.Force<SimNode, SimLink>>('charge')!;

// if force may not have been assigned for the name
maybeF = nodeLinkSimulation.force<d3Force.Force<SimNode, SimLink>>('charge');
// f = nodeLinkSimulation.force<d3Force.Force<SimNode, SimLink>>('charge'); // fails, with strictNullChecks

// getter with force type cast to improve return type specificity

let fLink: d3Force.ForceLink<SimNode, SimLink>;

// Need explicit, careful type casting to a specific force type
fLink = nodeLinkSimulation.force<d3Force.ForceLink<SimNode, SimLink>>('link')!;

// This is mainly an issue for ForceLinks, if once wants to get the links from an initialized force
// or re-set new links for an initialized force, e.g.:

simLinks = nodeLinkSimulation.force<d3Force.ForceLink<SimNode, SimLink>>('link')!.links();

// fLink = nodeLinkSimulation.force('link')!; // fails, as ForceLink specific properties are missing from 'generic' force

// on() --------------------------------------------------------------------------------

function drawLink(d: SimLink) {
    let source: SimNode | undefined;
    let target: SimNode | undefined;
    source = (typeof d.source !== 'string' && typeof d.source !== 'number') ? d.source : undefined;
    target = (typeof d.target !== 'string' && typeof d.target !== 'number') ? d.target : undefined;
    if (context && source && source.x && source.y && target && target.x && target.y) {
        context.moveTo(source.x, source.y);
        context.lineTo(target.x, target.y);
    }
}

function drawNode(d: SimNode) {
    if (context && d.x && d.y) {
        context.moveTo(d.x + 3, d.y);
        context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
    }
}

nodeLinkSimulation = nodeLinkSimulation.on('tick', function ticked() {
    const that: d3Force.Simulation<SimNode, SimLink> = this;

    if (context) {
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
    }
});

// remove listener
nodeSimulation = nodeSimulation.on('tick', null);

// get listener
const listener: ((this: d3Force.Simulation<SimNode, undefined>) => void) | undefined = nodeSimulation.on('tick');

// Configure and Use Force Simulation ===================================================

// restart() --------------------------------------------------------------------------

nodeLinkSimulation = nodeLinkSimulation.restart();

// stop() -----------------------------------------------------------------------------

nodeLinkSimulation = nodeLinkSimulation.stop();

// tick() -----------------------------------------------------------------------------

nodeLinkSimulation.tick();
nodeLinkSimulation.tick(10);

// find() -----------------------------------------------------------------------------

simNode = nodeLinkSimulation.find(100, 100);
simNode = nodeLinkSimulation.find(100, 100, 20);

// randomSource() -----------------------------------------------------------------------------

const randomSource: () => number = nodeLinkSimulation.randomSource();
nodeLinkSimulation = nodeLinkSimulation.randomSource(randomSource);
