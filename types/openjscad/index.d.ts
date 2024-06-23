/// <reference types="three" />

declare module "three" {
    var CSG: {
        fromCSG: (csg: CSG, defaultColor: any) => {
            colorMesh: THREE.Mesh;
            wireframe: THREE.Mesh;
            boundLen: number;
        };
        getGeometryVertex: (geometry: any, vertex_position: any) => number;
    };
    /*
    function OrbitControls(object: any, domElement: any): void;
    function SpriteCanvasMaterial(parameters?: any): void;
    */
    interface ICanvasRendererOptions {
        canvas?: HTMLCanvasElement | undefined;
        alpha?: boolean | undefined;
    }
    /*
    class CanvasRenderer implements Renderer {
        domElement: HTMLCanvasElement;
        private pixelRatio;
        private autoClear;
        private sortObjects;
        private sortElements;
        private info;
        private _projector;
        private _renderData;
        private _elements;
        private _lights;
        private _canvas;
        private _canvasWidth;
        private _canvasHeight;
        private _canvasWidthHalf;
        private _canvasHeightHalf;
        private _viewportX;
        private _viewportY;
        private _viewportWidth;
        private _viewportHeight;
        private _context;
        private _clearColor;
        private _clearAlpha;
        private _contextGlobalAlpha;
        private _contextGlobalCompositeOperation;
        private _contextStrokeStyle;
        private _camera;
        private _contextFillStyle;
        private _contextLineWidth;
        private _contextLineCap;
        private _contextLineJoin;
        private _contextLineDash;
        private _v1;
        private _v2;
        private _v3;
        private _v4;
        private _v5;
        private _v6;
        private _v1x;
        private _v1y;
        private _v2x;
        private _v2y;
        private _v3x;
        private _v3y;
        private _v4x;
        private _v4y;
        private _v5x;
        private _v5y;
        private _v6x;
        private _v6y;
        private _color;
        private _color1;
        private _color2;
        private _color3;
        private _color4;
        private _diffuseColor;
        private _emissiveColor;
        private _lightColor;
        private _patterns;
        private _image;
        private _uvs;
        private _uv1x;
        private _uv1y;
        private _uv2x;
        private _uv2y;
        private _uv3x;
        private _uv3y;
        private _clipBox;
        private _clearBox;
        private _elemBox;
        private _ambientLight;
        private _directionalLights;
        private _pointLights;
        private _vector3;
        private _centroid;
        private _normal;
        private _normalViewMatrix;
        constructor(parameters: ICanvasRendererOptions);
        supportsVertexTextures(): void;
        setFaceCulling: () => void;
        getPixelRatio(): number;
        setPixelRatio(value: any): void;
        setSize(width: any, height: any, updateStyle: any): void;
        setViewport(x: any, y: any, width: any, height: any): void;
        setScissor(): void;
        enableScissorTest(): void;
        setClearColor(color: any, alpha: any): void;
        setClearColorHex(hex: any, alpha: any): void;
        getClearColor(): Color;
        getClearAlpha(): number;
        getMaxAnisotropy(): number;
        clear(): void;
        clearColor(): void;
        clearDepth(): void;
        clearStencil(): void;
        render(scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: boolean): void;
        calculateLights(): void;
        calculateLight(position: any, normal: any, color: any): void;
        renderSprite(v1: any, element: any, material: any): void;
        renderLine(v1: any, v2: any, element: any, material: any): void;
        renderFace3(v1: any, v2: any, v3: any, uv1: any, uv2: any, uv3: any, element: any, material: any): void;
        drawTriangle(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any): void;
        strokePath(color: any, linewidth: any, linecap: any, linejoin: any): void;
        fillPath(color: any): void;
        onTextureUpdate(event: any): void;
        textureToPattern(texture: any): void;
        patternPath(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any, u0: any, v0: any, u1: any, v1: any, u2: any, v2: any, texture: any): void;
        clipImage(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any, u0: any, v0: any, u1: any, v1: any, u2: any, v2: any, image: any): void;
        expand(v1: any, v2: any, pixels: any): void;
        setOpacity(value: any): void;
        setBlending(value: any): void;
        setLineWidth(value: any): void;
        setLineCap(value: any): void;
        setLineJoin(value: any): void;
        setStrokeStyle(value: any): void;
        setFillStyle(value: any): void;
        setLineDash(value: any): void;
    }
    function RenderableObject(): void;
    function RenderableFace(): void;
    function RenderableVertex(): void;
    function RenderableLine(): void;
    function RenderableSprite(): void;
    function Projector(): void;
    */
}
declare namespace OpenJsCad {
    interface ILog {
        (x: string): void;
        prevLogTime?: number | undefined;
    }
    var log: ILog;
    interface IViewerOptions {
        drawLines?: boolean | undefined;
        drawFaces?: boolean | undefined;
        color?: number[] | undefined;
        bgColor?: number | undefined;
        noWebGL?: boolean | undefined;
    }
    interface ProcessorOptions extends IViewerOptions {
        verbose?: boolean | undefined;
        viewerwidth?: number | undefined;
        viewerheight?: number | undefined;
        viewerheightratio?: number | undefined;
    }
    class Viewer {
        private perspective;
        private drawOptions;
        private size;
        private defaultColor_;
        private bgColor_;
        private containerElm_;
        private scene_;
        private camera_;
        private controls_;
        private renderer_;
        private canvas;
        private pauseRender_;
        private requestID_;
        constructor(containerElm: any, size: any, options: IViewerOptions);
        createScene(drawAxes: any, axLen: any): void;
        createCamera(): void;
        createControls(canvas: any): void;
        webGLAvailable(): boolean;
        createRenderer(bool_noWebGL: any): void;
        render(): void;
        animate(): void;
        cancelAnimate(): void;
        refreshRenderer(bool_noWebGL: any): void;
        drawAxes(axLen: any): void;
        setCsg(csg: any, resetZoom: any): void;
        applyDrawOptions(): void;
        clear(): void;
        getUserMeshes(str?: any): THREE.Object3D[];
        resetZoom(r: any): void;
        parseSizeParams(): void;
        handleResize(): void;
    }
    function makeAbsoluteUrl(url: any, baseurl: any): any;
    function isChrome(): boolean;
    function runMainInWorker(mainParameters: any): void;
    function expandResultObjectArray(result: any): any;
    function checkResult(result: any): void;
    function resultToCompactBinary(resultin: any): any;
    function resultFromCompactBinary(resultin: any): any;
    function parseJsCadScriptSync(script: any, mainParameters: any, debugging: any): any;
    function parseJsCadScriptASync(script: any, mainParameters: any, options: any, callback: any): Worker;
    function getWindowURL(): URL;
    function textToBlobUrl(txt: any): string;
    function revokeBlobUrl(url: any): void;
    function FileSystemApiErrorHandler(fileError: any, operation: any): void;
    function AlertUserOfUncaughtExceptions(): void;
    function getParamDefinitions(script: any): any[];
    interface EventHandler {
        (ev?: Event): any;
    }
    /**
     * options parameter:
     * - drawLines: display wireframe lines
     * - drawFaces: display surfaces
     * - bgColor: canvas background color
     * - color: object color
     * - viewerwidth, viewerheight: set rendering size. Works with any css unit.
     *     viewerheight can also be specified as a ratio to width, ie number e (0, 1]
     * - noWebGL: force render without webGL
     * - verbose: show additional info (currently only time used for rendering)
     */
    interface ViewerSize {
        widthDefault: string;
        heightDefault: string;
        width: number;
        height: number;
        heightratio: number;
    }
    class Processor {
        private containerdiv;
        private options;
        private onchange;
        private static widthDefault;
        private static heightDefault;
        private viewerdiv;
        private viewer;
        private viewerSize;
        private processing;
        private currentObject;
        private hasValidCurrentObject;
        private hasOutputFile;
        private worker;
        private paramDefinitions;
        private paramControls;
        private script;
        private hasError;
        private debugging;
        private errordiv;
        private errorpre;
        private statusdiv;
        private controldiv;
        private statusspan;
        private statusbuttons;
        private abortbutton;
        private renderedElementDropdown;
        private formatDropdown;
        private generateOutputFileButton;
        private downloadOutputFileLink;
        private parametersdiv;
        private parameterstable;
        private currentFormat;
        private filename;
        private currentObjects;
        private currentObjectIndex;
        private isFirstRender_;
        private outputFileDirEntry;
        private outputFileBlobUrl;
        constructor(containerdiv: HTMLDivElement, options?: ProcessorOptions, onchange?: EventHandler);
        static convertToSolid(obj: any): any;
        cleanOption(option: any, deflt: any): any;
        toggleDrawOption(str: any): boolean;
        setDrawOption(str: any, bool: any): void;
        handleResize(): void;
        createElements(): void;
        getFilenameForRenderedObject(): string;
        setRenderedObjects(obj: any): void;
        setSelectedObjectIndex(index: number): void;
        selectedFormat(): any;
        selectedFormatInfo(): any;
        updateDownloadLink(): void;
        clearViewer(): void;
        abort(): void;
        enableItems(): void;
        setOpenJsCadPath(path: string): void;
        addLibrary(lib: any): void;
        setError(txt: string): void;
        setDebugging(debugging: boolean): void;
        setJsCad(script: string, filename?: string): void;
        getParamValues(): {};
        rebuildSolid(): void;
        hasSolid(): boolean;
        isProcessing(): boolean;
        clearOutputFile(): void;
        generateOutputFile(): void;
        currentObjectToBlob(): any;
        supportedFormatsForCurrentObject(): string[];
        formatInfo(format: any): any;
        downloadLinkTextForCurrentObject(): string;
        generateOutputFileBlobUrl(): void;
        generateOutputFileFileSystem(): void;
        createParamControls(): void;
    }
}
interface Window {
    Worker: Worker;
    //    URL: URL;
    webkitURL: URL;
    requestFileSystem: any;
    webkitRequestFileSystem: any;
}
interface IAMFStringOptions {
    unit: string;
}
declare class CxG {
    toStlString(): string;
    toStlBinary(): void;
    toAMFString(AMFStringOptions?: IAMFStringOptions): void;
    getBounds(): CxG[];
    transform(matrix4x4: CSG.Matrix4x4): CxG;
    mirrored(plane: CSG.Plane): CxG;
    mirroredX(): CxG;
    mirroredY(): CxG;
    mirroredZ(): CxG;
    translate(v: number[]): CxG;
    translate(v: CSG.Vector3D): CxG;
    scale(f: CSG.Vector3D): CxG;
    rotateX(deg: number): CxG;
    rotateY(deg: number): CxG;
    rotateZ(deg: number): CxG;
    rotate(rotationCenter: CSG.Vector3D, rotationAxis: CSG.Vector3D, degrees: number): CxG;
    rotateEulerAngles(alpha: number, beta: number, gamma: number, position: number[]): CxG;
}
interface ICenter {
    center(cAxes: string[]): CxG;
}
declare class CSG extends CxG implements ICenter {
    polygons: CSG.Polygon[];
    properties: CSG.Properties;
    isCanonicalized: boolean;
    isRetesselated: boolean;
    cachedBoundingBox: CSG.Vector3D[];
    static defaultResolution2D: number;
    static defaultResolution3D: number;
    static fromPolygons(polygons: CSG.Polygon[]): CSG;
    static fromSlices(options: any): CSG;
    static fromObject(obj: any): CSG;
    static fromCompactBinary(bin: any): CSG;
    toPolygons(): CSG.Polygon[];
    union(csg: CSG[]): CSG;
    union(csg: CSG): CSG;
    unionSub(csg: CSG, retesselate?: boolean, canonicalize?: boolean): CSG;
    unionForNonIntersecting(csg: CSG): CSG;
    subtract(csg: CSG[]): CSG;
    subtract(csg: CSG): CSG;
    subtractSub(csg: CSG, retesselate: boolean, canonicalize: boolean): CSG;
    intersect(csg: CSG[]): CSG;
    intersect(csg: CSG): CSG;
    intersectSub(csg: CSG, retesselate?: boolean, canonicalize?: boolean): CSG;
    invert(): CSG;
    transform1(matrix4x4: CSG.Matrix4x4): CSG;
    transform(matrix4x4: CSG.Matrix4x4): CSG;
    toString(): string;
    expand(radius: number, resolution: number): CSG;
    contract(radius: number, resolution: number): CSG;
    stretchAtPlane(normal: number[], point: number[], length: number): CSG;
    expandedShell(radius: number, resolution: number, unionWithThis: boolean): CSG;
    canonicalized(): CSG;
    reTesselated(): CSG;
    getBounds(): CSG.Vector3D[];
    mayOverlap(csg: CSG): boolean;
    cutByPlane(plane: CSG.Plane): CSG;
    connectTo(myConnector: CSG.Connector, otherConnector: CSG.Connector, mirror: boolean, normalrotation: number): CSG;
    setShared(shared: CSG.Polygon.Shared): CSG;
    setColor(args: any): CSG;
    toCompactBinary(): {
        "class": string;
        numPolygons: number;
        numVerticesPerPolygon: Uint32Array;
        polygonPlaneIndexes: Uint32Array;
        polygonSharedIndexes: Uint32Array;
        polygonVertices: Uint32Array;
        vertexData: Float64Array;
        planeData: Float64Array;
        shared: CSG.Polygon.Shared[];
    };
    toPointCloud(cuberadius: any): CSG;
    getTransformationAndInverseTransformationToFlatLying(): any;
    getTransformationToFlatLying(): any;
    lieFlat(): CSG;
    projectToOrthoNormalBasis(orthobasis: CSG.OrthoNormalBasis): CAG;
    sectionCut(orthobasis: CSG.OrthoNormalBasis): CAG;
    fixTJunctions(): CSG;
    toTriangles(): any[];
    getFeatures(features: any): any;
    center(cAxes: string[]): CxG;
    toX3D(): Blob;
    toStlBinary(): Blob;
    toStlString(): string;
    toAMFString(m: IAMFStringOptions): Blob;
}
declare namespace CSG {
    function fnNumberSort(a: any, b: any): number;
    function parseOption(options: any, optionname: any, defaultvalue: any): any;
    function parseOptionAs3DVector(options: any, optionname: any, defaultvalue: any): Vector3D;
    function parseOptionAs3DVectorList(options: any, optionname: any, defaultvalue: any): any;
    function parseOptionAs2DVector(options: any, optionname: any, defaultvalue: any): any;
    function parseOptionAsFloat(options: any, optionname: any, defaultvalue: any): any;
    function parseOptionAsInt(options: any, optionname: any, defaultvalue: any): any;
    function parseOptionAsBool(options: any, optionname: any, defaultvalue: any): any;
    function cube(options: any): CSG;
    function sphere(options: any): CSG;
    function cylinder(options: any): CSG;
    function roundedCylinder(options: any): CSG;
    function roundedCube(options: any): CSG;
    /**
     * polyhedron accepts openscad style arguments. I.e. define face vertices clockwise looking from outside
     */
    function polyhedron(options: any): CSG;
    function IsFloat(n: any): boolean;
    function solve2Linear(a: any, b: any, c: any, d: any, u: any, v: any): number[];
    class Vector3D extends CxG {
        x: number;
        y: number;
        z: number;
        constructor(v3: Vector3D);
        constructor(v2: Vector2D);
        constructor(v2: number[]);
        constructor(x: number, y: number);
        constructor(x: number, y: number, z: number);
        static Create(x: number, y: number, z: number): Vector3D;
        clone(): Vector3D;
        negated(): Vector3D;
        abs(): Vector3D;
        plus(a: Vector3D): Vector3D;
        minus(a: Vector3D): Vector3D;
        times(a: number): Vector3D;
        dividedBy(a: number): Vector3D;
        dot(a: Vector3D): number;
        lerp(a: Vector3D, t: number): Vector3D;
        lengthSquared(): number;
        length(): number;
        unit(): Vector3D;
        cross(a: Vector3D): Vector3D;
        distanceTo(a: Vector3D): number;
        distanceToSquared(a: Vector3D): number;
        equals(a: Vector3D): boolean;
        multiply4x4(matrix4x4: Matrix4x4): Vector3D;
        transform(matrix4x4: Matrix4x4): Vector3D;
        toString(): string;
        randomNonParallelVector(): Vector3D;
        min(p: Vector3D): Vector3D;
        max(p: Vector3D): Vector3D;
        toStlString(): string;
        toAMFString(): string;
    }
    class Vertex extends CxG {
        pos: Vector3D;
        tag: number;
        constructor(pos: Vector3D);
        static fromObject(obj: any): Vertex;
        flipped(): Vertex;
        getTag(): number;
        interpolate(other: Vertex, t: number): Vertex;
        transform(matrix4x4: Matrix4x4): Vertex;
        toString(): string;
        toStlString(): string;
        toAMFString(): string;
    }
    class Plane extends CxG {
        normal: Vector3D;
        w: number;
        tag: number;
        constructor(normal: Vector3D, w: number);
        static fromObject(obj: any): Plane;
        static EPSILON: number;
        static fromVector3Ds(a: Vector3D, b: Vector3D, c: Vector3D): Plane;
        static anyPlaneFromVector3Ds(a: Vector3D, b: Vector3D, c: Vector3D): Plane;
        static fromPoints(a: Vector3D, b: Vector3D, c: Vector3D): Plane;
        static fromNormalAndPoint(normal: Vector3D, point: Vector3D): Plane;
        static fromNormalAndPoint(normal: number[], point: number[]): Plane;
        flipped(): Plane;
        getTag(): number;
        equals(n: Plane): boolean;
        transform(matrix4x4: Matrix4x4): Plane;
        splitPolygon(polygon: Polygon): {
            type: any;
            front: any;
            back: any;
        };
        splitLineBetweenPoints(p1: Vector3D, p2: Vector3D): Vector3D;
        intersectWithLine(line3d: Line3D): Vector3D;
        intersectWithPlane(plane: Plane): Line3D;
        signedDistanceToPoint(point: Vector3D): number;
        toString(): string;
        mirrorPoint(point3d: Vector3D): Vector3D;
    }
    class Polygon extends CxG {
        vertices: Vertex[];
        shared: Polygon.Shared;
        plane: Plane;
        cachedBoundingSphere: any;
        cachedBoundingBox: Vector3D[];
        static defaultShared: CSG.Polygon.Shared;
        constructor(vertices: Vector3D, shared?: Polygon.Shared, plane?: Plane);
        constructor(vertices: Vertex[], shared?: Polygon.Shared, plane?: Plane);
        static fromObject(obj: any): Polygon;
        checkIfConvex(): void;
        setColor(args: any): Polygon;
        getSignedVolume(): number;
        getArea(): number;
        getTetraFeatures(features: any): any[];
        extrude(offsetvector: any): CSG;
        boundingSphere(): any;
        boundingBox(): Vector3D[];
        flipped(): Polygon;
        transform(matrix4x4: Matrix4x4): Polygon;
        toString(): string;
        projectToOrthoNormalBasis(orthobasis: OrthoNormalBasis): CAG;
        /**
         * Creates solid from slices (CSG.Polygon) by generating walls
         * @param {Object} options Solid generating options
         *  - numslices {Number} Number of slices to be generated
         *  - callback(t, slice) {Function} Callback function generating slices.
         *          arguments: t = [0..1], slice = [0..numslices - 1]
         *          return: CSG.Polygon or null to skip
         *  - loop {Boolean} no flats, only walls, it's used to generate solids like a tor
         */
        solidFromSlices(options: any): CSG;
        /**
         * @param walls Array of wall polygons
         * @param bottom Bottom polygon
         * @param top Top polygon
         */
        private _addWalls(walls, bottom, top, bFlipped);
        static verticesConvex(vertices: Vertex[], planenormal: any): boolean;
        static createFromPoints(points: number[][], shared?: CSG.Polygon.Shared, plane?: Plane): Polygon;
        static isConvexPoint(prevpoint: any, point: any, nextpoint: any, normal: any): boolean;
        static isStrictlyConvexPoint(prevpoint: any, point: any, nextpoint: any, normal: any): boolean;
        toStlString(): string;
    }
}
declare namespace CSG.Polygon {
    class Shared {
        color: any;
        tag: any;
        constructor(color: any);
        static fromObject(obj: any): Shared;
        static fromColor(args: any): Shared;
        getTag(): any;
        getHash(): any;
    }
}
declare namespace CSG {
    class PolygonTreeNode {
        parent: any;
        children: any;
        polygon: Polygon;
        removed: boolean;
        constructor();
        addPolygons(polygons: any): void;
        remove(): void;
        isRemoved(): boolean;
        isRootNode(): boolean;
        invert(): void;
        getPolygon(): Polygon;
        getPolygons(result: Polygon[]): void;
        splitByPlane(
            plane: any,
            coplanarfrontnodes: any,
            coplanarbacknodes: any,
            frontnodes: any,
            backnodes: any,
        ): void;
        _splitByPlane(
            plane: any,
            coplanarfrontnodes: any,
            coplanarbacknodes: any,
            frontnodes: any,
            backnodes: any,
        ): void;
        addChild(polygon: Polygon): PolygonTreeNode;
        invertSub(): void;
        recursivelyInvalidatePolygon(): void;
    }
    class Tree {
        polygonTree: PolygonTreeNode;
        rootnode: Node;
        constructor(polygons: Polygon[]);
        invert(): void;
        clipTo(tree: Tree, alsoRemovecoplanarFront?: boolean): void;
        allPolygons(): Polygon[];
        addPolygons(polygons: Polygon[]): void;
    }
    class Node {
        parent: Node;
        plane: Plane;
        front: any;
        back: any;
        polygontreenodes: PolygonTreeNode[];
        constructor(parent: Node);
        invert(): void;
        clipPolygons(polygontreenodes: PolygonTreeNode[], alsoRemovecoplanarFront: boolean): void;
        clipTo(tree: Tree, alsoRemovecoplanarFront: boolean): void;
        addPolygonTreeNodes(polygontreenodes: PolygonTreeNode[]): void;
        getParentPlaneNormals(normals: Vector3D[], maxdepth: number): void;
    }
    class Matrix4x4 {
        elements: number[];
        constructor(elements?: number[]);
        plus(m: Matrix4x4): Matrix4x4;
        minus(m: Matrix4x4): Matrix4x4;
        multiply(m: Matrix4x4): Matrix4x4;
        clone(): Matrix4x4;
        rightMultiply1x3Vector(v: Vector3D): Vector3D;
        leftMultiply1x3Vector(v: Vector3D): Vector3D;
        rightMultiply1x2Vector(v: Vector2D): Vector2D;
        leftMultiply1x2Vector(v: Vector2D): Vector2D;
        isMirroring(): boolean;
        static unity(): Matrix4x4;
        static rotationX(degrees: number): Matrix4x4;
        static rotationY(degrees: number): Matrix4x4;
        static rotationZ(degrees: number): Matrix4x4;
        static rotation(rotationCenter: CSG.Vector3D, rotationAxis: CSG.Vector3D, degrees: number): Matrix4x4;
        static translation(v: number[]): Matrix4x4;
        static translation(v: Vector3D): Matrix4x4;
        static mirroring(plane: Plane): Matrix4x4;
        static scaling(v: number[]): Matrix4x4;
        static scaling(v: Vector3D): Matrix4x4;
    }
    class Vector2D extends CxG {
        x: number;
        y: number;
        constructor(x: number, y: number);
        constructor(x: number[]);
        constructor(x: Vector2D);
        static fromAngle(radians: number): Vector2D;
        static fromAngleDegrees(degrees: number): Vector2D;
        static fromAngleRadians(radians: number): Vector2D;
        static Create(x: number, y: number): Vector2D;
        toVector3D(z: number): Vector3D;
        equals(a: Vector2D): boolean;
        clone(): Vector2D;
        negated(): Vector2D;
        plus(a: Vector2D): Vector2D;
        minus(a: Vector2D): Vector2D;
        times(a: number): Vector2D;
        dividedBy(a: number): Vector2D;
        dot(a: Vector2D): number;
        lerp(a: Vector2D, t: number): Vector2D;
        length(): number;
        distanceTo(a: Vector2D): number;
        distanceToSquared(a: Vector2D): number;
        lengthSquared(): number;
        unit(): Vector2D;
        cross(a: Vector2D): number;
        normal(): Vector2D;
        multiply4x4(matrix4x4: Matrix4x4): Vector2D;
        transform(matrix4x4: Matrix4x4): Vector2D;
        angle(): number;
        angleDegrees(): number;
        angleRadians(): number;
        min(p: Vector2D): Vector2D;
        max(p: Vector2D): Vector2D;
        toString(): string;
        abs(): Vector2D;
    }
    class Line2D extends CxG {
        normal: Vector2D;
        w: number;
        constructor(normal: Vector2D, w: number);
        static fromPoints(p1: Vector2D, p2: Vector2D): Line2D;
        reverse(): Line2D;
        equals(l: Line2D): boolean;
        origin(): Vector2D;
        direction(): Vector2D;
        xAtY(y: number): number;
        absDistanceToPoint(point: Vector2D): number;
        intersectWithLine(line2d: Line2D): Vector2D;
        transform(matrix4x4: Matrix4x4): Line2D;
    }
    class Line3D extends CxG {
        point: Vector3D;
        direction: Vector3D;
        constructor(point: Vector3D, direction: Vector3D);
        static fromPoints(p1: Vector3D, p2: Vector3D): Line3D;
        static fromPlanes(p1: Plane, p2: Plane): Line3D;
        intersectWithPlane(plane: Plane): Vector3D;
        clone(): Line3D;
        reverse(): Line3D;
        transform(matrix4x4: Matrix4x4): Line3D;
        closestPointOnLine(point: Vector3D): Vector3D;
        distanceToPoint(point: Vector3D): number;
        equals(line3d: Line3D): boolean;
    }
    class OrthoNormalBasis extends CxG {
        v: Vector3D;
        u: Vector3D;
        plane: Plane;
        planeorigin: Vector3D;
        constructor(plane: Plane, rightvector?: Vector3D);
        static GetCartesian(xaxisid: string, yaxisid: string): OrthoNormalBasis;
        static Z0Plane(): OrthoNormalBasis;
        getProjectionMatrix(): Matrix4x4;
        getInverseProjectionMatrix(): Matrix4x4;
        to2D(vec3: Vector3D): Vector2D;
        to3D(vec2: Vector2D): Vector3D;
        line3Dto2D(line3d: Line3D): Line2D;
        line2Dto3D(line2d: Line2D): Line3D;
        transform(matrix4x4: Matrix4x4): OrthoNormalBasis;
    }
    function interpolateBetween2DPointsForY(point1: Vector2D, point2: Vector2D, y: number): number;
    function reTesselateCoplanarPolygons(sourcepolygons: CSG.Polygon[], destpolygons: CSG.Polygon[]): void;
    class fuzzyFactory {
        multiplier: number;
        lookuptable: any;
        constructor(numdimensions: number, tolerance: number);
        lookupOrCreate(els: any, creatorCallback: any): any;
    }
    class fuzzyCSGFactory {
        vertexfactory: fuzzyFactory;
        planefactory: fuzzyFactory;
        polygonsharedfactory: any;
        constructor();
        getPolygonShared(sourceshared: Polygon.Shared): Polygon.Shared;
        getVertex(sourcevertex: Vertex): Vertex;
        getPlane(sourceplane: Plane): Plane;
        getPolygon(sourcepolygon: Polygon): Polygon;
        getCSG(sourcecsg: CSG): CSG;
    }
    var staticTag: number;
    function getTag(): number;
    class Properties {
        cube: Properties;
        center: any;
        facecenters: any[];
        roundedCube: Properties;
        cylinder: Properties;
        start: any;
        end: any;
        facepointH: any;
        facepointH90: any;
        sphere: Properties;
        facepoint: any;
        roundedCylinder: any;
        _transform(matrix4x4: Matrix4x4): Properties;
        _merge(otherproperties: Properties): Properties;
        static transformObj(source: any, result: any, matrix4x4: Matrix4x4): void;
        static cloneObj(source: any, result: any): void;
        static addFrom(result: any, otherproperties: Properties): void;
    }
    class Connector extends CxG {
        point: Vector3D;
        axisvector: Vector3D;
        normalvector: Vector3D;
        constructor(point: number[], axisvector: Vector3D, normalvector: number[]);
        constructor(point: number[], axisvector: number[], normalvector: number[]);
        constructor(point: number[], axisvector: number[], normalvector: Vector3D);
        constructor(point: Vector3D, axisvector: number[], normalvector: Vector3D);
        constructor(point: Vector3D, axisvector: number[], normalvector: number[]);
        constructor(point: Vector3D, axisvector: Vector3D, normalvector: Vector3D);
        normalized(): Connector;
        transform(matrix4x4: Matrix4x4): Connector;
        getTransformationTo(other: Connector, mirror: boolean, normalrotation: number): Matrix4x4;
        axisLine(): Line3D;
        extend(distance: number): Connector;
    }
    class ConnectorList {
        connectors_: Connector[];
        closed: boolean;
        constructor(connectors: Connector[]);
        static defaultNormal: number[];
        static fromPath2D(path2D: CSG.Path2D, arg1: any, arg2: any): ConnectorList;
        static _fromPath2DTangents(path2D: any, start: any, end: any): ConnectorList;
        static _fromPath2DExplicit(path2D: any, angleIsh: any): ConnectorList;
        setClosed(bool: boolean): void;
        appendConnector(conn: Connector): void;
        followWith(cagish: any): CSG;
        verify(): void;
    }
    interface IRadiusOptions {
        radius?: number | undefined;
        resolution?: number | undefined;
    }
    interface ICircleOptions extends IRadiusOptions {
        center?: Vector2D | number[] | undefined;
    }
    interface IArcOptions extends ICircleOptions {
        startangle?: number | undefined;
        endangle?: number | undefined;
        maketangent?: boolean | undefined;
    }
    interface IEllpiticalArcOptions extends IRadiusOptions {
        clockwise?: boolean | undefined;
        large?: boolean | undefined;
        xaxisrotation?: number | undefined;
        xradius?: number | undefined;
        yradius?: number | undefined;
    }
    interface IRectangleOptions {
        center?: Vector2D | undefined;
        corner1?: Vector2D | undefined;
        corner2?: Vector2D | undefined;
        radius?: Vector2D | undefined;
    }
    interface IRoundRectangleOptions {
        roundradius: number;
        resolution?: number | undefined;
    }
    class Path2D extends CxG {
        closed: boolean;
        points: Vector2D[];
        lastBezierControlPoint: Vector2D;
        constructor(points: number[], closed?: boolean);
        constructor(points: Vector2D[], closed?: boolean);
        static arc(options: IArcOptions): Path2D;
        concat(otherpath: Path2D): Path2D;
        appendPoint(point: Vector2D): Path2D;
        appendPoints(points: Vector2D[]): Path2D;
        close(): Path2D;
        rectangularExtrude(width: number, height: number, resolution: number): CSG;
        expandToCAG(pathradius: number, resolution: number): CAG;
        innerToCAG(): CAG;
        transform(matrix4x4: Matrix4x4): Path2D;
        appendBezier(controlpoints: any, options: any): Path2D;
        appendArc(endpoint: Vector2D, options: IEllpiticalArcOptions): Path2D;
    }
}
declare class CAG extends CxG implements ICenter {
    sides: CAG.Side[];
    isCanonicalized: boolean;
    constructor();
    static fromSides(sides: CAG.Side[]): CAG;
    static fromPoints(points: CSG.Vector2D[]): CAG;
    static fromPointsNoCheck(points: CSG.Vector2D[]): CAG;
    static fromFakeCSG(csg: CSG): CAG;
    static linesIntersect(
        p0start: CSG.Vector2D,
        p0end: CSG.Vector2D,
        p1start: CSG.Vector2D,
        p1end: CSG.Vector2D,
    ): boolean;
    static circle(options: CSG.ICircleOptions): CAG;
    static rectangle(options: CSG.IRectangleOptions): CAG;
    static roundedRectangle(options: any): CAG;
    static fromCompactBinary(bin: any): CAG;
    toString(): string;
    _toCSGWall(z0: any, z1: any): CSG;
    _toVector3DPairs(m: CSG.Matrix4x4): CSG.Vector3D[][];
    _toPlanePolygons(options: any): CSG.Polygon[];
    _toWallPolygons(options: any): any[];
    union(cag: CAG[]): CAG;
    union(cag: CAG): CAG;
    subtract(cag: CAG[]): CAG;
    subtract(cag: CAG): CAG;
    intersect(cag: CAG[]): CAG;
    intersect(cag: CAG): CAG;
    transform(matrix4x4: CSG.Matrix4x4): CAG;
    area(): number;
    flipped(): CAG;
    getBounds(): CSG.Vector2D[];
    isSelfIntersecting(): boolean;
    expandedShell(radius: number, resolution: number): CAG;
    expand(radius: number, resolution: number): CAG;
    contract(radius: number, resolution: number): CAG;
    extrudeInOrthonormalBasis(orthonormalbasis: CSG.OrthoNormalBasis, depth: number, options?: any): CSG;
    extrudeInPlane(axis1: any, axis2: any, depth: any, options: any): CSG;
    extrude(options: CAG_extrude_options): CSG;
    rotateExtrude(options: any): CSG;
    check(): void;
    canonicalized(): CAG;
    toCompactBinary(): {
        "class": string;
        sideVertexIndices: Uint32Array;
        vertexData: Float64Array;
    };
    getOutlinePaths(): CSG.Path2D[];
    overCutInsideCorners(cutterradius: any): CAG;
    center(cAxes: string[]): CxG;
    toDxf(): Blob;
    static PathsToDxf(paths: CSG.Path2D[]): Blob;
}
declare namespace CAG {
    class Vertex {
        pos: CSG.Vector2D;
        tag: number;
        constructor(pos: CSG.Vector2D);
        toString(): string;
        getTag(): number;
    }
    class Side extends CxG {
        vertex0: Vertex;
        vertex1: Vertex;
        tag: number;
        constructor(vertex0: Vertex, vertex1: Vertex);
        static _fromFakePolygon(polygon: CSG.Polygon): Side;
        toString(): string;
        toPolygon3D(z0: any, z1: any): CSG.Polygon;
        transform(matrix4x4: CSG.Matrix4x4): Side;
        flipped(): Side;
        direction(): CSG.Vector2D;
        getTag(): number;
        lengthSquared(): number;
        length(): number;
    }
    class fuzzyCAGFactory {
        vertexfactory: CSG.fuzzyFactory;
        constructor();
        getVertex(sourcevertex: Vertex): Vertex;
        getSide(sourceside: Side): Side;
        getCAG(sourcecag: CAG): CAG;
    }
}
interface CAG_extrude_options {
    offset?: number[] | undefined;
    twistangle?: number | undefined;
    twiststeps?: number | undefined;
}
declare namespace CSG {
    class Polygon2D extends CAG {
        constructor(points: Vector2D[]);
    }
}
