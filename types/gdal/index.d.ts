// Type definitions for gdal 0.9
// Project: https://github.com/naturalatlas/node-gdal#readme
// Definitions by: Andrei Digori <https://github.com/andreidigori>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export as namespace gdal;

/* Internal interfaces */

export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export type Resampling = 'NEAREST' | 'GAUSS' | 'CUBIC' | 'AVERAGE' | 'MODE' | 'AVERAGE_MAGPHASE' | 'NONE';

export interface XY {
    x: number;
    y: number;
}

export interface XYZ extends XY {
    z: number;
}

export interface EnvelopeBounds {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
}

export interface Envelope3DBounds extends EnvelopeBounds {
    minZ: number;
    maxZ: number;
}

export interface RasterBandStatistics {
    min: number;
    max: number;
    mean: number;
    std_dev: number;
}

export interface RasterBandPixelsWriteOptions {
    buffer_width?: number;
    buffer_height?: number;
    pixel_space?: number;
    line_space?: number;
}

export interface RasterBandPixelsReadOptions {
    buffer_width?: number;
    buffer_height?: number;
    pixel_space?: number;
    line_space?: number;
    data_type?: string;
}

export interface ContourGenerateOptions {
    src: RasterBand;
    dst: Layer;
    offset?: number;
    interval?: number;
    fixedLevels?: number[];
    nodata?: number;
    idField?: number;
    elevField?: number;
}

export interface FillNoDataOptions {
    src: RasterBand;
    mask?: RasterBand;
    searchDist: number;
    smoothingIterations?: number;
}

export interface PolygonizeOptions {
    src: RasterBand;
    dst: Layer;
    mask?: RasterBand;
    pixValField: number;
    connectedness?: number;
    useFloats?: boolean;
}

export interface ReprojectImageOptions {
    src: Dataset;
    dst: Dataset;
    s_srs: SpatialReference;
    t_srs: SpatialReference;
    resampling?: string;
    cutline?: Geometry;
    srcBands?: number[];
    dstBands?: number[];
    srcAlphaBand?: number;
    dstAlphaBand?: number;
    srcNodata?: number;
    dstNodata?: number;
    memoryLimit?: number;
    maxError?: number;
    multi?: boolean;
    options?: string[] | object;
}

export interface SieveFilterOptions {
    src: RasterBand;
    dst: RasterBand;
    mask?: RasterBand;
    threshold: number;
    connectedness?: number;
}

export interface SuggestedWarpOutputOptions {
    src: Dataset;
    s_srs: SpatialReference;
    t_srs: SpatialReference;
    maxError?: number;
}

/* From API: https://naturalatlas.github.io/node-gdal/ */

/* Constants */

// CPL Error Codes
export const CPLE_AppDefined: number;
export const CPLE_AssertionFailed: number;
export const CPLE_FileIO: number;
export const CPLE_IllegalArg: number;
export const CPLE_None: number;
export const CPLE_NotSupported: number;
export const CPLE_NoWriteAccess: number;
export const CPLE_ObjectNull: number;
export const CPLE_OpenFailed: number;
export const CPLE_OutOfMemory: number;
export const CPLE_UserInterrupt: number;

// CPL Error Levels
export const CE_Debug: number;
export const CE_Failure: number;
export const CE_Fatal: number;
export const CE_None: number;
export const CE_Warning: number;

// DCAP
export const DCAP_CREATE: string;
export const DCAP_CREATECOPY: string;
export const DCAP_VIRTUALIO: string;

// DMD
export const DMD_CREATIONDATATYPES: string;
export const DMD_CREATIONOPTIONLIST: string;
export const DMD_EXTENSION: string;
export const DMD_HELPTOPIC: string;
export const DMD_LONGNAME: string;
export const DMD_MIMETYPE: string;

// GCI
export const GCI_AlphaBand: string;
export const GCI_BlackBand: string;
export const GCI_BlueBand: string;
export const GCI_CyanBand: string;
export const GCI_GrayIndex: string;
export const GCI_GreenBand: string;
export const GCI_HueBand: string;
export const GCI_LightnessBand: string;
export const GCI_MagentaBand: string;
export const GCI_PaletteIndex: string;
export const GCI_RedBand: string;
export const GCI_SaturationBand: string;
export const GCI_Undefined: string;
export const GCI_YCbCr_CbBand: string;
export const GCI_YCbCr_CrBand: string;
export const GCI_YCbCr_YBand: string;
export const GCI_YellowBand: string;

