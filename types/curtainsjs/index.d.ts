// * Internal

export interface CallbackQueueItem {
    callback: () => void;
    keep: boolean;
    timeout: ReturnType<typeof setInterval>;
}

export interface BaseUniform {
    /** The name of the uniform to use in your shaders */
    name: string;
}

export interface BasicUniform extends BaseUniform {
    type: undefined;
    value: number | number[];
}

export interface SingleValueUniform extends BaseUniform {
    type: "1i" | "1f" | "1iv" | "1fv";
    value: number;
}

export interface DoubleValueUniform extends BaseUniform {
    type: "2i" | "2f" | "2iv" | "2fv";
    value: Vec2 | [number, number];
}

export interface TripleValueUniform extends BaseUniform {
    type: "3i" | "3f" | "3iv" | "3fv";
    value: Vec3 | [number, number, number];
}

export interface QuadrupleValueUniform extends BaseUniform {
    type: "4i" | "4f" | "4iv" | "4fv";
    value: Quat | [number, number, number, number];
}

export interface Matrix2Uniform extends BaseUniform {
    type: "mat2";
    value: number[];
}

export interface Matrix3Uniform extends BaseUniform {
    type: "mat3";
    value: number[];
}

export interface Matrix4Uniform extends BaseUniform {
    type: "mat4";
    value: Mat4 | number[];
}

export type Uniform =
    | BasicUniform
    | SingleValueUniform
    | DoubleValueUniform
    | TripleValueUniform
    | QuadrupleValueUniform
    | Matrix2Uniform
    | Matrix3Uniform
    | Matrix4Uniform;

/**
 * @param texture newly created texture. You'll have access to the textures onSourceLoaded and onSourceUploaded callbacks here.
 */
export type LoadSuccessCallback = (texture: Texture) => void;

/**
 * @param resource The resource you were trying to load
 * @param error Error thrown
 */
export type LoadErrorCallback<T> = (resource: T, error: Error) => void;

export type LoadResource<T> = (
    resource: T,
    textureOptions: TextureParams,
    successCallback: LoadSuccessCallback,
    errorCallback: LoadErrorCallback<T>,
) => void;

export type ImageSource = HTMLImageElement | string;

export type VideoSource = HTMLVideoElement | string;

export type CanvasSource = HTMLCanvasElement;

export type Source = CanvasSource | ImageSource | VideoSource;

export interface DrawCheckMargin {
    /**
     * margin to apply when comparing the top side of the plane and the
     * bottom side of the canvas.
     * @default 0
     */
    top: number;
    /**
     * margin to apply when comparing the right side of the plane and the
     * left side of the canvas.
     * @default 0
     */
    right: number;
    /**
     * margin to apply when comparing the bottom side of the plane and the
     * top side of the canvas.
     * @default 0
     */
    bottom: number;
    /**
     * margin to apply when comparing the left side of the plane and the
     * right side of the canvas.
     * @default 0
     */
    left: number;
}

export interface CameraParams {
    /**
     * the perspective field of view. Should be greater than 0 and lower than 180.
     * @default 50.
     */
    fov?: number;
    /**
     * near plane, the closest point where a mesh vertex is drawn.
     * @default 0.1.
     */
    near?: number;
    /**
     * far plane, farthest point where a mesh vertex is drawn.
     * @default 150.
     */
    far?: number;
    /**
     * width used to calculate the camera aspect ratio.
     * @default renderer container's width.
     */
    width?: number;
    /**
     * height used to calculate the camera aspect ratio.
     * @default renderer container's height.
     */
    height?: number;
    /**
     * pixel ratio used to calculate the camera aspect ratio.
     * @default renderer's pixel ratio.
     */
    pixelRatio?: number;
}

export class Camera {
    position: Vec3;
    projectionMatrix: Mat4;
    worldMatrix: Mat4;
    viewMatrix: Mat4;

    /**
     * Creates an instance of a Camera.
     * @param params Camera parameters.
     */
    constructor(params: CameraParams);

    /**
     * Sets the camera field of view
     * Update the camera projection matrix only if the fov actually changed
     * @param fov (float, optional): field of view to use
     */
    setFov(fov: number): void;

    /**
     * Sets the camera near plane value
     * Update the camera projection matrix only if the near plane actually
     * changed
     * @param near near plane value to use
     */
    setNear(near: number): void;

    /**
     * Sets the camera far plane value
     * Update the camera projection matrix only if the far plane actually
     * changed
     * @param far far plane value to use
     */
    setFar(far: number): void;

    /**
     * Sets the camera pixel ratio value
     * Update the camera projection matrix only if the pixel ratio actually
     * changed
     * @param pixelRatio pixelRatio value to use
     */
    setPixelRatio(pixelRatio: number): void;

    /**
     * Sets the camera width and height
     * Update the camera projection matrix only if the width or height actually
     * changed
     * @param width width value to use
     * @param height height value to use
     */
    setSize(width: number, height: number): void;

    /**
     * Sets the camera perspective
     * Update the camera projection matrix if our _shouldUpdate flag is true
     * @param fov field of view to use
     * @param near near plane value to use
     * @param far far plane value to use
     * @param width width value to use
     * @param height height value to use
     * @param pixelRatio pixelRatio value to use
     */
    setPerspective(fov: number, near: number, far: number, width: number, height: number, pixelRatio: number): void;

    /**
     * Sets the camera position based on its fov
     * Used by the Plane class objects to scale the planes with the right amount
     */
    setPosition(): void;

    /**
     * Sets a CSSPerspective property based on width, height, pixelRatio and fov
     * Used to translate planes along the Z axis using pixel units as CSS would
     * do
     * @see  https://stackoverflow.com/questions/22421439/convert-field-of-view-value-to-css3d-perspective-value
     */
    setCSSPerspective(): void;

    /**
     * Returns visible width / height at a given z-depth from our camera
     * parameters
     * @param depth depth to use, default to 0.
     * @see https://discourse.threejs.org/t/functions-to-calculate-the-visible-width-height-at-a-given-z-depth-from-a-perspective-camera/269
     */
    getScreenRatiosFromFov(depth: number): void;

    /**
     * Updates the camera projection matrix
     */
    updateProjectionMatrix(): void;

    /**
     * Force the projection matrix to update (used in Plane class objects
     * context restoration)
     */
    forceUpdate(): void;

    /**
     * Cancel the projection matrix update (used in Plane class objects after
     * the projection matrix has been updated)
     */
    cancelUpdate(): void;
}

export interface RendererParams extends CurtainsParams {
    /**
     * called when there has been an error while initiating the WebGL context
     */
    onError: () => void;
    /**
     * called when the WebGL context has been successfully created
     */
    onSuccess: () => void;
    /**
     * called when the WebGL context is lost
     */
    onContextLost: () => void;
    /**
     * called when the WebGL context is restored
     */
    onContextRestored: () => void;
    /**
     * called every time an object has been added/removed from the scene
     */
    onSceneChange: () => void;
}

export class Renderer {
    /**
     * Whether the WebGL context handles transparency or not.
     */
    alpha: boolean;

    /**
     * Whether the WebGL context should use antialiasing.
     */
    antialias: boolean;

    /**
     * The WebGL canvas being created and that contains our scene.
     */
    canvas: HTMLCanvasElement;

    /**
     * The container that will hold our WebGL canvas.
     * The canvas will be sized according to this container.
     * For performance reason, the smaller your container the better.
     * Most of the time you'll set it to cover the window.
     */
    container: Element;

    /**
     * Whether the WebGL context handles depth or not.
     */
    depth: boolean;

    /**
     * Whether the WebGL context creation should fail
     * in case of major performance caveat.
     */
    failIfMajorPerformanceCaveat: boolean;

    /**
     * Our WebGL context.
     * Can be WebGL2 or WebGL, use `isWebGL2()` to find which.
     */
    gl: WebGL2RenderingContext | WebGLRenderingContext;

    /**
     * The current device pixel ratio.
     * Use the setPixelRatio() method to change
     * this value at runtime.
     */
    pixelRatio: number;

    /**
     * An array containing all your current Plane elements.
     */
    planes: ArrayLike<Element>;

    /**
     * Whether the WebGL context handles premultiplied
     * alpha or not.
     */
    premultipliedAlpha: boolean;

    /**
     * Whether the WebGL context should preserve the
     * drawing buffer.
     */
    preserveDrawingBuffer: boolean;

    /**
     * If set to true, will remove all helpful warnings
     * displayed by the library.
     */
    production: boolean;

    /**
     * An array containing all your current RenderTarget
     * elements (including the one used by your shader passes).
     */
    renderTargets: ArrayLike<RenderTarget>;

    /**
     * An array containing all your current ShaderPass elements.
     */
    shaderPasses: ArrayLike<ShaderPass>;

    /**
     * Whether the WebGL context should handle stencil.
     */
    stencil: boolean;

    /**
     * Creates a new Renderer instance.
     * @param params An object containing the renderer parameters.
     */
    constructor(params: RendererParams);

    /**
     * Set/reset our context state object
     */
    initState(): void;

    /**
     * Add a callback queueing manager (execute functions on the next render
     * call, see CallbackQueueManager class object)
     */
    initCallbackQueueManager(): void;

    /**
     * Init our renderer
     */
    initRenderer(): void;

    /**
     * Get all available WebGL extensions based on WebGL used version
     * Called on init and on context restoration
     */
    getExtensions(): void;

    /**
     * Called when the WebGL context is lost
     */
    contextLost(event: Event): void;

    /**
     * Call this method to restore your context
     */
    restoreContext(): void;

    /**
     * Check that all objects and textures have been restored
     * @returns whether everything has been restored or not
     */
    isContextexFullyRestored(): boolean;

    /**
     * Called when the WebGL context is restored
     */
    contextRestored(): void;

    /**
     * Updates pixelRatio property
     */
    setPixelRatio(pixelRatio: number): void;

    /**
     * Set/reset container sizes and WebGL viewport sizes
     */
    setSize(): void;

    /**
     * Resize all our elements: planes, shader passes and render targets
     * Their textures will be resized as well
     */
    resize(): void;

    /**
     * Clear our WebGL scene colors and depth
     */
    clear(): void;

    /**
     * Clear our WebGL scene depth
     */
    clearDepth(): void;

    /**
     * Clear our WebGL scene colors and depth
     */
    clearColor(): void;

    /**
     * Called to bind or unbind a FBO
     * @param frameBuffer if frameBuffer is not null, bind it, unbind it otherwise
     * @param cancelClear if we should cancel clearing the frame buffer
     * (typically on init & resize)
     */
    bindFrameBuffer(frameBuffer: FrameBufferObject, cancelClear?: boolean): void;

    /**
     * Called to set whether the renderer will handle depth test or not
     * Depth test is enabled by default
     * @param setDepth if we should enable or disable the depth test
     */
    setDepthTest(depthTest: boolean): void;

