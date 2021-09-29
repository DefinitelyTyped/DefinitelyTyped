export function forward(lonLat: any): LonLat;
/**
 * Converts degrees longitude to mercator coordinate.
 * @function
 * @param {number} lon - Degrees geodetic longitude.
 * @returns {number} -
 */
export function forward_lon(lon: number): number;
/**
 * Converts degrees latitude to mercator coordinate.
 * @function
 * @param {number} lat - Degrees geodetic latitude.
 * @returns {number} -
 */
export function forward_lat(lat: number): number;
/**
 * Converts mercator longitude to degrees coordinate.
 * @function
 * @param {number} lon - Mercator longitude.
 * @returns {number} -
 */
export function inverse_lon(lon: number): number;
/**
 * Converts mercator latitude to degrees coordinate.
 * @function
 * @param {number} lon - Mercator latitude.
 * @returns {number} -
 */
export function inverse_lat(lat: any): number;
/**
 * Returns mercator map tile grid horizontal coordinate index by geodetic
 * longitude and zoom level. Where top left corner of the grid is 0 coordinate index.
 * @function
 * @param {number} lon - Geodetic degrees longitude.
 * @param {number} zoom - Zoom level.
 * @returns {number}
 */
export function getTileX(lon: number, zoom: number): number;
/**
 * Returns mercator map tile grid vertical coordinate index by geodetic
 * latitude and zoom level. Where top left corner of the grid is 0 coordinate index.
 * @function
 * @param {number} lat - Geodetic degrees latitude.
 * @param {number} zoom - Zoom level.
 * @returns {number}
 */
export function getTileY(lat: number, zoom: number): number;
/**
 * Converts geodetic coordinate array to mercator coordinate array.
 * @function
 * @param {Array.<og.LonLat>} lonLatArr - LonLat array to convert.
 * @returns {Array.<og.LonLat>}
 */
export function forwardArray(lonlatArr: any): Array<any>;
export function getTileExtent(x: any, y: any, z: any): Extent;
/**
 * Mercator size.
 * @const
 * @type {number}
 */
export const POLE: number;
export const POLE2: number;
export const PI_BY_POLE: number;
export const POLE_BY_PI: number;
export const POLE_BY_180: number;
export const INV_POLE_BY_180: number;
/**
 * Double mercator size.
 * @const
 * @type {number}
 */
export const POLE_DOUBLE: number;
/**
 * One by mercator double size.
 * @const
 * @type {number}
 */
export const ONE_BY_POLE_DOUBLE: number;
/**
 * Max mercator latitude.
 * @const
 * @type {number}
 */
export const MAX_LAT: number;
/**
 * Min mercator latitude.
 * @const
 * @type {number}
 */
export const MIN_LAT: number;
import { LonLat } from "./LonLat.js";
import { Extent } from "./Extent.js";
