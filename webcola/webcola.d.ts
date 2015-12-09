// Type definitions for webcola 3.1.1
// Project: https://github.com/tgdwyer/WebCola
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>, Tim Dwyer <https://github.com/tgdwyer>, Noah Chen <https://github.com/nchen63>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module cola {
    function applyPacking(graphs: Array<any>, w: any, h: any, node_size: any, desired_ratio?: number): void;
    /**
     * connected components of graph
     * returns an array of {}
     */
    function separateGraphs(nodes: any, links: any): any[];
}
declare module cola.vpsc {
    class PositionStats {
        scale: number;
        AB: number;
        AD: number;
        A2: number;
        constructor(scale: number);
        addVariable(v: Variable): void;
        getPosn(): number;
    }
    class Constraint {
        left: Variable;
        right: Variable;
        gap: number;
        equality: boolean;
        lm: number;
        active: boolean;
        unsatisfiable: boolean;
        constructor(left: Variable, right: Variable, gap: number, equality?: boolean);
        slack(): number;
    }
    class Variable {
        desiredPosition: number;
        weight: number;
        scale: number;
        offset: number;
        block: Block;
        cIn: Constraint[];
        cOut: Constraint[];
        constructor(desiredPosition: number, weight?: number, scale?: number);
        dfdv(): number;
        position(): number;
        visitNeighbours(prev: Variable, f: (c: Constraint, next: Variable) => void): void;
    }
    class Block {
        vars: Variable[];
        posn: number;
        ps: PositionStats;
        blockInd: number;
        constructor(v: Variable);
        private addVariable(v);
        updateWeightedPosition(): void;
        private compute_lm(v, u, postAction);
        private populateSplitBlock(v, prev);
        traverse(visit: (c: Constraint) => any, acc: any[], v?: Variable, prev?: Variable): void;
        findMinLM(): Constraint;
        private findMinLMBetween(lv, rv);
        private findPath(v, prev, to, visit);
        isActiveDirectedPathBetween(u: Variable, v: Variable): boolean;
        static split(c: Constraint): Block[];
        private static createSplitBlock(startVar);
        splitBetween(vl: Variable, vr: Variable): {
            constraint: Constraint;
            lb: Block;
            rb: Block;
        };
        mergeAcross(b: Block, c: Constraint, dist: number): void;
        cost(): number;
    }
    class Blocks {
        vs: Variable[];
        private list;
        constructor(vs: Variable[]);
        cost(): number;
        insert(b: Block): void;
        remove(b: Block): void;
        merge(c: Constraint): void;
        forEach(f: (b: Block, i: number) => void): void;
        updateBlockPositions(): void;
        split(inactive: Constraint[]): void;
    }
    class Solver {
        vs: Variable[];
        cs: Constraint[];
        bs: Blocks;
        inactive: Constraint[];
        static LAGRANGIAN_TOLERANCE: number;
        static ZERO_UPPERBOUND: number;
        constructor(vs: Variable[], cs: Constraint[]);
        cost(): number;
        setStartingPositions(ps: number[]): void;
        setDesiredPositions(ps: number[]): void;
        private mostViolated();
        satisfy(): void;
        solve(): number;
    }
}
declare module cola.vpsc {
    class TreeBase {
        _root: any;
        size: any;
        _comparator: any;
        clear(): void;
        find(data: any): any;
        findIter: (data: any) => any;
        lowerBound(data: any): Iterator;
        upperBound(data: any): Iterator;
        min(): any;
        max(): any;
        iterator(): Iterator;
        each(cb: any): void;
        reach(cb: any): void;
        _bound(data: any, cmp: any): Iterator;
    }
    class Iterator {
        _tree: any;
        _ancestors: any;
        _cursor: any;
        constructor(tree: any);
        data(): any;
        next(): any;
        prev(): any;
        _minNode(start: any): void;
        _maxNode(start: any): void;
    }
    class RBTree<T> extends TreeBase {
        _root: any;
        _comparator: any;
        size: any;
        constructor(comparator: (a: T, b: T) => number);
        insert(data: any): boolean;
        remove(data: any): boolean;
        static is_red(node: any): any;
        static single_rotate(root: any, dir: any): any;
        static double_rotate(root: any, dir: any): any;
    }
}
/// <reference path="vpsc.d.ts" />
/// <reference path="rbtree.d.ts" />
declare module cola.vpsc {
    interface Point {
        x: number;
        y: number;
    }
    interface Leaf {
        bounds: Rectangle;
        variable: Variable;
    }
    interface Group {
        bounds: Rectangle;
        padding: number;
        stiffness: number;
        leaves: Leaf[];
        groups: Group[];
        minVar: Variable;
        maxVar: Variable;
    }
    function computeGroupBounds(g: Group): Rectangle;
    class Rectangle {
        x: number;
        X: number;
        y: number;
        Y: number;
        constructor(x: number, X: number, y: number, Y: number);
        static empty(): Rectangle;
        cx(): number;
        cy(): number;
        overlapX(r: Rectangle): number;
        overlapY(r: Rectangle): number;
        setXCentre(cx: number): void;
        setYCentre(cy: number): void;
        width(): number;
        height(): number;
        union(r: Rectangle): Rectangle;
        /**
         * return any intersection points between the given line and the sides of this rectangle
         * @method lineIntersection
         * @param x1 number first x coord of line
         * @param y1 number first y coord of line
         * @param x2 number second x coord of line
         * @param y2 number second y coord of line
         * @return any intersection points found
         */
        lineIntersections(x1: number, y1: number, x2: number, y2: number): Array<Point>;
        /**
         * return any intersection points between a line extending from the centre of this rectangle to the given point,
         *  and the sides of this rectangle
         * @method lineIntersection
         * @param x2 number second x coord of line
         * @param y2 number second y coord of line
         * @return any intersection points found
         */
        rayIntersection(x2: number, y2: number): Point;
        vertices(): Point[];
        static lineIntersection(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): Point;
        inflate(pad: number): Rectangle;
    }
    function makeEdgeBetween(source: Rectangle, target: Rectangle, ah: number): {
        sourceIntersection: Point;
        targetIntersection: Point;
        arrowStart: Point;
    };
    function makeEdgeTo(s: {
        x: number;
        y: number;
    }, target: Rectangle, ah: number): Point;
    function generateXConstraints(rs: Rectangle[], vars: Variable[]): Constraint[];
    function generateYConstraints(rs: Rectangle[], vars: Variable[]): Constraint[];
    function generateXGroupConstraints(root: Group): Constraint[];
    function generateYGroupConstraints(root: Group): Constraint[];
    function removeOverlaps(rs: Rectangle[]): void;
    interface GraphNode extends Leaf {
        fixed: boolean;
        fixedWeight?: number;
        width: number;
        height: number;
        x: number;
        y: number;
        px: number;
        py: number;
    }
    class IndexedVariable extends Variable {
        index: number;
        constructor(index: number, w: number);
    }
    class Projection {
        private nodes;
        private groups;
        private rootGroup;
        private avoidOverlaps;
        private xConstraints;
        private yConstraints;
        private variables;
        constructor(nodes: GraphNode[], groups: Group[], rootGroup?: Group, constraints?: any[], avoidOverlaps?: boolean);
        private createSeparation(c);
        private makeFeasible(c);
        private createAlignment(c);
        private createConstraints(constraints);
        private setupVariablesAndBounds(x0, y0, desired, getDesired);
        xProject(x0: number[], y0: number[], x: number[]): void;
        yProject(x0: number[], y0: number[], y: number[]): void;
        projectFunctions(): {
            (x0: number[], y0: number[], r: number[]): void;
        }[];
        private project(x0, y0, start, desired, getDesired, cs, generateConstraints, updateNodeBounds, updateGroupBounds);
        private solve(vs, cs, starting, desired);
    }
}
/// <reference path="vpsc.d.ts" />
/// <reference path="rectangle.d.ts" />
declare module cola.geom {
    class Point {
        x: number;
        y: number;
    }
    class LineSegment {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        constructor(x1: number, y1: number, x2: number, y2: number);
    }
    class PolyPoint extends Point {
        polyIndex: number;
    }
    /** tests if a point is Left|On|Right of an infinite line.
     * @param points P0, P1, and P2
     * @return >0 for P2 left of the line through P0 and P1
     *            =0 for P2 on the line
     *            <0 for P2 right of the line
     */
    function isLeft(P0: Point, P1: Point, P2: Point): number;
    /**
     * returns the convex hull of a set of points using Andrew's monotone chain algorithm
     * see: http://geomalgorithms.com/a10-_hull-1.html#Monotone%20Chain
     * @param S array of points
     * @return the convex hull as an array of points
     */
    function ConvexHull(S: Point[]): Point[];
    function clockwiseRadialSweep(p: Point, P: Point[], f: (p: Point) => void): void;
    function tangent_PolyPolyC(V: Point[], W: Point[], t1: (a: Point, b: Point[]) => number, t2: (a: Point, b: Point[]) => number, cmp1: (a: Point, b: Point, c: Point) => boolean, cmp2: (a: Point, b: Point, c: Point) => boolean): {
        t1: number;
        t2: number;
    };
    function LRtangent_PolyPolyC(V: Point[], W: Point[]): {
        t1: number;
        t2: number;
    };
    function RLtangent_PolyPolyC(V: Point[], W: Point[]): {
        t1: number;
        t2: number;
    };
    function LLtangent_PolyPolyC(V: Point[], W: Point[]): {
        t1: number;
        t2: number;
    };
    function RRtangent_PolyPolyC(V: Point[], W: Point[]): {
        t1: number;
        t2: number;
    };
    class BiTangent {
        t1: number;
        t2: number;
        constructor(t1: number, t2: number);
    }
    class BiTangents {
        rl: BiTangent;
        lr: BiTangent;
        ll: BiTangent;
        rr: BiTangent;
    }
    class TVGPoint extends Point {
        vv: VisibilityVertex;
    }
    class VisibilityVertex {
        id: number;
        polyid: number;
        polyvertid: number;
        p: TVGPoint;
        constructor(id: number, polyid: number, polyvertid: number, p: TVGPoint);
    }
    class VisibilityEdge {
        source: VisibilityVertex;
        target: VisibilityVertex;
        constructor(source: VisibilityVertex, target: VisibilityVertex);
        length(): number;
    }
    class TangentVisibilityGraph {
        P: TVGPoint[][];
        V: VisibilityVertex[];
        E: VisibilityEdge[];
        constructor(P: TVGPoint[][], g0?: {
            V: VisibilityVertex[];
            E: VisibilityEdge[];
        });
        addEdgeIfVisible(u: TVGPoint, v: TVGPoint, i1: number, i2: number): void;
        addPoint(p: TVGPoint, i1: number): VisibilityVertex;
        private intersectsPolys(l, i1, i2);
    }
    function tangents(V: Point[], W: Point[]): BiTangents;
    function polysOverlap(p: Point[], q: Point[]): boolean;
}
/**
 * @module cola
 */