    /**
     * Called to set the depth buffer behavior
     * Only available option is gl.LEQUAL at the moment
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthFunc
     */
    setDepthFunc(): void;

    /**
     * Whether we should enable or disable the blending state
     * Used to draw transparent planes
     * @param enableBlending if we should enable or disable the blending
     * (default to false)
     */
    setBlending(enableBlending: boolean): void;

    /**
     * Called to set the blending function (transparency)
     */
    setBlendFunc(): void;

    /**
     * Called to set whether we should cull an object face or not
     * @param cullFace what face we should cull
     */
    setFaceCulling(cullFace: boolean): void;

    /**
     * Tell WebGL to use the specified program if it's not already in use
     * @param program a program object
     */
    useProgram(program: WebGLProgram): void;

    /**
     * Removes a Plane element (that has already been disposed) from the scene
     * and the planes array
     * @param plane the plane to remove
     */
    removePlane(plane: Plane): void;

    /**
     * Completely remove a RenderTarget element
     * @param renderTarget the render target to remove
     */
    removeRenderTarget(renderTarget: RenderTarget): void;

    /**
     * Removes a ShaderPass element (that has already been disposed) from the
     * scene and the shaderPasses array
     * @param shaderPass the shader pass to remove
     */
    removeShaderPass(shaderPass: ShaderPass): void;

    /**
     * Enables the render loop
     */
    enableDrawing(): void;

    /**
     * Disables the render loop
     */
    disableDrawing(): void;

    /**
     * Forces the rendering of the next frame, even if disabled
     */
    needRender(): void;

    /**
     * Called at each draw call to render our scene and its content
     * Also execute our nextRender callback queue
     */
    render(): void;

    /**
     * Delete all cached programs
     */
    deletePrograms(): void;

    /**
     * Dispose our WebGL context and all its objects
     */
    dispose(): void;
}

// * Core

export interface CurtainsParams {
    /**
     * The HTML Element or ID of the HTML Element that will wrap the canvas.
     * If not specified, the WebGL context will not be set until you call
     * setContainer() with a valid HTML element or ID.
     */
    container?: Element | string;

    /**
     * Whether the WebGL context should handle transparency.
     * @default true
     */
    alpha?: boolean;

    /**
     * Whether the WebGL context should use the default antialiasing.
     * When using render targets, WebGL disables antialiasing,
     * so you can safely set this to false to improve the performance.
     * @default true
     */
    antialias?: boolean;

    /**
     * Whether the WebGL context should handle premultiplied alpha.
     * @default false.
     */
    premultipliedAlpha?: boolean;

    /**
     * Whether the WebGL context should handle depth.
     * @default true
     */
    depth?: boolean;

    /**
     * Whether the WebGL context should preserve the drawing buffer.
     * @default false
     */
    preserveDrawingBuffer?: boolean;

    /**
     * Whether the WebGL context creation should fail
     * in case of major performance caveat.
     * @default true
     */
    failIfMajorPerformanceCaveat?: boolean;

    /**
     * Whether the WebGL context should handle stencil.
     * @default false
     */
    stencil?: boolean;

    /**
     * Whether the library should create a request animation frame
     * loop to render the scene. Set it to false if you want to
     * handle this by yourself using the render() method.
     * @default true
     */
    autoRender?: boolean;

    /**
     * Whether the library should listen to the window resize event
     * and actually resize the scene. Set it to false if you want to
     * handle this by yourself using the resize() method.
     * @default true
     */
    autoResize?: boolean;

    /**
     * Defines the pixel ratio value.
     * Use it to limit it on init to increase performance.
     * @default window.devicePixelRatio
     */
    pixelRatio?: number;

    /**
     * Use it to downscale your rendering canvas.
     * May improve performance but will decrease quality.
     * Minimum: 0.25 Maximum: 1
     * @default 1
     */
    renderingScale?: number;

    /**
     * Whether the library should listen to the window scroll event.
     * Set it to false if you want to handle this by yourself.
     * @default true
     */
    watchScroll?: boolean;

    /**
     * Whether the library should throw useful console warnings or not.
     * @default false
     */
    production?: boolean;
}

/**
 * Easy WebGL tool to animate images and videos
 */
export class Curtains {
    /**
     * Whether the WebGL context handles transparency or not.
     */
    alpha: boolean;

    /**
     * Whether the WebGL context should use antialiasing.
     */
    antialias: boolean;

    /**
     * The WebGL canvas being created and that contains our scene.
     */
    canvas: HTMLCanvasElement;

    /**
     * The container that will hold our WebGL canvas.
     * The canvas will be sized according to this container.
     * For performance reason, the smaller your container the better.
     * Most of the time you'll set it to cover the window.
     */
    container: Element;

    /**
     * Whether the WebGL context handles depth or not.
     */
    depth: boolean;

    /**
     * Whether the WebGL context creation should fail
     * in case of major performance caveat.
     */
    failIfMajorPerformanceCaveat: boolean;

    /**
     * Our WebGL context.
     * Can be WebGL2 or WebGL, use `isWebGL2()` to find which.
     */
    gl: WebGL2RenderingContext | WebGLRenderingContext;

    /**
     * The current device pixel ratio.
     * Use the setPixelRatio() method to change
     * this value at runtime.
     */
    pixelRatio: number;

    /**
     * An array containing all your current Plane elements.
     */
    planes: ArrayLike<Element>;

    /**
     * Whether the WebGL context handles premultiplied
     * alpha or not.
     */
    premultipliedAlpha: boolean;

    /**
     * Whether the WebGL context should preserve the
     * drawing buffer.
     */
    preserveDrawingBuffer: boolean;

    /**
     * If set to true, will remove all helpful warnings
     * displayed by the library.
     */
    production: boolean;

    /**
     * An array containing all your current RenderTarget
     * elements (including the one used by your shader passes).
     */
    renderTargets: ArrayLike<RenderTarget>;

    /**
     * An array containing all your current ShaderPass elements.
     */
    shaderPasses: ArrayLike<ShaderPass>;

    /**
     * Whether the WebGL context should handle stencil.
     */
    stencil: boolean;

    /**
     * Creates a new Curtains instance
     * @param options Configuration options for the instance.
     */
    constructor(options: CurtainsParams);

    /**
     * Clears both WebGL context colors and depth buffers.
     */
    clear(): void;

    /**
     * Clears WebGL context color buffer.
     */
    clearColor(): void;

    /**
     * Clears WebGL context depth buffer.
     */
    clearDepth(): void;

    /**
     * This function will prevent the scene from being drawn
     * again (putting it in a paused state). You won't be able
     * to update uniforms while the drawing is disabled.
     * Useful to improve performance if you got a static scene.
     * @example Used in Plane properties and transformations cheat sheet,
     * Slideshow with a displacement shader and
     * Asynchronous textures loading examples.
     */
    disableDrawing(): void;

    /**
     * This function will cancel the requestAnimationFrame loop,
     * remove all planes and delete the WebGL context.
     */
    dispose(): void;

    /**
     * This function will reenable the scene drawing in case you
     * paused it via disableDrawing(). Could be useful if you want
     * to start drawing the scene again when a user gesture
     * happens for example.
     * @example Used in Slideshow with a displacement shader
     * and Asynchronous textures loading examples.
     */
    enableDrawing(): void;

    /**
     * Useful to get our container HTML element bounding rectangle
     * without causing a reflow/layout repaint. Be careful as the
     * values are relative to your pixelRatio value.
     * @returns an object containing the container HTML element
     * width, height, top and left positions.
     * @example used in Multiple planes scroll effect and
     * Post processing multiple passes examples.
     */
    getBoundingRect(): {
        width: number;
        height: number;
        top: number;
        left: number;
    };

    /**
     * Get the last scroll delta values along X and Y axis. Call
     * it after having called updateScrollValues() or inside the
     * onScroll() event if scroll watching is active.
     * @returns an object containing the last scroll delta values
     * along X and Y axis.
     * @example used in Multiple planes,
     * Multiple planes scroll effect : rotation, scale and parallax,
     * Post processing displacement effect and
     * Post processing multiple passes examples.
     */
    getScrollDeltas(): {
        x: number;
        y: number;
    };

    /**
     * Get the current scroll values along X and Y axis. Call it after
     * having called updateScrollValues() or inside the onScroll()
     * event if scroll watching is active.
     * @returns an object containing the current scroll values along
     * X and Y axis.
     * @example used in Multiple planes,
     * Multiple planes scroll effect : rotation, scale and parallax,
     * Post processing displacement effect and
     * Post processing multiple passes examples.
     */
    getScrollValues(): {
        x: number;
        y: number;
    };

    /**
     * Check whether the created WebGL context is using WebGL2 or not.
     * @returns A boolean indicating if the context is using WebGL2 or not.
     */
    isWebGL2(): boolean;

    /**
     * Calculates a linear interpolation of the amount specified between
     * the start and end values
     * @param start Value to lerp
     * @param end End value to use for lerp
     * @param amount Amount of lerp
     * @returns the linear interpolation result as a float.
     * @example used in Simple plane, Multiple planes,
     * Multiple planes scroll effect : rotation, scale and parallax,
     * Simple video plane, Simple canvas plane,
     * Post processing displacement effect, Post processing multiple passes,
     * Post processing scrolling wheel with custom transform origin,
     * Ping pong shading / FBOs swapping flowmap,
     * Selective shader passes using render targets and
     * Multiple planes scroll effect with Locomotive Scroll examples.
     */
    lerp(start: number, end: number, amount: number): number;

    /**
     * This function will reenable the scene drawing for just one frame.
     * Useful if you want to update uniforms if the drawing is disabled.
     * @example used in Slideshow with a displacement shader and
     * Asynchronous textures loading examples.
     */
    needRender(): void;

    /**
     * A function to execute on the next render call.
     * @param callback Callback to execute
     * @param keep Whether to keep executing the callback.
     * (Act as `setTimeout` or `setInterval`), defaults to false
     * @returns the callback queue item. Useful if you need to switch its
     * keep property from true to false once a condition is met
     * (act as a clearInterval).
     * @example used in Plane properties and transformations cheat sheet and
     * AJAX navigation with plane removal examples.
     */
    nextRender(callback: () => void, keep?: boolean): CallbackQueueItem;

    /**
     * This function renders your scene if drawing is enabled.
     * Useful if you're using your own request animation frame loop.
     */
    render(): void;

    /**
     * This function will resize your scene and all your planes.
     * Called internally at each window resize event. You should
     * call it if you're changing your container size dynamically
     * without changing the window size.
     */
    resize(): void;

    /**
     * This function will try to restore the WebGL context.
     * Use it after having previously lost the context.
     * @example used in all examples.
     */
    restoreContext(): void;

    /**
     * Set the Curtains container to which we will append the canvas
     * and then start instancing the Curtains class and the WebGL context.
     * Called internally if a container is specified in the initial
     * parameters object but could be called later on if no container
     * is provided in the initial parameters.
     * @param container HTML element or ID to which append the canvas
     */
    setContainer(container: Element | string): void;

