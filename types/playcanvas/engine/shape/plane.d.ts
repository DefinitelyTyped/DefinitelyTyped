declare namespace pc {

    /**
     * @private
     * @name pc.Plane
     * @class An infinite plane.
     * @description Create an infinite plane.
     * @param {pc.Vec3} [point] Point position on the plane. The constructor takes a reference of this parameter.
     * @param {pc.Vec3} [normal] Normal of the plane. The constructor takes a reference of this parameter.
     */
    class Plane {
        constructor(point: pc.Vec3, normal: pc.Vec3)

        /**
         * @function
         * @name pc.Plane#intersectsLine
         * @description Test if the plane intersects between two points.
         * @param {pc.Vec3} start Start position of line.
         * @param {pc.Vec3} end End position of line.
         * @param {pc.Vec3} [point] If there is an intersection, the intersection point will be copied into here.
         * @returns {Boolean} True if there is an intersection.
         */
        intersectsLine(start: pc.Vec3, end: pc.Vec3, point?: pc.Vec3): boolean;

        /**
         * @function
         * @name pc.Plane#intersectsRay
         * @description Test if a ray intersects with the infinite plane
         * @param {pc.Ray} ray Ray to test against (direction must be normalized)
         * @param {pc.Vec3} [point] If there is an intersection, the intersection point will be copied into here
         * @returns {Boolean} True if there is an intersection
         */
        intersectsRay(ray: pc.Ray, point: pc.Vec3): boolean;
    }
}