// GDT
export const GDT_Byte: string;
export const GDT_CFloat32: string;
export const GDT_CFloat64: string;
export const GDT_CInt16: string;
export const GDT_CInt32: string;
export const GDT_Float32: string;
export const GDT_Float64: string;
export const GDT_Int16: string;
export const GDT_Int32: string;
export const GDT_UInt16: string;
export const GDT_UInt32: string;
export const GDT_Unknown: string;

// GRA
export const GRA_Average: string;
export const GRA_Bilinear: string;
export const GRA_Cubic: string;
export const GRA_CubicSpline: string;
export const GRA_Lanczos: string;
export const GRA_Mode: string;
export const GRA_NearestNeighbor: string;

// ODsC
export const ODrCCreateDataSource: string;
export const ODrCDeleteDataSource: string;
export const ODsCCreateGeomFieldAfterCreateLayer: string;
export const ODsCCreateLayer: string;
export const ODsCDeleteLayer: string;

// OFT
export const OFTBinary: string;
export const OFTDate: string;
export const OFTDateTime: string;
export const OFTInteger: string;
export const OFTIntegerList: string;
export const OFTReal: string;
export const OFTRealList: string;
export const OFTString: string;
export const OFTStringList: string;
export const OFTTime: string;
export const OFTWideString: string;
export const OFTWideStringList: string;

// OJ
export const OJLeft: string;
export const OJRight: string;
export const OJUndefined: string;

// OLC
export const OLCAlterFieldDefn: string;
export const OLCCreateField: string;
export const OLCCreateGeomField: string;
export const OLCDeleteFeature: string;
export const OLCDeleteField: string;
export const OLCFastFeatureCount: string;
export const OLCFastGetExtent: string;
export const OLCFastSetNextByIndex: string;
export const OLCFastSpatialFilter: string;
export const OLCIgnoreFields: string;
export const OLCRandomRead: string;
export const OLCRandomWrite: string;
export const OLCReorderFields: string;
export const OLCSequentialWrite: string;
export const OLCStringsAsUTF8: string;
export const OLCTransactions: string;

// wkbByteOrder
export const wkbNDR: string;
export const wkbXDR: string;

// wkbGeometryType
export const wkb25DBit: number;
export const wkbGeometryCollection: number;
export const wkbGeometryCollection25D: number;
export const wkbLinearRing: string;
export const wkbLinearRing25D: number;
export const wkbLineString: number;
export const wkbLineString25D: number;
export const wkbMultiLineString: number;
export const wkbMultiLineString25D: number;
export const wkbMultiPoint: number;
export const wkbMultiPoint25D: number;
export const wkbMultiPolygon: number;
export const wkbMultiPolygon25D: number;
export const wkbNone: number;
export const wkbPoint: number;
export const wkbPoint25D: number;
export const wkbPolygon: number;
export const wkbPolygon25D: number;
export const wkbUnknown: number;

// wkbVariant
export const wkbVariantIso: string;
export const wkbVariantOgc: string;
export const wkbVariantOldOgc: string;

/* Classes and interfaces */

export class CoordinateTransformation {
    constructor(source: SpatialReference, target: SpatialReference | Dataset);
    transformPoint(x: number, y: number, z?: number): XYZ;
}

export interface Dataset {
    buildOverviews(resampling: Resampling, overviews: number[], bands?: number[]): void;
    close(): void;
    executeSQL(statement: string, spatial_filter?: Geometry, dialect?: string): Layer;
    flush(): void;
    getFileList(): string[];
    getGCPProjection(): string;
    getGCPs(): object[];
    getMetadata(domain?: string): object;
    setGCPs(gcps: object[], projection: string): void;
    testCapability(capability: string): boolean;

    readonly bands: DatasetBands;
    readonly description: string;
    readonly driver: Driver;
    geoTransform: number[];
    readonly layers: DatasetLayers;
    readonly rasterSize: XY;
    srs: SpatialReference;
}

export interface DatasetBands {
    count(): number;
    create(dataType: number): RasterBand;
    forEach(callback: (band: RasterBand, i: number) => void): void;
    get(id: number): RasterBand;
    map<T>(callback: (band: RasterBand, i: number) => T): T[];

    readonly ds: Dataset;
}

export interface DatasetLayers {
    copy(src_lyr_name: string, dst_lyr_name: string, options?: object | string[]): Layer;
    count(): number;
    create(name: string, srs: SpatialReference, geomType: number | Geometry, creation_options: string[] | object): Layer;
    forEach(callback: (layer: Layer, i: number) => void): void;
    get(key: string | number): Layer;
    map<T>(callback: (layer: Layer, i: number) => T): T[];
    remove(index: number): void;

