export class Geometry {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    static getType(typeStr: any): any;
    /**
     * Returns geometry feature extent.
     @static
     @param {Object} geometryObj - GeoJSON style geometry feature.
     @param {og.LonLat[]} outCoordinates - Geometry feature coordinates clone.
     @returns {og.Extent} -
     */
    static getExtent(geometryObj: any, outCoordinates: any[]): any;
    constructor(options: any);
    _id: number;
    /**
     * Entity instance that holds this geometry.
     * @protected
     * @type {og.Entity}
     */
    protected _entity: any;
    _handler: any;
    _handlerIndex: number;
    _polyVerticesHighMerc: any[];
    _polyVerticesLowMerc: any[];
    _polyVerticesLength: number;
    _polyIndexesLength: number;
    _polyVerticesHandlerIndex: number;
    _polyIndexesHandlerIndex: number;
    _lineVerticesHighMerc: any[];
    _lineVerticesLowMerc: any[];
    _lineVerticesLength: number;
    _lineOrdersLength: number;
    _lineIndexesLength: number;
    _lineColorsLength: number;
    _lineThicknessLength: number;
    _lineVerticesHandlerIndex: number;
    _lineOrdersHandlerIndex: number;
    _lineIndexesHandlerIndex: number;
    _lineThicknessHandlerIndex: number;
    _lineColorsHandlerIndex: number;
    _type: any;
    _coordinates: any[];
    _extent: any;
    _style: any;
    _visibility: any;
    _pickingReady: boolean;
    setGeometry(geoJson: any): Geometry;
    setFillColor(r: any, g: any, b: any, a: any): Geometry;
    setFillColor4v(rgba: any): Geometry;
    setStrokeColor(r: any, g: any, b: any, a: any): Geometry;
    setLineColor(r: any, g: any, b: any, a: any): Geometry;
    setStrokeColor4v(rgba: any): Geometry;
    setLineColor4v(rgba: any): Geometry;
    setStrokeOpacity(opacity: any): Geometry;
    setLineOpacity(opacity: any): Geometry;
    setStrokeWidth(width: any): Geometry;
    bringToFront(): Geometry;
    setLineWidth(width: any): Geometry;
    setFillOpacity(opacity: any): Geometry;
    setVisibility(visibility: any): Geometry;
    getVisibility(): any;
    remove(): void;
    getExtent(): any;
    getType(): any;
}
export namespace GeometryType {
    const POINT: number;
    const LINESTRING: number;
    const POLYGON: number;
    const MULTIPOLYGON: number;
    const MULTILINESTRING: number;
}
