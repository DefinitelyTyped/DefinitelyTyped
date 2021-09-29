/**
 * Class represents a plant ellipsoid.
 * @class
 * @param {number} equatorialSize - Equatorial ellipsoid size.
 * @param {number} polarSize - Polar ellipsoid size.
 */
export class Ellipsoid {
    static getRelativeBearing(a: any, b: any): number;
    /**
     * Returns the midpoint between two points on the great circle.
     * @param   {og.LonLat} lonLat1 - Longitude/latitude of first point.
     * @param   {og.LonLat} lonLat2 - Longitude/latitude of second point.
     * @return {og.LonLat} Midpoint between points.
     */
    static getMiddlePointOnGreatCircle(lonLat1: any, lonLat2: any): any;
    /**
     * Returns the point at given fraction between two points on the great circle.
     * @param   {og.LonLat} lonLat1 - Longitude/Latitude of source point.
     * @param   {og.LonLat} lonLat2 - Longitude/Latitude of destination point.
     * @param   {number} fraction - Fraction between the two points (0 = source point, 1 = destination point).
     * @returns {og.LonLat} Intermediate point between points.
     */
    static getIntermediatePointOnGreatCircle(lonLat1: any, lonLat2: any, fraction: number): any;
    static getRhumbBearing(lonLat1: any, lonLat2: any): number;
    static getBearing(lonLat1: any, lonLat2: any): number;
    /**
     * Returns the (initial) bearing from source to destination point on the great circle.
     * @param {og.LonLat} lonLat1 - Longitude/latitude of source point.
     * @param {og.LonLat} lonLat2 - Longitude/latitude of destination point.
     * @return {number} Initial bearing in degrees from north.
     */
    static getInitialBearing(lonLat1: any, lonLat2: any): number;
    /**
     * Returns the point of intersection of two paths defined by point and bearing.
     * @param   {og.LonLat} p1 - First point.
     * @param   {number} brng1 - Initial bearing from first point.
     * @param   {og.LonLat} p2 - Second point.
     * @param   {number} brng2 - Initial bearing from second point.
     * @return {og.LonLat|null} Destination point (null if no unique intersection defined).
     */
    static intersection(p1: any, brng1: number, p2: any, brng2: number): any | null;
    /**
     * Returns final bearing arriving at destination destination point from lonLat1 point; the final bearing
     * will differ from the initial bearing by varying degrees according to distance and latitude.
     * @param {og.LonLat} lonLat1 - Longitude/latitude of source point.
     * @param {og.LonLat} lonLat2 - Longitude/latitude of destination point.
     * @return {number} Final bearing in degrees from north.
     */
    static getFinalBearing(lonLat1: any, lonLat2: any): number;
    constructor(equatorialSize: any, polarSize: any);
    _a: any;
    _b: any;
    _flattening: number;
    _f: number;
    _a2: number;
    _b2: number;
    _e: number;
    _e2: number;
    _e22: number;
    _k: number;
    _k2: number;
    _radii: Vec3;
    _radii2: Vec3;
    _invRadii: Vec3;
    _invRadii2: Vec3;
    /**
     * Gets ellipsoid equatorial size.
     * @public
     * @returns {number} -
     */
    public getEquatorialSize(): number;
    /**
     * Gets ellipsoid polar size.
     * @public
     * @returns {number} -
     */
    public getPolarSize(): number;
    /**
     * Gets cartesian ECEF from Wgs84 geodetic coordiantes.
     * @public
     * @param {og.LonLat} lonlat - Degrees geodetic coordiantes.
     * @returns {og.Vec3} -
     */
    public lonLatToCartesian(lonlat: any): any;
    /**
     * Gets cartesian ECEF from Wgs84 geodetic coordiantes.
     * @public
     * @param {og.LonLat} lonlat - Degrees geodetic coordiantes.
     * @param {og.Vec3} res - Output result.
     * @returns {og.Vec3} -
     */
    public lonLatToCartesianRes(lonlat: any, res: any): any;
    /**
     * Gets cartesian ECEF from Wgs84 geodetic coordiantes.
     * @public
     * @param {Number} lon - Longitude.
     * @param {Number} lat - Latitude.
     * @param {Number} height - Height.
     * @returns {og.Vec3} -
     */
    public geodeticToCartesian(lon: number, lat: number, height?: number): any;
    /**
     * Gets Wgs84 geodetic coordiantes from cartesian ECEF.
     * @public
     * @param {og.Vec3} cartesian - Cartesian coordinates.
     * @returns {og.LonLat} -
     */
    public cartesianToLonLat(cartesian: any): any;
    /**
     * Gets ellipsoid surface normal.
     * @public
     * @param {og.Vec3} coord - Spatial coordiantes.
     * @returns {og.Vec3} -
     */
    public getSurfaceNormal3v(coord: any): any;
    getBearingDestination(lonLat1: any, bearing: any, distance: any): LonLat;
    /**
     * Returns the distance from one point to another(using haversine formula) on the great circle.
     * @param   {og.LonLat} lonLat1 - Longitude/latitude of source point.
     * @param   {og.LonLat} lonLat2 - Longitude/latitude of destination point.
     * @return {number} Distance between points.
     */
    getGreatCircleDistance(lonLat1: any, lonLat2: any): number;
    /**
     * Calculates the destination point given start point lat / lon, bearing(deg) and distance (m).
     *
     * Taken from http://movable-type.co.uk/scripts/latlong-vincenty-direct.html and optimized / cleaned up by Mathias Bynens <http://mathiasbynens.be/>
     * Based on the Vincenty direct formula by T. Vincenty, “Direct and Inverse Solutions of Geodesics on the Ellipsoid with application of nested equations”, Survey Review, vol XXII no 176, 1975 <http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf>
     */
    getGreatCircleDestination(lonLat: any, brng: any, dist: any): LonLat;
    /**
     * Returns ray vector hit ellipsoid coordinates.
     * If the ray doesn't hit ellipsoid returns null.
     * @public
     * @param {og.Vec3} origin - Ray origin point.
     * @param {og.Vec3} direction - Ray direction.
     * @returns {og.Vec3} -
     */
    public hitRay(origin: any, direction: any): any;
}
import { Vec3 } from "../math/Vec3.js";
import { LonLat } from "../LonLat.js";