declare module cola {
    /**
     * Descent respects a collection of locks over nodes that should not move
     * @class Locks
     */
    class Locks {
        locks: any;
        /**
         * add a lock on the node at index id
         * @method add
         * @param id index of node to be locked
         * @param x required position for node
         */
        add(id: number, x: number[]): void;
        /**
         * @method clear clear all locks
         */
        clear(): void;
        /**
         * @isEmpty
         * @returns false if no locks exist
         */
        isEmpty(): boolean;
        /**
         * perform an operation on each lock
         * @apply
         */
        apply(f: (id: number, x: number[]) => void): void;
    }
    /**
     * Uses a gradient descent approach to reduce a stress or p-stress goal function over a graph with specified ideal edge lengths or a square matrix of dissimilarities.
     * The standard stress function over a graph nodes with position vectors x,y,z is (mathematica input):
     *   stress[x_,y_,z_,D_,w_]:=Sum[w[[i,j]] (length[x[[i]],y[[i]],z[[i]],x[[j]],y[[j]],z[[j]]]-d[[i,j]])^2,{i,Length[x]-1},{j,i+1,Length[x]}]
     * where: D is a square matrix of ideal separations between nodes, w is matrix of weights for those separations
     *        length[x1_, y1_, z1_, x2_, y2_, z2_] = Sqrt[(x1 - x2)^2 + (y1 - y2)^2 + (z1 - z2)^2]
     * below, we use wij = 1/(Dij^2)
     *
     * @class Descent
     */
    class Descent {
        D: number[][];
        G: number[][];
        threshold: number;
        /** Hessian Matrix
         * @property H {number[][][]}
         */
        H: number[][][];
        /** gradient vector
         * @property G {number[][]}
         */
        g: number[][];
        /** positions vector
         * @property x {number[][]}
         */
        x: number[][];
        /**
         * @property k {number} dimensionality
         */
        k: number;
        /**
         * number of data-points / nodes / size of vectors/matrices
         * @property n {number}
         */
        n: number;
        locks: Locks;
        private static zeroDistance;
        private minD;
        private Hd;
        private a;
        private b;
        private c;
        private d;
        private e;
        private ia;
        private ib;
        private xtmp;
        numGridSnapNodes: number;
        snapGridSize: number;
        snapStrength: number;
        scaleSnapByMaxH: boolean;
        private random;
        project: {
            (x0: number[], y0: number[], r: number[]): void;
        }[];
        /**
         * @method constructor
         * @param x {number[][]} initial coordinates for nodes
         * @param D {number[][]} matrix of desired distances between pairs of nodes
         * @param G {number[][]} [default=null] if specified, G is a matrix of weights for goal terms between pairs of nodes.
         * If G[i][j] > 1 and the separation between nodes i and j is greater than their ideal distance, then there is no contribution for this pair to the goal
         * If G[i][j] <= 1 then it is used as a weighting on the contribution of the variance between ideal and actual separation between i and j to the goal function
         */
        constructor(x: number[][], D: number[][], G?: number[][]);
        static createSquareMatrix(n: number, f: (i: number, j: number) => number): number[][];
        private offsetDir();
        computeDerivatives(x: number[][]): void;
        private static dotProd(a, b);
        private static rightMultiply(m, v, r);
        computeStepSize(d: number[][]): number;
        reduceStress(): number;
        private static copy(a, b);
        private stepAndProject(x0, r, d, stepSize);
        private static mApply(m, n, f);
        private matrixApply(f);
        private computeNextPosition(x0, r);
        run(iterations: number): number;
        rungeKutta(): number;
        private static mid(a, b, m);
        takeDescentStep(x: number[], d: number[], stepSize: number): void;
        computeStress(): number;
    }
    class PseudoRandom {
        seed: number;
        private a;
        private c;
        private m;
        private range;
        constructor(seed?: number);
        getNext(): number;
        getNextBetween(min: number, max: number): number;
    }
}
declare module cola.powergraph {
    interface LinkAccessor<Link> {
        getSourceIndex(l: Link): number;
        getTargetIndex(l: Link): number;
        getType(l: Link): number;
    }
    class PowerEdge {
        source: any;
        target: any;
        type: number;
        constructor(source: any, target: any, type: number);
    }
    class Configuration<Link> {
        private linkAccessor;
        modules: Module[];
        roots: ModuleSet[];
        R: number;
        constructor(n: number, edges: Link[], linkAccessor: LinkAccessor<Link>, rootGroup?: any[]);
        private initModulesFromGroup(group);
        merge(a: Module, b: Module, k?: number): Module;
        private rootMerges(k?);
        greedyMerge(): boolean;
        private nEdges(a, b);
        getGroupHierarchy(retargetedEdges: PowerEdge[]): any[];
        allEdges(): PowerEdge[];
        static getEdges(modules: ModuleSet, es: PowerEdge[]): void;
    }
    class Module {
        id: number;
        outgoing: LinkSets;
        incoming: LinkSets;
        children: ModuleSet;
        definition: any;
        gid: number;
        constructor(id: number, outgoing?: LinkSets, incoming?: LinkSets, children?: ModuleSet, definition?: any);
        getEdges(es: PowerEdge[]): void;
        isLeaf(): boolean;
        isIsland(): boolean;
        isPredefined(): boolean;
    }
    class ModuleSet {
        table: any;
        count(): number;
        intersection(other: ModuleSet): ModuleSet;
        intersectionCount(other: ModuleSet): number;
        contains(id: number): boolean;
        add(m: Module): void;
        remove(m: Module): void;
        forAll(f: (m: Module) => void): void;
        modules(): Module[];
    }
    class LinkSets {
        sets: any;
        n: number;
        count(): number;
        contains(id: number): boolean;
        add(linktype: number, m: Module): void;
        remove(linktype: number, m: Module): void;
        forAll(f: (ms: ModuleSet, linktype: number) => void): void;
        forAllModules(f: (m: Module) => void): void;
        intersection(other: LinkSets): LinkSets;
    }
    function getGroups<Link>(nodes: any[], links: Link[], la: LinkAccessor<Link>, rootGroup?: any[]): {
        groups: any[];
        powerEdges: PowerEdge[];
    };
}
/**
 * @module cola
 */
