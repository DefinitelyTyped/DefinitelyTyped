declare namespace pc {

    /**
     * @name pc.GraphicsDevice
     * @class The graphics device manages the underlying graphics context. It is responsible
     * for submitting render state changes and graphics primitives to the hardware. A graphics
     * device is tied to a specific canvas HTML element. It is valid to have more than one
     * canvas element per page and create a new graphics device against each.
     * @description Creates a new graphics device.
     * @param {Object} canvas The canvas to which the graphics device is tied.
     * @param {Object} [options] Options passed when creating the WebGL context. More info here https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
     */
    class GraphicsDevice {
        constructor(canvas: HTMLCanvasElement, options?: {})

        /**
         * @readonly
         * @name pc.GraphicsDevice#precision
         * @type String
         * @description The highest shader precision supported by this graphics device. Can be 'hiphp', 'mediump' or 'lowp'.
         */
        readonly precision: string;

        /**
         * @readonly
         * @name pc.GraphicsDevice#maxCubeMapSize
         * @type Number
         * @description The maximum supported dimension of a cube map.
         */
        readonly maxCubeMapSize: number;

        /**
         * @readonly
         * @name pc.GraphicsDevice#maxTextureSize
         * @type Number
         * @description The maximum supported dimension of a texture.
         */
        readonly maxTextureSize: number;

        /**
         * @readonly
         * @name pc.GraphicsDevice#maxVolumeSize
         * @type Number
         * @description The maximum supported dimension of a 3D texture (any axis).
         */
        readonly maxVolumeSize: number;

        /**
         * @function
         * @name pc.GraphicsDevice#setViewport
         * @description Set the active rectangle for rendering on the specified device.
         * @param {Number} x The pixel space x-coordinate of the bottom left corner of the viewport.
         * @param {Number} y The pixel space y-coordinate of the bottom left corner of the viewport.
         * @param {Number} w The width of the viewport in pixels.
         * @param {Number} h The height of the viewport in pixels.
         */
        setViewport(x: number, y: number, w: number, h: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setScissor
         * @description Set the active scissor rectangle on the specified device.
         * @param {Number} x The pixel space x-coordinate of the bottom left corner of the scissor rectangle.
         * @param {Number} y The pixel space y-coordinate of the bottom left corner of the scissor rectangle.
         * @param {Number} w The width of the scissor rectangle in pixels.
         * @param {Number} h The height of the scissor rectangle in pixels.
         */
        setScissor(x: number, y: number, w: number, h: number): void;

        /**
         * @private
         * @function
         * @name pc.GraphicsDevice#getProgramLibrary
         * @description Retrieves the program library assigned to the specified graphics device.
         * @returns {pc.ProgramLibrary} The program library assigned to the device.
         */
        private getProgramLibrary(): pc.ProgramLibrary;

        /**
         * @private
         * @function
         * @name pc.GraphicsDevice#setProgramLibrary
         * @description Assigns a program library to the specified device. By default, a graphics
         * device is created with a program library that manages all of the programs that are
         * used to render any graphical primitives. However, this function allows the user to
         * replace the existing program library with a new one.
         * @param {pc.ProgramLibrary} programLib The program library to assign to the device.
         */
        private setProgramLibrary(programLib): pc.ProgramLibrary;

        /**
         * @function
         * @name pc.GraphicsDevice#updateBegin
         * @description Marks the beginning of a block of rendering. Internally, this function
         * binds the render target currently set on the device. This function should be matched
         * with a call to pc.GraphicsDevice#updateEnd. Calls to pc.GraphicsDevice#updateBegin
         * and pc.GraphicsDevice#updateEnd must not be nested.
         */
        updateBegin(): void;

        /**
         * @function
         * @name pc.GraphicsDevice#updateEnd
         * @description Marks the end of a block of rendering. This function should be called
         * after a matching call to pc.GraphicsDevice#updateBegin. Calls to pc.GraphicsDevice#updateBegin
         * and pc.GraphicsDevice#updateEnd must not be nested.
         */
        updateEnd(): void;

        /**
         * @function
         * @name pc.GraphicsDevice#draw
         * @description Submits a graphical primitive to the hardware for immediate rendering.
         * @param {Object} primitive Primitive object describing how to submit current vertex/index buffers defined as follows:
         * @param {Number} primitive.type The type of primitive to render. Can be:
         * <ul>
         *     <li>pc.PRIMITIVE_POINTS</li>
         *     <li>pc.PRIMITIVE_LINES</li>
         *     <li>pc.PRIMITIVE_LINELOOP</li>
         *     <li>pc.PRIMITIVE_LINESTRIP</li>
         *     <li>pc.PRIMITIVE_TRIANGLES</li>
         *     <li>pc.PRIMITIVE_TRISTRIP</li>
         *     <li>pc.PRIMITIVE_TRIFAN</li>
         * </ul>
         * @param {Number} primitive.base The offset of the first index or vertex to dispatch in the draw call.
         * @param {Number} primitive.count The number of indices or vertices to dispatch in the draw call.
         * @param {Boolean} primitive.indexed True to interpret the primitive as indexed, thereby using the currently set index buffer and false otherwise.
         * @example
         * // Render a single, unindexed triangle
         * device.draw({
         *     type: pc.PRIMITIVE_TRIANGLES,
         *     base: 0,
         *     count: 3,
         *     indexed: false
         * )};
         */
        draw(primitive: { type: number, base: number, count: number, indexed: boolean }, numInstances?: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#clear
         * @description Clears the frame buffer of the currently set render target.
         * @param {Object} options Optional options object that controls the behavior of the clear operation defined as follows:
         * @param {Number[]} options.color The color to clear the color buffer to in the range 0.0 to 1.0 for each component.
         * @param {Number} options.depth The depth value to clear the depth buffer to in the range 0.0 to 1.0.
         * @param {Number} options.flags The buffers to clear (the types being color, depth and stencil). Can be any bitwise
         * combination of:
         * <ul>
         *     <li>pc.CLEARFLAG_COLOR</li>
         *     <li>pc.CLEARFLAG_DEPTH</li>
         *     <li>pc.CLEARFLAG_STENCIL</li>
         * </ul>
         * @example
         * // Clear color buffer to black and depth buffer to 1.0
         * device.clear();
         *
         * // Clear just the color buffer to red
         * device.clear({
         *     color: [1, 0, 0, 1],
         *     flags: pc.CLEARFLAG_COLOR
         * });
         *
         * // Clear color buffer to yellow and depth to 1.0
         * device.clear({
         *     color: [1, 1, 0, 1],
         *     depth: 1.0,
         *     flags: pc.CLEARFLAG_COLOR | pc.CLEARFLAG_DEPTH
         * });
         */
        clear(options: { color: number[], depth: number, flags: number }): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setRenderTarget
         * @description Sets the specified render target on the device. If null
         * is passed as a parameter, the back buffer becomes the current target
         * for all rendering operations.
         * @param {pc.RenderTarget} renderTarget The render target to activate.
         * @example
         * // Set a render target to receive all rendering output
         * device.setRenderTarget(renderTarget);
         *
         * // Set the back buffer to receive all rendering output
         * device.setRenderTarget(null);
         */
        setRenderTarget(renderTarget: pc.RenderTarget): void;

        /**
         * @function
         * @name pc.GraphicsDevice#getRenderTarget
         * @description Queries the currently set render target on the device.
         * @returns {pc.RenderTarget} The current render target.
         * @example
         * // Get the current render target
         * var renderTarget = device.getRenderTarget();
         */
        getRenderTarget(): pc.RenderTarget;

        /**
         * @function
         * @name pc.GraphicsDevice#getDepthTest
         * @description Queries whether depth testing is enabled.
         * @returns {Boolean} true if depth testing is enabled and false otherwise.
         * @example
         * var depthTest = device.getDepthTest();
         * console.log('Depth testing is ' + depthTest ? 'enabled' : 'disabled');
         */
        getDepthTest(): boolean;

        /**
         * @function
         * @name pc.GraphicsDevice#setDepthTest
         * @description Enables or disables depth testing of fragments. Once this state
         * is set, it persists until it is changed. By default, depth testing is enabled.
         * @param {Boolean} depthTest true to enable depth testing and false otherwise.
         * @example
         * device.setDepthTest(true);
         */
        setDepthTest(depthTest: boolean): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setDepthFunc
         * @description Configures the depth test.
         * @param {Number} func A function to compare a new depth value with an existing z-buffer value and decide if to write a pixel. Can be:
         * <ul>
         *     <li>pc.FUNC_NEVER: don't draw</li>
         *     <li>pc.FUNC_LESS: draw if new depth < depth buffer</li>
         *     <li>pc.FUNC_EQUAL: draw if new depth == depth buffer</li>
         *     <li>pc.FUNC_LESSEQUAL: draw if new depth <= depth buffer</li>
         *     <li>pc.FUNC_GREATER: draw if new depth > depth buffer</li>
         *     <li>pc.FUNC_NOTEQUAL: draw if new depth != depth buffer</li>
         *     <li>pc.FUNC_GREATEREQUAL: draw if new depth >= depth buffer</li>
         *     <li>pc.FUNC_ALWAYS: always draw</li>
         * </ul>
         */
        setDepthFunc(func: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#getDepthWrite
         * @description Queries whether writes to the depth buffer are enabled.
         * @returns {Boolean} true if depth writing is enabled and false otherwise.
         * @example
         * var depthWrite = device.getDepthWrite();
         * console.log('Depth writing is ' + depthWrite ? 'enabled' : 'disabled');
         */
        getDepthWrite(): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setDepthWrite
         * @description Enables or disables writes to the depth buffer. Once this state
         * is set, it persists until it is changed. By default, depth writes are enabled.
         * @param {Boolean} writeDepth true to enable depth writing and false otherwise.
         * @example
         * device.setDepthWrite(true);
         */
        setDepthWrite(writeDepth: boolean): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setColorWrite
         * @description Enables or disables writes to the color buffer. Once this state
         * is set, it persists until it is changed. By default, color writes are enabled
         * for all color channels.
         * @param {Boolean} writeRed true to enable writing of the red channel and false otherwise.
         * @param {Boolean} writeGreen true to enable writing of the green channel and false otherwise.
         * @param {Boolean} writeBlue true to enable writing of the blue channel and false otherwise.
         * @param {Boolean} writeAlpha true to enable writing of the alpha channel and false otherwise.
         * @example
         * // Just write alpha into the frame buffer
         * device.setColorWrite(false, false, false, true);
         */
        setColorWrite(writeRed: boolean, writeGreen: boolean, writeBlue: boolean, writeAlpha: boolean): void;

        /**
         * @private
         * @function
         * @name pc.GraphicsDevice#setAlphaToCoverage
         * @description Enables or disables alpha to coverage (WebGL2 only).
         * @param {Boolean} state True to enable alpha to coverage and false to disable it.
         */
        private setAlphaToCoverage(state: boolean): void;

        /**
         * @private
         * @function
         * @name pc.GraphicsDevice#setTransformFeedbackBuffer
         * @description Sets the output vertex buffer. It will be written to by a shader with transform feedback varyings.
         * @param {pc.VertexBuffer} tf The output vertex buffer
         */
        private setTransformFeedbackBuffer(tf: pc.VertexBuffer): void;

        /**
         * @private
         * @function
         * @name pc.GraphicsDevice#setRaster
         * @description Enables or disables rasterization. Useful with transform feedback, when you only need to process the data without drawing.
         * @param {Boolean} on True to enable rasterization and false to disable it.
         */
        private setRaster(on: boolean): void;

        /**
         * @function
         * @name pc.GraphicsDevice#getBlending
         * @description Queries whether blending is enabled.
         * @returns {Boolean} True if blending is enabled and false otherwise.
         */
        getBlending(): boolean;

        /**
         * @function
         * @name pc.GraphicsDevice#setBlending
         * @description Enables or disables blending.
         * @param {Boolean} blending True to enable blending and false to disable it.
         */
        setBlending(blending: boolean): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setStencilTest
         * @description Enables or disables stencil test.
         * @param {Boolean} enable True to enable stencil test and false to disable it.
         */
        setStencilTest(enable: boolean): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setStencilFunc
         * @description Configures stencil test for both front and back faces.
         * @param {Number} func A comparison function that decides if the pixel should be written, based on the current stencil buffer value,
         * reference value, and mask value. Can be:
         * <ul>
         *     <li>pc.FUNC_NEVER: never pass</li>
         *     <li>pc.FUNC_LESS: pass if (ref & mask) < (stencil & mask)</li>
         *     <li>pc.FUNC_EQUAL: pass if (ref & mask) == (stencil & mask)</li>
         *     <li>pc.FUNC_LESSEQUAL: pass if (ref & mask) <= (stencil & mask)</li>
         *     <li>pc.FUNC_GREATER: pass if (ref & mask) > (stencil & mask)</li>
         *     <li>pc.FUNC_NOTEQUAL: pass if (ref & mask) != (stencil & mask)</li>
         *     <li>pc.FUNC_GREATEREQUAL: pass if (ref & mask) >= (stencil & mask)</li>
         *     <li>pc.FUNC_ALWAYS: always pass</li>
         * </ul>
         * @param {Number} ref Reference value used in comparison.
         * @param {Number} mask Mask applied to stencil buffer value and reference value before comparison.
         */
        setStencilFunc(func: number, ref: number, mask: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setStencilFuncFront
         * @description Same as pc.GraphicsDevice#setStencilFunc, but only for front faces.
         */
        setStencilFuncFront(func: number, ref: number, mask: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setStencilFuncBack
         * @description Same as pc.GraphicsDevice#setStencilFunc, but only for back faces.
         */
        setStencilFuncBack(func: boolean, ref: boolean, mask: boolean): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setStencilOperation
         * @description Configures how stencil buffer values should be modified based on the result of depth/stencil tests. Works for both front and back faces.
         * @param {Number} fail Action to take if stencil test is failed
         * @param {Number} zfail Action to take if depth test is failed
         * @param {Number} zpass Action to take if both depth and stencil test are passed
         * All arguments can be:
         * <ul>
         *     <li>pc.STENCILOP_KEEP: don't change the stencil buffer value</li>
         *     <li>pc.STENCILOP_ZERO: set value to zero</li>
         *     <li>pc.STENCILOP_REPLACE: replace value with the reference value (see pc.GraphicsDevice#setStencilFunc)</li>
         *     <li>pc.STENCILOP_INCREMENT: increment the value</li>
         *     <li>pc.STENCILOP_INCREMENTWRAP: increment the value, but wrap it to zero when it's larger than a maximum representable value</li>
         *     <li>pc.STENCILOP_DECREMENT: decrement the value</li>
         *     <li>pc.STENCILOP_DECREMENTWRAP: decrement the value, but wrap it to a maximum representable value, if the current value is 0</li>
         *     <li>pc.STENCILOP_INVERT: invert the value bitwise</li>
         * </ul>
         * @param {Number} writeMask A bit mask applied to the reference value, when written.
         */
        setStencilOperation(fail: number, zfail: number, zpass: number, writeMask: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setStencilOperationFront
         * @description Same as pc.GraphicsDevice#setStencilOperation, but only for front faces.
         */
        setStencilOperationFront(fail: number, zfail: number, zpass: number, writeMask: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setStencilOperationBack
         * @description Same as pc.GraphicsDevice#setStencilOperation, but only for back faces.
         */
        setStencilOperationBack(fail: number, zfail: number, zpass: number, writeMask: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setBlendFunction
         * @description Configures blending operations. Both source and destination
         * blend modes can take the following values:
         * <ul>
         *     <li>pc.BLENDMODE_ZERO</li>
         *     <li>pc.BLENDMODE_ONE</li>
         *     <li>pc.BLENDMODE_SRC_COLOR</li>
         *     <li>pc.BLENDMODE_ONE_MINUS_SRC_COLOR</li>
         *     <li>pc.BLENDMODE_DST_COLOR</li>
         *     <li>pc.BLENDMODE_ONE_MINUS_DST_COLOR</li>
         *     <li>pc.BLENDMODE_SRC_ALPHA</li>
         *     <li>pc.BLENDMODE_SRC_ALPHA_SATURATE</li>
         *     <li>pc.BLENDMODE_ONE_MINUS_SRC_ALPHA</li>
         *     <li>pc.BLENDMODE_DST_ALPHA</li>
         *     <li>pc.BLENDMODE_ONE_MINUS_DST_ALPHA</li>
         * </ul>
         * @param {Number} blendSrc The source blend function.
         * @param {Number} blendDst The destination blend function.
         */
        setBlendFunction(blendSrc: number, blendDst: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setBlendFunctionSeparate
         * @description Configures blending operations. Both source and destination
         * blend modes can take the following values:
         * <ul>
         *     <li>pc.BLENDMODE_ZERO</li>
         *     <li>pc.BLENDMODE_ONE</li>
         *     <li>pc.BLENDMODE_SRC_COLOR</li>
         *     <li>pc.BLENDMODE_ONE_MINUS_SRC_COLOR</li>
         *     <li>pc.BLENDMODE_DST_COLOR</li>
         *     <li>pc.BLENDMODE_ONE_MINUS_DST_COLOR</li>
         *     <li>pc.BLENDMODE_SRC_ALPHA</li>
         *     <li>pc.BLENDMODE_SRC_ALPHA_SATURATE</li>
         *     <li>pc.BLENDMODE_ONE_MINUS_SRC_ALPHA</li>
         *     <li>pc.BLENDMODE_DST_ALPHA</li>
         *     <li>pc.BLENDMODE_ONE_MINUS_DST_ALPHA</li>
         * </ul>
         * @param {Number} blendSrc The source blend function.
         * @param {Number} blendDst The destination blend function.
         * @param {Number} blendSrcAlpha The separate source blend function for the alpha channel.
         * @param {Number} blendDstAlpha The separate destination blend function for the alpha channel.
         */
        setBlendFunctionSeparate(blendSrc: void, blendDst: void, blendSrcAlpha: void, blendDstAlpha: void): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setBlendEquation
         * @description Configures the blending equation. The default blend equation is
         * pc.BLENDEQUATION_ADD.
         * @param {Number} blendEquation The blend equation. Can be:
         * <ul>
         *     <li>pc.BLENDEQUATION_ADD</li>
         *     <li>pc.BLENDEQUATION_SUBTRACT</li>
         *     <li>pc.BLENDEQUATION_REVERSE_SUBTRACT</li>
         *     <li>pc.BLENDEQUATION_MIN</li>
         *     <li>pc.BLENDEQUATION_MAX</li>
         * Note that MIN and MAX modes require either EXT_blend_minmax or WebGL2 to work (check device.extBlendMinmax).
         * </ul>
         */
        setBlendEquation(blendEquation: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setBlendEquationSeparate
         * @description Configures the blending equation. The default blend equation is
         * pc.BLENDEQUATION_ADD.
         * @param {Number} blendEquation The blend equation. Can be:
         * <ul>
         *     <li>pc.BLENDEQUATION_ADD</li>
         *     <li>pc.BLENDEQUATION_SUBTRACT</li>
         *     <li>pc.BLENDEQUATION_REVERSE_SUBTRACT</li>
         *     <li>pc.BLENDEQUATION_MIN</li>
         *     <li>pc.BLENDEQUATION_MAX</li>
         * Note that MIN and MAX modes require either EXT_blend_minmax or WebGL2 to work (check device.extBlendMinmax).
         * @param {Number} blendAlphaEquation A separate blend equation for the alpha channel. Accepts same values as blendEquation.
         * </ul>
         */
        setBlendEquationSeparate(blendEquation: number, blendAlphaEquation: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setCullMode
         * @description Controls how triangles are culled based on their face direction.
         * The default cull mode is pc.CULLFACE_BACK.
         * @param {Number} cullMode The cull mode to set. Can be:
         * <ul>
         *     <li>pc.CULLFACE_NONE</li>
         *     <li>pc.CULLFACE_BACK</li>
         *     <li>pc.CULLFACE_FRONT</li>
         *     <li>pc.CULLFACE_FRONTANDBACK</li>
         * </ul>
         */
        setCullMode(cullMode: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setIndexBuffer
         * @description Sets the current index buffer on the graphics device. On subsequent
         * calls to pc.GraphicsDevice#draw, the specified index buffer will be used to provide
         * index data for any indexed primitives.
         * @param {pc.IndexBuffer} indexBuffer The index buffer to assign to the device.
         */
        setIndexBuffer(indexBuffer: pc.IndexBuffer): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setVertexBuffer
         * @description Sets the current vertex buffer for a specific stream index on the graphics
         * device. On subsequent calls to pc.GraphicsDevice#draw, the specified vertex buffer will be
         * used to provide vertex data for any primitives.
         * @param {pc.VertexBuffer} vertexBuffer The vertex buffer to assign to the device.
         * @param {Number} stream The stream index for the vertex buffer, indexed from 0 upwards.
         */
        setVertexBuffer(vertexBuffer: pc.VertexBuffer, stream: number, vbOffset?: number): void;

        /**
         * @function
         * @name pc.GraphicsDevice#setShader
         * @description Sets the active shader to be used during subsequent draw calls.
         * @param {pc.Shader} shader The shader to set to assign to the device.
         */
        setShader(shader: pc.Shader): void;

        /**
         * @private
         * @function
         * @name pc.GraphicsDevice#getBoneLimit
         * @description Queries the maximum number of bones that can be referenced by a shader.
         * The shader generators (pc.programlib) use this number to specify the matrix array
         * size of the uniform 'matrix_pose[0]'. The value is calculated based on the number of
         * available uniform vectors available after subtracting the number taken by a typical
         * heavyweight shader. If a different number is required, it can be tuned via
         * pc.GraphicsDevice#setBoneLimit.
         * @returns {Number} The maximum number of bones that can be supported by the host hardware.
         */
        private getBoneLimit(): number

        /**
         * @private
         * @function
         * @name pc.GraphicsDevice#setBoneLimit
         * @description Specifies the maximum number of bones that the device can support on
         * the current hardware. This function allows the default calculated value based on
         * available vector uniforms to be overridden.
         * @param {Number} maxBones The maximum number of bones supported by the host hardware.
         */
        private setBoneLimit(maxBones: number): void;

        /**
        * @function
        * @name pc.GraphicsDevice#resizeCanvas
        * @description Sets the width and height of the canvas, then fires the 'resizecanvas' event.
        */
        resizeCanvas(width: number, height: number): void;

        /**
        * @function
        * @name pc.GraphicsDevice#clearShaderCache
        * @description Frees memory from all shaders ever allocated with this device
        */
        clearShaderCache(): void;

        /**
         * @readonly
         * @name pc.GraphicsDevice#width
         * @type Number
         * @description Width of the back buffer in pixels.
         */
        readonly width: number;

        /**
         * @readonly
         * @name pc.GraphicsDevice#height
         * @type Number
         * @description Height of the back buffer in pixels.
         */
        readonly height: number;

        /**
         * @readonly
         * @name pc.GraphicsDevice#maxAnisotropy
         * @type Number
         * @description The maximum supported texture anisotropy setting.
         */
        readonly maxAnisotropy: number;


        // Events

        /**
         * @function
         * @name pc.GraphicsDevice#on
         * @description Attach an event handler to an event
         * @param {String} name Name of the event to bind the callback to
         * @param {Function} callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
         * @param {Object} [scope] Object to use as 'this' when the event is fired, defaults to current this
         * @example
         * obj.on('test', function (a, b) {
         *     console.log(a + b);
         * });
         * obj.fire('test', 1, 2); // prints 3 to the console
         */
        on(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.GraphicsDevice#off
         * @description Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
         * if scope is not provided then all events with the callback will be unbound.
         * @param {String} [name] Name of the event to unbind
         * @param {Function} [callback] Function to be unbound
         * @param {Object} [scope] Scope that was used as the this when the event is fired
         * @example
         * var handler = function () {
         * };
         * obj.on('test', handler);
         *
         * obj.off(); // Removes all events
         * obj.off('test'); // Removes all events called 'test'
         * obj.off('test', handler); // Removes all handler functions, called 'test'
         * obj.off('test', handler, this); // Removes all hander functions, called 'test' with scope this
         */
        off(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.GraphicsDevice#fire
         * @description Fire an event, all additional arguments are passed on to the event listener
         * @param {Object} name Name of event to fire
         * @param {*} [...] Arguments that are passed to the event handler
         * @example
         * obj.fire('test', 'This is the message');
         */
        fire(name: string, arg1: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): any;

        /**
         * @function
         * @name pc.GraphicsDevice#once
         * @description Attach an event handler to an event. This handler will be removed after being fired once.
         * @param {String} name Name of the event to bind the callback to
         * @param {Function} callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
         * @param {Object} [scope] Object to use as 'this' when the event is fired, defaults to current this
         * @example
         * obj.once('test', function (a, b) {
         *     console.log(a + b);
         * });
         * obj.fire('test', 1, 2); // prints 3 to the console
         * obj.fire('test', 1, 2); // not going to get handled
         */
        once(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
        * @function
        * @name pc.GraphicsDevice#hasEvent
        * @description Test if there are any handlers bound to an event name
        * @param {String} name The name of the event to test
        * @example
        * obj.on('test', function () { }); // bind an event to 'test'
        * obj.hasEvent('test'); // returns true
        */
        hasEvent(name: string): boolean;
    }
}
