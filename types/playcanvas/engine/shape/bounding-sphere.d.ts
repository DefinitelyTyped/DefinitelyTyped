declare namespace pc {

    /**
     * @name pc.BoundingSphere
     * @class A bounding sphere is a volume for facilitating fast intersection testing.
     * @description Creates a new bounding sphere.
     * @example
     * // Create a new bounding sphere centered on the origin with a radius of 0.5
     * var sphere = new pc.BoundingSphere();
     * @param {pc.Vec3} [center] The world space coordinate marking the center of the sphere. The constructor takes a reference of this parameter.
     * @param {Number} [radius] The radius of the bounding sphere. Defaults to 0.5.
     */
    class BoundingSphere {
        constructor(center?: pc.Vec3, radius?: number)

        center: pc.Vec3;
        radius: number;

        /**
         * @function
         * @name pc.BoundingSphere#intersectsRay
         * @description Test if a ray intersects with the sphere.
         * @param {pc.Ray} ray Ray to test against (direction must be normalized).
         * @param {pc.Vec3} [point] If there is an intersection, the intersection point will be copied into here.
         * @returns {Boolean} True if there is an intersection.
         */
        intersectsRay(ray: pc.Ray, point: pc.Vec3): boolean;

        /**
         * @function
         * @name pc.BoundingSphere#intersectsBoundingSphere
         * @description Test if a Bounding Sphere is overlapping, enveloping, or inside this Bounding Sphere.
         * @param {pc.BoundingSphere} sphere Bounding Sphere to test.
         * @returns {Boolean} true if the Bounding Sphere is overlapping, enveloping, or inside this Bounding Sphere and false otherwise.
         */
        intersectsBoundingSphere(sphere: pc.BoundingSphere): boolean;
    }
}