declare module cola {
    interface LinkAccessor<Link> {
        getSourceIndex(l: Link): number;
        getTargetIndex(l: Link): number;
    }
    interface LinkLengthAccessor<Link> extends LinkAccessor<Link> {
        setLength(l: Link, value: number): void;
    }
    /** modify the specified link lengths based on the symmetric difference of their neighbours
     * @class symmetricDiffLinkLengths
     */
    function symmetricDiffLinkLengths<Link>(links: Link[], la: LinkLengthAccessor<Link>, w?: number): void;
    /** modify the specified links lengths based on the jaccard difference between their neighbours
     * @class jaccardLinkLengths
     */
    function jaccardLinkLengths<Link>(links: Link[], la: LinkLengthAccessor<Link>, w?: number): void;
    interface IConstraint {
        left: number;
        right: number;
        gap: number;
    }
    interface DirectedEdgeConstraints {
        axis: string;
        gap: number;
    }
    interface LinkSepAccessor<Link> extends LinkAccessor<Link> {
        getMinSeparation(l: Link): number;
    }
    /** generate separation constraints for all edges unless both their source and sink are in the same strongly connected component
     * @class generateDirectedEdgeConstraints
     */
    function generateDirectedEdgeConstraints<Link>(n: number, links: Link[], axis: string, la: LinkSepAccessor<Link>): IConstraint[];
    /**
     * Tarjan's strongly connected components algorithm for directed graphs
     * returns an array of arrays of node indicies in each of the strongly connected components.
     * a vertex not in a SCC of two or more nodes is it's own SCC.
     * adaptation of https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
     */
    function stronglyConnectedComponents<Link>(numVertices: number, edges: Link[], la: LinkAccessor<Link>): number[][];
}
declare class PairingHeap<T> {
    elem: T;
    private subheaps;
    constructor(elem: T);
    toString(selector: any): string;
    forEach(f: any): void;
    count(): number;
    min(): T;
    empty(): boolean;
    contains(h: PairingHeap<T>): boolean;
    isHeap(lessThan: (a: T, b: T) => boolean): boolean;
    insert(obj: T, lessThan: any): PairingHeap<T>;
    merge(heap2: PairingHeap<T>, lessThan: any): PairingHeap<T>;
    removeMin(lessThan: (a: T, b: T) => boolean): PairingHeap<T>;
    mergePairs(lessThan: (a: T, b: T) => boolean): PairingHeap<T>;
    decreaseKey(subheap: PairingHeap<T>, newValue: T, setHeapNode: (e: T, h: PairingHeap<T>) => void, lessThan: (a: T, b: T) => boolean): PairingHeap<T>;
}
/**
 * @class PriorityQueue a min priority queue backed by a pairing heap
 */
