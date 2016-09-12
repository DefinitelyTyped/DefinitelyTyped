// Type definitions for D3JS d3-force module v1.0.2
// Project: https://github.com/d3/d3-force/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// -----------------------------------------------------------------------
// Force Simulation
// -----------------------------------------------------------------------

// TODO: Review below: fx and fy should be optional as a matter of principle. The other properties, are optional prior to initialization, but once the
// the nodes array is passed into the simulation, will be initialized.
export interface SimulationNodeDatum {
    // NB: index is assigned internally by simulation, once initialized it is defined
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number;
    fy?: number;
}

export interface SimulationLinkDatum<NodeDatum extends SimulationNodeDatum> {
    // TODO: Strictly speaking, the string or number typing of source and target is only used when (re)initializing links
    // Once initialized, links' source and target fields will be of type NodeDatum
    source: NodeDatum | string | number;
    target: NodeDatum | string | number;
    // NB: index is assigned internally by force, once initialized it is defined
    index?: number;
}

export interface Simulation<NodeDatum extends SimulationNodeDatum, LinkDatum extends SimulationLinkDatum<NodeDatum>> {
    restart(): this;
    stop(): this;
    tick(): void;
    nodes(): Array<NodeDatum>;
    nodes(nodesData: Array<NodeDatum>): this;
    alpha(): number;
    alpha(alpha: number): this;
    alphaMin(): number;
    alphaMin(min: number): this;
    alphaDecay(): number;
    alphaDecay(decay: number): this;
    alphaTarget(): number;
    alphaTarget(target: number): this;
    velocityDecay(): number;
    velocityDecay(decay: number): this;
    force<F extends Force<NodeDatum, LinkDatum>>(name: string): F; // force names are arbitrary, so return type inference is not possible
    force(name: string, force: null): this;
    force(name: string, force: Force<NodeDatum, LinkDatum>): this;
    find(x: number, y: number, radius?: number): NodeDatum | undefined;
    on(typenames: 'tick' | 'end' | string): (this: Simulation<NodeDatum, LinkDatum>) => void;
    on(typenames: 'tick' | 'end' | string, listener: null): this;
    on(typenames: 'tick' | 'end' | string, listener: (this: this) => void): this;
}

export function forceSimulation<NodeDatum extends SimulationNodeDatum>(nodesData?: Array<NodeDatum>): Simulation<NodeDatum, undefined>;
export function forceSimulation<NodeDatum extends SimulationNodeDatum, LinkDatum extends SimulationLinkDatum<NodeDatum>>(nodesData?: Array<NodeDatum>): Simulation<NodeDatum, LinkDatum>;

// ----------------------------------------------------------------------
// Forces
// ----------------------------------------------------------------------


export interface Force<NodeDatum extends SimulationNodeDatum, LinkDatum extends SimulationLinkDatum<NodeDatum>> {
    (alpha: number): void;
    initialize?(nodes: Array<NodeDatum>): void;
}


// Centering ------------------------------------------------------------

export interface ForceCenter<NodeDatum extends SimulationNodeDatum> extends Force<NodeDatum, any> {
    x(): number;
    x(x: number): this;
    y(): number;
    y(y: number): this;
}

export function forceCenter<NodeDatum extends SimulationNodeDatum>(x?: number, y?: number): ForceCenter<NodeDatum>;

// Collision ------------------------------------------------------------

export interface ForceCollide<NodeDatum extends SimulationNodeDatum> extends Force<NodeDatum, any> {
    radius(): (node: NodeDatum, i: number, nodes: Array<NodeDatum>) => number;
    radius(radius: number): this;
    radius(radius: (node: NodeDatum, i: number, nodes: Array<NodeDatum>) => number): this;
    strength(): number;
    strength(strength: number): this;
    iterations(): number;
    iterations(iterations: number): this;
}

export function forceCollide<NodeDatum extends SimulationNodeDatum>(): ForceCollide<NodeDatum>;
export function forceCollide<NodeDatum extends SimulationNodeDatum>(radius: number): ForceCollide<NodeDatum>;
export function forceCollide<NodeDatum extends SimulationNodeDatum>(radius: (node: NodeDatum, i: number, nodes: Array<NodeDatum>) => number): ForceCollide<NodeDatum>;

// Link ----------------------------------------------------------------

export interface ForceLink<NodeDatum extends SimulationNodeDatum, LinkDatum extends SimulationLinkDatum<NodeDatum>> extends Force<NodeDatum, LinkDatum> {
    links(): Array<LinkDatum>;
    links(links: Array<LinkDatum>): this;
    id(): (node: NodeDatum, i: number, nodesData: Array<NodeDatum>) => (string | number);
    id(id: (node: NodeDatum, i: number, nodesData: Array<NodeDatum>) => string): this;
    distance(): (link: LinkDatum, i: number, links: Array<LinkDatum>) => number;
    distance(distance: number): this;
    distance(distance: (link: LinkDatum, i: number, links: Array<LinkDatum>) => number): this;
    strength(): (link: LinkDatum, i: number, links: Array<LinkDatum>) => number;
    strength(strength: number): this;
    strength(strength: (link: LinkDatum, i: number, links: Array<LinkDatum>) => number): this;
    iterations(): number;
    iterations(iterations: number): this;
}

export function forceLink<NodeDatum extends SimulationNodeDatum, LinksDatum extends SimulationLinkDatum<NodeDatum>>(): ForceLink<NodeDatum, LinksDatum>;
export function forceLink<NodeDatum extends SimulationNodeDatum, LinksDatum extends SimulationLinkDatum<NodeDatum>>(links: Array<LinksDatum>): ForceLink<NodeDatum, LinksDatum>;

// Many Body ----------------------------------------------------------------

export interface ForceManyBody<NodeDatum extends SimulationNodeDatum> extends Force<NodeDatum, any> {
    strength(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    strength(strength: number): this;
    strength(strength: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): this;
    theta(): number;
    theta(theta: number): this;
    distanceMin(): number;
    distanceMin(distance: number): this;
    distanceMax(): number;
    distanceMax(distance: number): this;
}

export function forceManyBody<NodeDatum extends SimulationNodeDatum>(): ForceManyBody<NodeDatum>;

// Positioning ----------------------------------------------------------------

export interface ForceX<NodeDatum extends SimulationNodeDatum> extends Force<NodeDatum, any> {
    strength(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    strength(strength: number): this;
    strength(strength: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): this;
    x(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    x(x: number): this;
    x(x: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): this;
}

export function forceX<NodeDatum extends SimulationNodeDatum>(): ForceX<NodeDatum>;
export function forceX<NodeDatum extends SimulationNodeDatum>(x: number): ForceX<NodeDatum>;
export function forceX<NodeDatum extends SimulationNodeDatum>(x: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): ForceX<NodeDatum>;

export interface ForceY<NodeDatum extends SimulationNodeDatum> extends Force<NodeDatum, any> {
    strength(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    strength(strength: number): this;
    strength(strength: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): this;
    y(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    y(y: number): this;
    y(y: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): this;
}

export function forceY<NodeDatum extends SimulationNodeDatum>(): ForceY<NodeDatum>;
export function forceY<NodeDatum extends SimulationNodeDatum>(y: number): ForceY<NodeDatum>;
export function forceY<NodeDatum extends SimulationNodeDatum>(y: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): ForceY<NodeDatum>;