    readonly ds: Dataset;
}

export interface Driver {
    copyFiles(name_old: string, name_new: string): void;
    create(filename: string, x_size?: number, y_size?: number, band_count?: number, data_type?: number, creation_options?: string[] | object): Dataset;
    createCopy(filename: string, src: Dataset, strict?: boolean, options?: string[] | object): Dataset;
    deleteDataset(filename: string): void;
    getMetadata(domain?: string): object;
    open(path: string, mode?: 'r' | 'r+'): Dataset;
    rename(new_name: string, old_name: string): void;

    readonly description: string;
}

export class Envelope {
    constructor(bounds: EnvelopeBounds);
    contains(envelope: Envelope): boolean;
    intersect(envelope: Envelope): void;
    intersects(envelope: Envelope): boolean;
    isEmpty(): boolean;
    merge(envelope: Envelope): void;
    toPolygon(): Polygon;
}

export class Envelope3D extends Envelope {
    constructor(bounds: Envelope3DBounds);
}

export class Feature {
    constructor(definition: Layer | FeatureDefn);
    clone(): Feature;
    destroy(): void;
    equals(feature: Feature): boolean;
    getFieldDefn(index: number): FieldDefn;
    getGeometry(): Geometry;
    setFrom(feature: Feature, index_map?: number[], forgiving?: boolean): void;
    setGeometry(geometry: Geometry): void;

    readonly defn: FeatureDefn;
    fid: number;
    readonly fields: FeatureFields;
}

export class FeatureDefn {
    constructor();
    clone(): FeatureDefn;

    readonly fields: FeatureDefnFields;
    geomIgnored: boolean;
    geomType: number;
    readonly name: string;
    styleIgnored: boolean;
}

export interface FeatureDefnFields {
    add(field: FieldDefn | FieldDefn[]): void;
    count(): number;
    forEach(callback: (field: FieldDefn, i: number) => void): void;
    get(key: string | number): FieldDefn;
    getNames(): string[];
    indexOf(name: string): number;
    map<T>(callback: (field: FieldDefn, i: number) => T): T[];
    remove(key: string | number): void;
    reorder(map: number[]): void;

    readonly featureDefn: FeatureDefn;
}

export interface FeatureFields {
    count(): number;
    forEach(callback: (value: any, key: string) => void): void;
    get(key: string | number): any;
    getNames(): string[];
    indexOf(name: string): number;
    map<T>(callback: (value: any, key: string) => T): T[];
    reset(values: object, value: any): void;
    set(key: string | number, value: any): void;
    toArray(): any[];
    toJSON(): string;
    toObject(): object;

    readonly feature: Feature;
}

export class FieldDefn {
    constructor(name: string, type: string);

    ignored: boolean;
    justification: string;
    name: string;
    precision: number;
    type: string;
    width: number;
}

export interface GDALDrivers {
    count(): number;
    forEach(callback: (driver: Driver, i: number) => void): void;
    get(index: number | string): Driver;
    getNames(): string[];
    map<T>(callback: (driver: Driver, i: number) => T): T[];
}

export abstract class Geometry {
    static create(type: number): Geometry;
    static fromWKB(wkb: number, srs?: SpatialReference): Geometry;
    static fromWKT(wkt: string, srs?: SpatialReference): Geometry;
    static getConstructor(type: number): Geometry;
    static getName(type: number): string;

    boundary(): Geometry;
    buffer(distance: number, segments: number): Geometry;
    centroid(): Point;
    clone(): Geometry;
    closeRings(): void;
    contains(geometry: Geometry): boolean;
    convexHull(): Geometry;
    crosses(geometry: Geometry): boolean;
    difference(geometry: Geometry): Geometry;
    disjoint(geometry: Geometry): boolean;
    distance(geometry: Geometry): number;
    empty(): void;
    equals(geometry: Geometry): boolean;
    getEnvelope(): Envelope;
    getEnvelope3D(): Envelope3D;
    intersection(geometry: Geometry): Geometry;
    intersects(geometry: Geometry): boolean;
    isEmpty(): boolean;
    isRing(): boolean;
    isSimple(): boolean;
    isValid(): boolean;
    overlaps(geometry: Geometry): boolean;
    segmentize(segment_length: number): number;
    simplify(tolerance: number): Geometry;
    simplifyPreserveTopology(tolerance: number): Geometry;
    swapXY(): void;
    symDifference(geometry: Geometry): Geometry;
    toGML(): Geometry;
    toJSON(): Geometry;
    toKML(): Geometry;
    toObject(): object;
    touches(geometry: Geometry): boolean;
    toWKB(byte_order?: string, variant?: string): Geometry;
    toWKT(): Geometry;
    transform(transformation: CoordinateTransformation): void;
    transformTo(srs: SpatialReference): void;
    union(geometry: Geometry): Geometry;
    within(geometry: Geometry): boolean;

