/**
 * Represents geographical coordinates extent.
 * @class
 * @param {og.LonLat} [sw] - South West extent corner coordiantes.
 * @param {og.LonLat} [ne] - North East extent corner coordiantes.
 */
export class Extent {
    /**
     * Whole mercator extent.
     * @const
     */
    static get FULL_MERC(): Extent;
    /**
     * Degrees extent from north mercator limit to north pole.
     * @const
     */
    static get NORTH_POLE_DEG(): Extent;
    /**
     * Degrees extent from south pole to south mercator limit.
     * @const
     */
    static get SOUTH_POLE_DEG(): Extent;
    /**
     * Creates extent instance from values in array.
     * @static
     * @param {Array.<number,number,number,number>} arr - South west and north east longitude and latidudes packed in array.
     * @return {og.Extent} Extent object.
     */
    static createFromArray(arr: Array<number>): any;
    /**
     * Creates bound extent instance by coordinate array.
     * @static
     * @param {Array.<og.LonLat>} arr - Coordinate array.
     * @return {og.Extent} Extent object.
     */
    static createByCoordinates(arr: Array<any>): any;
    /**
     * Creates bound extent instance by coordinate array.
     * @static
     * @param {Array.<Array<number,number>>} arr - Coordinate array.
     * @return {og.Extent} Extent object.
     */
    static createByCoordinatesArr(arr: Array<Array<number>>): any;
    /**
     * Creates extent by meractor grid tile coordinates.
     * @static
     * @param {number} x -
     * @param {number} y -
     * @param {number} z -
     * @param {number} width -
     * @param {number} height -
     * @returns {og.Extent} -
     */
    static fromTile(x: number, y: number, z: number, width: number, height: number): any;
    constructor(sw: any, ne: any);
    /**
     * @public
     */
    public southWest: any;
    /**
     * @public
     */
    public northEast: any;
    /**
     * Sets current bounding extent object by coordinate array.
     * @public
     * @param {Array.<og.LonLat>} arr - Coordinate array.
     * @return {og.Extent} Current extent.
     */
    public setByCoordinates(arr: Array<any>): any;
    /**
     * Determines if point inside extent.
     * @public
     * @param {LonLat} lonlat - Coordinate point.
     * @return {boolean} Returns true if point inside extent.
     */
    public isInside(lonlat: LonLat): boolean;
    /**
     * Returns true if two extent overlap each other.
     * @public
     * @param {Extent} e - Another extent.
     * @return {boolean} -
     */
    public overlaps(e: Extent): boolean;
    /**
     * Gets extent width.
     * @public
     * @return {number} Extent width.
     */
    public getWidth(): number;
    /**
     * Gets extent height.
     * @public
     * @return {number} Extent height.
     */
    public getHeight(): number;
    /**
     * Creates clone instance of the current extent.
     * @public
     * @return {og.Extent} Extent clone.
     */
    public clone(): any;
    /**
     * Gets the center coordinate of the extent.
     * @public
     * @return {number} Center coordinate.
     */
    public getCenter(): number;
    /**
     * @public
     */
    public getNorthWest(): LonLat;
    /**
     * @public
     */
    public getNorthEast(): LonLat;
    getSouthWest(): LonLat;
    /**
     * @public
     */
    public getSouthEast(): LonLat;
    /**
     * @public
     */
    public getNorth(): any;
    getEast(): any;
    /**
     * @public
     */
    public getWest(): any;
    /**
     * @public
     */
    public getSouth(): any;
    /**
     * Returns extents are equals.
     * @param {og.Extent} extent - Extent.
     * @returns {boolean} -
     */
    equals(extent: any): boolean;
    /**
     * Converts extent coordinates to mercator projection coordinates.
     * @public
     * @return {og.Extent} New instance of the current extent.
     */
    public forwardMercator(): any;
    /**
     * Converts extent coordinates from mercator projection to degrees.
     * @public
     * @return {og.Extent} New instance of the current extent.
     */
    public inverseMercator(): any;
    /**
     * Gets cartesian bounding bounds of the current ellipsoid.
     * @public
     * @param {og.Ellipsoid} ellipsoid - Ellipsoid.
     * @return {Array.<number,number,number,number,number,number>} Cartesian 3d coordinate array.
     */
    public getCartesianBounds(ellipsoid: any): Array<number>;
    toString(): string;
}
import { LonLat } from "./LonLat.js";