    /**
     * This function will set a new pixel ratio and resize everything
     * accordingly.
     * The default pixel ratio value being initialized is the actual
     * device pixel ratio. Use this method if you want to limit the
     * pixel ratio to improve performance.
     * @param pixelRatio New pixel ratio to set
     * @param triggerCallback Whether `onAfterResize` callback should
     * be triggered, false by default
     * @fires onAfterResize if triggerCallback is true.
     */
    setPixelRatio(pixelRatio: number, triggerCallback?: boolean): void;

    /**
     * Updates the scroll values. Use it before updating your planes
     * positions with updateScrollPosition() while scrolling.
     * Called internally if scroll watching is active.
     * @param xOffset Scroll value along X axis
     * @param yOffset Scroll value along Y axis
     * @example used in Multiple planes scroll effect with Locomotive
     * scroll example.
     */
    updateScrollValues(xOffset: number, yOffset: number): void;

    /**
     * This function will be called each time the window has been
     * resized,after everything has been updated.
     * @param callback function to execute.
     * @returns your Curtains object, allowing it to be chainable.
     */
    onAfterResize(callback: () => void): Curtains;

    /**
     * This function will be called each time the WebGL context
     * has been lost.
     * @param callback function to execute.
     * @returns your Curtains object, allowing it to be chainable.
     * @example used in all examples.
     */
    onContextLost(callback: () => void): Curtains;

    /**
     * This function will be called each time the WebGL context
     * has been successfully restored.
     * @param callback function to execute.
     * @returns your Curtains object, allowing it to be chainable.
     */
    onContextRestored(callback: () => void): Curtains;

    /**
     * This function will be called if there's an error during the
     * initialisation, or if the WebGL context could not be created.
     * @param callback function to execute.
     * @returns your Curtains object, allowing it to be chainable.
     * @example used in all examples.
     */
    onError(callback: () => void): Curtains;

    /**
     * This function is called once at each request animation frame
     * call. Useful if you need to update stats or tweening engine.
     * @param callback function to execute.
     * @returns your Curtains object, allowing it to be chainable.
     * @example used in Multiple planes,
     * Multiple planes scroll effect : rotation, scale and parallax examples.
     */
    onRender(callback: () => void): Curtains;

    /**
     * This function is called each time a window scroll event is
     * fired and scroll watching is active.
     * @param callback function to execute.
     * @returns your Curtains object, allowing it to be chainable.
     * @example used in Multiple planes,
     * Multiple planes scroll effect : rotation, scale and parallax,
     * Post processing displacement effect and
     * Post processing multiple passes examples.
     */
    onScroll(callback: () => void): Curtains;

    /**
     * This function will be called when the WebGL has been
     * successfully created.
     * @param callback function to execute.
     * @returns your Curtains object, allowing it to be chainable.
     */
    onSuccess(callback: () => void): Curtains;
}

export interface PlaneParams {
    /**
     * your vertex shader as a string. Be careful with the line-breaks as
     * it may throw javascript errors. Will look for
     * vertexShaderID param if not specified.
     */
    vertexShader?: string;

    /**
     * the vertex shader ID. If ommited, will look for a data attribute
     * data-vs-id on the plane HTML element. Will use a default vertex
     * shader and throw a warning if nothing specified.
     */
    vertexShaderID?: string;

    /**
     * your fragment shader as a string. Be careful with the line-breaks
     * as it may throw javascript errors. Will look for fragmentShaderID
     * param if not specified.
     */
    fragmentShader?: string;

    /**
     * the fragment shader ID. If ommited, will look for a data attribute
     * data-fs-id on the plane HTML element. Will use a default fragment
     * shader that draws only black pixels and throw a warning if nothing
     * specified.
     */
    fragmentShaderID?: string;

    /**
     * the plane's definition along the X axis.
     * @default 1
     */
    widthSegments?: number;

    /**
     * the plane's definition along the Y axis.
     * @default 1
     */
    heightSegments?: number;

    /**
     * defines in which order the planes are drawn. See renderOrder property.
     * @default 0
     */
    renderOrder?: number;

    /**
     * if your plane should enable or disable the depth test.
     * @default true
     */
    depthTest?: boolean;

    /**
     * if your plane should handle transparency and therefore be drawn after
     * the planes that do not use transparency.
     * @default false
     */
    transparent?: boolean;

    /**
     * which face of the plane should be culled. Could either be "back",
     * "front" or "none".
     * @default "back"
     */
    cullFace?: "back" | "front" | "none";

    /**
     * Whether to use frustum culling: defines if the plane should always
     * be drawn or if it should not be drawn if it lies completely outside
     * of the scene.
     * @default false
     */
    alwaysDraw?: boolean;

    /**
     * Whether to draw your plane.
     * @default true
     */
    visible?: boolean;

    /**
     * Additional margins to add in the draw check calculations, in pixels.
     * Positive value means the plane will be drawn even if outside the
     * canvas by less than the value, negative value means the plane will
     * be hidden if inside the canvas by more than the value. Useful if
     * you're messing with the vertices positions in your vertex shader.
     */
    drawCheckMargins?: DrawCheckMargin;

    /**
     * Whether the plane should auto update its position when the user scrolls.
     * @default false
     */
    watchScroll?: boolean;

    /**
     * defines if the sources should be load on init automatically.
     * @default true
     */
    autoloadSources?: boolean;

    /**
     * Default options to apply to the textures of the plane.
     * @see [TextureParams](https://www.curtainsjs.com/texture-class.html#parameters)
     */
    texturesOptions?: TextureParams;

    /**
     * defines the crossOrigin process to load images if any.
     * @default "anonymous"
     */
    crossOrigin?: string;

    /**
     * defines the perspective field of view.
     * @default 50
     */
    fov?: number;

    /**
     * the uniforms that will be passed to the shaders (if no uniforms
     * specified there won't be any interaction with the plane).
     */
    uniforms?: Record<string, Uniform>;
}

export class Plane {
    /**
     * Whether the WebGL renderer should always draw the plane or if it should
     * draw it only when the plane is contained in the canvas viewport. Used
     * for performance optimizations.
     * @example Check the Plane properties and transformations cheat sheet
     * example to see how it could be used.
     */
    alwaysDraw: boolean;

    /**
     * Whether the sources (images, videos and canvases HTML children elements
     * of your plane) should be loaded and according textures created on plane
     * initialization.
     * @param shouldAutoLoad
     */
    autoloadSources: boolean;

    /**
     * The perspective camera used to compute the projection matrix of the
     * plane.
     */
    camera: Camera;

    /**
     * An array containing all the canvases loaded via the load methods into
     * the plane.
     */
    canvases: ArrayLike<HTMLCanvasElement>;

    /**
     * The cross origin process used to load the medias.
     */
    crossOrigin: string;

    /**
     * Which face of the plane should be culled (ie not drawn). Could either
     * be "back" (only the front side of the plane is drawn), "front" (only
     * the back side of the plane is drawn) or "none" (all the side of the
     * plane are drawn).
     * @default "back"
     * You might want to change the default culling behavior if you apply a
     * rotation along the X or Y axis for example (therefore showing the back
     * side of the plane).
     * @example Check the Plane properties and transformations cheat sheet
     * example to see how it could be used.
     */
    cullFace: string;

    /**
     * Additional margins to add in the draw check calculations, in pixels.
     * Positive value means the plane will be drawn even if outside the canvas
     * by less than the value, negative value means the plane will be hidden if
     * inside the canvas by more than the value.
     * Useful if you're messing with the vertices positions in your vertex
     * shader.
     * @example Check the Plane properties and transformations cheat sheet
     * example to see how it could be used.
     */
    drawCheckMargins: DrawCheckMargin;

    /**
     * Our WebGL Context
     */
    gl: WebGLRenderingContext;

    /**
     * The HTML element used to create your plane. Useful if you want to
     * add event listeners to it.
     * You can change the HTML element used by the plane at runtime by using
     * the `resetPlane()` method.
     */
    htmlElement: Element;

    /**
     * An array containing all the images loaded via the load methods into
     * the plane.
     */
    images: ArrayLike<HTMLImageElement>;

    /**
     * The index of your plane in the Curtains planes array.
     */
    index: number;

    /**
     * The plane internal texture loader.
     */
    loader: PlaneTextureLoader;

    /**
     * A Quat class object representing your actual plane rotation in 3D space
     * as a quaternion.
     */
    quaternion: Quat;

    /**
     * A Vec3 class object containing the additional translation applied to
     * your plane along X, Y and Z axis.
     * Since v8.0, this property is reactive, which means that when you update
     * one of the relativeTranslation vector component, the translation of the
     * plane will automatically be updated:
     * @example
     * // translate our plane by 100px along X axis
     * plane.relativeTranslation.x = 100;
     */
    relativeTranslation: Vec3;

    /**
     * The Renderer class object created by our curtains object.
     */
    renderer: Renderer;

    /**
     * The plane renderOrder value, which determines in which order the planes
     * are drawn. A plane will be rendered on top of planes with a lower
     * renderOrder number.
     * Use `setRenderOrder()` to change this value.
     * @see Scene rendering order to know more about how the things are drawn.
     * @default 0
     */
    renderOrder: number;

    /**
     * A Vec3 class object containing the rotation applied to your plane on X,
     * Y and Z axis. This property is reactive, which means that when you update
     * one of the rotation vector component, the rotation of the plane will
     * automatically be updated.
     * @example
     * // rotate our plane by PI / 2 along X axis
     * plane.rotation.x = Math.PI / 2;
     */
    rotation: Vec3;

    /**
     * A Vec3 class object containing the scale applied to your plane on X and
     * Y axis (value along Z axis is always equal to 1). This property is reactive,
     * which means that when you update one of the scale vector component,
     * the scale of the plane will automatically be updated.
     * @example
     * // scale our plane by 2 along X axis
     * plane.scale.x = 2;
     */
    scale: Vec3;

    /**
     * The render target used to render the plane. Null when no render target is
     * applied and the plane is directly rendered onto the canvas.
     */
    target: RenderTarget;

    /**
     * An array containing all the plane's Textures already created.
     */
    textures: ArrayLike<Texture>;

    /**
     * A Vec3 class object containing your plane transform origin position along
     * X, Y and Z axis. `{ x:0, y:0, z:0 }` is the plane top left corner whereas
     * `{ x:1, y:1, z:0 }` is the plane bottom right corner. Use the value along
     * the Z axis to set the transformation origin behind (negative value) or in
     * front (positive value) the plane. Values could be negative, or greater
     * than 1.
     * @default { x:0.5, y:0.5, z:0 } (center of the plane)
     * @example
     * Check the Plane properties and transformations cheat sheet example
     * to see how it could be used.
     */
    transformOrigin: Vec3;

    /**
     * Class object type: "Plane".
     */
    type: string;

