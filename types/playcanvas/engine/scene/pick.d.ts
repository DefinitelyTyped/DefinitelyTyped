declare namespace pc {

    /**
     * @name pc.Picker
     * @class Picker object used to select mesh instances from screen coordinates.
     * @description Create a new instance of a Picker object
     * @param {pc.GraphicsDevice} device Graphics device used to manage internal graphics resources.
     * @param {Number} width The width of the pick buffer in pixels.
     * @param {Number} height The height of the pick buffer in pixels.
     * @property {Number} width Width of the pick buffer in pixels (read-only).
     * @property {Number} height Height of the pick buffer in pixels (read-only).
     * @property {pc.RenderTarget} renderTarget The render target used by the picker internally (read-only).
     */
    class Picker {
        constructor(device: pc.GraphicsDevice, width: number, height: number)

        width: number;
        height: number;
        renderTarget: pc.RenderTarget;

        /**
         * @function
         * @name pc.Picker#getSelection
         * @description Return the list of mesh instances selected by the specified rectangle in the
         * previously prepared pick buffer.The rectangle using top-left coordinate system.
         * @param {Number} x The left edge of the rectangle
         * @param {Number} y The top edge of the rectangle
         * @param {Number} [width] The width of the rectangle
         * @param {Number} [height] The height of the rectangle
         * @returns {pc.MeshInstance[]} An array of mesh instances that are in the selection
         * @example
         * // Get the selection at the point (10,20)
         * var selection = picker.getSelection(10, 20);
         *
         * // Get all models in rectangle with corners at (10,20) and (20,40)
         * var selection = picker.getSelection(10, 20, 10, 20);
         */
        getSelection(x: number, y: number, width?: number, height?: number): pc.MeshInstance[];

        /**
         * @function
         * @name pc.Picker#prepare
         * @description Primes the pick buffer with a rendering of the specified models from the point of view
         * of the supplied camera. Once the pick buffer has been prepared, pc.Picker#getSelection can be
         * called multiple times on the same picker object. Therefore, if the models or camera do not change
         * in any way, pc.Picker#prepare does not need to be called again.
         * @param {pc.Camera} camera The camera used to render the scene, note this is the CameraNode, not an Entity
         * @param {pc.Scene} scene The scene containing the pickable mesh instances.
         */
        prepare(camera: pc.Camera, scene: pc.Scene): void;

        /**
         * @function
         * @name pc.Picker#resize
         * @description Sets the resolution of the pick buffer. The pick buffer resolution does not need
         * to match the resolution of the corresponding frame buffer use for general rendering of the
         * 3D scene. However, the lower the resolution of the pick buffer, the less accurate the selection
         * results returned by pc.Picker#getSelection. On the other hand, smaller pick buffers will
         * yield greater performance, so there is a trade off.
         * @param {Number} width The width of the pick buffer in pixels.
         * @param {Number} height The height of the pick buffer in pixels.
         */
        resize(width: number, height: number): void;
    }
}
