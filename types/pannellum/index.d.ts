declare namespace Pannellum {
    interface ConfigOptions
        extends GeneralOptions, EquirectangularOptions, CubemapOptions, MultiresOptions, DynamicOptions
    {}

    interface GeneralOptions {
        /**
         * This specifies the panorama type. Can be `equirectangular`, `cubemap`, or `multires`. Defaults to `equirectangular`.
         */
        type?: "equirectangular" | "cubemap" | "multires";

        /**
         * If set, the value is displayed as the panorama’s title. If no title is desired, don’t set this parameter.
         */
        title?: string;

        /**
         * If set, the value is displayed as the panorama’s author. If no author is desired, don’t set this parameter.
         */
        author?: string;

        /**
         * If set, the displayed author text is hyperlinked to this URL. If no author URL is desired, don’t set this parameter. The `author` parameter must also be set for this parameter to have an effect.
         */
        authorURL?: string;

        /**
         * Allows user-facing strings to be changed / translated. See `defaultConfig.strings` definition in `pannellum.js` for more details.
         */
        strings?: Partial<
            Record<
                // Labels
                | "loadButtonLabel"
                | "loadingLabel"
                | "bylineLabel"
                // Errors
                | "noPanoramaError"
                | "fileAccessError"
                | "malformedURLError"
                | "iOS8WebGLError"
                | "genericWebGLError"
                | "textureSizeError"
                | "unknownError"
                | "twoTouchActivate"
                | "twoTouchXActivate"
                | "twoTouchYActivate"
                | "ctrlZoomActivate",
                string
            >
        >;

        /**
         * This specifies a base path to load the images from.
         */
        basePath?: string;

        /**
         * When set to `true`, the panorama will automatically load. When `false`, the user needs to click on the load button to load the panorama. Defaults to `false`.
         */
        autoLoad?: boolean;

        /**
         * Setting this parameter causes the panorama to automatically rotate when loaded. The value specifies the rotation speed in degrees per second. Positive is counter-clockwise, and negative is clockwise.
         */
        autoRotate?: number;

        /**
         * Sets the delay, in milliseconds, to start automatically rotating the panorama after user activity ceases. This parameter only has an effect if the `autoRotate` parameter is set. Before starting rotation, the viewer is panned to the initial pitch.
         */
        autoRotateInactivityDelay?: number;

        /**
         * Sets the delay, in milliseconds, to stop automatically rotating the panorama after it is loaded. This parameter only has an effect if the `autoRotate` parameter is set.
         */
        autoRotateStopDelay?: number;

        /**
         * If set, the value is used as a URL for a fallback viewer in case Pannellum is not supported by the user’s device. The user will be given the option to click a link and visit this URL if Pannellum fails to work.
         */
        fallback?: string;

        /**
         * If set to `true`, device orientation control will be used when the panorama is loaded, if the device supports it. If false, device orientation control needs to be activated by pressing a button. Defaults to `false`.
         */
        orientationOnByDefault?: boolean;

        /**
         * If set to `false`, the zoom controls will not be displayed. Defaults to `true`.
         */
        showZoomCtrl?: boolean;

        /**
         * If set to `false`, zooming with keyboard will be disabled. Defaults to `true`.
         */
        keyboardZoom?: boolean;

        /**
         * If set to `false`, zooming with mouse wheel will be disabled. Defaults to `true`. Can also be set to `fullscreenonly`, in which case it is only enabled when the viewer is fullscreen.
         */
        mouseZoom?: boolean | string;

        /**
         * If set to `false`, mouse and touch dragging is disabled. Defaults to `true`.
         */
        draggable?: boolean;

        /**
         * Controls the “friction” that slows down the viewer motion after it is dragged and released. Higher values mean the motion stops faster. Should be set (0.0, 1.0]; defaults to 0.15.
         */
        friction?: number;

        /**
         * If set to `true`, keyboard controls are disabled. Defaults to `false`.
         */
        disableKeyboardCtrl?: boolean;

        /**
         * If set to `false`, the fullscreen control will not be displayed. Defaults to `true`. The fullscreen button will only be displayed if the browser supports the fullscreen API.
         */
        showFullscreenCtrl?: boolean;

        /**
         * If set to `false`, no controls are displayed. Defaults to `true`.
         */
        showControls?: boolean;

        /**
         * Adjusts panning speed from touch inputs. Defaults to `1`.
         */
        touchPanSpeedCoeffFactor?: number;

        /**
         * Sets the panorama’s starting yaw position in degrees. Defaults to `0`.
         */
        yaw?: number;

        /**
         * Sets the panorama’s starting pitch position in degrees. Defaults to `0`.
         */
        pitch?: number;

        /**
         * Sets the panorama’s starting horizontal field of view in degrees. Defaults to `100`.
         */
        hfov?: number;

        /**
         * Sets the minimum yaw the viewer edge can be at, in degrees. Defaults to `-180`.
         */
        minYaw?: number;

        /**
         * Sets the maximum yaw the viewer edge can be at, in degrees. Defaults to `180`.
         */
        maxYaw?: number;

        /**
         * Sets the minimum pitch the viewer edge can be at, in degrees. Defaults to `-90`.
         */
        minPitch?: number;

        /**
         * Sets the maximum pitch the viewer edge can be at, in degrees. Defaults to `90`.
         */
        maxPitch?: number;

        /**
         * Sets the minimum horizontal field of view, in degrees, that the viewer can be set to. Defaults to `50`. Unless the `multiResMinHfov` parameter is set to `true`, the `minHfov` parameter is ignored for `multires` panoramas.
         */
        minHfov?: number;

        /**
         * Sets the maximum horizontal field of view, in degrees, that the viewer can be set to. Defaults to `120`.
         */
        maxHfov?: number;

        /**
         * When set to `false`, the `minHfov` parameter is ignored for `multires` panoramas; an automatically calculated minimum horizontal field of view is used instead. Defaults to `false`.
         */
        multiResMinHfov?: boolean;

        /**
         * If `true`, a compass is displayed. Normally defaults to `false`; defaults to `true` if heading information is present in Photo Sphere XMP metadata.
         */
        compass?: boolean;

        /**
         * Set the offset, in degrees, of the center of the panorama from North. As this affects the compass, it only has an effect if `compass` is set to `true`.
         */
        northOffset?: number;

        /**
         * Specifies a URL for a preview image to display before the panorama is loaded.
         */
        preview?: string;

        /**
         * Specifies the title to be displayed while the load button is displayed.
         */
        previewTitle?: string;

        /**
         * Specifies the author to be displayed while the load button is displayed.
         */
        previewAuthor?: string;

        /**
         * Specifies pitch of image horizon, in degrees (for correcting non-leveled panoramas).
         */
        horizonPitch?: number;

        /**
         * Specifies roll of image horizon, in degrees (for correcting non-leveled panoramas).
         */
        horizonRoll?: number;

        /**
         * This specifies a timing function to be used for animating movements such as when the `lookAt` method is called. The default timing function is `easeInOutQuad`. If a custom function is specified, it should take a number [0, 1] as its only argument and return a number [0, 1].
         * Note: This option is only available when using the API.
         * @param t Normalized time in animation
         */
        animationTimingFunction?(t: number): number;

        /**
         * When true, HTML is escaped from configuration strings to help mitigate possible DOM XSS attacks. This is always `true` when using the standalone viewer since the configuration is provided via the URL; it defaults to `false` but can be set to `true` when using the API.
         */
        escapeHTML?: boolean;

        /**
         * This specifies the type of CORS request used and can be set to either `anonymous` or `use-credentials`. Defaults to `anonymous`.
         */
        crossOrigin?: "anonymous" | "use-credentials";

        /**
         * This specifies a dictionary of hot spots that can be links to other scenes, information, or external links. Each array element has the following properties.
         */
        hotSpots?: HotspotOptions[];

        /**
         * When `true`, the mouse pointer’s pitch and yaw are logged to the console when the mouse button is clicked. Defaults to `false`.
         */
        hotSpotDebug?: boolean;

        /**
         * Specifies the fade duration, in milliseconds, when transitioning between scenes. Not defined by default. Only applicable for tours. Only works with WebGL renderer.
         */
        sceneFadeDuration?: number;

        /**
         * Specifies the key numbers that are captured in key events. Defaults to the standard keys that are used by the viewer.
         */
        capturedKeyNumbers?: number[];

        /**
         * Specifies an array containing RGB values [0, 1] that sets the background color for areas where no image data is available. Defaults to `[0, 0, 0]` (black). For partial `equirectangular` panoramas this applies to areas past the edges of the defined rectangle. For `multires` and `cubemap` (including fallback) panoramas this applies to areas corresponding to missing tiles or faces.
         */
        backgroundColor?: [number, number, number];

        /**
         * If set to `true`, prevent displaying out-of-range areas of a partial panorama by constraining the yaw and the field-of-view. Even at the corners and edges of the canvas only areas actually belonging to the image (i.e., within [`minYaw`, `maxYaw`] and [`minPitch`, `maxPitch`]) are shown, thus setting the `backgroundColor` option is not needed if this option is set. Defaults to `false`.
         */
        avoidShowingBackground?: boolean;
    }

    interface EquirectangularOptions {
        /**
         * Sets the URL to the equirectangular panorama image. This is relative to `basePath` if it is set, else it is relative to the location of `pannellum.htm`. An absolute URL can also be used.
         */
        panorama?: string;

        /**
         * Sets the panorama’s horizontal angle of view, in degrees. Defaults to `360`. This is used if the equirectangular image does not cover a full 360 degrees in the horizontal.
         */
        haov?: number;

        /**
         * Sets the panorama’s vertical angle of view, in degrees. Defaults to `180`. This is used if the equirectangular image does not cover a full 180 degrees in the vertical.
         */
        vaov?: number;

        /**
         * Sets the vertical offset of the center of the equirectangular image from the horizon, in degrees. Defaults to `0`. This is used if `vaov` is less than `180` and the equirectangular image is not cropped symmetrically.
         */
        vOffset?: number;

        /**
         * If set to `true`, any embedded Photo Sphere XMP data will be ignored; else, said data will override any existing settings. Defaults to `false`.
         */
        ignoreGPanoXMP?: boolean;
    }

    interface CubemapOptions {
        /**
         * This is an array of URLs for the six cube faces in the order [front, right, back, left, up, down]. These are relative to `basePath` if it is set, else they are relative to the location of `pannellum.htm`. Absolute URLs can also be used. Partial cubemap images may be specified by giving `null` instead of a URL.
         */
        cubeMap?: [front: string, right: string, back: string, left: string, up: string, down: string];
    }

    interface MultiresOptions {
        /**
         * This contains information about the multiresolution panorama in sub-keys.
         */
        multiRes?: {
            /**
             * This is the base path of the URLs for the multiresolution tiles. It is relative to the regular `basePath` option if it is defined, else it is relative to the location of `pannellum.htm`. An absolute URL can also be used.
             */
            basePath?: string;

            /**
             * This is a format string for the location of the multiresolution tiles, relative to `multiRes.basePath`, which is relative to `basePath`. Format parameters are `%l` for the zoom level, `%s` for the cube face, `%x` for the x index, and `%y` for the y index. For each tile, `.extension` is appended.
             */
            path?: string;

            /**
             * This is a format string for the location of the fallback tiles for the CSS 3D transform-based renderer if the WebGL renderer is not supported, relative to `multiRes.basePath`, which is relative to `basePath`. The only format parameter is `%s`, for the cube face. For each face, `.extension` is appended.
             */
            fallbackPath?: string;

            /**
             * Specifies the tiles’ file extension. Do not include the `.`.
             */
            extension?: string;

            /**
             * This specifies the size in pixels of each image tile.
             */
            tileResolution?: number;

            /**
             * This specifies the maximum zoom level.
             */
            maxLevel?: number;

            /**
             * This specifies the size in pixels of the full resolution cube faces the image tiles were created from.
             */
            cubeResolution?: number;
        };
    }

    // NOTE: Currently, only equirectangular dynamic content is supported.
    interface DynamicOptions {
        /**
         * The panorama source is considered dynamic when this is set to `true`. Defaults to `false`. This should be set to `true` for video.
         */
        dynamic?: boolean;

        /**
         * For dynamic content, viewer will start automatically updating when set to `true`. Defaults to `false`. If the updates are controlled via the `setUpdate` method, as with the Video.js plugin, this should be set to `false`.
         */
        dynamicUpdate?: boolean;
    }

    interface HotspotOptions {
        /**
         * Specifies the pitch portion of the hot spot’s location, in degrees.
         */
        pitch?: number;

        /**
         * Specifies the yaw portion of the hot spot’s location, in degrees.
         */
        yaw?: number;

        /**
         * Specifies the type of the hot spot. Can be `scene` for scene links or `info` for information hot spots. A tour configuration file is required for `scene` hot spots.
         */
        type?: "scene" | "info";

        /**
         * This specifies the text that is displayed when the user hovers over the hot spot.
         */
        text?: string;

        /**
         * If specified for an `info` hot spot, the hot spot links to the specified URL. Not applicable for `scene` hot spots.
         */
        URL?: string;

        /**
         * Specifies URL’s link attributes. If not set, the `target` attribute is set to `_blank`, to open link in new tab to avoid opening in viewer frame / page.
         */
        attributes?: Record<string, string>;

        /**
         * Specifies the ID of the scene to link to for `scene` hot spots. Not applicable for `info` hot spots.
         */
        sceneId?: string;

        /**
         * Specifies the pitch of the target scene, in degrees. Can also be set to `same`, which uses the current pitch of the current scene as the initial pitch of the target scene.
         */
        targetPitch?: number;

        /**
         * Specifies the yaw of the target scene, in degrees. Can also be set to `same` or `sameAzimuth`. These settings use the current yaw of the current scene as the initial yaw of the target scene; `same` uses the current yaw directly, while `sameAzimuth` takes into account the `northOffset` values of both scenes to maintain the same direction with regard to north.
         */
        targetYaw?: number;

        /**
         * Specifies the HFOV of the target scene, in degrees. Can also be set to `same`, which uses the current HFOV of the current scene as the initial HFOV of the target scene.
         */
        targetHfov?: number;

        /**
         * Specifies hot spot ID, for use with API’s `removeHotSpot` function.
         */
        id?: string;

        /**
         * If specified, string is used as the CSS class for the hot spot instead of the default CSS classes.
         */
        cssClass?: string;

        /**
         * If `createTooltipFunc` is specified, this function is used to create the hot spot tooltip DOM instead of the default function. The contents of `createTooltipArgs` are passed to the function as arguments.
         */
        createTooltipFunc?(div: HTMLDivElement, args: unknown): void;

        /**
         * Arguments passed to `createTooltipFunc`.
         */
        createTooltipArgs?: unknown;

        /**
         * If `clickHandlerFunc` is specified, this function is added as an event handler for the hot spot’s `click` event. The event object and the contents of `clickHandlerArgs` are passed to the function as arguments.
         */
        clickHandlerFunc?(event: MouseEvent | PointerEvent | TouchEvent, args: unknown): void;

        /**
         * Arguments passed to `clickHandlerFunc`.
         */
        clickHandlerArgs?: unknown;

        /**
         * When `true`, the hot spot is scaled to match changes in the field of view, relative to the initial field of view. Note that this does not account for changes in local image scale that occur due to distortions within the viewport. Defaults to `false`.
         */
        scale?: boolean;
    }

    class Renderer {
        /**
         * Create a new panorama renderer.
         * @param container The container element for the renderer.
         */
        constructor(container: HTMLElement);

        /**
         * Initialize renderer.
         * @param _image Input image. Format varies based on `imageType`.
         *     - For `equirectangular`, this is an image.
         *     - For `cubemap`, this is an array of images for the cube faces in the order [front, right, back, left, up, down].
         *     - For `multires`, this is a configuration object.
         * @param _imageType The type of the image: equirectangular, cubemap, or multires.
         * @param _dynamic Whether or not the image is dynamic (e.g. video).
         * @param haov Initial horizontal angle of view.
         * @param vaov Initial vertical angle of view.
         * @param voffset Initial vertical offset angle.
         * @param callback Load callback function.
         * @param params Other configuration parameters (horizonPitch, horizonRoll, backgroundColor).
         */
        init(
            _image: typeof Image | Array<typeof Image> | MultiresOptions["multiRes"],
            _imageType: ConfigOptions["type"],
            _dynamic: boolean,
            haov: number,
            vaov: number,
            voffset: number,
            callback: () => void,
            params: {
                horizonPitch?: number;
                horizonRoll?: number;
                backgroundColor?: [number, number, number];
            },
        ): void;

        /**
         * Destroy renderer.
         */
        destroy(): void;

        /**
         * Resize renderer (call after resizing container).
         */
        resize(): void;

        /**
         * Set renderer horizon pitch and roll.
         * @param horizonPitch
         * @param horizonRoll
         */
        setPose(horizonPitch: number, horizonRoll: number): void;

        /**
         * Render new view of panorama.
         * @param pitch Pitch to render at (in radians).
         * @param yaw Yaw to render at (in radians).
         * @param hfov Horizontal field of view to render with (in radians).
         * @param params Extra configuration parameters.
         */
        render(
            pitch: number,
            yaw: number,
            hfov: number,
            params?: {
                /**
                 * Camera roll (in radians).
                 */
                roll?: number;

                /**
                 * Return rendered image?
                 */
                returnImage?: boolean;
            },
        ): void;

        /**
         * Check if images are loading.
         */
        isLoading(): boolean;

        /**
         * Retrieve renderer’s canvas.
         */
        getCanvas(): HTMLCanvasElement;
    }

    class Viewer {
        /**
         * Creates a new panorama viewer.
         * @param container - The container (div) element for the viewer, or its ID.
         * @param initialConfig - Initial configuration for the viewer.
         */
        constructor(container: HTMLElement | string, initialConfig: ConfigOptions);

        /**
         * Checks whether or not a panorama is loaded.
         */
        isLoaded(): boolean;

        /**
         * Returns the pitch of the center of the view.
         */
        getPitch(): number;

        /**
         * Sets the pitch of the center of the view.
         * @param pitch - Pitch in degrees.
         * @param animated - Animation duration in milliseconds or false for no animation
         * @param callback - Function to call when animation finishes.
         * @param callbackArgs - Arguments to pass to callback function.
         */
        setPitch(
            pitch: number,
            animated?: boolean | number,
            callback?: (args: unknown) => void,
            callbackArgs?: unknown,
        ): this;

        /**
         * Returns the minimum and maximum allowed pitches (in degrees).
         */
        getPitchBounds(): [min: number, max: number];

        /**
         * Sets the minimum and maximum allowed pitches (in degrees).
         * @param bounds - Array containing minimum pitch and maximum pitch.
         */
        setPitchBounds(bounds: [min: number, max: number]): this;

        /**
         * Returns the yaw of the center of the view.
         */
        getYaw(): number;

        /**
         * Sets the yaw of the center of the view.
         * @param yaw - Yaw in degrees [-180, 180].
         * @param animated - Animation duration in milliseconds or false for no animation.
         * @param callback - Function to call when animation finishes.
         * @param callbackArgs - Arguments to pass to callback function.
         */
        setYaw(
            yaw: number,
            animated?: boolean | number,
            callback?: (args: unknown) => void,
            callbackArgs?: unknown,
        ): this;

        /**
         * Returns the minimum and maximum allowed yaws (in degrees).
         */
        getYawBounds(): [min: number, max: number];

        /**
         * Sets the minimum and maximum allowed yaws (in degrees [-180, 180]).
         * @param bounds - Array containing minimum yaw and maximum yaw.
         */
        setYawBounds(bounds: [min: number, max: number]): this;

        /**
         * Returns the horizontal field of view.
         */
        getHfov(): number;

        /**
         * Sets the horizontal field of view.
         * @param hfov - Horizontal field of view in degrees.
         * @param animated - Animation duration in milliseconds or false for no animation.
         * @param callback - Function to call when animation finishes.
         * @param callbackArgs - Arguments to pass to callback function.
         */
        setHfov(
            hfov: number,
            animated?: boolean | number,
            callback?: (args: unknown) => void,
            callbackArgs?: unknown,
        ): this;

        /**
         * Returns the minimum and maximum allowed horizontal fields of view (in degrees).
         */
        getHfovBounds(): [min: number, max: number];

        /**
         * Sets the minimum and maximum allowed horizontal fields of view (in degrees).
         * @param bounds - Array containing minimum hfov and maximum hfov.
         */
        setHfovBounds(bounds: [min: number, max: number]): this;

        /**
         * Set a new view. Any parameters not specified remain the same.
         * @param pitch - Target pitch.
         * @param yaw - Target yaw.
         * @param hfov - Target hfov.
         * @param animated - Animation duration in milliseconds or false for no animation.
         * @param callback - Function to call when animation finishes.
         * @param callbackArgs - Arguments to pass to callback function.
         */
        lookAt(
            pitch?: number,
            yaw?: number,
            hfov?: number,
            animated?: boolean | number,
            callback?: (args: unknown) => void,
            callbackArgs?: unknown,
        ): this;

        /**
         * Returns the panorama’s north offset.
         */
        getNorthOffset(): number;

        /**
         * Sets the panorama’s north offset.
         * @param heading - North offset in degrees.
         */
        setNorthOffset(heading: number): this;

        /**
         * Returns the panorama’s horizon roll.
         */
        getHorizonRoll(): number;

        /**
         * Sets the panorama’s horizon roll.
         * @param roll - Horizon roll in degrees [-90, 90].
         */
        setHorizonRoll(roll: number): this;

        /**
         * Returns the panorama’s horizon pitch.
         */
        getHorizonPitch(): number;

        /**
         * Sets the panorama’s horizon pitch.
         * @param pitch - Horizon pitch in degrees [-90, 90].
         */
        setHorizonPitch(pitch: number): this;

        /**
         * Start auto rotation.
         * Before starting rotation, the viewer is panned to pitch.
         * @param speed - Auto rotation speed / direction. If not specified, previous value is used.
         * @param pitch - The pitch to rotate at. If not specified, initial pitch is used.
         */
        startAutoRotate(speed?: number, pitch?: number): this;

        /**
         * Stop auto rotation.
         */
        stopAutoRotate(): this;

        /**
         * Stops all movement.
         */
        stopMovement(): void;

        /**
         * Returns the panorama renderer.
         */
        getRenderer(): Renderer;

        /**
         * Sets update flag for dynamic content.
         * @param bool - Whether or not viewer should update even when still.
         */
        setUpdate(bool: boolean): this;

        /**
         * Calculate panorama pitch and yaw from location of mouse event.
         * @param event - Document mouse down event.
         */
        mouseEventToCoords(event: MouseEvent): [pitch: number, yaw: number];

        /**
         * Change scene being viewed.
         * @param sceneId - Identifier of scene to switch to.
         * @param pitch - Pitch to use with new scene.
         * @param yaw - Yaw to use with new scene.
         * @param hfov - HFOV to use with new scene.
         */
        loadScene(sceneId: string, pitch?: number, yaw?: number, hfov?: number): this;

        /**
         * Get ID of current scene.
         */
        getScene(): string;

        /**
         * Add a new scene.
         * @param sceneId - The ID of the new scene.
         * @param config - The configuration of the new scene.
         */
        addScene(sceneId: string, config: string): this;

        /**
         * Remove a scene.
         * @param sceneId - The ID of the scene.
         */
        removeScene(sceneId: string): boolean;

        /**
         * Toggle fullscreen.
         */
        toggleFullscreen(): this;

        /**
         * Get configuration of current scene.
         */
        getConfig(): ConfigOptions;

        /**
         * Get viewer’s container element.
         */
        getContainer(): HTMLDivElement;

        /**
         * Add a new hot spot.
         * @param hs - The configuration for the hot spot.
         * @param sceneId - Adds hot spot to specified scene if provided, else to current scene.
         * @throws Throws an error if the scene ID is provided but invalid.
         */
        addHotSpot(hs: HotspotOptions, sceneId?: string): this;

        /**
         * Remove a hot spot.
         * @param hotSpotId - The ID of the hot spot.
         * @param sceneId - Removes hot spot from specified scene if provided, else from current scene.
         */
        removeHotSpot(hotSpotId: string, sceneId?: string): boolean;

        /**
         * This method should be called if the viewer’s container is resized.
         */
        resize(): void;

        /**
         * Check if device orientation control is supported.
         */
        isOrientationSupported(): boolean;

        /**
         * Stop using device orientation.
         */
        stopOrientation(): void;

        /**
         * Start using device orientation (does nothing if not supported).
         */
        startOrientation(): void;

        /**
         * Check if device orientation control is currently activated.
         */
        isOrientationActive(): boolean;

        /**
         * Destructor.
         */
        destroy(): void;

        /**
         * Fired when a panorama finishes loading.
         */
        on(type: "load", listener: () => void): this;

        /**
         * Fired when a scene change is initiated. A `load` event will be fired when the new scene finishes loading. Passes scene ID string to handler.
         */
        on(type: "scenechange", listener: (sceneId: string) => void): this;

        /**
         * Fired when browser fullscreen status changed. Passes status boolean to handler.
         */
        on(type: "fullscreenchange", listener: (fullscreen: boolean) => void): this;

        /**
         * Fired when scene hfov update. Passes new HFOV value to handler.
         */
        on(type: "zoomchange", listener: (hfov: number) => void): this;

        /**
         * If a scene transition fade interval is specified, this event is fired when the fading is completed after changing scenes.
         */
        on(type: "scenechangefadedone", listener: () => void): this;

        /**
         * Fired when any movements / animations finish, i.e. when the renderer stops rendering new frames. Passes final pitch, yaw, and HFOV values to handler.
         */
        on(type: "animatefinished", listener: (data: { pitch: number; yaw: number; hfov: number }) => void): this;

        /**
         * Fired when an error occured. The error message string is passed to the event listener.
         */
        on(type: "error", listener: (errorMsg: string) => void): this;

        /**
         * Fired when an error is cleared.
         */
        on(type: "errorcleared", listener: () => void): this;

        /**
         * Fired when the mouse button is pressed. Passes `MouseEvent` to handler.
         */
        on(type: "mousedown", listener: (event: MouseEvent) => void): this;

        /**
         * Fired when the mouse button is released. Passes `MouseEvent` to handler.
         */
        on(type: "mouseup", listener: (event: MouseEvent) => void): this;

        /**
         * Fired when a touch starts. Passes `TouchEvent` to handler.
         */
        on(type: "touchstart", listener: (event: TouchEvent) => void): this;

        /**
         * Fired when a touch ends. Passes `TouchEvent` to handler.
         */
        on(type: "touchend", listener: (event: TouchEvent) => void): this;

        /**
         * Remove an event listener (or listeners).
         * @param type - Type of event to remove listeners from. If not specified, all listeners are removed.
         * @param listener - Listener function to remove. If not specified, all listeners of specified type are removed.
         */
        off(): this;
        off(type: "load", listener?: () => void): this;
        off(type: "scenechange", listener?: (sceneId: string) => void): this;
        off(type: "fullscreenchange", listener?: (fullscreen: boolean) => void): this;
        off(type: "zoomchange", listener?: (hfov: number) => void): this;
        off(type: "scenechangefadedone", listener?: () => void): this;
        off(type: "animatefinished", listener?: (data: { pitch: number; yaw: number; hfov: number }) => void): this;
        off(type: "error", listener?: (errorMsg: string) => void): this;
        off(type: "errorcleared", listener?: () => void): this;
        off(type: "mousedown", listener?: (event: MouseEvent) => void): this;
        off(type: "mouseup", listener?: (event: MouseEvent) => void): this;
        off(type: "touchstart", listener?: (event: TouchEvent) => void): this;
        off(type: "touchend", listener?: (event: TouchEvent) => void): this;
    }
}

interface Window {
    libpannellum: {
        renderer(container: HTMLElement): Pannellum.Renderer;
    };
    pannellum: {
        viewer(container: HTMLElement | string, initialConfig: Pannellum.ConfigOptions): Pannellum.Viewer;
    };
}

declare const libpannellum: {
    renderer(container: HTMLElement): Pannellum.Renderer;
};

declare const pannellum: {
    viewer(container: HTMLElement | string, initialConfig: Pannellum.ConfigOptions): Pannellum.Viewer;
};