    /**
     * An object containing all the uniforms you passed as parameters.
     * You can update your uniform by modifying its value property.
     */
    uniforms: Record<string, Uniform>;

    /**
     * An empty object to store any additional data or custom properties
     * into your plane.
     */
    userData: Record<string, never>;

    /**
     * The plane's unique identifier.
     */
    uuid: string;

    /**
     * An array containing all the videos loaded via the load methods
     * into the plane.
     */
    videos: ArrayLike<HTMLVideoElement>;

    /**
     * Whether your plane should be drawn or not. Set this property to true
     * or false to toggle the plane's visibility.
     * @example Check the Plane properties and transformations cheat sheet
     * example to see how it could be used.
     */
    visible: boolean;

    /**
     * Whether your plane's position should be automatically updated
     * when the user scrolls.
     */
    watchScroll: boolean;

    /**
     * Create a new Plane instance.
     * @param curtains Your curtains class object
     * @param domElement a HTML element
     * @param params an object containing the plane parameters
     */
    constructor(curtains: Curtains, domElement: Element, params?: PlaneParams);

    /**
     * This function takes an already existing texture and adds it to the
     * plane.
     * @param texture The texture to add to this plane. Equivalent of the
     * Texture class `addParent()` method.
     * @example used in AJAX navigation with plane removal example.
     */
    addTexture(texture: Texture): void;

    /**
     * This function will create a new Texture and add it to our Plane.
     * @param params an object containing the texture parameters. Will use
     * the default plane texturesOptions if not specified, but you should
     * at least provide a sampler name.
     * @returns The newly created Texture if successful.
     * @example used in Slideshow with a displacement shader and
     * Ping pong shading flowmap examples.
     */
    createTexture(params?: TextureParams): Texture;

    /**
     * Switches on/off the depth test for that plane. You might want to disable
     * the depth test if you got transparency issues.
     * @param shouldEnableDepthTest enable or disable the depth test for that
     * plane.
     */
    enableDepthTest(shouldEnableDepthTest: boolean): void;

    /**
     * Useful to get our plane HTML element bounding rectangle without causing
     * a reflow/layout repaint. Be careful as the values are relative to your
     * Curtains pixelRatio value.
     * @returns an object containing the plane HTML element width, height, top,
     * right, bottom and left positions in pixels.
     * @example used in Simple canvas plane, Text planes using canvas,
     * Multiple planes scroll effect and
     * Post processing multiple passes examples.
     */
    getBoundingRect(): {
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    };

    /**
     * Useful to get our plane WebGL element bounding rectangle relative to the
     * viewport, with all transformations applied. Used internally in the draw
     * check function (frustum culling).
     * @returns an object containing the plane WebGL element width, height, top,
     * right, bottom and left positions in pixels.
     * @example used in Plane properties and transformations cheat sheet
     * example.
     */
    getWebGLBoundingRect(): {
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    };

    /**
     * Use this function to check if a plane is currently being drawn or not.
     * A plane is not drawn either if it has not been fully initiated yet,
     * its visible property is set to false or it is being culled.
     * @returns a boolean indicating whether the plane is currently drawn or
     * not.
     * @example used in Plane properties and transformations cheat sheet
     * example.
     */
    isDrawn(): void;

    /**
     * This function takes a canvas HTML element, creates a Texture using it
     * and loads it into your plane.
     * @param canvasElement a HTML canvas element to load into your plane.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @example used in Text planes using canvas example.
     */
    loadCanvas(
        canvasElement: CanvasSource,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
    ): void;

    /**
     * This function takes an array of canvas HTML elements and creates a
     * Texture for each of them.
     * @param canvasElements an array or collection of HTML canvas elements
     * to load into your plane.
     * @param texturesOptions Default options to apply to those textures. See
     * the Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     */
    loadCanvases(
        canvasElements: ArrayLike<CanvasSource>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
    ): void;

    /**
     * This function takes an image HTML element (or image source URL), creates
     * a Texture using it and loads it into your plane.
     * @param imageElement a HTML image element or image source URL to load
     * into your plane.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @param errorCallback Callback executed on source load error.
     */
    loadImage(
        imageElement: ImageSource,
        textureOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<ImageSource>,
    ): void;

    /**
     * This function takes an array of image HTML elements (or images sources
     * URL) and creates a Texture for each of them.
     * @param imageElements an array or collection of HTML image elements or
     * images sources URL to load into your plane.
     * @param texturesOptions Default options to apply to those textures. See
     * the Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     * @param errorCallback Callback executed on each source load error.
     * @example used in Asynchronous textures loading example.
     */
    loadImages(
        imageElements: ArrayLike<ImageSource>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<ImageSource>,
    ): void;

    /**
     * This function takes a source element (or source URL), creates a Texture
     * using it and loads it into your plane.
     * @param sourceElement an image, canvas, video HTML element or source URL
     * to load into your plane.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @param errorCallback Callback executed on source load error.
     */
    loadSource(
        sourceElement: Source,
        textureOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<Source>,
    ): void;

    /**
     * This function takes an array of source elements (or sources URL),
     * creates Textures using them and loads them into your plane.
     * @param sourceElements an array of image, canvas or video HTML elements
     * or sources URL to load into your plane.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     * @param errorCallback Callback executed on each source load error.
     */
    loadSources(
        sourceElements: ArrayLike<Source>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<Source>,
    ): void;

    /**
     * This function takes a video HTML element (or video source URL), creates
     * a Texture using it and loads it into your plane.
     * @param videoElement a HTML video element or video source URL to load
     * into your plane.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @param errorCallback Callback executed on source load error.
     */
    loadVideo(
        videoElement: VideoSource,
        textureOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<VideoSource>,
    ): void;

    /**
     * This function takes an array of video HTML elements (or videos sources
     * URL) and creates a Texture for each of them.
     * @param videoElements an array or collection of HTML video elements or
     * videos sources URL to load into your plane.
     * @param texturesOptions Default options to apply to those textures. See
     * the Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     * @param errorCallback Callback executed on each source load error.
     */
    loadVideos(
        videoElements: ArrayLike<VideoSource>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<VideoSource>,
    ): void;

    /**
     * Get the mouse coordinates relative to the plane clip space values. Use it
     *  to send to a uniform and interact with your plane. A plane coordinates
     * ranges from (-1, 1) in the top left corner to (1, -1) in the bottom right
     * corner, which means the values along the Y axis are inverted.
     * @param mousePosition mouse position along X and Y axis (you should use
     * the event clientX and clientY values).
     * @returns a Vec2 class object containing the mouse coordinates relative
     * to the plane clip space values.
     * @example used in Vertex coordinates helper, Simple plane, Simple video
     * plane, Simple canvas plane examples.
     */
    mouseToPlaneCoords(mousePosition: Vec2): Vec2;

    /**
     * This function will automatically start all of your plane videos playback.
     * If you are not calling it after a user action it might not work on mobile.
     * @example used in Simple video plane,
     * Multiple video textures with a displacement shader examples.
     */
    playVideos(): void;

    /**
     * This function will remove the plane from our Curtains object and renderer
     *  and delete all of its textures. It will also update all other planes
     * indexes.
     * @example used in AJAX navigation with plane removal example.
     */
    remove(): void;

    /**
     * Removes the plane current render target if any.
     */
    removeRenderTarget(): void;

    /**
     * Reset your plane transformations values, including the transform origin.
     * If a HTML element is specified, will update the plane's sizes and
     * position according to that new element (triggers reflow). Useful if you
     * want to keep a plane after an AJAX page transition and re-sync it with
     * a newly appended element.
     * @param htmlElement a new HTML to use for your plane sizes and position
     * syncing. Default to null (keep the current HTML element).
     * @fires Reflow dependent on if size and positioning changes
     */
    resetPlane(htmlElement?: Element): void;

    /**
     * This method is called internally by the Curtains resize() method each
     * time the window is resized, but you should call it manually each time
     * you're updating a plane size, either via CSS animations or directly in
     * javascript. It will updates its position as well.
     * @fires Reflow
     */
    resize(): void;

    /**
     * Set the perspective. Increasing the field of view will increase the
     * perspective.
     * @param fieldOfView the perspective field of view. Should be greater than
     * 0 and lower than 180. Defaults to 50.
     * @param nearPlane closest point where a mesh vertex is displayed.
     * Default to 0.1.
     * @param farPlane farthest point where a mesh vertex is displayed.
     * Default to 150.
     * @example used in Plane properties and transformations cheat sheet,
     * Simple plane, Simple video plane, Simple canvas plane examples.
     */
    setPerspective(fieldOfView: number, nearPlane?: number, farPlane?: number): void;

    /**
     * Sets the plane new render order.
     * A plane will be rendered on top of planes with a lower renderOrder
     * number. Negative numbers are accepted. You can ommit the renderOrder
     * parameter to reset a plane renderOrder value.
     * @param renderOrder the new render order to use. Default to 0.
     * @example used in GSAP click to fullscreen gallery example.
     */
    setRenderOrder(renderOrder: number): void;

    /**
     * The render target onto which you want to render your plane.
     * @param renderTarget the RenderTarget to use.
     * @example used in Ping pong shading flowmap example and Selective shader
     * passes using render targets examples.
     */
    setRenderTarget(renderTarget: RenderTarget): void;

    /**
     * Set the plane translation based on pixel units. Please note that this
     * will not be applied to your plane HTML element, so it's more like an
     * additional translation.
     * The translation along the Z axis is being treated like the CSS translateZ
     * function, using the current field of view to compute the corresponding
     * CSS perspective property (a small field of view means a big perspective
     * value and vice versa).
     * @param translation the translation value to apply on the X, Y and Z axes
     * in pixel.
     * @example used in Plane properties and transformations cheat sheet,
     * Multiple planes scroll effect : rotation, scale and parallax and
     * Post processing multiple passes examples.
     */
    setRelativeTranslation(translation: Vec3): void;

    /**
     * Set the plane rotation using Euler angles and 'XYZ' as axes order.
     * @param angle the angle in radians to rotate around the X, Y and Z axes.
     * @example used in Plane properties and transformations cheat sheet,
     * Multiple planes scroll effect : rotation, scale and parallax example.
     */
    setRotation(angle: Vec3): void;

    /**
     * Set the plane new scale.
     * @param scale the scale to set along the X and Y axes.
     * @example used in Plane properties and transformations cheat sheet,
     * Multiple planes scroll effect : rotation, scale and parallax and
     * sPost processing multiple passes examples.
     */
    setScale(scale: Vec2): void;

    /**
     * Set the plane transform origin to use with your transformations (scale
     * and rotation). See the transformOrigin property.
     * @param origin the plane transform origin along the X, Y and Z axes.
     * @example used in Plane properties and transformations cheat sheet and
     * Post processing scrolling wheel with custom transform origin example.
     */
    setTransformOrigin(origin: Vec3): void;

