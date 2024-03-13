export interface TriangulateSwitches {
    pslg?: boolean;
    quality?: boolean | number;
    area?: boolean | number;
    ccdt?: boolean;
    refine?: boolean;
    convexHull?: boolean;
    jettison?: boolean;
    edges?: boolean;
    neighbors?: boolean;
    quadratic2?: boolean;
    regionAttr?: boolean;
    bndMarkers?: boolean;
    holes?: boolean;
    steiner?: number;
    quiet?: boolean;
}

export interface TriangulateData {
    pointlist: number[];
    pointattributelist?: number[];
    pointmarkerlist?: number[];
    trianglelist?: number[];
    triangleattributelist?: number[];
    trianglearealist?: number[];
    neighborlist?: number[];
    holelist?: number[];
    regionlist?: number[];
    edgelist?: number[];
    edgemarkerlist?: number[];
}

export interface TriangulateIO {
    // arr: Int32Array; // "private" properties
    // ptr: number; // "private" properties
    pointlist: number[];
    pointattributelist?: number[];
    pointmarkerlist?: number[];
    trianglelist?: number[];
    triangleattributelist?: number[];
    trianglearealist?: number[];
    neighborlist?: number[];
    holelist?: number[];
    regionlist?: number[];
    edgelist?: number[];
    edgemarkerlist?: number[];
    readonly numberofpoints: number;
    readonly numberofpointattributes?: number;
    readonly numberoftriangles?: number;
    readonly numberofcorners?: number;
    readonly numberoftriangleattributes?: number;
    readonly numberofsegments?: number;
    readonly numberofholes?: number;
    readonly numberofregions?: number;
    readonly numberofedges?: number;
}

/**
 * Initialises the WASM module.
 *
 * @param [path] (default `'/'`) path to triangle.out.wasm (See [Distributing WASM](https://github.com/brunoimbrizi/triangle-wasm#distributing-wasm))
 * @returns `Promise` which resolves when the .wasm module is ready.
 */
export function init(path?: string): Promise<void>;

/**
 * Triangulates the data passed in as `input` and writes the result to `ouput`
 * (and the optional Voronoi result to `vorout`).
 *
 * @param switches an object or a string of switches
 * @param input the input data
 * @param output initialised, but empty
 * @param [vorout] initialised, but empty
 */
export function triangulate(
    switches: TriangulateSwitches | string,
    input: TriangulateIO,
    output: TriangulateIO,
    vorout?: TriangulateIO | null,
): void;

/**
 * Creates an instance of `TriangulateIO` and allocates memory on the heap.
 * `data` is only required when creating an input instance.
 *
 * @returns instance of `TriangulateIO`
 */
export function makeIO(data?: TriangulateData): TriangulateIO;

/**
 * Releases the allocated memory for an input/output instance.
 *
 * @param io reference to the stored i/o object
 * @param [all] release all copied pointers
 */
export function freeIO(io: TriangulateIO, all?: boolean): void;

export function getSwitchesStr(
    switches: TriangulateSwitches | string,
    input: TriangulateIO,
    vorout?: TriangulateIO | null,
): string;