    readonly coordinateDimension: number;
    readonly dimension: number;
    readonly name: string;
    srs: SpatialReference;
    readonly wkbSize: number;
    readonly wkbType: number;
}

export class GeometryCollection extends Geometry {
    getArea(): number;
    getLength(): number;

    children: GeometryCollectionChildren;
}

export interface GeometryCollectionChildren {
    add(geometry: Geometry | Geometry[]): void;
    count(): number;
    forEach(callback: (geometry: Geometry, i: number) => void): void;
    get(index: number): Geometry;
    map<T>(callback: (geometry: Geometry, i: number) => T): T[];
    remove(index: number): void;
    toArray(): Geometry[];
    readonly layer: Layer;
}

export interface Layer {
    flush(): void;
    getExtent(force?: boolean): Envelope;
    getSpatialFilter(): Geometry;
    setAttributeFilter(filter: string): void;
    setSpatialFilter(filter: Geometry): void;
    setSpatialFilter(minX: number, maxX: number, minY: number, maxY: number): void;
    testCapability(capability: string): boolean;
    readonly ds: Dataset;
    readonly features: LayerFeatures;
    readonly fidColumn: string;
    readonly fields: LayerFields;
    readonly geomColumn: string;
    readonly geomType: number;
    readonly name: string;
    readonly srs: SpatialReference;
}

export interface LayerFeatures {
    add(feature: Feature): void;
    count(force?: boolean): number;
    first(): Feature;
    forEach(callback: (feature: Feature, i: number) => void): void;
    get(id: number): Feature;
    map<T>(callback: (feature: Feature, i: number) => T): T[];
    next(): Feature;
    remove(id: number): void;
    set(id: number, feature: Feature): void;
    readonly layer: Layer;
}

export interface LayerFields {
    add(def: FieldDefn | FieldDefn[], approx?: boolean): void;
    count(): number;
    forEach(callback: (field: FieldDefn, i: number) => void): void;
    fromJSON(object: object, approx_ok?: boolean): LayerFields;
    get(field: string | number): FieldDefn;
    getNames(): string[];
    indexOf(field: string): number;
    map<T>(callback: (field: FieldDefn, i: number) => T): T[];
    remove(field: string | number): void;
    reorder(map: number[]): void;
    readonly layer: Layer;
}

export class LinearRing extends LineString {
    getArea(): number;
}

export class LineString extends Geometry {
    addSubLineString(line: LineString, start?: number, end?: number): void;
    getLength(): number;
    value(distance: number): Point;
    readonly points: LineStringPoints;
}

export interface LineStringPoints {
    add(point: Point | Point[]): void;
    count(): number;
    forEach(callback: (point: Point, i: number) => void): void;
    get(index: number): Point;
    map<T>(callback: (point: Point, i: number) => T): T[];
    remove(index: number): void;
    resize(count: number): void;
    reverse(): void;
    set(index: number, point: Point): void;
    toArray(): Point[];
}

export class MultiLineString extends GeometryCollection {
    polygonize(): Polygon;
}

export class MultiPoint extends GeometryCollection {}

export class MultiPolygon extends GeometryCollection {
    getArea(): number;
    unionCascaded(): Geometry;
}

export class Point extends Geometry {
    constructor(x: number, y: number, z?: number);
    x: number;
    y: number;
    z: number;
}

export class Polygon extends Geometry {
    getArea(): number;
    rings: PolygonRings;
}

export interface PolygonRings {
    add(ring: LinearRing | LinearRing[]): void;
    count(): number;
    forEach(callback: (ring: LinearRing, i: number) => void): void;
    get(index: number): LinearRing;
    map<T>(callback: (ring: LinearRing, i: number) => T): T[];
    remove(index: number): void;
    toArray(): LinearRing[];
    readonly layer: Layer;
}