    /**
     * Internally, the planes positions are updated only when the window is
     * resized. But if you are updating your plane HTML element position without
     * resizing the window (typically while scrolling, animating its CSS
     * position or transform values), call this method in your animation loop at
     * the same time.
     * @fires `Plane.getBoundingClientRect()` causing a reflow/layout repaint of
     * the page. Use `setRelativeTranslation()` to update your plane position
     * without any reflow.
     * @fires Reflow
     */
    updatePosition(): void;

    /**
     * Use it if you want to handle the scroll event by yourself, like with a
     * virtual scroll library. You will have to pass the scroll values to the
     * Curtains class with `updateScrollValues()` before calling this method.
     * @example used in Multiple planes scroll effect with Locomotive scroll example.
     */
    updateScrollPosition(): void;

    /**
     * This function will be called just after your plane has been drawn.
     * @param callback function to execute.
     * @returns your Plane object, allowing it to be chainable.
     * @example used in Ping pong shading flowmap example.
     */
    onAfterRender(callback: () => void): Plane;

    /**
     * This function will be called each time your plane has been resized, after
     * everything has been updated.
     * @param callback function to execute.
     * @returns your Plane object, allowing it to be chainable.
     * @example used in Multiple planes scroll effect : rotation, scale and parallax,
     * Simple canvas plane, Text planes using canvas and
     * Post processing multiple passes examples.
     */
    onAfterResize(callback: () => void): Plane;

    /**
     * This function is called if there's an error while instancing your plane,
     * usually because the shaders compilation failed.
     * @param callback function to execute.
     * @returns your Plane object, allowing it to be chainable.
     * @example used in AJAX navigation with plane removal example.
     */
    onError(callback: () => void): Plane;

    /**
     * This function will be triggered each time a plane leaves the Curtains
     * container viewport area, unless alwaysDraw property is set to true.
     * If `alwaysDraw` property is set to `false`, an out-of-view plane is not
     * drawn anymore and its textures are no longer updated, but its uniforms
     * are still updated and its onRender callback is still called.
     * You might want to pause its videos as well if it contains any.
     * @param callback function to execute.
     * @returns your Plane object, allowing it to be chainable.
     * @example used in Multiple planes scroll effect : rotation, scale and parallax example.
     */
    onLeaveView(callback: () => void): Plane;

    /**
     * This function will be fired each time a source element (either an image,
     * a canvas or a video) of the plane has been loaded and is ready to
     * display. You'll have access here to the newly created texture. Useful to
     * handle a loader or manipulate the texture.
     * @param callback function to execute, with the newly created texture
     * passed as parameter.
     * @returns your Plane object, allowing it to be chainable.
     * @example used in Asynchronous textures loading example.
     */
    onLoading(callback: (texture: Texture) => void): Plane;

    /**
     * This function will be called once our plane is all set up and ready to
     * be drawn.
     * If `autoloadSources` is set to `true`, il will be called after the
     * images, canvas and videos are loaded. Otherwise it will be called almost
     * right away.
     * This is where you may want to add event listener to interact with your
     * plane or update its uniforms.
     * @param callback function to execute.
     * @returns your Plane object, allowing it to be chainable.
     * @example used in most examples.
     */
    onReady(callback: () => void): Plane;

    /**
     * This function will be triggered each time a plane reenters the Curtains
     * container viewport area, unless alwaysDraw property is set to true.
     * @param callback function to execute.
     * @returns your Plane object, allowing it to be chainable.
     * @example used in Multiple planes scroll effect : rotation, scale and parallax example.
     */
    onReEnterView(callback: () => void): Plane;

    /**
     * This function will be triggered for each plane at each
     * requestAnimationFrame call. Useful to update a time uniform, change plane
     * rotation, scale, etc.
     * @param callback function to execute.
     * @returns your Plane object, allowing it to be chainable.
     * @example used in most examples.
     */
    onRender(callback: () => void): Plane;
}

export interface TextureParams {
    /**
     * Sampler name to use in your sampler and texture matrix uniforms.
     */
    sampler?: string;

    /**
     * Copy the texture passed into this texture
     */
    fromTexture?: Texture;

    /**
     * whether this texture should use premultiplied alpha or not.
     * @default false
     */
    premultiplyAlpha?: boolean;

    /**
     * whether this texture should use floating points or not (if available,
     * depending on the WebGL context and extensions). Accepted values are "none",
     * "half-float" and "float".
     * @default "none"
     */
    floatingPoint?: "none" | "half-float" | "float";

    /**
     * texture anisotropy value
     * @see anisotropic filtering explanation). Usually
     * ranging from 1 to 16, depending on the WebGL context and extensions
     * available.
     * @default 1
     */
    anisotropy?: number;

    /**
     * Whether to generate mipmaps for that texture (see mip maps explanation).
     * Note that videos and canvases textures will never generate mip maps as
     * they are frequently uploaded.
     * @default true for images textures.
     */
    generateMipmap?: boolean;

    /**
     * the texture minification filter. Use one of the GLenum possible values,
     * depending on the WebGL context and size of the source (some WebGL1
     * filters need a power of 2 sized source).
     * @default gl.LINEAR
     */
    minFilter?: GLenum;

    /**
     * the texture magnification filter. Use one of the GLenum possible values,
     * depending on the WebGL context and size of the source (some WebGL1
     * filters need a power of 2 sized source).
     * @default gl.LINEAR
     */
    magFilter?: GLenum;

    /**
     * the texture wrapping along the X axis. Use one of the GLenum possible
     * values, depending on the WebGL context and size of the source (some
     * WebGL1 wrapping need a power of 2 sized source).
     * @default gl.CLAMP_TO_EDGE
     */
    wrapS?: GLenum;

    /**
     * the texture wrapping along the Y axis. Use one of the GLenum possible
     * values, depending on the WebGL context and size of the source (some
     * WebGL1 wrapping need a power of 2 sized source).
     * @default gl.CLAMP_TO_EDGE
     */
    wrapT?: GLenum;
}

export class Texture {
    /**
     * Our WebGL context.
     */
    gl: WebGL2RenderingContext | WebGLRenderingContext;

    /**
     * The index of your texture in the Plane or ShaderPass textures array.
     * Since ShaderPass silently creates a texture on init, if you add a texture
     * to it later, this texture will have an index of 1.
     */
    index: number;

    /**
     * An object containing the offset applied to your texture on x and y axis.
     * Only applied if you are using the texture matrix to map your texture in
     * your shaders.
     */
    offset: Vec2;

    /**
     * Actual texture parameters values used: anisotropy, generateMipmap, minFilter, magFilter, wrapS and wrapT.
     */
    parameters: TextureParams;

    /**
     * The renderer created by our curtains object.
     */
    renderer: Renderer;

    /**
     * An object containing the scale applied to your texture on x and y axis.
     * Only applied if you are using the texture matrix to map your texture in
     * your shaders.
     */
    scale: Vec2;

    /**
     * Depends on your texture sourceType.
     * By default, a canvas texture will be updated at each
     * requestAnimationFrame call, a video texture will be updated when the next
     * frame is available, and an image texture will never be updated.
     * If you want to stop updating your canvas or video texture, set this flag
     * to false for performance boost.
     * @example used in Text planes using canvas example
     */
    shouldUpdate: boolean;

    /**
     * The source used by your texture. Could be either an image, canvas or
     * video HTML element. Use it to safely access any property or method of
     * that element, like play() or pause() for videos.
     */
    source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;

    /**
     * The type or your texture. Could be either "empty", "image", "canvas",
     * "video" or "fboTexture".
     * A "fboTexture" is a RenderTarget texture onto which your plane or scene
     * is drawn.
     */
    sourceType: "empty" | "image" | "canvas" | "video" | "fboTexture";

    /**
     * Class object type: "Texture".
     */
    type: string;

    /**
     * An empty object to store any additional data or custom properties
     * into your texture.
     */
    userData: object;

    /**
     * The texture's unique identifier.
     */
    uuid: string;

    /**
     * Creates a new Texture instance.
     * @param curtains Your Curtains class object.
     * @param params An object containing the texture parameters.
     */
    constructor(curtains: Curtains, params?: TextureParams);

    /**
     * Adds your texture to a Plane or a ShaderPass so it can display it.
     * @param parent The WebGL object that should use that texture.
     * @example used in AJAX navigation with plane removal example.
     */
    addParent(parent: Plane | ShaderPass): void;

    /**
     * Copy an already existing Texture into this texture.
     * @param texture The texture to copy.
     * @example used in Ping pong shading flowmap example.
     */
    copy(texture: Texture): void;

    /**
     * Whether this texture currently has a parent or not.
     * @returns true if this texture has a parent, false otherwise.
     * @example used in AJAX navigation with plane removal example.
     */
    hasParent(): boolean;

    /**
     * Force your texture to be updated during the next draw call, even if its
     * `shouldUpdate` property is set to `false`. Use it if you want to force a
     * canvas texture update just once for example.
     * @example used in Text planes using canvas example.
     */
    needUpdate(): void;

    /**
     * Force the update of your texture matrix. Useful when you manually resize
     * your source (usually a canvas).
     * @example used in Text planes using canvas example.
     */
    resize(): void;

    /**
     * Set the texture's anisotropy value (see anisotropic filtering
     * explanation).
     * @param anistropy anisotropy value to apply (usually between 1 - low and
     * 16 - high).
     * @example used in Plane properties and transformations cheat sheet
     * example.
     */
    setAnisotropy(anisotropy: number): void;

    /**
     * Set the texture's magnification filter.
     * @param magFilter magnification filter to apply. Use one of the GLenum
     * possible values, depending on the WebGL context and size of the source
     * (some WebGL1 filters need a power of 2 sized source).
     */
    setMagFilter(magFilter: GLenum): void;

    /**
     * Set the texture's minification filter.
     * @param minFilter minification filter to apply. Use one of the GLenum
     * possible values, depending on the WebGL context and size of the source
     * (some WebGL1 filters need a power of 2 sized source).
     * @example used in Slideshow with a displacement shader example.
     */
    setMinFilter(minFilter: GLenum): void;

    /**
     * Set the texture offset. Only applied if you are using the texture matrix
     * to map your texture in your shaders.
     * @param offset offset to apply along the X and Y axes (0.5 along the X
     * axis meaning half the width).
     * @example used in GSAP click to fullscreen gallery example.
     */
    setOffset(offset: Vec2): void;

    /**
     * Set the texture new scale. Only applied if you are using the texture
     * matrix to map your texture in your shaders.
     * @param scale the scale to set along the X and Y axes.
     * @example used in Multiple planes scroll effect : rotation, scale and
     * parallax, Post processing multiple passes and GSAP click to fullscreen
     * gallery examples.
     */
    setScale(scale: Vec2): void;

    /**
     * Use this method to set a source to your texture. The source must be
     * already loaded in your plane, otherwise use one of the load method of
     * your Plane or ShaderPass classes.
     * @param sourceElement a source to apply to your texture. It must be an
     * element already loaded by your plane.
     * @example used in Slideshow with a displacement shader example.
     */
    setSource(sourceElement: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): void;

