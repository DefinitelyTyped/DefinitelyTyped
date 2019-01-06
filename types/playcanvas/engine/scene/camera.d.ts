declare namespace pc {

    /**
     * @private
     * @name pc.Camera
     * @class A camera.
     */
    class Camera {

        /**
         * @private
         * @function
         * @name pc.Camera#clone
         * @description Duplicates a camera node but does not 'deep copy' the hierarchy.
         * @returns {pc.Camera} A cloned Camera.
         */
        private clone(): pc.Camera;

        /**
         * @private
         * @function
         * @name pc.Camera#worldToScreen
         * @description Convert a point from 3D world space to 2D canvas pixel space.
         * @param {pc.Vec3} worldCoord The world space coordinate to transform.
         * @param {Number} cw The width of PlayCanvas' canvas element.
         * @param {Number} ch The height of PlayCanvas' canvas element.
         * @param {pc.Vec3} [screenCoord] 3D vector to receive screen coordinate result.
         * @returns {pc.Vec3} The screen space coordinate.
         */
        private worldToScreen(worldCoord: pc.Vec3, cw: number, ch: number, screenCoord?: pc.Vec3): pc.Vec3

        /**
         * @private
         * @function
         * @name pc.Camera#screenToWorld
         * @description Convert a point from 2D canvas pixel space to 3D world space.
         * @param {Number} x x coordinate on PlayCanvas' canvas element.
         * @param {Number} y y coordinate on PlayCanvas' canvas element.
         * @param {Number} z The distance from the camera in world space to create the new point.
         * @param {Number} cw The width of PlayCanvas' canvas element.
         * @param {Number} ch The height of PlayCanvas' canvas element.
         * @param {pc.Vec3} [worldCoord] 3D vector to receive world coordinate result.
         * @returns {pc.Vec3} The world space coordinate.
         */
        private screenToWorld(x: number, y: number, z: number, cw: number, ch: number, worldCoord?: pc.Vec3): pc.Vec3

        /**
         * @private
         * @function
         * @name pc.Camera#getClearOptions
         * @description Retrieves the options used to determine how the camera's render target will be cleared.
         * @return {Object} The options determining the behaviour of render target clears.
         */
        private getClearOptions(): {};

        /**
         * @private
         * @function
         * @name pc.Camera#getProjectionMatrix
         * @description Retrieves the projection matrix for the specified camera.
         * @returns {pc.Mat4} The camera's projection matrix.
         */
        private getProjectionMatrix(): pc.Mat4

        /**
         * @private
         * @function
         * @name pc.Camera#setClearOptions
         * @description Sets the options used to determine how the camera's render target will be cleared.
         * @param {Object} clearOptions The options determining the behaviour of subsequent render target clears.
         * @param {Number[]} clearOptions.color The options determining the behaviour of subsequent render target clears.
         * @param {Number} clearOptions.depth The options determining the behaviour of subsequent render target clears.
         * @param {pc.CLEARFLAG} clearOptions.flags The options determining the behaviour of subsequent render target clears.
         */
        setClearOptions(options: { color: number[], depth: number, flags: any }): void;

        /**
         * @private
         * @type Number
         * @name pc.Camera#aspectRatio
         * @description Camera's aspect ratio.
         */
        private aspectRatio: number;

        /**
         * @private
         * @type Number
         * @name pc.Camera#projection
         * @description Camera's projection type, to specify whether projection is orthographic (parallel projection) or perspective. Can be:
         * <ul>
         *     <li>{@link pc.PROJECTION_PERSPECTIVE}</li>
         *     <li>{@link pc.PROJECTION_ORTHOGRAPHIC}</li>
         * </ul>
         */
        private projection: number;

        /**
         * @private
         * @type Number
         * @name pc.Camera#nearClip
         * @description Camera's distance to near clipping plane
         */
        private nearClip: number;

        /**
         * @private
         * @type Number
         * @name pc.Camera#farClip
         * @description Camera's distance to far clipping plane
         */
        private farClip: number;

        /**
         * @private
         * @type Number
         * @name pc.Camera#fov
         * @description Camera's field of view in degrees. This angle is in degrees
         * and is measured vertically or horizontally between the sides of camera planes.
         * hirozontalFov property defines the fov axis - vertical or horizontal.
         */
        private fov: number;

        /**
         * @private
         * @type Boolean
         * @name pc.Camera#horizontalFov
         * @description Camera's horizontal or vertical field of view.
         */
        private horizontalFov: boolean;

        /**
         * @private
         * @type Number
         * @name pc.Camera#orthoHeight
         * @description Camera's half height of the orthographics view.
         */
        private orthoHeight: number;

        /**
         * @private
         * @type Array
         * @name pc.Camera#clearColor
         * @description Camera's clear color.
         */
        private clearColor: any[];

        /**
         * @private
         * @type Number
         * @name pc.Camera#clearDepth
         * @description Camera's clear depth value.
         */
        private clearDepth: number;

        /**
         * @private
         * @type Number
         * @name pc.Camera#clearStencil
         * @description Camera's clear stencil value.
         */
        private clearStencil: number;

        /**
         * @private
         * @type Number
         * @name pc.Camera#clearFlags
         * @description Camera's clear flags bits value.
         */
        private clearFlags: number;
    }
}
