declare namespace pc {

    /**
     * @name pc.RenderTarget
     * @class A render target is a rectangular rendering surface.
     * @description Creates a new render target. A color buffer or a depth buffer must be set.
     * @param {Object} options Object for passing optional arguments.
     * @param {pc.Texture} [options.colorBuffer] The texture that this render target will treat as a rendering surface.
     * @param {Boolean} [options.depth] If set to true, depth buffer will be created. Defaults to true. Ignored if depthBuffer is defined.
     * @param {Boolean} [options.stencil] If set to true, depth buffer will include stencil. Defaults to false. Ignored if depthBuffer is defined or depth is false.
     * @param {pc.Texture} [options.depthBuffer] The texture that this render target will treat as a depth/stencil surface (WebGL2 only). If set, the 'depth' and 'stencil' properties are ignored.
     * Texture must have pc.PIXELFORMAT_DEPTH or PIXELFORMAT_DEPTHSTENCIL format.
     * @param {Number} [options.samples] Number of hardware anti-aliasing samples (WebGL2 only). Default is 1.
     * @param {Boolean} [options.autoResolve] If samples > 1, enables or disables automatic MSAA resolve after rendering to this RT (see pc.RenderTarget#resolve). Defaults to true;
     * Defaults to true.
     * @param {Number} [options.face] If the colorBuffer parameter is a cubemap, use this option to specify the
     * face of the cubemap to render to. Can be:
     * <ul>
     *     <li>pc.CUBEFACE_POSX</li>
     *     <li>pc.CUBEFACE_NEGX</li>
     *     <li>pc.CUBEFACE_POSY</li>
     *     <li>pc.CUBEFACE_NEGY</li>
     *     <li>pc.CUBEFACE_POSZ</li>
     *     <li>pc.CUBEFACE_NEGZ</li>
     * </ul>
     * Defaults to pc.CUBEFACE_POSX.
     * @example
     * // Create a 512x512x24-bit render target with a depth buffer
     * var colorBuffer = new pc.Texture(graphicsDevice, {
     *     width: 512,
     *     height: 512,
     *     format: pc.PIXELFORMAT_R8_G8_B8
     * });
     * var renderTarget = new pc.RenderTarget(graphicsDevice, colorBuffer, {
     *     depth: true
     * });
     *
     * // Set the render target on an entity's camera component
     * entity.camera.renderTarget = renderTarget;
     */
    class RenderTarget {
        constructor(options: {
            colorBuffer?: pc.Texture,
            depth?: boolean,
            stencil?: boolean,
            depthBuffer?: pc.Texture,
            samples?: number,
            autoResolve?: boolean,
            face?: number
        })
        constructor(options: pc.GraphicsDevice, _arg2: pc.Texture, _arg3: {
            colorBuffer?: pc.Texture,
            depth?: boolean,
            stencil?: boolean,
            depthBuffer?: pc.Texture,
            samples?: number,
            autoResolve?: boolean,
            face?: number
        })

        /**
         * @function
         * @name pc.RenderTarget#destroy
         * @description Frees resources associated with this render target.
         */
        destroy(): void;

        /**
         * @function
         * @name pc.RenderTarget#resolve
         * @description If samples > 1, resolves the anti-aliased render target (WebGL2 only).
         * When you're rendering to an anti-aliased render target, pixels aren't written directly to the readable texture.
         * Instead, they're first written to a MSAA buffer, where each sample for each pixel is stored independently.
         * In order to read the results, you first need to 'resolve' the buffer - to average all samples and create a simple texture with one color per pixel.
         * This function performs this averaging and updates the colorBuffer and the depthBuffer.
         * If autoResolve is set to true, the resolve will happen after every rendering to this render target, otherwise you can do it manually,
         * during the app update or inside a pc.Command.
         * @param {Boolean} color Resolve color buffer
         * @param {Boolean} depth Resolve depth buffer
         */
        resolve(color: boolean, depth: boolean): void;

        /**
         * @function
         * @name pc.RenderTarget#copy
         * @description Copies color and/or depth contents of source render target to this one. Formats, sizes and anti-aliasing samples must match.
         * Depth buffer can only be copied on WebGL 2.0.
         * @param {pc.RenderTarget} source Source render target to copy from
         * @param {Boolean} color Copy color buffer
         * @param {Boolean} depth Copy depth buffer
         */
        copy(source: pc.RenderTarget, color: boolean, depth: boolean): pc.RenderTarget;


        /**
         * @readonly
         * @name pc.RenderTarget#colorBuffer
         * @type pc.Texture
         * @description Color buffer set up on the render target.
         */
        readonly colorBuffer: pc.Texture;

        /**
         * @readonly
         * @name pc.RenderTarget#depthBuffer
         * @type pc.Texture
         * @description Depth buffer set up on the render target. Only available, if depthBuffer was set in constructor.
         * Not available, if depth property was used instead.
         */
        readonly depthBuffer: pc.Texture;

        /**
         * @readonly
         * @name pc.RenderTarget#face
         * @type Number
         * @description If the render target is bound to a cubemap, this property
         * specifies which face of the cubemap is rendered to. Can be:
         * <ul>
         *     <li>pc.CUBEFACE_POSX</li>
         *     <li>pc.CUBEFACE_NEGX</li>
         *     <li>pc.CUBEFACE_POSY</li>
         *     <li>pc.CUBEFACE_NEGY</li>
         *     <li>pc.CUBEFACE_POSZ</li>
         *     <li>pc.CUBEFACE_NEGZ</li>
         * </ul>
         */
        readonly face: number;

        /**
         * @readonly
         * @name pc.RenderTarget#width
         * @type Number
         * @description Width of the render target in pixels.
         */
        readonly width: number

        /**
         * @readonly
         * @name pc.RenderTarget#height
         * @type Number
         * @description Height of the render target in pixels.
         */
        readonly height: number;
    }
}