    /**
     * Set the texture's wrapS value.
     * @param wrapS texture wrapping to apply along the X axis. Use one of the
     * GLenum possible values, depending on the WebGL context and size of the
     * source (some WebGL1 wrapping need a power of 2 sized source).
     */
    setWrapS(wrapS: GLenum): void;

    /**
     * Set the texture's wrapT value.
     * @param wrapT texture wrapping to apply along the Y axis. Use one of the
     * GLenum possible values, depending on the WebGL context and size of the
     * source (some WebGL1 wrapping need a power of 2 sized source).
     */
    setWrapT(wrapT: GLenum): void;

    /**
     * This function will be called the first time your texture source has been loaded.
     * @param callback function to execute
     * @returns your Texture object, allowing it to be chainable.
     */
    onSourceLoaded(callback: () => void): Texture;

    /**
     * This function will be called the first time your texture source has been uploaded to the GPU.
     * @param callback function to execute
     * @returns your Texture object, allowing it to be chainable.
     * @example used in AJAX navigation with plane removal and GSAP click to fullscreen gallery examples.
     */
    onSourceUploaded(callback: () => void): Texture;

    _restoreContext(): void;
}

// * Frame Buffer Objects

export interface FrameBufferObject {
    _frameBuffer: WebGLFramebuffer;
    _depthBuffer: WebGLRenderbuffer;
    _createFrameBuffer(): void;
}

export interface RenderTargetParams {
    /**
     * Whether to create a depth buffer (handle depth inside your render
     * target).
     * @default false
     */
    depth?: boolean;

    /**
     * Whether the content of the render target should be cleared before being
     * drawn. Should be set to false to handle ping-pong shading.
     * @default true
     */
    clear?: boolean;

    /**
     * Maximum width of the render target.
     */
    maxWidth?: number;

    /**
     * Maximum height of the render target.
     */
    maxHeight?: number;

    /**
     * Minimum width of the render target.
     * @default 1024
     */
    minWidth?: number;

    /**
     * Minimum height of the render target.
     * @default 1024
     */
    minHeight?: number;

    /**
     * Default options to apply to the texture of the render target.
     * @see TextureParams
     */
    texturesOptions?: TextureParams;
}

export class RenderTarget implements FrameBufferObject {
    /**
     * The index of the render target in the renderTargets array.
     */
    index: number;

    /**
     * Our WebGL context.
     */
    gl: WebGL2RenderingContext | WebGLRenderingContext;

    /**
     * The renderer created by our curtains object.
     */
    renderer: Renderer;

    /**
     * An array of length 1 containing the only render target's Texture.
     */
    textures: Texture[];

    /**
     * Class object type: "RenderTarget".
     */
    type: string;

    /**
     * An empty object to store any additional data or custom properties into
     * your render target.
     */
    userData: Record<string, unknown>;

    /**
     * The render target's unique identifier.
     */
    uuid: string;

    /**
     * Creates a render target instance.
     * @param curtains Your Curtains class object.
     * @param params An object containing render target parameters.
     */
    constructor(curtains: Curtains, params?: RenderTargetParams);
    _frameBuffer: WebGLFramebuffer;
    _depthBuffer: WebGLRenderbuffer;
    _createFrameBuffer(): void;

    /***
     * Init our RenderTarget by setting its size, creating a textures array and then calling _createFrameBuffer()
     ***/
    _initRenderTarget(): void;

    /***
     * Restore a render target
     * Basically just re init it
     ***/
    _restoreContext(): void;

    /***
     * Sets our RenderTarget size based on its parent plane size
     ***/
    _setSize(): void;

    /**
     * Returns the render target texture to be used later.
     * @returns the render target texture.
     */
    getTexture(): Texture;

    /**
     * This function will remove the render target from our Curtains object and
     * renderer and delete its texture. It will also update all other render
     * targets indexes.
     */
    remove(): void;

    _bindDepthBuffer(): void;
    _dispose(): void;
}

export interface DOMMeshParams {
    /**
     * your vertex shader as a string. Be careful with the line-breaks as it may
     * throw javascript errors. Will look for vertexShaderID param if not
     * specified.
     */
    vertexShader?: string;

    /**
     * the vertex shader ID. Will use a default vertex shader if nothing
     * specified.
     */
    vertexShaderID?: string;

    /**
     * your fragment shader as a string. Be careful with the line-breaks as it
     * may throw javascript errors. Will look for fragmentShaderID param if not
     * specified.
     */
    fragmentShader?: string;

    /**
     * the fragment shader ID. Will use a default fragment shader that draws the
     * scene without modifications if nothing specified.
     */
    fragmentShaderID?: string;

    /**
     * defines in which order the shader passes are drawn. See renderOrder
     * property.
     * @default 0
     */
    renderOrder?: number;

    /**
     * if your shader pass should enable or disable the depth test.
     * @default true
     */
    depthTest?: boolean;

    /**
     * Default options to apply to the textures of the shader pass.
     * @see TextureParams
     */
    texturesOptions?: TextureParams;

    /**
     * defines the crossOrigin process to load images if any (
     * @default "anonymous"
     */
    crossOrigin?: string;

    /**
     * the uniforms that will be passed to the shaders (if no uniforms specified
     * there won't be any interaction with the shader pass).
     */
    uniforms?: Record<string, Uniform>;
}

export class DOMMesh {
    /**
     * An array containing all the canvases loaded via the load methods into the
     * shader pass.
     */
    canvases: ArrayLike<HTMLCanvasElement>;

    /**
     * The cross origin process used to load the medias.
     */
    crossOrigin: string;

    /**
     * Which face of the shader pass should be culled (ie not drawn).
     * By default, only the back face of the shader pass is culled.
     */
    cullFace: string;

    /**
     * Our WebGL context.
     */
    gl: WebGL2RenderingContext | WebGLRenderingContext;

    /**
     * The HTML element used to create your shader passwhich is your Curtains
     * wrapper container.
     */
    htmlElement: Element;

    /**
     * An array containing all the images loaded via the load methods into the
     * shader pass.
     */
    images: ArrayLike<HTMLImageElement>;

    /**
     * The index of your shader pass in the Curtains shaderPasses array.
     */
    index: number;

    /**
     * The shader pass internal texture loader.
     */
    loader: PlaneTextureLoader;

    /**
     * The Renderer class object created by our curtains object.
     */
    renderer: Renderer;

    /**
     * The shader pass renderOrder value, which determines in which order the
     * shader passes are drawn.
     * A shader pass will be drawn after shader passes with a lower renderOrder
     * number. Use `setRenderOrder()` to change this value.
     * @default 0
     * @see Scene rendering order to know more about how the things are drawn.
     */
    renderOrder: number;

    /**
     * The render target used to render the shader pass.
     */
    target: RenderTarget;

    /**
     * An array containing all the shader pass' Textures already created.
     */
    textures: ArrayLike<Texture>;

    /**
     * Class object type: "ShaderPass".
     */
    type: string;

    /**
     * An object containing all the uniforms you passed as parameters.
     */
    uniforms: Record<string, Uniform>;

    /**
     * An empty object to store any additional data or custom properties into your shader pass.
     */
    userData: Record<string, unknown>;

    /**
     * The shader pass's unique identifier.
     */
    uuid: string;

    /**
     * An array containing all the videos loaded via the load methods into the shader pass.
     */
    videos: ArrayLike<HTMLVideoElement>;

    /**
     * Create an instance of a shaderpass.
     * @param renderer Our curtains object OR our curtains renderer object
     * @param params An object containing the shader pass parameters;
     */
    constructor(renderer: Curtains | Renderer, params: DOMMeshParams);

    /**
     * This function takes an already existing texture and adds it to the
     * shader pass.
     * @param texture The texture to add to this shader pass. Equivalent of the
     * Texture class `addParent()` method.
     */
    addTexture(texture: Texture): void;

    /**
     * This function will create a new Texture and add it to our shader pass.
     * @param params an object containing the texture parameters.
     * @returns The newly created Texture if successful.
     */
    createTexture(params?: {
        /**
         * a string to set the name of your sampler uniform in your shader. Will
         * also impact the texture matrix uniform name. If not specified, will
         * name your sampler "uSampler" + index of this texture in your shader
         * pass.
         */
        sampler?: string;
        /**
         * an already existing texture to copy into your new texture. Similar to
         * the Texture class' setFromTexture() method.
         */
        fromTexture?: Texture;
    }): Texture;

    /**
     * Useful to get our plane HTML element bounding rectangle without causing
     * a reflow/layout repaint. Be careful as the values are relative to your
     * Curtains pixelRatio value.
     * @returns an object containing the plane HTML element width, height, top,
     * right, bottom and left positions in pixels.
     */
    getBoundingRect(): {
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    };

    /**
     * This function takes a canvas HTML element, creates a Texture using it
     * and loads it into your shader pass.
     * @param canvasElement a HTML canvas element to load into your shader pass.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @example used in Text planes using canvas example.
     */
    loadCanvas(
        canvasElement: CanvasSource,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
    ): void;

    /**
     * This function takes an array of canvas HTML elements and creates a
     * Texture for each of them.
     * @param canvasElements an array or collection of HTML canvas elements
     * to load into your shader pass.
     * @param texturesOptions Default options to apply to those textures. See
     * the Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     */
    loadCanvases(
        canvasElements: ArrayLike<CanvasSource>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
    ): void;

    /**
     * This function takes an image HTML element (or image source URL), creates
     * a Texture using it and loads it into your shader pass.
     * @param imageElement a HTML image element or image source URL to load
     * into your shader pass.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @param errorCallback Callback executed on source load error.
     */
    loadImage(
        imageElement: ImageSource,
        textureOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<ImageSource>,
    ): void;

    /**
     * This function takes an array of image HTML elements (or images sources
     * URL) and creates a Texture for each of them.
     * @param imageElements an array or collection of HTML image elements or
     * images sources URL to load into your shader pass.
     * @param texturesOptions Default options to apply to those textures. See
     * the Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     * @param errorCallback Callback executed on each source load error.
     * @example used in Asynchronous textures loading example.
     */
    loadImages(
        imageElements: ArrayLike<ImageSource>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<ImageSource>,
    ): void;

    /**
     * This function takes a source element (or source URL), creates a Texture
     * using it and loads it into your shader pass.
     * @param sourceElement an image, canvas, video HTML element or source URL
     * to load into your shader pass.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @param errorCallback Callback executed on source load error.
     */
    loadSource(
        sourceElement: Source,
        textureOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<Source>,
    ): void;

    /**
     * This function takes an array of source elements (or sources URL),
     * creates Textures using them and loads them into your shader pass.
     * @param sourceElements an array of image, canvas or video HTML elements
     * or sources URL to load into your shader pass.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     * @param errorCallback Callback executed on each source load error.
     */
    loadSources(
        sourceElements: ArrayLike<Source>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<Source>,
    ): void;