declare class PriorityQueue<T> {
    private lessThan;
    private root;
    constructor(lessThan: (a: T, b: T) => boolean);
    /**
     * @method top
     * @return the top element (the min element as defined by lessThan)
     */
    top(): T;
    /**
     * @method push
     * put things on the heap
     */
    push(...args: T[]): PairingHeap<T>;
    /**
     * @method empty
     * @return true if no more elements in queue
     */
    empty(): boolean;
    /**
     * @method isHeap check heap condition (for testing)
     * @return true if queue is in valid state
     */
    isHeap(): boolean;
    /**
     * @method forEach apply f to each element of the queue
     * @param f function to apply
     */
    forEach(f: any): void;
    /**
     * @method pop remove and return the min element from the queue
     */
    pop(): T;
    /**
     * @method reduceKey reduce the key value of the specified heap node
     */
    reduceKey(heapNode: PairingHeap<T>, newKey: T, setHeapNode?: (e: T, h: PairingHeap<T>) => void): void;
    toString(selector: any): string;
    /**
     * @method count
     * @return number of elements in queue
     */
    count(): number;
}
/// <reference path="pqueue.d.ts" />
/**
 * @module shortestpaths
 */
declare module cola.shortestpaths {
    /**
     * calculates all-pairs shortest paths or shortest paths from a single node
     * @class Calculator
     * @constructor
     * @param n {number} number of nodes
     * @param es {Edge[]} array of edges
     */
    class Calculator<Link> {
        n: number;
        es: Link[];
        private neighbours;
        constructor(n: number, es: Link[], getSourceIndex: (l: Link) => number, getTargetIndex: (l: Link) => number, getLength: (l: Link) => number);
        /**
         * compute shortest paths for graph over n nodes with edges an array of source/target pairs
         * edges may optionally have a length attribute.  1 is the default.
         * Uses Johnson's algorithm.
         *
         * @method DistanceMatrix
         * @return the distance matrix
         */
        DistanceMatrix(): number[][];
        /**
         * get shortest paths from a specified start node
         * @method DistancesFromNode
         * @param start node index
         * @return array of path lengths
         */
        DistancesFromNode(start: number): number[];
        PathFromNodeToNode(start: number, end: number): number[];
        PathFromNodeToNodeWithPrevCost(start: number, end: number, prevCost: (u: number, v: number, w: number) => number): number[];
        private dijkstraNeighbours(start, dest?);
    }
}
/// <reference path="handledisconnected.d.ts" />
/// <reference path="geom.d.ts" />
/// <reference path="descent.d.ts" />
/// <reference path="powergraph.d.ts" />
/// <reference path="linklengths.d.ts" />
/// <reference path="shortestpaths.d.ts" />
/**
 * @module cola
 */
