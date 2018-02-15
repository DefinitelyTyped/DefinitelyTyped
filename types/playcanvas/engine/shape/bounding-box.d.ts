declare namespace pc {

    /**
     * @name pc.BoundingBox
     * @description Create a new axis-aligned bounding box.
     * @class Axis-Aligned Bounding Box.
     * @param {pc.Vec3} [center] Center of box. The constructor takes a reference of this parameter.
     * @param {pc.Vec3} [halfExtents] Half the distance across the box in each axis. The constructor takes a reference of this parameter.
     */
    class BoundingBox {
        constructor(center?: pc.Vec3, halfExtents?: pc.Vec3)

        center: pc.Vec3;
        halfExtents: pc.Vec3;

        /**
         * @function
         * @name pc.BoundingBox#add
         * @description Combines two bounding boxes into one, enclosing both.
         * @param {pc.BoundingBox} other Bounding box to add.
         */
        add(other: pc.BoundingBox): void;

        /**
         * @function
         * @name pc.BoundingBox#intersects
         * @description Test whether two axis-aligned bounding boxes intersect.
         * @param {pc.BoundingBox} other Bounding box to test against.
         * @returns {Boolean} True if there is an intersection.
         */
        intersects(other: pc.BoundingBox): boolean;

        /**
         * @function
         * @name pc.BoundingBox#intersectsRay
         * @description Test if a ray intersects with the AABB.
         * @param {pc.Ray} ray Ray to test against (direction must be normalized).
         * @param {pc.Vec3} [point] If there is an intersection, the intersection point will be copied into here.
         * @returns {Boolean} True if there is an intersection.
         */
        intersectsRay(ray: pc.Ray, point: pc.Vec3): boolean;

        /**
         * @function
         * @name pc.BoundingBox#getMin
         * @description Return the minimum corner of the AABB.
         * @returns {pc.Vec3} minimum corner.
         */
        getMin(): pc.Vec3;

        /**
         * @function
         * @name pc.BoundingBox#getMax
         * @description Return the maximum corner of the AABB.
         * @returns {pc.Vec3} maximum corner.
         */
        getMax(): pc.Vec3;

        /**
         * @function
         * @name pc.BoundingBox#containsPoint
         * @description Test if a point is inside a AABB.
         * @param {pc.Vec3} point Point to test.
         * @returns {Boolean} true if the point is inside the AABB and false otherwise.
         */
        containsPoint(point: pc.Vec3): true;

        /**
         * @function
         * @name pc.BoundingBox#setFromTransformedAabb
         * @description Set an AABB to enclose the specified AABB if it were to be
         * transformed by the specified 4x4 matrix.
         * @param {pc.BoundingBox} aabb Box to transform and enclose
         * @param {pc.Mat4} m Transformation matrix to apply to source AABB.
         */
        setFromTransformedAabb(aabb: pc.BoundingBox, m: pc.Mat4): void;

        /**
         * @function
         * @name pc.BoundingBox#intersectsBoundingSphere
         * @description Test if a Bounding Sphere is overlapping, enveloping, or inside this AABB.
         * @param {pc.BoundingSphere} sphere Bounding Sphere to test.
         * @returns {Boolean} true if the Bounding Sphere is overlapping, enveloping, or inside the AABB and false otherwise.
         */
        intersectsBoundingSphere(sphere: pc.BoundingSphere): void;
    }
}