    /**
     * This function takes a video HTML element (or video source URL), creates
     * a Texture using it and loads it into your shader pass.
     * @param videoElement a HTML video element or video source URL to load
     * into your shader pass.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @param errorCallback Callback executed on source load error.
     */
    loadVideo(
        videoElement: VideoSource,
        textureOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<VideoSource>,
    ): void;

    /**
     * This function takes an array of video HTML elements (or videos sources
     * URL) and creates a Texture for each of them.
     * @param videoElements an array or collection of HTML video elements or
     * videos sources URL to load into your shader pass.
     * @param texturesOptions Default options to apply to those textures. See
     * the Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     * @param errorCallback Callback executed on each source load error.
     */
    loadVideos(
        videoElements: ArrayLike<VideoSource>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<VideoSource>,
    ): void;

    /**
     * Get the mouse coordinates relative to the plane clip space values. Use it
     *  to send to a uniform and interact with your shader pass. A plane
     * coordinates ranges from (-1, 1) in the top left corner to (1, -1) in the
     * bottom right corner, which means the values along the Y axis are
     * inverted.
     * @param mousePosition mouse position along X and Y axis (you should use
     * the event clientX and clientY values).
     * @returns a Vec2 class object containing the mouse coordinates relative
     * to the plane clip space values.
     */
    mouseToPlaneCoords(mousePosition: Vec2): Vec2;

    /**
     * This function will automatically start all of your shader pass videos
     * playback.
     * If you are not calling it after a user action it might not work on mobile.
     */
    playVideos(): void;

    /**
     * This function will remove the plane from our Curtains object and renderer
     *  and delete all of its textures. It will also update all other planes
     * indexes.
     */
    remove(): void;

    /**
     * Sets the plane new render order.
     * A plane will be rendered on top of planes with a lower renderOrder
     * number. Negative numbers are accepted. You can ommit the renderOrder
     * parameter to reset a plane renderOrder value.
     * @param renderOrder the new render order to use. Default to 0.
     */
    setRenderOrder(renderOrder: number): void;

    /**
     * This function will be called just after your shader pass has been drawn.
     * @param callback function to execute.
     * @returns your ShaderPass object, allowing it to be chainable.
     */
    onAfterRender(callback: () => void): ShaderPass;

    /**
     * This function will be called each time your shader pass has been resized,
     * after everything has been updated.
     * @param callback function to execute.
     * @returns your ShaderPass object, allowing it to be chainable.
     */
    onAfterResize(callback: () => void): ShaderPass;

    /**
     * This function is called if there's an error while instancing your shader
     * pass, usually because the shaders compilation failed.
     * @param callback function to execute.
     * @returns your ShaderPass object, allowing it to be chainable.
     */
    onError(callback: () => void): ShaderPass;

    /**
     * This function will be fired each time a source element (either an image,
     * a canvas or a video) of the plane has been loaded and is ready to
     * display. You'll have access here to the newly created texture. Useful to
     * handle a loader or manipulate the texture.
     * @param callback function to execute, with the newly created texture
     * passed as parameter.
     * @returns your ShaderPass object, allowing it to be chainable.
     * @example used in Post processing displacement effect example.
     */
    onLoading(callback: (texture: Texture) => void): ShaderPass;

    /**
     * This function will be called once our plane is all set up and ready to
     * be drawn.
     * If `autoloadSources` is set to `true`, il will be called after the
     * images, canvas and videos are loaded. Otherwise it will be called almost
     * right away.
     * This is where you may want to add event listener to interact with your
     * plane or update its uniforms.
     * @param callback function to execute.
     * @returns your ShaderPass object, allowing it to be chainable.
     * @example used in Post processing displacement effect example.
     */
    onReady(callback: () => void): ShaderPass;

    /**
     * This function will be triggered for each plane at each
     * requestAnimationFrame call. Useful to update a time uniform, change plane
     * rotation, scale, etc.
     * @param callback function to execute.
     * @returns your ShaderPass object, allowing it to be chainable.
     * @example used in Post processing displacement effect and
     * Post processing multiple passes examples.
     */
    onRender(callback: () => void): ShaderPass;
}

export interface ShaderPassParams extends DOMMeshParams {
    /**
     * whether the shader pass render target should use a depth buffer
     * @see RenderTarget
     * @default false
     */
    depth?: boolean;

    /**
     * whether the shader pass render target content should be cleared before
     * being drawn
     * @see RenderTarget
     * @default true
     */
    clear?: boolean;

    /**
     * an already existing render target to use.
     * @default null
     */
    renderTarget?: RenderTarget;
}

export class ShaderPass extends DOMMesh implements FrameBufferObject {
    _frameBuffer: WebGLFramebuffer;
    _depthBuffer: WebGLRenderbuffer;

    /**
     * Create an instance of a shaderpass.
     * @param renderer Our curtains object OR our curtains renderer object
     * @param params An object containing the shader pass parameters;
     */
    constructor(renderer: Curtains | Renderer, params: ShaderPassParams);

    /***
     * Used internally to handle context restoration after the program has been
     * successfully compiled again
     ***/
    _programRestored(): void;

    /***
     * Here we init additionnal shader pass planes properties
     * This mainly consists in creating our render texture and add a frame
     * buffer object
     ***/
    _initShaderPass(): void;

    /***
     * Here we create our frame buffer object
     * We're also adding a render buffer object to handle depth inside our
     * shader pass
     ***/
    _createFrameBuffer(): void;

    /***
     * Specific instructions for the Shader pass class to execute before drawing it
     ***/
    _startDrawing(): void;
}

// * Loaders

export class TextureLoader {
    /**
     * The cross origin process used to load the medias.
     */
    crossOrigin: string;

    /**
     * An array containing all the loading and loaded elements. An element is an
     * object containing a texture, its source and the event listeners used to
     * load that source.
     */
    elements: ArrayLike<Texture>;

    /**
     * Our WebGL context.
     */
    gl: WebGL2RenderingContext | WebGLRenderingContext;

    /**
     * The renderer created by our curtains object.
     */
    renderer: Renderer;

    /**
     * Class object type: "TextureLoader".
     */
    type: string;

    /**
     * Creates a Texture Loader instance
     * @param curtains Your curtains class object
     * @param crossOrigin defines the crossOrigin process to load images if any
     * (default to "anonymous")
     */
    constructor(curtains: Curtains, crossOrigin?: string);

    /**
     * This function takes a canvas HTML element, creates a Texture using it.
     * @param canvasElement a HTML canvas element to load.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @example used in Text planes using canvas example.
     */
    loadCanvas(
        canvasElement: CanvasSource,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
    ): void;

    /**
     * This function takes an array of canvas HTML elements and creates a
     * Texture for each of them.
     * @param canvasElements an array or collection of HTML canvas elements
     * to load.
     * @param texturesOptions Default options to apply to those textures. See
     * the Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     */
    loadCanvases(
        canvasElements: ArrayLike<CanvasSource>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
    ): void;

    /**
     * This function takes an image HTML element (or image source URL), creates
     * a Texture using it.
     * @param imageElement a HTML image element or image source URL to load
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @param errorCallback Callback executed on source load error.
     */
    loadImage(
        imageElement: ImageSource,
        textureOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<ImageSource>,
    ): void;

    /**
     * This function takes an array of image HTML elements (or images sources
     * URL) and creates a Texture for each of them.
     * @param imageElements an array or collection of HTML image elements or
     * images sources URL to load.
     * @param texturesOptions Default options to apply to those textures. See
     * the Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     * @param errorCallback Callback executed on each source load error.
     * @example used in Asynchronous textures loading example.
     */
    loadImages(
        imageElements: ArrayLike<ImageSource>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<ImageSource>,
    ): void;

    /**
     * This function takes a source element (or source URL), creates a Texture
     * using it.
     * @param sourceElement an image, canvas, video HTML element or source URL
     * to load.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @param errorCallback Callback executed on source load error.
     */
    loadSource(
        sourceElement: Source,
        textureOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<Source>,
    ): void;

    /**
     * This function takes an array of source elements (or sources URL),
     * creates Textures using them.
     * @param sourceElements an array of image, canvas or video HTML elements
     * or sources URL to load.
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     * @param errorCallback Callback executed on each source load error.
     */
    loadSources(
        sourceElements: ArrayLike<Source>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<Source>,
    ): void;

    /**
     * This function takes a video HTML element (or video source URL), creates
     * a Texture using it.
     * @param videoElement a HTML video element or video source URL to load
     * @param textureOptions Default options to apply to that texture. See the
     * Texture class parameters.
     * @param successCallback Callback executed on successful source load.
     * @param errorCallback Callback executed on source load error.
     */
    loadVideo(
        videoElement: VideoSource,
        textureOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<VideoSource>,
    ): void;

    /**
     * This function takes an array of video HTML elements (or videos sources
     * URL) and creates a Texture for each of them.
     * @param videoElements an array or collection of HTML video elements or
     * videos sources URL to load.
     * @param texturesOptions Default options to apply to those textures. See
     * the Texture class parameters.
     * @param successCallback Callback executed on each successful source load.
     * @param errorCallback Callback executed on each source load error.
     */
    loadVideos(
        videoElements: ArrayLike<VideoSource>,
        texturesOptions?: TextureParams,
        successCallback?: LoadSuccessCallback,
        errorCallback?: LoadErrorCallback<VideoSource>,
    ): void;
}

export class PlaneTextureLoader extends TextureLoader {
    /** number of sources loaded */
    sourcesLoaded: number;

    /** number of initial sources to load */
    sourcesToLoad: number;

    /** Whether the loader has loaded all the initial sources */
    complete: boolean;

    /** Callback to execute when all the initial sources have been loaded */
    onComplete: () => void;
}
// * Math

export class Vec2 {
    /** Value along X axis */
    x: number;
    /** Value along Y axis */
    y: number;

    /**
     * Creates an instance of Vec2.
     * @param x Value along X axis. Defaults to 0.
     * @param y Value along Y axis. Defaults to 0.
     */
    constructor(x?: number, y?: number);

    /**
     * Adds a vector to this vector.
     * @param vector vector to add
     * @returns this vector after addition.
     */
    add(vector: Vec2): Vec2;

    /**
     * Adds a scalar to this vector.
     * @param scalar number to add
     * @returns this vector after addition.
     */
    addScalar(scalar: number): Vec2;

    /**
     * Clone this vector.
     * @returns new cloned vector.
     */
    clone(): Vec2;

    /**
     * Copy a vector into this vector.
     * @param vector vector to copy
     * @returns this vector after copy.
     */
    copy(vector: Vec2): Vec2;

    /**
     * Calculates the dot product of 2 vectors.
     * @param vector vector to use for dot product
     * @returns a float representing the dot product of the 2 vectors.
     */
    dot(vector: Vec2): Vec2;

