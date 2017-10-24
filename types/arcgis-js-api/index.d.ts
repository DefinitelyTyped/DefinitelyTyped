// Type definitions for ArcGIS API for JavaScript 4.5
// Project: http://js.arcgis.com
// Definitions by: Esri <https://github.com/Esri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface HashMap<T = any> {
  [index: string]: T;
}

interface IPromise<T = any> {
  always<U>(callback?: (valueOrError: T) => IPromise<U> | U | void): IPromise<U>;
  cancel?<U>(reason?: U, strict?: boolean): U;
  isCanceled?(): boolean;
  isFulfilled(): boolean;
  isRejected(): boolean;
  isResolved(): boolean;
  otherwise<U>(errback?: (reason: any) => IPromise<U> | U | void): IPromise<T | U>;
  then<U>(callback?: (value: T) => IPromise<U> | U | void, errback?: (reason: any) => IPromise<U> | U | void, progback?: (update: any) => IPromise<U> | U | void): IPromise<U>;
}

interface IHandle {
  remove(): void;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }

  interface Element {}
}

declare namespace __esri {
  export class Accessor {
    constructor(obj?: any);

    destroyed: boolean;
    initialized: boolean;
    declaredClass: string;
    destroy(): void;

    get<T>(propertyName: string): T;
    get(propertyName: string): any;
    set<T>(propertyName: string, value: T): this;
    set(props: HashMap<any>): this;
    watch(path: string | string[], callback: WatchCallback, sync?: boolean): WatchHandle;

    protected notifyChange(propertyName: string): void;
    protected _get(propertyName: string): any;
    protected _get<T>(propertyName: string): T;
    protected _set<T>(propertyName: string, value: T): this;
  }


  export type ItemCallback<T> = (item: T, index: number) => void;

  export type ItemCompareCallback<T> = (firstItem: T, secondItem: T) => number;

  export type ItemMapCallback<T, R> = (item: T, index: number) => R;

  export type ItemReduceCallback<T, R> = (previousValue: R, currentValue: T, index: number) => R;

  export type ItemTestCallback<T> = (item: T, index: number) => boolean;

  interface Collection<T = any> extends Evented {}

  type Constructor<T> = new (...params: any[]) => T;

  interface Types<T extends Base, Base = T> {
    key: string | ((obj: any) => string);
    base: Constructor<Base> | Function;
    typeMap: HashMap<Constructor<T>>;
  }

  export class Collection<T = any> extends Accessor {
    constructor(values?: any[] | Collection<any>);

    readonly length: number;

    add(item: T, index?: number): void;
    addMany(items: T[] | Collection<T>, index?: number): void;
    clone(): Collection<T>;
    concat(value: T[] | Collection<T>): Collection<T>;
    every(callback: ItemTestCallback<T>): boolean;
    filter(callback: ItemTestCallback<T>): Collection<T>;
    find(callback: ItemTestCallback<T>): T;
    findIndex(callback: ItemTestCallback<T>): number;
    flatten(callback: ItemCallback<T>): Collection<T>;
    forEach(callback: ItemCallback<T>): void;
    getItemAt(index: number): T;
    includes(searchElement: T): boolean;
    indexOf(searchElement: T, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    map<R = T>(callback: ItemMapCallback<T, R>): Collection<R>;
    pop(): T;
    push(item: T): number;
    reduce<R = T>(callback: ItemReduceCallback<T, R>, initialValue?: R): R;
    reduceRight<R = T>(callback: ItemReduceCallback<T, R>, initialValue?: R): R;
    remove(item: T): void;
    removeAll(): void;
    removeAt(index: number): any;
    removeMany(items: T[] | Collection<T>): T[];
    reorder(item: T, index: number): T;
    reverse(): Collection<T>;
    shift(): T;
    slice(begin?: number, end?: number): Collection<T>;
    some(callback: ItemCallback<T>): boolean;
    sort(compareFunction?: ItemCompareCallback<T>): void;
    splice(start: number, deleteCount: number, items: T[] | Collection<T>): T[];
    toArray(): T[];
    unshift(...items: T[]): number;

    static isCollection<T = any>(value: any | Collection<T>): value is Collection<T>;

    static ofType<T extends Base, Base = T>(type: Constructor<T> | Types<T, Base>): new (items?: (T[] | Collection<T>) | { items?: T[] | Collection<T> }) => Collection<T>;
  }

  type CollectionProperties<T = any> = T[] | Collection<T>;



  type DateProperties = number | string | Date;


  export type BaseDynamicLayerLayerviewCreateEventHandler = (event: BaseDynamicLayerLayerviewCreateEvent) => void;

  export type BaseDynamicLayerLayerviewDestroyEventHandler = (event: BaseDynamicLayerLayerviewDestroyEvent) => void;

  export type BaseElevationLayerLayerviewCreateEventHandler = (event: BaseElevationLayerLayerviewCreateEvent) => void;

  export type BaseElevationLayerLayerviewDestroyEventHandler = (event: BaseElevationLayerLayerviewDestroyEvent) => void;

  export type BaseTileLayerLayerviewCreateEventHandler = (event: BaseTileLayerLayerviewCreateEvent) => void;

  export type BaseTileLayerLayerviewDestroyEventHandler = (event: BaseTileLayerLayerviewDestroyEvent) => void;

  export type CSVLayerLayerviewCreateEventHandler = (event: CSVLayerLayerviewCreateEvent) => void;

  export type CSVLayerLayerviewDestroyEventHandler = (event: CSVLayerLayerviewDestroyEvent) => void;

  export type ElevationLayerLayerviewCreateEventHandler = (event: ElevationLayerLayerviewCreateEvent) => void;

  export type ElevationLayerLayerviewDestroyEventHandler = (event: ElevationLayerLayerviewDestroyEvent) => void;

  export type FeatureLayerLayerviewCreateEventHandler = (event: FeatureLayerLayerviewCreateEvent) => void;

  export type FeatureLayerLayerviewDestroyEventHandler = (event: FeatureLayerLayerviewDestroyEvent) => void;

  export type GeoRSSLayerLayerviewCreateEventHandler = (event: GeoRSSLayerLayerviewCreateEvent) => void;

  export type GeoRSSLayerLayerviewDestroyEventHandler = (event: GeoRSSLayerLayerviewDestroyEvent) => void;

  export type GraphicsLayerLayerviewCreateEventHandler = (event: GraphicsLayerLayerviewCreateEvent) => void;

  export type GraphicsLayerLayerviewDestroyEventHandler = (event: GraphicsLayerLayerviewDestroyEvent) => void;

  export type GroupLayerLayerviewCreateEventHandler = (event: GroupLayerLayerviewCreateEvent) => void;

  export type GroupLayerLayerviewDestroyEventHandler = (event: GroupLayerLayerviewDestroyEvent) => void;

  export type IdentityManagerCredentialCreateEventHandler = (event: IdentityManagerCredentialCreateEvent) => void;

  export type IdentityManagerCredentialsDestroyEventHandler = (event: IdentityManagerCredentialsDestroyEvent) => void;

  export type ImageryLayerLayerviewCreateEventHandler = (event: ImageryLayerLayerviewCreateEvent) => void;

  export type ImageryLayerLayerviewDestroyEventHandler = (event: ImageryLayerLayerviewDestroyEvent) => void;

  export type IntegratedMeshLayerLayerviewCreateEventHandler = (event: IntegratedMeshLayerLayerviewCreateEvent) => void;

  export type IntegratedMeshLayerLayerviewDestroyEventHandler = (event: IntegratedMeshLayerLayerviewDestroyEvent) => void;

  export type KMLLayerLayerviewCreateEventHandler = (event: KMLLayerLayerviewCreateEvent) => void;

  export type KMLLayerLayerviewDestroyEventHandler = (event: KMLLayerLayerviewDestroyEvent) => void;

  export type MapImageLayerLayerviewCreateEventHandler = (event: MapImageLayerLayerviewCreateEvent) => void;

  export type MapImageLayerLayerviewDestroyEventHandler = (event: MapImageLayerLayerviewDestroyEvent) => void;

  export type MapNotesLayerLayerviewCreateEventHandler = (event: MapNotesLayerLayerviewCreateEvent) => void;

  export type MapNotesLayerLayerviewDestroyEventHandler = (event: MapNotesLayerLayerviewDestroyEvent) => void;

  export type MapViewClickEventHandler = (event: MapViewClickEvent) => void;

  export type MapViewDoubleClickEventHandler = (event: MapViewDoubleClickEvent) => void;

  export type MapViewDragEventHandler = (event: MapViewDragEvent) => void;

  export type MapViewHoldEventHandler = (event: MapViewHoldEvent) => void;

  export type MapViewKeyDownEventHandler = (event: MapViewKeyDownEvent) => void;

  export type MapViewKeyUpEventHandler = (event: MapViewKeyUpEvent) => void;

  export type MapViewLayerviewCreateEventHandler = (event: MapViewLayerviewCreateEvent) => void;

  export type MapViewLayerviewDestroyEventHandler = (event: MapViewLayerviewDestroyEvent) => void;

  export type MapViewMouseWheelEventHandler = (event: MapViewMouseWheelEvent) => void;

  export type MapViewPointerDownEventHandler = (event: MapViewPointerDownEvent) => void;

  export type MapViewPointerMoveEventHandler = (event: MapViewPointerMoveEvent) => void;

  export type MapViewPointerUpEventHandler = (event: MapViewPointerUpEvent) => void;

  export type MapViewResizeEventHandler = (event: MapViewResizeEvent) => void;

  interface Basemap extends Accessor, Loadable, JSONSupport {
    baseLayers: Collection<Layer>;
    id: string;
    loaded: boolean;
    portalItem: PortalItem;
    referenceLayers: Collection<Layer>;
    thumbnailUrl: string;
    title: string;

    clone(): Basemap;
  }

  interface BasemapConstructor {
    new(properties?: BasemapProperties): Basemap;


    fromId(id: string): Basemap;

    fromJSON(json: any): Basemap;
  }

  export const Basemap: BasemapConstructor;

  interface BasemapProperties extends LoadableProperties {
    baseLayers?: CollectionProperties<LayerProperties>;
    id?: string;
    loaded?: boolean;
    portalItem?: PortalItemProperties;
    referenceLayers?: CollectionProperties<LayerProperties>;
    thumbnailUrl?: string;
    title?: string;
  }

  interface Camera extends Accessor, JSONSupport {
    fov: number;
    heading: number;
    position: Point;
    tilt: number;

    clone(): Camera;
  }

  interface CameraConstructor {
    new(properties?: CameraProperties): Camera;

    fromJSON(json: any): Camera;
  }

  export const Camera: CameraConstructor;

  interface CameraProperties {
    fov?: number;
    heading?: number;
    position?: PointProperties;
    tilt?: number;
  }

  interface Color {
    a: number;
    b: number;
    g: number;
    r: number;

    clone(): Color;
    setColor(color: string | number[] | any): Color;
    toCss(includeAlpha?: boolean): string;
    toHex(): string;
    toJSON(): any;
    toRgb(): number[];
    toRgba(): number[];
  }

  interface ColorConstructor {

    blendColors(start: Color, end: Color, weight: number, obj?: Color): Color;
    new(color: string | number[] | any): Color;
    fromArray(a: number[], obj?: Color): Color;
    fromHex(color: string, obj?: Color): Color;
    fromJSON(json: any): Color;
    fromRgb(color: string, obj?: Color): Color;
    fromString(str: string, obj?: Color): Color;
  }

  export const Color: ColorConstructor;

  interface config {
    geometryServiceUrl: string;
    geoRSSServiceUrl: string;
    kmlServiceUrl: string;
    portalUrl: string;
    request: configRequest;
    workers: configWorkers;
  }

  export const config: config;

  export interface configRequest {
    corsDetection?: boolean;
    corsDetectionTimeout?: number;
    corsEnabledServers?: (string | configRequestCorsEnabledServers)[];
    forceProxy?: boolean;
    httpsDomains?: string[];
    maxUrlLength?: number;
    proxyUrl?: string;
    timeout?: number;
    useCors?: string | boolean;
    useIdentity?: boolean;
    proxyRules?: configRequestProxyRules[];
  }

  export interface configRequestCorsEnabledServers {
    host?: string;
    withCredentials?: boolean;
  }

  export interface configRequestProxyRules {
    proxyUrl?: string;
    urlPrefix?: string;
  }

  export interface configWorkers {
    loaderConfig?: configWorkersLoaderConfig;
  }

  export interface configWorkersLoaderConfig {
    has?: any;
    paths?: any;
    map?: any;
    packages?: any[];
  }



  export type WatchCallback = (newValue: any, oldValue: any, propertyName: string, target: Accessor) => void;

  export interface WatchHandle {
    remove(): void;
  }

  interface decorators {
    aliasOf(propertyName: string): Function;
    cast(propertyName: string): Function;
    cast(classFunction: Function): Function;
    declared<T>(baseClass: T, ...mixinClasses: any[]): T;
    property(propertyMetadata?: decoratorsPropertyPropertyMetadata): Function;
    subclass(declaredClass?: string): Function;
  }

  export const decorators: decorators;

  export interface decoratorsPropertyPropertyMetadata {
    dependsOn?: string[];
    type?: Function;
    cast?: Function;
    readOnly?: boolean;
    constructOnly?: boolean;
    aliasOf?: string;
    value?: any;
  }













  interface Error {
    details: any;
    message: string;
    name: string;
  }

  export const Error: Error;

  export class Evented {
    protected emit(type: string, event: any): void;
    hasEventListener(type: string): boolean;
    on(type: string, listener: EventHandler): IHandle;
  }

  export type EventHandler = (event: any) => void;

  interface JSONSupport {
    toJSON(): any;
  }

  interface JSONSupportConstructor {
    new(): JSONSupport;


    fromJSON(json: any): any;
  }

  export const JSONSupport: JSONSupportConstructor;

  interface lang {
    clone(elem: any): any;
  }

  export const lang: lang;

  interface Loadable {
    loadError: Error;
    loadStatus: string;
    loadWarnings: any[];

    always(callbackOrErrback?: Function): IPromise<any>;
    cancelLoad(): void;
    isFulfilled(): boolean;
    isRejected(): boolean;
    isResolved(): boolean;
    load(): IPromise<any>;
    otherwise(errback?: Function): IPromise<any>;
    then(callback?: Function, errback?: Function, progback?: Function): IPromise<any>;
  }

  interface LoadableConstructor {
    new(): Loadable;
  }

  export const Loadable: LoadableConstructor;

  interface LoadableProperties {
    loadError?: Error;
    loadStatus?: string;
    loadWarnings?: any[];
  }

  interface corePromise {
    always(callbackOrErrback?: Function): IPromise<any>;
    isFulfilled(): boolean;
    isRejected(): boolean;
    isResolved(): boolean;
    otherwise(errback?: Function): IPromise<any>;
    then(callback?: Function, errback?: Function, progback?: Function): IPromise<any>;
  }

  interface corePromiseConstructor {
    new(): corePromise;
  }

  export const corePromise: corePromiseConstructor;

  interface promiseUtils {
    eachAlways(promises: IPromise<any>[] | any): IPromise<EachAlwaysResult[]> | any;
    filter<T>(input: T[], predicate: FilterPredicateCallback): IPromise<T[]>;
    reject<T>(error?: any): IPromise<T>;
    resolve<T>(value?: T): IPromise<T>;
  }

  export const promiseUtils: promiseUtils;

  export interface EachAlwaysResult {
    promise: IPromise<any>;
    value: any;
    error: any;
  }

  export type FilterPredicateCallback = (value: any, index: number) => IPromise<any>;

  interface requireUtils {
    when(moduleRequire: any, moduleNames: string[] | string): IPromise<any>;
  }

  export const requireUtils: requireUtils;

  interface urlUtils {
    addProxyRule(rule: urlUtilsAddProxyRuleRule): number;
    getProxyRule(url: string): any;
    urlToObject(url: string): any;
  }

  export const urlUtils: urlUtils;

  export interface urlUtilsAddProxyRuleRule {
    proxyUrl: string;
    urlPrefix: string;
  }

  interface watchUtils {
    init(obj: Accessor, propertyName: string | string[], callback: WatchCallback): WatchHandle;
    on(obj: Accessor, propertyName: string, eventName: string, eventHandler: Function, attachedHandler?: EventAttachedCallback, detachedHandler?: EventAttachedCallback): WatchHandle;
    once(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    pausable(obj: Accessor, propertyName: string, callback?: WatchCallback): PausableWatchHandle;
    watch(obj: Accessor, propertyName: string | string[], callback: WatchCallback): WatchHandle;
    when(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenDefined(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenDefinedOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenFalse(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenFalseOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenNot(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenNotOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenTrue(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenTrueOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenUndefined(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenUndefinedOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
  }

  export const watchUtils: watchUtils;

  export type EventAttachedCallback = (target: any, propName: string, obj: Accessor, eventName: string) => void;

  export interface PausableWatchHandle {
    remove(): void;
    pause(): void;
    resume(): void;
  }

  export interface PromisedWatchHandle extends IPromise<any> {
    remove(): void;
  }

  interface workers {
    open(client: any, modulePath: string): IPromise<Connection>;
  }

  export const workers: workers;

  interface Connection {
    broadcast(methodName: string, data?: any, buffers?: ArrayBuffer[]): IPromise<any[]>;
    close(): void;
    invoke(methodName: string, data?: any, buffers?: ArrayBuffer[]): IPromise<any>;
  }

  interface ConnectionConstructor {
    new(client: any, id: number): Connection;
  }

  export const Connection: ConnectionConstructor;

  interface Circle extends Polygon {
    center: Point | number[];
    geodesic: boolean;
    numberOfPoints: number;
    radius: number;
    radiusUnit: string;

    clone(): Circle;
  }

  interface CircleConstructor {
    new(properties?: CircleProperties): Circle;

    fromJSON(json: any): Circle;
  }

  export const Circle: CircleConstructor;

  interface CircleProperties extends PolygonProperties {
    center?: PointProperties | number[];
    geodesic?: boolean;
    numberOfPoints?: number;
    radius?: number;
    radiusUnit?: string;
  }

  interface Extent extends Geometry {
    center: Point;
    height: number;
    mmax: number;
    mmin: number;
    width: number;
    xmax: number;
    xmin: number;
    ymax: number;
    ymin: number;
    zmax: number;
    zmin: number;

    centerAt(point: Point): Extent;
    clone(): Extent;
    contains(geometry: Point | Extent): boolean;
    equals(extent: Extent): boolean;
    expand(factor: number): Extent;
    intersection(extent: Extent): Extent;
    intersects(geometry: Geometry): boolean;
    normalize(): Extent[];
    offset(dx: number, dy: number, dz: number): Extent;
    union(extent: Extent): Extent;
  }

  interface ExtentConstructor {
    new(properties?: ExtentProperties): Extent;

    fromJSON(json: any): Extent;
  }

  export const Extent: ExtentConstructor;

  interface ExtentProperties extends GeometryProperties {
    center?: PointProperties;
    height?: number;
    mmax?: number;
    mmin?: number;
    width?: number;
    xmax?: number;
    xmin?: number;
    ymax?: number;
    ymin?: number;
    zmax?: number;
    zmin?: number;
  }

  interface Geometry extends Accessor, JSONSupport {
    cache: any;
    extent: Extent;
    hasM: boolean;
    hasZ: boolean;
    spatialReference: SpatialReference;
    type: string;

    clone(): Geometry;
  }

  interface GeometryConstructor {
    new(properties?: GeometryProperties): Geometry;

    fromJSON(json: any): Geometry;
  }

  export const Geometry: GeometryConstructor;

  interface GeometryProperties {
    cache?: any;
    extent?: ExtentProperties;
    hasM?: boolean;
    hasZ?: boolean;
    spatialReference?: SpatialReferenceProperties;
    type?: string;
  }

  interface geometryEngine {
    buffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): Polygon | Polygon[];
    clip(geometry: Geometry, envelope: Extent): Geometry;
    contains(containerGeometry: Geometry, insideGeometry: Geometry): boolean;
    convexHull(geometry: Geometry, merge?: boolean): Geometry | Geometry[];
    crosses(geometry1: Geometry, geometry2: Geometry): boolean;
    cut(geometry: Geometry, cutter: Polyline): Geometry[];
    densify(geometry: Geometry, maxSegmentLength: number, maxSegmentLengthUnit: string | number): Geometry;
    difference(inputGeometry: Geometry | Geometry[], subtractor: Geometry): Geometry | Geometry[];
    disjoint(geometry1: Geometry, geometry2: Geometry): boolean;
    distance(geometry1: Geometry, geometry2: Geometry, distanceUnit: string | number): number;
    equals(geometry1: Geometry, geometry2: Geometry): boolean;
    extendedSpatialReferenceInfo(spatialReference: SpatialReference): any;
    flipHorizontal(geometry: Geometry, flipOrigin?: Point): Geometry;
    flipVertical(geometry: Geometry, flipOrigin?: Point): Geometry;
    generalize(geometry: Geometry, maxDeviation: number, removeDegenerateParts?: boolean, maxDeviationUnit?: string | number): Geometry;
    geodesicArea(geometry: Polygon, unit: string | number): number;
    geodesicBuffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): Polygon | Polygon[];
    geodesicDensify(geometry: Polyline | Polygon, maxSegmentLength: number, maxSegmentLengthUnit: string | number): Geometry;
    geodesicLength(geometry: Geometry, unit: string | number): number;
    intersect(geometry: Geometry | Geometry[], intersector: Geometry): Geometry | Geometry[];
    intersects(geometry1: Geometry, geometry2: Geometry): boolean;
    isSimple(geometry: Geometry): boolean;
    nearestCoordinate(geometry: Geometry, inputPoint: Point): NearestPointResult;
    nearestVertex(geometry: Geometry, inputPoint: Point): NearestPointResult;
    nearestVertices(geometry: Geometry, inputPoint: Point, searchRadius: number, maxVertexCountToReturn: number): NearestPointResult[];
    offset(geometry: Geometry | Geometry[], offsetDistance: number, offsetUnit: string | number, joinType: string, bevelRatio?: number, flattenError?: number): Geometry | Geometry[];
    overlaps(geometry1: Geometry, geometry2: Geometry): boolean;
    planarArea(geometry: Polygon, unit: string | number): number;
    planarLength(geometry: Geometry, unit: string | number): number;
    relate(geometry1: Geometry, geometry2: Geometry, relation: string): boolean;
    rotate(geometry: Geometry, angle: number, rotationOrigin?: Point): Geometry;
    simplify(geometry: Geometry): Geometry;
    symmetricDifference(leftGeometry: Geometry | Geometry[], rightGeometry: Geometry): Geometry | Geometry[];
    touches(geometry1: Geometry, geometry2: Geometry): boolean;
    union(geometries: Geometry[]): Geometry;
    within(innerGeometry: Geometry, outerGeometry: Geometry): boolean;
  }

  export const geometryEngine: geometryEngine;

  export interface NearestPointResult {
    coordinate: Point;
    distance: number;
    isRightSide: boolean;
    vertexIndex: number;
    isEmpty: boolean;
  }

  interface geometryEngineAsync {
    buffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): IPromise<Polygon | Polygon[]>;
    clip(geometry: Geometry, envelope: Extent): IPromise<Geometry>;
    contains(containerGeometry: Geometry, insideGeometry: Geometry): IPromise<boolean>;
    convexHull(geometry: Geometry, merge?: boolean): IPromise<Geometry>;
    crosses(geometry1: Geometry, geometry2: Geometry): IPromise<boolean>;
    cut(geometry: Geometry, cutter: Polyline): IPromise<Geometry[]>;
    densify(geometry: Geometry, maxSegmentLength: number, maxSegmentLengthUnit: string | number): IPromise<Geometry>;
    difference(inputGeometry: Geometry | Geometry[], subtractor: Geometry): IPromise<Geometry>;
    disjoint(geometry1: Geometry, geometry2: Geometry): IPromise<boolean>;
    distance(geometry1: Geometry, geometry2: Geometry, distanceUnit: string | number): IPromise<number>;
    equals(geometry1: Geometry, geometry2: Geometry): IPromise<boolean>;
    extendedSpatialReferenceInfo(spatialReference: SpatialReference): IPromise<any>;
    flipHorizontal(geometry: Geometry, flipOrigin?: Point): IPromise<Geometry>;
    flipVertical(geometry: Geometry, flipOrigin?: Point): IPromise<Geometry>;
    generalize(geometry: Geometry, maxDeviation: number, removeDegenerateParts?: boolean, maxDeviationUnit?: string | number): IPromise<Geometry>;
    geodesicArea(geometry: Polygon, unit: string | number): IPromise<number>;
    geodesicBuffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): IPromise<Polygon | Polygon[]>;
    geodesicDensify(geometry: Polyline | Polygon, maxSegmentLength: number, maxSegmentLengthUnit: string | number): IPromise<Geometry>;
    geodesicLength(geometry: Geometry, unit: string | number): IPromise<number>;
    intersect(geometry: Geometry | Geometry[], intersector: Geometry): IPromise<Geometry>;
    intersects(geometry1: Geometry, geometry2: Geometry): IPromise<boolean>;
    isSimple(geometry: Geometry): IPromise<boolean>;
    nearestCoordinate(geometry: Geometry, inputPoint: Point): IPromise<NearestPointResult>;
    nearestVertex(geometry: Geometry, inputPoint: Point): IPromise<NearestPointResult>;
    nearestVertices(geometry: Geometry, inputPoint: Point, searchRadius: number, maxVertexCountToReturn: number): IPromise<NearestPointResult>;
    offset(geometry: Geometry | Geometry[], offsetDistance: number, offsetUnit: string | number, joinType: string, bevelRatio?: number, flattenError?: number): IPromise<Geometry[]>;
    overlaps(geometry1: Geometry, geometry2: Geometry): IPromise<boolean>;
    planarArea(geometry: Polygon, unit: string | number): IPromise<number>;
    planarLength(geometry: Geometry, unit: string | number): IPromise<number>;
    relate(geometry1: Geometry, geometry2: Geometry, relation: string): IPromise<boolean>;
    rotate(geometry: Geometry, angle: number, rotationOrigin?: Point): IPromise<Geometry>;
    simplify(geometry: Geometry): IPromise<Geometry>;
    symmetricDifference(leftGeometry: Geometry | Geometry[], rightGeometry: Geometry): IPromise<Geometry | Geometry[]>;
    touches(geometry1: Geometry, geometry2: Geometry): IPromise<boolean>;
    union(geometries: Geometry[]): IPromise<Geometry>;
    within(innerGeometry: Geometry, outerGeometry: Geometry): IPromise<boolean>;
  }

  export const geometryEngineAsync: geometryEngineAsync;

  interface HeightModelInfo extends Accessor, JSONSupport {
    heightModel: string;
    heightUnit: string;
    vertCRS: string;
  }

  interface HeightModelInfoConstructor {
    new(properties?: HeightModelInfoProperties): HeightModelInfo;

    fromJSON(json: any): HeightModelInfo;
  }

  export const HeightModelInfo: HeightModelInfoConstructor;

  interface HeightModelInfoProperties {
    heightModel?: string;
    heightUnit?: string;
    vertCRS?: string;
  }

  interface Multipoint extends Geometry {
    points: number[][];

    addPoint(point: Point | number[]): Multipoint;
    clone(): Multipoint;
    getPoint(index: number): Point;
    removePoint(index: number): Point;
    setPoint(index: number, point: Point): Multipoint;
  }

  interface MultipointConstructor {
    new(properties?: MultipointProperties): Multipoint;

    fromJSON(json: any): Multipoint;
  }

  export const Multipoint: MultipointConstructor;

  interface MultipointProperties extends GeometryProperties {
    points?: number[][];
  }

  interface Point extends Geometry {
    latitude: number;
    longitude: number;
    m: number;
    x: number;
    y: number;
    z: number;

    clone(): Point;
    copy(other: Point): void;
    distance(other: Point): number;
    equals(point: Point): boolean;
    normalize(): Point;
  }

  interface PointConstructor {
    new(properties?: PointProperties): Point;

    fromJSON(json: any): Point;
  }

  export const Point: PointConstructor;

  interface PointProperties extends GeometryProperties {
    latitude?: number;
    longitude?: number;
    m?: number;
    x?: number;
    y?: number;
    z?: number;
  }

  interface Polygon extends Geometry {
    centroid: Point;
    isSelfIntersecting: boolean;
    rings: number[][][];

    addRing(ring: Point[] | number[][]): Polygon;
    clone(): Polygon;
    contains(point: Point): boolean;
    getPoint(ringIndex: number, pointIndex: number): Point;
    insertPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
    isClockwise(ring: Point[] | number[][]): boolean;
    removePoint(ringIndex: number, pointIndex: number): Point[];
    removeRing(index: number): Point[];
    setPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
  }

  interface PolygonConstructor {
    new(properties?: PolygonProperties): Polygon;


    fromExtent(extent: Extent): Polygon;

    fromJSON(json: any): Polygon;
  }

  export const Polygon: PolygonConstructor;

  interface PolygonProperties extends GeometryProperties {
    centroid?: PointProperties;
    isSelfIntersecting?: boolean;
    rings?: number[][][];
  }

  interface Polyline extends Geometry {
    paths: number[][][];

    addPath(points: number[][]): Polyline;
    clone(): Polyline;
    getPoint(pathIndex: number, pointIndex: number): Point;
    insertPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
    removePath(index: number): Point[];
    removePoint(pathIndex: number, pointIndex: number): Point;
    setPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
  }

  interface PolylineConstructor {
    new(properties?: PolylineProperties): Polyline;

    fromJSON(json: any): Polyline;
  }

  export const Polyline: PolylineConstructor;

  interface PolylineProperties extends GeometryProperties {
    paths?: number[][][];
  }

  interface ScreenPoint extends Accessor {
    x: number;
    y: number;
  }

  interface ScreenPointConstructor {
    new(properties?: ScreenPointProperties): ScreenPoint;
  }

  export const ScreenPoint: ScreenPointConstructor;

  interface ScreenPointProperties {
    x?: number;
    y?: number;
  }

  interface SpatialReference extends Accessor, JSONSupport {
    isGeographic: boolean;
    isWebMercator: boolean;
    isWGS84: boolean;
    isWrappable: boolean;
    WebMercator: SpatialReference;
    WGS84: SpatialReference;
    wkid: number;
    wkt: string;

    clone(): SpatialReference;
    equals(spatialReference: SpatialReference): boolean;
  }

  interface SpatialReferenceConstructor {
    new(properties?: SpatialReferenceProperties): SpatialReference;

    fromJSON(json: any): SpatialReference;
  }

  export const SpatialReference: SpatialReferenceConstructor;

  interface SpatialReferenceProperties {
    isGeographic?: boolean;
    isWebMercator?: boolean;
    isWGS84?: boolean;
    isWrappable?: boolean;
    WebMercator?: SpatialReferenceProperties;
    WGS84?: SpatialReferenceProperties;
    wkid?: number;
    wkt?: string;
  }

  interface jsonUtils {
    fromJSON(json: any): Geometry;
    getJsonType(geometry: Geometry): string;
  }

  export const jsonUtils: jsonUtils;

  interface normalizeUtils {
    normalizeCentralMeridian(geometries: Geometry[], geometryService?: GeometryService): IPromise<Geometry[]>;
  }

  export const normalizeUtils: normalizeUtils;

  interface webMercatorUtils {
    canProject(source: SpatialReference | any, target: SpatialReference | any): boolean;
    geographicToWebMercator(geometry: Geometry): Geometry;
    lngLatToXY(long: number, lat: number): number[];
    project(geometry: Geometry, spatialReference: SpatialReference | any): Geometry;
    webMercatorToGeographic(geometry: Geometry): Geometry;
    xyToLngLat(x: number, y: number): number[];
  }

  export const webMercatorUtils: webMercatorUtils;

  interface Graphic extends Accessor, JSONSupport {
    attributes: any;
    geometry: Geometry;
    layer: FeatureLayer | GraphicsLayer;
    popupTemplate: PopupTemplate;
    symbol: Symbol;
    visible: boolean;

    clone(): Graphic;
    getAttribute(name: string): any;
    setAttribute(name: string, newValue: any): void;
  }

  interface GraphicConstructor {
    new(properties?: GraphicProperties): Graphic;

    fromJSON(json: any): Graphic;
  }

  export const Graphic: GraphicConstructor;

  interface GraphicProperties {
    attributes?: any;
    geometry?: GeometryProperties;
    layer?: FeatureLayerProperties | GraphicsLayerProperties;
    popupTemplate?: PopupTemplateProperties;
    symbol?: SymbolProperties;
    visible?: boolean;
  }

  interface Ground extends Accessor, Loadable, JSONSupport {
    layers: Collection<Layer>;
    loaded: boolean;

    clone(): Ground;
    queryElevation(geometry: Point | Multipoint | Polyline, options?: GroundQueryElevationOptions): IPromise<ElevationQueryResult>;
  }

  interface GroundConstructor {
    new(properties?: GroundProperties): Ground;

    fromJSON(json: any): Ground;
  }

  export const Ground: GroundConstructor;

  interface GroundProperties extends LoadableProperties {
    layers?: CollectionProperties<LayerProperties>;
    loaded?: boolean;
  }

  export interface ElevationQueryResult {
    geometry: Point | Multipoint | Polyline;
    sampleInfo: ElevationQueryResultSampleInfo[];
    noDataValue: number;
  }

  export interface GroundQueryElevationOptions {
    returnSampleInfo?: boolean;
    noDataValue?: number;
  }

  export interface ElevationQueryResultSampleInfo {
    demResolution: number;
    source: ElevationLayer;
  }

  interface Credential extends Accessor {
    expires: number;
    isAdmin: boolean;
    oAuthState: any;
    server: string;
    ssl: boolean;
    token: string;
    userId: string;

    destroy(): void;
    refreshToken(): void;
  }

  interface CredentialConstructor {
    new(properties?: CredentialProperties): Credential;
  }

  export const Credential: CredentialConstructor;

  interface CredentialProperties {
    expires?: number;
    isAdmin?: boolean;
    oAuthState?: any;
    server?: string;
    ssl?: boolean;
    token?: string;
    userId?: string;
  }

  interface IdentityManager extends IdentityManagerBase {
    dialog: any;

    setOAuthRedirectionHandler(handlerFunction: HandlerCallback): void;
    setOAuthResponseHash(hash: string): void;

    on(name: "credential-create", eventHandler: IdentityManagerCredentialCreateEventHandler): IHandle;
    on(name: "credential-create", modifiers: string[], eventHandler: IdentityManagerCredentialCreateEventHandler): IHandle;
    on(name: "credentials-destroy", eventHandler: IdentityManagerCredentialsDestroyEventHandler): IHandle;
    on(name: "credentials-destroy", modifiers: string[], eventHandler: IdentityManagerCredentialsDestroyEventHandler): IHandle;
  }

  interface IdentityManagerConstructor {
    new(): IdentityManager;
  }

  export const IdentityManager: IdentityManagerConstructor;

  export interface IdentityManagerCredentialCreateEvent {
    credential: Credential;
  }

  export interface IdentityManagerCredentialsDestroyEvent {
  }

  export type HandlerCallback = (authorizeParams: any, authorizeUrl: string, oAuthInfo: OAuthInfo, resourceUrl: string, serverInfo: ServerInfo) => void;

  interface IdentityManagerBase extends Evented {
    tokenValidity: number;

    checkSignInStatus(resUrl: string): IPromise<Credential>;
    destroyCredentials(): void;
    findCredential(url: string, userId?: string): Credential;
    findOAuthInfo(url: string): OAuthInfo;
    findServerInfo(url: string): ServerInfo;
    generateToken(serverInfo: ServerInfo, userInfo: any, options?: IdentityManagerBaseGenerateTokenOptions): IPromise<any>;
    getCredential(url: string, options?: IdentityManagerBaseGetCredentialOptions): IPromise<any>;
    initialize(json: any): void;
    isBusy(): boolean;
    oAuthSignIn(resUrl: string, serverInfo: ServerInfo, oAuthInfo: OAuthInfo, options?: IdentityManagerBaseOAuthSignInOptions): IPromise<any>;
    registerOAuthInfos(oAuthInfos: OAuthInfo[]): void;
    registerServers(serverInfos: ServerInfo[]): void;
    registerToken(properties: IdentityManagerBaseRegisterTokenProperties): void;
    setProtocolErrorHandler(handlerFunction: IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction): void;
    setRedirectionHandler(handlerFunction: IdentityManagerBaseSetRedirectionHandlerHandlerFunction): void;
    signIn(url: string, serverInfo: ServerInfo, options?: IdentityManagerBaseSignInOptions): IPromise<any>;
    toJSON(): any;
  }

  interface IdentityManagerBaseConstructor {
    new(): IdentityManagerBase;
  }

  export const IdentityManagerBase: IdentityManagerBaseConstructor;

  export interface IdentityManagerBaseGenerateTokenOptions {
    serverUrl: string;
    token: string;
    ssl: boolean;
  }

  export interface IdentityManagerBaseGetCredentialOptions {
    error?: Error;
    oAuthPopupConfirmation?: boolean;
    retry?: boolean;
    token?: string;
  }

  export interface IdentityManagerBaseOAuthSignInOptions {
    error: Error;
    oAuthPopupConfirmation: boolean;
    token: string;
  }

  export interface IdentityManagerBaseRegisterTokenProperties {
    expires?: number;
    server: string;
    ssl?: boolean;
    token: string;
    userId?: string;
  }

  export interface IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction {
    resourceUrl: string;
    serverInfo: ServerInfo;
  }

  export interface IdentityManagerBaseSetRedirectionHandlerHandlerFunction {
    resourceUrl: string;
    returnUrlParamName: string;
    serverInfo: ServerInfo;
    signInPage: string;
  }

  export interface IdentityManagerBaseSignInOptions {
    error: Error;
  }

  interface OAuthInfo extends Accessor, JSONSupport {
    appId: string;
    authNamespace: string;
    expiration: number;
    locale: string;
    minTimeUntilExpiration: number;
    popup: boolean;
    popupCallbackUrl: string;
    popupWindowFeatures: string;
    portalUrl: string;

    clone(): OAuthInfo;
  }

  interface OAuthInfoConstructor {
    new(properties?: OAuthInfoProperties): OAuthInfo;

    fromJSON(json: any): OAuthInfo;
  }

  export const OAuthInfo: OAuthInfoConstructor;

  interface OAuthInfoProperties {
    appId?: string;
    authNamespace?: string;
    expiration?: number;
    locale?: string;
    minTimeUntilExpiration?: number;
    popup?: boolean;
    popupCallbackUrl?: string;
    popupWindowFeatures?: string;
    portalUrl?: string;
  }

  interface ServerInfo extends Accessor, JSONSupport {
    adminTokenServiceUrl: string;
    currentVersion: number;
    server: string;
    shortLivedTokenValidity: number;
    tokenServiceUrl: string;
  }

  interface ServerInfoConstructor {
    new(properties?: ServerInfoProperties): ServerInfo;

    fromJSON(json: any): ServerInfo;
  }

  export const ServerInfo: ServerInfoConstructor;

  interface ServerInfoProperties {
    adminTokenServiceUrl?: string;
    currentVersion?: number;
    server?: string;
    shortLivedTokenValidity?: number;
    tokenServiceUrl?: string;
  }

  interface kernel {
    version: string;
  }

  export const kernel: kernel;

  interface BaseDynamicLayer extends Layer, ScaleRangeLayer {
    addResolvingPromise(promiseToLoad: IPromise<any>): IPromise<any>;
    fetchImage(extent: Extent, width: number, height: number, options?: BaseDynamicLayerFetchImageOptions): IPromise<HTMLImageElement | HTMLCanvasElement>;
    getImageUrl(extent: Extent, width: number, height: number): IPromise<string> | string;

    on(name: "layerview-create", eventHandler: BaseDynamicLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: BaseDynamicLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: BaseDynamicLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: BaseDynamicLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface BaseDynamicLayerConstructor {
    new(properties?: BaseDynamicLayerProperties): BaseDynamicLayer;
  }

  export const BaseDynamicLayer: BaseDynamicLayerConstructor;

  interface BaseDynamicLayerProperties extends LayerProperties, ScaleRangeLayerProperties {

  }

  export interface BaseDynamicLayerFetchImageOptions {
    allowImageDataAccess?: boolean;
  }

  export interface BaseDynamicLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface BaseDynamicLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface BaseElevationLayer extends Layer {
    spatialReference: SpatialReference;
    tileInfo: TileInfo;

    addResolvingPromise(promiseToLoad: IPromise<any>): IPromise<any>;
    fetchTile(level: number, row: number, column: number, options?: BaseElevationLayerFetchTileOptions): IPromise<ElevationTileData>;
    getTileBounds(level: number, row: number, column: number, out?: number[]): number[];

    on(name: "layerview-create", eventHandler: BaseElevationLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: BaseElevationLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: BaseElevationLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: BaseElevationLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface BaseElevationLayerConstructor {
    new(properties?: BaseElevationLayerProperties): BaseElevationLayer;
  }

  export const BaseElevationLayer: BaseElevationLayerConstructor;

  interface BaseElevationLayerProperties extends LayerProperties {
    spatialReference?: SpatialReferenceProperties;
    tileInfo?: TileInfoProperties;
  }

  export interface BaseElevationLayerFetchTileOptions {
    noDataValue?: number;
  }

  export interface ElevationTileData {
    values: number[];
    width: number;
    height: number;
    maxZError: number;
    noDataValue: number;
  }

  export interface BaseElevationLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface BaseElevationLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface BaseTileLayer extends Layer, ScaleRangeLayer {
    spatialReference: SpatialReference;
    tileInfo: TileInfo;

    addResolvingPromise(promiseToLoad: IPromise<any>): IPromise<any>;
    fetchTile(level: number, row: number, column: number, options?: BaseTileLayerFetchTileOptions): IPromise<HTMLImageElement | HTMLCanvasElement>;
    getTileBounds(level: number, row: number, column: number, out?: number[]): number[];
    getTileUrl(level: number, row: number, column: number): string | IPromise<any>;

    on(name: "layerview-create", eventHandler: BaseTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: BaseTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: BaseTileLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: BaseTileLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface BaseTileLayerConstructor {
    new(properties?: BaseTileLayerProperties): BaseTileLayer;
  }

  export const BaseTileLayer: BaseTileLayerConstructor;

  interface BaseTileLayerProperties extends LayerProperties, ScaleRangeLayerProperties {
    spatialReference?: SpatialReferenceProperties;
    tileInfo?: TileInfoProperties;
  }

  export interface BaseTileLayerFetchTileOptions {
    allowImageDataAccess?: boolean;
  }

  export interface BaseTileLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface BaseTileLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface CSVLayer extends Layer {
    copyright: string;
    delimiter: string;
    elevationInfo: CSVLayerElevationInfo;
    featureReduction: CSVLayerFeatureReduction;
    fields: Field[];
    labelingInfo: LabelClass[];
    labelsVisible: boolean;
    latitudeField: string;
    legendEnabled: boolean;
    longitudeField: string;
    maxScale: number;
    minScale: number;
    outFields: string[];
    popupEnabled: boolean;
    popupTemplate: PopupTemplate;
    renderer: Renderer;
    screenSizePerspectiveEnabled: boolean;
    url: string;

    on(name: "layerview-create", eventHandler: CSVLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: CSVLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: CSVLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: CSVLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface CSVLayerConstructor {
    new(properties?: CSVLayerProperties): CSVLayer;
  }

  export const CSVLayer: CSVLayerConstructor;

  interface CSVLayerProperties extends LayerProperties {
    copyright?: string;
    delimiter?: string;
    elevationInfo?: CSVLayerElevationInfo;
    featureReduction?: CSVLayerFeatureReduction;
    fields?: FieldProperties[];
    labelingInfo?: LabelClassProperties[];
    labelsVisible?: boolean;
    latitudeField?: string;
    legendEnabled?: boolean;
    longitudeField?: string;
    maxScale?: number;
    minScale?: number;
    outFields?: string[];
    popupEnabled?: boolean;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
    screenSizePerspectiveEnabled?: boolean;
    url?: string;
  }

  export interface CSVLayerElevationInfo {
    mode: string;
    offset?: number;
    featureExpressionInfo?: CSVLayerElevationInfoFeatureExpressionInfo;
    unit?: string;
  }

  export interface CSVLayerElevationInfoFeatureExpressionInfo {
    expression?: string;
  }

  export interface CSVLayerFeatureReduction {
    type: string;
  }

  export interface CSVLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface CSVLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface DynamicLayer {
    portalItem: PortalItem;
    url: string;

    fetchImage(extent: Extent, width: number, height: number, options?: DynamicLayerFetchImageOptions): IPromise<HTMLImageElement | HTMLCanvasElement>;
    getImageUrl(extent: Extent, width: number, height: number, options?: DynamicLayerGetImageUrlOptions): IPromise<string> | string;
  }

  interface DynamicLayerConstructor {
    new(): DynamicLayer;
  }

  export const DynamicLayer: DynamicLayerConstructor;

  interface DynamicLayerProperties {
    portalItem?: PortalItemProperties;
    url?: string;
  }

  export interface DynamicLayerFetchImageOptions {
    allowImageDataAccess?: boolean;
    rotation?: number;
    pixelRatio?: number;
  }

  export interface DynamicLayerGetImageUrlOptions {
    pixelRatio?: number;
    rotation?: number;
  }

  interface ElevationLayer extends Layer, ArcGISMapService, ArcGISCachedService, PortalLayer, TiledLayer {
    url: string;

    fetchTile(level: number, row: number, column: number, noDataValue?: number): IPromise<ElevationTileData>;
    queryElevation(geometry: Point | Multipoint | Polyline, options?: ElevationLayerQueryElevationOptions): IPromise<ElevationLayerElevationQueryResult>;

    on(name: "layerview-create", eventHandler: ElevationLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: ElevationLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: ElevationLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: ElevationLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface ElevationLayerConstructor {
    new(properties?: ElevationLayerProperties): ElevationLayer;

    fromJSON(json: any): ElevationLayer;
  }

  export const ElevationLayer: ElevationLayerConstructor;

  interface ElevationLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISCachedServiceProperties, PortalLayerProperties, TiledLayerProperties {
    url?: string;
  }

  export interface ElevationLayerQueryElevationOptions {
    demResolution?: number | string;
    returnSampleInfo?: boolean;
    noDataValue?: number;
  }

  export interface ElevationLayerElevationQueryResult {
    geometry: Point | Multipoint | Polyline;
    sampleInfo: ElevationLayerElevationQueryResultSampleInfo[];
    noDataValue: number;
  }

  export interface ElevationLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface ElevationLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  export interface ElevationLayerElevationQueryResultSampleInfo {
    demResolution: number;
  }

  interface FeatureLayer extends Layer, PortalLayer, ScaleRangeLayer {
    capabilities: FeatureLayerCapabilities;
    copyright: string;
    definitionExpression: string;
    displayField: string;
    elevationInfo: FeatureLayerElevationInfo;
    featureReduction: FeatureLayerFeatureReduction;
    fields: Field[];
    gdbVersion: string;
    geometryType: string;
    hasAttachments: boolean;
    hasM: boolean;
    hasZ: boolean;
    labelingInfo: LabelClass[];
    labelsVisible: boolean;
    layerId: number;
    legendEnabled: boolean;
    objectIdField: string;
    outFields: string[];
    popupEnabled: boolean;
    popupTemplate: PopupTemplate;
    renderer: Renderer;
    returnM: boolean;
    returnZ: boolean;
    screenSizePerspectiveEnabled: boolean;
    source: Collection<Graphic>;
    spatialReference: SpatialReference;
    templates: FeatureTemplate[];
    token: string;
    typeIdField: string;
    types: FeatureType[];
    url: string;
    version: number;

    applyEdits(edits: FeatureLayerApplyEditsEdits): IPromise<any>;
    createQuery(): Query;
    getFieldDomain(fieldName: string, options?: FeatureLayerGetFieldDomainOptions): Domain;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<number>;
    queryFeatures(params?: Query): IPromise<FeatureSet>;
    queryObjectIds(params?: Query): IPromise<number[]>;

    on(name: "layerview-create", eventHandler: FeatureLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: FeatureLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: FeatureLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: FeatureLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface FeatureLayerConstructor {
    new(properties?: FeatureLayerProperties): FeatureLayer;

    fromJSON(json: any): FeatureLayer;
  }

  export const FeatureLayer: FeatureLayerConstructor;

  interface FeatureLayerProperties extends LayerProperties, PortalLayerProperties, ScaleRangeLayerProperties {
    capabilities?: FeatureLayerCapabilities;
    copyright?: string;
    definitionExpression?: string;
    displayField?: string;
    elevationInfo?: FeatureLayerElevationInfo;
    featureReduction?: FeatureLayerFeatureReduction;
    fields?: FieldProperties[];
    gdbVersion?: string;
    geometryType?: string;
    hasAttachments?: boolean;
    hasM?: boolean;
    hasZ?: boolean;
    labelingInfo?: LabelClassProperties[];
    labelsVisible?: boolean;
    layerId?: number;
    legendEnabled?: boolean;
    objectIdField?: string;
    outFields?: string[];
    popupEnabled?: boolean;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
    returnM?: boolean;
    returnZ?: boolean;
    screenSizePerspectiveEnabled?: boolean;
    source?: CollectionProperties<GraphicProperties>;
    spatialReference?: SpatialReferenceProperties;
    templates?: FeatureTemplateProperties[];
    token?: string;
    typeIdField?: string;
    types?: FeatureTypeProperties[];
    url?: string;
    version?: number;
  }

  export interface FeatureEditResult {
    objectId: number;
    error: FeatureEditResultError;
  }

  export interface FeatureLayerApplyEditsEdits {
    addFeatures?: Graphic[];
    updateFeatures?: Graphic[];
    deleteFeatures?: Graphic[] | any[];
  }

  export interface FeatureLayerCapabilities {
    data: FeatureLayerCapabilitiesData;
    editing: FeatureLayerCapabilitiesEditing;
    operations: FeatureLayerCapabilitiesOperations;
    query: FeatureLayerCapabilitiesQuery;
    queryRelated: FeatureLayerCapabilitiesQueryRelated;
  }

  export interface FeatureLayerCapabilitiesData {
    supportsAttachment: boolean;
    supportsM: boolean;
    supportsZ: boolean;
  }

  export interface FeatureLayerCapabilitiesEditing {
    supportsDeleteByAnonymous: boolean;
    supportsDeleteByOthers: boolean;
    supportsGeometryUpdate: boolean;
    supportsGlobalId: boolean;
    supportsRollbackOnFailure: boolean;
    supportsUpdateByAnonymous: boolean;
    supportsUpdateByOthers: boolean;
    supportsUpdateWithoutM: boolean;
    supportsUploadWithItemId: boolean;
  }

  export interface FeatureLayerCapabilitiesOperations {
    supportsAdd: boolean;
    supportsDelete: boolean;
    supportsUpdate: boolean;
    supportsEditing: boolean;
    supportsCalculate: boolean;
    supportsQuery: boolean;
    supportsValidateSql: boolean;
  }

  export interface FeatureLayerCapabilitiesQuery {
    supportsCentroid: boolean;
    supportsDistance: boolean;
    supportsDistinct: boolean;
    supportsExtent: boolean;
    supportsGeometryProperties: boolean;
    supportsOrderBy: boolean;
    supportsPagination: boolean;
    supportsQuantization: boolean;
    supportsResultType: boolean;
    supportsSqlExpression: boolean;
    supportsStandardizedQueriesOnly: boolean;
    supportsStatistics: boolean;
  }

  export interface FeatureLayerCapabilitiesQueryRelated {
    supportsCount: boolean;
    supportsOrderBy: boolean;
    supportsPagination: boolean;
  }

  export interface FeatureLayerElevationInfo {
    mode: string;
    offset?: number;
    featureExpressionInfo?: FeatureLayerElevationInfoFeatureExpressionInfo;
    unit?: string;
  }

  export interface FeatureLayerElevationInfoFeatureExpressionInfo {
    expression?: string;
  }

  export interface FeatureLayerFeatureReduction {
    type: string;
  }

  export interface FeatureLayerGetFieldDomainOptions {
    feature: Graphic;
  }

  export interface FeatureLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface FeatureLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  export interface FeatureEditResultError {
    name: string;
    message: string;
  }

  interface GeoRSSLayer extends Layer, ScaleRangeLayer {
    lineSymbol: SimpleLineSymbol;
    pointSymbol: PictureMarkerSymbol;
    polygonSymbol: SimpleFillSymbol;
    url: string;

    on(name: "layerview-create", eventHandler: GeoRSSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: GeoRSSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: GeoRSSLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: GeoRSSLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface GeoRSSLayerConstructor {
    new(properties?: GeoRSSLayerProperties): GeoRSSLayer;
  }

  export const GeoRSSLayer: GeoRSSLayerConstructor;

  interface GeoRSSLayerProperties extends LayerProperties, ScaleRangeLayerProperties {
    lineSymbol?: SimpleLineSymbolProperties;
    pointSymbol?: PictureMarkerSymbolProperties;
    polygonSymbol?: SimpleFillSymbolProperties;
    url?: string;
  }

  export interface GeoRSSLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface GeoRSSLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface GraphicsLayer extends Layer, ScaleRangeLayer {
    elevationInfo: GraphicsLayerElevationInfo;
    graphics: Collection<Graphic>;
    screenSizePerspectiveEnabled: boolean;

    add(graphic: Graphic): void;
    addMany(graphics: Graphic[]): void;
    remove(graphic: Graphic): void;
    removeAll(): void;
    removeMany(graphics: Graphic[]): void;

    on(name: "layerview-create", eventHandler: GraphicsLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: GraphicsLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: GraphicsLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: GraphicsLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface GraphicsLayerConstructor {
    new(properties?: GraphicsLayerProperties): GraphicsLayer;
  }

  export const GraphicsLayer: GraphicsLayerConstructor;

  interface GraphicsLayerProperties extends LayerProperties, ScaleRangeLayerProperties {
    elevationInfo?: GraphicsLayerElevationInfo;
    graphics?: CollectionProperties<GraphicProperties>;
    screenSizePerspectiveEnabled?: boolean;
  }

  export interface GraphicsLayerElevationInfo {
    mode: string;
    offset?: number;
    featureExpressionInfo?: GraphicsLayerElevationInfoFeatureExpressionInfo;
    unit?: string;
  }

  export interface GraphicsLayerElevationInfoFeatureExpressionInfo {
    expression?: string;
  }

  export interface GraphicsLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface GraphicsLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface GroupLayer extends Layer, LayersMixin, PortalLayer {
    visibilityMode: string;

    on(name: "layerview-create", eventHandler: GroupLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: GroupLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: GroupLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: GroupLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface GroupLayerConstructor {
    new(properties?: GroupLayerProperties): GroupLayer;

    fromJSON(json: any): GroupLayer;
  }

  export const GroupLayer: GroupLayerConstructor;

  interface GroupLayerProperties extends LayerProperties, LayersMixinProperties, PortalLayerProperties {
    visibilityMode?: string;
  }

  export interface GroupLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface GroupLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface ImageryLayer extends Layer, ArcGISImageService, ScaleRangeLayer {
    pixelFilter: Function;
    popupEnabled: boolean;
    portalItem: PortalItem;
    token: string;

    redraw(): void;

    on(name: "layerview-create", eventHandler: ImageryLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: ImageryLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: ImageryLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: ImageryLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface ImageryLayerConstructor {
    new(properties?: ImageryLayerProperties): ImageryLayer;

    fromJSON(json: any): ImageryLayer;
  }

  export const ImageryLayer: ImageryLayerConstructor;

  interface ImageryLayerProperties extends LayerProperties, ArcGISImageServiceProperties, ScaleRangeLayerProperties {
    pixelFilter?: Function;
    popupEnabled?: boolean;
    portalItem?: PortalItemProperties;
    token?: string;
  }

  export interface ImageryLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface ImageryLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface IntegratedMeshLayer extends Layer, SceneService, PortalLayer {
    elevationInfo: IntegratedMeshLayerElevationInfo;

    on(name: "layerview-create", eventHandler: IntegratedMeshLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: IntegratedMeshLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: IntegratedMeshLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: IntegratedMeshLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface IntegratedMeshLayerConstructor {
    new(properties?: IntegratedMeshLayerProperties): IntegratedMeshLayer;

    fromJSON(json: any): IntegratedMeshLayer;
  }

  export const IntegratedMeshLayer: IntegratedMeshLayerConstructor;

  interface IntegratedMeshLayerProperties extends LayerProperties, SceneServiceProperties, PortalLayerProperties {
    elevationInfo?: IntegratedMeshLayerElevationInfo;
  }

  export interface IntegratedMeshLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface IntegratedMeshLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface IntegratedMeshLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface KMLLayer extends Layer, PortalLayer, ScaleRangeLayer {
    allVisibleMapImages: Collection<any>;
    allVisiblePoints: Collection<Point>;
    allVisiblePolygons: Collection<Polygon>;
    allVisiblePolylines: Collection<Polyline>;
    sublayers: Collection<KMLSublayer>;
    url: string;

    on(name: "layerview-create", eventHandler: KMLLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: KMLLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: KMLLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: KMLLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface KMLLayerConstructor {
    new(properties?: KMLLayerProperties): KMLLayer;

    fromJSON(json: any): KMLLayer;
  }

  export const KMLLayer: KMLLayerConstructor;

  interface KMLLayerProperties extends LayerProperties, PortalLayerProperties, ScaleRangeLayerProperties {
    allVisibleMapImages?: CollectionProperties<any>;
    allVisiblePoints?: CollectionProperties<PointProperties>;
    allVisiblePolygons?: CollectionProperties<PolygonProperties>;
    allVisiblePolylines?: CollectionProperties<PolylineProperties>;
    sublayers?: CollectionProperties<KMLSublayerProperties>;
    url?: string;
  }

  export interface KMLLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface KMLLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface Layer extends Accessor, Loadable, Evented {
    fullExtent: Extent;
    id: string;
    listMode: string;
    loaded: boolean;
    opacity: number;
    title: string;
    type: string;
    visible: boolean;

    fetchAttributionData(): IPromise<any>;
  }

  interface LayerConstructor {
    new(properties?: LayerProperties): Layer;


    fromArcGISServerUrl(params: LayerFromArcGISServerUrlParams): IPromise<Layer>;
    fromPortalItem(params: LayerFromPortalItemParams): IPromise<Layer>;
  }

  export const Layer: LayerConstructor;

  interface LayerProperties extends LoadableProperties {
    fullExtent?: ExtentProperties;
    id?: string;
    listMode?: string;
    loaded?: boolean;
    opacity?: number;
    title?: string;
    type?: string;
    visible?: boolean;
  }

  export interface LayerFromArcGISServerUrlParams {
    url: string;
    properties?: any;
  }

  export interface LayerFromPortalItemParams {
    portalItem: PortalItem;
  }

  interface MapImageLayer extends Layer, ArcGISMapService, ArcGISDynamicMapService, DynamicLayer, ScaleRangeLayer {
    on(name: "layerview-create", eventHandler: MapImageLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: MapImageLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: MapImageLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: MapImageLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface MapImageLayerConstructor {
    new(properties?: MapImageLayerProperties): MapImageLayer;

    fromJSON(json: any): MapImageLayer;
  }

  export const MapImageLayer: MapImageLayerConstructor;

  interface MapImageLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISDynamicMapServiceProperties, DynamicLayerProperties, ScaleRangeLayerProperties {

  }

  export interface MapImageLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface MapImageLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface MapNotesLayer extends Layer, PortalLayer, ScaleRangeLayer {
    on(name: "layerview-create", eventHandler: MapNotesLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: MapNotesLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: MapNotesLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: MapNotesLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface MapNotesLayerConstructor {
    new(properties?: MapNotesLayerProperties): MapNotesLayer;

    fromJSON(json: any): MapNotesLayer;
  }

  export const MapNotesLayer: MapNotesLayerConstructor;

  interface MapNotesLayerProperties extends LayerProperties, PortalLayerProperties, ScaleRangeLayerProperties {

  }

  export interface MapNotesLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface MapNotesLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface ArcGISCachedService {
    tileInfo: TileInfo;

    fromJSON(json: any): any;
    toJSON(): any;
  }

  interface ArcGISCachedServiceConstructor {
    new(properties?: ArcGISCachedServiceProperties): ArcGISCachedService;

    fromJSON(json: any): ArcGISCachedService;
  }

  export const ArcGISCachedService: ArcGISCachedServiceConstructor;

  interface ArcGISCachedServiceProperties {
    tileInfo?: TileInfoProperties;
  }

  interface ArcGISDynamicMapService {
    allSublayers: Collection<Sublayer>;
    dpi: number;
    gdbVersion: string;
    imageFormat: string;
    imageMaxHeight: number;
    imageMaxWidth: number;
    imageTransparency: boolean;
    sublayers: Collection<Sublayer>;

    createServiceSublayers(): Collection<Sublayer>;
    findSublayerById(id: number): Sublayer;
    getExportImageParameters(extent: Extent, width: number, height: number, options?: ArcGISDynamicMapServiceGetExportImageParametersOptions): any;
  }

  interface ArcGISDynamicMapServiceConstructor {
    new(): ArcGISDynamicMapService;
  }

  export const ArcGISDynamicMapService: ArcGISDynamicMapServiceConstructor;

  interface ArcGISDynamicMapServiceProperties {
    allSublayers?: CollectionProperties<SublayerProperties>;
    dpi?: number;
    gdbVersion?: string;
    imageFormat?: string;
    imageMaxHeight?: number;
    imageMaxWidth?: number;
    imageTransparency?: boolean;
    sublayers?: CollectionProperties<SublayerProperties>;
  }

  export interface ArcGISDynamicMapServiceGetExportImageParametersOptions {
    rotation?: number;
  }

  interface ArcGISImageService {
    compressionQuality: number;
    compressionTolerance: number;
    copyright: string;
    definitionExpression: string;
    domainFields: Field[];
    fields: Field[];
    format: string;
    fullExtent: Extent;
    hasMultidimensions: boolean;
    hasRasterAttributeTable: boolean;
    imageMaxHeight: number;
    imageMaxWidth: number;
    mosaicRule: MosaicRule;
    multidimensionalInfo: any;
    pixelType: string;
    popupTemplate: PopupTemplate;
    rasterAttributeTable: any;
    rasterAttributeTableFieldPrefix: string;
    rasterFields: Field[];
    renderingRule: RasterFunction;
    spatialReference: SpatialReference;
    url: string;
    version: number;

    fetchImage(extent: Extent, width: number, height: number): IPromise<any>;
    fromJSON(json: any): any;
    toJSON(): any;
  }

  interface ArcGISImageServiceConstructor {
    new(properties?: ArcGISImageServiceProperties): ArcGISImageService;

    fromJSON(json: any): ArcGISImageService;
  }

  export const ArcGISImageService: ArcGISImageServiceConstructor;

  interface ArcGISImageServiceProperties {
    compressionQuality?: number;
    compressionTolerance?: number;
    copyright?: string;
    definitionExpression?: string;
    domainFields?: FieldProperties[];
    fields?: FieldProperties[];
    format?: string;
    fullExtent?: ExtentProperties;
    hasMultidimensions?: boolean;
    hasRasterAttributeTable?: boolean;
    imageMaxHeight?: number;
    imageMaxWidth?: number;
    mosaicRule?: MosaicRuleProperties;
    multidimensionalInfo?: any;
    pixelType?: string;
    popupTemplate?: PopupTemplateProperties;
    rasterAttributeTable?: any;
    rasterAttributeTableFieldPrefix?: string;
    rasterFields?: FieldProperties[];
    renderingRule?: RasterFunctionProperties;
    spatialReference?: SpatialReferenceProperties;
    url?: string;
    version?: number;
  }

  interface ArcGISMapService {
    copyright: string;
    fullExtent: Extent;
    spatialReference: SpatialReference;
    token: string;
  }

  interface ArcGISMapServiceConstructor {
    new(properties?: ArcGISMapServiceProperties): ArcGISMapService;

    fromJSON(json: any): ArcGISMapService;
  }

  export const ArcGISMapService: ArcGISMapServiceConstructor;

  interface ArcGISMapServiceProperties {
    copyright?: string;
    fullExtent?: ExtentProperties;
    spatialReference?: SpatialReferenceProperties;
    token?: string;
  }

  interface PortalLayer {
    portalItem: PortalItem;
  }

  interface PortalLayerConstructor {
    new(properties?: PortalLayerProperties): PortalLayer;

    fromJSON(json: any): PortalLayer;
  }

  export const PortalLayer: PortalLayerConstructor;

  interface PortalLayerProperties {
    portalItem?: PortalItemProperties;
  }

  interface ScaleRangeLayer {
    maxScale: number;
    minScale: number;
  }

  interface ScaleRangeLayerConstructor {
    new(): ScaleRangeLayer;
  }

  export const ScaleRangeLayer: ScaleRangeLayerConstructor;

  interface ScaleRangeLayerProperties {
    maxScale?: number;
    minScale?: number;
  }

  interface SceneService {
    copyright: string;
    layerId: number;
    spatialReference: SpatialReference;
    token: string;
    url: string;
    version: SceneServiceVersion;
  }

  interface SceneServiceConstructor {
    new(properties?: SceneServiceProperties): SceneService;

    fromJSON(json: any): SceneService;
  }

  export const SceneService: SceneServiceConstructor;

  interface SceneServiceProperties {
    copyright?: string;
    layerId?: number;
    spatialReference?: SpatialReferenceProperties;
    token?: string;
    url?: string;
    version?: SceneServiceVersion;
  }

  export interface SceneServiceVersion {
    major: number;
    minor: number;
    versionString: string;
  }

  interface OpenStreetMapLayer extends WebTileLayer {
    on(name: "layerview-create", eventHandler: OpenStreetMapLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: OpenStreetMapLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: OpenStreetMapLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: OpenStreetMapLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface OpenStreetMapLayerConstructor {
    new(properties?: OpenStreetMapLayerProperties): OpenStreetMapLayer;

    fromJSON(json: any): OpenStreetMapLayer;
  }

  export const OpenStreetMapLayer: OpenStreetMapLayerConstructor;

  interface OpenStreetMapLayerProperties extends WebTileLayerProperties {

  }

  export interface OpenStreetMapLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface OpenStreetMapLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface PointCloudLayer extends Layer, SceneService, PortalLayer {
    elevationInfo: PointCloudLayerElevationInfo;
    fields: Field[];
    legendEnabled: boolean;
    renderer: PointCloudRenderer;

    on(name: "layerview-create", eventHandler: PointCloudLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: PointCloudLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: PointCloudLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: PointCloudLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface PointCloudLayerConstructor {
    new(properties?: PointCloudLayerProperties): PointCloudLayer;

    fromJSON(json: any): PointCloudLayer;
  }

  export const PointCloudLayer: PointCloudLayerConstructor;

  interface PointCloudLayerProperties extends LayerProperties, SceneServiceProperties, PortalLayerProperties {
    elevationInfo?: PointCloudLayerElevationInfo;
    fields?: FieldProperties[];
    legendEnabled?: boolean;
    renderer?: PointCloudRendererProperties;
  }

  export interface PointCloudLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface PointCloudLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  export interface PointCloudLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  interface SceneLayer extends Layer, SceneService, PortalLayer {
    definitionExpression: string;
    elevationInfo: SceneLayerElevationInfo;
    featureReduction: SceneLayerFeatureReduction;
    fields: Field[];
    geometryType: string;
    labelingInfo: LabelClass[];
    labelsVisible: boolean;
    legendEnabled: boolean;
    objectIdField: string;
    popupEnabled: boolean;
    popupTemplate: PopupTemplate;
    renderer: Renderer;
    screenSizePerspectiveEnabled: boolean;

    createQuery(): Query;
    getFieldUsageInfo(fieldName: string): any;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<number>;
    queryFeatures(params?: Query): IPromise<FeatureSet>;
    queryObjectIds(params?: Query): IPromise<number[]>;

    on(name: "layerview-create", eventHandler: SceneLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: SceneLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: SceneLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: SceneLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface SceneLayerConstructor {
    new(properties?: SceneLayerProperties): SceneLayer;

    fromJSON(json: any): SceneLayer;
  }

  export const SceneLayer: SceneLayerConstructor;

  interface SceneLayerProperties extends LayerProperties, SceneServiceProperties, PortalLayerProperties {
    definitionExpression?: string;
    elevationInfo?: SceneLayerElevationInfo;
    featureReduction?: SceneLayerFeatureReduction;
    fields?: FieldProperties[];
    geometryType?: string;
    labelingInfo?: LabelClassProperties[];
    labelsVisible?: boolean;
    legendEnabled?: boolean;
    objectIdField?: string;
    popupEnabled?: boolean;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
    screenSizePerspectiveEnabled?: boolean;
  }

  export interface SceneLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface SceneLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  export interface SceneLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface SceneLayerFeatureReduction {
    type: string;
  }

  interface StreamLayer extends FeatureLayer {
    filter: StreamLayerFilter;
    geometryDefinition: Extent;
    maximumTrackPoints: number;
    purgeOptions: StreamLayerPurgeOptions;

    updateFilter(filterChanges: StreamLayerUpdateFilterFilterChanges): IPromise<any>;

    on(name: "layerview-create", eventHandler: StreamLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: StreamLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: StreamLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: StreamLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface StreamLayerConstructor {
    new(properties?: StreamLayerProperties): StreamLayer;

    fromJSON(json: any): StreamLayer;
  }

  export const StreamLayer: StreamLayerConstructor;

  interface StreamLayerProperties extends FeatureLayerProperties {
    filter?: StreamLayerFilter;
    geometryDefinition?: ExtentProperties;
    maximumTrackPoints?: number;
    purgeOptions?: StreamLayerPurgeOptions;
  }

  export interface StreamLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface StreamLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  export interface StreamLayerFilter {
    geometry?: Extent;
    where?: string;
  }

  export interface StreamLayerPurgeOptions {
    displayCount: number;
    age: number;
  }

  export interface StreamLayerUpdateFilterFilterChanges {
    geometry: Extent;
    where: string;
  }

  interface CodedValueDomain extends Domain {
    codedValues: CodedValueDomainCodedValues[];

    getName(code: string | number): string;
  }

  interface CodedValueDomainConstructor {
    new(properties?: CodedValueDomainProperties): CodedValueDomain;

    fromJSON(json: any): CodedValueDomain;
  }

  export const CodedValueDomain: CodedValueDomainConstructor;

  interface CodedValueDomainProperties extends DomainProperties {
    codedValues?: CodedValueDomainCodedValues[];
  }

  export interface CodedValueDomainCodedValues {
    name: string;
    code: string | number;
  }

  interface DimensionalDefinition {
    dimensionName: string;
    isSlice: boolean;
    values: any[];
    variableName: string;

    toJSON(): any;
  }

  interface DimensionalDefinitionConstructor {
    new(properties?: any): DimensionalDefinition;
  }

  export const DimensionalDefinition: DimensionalDefinitionConstructor;

  interface Domain extends Accessor, JSONSupport {
    name: string;
    type: string;
  }

  interface DomainConstructor {
    new(properties?: DomainProperties): Domain;

    fromJSON(json: any): Domain;
  }

  export const Domain: DomainConstructor;

  interface DomainProperties {
    name?: string;
    type?: string;
  }

  interface FeatureTemplate extends Accessor, JSONSupport {
    description: string;
    drawingTool: string;
    name: string;
    prototype: any;
    thumbnail: FeatureTemplateThumbnail;
  }

  interface FeatureTemplateConstructor {
    new(properties?: FeatureTemplateProperties): FeatureTemplate;

    fromJSON(json: any): FeatureTemplate;
  }

  export const FeatureTemplate: FeatureTemplateConstructor;

  interface FeatureTemplateProperties {
    description?: string;
    drawingTool?: string;
    name?: string;
    prototype?: any;
    thumbnail?: FeatureTemplateThumbnail;
  }

  export interface FeatureTemplateThumbnail {
    contentType: any;
    imageData: string;
    height: number;
    width: number;
  }

  interface FeatureType extends Accessor, JSONSupport {
    domains: any;
    id: number | string;
    name: string;
    templates: FeatureTemplate[];
  }

  interface FeatureTypeConstructor {
    new(properties?: FeatureTypeProperties): FeatureType;

    fromJSON(json: any): FeatureType;
  }

  export const FeatureType: FeatureTypeConstructor;

  interface FeatureTypeProperties {
    domains?: any;
    id?: number | string;
    name?: string;
    templates?: FeatureTemplateProperties[];
  }

  interface Field extends Accessor, JSONSupport {
    alias: string;
    domain: Domain;
    editable: boolean;
    length: number;
    name: string;
    nullable: boolean;
    type: string;
  }

  interface FieldConstructor {
    new(properties?: FieldProperties): Field;

    fromJSON(json: any): Field;
  }

  export const Field: FieldConstructor;

  interface FieldProperties {
    alias?: string;
    domain?: DomainProperties;
    editable?: boolean;
    length?: number;
    name?: string;
    nullable?: boolean;
    type?: string;
  }

  interface ImageParameters extends Accessor {
    dpi: number;
    extent: Extent;
    format: string;
    height: number;
    imageSpatialReference: SpatialReference;
    layerDefinitions: string[];
    layerIds: number[];
    layerOption: string;
    transparent: boolean;
    width: number;

    toJSON(): any;
  }

  interface ImageParametersConstructor {
    new(properties?: ImageParametersProperties): ImageParameters;
  }

  export const ImageParameters: ImageParametersConstructor;

  interface ImageParametersProperties {
    dpi?: number;
    extent?: ExtentProperties;
    format?: string;
    height?: number;
    imageSpatialReference?: SpatialReferenceProperties;
    layerDefinitions?: string[];
    layerIds?: number[];
    layerOption?: string;
    transparent?: boolean;
    width?: number;
  }

  interface InheritedDomain extends Domain {
  }

  interface InheritedDomainConstructor {
    new(properties?: InheritedDomainProperties): InheritedDomain;

    fromJSON(json: any): InheritedDomain;
  }

  export const InheritedDomain: InheritedDomainConstructor;

  interface InheritedDomainProperties extends DomainProperties {

  }

  interface KMLSublayer extends Accessor, JSONSupport {
    description: string;
    id: number;
    layer: KMLLayer;
    mapImages: Collection<any>;
    networkLink: KMLSublayerNetworkLink;
    points: Collection<Point>;
    polygons: Collection<Polygon>;
    polylines: Collection<Polyline>;
    sublayers: Collection<KMLSublayer>;
    title: string;
    visible: boolean;
  }

  interface KMLSublayerConstructor {
    new(properties?: KMLSublayerProperties): KMLSublayer;

    fromJSON(json: any): KMLSublayer;
  }

  export const KMLSublayer: KMLSublayerConstructor;

  interface KMLSublayerProperties {
    description?: string;
    id?: number;
    layer?: KMLLayerProperties;
    mapImages?: CollectionProperties<any>;
    networkLink?: KMLSublayerNetworkLink;
    points?: CollectionProperties<PointProperties>;
    polygons?: CollectionProperties<PolygonProperties>;
    polylines?: CollectionProperties<PolylineProperties>;
    sublayers?: CollectionProperties<KMLSublayerProperties>;
    title?: string;
    visible?: boolean;
  }

  export interface KMLSublayerNetworkLink {
    id: number;
    name: string;
    description: string;
    visibility: number;
    refreshMode: string;
    refreshInterval: number;
    viewRefreshMode: string;
    viewRefreshTime: number;
    viewBoundScale: number;
    viewFormat: string;
    httpQuery: string;
  }

  interface LabelClass extends Accessor, JSONSupport {
    labelExpression: string;
    labelExpressionInfo: LabelClassLabelExpressionInfo;
    labelPlacement: string;
    maxScale: number;
    minScale: number;
    symbol: TextSymbol | LabelSymbol3D;
    useCodedValues: boolean;
    where: string;

    clone(): LabelClass;
  }

  interface LabelClassConstructor {
    new(properties?: LabelClassProperties): LabelClass;

    fromJSON(json: any): LabelClass;
  }

  export const LabelClass: LabelClassConstructor;

  interface LabelClassProperties {
    labelExpression?: string;
    labelExpressionInfo?: LabelClassLabelExpressionInfo;
    labelPlacement?: string;
    maxScale?: number;
    minScale?: number;
    symbol?: TextSymbolProperties | LabelSymbol3DProperties;
    useCodedValues?: boolean;
    where?: string;
  }

  export interface LabelClassLabelExpressionInfo {
    value?: string;
    expression: string;
  }

  interface LOD extends Accessor, JSONSupport {
    level: number;
    levelValue: string;
    resolution: number;
    scale: number;
  }

  interface LODConstructor {
    new(properties?: LODProperties): LOD;

    fromJSON(json: any): LOD;
  }

  export const LOD: LODConstructor;

  interface LODProperties {
    level?: number;
    levelValue?: string;
    resolution?: number;
    scale?: number;
  }

  interface MapImage extends Accessor, JSONSupport {
    extent: Extent;
    height: number;
    href: string;
    opacity: number;
    scale: number;
    visible: boolean;
    width: number;
  }

  interface MapImageConstructor {
    new(properties?: MapImageProperties): MapImage;

    fromJSON(json: any): MapImage;
  }

  export const MapImage: MapImageConstructor;

  interface MapImageProperties {
    extent?: ExtentProperties;
    height?: number;
    href?: string;
    opacity?: number;
    scale?: number;
    visible?: boolean;
    width?: number;
  }

  interface MosaicRule extends Accessor, JSONSupport {
    ascending: boolean;
    lockRasterIds: number[];
    method: string;
    multidimensionalDefinition: DimensionalDefinition[];
    objectIds: number[];
    operation: string;
    sortField: string;
    sortValue: string;
    viewpoint: Point;
    where: string;
  }

  interface MosaicRuleConstructor {
    new(properties?: MosaicRuleProperties): MosaicRule;

    fromJSON(json: any): MosaicRule;
  }

  export const MosaicRule: MosaicRuleConstructor;

  interface MosaicRuleProperties {
    ascending?: boolean;
    lockRasterIds?: number[];
    method?: string;
    multidimensionalDefinition?: DimensionalDefinition[];
    objectIds?: number[];
    operation?: string;
    sortField?: string;
    sortValue?: string;
    viewpoint?: PointProperties;
    where?: string;
  }

  interface PixelBlock extends Accessor {
    height: number;
    mask: number[];
    pixels: number[][];
    pixelType: string;
    statistics: PixelBlockStatistics[];
    width: number;

    addData(planeData: PixelBlockAddDataPlaneData): void;
    getAsRGBA(): number[];
    getAsRGBAFloat(): number[];
    getPlaneCount(): number;
  }

  interface PixelBlockConstructor {
    new(properties?: PixelBlockProperties): PixelBlock;
  }

  export const PixelBlock: PixelBlockConstructor;

  interface PixelBlockProperties {
    height?: number;
    mask?: number[];
    pixels?: number[][];
    pixelType?: string;
    statistics?: PixelBlockStatistics[];
    width?: number;
  }

  export interface PixelBlockAddDataPlaneData {
    pixels: number[][];
    statistics: any[];
  }

  export interface PixelBlockStatistics {
    maxValue?: number;
    minValue?: number;
    noDataValue?: number;
  }

  interface RangeDomain extends Domain {
    maxValue: number;
    minValue: number;
  }

  interface RangeDomainConstructor {
    new(properties?: RangeDomainProperties): RangeDomain;

    fromJSON(json: any): RangeDomain;
  }

  export const RangeDomain: RangeDomainConstructor;

  interface RangeDomainProperties extends DomainProperties {
    maxValue?: number;
    minValue?: number;
  }

  interface RasterFunction extends Accessor, JSONSupport {
    functionArguments: any;
    functionName: string;
    outputPixelType: string;
    variableName: any;
  }

  interface RasterFunctionConstructor {
    new(properties?: RasterFunctionProperties): RasterFunction;

    fromJSON(json: any): RasterFunction;
  }

  export const RasterFunction: RasterFunctionConstructor;

  interface RasterFunctionProperties {
    functionArguments?: any;
    functionName?: string;
    outputPixelType?: string;
    variableName?: any;
  }

  interface Sublayer extends Accessor {
    definitionExpression: string;
    id: number;
    labelingInfo: LabelClass[];
    labelsVisible: boolean;
    layer: MapImageLayer;
    legendEnabled: boolean;
    maxScale: number;
    minScale: number;
    opacity: number;
    popupTemplate: PopupTemplate;
    renderer: Renderer;
    source: DynamicMapLayer | DynamicDataLayer;
    sublayers: Collection<Sublayer>;
    title: string;
    url: string;
    visible: boolean;

    clone(): Sublayer;
    createQuery(): Query;
    queryFeatures(params?: Query): IPromise<FeatureSet>;
  }

  interface SublayerConstructor {
    new(properties?: SublayerProperties): Sublayer;
  }

  export const Sublayer: SublayerConstructor;

  interface SublayerProperties {
    definitionExpression?: string;
    id?: number;
    labelingInfo?: LabelClassProperties[];
    labelsVisible?: boolean;
    layer?: MapImageLayerProperties;
    legendEnabled?: boolean;
    maxScale?: number;
    minScale?: number;
    opacity?: number;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
    source?: DynamicMapLayer | DynamicDataLayer;
    sublayers?: CollectionProperties<SublayerProperties>;
    title?: string;
    url?: string;
    visible?: boolean;
  }

  export interface DynamicDataLayer {
    type: string;
    dataSource: TableDataSource | QueryTableDataSource | RasterDataSource | JoinTableDataSource;
    fields: DynamicDataLayerFields[];
  }

  export interface DynamicMapLayer {
    type: string;
    mapLayerId: number;
    gdbVersion: string;
  }

  export interface JoinTableDataSource {
    type: string;
    leftTableKey: string;
    rightTableKey: string;
    leftTableSource: DynamicMapLayer | DynamicDataLayer;
    rightTableSource: DynamicMapLayer | DynamicDataLayer;
    joinType: string;
  }

  export interface QueryTableDataSource {
    type: string;
    workspaceId: string;
    query: string;
    oidFields: string;
    spatialReference: SpatialReference;
    geometryType: string;
  }

  export interface RasterDataSource {
    type: string;
    workspaceId: string;
    dataSourceName: string;
  }

  export interface TableDataSource {
    type: string;
    workspaceId: string;
    dataSourceName: string;
    gdbVersion: string;
  }

  export interface DynamicDataLayerFields {
    name: string;
    alias: string;
  }

  interface TileInfo extends Accessor, JSONSupport {
    dpi: number;
    format: string;
    isWrappable: boolean;
    lods: LOD[];
    origin: Point;
    size: number[];
    spatialReference: SpatialReference;
  }

  interface TileInfoConstructor {
    new(properties?: TileInfoProperties): TileInfo;

    fromJSON(json: any): TileInfo;
  }

  export const TileInfo: TileInfoConstructor;

  interface TileInfoProperties {
    dpi?: number;
    format?: string;
    isWrappable?: boolean;
    lods?: LODProperties[];
    origin?: PointProperties;
    size?: number[];
    spatialReference?: SpatialReferenceProperties;
  }

  interface TileMatrixSet extends Accessor, JSONSupport {
    fullExtent: Extent;
    id: string;
    tileInfo: TileInfo;

    clone(): TileMatrixSet;
  }

  interface TileMatrixSetConstructor {
    new(properties?: TileMatrixSetProperties): TileMatrixSet;

    fromJSON(json: any): TileMatrixSet;
  }

  export const TileMatrixSet: TileMatrixSetConstructor;

  interface TileMatrixSetProperties {
    fullExtent?: ExtentProperties;
    id?: string;
    tileInfo?: TileInfoProperties;
  }

  interface WMSSublayer {
    description: string;
    fullExtent: Extent;
    id: number;
    layer: WMSLayer;
    legendEnabled: boolean;
    legendUrl: string;
    name: string;
    popupEnabled: boolean;
    queryable: boolean;
    spatialReferences: number[];
    sublayers: Collection<WMSSublayer>;
    title: string;
    visible: boolean;

    clone(): WMSSublayer;
  }

  interface WMSSublayerConstructor {
    new(properties?: any): WMSSublayer;
  }

  export const WMSSublayer: WMSSublayerConstructor;

  interface WMTSStyle extends Accessor, JSONSupport {
    description: string;
    id: string;
    legendUrl: string;
    title: string;

    clone(): WMTSStyle;
  }

  interface WMTSStyleConstructor {
    new(properties?: WMTSStyleProperties): WMTSStyle;

    fromJSON(json: any): WMTSStyle;
  }

  export const WMTSStyle: WMTSStyleConstructor;

  interface WMTSStyleProperties {
    description?: string;
    id?: string;
    legendUrl?: string;
    title?: string;
  }

  interface WMTSSublayer extends Accessor, JSONSupport {
    description: string;
    fullExtent: Extent;
    id: string;
    imageFormat: string;
    imageFormats: string[];
    layer: WMTSLayer;
    styleId: string;
    styles: Collection<WMTSStyle>;
    tileMatrixSet: TileMatrixSet;
    tileMatrixSetId: string;
    tileMatrixSets: Collection<TileMatrixSet>;
    title: string;

    clone(): WMTSSublayer;
  }

  interface WMTSSublayerConstructor {
    new(properties?: WMTSSublayerProperties): WMTSSublayer;

    fromJSON(json: any): WMTSSublayer;
  }

  export const WMTSSublayer: WMTSSublayerConstructor;

  interface WMTSSublayerProperties {
    description?: string;
    fullExtent?: ExtentProperties;
    id?: string;
    imageFormat?: string;
    imageFormats?: string[];
    layer?: WMTSLayerProperties;
    styleId?: string;
    styles?: CollectionProperties<WMTSStyleProperties>;
    tileMatrixSet?: TileMatrixSetProperties;
    tileMatrixSetId?: string;
    tileMatrixSets?: CollectionProperties<TileMatrixSetProperties>;
    title?: string;
  }

  interface TiledLayer {
    tileInfo: TileInfo;
  }

  interface TiledLayerConstructor {
    new(properties?: TiledLayerProperties): TiledLayer;

    fromJSON(json: any): TiledLayer;
  }

  export const TiledLayer: TiledLayerConstructor;

  interface TiledLayerProperties {
    tileInfo?: TileInfoProperties;
  }

  interface TileLayer extends Layer, ArcGISMapService, ArcGISCachedService, ScaleRangeLayer, PortalLayer, TiledLayer {
    attributionDataUrl: string;
    hasAttributionData: boolean;
    legendEnabled: boolean;
    tileServers: string[];
    url: string;

    fetchTile(level: number, row: number, column: number, options?: TileLayerFetchTileOptions): IPromise<HTMLImageElement | HTMLCanvasElement>;
    getTileUrl(level: number, row: number, col: number): string;

    on(name: "layerview-create", eventHandler: TileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: TileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: TileLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: TileLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface TileLayerConstructor {
    new(properties?: TileLayerProperties): TileLayer;

    fromJSON(json: any): TileLayer;
  }

  export const TileLayer: TileLayerConstructor;

  interface TileLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISCachedServiceProperties, ScaleRangeLayerProperties, PortalLayerProperties, TiledLayerProperties {
    attributionDataUrl?: string;
    hasAttributionData?: boolean;
    legendEnabled?: boolean;
    tileServers?: string[];
    url?: string;
  }

  export interface TileLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface TileLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  export interface TileLayerFetchTileOptions {
    allowImageDataAccess?: boolean;
  }

  interface UnknownLayer extends Layer {
    on(name: "layerview-create", eventHandler: UnknownLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: UnknownLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: UnknownLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: UnknownLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface UnknownLayerConstructor {
    new(properties?: UnknownLayerProperties): UnknownLayer;
  }

  export const UnknownLayer: UnknownLayerConstructor;

  interface UnknownLayerProperties extends LayerProperties {

  }

  export interface UnknownLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface UnknownLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface UnsupportedLayer extends Layer {
    on(name: "layerview-create", eventHandler: UnsupportedLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: UnsupportedLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: UnsupportedLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: UnsupportedLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface UnsupportedLayerConstructor {
    new(properties?: UnsupportedLayerProperties): UnsupportedLayer;
  }

  export const UnsupportedLayer: UnsupportedLayerConstructor;

  interface UnsupportedLayerProperties extends LayerProperties {

  }

  export interface UnsupportedLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface UnsupportedLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface VectorTileLayer extends Layer, PortalLayer, ScaleRangeLayer, TiledLayer {
    attributionDataUrl: string;
    currentStyleInfo: VectorTileLayerCurrentStyleInfo;
    spatialReference: SpatialReference;
    token: string;
    url: string | any;

    loadStyle(style: string | any): IPromise<any>;

    on(name: "layerview-create", eventHandler: VectorTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: VectorTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: VectorTileLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: VectorTileLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface VectorTileLayerConstructor {
    new(properties?: VectorTileLayerProperties): VectorTileLayer;

    fromJSON(json: any): VectorTileLayer;
  }

  export const VectorTileLayer: VectorTileLayerConstructor;

  interface VectorTileLayerProperties extends LayerProperties, PortalLayerProperties, ScaleRangeLayerProperties, TiledLayerProperties {
    attributionDataUrl?: string;
    currentStyleInfo?: VectorTileLayerCurrentStyleInfo;
    spatialReference?: SpatialReferenceProperties;
    token?: string;
    url?: string | any;
  }

  export interface VectorTileLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface VectorTileLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  export interface VectorTileLayerCurrentStyleInfo {
    serviceUrl: string;
    styleUrl: string;
    spriteUrl: string;
    glyphsUrl: string;
    style: any;
    layerDefinition: any;
  }

  interface WebTileLayer extends Layer, TiledLayer, ScaleRangeLayer {
    copyright: string;
    spatialReference: SpatialReference;
    subDomains: string[];
    tileServers: string[];
    urlTemplate: string;

    on(name: "layerview-create", eventHandler: WebTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: WebTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: WebTileLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: WebTileLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface WebTileLayerConstructor {
    new(properties?: WebTileLayerProperties): WebTileLayer;

    fromJSON(json: any): WebTileLayer;
  }

  export const WebTileLayer: WebTileLayerConstructor;

  interface WebTileLayerProperties extends LayerProperties, TiledLayerProperties, ScaleRangeLayerProperties {
    copyright?: string;
    spatialReference?: SpatialReferenceProperties;
    subDomains?: string[];
    tileServers?: string[];
    urlTemplate?: string;
  }

  export interface WebTileLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface WebTileLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface WMSLayer extends Layer, PortalLayer, ScaleRangeLayer {
    copyright: string;
    customLayerParameters: any;
    customParameters: any;
    description: string;
    featureInfoFormat: string;
    featureInfoUrl: string;
    fullExtents: Extent[];
    imageFormat: string;
    imageMaxHeight: number;
    imageMaxWidth: number;
    imageTransparency: boolean;
    legendEnabled: boolean;
    spatialReference: SpatialReference;
    spatialReferences: number[];
    sublayers: Collection<WMSSublayer>;
    url: string;
    version: string;

    fetchImage(extent: Extent, width: number, height: number, options?: WMSLayerFetchImageOptions): IPromise<any>;
    findSublayerById(id: number): WMSSublayer;

    on(name: "layerview-create", eventHandler: WMSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: WMSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: WMSLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: WMSLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface WMSLayerConstructor {
    new(properties?: WMSLayerProperties): WMSLayer;

    fromJSON(json: any): WMSLayer;
  }

  export const WMSLayer: WMSLayerConstructor;

  interface WMSLayerProperties extends LayerProperties, PortalLayerProperties, ScaleRangeLayerProperties {
    copyright?: string;
    customLayerParameters?: any;
    customParameters?: any;
    description?: string;
    featureInfoFormat?: string;
    featureInfoUrl?: string;
    fullExtents?: ExtentProperties[];
    imageFormat?: string;
    imageMaxHeight?: number;
    imageMaxWidth?: number;
    imageTransparency?: boolean;
    legendEnabled?: boolean;
    spatialReference?: SpatialReferenceProperties;
    spatialReferences?: number[];
    sublayers?: CollectionProperties<WMSSublayer>;
    url?: string;
    version?: string;
  }

  export interface WMSLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface WMSLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  export interface WMSLayerFetchImageOptions {
    allowImageDataAccess?: boolean;
    pixelRatio?: number;
    rotation?: number;
  }

  interface WMTSLayer extends Layer, PortalLayer, ScaleRangeLayer {
    activeLayer: WMTSSublayer;
    copyright: string;
    customLayerParameters: any;
    customParameters: any;
    serviceMode: string;
    sublayers: Collection<WMTSSublayer>;
    url: string;
    version: string;

    findSublayerById(id: string): WMTSSublayer;

    on(name: "layerview-create", eventHandler: WMTSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: WMTSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: WMTSLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: WMTSLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface WMTSLayerConstructor {
    new(properties?: WMTSLayerProperties): WMTSLayer;

    fromJSON(json: any): WMTSLayer;
  }

  export const WMTSLayer: WMTSLayerConstructor;

  interface WMTSLayerProperties extends LayerProperties, PortalLayerProperties, ScaleRangeLayerProperties {
    activeLayer?: WMTSSublayerProperties;
    copyright?: string;
    customLayerParameters?: any;
    customParameters?: any;
    serviceMode?: string;
    sublayers?: CollectionProperties<WMTSSublayerProperties>;
    url?: string;
    version?: string;
  }

  export interface WMTSLayerLayerviewCreateEvent {
    layerView: LayerView;
    view: View;
  }

  export interface WMTSLayerLayerviewDestroyEvent {
    layerView: LayerView;
    view: View;
  }

  interface Map extends Accessor, LayersMixin {
    allLayers: Collection<Layer>;
    basemap: Basemap;
    ground: Ground;
  }

  interface MapConstructor {
    new(properties?: MapProperties): Map;
  }

  export const Map: MapConstructor;

  interface MapProperties extends LayersMixinProperties {
    allLayers?: CollectionProperties<LayerProperties>;
    basemap?: BasemapProperties;
    ground?: GroundProperties;
  }

  interface PopupTemplate extends Accessor, JSONSupport {
    actions: Collection<Collection<Action>>;
    content: string | any[] | Function | IPromise<any>;
    expressionInfos: PopupTemplateExpressionInfos[];
    fieldInfos: PopupTemplateFieldInfos[];
    layerOptions: PopupTemplateLayerOptions;
    overwriteActions: boolean;
    title: string | Function;

    clone(): PopupTemplate;
  }

  interface PopupTemplateConstructor {
    new(properties?: PopupTemplateProperties): PopupTemplate;

    fromJSON(json: any): PopupTemplate;
  }

  export const PopupTemplate: PopupTemplateConstructor;

  interface PopupTemplateProperties {
    actions?: CollectionProperties<CollectionProperties<ActionProperties>>;
    content?: string | any[] | Function | IPromise<any>;
    expressionInfos?: PopupTemplateExpressionInfos[];
    fieldInfos?: PopupTemplateFieldInfos[];
    layerOptions?: PopupTemplateLayerOptions;
    overwriteActions?: boolean;
    title?: string | Function;
  }

  export interface Attachments {
    type: string;
  }

  export interface Fields {
    type: string;
    fieldInfos: any[];
  }

  export interface Media {
    type: string;
    mediaInfos: MediaMediaInfos[];
  }

  export interface PopupTemplateExpressionInfos {
    name: string;
    title?: string;
    expression: string;
    returnType?: string;
  }

  export interface PopupTemplateFieldInfos {
    fieldName: string;
    format?: PopupTemplateFieldInfosFormat;
    label?: string;
    stringFieldOption?: string;
    tooltip?: string;
    visible?: boolean;
  }

  export interface PopupTemplateFieldInfosFormat {
    dateFormat?: string;
    digitSeparator?: boolean;
    places?: number;
  }

  export interface PopupTemplateLayerOptions {
    showNoDataRecords: boolean;
  }

  export interface Text {
    type: string;
    text: string;
  }

  export interface MediaMediaInfos {
    title: string;
    caption: string;
    refreshInterval: number;
    type: string;
    value: MediaMediaInfosValue;
  }

  export interface MediaMediaInfosValue {
    sourceURL: string;
    fields: string[];
    normalizationField: string;
    theme: string;
    tooltipField: string;
  }

  interface Portal extends Accessor, Loadable {
    access: string;
    allSSL: boolean;
    authMode: string;
    authorizedCrossOriginDomains: string[];
    basemapGalleryGroupQuery: string;
    bingKey: string;
    canListApps: boolean;
    canListData: boolean;
    canListPreProvisionedItems: boolean;
    canProvisionDirectPurchase: boolean;
    canSearchPublic: boolean;
    canShareBingPublic: boolean;
    canSharePublic: boolean;
    canSignInArcGIS: boolean;
    canSignInIDP: boolean;
    colorSetsGroupQuery: string;
    commentsEnabled: boolean;
    created: Date;
    culture: string;
    customBaseUrl: string;
    defaultBasemap: Basemap;
    defaultExtent: Extent;
    defaultVectorBasemap: Basemap;
    description: string;
    featuredGroups: PortalFeaturedGroups[];
    featuredItemsGroupQuery: string;
    galleryTemplatesGroupQuery: string;
    helperServices: any;
    homePageFeaturedContent: string;
    homePageFeaturedContentCount: number;
    httpPort: number;
    httpsPort: number;
    id: string;
    ipCntryCode: string;
    isOrganization: boolean;
    isPortal: boolean;
    layerTemplatesGroupQuery: string;
    loaded: boolean;
    maxTokenExpirationMinutes: number;
    modified: Date;
    name: string;
    portalHostname: string;
    portalMode: string;
    portalProperties: any;
    region: string;
    restUrl: string;
    rotatorPanels: any[];
    showHomePageDescription: boolean;
    supportsHostedServices: boolean;
    symbolSetsGroupQuery: string;
    templatesGroupQuery: string;
    thumbnailUrl: string;
    units: string;
    url: string;
    urlKey: string;
    user: PortalUser;
    useStandardizedQuery: boolean;
    useVectorBasemaps: boolean;
    vectorBasemapGalleryGroupQuery: string;

    fetchBasemaps(basemapGalleryGroupQuery?: string): IPromise<Basemap[]>;
    fetchFeaturedGroups(): IPromise<PortalGroup[]>;
    queryGroups(queryParams: PortalQueryParams): IPromise<PortalQueryResult>;
    queryItems(queryParams: PortalQueryParams): IPromise<PortalQueryResult>;
    queryUsers(queryParams: PortalQueryParams): IPromise<PortalQueryResult>;
  }

  interface PortalConstructor {
    new(properties?: PortalProperties): Portal;


    getDefault(): Portal;
  }

  export const Portal: PortalConstructor;

  interface PortalProperties extends LoadableProperties {
    access?: string;
    allSSL?: boolean;
    authMode?: string;
    authorizedCrossOriginDomains?: string[];
    basemapGalleryGroupQuery?: string;
    bingKey?: string;
    canListApps?: boolean;
    canListData?: boolean;
    canListPreProvisionedItems?: boolean;
    canProvisionDirectPurchase?: boolean;
    canSearchPublic?: boolean;
    canShareBingPublic?: boolean;
    canSharePublic?: boolean;
    canSignInArcGIS?: boolean;
    canSignInIDP?: boolean;
    colorSetsGroupQuery?: string;
    commentsEnabled?: boolean;
    created?: DateProperties;
    culture?: string;
    customBaseUrl?: string;
    defaultBasemap?: BasemapProperties;
    defaultExtent?: ExtentProperties;
    defaultVectorBasemap?: BasemapProperties;
    description?: string;
    featuredGroups?: PortalFeaturedGroups[];
    featuredItemsGroupQuery?: string;
    galleryTemplatesGroupQuery?: string;
    helperServices?: any;
    homePageFeaturedContent?: string;
    homePageFeaturedContentCount?: number;
    httpPort?: number;
    httpsPort?: number;
    id?: string;
    ipCntryCode?: string;
    isOrganization?: boolean;
    isPortal?: boolean;
    layerTemplatesGroupQuery?: string;
    loaded?: boolean;
    maxTokenExpirationMinutes?: number;
    modified?: DateProperties;
    name?: string;
    portalHostname?: string;
    portalMode?: string;
    portalProperties?: any;
    region?: string;
    restUrl?: string;
    rotatorPanels?: any[];
    showHomePageDescription?: boolean;
    supportsHostedServices?: boolean;
    symbolSetsGroupQuery?: string;
    templatesGroupQuery?: string;
    thumbnailUrl?: string;
    units?: string;
    url?: string;
    urlKey?: string;
    user?: PortalUserProperties;
    useStandardizedQuery?: boolean;
    useVectorBasemaps?: boolean;
    vectorBasemapGalleryGroupQuery?: string;
  }

  export interface PortalFeaturedGroups {
    owner: string;
    title: string;
  }

  interface PortalFolder extends Accessor {
    created: Date;
    id: string;
    portal: Portal;
    title: string;
    url: string;
  }

  interface PortalFolderConstructor {
    new(properties?: PortalFolderProperties): PortalFolder;
  }

  export const PortalFolder: PortalFolderConstructor;

  interface PortalFolderProperties {
    created?: DateProperties;
    id?: string;
    portal?: PortalProperties;
    title?: string;
    url?: string;
  }

  interface PortalGroup extends Accessor {
    access: string;
    created: Date;
    description: string;
    id: string;
    isInvitationOnly: boolean;
    modified: Date;
    owner: string;
    portal: Portal;
    snippet: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
    url: string;

    fetchMembers(): IPromise<any>;
    getThumbnailUrl(width?: number): string;
    queryItems(queryParams?: PortalQueryParams): IPromise<PortalQueryResult>;
  }

  interface PortalGroupConstructor {
    new(properties?: PortalGroupProperties): PortalGroup;
  }

  export const PortalGroup: PortalGroupConstructor;

  interface PortalGroupProperties {
    access?: string;
    created?: DateProperties;
    description?: string;
    id?: string;
    isInvitationOnly?: boolean;
    modified?: DateProperties;
    owner?: string;
    portal?: PortalProperties;
    snippet?: string;
    tags?: string[];
    thumbnailUrl?: string;
    title?: string;
    url?: string;
  }

  interface PortalItem extends Accessor, Loadable, JSONSupport {
    access: string;
    accessInformation: string;
    avgRating: number;
    created: Date;
    culture: string;
    description: string;
    extent: Extent;
    id: string;
    isLayer: boolean;
    itemControl: string;
    itemUrl: string;
    licenseInfo: string;
    loaded: boolean;
    modified: Date;
    name: string;
    numComments: number;
    numRatings: number;
    numViews: number;
    owner: string;
    portal: Portal;
    size: number;
    snippet: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
    type: string;
    typeKeywords: string[];
    url: string;

    addRating(rating: number | PortalRating): IPromise<PortalRating>;
    deleteRating(): IPromise<any>;
    fetchData(responseType?: string): IPromise<any>;
    fetchRating(): IPromise<PortalRating>;
    fetchRelatedItems(params: PortalItemFetchRelatedItemsParams): IPromise<PortalItem[]>;
    getThumbnailUrl(width?: number): string;
    update(params?: PortalItemUpdateParams): IPromise<PortalItem>;
    updateThumbnail(params: PortalItemUpdateThumbnailParams): IPromise<PortalItem>;
  }

  interface PortalItemConstructor {
    new(properties?: PortalItemProperties): PortalItem;

    fromJSON(json: any): PortalItem;
  }

  export const PortalItem: PortalItemConstructor;

  interface PortalItemProperties extends LoadableProperties {
    access?: string;
    accessInformation?: string;
    avgRating?: number;
    created?: DateProperties;
    culture?: string;
    description?: string;
    extent?: ExtentProperties;
    id?: string;
    isLayer?: boolean;
    itemControl?: string;
    itemUrl?: string;
    licenseInfo?: string;
    loaded?: boolean;
    modified?: DateProperties;
    name?: string;
    numComments?: number;
    numRatings?: number;
    numViews?: number;
    owner?: string;
    portal?: PortalProperties;
    size?: number;
    snippet?: string;
    tags?: string[];
    thumbnailUrl?: string;
    title?: string;
    type?: string;
    typeKeywords?: string[];
    url?: string;
  }

  export interface PortalItemFetchRelatedItemsParams {
    relationshipType: string;
    direction?: string;
  }

  export interface PortalItemUpdateParams {
    data: string | any;
  }

  export interface PortalItemUpdateThumbnailParams {
    thumbnail: Blob | string;
  }

  interface PortalQueryParams extends Accessor {
    extent: Extent;
    num: number;
    query: string;
    sortField: string;
    sortOrder: string;
    start: number;

    clone(): PortalQueryParams;
  }

  interface PortalQueryParamsConstructor {
    new(properties?: PortalQueryParamsProperties): PortalQueryParams;
  }

  export const PortalQueryParams: PortalQueryParamsConstructor;

  interface PortalQueryParamsProperties {
    extent?: ExtentProperties;
    num?: number;
    query?: string;
    sortField?: string;
    sortOrder?: string;
    start?: number;
  }

  interface PortalQueryResult extends Accessor {
    nextQueryParams: PortalQueryParams;
    queryParams: PortalQueryParams;
    results: any[];
    total: number;
  }

  interface PortalQueryResultConstructor {
    new(properties?: PortalQueryResultProperties): PortalQueryResult;
  }

  export const PortalQueryResult: PortalQueryResultConstructor;

  interface PortalQueryResultProperties {
    nextQueryParams?: PortalQueryParamsProperties;
    queryParams?: PortalQueryParamsProperties;
    results?: any[];
    total?: number;
  }

  interface PortalRating extends Accessor {
    created: Date;
    rating: number;
  }

  interface PortalRatingConstructor {
    new(properties?: PortalRatingProperties): PortalRating;
  }

  export const PortalRating: PortalRatingConstructor;

  interface PortalRatingProperties {
    created?: DateProperties;
    rating?: number;
  }

  interface PortalUser extends Accessor {
    access: string;
    created: Date;
    culture: string;
    description: string;
    email: string;
    fullName: string;
    modified: Date;
    orgId: string;
    portal: Portal;
    preferredView: string;
    region: string;
    role: string;
    roleId: string;
    thumbnailUrl: string;
    units: string;
    userContentUrl: string;
    username: string;

    addItem(params: PortalUserAddItemParams): IPromise<PortalItem>;
    deleteItem(item: PortalItem): IPromise<any>;
    fetchFolders(): IPromise<PortalFolder[]>;
    fetchGroups(): IPromise<PortalGroup[]>;
    fetchItems(params: PortalUserFetchItemsParams): IPromise<any>;
    getThumbnailUrl(width?: number): string;
    queryFavorites(queryParams?: PortalQueryParams): IPromise<PortalQueryResult>;
  }

  interface PortalUserConstructor {
    new(properties?: PortalUserProperties): PortalUser;
  }

  export const PortalUser: PortalUserConstructor;

  interface PortalUserProperties {
    access?: string;
    created?: DateProperties;
    culture?: string;
    description?: string;
    email?: string;
    fullName?: string;
    modified?: DateProperties;
    orgId?: string;
    portal?: PortalProperties;
    preferredView?: string;
    region?: string;
    role?: string;
    roleId?: string;
    thumbnailUrl?: string;
    units?: string;
    userContentUrl?: string;
    username?: string;
  }

  export interface PortalUserAddItemParams {
    item: PortalItem;
    data?: string | any;
    folder?: PortalFolder;
  }

  export interface PortalUserFetchItemsParams {
    folder: PortalFolder;
    num: number;
    start: number;
  }

  interface ClassBreaksRenderer extends Renderer, VisualVariablesMixin {
    backgroundFillSymbol: FillSymbol;
    classBreakInfos: ClassBreaksRendererClassBreakInfos[];
    defaultSymbol: Symbol;
    field: string | Function;
    isMaxInclusive: boolean;
    legendOptions: ClassBreaksRendererLegendOptions;
    normalizationField: string;
    normalizationTotal: number;
    normalizationType: string;
    type: string;
    valueExpression: string;
    valueExpressionTitle: string;

    addClassBreakInfo(min: number | any, max: number, symbol: Symbol): void;
    clone(): ClassBreaksRenderer;
    getClassBreakInfo(graphic: Graphic): any;
    removeClassBreakInfo(min: number, max: number): void;
  }

  interface ClassBreaksRendererConstructor {
    new(properties?: ClassBreaksRendererProperties): ClassBreaksRenderer;

    fromJSON(json: any): ClassBreaksRenderer;
  }

  export const ClassBreaksRenderer: ClassBreaksRendererConstructor;

  interface ClassBreaksRendererProperties extends RendererProperties, VisualVariablesMixinProperties {
    backgroundFillSymbol?: FillSymbolProperties;
    classBreakInfos?: ClassBreaksRendererClassBreakInfos[];
    defaultSymbol?: SymbolProperties;
    field?: string | Function;
    isMaxInclusive?: boolean;
    legendOptions?: ClassBreaksRendererLegendOptions;
    normalizationField?: string;
    normalizationTotal?: number;
    normalizationType?: string;
    type?: string;
    valueExpression?: string;
    valueExpressionTitle?: string;
  }

  export interface ClassBreaksRendererClassBreakInfos {
    minValue: number;
    maxValue: number;
    symbol: Symbol;
    label?: string;
  }

  export interface ClassBreaksRendererLegendOptions {
    title: string;
  }

  interface PointCloudClassBreaksRenderer extends PointCloudRenderer {
    colorClassBreakInfos: PointCloudClassBreaksRendererColorClassBreakInfos[];
    field: string;
    fieldTransformType: string;
    type: string;

    clone(): PointCloudClassBreaksRenderer;
  }

  interface PointCloudClassBreaksRendererConstructor {
    new(properties?: PointCloudClassBreaksRendererProperties): PointCloudClassBreaksRenderer;

    fromJSON(json: any): PointCloudClassBreaksRenderer;
  }

  export const PointCloudClassBreaksRenderer: PointCloudClassBreaksRendererConstructor;

  interface PointCloudClassBreaksRendererProperties extends PointCloudRendererProperties {
    colorClassBreakInfos?: PointCloudClassBreaksRendererColorClassBreakInfos[];
    field?: string;
    fieldTransformType?: string;
    type?: string;
  }

  export interface PointCloudClassBreaksRendererColorClassBreakInfos {
    minValue: number;
    maxValue: number;
    color: Color;
    label?: string;
  }

  interface PointCloudRenderer extends Accessor, JSONSupport {
    colorModulation: PointCloudRendererColorModulation;
    pointSizeAlgorithm: PointCloudRendererPointSizeAlgorithm;
    pointsPerInch: number;

    clone(): PointCloudRenderer;
  }

  interface PointCloudRendererConstructor {
    new(properties?: PointCloudRendererProperties): PointCloudRenderer;

    fromJSON(json: any): PointCloudRenderer;
  }

  export const PointCloudRenderer: PointCloudRendererConstructor;

  interface PointCloudRendererProperties {
    colorModulation?: PointCloudRendererColorModulation;
    pointSizeAlgorithm?: PointCloudRendererPointSizeAlgorithm;
    pointsPerInch?: number;
  }

  export interface PointCloudRendererColorModulation {
    field: string;
    minValue?: number;
    maxValue?: number;
  }

  export interface PointCloudRendererPointSizeAlgorithm {
    type: string;
    useRealWorldSymbolSizes?: boolean;
    size?: number;
    scaleFactor?: number;
    minSize?: number;
  }

  interface PointCloudRGBRenderer extends PointCloudRenderer {
    field: string;
    type: string;

    clone(): PointCloudRGBRenderer;
  }

  interface PointCloudRGBRendererConstructor {
    new(properties?: PointCloudRGBRendererProperties): PointCloudRGBRenderer;

    fromJSON(json: any): PointCloudRGBRenderer;
  }

  export const PointCloudRGBRenderer: PointCloudRGBRendererConstructor;

  interface PointCloudRGBRendererProperties extends PointCloudRendererProperties {
    field?: string;
    type?: string;
  }

  interface PointCloudStretchRenderer extends PointCloudRenderer {
    field: string;
    fieldTransformType: string;
    stops: PointCloudStretchRendererStops[];
    type: string;

    clone(): PointCloudStretchRenderer;
  }

  interface PointCloudStretchRendererConstructor {
    new(properties?: PointCloudStretchRendererProperties): PointCloudStretchRenderer;

    fromJSON(json: any): PointCloudStretchRenderer;
  }

  export const PointCloudStretchRenderer: PointCloudStretchRendererConstructor;

  interface PointCloudStretchRendererProperties extends PointCloudRendererProperties {
    field?: string;
    fieldTransformType?: string;
    stops?: PointCloudStretchRendererStops[];
    type?: string;
  }

  export interface PointCloudStretchRendererStops {
    value: number;
    label?: string;
    color: Color;
  }

  interface PointCloudUniqueValueRenderer extends PointCloudRenderer {
    colorUniqueValueInfos: PointCloudUniqueValueRendererColorUniqueValueInfos[];
    field: string;
    fieldTransformType: string;
    type: string;

    clone(): PointCloudUniqueValueRenderer;
  }

  interface PointCloudUniqueValueRendererConstructor {
    new(properties?: PointCloudUniqueValueRendererProperties): PointCloudUniqueValueRenderer;

    fromJSON(json: any): PointCloudUniqueValueRenderer;
  }

  export const PointCloudUniqueValueRenderer: PointCloudUniqueValueRendererConstructor;

  interface PointCloudUniqueValueRendererProperties extends PointCloudRendererProperties {
    colorUniqueValueInfos?: PointCloudUniqueValueRendererColorUniqueValueInfos[];
    field?: string;
    fieldTransformType?: string;
    type?: string;
  }

  export interface PointCloudUniqueValueRendererColorUniqueValueInfos {
    values: number[];
    color: Color;
    label?: string;
  }

  interface Renderer extends Accessor, JSONSupport {
    authoringInfo: AuthoringInfo;
  }

  interface RendererConstructor {
    new(properties?: RendererProperties): Renderer;

    fromJSON(json: any): Renderer;
  }

  export const Renderer: RendererConstructor;

  interface RendererProperties {
    authoringInfo?: AuthoringInfo;
  }

  export interface AuthoringInfo {
    type: string;
    fields: string[];
    classificationMethod: string;
    standardDeviationInterval: number;
    visualVariables: AuthoringInfoVisualVariables[];
  }

  export interface ColorVisualVariable {
    type: string;
    field: string | Function;
    normalizationField: string;
    valueExpression: string;
    valueExpressionTitle: string;
    legendOptions: ColorVisualVariableLegendOptions;
    stops: ColorVisualVariableStops[];
  }

  export interface OpacityVisualVariable {
    type: string;
    field: string | Function;
    normalizationField: string;
    valueExpression: string;
    valueExpressionTitle: string;
    legendOptions: OpacityVisualVariableLegendOptions;
    stops: OpacityVisualVariableStops[];
  }

  export interface RotationVisualVariable {
    type: string;
    field: string | Function;
    valueExpression: string;
    axis: string;
    rotationType: string;
  }

  export interface SizeVisualVariable {
    maxDataValue: number;
    type: string;
    normalizationField: string;
    valueExpression: string;
    valueExpressionTitle: string;
    legendOptions: SizeVisualVariableLegendOptions;
    axis: string;
    expression: string;
    field: string | Function;
    minDataValue: number;
    maxSize: string | number | SizeVisualVariable;
    minSize: string | number | SizeVisualVariable;
    stops: SizeVisualVariableStops[];
    valueUnit: string;
    valueRepresentation: string;
    useSymbolValue: boolean;
  }

  export interface AuthoringInfoVisualVariables {
    type: string;
    field: string;
    minSliderValue: number;
    maxSliderValue: number;
    theme: string;
    style: string;
    units: string;
    startTime: string | number;
    endTime: string | number;
  }

  export interface ColorVisualVariableLegendOptions {
    title: string;
    showLegend: boolean;
  }

  export interface ColorVisualVariableStops {
    value: number;
    color: Color;
    label: string;
  }

  export interface OpacityVisualVariableLegendOptions {
    title: string;
    showLegend: boolean;
  }

  export interface OpacityVisualVariableStops {
    value: number;
    opacity: number;
    label: string;
  }

  export interface SizeVisualVariableLegendOptions {
    title: string;
    showLegend: boolean;
  }

  export interface SizeVisualVariableStops {
    value: number;
    size: string | number | any;
    label: string;
  }

  interface SimpleRenderer extends Renderer, VisualVariablesMixin {
    label: string;
    symbol: Symbol;
    type: string;

    clone(): SimpleRenderer;
  }

  interface SimpleRendererConstructor {
    new(properties?: SimpleRendererProperties): SimpleRenderer;

    fromJSON(json: any): SimpleRenderer;
  }

  export const SimpleRenderer: SimpleRendererConstructor;

  interface SimpleRendererProperties extends RendererProperties, VisualVariablesMixinProperties {
    label?: string;
    symbol?: SymbolProperties;
    type?: string;
  }

  interface color {
    createContinuousRenderer(params: colorCreateContinuousRendererParams): IPromise<ContinuousRendererResult>;
    createPCContinuousRenderer(params: colorCreatePCContinuousRendererParams): IPromise<PCContinuousRendererResult>;
    createPCTrueColorRenderer(params: colorCreatePCTrueColorRendererParams): IPromise<PCTrueColorRendererResult>;
    createVisualVariable(params: colorCreateVisualVariableParams): IPromise<VisualVariableResult>;
  }

  export const color: color;

  export interface colorCreateContinuousRendererParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    normalizationField?: string;
    basemap?: string | Basemap;
    theme?: string;
    colorScheme?: ColorScheme;
    legendOptions?: colorCreateContinuousRendererParamsLegendOptions;
    statistics?: SummaryStatisticsResult;
    minValue?: number;
    maxValue?: number;
    defaultSymbolEnabled?: boolean;
    view?: SceneView;
    symbolType?: string;
    colorMixMode?: string;
  }

  export interface colorCreateContinuousRendererParamsLegendOptions {
    title: string;
  }

  export interface colorCreatePCContinuousRendererParams {
    layer: PointCloudLayer;
    field: string;
    basemap?: string | Basemap;
    size?: string;
    density?: number;
    colorScheme?: ColorScheme;
    statistics?: SummaryStatisticsResult;
  }

  export interface colorCreatePCTrueColorRendererParams {
    layer: PointCloudLayer;
    size?: string;
    density?: number;
  }

  export interface colorCreateVisualVariableParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    normalizationField?: string;
    basemap?: string | Basemap;
    theme?: string;
    colorScheme?: ColorScheme;
    legendOptions?: colorCreateVisualVariableParamsLegendOptions;
    statistics?: SummaryStatisticsResult;
    minValue?: number;
    maxValue?: number;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface colorCreateVisualVariableParamsLegendOptions {
    title: string;
  }

  export interface ContinuousRendererResult {
    renderer: ClassBreaksRenderer;
    visualVariable: ColorVisualVariable;
    colorScheme: ColorScheme;
    defaultValuesUsed: boolean;
    statistics: SummaryStatisticsResult;
    basemapId: string;
  }

  export interface PCContinuousRendererResult {
    renderer: PointCloudStretchRenderer;
    colorScheme: ColorScheme;
    defaultValuesUsed: boolean;
    statistics: SummaryStatisticsResult;
    basemapId: string;
  }

  export interface PCTrueColorRendererResult {
    renderer: PointCloudRGBRenderer;
  }

  export interface VisualVariableResult {
    visualVariable: ColorVisualVariable;
    colorScheme: ColorScheme;
    statistics: SummaryStatisticsResult;
    defaultValuesUsed: boolean;
    basemapId: string;
    authoringInfo: AuthoringInfo;
  }

  interface location {
    createRenderer(params: locationCreateRendererParams): IPromise<RendererResult>;
  }

  export const location: location;

  export interface locationCreateRendererParams {
    layer: FeatureLayer | SceneLayer;
    basemap?: string | Basemap;
    locationScheme?: PointLocationScheme | PolylineLocationScheme | PolygonLocationScheme;
    view?: SceneView;
    symbolType?: string;
    colorMixMode?: string;
  }

  export interface RendererResult {
    renderer: SimpleRenderer;
    locationScheme: PointLocationScheme | PolylineLocationScheme | PolygonLocationScheme;
    basemapId: string;
  }

  interface size {
    createContinuousRenderer(params: sizeCreateContinuousRendererParams): IPromise<sizeContinuousRendererResult>;
    createVisualVariables(params: sizeCreateVisualVariablesParams): IPromise<sizeVisualVariableResult>;
  }

  export const size: size;

  export interface sizeContinuousRendererResult {
    renderer: ClassBreaksRenderer;
    visualVariables: SizeVisualVariable[];
    sizeScheme: PointSizeScheme | PolylineSizeScheme | PolygonSizeScheme;
    defaultValuesUsed: boolean;
    statistics: SummaryStatisticsResult;
    basemapId: string;
  }

  export interface sizeCreateContinuousRendererParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    normalizationField?: string;
    basemap?: string | Basemap;
    sizeScheme?: PointSizeScheme | PolylineSizeScheme | PolygonSizeScheme;
    legendOptions?: sizeCreateContinuousRendererParamsLegendOptions;
    statistics?: SummaryStatisticsResult;
    minValue?: number;
    maxValue?: number;
    defaultSymbolEnabled?: boolean;
    view?: SceneView;
    symbolType?: string;
  }

  export interface sizeCreateContinuousRendererParamsLegendOptions {
    title: string;
  }

  export interface sizeCreateVisualVariablesParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    normalizationField?: string;
    basemap?: string | Basemap;
    sizeScheme?: PointSizeScheme | PolylineSizeScheme | PolygonSizeScheme;
    legendOptions?: sizeCreateVisualVariablesParamsLegendOptions;
    statistics?: SummaryStatisticsResult;
    minValue?: number;
    maxValue?: number;
    view?: SceneView;
    worldScale?: boolean;
    axis?: boolean;
  }

  export interface sizeCreateVisualVariablesParamsLegendOptions {
    title: string;
  }

  export interface sizeVisualVariableResult {
    visualVariables: SizeVisualVariable[];
    sizeScheme: PointSizeScheme | PolylineSizeScheme | PolygonSizeScheme;
    defaultValuesUsed: boolean;
    statistics: SummaryStatisticsResult;
    basemapId: string;
    authoringInfo: AuthoringInfo;
  }

  interface type {
    createPCClassRenderer(params: typeCreatePCClassRendererParams): IPromise<PCClassRendererResult>;
    createRenderer(params: typeCreateRendererParams): IPromise<typeRendererResult>;
  }

  export const type: type;

  export interface PCClassRendererResult {
    renderer: PointCloudUniqueValueRenderer;
  }

  export interface typeRendererResult {
    renderer: UniqueValueRenderer;
    uniqueValueInfos: RendererResultUniqueValueInfos[];
    excludedUniqueValueInfos: any[];
    typeScheme: PointTypeScheme | PolylineTypeScheme | PolygonTypeScheme | MeshTypeScheme;
    basemapId: string;
  }

  export interface typeCreatePCClassRendererParams {
    layer: PointCloudLayer;
    field: string;
    size?: string;
    density?: number;
    typeScheme?: PointTypeScheme;
    statistics?: UniqueValuesResult;
  }

  export interface typeCreateRendererParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    basemap?: string | Basemap;
    numTypes?: number;
    sortBy?: string;
    typeScheme?: PointTypeScheme | PolylineTypeScheme | PolygonTypeScheme | MeshTypeScheme;
    legendOptions?: typeCreateRendererParamsLegendOptions;
    defaultSymbolEnabled?: boolean;
    view?: SceneView;
    symbolType?: string;
    statistics?: UniqueValuesResult;
    colorMixMode?: string;
  }

  export interface typeCreateRendererParamsLegendOptions {
    title: string;
  }

  export interface RendererResultUniqueValueInfos {
    value: string | number;
    count: number;
    label: string;
    symbol: Symbol;
  }

  interface univariateColorSize {
    createContinuousRenderer(params: univariateColorSizeCreateContinuousRendererParams): IPromise<univariateColorSizeContinuousRendererResult>;
    createVisualVariables(params: univariateColorSizeCreateVisualVariablesParams): IPromise<VisualVariablesResult>;
  }

  export const univariateColorSize: univariateColorSize;

  export interface univariateColorSizeContinuousRendererResult {
    renderer: ClassBreaksRenderer;
    color: ContinuousRendererResultColor;
    size: ContinuousRendererResultSize;
    defaultValuesUsed: boolean;
    statistics: SummaryStatisticsResult;
    basemapId: string;
  }

  export interface univariateColorSizeCreateContinuousRendererParams {
    layer: FeatureLayer | SceneLayer;
    basemap?: string | Basemap;
    field: string;
    normalizationField?: string;
    statistics?: SummaryStatisticsResult;
    minValue?: number;
    maxValue?: number;
    defaultSymbolEnabled?: boolean;
    colorOptions?: univariateColorSizeCreateContinuousRendererParamsColorOptions;
    sizeOptions?: univariateColorSizeCreateContinuousRendererParamsSizeOptions;
    view?: SceneView;
    symbolType?: string;
  }

  export interface univariateColorSizeCreateContinuousRendererParamsColorOptions {
    theme?: string;
    colorScheme?: ColorScheme;
    legendOptions?: univariateColorSizeCreateContinuousRendererParamsColorOptionsLegendOptions;
  }

  export interface univariateColorSizeCreateContinuousRendererParamsColorOptionsLegendOptions {
    title: string;
  }

  export interface univariateColorSizeCreateContinuousRendererParamsSizeOptions {
    sizeScheme?: PointSizeScheme | PolylineSizeScheme | PolygonSizeScheme;
    legendOptions?: univariateColorSizeCreateContinuousRendererParamsSizeOptionsLegendOptions;
  }

  export interface univariateColorSizeCreateContinuousRendererParamsSizeOptionsLegendOptions {
    title: string;
  }

  export interface univariateColorSizeCreateVisualVariablesParams {
    layer: FeatureLayer | SceneLayer;
    basemap?: string | Basemap;
    field: string;
    normalizationField?: string;
    statistics?: SummaryStatisticsResult;
    minValue?: number;
    maxValue?: number;
    colorOptions?: univariateColorSizeCreateVisualVariablesParamsColorOptions;
    sizeOptions?: univariateColorSizeCreateVisualVariablesParamsSizeOptions;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface univariateColorSizeCreateVisualVariablesParamsColorOptions {
    theme?: string;
    colorScheme?: ColorScheme;
    legendOptions?: univariateColorSizeCreateVisualVariablesParamsColorOptionsLegendOptions;
  }

  export interface univariateColorSizeCreateVisualVariablesParamsColorOptionsLegendOptions {
    title: string;
  }

  export interface univariateColorSizeCreateVisualVariablesParamsSizeOptions {
    axis?: boolean;
    sizeScheme?: PointSizeScheme | PolylineSizeScheme | PolygonSizeScheme;
    legendOptions?: univariateColorSizeCreateVisualVariablesParamsSizeOptionsLegendOptions;
  }

  export interface univariateColorSizeCreateVisualVariablesParamsSizeOptionsLegendOptions {
    title: string;
  }

  export interface VisualVariablesResult {
    color: VisualVariablesResultColor;
    size: VisualVariablesResultSize;
    defaultValuesUsed: boolean;
    statistics: SummaryStatisticsResult;
    basemapId: string;
    authoringInfo: AuthoringInfo;
  }

  export interface ContinuousRendererResultColor {
    visualVariable: ColorVisualVariable;
    colorScheme: ColorScheme;
  }

  export interface ContinuousRendererResultSize {
    visualVariables: SizeVisualVariable[];
    sizeScheme: PointSizeScheme | PolylineSizeScheme | PolygonSizeScheme;
  }

  export interface VisualVariablesResultColor {
    visualVariable: ColorVisualVariable;
    colorScheme: ColorScheme;
  }

  export interface VisualVariablesResultSize {
    visualVariables: SizeVisualVariable[];
    sizeScheme: PointSizeScheme | PolylineSizeScheme | PolygonSizeScheme;
  }

  interface classBreaks {
    classBreaks(params: classBreaksClassBreaksParams): IPromise<ClassBreaksResult>;
  }

  const __classBreaksMapped: classBreaks;
  export const classBreaks: typeof __classBreaksMapped.classBreaks;


  export interface classBreaksClassBreaksParams {
    layer: FeatureLayer | SceneLayer;
    field?: string;
    normalizationField?: string;
    classificationMethod?: string;
    standardDeviationInterval?: number;
    minValue?: number;
    maxValue?: number;
    numClasses?: number;
  }

  export interface ClassBreaksResult {
    classBreaksInfos: ClassBreaksResultClassBreaksInfos[];
    minValue: number;
    maxValue: number;
  }

  export interface ClassBreaksResultClassBreaksInfos {
    label: string;
    minValue: number;
    maxValue: number;
  }

  interface histogram {
    histogram(params: histogramHistogramParams): IPromise<HistogramResult>;
  }

  const __histogramMapped: histogram;
  export const histogram: typeof __histogramMapped.histogram;


  export interface histogramHistogramParams {
    layer: FeatureLayer | SceneLayer | PointCloudLayer;
    field?: string;
    normalizationField?: string;
    classificationMethod?: string;
    standardDeviationInterval?: number;
    minValue?: number;
    maxValue?: number;
    numBins?: number;
  }

  export interface HistogramResult {
    bins: HistogramResultBins[];
    minValue: number;
    maxValue: number;
  }

  export interface HistogramResultBins {
    count: number;
    minValue: number;
    maxValue: number;
  }

  interface summaryStatistics {
    summaryStatistics(params: summaryStatisticsSummaryStatisticsParams): IPromise<SummaryStatisticsResult>;
  }

  const __summaryStatisticsMapped: summaryStatistics;
  export const summaryStatistics: typeof __summaryStatisticsMapped.summaryStatistics;


  export interface SummaryStatisticsResult {
    avg: number;
    count: number;
    max: number;
    min: number;
    stddev: number;
    sum: number;
    variance: number;
  }

  export interface summaryStatisticsSummaryStatisticsParams {
    layer: FeatureLayer | SceneLayer | PointCloudLayer;
    field?: string;
    normalizationField?: string;
    features?: Graphic[];
    minValue?: number;
    maxValue?: number;
  }

  interface uniqueValues {
    uniqueValues(params: uniqueValuesUniqueValuesParams): IPromise<UniqueValuesResult>;
  }

  const __uniqueValuesMapped: uniqueValues;
  export const uniqueValues: typeof __uniqueValuesMapped.uniqueValues;


  export interface UniqueValuesResult {
    uniqueValueInfos: UniqueValuesResultUniqueValueInfos[];
  }

  export interface uniqueValuesUniqueValuesParams {
    layer: FeatureLayer | SceneLayer | PointCloudLayer;
    field: string;
    features?: Graphic[];
    returnAllCodedValues?: boolean;
  }

  export interface UniqueValuesResultUniqueValueInfos {
    value: string | number;
    count: number;
  }

  interface symbologyColor {
    cloneScheme(scheme: ColorScheme): ColorScheme;
    flipColors(scheme: ColorScheme): ColorScheme;
    getSchemes(params: colorGetSchemesParams): any;
    getThemes(basemap?: string | Basemap): any[];
  }

  export const symbologyColor: symbologyColor;

  export interface colorGetSchemesParams {
    basemap: string | Basemap;
    geometryType: string;
    theme: string;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface ColorScheme {
    id: string;
    theme: string;
    colors: Color[];
    noDataColor: Color;
    colorsForClassBreaks: ColorSchemeColorsForClassBreaks[];
    outline: ColorSchemeOutline;
    size: number;
    width: number;
    opacity: number;
  }

  export interface ColorSchemeColorsForClassBreaks {
    colors: Color[];
    numClasses: number;
  }

  export interface ColorSchemeOutline {
    color: Color;
    width: number;
  }

  interface symbologyLocation {
    cloneScheme(scheme: PointLocationScheme | PolylineLocationScheme | PolygonLocationScheme): PointLocationScheme | PolylineLocationScheme | PolygonLocationScheme;
    getSchemes(params: locationGetSchemesParams): any;
  }

  export const symbologyLocation: symbologyLocation;

  export interface locationGetSchemesParams {
    basemap: string | Basemap;
    geometryType: string;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface PointLocationScheme {
    color: Color;
    outline: PointLocationSchemeOutline;
    size: number;
    opacity: number;
  }

  export interface PolygonLocationScheme {
    color: Color;
    outline: PolygonLocationSchemeOutline;
    opacity: number;
  }

  export interface PolylineLocationScheme {
    color: Color;
    width: number;
    opacity: number;
  }

  export interface PointLocationSchemeOutline {
    color: Color;
    width: number;
  }

  export interface PolygonLocationSchemeOutline {
    color: Color;
    width: number;
  }

  interface symbologySize {
    cloneScheme(scheme: PointSizeScheme | PolylineSizeScheme | PolygonSizeScheme): any;
    getSchemes(params: sizeGetSchemesParams): any;
  }

  export const symbologySize: symbologySize;

  export interface PointSizeScheme {
    color: Color;
    noDataColor: Color;
    outline: PointSizeSchemeOutline;
    size: number;
    noDataSize: number;
    minSize: number;
    maxSize: number;
    opacity: number;
  }

  export interface PolygonSizeScheme {
    marker: PointSizeScheme;
    background: PolygonSizeSchemeBackground;
    opacity: number;
  }

  export interface PolylineSizeScheme {
    color: Color;
    noDataColor: Color;
    width: number;
    noDataWidth: number;
    minWidth: number;
    maxWidth: number;
    opacity: number;
  }

  export interface sizeGetSchemesParams {
    basemap: string | Basemap;
    geometryType: string;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface PointSizeSchemeOutline {
    color: Color;
    width: number;
  }

  export interface PolygonSizeSchemeBackground {
    color: Color;
    outline: PolygonSizeSchemeBackgroundOutline;
  }

  export interface PolygonSizeSchemeBackgroundOutline {
    color: Color;
    width: number;
  }

  interface symbologyType {
    cloneScheme(scheme: PointTypeScheme | PolylineTypeScheme | PolygonTypeScheme | MeshTypeScheme): any;
    getSchemes(params: typeGetSchemesParams): any;
  }

  export const symbologyType: symbologyType;

  export interface MeshTypeScheme {
    colors: Color[];
    noDataColor: Color;
    opacity: number;
  }

  export interface PointTypeScheme {
    colors: Color[];
    noDataColor: Color;
    outline: PointTypeSchemeOutline;
    size: number;
    opacity: number;
  }

  export interface PolygonTypeScheme {
    colors: Color[];
    noDataColor: Color;
    outline: PolygonTypeSchemeOutline;
    opacity: number;
  }

  export interface PolylineTypeScheme {
    colors: Color[];
    noDataColor: Color;
    width: number;
    opacity: number;
  }

  export interface typeGetSchemesParams {
    basemap: string | Basemap;
    geometryType: string;
    theme?: string;
    worldScale?: boolean;
    view?: SceneView;
  }

  export interface PointTypeSchemeOutline {
    color: Color;
    width: number;
  }

  export interface PolygonTypeSchemeOutline {
    color: Color;
    width: number;
  }

  interface supportJsonUtils {
    fromJSON(json: any): Renderer;
  }

  export const supportJsonUtils: supportJsonUtils;

  interface UniqueValueRenderer extends Renderer, VisualVariablesMixin {
    defaultLabel: string;
    defaultSymbol: Symbol;
    field: string | Function;
    field2: string;
    field3: string;
    fieldDelimiter: string;
    legendOptions: UniqueValueRendererLegendOptions;
    type: string;
    uniqueValueInfos: UniqueValueRendererUniqueValueInfos[];
    valueExpression: string;
    valueExpressionTitle: string;

    addUniqueValueInfo(valueOrInfo: string | number | any, symbol?: Symbol): void;
    clone(): UniqueValueRenderer;
    getUniqueValueInfo(graphic: Graphic): any;
    removeUniqueValueInfo(value: string): void;
  }

  interface UniqueValueRendererConstructor {
    new(properties?: UniqueValueRendererProperties): UniqueValueRenderer;

    fromJSON(json: any): UniqueValueRenderer;
  }

  export const UniqueValueRenderer: UniqueValueRendererConstructor;

  interface UniqueValueRendererProperties extends RendererProperties, VisualVariablesMixinProperties {
    defaultLabel?: string;
    defaultSymbol?: SymbolProperties;
    field?: string | Function;
    field2?: string;
    field3?: string;
    fieldDelimiter?: string;
    legendOptions?: UniqueValueRendererLegendOptions;
    type?: string;
    uniqueValueInfos?: UniqueValueRendererUniqueValueInfos[];
    valueExpression?: string;
    valueExpressionTitle?: string;
  }

  export interface UniqueValueRendererLegendOptions {
    title?: string;
  }

  export interface UniqueValueRendererUniqueValueInfos {
    value: string | number;
    symbol: Symbol;
    label?: string;
  }

  interface VisualVariablesMixin {
    visualVariables: any[];
  }

  interface VisualVariablesMixinConstructor {
    new(): VisualVariablesMixin;
  }

  export const VisualVariablesMixin: VisualVariablesMixinConstructor;

  interface VisualVariablesMixinProperties {
    visualVariables?: any[];
  }

  interface request {
    esriRequest(url: string, options?: requestEsriRequestOptions): IPromise<any>;
  }

  const __requestMapped: request;
  export const request: typeof __requestMapped.esriRequest;


  export interface EsriErrorDetails {
    getHeader: GetHeader;
    httpStatus: number;
    messageCode: string;
    messages: string[];
    requestOptions: any;
    ssl: boolean;
    subCode: number;
    url: string;
  }

  export type GetHeader = (headerName: string) => string;

  export interface requestEsriRequestOptions {
    callbackParamName?: string;
    query?: any;
    responseType?: string;
    headers?: any;
    timeout?: number;
    method?: string;
    body?: FormData | HTMLFormElement | string;
    useProxy?: boolean;
    cacheBust?: boolean;
    allowImageDataAccess?: boolean;
    authMode?: string;
  }

  interface Action extends Accessor {
    className: string;
    id: string;
    image: string;
    title: string;
    visible: boolean;

    clone(): Action;
  }

  interface ActionConstructor {
    new(properties?: ActionProperties): Action;
  }

  export const Action: ActionConstructor;

  interface ActionProperties {
    className?: string;
    id?: string;
    image?: string;
    title?: string;
    visible?: boolean;
  }

  interface LayersMixin {
    layers: Collection<Layer>;

    add(layers: Layer, index?: number): void;
    addMany(layers: Layer[], index?: number): void;
    findLayerById(layerId: string): Layer;
    remove(layer: Layer): Layer;
    removeAll(): Layer[];
    removeMany(layers: Layer[]): Layer[];
    reorder(layer: Layer, index: number): Layer;
  }

  interface LayersMixinConstructor {
    new(): LayersMixin;
  }

  export const LayersMixin: LayersMixinConstructor;

  interface LayersMixinProperties {
    layers?: CollectionProperties<LayerProperties>;
  }

  interface Callout3D extends Accessor, JSONSupport {
    clone(): Callout3D;
  }

  interface Callout3DConstructor {
    new(properties?: Callout3DProperties): Callout3D;

    fromJSON(json: any): Callout3D;
  }

  export const Callout3D: Callout3DConstructor;

  interface Callout3DProperties {

  }

  interface LineCallout3D extends Callout3D {
    border: LineCallout3DBorder;
    color: Color;
    size: number;
    type: string;

    clone(): LineCallout3D;
  }

  interface LineCallout3DConstructor {
    new(properties?: LineCallout3DProperties): LineCallout3D;

    fromJSON(json: any): LineCallout3D;
  }

  export const LineCallout3D: LineCallout3DConstructor;

  interface LineCallout3DProperties extends Callout3DProperties {
    border?: LineCallout3DBorderProperties;
    color?: Color;
    size?: number;
    type?: string;
  }

  export interface LineCallout3DBorderProperties {
    color?: Color;
  }
  export interface LineCallout3DBorder extends Accessor {
    color?: Color;
  }

  interface ExtrudeSymbol3DLayer extends Symbol3DLayer {
    size: number;

    clone(): ExtrudeSymbol3DLayer;
  }

  interface ExtrudeSymbol3DLayerConstructor {
    new(properties?: ExtrudeSymbol3DLayerProperties): ExtrudeSymbol3DLayer;

    fromJSON(json: any): ExtrudeSymbol3DLayer;
  }

  export const ExtrudeSymbol3DLayer: ExtrudeSymbol3DLayerConstructor;

  interface ExtrudeSymbol3DLayerProperties extends Symbol3DLayerProperties {
    size?: number;
  }

  interface FillSymbol extends Symbol {
    outline: SimpleLineSymbol;
  }

  interface FillSymbolConstructor {
    new(properties?: FillSymbolProperties): FillSymbol;

    fromJSON(json: any): FillSymbol;
  }

  export const FillSymbol: FillSymbolConstructor;

  interface FillSymbolProperties extends SymbolProperties {
    outline?: SimpleLineSymbolProperties;
  }

  interface FillSymbol3DLayer extends Symbol3DLayer {
    outline: FillSymbol3DLayerOutline;

    clone(): FillSymbol3DLayer;
  }

  interface FillSymbol3DLayerConstructor {
    new(properties?: FillSymbol3DLayerProperties): FillSymbol3DLayer;

    fromJSON(json: any): FillSymbol3DLayer;
  }

  export const FillSymbol3DLayer: FillSymbol3DLayerConstructor;

  interface FillSymbol3DLayerProperties extends Symbol3DLayerProperties {
    outline?: FillSymbol3DLayerOutline;
  }

  export interface FillSymbol3DLayerOutline {
    color: Color;
    size: number;
  }

  interface Font extends Accessor, JSONSupport {
    clone(): Font;
  }

  interface FontConstructor {
    new(properties?: FontProperties): Font;

    fromJSON(json: any): Font;
  }

  export const Font: FontConstructor;

  interface FontProperties {

  }

  interface IconSymbol3DLayer extends Symbol3DLayer {
    anchor: string;
    outline: IconSymbol3DLayerOutline;
    resource: IconSymbol3DLayerResource;
    size: number;

    clone(): IconSymbol3DLayer;
  }

  interface IconSymbol3DLayerConstructor {
    new(properties?: IconSymbol3DLayerProperties): IconSymbol3DLayer;

    fromJSON(json: any): IconSymbol3DLayer;
  }

  export const IconSymbol3DLayer: IconSymbol3DLayerConstructor;

  interface IconSymbol3DLayerProperties extends Symbol3DLayerProperties {
    anchor?: string;
    outline?: IconSymbol3DLayerOutline;
    resource?: IconSymbol3DLayerResource;
    size?: number;
  }

  export interface IconSymbol3DLayerOutline {
    color?: Color;
    size?: number;
  }

  export interface IconSymbol3DLayerResource {
    primitive?: string;
    href?: string;
  }

  interface LabelSymbol3D extends Symbol3D {
    callout: Callout3D;
    verticalOffset: LabelSymbol3DVerticalOffset;

    clone(): LabelSymbol3D;
  }

  interface LabelSymbol3DConstructor {
    new(properties?: LabelSymbol3DProperties): LabelSymbol3D;

    fromJSON(json: any): LabelSymbol3D;
  }

  export const LabelSymbol3D: LabelSymbol3DConstructor;

  interface LabelSymbol3DProperties extends Symbol3DProperties {
    callout?: Callout3DProperties;
    verticalOffset?: LabelSymbol3DVerticalOffsetProperties;
  }

  export interface LabelSymbol3DVerticalOffsetProperties {
    screenLength?: number;
    minWorldLength?: number;
    maxWorldLength?: number;
  }
  export interface LabelSymbol3DVerticalOffset extends Accessor {
    screenLength: number;
    minWorldLength?: number;
    maxWorldLength?: number;
  }

  interface LineSymbol extends Symbol {
    color: Color;
    width: number;
  }

  interface LineSymbolConstructor {
    new(properties?: LineSymbolProperties): LineSymbol;

    fromJSON(json: any): LineSymbol;
  }

  export const LineSymbol: LineSymbolConstructor;

  interface LineSymbolProperties extends SymbolProperties {
    color?: Color;
    width?: number;
  }

  interface LineSymbol3D extends Symbol3D {
    clone(): LineSymbol3D;
  }

  interface LineSymbol3DConstructor {
    new(properties?: LineSymbol3DProperties): LineSymbol3D;

    fromJSON(json: any): LineSymbol3D;
  }

  export const LineSymbol3D: LineSymbol3DConstructor;

  interface LineSymbol3DProperties extends Symbol3DProperties {

  }

  interface LineSymbol3DLayer extends Symbol3DLayer {
    size: number;

    clone(): LineSymbol3DLayer;
  }

  interface LineSymbol3DLayerConstructor {
    new(properties?: LineSymbol3DLayerProperties): LineSymbol3DLayer;

    fromJSON(json: any): LineSymbol3DLayer;
  }

  export const LineSymbol3DLayer: LineSymbol3DLayerConstructor;

  interface LineSymbol3DLayerProperties extends Symbol3DLayerProperties {
    size?: number;
  }

  interface MarkerSymbol extends Symbol {
    angle: number;
    xoffset: number;
    yoffset: number;
  }

  interface MarkerSymbolConstructor {
    new(properties?: MarkerSymbolProperties): MarkerSymbol;

    fromJSON(json: any): MarkerSymbol;
  }

  export const MarkerSymbol: MarkerSymbolConstructor;

  interface MarkerSymbolProperties extends SymbolProperties {
    angle?: number;
    xoffset?: number;
    yoffset?: number;
  }

  interface MeshSymbol3D extends Symbol3D {
    clone(): MeshSymbol3D;
  }

  interface MeshSymbol3DConstructor {
    new(properties?: MeshSymbol3DProperties): MeshSymbol3D;

    fromJSON(json: any): MeshSymbol3D;
  }

  export const MeshSymbol3D: MeshSymbol3DConstructor;

  interface MeshSymbol3DProperties extends Symbol3DProperties {

  }

  interface ObjectSymbol3DLayer extends Symbol3DLayer {
    anchor: string;
    depth: number;
    heading: number;
    height: number;
    resource: ObjectSymbol3DLayerResource;
    roll: number;
    tilt: number;
    width: number;

    clone(): ObjectSymbol3DLayer;
  }

  interface ObjectSymbol3DLayerConstructor {
    new(properties?: ObjectSymbol3DLayerProperties): ObjectSymbol3DLayer;

    fromJSON(json: any): ObjectSymbol3DLayer;
  }

  export const ObjectSymbol3DLayer: ObjectSymbol3DLayerConstructor;

  interface ObjectSymbol3DLayerProperties extends Symbol3DLayerProperties {
    anchor?: string;
    depth?: number;
    heading?: number;
    height?: number;
    resource?: ObjectSymbol3DLayerResource;
    roll?: number;
    tilt?: number;
    width?: number;
  }

  export interface ObjectSymbol3DLayerResource {
    primitive?: string;
    href?: string;
  }

  interface PathSymbol3DLayer extends Symbol3DLayer {
    size: number;

    clone(): PathSymbol3DLayer;
  }

  interface PathSymbol3DLayerConstructor {
    new(properties?: PathSymbol3DLayerProperties): PathSymbol3DLayer;

    fromJSON(json: any): PathSymbol3DLayer;
  }

  export const PathSymbol3DLayer: PathSymbol3DLayerConstructor;

  interface PathSymbol3DLayerProperties extends Symbol3DLayerProperties {
    size?: number;
  }

  interface PictureFillSymbol extends FillSymbol {
    height: number;
    url: string;
    width: number;
    xoffset: number;
    xscale: number;
    yoffset: number;
    yscale: number;

    clone(): PictureFillSymbol;
  }

  interface PictureFillSymbolConstructor {
    new(properties?: PictureFillSymbolProperties): PictureFillSymbol;

    fromJSON(json: any): PictureFillSymbol;
  }

  export const PictureFillSymbol: PictureFillSymbolConstructor;

  interface PictureFillSymbolProperties extends FillSymbolProperties {
    height?: number;
    url?: string;
    width?: number;
    xoffset?: number;
    xscale?: number;
    yoffset?: number;
    yscale?: number;
  }

  interface PictureMarkerSymbol extends MarkerSymbol {
    height: number;
    url: string;
    width: number;

    clone(): PictureMarkerSymbol;
  }

  interface PictureMarkerSymbolConstructor {
    new(properties?: PictureMarkerSymbolProperties): PictureMarkerSymbol;

    fromJSON(json: any): PictureMarkerSymbol;
  }

  export const PictureMarkerSymbol: PictureMarkerSymbolConstructor;

  interface PictureMarkerSymbolProperties extends MarkerSymbolProperties {
    height?: number;
    url?: string;
    width?: number;
  }

  interface PointSymbol3D extends Symbol3D {
    callout: Callout3D;
    verticalOffset: PointSymbol3DVerticalOffset;

    clone(): PointSymbol3D;
  }

  interface PointSymbol3DConstructor {
    new(properties?: PointSymbol3DProperties): PointSymbol3D;

    fromJSON(json: any): PointSymbol3D;
  }

  export const PointSymbol3D: PointSymbol3DConstructor;

  interface PointSymbol3DProperties extends Symbol3DProperties {
    callout?: Callout3DProperties;
    verticalOffset?: PointSymbol3DVerticalOffsetProperties;
  }

  export interface PointSymbol3DVerticalOffsetProperties {
    screenLength?: number;
    minWorldLength?: number;
    maxWorldLength?: number;
  }
  export interface PointSymbol3DVerticalOffset extends Accessor {
    screenLength: number;
    minWorldLength?: number;
    maxWorldLength?: number;
  }

  interface PolygonSymbol3D extends Symbol3D {
    clone(): PolygonSymbol3D;
  }

  interface PolygonSymbol3DConstructor {
    new(properties?: PolygonSymbol3DProperties): PolygonSymbol3D;

    fromJSON(json: any): PolygonSymbol3D;
  }

  export const PolygonSymbol3D: PolygonSymbol3DConstructor;

  interface PolygonSymbol3DProperties extends Symbol3DProperties {

  }

  interface SimpleFillSymbol extends FillSymbol {
    color: Color;
    style: string;

    clone(): SimpleFillSymbol;
  }

  interface SimpleFillSymbolConstructor {
    new(properties?: SimpleFillSymbolProperties): SimpleFillSymbol;

    fromJSON(json: any): SimpleFillSymbol;
  }

  export const SimpleFillSymbol: SimpleFillSymbolConstructor;

  interface SimpleFillSymbolProperties extends FillSymbolProperties {
    color?: Color;
    style?: string;
  }

  interface SimpleLineSymbol extends LineSymbol {
    cap: string;
    join: string;
    miterLimit: number;
    style: string;

    clone(): SimpleLineSymbol;
  }

  interface SimpleLineSymbolConstructor {
    new(properties?: SimpleLineSymbolProperties): SimpleLineSymbol;

    fromJSON(json: any): SimpleLineSymbol;
  }

  export const SimpleLineSymbol: SimpleLineSymbolConstructor;

  interface SimpleLineSymbolProperties extends LineSymbolProperties {
    cap?: string;
    join?: string;
    miterLimit?: number;
    style?: string;
  }

  interface SimpleMarkerSymbol extends MarkerSymbol {
    color: Color;
    outline: SimpleLineSymbol;
    path: string;
    size: number;
    style: string;

    clone(): SimpleMarkerSymbol;
  }

  interface SimpleMarkerSymbolConstructor {
    new(properties?: SimpleMarkerSymbolProperties): SimpleMarkerSymbol;

    fromJSON(json: any): SimpleMarkerSymbol;
  }

  export const SimpleMarkerSymbol: SimpleMarkerSymbolConstructor;

  interface SimpleMarkerSymbolProperties extends MarkerSymbolProperties {
    color?: Color;
    outline?: SimpleLineSymbolProperties;
    path?: string;
    size?: number;
    style?: string;
  }

  interface symbolsSupportJsonUtils {
    fromJSON(json: any): Symbol;
  }

  export const symbolsSupportJsonUtils: symbolsSupportJsonUtils;

  interface Symbol extends Accessor, JSONSupport {
    type: string;
  }

  interface SymbolConstructor {
    new(properties?: SymbolProperties): Symbol;

    fromJSON(json: any): Symbol;
  }

  export const Symbol: SymbolConstructor;

  interface SymbolProperties {
    type?: string;
  }

  interface Symbol3D extends Symbol {
    styleOrigin: Symbol3DStyleOrigin;
    symbolLayers: Collection<Symbol3DLayer>;
  }

  interface Symbol3DConstructor {
    new(properties?: Symbol3DProperties): Symbol3D;

    fromJSON(json: any): Symbol3D;
  }

  export const Symbol3D: Symbol3DConstructor;

  interface Symbol3DProperties extends SymbolProperties {
    styleOrigin?: Symbol3DStyleOrigin;
    symbolLayers?: CollectionProperties<Symbol3DLayerProperties>;
  }

  export interface Symbol3DStyleOrigin {
    styleName?: string;
    styleUrl?: string;
    name: string;
  }

  interface Symbol3DLayer extends Accessor, JSONSupport {
    material: any;
    type: string;
  }

  interface Symbol3DLayerConstructor {
    new(properties?: Symbol3DLayerProperties): Symbol3DLayer;

    fromJSON(json: any): Symbol3DLayer;
  }

  export const Symbol3DLayer: Symbol3DLayerConstructor;

  interface Symbol3DLayerProperties {
    material?: any;
    type?: string;
  }

  interface TextSymbol extends Symbol {
    angle: number;
    backgroundColor: Color;
    borderLineColor: Color;
    borderLineSize: number;
    color: Color;
    font: Font;
    haloColor: Color;
    haloSize: number;
    horizontalAlignment: string;
    kerning: boolean;
    rotated: boolean;
    text: string;
    verticalAlignment: string;
    xoffset: number;
    yoffset: number;

    clone(): TextSymbol;
  }

  interface TextSymbolConstructor {
    new(properties?: TextSymbolProperties): TextSymbol;

    fromJSON(json: any): TextSymbol;
  }

  export const TextSymbol: TextSymbolConstructor;

  interface TextSymbolProperties extends SymbolProperties {
    angle?: number;
    backgroundColor?: Color;
    borderLineColor?: Color;
    borderLineSize?: number;
    color?: Color;
    font?: FontProperties;
    haloColor?: Color;
    haloSize?: number;
    horizontalAlignment?: string;
    kerning?: boolean;
    rotated?: boolean;
    text?: string;
    verticalAlignment?: string;
    xoffset?: number;
    yoffset?: number;
  }

  interface TextSymbol3DLayer extends Symbol3DLayer {
    font: TextSymbol3DLayerFont;
    halo: TextSymbol3DLayerHalo;
    size: number;
    text: string;

    clone(): TextSymbol3DLayer;
  }

  interface TextSymbol3DLayerConstructor {
    new(properties?: TextSymbol3DLayerProperties): TextSymbol3DLayer;

    fromJSON(json: any): TextSymbol3DLayer;
  }

  export const TextSymbol3DLayer: TextSymbol3DLayerConstructor;

  interface TextSymbol3DLayerProperties extends Symbol3DLayerProperties {
    font?: TextSymbol3DLayerFont;
    halo?: TextSymbol3DLayerHalo;
    size?: number;
    text?: string;
  }

  export interface TextSymbol3DLayerFont {
    family?: string;
    weight?: string;
    style?: string;
  }

  export interface TextSymbol3DLayerHalo {
    color?: Color;
    size?: number;
  }

  interface WebStyleSymbol extends Symbol {
    name: string;
    portal: Portal;
    styleName: string;
    styleUrl: string;

    clone(): WebStyleSymbol;
    fetchSymbol(): IPromise<PointSymbol3D>;
  }

  interface WebStyleSymbolConstructor {
    new(properties?: WebStyleSymbolProperties): WebStyleSymbol;

    fromJSON(json: any): WebStyleSymbol;
  }

  export const WebStyleSymbol: WebStyleSymbolConstructor;

  interface WebStyleSymbolProperties extends SymbolProperties {
    name?: string;
    portal?: PortalProperties;
    styleName?: string;
    styleUrl?: string;
  }

  interface ClosestFacilityTask extends Task {
    solve(params: ClosestFacilityParameters, requestOptions?: any): IPromise<ClosestFacilitySolveResult>;
  }

  interface ClosestFacilityTaskConstructor {
    new(properties?: ClosestFacilityTaskProperties): ClosestFacilityTask;
  }

  export const ClosestFacilityTask: ClosestFacilityTaskConstructor;

  interface ClosestFacilityTaskProperties extends TaskProperties {

  }

  interface FindTask extends Task {
    gdbVersion: string;

    execute(params: FindParameters, requestOptions?: any): IPromise<any>;
  }

  interface FindTaskConstructor {
    new(properties?: FindTaskProperties): FindTask;
  }

  export const FindTask: FindTaskConstructor;

  interface FindTaskProperties extends TaskProperties {
    gdbVersion?: string;
  }

  interface GeometryService extends Task {
    areasAndLengths(areasAndLengthsParameters: AreasAndLengthsParameters, requestOptions?: any): IPromise<any>;
    autoComplete(polygons: Polygon[], polylines: Polyline[], requestOptions?: any): IPromise<Polygon>;
    buffer(bufferParameters: BufferParameters, requestOptions?: any): IPromise<Polygon[]>;
    convexHull(geometries: Geometry[], requestOptions?: any): IPromise<Geometry>;
    cut(geometries: Geometry[], cutter: Polyline, requestOptions?: any): IPromise<any>;
    densify(densifyParameters: DensifyParameters, requestOptions?: any): IPromise<Geometry[]>;
    difference(geometries: Geometry[], geometry: Geometry, requestOptions?: any): IPromise<Geometry>;
    distance(params: DistanceParameters, requestOptions?: any): IPromise<number>;
    fromGeoCoordinateString(params: GeometryServiceFromGeoCoordinateStringParams, requestOptions?: any): IPromise<any>;
    generalize(params: GeneralizeParameters, requestOptions?: any): IPromise<Geometry[]>;
    intersect(geometries: Geometry[], intersector: Geometry, requestOptions?: any): IPromise<Geometry[]>;
    labelPoints(polygons: Polygon[], requestOptions?: any): IPromise<Point>;
    lengths(params: LengthsParameters, requestOptions?: any): IPromise<any>;
    offset(params: OffsetParameters, requestOptions?: any): IPromise<Geometry[]>;
    project(params: ProjectParameters, requestOptions?: any): IPromise<Geometry[]>;
    relation(params: RelationParameters, requestOptions?: any): IPromise<Polygon[]>;
    reshape(targetGeometry: Geometry, reshaper: Geometry, requestOptions?: any): IPromise<Geometry>;
    simplify(geometries: Geometry[], requestOptions?: any): IPromise<Geometry[]>;
    toGeoCoordinateString(params: GeometryServiceToGeoCoordinateStringParams, requestOptions?: any): IPromise<string[]>;
    trimExtend(params: TrimExtendParameters, requestOptions?: any): IPromise<Geometry[]>;
    union(geometries: Geometry[], requestOptions?: any): IPromise<Geometry>;
  }

  interface GeometryServiceConstructor {
    new(properties?: GeometryServiceProperties): GeometryService;
  }

  export const GeometryService: GeometryServiceConstructor;

  interface GeometryServiceProperties extends TaskProperties {

  }

  export interface GeometryServiceFromGeoCoordinateStringParams {
    strings: string[];
    sr: SpatialReference | string;
    conversionType: string;
    conversionMode?: string;
  }

  export interface GeometryServiceToGeoCoordinateStringParams {
    sr: SpatialReference | string;
    coordinates: number[][];
    conversionType: string;
    conversionMode?: string;
    numOfDigits?: number;
    rounding?: boolean;
    addSpaces?: boolean;
  }

  interface Geoprocessor extends Task {
    outSpatialReference: SpatialReference;
    processSpatialReference: SpatialReference;
    updateDelay: number;

    cancelJob(jobId: string, requestOptions?: any): IPromise<any>;
    cancelJobStatusUpdates(jobId: string): void;
    checkJobStatus(jobId: string, requestOptions?: any): IPromise<any>;
    execute(params: any, requestOptions?: any): IPromise<any>;
    getResultData(jobId: string, resultName: string, requestOptions?: any): IPromise<any>;
    getResultImage(jobId: string, resultName: string, imageParams: ImageParameters, requestOptions?: any): IPromise<any>;
    getResultMapImageLayer(jobId: string): MapImageLayer;
    submitJob(params: any, requestOptions?: any): IPromise<any>;
  }

  interface GeoprocessorConstructor {
    new(properties?: GeoprocessorProperties): Geoprocessor;
  }

  export const Geoprocessor: GeoprocessorConstructor;

  interface GeoprocessorProperties extends TaskProperties {
    outSpatialReference?: SpatialReferenceProperties;
    processSpatialReference?: SpatialReferenceProperties;
    updateDelay?: number;
  }

  interface IdentifyTask extends Task {
    gdbVersion: string;

    execute(params: IdentifyParameters, requestOptions?: any): IPromise<any>;
  }

  interface IdentifyTaskConstructor {
    new(properties?: IdentifyTaskProperties): IdentifyTask;
  }

  export const IdentifyTask: IdentifyTaskConstructor;

  interface IdentifyTaskProperties extends TaskProperties {
    gdbVersion?: string;
  }

  interface ImageServiceIdentifyTask extends Task {
    execute(params: ImageServiceIdentifyParameters, requestOptions?: any): IPromise<ImageServiceIdentifyResult>;
  }

  interface ImageServiceIdentifyTaskConstructor {
    new(properties?: ImageServiceIdentifyTaskProperties): ImageServiceIdentifyTask;
  }

  export const ImageServiceIdentifyTask: ImageServiceIdentifyTaskConstructor;

  interface ImageServiceIdentifyTaskProperties extends TaskProperties {

  }

  interface Locator extends Task {
    categories: string[];
    countryCode: string;
    outSpatialReference: SpatialReference;

    addressesToLocations(params: LocatorAddressesToLocationsParams, requestOptions?: any): IPromise<AddressCandidate[]>;
    addressToLocations(params: LocatorAddressToLocationsParams, requestOptions?: any): IPromise<AddressCandidate[]>;
    locationToAddress(location: Point, distance?: number, requestOptions?: any): IPromise<AddressCandidate>;
    suggestLocations(params: LocatorSuggestLocationsParams, requestOptions?: any): IPromise<SuggestionResult>;
  }

  interface LocatorConstructor {
    new(properties?: LocatorProperties): Locator;
  }

  export const Locator: LocatorConstructor;

  interface LocatorProperties extends TaskProperties {
    categories?: string[];
    countryCode?: string;
    outSpatialReference?: SpatialReferenceProperties;
  }

  export interface LocatorAddressesToLocationsParams {
    addresses: any[];
    countryCode: string;
    categories: string[];
  }

  export interface LocatorAddressToLocationsParams {
    address: any;
    categories: string[];
    countryCode: string;
    distance: number;
    forStorage: boolean;
    location: Point;
    magicKey: string;
    maxLocations: number;
    outFields: string[];
    searchExtent: Extent;
  }

  export interface LocatorSuggestLocationsParams {
    categories: string[];
    distance: number;
    location: Point;
    text: string;
  }

  export interface SuggestionResult {
    isCollection: boolean;
    magicKey: string;
    text: string;
  }

  interface PrintTask extends Task {
    mode: string;
    updateDelay: number;

    execute(params: PrintParameters, requestOptions?: any): IPromise<any>;
  }

  interface PrintTaskConstructor {
    new(properties?: PrintTaskProperties): PrintTask;
  }

  export const PrintTask: PrintTaskConstructor;

  interface PrintTaskProperties extends TaskProperties {
    mode?: string;
    updateDelay?: number;
  }

  interface QueryTask extends Task {
    gdbVersion: string;

    execute(params: Query, requestOptions?: any): IPromise<FeatureSet>;
    executeForCount(params: Query, requestOptions?: any): IPromise<number>;
    executeForExtent(params: Query, requestOptions?: any): IPromise<any>;
    executeForIds(params: Query, requestOptions?: any): IPromise<number[]>;
    executeRelationshipQuery(params: RelationshipQuery, requestOptions?: any): IPromise<FeatureSet>;
  }

  interface QueryTaskConstructor {
    new(properties?: QueryTaskProperties): QueryTask;
  }

  export const QueryTask: QueryTaskConstructor;

  interface QueryTaskProperties extends TaskProperties {
    gdbVersion?: string;
  }

  interface RouteTask extends Task {
    solve(params: RouteParameters, requestOptions?: any): IPromise<RouteResult>;
  }

  interface RouteTaskConstructor {
    new(properties?: RouteTaskProperties): RouteTask;
  }

  export const RouteTask: RouteTaskConstructor;

  interface RouteTaskProperties extends TaskProperties {

  }

  interface ServiceAreaTask extends Task {
    solve(params: ServiceAreaParameters, requestOptions?: any): IPromise<ServiceAreaSolveResult>;
  }

  interface ServiceAreaTaskConstructor {
    new(properties?: ServiceAreaTaskProperties): ServiceAreaTask;
  }

  export const ServiceAreaTask: ServiceAreaTaskConstructor;

  interface ServiceAreaTaskProperties extends TaskProperties {

  }

  interface AddressCandidate extends Accessor, JSONSupport {
    address: string;
    attributes: any;
    extent: Extent;
    location: Point;
    score: number;
  }

  interface AddressCandidateConstructor {
    new(properties?: AddressCandidateProperties): AddressCandidate;

    fromJSON(json: any): AddressCandidate;
  }

  export const AddressCandidate: AddressCandidateConstructor;

  interface AddressCandidateProperties {
    address?: string;
    attributes?: any;
    extent?: ExtentProperties;
    location?: PointProperties;
    score?: number;
  }

  interface AreasAndLengthsParameters extends Accessor {
    areaUnit: string;
    calculationType: string;
    lengthUnit: string;
    polygons: Polygon[];

    toJSON(): any;
  }

  interface AreasAndLengthsParametersConstructor {
    new(properties?: AreasAndLengthsParametersProperties): AreasAndLengthsParameters;
  }

  export const AreasAndLengthsParameters: AreasAndLengthsParametersConstructor;

  interface AreasAndLengthsParametersProperties {
    areaUnit?: string;
    calculationType?: string;
    lengthUnit?: string;
    polygons?: PolygonProperties[];
  }

  interface BufferParameters extends Accessor {
    bufferSpatialReference: SpatialReference;
    distances: number[];
    geodesic: boolean;
    geometries: Geometry[];
    outSpatialReference: SpatialReference;
    unionResults: boolean;
    unit: string;

    toJSON(): any;
  }

  interface BufferParametersConstructor {
    new(properties?: BufferParametersProperties): BufferParameters;
  }

  export const BufferParameters: BufferParametersConstructor;

  interface BufferParametersProperties {
    bufferSpatialReference?: SpatialReferenceProperties;
    distances?: number[];
    geodesic?: boolean;
    geometries?: GeometryProperties[];
    outSpatialReference?: SpatialReferenceProperties;
    unionResults?: boolean;
    unit?: string;
  }

  interface ClosestFacilityParameters extends Accessor {
    accumulateAttributes: string[];
    attributeParameterValues: ClosestFacilityParametersAttributeParameterValues[];
    defaultCutoff: number;
    defaultTargetFacilityCount: number;
    directionsLanguage: string;
    directionsLengthUnits: string;
    directionsOutputType: string;
    directionsStyleName: string;
    directionsTimeAttribute: string;
    doNotLocateOnRestrictedElements: boolean;
    facilities: DataLayer | FeatureSet;
    impedanceAttribute: string;
    incidents: DataLayer | FeatureSet;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outputLines: string;
    outSpatialReference: SpatialReference | string;
    pointBarriers: DataLayer | FeatureSet;
    polygonBarriers: DataLayer | FeatureSet;
    polylineBarriers: DataLayer | FeatureSet;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnDirections: boolean;
    returnFacilities: boolean;
    returnIncidents: boolean;
    returnPointBarriers: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    returnRoutes: boolean;
    timeOfDay: Date;
    timeOfDayUsage: string;
    travelDirection: string;
    useHierarchy: boolean;

    toJSON(): any;
  }

  interface ClosestFacilityParametersConstructor {
    new(properties?: ClosestFacilityParametersProperties): ClosestFacilityParameters;
  }

  export const ClosestFacilityParameters: ClosestFacilityParametersConstructor;

  interface ClosestFacilityParametersProperties {
    accumulateAttributes?: string[];
    attributeParameterValues?: ClosestFacilityParametersAttributeParameterValues[];
    defaultCutoff?: number;
    defaultTargetFacilityCount?: number;
    directionsLanguage?: string;
    directionsLengthUnits?: string;
    directionsOutputType?: string;
    directionsStyleName?: string;
    directionsTimeAttribute?: string;
    doNotLocateOnRestrictedElements?: boolean;
    facilities?: DataLayerProperties | FeatureSetProperties;
    impedanceAttribute?: string;
    incidents?: DataLayerProperties | FeatureSetProperties;
    outputGeometryPrecision?: number;
    outputGeometryPrecisionUnits?: string;
    outputLines?: string;
    outSpatialReference?: SpatialReferenceProperties | string;
    pointBarriers?: DataLayerProperties | FeatureSetProperties;
    polygonBarriers?: DataLayerProperties | FeatureSetProperties;
    polylineBarriers?: DataLayerProperties | FeatureSetProperties;
    restrictionAttributes?: string[];
    restrictUTurns?: string;
    returnDirections?: boolean;
    returnFacilities?: boolean;
    returnIncidents?: boolean;
    returnPointBarriers?: boolean;
    returnPolygonBarriers?: boolean;
    returnPolylineBarriers?: boolean;
    returnRoutes?: boolean;
    timeOfDay?: DateProperties;
    timeOfDayUsage?: string;
    travelDirection?: string;
    useHierarchy?: boolean;
  }

  export interface ClosestFacilityParametersAttributeParameterValues {
    attributeName: string;
    parameterName: string;
    value: string;
  }

  interface ClosestFacilitySolveResult extends Accessor, JSONSupport {
    directions: DirectionsFeatureSet;
    facilities: Point[];
    incidents: Point[];
    messages: NAMessage[];
    pointBarriers: Point[];
    polygonBarriers: Polygon[];
    polylineBarriers: Polyline[];
    routes: Graphic[];
  }

  interface ClosestFacilitySolveResultConstructor {
    new(properties?: ClosestFacilitySolveResultProperties): ClosestFacilitySolveResult;

    fromJSON(json: any): ClosestFacilitySolveResult;
  }

  export const ClosestFacilitySolveResult: ClosestFacilitySolveResultConstructor;

  interface ClosestFacilitySolveResultProperties {
    directions?: DirectionsFeatureSetProperties;
    facilities?: PointProperties[];
    incidents?: PointProperties[];
    messages?: NAMessageProperties[];
    pointBarriers?: PointProperties[];
    polygonBarriers?: PolygonProperties[];
    polylineBarriers?: PolylineProperties[];
    routes?: GraphicProperties[];
  }

  interface DataFile extends Accessor, JSONSupport {
    itemId: string;
    url: string;
  }

  interface DataFileConstructor {
    new(properties?: DataFileProperties): DataFile;

    fromJSON(json: any): DataFile;
  }

  export const DataFile: DataFileConstructor;

  interface DataFileProperties {
    itemId?: string;
    url?: string;
  }

  interface DataLayer extends Accessor {
    geometry: Geometry;
    name: string;
    spatialRelationship: string;
    where: string;

    toJSON(): any;
  }

  interface DataLayerConstructor {
    new(properties?: DataLayerProperties): DataLayer;
  }

  export const DataLayer: DataLayerConstructor;

  interface DataLayerProperties {
    geometry?: GeometryProperties;
    name?: string;
    spatialRelationship?: string;
    where?: string;
  }

  interface supportDate extends Accessor, JSONSupport {
    date: Date;
    format: string;
  }

  interface supportDateConstructor {
    new(properties?: supportDateProperties): supportDate;

    fromJSON(json: any): supportDate;
  }

  export const supportDate: supportDateConstructor;

  interface supportDateProperties {
    date?: DateProperties;
    format?: string;
  }

  interface DensifyParameters extends Accessor {
    geodesic: boolean;
    geometries: Geometry[];
    lengthUnit: string;
    maxSegmentLength: number;

    toJSON(): any;
  }

  interface DensifyParametersConstructor {
    new(properties?: DensifyParametersProperties): DensifyParameters;
  }

  export const DensifyParameters: DensifyParametersConstructor;

  interface DensifyParametersProperties {
    geodesic?: boolean;
    geometries?: GeometryProperties[];
    lengthUnit?: string;
    maxSegmentLength?: number;
  }

  interface DirectionsFeatureSet extends FeatureSet, Accessor {
    extent: Extent;
    mergedGeometry: Polyline;
    routeId: string;
    routeName: string;
    strings: any[];
    totalDriveTime: number;
    totalLength: number;
    totalTime: number;
  }

  interface DirectionsFeatureSetConstructor {
    new(properties?: DirectionsFeatureSetProperties): DirectionsFeatureSet;

    fromJSON(json: any): DirectionsFeatureSet;
  }

  export const DirectionsFeatureSet: DirectionsFeatureSetConstructor;

  interface DirectionsFeatureSetProperties extends FeatureSetProperties {
    extent?: ExtentProperties;
    mergedGeometry?: PolylineProperties;
    routeId?: string;
    routeName?: string;
    strings?: any[];
    totalDriveTime?: number;
    totalLength?: number;
    totalTime?: number;
  }

  interface DistanceParameters extends Accessor {
    distanceUnit: string;
    geodesic: boolean;
    geometry1: Geometry[];
    geometry2: Geometry[];

    toJSON(): any;
  }

  interface DistanceParametersConstructor {
    new(properties?: DistanceParametersProperties): DistanceParameters;
  }

  export const DistanceParameters: DistanceParametersConstructor;

  interface DistanceParametersProperties {
    distanceUnit?: string;
    geodesic?: boolean;
    geometry1?: GeometryProperties[];
    geometry2?: GeometryProperties[];
  }

  interface FeatureSet extends Accessor, JSONSupport {
    displayFieldName: string;
    exceededTransferLimit: boolean;
    features: Graphic[];
    fields: Field[];
    geometryType: string;
    spatialReference: SpatialReference;
  }

  interface FeatureSetConstructor {
    new(properties?: FeatureSetProperties): FeatureSet;

    fromJSON(json: any): FeatureSet;
  }

  export const FeatureSet: FeatureSetConstructor;

  interface FeatureSetProperties {
    displayFieldName?: string;
    exceededTransferLimit?: boolean;
    features?: GraphicProperties[];
    fields?: FieldProperties[];
    geometryType?: string;
    spatialReference?: SpatialReferenceProperties;
  }

  interface FindParameters extends Accessor {
    contains: boolean;
    geometryPrecision: number;
    layerIds: number[];
    maxAllowableOffset: number;
    outSpatialReference: SpatialReference;
    returnGeometry: boolean;
    searchFields: string[];
    searchText: string;

    toJSON(): any;
  }

  interface FindParametersConstructor {
    new(properties?: FindParametersProperties): FindParameters;
  }

  export const FindParameters: FindParametersConstructor;

  interface FindParametersProperties {
    contains?: boolean;
    geometryPrecision?: number;
    layerIds?: number[];
    maxAllowableOffset?: number;
    outSpatialReference?: SpatialReferenceProperties;
    returnGeometry?: boolean;
    searchFields?: string[];
    searchText?: string;
  }

  interface FindResult extends Accessor, JSONSupport {
    displayFieldName: string;
    feature: Graphic;
    foundFieldName: string;
    layerId: number;
    layerName: string;
    value: void;
  }

  interface FindResultConstructor {
    new(properties?: FindResultProperties): FindResult;

    fromJSON(json: any): FindResult;
  }

  export const FindResult: FindResultConstructor;

  interface FindResultProperties {
    displayFieldName?: string;
    feature?: GraphicProperties;
    foundFieldName?: string;
    layerId?: number;
    layerName?: string;
    value?: void;
  }

  interface GeneralizeParameters extends Accessor {
    deviationUnit: string;
    geometries: Geometry[];
    maxDeviation: number;

    toJSON(): any;
  }

  interface GeneralizeParametersConstructor {
    new(properties?: GeneralizeParametersProperties): GeneralizeParameters;
  }

  export const GeneralizeParameters: GeneralizeParametersConstructor;

  interface GeneralizeParametersProperties {
    deviationUnit?: string;
    geometries?: GeometryProperties[];
    maxDeviation?: number;
  }

  interface GPMessage extends Accessor, JSONSupport {
    description: string;
    type: string;
  }

  interface GPMessageConstructor {
    new(properties?: GPMessageProperties): GPMessage;

    fromJSON(json: any): GPMessage;
  }

  export const GPMessage: GPMessageConstructor;

  interface GPMessageProperties {
    description?: string;
    type?: string;
  }

  interface IdentifyParameters extends Accessor {
    dpi: number;
    geometry: Geometry;
    geometryPrecision: number;
    height: number;
    layerIds: number[];
    layerOption: string;
    mapExtent: Extent;
    maxAllowableOffset: number;
    returnGeometry: boolean;
    spatialReference: SpatialReference;
    tolerance: number;
    width: number;

    toJSON(): any;
  }

  interface IdentifyParametersConstructor {
    new(properties?: IdentifyParametersProperties): IdentifyParameters;
  }

  export const IdentifyParameters: IdentifyParametersConstructor;

  interface IdentifyParametersProperties {
    dpi?: number;
    geometry?: GeometryProperties;
    geometryPrecision?: number;
    height?: number;
    layerIds?: number[];
    layerOption?: string;
    mapExtent?: ExtentProperties;
    maxAllowableOffset?: number;
    returnGeometry?: boolean;
    spatialReference?: SpatialReferenceProperties;
    tolerance?: number;
    width?: number;
  }

  interface IdentifyResult extends Accessor, JSONSupport {
    displayFieldName: string;
    feature: Graphic;
    layerId: number;
    layerName: string;
  }

  interface IdentifyResultConstructor {
    new(properties?: IdentifyResultProperties): IdentifyResult;

    fromJSON(json: any): IdentifyResult;
  }

  export const IdentifyResult: IdentifyResultConstructor;

  interface IdentifyResultProperties {
    displayFieldName?: string;
    feature?: GraphicProperties;
    layerId?: number;
    layerName?: string;
  }

  interface ImageServiceIdentifyParameters extends Accessor {
    geometry: Point | Polygon;
    mosaicRule: MosaicRule;
    noData: string | number;
    pixelSize: Symbol;
    pixelSizeX: number;
    pixelSizeY: number;
    renderingRule: RasterFunction;
    returnCatalogItems: boolean;
    returnGeometry: boolean;

    toJSON(): any;
  }

  interface ImageServiceIdentifyParametersConstructor {
    new(properties?: ImageServiceIdentifyParametersProperties): ImageServiceIdentifyParameters;
  }

  export const ImageServiceIdentifyParameters: ImageServiceIdentifyParametersConstructor;

  interface ImageServiceIdentifyParametersProperties {
    geometry?: PointProperties | PolygonProperties;
    mosaicRule?: MosaicRuleProperties;
    noData?: string | number;
    pixelSize?: SymbolProperties;
    pixelSizeX?: number;
    pixelSizeY?: number;
    renderingRule?: RasterFunctionProperties;
    returnCatalogItems?: boolean;
    returnGeometry?: boolean;
  }

  interface ImageServiceIdentifyResult extends Accessor, JSONSupport {
    catalogItems: FeatureSet;
    catalogItemVisibilities: number[];
    location: Point;
    name: string;
    objectId: number;
    properties: any;
    value: string;
  }

  interface ImageServiceIdentifyResultConstructor {
    new(properties?: ImageServiceIdentifyResultProperties): ImageServiceIdentifyResult;

    fromJSON(json: any): ImageServiceIdentifyResult;
  }

  export const ImageServiceIdentifyResult: ImageServiceIdentifyResultConstructor;

  interface ImageServiceIdentifyResultProperties {
    catalogItems?: FeatureSetProperties;
    catalogItemVisibilities?: number[];
    location?: PointProperties;
    name?: string;
    objectId?: number;
    properties?: any;
    value?: string;
  }

  interface JobInfo extends Accessor, JSONSupport {
    jobId: string;
    jobStatus: string;
    messages: GPMessage[];
  }

  interface JobInfoConstructor {
    new(properties?: JobInfoProperties): JobInfo;

    fromJSON(json: any): JobInfo;
  }

  export const JobInfo: JobInfoConstructor;

  interface JobInfoProperties {
    jobId?: string;
    jobStatus?: string;
    messages?: GPMessageProperties[];
  }

  interface LegendLayer extends Accessor {
    layerId: string;
    subLayerIds: string[];
    title: string;
  }

  interface LegendLayerConstructor {
    new(properties?: LegendLayerProperties): LegendLayer;
  }

  export const LegendLayer: LegendLayerConstructor;

  interface LegendLayerProperties {
    layerId?: string;
    subLayerIds?: string[];
    title?: string;
  }

  interface LengthsParameters extends Accessor {
    calculationType: string;
    geodesic: boolean;
    lengthUnit: number | string;
    polylines: Polyline[];

    toJSON(): any;
  }

  interface LengthsParametersConstructor {
    new(properties?: LengthsParametersProperties): LengthsParameters;
  }

  export const LengthsParameters: LengthsParametersConstructor;

  interface LengthsParametersProperties {
    calculationType?: string;
    geodesic?: boolean;
    lengthUnit?: number | string;
    polylines?: PolylineProperties[];
  }

  interface LinearUnit extends Accessor, JSONSupport {
    distance: number;
    units: string;
  }

  interface LinearUnitConstructor {
    new(properties?: LinearUnitProperties): LinearUnit;

    fromJSON(json: any): LinearUnit;
  }

  export const LinearUnit: LinearUnitConstructor;

  interface LinearUnitProperties {
    distance?: number;
    units?: string;
  }

  interface NAMessage extends Accessor, JSONSupport {
    description: string;
    type: any;
  }

  interface NAMessageConstructor {
    new(properties?: NAMessageProperties): NAMessage;

    fromJSON(json: any): NAMessage;
  }

  export const NAMessage: NAMessageConstructor;

  interface NAMessageProperties {
    description?: string;
    type?: any;
  }

  interface OffsetParameters extends Accessor {
    bevelRatio: number;
    geometries: Geometry[];
    offsetDistance: number;
    offsetHow: string;
    offsetUnit: string;

    toJSON(): any;
  }

  interface OffsetParametersConstructor {
    new(properties?: OffsetParametersProperties): OffsetParameters;
  }

  export const OffsetParameters: OffsetParametersConstructor;

  interface OffsetParametersProperties {
    bevelRatio?: number;
    geometries?: GeometryProperties[];
    offsetDistance?: number;
    offsetHow?: string;
    offsetUnit?: string;
  }

  interface ParameterValue extends Accessor, JSONSupport {
    dataType: string;
    value: any;
  }

  interface ParameterValueConstructor {
    new(properties?: ParameterValueProperties): ParameterValue;

    fromJSON(json: any): ParameterValue;
  }

  export const ParameterValue: ParameterValueConstructor;

  interface ParameterValueProperties {
    dataType?: string;
    value?: any;
  }

  interface PrintParameters extends Accessor {
    extraParameters: any;
    outSpatialReference: SpatialReference;
    template: PrintTemplate;
    view: MapView;
  }

  interface PrintParametersConstructor {
    new(properties?: PrintParametersProperties): PrintParameters;
  }

  export const PrintParameters: PrintParametersConstructor;

  interface PrintParametersProperties {
    extraParameters?: any;
    outSpatialReference?: SpatialReferenceProperties;
    template?: PrintTemplateProperties;
    view?: MapViewProperties;
  }

  interface PrintTemplate extends Accessor {
    attributionVisible: boolean;
    exportOptions: PrintTemplateExportOptions;
    format: string;
    layout: string;
    layoutOptions: PrintTemplateLayoutOptions;
    outScale: number;
    preserveScale: boolean;
    showLabels: boolean;
  }

  interface PrintTemplateConstructor {
    new(properties?: PrintTemplateProperties): PrintTemplate;
  }

  export const PrintTemplate: PrintTemplateConstructor;

  interface PrintTemplateProperties {
    attributionVisible?: boolean;
    exportOptions?: PrintTemplateExportOptions;
    format?: string;
    layout?: string;
    layoutOptions?: PrintTemplateLayoutOptions;
    outScale?: number;
    preserveScale?: boolean;
    showLabels?: boolean;
  }

  export interface PrintTemplateExportOptions {
    width?: number;
    height?: number;
    dpi?: number;
  }

  export interface PrintTemplateLayoutOptions {
    titleText: string;
    authorText: string;
    copyrightText: string;
    scalebarUnit: string;
    legendLayers: LegendLayer[];
    customTextElements: any[];
  }

  interface ProjectParameters extends Accessor {
    geometries: Geometry[];
    outSpatialReference: SpatialReference;
    outSR: SpatialReference;
    transformation: ProjectParametersTransformation;
    transformForward: boolean;

    toJSON(): any;
  }

  interface ProjectParametersConstructor {
    new(properties?: ProjectParametersProperties): ProjectParameters;
  }

  export const ProjectParameters: ProjectParametersConstructor;

  interface ProjectParametersProperties {
    geometries?: GeometryProperties[];
    outSpatialReference?: SpatialReferenceProperties;
    outSR?: SpatialReferenceProperties;
    transformation?: ProjectParametersTransformation;
    transformForward?: boolean;
  }

  export interface ProjectParametersTransformation {
    wkid?: number;
    wkt?: string;
  }

  interface Query extends Accessor {
    distance: number;
    geometry: Geometry;
    geometryPrecision: number;
    groupByFieldsForStatistics: string[];
    maxAllowableOffset: number;
    multipatchOption: string;
    num: number;
    objectIds: number[];
    orderByFields: string[];
    outFields: string[];
    outSpatialReference: SpatialReference;
    outStatistics: StatisticDefinition[];
    pixelSize: Symbol;
    quantizationParameters: QueryQuantizationParameters;
    relationParam: string;
    returnDistinctValues: boolean;
    returnGeometry: boolean;
    returnZ: boolean;
    spatialRelationship: string;
    start: number;
    text: string;
    units: string;
    where: string;

    toJSON(): any;
  }

  interface QueryConstructor {
    new(properties?: QueryProperties): Query;
  }

  export const Query: QueryConstructor;

  interface QueryProperties {
    distance?: number;
    geometry?: GeometryProperties;
    geometryPrecision?: number;
    groupByFieldsForStatistics?: string[];
    maxAllowableOffset?: number;
    multipatchOption?: string;
    num?: number;
    objectIds?: number[];
    orderByFields?: string[];
    outFields?: string[];
    outSpatialReference?: SpatialReferenceProperties;
    outStatistics?: StatisticDefinitionProperties[];
    pixelSize?: SymbolProperties;
    quantizationParameters?: QueryQuantizationParameters;
    relationParam?: string;
    returnDistinctValues?: boolean;
    returnGeometry?: boolean;
    returnZ?: boolean;
    spatialRelationship?: string;
    start?: number;
    text?: string;
    units?: string;
    where?: string;
  }

  export interface QueryQuantizationParameters {
    extent?: Extent;
    mode?: string;
    originPosition?: string;
    tolerance?: number;
  }

  interface RasterData extends Accessor, JSONSupport {
    format: string;
    itemId: string;
    url: string;
  }

  interface RasterDataConstructor {
    new(properties?: RasterDataProperties): RasterData;

    fromJSON(json: any): RasterData;
  }

  export const RasterData: RasterDataConstructor;

  interface RasterDataProperties {
    format?: string;
    itemId?: string;
    url?: string;
  }

  interface RelationParameters extends Accessor {
    geometries1: Geometry[];
    geometries2: Geometry[];
    relation: string;
    relationParam: string;

    toJSON(): any;
  }

  interface RelationParametersConstructor {
    new(properties?: RelationParametersProperties): RelationParameters;
  }

  export const RelationParameters: RelationParametersConstructor;

  interface RelationParametersProperties {
    geometries1?: GeometryProperties[];
    geometries2?: GeometryProperties[];
    relation?: string;
    relationParam?: string;
  }

  interface RelationshipQuery extends Accessor {
    definitionExpression: string;
    geometryPrecision: number;
    maxAllowableOffset: number;
    objectIds: number[];
    outFields: string[];
    outSpatialReference: SpatialReference;
    relationshipId: number;
    returnGeometry: boolean;

    toJSON(): any;
  }

  interface RelationshipQueryConstructor {
    new(properties?: RelationshipQueryProperties): RelationshipQuery;
  }

  export const RelationshipQuery: RelationshipQueryConstructor;

  interface RelationshipQueryProperties {
    definitionExpression?: string;
    geometryPrecision?: number;
    maxAllowableOffset?: number;
    objectIds?: number[];
    outFields?: string[];
    outSpatialReference?: SpatialReferenceProperties;
    relationshipId?: number;
    returnGeometry?: boolean;
  }

  interface RouteParameters extends Accessor {
    accumulateAttributes: string[];
    attributeParameterValues: AttributeParamValue;
    barriers: DataLayer | FeatureSet;
    directionsLanguage: string;
    directionsLengthUnits: string;
    directionsOutputType: string;
    directionsStyleName: string;
    directionsTimeAttribute: string;
    doNotLocateOnRestrictedElements: boolean;
    findBestSequence: boolean;
    ignoreInvalidLocations: boolean;
    impedanceAttribute: string;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outputLines: string;
    outSpatialReference: SpatialReference;
    polygonBarriers: DataLayer | FeatureSet;
    polylineBarriers: DataLayer | FeatureSet;
    preserveFirstStop: boolean;
    preserveLastStop: boolean;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnBarriers: boolean;
    returnDirections: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    returnRoutes: boolean;
    returnStops: boolean;
    returnZ: boolean;
    startTime: Date;
    startTimeIsUTC: boolean;
    stops: DataLayer | FeatureSet;
    useHierarchy: boolean;
    useTimeWindows: boolean;

    toJSON(): any;
  }

  interface RouteParametersConstructor {
    new(properties?: RouteParametersProperties): RouteParameters;
  }

  export const RouteParameters: RouteParametersConstructor;

  interface RouteParametersProperties {
    accumulateAttributes?: string[];
    attributeParameterValues?: AttributeParamValue;
    barriers?: DataLayerProperties | FeatureSetProperties;
    directionsLanguage?: string;
    directionsLengthUnits?: string;
    directionsOutputType?: string;
    directionsStyleName?: string;
    directionsTimeAttribute?: string;
    doNotLocateOnRestrictedElements?: boolean;
    findBestSequence?: boolean;
    ignoreInvalidLocations?: boolean;
    impedanceAttribute?: string;
    outputGeometryPrecision?: number;
    outputGeometryPrecisionUnits?: string;
    outputLines?: string;
    outSpatialReference?: SpatialReferenceProperties;
    polygonBarriers?: DataLayerProperties | FeatureSetProperties;
    polylineBarriers?: DataLayerProperties | FeatureSetProperties;
    preserveFirstStop?: boolean;
    preserveLastStop?: boolean;
    restrictionAttributes?: string[];
    restrictUTurns?: string;
    returnBarriers?: boolean;
    returnDirections?: boolean;
    returnPolygonBarriers?: boolean;
    returnPolylineBarriers?: boolean;
    returnRoutes?: boolean;
    returnStops?: boolean;
    returnZ?: boolean;
    startTime?: DateProperties;
    startTimeIsUTC?: boolean;
    stops?: DataLayerProperties | FeatureSetProperties;
    useHierarchy?: boolean;
    useTimeWindows?: boolean;
  }

  export interface AttributeParamValue {
    attributeName: string;
    parameterName: string;
    value: string;
  }

  interface RouteResult extends Accessor, JSONSupport {
    directions: DirectionsFeatureSet;
    route: Graphic;
    routeName: string;
    stops: Graphic[];
  }

  interface RouteResultConstructor {
    new(properties?: RouteResultProperties): RouteResult;

    fromJSON(json: any): RouteResult;
  }

  export const RouteResult: RouteResultConstructor;

  interface RouteResultProperties {
    directions?: DirectionsFeatureSetProperties;
    route?: GraphicProperties;
    routeName?: string;
    stops?: GraphicProperties[];
  }

  interface ServiceAreaParameters extends Accessor {
    accumulateAttributes: string[];
    attributeParameterValues: any[];
    defaultBreaks: number[];
    doNotLocateOnRestrictedElements: boolean;
    excludeSourcesFromPolygons: string[];
    facilities: DataLayer | FeatureSet;
    impedanceAttribute: string;
    mergeSimilarPolygonRanges: boolean;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outputLines: string;
    outputPolygons: string;
    outSpatialReference: SpatialReference;
    overlapLines: boolean;
    overlapPolygons: boolean;
    pointBarriers: DataLayer | FeatureSet;
    polygonBarriers: DataLayer | FeatureSet;
    polylineBarriers: DataLayer | FeatureSet;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnFacilities: boolean;
    returnPointBarriers: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    splitLinesAtBreaks: boolean;
    splitPolygonsAtBreaks: boolean;
    timeOfDay: Date;
    travelDirection: string;
    trimOuterPolygon: boolean;
    trimPolygonDistance: number;
    trimPolygonDistanceUnits: string;
    useHierarchy: boolean;

    toJSON(): any;
  }

  interface ServiceAreaParametersConstructor {
    new(properties?: ServiceAreaParametersProperties): ServiceAreaParameters;
  }

  export const ServiceAreaParameters: ServiceAreaParametersConstructor;

  interface ServiceAreaParametersProperties {
    accumulateAttributes?: string[];
    attributeParameterValues?: any[];
    defaultBreaks?: number[];
    doNotLocateOnRestrictedElements?: boolean;
    excludeSourcesFromPolygons?: string[];
    facilities?: DataLayerProperties | FeatureSetProperties;
    impedanceAttribute?: string;
    mergeSimilarPolygonRanges?: boolean;
    outputGeometryPrecision?: number;
    outputGeometryPrecisionUnits?: string;
    outputLines?: string;
    outputPolygons?: string;
    outSpatialReference?: SpatialReferenceProperties;
    overlapLines?: boolean;
    overlapPolygons?: boolean;
    pointBarriers?: DataLayerProperties | FeatureSetProperties;
    polygonBarriers?: DataLayerProperties | FeatureSetProperties;
    polylineBarriers?: DataLayerProperties | FeatureSetProperties;
    restrictionAttributes?: string[];
    restrictUTurns?: string;
    returnFacilities?: boolean;
    returnPointBarriers?: boolean;
    returnPolygonBarriers?: boolean;
    returnPolylineBarriers?: boolean;
    splitLinesAtBreaks?: boolean;
    splitPolygonsAtBreaks?: boolean;
    timeOfDay?: DateProperties;
    travelDirection?: string;
    trimOuterPolygon?: boolean;
    trimPolygonDistance?: number;
    trimPolygonDistanceUnits?: string;
    useHierarchy?: boolean;
  }

  interface ServiceAreaSolveResult extends Accessor, JSONSupport {
    facilities: Point[];
    messages: NAMessage[];
    pointBarriers: Point[];
    polygonBarriers: Polygon[];
    polylineBarriers: Polyline[];
    serviceAreaPolygons: Graphic[];
    serviceAreaPolylines: Graphic[];
  }

  interface ServiceAreaSolveResultConstructor {
    new(properties?: ServiceAreaSolveResultProperties): ServiceAreaSolveResult;

    fromJSON(json: any): ServiceAreaSolveResult;
  }

  export const ServiceAreaSolveResult: ServiceAreaSolveResultConstructor;

  interface ServiceAreaSolveResultProperties {
    facilities?: PointProperties[];
    messages?: NAMessageProperties[];
    pointBarriers?: PointProperties[];
    polygonBarriers?: PolygonProperties[];
    polylineBarriers?: PolylineProperties[];
    serviceAreaPolygons?: GraphicProperties[];
    serviceAreaPolylines?: GraphicProperties[];
  }

  interface StatisticDefinition extends Accessor {
    onStatisticField: string;
    outStatisticFieldName: string;
    statisticType: string;

    toJSON(): any;
  }

  interface StatisticDefinitionConstructor {
    new(properties?: StatisticDefinitionProperties): StatisticDefinition;
  }

  export const StatisticDefinition: StatisticDefinitionConstructor;

  interface StatisticDefinitionProperties {
    onStatisticField?: string;
    outStatisticFieldName?: string;
    statisticType?: string;
  }

  interface TrimExtendParameters extends Accessor {
    extendHow: string;
    polylines: Polyline[];
    trimExtendTo: Polyline;

    toJSON(): any;
  }

  interface TrimExtendParametersConstructor {
    new(properties?: TrimExtendParametersProperties): TrimExtendParameters;
  }

  export const TrimExtendParameters: TrimExtendParametersConstructor;

  interface TrimExtendParametersProperties {
    extendHow?: string;
    polylines?: PolylineProperties[];
    trimExtendTo?: PolylineProperties;
  }

  interface Task extends Accessor {
    requestOptions: any;
    url: string;
  }

  interface TaskConstructor {
    new(properties?: TaskProperties): Task;
  }

  export const Task: TaskConstructor;

  interface TaskProperties {
    requestOptions?: any;
    url?: string;
  }

  interface ConfigurationTask extends Task {
    url: string;

    getAllGroups(requestOptions?: any): IPromise<any[]>;
    getAllUsers(requestOptions?: any): IPromise<any[]>;
    getDataWorkspaceDetails(params: ConfigurationTaskGetDataWorkspaceDetailsParams, requestOptions?: any): IPromise<any[]>;
    getGroup(groupId: number, requestOptions?: any): IPromise<any[]>;
    getJobTypeDetails(jobTypeId: number, requestOptions?: any): IPromise<JobTypeDetails>;
    getPublicJobQueryDetails(queryId: number, requestOptions?: any): IPromise<JobQueryDetails>;
    getServiceInfo(requestOptions?: any): IPromise<WorkflowManagerServiceInfo>;
    getTableRelationshipsDetails(requestOptions?: any): IPromise<TableRelationship>;
    getUser(user: string, requestOptions?: any): IPromise<UserDetails>;
    getUserJobQueryDetails(params: ConfigurationTaskGetUserJobQueryDetailsParams, requestOptions?: any): IPromise<JobQueryDetails>;
    getVisibleJobTypes(user: string, requestOptions?: any): IPromise<JobType>;
  }

  interface ConfigurationTaskConstructor {
    new(properties?: ConfigurationTaskProperties): ConfigurationTask;
  }

  export const ConfigurationTask: ConfigurationTaskConstructor;

  interface ConfigurationTaskProperties extends TaskProperties {
    url?: string;
  }

  export interface ConfigurationTaskGetDataWorkspaceDetailsParams {
    dataWorkspaceId: string;
    user: string;
  }

  export interface ConfigurationTaskGetUserJobQueryDetailsParams {
    queryId: number;
    user: string;
  }

  export interface DataWorkspace {
    id: string;
    name: string;
  }

  export interface GroupMembership {
    id: number;
    name: string;
  }

  export interface HoldType {
    description: string;
    id: number;
    name: string;
  }

  export interface JobPriority {
    description: string;
    name: string;
    value: number;
  }

  export interface JobQuery {
    id: number;
    name: string;
  }

  export interface JobQueryContainer {
    containers: JobQueryContainer[];
    id: number;
    name: string;
    queries: JobQuery[];
  }

  export interface JobQueryDetails {
    aliases: string[];
    fields: string[];
    id: number;
    name: string;
    orderBy: string;
    tables: string[];
    where: string;
  }

  export interface JobStatus {
    caption: string;
    description: string;
    id: number;
    name: string;
  }

  export interface JobType {
    category: string;
    description: string;
    id: string;
    name: string;
    state: string;
  }

  export interface JobTypeDetails {
    defaultParentVersionName: string;
    autoExecuteCreatedJobs: boolean;
    category: string;
    defaultAssignedTo: string;
    defaultAssignedType: string;
    defaultDataWorkspaceId: string;
    defaultDescription: string;
    defaultDueDate: string;
    defaultJobDuration: number;
    canDataWorkspaceChange: boolean;
    defaultPriority: string;
    defaultStartDate: Date;
    description: string;
    id: string;
    jobNamingScheme: string;
    jobVersionNamingScheme: string;
    mxdNamingScheme: string;
    name: string;
    state: string;
  }

  export interface Privilege {
    description: string;
    id: number;
    name: string;
  }

  export interface TableRelationship {
    cardinality: string;
    linkField: string;
    tableAlias: string;
    tableName: string;
  }

  export interface UserDetails {
    lastName: string;
    address: string;
    faxNumber: string;
    firstName: string;
    fullName: string;
    groups: GroupMembership[];
    email: string;
    phoneNumber: string;
    privileges: Privilege[];
    roomNumber: string;
    userName: string;
    userQueries: JobQueryContainer[];
    zipCode: string;
  }

  export interface VersionInfo {
    access: string;
    name: string;
    parent: string;
  }

  export interface WorkflowManagerServiceInfo {
    jobPriorities: JobPriority[];
    activityTypes: ActivityType[];
    currentVersion: number;
    dataWorkspaces: DataWorkspace[];
    holdTypes: HoldType[];
    configProperties: WorkflowManagerServiceInfoConfigProperties;
    jobStatuses: JobStatus[];
    jobTypes: JobType[];
    notificationTypes: NotificationType[];
    privileges: Privilege[];
    publicQueries: JobQueryContainer[];
  }

  export interface WorkflowManagerServiceInfoConfigProperties {
    AOIOVERLAP: string;
    AOISELECTIONCOLOR: number;
    AUTOASSIGNJOB: boolean;
    AUTOCLOSEJOB: boolean;
    AUTOCOMMITWORKFLOW: boolean;
    AUTOSTATUSASSIGN: boolean;
    CONFIRMPROCEDURALCHECK: boolean;
    DEFAULT_SENDER_EMAIL: string;
    DEFAULT_SENDER_NAME: string;
    HTML_SUPPORT: string;
    JOB_ID_START_VALUE: string;
    PENDING_DAYS_USE_HOLDS: boolean;
    PROMPTSDEPWD: boolean;
    REQUIREPROCEDURALCHECKSTART: number;
    RESTRICT_AOI_OPTION: string;
    SEND_SN_CUSTOM_POST: boolean;
    SHOW_STEP_IDS: boolean;
    SHOW_STEP_PERCENT_COMPLETE: boolean;
    SMTP_PASSWORD: string;
    SHOW_PENDING_DAYS: boolean;
    SMTP_PORT: string;
    SMTP_PROTOCOL: string;
    SMTP_SERVER: string;
    SMTP_USERNAME: string;
    USE_STEP_STATUS: boolean;
    USER_STORE: string;
    USEUSERDOMAIN: boolean;
    WF_SEL_STEP_FILL_COLOR: number;
    WF_SEL_STEP_OUTLINE_COLOR: number;
    WF_SEL_STEP_OUTLINE_WIDTH: number;
    ZOOMTOAOI: boolean;
  }

  interface JobTask extends Task {
    url: string;

    addEmbeddedAttachment(params: JobTaskAddEmbeddedAttachmentParams, requestOptions?: any): IPromise<string>;
    addLinkedAttachment(params: JobTaskAddLinkedAttachmentParams, requestOptions?: any): IPromise<string>;
    addLinkedRecord(params: JobTaskAddLinkedRecordParams, requestOptions?: any): IPromise<string>;
    assignJobs(params: JobTaskAssignJobsParams, requestOptions?: any): IPromise<boolean>;
    closeJobs(params: JobTaskCloseJobsParams, requestOptions?: any): IPromise<boolean>;
    createDependency(params: JobTaskCreateDependencyParams, requestOptions?: any): IPromise<string>;
    createHold(params: JobTaskCreateHoldParams, requestOptions?: any): IPromise<string>;
    createJobs(params: JobCreationParameters, requestOptions?: any): IPromise<string[]>;
    createJobVersion(params: JobTaskCreateJobVersionParams, requestOptions?: any): IPromise<string>;
    deleteAttachment(params: JobTaskDeleteAttachmentParams, requestOptions?: any): IPromise<boolean>;
    deleteDependency(params: JobTaskDeleteDependencyParams, requestOptions?: any): IPromise<boolean>;
    deleteJobs(params: JobTaskDeleteJobsParams, requestOptions?: any): IPromise<boolean>;
    deleteLinkedRecord(params: JobTaskDeleteLinkedRecordParams, requestOptions?: any): IPromise<boolean>;
    getActivityLog(jobId: number, requestOptions?: any): IPromise<any[]>;
    getAttachmentContentUrl(params: JobTaskGetAttachmentContentUrlParams): string;
    getAttachments(jobId: number, requestOptions?: any): IPromise<JobAttachment>;
    getDependencies(jobId: number, requestOptions?: any): IPromise<JobDependency>;
    getExtendedProperties(jobId: number, requestOptions?: any): IPromise<AuxRecordContainer>;
    getHolds(jobId: number, requestOptions?: any): IPromise<any[]>;
    getJob(jobId: number, requestOptions?: any): IPromise<JobTaskJobInfo>;
    getJobIds(requestOptions?: any): IPromise<string[]>;
    getNotes(jobId: number, requestOptions?: any): IPromise<string>;
    listFieldValues(params: JobTaskListFieldValuesParams, requestOptions?: any): IPromise<FieldValue>;
    listMultiLevelFieldValues(params: JobTaskListMultiLevelFieldValuesParams, requestOptions?: any): IPromise<FieldValue>;
    logAction(params: JobTaskLogActionParams, requestOptions?: any): IPromise<boolean>;
    queryJobs(params: JobTaskQueryJobsParams, requestOptions?: any): IPromise<QueryResult>;
    queryJobsAdHoc(params: JobQueryParameters, requestOptions?: any): IPromise<QueryResult>;
    queryMultiLevelSelectedValues(params: JobTaskQueryMultiLevelSelectedValuesParams, requestOptions?: any): IPromise<string[]>;
    releaseHold(params: JobTaskReleaseHoldParams, requestOptions?: any): IPromise<boolean>;
    reopenClosedJobs(params: JobTaskReopenClosedJobsParams, requestOptions?: any): IPromise<boolean>;
    searchJobs(params: JobTaskSearchJobsParams, requestOptions?: any): IPromise<QueryResult>;
    unassignJobs(params: JobTaskUnassignJobsParams, requestOptions?: any): IPromise<boolean>;
    updateJob(params: JobUpdateParameters, requestOptions?: any): IPromise<boolean>;
    updateNotes(params: JobTaskUpdateNotesParams, requestOptions?: any): IPromise<boolean>;
    updateRecord(params: JobTaskUpdateRecordParams, requestOptions?: any): IPromise<boolean>;
  }

  interface JobTaskConstructor {
    new(properties?: JobTaskProperties): JobTask;
  }

  export const JobTask: JobTaskConstructor;

  interface JobTaskProperties extends TaskProperties {
    url?: string;
  }

  export interface ActivityType {
    desription: string;
    id: number;
    message: string;
    name: string;
  }

  export interface AuxRecord {
    displayProperty: any;
    id: number;
    recordvalues: AuxRecordValue;
  }

  export interface AuxRecordContainer {
    records: AuxRecord;
    relationshipType: string;
    tableAlias: string;
    tableName: string;
  }

  export interface AuxRecordDescription {
    properties: any;
    recordId: number;
    tableName: string;
  }

  export interface AuxRecordValue {
    filter: string;
    alias: string;
    data: any;
    dataType: string;
    displayOrder: number;
    displayType: string;
    domain: string;
    canUpdate: boolean;
    length: number;
    name: string;
    required: boolean;
    tableListClass: string;
    tableListDisplayField: string;
    tableListStoreField: string;
    userVisible: boolean;
  }

  export interface FieldValue {
    description: string;
    value: any;
  }

  export interface JobAttachment {
    filename: string;
    folder: string;
    id: number;
    storageType: string;
  }

  export interface JobCreationParameters {
    loi: Geometry;
    assignedTo: string;
    autoCommitWorkflow: boolean;
    autoExecute: boolean;
    dataWorkspaceId: string;
    description: string;
    dueDate: Date;
    jobTypeId: number;
    assignedType: string;
    name: string;
    numJobs: string;
    ownedBy: string;
    parentJobId: number;
    parentVersion: string;
    priority: number;
    startDate: Date;
    user: string;
  }

  export interface JobDependency {
    depJobId: number;
    depOnType: string;
    depOnValue: string;
    heldOnValue: number;
    holdOnType: string;
    id: number;
    jobID: string;
  }

  export interface JobTaskJobInfo {
    name: string;
    assignedTo: string;
    childJobIds: number[];
    createdBy: string;
    createdDate: Date;
    dataWorkspaceId: string;
    description: string;
    dueDate: Date;
    endDate: Date;
    id: number;
    jobTypeId: number;
    loi: Geometry;
    assignedType: string;
    ownedBy: string;
    parentJobId: number;
    parentVersion: string;
    pendingDays: number;
    percentageComplete: number;
    priority: number;
    stage: string;
    startDate: Date;
    status: number;
    versionExists: boolean;
    versionInfo: JobVersionInfo;
    versionName: string;
  }

  export interface JobQueryParameters {
    aliases: string;
    fields: string;
    orderBy: string;
    tables: string;
    where: string;
    user: string;
  }

  export interface JobTaskAddEmbeddedAttachmentParams {
    jobId: number;
    form: any;
    user: string;
  }

  export interface JobTaskAddLinkedAttachmentParams {
    jobId: number;
    attachmentType: number;
    path: string;
    user: string;
  }

  export interface JobTaskAddLinkedRecordParams {
    jobId: number;
    tableName: string;
    user: string;
  }

  export interface JobTaskAssignJobsParams {
    jobIds: number[];
    assignedType: string;
    assignedTo: string;
    user: string;
  }

  export interface JobTaskCloseJobsParams {
    jobIds: number[];
    user: string;
  }

  export interface JobTaskCreateDependencyParams {
    jobId: number;
    heldOnType: string;
    heldOnValue: number;
    depJobId: number;
    depOnType: string;
    depOnValue: number;
    user: string;
  }

  export interface JobTaskCreateHoldParams {
    jobId: number;
    holdTypeId: number;
    comments: string;
    user: string;
  }

  export interface JobTaskCreateJobVersionParams {
    jobId: number;
    name: string;
    parent: string;
    user: string;
  }

  export interface JobTaskDeleteAttachmentParams {
    jobId: number;
    attachmentId: number;
    user: string;
  }

  export interface JobTaskDeleteDependencyParams {
    jobId: number;
    dependencyId: number;
    user: string;
  }

  export interface JobTaskDeleteJobsParams {
    jobIds: number[];
    deleteHistory?: boolean;
    user: string;
  }

  export interface JobTaskDeleteLinkedRecordParams {
    jobId: number;
    tableName: string;
    recordId: number;
    user: string;
  }

  export interface JobTaskGetAttachmentContentUrlParams {
    jobId: number;
    attachmentId: number;
  }

  export interface JobTaskListFieldValuesParams {
    jobId: number;
    tableName: string;
    field: string;
    user: string;
  }

  export interface JobTaskListMultiLevelFieldValuesParams {
    field: string;
    previousSelectedValues: string[];
    user: string;
  }

  export interface JobTaskLogActionParams {
    jobId: number;
    activityTypeId: number;
    comments: string;
    user: string;
  }

  export interface JobTaskQueryJobsParams {
    queryId: number;
    user: string;
  }

  export interface JobTaskQueryMultiLevelSelectedValuesParams {
    field: string;
    user: string;
  }

  export interface JobTaskReleaseHoldParams {
    jobId: number;
    holdId: number;
  }

  export interface JobTaskReopenClosedJobsParams {
    jobIds: number[];
    user: string;
  }

  export interface JobTaskSearchJobsParams {
    text: string;
    user: string;
  }

  export interface JobTaskUnassignJobsParams {
    jobIds: number[];
    user: string;
  }

  export interface JobTaskUpdateNotesParams {
    jobId: number;
    notes: string;
    user: string;
  }

  export interface JobTaskUpdateRecordParams {
    jobId: number;
    record: AuxRecordDescription;
    user: string;
  }

  export interface JobUpdateParameters {
    ownedBy: string;
    assignedTo: string;
    dataWorkspaceId: string;
    description: string;
    dueDate: Date;
    loi: Geometry;
    jobId: number;
    name: string;
    assignedType: string;
    parentJobId: number;
    parentVersion: string;
    percent: number;
    priority: number;
    startDate: Date;
    status: number;
    versionName: string;
    user: string;
  }

  export interface JobVersionInfo {
    dataWorkspaceId: string;
    name: string;
    parent: string;
    created: boolean;
    owner: string;
  }

  export interface QueryFieldInfo {
    alias: string;
    length: string;
    name: string;
    type: string;
  }

  export interface QueryResult {
    fields: QueryFieldInfo[];
    rows: string[];
  }

  interface NotificationTask extends Task {
    url: string;

    addChangeRule(params: NotificationTaskAddChangeRuleParams, requestOptions?: any): IPromise<ChangeRule>;
    deleteChangeRule(params: NotificationTaskDeleteChangeRuleParams, requestOptions?: any): IPromise<boolean>;
    getAllChangeRules(requestOptions?: any): IPromise<ChangeRule>;
    getChangeRule(ruleId: string, requestOptions?: any): IPromise<ChangeRule>;
    getChangeRuleMatch(matchId: string, requestOptions?: any): IPromise<ChangeRule>;
    getDatabaseTime(dataWorkspaceId: string, requestOptions?: any): IPromise<Date>;
    getSessionMatches(sessionId: string, requestOptions?: any): IPromise<ChangeRuleMatch>;
    notifySession(params: NotificationTaskNotifySessionParams, requestOptions?: any): IPromise<boolean>;
    queryChangeRules(params: NotificationTaskQueryChangeRulesParams, requestOptions?: any): IPromise<ChangeRule>;
    runSpatialNotificationOnHistory(params: NotificationTaskRunSpatialNotificationOnHistoryParams, requestOptions?: any): IPromise<string>;
    sendNotification(params: NotificationTaskSendNotificationParams, requestOptions?: any): IPromise<boolean>;
    subscribeToNotification(params: NotificationTaskSubscribeToNotificationParams, requestOptions?: any): IPromise<boolean>;
    unsubscribeFromNotification(params: NotificationTaskUnsubscribeFromNotificationParams, requestOptions?: any): IPromise<boolean>;
  }

  interface NotificationTaskConstructor {
    new(properties?: NotificationTaskProperties): NotificationTask;
  }

  export const NotificationTask: NotificationTaskConstructor;

  interface NotificationTaskProperties extends TaskProperties {
    url?: string;
  }

  export interface AOIEvaluator {
    aoi: Polygon;
    inverse: boolean;
    name: string;
    relation: string;
    type: string;
    useJobAOI: boolean;
  }

  export interface ChangeRule {
    description: string;
    evaluators: any[];
    id: number;
    name: string;
    notifier: any;
    summarize: boolean;
  }

  export interface ChangeRuleMatch {
    changeTime: Date;
    changeType: string;
    dataset: string;
    dataWorkspaceId: string;
    id: string;
    jobID: string;
    ruleID: string;
  }

  export interface DatasetConfiguration {
    changeCondition: number;
    changeFields: string;
    dataset: string;
    dataWorkspaceId: string;
    name: string;
    whereConditions: WhereCondition[];
  }

  export interface DataSetEvaluator {
    dataSetConfigurations: DatasetConfiguration[];
    name: string;
    type: string;
  }

  export interface EmailNotifier {
    attachJobAttachments: boolean;
    message: string;
    name: string;
    senderEmail: string;
    senderName: string;
    subject: string;
    subscribers: string[];
    type: string;
  }

  export interface NotificationTaskAddChangeRuleParams {
    rule: ChangeRule;
    user: string;
  }

  export interface NotificationTaskDeleteChangeRuleParams {
    ruleId: string;
    user: string;
  }

  export interface NotificationTaskNotifySessionParams {
    sessionid: string;
    deleteAfter: boolean;
    user: string;
  }

  export interface NotificationTaskQueryChangeRulesParams {
    name: string;
    description: string;
    searchType: string;
    user: string;
  }

  export interface NotificationTaskRunSpatialNotificationOnHistoryParams {
    dataWorkspaceId: string;
    from: Date;
    to: Date;
    logMatches: boolean;
    send: boolean;
    user: string;
  }

  export interface NotificationTaskSendNotificationParams {
    jobId: number;
    notificationType: string;
    user: string;
  }

  export interface NotificationTaskSubscribeToNotificationParams {
    notificationTypeId: number;
    email: string;
    user: string;
  }

  export interface NotificationTaskUnsubscribeFromNotificationParams {
    notificationTypeId: number;
    email: string;
    user: string;
  }

  export interface NotificationType {
    attachJobAttachments: boolean;
    id: number;
    message: string;
    senderEmail: string;
    senderName: string;
    subject: string;
    subscribers: string[];
    type: string;
  }

  export interface WhereCondition {
    compareValue: any;
    field: string;
    operator: string;
  }

  interface ReportTask extends Task {
    url: string;

    generateReport(params: ReportTaskGenerateReportParams, requestOptions?: any): IPromise<string>;
    getAllReports(requestOptions?: any): IPromise<Report>;
    getReportContentUrl(params: ReportTaskGetReportContentUrlParams): string;
    getReportData(params: ReportTaskGetReportDataParams, requestOptions?: any): IPromise<ReportData>;
    getReportStylesheet(reportId: number, requestOptions?: any): IPromise<string>;
  }

  interface ReportTaskConstructor {
    new(properties?: ReportTaskProperties): ReportTask;
  }

  export const ReportTask: ReportTaskConstructor;

  interface ReportTaskProperties extends TaskProperties {
    url?: string;
  }

  export interface Report {
    description: string;
    hierarchy: string;
    id: number;
    name: string;
    title: string;
  }

  export interface ReportData {
    columns: string[];
    description: string;
    groups: ReportDataGroup[];
    title: string;
  }

  export interface ReportDataGroup {
    aggregateLabel: string;
    aggregateValue: string;
    row: string[];
    value: string;
  }

  export interface ReportTaskGenerateReportParams {
    reportId: number;
    user: string;
  }

  export interface ReportTaskGetReportContentUrlParams {
    reportId: number;
    user: number;
  }

  export interface ReportTaskGetReportDataParams {
    reportId: number;
    user: string;
  }

  interface TokenTask extends Task {
    parseTokens(params: TokenTaskParseTokensParams, requestOptions?: any): IPromise<string>;
  }

  interface TokenTaskConstructor {
    new(properties?: TokenTaskProperties): TokenTask;
  }

  export const TokenTask: TokenTaskConstructor;

  interface TokenTaskProperties extends TaskProperties {

  }

  export interface TokenTaskParseTokensParams {
    jobId: any;
    stringToParse: string;
    user: string;
  }

  interface WorkflowTask extends Task {
    url: string;

    canRunStep(params: WorkflowTaskCanRunStepParams, requestOptions?: any): IPromise<string>;
    executeSteps(params: WorkflowTaskExecuteStepsParams, requestOptions?: any): IPromise<ExecuteInfo>;
    getAllSteps(jobId: number, requestOptions?: any): IPromise<Step>;
    getCurrentSteps(jobId: number, requestOptions?: any): IPromise<Step>;
    getStep(params: WorkflowTaskGetStepParams, requestOptions?: any): IPromise<Step>;
    getStepDescription(params: WorkflowTaskGetStepDescriptionParams, requestOptions?: any): IPromise<string>;
    getStepFileUrl(params: WorkflowTaskGetStepFileUrlParams): string;
    getWorkflowDisplayDetails(jobId: number, requestOptions?: any): IPromise<WorkflowDisplayDetails>;
    getWorkflowImageUrl(jobId: number): string;
    markStepsAsDone(params: WorkflowTaskMarkStepsAsDoneParams, requestOptions?: any): IPromise<ExecuteInfo>;
    moveToNextStep(params: WorkflowTaskMoveToNextStepParams, requestOptions?: any): IPromise<boolean>;
    recreateWorkflow(params: WorkflowTaskRecreateWorkflowParams, requestOptions?: any): IPromise<boolean>;
    resolveConflict(params: WorkflowTaskResolveConflictParams, requestOptions?: any): IPromise<boolean>;
    setCurrentStep(params: WorkflowTaskSetCurrentStepParams, requestOptions?: any): IPromise<boolean>;
  }

  interface WorkflowTaskConstructor {
    new(properties?: WorkflowTaskProperties): WorkflowTask;
  }

  export const WorkflowTask: WorkflowTaskConstructor;

  interface WorkflowTaskProperties extends TaskProperties {
    url?: string;
  }

  export interface ExecuteInfo {
    conflicts: WorkflowConflicts;
    errorCode: number;
    errorDescription: string;
    executionResult: string;
    hasConflicts: boolean;
    hasReturnCode: boolean;
    jobID: number;
    returnCode: number;
    stepID: number;
    threwError: boolean;
  }

  export interface Step {
    hasBeenExecuted: boolean;
    assignedTo: string;
    async: boolean;
    autoRun: boolean;
    canSkip: boolean;
    canSpawnConcurrency: boolean;
    commonId: number;
    defaultPercentComplete: number;
    assignedType: string;
    hasBeenStarted: boolean;
    id: number;
    name: string;
    selfCheck: boolean;
    statusId: number;
    stepPercentComplete: number;
    notificationType: string;
    stepType: StepType;
  }

  export interface StepType {
    program: string;
    arguments: string;
    executionType: string;
    id: number;
    name: string;
    description: string;
    stepDescriptionLink: string;
    stepDescriptionType: string;
    stepIndicatorType: string;
    supportedPlatform: string;
    visible: boolean;
  }

  export interface WorkflowAnnotationDisplayDetails {
    centerX: number;
    centerY: number;
    fillColor: Color;
    height: number;
    label: string;
    labelColor: Color;
    OutlineColor: Color;
    width: number;
  }

  export interface WorkflowConflicts {
    jobID: number;
    options: WorkflowOption[];
    spawnsConcurrency: boolean;
    stepId: number;
  }

  export interface WorkflowDisplayDetails {
    annotations: WorkflowAnnotationDisplayDetails[];
    paths: WorkflowPathDisplayDetails[];
    steps: WorkflowStepDisplayDetails[];
  }

  export interface WorkflowOption {
    returnCode: number;
    steps: WorkflowStepInfo[];
  }

  export interface WorkflowPathDisplayDetails {
    destStepId: number;
    sourceStepID: number;
    label: string;
    labelColor: Color;
    labelX: number;
    labelY: number;
    lineColor: Color;
    pathObject: any;
  }

  export interface WorkflowStepDisplayDetails {
    labelColor: Color;
    centerX: number;
    fillColor: Color;
    height: number;
    label: string;
    centerY: number;
    OutlineColor: Color;
    shape: string;
    stepId: number;
    stepType: string;
    width: number;
  }

  export interface WorkflowStepInfo {
    id: number;
    name: string;
  }

  export interface WorkflowTaskCanRunStepParams {
    jobId: number;
    stepId: number;
    user: string;
  }

  export interface WorkflowTaskExecuteStepsParams {
    jobId: number;
    stepIds: number[];
    auto: boolean;
    user: string;
  }

  export interface WorkflowTaskGetStepDescriptionParams {
    jobId: number;
    stepId: number;
  }

  export interface WorkflowTaskGetStepFileUrlParams {
    jobId: number;
    stepId: number;
  }

  export interface WorkflowTaskGetStepParams {
    jobId: number;
    stepId: number;
  }

  export interface WorkflowTaskMarkStepsAsDoneParams {
    jobId: number;
    stepIds: number[];
    user: string;
  }

  export interface WorkflowTaskMoveToNextStepParams {
    jobId: number;
    stepId: number;
    returnCode: number;
    user: string;
  }

  export interface WorkflowTaskRecreateWorkflowParams {
    jobId: number;
    user: string;
  }

  export interface WorkflowTaskResolveConflictParams {
    jobId: number;
    stepId: number;
    optionReturnCode: number;
    optionStepIds: number[];
    user: string;
  }

  export interface WorkflowTaskSetCurrentStepParams {
    jobId: number;
    stepId: number;
    user: string;
  }

  interface Viewpoint extends Accessor, JSONSupport {
    camera: Camera;
    rotation: number;
    scale: number;
    targetGeometry: Geometry;

    clone(): Viewpoint;
  }

  interface ViewpointConstructor {
    new(properties?: ViewpointProperties): Viewpoint;

    fromJSON(json: any): Viewpoint;
  }

  export const Viewpoint: ViewpointConstructor;

  interface ViewpointProperties {
    camera?: CameraProperties;
    rotation?: number;
    scale?: number;
    targetGeometry?: GeometryProperties;
  }

  interface Draw extends Accessor {
    activeAction: PointDrawAction | PolygonDrawAction | PolylineDrawAction;
    view: MapView;

    create(drawAction: string): PointDrawAction | PolygonDrawAction | PolylineDrawAction;
  }

  interface DrawConstructor {
    new(properties?: DrawProperties): Draw;
  }

  export const Draw: DrawConstructor;

  interface DrawProperties {
    activeAction?: PointDrawActionProperties | PolygonDrawActionProperties | PolylineDrawActionProperties;
    view?: MapViewProperties;
  }

  interface PointDrawAction extends Accessor, Evented {
    view: MapView;

    complete(): void;

    on(name: "cursor-update", eventHandler: PointDrawActionCursorUpdateEventHandler): IHandle;
    on(name: "cursor-update", modifiers: string[], eventHandler: PointDrawActionCursorUpdateEventHandler): IHandle;
    on(name: "draw-complete", eventHandler: PointDrawActionDrawCompleteEventHandler): IHandle;
    on(name: "draw-complete", modifiers: string[], eventHandler: PointDrawActionDrawCompleteEventHandler): IHandle;
  }

  interface PointDrawActionConstructor {
    new(properties?: PointDrawActionProperties): PointDrawAction;
  }

  export const PointDrawAction: PointDrawActionConstructor;

  interface PointDrawActionProperties {
    view?: MapViewProperties;
  }

  export interface PointDrawActionCursorUpdateEvent {
    coordinates: number[];
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
  }

  export interface PointDrawActionDrawCompleteEvent {
    coordinates: number[];
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
  }

  interface PolygonDrawAction extends Accessor, Evented {
    vertices: number[][];
    view: MapView;

    canRedo(): boolean;
    canUndo(): boolean;
    complete(): void;
    redo(): void;
    undo(): void;

    on(name: "cursor-update", eventHandler: PolygonDrawActionCursorUpdateEventHandler): IHandle;
    on(name: "cursor-update", modifiers: string[], eventHandler: PolygonDrawActionCursorUpdateEventHandler): IHandle;
    on(name: "vertex-add", eventHandler: PolygonDrawActionVertexAddEventHandler): IHandle;
    on(name: "vertex-add", modifiers: string[], eventHandler: PolygonDrawActionVertexAddEventHandler): IHandle;
    on(name: "vertex-remove", eventHandler: PolygonDrawActionVertexRemoveEventHandler): IHandle;
    on(name: "vertex-remove", modifiers: string[], eventHandler: PolygonDrawActionVertexRemoveEventHandler): IHandle;
    on(name: "draw-complete", eventHandler: PolygonDrawActionDrawCompleteEventHandler): IHandle;
    on(name: "draw-complete", modifiers: string[], eventHandler: PolygonDrawActionDrawCompleteEventHandler): IHandle;
  }

  interface PolygonDrawActionConstructor {
    new(properties?: PolygonDrawActionProperties): PolygonDrawAction;
  }

  export const PolygonDrawAction: PolygonDrawActionConstructor;

  interface PolygonDrawActionProperties {
    vertices?: number[][];
    view?: MapViewProperties;
  }

  export interface PolygonDrawActionCursorUpdateEvent {
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
    vertexIndex: number;
    vertices: number[][];
  }

  export interface PolygonDrawActionDrawCompleteEvent {
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
    vertices: number[][];
  }

  export interface PolygonDrawActionVertexAddEvent {
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
    vertexIndex: number;
    vertices: number[][];
  }

  export interface PolygonDrawActionVertexRemoveEvent {
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
    vertexIndex: number;
    vertices: number[][];
  }

  interface PolylineDrawAction extends Accessor, Evented {
    vertices: number[][];
    view: MapView;

    canRedo(): boolean;
    canUndo(): boolean;
    complete(): void;
    redo(): void;
    undo(): void;

    on(name: "cursor-update", eventHandler: PolylineDrawActionCursorUpdateEventHandler): IHandle;
    on(name: "cursor-update", modifiers: string[], eventHandler: PolylineDrawActionCursorUpdateEventHandler): IHandle;
    on(name: "vertex-add", eventHandler: PolylineDrawActionVertexAddEventHandler): IHandle;
    on(name: "vertex-add", modifiers: string[], eventHandler: PolylineDrawActionVertexAddEventHandler): IHandle;
    on(name: "vertex-remove", eventHandler: PolylineDrawActionVertexRemoveEventHandler): IHandle;
    on(name: "vertex-remove", modifiers: string[], eventHandler: PolylineDrawActionVertexRemoveEventHandler): IHandle;
    on(name: "draw-complete", eventHandler: PolylineDrawActionDrawCompleteEventHandler): IHandle;
    on(name: "draw-complete", modifiers: string[], eventHandler: PolylineDrawActionDrawCompleteEventHandler): IHandle;
  }

  interface PolylineDrawActionConstructor {
    new(properties?: PolylineDrawActionProperties): PolylineDrawAction;
  }

  export const PolylineDrawAction: PolylineDrawActionConstructor;

  interface PolylineDrawActionProperties {
    vertices?: number[][];
    view?: MapViewProperties;
  }

  export interface PolylineDrawActionCursorUpdateEvent {
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
    vertexIndex: number;
    vertices: number[][];
  }

  export interface PolylineDrawActionDrawCompleteEvent {
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
    vertices: number[][];
  }

  export interface PolylineDrawActionVertexAddEvent {
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
    vertexIndex: number;
    vertices: number[][];
  }

  export interface PolylineDrawActionVertexRemoveEvent {
    defaultPrevented: boolean;
    preventDefault: Function;
    type: string;
    vertexIndex: number;
    vertices: number[][];
  }

  interface externalRenderers {
    add(view: SceneView, renderer: ExternalRenderer): void;
    fromRenderCoordinates(view: SceneView, srcCoordinates: number[] | any, srcStart: number, destCoordinates: number[] | any, destStart: number, destSpatialReference: SpatialReference, count: number): number[] | any;
    remove(view: SceneView, renderer: ExternalRenderer): void;
    renderCoordinateTransformAt(view: SceneView, origin: number[] | any, srcSpatialReference?: SpatialReference, dest?: number[] | any): number[] | any;
    requestRender(view: SceneView): void;
    toRenderCoordinates(view: SceneView, srcCoordinates: number[] | any, srcStart: number, srcSpatialReference: SpatialReference, destCoordinates: number[] | any, destStart: number, count: number): number[] | any;
  }

  export const externalRenderers: externalRenderers;

  export interface ColorAndIntensity {
    color: any;
    intensity: number;
  }

  export interface ExternalRenderer {
    setup(): void;
    render(): void;
    dispose(): void;
  }

  export interface RenderCamera {
    viewMatrix: any;
    viewInverseTransposeMatrix: any;
    projectionMatrix: any;
    eye: any;
    center: any;
    up: any;
    near: number;
    far: number;
    fovX: number;
    fovY: number;
  }

  export interface RenderContext {
    gl: any;
    camera: RenderCamera;
    sunLight: SunLight;

    resetWebGLState(): void;
    bindRenderTarget(): void;
  }

  export interface SunLight {
    direction: any;
    diffuse: ColorAndIntensity;
    ambient: ColorAndIntensity;
  }

  interface BreakpointsOwner {
    breakpoints: BreakpointsOwnerBreakpoints;
    heightBreakpoint: string;
    orientation: string;
    widthBreakpoint: string;
  }

  interface BreakpointsOwnerConstructor {
    new(): BreakpointsOwner;
  }

  export const BreakpointsOwner: BreakpointsOwnerConstructor;

  interface BreakpointsOwnerProperties {
    breakpoints?: BreakpointsOwnerBreakpoints;
    heightBreakpoint?: string;
    orientation?: string;
    widthBreakpoint?: string;
  }

  export interface BreakpointsOwnerBreakpoints {
    xsmall: number;
    small: number;
    medium: number;
    large: number;
  }

  interface DOMContainer {
    container: HTMLDivElement | string;
    height: number;
    popup: Popup;
    resizing: boolean;
    size: number[];
    suspended: boolean;
    ui: DefaultUI;
    width: number;
  }

  interface DOMContainerConstructor {
    new(): DOMContainer;
  }

  export const DOMContainer: DOMContainerConstructor;

  interface DOMContainerProperties {
    container?: HTMLDivElement | string;
    height?: number;
    popup?: PopupProperties;
    resizing?: boolean;
    size?: number[];
    suspended?: boolean;
    ui?: DefaultUIProperties;
    width?: number;
  }

  interface CSVLayerView extends LayerView {
    highlight(target?: Graphic | Graphic[]): any;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<number>;
    queryFeatures(params?: Query): IPromise<Graphic[]>;
    queryObjectIds(params?: Query): IPromise<number[]>;
  }

  interface CSVLayerViewConstructor {
    new(properties?: CSVLayerViewProperties): CSVLayerView;
  }

  export const CSVLayerView: CSVLayerViewConstructor;

  interface CSVLayerViewProperties extends LayerViewProperties {

  }

  interface FeatureLayerView extends LayerView {
    highlight(target?: Graphic | Graphic[] | number | number[]): any;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<number>;
    queryFeatures(params?: Query): IPromise<Graphic[]>;
    queryObjectIds(params?: Query): IPromise<number[]>;
  }

  interface FeatureLayerViewConstructor {
    new(properties?: FeatureLayerViewProperties): FeatureLayerView;
  }

  export const FeatureLayerView: FeatureLayerViewConstructor;

  interface FeatureLayerViewProperties extends LayerViewProperties {

  }

  interface GraphicsLayerView extends LayerView {
    highlight(target?: Graphic | Graphic[] | number | number[]): any;
    queryGraphics(): IPromise<Graphic[]>;
  }

  interface GraphicsLayerViewConstructor {
    new(properties?: GraphicsLayerViewProperties): GraphicsLayerView;
  }

  export const GraphicsLayerView: GraphicsLayerViewConstructor;

  interface GraphicsLayerViewProperties extends LayerViewProperties {

  }

  interface ImageryLayerView extends LayerView {
    pixelData: ImageryLayerViewPixelData;
  }

  interface ImageryLayerViewConstructor {
    new(properties?: ImageryLayerViewProperties): ImageryLayerView;
  }

  export const ImageryLayerView: ImageryLayerViewConstructor;

  interface ImageryLayerViewProperties extends LayerViewProperties {
    pixelData?: ImageryLayerViewPixelData;
  }

  export interface ImageryLayerViewPixelData {
    extent?: Extent;
    pixelBlock: PixelBlock;
  }

  interface LayerView extends Accessor, corePromise {
    layer: Layer;
    suspended: boolean;
    updating: boolean;
    visible: boolean;
  }

  interface LayerViewConstructor {
    new(properties?: LayerViewProperties): LayerView;
  }

  export const LayerView: LayerViewConstructor;

  interface LayerViewProperties {
    layer?: LayerProperties;
    suspended?: boolean;
    updating?: boolean;
    visible?: boolean;
  }

  interface SceneLayerView extends LayerView {
    highlight(target?: Graphic | Graphic[] | number | number[]): any;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<number>;
    queryFeatures(params?: Query): IPromise<FeatureSet>;
    queryObjectIds(params?: Query): IPromise<number[]>;
  }

  interface SceneLayerViewConstructor {
    new(properties?: SceneLayerViewProperties): SceneLayerView;
  }

  export const SceneLayerView: SceneLayerViewConstructor;

  interface SceneLayerViewProperties extends LayerViewProperties {

  }

  interface StreamLayerView extends LayerView, Evented {
    connectionError: Error;
    connectionStatus: string;
    filter: StreamLayerViewFilter;
    graphics: Collection<Graphic>;

    connect(): IPromise<any>;
    disconnect(): void;
    updateFilter(filter: StreamLayerViewUpdateFilterFilter): IPromise<any>;

    on(name: "data-received", eventHandler: StreamLayerViewDataReceivedEventHandler): IHandle;
    on(name: "data-received", modifiers: string[], eventHandler: StreamLayerViewDataReceivedEventHandler): IHandle;
  }

  interface StreamLayerViewConstructor {
    new(properties?: StreamLayerViewProperties): StreamLayerView;
  }

  export const StreamLayerView: StreamLayerViewConstructor;

  interface StreamLayerViewProperties extends LayerViewProperties {
    connectionError?: Error;
    connectionStatus?: string;
    filter?: StreamLayerViewFilter;
    graphics?: CollectionProperties<GraphicProperties>;
  }

  export interface StreamLayerViewDataReceivedEvent {
  }

  export interface StreamLayerViewFilter {
    geometry?: Extent;
    where?: string;
  }

  export interface StreamLayerViewUpdateFilterFilter {
    geometry?: Extent;
    where?: string;
  }

  interface MapView extends View, BreakpointsOwner {
    center: Point;
    constraints: MapViewConstraints;
    extent: Extent;
    highlightOptions: MapViewHighlightOptions;
    resizeAlign: string;
    rotation: number;
    scale: number;
    viewpoint: Viewpoint;
    zoom: number;

    focus(): void;
    goTo(target: number[] | Geometry | Geometry[] | Graphic | Graphic[] | Viewpoint | MapViewGoToTarget, options?: MapViewGoToOptions): IPromise<ViewAnimation>;
    hasEventListener(type: string): boolean;
    hitTest(screenPoint: MapViewHitTestScreenPoint): IPromise<HitTestResult>;
    on(type: string | string[], modifiersOrHandler: string[] | EventHandler, handler?: EventHandler): IHandle;
    toMap(screenPoint: MapViewToMapScreenPoint): Point;
    toScreen(point: Point, screenPoint?: ScreenPoint): ScreenPoint;

    on(name: "resize", eventHandler: MapViewResizeEventHandler): IHandle;
    on(name: "resize", modifiers: string[], eventHandler: MapViewResizeEventHandler): IHandle;
    on(name: "layerview-create", eventHandler: MapViewLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: MapViewLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: MapViewLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: MapViewLayerviewDestroyEventHandler): IHandle;
    on(name: "click", eventHandler: MapViewClickEventHandler): IHandle;
    on(name: "click", modifiers: string[], eventHandler: MapViewClickEventHandler): IHandle;
    on(name: "double-click", eventHandler: MapViewDoubleClickEventHandler): IHandle;
    on(name: "double-click", modifiers: string[], eventHandler: MapViewDoubleClickEventHandler): IHandle;
    on(name: "hold", eventHandler: MapViewHoldEventHandler): IHandle;
    on(name: "hold", modifiers: string[], eventHandler: MapViewHoldEventHandler): IHandle;
    on(name: "drag", eventHandler: MapViewDragEventHandler): IHandle;
    on(name: "drag", modifiers: string[], eventHandler: MapViewDragEventHandler): IHandle;
    on(name: "mouse-wheel", eventHandler: MapViewMouseWheelEventHandler): IHandle;
    on(name: "mouse-wheel", modifiers: string[], eventHandler: MapViewMouseWheelEventHandler): IHandle;
    on(name: "key-down", eventHandler: MapViewKeyDownEventHandler): IHandle;
    on(name: "key-down", modifiers: string[], eventHandler: MapViewKeyDownEventHandler): IHandle;
    on(name: "key-up", eventHandler: MapViewKeyUpEventHandler): IHandle;
    on(name: "key-up", modifiers: string[], eventHandler: MapViewKeyUpEventHandler): IHandle;
    on(name: "pointer-down", eventHandler: MapViewPointerDownEventHandler): IHandle;
    on(name: "pointer-down", modifiers: string[], eventHandler: MapViewPointerDownEventHandler): IHandle;
    on(name: "pointer-move", eventHandler: MapViewPointerMoveEventHandler): IHandle;
    on(name: "pointer-move", modifiers: string[], eventHandler: MapViewPointerMoveEventHandler): IHandle;
    on(name: "pointer-up", eventHandler: MapViewPointerUpEventHandler): IHandle;
    on(name: "pointer-up", modifiers: string[], eventHandler: MapViewPointerUpEventHandler): IHandle;
  }

  interface MapViewConstructor {
    new(properties?: MapViewProperties): MapView;
  }

  export const MapView: MapViewConstructor;

  interface MapViewProperties extends ViewProperties, BreakpointsOwnerProperties {
    center?: PointProperties;
    constraints?: MapViewConstraints;
    extent?: ExtentProperties;
    highlightOptions?: MapViewHighlightOptions;
    resizeAlign?: string;
    rotation?: number;
    scale?: number;
    viewpoint?: ViewpointProperties;
    zoom?: number;
  }

  export interface MapViewClickEvent {
    button: number;
    mapPoint: Point;
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface MapViewDoubleClickEvent {
    button: number;
    mapPoint: Point;
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface MapViewDragEvent {
    action: string;
    native: any;
    origin: MapViewDragEventOrigin;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface HitTestResult {
    results: HitTestResultResults[];
  }

  export interface MapViewHoldEvent {
    button: number;
    mapPoint: Point;
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface MapViewKeyDownEvent {
    key: string;
    native: any;
    repeat: boolean;
    stopPropagation: Function;
    timestamp: number;
    type: string;
  }

  export interface MapViewKeyUpEvent {
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
  }

  export interface MapViewLayerviewCreateEvent {
    layer: Layer;
    layerView: LayerView;
  }

  export interface MapViewLayerviewDestroyEvent {
    layer: Layer;
    layerView: LayerView;
  }

  export interface MapViewConstraints {
    lods?: LOD[];
    minScale?: number;
    maxScale?: number;
    minZoom?: number;
    maxZoom?: number;
    snapToZoom?: boolean;
    rotationEnabled?: boolean;
    effectiveLODs?: LOD[];
    effectiveMinZoom?: number;
    effectiveMaxZoom?: number;
    effectiveMinScale?: number;
    effectiveMaxScale?: number;
  }

  export interface MapViewGoToOptions {
    animate?: boolean;
    duration?: number;
    easing?: string | Function;
  }

  export interface MapViewGoToTarget {
    target?: number[] | Geometry | Geometry[] | Graphic | Graphic[] | Viewpoint;
    center?: number[];
    scale?: number;
    zoom?: number;
  }

  export interface MapViewHighlightOptions {
    color?: Color;
    haloOpacity?: number;
    fillOpacity?: number;
  }

  export interface MapViewHitTestScreenPoint {
    x: number;
    y: number;
  }

  export interface MapViewToMapScreenPoint {
    x: number;
    y: number;
  }

  export interface MapViewMouseWheelEvent {
    deltaY: number;
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface MapViewPointerDownEvent {
    native: any;
    pointerId: number;
    pointerType: string;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface MapViewPointerMoveEvent {
    native: any;
    pointerId: number;
    pointerType: string;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface MapViewPointerUpEvent {
    native: any;
    pointerId: number;
    pointerType: string;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface MapViewResizeEvent {
    height: number;
    oldHeight: number;
    oldWidth: number;
    width: number;
  }

  export interface MapViewDragEventOrigin {
    x: number;
    y: number;
  }

  export interface HitTestResultResults {
    graphic: Graphic;
    mapPoint: Point;
  }

  interface SceneView extends View, BreakpointsOwner {
    camera: Camera;
    center: Point;
    clippingArea: Extent;
    constraints: SceneViewConstraints;
    environment: SceneViewEnvironment;
    extent: Extent;
    highlightOptions: SceneViewHighlightOptions;
    qualityProfile: string;
    scale: number;
    viewingMode: string;
    viewpoint: Viewpoint;
    zoom: number;

    focus(): void;
    goTo(target: number[] | Geometry | Geometry[] | Graphic | Graphic[] | Viewpoint | Camera | SceneViewGoToTarget, options?: SceneViewGoToOptions): IPromise<any>;
    hasEventListener(type: string): boolean;
    hitTest(screenPoint: SceneViewHitTestScreenPoint): IPromise<SceneViewHitTestResult>;
    on(type: string | string[], modifiersOrHandler: string[] | EventHandler, handler?: EventHandler): IHandle;
    toMap(screenPoint: SceneViewToMapScreenPoint, mapPoint?: Point): Point;
    toScreen(point: Point, screenPoint?: ScreenPoint): ScreenPoint;

    on(name: "resize", eventHandler: SceneViewResizeEventHandler): IHandle;
    on(name: "resize", modifiers: string[], eventHandler: SceneViewResizeEventHandler): IHandle;
    on(name: "layerview-create", eventHandler: SceneViewLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: SceneViewLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: SceneViewLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: SceneViewLayerviewDestroyEventHandler): IHandle;
    on(name: "click", eventHandler: SceneViewClickEventHandler): IHandle;
    on(name: "click", modifiers: string[], eventHandler: SceneViewClickEventHandler): IHandle;
    on(name: "double-click", eventHandler: SceneViewDoubleClickEventHandler): IHandle;
    on(name: "double-click", modifiers: string[], eventHandler: SceneViewDoubleClickEventHandler): IHandle;
    on(name: "hold", eventHandler: SceneViewHoldEventHandler): IHandle;
    on(name: "hold", modifiers: string[], eventHandler: SceneViewHoldEventHandler): IHandle;
    on(name: "drag", eventHandler: SceneViewDragEventHandler): IHandle;
    on(name: "drag", modifiers: string[], eventHandler: SceneViewDragEventHandler): IHandle;
    on(name: "mouse-wheel", eventHandler: SceneViewMouseWheelEventHandler): IHandle;
    on(name: "mouse-wheel", modifiers: string[], eventHandler: SceneViewMouseWheelEventHandler): IHandle;
    on(name: "key-down", eventHandler: SceneViewKeyDownEventHandler): IHandle;
    on(name: "key-down", modifiers: string[], eventHandler: SceneViewKeyDownEventHandler): IHandle;
    on(name: "key-up", eventHandler: SceneViewKeyUpEventHandler): IHandle;
    on(name: "key-up", modifiers: string[], eventHandler: SceneViewKeyUpEventHandler): IHandle;
    on(name: "pointer-down", eventHandler: SceneViewPointerDownEventHandler): IHandle;
    on(name: "pointer-down", modifiers: string[], eventHandler: SceneViewPointerDownEventHandler): IHandle;
    on(name: "pointer-move", eventHandler: SceneViewPointerMoveEventHandler): IHandle;
    on(name: "pointer-move", modifiers: string[], eventHandler: SceneViewPointerMoveEventHandler): IHandle;
    on(name: "pointer-up", eventHandler: SceneViewPointerUpEventHandler): IHandle;
    on(name: "pointer-up", modifiers: string[], eventHandler: SceneViewPointerUpEventHandler): IHandle;
  }

  interface SceneViewConstructor {
    new(properties?: SceneViewProperties): SceneView;
  }

  export const SceneView: SceneViewConstructor;

  interface SceneViewProperties extends ViewProperties, BreakpointsOwnerProperties {
    camera?: CameraProperties;
    center?: PointProperties;
    clippingArea?: ExtentProperties;
    constraints?: SceneViewConstraintsProperties;
    environment?: SceneViewEnvironmentProperties;
    extent?: ExtentProperties;
    highlightOptions?: SceneViewHighlightOptions;
    qualityProfile?: string;
    scale?: number;
    viewingMode?: string;
    viewpoint?: ViewpointProperties;
    zoom?: number;
  }

  export interface SceneViewClickEvent {
    button: number;
    mapPoint: Point;
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface SceneViewDoubleClickEvent {
    button: number;
    mapPoint: Point;
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface SceneViewDragEvent {
    action: string;
    native: any;
    origin: SceneViewDragEventOrigin;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export type EasingFunction = (t: number, duration: number) => number;

  export interface SceneViewHitTestResult {
    results: SceneViewHitTestResultResults[];
  }

  export interface SceneViewHoldEvent {
    button: number;
    mapPoint: Point;
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface SceneViewKeyDownEvent {
    key: string;
    native: any;
    repeat: boolean;
    stopPropagation: Function;
    timestamp: number;
    type: string;
  }

  export interface SceneViewKeyUpEvent {
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
  }

  export interface SceneViewLayerviewCreateEvent {
    layer: Layer;
    layerView: LayerView;
  }

  export interface SceneViewLayerviewDestroyEvent {
    layer: Layer;
    layerView: LayerView;
  }

  export interface SceneViewMouseWheelEvent {
    deltaY: number;
    native: any;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface SceneViewPointerDownEvent {
    native: any;
    pointerId: number;
    pointerType: string;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface SceneViewPointerMoveEvent {
    native: any;
    pointerId: number;
    pointerType: string;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface SceneViewPointerUpEvent {
    native: any;
    pointerId: number;
    pointerType: string;
    stopPropagation: Function;
    timestamp: number;
    type: string;
    x: number;
    y: number;
  }

  export interface SceneViewResizeEvent {
    height: number;
    oldHeight: number;
    oldWidth: number;
    width: number;
  }

  export interface SceneViewConstraintsProperties {
    altitude?: SceneViewConstraintsAltitudeProperties;
    clipDistance?: SceneViewConstraintsClipDistanceProperties;
    collision?: SceneViewConstraintsCollision;
    tilt?: SceneViewConstraintsTiltProperties;
  }
  export interface SceneViewConstraints extends Accessor {
    altitude?: SceneViewConstraintsAltitude;
    clipDistance?: SceneViewConstraintsClipDistance;
    collision?: SceneViewConstraintsCollision;
    tilt?: SceneViewConstraintsTilt;
  }

  export interface SceneViewConstraintsAltitudeProperties {
    min?: number;
    max?: number;
  }
  export interface SceneViewConstraintsAltitude extends Accessor {
    min?: number;
    max?: number;
  }

  export interface SceneViewConstraintsClipDistanceProperties {
    near?: number;
    far?: number;
    mode?: string;
  }
  export interface SceneViewConstraintsClipDistance extends Accessor {
    near?: number;
    far?: number;
    mode?: string;
  }

  export interface SceneViewConstraintsCollision {
    enabled?: boolean;
  }

  export interface SceneViewConstraintsTiltProperties {
    max?: number;
    mode?: string;
  }
  export interface SceneViewConstraintsTilt extends Accessor {
    max?: number;
    mode?: string;
  }

  export interface SceneViewEnvironmentProperties {
    lighting?: SceneViewEnvironmentLightingProperties;
    atmosphereEnabled?: boolean;
    atmosphere?: SceneViewEnvironmentAtmosphereProperties;
    starsEnabled?: boolean;
  }
  export interface SceneViewEnvironment extends Accessor {
    lighting?: SceneViewEnvironmentLighting;
    atmosphereEnabled?: boolean;
    atmosphere?: SceneViewEnvironmentAtmosphere;
    starsEnabled?: boolean;
  }

  export interface SceneViewEnvironmentAtmosphereProperties {
    quality?: string;
  }
  export interface SceneViewEnvironmentAtmosphere extends Accessor {
    quality?: string;
  }

  export interface SceneViewEnvironmentLightingProperties {
    date?: DateProperties;
    directShadowsEnabled?: boolean;
    ambientOcclusionEnabled?: boolean;
    cameraTrackingEnabled?: boolean;
  }
  export interface SceneViewEnvironmentLighting extends Accessor {
    date?: Date;
    directShadowsEnabled?: boolean;
    ambientOcclusionEnabled?: boolean;
    cameraTrackingEnabled?: boolean;
  }

  export interface SceneViewGoToOptions {
    animate?: boolean;
    speedFactor?: number;
    duration?: number;
    maxDuration?: number;
    easing?: string | EasingFunction;
  }

  export interface SceneViewGoToTarget {
    target?: number[] | Geometry | Geometry[] | Graphic | Graphic[] | Viewpoint | Camera;
    center?: number[];
    scale?: number;
    zoom?: number;
    heading?: number;
    tilt?: number;
    position?: number;
  }

  export interface SceneViewHighlightOptions {
    color?: Color;
    haloOpacity?: number;
    fillOpacity?: number;
  }

  export interface SceneViewHitTestScreenPoint {
    x: number;
    y: number;
  }

  export interface SceneViewToMapScreenPoint {
    x: number;
    y: number;
  }

  export interface SceneViewDragEventOrigin {
    x: number;
    y: number;
  }

  export interface SceneViewHitTestResultResults {
    graphic: Graphic;
    mapPoint: Point;
  }

  interface DefaultUI extends UI {
    components: string[];
  }

  interface DefaultUIConstructor {
    new(properties?: DefaultUIProperties): DefaultUI;
  }

  export const DefaultUI: DefaultUIConstructor;

  interface DefaultUIProperties extends UIProperties {
    components?: string[];
  }

  interface UI extends Accessor {
    container: HTMLElement;
    height: number;
    padding: any | number;
    view: MapView | SceneView;
    width: number;

    add(component: Widget | HTMLElement | string | any[] | UIAddComponent, position?: string | UIAddPosition): void;
    empty(position?: string): void;
    move(component: Widget | HTMLElement | string | any[] | UIMoveComponent, position?: string): void;
    remove(component: Widget | HTMLElement | string | any[]): void;
  }

  interface UIConstructor {
    new(properties?: UIProperties): UI;
  }

  export const UI: UIConstructor;

  interface UIProperties {
    container?: HTMLElement;
    height?: number;
    padding?: any | number;
    view?: MapViewProperties | SceneViewProperties;
    width?: number;
  }

  export interface UIAddComponent {
    component: Widget | HTMLElement | string;
    position?: string;
    index?: number;
  }

  export interface UIAddPosition {
    position?: string;
    index: number;
  }

  export interface UIMoveComponent {
    component: Widget | HTMLElement | string;
    position?: string;
  }

  interface View extends Accessor, corePromise, DOMContainer {
    allLayerViews: Collection<LayerView>;
    animation: ViewAnimation;
    graphics: Collection<Graphic>;
    interacting: boolean;
    layerViews: Collection<LayerView>;
    map: Map;
    padding: ViewPadding;
    ready: boolean;
    spatialReference: SpatialReference;
    stationary: boolean;
    type: string;
    updating: boolean;

    whenLayerView(layer: Layer): IPromise<LayerView>;
  }

  interface ViewConstructor {
    new(properties?: ViewProperties): View;
  }

  export const View: ViewConstructor;

  interface ViewProperties extends DOMContainerProperties {
    allLayerViews?: CollectionProperties<LayerViewProperties>;
    animation?: ViewAnimationProperties;
    graphics?: CollectionProperties<GraphicProperties>;
    interacting?: boolean;
    layerViews?: CollectionProperties<LayerViewProperties>;
    map?: MapProperties;
    padding?: ViewPadding;
    ready?: boolean;
    spatialReference?: SpatialReferenceProperties;
    stationary?: boolean;
    type?: string;
    updating?: boolean;
  }

  export interface ViewPadding {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  }

  interface ViewAnimation extends Accessor, corePromise {
    state: string;
    target: Viewpoint;

    finish(): void;
    stop(): void;
  }

  interface ViewAnimationConstructor {
    new(properties?: ViewAnimationProperties): ViewAnimation;
  }

  export const ViewAnimation: ViewAnimationConstructor;

  interface ViewAnimationProperties {
    state?: string;
    target?: ViewpointProperties;
  }

  interface WebMap extends Map, corePromise {
    applicationProperties: any;
    bookmarks: any[];
    initialViewProperties: InitialViewProperties;
    loaded: boolean;
    loadError: Error;
    loadStatus: string;
    portalItem: PortalItem;
    presentation: any;
    sourceVersion: WebMapSourceVersion;
    tables: any[];
    widgets: any;

    load(): IPromise<any>;
  }

  interface WebMapConstructor {
    new(properties?: WebMapProperties): WebMap;
  }

  export const WebMap: WebMapConstructor;

  interface WebMapProperties extends MapProperties {
    applicationProperties?: any;
    bookmarks?: any[];
    initialViewProperties?: InitialViewPropertiesProperties;
    loaded?: boolean;
    loadError?: Error;
    loadStatus?: string;
    portalItem?: PortalItemProperties;
    presentation?: any;
    sourceVersion?: WebMapSourceVersion;
    tables?: any[];
    widgets?: any;
  }

  interface InitialViewProperties extends Accessor, corePromise {
    spatialReference: SpatialReference;
    viewpoint: Viewpoint;

    clone(): InitialViewProperties;
  }

  interface InitialViewPropertiesConstructor {
    new(properties?: InitialViewPropertiesProperties): InitialViewProperties;
  }

  export const InitialViewProperties: InitialViewPropertiesConstructor;

  interface InitialViewPropertiesProperties {
    spatialReference?: SpatialReferenceProperties;
    viewpoint?: ViewpointProperties;
  }

  export interface WebMapSourceVersion {
    major: number;
    minor: number;
  }

  interface WebScene extends Map, corePromise {
    clippingArea: Extent;
    clippingEnabled: boolean;
    heightModelInfo: HeightModelInfo;
    initialViewProperties: websceneInitialViewProperties;
    loaded: boolean;
    loadError: Error;
    loadStatus: string;
    portalItem: PortalItem;
    presentation: Presentation;
    sourceVersion: WebSceneSourceVersion;

    load(): IPromise<any>;
    save(options?: WebSceneSaveOptions): IPromise<PortalItem>;
    saveAs(portalItem: PortalItem, options?: WebSceneSaveAsOptions): IPromise<PortalItem>;
    toJSON(): any;
    updateFrom(view: SceneView, options?: WebSceneUpdateFromOptions): void;
  }

  interface WebSceneConstructor {
    new(properties?: WebSceneProperties): WebScene;


    fromJSON(json: any): any;
  }

  export const WebScene: WebSceneConstructor;

  interface WebSceneProperties extends MapProperties {
    clippingArea?: ExtentProperties;
    clippingEnabled?: boolean;
    heightModelInfo?: HeightModelInfoProperties;
    initialViewProperties?: websceneInitialViewPropertiesProperties;
    loaded?: boolean;
    loadError?: Error;
    loadStatus?: string;
    portalItem?: PortalItemProperties;
    presentation?: PresentationProperties;
    sourceVersion?: WebSceneSourceVersion;
  }

  interface Environment extends Accessor {
    lighting: Lighting;

    clone(): Environment;
  }

  interface EnvironmentConstructor {
    new(properties?: EnvironmentProperties): Environment;
  }

  export const Environment: EnvironmentConstructor;

  interface EnvironmentProperties {
    lighting?: LightingProperties;
  }

  interface websceneInitialViewProperties extends Accessor, corePromise {
    environment: Environment;
    spatialReference: SpatialReference;
    viewingMode: string;
    viewpoint: Viewpoint;

    clone(): websceneInitialViewProperties;
  }

  interface websceneInitialViewPropertiesConstructor {
    new(properties?: websceneInitialViewPropertiesProperties): websceneInitialViewProperties;
  }

  export const websceneInitialViewProperties: websceneInitialViewPropertiesConstructor;

  interface websceneInitialViewPropertiesProperties {
    environment?: EnvironmentProperties;
    spatialReference?: SpatialReferenceProperties;
    viewingMode?: string;
    viewpoint?: ViewpointProperties;
  }

  interface Lighting extends Accessor, corePromise {
    date: Date;
    directShadowsEnabled: boolean;
    displayUTCOffset: number;

    clone(): Lighting;
  }

  interface LightingConstructor {
    new(properties?: LightingProperties): Lighting;
  }

  export const Lighting: LightingConstructor;

  interface LightingProperties {
    date?: DateProperties;
    directShadowsEnabled?: boolean;
    displayUTCOffset?: number;
  }

  interface Presentation extends Accessor {
    slides: Collection<Slide>;

    clone(): Presentation;
  }

  interface PresentationConstructor {
    new(properties?: PresentationProperties): Presentation;
  }

  export const Presentation: PresentationConstructor;

  interface PresentationProperties {
    slides?: CollectionProperties<SlideProperties>;
  }

  interface Slide extends Accessor {
    basemap: Basemap | string;
    description: SlideDescription;
    environment: Environment;
    id: string;
    thumbnail: SlideThumbnail;
    title: SlideTitle;
    viewpoint: Viewpoint;
    visibleLayers: Collection<SlideVisibleLayers>;

    applyTo(view: SceneView, options?: SlideApplyToOptions): IPromise<Slide>;
    clone(): Slide;
    updateFrom(view: SceneView, options?: SlideUpdateFromOptions): IPromise<Slide>;
  }

  interface SlideConstructor {
    new(properties?: SlideProperties): Slide;


    createFrom(view: SceneView, options?: SlideCreateFromOptions): IPromise<Slide>;
  }

  export const Slide: SlideConstructor;

  interface SlideProperties {
    basemap?: BasemapProperties | string;
    description?: SlideDescriptionProperties;
    environment?: EnvironmentProperties;
    id?: string;
    thumbnail?: SlideThumbnailProperties;
    title?: SlideTitleProperties;
    viewpoint?: ViewpointProperties;
    visibleLayers?: CollectionProperties<SlideVisibleLayersProperties>;
  }

  export interface SlideApplyToOptions {
    animate: boolean;
    speedFactor?: number;
    duration?: number;
    maxDuration?: number;
    easing?: string | EasingFunction;
  }

  export interface SlideCreateFromOptions {
    screenshot: SlideCreateFromOptionsScreenshot;
  }

  export interface SlideCreateFromOptionsScreenshot {
    format: string;
    quality: number;
    width: number;
    height: number;
  }

  export interface SlideDescriptionProperties {
    text?: string;
  }
  export interface SlideDescription extends Accessor {
    text?: string;
  }

  export interface SlideThumbnailProperties {
    url?: string;
  }
  export interface SlideThumbnail extends Accessor {
    url?: string;
  }

  export interface SlideTitleProperties {
    text?: string;
  }
  export interface SlideTitle extends Accessor {
    text?: string;
  }

  export interface SlideUpdateFromOptions {
    screenshot: SlideUpdateFromOptionsScreenshot;
  }

  export interface SlideUpdateFromOptionsScreenshot {
    format: string;
    quality: number;
    width: number;
    height: number;
  }

  export interface SlideVisibleLayersProperties {
    id?: string;
  }
  export interface SlideVisibleLayers extends Accessor {
    id: string;
  }

  export interface WebSceneSaveAsOptions {
    folder?: PortalFolder;
    ignoreUnsupported?: boolean;
  }

  export interface WebSceneSaveOptions {
    ignoreUnsupported?: boolean;
  }

  export interface WebSceneSourceVersion {
    major: number;
    minor: number;
  }

  export interface WebSceneUpdateFromOptions {
    environmentExcluded?: boolean;
    viewpointExcluded?: boolean;
  }

  interface Attribution extends Widget {
    view: MapView | SceneView;
    viewModel: AttributionViewModel;

    render(): any;
  }

  interface AttributionConstructor {
    new(properties?: AttributionProperties): Attribution;
  }

  export const Attribution: AttributionConstructor;

  interface AttributionProperties extends WidgetProperties {
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: AttributionViewModel;
  }

  interface AttributionViewModel {
    attributionText: string;
    itemDelimiter: string;
    state: string;
    view: MapView | SceneView;
  }

  interface AttributionViewModelConstructor {
    new(properties?: any): AttributionViewModel;
  }

  export const AttributionViewModel: AttributionViewModelConstructor;

  interface BasemapGallery extends Widget {
    activeBasemap: Basemap;
    source: LocalBasemapsSource | PortalBasemapsSource;
    view: MapView | SceneView;
    viewModel: BasemapGalleryViewModel;

    render(): any;
  }

  interface BasemapGalleryConstructor {
    new(properties?: BasemapGalleryProperties): BasemapGallery;
  }

  export const BasemapGallery: BasemapGalleryConstructor;

  interface BasemapGalleryProperties extends WidgetProperties {
    activeBasemap?: BasemapProperties;
    source?: LocalBasemapsSource | PortalBasemapsSource;
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: BasemapGalleryViewModelProperties;
  }

  interface BasemapGalleryItem {
    basemap: Basemap;
    error: Error;
    state: string;
    view: MapView | SceneView;
  }

  export const BasemapGalleryItem: BasemapGalleryItem;

  interface BasemapGalleryViewModel extends Accessor {
    activeBasemap: Basemap;
    items: Collection<BasemapGalleryItem>;
    source: LocalBasemapsSource | PortalBasemapsSource;
    state: string;
    view: MapView | SceneView;

    basemapEquals(basemap1: Basemap, basemap2: Basemap): boolean;
  }

  interface BasemapGalleryViewModelConstructor {
    new(properties?: BasemapGalleryViewModelProperties): BasemapGalleryViewModel;
  }

  export const BasemapGalleryViewModel: BasemapGalleryViewModelConstructor;

  interface BasemapGalleryViewModelProperties {
    activeBasemap?: BasemapProperties;
    items?: CollectionProperties<BasemapGalleryItem>;
    source?: LocalBasemapsSource | PortalBasemapsSource;
    state?: string;
    view?: MapViewProperties | SceneViewProperties;
  }

  interface LocalBasemapsSource {
    basemaps: Collection<Basemap>;
    state: string;
  }

  export const LocalBasemapsSource: LocalBasemapsSource;

  interface PortalBasemapsSource {
    basemaps: Collection<Basemap>;
    filterFunction: Function;
    portal: Portal;
    query: any | string;
    state: string;
  }

  export const PortalBasemapsSource: PortalBasemapsSource;

  interface BasemapToggle extends Widget {
    activeBasemap: Basemap;
    nextBasemap: Basemap | string;
    titleVisible: boolean;
    view: MapView | SceneView;
    viewModel: BasemapToggleViewModel;

    render(): any;
    toggle(): void;
  }

  interface BasemapToggleConstructor {
    new(properties?: BasemapToggleProperties): BasemapToggle;
  }

  export const BasemapToggle: BasemapToggleConstructor;

  interface BasemapToggleProperties extends WidgetProperties {
    activeBasemap?: BasemapProperties;
    nextBasemap?: BasemapProperties | string;
    titleVisible?: boolean;
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: BasemapToggleViewModelProperties;
  }

  interface BasemapToggleViewModel extends Accessor, Evented {
    activeBasemap: Basemap;
    nextBasemap: Basemap | string;
    state: string;
    view: MapView | SceneView;

    toggle(): void;
  }

  interface BasemapToggleViewModelConstructor {
    new(properties?: BasemapToggleViewModelProperties): BasemapToggleViewModel;


    getThumbnailUrl(basemap: Basemap): string;
  }

  export const BasemapToggleViewModel: BasemapToggleViewModelConstructor;

  interface BasemapToggleViewModelProperties {
    activeBasemap?: BasemapProperties;
    nextBasemap?: BasemapProperties | string;
    state?: string;
    view?: MapViewProperties | SceneViewProperties;
  }

  interface ColorSlider extends Accessor, Widgette {
    handlesVisible: boolean;
    histogram: HistogramResult;
    histogramVisible: boolean;
    histogramWidth: number;
    labelsVisible: boolean;
    maxValue: number;
    minValue: number;
    numHandles: number;
    statistics: ColorSliderStatistics;
    statisticsVisible: boolean;
    syncedHandles: boolean;
    ticksVisible: boolean;
    values: ColorSliderValues[];
    visualVariable: ColorVisualVariable;
  }

  interface ColorSliderConstructor {
    new(properties?: ColorSliderProperties): ColorSlider;
  }

  export const ColorSlider: ColorSliderConstructor;

  interface ColorSliderProperties extends WidgetteProperties {
    handlesVisible?: boolean;
    histogram?: HistogramResult;
    histogramVisible?: boolean;
    histogramWidth?: number;
    labelsVisible?: boolean;
    maxValue?: number;
    minValue?: number;
    numHandles?: number;
    statistics?: ColorSliderStatistics;
    statisticsVisible?: boolean;
    syncedHandles?: boolean;
    ticksVisible?: boolean;
    values?: ColorSliderValues[];
    visualVariable?: ColorVisualVariable;
  }

  export interface ColorSliderStatistics {
    avg: number;
    max: number;
    min: number;
    stddev: number;
  }

  export interface ColorSliderValues {
    color: Color;
    value: number;
    label: string;
  }

  interface Compass extends Widget {
    view: MapView | SceneView;
    viewModel: CompassViewModel;

    render(): any;
    reset(): void;
  }

  interface CompassConstructor {
    new(properties?: CompassProperties): Compass;
  }

  export const Compass: CompassConstructor;

  interface CompassProperties extends WidgetProperties {
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: CompassViewModelProperties;
  }

  interface CompassViewModel extends Accessor {
    orientation: any;
    state: string;
    view: MapView | SceneView;

    reset(): void;
  }

  interface CompassViewModelConstructor {
    new(properties?: CompassViewModelProperties): CompassViewModel;
  }

  export const CompassViewModel: CompassViewModelConstructor;

  interface CompassViewModelProperties {
    orientation?: any;
    state?: string;
    view?: MapViewProperties | SceneViewProperties;
  }

  interface Expand extends Widget {
    autoCollapse: boolean;
    collapseIconClass: string;
    collapseTooltip: string;
    content: Node | string | Widget;
    expanded: boolean;
    expandIconClass: string;
    expandTooltip: string;
    iconNumber: string;
    view: MapView | SceneView;
    viewModel: ExpandViewModel;

    collapse(): void;
    expand(): void;
    render(): any;
    toggle(): void;
  }

  interface ExpandConstructor {
    new(properties?: ExpandProperties): Expand;
  }

  export const Expand: ExpandConstructor;

  interface ExpandProperties extends WidgetProperties {
    autoCollapse?: boolean;
    collapseIconClass?: string;
    collapseTooltip?: string;
    content?: Node | string | WidgetProperties;
    expanded?: boolean;
    expandIconClass?: string;
    expandTooltip?: string;
    iconNumber?: string;
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: ExpandViewModelProperties;
  }

  interface ExpandViewModel extends Accessor {
    autoCollapse: boolean;
    expanded: boolean;
    state: string;
    view: MapView | SceneView;
  }

  interface ExpandViewModelConstructor {
    new(properties?: ExpandViewModelProperties): ExpandViewModel;
  }

  export const ExpandViewModel: ExpandViewModelConstructor;

  interface ExpandViewModelProperties {
    autoCollapse?: boolean;
    expanded?: boolean;
    state?: string;
    view?: MapViewProperties | SceneViewProperties;
  }

  interface Home extends Widget {
    view: MapView | SceneView;
    viewModel: HomeViewModel;
    viewpoint: Viewpoint;

    go(): void;
    render(): any;
  }

  interface HomeConstructor {
    new(properties?: HomeProperties): Home;
  }

  export const Home: HomeConstructor;

  interface HomeProperties extends WidgetProperties {
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: HomeViewModelProperties;
    viewpoint?: ViewpointProperties;
  }

  interface HomeViewModel extends Accessor, Evented {
    state: string;
    view: MapView | SceneView;
    viewpoint: Viewpoint;

    go(): void;
  }

  interface HomeViewModelConstructor {
    new(properties?: HomeViewModelProperties): HomeViewModel;
  }

  export const HomeViewModel: HomeViewModelConstructor;

  interface HomeViewModelProperties {
    state?: string;
    view?: MapViewProperties | SceneViewProperties;
    viewpoint?: ViewpointProperties;
  }

  interface LayerList extends Widget {
    createActionsFunction: Function;
    listItemCreatedFunction: Function;
    operationalItems: Collection<ListItem>;
    statusIndicatorsVisible: boolean;
    view: MapView | SceneView;
    viewModel: LayerListViewModel;

    render(): any;
    triggerAction(action: Action, item: ListItem): void;
  }

  interface LayerListConstructor {
    new(properties?: LayerListProperties): LayerList;
  }

  export const LayerList: LayerListConstructor;

  interface LayerListProperties extends WidgetProperties {
    createActionsFunction?: Function;
    listItemCreatedFunction?: Function;
    operationalItems?: CollectionProperties<ListItem>;
    statusIndicatorsVisible?: boolean;
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: LayerListViewModelProperties;
  }

  interface LayerListViewModel extends Accessor {
    createActionsFunction: Function;
    listItemCreatedFunction: Function;
    operationalItems: Collection<ListItem>;
    state: string;
    view: MapView | SceneView;

    triggerAction(action: Action, item: ListItem): void;
  }

  interface LayerListViewModelConstructor {
    new(properties?: LayerListViewModelProperties): LayerListViewModel;
  }

  export const LayerListViewModel: LayerListViewModelConstructor;

  interface LayerListViewModelProperties {
    createActionsFunction?: Function;
    listItemCreatedFunction?: Function;
    operationalItems?: CollectionProperties<ListItem>;
    state?: string;
    view?: MapViewProperties | SceneViewProperties;
  }

  interface ListItem {
    actionsOpen: boolean;
    actionsSections: Collection<Collection<Action>>;
    children: Collection<ListItem>;
    error: Error;
    layer: Layer;
    layerView: LayerView;
    open: boolean;
    parent: ListItem;
    title: string;
    updating: boolean;
    view: MapView | SceneView;
    visibilityMode: string;
    visible: boolean;
    visibleAtCurrentScale: boolean;

    clone(): ListItem;
  }

  interface ListItemConstructor {
    new(): ListItem;
  }

  export const ListItem: ListItemConstructor;

  interface Legend extends Widget {
    layerInfos: LegendLayerInfos[];
    view: MapView | SceneView;

    render(): any;
  }

  interface LegendConstructor {
    new(properties?: LegendProperties): Legend;
  }

  export const Legend: LegendConstructor;

  interface LegendProperties extends WidgetProperties {
    layerInfos?: LegendLayerInfos[];
    view?: MapViewProperties | SceneViewProperties;
  }

  export interface LegendLayerInfos {
    title?: string;
    layer: Layer;
  }

  interface Locate extends Widget {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    view: MapView | SceneView;
    viewModel: LocateViewModel;

    locate(): IPromise<any>;
    render(): any;
  }

  interface LocateConstructor {
    new(properties?: LocateProperties): Locate;
  }

  export const Locate: LocateConstructor;

  interface LocateProperties extends WidgetProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    graphic?: GraphicProperties;
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: LocateViewModelProperties;
  }

  interface LocateViewModel extends Accessor, Evented, GeolocationPositioning {
    state: string;

    locate(): IPromise<any>;
  }

  interface LocateViewModelConstructor {
    new(properties?: LocateViewModelProperties): LocateViewModel;
  }

  export const LocateViewModel: LocateViewModelConstructor;

  interface LocateViewModelProperties extends GeolocationPositioningProperties {
    state?: string;
  }

  interface NavigationToggle extends Widget {
    layout: string;
    view: SceneView;
    viewModel: NavigationToggleViewModel;

    render(): any;
    toggle(): void;
  }

  interface NavigationToggleConstructor {
    new(properties?: NavigationToggleProperties): NavigationToggle;
  }

  export const NavigationToggle: NavigationToggleConstructor;

  interface NavigationToggleProperties extends WidgetProperties {
    layout?: string;
    view?: SceneViewProperties;
    viewModel?: NavigationToggleViewModelProperties;
  }

  interface NavigationToggleViewModel extends Accessor {
    navigationMode: string;
    state: string;
    view: SceneView;

    toggle(): void;
  }

  interface NavigationToggleViewModelConstructor {
    new(properties?: NavigationToggleViewModelProperties): NavigationToggleViewModel;
  }

  export const NavigationToggleViewModel: NavigationToggleViewModelConstructor;

  interface NavigationToggleViewModelProperties {
    navigationMode?: string;
    state?: string;
    view?: SceneViewProperties;
  }

  interface Popup extends Widget, Evented {
    actions: Collection<Action>;
    autoCloseEnabled: boolean;
    collapsed: boolean;
    content: string | Node;
    currentDockPosition: string;
    dockEnabled: boolean;
    dockOptions: PopupDockOptions;
    featureCount: number;
    features: Graphic[];
    highlightEnabled: boolean;
    location: Point;
    promises: IPromise<any>[];
    selectedFeature: Graphic;
    selectedFeatureIndex: number;
    title: string;
    view: MapView | SceneView;
    viewModel: PopupViewModel;
    visible: boolean;

    clear(): void;
    close(): void;
    next(): PopupViewModel;
    open(options?: PopupOpenOptions): void;
    previous(): PopupViewModel;
    render(): any;
    reposition(): void;
    triggerAction(actionIndex: number): void;
  }

  interface PopupConstructor {
    new(properties?: PopupProperties): Popup;
  }

  export const Popup: PopupConstructor;

  interface PopupProperties extends WidgetProperties {
    actions?: CollectionProperties<ActionProperties>;
    autoCloseEnabled?: boolean;
    collapsed?: boolean;
    content?: string | Node;
    currentDockPosition?: string;
    dockEnabled?: boolean;
    dockOptions?: PopupDockOptions;
    featureCount?: number;
    features?: GraphicProperties[];
    highlightEnabled?: boolean;
    location?: PointProperties;
    promises?: IPromise<any>[];
    selectedFeature?: GraphicProperties;
    selectedFeatureIndex?: number;
    title?: string;
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: PopupViewModelProperties;
    visible?: boolean;
  }

  interface PopupViewModel extends Accessor, Evented {
    actions: Collection<Collection<Action>>;
    autoCloseEnabled: boolean;
    content: string | Node;
    featureCount: number;
    features: Graphic[];
    highlightEnabled: boolean;
    location: Point;
    pendingPromisesCount: number;
    promiseCount: number;
    promises: IPromise<any>[];
    selectedFeature: Graphic;
    selectedFeatureIndex: number;
    state: string;
    title: string;
    view: MapView | SceneView;
    visible: boolean;

    clear(): void;
    next(): PopupViewModel;
    previous(): PopupViewModel;
    triggerAction(actionIndex: number): void;
  }

  interface PopupViewModelConstructor {
    new(properties?: PopupViewModelProperties): PopupViewModel;
  }

  export const PopupViewModel: PopupViewModelConstructor;

  interface PopupViewModelProperties {
    actions?: CollectionProperties<CollectionProperties<ActionProperties>>;
    autoCloseEnabled?: boolean;
    content?: string | Node;
    featureCount?: number;
    features?: GraphicProperties[];
    highlightEnabled?: boolean;
    location?: PointProperties;
    pendingPromisesCount?: number;
    promiseCount?: number;
    promises?: IPromise<any>[];
    selectedFeature?: GraphicProperties;
    selectedFeatureIndex?: number;
    state?: string;
    title?: string;
    view?: MapViewProperties | SceneViewProperties;
    visible?: boolean;
  }

  export interface PopupDockOptions {
    breakpoint?: boolean | PopupDockOptionsBreakpoint;
    buttonEnabled?: boolean;
    position?: string | Function;
  }

  export interface PopupDockOptionsBreakpoint {
    width?: number;
    height?: number;
  }

  export interface PopupOpenOptions {
    title?: string;
    content?: string;
    location?: Geometry;
    features?: Graphic[];
    promises?: IPromise<any>[];
    featureMenuOpen?: boolean;
    updateLocationEnabled?: boolean;
    collapsed?: boolean;
  }

  interface Print extends Widget {
    printServiceUrl: string;
    view: MapView;
    viewModel: PrintViewModel;

    render(): any;
  }

  interface PrintConstructor {
    new(properties?: PrintProperties): Print;
  }

  export const Print: PrintConstructor;

  interface PrintProperties extends WidgetProperties {
    printServiceUrl?: string;
    view?: MapViewProperties;
    viewModel?: PrintViewModelProperties;
  }

  interface PrintViewModel extends Accessor {
    printServiceUrl: string;
    updateDelay: number;
    view: MapView;

    print(printTemplate: PrintTemplate): IPromise<any>;
  }

  interface PrintViewModelConstructor {
    new(properties?: PrintViewModelProperties): PrintViewModel;
  }

  export const PrintViewModel: PrintViewModelConstructor;

  interface PrintViewModelProperties {
    printServiceUrl?: string;
    updateDelay?: number;
    view?: MapViewProperties;
  }

  interface ScaleBar extends Widget {
    style: string;
    unit: string;
    view: MapView;
    viewModel: ScaleBarViewModel;

    render(): any;
  }

  interface ScaleBarConstructor {
    new(properties?: ScaleBarProperties): ScaleBar;
  }

  export const ScaleBar: ScaleBarConstructor;

  interface ScaleBarProperties extends WidgetProperties {
    style?: string;
    unit?: string;
    view?: MapViewProperties;
    viewModel?: ScaleBarViewModelProperties;
  }

  interface ScaleBarViewModel extends Accessor {
    view: MapView;
  }

  interface ScaleBarViewModelConstructor {
    new(properties?: ScaleBarViewModelProperties): ScaleBarViewModel;
  }

  export const ScaleBarViewModel: ScaleBarViewModelConstructor;

  interface ScaleBarViewModelProperties {
    view?: MapViewProperties;
  }

  interface Search extends Widget {
    activeSource: FeatureLayer | Locator;
    activeSourceIndex: number;
    allPlaceholder: string;
    autoSelect: boolean;
    defaultSource: LocatorSource | FeatureLayerSource;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    popupEnabled: boolean;
    popupOpenOnSelect: boolean;
    popupTemplate: PopupTemplate;
    resultGraphic: Graphic;
    resultGraphicEnabled: boolean;
    results: any[];
    searchAllEnabled: boolean;
    searching: boolean;
    searchTerm: string;
    selectedResult: SearchResult;
    sources: Collection<FeatureLayerSource | LocatorSource>;
    suggestions: SuggestResult[];
    suggestionsEnabled: boolean;
    view: MapView | SceneView;
    viewModel: SearchViewModel;

    blur(): void;
    clear(): void;
    focus(): void;
    render(): any;
    search(searchTerm?: string | Geometry | SuggestResult | number[][]): IPromise<SearchResponse>;
    suggest(value?: string): IPromise<SuggestResponse>;
  }

  interface SearchConstructor {
    new(properties?: SearchProperties): Search;
  }

  export const Search: SearchConstructor;

  interface SearchProperties extends WidgetProperties {
    activeSource?: FeatureLayerProperties | LocatorProperties;
    activeSourceIndex?: number;
    allPlaceholder?: string;
    autoSelect?: boolean;
    defaultSource?: LocatorSource | FeatureLayerSource;
    maxResults?: number;
    maxSuggestions?: number;
    minSuggestCharacters?: number;
    popupEnabled?: boolean;
    popupOpenOnSelect?: boolean;
    popupTemplate?: PopupTemplateProperties;
    resultGraphic?: GraphicProperties;
    resultGraphicEnabled?: boolean;
    results?: any[];
    searchAllEnabled?: boolean;
    searching?: boolean;
    searchTerm?: string;
    selectedResult?: SearchResult;
    sources?: CollectionProperties<FeatureLayerSource | LocatorSource>;
    suggestions?: SuggestResult[];
    suggestionsEnabled?: boolean;
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: SearchViewModelProperties;
  }

  interface SearchViewModel extends Accessor, Evented {
    activeSource: FeatureLayer | Locator;
    activeSourceIndex: number;
    allPlaceholder: string;
    autoSelect: boolean;
    defaultSource: SearchViewModelFeatureLayerSource | SearchViewModelLocatorSource;
    maxInputLength: number;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    placeholder: string;
    popupEnabled: boolean;
    popupOpenOnSelect: boolean;
    popupTemplate: PopupTemplate;
    resultGraphic: Graphic;
    resultGraphicEnabled: boolean;
    results: any[];
    searchAllEnabled: boolean;
    searchTerm: string;
    selectedResult: any;
    sources: Collection<FeatureLayerSource | LocatorSource>;
    suggestionDelay: number;
    suggestions: SearchViewModelSuggestResult[];
    suggestionsEnabled: boolean;
    view: MapView | SceneView;

    clear(): void;
    search(searchTerm?: string | Geometry | SearchViewModelSuggestResult | number[][]): IPromise<SearchViewModelSearchResponse>;
    suggest(value?: string): IPromise<SearchViewModelSuggestResponse>;

    on(name: "search-clear", eventHandler: SearchViewModelSearchClearEventHandler): IHandle;
    on(name: "search-clear", modifiers: string[], eventHandler: SearchViewModelSearchClearEventHandler): IHandle;
    on(name: "search-start", eventHandler: SearchViewModelSearchStartEventHandler): IHandle;
    on(name: "search-start", modifiers: string[], eventHandler: SearchViewModelSearchStartEventHandler): IHandle;
    on(name: "suggest-start", eventHandler: SearchViewModelSuggestStartEventHandler): IHandle;
    on(name: "suggest-start", modifiers: string[], eventHandler: SearchViewModelSuggestStartEventHandler): IHandle;
    on(name: "load", eventHandler: SearchViewModelLoadEventHandler): IHandle;
    on(name: "load", modifiers: string[], eventHandler: SearchViewModelLoadEventHandler): IHandle;
    on(name: "search-complete", eventHandler: SearchViewModelSearchCompleteEventHandler): IHandle;
    on(name: "search-complete", modifiers: string[], eventHandler: SearchViewModelSearchCompleteEventHandler): IHandle;
    on(name: "select-result", eventHandler: SearchViewModelSelectResultEventHandler): IHandle;
    on(name: "select-result", modifiers: string[], eventHandler: SearchViewModelSelectResultEventHandler): IHandle;
    on(name: "suggest-complete", eventHandler: SearchViewModelSuggestCompleteEventHandler): IHandle;
    on(name: "suggest-complete", modifiers: string[], eventHandler: SearchViewModelSuggestCompleteEventHandler): IHandle;
  }

  interface SearchViewModelConstructor {
    new(properties?: SearchViewModelProperties): SearchViewModel;
  }

  export const SearchViewModel: SearchViewModelConstructor;

  interface SearchViewModelProperties {
    activeSource?: FeatureLayerProperties | LocatorProperties;
    activeSourceIndex?: number;
    allPlaceholder?: string;
    autoSelect?: boolean;
    defaultSource?: SearchViewModelFeatureLayerSource | SearchViewModelLocatorSource;
    maxInputLength?: number;
    maxResults?: number;
    maxSuggestions?: number;
    minSuggestCharacters?: number;
    placeholder?: string;
    popupEnabled?: boolean;
    popupOpenOnSelect?: boolean;
    popupTemplate?: PopupTemplateProperties;
    resultGraphic?: GraphicProperties;
    resultGraphicEnabled?: boolean;
    results?: any[];
    searchAllEnabled?: boolean;
    searchTerm?: string;
    selectedResult?: any;
    sources?: CollectionProperties<FeatureLayerSource | LocatorSource>;
    suggestionDelay?: number;
    suggestions?: SearchViewModelSuggestResult[];
    suggestionsEnabled?: boolean;
    view?: MapViewProperties | SceneViewProperties;
  }

  export interface SearchViewModelFeatureLayerSource {
    popup: Popup;
    autoNavigate: boolean;
    exactMatch: boolean;
    featureLayer: FeatureLayer;
    filter: SearchViewModelFeatureLayerSourceFilter;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    name: string;
    outFields: string[];
    placeholder: string;
    displayField: string;
    popupEnabled: boolean;
    popupOpenOnSelect: boolean;
    prefix: string;
    resultGraphicEnabled: boolean;
    resultSymbol: Symbol;
    searchFields: string[];
    suffix: string;
    suggestionsEnabled: boolean;
    suggestionTemplate: string;
    withinViewEnabled: boolean;
    zoomScale: number;
  }

  export interface SearchViewModelLoadEvent {
  }

  export interface SearchViewModelLocatorSource {
    placeholder: string;
    autoNavigate: boolean;
    countryCode: string;
    filter: SearchViewModelLocatorSourceFilter;
    localSearchOptions: SearchViewModelLocatorSourceLocalSearchOptions;
    locationToAddressDistance: number;
    locator: Locator;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    name: string;
    outFields: string[];
    categories: string[];
    popup: Popup;
    popupEnabled: boolean;
    popupOpenOnSelect: boolean;
    prefix: string;
    resultGraphicEnabled: boolean;
    resultSymbol: Symbol;
    searchTemplate: string;
    singleLineFieldName: string;
    suggestionsEnabled: boolean;
    suffix: string;
    withinViewEnabled: boolean;
    zoomScale: number;
  }

  export interface SearchViewModelSearchClearEvent {
  }

  export interface SearchViewModelSearchCompleteEvent {
    activeSourceIndex: number;
    errors: Error[];
    numResults: number;
    results: SearchViewModelSearchCompleteEventResults[];
    searchTerm: string;
  }

  export interface SearchViewModelSearchResponse {
    activeSourceIndex: number;
    errors: Error[];
    numResults: number;
    searchTerm: string;
    results: SearchViewModelSearchResponseResults[];
  }

  export interface SearchViewModelSearchResult {
    extent: Extent;
    feature: Graphic;
    name: string;
  }

  export interface SearchViewModelSearchStartEvent {
  }

  export interface SearchViewModelSelectResultEvent {
    result: SearchViewModelSelectResultEventResult;
    source: any;
    sourceIndex: number;
  }

  export interface SearchViewModelSuggestCompleteEvent {
    activeSourceIndex: number;
    errors: Error[];
    numResults: number;
    results: SearchViewModelSuggestCompleteEventResults[];
    searchTerm: string;
  }

  export interface SearchViewModelSuggestResponse {
    activeSourceIndex: number;
    errors: Error[];
    numResults: number;
    searchTerm: string;
    results: SearchViewModelSuggestResponseResults[];
  }

  export interface SearchViewModelSuggestResult {
    key: string;
    text: string;
    sourceIndex: number;
  }

  export interface SearchViewModelSuggestStartEvent {
  }

  export interface SearchViewModelFeatureLayerSourceFilter {
    where: string;
    geometry: Geometry;
  }

  export interface SearchViewModelLocatorSourceFilter {
    where: string;
    geometry: Geometry;
  }

  export interface SearchViewModelLocatorSourceLocalSearchOptions {
    distance: number;
    minScale: number;
  }

  export interface SearchViewModelSearchCompleteEventResults {
    results: SearchResult[];
    sourceIndex: number;
    source: any[];
  }

  export interface SearchViewModelSearchResponseResults {
    results: SearchViewModelSearchResult[];
    sourceIndex: number;
    source: any;
  }

  export interface SearchViewModelSelectResultEventResult {
    extent: Extent;
    feature: Graphic;
    name: string;
  }

  export interface SearchViewModelSuggestCompleteEventResults {
    results: SearchViewModelSuggestResult[];
    sourceIndex: number;
    source: any;
  }

  export interface SearchViewModelSuggestResponseResults {
    results: SearchViewModelSuggestResult[];
    sourceIndex: number;
    source: any;
  }

  export interface FeatureLayerSource {
    popup: Popup;
    autoNavigate: boolean;
    exactMatch: boolean;
    featureLayer: FeatureLayer;
    filter: FeatureLayerSourceFilter;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    name: string;
    outFields: string[];
    placeholder: string;
    displayField: string;
    popupEnabled: boolean;
    popupOpenOnSelect: boolean;
    prefix: string;
    resultGraphicEnabled: boolean;
    resultSymbol: Symbol;
    searchFields: string[];
    suffix: string;
    suggestionsEnabled: boolean;
    suggestionTemplate: string;
    withinViewEnabled: boolean;
    zoomScale: number;
  }

  export interface LocatorSource {
    placeholder: string;
    autoNavigate: boolean;
    countryCode: string;
    filter: LocatorSourceFilter;
    localSearchOptions: LocatorSourceLocalSearchOptions;
    locationToAddressDistance: number;
    locator: Locator;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    name: string;
    outFields: string[];
    categories: string[];
    popup: Popup;
    popupEnabled: boolean;
    popupOpenOnSelect: boolean;
    prefix: string;
    resultGraphicEnabled: boolean;
    resultSymbol: Symbol;
    searchTemplate: string;
    singleLineFieldName: string;
    suggestionsEnabled: boolean;
    suffix: string;
    withinViewEnabled: boolean;
    zoomScale: number;
  }

  export interface SearchResponse {
    activeSourceIndex: number;
    errors: Error[];
    numResults: number;
    searchTerm: string;
    results: SearchResponseResults[];
  }

  export interface SearchResult {
    extent: Extent;
    feature: Graphic;
    name: string;
  }

  export interface SuggestResponse {
    activeSourceIndex: number;
    errors: Error[];
    numResults: number;
    searchTerm: string;
    results: SuggestResponseResults[];
  }

  export interface SuggestResult {
    key: string;
    text: string;
    sourceIndex: number;
  }

  export interface FeatureLayerSourceFilter {
    where: string;
    geometry: Geometry;
  }

  export interface LocatorSourceFilter {
    where: string;
    geometry: Geometry;
  }

  export interface LocatorSourceLocalSearchOptions {
    distance: number;
    minScale: number;
  }

  export interface SearchResponseResults {
    results: SearchResult[];
    sourceIndex: number;
    source: any;
  }

  export interface SuggestResponseResults {
    results: SuggestResult[];
    sourceIndex: number;
    source: any;
  }

  interface SizeSlider extends Accessor, Widgette {
    handlesVisible: boolean;
    histogram: HistogramResult;
    histogramVisible: boolean;
    histogramWidth: number;
    labelsVisible: boolean;
    maxSize: number;
    maxValue: number;
    minSize: number;
    minValue: number;
    statistics: SizeSliderStatistics;
    statisticsVisible: boolean;
    symbol: SimpleMarkerSymbol | SimpleLineSymbol;
    ticksVisible: boolean;
    values: number[];
    visualVariable: SizeVisualVariable;
  }

  interface SizeSliderConstructor {
    new(properties?: SizeSliderProperties): SizeSlider;
  }

  export const SizeSlider: SizeSliderConstructor;

  interface SizeSliderProperties extends WidgetteProperties {
    handlesVisible?: boolean;
    histogram?: HistogramResult;
    histogramVisible?: boolean;
    histogramWidth?: number;
    labelsVisible?: boolean;
    maxSize?: number;
    maxValue?: number;
    minSize?: number;
    minValue?: number;
    statistics?: SizeSliderStatistics;
    statisticsVisible?: boolean;
    symbol?: SimpleMarkerSymbolProperties | SimpleLineSymbolProperties;
    ticksVisible?: boolean;
    values?: number[];
    visualVariable?: SizeVisualVariable;
  }

  export interface SizeSliderStatistics {
    avg?: number;
    max: number;
    min: number;
  }

  interface SketchViewModel extends Accessor, Evented {
    graphic: Graphic;
    pointSymbol: SimpleMarkerSymbol;
    polygonSymbol: SimpleFillSymbol;
    polylineSymbol: SimpleLineSymbol;
    state: string;
    view: MapView;

    create(drawAction: string): void;
    reset(): void;
  }

  interface SketchViewModelConstructor {
    new(properties?: SketchViewModelProperties): SketchViewModel;
  }

  export const SketchViewModel: SketchViewModelConstructor;

  interface SketchViewModelProperties {
    graphic?: GraphicProperties;
    pointSymbol?: SimpleMarkerSymbolProperties;
    polygonSymbol?: SimpleFillSymbolProperties;
    polylineSymbol?: SimpleLineSymbolProperties;
    state?: string;
    view?: MapViewProperties;
  }

  interface GeolocationPositioning {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    view: MapView | SceneView;
  }

  interface GeolocationPositioningConstructor {
    new(): GeolocationPositioning;
  }

  export const GeolocationPositioning: GeolocationPositioningConstructor;

  interface GeolocationPositioningProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    graphic?: GraphicProperties;
    view?: MapViewProperties | SceneViewProperties;
  }

  interface widget {
    accessibleHandler(): Function;
    join(...classNames: string[]): string;
    renderable(propertyName?: string | string[]): Function;
    tsx(selector: string, properties?: any, children?: any): any;
    vmEvent(eventNames: string | string[]): Function;
  }

  export const widget: widget;

  interface Track extends Widget {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    tracking: boolean;
    view: MapView | SceneView;
    viewModel: TrackViewModel;

    render(): any;
    start(): void;
    stop(): void;
  }

  interface TrackConstructor {
    new(properties?: TrackProperties): Track;
  }

  export const Track: TrackConstructor;

  interface TrackProperties extends WidgetProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    graphic?: GraphicProperties;
    tracking?: boolean;
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: TrackViewModelProperties;
  }

  interface TrackViewModel extends Accessor, Evented, GeolocationPositioning {
    state: string;
    tracking: boolean;

    start(): void;
    stop(): void;
  }

  interface TrackViewModelConstructor {
    new(properties?: TrackViewModelProperties): TrackViewModel;
  }

  export const TrackViewModel: TrackViewModelConstructor;

  interface TrackViewModelProperties extends GeolocationPositioningProperties {
    state?: string;
    tracking?: boolean;
  }

  interface UnivariateColorSizeSlider extends Accessor, Widgette {
    handlesVisible: boolean;
    histogram: HistogramResult;
    histogramVisible: boolean;
    histogramWidth: number;
    labelsVisible: boolean;
    maxSize: number;
    maxValue: number;
    minSize: number;
    minValue: number;
    statistics: UnivariateColorSizeSliderStatistics;
    statisticsVisible: boolean;
    ticksVisible: boolean;
    values: number[];
    visualVariables: any[];
  }

  interface UnivariateColorSizeSliderConstructor {
    new(properties?: UnivariateColorSizeSliderProperties): UnivariateColorSizeSlider;
  }

  export const UnivariateColorSizeSlider: UnivariateColorSizeSliderConstructor;

  interface UnivariateColorSizeSliderProperties extends WidgetteProperties {
    handlesVisible?: boolean;
    histogram?: HistogramResult;
    histogramVisible?: boolean;
    histogramWidth?: number;
    labelsVisible?: boolean;
    maxSize?: number;
    maxValue?: number;
    minSize?: number;
    minValue?: number;
    statistics?: UnivariateColorSizeSliderStatistics;
    statisticsVisible?: boolean;
    ticksVisible?: boolean;
    values?: number[];
    visualVariables?: any[];
  }

  export interface UnivariateColorSizeSliderStatistics {
    avg: number;
    max: number;
    min: number;
    stddev: number;
  }

  interface Widget extends Accessor, Evented {
    container: string | HTMLElement;
    destroyed: boolean;
    id: string;

    destroy(): void;
    own(handles: WatchHandle | WatchHandle[]): void;
    postInitialize(): void;
    renderNow(): void;
    scheduleRender(): void;
    startup(): void;
  }

  interface WidgetConstructor {
    new(properties?: WidgetProperties): Widget;
  }

  export const Widget: WidgetConstructor;

  interface WidgetProperties {
    container?: string | HTMLElement;
    destroyed?: boolean;
    id?: string;
  }

  interface Widgette {
    container: string | HTMLElement;
    visible: boolean;

    destroy(): void;
    on(type: string, listener: Function): any;
  }

  interface WidgetteConstructor {
    new(): Widgette;
  }

  export const Widgette: WidgetteConstructor;

  interface WidgetteProperties {
    container?: string | HTMLElement;
    visible?: boolean;
  }

  interface Zoom extends Widget {
    layout: string;
    view: MapView | SceneView;
    viewModel: ZoomViewModel;

    render(): any;
    zoomIn(): void;
    zoomOut(): void;
  }

  interface ZoomConstructor {
    new(properties?: ZoomProperties): Zoom;
  }

  export const Zoom: ZoomConstructor;

  interface ZoomProperties extends WidgetProperties {
    layout?: string;
    view?: MapViewProperties | SceneViewProperties;
    viewModel?: ZoomViewModelProperties;
  }

  interface ZoomViewModel extends Accessor {
    canZoomIn: boolean;
    canZoomOut: boolean;
    state: string;
    view: MapView | SceneView;

    zoomIn(): void;
    zoomOut(): void;
  }

  interface ZoomViewModelConstructor {
    new(properties?: ZoomViewModelProperties): ZoomViewModel;
  }

  export const ZoomViewModel: ZoomViewModelConstructor;

  interface ZoomViewModelProperties {
    canZoomIn?: boolean;
    canZoomOut?: boolean;
    state?: string;
    view?: MapViewProperties | SceneViewProperties;
  }

  export type OpenStreetMapLayerLayerviewCreateEventHandler = (event: OpenStreetMapLayerLayerviewCreateEvent) => void;

  export type OpenStreetMapLayerLayerviewDestroyEventHandler = (event: OpenStreetMapLayerLayerviewDestroyEvent) => void;

  export type PointCloudLayerLayerviewCreateEventHandler = (event: PointCloudLayerLayerviewCreateEvent) => void;

  export type PointCloudLayerLayerviewDestroyEventHandler = (event: PointCloudLayerLayerviewDestroyEvent) => void;

  export type PointDrawActionCursorUpdateEventHandler = (event: PointDrawActionCursorUpdateEvent) => void;

  export type PointDrawActionDrawCompleteEventHandler = (event: PointDrawActionDrawCompleteEvent) => void;

  export type PolygonDrawActionCursorUpdateEventHandler = (event: PolygonDrawActionCursorUpdateEvent) => void;

  export type PolygonDrawActionDrawCompleteEventHandler = (event: PolygonDrawActionDrawCompleteEvent) => void;

  export type PolygonDrawActionVertexAddEventHandler = (event: PolygonDrawActionVertexAddEvent) => void;

  export type PolygonDrawActionVertexRemoveEventHandler = (event: PolygonDrawActionVertexRemoveEvent) => void;

  export type PolylineDrawActionCursorUpdateEventHandler = (event: PolylineDrawActionCursorUpdateEvent) => void;

  export type PolylineDrawActionDrawCompleteEventHandler = (event: PolylineDrawActionDrawCompleteEvent) => void;

  export type PolylineDrawActionVertexAddEventHandler = (event: PolylineDrawActionVertexAddEvent) => void;

  export type PolylineDrawActionVertexRemoveEventHandler = (event: PolylineDrawActionVertexRemoveEvent) => void;

  export type SceneLayerLayerviewCreateEventHandler = (event: SceneLayerLayerviewCreateEvent) => void;

  export type SceneLayerLayerviewDestroyEventHandler = (event: SceneLayerLayerviewDestroyEvent) => void;

  export type SceneViewClickEventHandler = (event: SceneViewClickEvent) => void;

  export type SceneViewDoubleClickEventHandler = (event: SceneViewDoubleClickEvent) => void;

  export type SceneViewDragEventHandler = (event: SceneViewDragEvent) => void;

  export type SceneViewHoldEventHandler = (event: SceneViewHoldEvent) => void;

  export type SceneViewKeyDownEventHandler = (event: SceneViewKeyDownEvent) => void;

  export type SceneViewKeyUpEventHandler = (event: SceneViewKeyUpEvent) => void;

  export type SceneViewLayerviewCreateEventHandler = (event: SceneViewLayerviewCreateEvent) => void;

  export type SceneViewLayerviewDestroyEventHandler = (event: SceneViewLayerviewDestroyEvent) => void;

  export type SceneViewMouseWheelEventHandler = (event: SceneViewMouseWheelEvent) => void;

  export type SceneViewPointerDownEventHandler = (event: SceneViewPointerDownEvent) => void;

  export type SceneViewPointerMoveEventHandler = (event: SceneViewPointerMoveEvent) => void;

  export type SceneViewPointerUpEventHandler = (event: SceneViewPointerUpEvent) => void;

  export type SceneViewResizeEventHandler = (event: SceneViewResizeEvent) => void;

  export type SearchViewModelLoadEventHandler = (event: SearchViewModelLoadEvent) => void;

  export type SearchViewModelSearchClearEventHandler = (event: SearchViewModelSearchClearEvent) => void;

  export type SearchViewModelSearchCompleteEventHandler = (event: SearchViewModelSearchCompleteEvent) => void;

  export type SearchViewModelSearchStartEventHandler = (event: SearchViewModelSearchStartEvent) => void;

  export type SearchViewModelSelectResultEventHandler = (event: SearchViewModelSelectResultEvent) => void;

  export type SearchViewModelSuggestCompleteEventHandler = (event: SearchViewModelSuggestCompleteEvent) => void;

  export type SearchViewModelSuggestStartEventHandler = (event: SearchViewModelSuggestStartEvent) => void;

  export type StreamLayerLayerviewCreateEventHandler = (event: StreamLayerLayerviewCreateEvent) => void;

  export type StreamLayerLayerviewDestroyEventHandler = (event: StreamLayerLayerviewDestroyEvent) => void;

  export type StreamLayerViewDataReceivedEventHandler = (event: StreamLayerViewDataReceivedEvent) => void;

  export type TileLayerLayerviewCreateEventHandler = (event: TileLayerLayerviewCreateEvent) => void;

  export type TileLayerLayerviewDestroyEventHandler = (event: TileLayerLayerviewDestroyEvent) => void;

  export type UnknownLayerLayerviewCreateEventHandler = (event: UnknownLayerLayerviewCreateEvent) => void;

  export type UnknownLayerLayerviewDestroyEventHandler = (event: UnknownLayerLayerviewDestroyEvent) => void;

  export type UnsupportedLayerLayerviewCreateEventHandler = (event: UnsupportedLayerLayerviewCreateEvent) => void;

  export type UnsupportedLayerLayerviewDestroyEventHandler = (event: UnsupportedLayerLayerviewDestroyEvent) => void;

  export type VectorTileLayerLayerviewCreateEventHandler = (event: VectorTileLayerLayerviewCreateEvent) => void;

  export type VectorTileLayerLayerviewDestroyEventHandler = (event: VectorTileLayerLayerviewDestroyEvent) => void;

  export type WebTileLayerLayerviewCreateEventHandler = (event: WebTileLayerLayerviewCreateEvent) => void;

  export type WebTileLayerLayerviewDestroyEventHandler = (event: WebTileLayerLayerviewDestroyEvent) => void;

  export type WMSLayerLayerviewCreateEventHandler = (event: WMSLayerLayerviewCreateEvent) => void;

  export type WMSLayerLayerviewDestroyEventHandler = (event: WMSLayerLayerviewDestroyEvent) => void;

  export type WMTSLayerLayerviewCreateEventHandler = (event: WMTSLayerLayerviewCreateEvent) => void;

  export type WMTSLayerLayerviewDestroyEventHandler = (event: WMTSLayerLayerviewDestroyEvent) => void;
}

declare module "esri/Basemap" {
  import Basemap = __esri.Basemap;
  export = Basemap;
}

declare module "esri/Camera" {
  import Camera = __esri.Camera;
  export = Camera;
}

declare module "esri/Color" {
  import Color = __esri.Color;
  export = Color;
}

declare module "esri/Graphic" {
  import Graphic = __esri.Graphic;
  export = Graphic;
}

declare module "esri/Ground" {
  import Ground = __esri.Ground;
  export = Ground;
}

declare module "esri/Map" {
  import Map = __esri.Map;
  export = Map;
}

declare module "esri/PopupTemplate" {
  import PopupTemplate = __esri.PopupTemplate;
  export = PopupTemplate;
}

declare module "esri/Viewpoint" {
  import Viewpoint = __esri.Viewpoint;
  export = Viewpoint;
}

declare module "esri/WebMap" {
  import WebMap = __esri.WebMap;
  export = WebMap;
}

declare module "esri/WebScene" {
  import WebScene = __esri.WebScene;
  export = WebScene;
}

declare module "esri/core/Accessor" {
  import Accessor = __esri.Accessor;
  export = Accessor;
}

declare module "esri/core/Collection" {
  import Collection = __esri.Collection;
  export = Collection;
}

declare module "esri/core/workers/Connection" {
  import Connection = __esri.Connection;
  export = Connection;
}

declare module "esri/geometry/Circle" {
  import Circle = __esri.Circle;
  export = Circle;
}

declare module "esri/geometry/Extent" {
  import Extent = __esri.Extent;
  export = Extent;
}

declare module "esri/geometry/Geometry" {
  import Geometry = __esri.Geometry;
  export = Geometry;
}

declare module "esri/geometry/HeightModelInfo" {
  import HeightModelInfo = __esri.HeightModelInfo;
  export = HeightModelInfo;
}

declare module "esri/geometry/Multipoint" {
  import Multipoint = __esri.Multipoint;
  export = Multipoint;
}

declare module "esri/geometry/Point" {
  import Point = __esri.Point;
  export = Point;
}

declare module "esri/geometry/Polygon" {
  import Polygon = __esri.Polygon;
  export = Polygon;
}

declare module "esri/geometry/Polyline" {
  import Polyline = __esri.Polyline;
  export = Polyline;
}

declare module "esri/geometry/ScreenPoint" {
  import ScreenPoint = __esri.ScreenPoint;
  export = ScreenPoint;
}

declare module "esri/geometry/SpatialReference" {
  import SpatialReference = __esri.SpatialReference;
  export = SpatialReference;
}

declare module "esri/identity/Credential" {
  import Credential = __esri.Credential;
  export = Credential;
}

declare module "esri/identity/IdentityManagerBase" {
  import IdentityManagerBase = __esri.IdentityManagerBase;
  export = IdentityManagerBase;
}

declare module "esri/identity/IdentityManager" {
  const IdentityManager: __esri.IdentityManager;
  export = IdentityManager;
}

declare module "esri/identity/OAuthInfo" {
  import OAuthInfo = __esri.OAuthInfo;
  export = OAuthInfo;
}

declare module "esri/identity/ServerInfo" {
  import ServerInfo = __esri.ServerInfo;
  export = ServerInfo;
}

declare module "esri/layers/BaseElevationLayer" {
  import BaseElevationLayer = __esri.BaseElevationLayer;
  export = BaseElevationLayer;
}

declare module "esri/layers/CSVLayer" {
  import CSVLayer = __esri.CSVLayer;
  export = CSVLayer;
}

declare module "esri/layers/ElevationLayer" {
  import ElevationLayer = __esri.ElevationLayer;
  export = ElevationLayer;
}

declare module "esri/layers/FeatureLayer" {
  import FeatureLayer = __esri.FeatureLayer;
  export = FeatureLayer;
}

declare module "esri/layers/GeoRSSLayer" {
  import GeoRSSLayer = __esri.GeoRSSLayer;
  export = GeoRSSLayer;
}

declare module "esri/layers/GraphicsLayer" {
  import GraphicsLayer = __esri.GraphicsLayer;
  export = GraphicsLayer;
}

declare module "esri/layers/GroupLayer" {
  import GroupLayer = __esri.GroupLayer;
  export = GroupLayer;
}

declare module "esri/layers/ImageryLayer" {
  import ImageryLayer = __esri.ImageryLayer;
  export = ImageryLayer;
}

declare module "esri/layers/IntegratedMeshLayer" {
  import IntegratedMeshLayer = __esri.IntegratedMeshLayer;
  export = IntegratedMeshLayer;
}

declare module "esri/layers/KMLLayer" {
  import KMLLayer = __esri.KMLLayer;
  export = KMLLayer;
}

declare module "esri/layers/Layer" {
  import Layer = __esri.Layer;
  export = Layer;
}

declare module "esri/layers/MapImageLayer" {
  import MapImageLayer = __esri.MapImageLayer;
  export = MapImageLayer;
}

declare module "esri/layers/MapNotesLayer" {
  import MapNotesLayer = __esri.MapNotesLayer;
  export = MapNotesLayer;
}

declare module "esri/layers/OpenStreetMapLayer" {
  import OpenStreetMapLayer = __esri.OpenStreetMapLayer;
  export = OpenStreetMapLayer;
}

declare module "esri/layers/PointCloudLayer" {
  import PointCloudLayer = __esri.PointCloudLayer;
  export = PointCloudLayer;
}

declare module "esri/layers/SceneLayer" {
  import SceneLayer = __esri.SceneLayer;
  export = SceneLayer;
}

declare module "esri/layers/StreamLayer" {
  import StreamLayer = __esri.StreamLayer;
  export = StreamLayer;
}

declare module "esri/layers/TileLayer" {
  import TileLayer = __esri.TileLayer;
  export = TileLayer;
}

declare module "esri/layers/UnknownLayer" {
  import UnknownLayer = __esri.UnknownLayer;
  export = UnknownLayer;
}

declare module "esri/layers/UnsupportedLayer" {
  import UnsupportedLayer = __esri.UnsupportedLayer;
  export = UnsupportedLayer;
}

declare module "esri/layers/VectorTileLayer" {
  import VectorTileLayer = __esri.VectorTileLayer;
  export = VectorTileLayer;
}

declare module "esri/layers/WebTileLayer" {
  import WebTileLayer = __esri.WebTileLayer;
  export = WebTileLayer;
}

declare module "esri/layers/WMSLayer" {
  import WMSLayer = __esri.WMSLayer;
  export = WMSLayer;
}

declare module "esri/layers/WMTSLayer" {
  import WMTSLayer = __esri.WMTSLayer;
  export = WMTSLayer;
}

declare module "esri/layers/BaseDynamicLayer" {
  import BaseDynamicLayer = __esri.BaseDynamicLayer;
  export = BaseDynamicLayer;
}

declare module "esri/layers/BaseTileLayer" {
  import BaseTileLayer = __esri.BaseTileLayer;
  export = BaseTileLayer;
}

declare module "esri/layers/support/CodedValueDomain" {
  import CodedValueDomain = __esri.CodedValueDomain;
  export = CodedValueDomain;
}

declare module "esri/layers/support/DimensionalDefinition" {
  import DimensionalDefinition = __esri.DimensionalDefinition;
  export = DimensionalDefinition;
}

declare module "esri/layers/support/Domain" {
  import Domain = __esri.Domain;
  export = Domain;
}

declare module "esri/layers/support/Field" {
  import Field = __esri.Field;
  export = Field;
}

declare module "esri/layers/support/FeatureTemplate" {
  import FeatureTemplate = __esri.FeatureTemplate;
  export = FeatureTemplate;
}

declare module "esri/layers/support/FeatureType" {
  import FeatureType = __esri.FeatureType;
  export = FeatureType;
}

declare module "esri/layers/support/ImageParameters" {
  import ImageParameters = __esri.ImageParameters;
  export = ImageParameters;
}

declare module "esri/layers/support/InheritedDomain" {
  import InheritedDomain = __esri.InheritedDomain;
  export = InheritedDomain;
}

declare module "esri/layers/support/KMLSublayer" {
  import KMLSublayer = __esri.KMLSublayer;
  export = KMLSublayer;
}

declare module "esri/layers/support/LabelClass" {
  import LabelClass = __esri.LabelClass;
  export = LabelClass;
}

declare module "esri/layers/support/LOD" {
  import LOD = __esri.LOD;
  export = LOD;
}

declare module "esri/layers/support/MapImage" {
  import MapImage = __esri.MapImage;
  export = MapImage;
}

declare module "esri/layers/support/MosaicRule" {
  import MosaicRule = __esri.MosaicRule;
  export = MosaicRule;
}

declare module "esri/layers/support/PixelBlock" {
  import PixelBlock = __esri.PixelBlock;
  export = PixelBlock;
}

declare module "esri/layers/support/RangeDomain" {
  import RangeDomain = __esri.RangeDomain;
  export = RangeDomain;
}

declare module "esri/layers/support/RasterFunction" {
  import RasterFunction = __esri.RasterFunction;
  export = RasterFunction;
}

declare module "esri/layers/support/Sublayer" {
  import Sublayer = __esri.Sublayer;
  export = Sublayer;
}

declare module "esri/layers/support/TileInfo" {
  import TileInfo = __esri.TileInfo;
  export = TileInfo;
}

declare module "esri/layers/support/TileMatrixSet" {
  import TileMatrixSet = __esri.TileMatrixSet;
  export = TileMatrixSet;
}

declare module "esri/layers/support/WMSSublayer" {
  import WMSSublayer = __esri.WMSSublayer;
  export = WMSSublayer;
}

declare module "esri/layers/support/WMTSStyle" {
  import WMTSStyle = __esri.WMTSStyle;
  export = WMTSStyle;
}

declare module "esri/layers/support/WMTSSublayer" {
  import WMTSSublayer = __esri.WMTSSublayer;
  export = WMTSSublayer;
}

declare module "esri/portal/Portal" {
  import Portal = __esri.Portal;
  export = Portal;
}

declare module "esri/portal/PortalFolder" {
  import PortalFolder = __esri.PortalFolder;
  export = PortalFolder;
}

declare module "esri/portal/PortalGroup" {
  import PortalGroup = __esri.PortalGroup;
  export = PortalGroup;
}

declare module "esri/portal/PortalItem" {
  import PortalItem = __esri.PortalItem;
  export = PortalItem;
}

declare module "esri/portal/PortalRating" {
  import PortalRating = __esri.PortalRating;
  export = PortalRating;
}

declare module "esri/portal/PortalQueryParams" {
  import PortalQueryParams = __esri.PortalQueryParams;
  export = PortalQueryParams;
}

declare module "esri/portal/PortalQueryResult" {
  import PortalQueryResult = __esri.PortalQueryResult;
  export = PortalQueryResult;
}

declare module "esri/portal/PortalUser" {
  import PortalUser = __esri.PortalUser;
  export = PortalUser;
}

declare module "esri/renderers/ClassBreaksRenderer" {
  import ClassBreaksRenderer = __esri.ClassBreaksRenderer;
  export = ClassBreaksRenderer;
}

declare module "esri/renderers/Renderer" {
  import Renderer = __esri.Renderer;
  export = Renderer;
}

declare module "esri/renderers/SimpleRenderer" {
  import SimpleRenderer = __esri.SimpleRenderer;
  export = SimpleRenderer;
}

declare module "esri/renderers/UniqueValueRenderer" {
  import UniqueValueRenderer = __esri.UniqueValueRenderer;
  export = UniqueValueRenderer;
}

declare module "esri/renderers/PointCloudRenderer" {
  import PointCloudRenderer = __esri.PointCloudRenderer;
  export = PointCloudRenderer;
}

declare module "esri/renderers/PointCloudClassBreaksRenderer" {
  import PointCloudClassBreaksRenderer = __esri.PointCloudClassBreaksRenderer;
  export = PointCloudClassBreaksRenderer;
}

declare module "esri/renderers/PointCloudRGBRenderer" {
  import PointCloudRGBRenderer = __esri.PointCloudRGBRenderer;
  export = PointCloudRGBRenderer;
}

declare module "esri/renderers/PointCloudStretchRenderer" {
  import PointCloudStretchRenderer = __esri.PointCloudStretchRenderer;
  export = PointCloudStretchRenderer;
}

declare module "esri/renderers/PointCloudUniqueValueRenderer" {
  import PointCloudUniqueValueRenderer = __esri.PointCloudUniqueValueRenderer;
  export = PointCloudUniqueValueRenderer;
}

declare module "esri/support/Action" {
  import Action = __esri.Action;
  export = Action;
}

declare module "esri/symbols/ExtrudeSymbol3DLayer" {
  import ExtrudeSymbol3DLayer = __esri.ExtrudeSymbol3DLayer;
  export = ExtrudeSymbol3DLayer;
}

declare module "esri/symbols/FillSymbol" {
  import FillSymbol = __esri.FillSymbol;
  export = FillSymbol;
}

declare module "esri/symbols/FillSymbol3DLayer" {
  import FillSymbol3DLayer = __esri.FillSymbol3DLayer;
  export = FillSymbol3DLayer;
}

declare module "esri/symbols/Font" {
  import Font = __esri.Font;
  export = Font;
}

declare module "esri/symbols/IconSymbol3DLayer" {
  import IconSymbol3DLayer = __esri.IconSymbol3DLayer;
  export = IconSymbol3DLayer;
}

declare module "esri/symbols/LabelSymbol3D" {
  import LabelSymbol3D = __esri.LabelSymbol3D;
  export = LabelSymbol3D;
}

declare module "esri/symbols/LineSymbol" {
  import LineSymbol = __esri.LineSymbol;
  export = LineSymbol;
}

declare module "esri/symbols/LineSymbol3D" {
  import LineSymbol3D = __esri.LineSymbol3D;
  export = LineSymbol3D;
}

declare module "esri/symbols/LineSymbol3DLayer" {
  import LineSymbol3DLayer = __esri.LineSymbol3DLayer;
  export = LineSymbol3DLayer;
}

declare module "esri/symbols/MarkerSymbol" {
  import MarkerSymbol = __esri.MarkerSymbol;
  export = MarkerSymbol;
}

declare module "esri/symbols/MeshSymbol3D" {
  import MeshSymbol3D = __esri.MeshSymbol3D;
  export = MeshSymbol3D;
}

declare module "esri/symbols/ObjectSymbol3DLayer" {
  import ObjectSymbol3DLayer = __esri.ObjectSymbol3DLayer;
  export = ObjectSymbol3DLayer;
}

declare module "esri/symbols/PictureFillSymbol" {
  import PictureFillSymbol = __esri.PictureFillSymbol;
  export = PictureFillSymbol;
}

declare module "esri/symbols/PictureMarkerSymbol" {
  import PictureMarkerSymbol = __esri.PictureMarkerSymbol;
  export = PictureMarkerSymbol;
}

declare module "esri/symbols/PathSymbol3DLayer" {
  import PathSymbol3DLayer = __esri.PathSymbol3DLayer;
  export = PathSymbol3DLayer;
}

declare module "esri/symbols/PointSymbol3D" {
  import PointSymbol3D = __esri.PointSymbol3D;
  export = PointSymbol3D;
}

declare module "esri/symbols/PolygonSymbol3D" {
  import PolygonSymbol3D = __esri.PolygonSymbol3D;
  export = PolygonSymbol3D;
}

declare module "esri/symbols/SimpleFillSymbol" {
  import SimpleFillSymbol = __esri.SimpleFillSymbol;
  export = SimpleFillSymbol;
}

declare module "esri/symbols/SimpleLineSymbol" {
  import SimpleLineSymbol = __esri.SimpleLineSymbol;
  export = SimpleLineSymbol;
}

declare module "esri/symbols/SimpleMarkerSymbol" {
  import SimpleMarkerSymbol = __esri.SimpleMarkerSymbol;
  export = SimpleMarkerSymbol;
}

declare module "esri/symbols/Symbol" {
  import Symbol = __esri.Symbol;
  export = Symbol;
}

declare module "esri/symbols/Symbol3D" {
  import Symbol3D = __esri.Symbol3D;
  export = Symbol3D;
}

declare module "esri/symbols/Symbol3DLayer" {
  import Symbol3DLayer = __esri.Symbol3DLayer;
  export = Symbol3DLayer;
}

declare module "esri/symbols/TextSymbol" {
  import TextSymbol = __esri.TextSymbol;
  export = TextSymbol;
}

declare module "esri/symbols/TextSymbol3DLayer" {
  import TextSymbol3DLayer = __esri.TextSymbol3DLayer;
  export = TextSymbol3DLayer;
}

declare module "esri/symbols/WebStyleSymbol" {
  import WebStyleSymbol = __esri.WebStyleSymbol;
  export = WebStyleSymbol;
}

declare module "esri/symbols/callouts/Callout3D" {
  import Callout3D = __esri.Callout3D;
  export = Callout3D;
}

declare module "esri/symbols/callouts/LineCallout3D" {
  import LineCallout3D = __esri.LineCallout3D;
  export = LineCallout3D;
}

declare module "esri/tasks/ClosestFacilityTask" {
  import ClosestFacilityTask = __esri.ClosestFacilityTask;
  export = ClosestFacilityTask;
}

declare module "esri/tasks/FindTask" {
  import FindTask = __esri.FindTask;
  export = FindTask;
}

declare module "esri/tasks/GeometryService" {
  import GeometryService = __esri.GeometryService;
  export = GeometryService;
}

declare module "esri/tasks/Geoprocessor" {
  import Geoprocessor = __esri.Geoprocessor;
  export = Geoprocessor;
}

declare module "esri/tasks/IdentifyTask" {
  import IdentifyTask = __esri.IdentifyTask;
  export = IdentifyTask;
}

declare module "esri/tasks/ImageServiceIdentifyTask" {
  import ImageServiceIdentifyTask = __esri.ImageServiceIdentifyTask;
  export = ImageServiceIdentifyTask;
}

declare module "esri/tasks/Locator" {
  import Locator = __esri.Locator;
  export = Locator;
}

declare module "esri/tasks/QueryTask" {
  import QueryTask = __esri.QueryTask;
  export = QueryTask;
}

declare module "esri/tasks/PrintTask" {
  import PrintTask = __esri.PrintTask;
  export = PrintTask;
}

declare module "esri/tasks/RouteTask" {
  import RouteTask = __esri.RouteTask;
  export = RouteTask;
}

declare module "esri/tasks/ServiceAreaTask" {
  import ServiceAreaTask = __esri.ServiceAreaTask;
  export = ServiceAreaTask;
}

declare module "esri/tasks/Task" {
  import Task = __esri.Task;
  export = Task;
}

declare module "esri/tasks/support/AddressCandidate" {
  import AddressCandidate = __esri.AddressCandidate;
  export = AddressCandidate;
}

declare module "esri/tasks/support/AreasAndLengthsParameters" {
  import AreasAndLengthsParameters = __esri.AreasAndLengthsParameters;
  export = AreasAndLengthsParameters;
}

declare module "esri/tasks/support/BufferParameters" {
  import BufferParameters = __esri.BufferParameters;
  export = BufferParameters;
}

declare module "esri/tasks/support/ClosestFacilityParameters" {
  import ClosestFacilityParameters = __esri.ClosestFacilityParameters;
  export = ClosestFacilityParameters;
}

declare module "esri/tasks/support/ClosestFacilitySolveResult" {
  import ClosestFacilitySolveResult = __esri.ClosestFacilitySolveResult;
  export = ClosestFacilitySolveResult;
}

declare module "esri/tasks/support/DataFile" {
  import DataFile = __esri.DataFile;
  export = DataFile;
}

declare module "esri/tasks/support/DataLayer" {
  import DataLayer = __esri.DataLayer;
  export = DataLayer;
}

declare module "esri/tasks/support/Date" {
  import supportDate = __esri.supportDate;
  export = supportDate;
}

declare module "esri/tasks/support/DensifyParameters" {
  import DensifyParameters = __esri.DensifyParameters;
  export = DensifyParameters;
}

declare module "esri/tasks/support/DirectionsFeatureSet" {
  import DirectionsFeatureSet = __esri.DirectionsFeatureSet;
  export = DirectionsFeatureSet;
}

declare module "esri/tasks/support/DistanceParameters" {
  import DistanceParameters = __esri.DistanceParameters;
  export = DistanceParameters;
}

declare module "esri/tasks/support/FeatureSet" {
  import FeatureSet = __esri.FeatureSet;
  export = FeatureSet;
}

declare module "esri/tasks/support/FindParameters" {
  import FindParameters = __esri.FindParameters;
  export = FindParameters;
}

declare module "esri/tasks/support/FindResult" {
  import FindResult = __esri.FindResult;
  export = FindResult;
}

declare module "esri/tasks/support/GeneralizeParameters" {
  import GeneralizeParameters = __esri.GeneralizeParameters;
  export = GeneralizeParameters;
}

declare module "esri/tasks/support/GPMessage" {
  import GPMessage = __esri.GPMessage;
  export = GPMessage;
}

declare module "esri/tasks/support/IdentifyParameters" {
  import IdentifyParameters = __esri.IdentifyParameters;
  export = IdentifyParameters;
}

declare module "esri/tasks/support/IdentifyResult" {
  import IdentifyResult = __esri.IdentifyResult;
  export = IdentifyResult;
}

declare module "esri/tasks/support/ImageServiceIdentifyParameters" {
  import ImageServiceIdentifyParameters = __esri.ImageServiceIdentifyParameters;
  export = ImageServiceIdentifyParameters;
}

declare module "esri/tasks/support/ImageServiceIdentifyResult" {
  import ImageServiceIdentifyResult = __esri.ImageServiceIdentifyResult;
  export = ImageServiceIdentifyResult;
}

declare module "esri/tasks/support/JobInfo" {
  import JobInfo = __esri.JobInfo;
  export = JobInfo;
}

declare module "esri/tasks/support/LegendLayer" {
  import LegendLayer = __esri.LegendLayer;
  export = LegendLayer;
}

declare module "esri/tasks/support/LengthsParameters" {
  import LengthsParameters = __esri.LengthsParameters;
  export = LengthsParameters;
}

declare module "esri/tasks/support/LinearUnit" {
  import LinearUnit = __esri.LinearUnit;
  export = LinearUnit;
}

declare module "esri/tasks/support/NAMessage" {
  import NAMessage = __esri.NAMessage;
  export = NAMessage;
}

declare module "esri/tasks/support/OffsetParameters" {
  import OffsetParameters = __esri.OffsetParameters;
  export = OffsetParameters;
}

declare module "esri/tasks/support/ParameterValue" {
  import ParameterValue = __esri.ParameterValue;
  export = ParameterValue;
}

declare module "esri/tasks/support/PrintParameters" {
  import PrintParameters = __esri.PrintParameters;
  export = PrintParameters;
}

declare module "esri/tasks/support/PrintTemplate" {
  import PrintTemplate = __esri.PrintTemplate;
  export = PrintTemplate;
}

declare module "esri/tasks/support/ProjectParameters" {
  import ProjectParameters = __esri.ProjectParameters;
  export = ProjectParameters;
}

declare module "esri/tasks/support/Query" {
  import Query = __esri.Query;
  export = Query;
}

declare module "esri/tasks/support/RasterData" {
  import RasterData = __esri.RasterData;
  export = RasterData;
}

declare module "esri/tasks/support/RelationParameters" {
  import RelationParameters = __esri.RelationParameters;
  export = RelationParameters;
}

declare module "esri/tasks/support/RelationshipQuery" {
  import RelationshipQuery = __esri.RelationshipQuery;
  export = RelationshipQuery;
}

declare module "esri/tasks/support/RouteParameters" {
  import RouteParameters = __esri.RouteParameters;
  export = RouteParameters;
}

declare module "esri/tasks/support/RouteResult" {
  import RouteResult = __esri.RouteResult;
  export = RouteResult;
}

declare module "esri/tasks/support/ServiceAreaParameters" {
  import ServiceAreaParameters = __esri.ServiceAreaParameters;
  export = ServiceAreaParameters;
}

declare module "esri/tasks/support/ServiceAreaSolveResult" {
  import ServiceAreaSolveResult = __esri.ServiceAreaSolveResult;
  export = ServiceAreaSolveResult;
}

declare module "esri/tasks/support/StatisticDefinition" {
  import StatisticDefinition = __esri.StatisticDefinition;
  export = StatisticDefinition;
}

declare module "esri/tasks/support/TrimExtendParameters" {
  import TrimExtendParameters = __esri.TrimExtendParameters;
  export = TrimExtendParameters;
}

declare module "esri/tasks/workflow/ConfigurationTask" {
  import ConfigurationTask = __esri.ConfigurationTask;
  export = ConfigurationTask;
}

declare module "esri/tasks/workflow/JobTask" {
  import JobTask = __esri.JobTask;
  export = JobTask;
}

declare module "esri/tasks/workflow/NotificationTask" {
  import NotificationTask = __esri.NotificationTask;
  export = NotificationTask;
}

declare module "esri/tasks/workflow/ReportTask" {
  import ReportTask = __esri.ReportTask;
  export = ReportTask;
}

declare module "esri/tasks/workflow/TokenTask" {
  import TokenTask = __esri.TokenTask;
  export = TokenTask;
}

declare module "esri/tasks/workflow/WorkflowTask" {
  import WorkflowTask = __esri.WorkflowTask;
  export = WorkflowTask;
}

declare module "esri/views/MapView" {
  import MapView = __esri.MapView;
  export = MapView;
}

declare module "esri/views/SceneView" {
  import SceneView = __esri.SceneView;
  export = SceneView;
}

declare module "esri/views/View" {
  import View = __esri.View;
  export = View;
}

declare module "esri/views/ViewAnimation" {
  import ViewAnimation = __esri.ViewAnimation;
  export = ViewAnimation;
}

declare module "esri/views/layers/LayerView" {
  import LayerView = __esri.LayerView;
  export = LayerView;
}

declare module "esri/views/layers/CSVLayerView" {
  import CSVLayerView = __esri.CSVLayerView;
  export = CSVLayerView;
}

declare module "esri/views/layers/FeatureLayerView" {
  import FeatureLayerView = __esri.FeatureLayerView;
  export = FeatureLayerView;
}

declare module "esri/views/layers/GraphicsLayerView" {
  import GraphicsLayerView = __esri.GraphicsLayerView;
  export = GraphicsLayerView;
}

declare module "esri/views/layers/ImageryLayerView" {
  import ImageryLayerView = __esri.ImageryLayerView;
  export = ImageryLayerView;
}

declare module "esri/views/layers/SceneLayerView" {
  import SceneLayerView = __esri.SceneLayerView;
  export = SceneLayerView;
}

declare module "esri/views/layers/StreamLayerView" {
  import StreamLayerView = __esri.StreamLayerView;
  export = StreamLayerView;
}

declare module "esri/views/ui/UI" {
  import UI = __esri.UI;
  export = UI;
}

declare module "esri/views/ui/DefaultUI" {
  import DefaultUI = __esri.DefaultUI;
  export = DefaultUI;
}

declare module "esri/views/2d/draw/Draw" {
  import Draw = __esri.Draw;
  export = Draw;
}

declare module "esri/views/2d/draw/PointDrawAction" {
  import PointDrawAction = __esri.PointDrawAction;
  export = PointDrawAction;
}

declare module "esri/views/2d/draw/PolylineDrawAction" {
  import PolylineDrawAction = __esri.PolylineDrawAction;
  export = PolylineDrawAction;
}

declare module "esri/views/2d/draw/PolygonDrawAction" {
  import PolygonDrawAction = __esri.PolygonDrawAction;
  export = PolygonDrawAction;
}

declare module "esri/webmap/InitialViewProperties" {
  import InitialViewProperties = __esri.InitialViewProperties;
  export = InitialViewProperties;
}

declare module "esri/webscene/Environment" {
  import Environment = __esri.Environment;
  export = Environment;
}

declare module "esri/webscene/InitialViewProperties" {
  import websceneInitialViewProperties = __esri.websceneInitialViewProperties;
  export = websceneInitialViewProperties;
}

declare module "esri/webscene/Lighting" {
  import Lighting = __esri.Lighting;
  export = Lighting;
}

declare module "esri/webscene/Presentation" {
  import Presentation = __esri.Presentation;
  export = Presentation;
}

declare module "esri/webscene/Slide" {
  import Slide = __esri.Slide;
  export = Slide;
}

declare module "esri/widgets/Attribution" {
  import Attribution = __esri.Attribution;
  export = Attribution;
}

declare module "esri/widgets/BasemapGallery" {
  import BasemapGallery = __esri.BasemapGallery;
  export = BasemapGallery;
}

declare module "esri/widgets/BasemapToggle" {
  import BasemapToggle = __esri.BasemapToggle;
  export = BasemapToggle;
}

declare module "esri/widgets/ColorSlider" {
  import ColorSlider = __esri.ColorSlider;
  export = ColorSlider;
}

declare module "esri/widgets/Compass" {
  import Compass = __esri.Compass;
  export = Compass;
}

declare module "esri/widgets/Expand" {
  import Expand = __esri.Expand;
  export = Expand;
}

declare module "esri/widgets/Home" {
  import Home = __esri.Home;
  export = Home;
}

declare module "esri/widgets/LayerList" {
  import LayerList = __esri.LayerList;
  export = LayerList;
}

declare module "esri/widgets/Legend" {
  import Legend = __esri.Legend;
  export = Legend;
}

declare module "esri/widgets/Locate" {
  import Locate = __esri.Locate;
  export = Locate;
}

declare module "esri/widgets/NavigationToggle" {
  import NavigationToggle = __esri.NavigationToggle;
  export = NavigationToggle;
}

declare module "esri/widgets/Popup" {
  import Popup = __esri.Popup;
  export = Popup;
}

declare module "esri/widgets/Print" {
  import Print = __esri.Print;
  export = Print;
}

declare module "esri/widgets/ScaleBar" {
  import ScaleBar = __esri.ScaleBar;
  export = ScaleBar;
}

declare module "esri/widgets/Search" {
  import Search = __esri.Search;
  export = Search;
}

declare module "esri/widgets/SizeSlider" {
  import SizeSlider = __esri.SizeSlider;
  export = SizeSlider;
}

declare module "esri/widgets/Track" {
  import Track = __esri.Track;
  export = Track;
}

declare module "esri/widgets/UnivariateColorSizeSlider" {
  import UnivariateColorSizeSlider = __esri.UnivariateColorSizeSlider;
  export = UnivariateColorSizeSlider;
}

declare module "esri/widgets/Widget" {
  import Widget = __esri.Widget;
  export = Widget;
}

declare module "esri/widgets/Zoom" {
  import Zoom = __esri.Zoom;
  export = Zoom;
}

declare module "esri/widgets/Attribution/AttributionViewModel" {
  import AttributionViewModel = __esri.AttributionViewModel;
  export = AttributionViewModel;
}

declare module "esri/widgets/BasemapGallery/BasemapGalleryViewModel" {
  import BasemapGalleryViewModel = __esri.BasemapGalleryViewModel;
  export = BasemapGalleryViewModel;
}

declare module "esri/widgets/BasemapToggle/BasemapToggleViewModel" {
  import BasemapToggleViewModel = __esri.BasemapToggleViewModel;
  export = BasemapToggleViewModel;
}

declare module "esri/widgets/Compass/CompassViewModel" {
  import CompassViewModel = __esri.CompassViewModel;
  export = CompassViewModel;
}

declare module "esri/widgets/Expand/ExpandViewModel" {
  import ExpandViewModel = __esri.ExpandViewModel;
  export = ExpandViewModel;
}

declare module "esri/widgets/Home/HomeViewModel" {
  import HomeViewModel = __esri.HomeViewModel;
  export = HomeViewModel;
}

declare module "esri/widgets/LayerList/LayerListViewModel" {
  import LayerListViewModel = __esri.LayerListViewModel;
  export = LayerListViewModel;
}

declare module "esri/widgets/LayerList/ListItem" {
  import ListItem = __esri.ListItem;
  export = ListItem;
}

declare module "esri/widgets/Locate/LocateViewModel" {
  import LocateViewModel = __esri.LocateViewModel;
  export = LocateViewModel;
}

declare module "esri/widgets/NavigationToggle/NavigationToggleViewModel" {
  import NavigationToggleViewModel = __esri.NavigationToggleViewModel;
  export = NavigationToggleViewModel;
}

declare module "esri/widgets/Print/PrintViewModel" {
  import PrintViewModel = __esri.PrintViewModel;
  export = PrintViewModel;
}

declare module "esri/widgets/Popup/PopupViewModel" {
  import PopupViewModel = __esri.PopupViewModel;
  export = PopupViewModel;
}

declare module "esri/widgets/ScaleBar/ScaleBarViewModel" {
  import ScaleBarViewModel = __esri.ScaleBarViewModel;
  export = ScaleBarViewModel;
}

declare module "esri/widgets/Search/SearchViewModel" {
  import SearchViewModel = __esri.SearchViewModel;
  export = SearchViewModel;
}

declare module "esri/widgets/Track/TrackViewModel" {
  import TrackViewModel = __esri.TrackViewModel;
  export = TrackViewModel;
}

declare module "esri/widgets/Zoom/ZoomViewModel" {
  import ZoomViewModel = __esri.ZoomViewModel;
  export = ZoomViewModel;
}

declare module "esri/widgets/Sketch/SketchViewModel" {
  import SketchViewModel = __esri.SketchViewModel;
  export = SketchViewModel;
}

declare module "esri/core/Evented" {
  import Evented = __esri.Evented;
  export = Evented;
}

declare module "esri/core/JSONSupport" {
  import JSONSupport = __esri.JSONSupport;
  export = JSONSupport;
}

declare module "esri/core/Loadable" {
  import Loadable = __esri.Loadable;
  export = Loadable;
}

declare module "esri/core/Promise" {
  import corePromise = __esri.corePromise;
  export = corePromise;
}

declare module "esri/layers/DynamicLayer" {
  import DynamicLayer = __esri.DynamicLayer;
  export = DynamicLayer;
}

declare module "esri/layers/TiledLayer" {
  import TiledLayer = __esri.TiledLayer;
  export = TiledLayer;
}

declare module "esri/layers/mixins/ArcGISCachedService" {
  import ArcGISCachedService = __esri.ArcGISCachedService;
  export = ArcGISCachedService;
}

declare module "esri/layers/mixins/ArcGISDynamicMapService" {
  import ArcGISDynamicMapService = __esri.ArcGISDynamicMapService;
  export = ArcGISDynamicMapService;
}

declare module "esri/layers/mixins/ArcGISImageService" {
  import ArcGISImageService = __esri.ArcGISImageService;
  export = ArcGISImageService;
}

declare module "esri/layers/mixins/ArcGISMapService" {
  import ArcGISMapService = __esri.ArcGISMapService;
  export = ArcGISMapService;
}

declare module "esri/layers/mixins/PortalLayer" {
  import PortalLayer = __esri.PortalLayer;
  export = PortalLayer;
}

declare module "esri/layers/mixins/ScaleRangeLayer" {
  import ScaleRangeLayer = __esri.ScaleRangeLayer;
  export = ScaleRangeLayer;
}

declare module "esri/layers/mixins/SceneService" {
  import SceneService = __esri.SceneService;
  export = SceneService;
}

declare module "esri/renderers/VisualVariablesMixin" {
  import VisualVariablesMixin = __esri.VisualVariablesMixin;
  export = VisualVariablesMixin;
}

declare module "esri/support/LayersMixin" {
  import LayersMixin = __esri.LayersMixin;
  export = LayersMixin;
}

declare module "esri/views/BreakpointsOwner" {
  import BreakpointsOwner = __esri.BreakpointsOwner;
  export = BreakpointsOwner;
}

declare module "esri/views/DOMContainer" {
  import DOMContainer = __esri.DOMContainer;
  export = DOMContainer;
}

declare module "esri/widgets/Widgette" {
  import Widgette = __esri.Widgette;
  export = Widgette;
}

declare module "esri/widgets/support/GeolocationPositioning" {
  import GeolocationPositioning = __esri.GeolocationPositioning;
  export = GeolocationPositioning;
}

declare module "esri/config" {
  import config = __esri.config;
  export = config;
}

declare module "esri/kernel" {
  import kernel = __esri.kernel;
  export = kernel;
}

declare module "esri/request" {
  import request = __esri.request;
  export = request;
}

declare module "esri/core/Error" {
  import Error = __esri.Error;
  export = Error;
}

declare module "esri/core/lang" {
  import lang = __esri.lang;
  export = lang;
}

declare module "esri/core/promiseUtils" {
  import promiseUtils = __esri.promiseUtils;
  export = promiseUtils;
}

declare module "esri/core/requireUtils" {
  import requireUtils = __esri.requireUtils;
  export = requireUtils;
}

declare module "esri/core/urlUtils" {
  import urlUtils = __esri.urlUtils;
  export = urlUtils;
}

declare module "esri/core/watchUtils" {
  import watchUtils = __esri.watchUtils;
  export = watchUtils;
}

declare module "esri/core/accessorSupport/decorators" {
  import decorators = __esri.decorators;
  export = decorators;
}

declare module "esri/core/workers" {
  import workers = __esri.workers;
  export = workers;
}

declare module "esri/geometry/geometryEngine" {
  import geometryEngine = __esri.geometryEngine;
  export = geometryEngine;
}

declare module "esri/geometry/geometryEngineAsync" {
  import geometryEngineAsync = __esri.geometryEngineAsync;
  export = geometryEngineAsync;
}

declare module "esri/geometry/support/jsonUtils" {
  import jsonUtils = __esri.jsonUtils;
  export = jsonUtils;
}

declare module "esri/geometry/support/normalizeUtils" {
  import normalizeUtils = __esri.normalizeUtils;
  export = normalizeUtils;
}

declare module "esri/geometry/support/webMercatorUtils" {
  import webMercatorUtils = __esri.webMercatorUtils;
  export = webMercatorUtils;
}

declare module "esri/renderers/smartMapping/creators/color" {
  import color = __esri.color;
  export = color;
}

declare module "esri/renderers/smartMapping/creators/location" {
  import location = __esri.location;
  export = location;
}

declare module "esri/renderers/smartMapping/creators/size" {
  import size = __esri.size;
  export = size;
}

declare module "esri/renderers/smartMapping/creators/type" {
  import type = __esri.type;
  export = type;
}

declare module "esri/renderers/smartMapping/creators/univariateColorSize" {
  import univariateColorSize = __esri.univariateColorSize;
  export = univariateColorSize;
}

declare module "esri/renderers/smartMapping/statistics/classBreaks" {
  import classBreaks = __esri.classBreaks;
  export = classBreaks;
}

declare module "esri/renderers/smartMapping/statistics/histogram" {
  import histogram = __esri.histogram;
  export = histogram;
}

declare module "esri/renderers/smartMapping/statistics/summaryStatistics" {
  import summaryStatistics = __esri.summaryStatistics;
  export = summaryStatistics;
}

declare module "esri/renderers/smartMapping/statistics/uniqueValues" {
  import uniqueValues = __esri.uniqueValues;
  export = uniqueValues;
}

declare module "esri/renderers/smartMapping/symbology/color" {
  import symbologyColor = __esri.symbologyColor;
  export = symbologyColor;
}

declare module "esri/renderers/smartMapping/symbology/location" {
  import symbologyLocation = __esri.symbologyLocation;
  export = symbologyLocation;
}

declare module "esri/renderers/smartMapping/symbology/size" {
  import symbologySize = __esri.symbologySize;
  export = symbologySize;
}

declare module "esri/renderers/smartMapping/symbology/type" {
  import symbologyType = __esri.symbologyType;
  export = symbologyType;
}

declare module "esri/renderers/support/jsonUtils" {
  import supportJsonUtils = __esri.supportJsonUtils;
  export = supportJsonUtils;
}

declare module "esri/symbols/support/jsonUtils" {
  import symbolsSupportJsonUtils = __esri.symbolsSupportJsonUtils;
  export = symbolsSupportJsonUtils;
}

declare module "esri/views/3d/externalRenderers" {
  import externalRenderers = __esri.externalRenderers;
  export = externalRenderers;
}

declare module "esri/widgets/support/widget" {
  import widget = __esri.widget;
  export = widget;
}

declare module "esri/widgets/BasemapGallery/BasemapGalleryItem" {
  import BasemapGalleryItem = __esri.BasemapGalleryItem;
  export = BasemapGalleryItem;
}

declare module "esri/widgets/BasemapGallery/support/LocalBasemapsSource" {
  import LocalBasemapsSource = __esri.LocalBasemapsSource;
  export = LocalBasemapsSource;
}

declare module "esri/widgets/BasemapGallery/support/PortalBasemapsSource" {
  import PortalBasemapsSource = __esri.PortalBasemapsSource;
  export = PortalBasemapsSource;
}