declare module cola {
    /**
     * The layout process fires three events:
     *  - start: layout iterations started
     *  - tick: fired once per iteration, listen to this to animate
     *  - end: layout converged, you might like to zoom-to-fit or something at notification of this event
     */
    enum EventType {
        start = 0,
        tick = 1,
        end = 2,
    }
    interface Event {
        type: EventType;
        alpha: number;
        stress?: number;
        listener?: () => void;
    }
    interface Node {
        /**
         * x and y will be computed by layout as the Node's centroid
         */
        x: number;
        /**
         * x and y will be computed by layout as the Node's centroid
         */
        y: number;
        /**
         * specify a width and height of the node's bounding box if you turn on avoidOverlaps
         */
        width?: number;
        /**
         * specify a width and height of the node's bounding box if you turn on avoidOverlaps
         */
        height?: any;
        number: any;
    }
    interface Link<NodeType> {
        source: NodeType;
        target: NodeType;
        length?: number;
        weight?: number;
    }
    /**
     * Main interface to cola layout.
     * @class Layout
     */
    class Layout {
        private _canvasSize;
        private _linkDistance;
        private _defaultNodeSize;
        private _linkLengthCalculator;
        private _linkType;
        private _avoidOverlaps;
        private _handleDisconnected;
        private _alpha;
        private _lastStress;
        private _running;
        private _nodes;
        private _groups;
        private _rootGroup;
        private _links;
        private _constraints;
        private _distanceMatrix;
        private _descent;
        private _directedLinkConstraints;
        private _threshold;
        private _visibilityGraph;
        private _groupCompactness;
        protected event: any;
        on(e: EventType | string, listener: (event: Event) => void): Layout;
        protected trigger(e: Event): void;
        protected kick(): void;
        /**
         * iterate the layout.  Returns true when layout converged.
         */
        protected tick(): boolean;
        private updateNodePositions();
        /**
         * the list of nodes.
         * If nodes has not been set, but links has, then we instantiate a nodes list here, of the correct size,
         * before returning it.
         * @property nodes {Array}
         * @default empty list
         */
        nodes(): Array<Node>;
        nodes(v: Array<Node>): Layout;
        /**
         * a list of hierarchical groups defined over nodes
         * @property groups {Array}
         * @default empty list
         */
        groups(): Array<any>;
        groups(x: Array<any>): Layout;
        powerGraphGroups(f: Function): Layout;
        /**
         * if true, the layout will not permit overlaps of the node bounding boxes (defined by the width and height properties on nodes)
         * @property avoidOverlaps
         * @type bool
         * @default false
         */
        avoidOverlaps(): boolean;
        avoidOverlaps(v: boolean): Layout;
        /**
         * if true, the final step of the start method will be to nicely pack connected components of the graph.
         * works best if start() is called with a reasonable number of iterations specified and
         * each node has a bounding box (defined by the width and height properties on nodes).
         * @property handleDisconnected
         * @type bool
         * @default true
         */
        handleDisconnected(): boolean;
        handleDisconnected(v: boolean): Layout;
        /**
         * causes constraints to be generated such that directed graphs are laid out either from left-to-right or top-to-bottom.
         * a separation constraint is generated in the selected axis for each edge that is not involved in a cycle (part of a strongly connected component)
         * @param axis {string} 'x' for left-to-right, 'y' for top-to-bottom
         * @param minSeparation {number|link=>number} either a number specifying a minimum spacing required across all links or a function to return the minimum spacing for each link
         */
        flowLayout(axis: string, minSeparation: number | ((t: any) => number)): Layout;
        /**
         * links defined as source, target pairs over nodes
         * @property links {array}
         * @default empty list
         */
        links(): Array<Link<Node | number>>;
        links(x: Array<Link<Node | number>>): Layout;
        /**
         * list of constraints of various types
         * @property constraints
         * @type {array}
         * @default empty list
         */
        constraints(): Array<any>;
        constraints(c: Array<any>): Layout;
        /**
         * Matrix of ideal distances between all pairs of nodes.
         * If unspecified, the ideal distances for pairs of nodes will be based on the shortest path distance between them.
         * @property distanceMatrix
         * @type {Array of Array of Number}
         * @default null
         */
        distanceMatrix(): Array<Array<number>>;
        distanceMatrix(d: Array<Array<number>>): Layout;
        /**
         * Size of the layout canvas dimensions [x,y]. Currently only used to determine the midpoint which is taken as the starting position
         * for nodes with no preassigned x and y.
         * @property size
         * @type {Array of Number}
         */
        size(): Array<number>;
        size(x: Array<number>): Layout;
        /**
         * Default size (assume nodes are square so both width and height) to use in packing if node width/height are not specified.
         * @property defaultNodeSize
         * @type {Number}
         */
        defaultNodeSize(): number;
        defaultNodeSize(x: number): Layout;
        /**
         * The strength of attraction between the group boundaries to each other.
         * @property defaultNodeSize
         * @type {Number}
         */
        groupCompactness(): number;
        groupCompactness(x: number): Layout;
        /**
         * links have an ideal distance, The automatic layout will compute layout that tries to keep links (AKA edges) as close as possible to this length.
         */
        linkDistance(): number;
        linkDistance(): (t: any) => number;
        linkDistance(x: number): Layout;
        linkDistance(x: (t: any) => number): Layout;
        linkType(f: Function | number): Layout;
        convergenceThreshold(): number;
        convergenceThreshold(x: number): Layout;
        alpha(): number;
        alpha(x: number): Layout;
        getLinkLength(link: any): number;
        static setLinkLength(link: any, length: number): void;
        getLinkType(link: any): number;
        linkAccessor: {
            getSourceIndex: (e: any) => any;
            getTargetIndex: (e: any) => any;
            setLength: (link: any, length: number) => void;
            getType: (l: any) => any;
        };
        /**
         * compute an ideal length for each link based on the graph structure around that link.
         * you can use this (for example) to create extra space around hub-nodes in dense graphs.
         * In particular this calculation is based on the "symmetric difference" in the neighbour sets of the source and target:
         * i.e. if neighbours of source is a and neighbours of target are b then calculation is: sqrt(|a union b| - |a intersection b|)
         * Actual computation based on inspection of link structure occurs in start(), so links themselves
         * don't have to have been assigned before invoking this function.
         * @param {number} [idealLength] the base length for an edge when its source and start have no other common neighbours (e.g. 40)
         * @param {number} [w] a multiplier for the effect of the length adjustment (e.g. 0.7)
         */
        symmetricDiffLinkLengths(idealLength: number, w?: number): Layout;
        /**
         * compute an ideal length for each link based on the graph structure around that link.
         * you can use this (for example) to create extra space around hub-nodes in dense graphs.
         * In particular this calculation is based on the "symmetric difference" in the neighbour sets of the source and target:
         * i.e. if neighbours of source is a and neighbours of target are b then calculation is: |a intersection b|/|a union b|
         * Actual computation based on inspection of link structure occurs in start(), so links themselves
         * don't have to have been assigned before invoking this function.
         * @param {number} [idealLength] the base length for an edge when its source and start have no other common neighbours (e.g. 40)
         * @param {number} [w] a multiplier for the effect of the length adjustment (e.g. 0.7)
         */
        jaccardLinkLengths(idealLength: number, w?: number): Layout;
        /**
         * start the layout process
         * @method start
         * @param {number} [initialUnconstrainedIterations=0] unconstrained initial layout iterations
         * @param {number} [initialUserConstraintIterations=0] initial layout iterations with user-specified constraints
         * @param {number} [initialAllConstraintsIterations=0] initial layout iterations with all constraints including non-overlap
         * @param {number} [gridSnapIterations=0] iterations of "grid snap", which pulls nodes towards grid cell centers - grid of size node[0].width - only really makes sense if all nodes have the same width and height
         * @param [keepRunning=true] keep iterating asynchronously via the tick method
         */
        start(initialUnconstrainedIterations?: number, initialUserConstraintIterations?: number, initialAllConstraintsIterations?: number, gridSnapIterations?: number, keepRunning?: boolean): Layout;
        private separateOverlappingComponents(width, height);
        resume(): Layout;
        stop(): Layout;
        prepareEdgeRouting(nodeMargin?: number): void;
        routeEdge(edge: any, draw: any): any[];
        static getSourceIndex(e: any): any;
        static getTargetIndex(e: any): any;
        static linkId(e: any): string;
        static dragStart(d: any): void;
        static dragEnd(d: any): void;
        static mouseOver(d: any): void;
        static mouseOut(d: any): void;
    }
}
/// <reference path="layout.d.ts" />
declare module cola {
    class LayoutAdaptor extends Layout {
        trigger(e: Event): void;
        kick(): void;
        drag(): void;
        on(eventType: EventType | string, listener: () => void): LayoutAdaptor;
        dragstart: (d: any) => void;
        dragStart: (d: any) => void;
        dragend: (d: any) => void;
        dragEnd: (d: any) => void;
        constructor(options: any);
    }
    /**
     * provides an interface for use with any external graph system (e.g. Cytoscape.js):
     */
    function adaptor(options: any): LayoutAdaptor;
}
declare module cola {
    function gridify(pgLayout: any, nudgeGap: any, margin: any, groupMargin: any): geom.Point[][][];
    function powerGraphGridLayout(graph: {
        nodes: Node[];
        links: Link<Node>[];
    }, size: number[], grouppadding: number, margin: number, groupMargin: number): {
        cola: Layout;
        powerGraph: any;
    };
}
/// <reference path="layout.d.ts" />
declare module cola {
    class D3StyleLayoutAdaptor extends Layout {
        event: any;
        trigger(e: Event): void;
        kick(): void;
        drag: () => any;
        constructor();
        on(eventType: EventType | string, listener: () => void): D3StyleLayoutAdaptor;
    }
    /**
     * provides an interface for use with d3:
     * - uses the d3 event system to dispatch layout events such as:
     *   o "start" (start layout process)
     *   o "tick" (after each layout iteration)
     *   o "end" (layout converged and complete).
     * - uses the d3 timer to queue layout iterations.
     * - sets up d3.behavior.drag to drag nodes
     *   o use `node.call(<the returned instance of Layout>.drag)` to make nodes draggable
     * returns an instance of the cola.Layout itself with which the user
     * can interact directly.
     */
    function d3adaptor(): D3StyleLayoutAdaptor;
}
/// <reference path="rectangle.d.ts" />
/// <reference path="shortestpaths.d.ts" />
/// <reference path="geom.d.ts" />
/// <reference path="vpsc.d.ts" />
declare module cola {
    interface NodeAccessor<Node> {
        getChildren(v: Node): number[];
        getBounds(v: Node): cola.vpsc.Rectangle;
    }
    class NodeWrapper {
        id: number;
        rect: cola.vpsc.Rectangle;
        children: number[];
        leaf: boolean;
        parent: NodeWrapper;
        ports: Vert[];
        constructor(id: number, rect: cola.vpsc.Rectangle, children: number[]);
    }
    class Vert {
        id: number;
        x: number;
        y: number;
        node: NodeWrapper;
        line: any;
        constructor(id: number, x: number, y: number, node?: NodeWrapper, line?: any);
    }
    class LongestCommonSubsequence<T> {
        s: T[];
        t: T[];
        length: number;
        si: number;
        ti: number;
        reversed: boolean;
        constructor(s: T[], t: T[]);
        private static findMatch<T>(s, t);
        getSequence(): T[];
    }
    interface GridLine {
        nodes: NodeWrapper[];
        pos: number;
    }
    class GridRouter<Node> {
        originalnodes: Node[];
        groupPadding: number;
        leaves: NodeWrapper[];
        groups: NodeWrapper[];
        nodes: NodeWrapper[];
        cols: GridLine[];
        rows: GridLine[];
        root: any;
        verts: Vert[];
        edges: any;
        backToFront: any;
        obstacles: any;
        passableEdges: any;
        private avg(a);
        private getGridLines(axis);
        private getDepth(v);
        private midPoints(a);
        constructor(originalnodes: Node[], accessor: NodeAccessor<Node>, groupPadding?: number);
        private findLineage(v);
        private findAncestorPathBetween(a, b);
        siblingObstacles(a: any, b: any): any;
        static getSegmentSets(routes: any, x: any, y: any): any[];
        static nudgeSegs(x: string, y: string, routes: any, segments: any, leftOf: any, gap: number): void;
        static nudgeSegments(routes: any, x: string, y: string, leftOf: (e1: number, e2: number) => boolean, gap: number): void;
        routeEdges<Edge>(edges: Edge[], nudgeGap: number, source: (e: Edge) => number, target: (e: Edge) => number): geom.Point[][][];
        static unreverseEdges(routes: any, routePaths: any): void;
        static angleBetween2Lines(line1: geom.Point[], line2: geom.Point[]): number;
        private static isLeft(a, b, c);
        private static getOrder(pairs);
        static orderEdges(edges: any): (l: number, r: number) => boolean;
        static makeSegments(path: geom.Point[]): geom.Point[][];
        route(s: number, t: number): geom.Point[];
        static getRoutePath(route: geom.Point[][], cornerradius: number, arrowwidth: number, arrowheight: number): {
            routepath: string;
            arrowpath: string;
        };
    }
}
/**
 * Use cola to do a layout in 3D!! Yay.
 * Pretty simple for the moment.
 */
declare module cola {
    class Link3D {
        source: number;
        target: number;
        length: number;
        constructor(source: number, target: number);
        actualLength(x: number[][]): number;
    }
    class Node3D implements vpsc.GraphNode {
        x: number;
        y: number;
        z: number;
        fixed: boolean;
        width: number;
        height: number;
        px: number;
        py: number;
        bounds: vpsc.Rectangle;
        variable: vpsc.Variable;
        constructor(x?: number, y?: number, z?: number);
    }
    class Layout3D {
        nodes: Node3D[];
        links: Link3D[];
        idealLinkLength: number;
        static dims: string[];
        static k: number;
        result: number[][];
        constraints: any[];
        constructor(nodes: Node3D[], links: Link3D[], idealLinkLength?: number);
        linkLength(l: Link3D): number;
        useJaccardLinkLengths: boolean;
        descent: cola.Descent;
        start(iterations?: number): Layout3D;
        tick(): number;
    }
}
