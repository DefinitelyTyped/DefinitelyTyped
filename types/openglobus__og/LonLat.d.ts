/**
 * Represents a geographical point with a certain latitude, longitude and height.
 * @class
 * @param {number} [lon] - Longitude.
 * @param {number} [lat] - Latitude.
 * @param {number} [height] - Height over the surface.
 */
export class LonLat {
    /**
     * Creates coordinates array.
     * @static
     * @param{Array.<Array<number,number,number>>} arr - Coordinates array data.
     * @return{Array.<og.LonLat>} the same coordinates array but each element is LonLat instance.
     */
    static join(arr: Array<Array<number, number, number>>): Array<any>;
    /**
     * Creates an object by coordinate array.
     * @static
     * @param {Array.<number,number,number>} arr - Coordiante array, where first is longitude, second is latitude and third is a height.
     * @returns {og.LonLat} -
     */
    static createFromArray(arr: Array<number, number, number>): any;
    /**
     * Converts degrees to mercator coordinates.
     * @static
     * @param {number} lon - Degrees longitude.
     * @param {number} lat - Degrees latitude.
     * @param {number} [height] - Height.
     * @returns {og.LonLat} -
     */
    static forwardMercator(lon: number, lat: number, height?: number): any;
    /**
     * Converts mercator to degrees coordinates.
     * @static
     * @param {number} x - Mercator longitude.
     * @param {number} y - Mercator latitude.
     * @param {number} [height] - Height.
     * @returns {og.LonLat} -
     */
    static inverseMercator(x: number, y: number, height?: number): any;
    constructor(lon: any, lat: any, height: any);
    /**
     * Longitude.
     * @public
     * @type {number}
     */
    public lon: number;
    /**
     * Latitude.
     * @public
     * @type {number}
     */
    public lat: number;
    /**
     * Height.
     * @public
     * @type {number}
     */
    public height: number;
    isZero(): boolean;
    /**
     * Sets coordinates.
     * @public
     * @param {number} [lon] - Longitude.
     * @param {number} [lat] - Latitude.
     * @param {number} [height] - Height.
     * @returns {og.LonLat} -
     */
    public set(lon?: number, lat?: number, height?: number): any;
    /**
     * Copy coordinates.
     * @public
     * @param {og.LonLat} [lonLat] - Coordinates to copy.
     * @returns {og.LonLat} -
     */
    public copy(lonLat?: any): any;
    /**
     * Clone the coordiante.
     * @public
     * @returns {og.LonLat} -
     */
    public clone(): any;
    /**
     * Converts to mercator coordinates.
     * @public
     * @returns {og.LonLat} -
     */
    public forwardMercator(): any;
    forwardMercatorEPS01(): LonLat;
    /**
     * Converts from mercator coordinates.
     * @public
     * @returns {og.LonLat} -
     */
    public inverseMercator(): any;
    /**
     * Compares coordinates.
     * @public
     * @param {og.LonLat} b - Coordinate to compare with.
     * @returns {boolean} -
     */
    public equal(b: any): boolean;
}
