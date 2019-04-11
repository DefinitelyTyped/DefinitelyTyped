declare namespace pc {

    /**
     * @name pc.Frustum
     * @class A frustum is a shape that defines the viewing space of a camera.
     * @description Creates a new frustum shape.
     * @example
     * // Create a new frustum equivalent to one held by a camera component
     * var projectionMatrix = entity.camera.projectionMatrix;
     * var viewMatrix = entity.camera.viewMatrix;
     * var frustum = new pc.Frustum(projectionMatrix, viewMatrix);
     * @param {pc.Mat4} projectionMatrix The projection matrix describing the shape of the frustum.
     * @param {pc.Mat4} viewMatrix The inverse of the world transformation matrix for the frustum.
     */
    class Frustum {
        constructor(projectionMatrix: pc.Mat4, viewMatrix: pc.Mat4)

        /**
         * @function
         * @name pc.Frustum#update
         * @description Updates the frustum shape based on a view matrix and a projection matrix.
         * @param {pc.Mat4} projectionMatrix The projection matrix describing the shape of the frustum.
         * @param {pc.Mat4} viewMatrix The inverse of the world transformation matrix for the frustum.
         */
        update(projectionMatrix: pc.Mat4, viewMatrix: pc.Mat4): void;

        /**
         * @function
         * @name pc.Frustum#containsPoint
         * @description Tests whether a point is inside the frustum. Note that points lying in a frustum plane are
         * considered to be outside the frustum.
         * @param {pc.Vec3} point The point to test
         * @returns {Boolean} true if the point is inside the frustum, false otherwise
         */
        containsPoint(point: pc.Vec3): boolean;

        /**
         * @function
         * @name pc.Frustum#containsSphere
         * @description Tests whether a bounding sphere intersects the frustum. If the sphere is outside the frustum,
         * zero is returned. If the sphere intersects the frustum, 1 is returned. If the sphere is completely inside
         * the frustum, 2 is returned. Note that a sphere touching a frustum plane from the outside is considered to
         * be outside the frustum.
         * @param {pc.BoundingSphere} sphere The sphere to test
         * @returns {Number} 0 if the bounding sphere is outside the frustum, 1 if it intersects the frustum and 2 if
         * it is contained by the frustum
         */
        containsSphere(sphere: pc.BoundingSphere): number;
    }
}
