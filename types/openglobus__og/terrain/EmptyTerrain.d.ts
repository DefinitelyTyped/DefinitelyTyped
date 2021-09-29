/**
 * Class represents terrain provider without elevation data.
 * @class
 */
export class EmptyTerrain {
    static checkNoDataValue(noDataValues: any, value: any): boolean;
    constructor(options?: {});
    equalizeVertices: boolean;
    equalizeNormals: boolean;
    /**
     * Provider name is "empty"
     * @public
     * @type {string}
     */
    public name: string;
    /**
     * Minimal z-index value for segment elevation data handling.
     * @public
     * @type {number}
     */
    public minZoom: number;
    /**
     * Maximal z-index value for segment elevation data handling.
     * @public
     * @type {number}
     */
    public maxZoom: number;
    /**
     * @public
     * @type {Array.<number>}
     */
    public gridSizeByZoom: Array<number>;
    _maxNodeZoom: number;
    /**
     * Elevation grid size. Currend is 2x2 is the smallest grid size.
     * @public
     * @type {number}
     */
    public plainGridSize: number;
    /**
     * Planet node.
     * @protected
     * @type {og.scene.Planet}
     */
    protected _planet: any;
    _geoid: any;
    isBlur(): boolean;
    set maxNodeZoom(arg: number);
    get maxNodeZoom(): number;
    set geoid(arg: any);
    get geoid(): any;
    /**
     * Loads or creates segment elevation data.
     * @public
     * @virtual
     * @param {og.planetSegment.Segment} segment - Segment to create elevation data.
     */
    public handleSegmentTerrain(segment: any): void;
    isReady(): any;
    /**
     * Abstract function
     * @public
     * @abstract
     */
    public abortLoading(): void;
    /**
     * Abstract function
     * @public
     * @abstract
     */
    public clearCache(): void;
}