    /**
     * Checks if 2 vectors are equal.
     * @param vector vector to compare
     * @returns true if the 2 vectors are equals, false otherwise.
     */
    equals(vector: Vec2): Vec2;

    /**
     * Apply max values to this vector.
     * @param vector vector representing max values
     * @returns vector with max values applied.
     */
    max(vector: Vec2): Vec2;

    /**
     * Apply min values to this vector.
     * @param vector vector representing min values
     * @returns vector with min values applied.
     */
    min(vector: Vec2): Vec2;

    /**
     * Multiplies a vector with this vector.
     * @param vector vector to use for multiplication
     * @returns this vector after multiplication.
     */
    multiply(vector: Vec2): Vec2;

    /**
     * Multiplies a scalar with this vector.
     * @param scalar number to use for multiplication
     * @returns this vector after multiplication.
     */
    multiplyScalar(scalar: number): Vec2;

    /**
     * Normalize this vector.
     * @returns normalized vector.
     */
    normalize(): Vec2;

    /**
     * Merges this vector with a vector when values are NaN. Mostly used
     * internally to avoid errors.
     * @param vector vector to use for sanitization (i.e. set this vector
     * value if original vector value is NaN).
     * @returns sanitized vector.
     */
    sanitizeNaNValuesWith(vector: Vec2): Vec2;

    /**
     * Sets the vector from values.
     * @param x X component of our vector.
     * @param y Y component of our vector.
     * @returns this vector after being set.
     */
    set(x: number, y: number): Vec2;

    /**
     * Subtracts a vector from this vector.
     * @param vector vector to use for subtraction.
     * @returns this vector after subtraction.
     */
    sub(vector: Vec2): Vec2;

    /**
     * Subtracts a scalar to this vector.
     * @param scalar number to use for subtraction.
     * @returns this vector after subtraction.
     */
    subScalar(scalar: number): Vec2;

    /**
     * Execute a function each time the x or y component of the vector changed.
     * @param callback function to execute
     * @returns your Vec2 object, allowing it to be chainable
     */
    onChange(callback: () => void): Vec2;
}

export class Vec3 {
    /** Value along X axis */
    x: number;
    /** Value along Y axis */
    y: number;
    /** Value along Z axis */
    z: number;

    /**
     * Creates an instance of Vec3.
     * @param x Value along X axis. Defaults to 0.
     * @param y Value along Y axis. Defaults to 0.
     * @param z Value along Z axis. Defaults to 0.
     */
    constructor(x?: number, y?: number, z?: number);

    /**
     * Adds a vector to this vector.
     * @param vector vector to add
     * @returns this vector after addition.
     */
    add(vector: Vec3): Vec3;

    /**
     * Adds a scalar to this vector.
     * @param scalar number to add
     * @returns this vector after addition.
     */
    addScalar(scalar: number): Vec3;

    /**
     * Apply a 4 dimensions Mat4 matrix to this vector.
     * @param matrix matrix to apply
     * @returns this vector after matrix application.
     */
    applyMat4(matrix: Mat4): Vec3;

    /**
     * Apply a quaternion (rotation in 3D space) to this vector.
     * @param quaternion quaternion to apply
     * @returns this vector after quaternion application.
     */
    applyQuat(quaternion: Quat): Vec3;

    /**
     * Clone this vector.
     * @returns new cloned vector.
     */
    clone(): Vec3;

    /**
     * Copy a vector into this vector.
     * @returns this vector after copy.
     * @param vector vector to copy
     */
    copy(vector: Vec3): Vec3;

    /**
     * Calculates the dot product of 2 vectors.
     * @param vector vector to use for dot product
     * @returns a float representing the dot product of the 2 vectors.
     */
    dot(vector: Vec3): Vec3;

    /**
     * Checks if 2 vectors are equal.
     * @param vector vector to compare
     * @returns true if the 2 vectors are equals, false otherwise.
     */
    equals(vector: Vec3): Vec3;

    /**
     * Apply max values to this vector.
     * @param vector vector representing max values
     * @returns vector with max values applied.
     */
    max(vector: Vec3): Vec3;

    /**
     * Apply min values to this vector.
     * @param vector vector representing min values
     * @returns vector with min values applied.
     */
    min(vector: Vec3): Vec3;

    /**
     * Multiplies a vector with this vector.
     * @param vector vector to use for multiplication
     * @returns this vector after multiplication.
     */
    multiply(vector: Vec3): Vec3;

    /**
     * Multiplies a scalar with this vector.
     * @param scalar number to use for multiplication
     * @returns this vector after multiplication.
     */
    multiplyScalar(scalar: number): Vec3;

    /**
     * Normalize this vector.
     * @returns normalized vector.
     */
    normalize(): Vec3;

    /**
     * Project 3D coordinate to 2D point.
     * @param camera camera to use to project this vector from 3D to 2D space.
     * @returns this vector after having been projected.
     */
    project(camera: Camera): Vec3;

    /**
     * Merges this vector with a vector when values are NaN. Mostly used
     * internally to avoid errors.
     * @param vector vector to use for sanitization (i.e. set this vector value
     * if original vector value is NaN).
     * @returns sanitized vector.
     */
    sanitizeNaNValuesWith(vector: Vec3): Vec3;

    /**
     * Sets the vector from values.
     * @param x X component of our vector.
     * @param y Y component of our vector.
     * @param z Z component of our vector.
     * @returns this vector after being set.
     */
    set(x: number, y: number, z: number): Vec3;

    /**
     * Subtracts a vector from this vector.
     * @param vector vector to use for subtraction.
     * @returns this vector after subtraction.
     */
    sub(vector: Vec3): Vec3;

    /**
     * Subtracts a scalar to this vector.
     * @param scalar number to use for subtraction.
     * @returns this vector after subtraction.
     */
    subScalar(scalar: number): Vec3;

    /**
     * Unproject 2D point to 3D coordinate.
     * @param camera camera to use to unproject this vector from 2D to 3D
     * space.
     * @returns this vector after having been unprojected.
     */
    unproject(camera: Camera): Vec3;

    /**
     * Execute a function each time the x, y or z component of the vector
     * changed.
     * @param callback function to execute.
     * @returns your Vec3 object, allowing it to be chainable.
     */
    onChange(callback: () => void): Vec3;
}

export type AxisOrder = "XYZ" | "YXZ" | "ZXY" | "ZYX" | "YZX" | "XZY";

export class Mat4 {
    /** A Float32Array of length 16 representing that matrix. */
    elements: Float32Array;

    /**
     * Creates an instance of Mat4.
     * @param elements array of length 16, optional
     */
    constructor(elements?: ArrayLike<number>);

    /**
     * Clone this matrix.
     * @returns new cloned matrix.
     */
    clone(): Mat4;

    /**
     * Creates a matrix from a quaternion rotation, vector translation and
     * vector scale, rotating and scaling around the given origin.
     * Equivalent for applying translation, rotation and scale matrices but
     * much faster.
     * @param translation translation vector
     * @param quaternion rotation quaternion
     * @param scale scale vector
     * @param origin origin vector around which to scale and rotate
     * @returns this matrix after transformations.
     */
    composeFromOrigin(translation: Vec3, quaternion: Quat, scale: Vec3, origin: Vec3): Mat4;

    /**
     * Copy a matrix into this matrix.
     * @param matrix matrix to copy
     * @returns this matrix after copy.
     */
    copy(matrix: Mat4): Mat4;

    /**
     * Creates a new matrix inverse from this matrix.
     * @returns a new matrix inverse of this matrix.
     */
    getInverse(): Mat4;

    /**
     * Multiply this matrix by the matrix passed as parameter.
     * @param matrix matrix to multiply with.
     * @returns this matrix after multiplication.
     */
    multiply(matrix: Mat4): Mat4;

    /**
     * Scale this matrix by the vector passed as parameter.
     * @param vector vector to use for scaling
     * @returns this matrix after scaling.
     */
    scale(vector: Vec3): Mat4;

    /**
     * Sets the matrix values from an array.
     * @param array an array of at least 16 elements
     * @returns this matrix after being set.
     */
    setFromArray(array: ArrayLike<number>): Mat4;
}

export class Quat {
    /** A Float32Array of floats of length 4 representing that quaternion. */
    elements: Float32Array;

    /** Axis order to use for the 3D rotation calculations. */
    axisOrder: string;

    /**
     * Creates an instance of Quat.
     * @param elements Array of floats of length 4. values to use for that
     * quaternion. Default to [0, 0, 0, 1].
     * @param axisOrder axis order to use for the rotation calculations.
     * Default to "XYZ".
     */
    constructor(elements?: ArrayLike<number>, axisOrder?: AxisOrder);

    /**
     * Clone this quaternion.
     * @returns new cloned quaternion.
     */
    clone(): Quat;

    /**
     * Copy a quaternion into this quaternion.
     * @param quater quaternion to copy
     * @returns this quaternion after copy.
     */
    copy(quaternion: Quat): Quat;

    /**
     * Checks if 2 quaternions are equal (i.e. have the same values and axis
     * orders).
     * @param quater quaternion to compare
     * @returns true if the 2 quaternions are equals, false otherwise.
     */
    equals(quaternion: Quat): Quat;

    /**
     * Sets the quaternion values from an array.
     * @param axisOrder a string representing the axis order to use.
     * Could be "XYZ", "YXZ", "ZXY", "ZYX", "YZX" or "XZY".
     * @returns this quaternion after axis order has been set.
     */
    setAxisOrder(axisOrder: AxisOrder): Quat;

    /**
     * Sets the quaternion values from an array.
     * @param array an array of at least 4 floats
     * @returns this quaternion after being set.
     */
    setFromArray(array: ArrayLike<number>): Quat;

    /**
     * Sets a rotation quaternion using Euler angles as a Vec3 and its axis
     * order.
     * @param vector rotation vector to set our quaternion from
     * @returns this quaternion after having applied the rotation.
     */
    setFromVec3(vector: Vec3): Quat;
}

// * Extras

export interface PingPongPlaneParams extends PlaneParams {
    /**
     * the texture sampler name you'll use in your fragment shader to create
     * your effect.
     * @default "uPingPongTexture"
     */
    sampler?: string;
}

export class PingPongPlane extends Plane {
    /**
     * Create a new PingPongPlane instance.
     * @param curtains Your curtains class object
     * @param domElement a HTML element
     * @param params an object containing the PingPongPlane parameters
     */
    constructor(curtains: Curtains, domElement: Element, params?: PingPongPlaneParams);

    /**
     * Render target read pass that will be swapped with the write pass at each
     * draw call. Its depth and clear properties are set to false.
     */
    readPass: RenderTarget;

    /**
     * Render target write pass that will be swapped with the read pass at each
     * draw call. Its depth and clear properties are set to false.
     */
    writePass: RenderTarget;

    /**
     * Returns the ping pong plane texture to be used later.
     * @returns the ping pong plane texture
     */
    getTexture(): Texture;
}

export class FXAAPass extends ShaderPass {}