export interface RasterBand {
    computeStatistics(allow_approximation: boolean): RasterBandStatistics;
    createMaskBand(flags: number): void;
    fill(real_value: number, imaginary_value?: number): void;
    flush(): void;
    getMaskBand(): RasterBand;
    getMaskFlags(): number;
    getMetadata(domain?: string): object;
    getStatistics(allow_approximation: boolean, force: boolean): RasterBandStatistics;
    setStatistics(min: number, max: number, mean: number, std_dev: number): void;
    readonly blockSize: XY;
    categoryNames: string[];
    colorInterpretation: string;
    readonly dataType: string;
    readonly description: string;
    readonly ds: Dataset;
    readonly hasArbitraryOverviews: boolean;
    readonly id: number;
    readonly maximum: number;
    readonly minimum: number;
    noDataValue: number;
    offset: number;
    readonly overviews: RasterBandOverviews;
    readonly pixels: RasterBandPixels;
    readonly readOnly: boolean;
    scale: number;
    readonly size: XY;
    unitType: string;
}

export interface RasterBandOverviews {
    count(): number;
    forEach(callback: (overviewBand: RasterBand, i: number) => void): void;
    get(index: number): RasterBand;
    getBySampleCount(samples: number): RasterBand;
    map<T>(callback: (overviewBand: RasterBand, i: number) => T): T[];
}

export interface RasterBandPixels {
    get(x: number, y: number): number;
    read(x: number, y: number, width: number, height: number, data?: TypedArray, options?: RasterBandPixelsReadOptions): TypedArray;
    readBlock(x: number, y: number, data?: TypedArray): TypedArray;
    set(x: number, y: number, value: number): void;
    write(x: number, y: number, width: number, height: number, data: TypedArray, options?: RasterBandPixelsWriteOptions): void;
    writeBlock(x: number, y: number, data: TypedArray): void;
}

export class SpatialReference {
    constructor(wkt?: string);
    autoIdentifyEPSG(): void;
    clone(): SpatialReference;
    cloneGeogCS(): SpatialReference;
    EPSGTreatsAsLatLong(): boolean;
    EPSGTreatsAsNorthingEasting(): boolean;
    getAngularUnits(): { value: any, unit: any };
    getAttrValue(node_name: string, attr_index?: number): string;
    getAuthorityCode(target_key: string): string;
    getAuthorityName(target_key: string): string;
    getLinearUnits(): { value: any, unit: any };
    isCompound(): boolean;
    isGeocentric(): boolean;
    isGeographic(): boolean;
    isLocal(): boolean;
    isProjected(): boolean;
    isSame(srs: SpatialReference): boolean;
    isSameGeogCS(srs: SpatialReference): boolean;
    isSameVertCS(srs: SpatialReference): boolean;
    isVertical(): boolean;
    morphFromESRI(): void;
    morphToESRI(): void;
    setWellKnownGeogCS(name: string): void;
    toPrettyWKT(simplify?: boolean): string;
    toProj4(): string;
    toWKT(): string;
    toXML(): string;
    validate(): string;
    static fromCRSURL(input: string): SpatialReference;
    static fromEPSG(input: string): SpatialReference;
    static fromEPSGA(input: number): SpatialReference;
    static fromESRI(input: string[]): SpatialReference;
    static fromMICoordSys(input: string): SpatialReference;
    static fromProj4(input: string): SpatialReference;
    static fromURL(url: string): SpatialReference;
    static fromURN(input: string): SpatialReference;
    static fromUserInput(input: string): SpatialReference;
    static fromWKT(wkt: string): SpatialReference;
    static fromWMSAUTO(input: string): SpatialReference;
    static fromXML(input: string): SpatialReference;
}

export namespace config {
    function get(key: string): string;
    function set(key: string, value: string): void;
}

export const drivers: GDALDrivers;
export const lastError: { number: any, message: any, type: any };
export const version: string;

export function checksumImage(src: RasterBand, x?: number, y?: number, w?: number, h?: number): number;
export function contourGenerate(options: ContourGenerateOptions): void;
export function decToDMS(angle: number, axis: 'lat' | 'long', precision?: number): string;
export function fillNodata(options: FillNoDataOptions): void;
export function open(path: string, mode?: 'r' | 'r+' | 'w', drivers?: string | string[]): Dataset;
export function open(path: string, mode?: 'w', drivers?: string | string[], x_size?: number, y_size?: number, band_count?: number, data_type?: number, creation_options?: string[] | object): Dataset;
export function polygonize(options: PolygonizeOptions): void;
export function quiet(): void;
export function reprojectImage(options: ReprojectImageOptions): void;
export function sieveFilter(options: SieveFilterOptions): void;
export function suggestedWarpOutput(options: SuggestedWarpOutputOptions): { rasterSize: any, geoTransform: any };
export function verbose(): void;
