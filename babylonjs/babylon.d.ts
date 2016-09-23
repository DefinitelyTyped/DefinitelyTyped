// Type definitions for BabylonJS v2.4
// Project: http://www.babylonjs.com/
// Definitions by: Babylon.js <https://github.com/BabylonJS/Babylon.js>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module BABYLON {
    class InstancingAttributeInfo {
        /**
         * Index/offset of the attribute in the vertex shader
         */
        index: number;
        /**
         * size of the attribute, 1, 2, 3 or 4
         */
        attributeSize: number;
        /**
         * type of the attribute, gl.BYTE, gl.UNSIGNED_BYTE, gl.SHORT, gl.UNSIGNED_SHORT, gl.FIXED, gl.FLOAT.
         * default is FLOAT
         */
        attribyteType: number;
        /**
         * normalization of fixed-point data. behavior unclear, use FALSE, default is FALSE
         */
        normalized: boolean;
        /**
         * Offset of the data in the Vertex Buffer acting as the instancing buffer
         */
        offset: number;
        /**
         * Name of the GLSL attribute, for debugging purpose only
         */
        attributeName: string;
    }
    class EngineCapabilities {
        maxTexturesImageUnits: number;
        maxTextureSize: number;
        maxCubemapTextureSize: number;
        maxRenderTextureSize: number;
        standardDerivatives: boolean;
        s3tc: WEBGL_compressed_texture_s3tc;
        textureFloat: boolean;
        textureAnisotropicFilterExtension: EXT_texture_filter_anisotropic;
        maxAnisotropy: number;
        instancedArrays: ANGLE_instanced_arrays;
        uintIndices: boolean;
        highPrecisionShaderSupported: boolean;
        fragmentDepthSupported: boolean;
        textureFloatLinearFiltering: boolean;
        textureLOD: boolean;
        drawBuffersExtension: any;
    }
    /**
     * The engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio.
     */
    class Engine {
        private static _ALPHA_DISABLE;
        private static _ALPHA_ADD;
        private static _ALPHA_COMBINE;
        private static _ALPHA_SUBTRACT;
        private static _ALPHA_MULTIPLY;
        private static _ALPHA_MAXIMIZED;
        private static _ALPHA_ONEONE;
        private static _DELAYLOADSTATE_NONE;
        private static _DELAYLOADSTATE_LOADED;
        private static _DELAYLOADSTATE_LOADING;
        private static _DELAYLOADSTATE_NOTLOADED;
        private static _TEXTUREFORMAT_ALPHA;
        private static _TEXTUREFORMAT_LUMINANCE;
        private static _TEXTUREFORMAT_LUMINANCE_ALPHA;
        private static _TEXTUREFORMAT_RGB;
        private static _TEXTUREFORMAT_RGBA;
        private static _TEXTURETYPE_UNSIGNED_INT;
        private static _TEXTURETYPE_FLOAT;
        static ALPHA_DISABLE: number;
        static ALPHA_ONEONE: number;
        static ALPHA_ADD: number;
        static ALPHA_COMBINE: number;
        static ALPHA_SUBTRACT: number;
        static ALPHA_MULTIPLY: number;
        static ALPHA_MAXIMIZED: number;
        static DELAYLOADSTATE_NONE: number;
        static DELAYLOADSTATE_LOADED: number;
        static DELAYLOADSTATE_LOADING: number;
        static DELAYLOADSTATE_NOTLOADED: number;
        static TEXTUREFORMAT_ALPHA: number;
        static TEXTUREFORMAT_LUMINANCE: number;
        static TEXTUREFORMAT_LUMINANCE_ALPHA: number;
        static TEXTUREFORMAT_RGB: number;
        static TEXTUREFORMAT_RGBA: number;
        static TEXTURETYPE_UNSIGNED_INT: number;
        static TEXTURETYPE_FLOAT: number;
        static Version: string;
        static CollisionsEpsilon: number;
        static CodeRepository: string;
        static ShadersRepository: string;
        isFullscreen: boolean;
        isPointerLock: boolean;
        cullBackFaces: boolean;
        renderEvenInBackground: boolean;
        enableOfflineSupport: boolean;
        scenes: Scene[];
        _gl: WebGLRenderingContext;
        private _renderingCanvas;
        private _windowIsBackground;
        private _webGLVersion;
        static audioEngine: AudioEngine;
        private _onBlur;
        private _onFocus;
        private _onFullscreenChange;
        private _onPointerLockChange;
        private _hardwareScalingLevel;
        private _caps;
        private _pointerLockRequested;
        private _alphaTest;
        private _loadingScreen;
        private _drawCalls;
        private _glVersion;
        private _glRenderer;
        private _glVendor;
        private _videoTextureSupported;
        private _renderingQueueLaunched;
        private _activeRenderLoops;
        private fpsRange;
        private previousFramesDuration;
        private fps;
        private deltaTime;
        private _depthCullingState;
        private _alphaState;
        private _alphaMode;
        private _loadedTexturesCache;
        private _maxTextureChannels;
        private _activeTexturesCache;
        private _currentEffect;
        private _compiledEffects;
        private _vertexAttribArraysEnabled;
        private _vertexAttribArraysToUse;
        private _cachedViewport;
        private _cachedVertexBuffers;
        private _cachedIndexBuffer;
        private _cachedEffectForVertexBuffers;
        private _currentRenderTarget;
        private _uintIndicesCurrentlySet;
        private _currentBoundBuffer;
        private _currentInstanceLocations;
        private _currentInstanceBuffers;
        private _workingCanvas;
        private _workingContext;
        private _externalData;
        private _bindedRenderFunction;
        /**
         * @constructor
         * @param {HTMLCanvasElement} canvas - the canvas to be used for rendering
         * @param {boolean} [antialias] - enable antialias
         * @param options - further options to be sent to the getContext function
         */
        constructor(canvas: HTMLCanvasElement, antialias?: boolean, options?: {
            antialias?: boolean;
            preserveDrawingBuffer?: boolean;
            limitDeviceRatio?: number;
        }, adaptToDeviceRatio?: boolean);
        webGLVersion: string;
        private _prepareWorkingCanvas();
        resetTextureCache(): void;
        getGlInfo(): {
            vendor: string;
            renderer: string;
            version: string;
        };
        getAspectRatio(camera: Camera, useScreen?: boolean): number;
        getRenderWidth(useScreen?: boolean): number;
        getRenderHeight(useScreen?: boolean): number;
        getRenderingCanvas(): HTMLCanvasElement;
        getRenderingCanvasClientRect(): ClientRect;
        setHardwareScalingLevel(level: number): void;
        getHardwareScalingLevel(): number;
        getLoadedTexturesCache(): WebGLTexture[];
        getCaps(): EngineCapabilities;
        drawCalls: number;
        resetDrawCalls(): void;
        getDepthFunction(): number;
        setDepthFunction(depthFunc: number): void;
        setDepthFunctionToGreater(): void;
        setDepthFunctionToGreaterOrEqual(): void;
        setDepthFunctionToLess(): void;
        setDepthFunctionToLessOrEqual(): void;
        /**
         * stop executing a render loop function and remove it from the execution array
         * @param {Function} [renderFunction] the function to be removed. If not provided all functions will be removed.
         */
        stopRenderLoop(renderFunction?: () => void): void;
        _renderLoop(): void;
        /**
         * Register and execute a render loop. The engine can have more than one render function.
         * @param {Function} renderFunction - the function to continuously execute starting the next render loop.
         * @example
         * engine.runRenderLoop(function () {
         *      scene.render()
         * })
         */
        runRenderLoop(renderFunction: () => void): void;
        /**
         * Toggle full screen mode.
         * @param {boolean} requestPointerLock - should a pointer lock be requested from the user
         * @param {any} options - an options object to be sent to the requestFullscreen function
         */
        switchFullscreen(requestPointerLock: boolean, options?: any): void;
        clear(color: any, backBuffer: boolean, depthStencil: boolean): void;
        scissorClear(x: number, y: number, width: number, height: number, clearColor: Color4): void;
        /**
         * Set the WebGL's viewport
         * @param {BABYLON.Viewport} viewport - the viewport element to be used.
         * @param {number} [requiredWidth] - the width required for rendering. If not provided the rendering canvas' width is used.
         * @param {number} [requiredHeight] - the height required for rendering. If not provided the rendering canvas' height is used.
         */
        setViewport(viewport: Viewport, requiredWidth?: number, requiredHeight?: number): void;
        /**
         * Directly set the WebGL Viewport
         * The x, y, width & height are directly passed to the WebGL call
         * @return the current viewport Object (if any) that is being replaced by this call. You can restore this viewport later on to go back to the original state.
         */
        setDirectViewport(x: number, y: number, width: number, height: number): Viewport;
        beginFrame(): void;
        endFrame(): void;
        /**
         * resize the view according to the canvas' size.
         * @example
         *   window.addEventListener("resize", function () {
         *      engine.resize();
         *   });
         */
        resize(): void;
        /**
         * force a specific size of the canvas
         * @param {number} width - the new canvas' width
         * @param {number} height - the new canvas' height
         */
        setSize(width: number, height: number): void;
        bindFramebuffer(texture: WebGLTexture, faceIndex?: number, requiredWidth?: number, requiredHeight?: number): void;
        unBindFramebuffer(texture: WebGLTexture, disableGenerateMipMaps?: boolean): void;
        generateMipMapsForCubemap(texture: WebGLTexture): void;
        flushFramebuffer(): void;
        restoreDefaultFramebuffer(): void;
        private _resetVertexBufferBinding();
        createVertexBuffer(vertices: number[] | Float32Array): WebGLBuffer;
        createDynamicVertexBuffer(vertices: number[] | Float32Array): WebGLBuffer;
        updateDynamicVertexBuffer(vertexBuffer: WebGLBuffer, vertices: number[] | Float32Array, offset?: number, count?: number): void;
        private _resetIndexBufferBinding();
        createIndexBuffer(indices: number[] | Int32Array): WebGLBuffer;
        bindArrayBuffer(buffer: WebGLBuffer): void;
        updateArrayBuffer(data: Float32Array): void;
        private bindBuffer(buffer, target);
        bindBuffersDirectly(vertexBuffer: WebGLBuffer, indexBuffer: WebGLBuffer, vertexDeclaration: number[], vertexStrideSize: number, effect: Effect): void;
        bindBuffers(vertexBuffers: {
            [key: string]: VertexBuffer;
        }, indexBuffer: WebGLBuffer, effect: Effect): void;
        unbindInstanceAttributes(): void;
        _releaseBuffer(buffer: WebGLBuffer): boolean;
        createInstancesBuffer(capacity: number): WebGLBuffer;
        deleteInstancesBuffer(buffer: WebGLBuffer): void;
        updateAndBindInstancesBuffer(instancesBuffer: WebGLBuffer, data: Float32Array, offsetLocations: number[] | InstancingAttributeInfo[]): void;
        applyStates(): void;
        draw(useTriangles: boolean, indexStart: number, indexCount: number, instancesCount?: number): void;
        drawPointClouds(verticesStart: number, verticesCount: number, instancesCount?: number): void;
        drawUnIndexed(useTriangles: boolean, verticesStart: number, verticesCount: number, instancesCount?: number): void;
        _releaseEffect(effect: Effect): void;
        createEffect(baseName: any, attributesNames: string[], uniformsNames: string[], samplers: string[], defines: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void, indexParameters?: any): Effect;
        createEffectForParticles(fragmentName: string, uniformsNames?: string[], samplers?: string[], defines?: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void): Effect;
        createShaderProgram(vertexCode: string, fragmentCode: string, defines: string): WebGLProgram;
        getUniforms(shaderProgram: WebGLProgram, uniformsNames: string[]): WebGLUniformLocation[];
        getAttributes(shaderProgram: WebGLProgram, attributesNames: string[]): number[];
        enableEffect(effect: Effect): void;
        setArray(uniform: WebGLUniformLocation, array: number[]): void;
        setArray2(uniform: WebGLUniformLocation, array: number[]): void;
        setArray3(uniform: WebGLUniformLocation, array: number[]): void;
        setArray4(uniform: WebGLUniformLocation, array: number[]): void;
        setMatrices(uniform: WebGLUniformLocation, matrices: Float32Array): void;
        setMatrix(uniform: WebGLUniformLocation, matrix: Matrix): void;
        setMatrix3x3(uniform: WebGLUniformLocation, matrix: Float32Array): void;
        setMatrix2x2(uniform: WebGLUniformLocation, matrix: Float32Array): void;
        setFloat(uniform: WebGLUniformLocation, value: number): void;
        setFloat2(uniform: WebGLUniformLocation, x: number, y: number): void;
        setFloat3(uniform: WebGLUniformLocation, x: number, y: number, z: number): void;
        setBool(uniform: WebGLUniformLocation, bool: number): void;
        setFloat4(uniform: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
        setColor3(uniform: WebGLUniformLocation, color3: Color3): void;
        setColor4(uniform: WebGLUniformLocation, color3: Color3, alpha: number): void;
        setState(culling: boolean, zOffset?: number, force?: boolean, reverseSide?: boolean): void;
        setDepthBuffer(enable: boolean): void;
        getDepthWrite(): boolean;
        setDepthWrite(enable: boolean): void;
        setColorWrite(enable: boolean): void;
        setAlphaMode(mode: number, noDepthWriteChange?: boolean): void;
        getAlphaMode(): number;
        setAlphaTesting(enable: boolean): void;
        getAlphaTesting(): boolean;
        wipeCaches(): void;
        setSamplingMode(texture: WebGLTexture, samplingMode: number): void;
        createTexture(url: string, noMipmap: boolean, invertY: boolean, scene: Scene, samplingMode?: number, onLoad?: () => void, onError?: () => void, buffer?: any): WebGLTexture;
        private _getInternalFormat(format);
        updateRawTexture(texture: WebGLTexture, data: ArrayBufferView, format: number, invertY: boolean, compression?: string): void;
        createRawTexture(data: ArrayBufferView, width: number, height: number, format: number, generateMipMaps: boolean, invertY: boolean, samplingMode: number, compression?: string): WebGLTexture;
        createDynamicTexture(width: number, height: number, generateMipMaps: boolean, samplingMode: number): WebGLTexture;
        updateTextureSamplingMode(samplingMode: number, texture: WebGLTexture): void;
        updateDynamicTexture(texture: WebGLTexture, canvas: HTMLCanvasElement, invertY: boolean, premulAlpha?: boolean): void;
        updateVideoTexture(texture: WebGLTexture, video: HTMLVideoElement, invertY: boolean): void;
        createRenderTargetTexture(size: any, options: any): WebGLTexture;
        createRenderTargetCubeTexture(size: number, options?: any): WebGLTexture;
        createCubeTexture(rootUrl: string, scene: Scene, files: string[], noMipmap?: boolean): WebGLTexture;
        updateTextureSize(texture: WebGLTexture, width: number, height: number): void;
        createRawCubeTexture(url: string, scene: Scene, size: number, format: number, type: number, noMipmap: boolean, callback: (ArrayBuffer) => ArrayBufferView[], mipmmapGenerator: ((faces: ArrayBufferView[]) => ArrayBufferView[][])): WebGLTexture;
        _releaseTexture(texture: WebGLTexture): void;
        bindSamplers(effect: Effect): void;
        _bindTexture(channel: number, texture: WebGLTexture): void;
        setTextureFromPostProcess(channel: number, postProcess: PostProcess): void;
        unbindAllTextures(): void;
        setTexture(channel: number, texture: BaseTexture): void;
        _setAnisotropicLevel(key: number, texture: BaseTexture): void;
        readPixels(x: number, y: number, width: number, height: number): Uint8Array;
        /**
         * Add an externaly attached data from its key.
         * This method call will fail and return false, if such key already exists.
         * If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.
         * @param key the unique key that identifies the data
         * @param data the data object to associate to the key for this Engine instance
         * @return true if no such key were already present and the data was added successfully, false otherwise
         */
        addExternalData<T>(key: string, data: T): boolean;
        /**
         * Get an externaly attached data from its key
         * @param key the unique key that identifies the data
         * @return the associated data, if present (can be null), or undefined if not present
         */
        getExternalData<T>(key: string): T;
        /**
         * Get an externaly attached data from its key, create it using a factory if it's not already present
         * @param key the unique key that identifies the data
         * @param factory the factory that will be called to create the instance if and only if it doesn't exists
         * @return the associated data, can be null if the factory returned null.
         */
        getOrAddExternalDataWithFactory<T>(key: string, factory: (k: string) => T): T;
        /**
         * Remove an externaly attached data from the Engine instance
         * @param key the unique key that identifies the data
         * @return true if the data was successfully removed, false if it doesn't exist
         */
        removeExternalData(key: any): boolean;
        releaseInternalTexture(texture: WebGLTexture): void;
        dispose(): void;
        displayLoadingUI(): void;
        hideLoadingUI(): void;
        loadingScreen: ILoadingScreen;
        loadingUIText: string;
        loadingUIBackgroundColor: string;
        getFps(): number;
        getDeltaTime(): number;
        private _measureFps();
        static isSupported(): boolean;
    }
}

interface Window {
    mozIndexedDB(func: any): any;
    webkitIndexedDB(func: any): any;
    IDBTransaction(func: any): any;
    webkitIDBTransaction(func: any): any;
    msIDBTransaction(func: any): any;
    IDBKeyRange(func: any): any;
    webkitIDBKeyRange(func: any): any;
    msIDBKeyRange(func: any): any;
    webkitURL: HTMLURL;
    webkitRequestAnimationFrame(func: any): any;
    mozRequestAnimationFrame(func: any): any;
    oRequestAnimationFrame(func: any): any;
    WebGLRenderingContext: WebGLRenderingContext;
    MSGesture: MSGesture;
    CANNON: any;
    SIMD: any;
    AudioContext: AudioContext;
    webkitAudioContext: AudioContext;
    PointerEvent: any;
}
interface HTMLURL {
    createObjectURL(param1: any, param2?: any): any;
}
interface Document {
    exitFullscreen(): void;
    webkitCancelFullScreen(): void;
    mozCancelFullScreen(): void;
    msCancelFullScreen(): void;
    mozFullScreen: boolean;
    msIsFullScreen: boolean;
    fullscreen: boolean;
    mozPointerLockElement: HTMLElement;
    msPointerLockElement: HTMLElement;
    webkitPointerLockElement: HTMLElement;
}
interface HTMLCanvasElement {
    requestPointerLock(): void;
    msRequestPointerLock(): void;
    mozRequestPointerLock(): void;
    webkitRequestPointerLock(): void;
}
interface CanvasRenderingContext2D {
    imageSmoothingEnabled: boolean;
    mozImageSmoothingEnabled: boolean;
    oImageSmoothingEnabled: boolean;
    webkitImageSmoothingEnabled: boolean;
}
interface WebGLTexture {
    isReady: boolean;
    isCube: boolean;
    url: string;
    noMipmap: boolean;
    samplingMode: number;
    references: number;
    generateMipMaps: boolean;
    _size: number;
    _baseWidth: number;
    _baseHeight: number;
    _width: number;
    _height: number;
    _workingCanvas: HTMLCanvasElement;
    _workingContext: CanvasRenderingContext2D;
    _framebuffer: WebGLFramebuffer;
    _depthBuffer: WebGLRenderbuffer;
    _cachedCoordinatesMode: number;
    _cachedWrapU: number;
    _cachedWrapV: number;
    _isDisabled: boolean;
}
interface WebGLBuffer {
    references: number;
    capacity: number;
    is32Bits: boolean;
}
interface MouseEvent {
    mozMovementX: number;
    mozMovementY: number;
    webkitMovementX: number;
    webkitMovementY: number;
    msMovementX: number;
    msMovementY: number;
}
interface MSStyleCSSProperties {
    webkitTransform: string;
    webkitTransition: string;
}
interface Navigator {
    getVRDevices: () => any;
    mozGetVRDevices: (any: any) => any;
    isCocoonJS: boolean;
}
interface Screen {
    orientation: string;
    mozOrientation: string;
}
interface HTMLMediaElement {
    crossOrigin: string;
}

declare module BABYLON {
    /**
     * Node is the basic class for all scene objects (Mesh, Light Camera).
     */
    class Node {
        name: string;
        id: string;
        uniqueId: number;
        state: string;
        animations: Animation[];
        private _ranges;
        onReady: (node: Node) => void;
        private _childrenFlag;
        private _isEnabled;
        private _isReady;
        _currentRenderId: number;
        private _parentRenderId;
        _waitingParentId: string;
        private _scene;
        _cache: any;
        private _parentNode;
        private _children;
        parent: Node;
        /**
         * @constructor
         * @param {string} name - the name and id to be given to this node
         * @param {BABYLON.Scene} the scene this node will be added to
         */
        constructor(name: string, scene: Scene);
        getScene(): Scene;
        getEngine(): Engine;
        getWorldMatrix(): Matrix;
        _initCache(): void;
        updateCache(force?: boolean): void;
        _updateCache(ignoreParentClass?: boolean): void;
        _isSynchronized(): boolean;
        _markSyncedWithParent(): void;
        isSynchronizedWithParent(): boolean;
        isSynchronized(updateCache?: boolean): boolean;
        hasNewParent(update?: boolean): boolean;
        /**
         * Is this node ready to be used/rendered
         * @return {boolean} is it ready
         */
        isReady(): boolean;
        /**
         * Is this node enabled.
         * If the node has a parent and is enabled, the parent will be inspected as well.
         * @return {boolean} whether this node (and its parent) is enabled.
         * @see setEnabled
         */
        isEnabled(): boolean;
        /**
         * Set the enabled state of this node.
         * @param {boolean} value - the new enabled state
         * @see isEnabled
         */
        setEnabled(value: boolean): void;
        /**
         * Is this node a descendant of the given node.
         * The function will iterate up the hierarchy until the ancestor was found or no more parents defined.
         * @param {BABYLON.Node} ancestor - The parent node to inspect
         * @see parent
         */
        isDescendantOf(ancestor: Node): boolean;
        /**
         * Evaluate the list of children and determine if they should be considered as descendants considering the given criterias
         * @param {BABYLON.Node[]} results the result array containing the nodes matching the given criterias
         * @param {boolean} directDescendantsOnly if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered.
         * @param predicate: an optional predicate that will be called on every evaluated children, the predicate must return true for a given child to be part of the result, otherwise it will be ignored.
         */
        _getDescendants(results: Node[], directDescendantsOnly?: boolean, predicate?: (node: Node) => boolean): void;
        /**
         * Will return all nodes that have this node as ascendant.
         * @param {boolean} directDescendantsOnly if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered.
         * @param predicate: an optional predicate that will be called on every evaluated children, the predicate must return true for a given child to be part of the result, otherwise it will be ignored.
         * @return {BABYLON.Node[]} all children nodes of all types.
         */
        getDescendants(directDescendantsOnly?: boolean, predicate?: (node: Node) => boolean): Node[];
        /**
         * @param predicate: an optional predicate that will be called on every evaluated children, the predicate must return true for a given child to be part of the result, otherwise it will be ignored.
         * @Deprecated, legacy support.
         * use getDecendants instead.
         */
        getChildren(predicate?: (node: Node) => boolean): Node[];
        /**
         * Get all child-meshes of this node.
         */
        getChildMeshes(directDecendantsOnly?: boolean, predicate?: (node: Node) => boolean): AbstractMesh[];
        _setReady(state: boolean): void;
        getAnimationByName(name: string): Animation;
        createAnimationRange(name: string, from: number, to: number): void;
        deleteAnimationRange(name: string, deleteFrames?: boolean): void;
        getAnimationRange(name: string): AnimationRange;
        beginAnimation(name: string, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void): void;
        serializeAnimationRanges(): any;
        dispose(): void;
        static ParseAnimationRanges(node: Node, parsedNode: any, scene: Scene): void;
    }
}

declare module BABYLON {
    interface IDisposable {
        dispose(): void;
    }
    class PointerEventTypes {
        static _POINTERDOWN: number;
        static _POINTERUP: number;
        static _POINTERMOVE: number;
        static _POINTERWHEEL: number;
        static _POINTERPICK: number;
        static POINTERDOWN: number;
        static POINTERUP: number;
        static POINTERMOVE: number;
        static POINTERWHEEL: number;
        static POINTERPICK: number;
    }
    class PointerInfoBase {
        type: number;
        event: PointerEvent | MouseWheelEvent;
        constructor(type: number, event: PointerEvent | MouseWheelEvent);
    }
    /**
     * This class is used to store pointer related info for the onPrePointerObservable event.
     * Set the skipOnPointerObservable property to true if you want the engine to stop any process after this event is triggered, even not calling onPointerObservable
     */
    class PointerInfoPre extends PointerInfoBase {
        constructor(type: number, event: PointerEvent | MouseWheelEvent, localX: any, localY: any);
        localPosition: Vector2;
        skipOnPointerObservable: boolean;
    }
    /**
     * This type contains all the data related to a pointer event in Babylon.js.
     * The event member is an instance of PointerEvent for all types except PointerWheel and is of type MouseWheelEvent when type equals PointerWheel. The different event types can be found in the PointerEventTypes class.
     */
    class PointerInfo extends PointerInfoBase {
        pickInfo: PickingInfo;
        constructor(type: number, event: PointerEvent | MouseWheelEvent, pickInfo: PickingInfo);
    }
    /**
     * Represents a scene to be rendered by the engine.
     * @see http://doc.babylonjs.com/page.php?p=21911
     */
    class Scene implements IAnimatable {
        private static _FOGMODE_NONE;
        private static _FOGMODE_EXP;
        private static _FOGMODE_EXP2;
        private static _FOGMODE_LINEAR;
        static MinDeltaTime: number;
        static MaxDeltaTime: number;
        static FOGMODE_NONE: number;
        static FOGMODE_EXP: number;
        static FOGMODE_EXP2: number;
        static FOGMODE_LINEAR: number;
        autoClear: boolean;
        clearColor: any;
        ambientColor: Color3;
        forceWireframe: boolean;
        forcePointsCloud: boolean;
        forceShowBoundingBoxes: boolean;
        clipPlane: Plane;
        animationsEnabled: boolean;
        constantlyUpdateMeshUnderPointer: boolean;
        /**
        * An event triggered when the scene is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<Scene>;
        private _onDisposeObserver;
        onDispose: () => void;
        /**
        * An event triggered before rendering the scene
        * @type {BABYLON.Observable}
        */
        onBeforeRenderObservable: Observable<Scene>;
        private _onBeforeRenderObserver;
        beforeRender: () => void;
        /**
        * An event triggered after rendering the scene
        * @type {BABYLON.Observable}
        */
        onAfterRenderObservable: Observable<Scene>;
        private _onAfterRenderObserver;
        afterRender: () => void;
        /**
        * An event triggered when the scene is ready
        * @type {BABYLON.Observable}
        */
        onReadyObservable: Observable<Scene>;
        /**
        * An event triggered before rendering a camera
        * @type {BABYLON.Observable}
        */
        onBeforeCameraRenderObservable: Observable<Camera>;
        private _onBeforeCameraRenderObserver;
        beforeCameraRender: () => void;
        /**
        * An event triggered after rendering a camera
        * @type {BABYLON.Observable}
        */
        onAfterCameraRenderObservable: Observable<Camera>;
        private _onAfterCameraRenderObserver;
        afterCameraRender: () => void;
        /**
        * An event triggered when a camera is created
        * @type {BABYLON.Observable}
        */
        onNewCameraAddedObservable: Observable<Camera>;
        /**
        * An event triggered when a camera is removed
        * @type {BABYLON.Observable}
        */
        onCameraRemovedObservable: Observable<Camera>;
        /**
        * An event triggered when a light is created
        * @type {BABYLON.Observable}
        */
        onNewLightAddedObservable: Observable<Light>;
        /**
        * An event triggered when a light is removed
        * @type {BABYLON.Observable}
        */
        onLightRemovedObservable: Observable<Light>;
        /**
        * An event triggered when a geometry is created
        * @type {BABYLON.Observable}
        */
        onNewGeometryAddedObservable: Observable<Geometry>;
        /**
        * An event triggered when a geometry is removed
        * @type {BABYLON.Observable}
        */
        onGeometryRemovedObservable: Observable<Geometry>;
        /**
        * An event triggered when a mesh is created
        * @type {BABYLON.Observable}
        */
        onNewMeshAddedObservable: Observable<AbstractMesh>;
        /**
        * An event triggered when a mesh is removed
        * @type {BABYLON.Observable}
        */
        onMeshRemovedObservable: Observable<AbstractMesh>;
        animations: Animation[];
        pointerDownPredicate: (Mesh: AbstractMesh) => boolean;
        pointerUpPredicate: (Mesh: AbstractMesh) => boolean;
        pointerMovePredicate: (Mesh: AbstractMesh) => boolean;
        private _onPointerMove;
        private _onPointerDown;
        private _onPointerUp;
        /**
         * @deprecated Use onPointerObservable instead
         */
        onPointerMove: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        /**
         * @deprecated Use onPointerObservable instead
         */
        onPointerDown: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        /**
         * @deprecated Use onPointerObservable instead
         */
        onPointerUp: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        /**
         * @deprecated Use onPointerObservable instead
         */
        onPointerPick: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        /**
         * This observable event is triggered when any mouse event registered during Scene.attach() is called BEFORE the 3D engine to process anything (mesh/sprite picking for instance).
         * You have the possibility to skip the 3D Engine process and the call to onPointerObservable by setting PointerInfoBase.skipOnPointerObservable to true
         */
        onPrePointerObservable: Observable<PointerInfoPre>;
        /**
         * Observable event triggered each time an input event is received from the rendering canvas
         */
        onPointerObservable: Observable<PointerInfo>;
        unTranslatedPointer: Vector2;
        cameraToUseForPointers: Camera;
        private _pointerX;
        private _pointerY;
        private _unTranslatedPointerX;
        private _unTranslatedPointerY;
        private _startingPointerPosition;
        private _startingPointerTime;
        _mirroredCameraPosition: Vector3;
        private _onKeyDown;
        private _onKeyUp;
        /**
        * is fog enabled on this scene.
        * @type {boolean}
        */
        fogEnabled: boolean;
        fogMode: number;
        fogColor: Color3;
        fogDensity: number;
        fogStart: number;
        fogEnd: number;
        /**
        * is shadow enabled on this scene.
        * @type {boolean}
        */
        shadowsEnabled: boolean;
        /**
        * is light enabled on this scene.
        * @type {boolean}
        */
        lightsEnabled: boolean;
        /**
        * All of the lights added to this scene.
        * @see BABYLON.Light
        * @type {BABYLON.Light[]}
        */
        lights: Light[];
        /**
        * All of the cameras added to this scene.
        * @see BABYLON.Camera
        * @type {BABYLON.Camera[]}
        */
        cameras: Camera[];
        activeCameras: Camera[];
        activeCamera: Camera;
        /**
        * All of the (abstract) meshes added to this scene.
        * @see BABYLON.AbstractMesh
        * @type {BABYLON.AbstractMesh[]}
        */
        meshes: AbstractMesh[];
        private _geometries;
        materials: Material[];
        multiMaterials: MultiMaterial[];
        defaultMaterial: StandardMaterial;
        texturesEnabled: boolean;
        textures: BaseTexture[];
        particlesEnabled: boolean;
        particleSystems: ParticleSystem[];
        spritesEnabled: boolean;
        spriteManagers: SpriteManager[];
        layers: Layer[];
        skeletonsEnabled: boolean;
        skeletons: Skeleton[];
        lensFlaresEnabled: boolean;
        lensFlareSystems: LensFlareSystem[];
        collisionsEnabled: boolean;
        private _workerCollisions;
        collisionCoordinator: ICollisionCoordinator;
        gravity: Vector3;
        postProcessesEnabled: boolean;
        postProcessManager: PostProcessManager;
        postProcessRenderPipelineManager: PostProcessRenderPipelineManager;
        renderTargetsEnabled: boolean;
        dumpNextRenderTargets: boolean;
        customRenderTargets: RenderTargetTexture[];
        useDelayedTextureLoading: boolean;
        importedMeshesFiles: String[];
        probesEnabled: boolean;
        reflectionProbes: ReflectionProbe[];
        database: any;
        /**
         * This scene's action manager
         * @type {BABYLON.ActionManager}
        */
        actionManager: ActionManager;
        _actionManagers: ActionManager[];
        private _meshesForIntersections;
        proceduralTexturesEnabled: boolean;
        _proceduralTextures: ProceduralTexture[];
        mainSoundTrack: SoundTrack;
        soundTracks: SoundTrack[];
        private _audioEnabled;
        private _headphone;
        simplificationQueue: SimplificationQueue;
        private _engine;
        private _totalVertices;
        _activeIndices: number;
        _activeParticles: number;
        private _lastFrameDuration;
        private _evaluateActiveMeshesDuration;
        private _renderTargetsDuration;
        _particlesDuration: number;
        private _renderDuration;
        _spritesDuration: number;
        private _animationRatio;
        private _animationStartDate;
        _cachedMaterial: Material;
        private _renderId;
        private _executeWhenReadyTimeoutId;
        private _intermediateRendering;
        _toBeDisposed: SmartArray<IDisposable>;
        private _pendingData;
        private _activeMeshes;
        private _processedMaterials;
        private _renderTargets;
        _activeParticleSystems: SmartArray<ParticleSystem>;
        private _activeSkeletons;
        private _softwareSkinnedMeshes;
        _activeBones: number;
        private _renderingManager;
        private _physicsEngine;
        _activeAnimatables: Animatable[];
        private _transformMatrix;
        private _pickWithRayInverseMatrix;
        private _edgesRenderers;
        private _boundingBoxRenderer;
        private _outlineRenderer;
        private _viewMatrix;
        private _projectionMatrix;
        private _frustumPlanes;
        private _selectionOctree;
        private _pointerOverMesh;
        private _pointerOverSprite;
        private _debugLayer;
        private _depthRenderer;
        private _uniqueIdCounter;
        private _pickedDownMesh;
        private _pickedDownSprite;
        /**
         * @constructor
         * @param {BABYLON.Engine} engine - the engine to be used to render this scene.
         */
        constructor(engine: Engine);
        debugLayer: DebugLayer;
        workerCollisions: boolean;
        SelectionOctree: Octree<AbstractMesh>;
        /**
         * The mesh that is currently under the pointer.
         * @return {BABYLON.AbstractMesh} mesh under the pointer/mouse cursor or null if none.
         */
        meshUnderPointer: AbstractMesh;
        /**
         * Current on-screen X position of the pointer
         * @return {number} X position of the pointer
         */
        pointerX: number;
        /**
         * Current on-screen Y position of the pointer
         * @return {number} Y position of the pointer
         */
        pointerY: number;
        getCachedMaterial(): Material;
        getBoundingBoxRenderer(): BoundingBoxRenderer;
        getOutlineRenderer(): OutlineRenderer;
        getEngine(): Engine;
        getTotalVertices(): number;
        getActiveIndices(): number;
        getActiveParticles(): number;
        getActiveBones(): number;
        getLastFrameDuration(): number;
        getEvaluateActiveMeshesDuration(): number;
        getActiveMeshes(): SmartArray<Mesh>;
        getRenderTargetsDuration(): number;
        getRenderDuration(): number;
        getParticlesDuration(): number;
        getSpritesDuration(): number;
        getAnimationRatio(): number;
        getRenderId(): number;
        incrementRenderId(): void;
        private _updatePointerPosition(evt);
        /**
        * Attach events to the canvas (To handle actionManagers triggers and raise onPointerMove, onPointerDown and onPointerUp
        * @param attachUp defines if you want to attach events to pointerup
        * @param attachDown defines if you want to attach events to pointerdown
        * @param attachMove defines if you want to attach events to pointermove
        */
        attachControl(attachUp?: boolean, attachDown?: boolean, attachMove?: boolean): void;
        detachControl(): void;
        isReady(): boolean;
        resetCachedMaterial(): void;
        registerBeforeRender(func: () => void): void;
        unregisterBeforeRender(func: () => void): void;
        registerAfterRender(func: () => void): void;
        unregisterAfterRender(func: () => void): void;
        _addPendingData(data: any): void;
        _removePendingData(data: any): void;
        getWaitingItemsCount(): number;
        /**
         * Registers a function to be executed when the scene is ready.
         * @param {Function} func - the function to be executed.
         */
        executeWhenReady(func: () => void): void;
        _checkIsReady(): void;
        /**
         * Will start the animation sequence of a given target
         * @param target - the target
         * @param {number} from - from which frame should animation start
         * @param {number} to - till which frame should animation run.
         * @param {boolean} [loop] - should the animation loop
         * @param {number} [speedRatio] - the speed in which to run the animation
         * @param {Function} [onAnimationEnd] function to be executed when the animation ended.
         * @param {BABYLON.Animatable} [animatable] an animatable object. If not provided a new one will be created from the given params.
         * @return {BABYLON.Animatable} the animatable object created for this animation
         * @see BABYLON.Animatable
         * @see http://doc.babylonjs.com/page.php?p=22081
         */
        beginAnimation(target: any, from: number, to: number, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void, animatable?: Animatable): Animatable;
        beginDirectAnimation(target: any, animations: Animation[], from: number, to: number, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void): Animatable;
        getAnimatableByTarget(target: any): Animatable;
        Animatables: Animatable[];
        /**
         * Will stop the animation of the given target
         * @param target - the target
         * @see beginAnimation
         */
        stopAnimation(target: any): void;
        private _animate();
        getViewMatrix(): Matrix;
        getProjectionMatrix(): Matrix;
        getTransformMatrix(): Matrix;
        setTransformMatrix(view: Matrix, projection: Matrix): void;
        addMesh(newMesh: AbstractMesh): void;
        removeMesh(toRemove: AbstractMesh): number;
        removeSkeleton(toRemove: Skeleton): number;
        removeLight(toRemove: Light): number;
        removeCamera(toRemove: Camera): number;
        addLight(newLight: Light): void;
        addCamera(newCamera: Camera): void;
        /**
         * Switch active camera
         * @param {Camera} newCamera - new active camera
         * @param {boolean} attachControl - call attachControl for the new active camera (default: true)
         */
        swithActiveCamera(newCamera: Camera, attachControl?: boolean): void;
        /**
         * sets the active camera of the scene using its ID
         * @param {string} id - the camera's ID
         * @return {BABYLON.Camera|null} the new active camera or null if none found.
         * @see activeCamera
         */
        setActiveCameraByID(id: string): Camera;
        /**
         * sets the active camera of the scene using its name
         * @param {string} name - the camera's name
         * @return {BABYLON.Camera|null} the new active camera or null if none found.
         * @see activeCamera
         */
        setActiveCameraByName(name: string): Camera;
        /**
         * get a material using its id
         * @param {string} the material's ID
         * @return {BABYLON.Material|null} the material or null if none found.
         */
        getMaterialByID(id: string): Material;
        /**
         * get a material using its name
         * @param {string} the material's name
         * @return {BABYLON.Material|null} the material or null if none found.
         */
        getMaterialByName(name: string): Material;
        getLensFlareSystemByName(name: string): LensFlareSystem;
        getLensFlareSystemByID(id: string): LensFlareSystem;
        getCameraByID(id: string): Camera;
        getCameraByUniqueID(uniqueId: number): Camera;
        /**
         * get a camera using its name
         * @param {string} the camera's name
         * @return {BABYLON.Camera|null} the camera or null if none found.
         */
        getCameraByName(name: string): Camera;
        /**
         * get a bone using its id
         * @param {string} the bone's id
         * @return {BABYLON.Bone|null} the bone or null if not found
         */
        getBoneByID(id: string): Bone;
        /**
        * get a bone using its id
        * @param {string} the bone's name
        * @return {BABYLON.Bone|null} the bone or null if not found
        */
        getBoneByName(name: string): Bone;
        /**
         * get a light node using its name
         * @param {string} the light's name
         * @return {BABYLON.Light|null} the light or null if none found.
         */
        getLightByName(name: string): Light;
        /**
         * get a light node using its ID
         * @param {string} the light's id
         * @return {BABYLON.Light|null} the light or null if none found.
         */
        getLightByID(id: string): Light;
        /**
         * get a light node using its scene-generated unique ID
         * @param {number} the light's unique id
         * @return {BABYLON.Light|null} the light or null if none found.
         */
        getLightByUniqueID(uniqueId: number): Light;
        /**
         * get a particle system by id
         * @param id {number} the particle system id
         * @return {BABYLON.ParticleSystem|null} the corresponding system or null if none found.
         */
        getParticleSystemByID(id: string): ParticleSystem;
        /**
         * get a geometry using its ID
         * @param {string} the geometry's id
         * @return {BABYLON.Geometry|null} the geometry or null if none found.
         */
        getGeometryByID(id: string): Geometry;
        /**
         * add a new geometry to this scene.
         * @param {BABYLON.Geometry} geometry - the geometry to be added to the scene.
         * @param {boolean} [force] - force addition, even if a geometry with this ID already exists
         * @return {boolean} was the geometry added or not
         */
        pushGeometry(geometry: Geometry, force?: boolean): boolean;
        /**
         * Removes an existing geometry
         * @param {BABYLON.Geometry} geometry - the geometry to be removed from the scene.
         * @return {boolean} was the geometry removed or not
         */
        removeGeometry(geometry: Geometry): boolean;
        getGeometries(): Geometry[];
        /**
         * Get the first added mesh found of a given ID
         * @param {string} id - the id to search for
         * @return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.
         */
        getMeshByID(id: string): AbstractMesh;
        getMeshesByID(id: string): Array<AbstractMesh>;
        /**
         * Get a mesh with its auto-generated unique id
         * @param {number} uniqueId - the unique id to search for
         * @return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.
         */
        getMeshByUniqueID(uniqueId: number): AbstractMesh;
        /**
         * Get a the last added mesh found of a given ID
         * @param {string} id - the id to search for
         * @return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.
         */
        getLastMeshByID(id: string): AbstractMesh;
        /**
         * Get a the last added node (Mesh, Camera, Light) found of a given ID
         * @param {string} id - the id to search for
         * @return {BABYLON.Node|null} the node found or null if not found at all.
         */
        getLastEntryByID(id: string): Node;
        getNodeByID(id: string): Node;
        getNodeByName(name: string): Node;
        getMeshByName(name: string): AbstractMesh;
        getSoundByName(name: string): Sound;
        getLastSkeletonByID(id: string): Skeleton;
        getSkeletonById(id: string): Skeleton;
        getSkeletonByName(name: string): Skeleton;
        isActiveMesh(mesh: Mesh): boolean;
        private _evaluateSubMesh(subMesh, mesh);
        _isInIntermediateRendering(): boolean;
        private _evaluateActiveMeshes();
        private _activeMesh(mesh);
        updateTransformMatrix(force?: boolean): void;
        private _renderForCamera(camera);
        private _processSubCameras(camera);
        private _checkIntersections();
        render(): void;
        private _updateAudioParameters();
        audioEnabled: boolean;
        private _disableAudio();
        private _enableAudio();
        headphone: boolean;
        private _switchAudioModeForHeadphones();
        private _switchAudioModeForNormalSpeakers();
        enableDepthRenderer(): DepthRenderer;
        disableDepthRenderer(): void;
        freezeMaterials(): void;
        unfreezeMaterials(): void;
        dispose(): void;
        disposeSounds(): void;
        getWorldExtends(): {
            min: Vector3;
            max: Vector3;
        };
        createOrUpdateSelectionOctree(maxCapacity?: number, maxDepth?: number): Octree<AbstractMesh>;
        createPickingRay(x: number, y: number, world: Matrix, camera: Camera, cameraViewSpace?: boolean): Ray;
        createPickingRayInCameraSpace(x: number, y: number, camera: Camera): Ray;
        private _internalPick(rayFunction, predicate, fastCheck?);
        private _internalPickSprites(ray, predicate?, fastCheck?, camera?);
        pick(x: number, y: number, predicate?: (mesh: AbstractMesh) => boolean, fastCheck?: boolean, camera?: Camera): PickingInfo;
        pickSprite(x: number, y: number, predicate?: (sprite: Sprite) => boolean, fastCheck?: boolean, camera?: Camera): PickingInfo;
        pickWithRay(ray: Ray, predicate: (mesh: Mesh) => boolean, fastCheck?: boolean): PickingInfo;
        setPointerOverMesh(mesh: AbstractMesh): void;
        getPointerOverMesh(): AbstractMesh;
        setPointerOverSprite(sprite: Sprite): void;
        getPointerOverSprite(): Sprite;
        getPhysicsEngine(): PhysicsEngine;
        /**
         * Enables physics to the current scene
         * @param {BABYLON.Vector3} [gravity] - the scene's gravity for the physics engine
         * @param {BABYLON.IPhysicsEnginePlugin} [plugin] - The physics engine to be used. defaults to OimoJS.
         * @return {boolean} was the physics engine initialized
         */
        enablePhysics(gravity?: Vector3, plugin?: IPhysicsEnginePlugin): boolean;
        disablePhysicsEngine(): void;
        isPhysicsEnabled(): boolean;
        /**
         *
         * Sets the gravity of the physics engine (and NOT of the scene)
         * @param {BABYLON.Vector3} [gravity] - the new gravity to be used
         */
        setGravity(gravity: Vector3): void;
        /**
         * Legacy support, using the new API
         * @Deprecated
         */
        createCompoundImpostor(parts: any, options: PhysicsImpostorParameters): any;
        deleteCompoundImpostor(compound: any): void;
        createDefaultCameraOrLight(): void;
        private _getByTags(list, tagsQuery, forEach?);
        getMeshesByTags(tagsQuery: string, forEach?: (mesh: AbstractMesh) => void): Mesh[];
        getCamerasByTags(tagsQuery: string, forEach?: (camera: Camera) => void): Camera[];
        getLightsByTags(tagsQuery: string, forEach?: (light: Light) => void): Light[];
        getMaterialByTags(tagsQuery: string, forEach?: (material: Material) => void): Material[];
    }
}

declare module BABYLON {
    class Action {
        triggerOptions: any;
        trigger: number;
        _actionManager: ActionManager;
        private _nextActiveAction;
        private _child;
        private _condition;
        private _triggerParameter;
        constructor(triggerOptions: any, condition?: Condition);
        _prepare(): void;
        getTriggerParameter(): any;
        _executeCurrent(evt: ActionEvent): void;
        execute(evt: ActionEvent): void;
        skipToNextActiveAction(): void;
        then(action: Action): Action;
        _getProperty(propertyPath: string): string;
        _getEffectiveTarget(target: any, propertyPath: string): any;
        serialize(parent: any): any;
        protected _serialize(serializedAction: any, parent?: any): any;
        static _SerializeValueAsString: (value: any) => string;
        static _GetTargetProperty: (target: Scene | Node) => {
            name: string;
            targetType: string;
            value: string;
        };
    }
}

declare module BABYLON {
    /**
     * ActionEvent is the event beint sent when an action is triggered.
     */
    class ActionEvent {
        source: any;
        pointerX: number;
        pointerY: number;
        meshUnderPointer: AbstractMesh;
        sourceEvent: any;
        additionalData: any;
        /**
         * @constructor
         * @param source The mesh or sprite that triggered the action.
         * @param pointerX The X mouse cursor position at the time of the event
         * @param pointerY The Y mouse cursor position at the time of the event
         * @param meshUnderPointer The mesh that is currently pointed at (can be null)
         * @param sourceEvent the original (browser) event that triggered the ActionEvent
         */
        constructor(source: any, pointerX: number, pointerY: number, meshUnderPointer: AbstractMesh, sourceEvent?: any, additionalData?: any);
        /**
         * Helper function to auto-create an ActionEvent from a source mesh.
         * @param source The source mesh that triggered the event
         * @param evt {Event} The original (browser) event
         */
        static CreateNew(source: AbstractMesh, evt?: Event, additionalData?: any): ActionEvent;
        /**
         * Helper function to auto-create an ActionEvent from a source mesh.
         * @param source The source sprite that triggered the event
         * @param scene Scene associated with the sprite
         * @param evt {Event} The original (browser) event
         */
        static CreateNewFromSprite(source: Sprite, scene: Scene, evt?: Event, additionalData?: any): ActionEvent;
        /**
         * Helper function to auto-create an ActionEvent from a scene. If triggered by a mesh use ActionEvent.CreateNew
         * @param scene the scene where the event occurred
         * @param evt {Event} The original (browser) event
         */
        static CreateNewFromScene(scene: Scene, evt: Event): ActionEvent;
        static CreateNewFromPrimitive(prim: any, pointerPos: Vector2, evt?: Event, additionalData?: any): ActionEvent;
    }
    /**
     * Action Manager manages all events to be triggered on a given mesh or the global scene.
     * A single scene can have many Action Managers to handle predefined actions on specific meshes.
     */
    class ActionManager {
        private static _NothingTrigger;
        private static _OnPickTrigger;
        private static _OnLeftPickTrigger;
        private static _OnRightPickTrigger;
        private static _OnCenterPickTrigger;
        private static _OnPickDownTrigger;
        private static _OnPickUpTrigger;
        private static _OnLongPressTrigger;
        private static _OnPointerOverTrigger;
        private static _OnPointerOutTrigger;
        private static _OnEveryFrameTrigger;
        private static _OnIntersectionEnterTrigger;
        private static _OnIntersectionExitTrigger;
        private static _OnKeyDownTrigger;
        private static _OnKeyUpTrigger;
        private static _OnPickOutTrigger;
        static NothingTrigger: number;
        static OnPickTrigger: number;
        static OnLeftPickTrigger: number;
        static OnRightPickTrigger: number;
        static OnCenterPickTrigger: number;
        static OnPickDownTrigger: number;
        static OnPickUpTrigger: number;
        static OnPickOutTrigger: number;
        static OnLongPressTrigger: number;
        static OnPointerOverTrigger: number;
        static OnPointerOutTrigger: number;
        static OnEveryFrameTrigger: number;
        static OnIntersectionEnterTrigger: number;
        static OnIntersectionExitTrigger: number;
        static OnKeyDownTrigger: number;
        static OnKeyUpTrigger: number;
        static DragMovementThreshold: number;
        static LongPressDelay: number;
        actions: Action[];
        private _scene;
        constructor(scene: Scene);
        dispose(): void;
        getScene(): Scene;
        /**
         * Does this action manager handles actions of any of the given triggers
         * @param {number[]} triggers - the triggers to be tested
         * @return {boolean} whether one (or more) of the triggers is handeled
         */
        hasSpecificTriggers(triggers: number[]): boolean;
        /**
         * Does this action manager handles actions of a given trigger
         * @param {number} trigger - the trigger to be tested
         * @return {boolean} whether the trigger is handeled
         */
        hasSpecificTrigger(trigger: number): boolean;
        /**
         * Does this action manager has pointer triggers
         * @return {boolean} whether or not it has pointer triggers
         */
        hasPointerTriggers: boolean;
        /**
         * Does this action manager has pick triggers
         * @return {boolean} whether or not it has pick triggers
         */
        hasPickTriggers: boolean;
        /**
         * Registers an action to this action manager
         * @param {BABYLON.Action} action - the action to be registered
         * @return {BABYLON.Action} the action amended (prepared) after registration
         */
        registerAction(action: Action): Action;
        /**
         * Process a specific trigger
         * @param {number} trigger - the trigger to process
         * @param evt {BABYLON.ActionEvent} the event details to be processed
         */
        processTrigger(trigger: number, evt: ActionEvent): void;
        _getEffectiveTarget(target: any, propertyPath: string): any;
        _getProperty(propertyPath: string): string;
        serialize(name: string): any;
        static Parse(parsedActions: any, object: AbstractMesh, scene: Scene): void;
        static GetTriggerName(trigger: number): string;
    }
}

declare module BABYLON {
    class Condition {
        _actionManager: ActionManager;
        _evaluationId: number;
        _currentResult: boolean;
        constructor(actionManager: ActionManager);
        isValid(): boolean;
        _getProperty(propertyPath: string): string;
        _getEffectiveTarget(target: any, propertyPath: string): any;
        serialize(): any;
        protected _serialize(serializedCondition: any): any;
    }
    class ValueCondition extends Condition {
        propertyPath: string;
        value: any;
        operator: number;
        private static _IsEqual;
        private static _IsDifferent;
        private static _IsGreater;
        private static _IsLesser;
        static IsEqual: number;
        static IsDifferent: number;
        static IsGreater: number;
        static IsLesser: number;
        _actionManager: ActionManager;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(actionManager: ActionManager, target: any, propertyPath: string, value: any, operator?: number);
        isValid(): boolean;
        serialize(): any;
        static GetOperatorName(operator: number): string;
    }
    class PredicateCondition extends Condition {
        predicate: () => boolean;
        _actionManager: ActionManager;
        constructor(actionManager: ActionManager, predicate: () => boolean);
        isValid(): boolean;
    }
    class StateCondition extends Condition {
        value: string;
        _actionManager: ActionManager;
        private _target;
        constructor(actionManager: ActionManager, target: any, value: string);
        isValid(): boolean;
        serialize(): any;
    }
}

declare module BABYLON {
    class SwitchBooleanAction extends Action {
        propertyPath: string;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class SetStateAction extends Action {
        value: string;
        private _target;
        constructor(triggerOptions: any, target: any, value: string, condition?: Condition);
        execute(): void;
        serialize(parent: any): any;
    }
    class SetValueAction extends Action {
        propertyPath: string;
        value: any;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, value: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class IncrementValueAction extends Action {
        propertyPath: string;
        value: any;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, value: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class PlayAnimationAction extends Action {
        from: number;
        to: number;
        loop: boolean;
        private _target;
        constructor(triggerOptions: any, target: any, from: number, to: number, loop?: boolean, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class StopAnimationAction extends Action {
        private _target;
        constructor(triggerOptions: any, target: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class DoNothingAction extends Action {
        constructor(triggerOptions?: any, condition?: Condition);
        execute(): void;
        serialize(parent: any): any;
    }
    class CombineAction extends Action {
        children: Action[];
        constructor(triggerOptions: any, children: Action[], condition?: Condition);
        _prepare(): void;
        execute(evt: ActionEvent): void;
        serialize(parent: any): any;
    }
    class ExecuteCodeAction extends Action {
        func: (evt: ActionEvent) => void;
        constructor(triggerOptions: any, func: (evt: ActionEvent) => void, condition?: Condition);
        execute(evt: ActionEvent): void;
    }
    class SetParentAction extends Action {
        private _parent;
        private _target;
        constructor(triggerOptions: any, target: any, parent: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class PlaySoundAction extends Action {
        private _sound;
        constructor(triggerOptions: any, sound: Sound, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class StopSoundAction extends Action {
        private _sound;
        constructor(triggerOptions: any, sound: Sound, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
}

declare module BABYLON {
    class InterpolateValueAction extends Action {
        propertyPath: string;
        value: any;
        duration: number;
        stopOtherAnimations: boolean;
        onInterpolationDone: () => void;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, value: any, duration?: number, condition?: Condition, stopOtherAnimations?: boolean, onInterpolationDone?: () => void);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
}

declare module BABYLON {
    class Animatable {
        target: any;
        fromFrame: number;
        toFrame: number;
        loopAnimation: boolean;
        speedRatio: number;
        onAnimationEnd: any;
        private _localDelayOffset;
        private _pausedDelay;
        private _animations;
        private _paused;
        private _scene;
        animationStarted: boolean;
        constructor(scene: Scene, target: any, fromFrame?: number, toFrame?: number, loopAnimation?: boolean, speedRatio?: number, onAnimationEnd?: any, animations?: any);
        getAnimations(): Animation[];
        appendAnimations(target: any, animations: Animation[]): void;
        getAnimationByTargetProperty(property: string): Animation;
        reset(): void;
        enableBlending(blendingSpeed: number): void;
        disableBlending(): void;
        goToFrame(frame: number): void;
        pause(): void;
        restart(): void;
        stop(): void;
        _animate(delay: number): boolean;
    }
}

declare module BABYLON {
    class AnimationRange {
        name: string;
        from: number;
        to: number;
        constructor(name: string, from: number, to: number);
        clone(): AnimationRange;
    }
    /**
     * Composed of a frame, and an action function
     */
    class AnimationEvent {
        frame: number;
        action: () => void;
        onlyOnce: boolean;
        isDone: boolean;
        constructor(frame: number, action: () => void, onlyOnce?: boolean);
    }
    class PathCursor {
        private path;
        private _onchange;
        value: number;
        animations: Animation[];
        constructor(path: Path2);
        getPoint(): Vector3;
        moveAhead(step?: number): PathCursor;
        moveBack(step?: number): PathCursor;
        move(step: number): PathCursor;
        private ensureLimits();
        private markAsDirty(propertyName);
        private raiseOnChange();
        onchange(f: (cursor: PathCursor) => void): PathCursor;
    }
    class Animation {
        name: string;
        targetProperty: string;
        framePerSecond: number;
        dataType: number;
        loopMode: number;
        enableBlending: boolean;
        private _keys;
        private _offsetsCache;
        private _highLimitsCache;
        private _stopped;
        _target: any;
        private _blendingFactor;
        private _easingFunction;
        private _events;
        targetPropertyPath: string[];
        currentFrame: number;
        allowMatricesInterpolation: boolean;
        blendingSpeed: number;
        private _originalBlendValue;
        private _ranges;
        static _PrepareAnimation(name: string, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction): Animation;
        static CreateAndStartAnimation(name: string, node: Node, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction, onAnimationEnd?: () => void): Animatable;
        static CreateMergeAndStartAnimation(name: string, node: Node, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction, onAnimationEnd?: () => void): Animatable;
        constructor(name: string, targetProperty: string, framePerSecond: number, dataType: number, loopMode?: number, enableBlending?: boolean);
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        /**
         * Add an event to this animation.
         */
        addEvent(event: AnimationEvent): void;
        /**
         * Remove all events found at the given frame
         * @param frame
         */
        removeEvents(frame: number): void;
        createRange(name: string, from: number, to: number): void;
        deleteRange(name: string, deleteFrames?: boolean): void;
        getRange(name: string): AnimationRange;
        reset(): void;
        isStopped(): boolean;
        getKeys(): any[];
        getHighestFrame(): number;
        getEasingFunction(): IEasingFunction;
        setEasingFunction(easingFunction: EasingFunction): void;
        floatInterpolateFunction(startValue: number, endValue: number, gradient: number): number;
        quaternionInterpolateFunction(startValue: Quaternion, endValue: Quaternion, gradient: number): Quaternion;
        vector3InterpolateFunction(startValue: Vector3, endValue: Vector3, gradient: number): Vector3;
        vector2InterpolateFunction(startValue: Vector2, endValue: Vector2, gradient: number): Vector2;
        sizeInterpolateFunction(startValue: Size, endValue: Size, gradient: number): Size;
        color3InterpolateFunction(startValue: Color3, endValue: Color3, gradient: number): Color3;
        matrixInterpolateFunction(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
        clone(): Animation;
        setKeys(values: Array<any>): void;
        private _getKeyValue(value);
        private _interpolate(currentFrame, repeatCount, loopMode, offsetValue?, highLimitValue?);
        setValue(currentValue: any, blend?: boolean): void;
        goToFrame(frame: number): void;
        animate(delay: number, from: number, to: number, loop: boolean, speedRatio: number, blend?: boolean): boolean;
        serialize(): any;
        private static _ANIMATIONTYPE_FLOAT;
        private static _ANIMATIONTYPE_VECTOR3;
        private static _ANIMATIONTYPE_QUATERNION;
        private static _ANIMATIONTYPE_MATRIX;
        private static _ANIMATIONTYPE_COLOR3;
        private static _ANIMATIONTYPE_VECTOR2;
        private static _ANIMATIONTYPE_SIZE;
        private static _ANIMATIONLOOPMODE_RELATIVE;
        private static _ANIMATIONLOOPMODE_CYCLE;
        private static _ANIMATIONLOOPMODE_CONSTANT;
        static ANIMATIONTYPE_FLOAT: number;
        static ANIMATIONTYPE_VECTOR3: number;
        static ANIMATIONTYPE_VECTOR2: number;
        static ANIMATIONTYPE_SIZE: number;
        static ANIMATIONTYPE_QUATERNION: number;
        static ANIMATIONTYPE_MATRIX: number;
        static ANIMATIONTYPE_COLOR3: number;
        static ANIMATIONLOOPMODE_RELATIVE: number;
        static ANIMATIONLOOPMODE_CYCLE: number;
        static ANIMATIONLOOPMODE_CONSTANT: number;
        static Parse(parsedAnimation: any): Animation;
        static AppendSerializedAnimations(source: IAnimatable, destination: any): any;
    }
}

declare module BABYLON {
    interface IEasingFunction {
        ease(gradient: number): number;
    }
    class EasingFunction implements IEasingFunction {
        private static _EASINGMODE_EASEIN;
        private static _EASINGMODE_EASEOUT;
        private static _EASINGMODE_EASEINOUT;
        static EASINGMODE_EASEIN: number;
        static EASINGMODE_EASEOUT: number;
        static EASINGMODE_EASEINOUT: number;
        private _easingMode;
        setEasingMode(easingMode: number): void;
        getEasingMode(): number;
        easeInCore(gradient: number): number;
        ease(gradient: number): number;
    }
    class CircleEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class BackEase extends EasingFunction implements IEasingFunction {
        amplitude: number;
        constructor(amplitude?: number);
        easeInCore(gradient: number): number;
    }
    class BounceEase extends EasingFunction implements IEasingFunction {
        bounces: number;
        bounciness: number;
        constructor(bounces?: number, bounciness?: number);
        easeInCore(gradient: number): number;
    }
    class CubicEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class ElasticEase extends EasingFunction implements IEasingFunction {
        oscillations: number;
        springiness: number;
        constructor(oscillations?: number, springiness?: number);
        easeInCore(gradient: number): number;
    }
    class ExponentialEase extends EasingFunction implements IEasingFunction {
        exponent: number;
        constructor(exponent?: number);
        easeInCore(gradient: number): number;
    }
    class PowerEase extends EasingFunction implements IEasingFunction {
        power: number;
        constructor(power?: number);
        easeInCore(gradient: number): number;
    }
    class QuadraticEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class QuarticEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class QuinticEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class SineEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class BezierCurveEase extends EasingFunction implements IEasingFunction {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        constructor(x1?: number, y1?: number, x2?: number, y2?: number);
        easeInCore(gradient: number): number;
    }
}

declare module BABYLON {
    class Analyser {
        SMOOTHING: number;
        FFT_SIZE: number;
        BARGRAPHAMPLITUDE: number;
        DEBUGCANVASPOS: {
            x: number;
            y: number;
        };
        DEBUGCANVASSIZE: {
            width: number;
            height: number;
        };
        private _byteFreqs;
        private _byteTime;
        private _floatFreqs;
        private _webAudioAnalyser;
        private _debugCanvas;
        private _debugCanvasContext;
        private _scene;
        private _registerFunc;
        private _audioEngine;
        constructor(scene: Scene);
        getFrequencyBinCount(): number;
        getByteFrequencyData(): Uint8Array;
        getByteTimeDomainData(): Uint8Array;
        getFloatFrequencyData(): Uint8Array;
        drawDebugCanvas(): void;
        stopDebugCanvas(): void;
        connectAudioNodes(inputAudioNode: AudioNode, outputAudioNode: AudioNode): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class AudioEngine {
        private _audioContext;
        private _audioContextInitialized;
        canUseWebAudio: boolean;
        masterGain: GainNode;
        private _connectedAnalyser;
        WarnedWebAudioUnsupported: boolean;
        unlocked: boolean;
        onAudioUnlocked: () => any;
        audioContext: AudioContext;
        constructor();
        private _unlockiOSaudio();
        private _initializeAudioContext();
        dispose(): void;
        getGlobalVolume(): number;
        setGlobalVolume(newVolume: number): void;
        connectToAnalyser(analyser: Analyser): void;
    }
}

declare module BABYLON {
    class Sound {
        name: string;
        autoplay: boolean;
        loop: boolean;
        useCustomAttenuation: boolean;
        soundTrackId: number;
        spatialSound: boolean;
        refDistance: number;
        rolloffFactor: number;
        maxDistance: number;
        distanceModel: string;
        private _panningModel;
        onended: () => any;
        private _playbackRate;
        private _streaming;
        private _startTime;
        private _startOffset;
        private _position;
        private _localDirection;
        private _volume;
        private _isLoaded;
        private _isReadyToPlay;
        isPlaying: boolean;
        isPaused: boolean;
        private _isDirectional;
        private _readyToPlayCallback;
        private _audioBuffer;
        private _soundSource;
        private _streamingSource;
        private _soundPanner;
        private _soundGain;
        private _inputAudioNode;
        private _ouputAudioNode;
        private _coneInnerAngle;
        private _coneOuterAngle;
        private _coneOuterGain;
        private _scene;
        private _connectedMesh;
        private _customAttenuationFunction;
        private _registerFunc;
        private _isOutputConnected;
        private _htmlAudioElement;
        /**
        * Create a sound and attach it to a scene
        * @param name Name of your sound
        * @param urlOrArrayBuffer Url to the sound to load async or ArrayBuffer
        * @param readyToPlayCallback Provide a callback function if you'd like to load your code once the sound is ready to be played
        * @param options Objects to provide with the current available options: autoplay, loop, volume, spatialSound, maxDistance, rolloffFactor, refDistance, distanceModel, panningModel, streaming
        */
        constructor(name: string, urlOrArrayBuffer: any, scene: Scene, readyToPlayCallback?: () => void, options?: any);
        dispose(): void;
        private _soundLoaded(audioData);
        setAudioBuffer(audioBuffer: AudioBuffer): void;
        updateOptions(options: any): void;
        private _createSpatialParameters();
        private _updateSpatialParameters();
        switchPanningModelToHRTF(): void;
        switchPanningModelToEqualPower(): void;
        private _switchPanningModel();
        connectToSoundTrackAudioNode(soundTrackAudioNode: AudioNode): void;
        /**
        * Transform this sound into a directional source
        * @param coneInnerAngle Size of the inner cone in degree
        * @param coneOuterAngle Size of the outer cone in degree
        * @param coneOuterGain Volume of the sound outside the outer cone (between 0.0 and 1.0)
        */
        setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): void;
        setPosition(newPosition: Vector3): void;
        setLocalDirectionToMesh(newLocalDirection: Vector3): void;
        private _updateDirection();
        updateDistanceFromListener(): void;
        setAttenuationFunction(callback: (currentVolume: number, currentDistance: number, maxDistance: number, refDistance: number, rolloffFactor: number) => number): void;
        /**
        * Play the sound
        * @param time (optional) Start the sound after X seconds. Start immediately (0) by default.
        */
        play(time?: number): void;
        private _onended();
        /**
        * Stop the sound
        * @param time (optional) Stop the sound after X seconds. Stop immediately (0) by default.
        */
        stop(time?: number): void;
        pause(): void;
        setVolume(newVolume: number, time?: number): void;
        setPlaybackRate(newPlaybackRate: number): void;
        getVolume(): number;
        attachToMesh(meshToConnectTo: AbstractMesh): void;
        detachFromMesh(): void;
        private _onRegisterAfterWorldMatrixUpdate(connectedMesh);
        clone(): Sound;
        getAudioBuffer(): AudioBuffer;
        static Parse(parsedSound: any, scene: Scene, rootUrl: string, sourceSound?: Sound): Sound;
    }
}

declare module BABYLON {
    class SoundTrack {
        private _outputAudioNode;
        private _inputAudioNode;
        private _trackConvolver;
        private _scene;
        id: number;
        soundCollection: Array<Sound>;
        private _isMainTrack;
        private _connectedAnalyser;
        private _options;
        private _isInitialized;
        constructor(scene: Scene, options?: any);
        private _initializeSoundTrackAudioGraph();
        dispose(): void;
        AddSound(sound: Sound): void;
        RemoveSound(sound: Sound): void;
        setVolume(newVolume: number): void;
        switchPanningModelToHRTF(): void;
        switchPanningModelToEqualPower(): void;
        connectToAnalyser(analyser: Analyser): void;
    }
}

declare module BABYLON {
    class Bone extends Node {
        name: string;
        children: Bone[];
        animations: Animation[];
        length: number;
        private _skeleton;
        _matrix: Matrix;
        private _restPose;
        private _baseMatrix;
        private _worldTransform;
        private _absoluteTransform;
        private _invertedAbsoluteTransform;
        private _parent;
        constructor(name: string, skeleton: Skeleton, parentBone: Bone, matrix: Matrix, restPose?: Matrix);
        getParent(): Bone;
        getLocalMatrix(): Matrix;
        getBaseMatrix(): Matrix;
        getRestPose(): Matrix;
        returnToRest(): void;
        getWorldMatrix(): Matrix;
        getInvertedAbsoluteTransform(): Matrix;
        getAbsoluteTransform(): Matrix;
        updateMatrix(matrix: Matrix): void;
        _updateDifferenceMatrix(rootMatrix?: Matrix): void;
        markAsDirty(): void;
        copyAnimationRange(source: Bone, rangeName: string, frameOffset: number, rescaleAsRequired?: boolean, skelDimensionsRatio?: Vector3): boolean;
    }
}

declare module BABYLON {
    class Skeleton {
        name: string;
        id: string;
        bones: Bone[];
        dimensionsAtRest: Vector3;
        needInitialSkinMatrix: boolean;
        private _scene;
        private _isDirty;
        private _transformMatrices;
        private _meshesWithPoseMatrix;
        private _animatables;
        private _identity;
        private _ranges;
        constructor(name: string, id: string, scene: Scene);
        getTransformMatrices(mesh: AbstractMesh): Float32Array;
        getScene(): Scene;
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        /**
        * Get bone's index searching by name
        * @param {string} name is bone's name to search for
        * @return {number} Indice of the bone. Returns -1 if not found
        */
        getBoneIndexByName(name: string): number;
        createAnimationRange(name: string, from: number, to: number): void;
        deleteAnimationRange(name: string, deleteFrames?: boolean): void;
        getAnimationRange(name: string): AnimationRange;
        /**
         *  Returns as an Array, all AnimationRanges defined on this skeleton
         */
        getAnimationRanges(): AnimationRange[];
        /**
         *  note: This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences
         */
        copyAnimationRange(source: Skeleton, name: string, rescaleAsRequired?: boolean): boolean;
        returnToRest(): void;
        private _getHighestAnimationFrame();
        beginAnimation(name: string, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void): Animatable;
        _markAsDirty(): void;
        _registerMeshWithPoseMatrix(mesh: AbstractMesh): void;
        _unregisterMeshWithPoseMatrix(mesh: AbstractMesh): void;
        _computeTransformMatrices(targetMatrix: Float32Array, initialSkinMatrix: Matrix): void;
        prepare(): void;
        getAnimatables(): IAnimatable[];
        clone(name: string, id: string): Skeleton;
        enableBlending(blendingSpeed?: number): void;
        dispose(): void;
        serialize(): any;
        static Parse(parsedSkeleton: any, scene: Scene): Skeleton;
    }
}

declare module BABYLON {
    class ArcRotateCamera extends TargetCamera {
        alpha: number;
        beta: number;
        radius: number;
        target: Vector3;
        inertialAlphaOffset: number;
        inertialBetaOffset: number;
        inertialRadiusOffset: number;
        lowerAlphaLimit: any;
        upperAlphaLimit: any;
        lowerBetaLimit: number;
        upperBetaLimit: number;
        lowerRadiusLimit: any;
        upperRadiusLimit: any;
        inertialPanningX: number;
        inertialPanningY: number;
        angularSensibilityX: number;
        angularSensibilityY: number;
        pinchPrecision: number;
        panningSensibility: number;
        keysUp: number[];
        keysDown: number[];
        keysLeft: number[];
        keysRight: number[];
        wheelPrecision: number;
        zoomOnFactor: number;
        targetScreenOffset: Vector2;
        allowUpsideDown: boolean;
        _viewMatrix: Matrix;
        _useCtrlForPanning: boolean;
        inputs: ArcRotateCameraInputsManager;
        _reset: () => void;
        panningAxis: Vector3;
        private _localDirection;
        private _transformedDirection;
        onCollide: (collidedMesh: AbstractMesh) => void;
        checkCollisions: boolean;
        collisionRadius: Vector3;
        private _collider;
        private _previousPosition;
        private _collisionVelocity;
        private _newPosition;
        private _previousAlpha;
        private _previousBeta;
        private _previousRadius;
        private _collisionTriggered;
        constructor(name: string, alpha: number, beta: number, radius: number, target: Vector3, scene: Scene);
        _initCache(): void;
        _updateCache(ignoreParentClass?: boolean): void;
        private _getTargetPosition();
        _isSynchronizedViewMatrix(): boolean;
        attachControl(element: HTMLElement, noPreventDefault?: boolean, useCtrlForPanning?: boolean): void;
        detachControl(element: HTMLElement): void;
        _checkInputs(): void;
        private _checkLimits();
        rebuildAnglesAndRadius(): void;
        setPosition(position: Vector3): void;
        setTarget(target: Vector3): void;
        _getViewMatrix(): Matrix;
        private _onCollisionPositionChange;
        zoomOn(meshes?: AbstractMesh[], doNotUpdateMaxZ?: boolean): void;
        focusOn(meshesOrMinMaxVectorAndDistance: any, doNotUpdateMaxZ?: boolean): void;
        /**
         * @override
         * Override Camera.createRigCamera
         */
        createRigCamera(name: string, cameraIndex: number): Camera;
        /**
         * @override
         * Override Camera._updateRigCameras
         */
        _updateRigCameras(): void;
        dispose(): void;
        getTypeName(): string;
    }
}

declare module BABYLON {
    class ArcRotateCameraInputsManager extends CameraInputsManager<ArcRotateCamera> {
        constructor(camera: ArcRotateCamera);
        addMouseWheel(): ArcRotateCameraInputsManager;
        addPointers(): ArcRotateCameraInputsManager;
        addKeyboard(): ArcRotateCameraInputsManager;
        addGamepad(): ArcRotateCameraInputsManager;
        addVRDeviceOrientation(): ArcRotateCameraInputsManager;
    }
}

declare module BABYLON {
    class Camera extends Node {
        inputs: CameraInputsManager<Camera>;
        private static _PERSPECTIVE_CAMERA;
        private static _ORTHOGRAPHIC_CAMERA;
        private static _FOVMODE_VERTICAL_FIXED;
        private static _FOVMODE_HORIZONTAL_FIXED;
        private static _RIG_MODE_NONE;
        private static _RIG_MODE_STEREOSCOPIC_ANAGLYPH;
        private static _RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL;
        private static _RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED;
        private static _RIG_MODE_STEREOSCOPIC_OVERUNDER;
        private static _RIG_MODE_VR;
        static PERSPECTIVE_CAMERA: number;
        static ORTHOGRAPHIC_CAMERA: number;
        static FOVMODE_VERTICAL_FIXED: number;
        static FOVMODE_HORIZONTAL_FIXED: number;
        static RIG_MODE_NONE: number;
        static RIG_MODE_STEREOSCOPIC_ANAGLYPH: number;
        static RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL: number;
        static RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED: number;
        static RIG_MODE_STEREOSCOPIC_OVERUNDER: number;
        static RIG_MODE_VR: number;
        static ForceAttachControlToAlwaysPreventDefault: boolean;
        position: Vector3;
        upVector: Vector3;
        orthoLeft: any;
        orthoRight: any;
        orthoBottom: any;
        orthoTop: any;
        fov: number;
        minZ: number;
        maxZ: number;
        inertia: number;
        mode: number;
        isIntermediate: boolean;
        viewport: Viewport;
        layerMask: number;
        fovMode: number;
        cameraRigMode: number;
        interaxialDistance: number;
        isStereoscopicSideBySide: boolean;
        _cameraRigParams: any;
        _rigCameras: Camera[];
        _rigPostProcess: PostProcess;
        private _computedViewMatrix;
        _projectionMatrix: Matrix;
        private _worldMatrix;
        _postProcesses: PostProcess[];
        _activeMeshes: SmartArray<Mesh>;
        private _globalPosition;
        constructor(name: string, position: Vector3, scene: Scene);
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        globalPosition: Vector3;
        getActiveMeshes(): SmartArray<Mesh>;
        isActiveMesh(mesh: Mesh): boolean;
        _initCache(): void;
        _updateCache(ignoreParentClass?: boolean): void;
        _updateFromScene(): void;
        _isSynchronized(): boolean;
        _isSynchronizedViewMatrix(): boolean;
        _isSynchronizedProjectionMatrix(): boolean;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        _update(): void;
        _checkInputs(): void;
        private _cascadePostProcessesToRigCams();
        attachPostProcess(postProcess: PostProcess, insertAt?: number): number;
        detachPostProcess(postProcess: PostProcess, atIndices?: any): number[];
        getWorldMatrix(): Matrix;
        _getViewMatrix(): Matrix;
        getViewMatrix(force?: boolean): Matrix;
        _computeViewMatrix(force?: boolean): Matrix;
        getProjectionMatrix(force?: boolean): Matrix;
        dispose(): void;
        setCameraRigMode(mode: number, rigParams: any): void;
        private _getVRProjectionMatrix();
        setCameraRigParameter(name: string, value: any): void;
        /**
         * needs to be overridden by children so sub has required properties to be copied
         */
        createRigCamera(name: string, cameraIndex: number): Camera;
        /**
         * May need to be overridden by children
         */
        _updateRigCameras(): void;
        _setupInputs(): void;
        serialize(): any;
        getTypeName(): string;
        clone(name: string): Camera;
        static GetConstructorFromName(type: string, name: string, scene: Scene, interaxial_distance?: number, isStereoscopicSideBySide?: boolean): () => Camera;
        static Parse(parsedCamera: any, scene: Scene): Camera;
    }
}

declare module BABYLON {
    var CameraInputTypes: {};
    interface ICameraInput<TCamera extends BABYLON.Camera> {
        camera: TCamera;
        getTypeName(): string;
        getSimpleName(): string;
        attachControl: (element: HTMLElement, noPreventDefault?: boolean) => void;
        detachControl: (element: HTMLElement) => void;
        checkInputs?: () => void;
    }
    interface CameraInputsMap<TCamera extends BABYLON.Camera> {
        [name: string]: ICameraInput<TCamera>;
        [idx: number]: ICameraInput<TCamera>;
    }
    class CameraInputsManager<TCamera extends BABYLON.Camera> {
        attached: CameraInputsMap<TCamera>;
        attachedElement: HTMLElement;
        noPreventDefault: boolean;
        camera: TCamera;
        checkInputs: () => void;
        constructor(camera: TCamera);
        add(input: ICameraInput<TCamera>): void;
        remove(inputToRemove: ICameraInput<TCamera>): void;
        removeByType(inputType: string): void;
        private _addCheckInputs(fn);
        attachInput(input: ICameraInput<TCamera>): void;
        attachElement(element: HTMLElement, noPreventDefault?: boolean): void;
        detachElement(element: HTMLElement): void;
        rebuildInputCheck(): void;
        clear(): void;
        serialize(serializedCamera: any): void;
        parse(parsedCamera: any): void;
    }
}

declare module BABYLON {
    class DeviceOrientationCamera extends FreeCamera {
        angularSensibility: number;
        moveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        getTypeName(): string;
    }
}

declare module BABYLON {
    class FollowCamera extends TargetCamera {
        radius: number;
        rotationOffset: number;
        heightOffset: number;
        cameraAcceleration: number;
        maxCameraSpeed: number;
        target: AbstractMesh;
        constructor(name: string, position: Vector3, scene: Scene, target?: AbstractMesh);
        private getRadians(degrees);
        private follow(cameraTarget);
        _checkInputs(): void;
        getTypeName(): string;
    }
    class ArcFollowCamera extends TargetCamera {
        alpha: number;
        beta: number;
        radius: number;
        target: AbstractMesh;
        private _cartesianCoordinates;
        constructor(name: string, alpha: number, beta: number, radius: number, target: AbstractMesh, scene: Scene);
        private follow();
        _checkInputs(): void;
        getTypeName(): string;
    }
}

declare module BABYLON {
    class FreeCamera extends TargetCamera {
        ellipsoid: Vector3;
        checkCollisions: boolean;
        applyGravity: boolean;
        inputs: FreeCameraInputsManager;
        angularSensibility: number;
        keysUp: number[];
        keysDown: number[];
        keysLeft: number[];
        keysRight: number[];
        onCollide: (collidedMesh: AbstractMesh) => void;
        private _collider;
        private _needMoveForGravity;
        private _oldPosition;
        private _diffPosition;
        private _newPosition;
        _localDirection: Vector3;
        _transformedDirection: Vector3;
        constructor(name: string, position: Vector3, scene: Scene);
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        _collideWithWorld(velocity: Vector3): void;
        private _onCollisionPositionChange;
        _checkInputs(): void;
        _decideIfNeedsToMove(): boolean;
        _updatePosition(): void;
        dispose(): void;
        getTypeName(): string;
    }
}

declare module BABYLON {
    class FreeCameraInputsManager extends CameraInputsManager<FreeCamera> {
        constructor(camera: FreeCamera);
        addKeyboard(): FreeCameraInputsManager;
        addMouse(touchEnabled?: boolean): FreeCameraInputsManager;
        addGamepad(): FreeCameraInputsManager;
        addDeviceOrientation(): FreeCameraInputsManager;
        addVRDeviceOrientation(): FreeCameraInputsManager;
        addTouch(): FreeCameraInputsManager;
        addVirtualJoystick(): FreeCameraInputsManager;
    }
}

declare module BABYLON {
    class GamepadCamera extends UniversalCamera {
        gamepadAngularSensibility: number;
        gamepadMoveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        getTypeName(): string;
    }
}

declare module BABYLON {
    class AnaglyphFreeCamera extends FreeCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene);
        getTypeName(): string;
    }
    class AnaglyphArcRotateCamera extends ArcRotateCamera {
        constructor(name: string, alpha: number, beta: number, radius: number, target: any, interaxialDistance: number, scene: Scene);
        getTypeName(): string;
    }
    class AnaglyphGamepadCamera extends GamepadCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene);
        getTypeName(): string;
    }
    class AnaglyphUniversalCamera extends UniversalCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene);
        getTypeName(): string;
    }
    class StereoscopicFreeCamera extends FreeCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, isStereoscopicSideBySide: boolean, scene: Scene);
        getTypeName(): string;
    }
    class StereoscopicArcRotateCamera extends ArcRotateCamera {
        constructor(name: string, alpha: number, beta: number, radius: number, target: any, interaxialDistance: number, isStereoscopicSideBySide: boolean, scene: Scene);
        getTypeName(): string;
    }
    class StereoscopicGamepadCamera extends GamepadCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, isStereoscopicSideBySide: boolean, scene: Scene);
        getTypeName(): string;
    }
    class StereoscopicUniversalCamera extends UniversalCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, isStereoscopicSideBySide: boolean, scene: Scene);
        getTypeName(): string;
    }
}

declare module BABYLON {
    class TargetCamera extends Camera {
        cameraDirection: Vector3;
        cameraRotation: Vector2;
        rotation: Vector3;
        rotationQuaternion: Quaternion;
        speed: number;
        noRotationConstraint: boolean;
        lockedTarget: any;
        _currentTarget: Vector3;
        _viewMatrix: Matrix;
        _camMatrix: Matrix;
        _cameraTransformMatrix: Matrix;
        _cameraRotationMatrix: Matrix;
        private _rigCamTransformMatrix;
        _referencePoint: Vector3;
        private _defaultUpVector;
        _transformedReferencePoint: Vector3;
        _lookAtTemp: Matrix;
        _tempMatrix: Matrix;
        _reset: () => void;
        constructor(name: string, position: Vector3, scene: Scene);
        getFrontPosition(distance: number): Vector3;
        _getLockedTargetPosition(): Vector3;
        _initCache(): void;
        _updateCache(ignoreParentClass?: boolean): void;
        _isSynchronizedViewMatrix(): boolean;
        _computeLocalCameraSpeed(): number;
        setTarget(target: Vector3): void;
        getTarget(): Vector3;
        _decideIfNeedsToMove(): boolean;
        _updatePosition(): void;
        _checkInputs(): void;
        private _updateCameraRotationMatrix();
        _getViewMatrix(): Matrix;
        /**
         * @override
         * Override Camera.createRigCamera
         */
        createRigCamera(name: string, cameraIndex: number): Camera;
        /**
         * @override
         * Override Camera._updateRigCameras
         */
        _updateRigCameras(): void;
        private _getRigCamPosition(halfSpace, result);
        getTypeName(): string;
    }
}

declare module BABYLON {
    class TouchCamera extends FreeCamera {
        touchAngularSensibility: number;
        touchMoveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        getTypeName(): string;
        _setupInputs(): void;
    }
}

declare module BABYLON {
    class UniversalCamera extends TouchCamera {
        gamepadAngularSensibility: number;
        gamepadMoveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        getTypeName(): string;
    }
}

declare module BABYLON {
    class VirtualJoysticksCamera extends FreeCamera {
        constructor(name: string, position: Vector3, scene: Scene);
    }
}

declare module BABYLON {
    class DebugLayer {
        private _scene;
        private _camera;
        private _transformationMatrix;
        private _enabled;
        private _labelsEnabled;
        private _displayStatistics;
        private _displayTree;
        private _displayLogs;
        private _globalDiv;
        private _statsDiv;
        private _statsSubsetDiv;
        private _optionsDiv;
        private _optionsSubsetDiv;
        private _logDiv;
        private _logSubsetDiv;
        private _treeDiv;
        private _treeSubsetDiv;
        private _drawingCanvas;
        private _drawingContext;
        private _rootElement;
        private _skeletonViewers;
        _syncPositions: () => void;
        private _syncData;
        private _syncUI;
        private _onCanvasClick;
        private _clickPosition;
        private _ratio;
        private _identityMatrix;
        private _showUI;
        private _needToRefreshMeshesTree;
        shouldDisplayLabel: (node: Node) => boolean;
        shouldDisplayAxis: (mesh: Mesh) => boolean;
        axisRatio: number;
        accentColor: string;
        customStatsFunction: () => string;
        constructor(scene: Scene);
        private _refreshMeshesTreeContent();
        private _renderSingleAxis(zero, unit, unitText, label, color);
        private _renderAxis(projectedPosition, mesh, globalViewport);
        private _renderLabel(text, projectedPosition, labelOffset, onClick, getFillStyle);
        private _isClickInsideRect(x, y, width, height);
        isVisible(): boolean;
        hide(): void;
        private _clearSkeletonViewers();
        show(showUI?: boolean, camera?: Camera, rootElement?: HTMLElement): void;
        private _clearLabels();
        private _generateheader(root, text);
        private _generateTexBox(root, title, color);
        private _generateAdvancedCheckBox(root, leftTitle, rightTitle, initialState, task, tag?);
        private _generateCheckBox(root, title, initialState, task, tag?);
        private _generateButton(root, title, task, tag?);
        private _generateRadio(root, title, name, initialState, task, tag?);
        private _generateDOMelements();
        private _displayStats();
    }
}

declare module BABYLON.Debug {
    /**
    * Demo available here: http://www.babylonjs-playground.com/#1BZJVJ#8
    */
    class SkeletonViewer {
        skeleton: Skeleton;
        mesh: AbstractMesh;
        autoUpdateBonesMatrices: boolean;
        renderingGroupId: number;
        color: Color3;
        private _scene;
        private _debugLines;
        private _debugMesh;
        private _isEnabled;
        private _renderFunction;
        constructor(skeleton: Skeleton, mesh: AbstractMesh, scene: Scene, autoUpdateBonesMatrices?: boolean, renderingGroupId?: number);
        isEnabled: boolean;
        private _getBonePosition(position, bone, meshMat, x?, y?, z?);
        private _getLinesForBonesWithLength(bones, meshMat);
        private _getLinesForBonesNoLength(bones, meshMat);
        update(): void;
        private _updateBoneMatrix(bone);
        dispose(): void;
    }
}

declare module BABYLON {
    /**
     * Stores 2D Bounding Information.
     * This class handles a circle area and a bounding rectangle one.
     */
    class BoundingInfo2D {
        /**
         * The coordinate of the center of the bounding info
         */
        center: Vector2;
        /**
         * The radius of the bounding circle, from the center of the bounded object
         */
        radius: number;
        /**
         * The extent of the bounding rectangle, from the center of the bounded object.
         * This is an absolute value in both X and Y of the vector which describe the right/top corner of the rectangle, you can easily reconstruct the whole rectangle by negating X &| Y.
         */
        extent: Vector2;
        constructor();
        /**
         * Create a BoundingInfo2D object from a given size
         * @param size the size that will be used to set the extend, radius will be computed from it.
         */
        static CreateFromSize(size: Size): BoundingInfo2D;
        /**
         * Create a BoundingInfo2D object from a given radius
         * @param radius the radius to use, the extent will be computed from it.
         */
        static CreateFromRadius(radius: number): BoundingInfo2D;
        /**
         * Create a BoundingInfo2D object from a list of points.
         * The resulted object will be the smallest bounding area that includes all the given points.
         * @param points an array of points to compute the bounding object from.
         */
        static CreateFromPoints(points: Vector2[]): BoundingInfo2D;
        /**
         * Update a BoundingInfo2D object using the given Size as input
         * @param size the bounding data will be computed from this size.
         * @param b must be a valid/allocated object, it will contain the result of the operation
         */
        static CreateFromSizeToRef(size: Size, b: BoundingInfo2D): void;
        /**
         * Update a BoundingInfo2D object using the given radius as input
         * @param radius the bounding data will be computed from this radius
         * @param b must be a valid/allocated object, it will contain the result of the operation
         */
        static CreateFromRadiusToRef(radius: number, b: BoundingInfo2D): void;
        /**
         * Update a BoundingInfo2D object using the given points array as input
         * @param points the point array to use to update the bounding data
         * @param b must be a valid/allocated object, it will contain the result of the operation
         */
        static CreateFromPointsToRef(points: Vector2[], b: BoundingInfo2D): void;
        /**
         * Update a BoundingInfo2D object using the given min/max values as input
         * @param xmin the smallest x coordinate
         * @param xmax the biggest x coordinate
         * @param ymin the smallest y coordinate
         * @param ymax the buggest y coordinate
         * @param b must be a valid/allocated object, it will contain the result of the operation
         */
        static CreateFromMinMaxToRef(xmin: number, xmax: number, ymin: number, ymax: number, b: BoundingInfo2D): void;
        /**
         * Duplicate this instance and return a new one
         * @return the duplicated instance
         */
        clone(): BoundingInfo2D;
        /**
         * return the max extend of the bounding info
         */
        max(): Vector2;
        /**
         * Update a vector2 with the max extend of the bounding info
         * @param result must be a valid/allocated vector2 that will contain the result of the operation
         */
        maxToRef(result: Vector2): void;
        /**
         * Apply a transformation matrix to this BoundingInfo2D and return a new instance containing the result
         * @param matrix the transformation matrix to apply
         * @return the new instance containing the result of the transformation applied on this BoundingInfo2D
         */
        transform(matrix: Matrix): BoundingInfo2D;
        /**
         * Compute the union of this BoundingInfo2D with a given one, returns a new BoundingInfo2D as a result
         * @param other the second BoundingInfo2D to compute the union with this one
         * @return a new instance containing the result of the union
         */
        union(other: BoundingInfo2D): BoundingInfo2D;
        private static _transform;
        /**
         * Transform this BoundingInfo2D with a given matrix and store the result in an existing BoundingInfo2D instance.
         * This is a GC friendly version, try to use it as much as possible, specially if your transformation is inside a loop, allocate the result object once for good outside of the loop and use it every time.
         * @param matrix The matrix to use to compute the transformation
         * @param result A VALID (i.e. allocated) BoundingInfo2D object where the result will be stored
         */
        transformToRef(matrix: Matrix, result: BoundingInfo2D): void;
        /**
         * Compute the union of this BoundingInfo2D with another one and store the result in a third valid BoundingInfo2D object
         * This is a GC friendly version, try to use it as much as possible, specially if your transformation is inside a loop, allocate the result object once for good outside of the loop and use it every time.
         * @param other the second object used to compute the union
         * @param result a VALID BoundingInfo2D instance (i.e. allocated) where the result will be stored
         */
        unionToRef(other: BoundingInfo2D, result: BoundingInfo2D): void;
        /**
         * Check if the given point is inside the BoundingInfo.
         * The test is first made on the radius, then inside the rectangle described by the extent
         * @param pickPosition the position to test
         * @return true if the point is inside, false otherwise
         */
        doesIntersect(pickPosition: Vector2): boolean;
    }
}

declare module BABYLON {
    /**
     * This interface is used to implement a lockable instance pattern.
     * Classes that implements it may be locked at any time, making their content immutable from now on.
     * You also can query if a given instance is locked or not.
     * This allow instances to be shared among several 'consumers'.
     */
    interface ILockable {
        /**
         * Query the lock state
         * @returns returns true if the object is locked and immutable, false if it's not
         */
        isLocked(): boolean;
        /**
         * A call to this method will definitely lock the instance, making its content immutable
         * @returns the previous lock state of the object. so if true is returned the object  were already locked and this method does nothing, if false is returned it means the object wasn't locked and this call locked it for good.
         */
        lock(): boolean;
    }
    /**
     * This interface defines the IBrush2D contract.
     * Classes implementing a new type of Brush2D must implement this interface
     */
    interface IBrush2D extends ILockable {
        /**
         * Define if the brush will use transparency / alpha blending
         * @returns true if the brush use transparency
         */
        isTransparent(): boolean;
        /**
         * It is critical for each instance of a given Brush2D type to return a unique string that identifies it because the Border instance will certainly be part of the computed ModelKey for a given Primitive
         * @returns A string identifier that uniquely identify the instance
         */
        toString(): string;
    }
    /**
     * Base class implementing the ILocable interface.
     * The particularity of this class is to call the protected onLock() method when the instance is about to be locked for good.
     */
    class LockableBase implements ILockable {
        isLocked(): boolean;
        private _isLocked;
        lock(): boolean;
        /**
         * Protected handler that will be called when the instance is about to be locked.
         */
        protected onLock(): void;
    }
    class SolidColorBrush2D extends LockableBase implements IBrush2D {
        constructor(color: Color4, lock?: boolean);
        /**
         * Return true if the brush is transparent, false if it's totally opaque
         */
        isTransparent(): boolean;
        /**
         * The color used by this instance to render
         * @returns the color object. Note that it's not a clone of the actual object stored in the instance so you MUST NOT modify it, otherwise unexpected behavior might occurs.
         */
        color: Color4;
        /**
         * Return a unique identifier of the instance, which is simply the hexadecimal representation (CSS Style) of the solid color.
         */
        toString(): string;
        private _color;
    }
    class GradientColorBrush2D extends LockableBase implements IBrush2D {
        constructor(color1: Color4, color2: Color4, translation?: Vector2, rotation?: number, scale?: number, lock?: boolean);
        /**
         * Return true if the brush is transparent, false if it's totally opaque
         */
        isTransparent(): boolean;
        /**
         * First color, the blend will start from this color
         */
        color1: Color4;
        /**
         * Second color, the blend will end to this color
         */
        color2: Color4;
        /**
         * Translation vector to apply on the blend
         * Default is [0;0]
         */
        translation: Vector2;
        /**
         * Rotation in radian to apply to the brush
         * Default direction of the brush is vertical, you can change this using this property.
         * Default is 0.
         */
        rotation: number;
        /**
         * Scale factor to apply to the gradient.
         * Default is 1: no scale.
         */
        scale: number;
        /**
         * Return a string describing the brush
         */
        toString(): string;
        /**
         * Build a unique key string for the given parameters
         */
        static BuildKey(color1: Color4, color2: Color4, translation: Vector2, rotation: number, scale: number): string;
        private _color1;
        private _color2;
        private _translation;
        private _rotation;
        private _scale;
    }
}

declare module BABYLON {
    class Canvas2DEngineBoundData {
        GetOrAddModelCache<TInstData>(key: string, factory: (key: string) => ModelRenderCache): ModelRenderCache;
        private _modelCache;
        DisposeModelRenderCache(modelRenderCache: ModelRenderCache): boolean;
    }
    abstract class Canvas2D extends Group2D {
        /**
         * In this strategy only the direct children groups of the Canvas will be cached, their whole content (whatever the sub groups they have) into a single bitmap.
         * This strategy doesn't allow primitives added directly as children of the Canvas.
         * You typically want to use this strategy of a screenSpace fullscreen canvas: you don't want a bitmap cache taking the whole screen resolution but still want the main contents (say UI in the topLeft and rightBottom for instance) to be efficiently cached.
         */
        static CACHESTRATEGY_TOPLEVELGROUPS: number;
        /**
         * In this strategy each group will have its own cache bitmap (except if a given group explicitly defines the DONTCACHEOVERRIDE or CACHEINPARENTGROUP behaviors).
         * This strategy is typically used if the canvas has some groups that are frequently animated. Unchanged ones will have a steady cache and the others will be refreshed when they change, reducing the redraw operation count to their content only.
         * When using this strategy, group instances can rely on the DONTCACHEOVERRIDE or CACHEINPARENTGROUP behaviors to minimize the amount of cached bitmaps.
         * Note that in this mode the Canvas itself is not cached, it only contains the sprites of its direct children group to render, there's no point to cache the whole canvas, sprites will be rendered pretty efficiently, the memory cost would be too great for the value of it.
         */
        static CACHESTRATEGY_ALLGROUPS: number;
        /**
         * In this strategy the whole canvas is cached into a single bitmap containing every primitives it owns, at the exception of the ones that are owned by a group having the DONTCACHEOVERRIDE behavior (these primitives will be directly drawn to the viewport at each render for screenSpace Canvas or be part of the Canvas cache bitmap for worldSpace Canvas).
         */
        static CACHESTRATEGY_CANVAS: number;
        /**
         * This strategy is used to recompose/redraw the canvas entirely at each viewport render.
         * Use this strategy if memory is a concern above rendering performances and/or if the canvas is frequently animated (hence reducing the benefits of caching).
         * Note that you can't use this strategy for WorldSpace Canvas, they need at least a top level group caching.
         */
        static CACHESTRATEGY_DONTCACHE: number;
        constructor(scene: Scene, settings?: {
            id?: string;
            children?: Array<Prim2DBase>;
            size?: Size;
            renderScaleFactor?: number;
            isScreenSpace?: boolean;
            cachingStrategy?: number;
            enableInteraction?: boolean;
            origin?: Vector2;
            isVisible?: boolean;
            backgroundRoundRadius?: number;
            backgroundFill?: IBrush2D | string;
            backgroundBorder?: IBrush2D | string;
            backgroundBorderThickNess?: number;
        });
        protected _canvasPreInit(settings: any): void;
        static hierarchyLevelMaxSiblingCount: number;
        private _setupInteraction(enable);
        /**
         * If you set your own WorldSpaceNode to display the Canvas2D you have to provide your own implementation of this method which computes the local position in the Canvas based on the given 3D World one.
         * Beware that you have to take under consideration the origin and the renderScaleFactor in your calculations! Good luck!
         */
        worldSpaceToNodeLocal: (worldPos: Vector3) => Vector2;
        /**
         * Internal method, you should use the Prim2DBase version instead
         */
        _setPointerCapture(pointerId: number, primitive: Prim2DBase): boolean;
        /**
         * Internal method, you should use the Prim2DBase version instead
         */
        _releasePointerCapture(pointerId: number, primitive: Prim2DBase): boolean;
        /**
         * Determine if the given pointer is captured or not
         * @param pointerId the Id of the pointer
         * @return true if it's captured, false otherwise
         */
        isPointerCaptured(pointerId: number): boolean;
        private getCapturedPrimitive(pointerId);
        private static _interInfo;
        private _handlePointerEventForInteraction(eventData, localPosition, eventState);
        private _updatePointerInfo(eventData, localPosition);
        private _updateIntersectionList(mouseLocalPos, isCapture);
        private _updateOverStatus();
        private _updatePrimPointerPos(prim);
        private _notifDebugMode;
        private _debugExecObserver(prim, mask);
        private _bubbleNotifyPrimPointerObserver(prim, mask, eventData);
        private _triggerActionManager(prim, ppi, mask, eventData);
        _notifParents(prim: Prim2DBase, mask: number): void;
        /**
         * Don't forget to call the dispose method when you're done with the Canvas instance.
         * But don't worry, if you dispose its scene, the canvas will be automatically disposed too.
         */
        dispose(): boolean;
        /**
         * Accessor to the Scene that owns the Canvas
         * @returns The instance of the Scene object
         */
        scene: Scene;
        /**
         * Accessor to the Engine that drives the Scene used by this Canvas
         * @returns The instance of the Engine object
         */
        engine: Engine;
        /**
         * Accessor of the Caching Strategy used by this Canvas.
         * See Canvas2D.CACHESTRATEGY_xxxx static members for more information
         * @returns the value corresponding to the used strategy.
         */
        cachingStrategy: number;
        /**
         * Only valid for World Space Canvas, returns the scene node that displays the canvas
         */
        worldSpaceCanvasNode: Node;
        /**
         * Check if the WebGL Instanced Array extension is supported or not
         */
        supportInstancedArray: boolean;
        /**
         * Property that defines the fill object used to draw the background of the Canvas.
         * Note that Canvas with a Caching Strategy of
         * @returns If the background is not set, null will be returned, otherwise a valid fill object is returned.
         */
        backgroundFill: IBrush2D;
        /**
         * Property that defines the border object used to draw the background of the Canvas.
         * @returns If the background is not set, null will be returned, otherwise a valid border object is returned.
         */
        backgroundBorder: IBrush2D;
        /**
         * Property that defines the thickness of the border object used to draw the background of the Canvas.
         * @returns If the background is not set, null will be returned, otherwise a valid number matching the thickness is returned.
         */
        backgroundBorderThickness: number;
        /**
         * You can set the roundRadius of the background
         * @returns The current roundRadius
         */
        backgroundRoundRadius: number;
        /**
         * Enable/Disable interaction for this Canvas
         * When enabled the Prim2DBase.pointerEventObservable property will notified when appropriate events occur
         */
        interactionEnabled: boolean;
        /**
         * Access the babylon.js' engine bound data, do not invoke this method, it's for internal purpose only
         * @returns {}
         */
        _engineData: Canvas2DEngineBoundData;
        private checkBackgroundAvailability();
        private __engineData;
        private _interactionEnabled;
        private _primPointerInfo;
        private _updateRenderId;
        private _intersectionRenderId;
        private _hoverStatusRenderId;
        private _pickStartingPosition;
        private _renderScaleFactor;
        private _pickedDownPrim;
        private _pickStartingTime;
        private _previousIntersectionList;
        private _actualIntersectionList;
        private _previousOverPrimitive;
        private _actualOverPrimitive;
        private _capturedPointers;
        private _scenePrePointerObserver;
        private _scenePointerObserver;
        protected _worldSpaceNode: Node;
        private _mapCounter;
        private _background;
        private _scene;
        private _engine;
        private _fitRenderingDevice;
        private _isScreenSpace;
        private _cachedCanvasGroup;
        private _cachingStrategy;
        private _hierarchyLevelMaxSiblingCount;
        private _groupCacheMaps;
        private _beforeRenderObserver;
        private _afterRenderObserver;
        private _supprtInstancedArray;
        private _trackedGroups;
        _renderingSize: Size;
        protected onPrimBecomesDirty(): void;
        private static _v;
        private static _m;
        private _updateTrackedNodes();
        private _updateCanvasState();
        /**
         * Method that renders the Canvas, you should not invoke
         */
        private _render();
        /**
         * Internal method that allocate a cache for the given group.
         * Caching is made using a collection of MapTexture where many groups have their bitmap cache stored inside.
         * @param group The group to allocate the cache of.
         * @return custom type with the PackedRect instance giving information about the cache location into the texture and also the MapTexture instance that stores the cache.
         */
        _allocateGroupCache(group: Group2D, parent: Group2D, minSize?: Size): {
            node: PackedRect;
            texture: MapTexture;
            sprite: Sprite2D;
        };
        /**
         * Define the default size used for both the width and height of a MapTexture to allocate.
         * Note that some MapTexture might be bigger than this size if the first node to allocate is bigger in width or height
         */
        private static _groupTextureCacheSize;
        /**
         * Internal method used to register a Scene Node to track position for the given group
         * Do not invoke this method, for internal purpose only.
         * @param group the group to track its associated Scene Node
         */
        _registerTrackedNode(group: Group2D): void;
        /**
         * Internal method used to unregister a tracked Scene Node
         * Do not invoke this method, it's for internal purpose only.
         * @param group the group to unregister its tracked Scene Node from.
         */
        _unregisterTrackedNode(group: Group2D): void;
        /**
         * Get a Solid Color Brush instance matching the given color.
         * @param color The color to retrieve
         * @return A shared instance of the SolidColorBrush2D class that use the given color
         */
        static GetSolidColorBrush(color: Color4): IBrush2D;
        /**
         * Get a Solid Color Brush instance matching the given color expressed as a CSS formatted hexadecimal value.
         * @param color The color to retrieve
         * @return A shared instance of the SolidColorBrush2D class that uses the given color
         */
        static GetSolidColorBrushFromHex(hexValue: string): IBrush2D;
        /**
         * Get a Gradient Color Brush
         * @param color1 starting color
         * @param color2 engine color
         * @param translation translation vector to apply. default is [0;0]
         * @param rotation rotation in radian to apply to the brush, initial direction is top to bottom. rotation is counter clockwise. default is 0.
         * @param scale scaling factor to apply. default is 1.
         */
        static GetGradientColorBrush(color1: Color4, color2: Color4, translation?: Vector2, rotation?: number, scale?: number): IBrush2D;
        /**
         * Create a solid or gradient brush from a string value.
         * @param brushString should be either
         *  - "solid: #RRGGBBAA" or "#RRGGBBAA"
         *  - "gradient: #FF808080, #FFFFFFF[, [10:20], 180, 1]" for color1, color2, translation, rotation (degree), scale. The last three are optionals, but if specified must be is this order. "gradient:" can be omitted.
         */
        static GetBrushFromString(brushString: string): IBrush2D;
        private static _solidColorBrushes;
        private static _gradientColorBrushes;
    }
    class WorldSpaceCanvas2D extends Canvas2D {
        /**
         * Create a new 2D WorldSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a world transformation information to place it in the world space.
         * This kind of canvas can't have its Primitives directly drawn in the Viewport, they need to be cached in a bitmap at some point, as a consequence the DONT_CACHE strategy is unavailable. For now only CACHESTRATEGY_CANVAS is supported, but the remaining strategies will be soon.
         * @param scene the Scene that owns the Canvas
         * @param size the dimension of the Canvas in World Space
         * @param settings a combination of settings, possible ones are
         *  - children: an array of direct children primitives
         *  - id: a text identifier, for information purpose only, default is null.
         *  - worldPosition the position of the Canvas in World Space, default is [0,0,0]
         *  - worldRotation the rotation of the Canvas in World Space, default is Quaternion.Identity()
         *  - renderScaleFactor A scale factor applied to create the rendering texture that will be mapped in the Scene Rectangle. If you set 2 for instance the texture will be twice large in width and height. A greater value will allow to achieve a better rendering quality. Default value is 1.
         * BE AWARE that the Canvas true dimension will be size*renderScaleFactor, then all coordinates and size will have to be express regarding this size.
         * TIPS: if you want a renderScaleFactor independent reference of frame, create a child Group2D in the Canvas with position 0,0 and size set to null, then set its scale property to the same amount than the renderScaleFactor, put all your primitive inside using coordinates regarding the size property you pick for the Canvas and you'll be fine.
         * - sideOrientation: Unexpected behavior occur if the value is different from Mesh.DEFAULTSIDE right now, so please use this one, which is the default.
         * - cachingStrategy Must be CACHESTRATEGY_CANVAS for now, which is the default.
         * - enableInteraction: if true the pointer events will be listened and rerouted to the appropriate primitives of the Canvas2D through the Prim2DBase.onPointerEventObservable observable property. Default is false (the opposite of ScreenSpace).
         * - isVisible: true if the canvas must be visible, false for hidden. Default is true.
         * - backgroundRoundRadius: the round radius of the background, either backgroundFill or backgroundBorder must be specified.
         * - backgroundFill: the brush to use to create a background fill for the canvas. can be a string value (see Canvas2D.GetBrushFromString) or a IBrush2D instance.
         * - backgroundBorder: the brush to use to create a background border for the canvas. can be a string value (see Canvas2D.GetBrushFromString) or a IBrush2D instance.
         * - backgroundBorderThickness: if a backgroundBorder is specified, its thickness can be set using this property
         * - customWorldSpaceNode: if specified the Canvas will be rendered in this given Node. But it's the responsibility of the caller to set the "worldSpaceToNodeLocal" property to compute the hit of the mouse ray into the node (in world coordinate system) as well as rendering the cached bitmap in the node itself. The properties cachedRect and cachedTexture of Group2D will give you what you need to do that.
         * - paddingTop: top padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - paddingLeft: left padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - paddingRight: right padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - paddingBottom: bottom padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - padding: top, left, right and bottom padding formatted as a single string (see PrimitiveThickness.fromString)
         */
        constructor(scene: Scene, size: Size, settings?: {
            children?: Array<Prim2DBase>;
            id?: string;
            worldPosition?: Vector3;
            worldRotation?: Quaternion;
            renderScaleFactor?: number;
            sideOrientation?: number;
            cachingStrategy?: number;
            enableInteraction?: boolean;
            isVisible?: boolean;
            backgroundRoundRadius?: number;
            backgroundFill?: IBrush2D | string;
            backgroundBorder?: IBrush2D | string;
            backgroundBorderThickNess?: number;
            customWorldSpaceNode?: Node;
            paddingTop?: number | string;
            paddingLeft?: number | string;
            paddingRight?: number | string;
            paddingBottom?: number | string;
            padding?: string;
        });
    }
    class ScreenSpaceCanvas2D extends Canvas2D {
        /**
         * Create a new 2D ScreenSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a position relative to the bottom/left corner of the screen.
         * ScreenSpace Canvas will be drawn in the Viewport as a 2D Layer lying to the top of the 3D Scene. Typically used for traditional UI.
         * All caching strategies will be available.
         * PLEASE NOTE: the origin of a Screen Space Canvas is set to [0;0] (bottom/left) which is different than the default origin of a Primitive which is centered [0.5;0.5]
         * @param scene the Scene that owns the Canvas
         * @param settings a combination of settings, possible ones are
         *  - children: an array of direct children primitives
         *  - id: a text identifier, for information purpose only
         *  - x: the position along the x axis (horizontal), relative to the left edge of the viewport. you can alternatively use the position setting.
         *  - y: the position along the y axis (vertically), relative to the bottom edge of the viewport. you can alternatively use the position setting.
         *  - position: the position of the canvas, relative from the bottom/left of the scene's viewport. Alternatively you can set the x and y properties directly. Default value is [0, 0]
         *  - width: the width of the Canvas. you can alternatively use the size setting.
         *  - height: the height of the Canvas. you can alternatively use the size setting.
         *  - size: the Size of the canvas. Alternatively the width and height properties can be set. If null two behaviors depend on the cachingStrategy: if it's CACHESTRATEGY_CACHECANVAS then it will always auto-fit the rendering device, in all the other modes it will fit the content of the Canvas
         *  - cachingStrategy: either CACHESTRATEGY_TOPLEVELGROUPS, CACHESTRATEGY_ALLGROUPS, CACHESTRATEGY_CANVAS, CACHESTRATEGY_DONTCACHE. Please refer to their respective documentation for more information. Default is Canvas2D.CACHESTRATEGY_DONTCACHE
         *  - enableInteraction: if true the pointer events will be listened and rerouted to the appropriate primitives of the Canvas2D through the Prim2DBase.onPointerEventObservable observable property. Default is true.
         *  - isVisible: true if the canvas must be visible, false for hidden. Default is true.
         * - backgroundRoundRadius: the round radius of the background, either backgroundFill or backgroundBorder must be specified.
         * - backgroundFill: the brush to use to create a background fill for the canvas. can be a string value (see BABYLON.Canvas2D.GetBrushFromString) or a IBrush2D instance.
         * - backgroundBorder: the brush to use to create a background border for the canvas. can be a string value (see BABYLON.Canvas2D.GetBrushFromString) or a IBrush2D instance.
         * - backgroundBorderThickness: if a backgroundBorder is specified, its thickness can be set using this property
         * - customWorldSpaceNode: if specified the Canvas will be rendered in this given Node. But it's the responsibility of the caller to set the "worldSpaceToNodeLocal" property to compute the hit of the mouse ray into the node (in world coordinate system) as well as rendering the cached bitmap in the node itself. The properties cachedRect and cachedTexture of Group2D will give you what you need to do that.
         * - paddingTop: top padding, can be a number (will be pixels) or a string (see BABYLON.PrimitiveThickness.fromString)
         * - paddingLeft: left padding, can be a number (will be pixels) or a string (see BABYLON.PrimitiveThickness.fromString)
         * - paddingRight: right padding, can be a number (will be pixels) or a string (see BABYLON.PrimitiveThickness.fromString)
         * - paddingBottom: bottom padding, can be a number (will be pixels) or a string (see BABYLON.PrimitiveThickness.fromString)
         * - padding: top, left, right and bottom padding formatted as a single string (see BABYLON.PrimitiveThickness.fromString)
         */
        constructor(scene: Scene, settings?: {
            children?: Array<Prim2DBase>;
            id?: string;
            x?: number;
            y?: number;
            position?: Vector2;
            origin?: Vector2;
            width?: number;
            height?: number;
            size?: Size;
            cachingStrategy?: number;
            enableInteraction?: boolean;
            isVisible?: boolean;
            backgroundRoundRadius?: number;
            backgroundFill?: IBrush2D | string;
            backgroundBorder?: IBrush2D | string;
            backgroundBorderThickNess?: number;
            paddingTop?: number | string;
            paddingLeft?: number | string;
            paddingRight?: number | string;
            paddingBottom?: number | string;
            padding?: string;
        });
    }
}

declare module BABYLON {
    class LayoutEngineBase implements ILockable {
        constructor();
        updateLayout(prim: Prim2DBase): void;
        isChildPositionAllowed: boolean;
        isLocked(): boolean;
        lock(): boolean;
        layoutDirtyOnPropertyChangedMask: any;
        private _isLocked;
    }
    class CanvasLayoutEngine extends LayoutEngineBase {
        static Singleton: CanvasLayoutEngine;
        updateLayout(prim: Prim2DBase): void;
        private _doUpdate(prim);
        isChildPositionAllowed: boolean;
    }
    class StackPanelLayoutEngine extends LayoutEngineBase {
        constructor();
        static Horizontal: StackPanelLayoutEngine;
        static Vertical: StackPanelLayoutEngine;
        private static _horizontal;
        private static _vertical;
        isHorizontal: boolean;
        private _isHorizontal;
        updateLayout(prim: Prim2DBase): void;
        isChildPositionAllowed: boolean;
    }
}

declare module BABYLON {
    class Ellipse2DRenderCache extends ModelRenderCache {
        effectsReady: boolean;
        fillVB: WebGLBuffer;
        fillIB: WebGLBuffer;
        fillIndicesCount: number;
        instancingFillAttributes: InstancingAttributeInfo[];
        effectFillInstanced: Effect;
        effectFill: Effect;
        borderVB: WebGLBuffer;
        borderIB: WebGLBuffer;
        borderIndicesCount: number;
        instancingBorderAttributes: InstancingAttributeInfo[];
        effectBorderInstanced: Effect;
        effectBorder: Effect;
        constructor(engine: Engine, modelKey: string);
        render(instanceInfo: GroupInstanceInfo, context: Render2DContext): boolean;
        dispose(): boolean;
    }
    class Ellipse2DInstanceData extends Shape2DInstanceData {
        constructor(partId: number);
        properties: Vector3;
    }
    class Ellipse2D extends Shape2D {
        static acutalSizeProperty: Prim2DPropInfo;
        static subdivisionsProperty: Prim2DPropInfo;
        actualSize: Size;
        subdivisions: number;
        protected levelIntersect(intersectInfo: IntersectInfo2D): boolean;
        protected updateLevelBoundingInfo(): void;
        /**
         * Create an Ellipse 2D Shape primitive
         * @param settings a combination of settings, possible ones are
         *  - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)
         *  - children: an array of direct children
         *  - id: a text identifier, for information purpose
         *  - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]
         *  - rotation: the initial rotation (in radian) of the primitive. default is 0
         *  - scale: the initial scale of the primitive. default is 1
         *  - origin: define the normalized origin point location, default [0.5;0.5]
         *  - size: the size of the group. Alternatively the width and height properties can be set. Default will be [10;10].
         *  - subdivision: the number of subdivision to create the ellipse perimeter, default is 64.
         *  - fill: the brush used to draw the fill content of the ellipse, you can set null to draw nothing (but you will have to set a border brush), default is a SolidColorBrush of plain white. can also be a string value (see Canvas2D.GetBrushFromString)
         *  - border: the brush used to draw the border of the ellipse, you can set null to draw nothing (but you will have to set a fill brush), default is null. can be a string value (see Canvas2D.GetBrushFromString)
         * - marginTop: top margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - marginLeft: left margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - marginRight: right margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - marginBottom: bottom margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - margin: top, left, right and bottom margin formatted as a single string (see PrimitiveThickness.fromString)
         * - marginHAlignment: one value of the PrimitiveAlignment type's static properties
         * - marginVAlignment: one value of the PrimitiveAlignment type's static properties
         * - marginAlignment: a string defining the alignment, see PrimitiveAlignment.fromString
         * - paddingTop: top padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - paddingLeft: left padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - paddingRight: right padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - paddingBottom: bottom padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - padding: top, left, right and bottom padding formatted as a single string (see PrimitiveThickness.fromString)
         */
        constructor(settings?: {
            parent?: Prim2DBase;
            children?: Array<Prim2DBase>;
            id?: string;
            position?: Vector2;
            x?: number;
            y?: number;
            rotation?: number;
            scale?: number;
            origin?: Vector2;
            size?: Size;
            width?: number;
            height?: number;
            subdivisions?: number;
            fill?: IBrush2D | string;
            border?: IBrush2D | string;
            borderThickness?: number;
            isVisible?: boolean;
            marginTop?: number | string;
            marginLeft?: number | string;
            marginRight?: number | string;
            marginBottom?: number | string;
            margin?: number | string;
            marginHAlignment?: number;
            marginVAlignment?: number;
            marginAlignment?: string;
            paddingTop?: number | string;
            paddingLeft?: number | string;
            paddingRight?: number | string;
            paddingBottom?: number | string;
            padding?: string;
        });
        protected createModelRenderCache(modelKey: string): ModelRenderCache;
        protected setupModelRenderCache(modelRenderCache: ModelRenderCache): Ellipse2DRenderCache;
        protected createInstanceDataParts(): InstanceDataBase[];
        protected refreshInstanceDataPart(part: InstanceDataBase): boolean;
        private _subdivisions;
    }
}

declare module BABYLON {
    class Group2D extends Prim2DBase {
        static GROUP2D_PROPCOUNT: number;
        static sizeProperty: Prim2DPropInfo;
        static actualSizeProperty: Prim2DPropInfo;
        /**
         * Default behavior, the group will use the caching strategy defined at the Canvas Level
         */
        static GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY: number;
        /**
         * When used, this group's content won't be cached, no matter which strategy used.
         * If the group is part of a WorldSpace Canvas, its content will be drawn in the Canvas cache bitmap.
         */
        static GROUPCACHEBEHAVIOR_DONTCACHEOVERRIDE: number;
        /**
         * When used, the group's content will be cached in the nearest cached parent group/canvas
         */
        static GROUPCACHEBEHAVIOR_CACHEINPARENTGROUP: number;
        /**
         * Create an Logical or Renderable Group.
         * @param settings a combination of settings, possible ones are
         *  - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)
         *  - children: an array of direct children
         *  - id a text identifier, for information purpose
         *  - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]
         *  - rotation: the initial rotation (in radian) of the primitive. default is 0
         *  - scale: the initial scale of the primitive. default is 1
         *  - origin: define the normalized origin point location, default [0.5;0.5]
         *  - size: the size of the group. Alternatively the width and height properties can be set. If null the size will be computed from its content, default is null.
         *  - cacheBehavior: Define how the group should behave regarding the Canvas's cache strategy, default is Group2D.GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY
         *  - layoutEngine: either an instance of a layout engine based class (StackPanel.Vertical, StackPanel.Horizontal) or a string ('canvas' for Canvas layout, 'StackPanel' or 'HorizontalStackPanel' for horizontal Stack Panel layout, 'VerticalStackPanel' for vertical Stack Panel layout).
         *  - isVisible: true if the group must be visible, false for hidden. Default is true.
         * - marginTop: top margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - marginLeft: left margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - marginRight: right margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - marginBottom: bottom margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - margin: top, left, right and bottom margin formatted as a single string (see PrimitiveThickness.fromString)
         * - marginHAlignment: one value of the PrimitiveAlignment type's static properties
         * - marginVAlignment: one value of the PrimitiveAlignment type's static properties
         * - marginAlignment: a string defining the alignment, see PrimitiveAlignment.fromString
         * - paddingTop: top padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - paddingLeft: left padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - paddingRight: right padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - paddingBottom: bottom padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         * - padding: top, left, right and bottom padding formatted as a single string (see PrimitiveThickness.fromString)
         */
        constructor(settings?: {
            parent?: Prim2DBase;
            children?: Array<Prim2DBase>;
            id?: string;
            position?: Vector2;
            x?: number;
            y?: number;
            trackNode?: Node;
            origin?: Vector2;
            size?: Size;
            width?: number;
            height?: number;
            cacheBehavior?: number;
            layoutEngine?: LayoutEngineBase | string;
            isVisible?: boolean;
            marginTop?: number | string;
            marginLeft?: number | string;
            marginRight?: number | string;
            marginBottom?: number | string;
            margin?: number | string;
            marginHAlignment?: number;
            marginVAlignment?: number;
            marginAlignment?: string;
            paddingTop?: number | string;
            paddingLeft?: number | string;
            paddingRight?: number | string;
            paddingBottom?: number | string;
            padding?: string;
        });
        static _createCachedCanvasGroup(owner: Canvas2D): Group2D;
        protected applyCachedTexture(vertexData: VertexData, material: StandardMaterial): void;
        /**
         * Allow you to access the information regarding the cached rectangle of the Group2D into the MapTexture.
         * If the `noWorldSpaceNode` options was used at the creation of a WorldSpaceCanvas, the rendering of the canvas must be made by the caller, so typically you want to bind the cacheTexture property to some material/mesh and you must use the cachedRect.UVs property to get the UV coordinates to use for your quad that will display the Canvas.
         */
        cachedRect: PackedRect;
        /**
         * Access the texture that maintains a cached version of the Group2D.
         * This is useful only if you're not using a WorldSpaceNode for your WorldSpace Canvas and therefore need to perform the rendering yourself.
         */
        cacheTexture: MapTexture;
        /**
         * Call this method to remove this Group and its children from the Canvas
         */
        dispose(): boolean;
        /**
         * @returns Returns true if the Group render content, false if it's a logical group only
         */
        isRenderableGroup: boolean;
        /**
         * @returns only meaningful for isRenderableGroup, will be true if the content of the Group is cached into a texture, false if it's rendered every time
         */
        isCachedGroup: boolean;
        /**
         * Get/Set the size of the group. If null the size of the group will be determine from its content.
         * BEWARE: if the Group is a RenderableGroup and its content is cache the texture will be resized each time the group is getting bigger. For performance reason the opposite won't be true: the texture won't shrink if the group does.
         */
        size: Size;
        viewportSize: ISize;
        actualSize: Size;
        /**
         * Get/set the Cache Behavior, used in case the Canvas Cache Strategy is set to CACHESTRATEGY_ALLGROUPS. Can be either GROUPCACHEBEHAVIOR_CACHEINPARENTGROUP, GROUPCACHEBEHAVIOR_DONTCACHEOVERRIDE or GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY. See their documentation for more information.
         * It is critical to understand than you HAVE TO play with this behavior in order to achieve a good performance/memory ratio. Caching all groups would certainly be the worst strategy of all.
         */
        cacheBehavior: number;
        _addPrimToDirtyList(prim: Prim2DBase): void;
        _renderCachedCanvas(): void;
        /**
         * Get/set the Scene's Node that should be tracked, the group's position will follow the projected position of the Node.
         */
        trackedNode: Node;
        protected levelIntersect(intersectInfo: IntersectInfo2D): boolean;
        protected updateLevelBoundingInfo(): void;
        protected _prepareGroupRender(context: PrepareRender2DContext): void;
        protected _groupRender(): void;
        private _updateTransparentData();
        private _renderTransparentData();
        private _prepareContext(engine, context, gii);
        private _bindCacheTarget();
        private _unbindCacheTarget();
        protected handleGroupChanged(prop: Prim2DPropInfo): void;
        private detectGroupStates();
        private _trackedNode;
        protected _isRenderableGroup: boolean;
        protected _isCachedGroup: boolean;
        private _cacheGroupDirty;
        private _cacheBehavior;
        private _viewportPosition;
        private _viewportSize;
        _renderableData: RenderableGroupData;
    }
    class RenderableGroupData {
        constructor();
        dispose(): void;
        addNewTransparentPrimitiveInfo(prim: RenderablePrim2D, gii: GroupInstanceInfo): TransparentPrimitiveInfo;
        removeTransparentPrimitiveInfo(tpi: TransparentPrimitiveInfo): void;
        transparentPrimitiveZChanged(tpi: TransparentPrimitiveInfo): void;
        updateSmallestZChangedPrim(tpi: TransparentPrimitiveInfo): void;
        _primDirtyList: Array<Prim2DBase>;
        _childrenRenderableGroups: Array<Group2D>;
        _renderGroupInstancesInfo: StringDictionary<GroupInstanceInfo>;
        _cacheNode: PackedRect;
        _cacheTexture: MapTexture;
        _cacheRenderSprite: Sprite2D;
        _transparentListChanged: boolean;
        _transparentPrimitives: Array<TransparentPrimitiveInfo>;
        _transparentSegments: Array<TransparentSegment>;
        _firstChangedPrim: TransparentPrimitiveInfo;
    }
    class TransparentPrimitiveInfo {
        _primitive: RenderablePrim2D;
        _groupInstanceInfo: GroupInstanceInfo;
        _transparentSegment: TransparentSegment;
    }
}

declare module BABYLON {
    class Lines2DRenderCache extends ModelRenderCache {
        effectsReady: boolean;
        fillVB: WebGLBuffer;
        fillIB: WebGLBuffer;
        fillIndicesCount: number;
        instancingFillAttributes: InstancingAttributeInfo[];
        effectFill: Effect;
        effectFillInstanced: Effect;
        borderVB: WebGLBuffer;
        borderIB: WebGLBuffer;
        borderIndicesCount: number;
        instancingBorderAttributes: InstancingAttributeInfo[];
        effectBorder: Effect;
        effectBorderInstanced: Effect;
        constructor(engine: Engine, modelKey: string);
        render(instanceInfo: GroupInstanceInfo, context: Render2DContext): boolean;
        dispose(): boolean;
    }
    class Lines2DInstanceData extends Shape2DInstanceData {
        constructor(partId: number);
        boundingMin: Vector2;
        boundingMax: Vector2;
    }
    class Lines2D extends Shape2D {
        /**
         * No Cap to apply on the extremity
         */
        static NoCap: number;
        /**
         * A round cap, will use the line thickness as diameter
         */
        static RoundCap: number;
        /**
         * Creates a triangle at the extremity.
         */
        static TriangleCap: number;
        /**
         * Creates a Square anchor at the extremity, the square size is twice the thickness of the line
         */
        static SquareAnchorCap: number;
        /**
         * Creates a round anchor at the extremity, the diameter is twice the thickness of the line
         */
        static RoundAnchorCap: number;
        /**
         * Creates a diamond anchor at the extremity.
         */
        static DiamondAnchorCap: number;
        /**
         * Creates an arrow anchor at the extremity. the arrow base size is twice the thickness of the line
         */
        static ArrowCap: number;
        static pointsProperty: Prim2DPropInfo;
        static fillThicknessProperty: Prim2DPropInfo;
        static closedProperty: Prim2DPropInfo;
        static startCapProperty: Prim2DPropInfo;
        static endCapProperty: Prim2DPropInfo;
        points: Vector2[];
        fillThickness: number;
        closed: boolean;
        startCap: number;
        endCap: number;
        private static _prevA;
        private static _prevB;
        private static _curA;
        private static _curB;
        protected levelIntersect(intersectInfo: IntersectInfo2D): boolean;
        protected boundingMin: Vector2;
        protected boundingMax: Vector2;
        protected getUsedShaderCategories(dataPart: InstanceDataBase): string[];
        protected updateLevelBoundingInfo(): void;
        /**
         * Create an 2D Lines Shape primitive. The defined lines may be opened or closed (see below)
         * @param points an array that describe the points to use to draw the line, must contain at least two entries.
         * @param settings a combination of settings, possible ones are
         *  - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)
         *  - children: an array of direct children
         *  - id a text identifier, for information purpose
         *  - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]
         *  - rotation: the initial rotation (in radian) of the primitive. default is 0
         *  - scale: the initial scale of the primitive. default is 1
         *  - origin: define the normalized origin point location, default [0.5;0.5]
         *  - fillThickness: the thickness of the fill part of the line, can be null to draw nothing (but a border brush must be given), default is 1.
         *  - closed: if false the lines are said to be opened, the first point and the latest DON'T connect. if true the lines are said to be closed, the first and last point will be connected by a line. For instance you can define the 4 points of a rectangle, if you set closed to true a 4 edges rectangle will be drawn. If you set false, only three edges will be drawn, the edge formed by the first and last point won't exist. Default is false.
         *  - startCap: Draw a cap of the given type at the start of the first line, you can't define a Cap if the Lines2D is closed. Default is Lines2D.NoCap.
         *  - endCap: Draw a cap of the given type at the end of the last line, you can't define a Cap if the Lines2D is closed. Default is Lines2D.NoCap.
         *  - fill: the brush used to draw the fill content of the lines, you can set null to draw nothing (but you will have to set a border brush), default is a SolidColorBrush of plain white. can be a string value (see Canvas2D.GetBrushFromString)
         *  - border: the brush used to draw the border of the lines, you can set null to draw nothing (but you will have to set a fill brush), default is null. can be a string value (see Canvas2D.GetBrushFromString)
         *  - borderThickness: the thickness of the drawn border, default is 1.
         *  - isVisible: true if the primitive must be visible, false for hidden. Default is true.
         *  - marginTop: top margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginLeft: left margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginRight: right margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginBottom: bottom margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - margin: top, left, right and bottom margin formatted as a single string (see PrimitiveThickness.fromString)
         *  - marginHAlignment: one value of the PrimitiveAlignment type's static properties
         *  - marginVAlignment: one value of the PrimitiveAlignment type's static properties
         *  - marginAlignment: a string defining the alignment, see PrimitiveAlignment.fromString
         *  - paddingTop: top padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingLeft: left padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingRight: right padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingBottom: bottom padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - padding: top, left, right and bottom padding formatted as a single string (see PrimitiveThickness.fromString)
         */
        constructor(points: Vector2[], settings?: {
            parent?: Prim2DBase;
            children?: Array<Prim2DBase>;
            id?: string;
            position?: Vector2;
            x?: number;
            y?: number;
            rotation?: number;
            scale?: number;
            origin?: Vector2;
            fillThickness?: number;
            closed?: boolean;
            startCap?: number;
            endCap?: number;
            fill?: IBrush2D | string;
            border?: IBrush2D | string;
            borderThickness?: number;
            isVisible?: boolean;
            marginTop?: number | string;
            marginLeft?: number | string;
            marginRight?: number | string;
            marginBottom?: number | string;
            margin?: number | string;
            marginHAlignment?: number;
            marginVAlignment?: number;
            marginAlignment?: string;
            paddingTop?: number | string;
            paddingLeft?: number | string;
            paddingRight?: number | string;
            paddingBottom?: number | string;
            padding?: string;
        });
        protected createModelRenderCache(modelKey: string): ModelRenderCache;
        private _perp(v, res);
        private _direction(a, b, res);
        private static _miterTps;
        private _computeMiter(tangent, miter, a, b);
        private _intersect(x1, y1, x2, y2, x3, y3, x4, y4);
        private _updateMinMax(array, offset);
        private static _startDir;
        private static _endDir;
        private _store(array, contour, index, max, p, n, halfThickness, borderThickness, detectFlip?);
        private _getCapSize(type, border?);
        private static _tpsV;
        private _storeVertex(vb, baseOffset, index, basePos, rotation, vertex, contour);
        private _storeIndex(ib, baseOffset, index, vertexIndex);
        private _buildCap(vb, vbi, ib, ibi, pos, thickness, borderThickness, type, capDir, contour);
        private _buildLine(vb, contour, ht, bt?);
        protected setupModelRenderCache(modelRenderCache: ModelRenderCache): Lines2DRenderCache;
        private _computeLines2D();
        size: Size;
        protected createInstanceDataParts(): InstanceDataBase[];
        protected refreshInstanceDataPart(part: InstanceDataBase): boolean;
        private static _noCap;
        private static _roundCap;
        private static _triangleCap;
        private static _squareAnchorCap;
        private static _roundAnchorCap;
        private static _diamondAnchorCap;
        private static _arrowCap;
        private static _roundCapSubDiv;
        private _fillVB;
        private _fillIB;
        private _borderVB;
        private _borderIB;
        private _boundingMin;
        private _boundingMax;
        private _contour;
        private _startCapContour;
        private _startCapTriIndices;
        private _endCapContour;
        private _endCapTriIndices;
        private _closed;
        private _startCap;
        private _endCap;
        private _fillThickness;
        private _points;
    }
}

declare module BABYLON {
    const enum ShaderDataType {
        Vector2 = 0,
        Vector3 = 1,
        Vector4 = 2,
        Matrix = 3,
        float = 4,
        Color3 = 5,
        Color4 = 6,
        Size = 7,
    }
    class GroupInstanceInfo {
        constructor(owner: Group2D, mrc: ModelRenderCache, partCount: number);
        dispose(): boolean;
        private _isDisposed;
        owner: Group2D;
        modelRenderCache: ModelRenderCache;
        partIndexFromId: StringDictionary<number>;
        hasOpaqueData: boolean;
        hasAlphaTestData: boolean;
        hasTransparentData: boolean;
        opaqueDirty: boolean;
        opaqueData: GroupInfoPartData[];
        alphaTestDirty: boolean;
        alphaTestData: GroupInfoPartData[];
        transparentOrderDirty: boolean;
        transparentDirty: boolean;
        transparentData: TransparentGroupInfoPartData[];
        sortTransparentData(): void;
        usedShaderCategories: string[];
        strides: number[];
        private _partCount;
        private _strides;
        private _usedShaderCategories;
        private _opaqueData;
        private _alphaTestData;
        private _transparentData;
    }
    class TransparentSegment {
        groupInsanceInfo: GroupInstanceInfo;
        startZ: number;
        endZ: number;
        startDataIndex: number;
        endDataIndex: number;
    }
    class GroupInfoPartData {
        _partData: DynamicFloatArray;
        _partBuffer: WebGLBuffer;
        _partBufferSize: number;
        constructor(stride: number);
        dispose(engine: Engine): boolean;
        private _isDisposed;
    }
    class TransparentGroupInfoPartData extends GroupInfoPartData {
        constructor(stride: number, zoff: number);
    }
    class ModelRenderCache {
        constructor(engine: Engine, modelKey: string);
        dispose(): boolean;
        isDisposed: boolean;
        addRef(): number;
        modelKey: string;
        /**
         * Render the model instances
         * @param instanceInfo
         * @param context
         * @return must return true is the rendering succeed, false if the rendering couldn't be done (asset's not yet ready, like Effect)
         */
        render(instanceInfo: GroupInstanceInfo, context: Render2DContext): boolean;
        addInstanceDataParts(data: InstanceDataBase[]): string;
        removeInstanceData(key: string): void;
        protected getPartIndexFromId(partId: number): number;
        protected loadInstancingAttributes(partId: number, effect: Effect): InstancingAttributeInfo[];
        private static v2;
        private static v3;
        private static v4;
        protected setupUniforms(effect: Effect, partIndex: number, data: DynamicFloatArray, elementCount: number): void;
        protected _engine: Engine;
        private _modelKey;
        _instancesData: StringDictionary<InstanceDataBase[]>;
        private _nextKey;
        private _refCounter;
        _partData: ModelRenderCachePartData[];
        _partsClassInfo: ClassTreeInfo<InstanceClassInfo, InstancePropInfo>[];
    }
    class ModelRenderCachePartData {
        _partId: number;
        _zBiasOffset: number;
        _partDataStride: number;
        _partUsedCategories: string[];
        _partJoinedUsedCategories: string;
    }
}

declare module BABYLON {
    class PrepareRender2DContext {
        constructor();
        /**
         * True if the primitive must be refreshed no matter what
         * This mode is needed because sometimes the primitive doesn't change by itself, but external changes make a refresh of its InstanceData necessary
         */
        forceRefreshPrimitive: boolean;
    }
    class Render2DContext {
        constructor(renderMode: number);
        /**
         * Define which render Mode should be used to render the primitive: one of Render2DContext.RenderModeXxxx property
         */
        renderMode: number;
        /**
         * If true hardware instancing is supported and must be used for the rendering. The groupInfoPartData._partBuffer must be used.
         * If false rendering on a per primitive basis must be made. The following properties must be used
         *  - groupInfoPartData._partData: contains the primitive instances data to render
         *  - partDataStartIndex: the index into instanceArrayData of the first instance to render.
         *  - partDataCount: the number of primitive to render
         */
        useInstancing: boolean;
        /**
         * Contains the data related to the primitives instances to render
         */
        groupInfoPartData: GroupInfoPartData[];
        /**
         * The index into groupInfoPartData._partData of the first primitive to render. This is an index, not an offset: it represent the nth primitive which is the first to render.
         */
        partDataStartIndex: number;
        /**
         * The exclusive end index, you have to render the primitive instances until you reach this one, but don't render this one!
         */
        partDataEndIndex: number;
        /**
         * The set of primitives to render is opaque.
         * This is the first rendering pass. All Opaque primitives are rendered. Depth Compare and Write are both enabled.
         */
        static RenderModeOpaque: number;
        /**
         * The set of primitives to render is using Alpha Test (aka masking).
         * Alpha Blend is enabled, the AlphaMode must be manually set, the render occurs after the RenderModeOpaque and is depth independent (i.e. primitives are not sorted by depth). Depth Compare and Write are both enabled.
         */
        static RenderModeAlphaTest: number;
        /**
         * The set of primitives to render is transparent.
         * Alpha Blend is enabled, the AlphaMode must be manually set, the render occurs after the RenderModeAlphaTest and is depth dependent (i.e. primitives are stored by depth and rendered back to front). Depth Compare is on, but Depth write is Off.
         */
        static RenderModeTransparent: number;
        private static _renderModeOpaque;
        private static _renderModeAlphaTest;
        private static _renderModeTransparent;
        private _renderMode;
    }
    /**
     * This class store information for the pointerEventObservable Observable.
     * The Observable is divided into many sub events (using the Mask feature of the Observable pattern): PointerOver, PointerEnter, PointerDown, PointerMouseWheel, PointerMove, PointerUp, PointerDown, PointerLeave, PointerGotCapture and PointerLostCapture.
     */
    class PrimitivePointerInfo {
        private static _pointerOver;
        private static _pointerEnter;
        private static _pointerDown;
        private static _pointerMouseWheel;
        private static _pointerMove;
        private static _pointerUp;
        private static _pointerOut;
        private static _pointerLeave;
        private static _pointerGotCapture;
        private static _pointerLostCapture;
        private static _mouseWheelPrecision;
        /**
         * This event type is raised when a pointing device is moved into the hit test boundaries of a primitive.
         * Bubbles: yes
         */
        static PointerOver: number;
        /**
         * This event type is raised when a pointing device is moved into the hit test boundaries of a primitive or one of its descendants.
         * Bubbles: no
         */
        static PointerEnter: number;
        /**
         * This event type is raised when a pointer enters the active button state (non-zero value in the buttons property). For mouse it's when the device transitions from no buttons depressed to at least one button depressed. For touch/pen this is when a physical contact is made.
         * Bubbles: yes
         */
        static PointerDown: number;
        /**
         * This event type is raised when the pointer is a mouse and it's wheel is rolling
         * Bubbles: yes
         */
        static PointerMouseWheel: number;
        /**
         * This event type is raised when a pointer change coordinates or when a pointer changes button state, pressure, tilt, or contact geometry and the circumstances produce no other pointers events.
         * Bubbles: yes
         */
        static PointerMove: number;
        /**
         * This event type is raised when the pointer leaves the active buttons states (zero value in the buttons property). For mouse, this is when the device transitions from at least one button depressed to no buttons depressed. For touch/pen, this is when physical contact is removed.
         * Bubbles: yes
         */
        static PointerUp: number;
        /**
         * This event type is raised when a pointing device is moved out of the hit test the boundaries of a primitive.
         * Bubbles: yes
         */
        static PointerOut: number;
        /**
         * This event type is raised when a pointing device is moved out of the hit test boundaries of a primitive and all its descendants.
         * Bubbles: no
         */
        static PointerLeave: number;
        /**
         * This event type is raised when a primitive receives the pointer capture. This event is fired at the element that is receiving pointer capture. Subsequent events for that pointer will be fired at this element.
         * Bubbles: yes
         */
        static PointerGotCapture: number;
        /**
         * This event type is raised after pointer capture is released for a pointer.
         * Bubbles: yes
         */
        static PointerLostCapture: number;
        static MouseWheelPrecision: number;
        /**
         * Event Type, one of the static PointerXXXX property defined above (PrimitivePointerInfo.PointerOver to PrimitivePointerInfo.PointerLostCapture)
         */
        eventType: number;
        /**
         * Position of the pointer relative to the bottom/left of the Canvas
         */
        canvasPointerPos: Vector2;
        /**
         * Position of the pointer relative to the bottom/left of the primitive that registered the Observer
         */
        primitivePointerPos: Vector2;
        /**
         * The primitive where the event was initiated first (in case of bubbling)
         */
        relatedTarget: Prim2DBase;
        /**
         * Position of the pointer relative to the bottom/left of the relatedTarget
         */
        relatedTargetPointerPos: Vector2;
        /**
         * An observable can set this property to true to stop bubbling on the upper levels
         */
        cancelBubble: boolean;
        /**
         * True if the Control keyboard key is down
         */
        ctrlKey: boolean;
        /**
         * true if the Shift keyboard key is down
         */
        shiftKey: boolean;
        /**
         * true if the Alt keyboard key is down
         */
        altKey: boolean;
        /**
         * true if the Meta keyboard key is down
         */
        metaKey: boolean;
        /**
         * For button, buttons, refer to https://www.w3.org/TR/pointerevents/#button-states
         */
        button: number;
        /**
         * For button, buttons, refer to https://www.w3.org/TR/pointerevents/#button-states
         */
        buttons: number;
        /**
         * The amount of mouse wheel rolled
         */
        mouseWheelDelta: number;
        /**
         * Id of the Pointer involved in the event
         */
        pointerId: number;
        width: number;
        height: number;
        presssure: number;
        tilt: Vector2;
        /**
         * true if the involved pointer is captured for a particular primitive, false otherwise.
         */
        isCaptured: boolean;
        constructor();
        updateRelatedTarget(prim: Prim2DBase, primPointerPos: Vector2): void;
        static getEventTypeName(mask: number): string;
    }
    /**
     * Defines the horizontal and vertical alignment information for a Primitive.
     */
    class PrimitiveAlignment {
        constructor(changeCallback: () => void);
        /**
         * Alignment is made relative to the left edge of the Primitive. Valid for horizontal alignment only.
         */
        static AlignLeft: number;
        /**
         * Alignment is made relative to the top edge of the Primitive. Valid for vertical alignment only.
         */
        static AlignTop: number;
        /**
         * Alignment is made relative to the right edge of the Primitive. Valid for horizontal alignment only.
         */
        static AlignRight: number;
        /**
         * Alignment is made relative to the bottom edge of the Primitive. Valid for vertical alignment only.
         */
        static AlignBottom: number;
        /**
         * Alignment is made to center the content from equal distance to the opposite edges of the Primitive
         */
        static AlignCenter: number;
        /**
         * The content is stretched toward the opposite edges of the Primitive
         */
        static AlignStretch: number;
        private static _AlignLeft;
        private static _AlignTop;
        private static _AlignRight;
        private static _AlignBottom;
        private static _AlignCenter;
        private static _AlignStretch;
        /**
         * Get/set the horizontal alignment. Use one of the AlignXXX static properties of this class
         */
        horizontal: number;
        /**
         * Get/set the vertical alignment. Use one of the AlignXXX static properties of this class
         */
        vertical: number;
        private _changedCallback;
        private _horizontal;
        private _vertical;
        /**
         * Set the horizontal alignment from a string value.
         * @param text can be either: 'left','right','center','stretch'
         */
        setHorizontal(text: string): void;
        /**
         * Set the vertical alignment from a string value.
         * @param text can be either: 'top','bottom','center','stretch'
         */
        setVertical(text: string): void;
        /**
         * Set the horizontal and or vertical alignments from a string value.
         * @param text can be: [<h:|horizontal:><left|right|center|stretch>], [<v:|vertical:><top|bottom|center|stretch>]
         */
        fromString(value: string): void;
    }
    /**
     * Stores information about a Primitive that was intersected
     */
    class PrimitiveIntersectedInfo {
        prim: Prim2DBase;
        intersectionLocation: Vector2;
        constructor(prim: Prim2DBase, intersectionLocation: Vector2);
    }
    /**
     * Define a thickness toward every edges of a Primitive to allow margin and padding.
     * The thickness can be expressed as pixels, percentages, inherit the value of the parent primitive or be auto.
     */
    class PrimitiveThickness {
        constructor(parentAccess: () => PrimitiveThickness, changedCallback: () => void);
        /**
         * Set the thickness from a string value
         * @param thickness format is "top: <value>, left:<value>, right:<value>, bottom:<value>" each are optional, auto will be set if it's omitted.
         * Values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.
         */
        fromString(thickness: string): void;
        /**
         * Set the thickness from multiple string
         * Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.
         * @param top the top thickness to set
         * @param left the left thickness to set
         * @param right the right thickness to set
         * @param bottom the bottom thickness to set
         */
        fromStrings(top: string, left: string, right: string, bottom: string): PrimitiveThickness;
        /**
         * Set the thickness from pixel values
         * @param top the top thickness in pixels to set
         * @param left the left thickness in pixels to set
         * @param right the right thickness in pixels to set
         * @param bottom the bottom thickness in pixels to set
         */
        fromPixels(top: number, left: number, right: number, bottom: number): PrimitiveThickness;
        /**
         * Apply the same pixel value to all edges
         * @param margin the value to set, in pixels.
         */
        fromUniformPixels(margin: number): PrimitiveThickness;
        /**
         * Set all edges in auto
         */
        auto(): PrimitiveThickness;
        private _clear();
        private _extractString(value, emitChanged);
        private _setStringValue(value, index, emitChanged);
        private _setPixels(value, index, emitChanged);
        private _setPercentage(value, index, emitChanged);
        private _getStringValue(index);
        private _isType(index, type);
        private _getType(index, processInherit);
        private _setType(index, type);
        setTop(value: number | string): void;
        setLeft(value: number | string): void;
        setRight(value: number | string): void;
        setBottom(value: number | string): void;
        /**
         * Get/set the top thickness. Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.
         */
        top: string;
        /**
         * Get/set the left thickness. Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.
         */
        left: string;
        /**
         * Get/set the right thickness. Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.
         */
        right: string;
        /**
         * Get/set the bottom thickness. Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.
         */
        bottom: string;
        /**
         * Get/set the top thickness in pixel.
         */
        topPixels: number;
        /**
         * Get/set the left thickness in pixel.
         */
        leftPixels: number;
        /**
         * Get/set the right thickness in pixel.
         */
        rightPixels: number;
        /**
         * Get/set the bottom thickness in pixel.
         */
        bottomPixels: number;
        /**
         * Get/set the top thickness in percentage.
         * The get will return a valid value only if the edge type is percentage.
         * The Set will change the edge mode if needed
         */
        topPercentage: number;
        /**
         * Get/set the left thickness in percentage.
         * The get will return a valid value only if the edge mode is percentage.
         * The Set will change the edge mode if needed
         */
        leftPercentage: number;
        /**
         * Get/set the right thickness in percentage.
         * The get will return a valid value only if the edge mode is percentage.
         * The Set will change the edge mode if needed
         */
        rightPercentage: number;
        /**
         * Get/set the bottom thickness in percentage.
         * The get will return a valid value only if the edge mode is percentage.
         * The Set will change the edge mode if needed
         */
        bottomPercentage: number;
        /**
         * Get/set the top mode. The setter shouldn't be used, other setters with value should be preferred
         */
        topMode: number;
        /**
         * Get/set the left mode. The setter shouldn't be used, other setters with value should be preferred
         */
        leftMode: number;
        /**
         * Get/set the right mode. The setter shouldn't be used, other setters with value should be preferred
         */
        rightMode: number;
        /**
         * Get/set the bottom mode. The setter shouldn't be used, other setters with value should be preferred
         */
        bottomMode: number;
        private _parentAccess;
        private _changedCallback;
        private _pixels;
        private _percentages;
        private _flags;
        static Auto: number;
        static Inherit: number;
        static Percentage: number;
        static Pixel: number;
        private _computePixels(index, sourceArea, emitChanged);
        /**
         * Compute the positioning/size of an area considering the thickness of this object and a given alignment
         * @param sourceArea the source area
         * @param contentSize the content size to position/resize
         * @param alignment the alignment setting
         * @param dstOffset the position of the content
         * @param dstArea the new size of the content
         */
        computeWithAlignment(sourceArea: Size, contentSize: Size, alignment: PrimitiveAlignment, dstOffset: Vector2, dstArea: Size): void;
        /**
         * Compute an area and its position considering this thickness properties based on a given source area
         * @param sourceArea the source area
         * @param dstOffset the position of the resulting area
         * @param dstArea the size of the resulting area
         */
        compute(sourceArea: Size, dstOffset: Vector2, dstArea: Size): void;
        /**
         * Compute an area considering this thickness properties based on a given source area
         * @param sourceArea the source area
         * @param result the resulting area
         */
        computeArea(sourceArea: Size, result: Size): void;
    }
    /**
     * Main class used for the Primitive Intersection API
     */
    class IntersectInfo2D {
        constructor();
        /**
         * Set the pick position, relative to the primitive where the intersection test is made
         */
        pickPosition: Vector2;
        /**
         * If true the intersection will stop at the first hit, if false all primitives will be tested and the intersectedPrimitives array will be filled accordingly (false default)
         */
        findFirstOnly: boolean;
        /**
         * If true the intersection test will also be made on hidden primitive (false default)
         */
        intersectHidden: boolean;
        _globalPickPosition: Vector2;
        _localPickPosition: Vector2;
        /**
         * The topmost intersected primitive
         */
        topMostIntersectedPrimitive: PrimitiveIntersectedInfo;
        /**
         * The array containing all intersected primitive, in no particular order.
         */
        intersectedPrimitives: Array<PrimitiveIntersectedInfo>;
        /**
         * true if at least one primitive intersected during the test
         */
        isIntersected: boolean;
        isPrimIntersected(prim: Prim2DBase): Vector2;
        _exit(firstLevel: boolean): void;
    }
    class Prim2DBase extends SmartPropertyPrim {
        static PRIM2DBASE_PROPCOUNT: number;
        constructor(settings: {
            parent?: Prim2DBase;
            id?: string;
            children?: Array<Prim2DBase>;
            position?: Vector2;
            x?: number;
            y?: number;
            rotation?: number;
            scale?: number;
            origin?: Vector2;
            layoutEngine?: LayoutEngineBase | string;
            isVisible?: boolean;
            marginTop?: number | string;
            marginLeft?: number | string;
            marginRight?: number | string;
            marginBottom?: number | string;
            margin?: number | string;
            marginHAlignment?: number;
            marginVAlignment?: number;
            marginAlignment?: string;
            paddingTop?: number | string;
            paddingLeft?: number | string;
            paddingRight?: number | string;
            paddingBottom?: number | string;
            padding?: string;
        });
        actionManager: ActionManager;
        /**
         * From 'this' primitive, traverse up (from parent to parent) until the given predicate is true
         * @param predicate the predicate to test on each parent
         * @return the first primitive where the predicate was successful
         */
        traverseUp(predicate: (p: Prim2DBase) => boolean): Prim2DBase;
        /**
         * Retrieve the owner Canvas2D
         */
        owner: Canvas2D;
        /**
         * Get the parent primitive (can be the Canvas, only the Canvas has no parent)
         */
        parent: Prim2DBase;
        /**
         * The array of direct children primitives
         */
        children: Prim2DBase[];
        /**
         * The identifier of this primitive, may not be unique, it's for information purpose only
         */
        id: string;
        /**
         * Metadata of the position property
         */
        static positionProperty: Prim2DPropInfo;
        /**
         * Metadata of the actualPosition property
         */
        static actualPositionProperty: Prim2DPropInfo;
        /**
         * Metadata of the size property
         */
        static sizeProperty: Prim2DPropInfo;
        /**
         * Metadata of the rotation property
         */
        static rotationProperty: Prim2DPropInfo;
        /**
         * Metadata of the scale property
         */
        static scaleProperty: Prim2DPropInfo;
        /**
         * Metadata of the origin property
         */
        static originProperty: Prim2DPropInfo;
        /**
         * Metadata of the levelVisible property
         */
        static levelVisibleProperty: Prim2DPropInfo;
        /**
         * Metadata of the isVisible property
         */
        static isVisibleProperty: Prim2DPropInfo;
        /**
         * Metadata of the zOrder property
         */
        static zOrderProperty: Prim2DPropInfo;
        /**
         * Metadata of the margin property
         */
        static marginProperty: Prim2DPropInfo;
        /**
         * Metadata of the margin property
         */
        static paddingProperty: Prim2DPropInfo;
        /**
         * Metadata of the hAlignment property
         */
        static marginAlignmentProperty: Prim2DPropInfo;
        /**
         * DO NOT INVOKE for internal purpose only
         */
        actualPosition: Vector2;
        private static _nullPosition;
        /**
         * Shortcut to actualPosition.x
         */
        actualX: number;
        /**
         * Shortcut to actualPosition.y
         */
        actualY: number;
        /**
         * Position of the primitive, relative to its parent.
         * BEWARE: if you change only position.x or y it won't trigger a property change and you won't have the expected behavior.
         * Use this property to set a new Vector2 object, otherwise to change only the x/y use Prim2DBase.x or y properties.
         * Setting this property may have no effect is specific alignment are in effect.
         */
        position: Vector2;
        /**
         * Direct access to the position.x value of the primitive
         * Use this property when you only want to change one component of the position property
         */
        x: number;
        /**
         * Direct access to the position.y value of the primitive
         * Use this property when you only want to change one component of the position property
         */
        y: number;
        private static boundinbBoxReentrency;
        protected static nullSize: Size;
        /**
         * Size of the primitive or its bounding area
         * BEWARE: if you change only size.width or height it won't trigger a property change and you won't have the expected behavior.
         * Use this property to set a new Size object, otherwise to change only the width/height use Prim2DBase.width or height properties.
         */
        size: Size;
        /**
         * Direct access to the size.width value of the primitive
         * Use this property when you only want to change one component of the size property
         */
        width: number;
        /**
         * Direct access to the size.height value of the primitive
         * Use this property when you only want to change one component of the size property
         */
        height: number;
        rotation: number;
        scale: number;
        /**
         * Return the size of the primitive as it's being rendered into the target.
         * This value may be different of the size property when layout/alignment is used or specific primitive types can implement a custom logic through this property.
         * BEWARE: don't use the setter, it's for internal purpose only
         * Note to implementers: you have to override this property and declare if necessary a @xxxxInstanceLevel decorator
         */
        actualSize: Size;
        actualZOffset: number;
        /**
         * Get or set the minimal size the Layout Engine should respect when computing the primitive's actualSize.
         * The Primitive's size won't be less than specified.
         * The default value depends of the Primitive type
         */
        minSize: Size;
        /**
         * Get or set the maximal size the Layout Engine should respect when computing the primitive's actualSize.
         * The Primitive's size won't be more than specified.
         * The default value depends of the Primitive type
         */
        maxSize: Size;
        /**
         * The origin defines the normalized coordinate of the center of the primitive, from the bottom/left corner.
         * The origin is used only to compute transformation of the primitive, it has no meaning in the primitive local frame of reference
         * For instance:
         * 0,0 means the center is bottom/left. Which is the default for Canvas2D instances
         * 0.5,0.5 means the center is at the center of the primitive, which is default of all types of Primitives
         * 0,1 means the center is top/left
         * @returns The normalized center.
         */
        origin: Vector2;
        levelVisible: boolean;
        isVisible: boolean;
        zOrder: number;
        margin: PrimitiveThickness;
        private _hasMargin;
        padding: PrimitiveThickness;
        private _hasPadding;
        marginAlignment: PrimitiveAlignment;
        /**
         * Get/set the layout engine to use for this primitive.
         * The default layout engine is the CanvasLayoutEngine.
         */
        layoutEngine: LayoutEngineBase;
        /**
         * Get/set the layout are of this primitive.
         * The Layout area is the zone allocated by the Layout Engine for this particular primitive. Margins/Alignment will be computed based on this area.
         * The setter should only be called by a Layout Engine class.
         */
        layoutArea: Size;
        /**
         * Get/set the layout area position (relative to the parent primitive).
         * The setter should only be called by a Layout Engine class.
         */
        layoutAreaPos: Vector2;
        /**
         * Define if the Primitive can be subject to intersection test or not (default is true)
         */
        isPickable: boolean;
        /**
         * Return the depth level of the Primitive into the Canvas' Graph. A Canvas will be 0, its direct children 1, and so on.
         */
        hierarchyDepth: number;
        /**
         * Retrieve the Group that is responsible to render this primitive
         */
        renderGroup: Group2D;
        /**
         * Get the global transformation matrix of the primitive
         */
        globalTransform: Matrix;
        /**
         * return the global position of the primitive, relative to its canvas
         */
        getGlobalPosition(): Vector2;
        /**
         * return the global position of the primitive, relative to its canvas
         * @param v the valid Vector2 object where the global position will be stored
         */
        getGlobalPositionByRef(v: Vector2): void;
        /**
         * Get invert of the global transformation matrix of the primitive
         */
        invGlobalTransform: Matrix;
        /**
         * Get the local transformation of the primitive
         */
        localTransform: Matrix;
        /**
         * Get the boundingInfo associated to the primitive and its children.
         * The value is supposed to be always up to date
         */
        boundingInfo: BoundingInfo2D;
        /**
         * Determine if the size is automatically computed or fixed because manually specified.
         * Use the actualSize property to get the final/real size of the primitive
         * @returns true if the size is automatically computed, false if it were manually specified.
         */
        isSizeAuto: boolean;
        /**
         * Determine if the position is automatically computed or fixed because manually specified.
         * Use the actualPosition property to get the final/real position of the primitive
         * @returns true if the position is automatically computed, false if it were manually specified.
         */
        isPositionAuto: boolean;
        /**
         * Interaction with the primitive can be create using this Observable. See the PrimitivePointerInfo class for more information
         */
        pointerEventObservable: Observable<PrimitivePointerInfo>;
        findById(id: string): Prim2DBase;
        protected onZOrderChanged(): void;
        protected levelIntersect(intersectInfo: IntersectInfo2D): boolean;
        /**
         * Capture all the Events of the given PointerId for this primitive.
         * Don't forget to call releasePointerEventsCapture when done.
         * @param pointerId the Id of the pointer to capture the events from.
         */
        setPointerEventCapture(pointerId: number): boolean;
        /**
         * Release a captured pointer made with setPointerEventCapture.
         * @param pointerId the Id of the pointer to release the capture from.
         */
        releasePointerEventsCapture(pointerId: number): boolean;
        /**
         * Make an intersection test with the primitive, all inputs/outputs are stored in the IntersectInfo2D class, see its documentation for more information.
         * @param intersectInfo contains the settings of the intersection to perform, to setup before calling this method as well as the result, available after a call to this method.
         */
        intersect(intersectInfo: IntersectInfo2D): boolean;
        moveChild(child: Prim2DBase, previous: Prim2DBase): boolean;
        private addChild(child);
        /**
         * Dispose the primitive, remove it from its parent.
         */
        dispose(): boolean;
        protected onPrimBecomesDirty(): void;
        _needPrepare(): boolean;
        _prepareRender(context: PrepareRender2DContext): void;
        _prepareRenderPre(context: PrepareRender2DContext): void;
        _prepareRenderPost(context: PrepareRender2DContext): void;
        protected _canvasPreInit(settings: any): void;
        protected static _isCanvasInit: boolean;
        protected static CheckParent(parent: Prim2DBase): void;
        protected updateCachedStatesOf(list: Prim2DBase[], recurse: boolean): void;
        private _parentLayoutDirty();
        protected _setLayoutDirty(): void;
        private _checkPositionChange();
        protected _positioningDirty(): void;
        private _changeLayoutEngine(engine);
        private static _t0;
        private static _t1;
        private static _t2;
        private static _v0;
        private _updateLocalTransform();
        protected updateCachedStates(recurse: boolean): void;
        private static _icPos;
        private static _icArea;
        private static _size;
        private _updatePositioning();
        /**
         * Get the content are of this primitive, this area is computed using the padding property and also possibly the primitive type itself.
         * Children of this primitive will be positioned relative to the bottom/left corner of this area.
         */
        contentArea: Size;
        _patchHierarchy(owner: Canvas2D): void;
        private _patchHierarchyDepth(child);
        /**
         * This method is used to alter the contentArea of the Primitive before margin is applied.
         * In most of the case you won't need to override this method, but it can prove some usefulness, check the Rectangle2D class for a concrete application.
         * @param primSize the current size of the primitive
         * @param initialContentPosition the position of the initial content area to compute, a valid object is passed, you have to set its properties. PLEASE ROUND the values, we're talking about pixels and fraction of them is not a good thing!
         * @param initialContentArea the size of the initial content area to compute, a valid object is passed, you have to set its properties. PLEASE ROUND the values, we're talking about pixels and fraction of them is not a good thing!
         */
        protected _getInitialContentAreaToRef(primSize: Size, initialContentPosition: Vector2, initialContentArea: Size): void;
        private _owner;
        private _parent;
        private _actionManager;
        protected _children: Array<Prim2DBase>;
        private _renderGroup;
        private _hierarchyDepth;
        protected _hierarchyDepthOffset: number;
        protected _siblingDepthOffset: number;
        private _zOrder;
        private _margin;
        private _padding;
        private _marginAlignment;
        _pointerEventObservable: Observable<PrimitivePointerInfo>;
        private _id;
        private _position;
        private _actualPosition;
        protected _size: Size;
        protected _actualSize: Size;
        _boundingSize: Size;
        protected _minSize: Size;
        protected _maxSize: Size;
        protected _desiredSize: Size;
        private _layoutEngine;
        private _marginOffset;
        private _parentMargingOffset;
        private _parentContentArea;
        private _layoutAreaPos;
        private _layoutArea;
        private _contentArea;
        private _rotation;
        private _scale;
        private _origin;
        protected _parentTransformStep: number;
        protected _globalTransformStep: number;
        protected _globalTransformProcessStep: number;
        protected _localTransform: Matrix;
        protected _globalTransform: Matrix;
        protected _invGlobalTransform: Matrix;
    }
}

declare module BABYLON {
    class Rectangle2DRenderCache extends ModelRenderCache {
        effectsReady: boolean;
        fillVB: WebGLBuffer;
        fillIB: WebGLBuffer;
        fillIndicesCount: number;
        instancingFillAttributes: InstancingAttributeInfo[];
        effectFill: Effect;
        effectFillInstanced: Effect;
        borderVB: WebGLBuffer;
        borderIB: WebGLBuffer;
        borderIndicesCount: number;
        instancingBorderAttributes: InstancingAttributeInfo[];
        effectBorder: Effect;
        effectBorderInstanced: Effect;
        constructor(engine: Engine, modelKey: string);
        render(instanceInfo: GroupInstanceInfo, context: Render2DContext): boolean;
        dispose(): boolean;
    }
    class Rectangle2DInstanceData extends Shape2DInstanceData {
        constructor(partId: number);
        properties: Vector3;
    }
    class Rectangle2D extends Shape2D {
        static actualSizeProperty: Prim2DPropInfo;
        static notRoundedProperty: Prim2DPropInfo;
        static roundRadiusProperty: Prim2DPropInfo;
        actualSize: Size;
        notRounded: boolean;
        roundRadius: number;
        private static _i0;
        private static _i1;
        private static _i2;
        protected levelIntersect(intersectInfo: IntersectInfo2D): boolean;
        protected updateLevelBoundingInfo(): void;
        /**
         * Create an Rectangle 2D Shape primitive. May be a sharp rectangle (with sharp corners), or a rounded one.
         * @param settings a combination of settings, possible ones are
         *  - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)
         *  - children: an array of direct children
         *  - id a text identifier, for information purpose
         *  - position: the X & Y positions relative to its parent. Alternatively the x and y settings can be set. Default is [0;0]
         *  - rotation: the initial rotation (in radian) of the primitive. default is 0
         *  - scale: the initial scale of the primitive. default is 1
         *  - origin: define the normalized origin point location, default [0.5;0.5]
         *  - size: the size of the group. Alternatively the width and height settings can be set. Default will be [10;10].
         *  - roundRadius: if the rectangle has rounded corner, set their radius, default is 0 (to get a sharp edges rectangle).
         *  - fill: the brush used to draw the fill content of the rectangle, you can set null to draw nothing (but you will have to set a border brush), default is a SolidColorBrush of plain white. can also be a string value (see Canvas2D.GetBrushFromString)
         *  - border: the brush used to draw the border of the rectangle, you can set null to draw nothing (but you will have to set a fill brush), default is null. can also be a string value (see Canvas2D.GetBrushFromString)
         *  - borderThickness: the thickness of the drawn border, default is 1.
         *  - isVisible: true if the primitive must be visible, false for hidden. Default is true.
         *  - marginTop: top margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginLeft: left margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginRight: right margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginBottom: bottom margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - margin: top, left, right and bottom margin formatted as a single string (see PrimitiveThickness.fromString)
         *  - marginHAlignment: one value of the PrimitiveAlignment type's static properties
         *  - marginVAlignment: one value of the PrimitiveAlignment type's static properties
         *  - marginAlignment: a string defining the alignment, see PrimitiveAlignment.fromString
         *  - paddingTop: top padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingLeft: left padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingRight: right padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingBottom: bottom padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - padding: top, left, right and bottom padding formatted as a single string (see PrimitiveThickness.fromString)
         */
        constructor(settings?: {
            parent?: Prim2DBase;
            children?: Array<Prim2DBase>;
            id?: string;
            position?: Vector2;
            x?: number;
            y?: number;
            rotation?: number;
            scale?: number;
            origin?: Vector2;
            size?: Size;
            width?: number;
            height?: number;
            roundRadius?: number;
            fill?: IBrush2D | string;
            border?: IBrush2D | string;
            borderThickness?: number;
            isVisible?: boolean;
            marginTop?: number | string;
            marginLeft?: number | string;
            marginRight?: number | string;
            marginBottom?: number | string;
            margin?: number | string;
            marginHAlignment?: number;
            marginVAlignment?: number;
            marginAlignment?: string;
            paddingTop?: number | string;
            paddingLeft?: number | string;
            paddingRight?: number | string;
            paddingBottom?: number | string;
            padding?: string;
        });
        static roundSubdivisions: number;
        protected createModelRenderCache(modelKey: string): ModelRenderCache;
        protected setupModelRenderCache(modelRenderCache: ModelRenderCache): Rectangle2DRenderCache;
        protected _getInitialContentAreaToRef(primSize: Size, initialContentPosition: Vector2, initialContentArea: Size): void;
        protected createInstanceDataParts(): InstanceDataBase[];
        protected refreshInstanceDataPart(part: InstanceDataBase): boolean;
        private _notRounded;
        private _roundRadius;
    }
}

declare module BABYLON {
    class InstanceClassInfo {
        constructor(base: InstanceClassInfo);
        mapProperty(propInfo: InstancePropInfo, push: boolean): void;
        getInstancingAttributeInfos(effect: Effect, categories: string[]): InstancingAttributeInfo[];
        getShaderAttributes(categories: string[]): string[];
        private _getBaseOffset(categories);
        static _CurCategories: string;
        private _baseInfo;
        private _nextOffset;
        private _attributes;
    }
    class InstancePropInfo {
        attributeName: string;
        category: string;
        size: number;
        shaderOffset: number;
        instanceOffset: StringDictionary<number>;
        dataType: ShaderDataType;
        delimitedCategory: string;
        constructor();
        setSize(val: any): void;
        writeData(array: Float32Array, offset: number, val: any): void;
    }
    function instanceData<T>(category?: string, shaderAttributeName?: string): (target: Object, propName: string | symbol, descriptor: TypedPropertyDescriptor<T>) => void;
    class InstanceDataBase {
        constructor(partId: number, dataElementCount: number);
        id: number;
        isVisible: boolean;
        zBias: Vector2;
        transformX: Vector4;
        transformY: Vector4;
        getClassTreeInfo(): ClassTreeInfo<InstanceClassInfo, InstancePropInfo>;
        allocElements(): void;
        freeElements(): void;
        dataElementCount: number;
        curElement: number;
        dataElements: DynamicFloatArrayElementInfo[];
        dataBuffer: DynamicFloatArray;
        typeInfo: ClassTreeInfo<InstanceClassInfo, InstancePropInfo>;
        private _dataElementCount;
    }
    abstract class RenderablePrim2D extends Prim2DBase {
        static RENDERABLEPRIM2D_PROPCOUNT: number;
        static isAlphaTestProperty: Prim2DPropInfo;
        static isTransparentProperty: Prim2DPropInfo;
        isAlphaTest: boolean;
        isTransparent: boolean;
        constructor(settings?: {
            parent?: Prim2DBase;
            id?: string;
            origin?: Vector2;
            isVisible?: boolean;
        });
        /**
         * Dispose the primitive and its resources, remove it from its parent
         */
        dispose(): boolean;
        _prepareRenderPre(context: PrepareRender2DContext): void;
        private _createModelRenderCache();
        private _createModelDataParts();
        private _setupModelRenderCache(parts);
        protected onZOrderChanged(): void;
        private _updateInstanceDataParts(gii);
        _getFirstIndexInDataBuffer(): number;
        _getLastIndexInDataBuffer(): number;
        _getNextPrimZOrder(): number;
        _getPrevPrimZOrder(): number;
        /**
         * Transform a given point using the Primitive's origin setting.
         * This method requires the Primitive's actualSize to be accurate
         * @param p the point to transform
         * @param originOffset an offset applied on the current origin before performing the transformation. Depending on which frame of reference your data is expressed you may have to apply a offset. (if you data is expressed from the bottom/left, no offset is required. If it's expressed from the center the a [-0.5;-0.5] offset has to be applied.
         * @param res an allocated Vector2 that will receive the transformed content
         */
        protected transformPointWithOriginByRef(p: Vector2, originOffset: Vector2, res: Vector2): void;
        protected transformPointWithOriginToRef(p: Vector2, originOffset: Vector2, res: Vector2): Vector2;
        /**
         * Get the info for a given effect based on the dataPart metadata
         * @param dataPartId partId in part list to get the info
         * @param vertexBufferAttributes vertex buffer attributes to manually add
         * @param useInstanced specified if Instanced Array should be used, if null the engine caps will be used (so true if WebGL supports it, false otherwise), but you have the possibility to override the engine capability. However, if you manually set true but the engine does not support Instanced Array, this method will return null
         */
        protected getDataPartEffectInfo(dataPartId: number, vertexBufferAttributes: string[], useInstanced?: boolean): {
            attributes: string[];
            uniforms: string[];
            defines: string;
        };
        protected modelRenderCache: ModelRenderCache;
        protected createModelRenderCache(modelKey: string): ModelRenderCache;
        protected setupModelRenderCache(modelRenderCache: ModelRenderCache): void;
        protected createInstanceDataParts(): InstanceDataBase[];
        protected getUsedShaderCategories(dataPart: InstanceDataBase): string[];
        protected beforeRefreshForLayoutConstruction(part: InstanceDataBase): any;
        protected afterRefreshForLayoutConstruction(part: InstanceDataBase, obj: any): void;
        protected refreshInstanceDataPart(part: InstanceDataBase): boolean;
        /**
         * Update the instanceDataBase level properties of a part
         * @param part the part to update
         * @param positionOffset to use in multi part per primitive (e.g. the Text2D has N parts for N letter to display), this give the offset to apply (e.g. the position of the letter from the bottom/left corner of the text).
         */
        protected updateInstanceDataPart(part: InstanceDataBase, positionOffset?: Vector2): void;
        private _modelRenderCache;
        private _modelRenderInstanceID;
        private _transparentPrimitiveInfo;
        protected _instanceDataParts: InstanceDataBase[];
        protected _isAlphaTest: boolean;
        protected _isTransparent: boolean;
    }
}

declare module BABYLON {
    abstract class Shape2D extends RenderablePrim2D {
        static SHAPE2D_BORDERPARTID: number;
        static SHAPE2D_FILLPARTID: number;
        static SHAPE2D_CATEGORY_BORDER: string;
        static SHAPE2D_CATEGORY_BORDERSOLID: string;
        static SHAPE2D_CATEGORY_BORDERGRADIENT: string;
        static SHAPE2D_CATEGORY_FILLSOLID: string;
        static SHAPE2D_CATEGORY_FILLGRADIENT: string;
        static SHAPE2D_PROPCOUNT: number;
        static borderProperty: Prim2DPropInfo;
        static fillProperty: Prim2DPropInfo;
        static borderThicknessProperty: Prim2DPropInfo;
        border: IBrush2D;
        /**
         * Get/set the brush to render the Fill part of the Primitive
         */
        fill: IBrush2D;
        borderThickness: number;
        constructor(settings?: {
            fill?: IBrush2D | string;
            border?: IBrush2D | string;
            borderThickness?: number;
        });
        protected getUsedShaderCategories(dataPart: InstanceDataBase): string[];
        protected refreshInstanceDataPart(part: InstanceDataBase): boolean;
        private _updateTransparencyStatus();
        private _border;
        private _borderThickness;
        private _fill;
    }
    class Shape2DInstanceData extends InstanceDataBase {
        fillSolidColor: Color4;
        fillGradientColor1: Color4;
        fillGradientColor2: Color4;
        fillGradientTY: Vector4;
        borderThickness: number;
        borderSolidColor: Color4;
        borderGradientColor1: Color4;
        borderGradientColor2: Color4;
        borderGradientTY: Vector4;
    }
}

declare module BABYLON {
    class Prim2DClassInfo {
    }
    class Prim2DPropInfo {
        static PROPKIND_MODEL: number;
        static PROPKIND_INSTANCE: number;
        static PROPKIND_DYNAMIC: number;
        id: number;
        flagId: number;
        kind: number;
        name: string;
        dirtyBoundingInfo: boolean;
        typeLevelCompare: boolean;
    }
    /**
     * Custom type of the propertyChanged observable
     */
    class PropertyChangedInfo {
        /**
         * Previous value of the property
         */
        oldValue: any;
        /**
         * New value of the property
         */
        newValue: any;
        /**
         * Name of the property that changed its value
         */
        propertyName: string;
    }
    /**
     * Property Changed interface
     */
    interface IPropertyChanged {
        /**
         * PropertyChanged observable
         */
        propertyChanged: Observable<PropertyChangedInfo>;
    }
    class ClassTreeInfo<TClass, TProp> {
        constructor(baseClass: ClassTreeInfo<TClass, TProp>, type: Object, classContentFactory: (base: TClass) => TClass);
        classContent: TClass;
        type: Object;
        levelContent: StringDictionary<TProp>;
        fullContent: StringDictionary<TProp>;
        getLevelOf(type: Object): ClassTreeInfo<TClass, TProp>;
        getOrAddType(baseType: Object, type: Object): ClassTreeInfo<TClass, TProp>;
        static get<TClass, TProp>(type: Object): ClassTreeInfo<TClass, TProp>;
        static getOrRegister<TClass, TProp>(type: Object, classContentFactory: (base: TClass) => TClass): ClassTreeInfo<TClass, TProp>;
        private _type;
        private _classContent;
        private _baseClass;
        private _subClasses;
        private _levelContent;
        private _fullContent;
        private _classContentFactory;
    }
    abstract class SmartPropertyPrim implements IPropertyChanged {
        constructor();
        /**
         * An observable that is triggered when a property (using of the XXXXLevelProperty decorator) has its value changing.
         * You can add an observer that will be triggered only for a given set of Properties using the Mask feature of the Observable and the corresponding Prim2DPropInfo.flagid value (e.g. Prim2DBase.positionProperty.flagid|Prim2DBase.rotationProperty.flagid to be notified only about position or rotation change)
         */
        propertyChanged: Observable<PropertyChangedInfo>;
        /**
         * Check if the object is disposed or not.
         * @returns true if the object is dispose, false otherwise.
         */
        isDisposed: boolean;
        /**
         * Disposable pattern, this method must be overloaded by derived types in order to clean up hardware related resources.
         * @returns false if the object is already dispose, true otherwise. Your implementation must call super.dispose() and check for a false return and return immediately if it's the case.
         */
        dispose(): boolean;
        /**
         * Animation array, more info: http://doc.babylonjs.com/tutorials/Animations
         */
        animations: Animation[];
        /**
         * Returns as a new array populated with the Animatable used by the primitive. Must be overloaded by derived primitives.
         * Look at Sprite2D for more information
         */
        getAnimatables(): IAnimatable[];
        /**
         * Property giving the Model Key associated to the property.
         * This value is constructed from the type of the primitive and all the name/value of its properties declared with the modelLevelProperty decorator
         * @returns the model key string.
         */
        modelKey: string;
        /**
         * States if the Primitive is dirty and should be rendered again next time.
         * @returns true is dirty, false otherwise
         */
        isDirty: boolean;
        /**
         * Access the dictionary of properties metadata. Only properties decorated with XXXXLevelProperty are concerned
         * @returns the dictionary, the key is the property name as declared in Javascript, the value is the metadata object
         */
        private propDic;
        private static _createPropInfo(target, propName, propId, dirtyBoundingInfo, typeLevelCompare, kind);
        private static _checkUnchanged(curValue, newValue);
        private static propChangedInfo;
        markAsDirty(propertyName: string): void;
        protected _boundingBoxDirty(): void;
        private _handlePropChanged<T>(curValue, newValue, propName, propInfo, typeLevelCompare);
        protected onPrimitivePropertyDirty(propFlagId: number): void;
        protected handleGroupChanged(prop: Prim2DPropInfo): void;
        /**
         * Check if a given set of properties are dirty or not.
         * @param flags a ORed combination of Prim2DPropInfo.flagId values
         * @return true if at least one property is dirty, false if none of them are.
         */
        checkPropertiesDirty(flags: number): boolean;
        /**
         * Clear a given set of properties.
         * @param flags a ORed combination of Prim2DPropInfo.flagId values
         * @return the new set of property still marked as dirty
         */
        protected clearPropertiesDirty(flags: number): number;
        _resetPropertiesDirty(): void;
        /**
         * Retrieve the boundingInfo for this Primitive, computed based on the primitive itself and NOT its children
         */
        levelBoundingInfo: BoundingInfo2D;
        /**
         * This method must be overridden by a given Primitive implementation to compute its boundingInfo
         */
        protected updateLevelBoundingInfo(): void;
        /**
         * Property method called when the Primitive becomes dirty
         */
        protected onPrimBecomesDirty(): void;
        static _hookProperty<T>(propId: number, piStore: (pi: Prim2DPropInfo) => void, typeLevelCompare: boolean, dirtyBoundingInfo: boolean, kind: number): (target: Object, propName: string | symbol, descriptor: TypedPropertyDescriptor<T>) => void;
        /**
         * Add an externally attached data from its key.
         * This method call will fail and return false, if such key already exists.
         * If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.
         * @param key the unique key that identifies the data
         * @param data the data object to associate to the key for this Engine instance
         * @return true if no such key were already present and the data was added successfully, false otherwise
         */
        addExternalData<T>(key: string, data: T): boolean;
        /**
         * Get an externally attached data from its key
         * @param key the unique key that identifies the data
         * @return the associated data, if present (can be null), or undefined if not present
         */
        getExternalData<T>(key: string): T;
        /**
         * Get an externally attached data from its key, create it using a factory if it's not already present
         * @param key the unique key that identifies the data
         * @param factory the factory that will be called to create the instance if and only if it doesn't exists
         * @return the associated data, can be null if the factory returned null.
         */
        getOrAddExternalDataWithFactory<T>(key: string, factory: (k: string) => T): T;
        /**
         * Remove an externally attached data from the Engine instance
         * @param key the unique key that identifies the data
         * @return true if the data was successfully removed, false if it doesn't exist
         */
        removeExternalData(key: any): boolean;
        /**
         * Check if a given flag is set
         * @param flag the flag value
         * @return true if set, false otherwise
         */
        _isFlagSet(flag: number): boolean;
        /**
         * Check if all given flags are set
         * @param flags the flags ORed
         * @return true if all the flags are set, false otherwise
         */
        _areAllFlagsSet(flags: number): boolean;
        /**
         * Check if at least one flag of the given flags is set
         * @param flags the flags ORed
         * @return true if at least one flag is set, false otherwise
         */
        _areSomeFlagsSet(flags: number): boolean;
        /**
         * Clear the given flags
         * @param flags the flags to clear
         */
        _clearFlags(flags: number): void;
        /**
         * Set the given flags to true state
         * @param flags the flags ORed to set
         * @return the flags state before this call
         */
        _setFlags(flags: number): number;
        /**
         * Change the state of the given flags
         * @param flags the flags ORed to change
         * @param state true to set them, false to clear them
         */
        _changeFlags(flags: number, state: boolean): void;
        static flagIsDisposed: number;
        static flagLevelBoundingInfoDirty: number;
        static flagModelDirty: number;
        static flagLayoutDirty: number;
        static flagLevelVisible: number;
        static flagBoundingInfoDirty: number;
        static flagIsPickable: number;
        static flagIsVisible: number;
        static flagVisibilityChanged: number;
        static flagPositioningDirty: number;
        static flagTrackedGroup: number;
        private _flags;
        private _externalData;
        private _modelKey;
        private _propInfo;
        protected _levelBoundingInfo: BoundingInfo2D;
        protected _boundingInfo: BoundingInfo2D;
        protected _instanceDirtyFlags: number;
    }
    function modelLevelProperty<T>(propId: number, piStore: (pi: Prim2DPropInfo) => void, typeLevelCompare?: boolean, dirtyBoundingInfo?: boolean): (target: Object, propName: string | symbol, descriptor: TypedPropertyDescriptor<T>) => void;
    function instanceLevelProperty<T>(propId: number, piStore: (pi: Prim2DPropInfo) => void, typeLevelCompare?: boolean, dirtyBoundingInfo?: boolean): (target: Object, propName: string | symbol, descriptor: TypedPropertyDescriptor<T>) => void;
    function dynamicLevelProperty<T>(propId: number, piStore: (pi: Prim2DPropInfo) => void, typeLevelCompare?: boolean, dirtyBoundingInfo?: boolean): (target: Object, propName: string | symbol, descriptor: TypedPropertyDescriptor<T>) => void;
}

declare module BABYLON {
    class Sprite2DRenderCache extends ModelRenderCache {
        effectsReady: boolean;
        vb: WebGLBuffer;
        ib: WebGLBuffer;
        instancingAttributes: InstancingAttributeInfo[];
        texture: Texture;
        effect: Effect;
        effectInstanced: Effect;
        render(instanceInfo: GroupInstanceInfo, context: Render2DContext): boolean;
        dispose(): boolean;
    }
    class Sprite2DInstanceData extends InstanceDataBase {
        constructor(partId: number);
        topLeftUV: Vector2;
        sizeUV: Vector2;
        textureSize: Vector2;
        properties: Vector3;
    }
    class Sprite2D extends RenderablePrim2D {
        static SPRITE2D_MAINPARTID: number;
        static textureProperty: Prim2DPropInfo;
        static actualSizeProperty: Prim2DPropInfo;
        static spriteLocationProperty: Prim2DPropInfo;
        static spriteFrameProperty: Prim2DPropInfo;
        static invertYProperty: Prim2DPropInfo;
        static alignToPixelProperty: Prim2DPropInfo;
        texture: Texture;
        actualSize: Size;
        spriteLocation: Vector2;
        spriteFrame: number;
        invertY: boolean;
        /**
         * Get/set if the sprite rendering should be aligned to the target rendering device pixel or not
         */
        alignToPixel: boolean;
        protected updateLevelBoundingInfo(): void;
        /**
         * Get the animatable array (see http://doc.babylonjs.com/tutorials/Animations)
         */
        getAnimatables(): IAnimatable[];
        protected levelIntersect(intersectInfo: IntersectInfo2D): boolean;
        /**
         * Create an 2D Sprite primitive
         * @param texture the texture that stores the sprite to render
         * @param settings a combination of settings, possible ones are
         *  - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)
         *  - children: an array of direct children
         *  - id a text identifier, for information purpose
         *  - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]
         *  - rotation: the initial rotation (in radian) of the primitive. default is 0
         *  - scale: the initial scale of the primitive. default is 1
         *  - origin: define the normalized origin point location, default [0.5;0.5]
         *  - spriteSize: the size of the sprite (in pixels), if null the size of the given texture will be used, default is null.
         *  - spriteLocation: the location (in pixels) in the texture of the top/left corner of the Sprite to display, default is null (0,0)
         *  - invertY: if true the texture Y will be inverted, default is false.
         *  - alignToPixel: if true the sprite's texels will be aligned to the rendering viewport pixels, ensuring the best rendering quality but slow animations won't be done as smooth as if you set false. If false a texel could lies between two pixels, being blended by the texture sampling mode you choose, the rendering result won't be as good, but very slow animation will be overall better looking. Default is true: content will be aligned.
         *  - isVisible: true if the sprite must be visible, false for hidden. Default is true.
         *  - marginTop: top margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginLeft: left margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginRight: right margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginBottom: bottom margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - margin: top, left, right and bottom margin formatted as a single string (see PrimitiveThickness.fromString)
         *  - marginHAlignment: one value of the PrimitiveAlignment type's static properties
         *  - marginVAlignment: one value of the PrimitiveAlignment type's static properties
         *  - marginAlignment: a string defining the alignment, see PrimitiveAlignment.fromString
         *  - paddingTop: top padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingLeft: left padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingRight: right padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingBottom: bottom padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - padding: top, left, right and bottom padding formatted as a single string (see PrimitiveThickness.fromString)
         */
        constructor(texture: Texture, settings?: {
            parent?: Prim2DBase;
            children?: Array<Prim2DBase>;
            id?: string;
            position?: Vector2;
            x?: number;
            y?: number;
            rotation?: number;
            scale?: number;
            origin?: Vector2;
            spriteSize?: Size;
            spriteLocation?: Vector2;
            invertY?: boolean;
            alignToPixel?: boolean;
            isVisible?: boolean;
            marginTop?: number | string;
            marginLeft?: number | string;
            marginRight?: number | string;
            marginBottom?: number | string;
            margin?: number | string;
            marginHAlignment?: number;
            marginVAlignment?: number;
            marginAlignment?: string;
            paddingTop?: number | string;
            paddingLeft?: number | string;
            paddingRight?: number | string;
            paddingBottom?: number | string;
            padding?: string;
        });
        static _createCachedCanvasSprite(owner: Canvas2D, texture: MapTexture, size: Size, pos: Vector2): Sprite2D;
        protected createModelRenderCache(modelKey: string): ModelRenderCache;
        protected setupModelRenderCache(modelRenderCache: ModelRenderCache): Sprite2DRenderCache;
        protected createInstanceDataParts(): InstanceDataBase[];
        private static _prop;
        protected refreshInstanceDataPart(part: InstanceDataBase): boolean;
        private _texture;
        private _location;
        private _spriteFrame;
        private _invertY;
        private _alignToPixel;
    }
}

declare module BABYLON {
    class Text2DRenderCache extends ModelRenderCache {
        effectsReady: boolean;
        vb: WebGLBuffer;
        ib: WebGLBuffer;
        instancingAttributes: InstancingAttributeInfo[];
        fontTexture: FontTexture;
        effect: Effect;
        effectInstanced: Effect;
        render(instanceInfo: GroupInstanceInfo, context: Render2DContext): boolean;
        dispose(): boolean;
    }
    class Text2DInstanceData extends InstanceDataBase {
        constructor(partId: number, dataElementCount: number);
        topLeftUV: Vector2;
        sizeUV: Vector2;
        textureSize: Vector2;
        color: Color4;
    }
    class Text2D extends RenderablePrim2D {
        static TEXT2D_MAINPARTID: number;
        static fontProperty: Prim2DPropInfo;
        static defaultFontColorProperty: Prim2DPropInfo;
        static textProperty: Prim2DPropInfo;
        static sizeProperty: Prim2DPropInfo;
        fontName: string;
        defaultFontColor: Color4;
        text: string;
        size: Size;
        /**
         * Get the actual size of the Text2D primitive
         */
        actualSize: Size;
        /**
         * Get the area that bounds the text associated to the primitive
         */
        textSize: Size;
        protected fontTexture: FontTexture;
        /**
         * Dispose the primitive, remove it from its parent
         */
        dispose(): boolean;
        protected updateLevelBoundingInfo(): void;
        /**
         * Create a Text primitive
         * @param text the text to display
         * @param settings a combination of settings, possible ones are
         *  - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)
         *  - children: an array of direct children
         *  - id a text identifier, for information purpose
         *  - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]
         *  - rotation: the initial rotation (in radian) of the primitive. default is 0
         *  - scale: the initial scale of the primitive. default is 1
         *  - origin: define the normalized origin point location, default [0.5;0.5]
         *  - fontName: the name/size/style of the font to use, following the CSS notation. Default is "12pt Arial".
         *  - defaultColor: the color by default to apply on each letter of the text to display, default is plain white.
         *  - areaSize: the size of the area in which to display the text, default is auto-fit from text content.
         *  - tabulationSize: number of space character to insert when a tabulation is encountered, default is 4
         *  - isVisible: true if the text must be visible, false for hidden. Default is true.
         *  - marginTop: top margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginLeft: left margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginRight: right margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - marginBottom: bottom margin, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - margin: top, left, right and bottom margin formatted as a single string (see PrimitiveThickness.fromString)
         *  - marginHAlignment: one value of the PrimitiveAlignment type's static properties
         *  - marginVAlignment: one value of the PrimitiveAlignment type's static properties
         *  - marginAlignment: a string defining the alignment, see PrimitiveAlignment.fromString
         *  - paddingTop: top padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingLeft: left padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingRight: right padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - paddingBottom: bottom padding, can be a number (will be pixels) or a string (see PrimitiveThickness.fromString)
         *  - padding: top, left, right and bottom padding formatted as a single string (see PrimitiveThickness.fromString)
         */
        constructor(text: string, settings?: {
            parent?: Prim2DBase;
            children?: Array<Prim2DBase>;
            id?: string;
            position?: Vector2;
            x?: number;
            y?: number;
            rotation?: number;
            scale?: number;
            origin?: Vector2;
            fontName?: string;
            defaultFontColor?: Color4;
            size?: Size;
            tabulationSize?: number;
            isVisible?: boolean;
            marginTop?: number | string;
            marginLeft?: number | string;
            marginRight?: number | string;
            marginBottom?: number | string;
            margin?: number | string;
            marginHAlignment?: number;
            marginVAlignment?: number;
            marginAlignment?: string;
            paddingTop?: number | string;
            paddingLeft?: number | string;
            paddingRight?: number | string;
            paddingBottom?: number | string;
            padding?: string;
        });
        protected levelIntersect(intersectInfo: IntersectInfo2D): boolean;
        protected createModelRenderCache(modelKey: string): ModelRenderCache;
        protected setupModelRenderCache(modelRenderCache: ModelRenderCache): Text2DRenderCache;
        protected createInstanceDataParts(): InstanceDataBase[];
        protected beforeRefreshForLayoutConstruction(part: InstanceDataBase): any;
        protected afterRefreshForLayoutConstruction(part: InstanceDataBase, obj: any): void;
        protected refreshInstanceDataPart(part: InstanceDataBase): boolean;
        private _updateCharCount();
        private _fontTexture;
        private _tabulationSize;
        private _charCount;
        private _fontName;
        private _defaultFontColor;
        private _text;
        private _textSize;
    }
}

declare module BABYLON {
    /**
     * This is the class that is used to display a World Space Canvas into a 3D scene
     */
    class WorldSpaceCanvas2DNode extends Mesh {
        constructor(name: string, scene: Scene, canvas: Canvas2D);
        dispose(): void;
        private _canvas;
    }
}

declare module BABYLON {
    class Collider {
        radius: Vector3;
        retry: number;
        velocity: Vector3;
        basePoint: Vector3;
        epsilon: number;
        collisionFound: boolean;
        velocityWorldLength: number;
        basePointWorld: Vector3;
        velocityWorld: Vector3;
        normalizedVelocity: Vector3;
        initialVelocity: Vector3;
        initialPosition: Vector3;
        nearestDistance: number;
        intersectionPoint: Vector3;
        collidedMesh: AbstractMesh;
        private _collisionPoint;
        private _planeIntersectionPoint;
        private _tempVector;
        private _tempVector2;
        private _tempVector3;
        private _tempVector4;
        private _edge;
        private _baseToVertex;
        private _destinationPoint;
        private _slidePlaneNormal;
        private _displacementVector;
        _initialize(source: Vector3, dir: Vector3, e: number): void;
        _checkPointInTriangle(point: Vector3, pa: Vector3, pb: Vector3, pc: Vector3, n: Vector3): boolean;
        _canDoCollision(sphereCenter: Vector3, sphereRadius: number, vecMin: Vector3, vecMax: Vector3): boolean;
        _testTriangle(faceIndex: number, trianglePlaneArray: Array<Plane>, p1: Vector3, p2: Vector3, p3: Vector3, hasMaterial: boolean): void;
        _collide(trianglePlaneArray: Array<Plane>, pts: Vector3[], indices: number[] | Int32Array, indexStart: number, indexEnd: number, decal: number, hasMaterial: boolean): void;
        _getResponse(pos: Vector3, vel: Vector3): void;
    }
}

declare module BABYLON {
    var CollisionWorker: string;
    interface ICollisionCoordinator {
        getNewPosition(position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, excludedMesh: AbstractMesh, onNewPosition: (collisionIndex: number, newPosition: Vector3, collidedMesh?: AbstractMesh) => void, collisionIndex: number): void;
        init(scene: Scene): void;
        destroy(): void;
        onMeshAdded(mesh: AbstractMesh): any;
        onMeshUpdated(mesh: AbstractMesh): any;
        onMeshRemoved(mesh: AbstractMesh): any;
        onGeometryAdded(geometry: Geometry): any;
        onGeometryUpdated(geometry: Geometry): any;
        onGeometryDeleted(geometry: Geometry): any;
    }
    interface SerializedMesh {
        id: string;
        name: string;
        uniqueId: number;
        geometryId: string;
        sphereCenter: Array<number>;
        sphereRadius: number;
        boxMinimum: Array<number>;
        boxMaximum: Array<number>;
        worldMatrixFromCache: any;
        subMeshes: Array<SerializedSubMesh>;
        checkCollisions: boolean;
    }
    interface SerializedSubMesh {
        position: number;
        verticesStart: number;
        verticesCount: number;
        indexStart: number;
        indexCount: number;
        hasMaterial: boolean;
        sphereCenter: Array<number>;
        sphereRadius: number;
        boxMinimum: Array<number>;
        boxMaximum: Array<number>;
    }
    interface SerializedGeometry {
        id: string;
        positions: Float32Array;
        indices: Int32Array;
        normals: Float32Array;
    }
    interface BabylonMessage {
        taskType: WorkerTaskType;
        payload: InitPayload | CollidePayload | UpdatePayload;
    }
    interface SerializedColliderToWorker {
        position: Array<number>;
        velocity: Array<number>;
        radius: Array<number>;
    }
    enum WorkerTaskType {
        INIT = 0,
        UPDATE = 1,
        COLLIDE = 2,
    }
    interface WorkerReply {
        error: WorkerReplyType;
        taskType: WorkerTaskType;
        payload?: any;
    }
    interface CollisionReplyPayload {
        newPosition: Array<number>;
        collisionId: number;
        collidedMeshUniqueId: number;
    }
    interface InitPayload {
    }
    interface CollidePayload {
        collisionId: number;
        collider: SerializedColliderToWorker;
        maximumRetry: number;
        excludedMeshUniqueId?: number;
    }
    interface UpdatePayload {
        updatedMeshes: {
            [n: number]: SerializedMesh;
        };
        updatedGeometries: {
            [s: string]: SerializedGeometry;
        };
        removedMeshes: Array<number>;
        removedGeometries: Array<string>;
    }
    enum WorkerReplyType {
        SUCCESS = 0,
        UNKNOWN_ERROR = 1,
    }
    class CollisionCoordinatorWorker implements ICollisionCoordinator {
        private _scene;
        private _scaledPosition;
        private _scaledVelocity;
        private _collisionsCallbackArray;
        private _init;
        private _runningUpdated;
        private _runningCollisionTask;
        private _worker;
        private _addUpdateMeshesList;
        private _addUpdateGeometriesList;
        private _toRemoveMeshesArray;
        private _toRemoveGeometryArray;
        constructor();
        static SerializeMesh: (mesh: AbstractMesh) => SerializedMesh;
        static SerializeGeometry: (geometry: Geometry) => SerializedGeometry;
        getNewPosition(position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, excludedMesh: AbstractMesh, onNewPosition: (collisionIndex: number, newPosition: Vector3, collidedMesh?: AbstractMesh) => void, collisionIndex: number): void;
        init(scene: Scene): void;
        destroy(): void;
        onMeshAdded(mesh: AbstractMesh): void;
        onMeshUpdated: (mesh: AbstractMesh) => void;
        onMeshRemoved(mesh: AbstractMesh): void;
        onGeometryAdded(geometry: Geometry): void;
        onGeometryUpdated: (geometry: Geometry) => void;
        onGeometryDeleted(geometry: Geometry): void;
        private _afterRender;
        private _onMessageFromWorker;
    }
    class CollisionCoordinatorLegacy implements ICollisionCoordinator {
        private _scene;
        private _scaledPosition;
        private _scaledVelocity;
        private _finalPosition;
        getNewPosition(position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, excludedMesh: AbstractMesh, onNewPosition: (collisionIndex: number, newPosition: Vector3, collidedMesh?: AbstractMesh) => void, collisionIndex: number): void;
        init(scene: Scene): void;
        destroy(): void;
        onMeshAdded(mesh: AbstractMesh): void;
        onMeshUpdated(mesh: AbstractMesh): void;
        onMeshRemoved(mesh: AbstractMesh): void;
        onGeometryAdded(geometry: Geometry): void;
        onGeometryUpdated(geometry: Geometry): void;
        onGeometryDeleted(geometry: Geometry): void;
        private _collideWithWorld(position, velocity, collider, maximumRetry, finalPosition, excludedMesh?);
    }
}

declare module BABYLON {
    var WorkerIncluded: boolean;
    class CollisionCache {
        private _meshes;
        private _geometries;
        getMeshes(): {
            [n: number]: SerializedMesh;
        };
        getGeometries(): {
            [s: number]: SerializedGeometry;
        };
        getMesh(id: any): SerializedMesh;
        addMesh(mesh: SerializedMesh): void;
        removeMesh(uniqueId: number): void;
        getGeometry(id: string): SerializedGeometry;
        addGeometry(geometry: SerializedGeometry): void;
        removeGeometry(id: string): void;
    }
    class CollideWorker {
        collider: Collider;
        private _collisionCache;
        private finalPosition;
        private collisionsScalingMatrix;
        private collisionTranformationMatrix;
        constructor(collider: Collider, _collisionCache: CollisionCache, finalPosition: Vector3);
        collideWithWorld(position: Vector3, velocity: Vector3, maximumRetry: number, excludedMeshUniqueId?: number): void;
        private checkCollision(mesh);
        private processCollisionsForSubMeshes(transformMatrix, mesh);
        private collideForSubMesh(subMesh, transformMatrix, meshGeometry);
        private checkSubmeshCollision(subMesh);
    }
    interface ICollisionDetector {
        onInit(payload: InitPayload): void;
        onUpdate(payload: UpdatePayload): void;
        onCollision(payload: CollidePayload): void;
    }
    class CollisionDetectorTransferable implements ICollisionDetector {
        private _collisionCache;
        onInit(payload: InitPayload): void;
        onUpdate(payload: UpdatePayload): void;
        onCollision(payload: CollidePayload): void;
    }
}

declare module BABYLON {
    class IntersectionInfo {
        bu: number;
        bv: number;
        distance: number;
        faceId: number;
        subMeshId: number;
        constructor(bu: number, bv: number, distance: number);
    }
    class PickingInfo {
        hit: boolean;
        distance: number;
        pickedPoint: Vector3;
        pickedMesh: AbstractMesh;
        bu: number;
        bv: number;
        faceId: number;
        subMeshId: number;
        pickedSprite: Sprite;
        getNormal(useWorldCoordinates?: boolean, useVerticesNormals?: boolean): Vector3;
        getTextureCoordinates(): Vector2;
    }
}

declare module BABYLON {
    class BoundingBox {
        minimum: Vector3;
        maximum: Vector3;
        vectors: Vector3[];
        center: Vector3;
        extendSize: Vector3;
        directions: Vector3[];
        vectorsWorld: Vector3[];
        minimumWorld: Vector3;
        maximumWorld: Vector3;
        private _worldMatrix;
        constructor(minimum: Vector3, maximum: Vector3);
        getWorldMatrix(): Matrix;
        setWorldMatrix(matrix: Matrix): BoundingBox;
        _update(world: Matrix): void;
        isInFrustum(frustumPlanes: Plane[]): boolean;
        isCompletelyInFrustum(frustumPlanes: Plane[]): boolean;
        intersectsPoint(point: Vector3): boolean;
        intersectsSphere(sphere: BoundingSphere): boolean;
        intersectsMinMax(min: Vector3, max: Vector3): boolean;
        static Intersects(box0: BoundingBox, box1: BoundingBox): boolean;
        static IntersectsSphere(minPoint: Vector3, maxPoint: Vector3, sphereCenter: Vector3, sphereRadius: number): boolean;
        static IsCompletelyInFrustum(boundingVectors: Vector3[], frustumPlanes: Plane[]): boolean;
        static IsInFrustum(boundingVectors: Vector3[], frustumPlanes: Plane[]): boolean;
    }
}

declare module BABYLON {
    class BoundingInfo {
        minimum: Vector3;
        maximum: Vector3;
        boundingBox: BoundingBox;
        boundingSphere: BoundingSphere;
        private _isLocked;
        constructor(minimum: Vector3, maximum: Vector3);
        isLocked: boolean;
        update(world: Matrix): void;
        isInFrustum(frustumPlanes: Plane[]): boolean;
        isCompletelyInFrustum(frustumPlanes: Plane[]): boolean;
        _checkCollision(collider: Collider): boolean;
        intersectsPoint(point: Vector3): boolean;
        intersects(boundingInfo: BoundingInfo, precise: boolean): boolean;
    }
}

declare module BABYLON {
    class BoundingSphere {
        minimum: Vector3;
        maximum: Vector3;
        center: Vector3;
        radius: number;
        centerWorld: Vector3;
        radiusWorld: number;
        private _tempRadiusVector;
        constructor(minimum: Vector3, maximum: Vector3);
        _update(world: Matrix): void;
        isInFrustum(frustumPlanes: Plane[]): boolean;
        intersectsPoint(point: Vector3): boolean;
        static Intersects(sphere0: BoundingSphere, sphere1: BoundingSphere): boolean;
    }
}

declare module BABYLON {
    class Ray {
        origin: Vector3;
        direction: Vector3;
        length: number;
        private _edge1;
        private _edge2;
        private _pvec;
        private _tvec;
        private _qvec;
        constructor(origin: Vector3, direction: Vector3, length?: number);
        intersectsBoxMinMax(minimum: Vector3, maximum: Vector3): boolean;
        intersectsBox(box: BoundingBox): boolean;
        intersectsSphere(sphere: BoundingSphere): boolean;
        intersectsTriangle(vertex0: Vector3, vertex1: Vector3, vertex2: Vector3): IntersectionInfo;
        intersectsPlane(plane: Plane): number;
        private static smallnum;
        private static rayl;
        /**
         * Intersection test between the ray and a given segment whithin a given tolerance (threshold)
         * @param sega the first point of the segment to test the intersection against
         * @param segb the second point of the segment to test the intersection against
         * @param threshold the tolerance margin, if the ray doesn't intersect the segment but is close to the given threshold, the intersection is successful
         * @return the distance from the ray origin to the intersection point if there's intersection, or -1 if there's no intersection
         */
        intersectionSegment(sega: Vector3, segb: Vector3, threshold: number): number;
        static CreateNew(x: number, y: number, viewportWidth: number, viewportHeight: number, world: Matrix, view: Matrix, projection: Matrix): Ray;
        /**
        * Function will create a new transformed ray starting from origin and ending at the end point. Ray's length will be set, and ray will be
        * transformed to the given world matrix.
        * @param origin The origin point
        * @param end The end point
        * @param world a matrix to transform the ray to. Default is the identity matrix.
        */
        static CreateNewFromTo(origin: Vector3, end: Vector3, world?: Matrix): Ray;
        static Transform(ray: Ray, matrix: Matrix): Ray;
    }
}

declare module BABYLON {
    class Layer {
        name: string;
        texture: Texture;
        isBackground: boolean;
        color: Color4;
        scale: Vector2;
        offset: Vector2;
        alphaBlendingMode: number;
        alphaTest: boolean;
        private _scene;
        private _vertexBuffers;
        private _indexBuffer;
        private _effect;
        private _alphaTestEffect;
        /**
        * An event triggered when the layer is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<Layer>;
        private _onDisposeObserver;
        onDispose: () => void;
        /**
        * An event triggered before rendering the scene
        * @type {BABYLON.Observable}
        */
        onBeforeRenderObservable: Observable<Layer>;
        private _onBeforeRenderObserver;
        onBeforeRender: () => void;
        /**
        * An event triggered after rendering the scene
        * @type {BABYLON.Observable}
        */
        onAfterRenderObservable: Observable<Layer>;
        private _onAfterRenderObserver;
        onAfterRender: () => void;
        constructor(name: string, imgUrl: string, scene: Scene, isBackground?: boolean, color?: Color4);
        render(): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class LensFlare {
        size: number;
        position: number;
        color: Color3;
        texture: Texture;
        private _system;
        constructor(size: number, position: number, color: any, imgUrl: string, system: LensFlareSystem);
        dispose: () => void;
    }
}

declare module BABYLON {
    class LensFlareSystem {
        name: string;
        lensFlares: LensFlare[];
        borderLimit: number;
        meshesSelectionPredicate: (mesh: Mesh) => boolean;
        layerMask: number;
        id: string;
        private _scene;
        private _emitter;
        private _vertexBuffers;
        private _indexBuffer;
        private _effect;
        private _positionX;
        private _positionY;
        private _isEnabled;
        constructor(name: string, emitter: any, scene: Scene);
        isEnabled: boolean;
        getScene(): Scene;
        getEmitter(): any;
        setEmitter(newEmitter: any): void;
        getEmitterPosition(): Vector3;
        computeEffectivePosition(globalViewport: Viewport): boolean;
        _isVisible(): boolean;
        render(): boolean;
        dispose(): void;
        static Parse(parsedLensFlareSystem: any, scene: Scene, rootUrl: string): LensFlareSystem;
        serialize(): any;
    }
}

declare module BABYLON {
    class DirectionalLight extends Light implements IShadowLight {
        position: Vector3;
        direction: Vector3;
        private _transformedDirection;
        transformedPosition: Vector3;
        private _worldMatrix;
        shadowOrthoScale: number;
        autoUpdateExtends: boolean;
        private _orthoLeft;
        private _orthoRight;
        private _orthoTop;
        private _orthoBottom;
        constructor(name: string, direction: Vector3, scene: Scene);
        getAbsolutePosition(): Vector3;
        setDirectionToTarget(target: Vector3): Vector3;
        setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
        supportsVSM(): boolean;
        needRefreshPerFrame(): boolean;
        needCube(): boolean;
        getShadowDirection(faceIndex?: number): Vector3;
        computeTransformedPosition(): boolean;
        transferToEffect(effect: Effect, directionUniformName: string): void;
        _getWorldMatrix(): Matrix;
        getTypeID(): number;
    }
}

declare module BABYLON {
    class HemisphericLight extends Light {
        groundColor: Color3;
        direction: Vector3;
        private _worldMatrix;
        constructor(name: string, direction: Vector3, scene: Scene);
        setDirectionToTarget(target: Vector3): Vector3;
        getShadowGenerator(): ShadowGenerator;
        transferToEffect(effect: Effect, directionUniformName: string, groundColorUniformName: string): void;
        _getWorldMatrix(): Matrix;
        getTypeID(): number;
    }
}

declare module BABYLON {
    interface IShadowLight {
        id: string;
        position: Vector3;
        transformedPosition: Vector3;
        name: string;
        computeTransformedPosition(): boolean;
        getScene(): Scene;
        setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
        supportsVSM(): boolean;
        needRefreshPerFrame(): boolean;
        needCube(): boolean;
        getShadowDirection(faceIndex?: number): Vector3;
        _shadowGenerator: ShadowGenerator;
    }
    class Light extends Node {
        diffuse: Color3;
        specular: Color3;
        intensity: number;
        range: number;
        includeOnlyWithLayerMask: number;
        includedOnlyMeshes: AbstractMesh[];
        excludedMeshes: AbstractMesh[];
        excludeWithLayerMask: number;
        radius: number;
        _shadowGenerator: ShadowGenerator;
        private _parentedWorldMatrix;
        _excludedMeshesIds: string[];
        _includedOnlyMeshesIds: string[];
        constructor(name: string, scene: Scene);
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        getShadowGenerator(): ShadowGenerator;
        getAbsolutePosition(): Vector3;
        transferToEffect(effect: Effect, uniformName0?: string, uniformName1?: string): void;
        _getWorldMatrix(): Matrix;
        canAffectMesh(mesh: AbstractMesh): boolean;
        getWorldMatrix(): Matrix;
        dispose(): void;
        getTypeID(): number;
        clone(name: string): Light;
        serialize(): any;
        static GetConstructorFromName(type: number, name: string, scene: Scene): () => Light;
        static Parse(parsedLight: any, scene: Scene): Light;
    }
}

declare module BABYLON {
    class PointLight extends Light implements IShadowLight {
        private _worldMatrix;
        transformedPosition: Vector3;
        position: Vector3;
        constructor(name: string, position: Vector3, scene: Scene);
        getAbsolutePosition(): Vector3;
        computeTransformedPosition(): boolean;
        transferToEffect(effect: Effect, positionUniformName: string): void;
        needCube(): boolean;
        supportsVSM(): boolean;
        needRefreshPerFrame(): boolean;
        getShadowDirection(faceIndex?: number): Vector3;
        setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
        _getWorldMatrix(): Matrix;
        getTypeID(): number;
    }
}

declare module BABYLON {
    class SpotLight extends Light implements IShadowLight {
        position: Vector3;
        direction: Vector3;
        angle: number;
        exponent: number;
        transformedPosition: Vector3;
        private _transformedDirection;
        private _worldMatrix;
        constructor(name: string, position: Vector3, direction: Vector3, angle: number, exponent: number, scene: Scene);
        getAbsolutePosition(): Vector3;
        setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
        needCube(): boolean;
        supportsVSM(): boolean;
        needRefreshPerFrame(): boolean;
        getShadowDirection(faceIndex?: number): Vector3;
        setDirectionToTarget(target: Vector3): Vector3;
        computeTransformedPosition(): boolean;
        transferToEffect(effect: Effect, positionUniformName: string, directionUniformName: string): void;
        _getWorldMatrix(): Matrix;
        getTypeID(): number;
    }
}

declare module BABYLON {
    interface ISceneLoaderPlugin {
        extensions: string;
        importMesh: (meshesNames: any, scene: Scene, data: any, rootUrl: string, meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]) => boolean;
        load: (scene: Scene, data: string, rootUrl: string) => boolean;
    }
    interface ISceneLoaderPluginAsync {
        extensions: string;
        importMeshAsync: (meshesNames: any, scene: Scene, data: any, rootUrl: string, onsuccess?: (meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]) => void, onerror?: () => void) => void;
        loadAsync: (scene: Scene, data: string, rootUrl: string, onsuccess: () => void, onerror: () => void) => boolean;
    }
    class SceneLoader {
        private static _ForceFullSceneLoadingForIncremental;
        private static _ShowLoadingScreen;
        static NO_LOGGING: number;
        static MINIMAL_LOGGING: number;
        static SUMMARY_LOGGING: number;
        static DETAILED_LOGGING: number;
        private static _loggingLevel;
        static ForceFullSceneLoadingForIncremental: boolean;
        static ShowLoadingScreen: boolean;
        static loggingLevel: number;
        private static _registeredPlugins;
        private static _getPluginForFilename(sceneFilename);
        static GetPluginForExtension(extension: string): ISceneLoaderPlugin | ISceneLoaderPluginAsync;
        static RegisterPlugin(plugin: ISceneLoaderPlugin): void;
        static ImportMesh(meshesNames: any, rootUrl: string, sceneFilename: string, scene: Scene, onsuccess?: (meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]) => void, progressCallBack?: () => void, onerror?: (scene: Scene, message: string, exception?: any) => void): void;
        /**
        * Load a scene
        * @param rootUrl a string that defines the root url for scene and resources
        * @param sceneFilename a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene
        * @param engine is the instance of BABYLON.Engine to use to create the scene
        */
        static Load(rootUrl: string, sceneFilename: any, engine: Engine, onsuccess?: (scene: Scene) => void, progressCallBack?: any, onerror?: (scene: Scene) => void): void;
        /**
        * Append a scene
        * @param rootUrl a string that defines the root url for scene and resources
        * @param sceneFilename a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene
        * @param scene is the instance of BABYLON.Scene to append to
        */
        static Append(rootUrl: string, sceneFilename: any, scene: Scene, onsuccess?: (scene: Scene) => void, progressCallBack?: any, onerror?: (scene: Scene) => void): void;
    }
}

declare module BABYLON {
    /**
     * The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
     * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
     * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
     * corresponding to low luminance, medium luminance, and high luminance areas respectively.
     */
    class ColorCurves {
        private _dirty;
        private _tempColor;
        private _globalCurve;
        private _highlightsCurve;
        private _midtonesCurve;
        private _shadowsCurve;
        private _positiveCurve;
        private _negativeCurve;
        private _globalHue;
        private _globalDensity;
        private _globalSaturation;
        private _globalExposure;
        /**
         * Gets the global Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        /**
         * Sets the global Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        GlobalHue: number;
        /**
         * Gets the global Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        /**
         * Sets the global Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        GlobalDensity: number;
        /**
         * Gets the global Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        /**
         * Sets the global Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        GlobalSaturation: number;
        private _highlightsHue;
        private _highlightsDensity;
        private _highlightsSaturation;
        private _highlightsExposure;
        /**
         * Gets the highlights Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        /**
         * Sets the highlights Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        HighlightsHue: number;
        /**
         * Gets the highlights Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        /**
         * Sets the highlights Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        HighlightsDensity: number;
        /**
         * Gets the highlights Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        /**
         * Sets the highlights Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        HighlightsSaturation: number;
        /**
         * Gets the highlights Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        /**
         * Sets the highlights Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        HighlightsExposure: number;
        private _midtonesHue;
        private _midtonesDensity;
        private _midtonesSaturation;
        private _midtonesExposure;
        /**
         * Gets the midtones Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        /**
         * Sets the midtones Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        MidtonesHue: number;
        /**
         * Gets the midtones Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        /**
         * Sets the midtones Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        MidtonesDensity: number;
        /**
         * Gets the midtones Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        /**
         * Sets the midtones Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        MidtonesSaturation: number;
        /**
         * Gets the midtones Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        /**
         * Sets the midtones Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        MidtonesExposure: number;
        private _shadowsHue;
        private _shadowsDensity;
        private _shadowsSaturation;
        private _shadowsExposure;
        /**
         * Gets the shadows Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        /**
         * Sets the shadows Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        ShadowsHue: number;
        /**
         * Gets the shadows Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        /**
         * Sets the shadows Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        ShadowsDensity: number;
        /**
         * Gets the shadows Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        /**
         * Sets the shadows Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        ShadowsSaturation: number;
        /**
         * Gets the shadows Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        /**
         * Sets the shadows Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        ShadowsExposure: number;
        /**
         * Binds the color curves to the shader.
         * @param colorCurves The color curve to bind
         * @param effect The effect to bind to
         */
        static Bind(colorCurves: ColorCurves, effect: Effect): void;
        /**
         * Prepare the list of uniforms associated with the ColorCurves effects.
         * @param uniformsList The list of uniforms used in the effect
         */
        static PrepareUniforms(uniformsList: string[]): void;
        /**
         * Returns color grading data based on a hue, density, saturation and exposure value.
         * @param filterHue The hue of the color filter.
         * @param filterDensity The density of the color filter.
         * @param saturation The saturation.
         * @param exposure The exposure.
         * @param result The result data container.
         */
        private getColorGradingDataToRef(hue, density, saturation, exposure, result);
        /**
         * Takes an input slider value and returns an adjusted value that provides extra control near the centre.
         * @param value The input slider value in range [-100,100].
         * @returns Adjusted value.
         */
        private static applyColorGradingSliderNonlinear(value);
        /**
         * Returns an RGBA Color4 based on Hue, Saturation and Brightness (also referred to as value, HSV).
         * @param hue The hue (H) input.
         * @param saturation The saturation (S) input.
         * @param brightness The brightness (B) input.
         * @result An RGBA color represented as Vector4.
         */
        private static fromHSBToRef(hue, saturation, brightness, result);
        /**
         * Returns a value clamped between min and max
         * @param value The value to clamp
         * @param min The minimum of value
         * @param max The maximum of value
         * @returns The clamped value.
         */
        private static clamp(value, min, max);
        /**
         * Clones the current color curve instance.
         * @return The cloned curves
         */
        clone(): ColorCurves;
        /**
         * Serializes the current color curve instance to a json representation.
         * @return a JSON representation
         */
        serialize(): any;
        /**
         * Parses the color curve from a json representation.
         * @param source the JSON source to parse
         * @return The parsed curves
         */
        static Parse(source: any): ColorCurves;
    }
}

declare module BABYLON {
    class EffectFallbacks {
        private _defines;
        private _currentRank;
        private _maxRank;
        private _mesh;
        private _meshRank;
        addFallback(rank: number, define: string): void;
        addCPUSkinningFallback(rank: number, mesh: BABYLON.AbstractMesh): void;
        isMoreFallbacks: boolean;
        reduce(currentDefines: string): string;
    }
    class Effect {
        name: any;
        defines: string;
        onCompiled: (effect: Effect) => void;
        onError: (effect: Effect, errors: string) => void;
        onBind: (effect: Effect) => void;
        private _engine;
        private _uniformsNames;
        private _samplers;
        private _isReady;
        private _compilationError;
        private _attributesNames;
        private _attributes;
        private _uniforms;
        _key: string;
        private _indexParameters;
        private _program;
        private _valueCache;
        constructor(baseName: any, attributesNames: string[], uniformsNames: string[], samplers: string[], engine: any, defines?: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void, indexParameters?: any);
        isReady(): boolean;
        getProgram(): WebGLProgram;
        getAttributesNames(): string[];
        getAttributeLocation(index: number): number;
        getAttributeLocationByName(name: string): number;
        getAttributesCount(): number;
        getUniformIndex(uniformName: string): number;
        getUniform(uniformName: string): WebGLUniformLocation;
        getSamplers(): string[];
        getCompilationError(): string;
        _loadVertexShader(vertex: any, callback: (data: any) => void): void;
        _loadFragmentShader(fragment: any, callback: (data: any) => void): void;
        private _dumpShadersName();
        private _processIncludes(sourceCode, callback);
        private _processPrecision(source);
        private _prepareEffect(vertexSourceCode, fragmentSourceCode, attributesNames, defines, fallbacks?);
        isSupported: boolean;
        _bindTexture(channel: string, texture: WebGLTexture): void;
        setTexture(channel: string, texture: BaseTexture): void;
        setTextureFromPostProcess(channel: string, postProcess: PostProcess): void;
        _cacheMatrix(uniformName: any, matrix: any): void;
        _cacheFloat2(uniformName: string, x: number, y: number): void;
        _cacheFloat3(uniformName: string, x: number, y: number, z: number): void;
        _cacheFloat4(uniformName: string, x: number, y: number, z: number, w: number): void;
        setArray(uniformName: string, array: number[]): Effect;
        setArray2(uniformName: string, array: number[]): Effect;
        setArray3(uniformName: string, array: number[]): Effect;
        setArray4(uniformName: string, array: number[]): Effect;
        setMatrices(uniformName: string, matrices: Float32Array): Effect;
        setMatrix(uniformName: string, matrix: Matrix): Effect;
        setMatrix3x3(uniformName: string, matrix: Float32Array): Effect;
        setMatrix2x2(uniformname: string, matrix: Float32Array): Effect;
        setFloat(uniformName: string, value: number): Effect;
        setBool(uniformName: string, bool: boolean): Effect;
        setVector2(uniformName: string, vector2: Vector2): Effect;
        setFloat2(uniformName: string, x: number, y: number): Effect;
        setVector3(uniformName: string, vector3: Vector3): Effect;
        setFloat3(uniformName: string, x: number, y: number, z: number): Effect;
        setVector4(uniformName: string, vector4: Vector4): Effect;
        setFloat4(uniformName: string, x: number, y: number, z: number, w: number): Effect;
        setColor3(uniformName: string, color3: Color3): Effect;
        setColor4(uniformName: string, color3: Color3, alpha: number): Effect;
        static ShadersStore: {};
        static IncludesShadersStore: {};
    }
}

declare module BABYLON {
    class FresnelParameters {
        isEnabled: boolean;
        leftColor: Color3;
        rightColor: Color3;
        bias: number;
        power: number;
        clone(): FresnelParameters;
        serialize(): any;
        static Parse(parsedFresnelParameters: any): FresnelParameters;
    }
}

declare module BABYLON {
    class MaterialDefines {
        _keys: string[];
        rebuild(): void;
        isEqual(other: MaterialDefines): boolean;
        cloneTo(other: MaterialDefines): void;
        reset(): void;
        toString(): string;
    }
    class Material {
        name: string;
        private static _TriangleFillMode;
        private static _WireFrameFillMode;
        private static _PointFillMode;
        static TriangleFillMode: number;
        static WireFrameFillMode: number;
        static PointFillMode: number;
        private static _ClockWiseSideOrientation;
        private static _CounterClockWiseSideOrientation;
        static ClockWiseSideOrientation: number;
        static CounterClockWiseSideOrientation: number;
        id: string;
        checkReadyOnEveryCall: boolean;
        checkReadyOnlyOnce: boolean;
        state: string;
        alpha: number;
        backFaceCulling: boolean;
        sideOrientation: number;
        onCompiled: (effect: Effect) => void;
        onError: (effect: Effect, errors: string) => void;
        getRenderTargetTextures: () => SmartArray<RenderTargetTexture>;
        /**
        * An event triggered when the material is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<Material>;
        private _onDisposeObserver;
        onDispose: () => void;
        /**
        * An event triggered when the material is compiled.
        * @type {BABYLON.Observable}
        */
        onBindObservable: Observable<AbstractMesh>;
        private _onBindObserver;
        onBind: (Mesh: AbstractMesh) => void;
        alphaMode: number;
        disableDepthWrite: boolean;
        fogEnabled: boolean;
        pointSize: number;
        zOffset: number;
        wireframe: boolean;
        pointsCloud: boolean;
        fillMode: number;
        _effect: Effect;
        _wasPreviouslyReady: boolean;
        private _scene;
        private _fillMode;
        private _cachedDepthWriteState;
        constructor(name: string, scene: Scene, doNotAdd?: boolean);
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         * subclasses should override adding information pertainent to themselves
         */
        toString(fullDetails?: boolean): string;
        isFrozen: boolean;
        freeze(): void;
        unfreeze(): void;
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        getEffect(): Effect;
        getScene(): Scene;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        getAlphaTestTexture(): BaseTexture;
        markDirty(): void;
        _preBind(): void;
        bind(world: Matrix, mesh?: Mesh): void;
        bindOnlyWorldMatrix(world: Matrix): void;
        unbind(): void;
        clone(name: string): Material;
        getBindedMeshes(): AbstractMesh[];
        dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void;
        serialize(): any;
        static ParseMultiMaterial(parsedMultiMaterial: any, scene: Scene): MultiMaterial;
        static Parse(parsedMaterial: any, scene: Scene, rootUrl: string): any;
    }
}

declare module BABYLON {
    class MaterialHelper {
        static PrepareDefinesForLights(scene: Scene, mesh: AbstractMesh, defines: MaterialDefines, maxSimultaneousLights?: number): boolean;
        static PrepareUniformsAndSamplersList(uniformsList: string[], samplersList: string[], defines: MaterialDefines, maxSimultaneousLights?: number): void;
        static HandleFallbacksForShadows(defines: MaterialDefines, fallbacks: EffectFallbacks, maxSimultaneousLights?: number): void;
        static PrepareAttributesForBones(attribs: string[], mesh: AbstractMesh, defines: MaterialDefines, fallbacks: EffectFallbacks): void;
        static PrepareAttributesForInstances(attribs: string[], defines: MaterialDefines): void;
        static BindLightShadow(light: Light, scene: Scene, mesh: AbstractMesh, lightIndex: number, effect: Effect, depthValuesAlreadySet: boolean): boolean;
        static BindLightProperties(light: Light, effect: Effect, lightIndex: number): void;
        static BindLights(scene: Scene, mesh: AbstractMesh, effect: Effect, defines: MaterialDefines, maxSimultaneousLights?: number): void;
        static BindFogParameters(scene: Scene, mesh: AbstractMesh, effect: Effect): void;
        static BindBonesParameters(mesh: AbstractMesh, effect: Effect): void;
        static BindLogDepth(defines: MaterialDefines, effect: Effect, scene: Scene): void;
        static BindClipPlane(effect: Effect, scene: Scene): void;
    }
}

declare module BABYLON {
    class MultiMaterial extends Material {
        subMaterials: Material[];
        constructor(name: string, scene: Scene);
        getSubMaterial(index: any): Material;
        isReady(mesh?: AbstractMesh): boolean;
        clone(name: string, cloneChildren?: boolean): MultiMaterial;
        serialize(): any;
    }
}

declare module BABYLON {
    /**
     * The Physically based material of BJS.
     *
     * This offers the main features of a standard PBR material.
     * For more information, please refer to the documentation :
     * http://doc.babylonjs.com/extensions/Physically_Based_Rendering
     */
    class PBRMaterial extends BABYLON.Material {
        /**
         * Intensity of the direct lights e.g. the four lights available in your scene.
         * This impacts both the direct diffuse and specular highlights.
         */
        directIntensity: number;
        /**
         * Intensity of the emissive part of the material.
         * This helps controlling the emissive effect without modifying the emissive color.
         */
        emissiveIntensity: number;
        /**
         * Intensity of the environment e.g. how much the environment will light the object
         * either through harmonics for rough material or through the refelction for shiny ones.
         */
        environmentIntensity: number;
        /**
         * This is a special control allowing the reduction of the specular highlights coming from the
         * four lights of the scene. Those highlights may not be needed in full environment lighting.
         */
        specularIntensity: number;
        private _lightingInfos;
        /**
         * Debug Control allowing disabling the bump map on this material.
         */
        disableBumpMap: boolean;
        /**
         * Debug Control helping enforcing or dropping the darkness of shadows.
         * 1.0 means the shadows have their normal darkness, 0.0 means the shadows are not visible.
         */
        overloadedShadowIntensity: number;
        /**
         * Debug Control helping dropping the shading effect coming from the diffuse lighting.
         * 1.0 means the shade have their normal impact, 0.0 means no shading at all.
         */
        overloadedShadeIntensity: number;
        private _overloadedShadowInfos;
        /**
         * The camera exposure used on this material.
         * This property is here and not in the camera to allow controlling exposure without full screen post process.
         * This corresponds to a photographic exposure.
         */
        cameraExposure: number;
        /**
         * The camera contrast used on this material.
         * This property is here and not in the camera to allow controlling contrast without full screen post process.
         */
        cameraContrast: number;
        /**
         * Color Grading 2D Lookup Texture.
         * This allows special effects like sepia, black and white to sixties rendering style.
         */
        cameraColorGradingTexture: BaseTexture;
        private _cameraColorGradingScaleOffset;
        private _cameraColorGradingInfos;
        /**
         * The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
         * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
         * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
         * corresponding to low luminance, medium luminance, and high luminance areas respectively.
         */
        cameraColorCurves: ColorCurves;
        private _cameraInfos;
        private _microsurfaceTextureLods;
        /**
         * Debug Control allowing to overload the ambient color.
         * This as to be use with the overloadedAmbientIntensity parameter.
         */
        overloadedAmbient: Color3;
        /**
         * Debug Control indicating how much the overloaded ambient color is used against the default one.
         */
        overloadedAmbientIntensity: number;
        /**
         * Debug Control allowing to overload the albedo color.
         * This as to be use with the overloadedAlbedoIntensity parameter.
         */
        overloadedAlbedo: Color3;
        /**
         * Debug Control indicating how much the overloaded albedo color is used against the default one.
         */
        overloadedAlbedoIntensity: number;
        /**
         * Debug Control allowing to overload the reflectivity color.
         * This as to be use with the overloadedReflectivityIntensity parameter.
         */
        overloadedReflectivity: Color3;
        /**
         * Debug Control indicating how much the overloaded reflectivity color is used against the default one.
         */
        overloadedReflectivityIntensity: number;
        /**
         * Debug Control allowing to overload the emissive color.
         * This as to be use with the overloadedEmissiveIntensity parameter.
         */
        overloadedEmissive: Color3;
        /**
         * Debug Control indicating how much the overloaded emissive color is used against the default one.
         */
        overloadedEmissiveIntensity: number;
        private _overloadedIntensity;
        /**
         * Debug Control allowing to overload the reflection color.
         * This as to be use with the overloadedReflectionIntensity parameter.
         */
        overloadedReflection: Color3;
        /**
         * Debug Control indicating how much the overloaded reflection color is used against the default one.
         */
        overloadedReflectionIntensity: number;
        /**
         * Debug Control allowing to overload the microsurface.
         * This as to be use with the overloadedMicroSurfaceIntensity parameter.
         */
        overloadedMicroSurface: number;
        /**
         * Debug Control indicating how much the overloaded microsurface is used against the default one.
         */
        overloadedMicroSurfaceIntensity: number;
        private _overloadedMicroSurface;
        /**
         * AKA Diffuse Texture in standard nomenclature.
         */
        albedoTexture: BaseTexture;
        /**
         * AKA Occlusion Texture in other nomenclature.
         */
        ambientTexture: BaseTexture;
        opacityTexture: BaseTexture;
        reflectionTexture: BaseTexture;
        emissiveTexture: BaseTexture;
        /**
         * AKA Specular texture in other nomenclature.
         */
        reflectivityTexture: BaseTexture;
        bumpTexture: BaseTexture;
        lightmapTexture: BaseTexture;
        refractionTexture: BaseTexture;
        ambientColor: Color3;
        /**
         * AKA Diffuse Color in other nomenclature.
         */
        albedoColor: Color3;
        /**
         * AKA Specular Color in other nomenclature.
         */
        reflectivityColor: Color3;
        reflectionColor: Color3;
        emissiveColor: Color3;
        /**

         * AKA Glossiness in other nomenclature.
         */
        microSurface: number;
        /**
         * source material index of refraction (IOR)' / 'destination material IOR.
         */
        indexOfRefraction: number;
        /**
         * Controls if refraction needs to be inverted on Y. This could be usefull for procedural texture.
         */
        invertRefractionY: boolean;
        opacityFresnelParameters: FresnelParameters;
        emissiveFresnelParameters: FresnelParameters;
        /**
         * This parameters will make the material used its opacity to control how much it is refracting aginst not.
         * Materials half opaque for instance using refraction could benefit from this control.
         */
        linkRefractionWithTransparency: boolean;
        /**
         * The emissive and albedo are linked to never be more than one (Energy conservation).
         */
        linkEmissiveWithAlbedo: boolean;
        useLightmapAsShadowmap: boolean;
        /**
         * In this mode, the emissive informtaion will always be added to the lighting once.
         * A light for instance can be thought as emissive.
         */
        useEmissiveAsIllumination: boolean;
        /**
         * Secifies that the alpha is coming form the albedo channel alpha channel.
         */
        useAlphaFromAlbedoTexture: boolean;
        /**
         * Specifies that the material will keeps the specular highlights over a transparent surface (only the most limunous ones).
         * A car glass is a good exemple of that. When sun reflects on it you can not see what is behind.
         */
        useSpecularOverAlpha: boolean;
        /**
         * Specifies if the reflectivity texture contains the glossiness information in its alpha channel.
         */
        useMicroSurfaceFromReflectivityMapAlpha: boolean;
        /**
         * In case the reflectivity map does not contain the microsurface information in its alpha channel,
         * The material will try to infer what glossiness each pixel should be.
         */
        useAutoMicroSurfaceFromReflectivityMap: boolean;
        /**
         * Allows to work with scalar in linear mode. This is definitely a matter of preferences and tools used during
         * the creation of the material.
         */
        useScalarInLinearSpace: boolean;
        /**
         * BJS is using an harcoded light falloff based on a manually sets up range.
         * In PBR, one way to represents the fallof is to use the inverse squared root algorythm.
         * This parameter can help you switch back to the BJS mode in order to create scenes using both materials.
         */
        usePhysicalLightFalloff: boolean;
        /**
         * Specifies that the material will keeps the reflection highlights over a transparent surface (only the most limunous ones).
         * A car glass is a good exemple of that. When the street lights reflects on it you can not see what is behind.
         */
        useRadianceOverAlpha: boolean;
        /**
         * Allows using the bump map in parallax mode.
         */
        useParallax: boolean;
        /**
         * Allows using the bump map in parallax occlusion mode.
         */
        useParallaxOcclusion: boolean;
        /**
         * Controls the scale bias of the parallax mode.
         */
        parallaxScaleBias: number;
        /**
         * If sets to true, disables all the lights affecting the material.
         */
        disableLighting: boolean;
        /**
         * Number of Simultaneous lights allowed on the material.
         */
        maxSimultaneousLights: number;
        /**
         * If sets to true, x component of normal map value will invert (x = 1.0 - x).
         */
        invertNormalMapX: boolean;
        /**
         * If sets to true, y component of normal map value will invert (y = 1.0 - y).
         */
        invertNormalMapY: boolean;
        private _renderTargets;
        private _worldViewProjectionMatrix;
        private _globalAmbientColor;
        private _tempColor;
        private _renderId;
        private _defines;
        private _cachedDefines;
        private _useLogarithmicDepth;
        /**
         * Instantiates a new PBRMaterial instance.
         *
         * @param name The material name
         * @param scene The scene the material will be use in.
         */
        constructor(name: string, scene: Scene);
        useLogarithmicDepth: boolean;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        private _shouldUseAlphaFromAlbedoTexture();
        getAlphaTestTexture(): BaseTexture;
        private _checkCache(scene, mesh?, useInstances?);
        private convertColorToLinearSpaceToRef(color, ref);
        private static convertColorToLinearSpaceToRef(color, ref, useScalarInLinear);
        private static _scaledAlbedo;
        private static _scaledReflectivity;
        private static _scaledEmissive;
        private static _scaledReflection;
        static BindLights(scene: Scene, mesh: AbstractMesh, effect: Effect, defines: MaterialDefines, useScalarInLinearSpace: boolean, maxSimultaneousLights: number, usePhysicalLightFalloff: boolean): void;
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        unbind(): void;
        bindOnlyWorldMatrix(world: Matrix): void;
        private _myScene;
        private _myShadowGenerator;
        bind(world: Matrix, mesh?: Mesh): void;
        getAnimatables(): IAnimatable[];
        dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void;
        clone(name: string): PBRMaterial;
        serialize(): any;
        static Parse(source: any, scene: Scene, rootUrl: string): PBRMaterial;
    }
}

declare module BABYLON {
    class ShaderMaterial extends Material {
        private _shaderPath;
        private _options;
        private _textures;
        private _floats;
        private _floatsArrays;
        private _colors3;
        private _colors4;
        private _vectors2;
        private _vectors3;
        private _vectors4;
        private _matrices;
        private _matrices3x3;
        private _matrices2x2;
        private _cachedWorldViewMatrix;
        private _renderId;
        constructor(name: string, scene: Scene, shaderPath: any, options: any);
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        private _checkUniform(uniformName);
        setTexture(name: string, texture: Texture): ShaderMaterial;
        setFloat(name: string, value: number): ShaderMaterial;
        setFloats(name: string, value: number[]): ShaderMaterial;
        setColor3(name: string, value: Color3): ShaderMaterial;
        setColor4(name: string, value: Color4): ShaderMaterial;
        setVector2(name: string, value: Vector2): ShaderMaterial;
        setVector3(name: string, value: Vector3): ShaderMaterial;
        setVector4(name: string, value: Vector4): ShaderMaterial;
        setMatrix(name: string, value: Matrix): ShaderMaterial;
        setMatrix3x3(name: string, value: Float32Array): ShaderMaterial;
        setMatrix2x2(name: string, value: Float32Array): ShaderMaterial;
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        bindOnlyWorldMatrix(world: Matrix): void;
        bind(world: Matrix, mesh?: Mesh): void;
        clone(name: string): ShaderMaterial;
        dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void;
        serialize(): any;
        static Parse(source: any, scene: Scene, rootUrl: string): ShaderMaterial;
    }
}

declare module BABYLON {
    class StandardMaterial extends Material {
        diffuseTexture: BaseTexture;
        ambientTexture: BaseTexture;
        opacityTexture: BaseTexture;
        reflectionTexture: BaseTexture;
        emissiveTexture: BaseTexture;
        specularTexture: BaseTexture;
        bumpTexture: BaseTexture;
        lightmapTexture: BaseTexture;
        refractionTexture: BaseTexture;
        ambientColor: Color3;
        diffuseColor: Color3;
        specularColor: Color3;
        emissiveColor: Color3;
        specularPower: number;
        useAlphaFromDiffuseTexture: boolean;
        useEmissiveAsIllumination: boolean;
        linkEmissiveWithDiffuse: boolean;
        useReflectionFresnelFromSpecular: boolean;
        useSpecularOverAlpha: boolean;
        useReflectionOverAlpha: boolean;
        disableLighting: boolean;
        useParallax: boolean;
        useParallaxOcclusion: boolean;
        parallaxScaleBias: number;
        roughness: number;
        indexOfRefraction: number;
        invertRefractionY: boolean;
        useLightmapAsShadowmap: boolean;
        diffuseFresnelParameters: FresnelParameters;
        opacityFresnelParameters: FresnelParameters;
        reflectionFresnelParameters: FresnelParameters;
        refractionFresnelParameters: FresnelParameters;
        emissiveFresnelParameters: FresnelParameters;
        useGlossinessFromSpecularMapAlpha: boolean;
        maxSimultaneousLights: number;
        /**
         * If sets to true, x component of normal map value will invert (x = 1.0 - x).
         */
        invertNormalMapX: boolean;
        /**
         * If sets to true, y component of normal map value will invert (y = 1.0 - y).
         */
        invertNormalMapY: boolean;
        private _renderTargets;
        private _worldViewProjectionMatrix;
        private _globalAmbientColor;
        private _renderId;
        private _defines;
        private _cachedDefines;
        private _useLogarithmicDepth;
        constructor(name: string, scene: Scene);
        useLogarithmicDepth: boolean;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        private _shouldUseAlphaFromDiffuseTexture();
        getAlphaTestTexture(): BaseTexture;
        private _checkCache(scene, mesh?, useInstances?);
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        unbind(): void;
        bindOnlyWorldMatrix(world: Matrix): void;
        bind(world: Matrix, mesh?: Mesh): void;
        getAnimatables(): IAnimatable[];
        dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void;
        clone(name: string): StandardMaterial;
        serialize(): any;
        static Parse(source: any, scene: Scene, rootUrl: string): StandardMaterial;
        static DiffuseTextureEnabled: boolean;
        static AmbientTextureEnabled: boolean;
        static OpacityTextureEnabled: boolean;
        static ReflectionTextureEnabled: boolean;
        static EmissiveTextureEnabled: boolean;
        static SpecularTextureEnabled: boolean;
        static BumpTextureEnabled: boolean;
        static FresnelEnabled: boolean;
        static LightmapTextureEnabled: boolean;
        static RefractionTextureEnabled: boolean;
    }
}

declare module BABYLON {
    class SIMDVector3 {
        static TransformCoordinatesToRefSIMD(vector: Vector3, transformation: Matrix, result: Vector3): void;
        static TransformCoordinatesFromFloatsToRefSIMD(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void;
    }
    class SIMDMatrix {
        multiplyToArraySIMD(other: Matrix, result: Matrix, offset?: number): void;
        invertToRefSIMD(other: Matrix): Matrix;
        static LookAtLHToRefSIMD(eyeRef: Vector3, targetRef: Vector3, upRef: Vector3, result: Matrix): void;
    }
    class SIMDHelper {
        private static _isEnabled;
        static IsEnabled: boolean;
        static DisableSIMD(): void;
        static EnableSIMD(): void;
    }
}

declare module BABYLON {
    const ToGammaSpace: number;
    const ToLinearSpace: number;
    const Epsilon: number;
    class MathTools {
        static WithinEpsilon(a: number, b: number, epsilon?: number): boolean;
        static ToHex(i: number): string;
        static Sign(value: number): number;
        static Clamp(value: number, min?: number, max?: number): number;
    }
    class Color3 {
        r: number;
        g: number;
        b: number;
        constructor(r?: number, g?: number, b?: number);
        toString(): string;
        getClassName(): string;
        getHashCode(): number;
        toArray(array: number[], index?: number): Color3;
        toColor4(alpha?: number): Color4;
        asArray(): number[];
        toLuminance(): number;
        multiply(otherColor: Color3): Color3;
        multiplyToRef(otherColor: Color3, result: Color3): Color3;
        equals(otherColor: Color3): boolean;
        equalsFloats(r: number, g: number, b: number): boolean;
        scale(scale: number): Color3;
        scaleToRef(scale: number, result: Color3): Color3;
        add(otherColor: Color3): Color3;
        addToRef(otherColor: Color3, result: Color3): Color3;
        subtract(otherColor: Color3): Color3;
        subtractToRef(otherColor: Color3, result: Color3): Color3;
        clone(): Color3;
        copyFrom(source: Color3): Color3;
        copyFromFloats(r: number, g: number, b: number): Color3;
        toHexString(): string;
        toLinearSpace(): Color3;
        toLinearSpaceToRef(convertedColor: Color3): Color3;
        toGammaSpace(): Color3;
        toGammaSpaceToRef(convertedColor: Color3): Color3;
        static FromHexString(hex: string): Color3;
        static FromArray(array: number[], offset?: number): Color3;
        static FromInts(r: number, g: number, b: number): Color3;
        static Lerp(start: Color3, end: Color3, amount: number): Color3;
        static Red(): Color3;
        static Green(): Color3;
        static Blue(): Color3;
        static Black(): Color3;
        static White(): Color3;
        static Purple(): Color3;
        static Magenta(): Color3;
        static Yellow(): Color3;
        static Gray(): Color3;
    }
    class Color4 {
        r: number;
        g: number;
        b: number;
        a: number;
        constructor(r: number, g: number, b: number, a: number);
        addInPlace(right: any): Color4;
        asArray(): number[];
        toArray(array: number[], index?: number): Color4;
        add(right: Color4): Color4;
        subtract(right: Color4): Color4;
        subtractToRef(right: Color4, result: Color4): Color4;
        scale(scale: number): Color4;
        scaleToRef(scale: number, result: Color4): Color4;
        /**
          * Multipy an RGBA Color4 value by another and return a new Color4 object
          * @param color The Color4 (RGBA) value to multiply by
          * @returns A new Color4.
          */
        multiply(color: Color4): Color4;
        /**
         * Multipy an RGBA Color4 value by another and push the result in a reference value
         * @param color The Color4 (RGBA) value to multiply by
         * @param result The Color4 (RGBA) to fill the result in
         * @returns the result Color4.
         */
        multiplyToRef(color: Color4, result: Color4): Color4;
        toString(): string;
        getClassName(): string;
        getHashCode(): number;
        clone(): Color4;
        copyFrom(source: Color4): Color4;
        toHexString(): string;
        static FromHexString(hex: string): Color4;
        static Lerp(left: Color4, right: Color4, amount: number): Color4;
        static LerpToRef(left: Color4, right: Color4, amount: number, result: Color4): void;
        static FromArray(array: number[], offset?: number): Color4;
        static FromInts(r: number, g: number, b: number, a: number): Color4;
        static CheckColors4(colors: number[], count: number): number[];
    }
    class Vector2 {
        x: number;
        y: number;
        constructor(x: number, y: number);
        toString(): string;
        getClassName(): string;
        getHashCode(): number;
        toArray(array: number[] | Float32Array, index?: number): Vector2;
        asArray(): number[];
        copyFrom(source: Vector2): Vector2;
        copyFromFloats(x: number, y: number): Vector2;
        add(otherVector: Vector2): Vector2;
        addToRef(otherVector: Vector2, result: Vector2): Vector2;
        addVector3(otherVector: Vector3): Vector2;
        subtract(otherVector: Vector2): Vector2;
        subtractToRef(otherVector: Vector2, result: Vector2): Vector2;
        subtractInPlace(otherVector: Vector2): Vector2;
        multiplyInPlace(otherVector: Vector2): Vector2;
        multiply(otherVector: Vector2): Vector2;
        multiplyToRef(otherVector: Vector2, result: Vector2): Vector2;
        multiplyByFloats(x: number, y: number): Vector2;
        divide(otherVector: Vector2): Vector2;
        divideToRef(otherVector: Vector2, result: Vector2): Vector2;
        negate(): Vector2;
        scaleInPlace(scale: number): Vector2;
        scale(scale: number): Vector2;
        equals(otherVector: Vector2): boolean;
        equalsWithEpsilon(otherVector: Vector2, epsilon?: number): boolean;
        length(): number;
        lengthSquared(): number;
        normalize(): Vector2;
        clone(): Vector2;
        static Zero(): Vector2;
        static FromArray(array: number[] | Float32Array, offset?: number): Vector2;
        static FromArrayToRef(array: number[] | Float32Array, offset: number, result: Vector2): void;
        static CatmullRom(value1: Vector2, value2: Vector2, value3: Vector2, value4: Vector2, amount: number): Vector2;
        static Clamp(value: Vector2, min: Vector2, max: Vector2): Vector2;
        static Hermite(value1: Vector2, tangent1: Vector2, value2: Vector2, tangent2: Vector2, amount: number): Vector2;
        static Lerp(start: Vector2, end: Vector2, amount: number): Vector2;
        static Dot(left: Vector2, right: Vector2): number;
        static Normalize(vector: Vector2): Vector2;
        static Minimize(left: Vector2, right: Vector2): Vector2;
        static Maximize(left: Vector2, right: Vector2): Vector2;
        static Transform(vector: Vector2, transformation: Matrix): Vector2;
        static TransformToRef(vector: Vector2, transformation: Matrix, result: Vector2): void;
        static PointInTriangle(p: Vector2, p0: Vector2, p1: Vector2, p2: Vector2): boolean;
        static Distance(value1: Vector2, value2: Vector2): number;
        static DistanceSquared(value1: Vector2, value2: Vector2): number;
        static DistanceOfPointFromSegment(p: Vector2, segA: Vector2, segB: Vector2): number;
    }
    class Vector3 {
        x: number;
        y: number;
        z: number;
        constructor(x: number, y: number, z: number);
        toString(): string;
        getClassName(): string;
        getHashCode(): number;
        asArray(): number[];
        toArray(array: number[] | Float32Array, index?: number): Vector3;
        toQuaternion(): Quaternion;
        addInPlace(otherVector: Vector3): Vector3;
        add(otherVector: Vector3): Vector3;
        addToRef(otherVector: Vector3, result: Vector3): Vector3;
        subtractInPlace(otherVector: Vector3): Vector3;
        subtract(otherVector: Vector3): Vector3;
        subtractToRef(otherVector: Vector3, result: Vector3): Vector3;
        subtractFromFloats(x: number, y: number, z: number): Vector3;
        subtractFromFloatsToRef(x: number, y: number, z: number, result: Vector3): Vector3;
        negate(): Vector3;
        scaleInPlace(scale: number): Vector3;
        scale(scale: number): Vector3;
        scaleToRef(scale: number, result: Vector3): void;
        equals(otherVector: Vector3): boolean;
        equalsWithEpsilon(otherVector: Vector3, epsilon?: number): boolean;
        equalsToFloats(x: number, y: number, z: number): boolean;
        multiplyInPlace(otherVector: Vector3): Vector3;
        multiply(otherVector: Vector3): Vector3;
        multiplyToRef(otherVector: Vector3, result: Vector3): Vector3;
        multiplyByFloats(x: number, y: number, z: number): Vector3;
        divide(otherVector: Vector3): Vector3;
        divideToRef(otherVector: Vector3, result: Vector3): Vector3;
        MinimizeInPlace(other: Vector3): Vector3;
        MaximizeInPlace(other: Vector3): Vector3;
        length(): number;
        lengthSquared(): number;
        normalize(): Vector3;
        clone(): Vector3;
        copyFrom(source: Vector3): Vector3;
        copyFromFloats(x: number, y: number, z: number): Vector3;
        static GetClipFactor(vector0: Vector3, vector1: Vector3, axis: Vector3, size: any): number;
        static FromArray(array: number[] | Float32Array, offset?: number): Vector3;
        static FromFloatArray(array: Float32Array, offset?: number): Vector3;
        static FromArrayToRef(array: number[] | Float32Array, offset: number, result: Vector3): void;
        static FromFloatArrayToRef(array: Float32Array, offset: number, result: Vector3): void;
        static FromFloatsToRef(x: number, y: number, z: number, result: Vector3): void;
        static Zero(): Vector3;
        static Up(): Vector3;
        static TransformCoordinates(vector: Vector3, transformation: Matrix): Vector3;
        static TransformCoordinatesToRef(vector: Vector3, transformation: Matrix, result: Vector3): void;
        static TransformCoordinatesFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void;
        static TransformNormal(vector: Vector3, transformation: Matrix): Vector3;
        static TransformNormalToRef(vector: Vector3, transformation: Matrix, result: Vector3): void;
        static TransformNormalFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void;
        static CatmullRom(value1: Vector3, value2: Vector3, value3: Vector3, value4: Vector3, amount: number): Vector3;
        static Clamp(value: Vector3, min: Vector3, max: Vector3): Vector3;
        static Hermite(value1: Vector3, tangent1: Vector3, value2: Vector3, tangent2: Vector3, amount: number): Vector3;
        static Lerp(start: Vector3, end: Vector3, amount: number): Vector3;
        static Dot(left: Vector3, right: Vector3): number;
        static Cross(left: Vector3, right: Vector3): Vector3;
        static CrossToRef(left: Vector3, right: Vector3, result: Vector3): void;
        static Normalize(vector: Vector3): Vector3;
        static NormalizeToRef(vector: Vector3, result: Vector3): void;
        static Project(vector: Vector3, world: Matrix, transform: Matrix, viewport: Viewport): Vector3;
        static UnprojectFromTransform(source: Vector3, viewportWidth: number, viewportHeight: number, world: Matrix, transform: Matrix): Vector3;
        static Unproject(source: Vector3, viewportWidth: number, viewportHeight: number, world: Matrix, view: Matrix, projection: Matrix): Vector3;
        static Minimize(left: Vector3, right: Vector3): Vector3;
        static Maximize(left: Vector3, right: Vector3): Vector3;
        static Distance(value1: Vector3, value2: Vector3): number;
        static DistanceSquared(value1: Vector3, value2: Vector3): number;
        static Center(value1: Vector3, value2: Vector3): Vector3;
        /**
         * Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
         * RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
         * to something in order to rotate it from its local system to the given target system.
         */
        static RotationFromAxis(axis1: Vector3, axis2: Vector3, axis3: Vector3): Vector3;
        /**
         * The same than RotationFromAxis but updates the passed ref Vector3 parameter.
         */
        static RotationFromAxisToRef(axis1: Vector3, axis2: Vector3, axis3: Vector3, ref: Vector3): void;
    }
    class Vector4 {
        x: number;
        y: number;
        z: number;
        w: number;
        constructor(x: number, y: number, z: number, w: number);
        toString(): string;
        getClassName(): string;
        getHashCode(): number;
        asArray(): number[];
        toArray(array: number[], index?: number): Vector4;
        addInPlace(otherVector: Vector4): Vector4;
        add(otherVector: Vector4): Vector4;
        addToRef(otherVector: Vector4, result: Vector4): Vector4;
        subtractInPlace(otherVector: Vector4): Vector4;
        subtract(otherVector: Vector4): Vector4;
        subtractToRef(otherVector: Vector4, result: Vector4): Vector4;
        subtractFromFloats(x: number, y: number, z: number, w: number): Vector4;
        subtractFromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): Vector4;
        negate(): Vector4;
        scaleInPlace(scale: number): Vector4;
        scale(scale: number): Vector4;
        scaleToRef(scale: number, result: Vector4): void;
        equals(otherVector: Vector4): boolean;
        equalsWithEpsilon(otherVector: Vector4, epsilon?: number): boolean;
        equalsToFloats(x: number, y: number, z: number, w: number): boolean;
        multiplyInPlace(otherVector: Vector4): Vector4;
        multiply(otherVector: Vector4): Vector4;
        multiplyToRef(otherVector: Vector4, result: Vector4): Vector4;
        multiplyByFloats(x: number, y: number, z: number, w: number): Vector4;
        divide(otherVector: Vector4): Vector4;
        divideToRef(otherVector: Vector4, result: Vector4): Vector4;
        MinimizeInPlace(other: Vector4): Vector4;
        MaximizeInPlace(other: Vector4): Vector4;
        length(): number;
        lengthSquared(): number;
        normalize(): Vector4;
        toVector3(): Vector3;
        clone(): Vector4;
        copyFrom(source: Vector4): Vector4;
        copyFromFloats(x: number, y: number, z: number, w: number): Vector4;
        static FromArray(array: number[], offset?: number): Vector4;
        static FromArrayToRef(array: number[], offset: number, result: Vector4): void;
        static FromFloatArrayToRef(array: Float32Array, offset: number, result: Vector4): void;
        static FromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): void;
        static Zero(): Vector4;
        static Normalize(vector: Vector4): Vector4;
        static NormalizeToRef(vector: Vector4, result: Vector4): void;
        static Minimize(left: Vector4, right: Vector4): Vector4;
        static Maximize(left: Vector4, right: Vector4): Vector4;
        static Distance(value1: Vector4, value2: Vector4): number;
        static DistanceSquared(value1: Vector4, value2: Vector4): number;
        static Center(value1: Vector4, value2: Vector4): Vector4;
    }
    interface ISize {
        width: number;
        height: number;
    }
    class Size implements ISize {
        width: number;
        height: number;
        constructor(width: number, height: number);
        toString(): string;
        getClassName(): string;
        getHashCode(): number;
        copyFrom(src: Size): void;
        clone(): Size;
        equals(other: Size): boolean;
        surface: number;
        static Zero(): Size;
        add(otherSize: Size): Size;
        substract(otherSize: Size): Size;
        static Lerp(start: Size, end: Size, amount: number): Size;
    }
    class Quaternion {
        x: number;
        y: number;
        z: number;
        w: number;
        constructor(x?: number, y?: number, z?: number, w?: number);
        toString(): string;
        getClassName(): string;
        getHashCode(): number;
        asArray(): number[];
        equals(otherQuaternion: Quaternion): boolean;
        clone(): Quaternion;
        copyFrom(other: Quaternion): Quaternion;
        copyFromFloats(x: number, y: number, z: number, w: number): Quaternion;
        add(other: Quaternion): Quaternion;
        subtract(other: Quaternion): Quaternion;
        scale(value: number): Quaternion;
        multiply(q1: Quaternion): Quaternion;
        multiplyToRef(q1: Quaternion, result: Quaternion): Quaternion;
        multiplyInPlace(q1: Quaternion): Quaternion;
        conjugateToRef(ref: Quaternion): Quaternion;
        conjugateInPlace(): Quaternion;
        conjugate(): Quaternion;
        length(): number;
        normalize(): Quaternion;
        toEulerAngles(order?: string): Vector3;
        toEulerAnglesToRef(result: Vector3, order?: string): Quaternion;
        toRotationMatrix(result: Matrix): Quaternion;
        fromRotationMatrix(matrix: Matrix): Quaternion;
        static FromRotationMatrix(matrix: Matrix): Quaternion;
        static FromRotationMatrixToRef(matrix: Matrix, result: Quaternion): void;
        static Inverse(q: Quaternion): Quaternion;
        static Identity(): Quaternion;
        static RotationAxis(axis: Vector3, angle: number): Quaternion;
        static FromArray(array: number[], offset?: number): Quaternion;
        static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion;
        static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Quaternion): void;
        static RotationAlphaBetaGamma(alpha: number, beta: number, gamma: number): Quaternion;
        static RotationAlphaBetaGammaToRef(alpha: number, beta: number, gamma: number, result: Quaternion): void;
        static Slerp(left: Quaternion, right: Quaternion, amount: number): Quaternion;
    }
    class Matrix {
        private static _tempQuaternion;
        private static _xAxis;
        private static _yAxis;
        private static _zAxis;
        m: Float32Array;
        isIdentity(): boolean;
        determinant(): number;
        toArray(): Float32Array;
        asArray(): Float32Array;
        invert(): Matrix;
        reset(): Matrix;
        add(other: Matrix): Matrix;
        addToRef(other: Matrix, result: Matrix): Matrix;
        addToSelf(other: Matrix): Matrix;
        invertToRef(other: Matrix): Matrix;
        setTranslation(vector3: Vector3): Matrix;
        getTranslation(): Vector3;
        multiply(other: Matrix): Matrix;
        copyFrom(other: Matrix): Matrix;
        copyToArray(array: Float32Array, offset?: number): Matrix;
        multiplyToRef(other: Matrix, result: Matrix): Matrix;
        multiplyToArray(other: Matrix, result: Float32Array, offset: number): Matrix;
        equals(value: Matrix): boolean;
        clone(): Matrix;
        getClassName(): string;
        getHashCode(): number;
        decompose(scale: Vector3, rotation: Quaternion, translation: Vector3): boolean;
        static FromArray(array: number[], offset?: number): Matrix;
        static FromArrayToRef(array: number[], offset: number, result: Matrix): void;
        static FromFloat32ArrayToRefScaled(array: Float32Array, offset: number, scale: number, result: Matrix): void;
        static FromValuesToRef(initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number, result: Matrix): void;
        getRow(index: number): Vector4;
        setRow(index: number, row: Vector4): Matrix;
        static FromValues(initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number): Matrix;
        static Compose(scale: Vector3, rotation: Quaternion, translation: Vector3): Matrix;
        static Identity(): Matrix;
        static IdentityToRef(result: Matrix): void;
        static Zero(): Matrix;
        static RotationX(angle: number): Matrix;
        static Invert(source: Matrix): Matrix;
        static RotationXToRef(angle: number, result: Matrix): void;
        static RotationY(angle: number): Matrix;
        static RotationYToRef(angle: number, result: Matrix): void;
        static RotationZ(angle: number): Matrix;
        static RotationZToRef(angle: number, result: Matrix): void;
        static RotationAxis(axis: Vector3, angle: number): Matrix;
        static RotationAxisToRef(axis: Vector3, angle: number, result: Matrix): void;
        static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Matrix;
        static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Matrix): void;
        static Scaling(x: number, y: number, z: number): Matrix;
        static ScalingToRef(x: number, y: number, z: number, result: Matrix): void;
        static Translation(x: number, y: number, z: number): Matrix;
        static TranslationToRef(x: number, y: number, z: number, result: Matrix): void;
        static Lerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
        static DecomposeLerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
        static LookAtLH(eye: Vector3, target: Vector3, up: Vector3): Matrix;
        static LookAtLHToRef(eye: Vector3, target: Vector3, up: Vector3, result: Matrix): void;
        static OrthoLH(width: number, height: number, znear: number, zfar: number): Matrix;
        static OrthoLHToRef(width: number, height: number, znear: number, zfar: number, result: Matrix): void;
        static OrthoOffCenterLH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
        static OrthoOffCenterLHToRef(left: number, right: any, bottom: number, top: number, znear: number, zfar: number, result: Matrix): void;
        static PerspectiveLH(width: number, height: number, znear: number, zfar: number): Matrix;
        static PerspectiveFovLH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
        static PerspectiveFovLHToRef(fov: number, aspect: number, znear: number, zfar: number, result: Matrix, isVerticalFovFixed?: boolean): void;
        static GetFinalMatrix(viewport: Viewport, world: Matrix, view: Matrix, projection: Matrix, zmin: number, zmax: number): Matrix;
        static GetAsMatrix2x2(matrix: Matrix): Float32Array;
        static GetAsMatrix3x3(matrix: Matrix): Float32Array;
        static Transpose(matrix: Matrix): Matrix;
        static Reflection(plane: Plane): Matrix;
        static ReflectionToRef(plane: Plane, result: Matrix): void;
    }
    class Plane {
        normal: Vector3;
        d: number;
        constructor(a: number, b: number, c: number, d: number);
        asArray(): number[];
        clone(): Plane;
        getClassName(): string;
        getHashCode(): number;
        normalize(): Plane;
        transform(transformation: Matrix): Plane;
        dotCoordinate(point: any): number;
        copyFromPoints(point1: Vector3, point2: Vector3, point3: Vector3): Plane;
        isFrontFacingTo(direction: Vector3, epsilon: number): boolean;
        signedDistanceTo(point: Vector3): number;
        static FromArray(array: number[]): Plane;
        static FromPoints(point1: any, point2: any, point3: any): Plane;
        static FromPositionAndNormal(origin: Vector3, normal: Vector3): Plane;
        static SignedDistanceToPlaneFromPositionAndNormal(origin: Vector3, normal: Vector3, point: Vector3): number;
    }
    class Viewport {
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        toGlobal(renderWidth: number, renderHeight: number): Viewport;
    }
    class Frustum {
        static GetPlanes(transform: Matrix): Plane[];
        static GetPlanesToRef(transform: Matrix, frustumPlanes: Plane[]): void;
    }
    enum Space {
        LOCAL = 0,
        WORLD = 1,
    }
    class Axis {
        static X: Vector3;
        static Y: Vector3;
        static Z: Vector3;
    }
    class BezierCurve {
        static interpolate(t: number, x1: number, y1: number, x2: number, y2: number): number;
    }
    enum Orientation {
        CW = 0,
        CCW = 1,
    }
    class Angle {
        private _radians;
        constructor(radians: number);
        degrees: () => number;
        radians: () => number;
        static BetweenTwoPoints(a: Vector2, b: Vector2): Angle;
        static FromRadians(radians: number): Angle;
        static FromDegrees(degrees: number): Angle;
    }
    class Arc2 {
        startPoint: Vector2;
        midPoint: Vector2;
        endPoint: Vector2;
        centerPoint: Vector2;
        radius: number;
        angle: Angle;
        startAngle: Angle;
        orientation: Orientation;
        constructor(startPoint: Vector2, midPoint: Vector2, endPoint: Vector2);
    }
    class Path2 {
        private _points;
        private _length;
        closed: boolean;
        constructor(x: number, y: number);
        addLineTo(x: number, y: number): Path2;
        addArcTo(midX: number, midY: number, endX: number, endY: number, numberOfSegments?: number): Path2;
        close(): Path2;
        length(): number;
        getPoints(): Vector2[];
        getPointAtLengthPosition(normalizedLengthPosition: number): Vector2;
        static StartingAt(x: number, y: number): Path2;
    }
    class Path3D {
        path: Vector3[];
        private _curve;
        private _distances;
        private _tangents;
        private _normals;
        private _binormals;
        private _raw;
        /**
        * new Path3D(path, normal, raw)
        * Creates a Path3D. A Path3D is a logical math object, so not a mesh.
        * please read the description in the tutorial :  http://doc.babylonjs.com/tutorials/How_to_use_Path3D
        * path : an array of Vector3, the curve axis of the Path3D
        * normal (optional) : Vector3, the first wanted normal to the curve. Ex (0, 1, 0) for a vertical normal.
        * raw (optional, default false) : boolean, if true the returned Path3D isn't normalized. Useful to depict path acceleration or speed.
        */
        constructor(path: Vector3[], firstNormal?: Vector3, raw?: boolean);
        /**
         * Returns the Path3D array of successive Vector3 designing its curve.
         */
        getCurve(): Vector3[];
        /**
         * Returns an array populated with tangent vectors on each Path3D curve point.
         */
        getTangents(): Vector3[];
        /**
         * Returns an array populated with normal vectors on each Path3D curve point.
         */
        getNormals(): Vector3[];
        /**
         * Returns an array populated with binormal vectors on each Path3D curve point.
         */
        getBinormals(): Vector3[];
        /**
         * Returns an array populated with distances (float) of the i-th point from the first curve point.
         */
        getDistances(): number[];
        /**
         * Forces the Path3D tangent, normal, binormal and distance recomputation.
         * Returns the same object updated.
         */
        update(path: Vector3[], firstNormal?: Vector3): Path3D;
        private _compute(firstNormal);
        private _getFirstNonNullVector(index);
        private _getLastNonNullVector(index);
        private _normalVector(v0, vt, va);
    }
    class Curve3 {
        private _points;
        private _length;
        /**
         * Returns a Curve3 object along a Quadratic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#quadratic-bezier-curve
         * @param v0 (Vector3) the origin point of the Quadratic Bezier
         * @param v1 (Vector3) the control point
         * @param v2 (Vector3) the end point of the Quadratic Bezier
         * @param nbPoints (integer) the wanted number of points in the curve
         */
        static CreateQuadraticBezier(v0: Vector3, v1: Vector3, v2: Vector3, nbPoints: number): Curve3;
        /**
         * Returns a Curve3 object along a Cubic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#cubic-bezier-curve
         * @param v0 (Vector3) the origin point of the Cubic Bezier
         * @param v1 (Vector3) the first control point
         * @param v2 (Vector3) the second control point
         * @param v3 (Vector3) the end point of the Cubic Bezier
         * @param nbPoints (integer) the wanted number of points in the curve
         */
        static CreateCubicBezier(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3, nbPoints: number): Curve3;
        /**
         * Returns a Curve3 object along a Hermite Spline curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#hermite-spline
         * @param p1 (Vector3) the origin point of the Hermite Spline
         * @param t1 (Vector3) the tangent vector at the origin point
         * @param p2 (Vector3) the end point of the Hermite Spline
         * @param t2 (Vector3) the tangent vector at the end point
         * @param nbPoints (integer) the wanted number of points in the curve
         */
        static CreateHermiteSpline(p1: Vector3, t1: Vector3, p2: Vector3, t2: Vector3, nbPoints: number): Curve3;
        /**
         * A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space.
         * A Curve3 is designed from a series of successive Vector3.
         * Tuto : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#curve3-object
         */
        constructor(points: Vector3[]);
        /**
         * Returns the Curve3 stored array of successive Vector3
         */
        getPoints(): Vector3[];
        /**
         * Returns the computed length (float) of the curve.
         */
        length(): number;
        /**
         * Returns a new instance of Curve3 object : var curve = curveA.continue(curveB);
         * This new Curve3 is built by translating and sticking the curveB at the end of the curveA.
         * curveA and curveB keep unchanged.
         */
        continue(curve: Curve3): Curve3;
        private _computeLength(path);
    }
    class SphericalHarmonics {
        L00: Vector3;
        L1_1: Vector3;
        L10: Vector3;
        L11: Vector3;
        L2_2: Vector3;
        L2_1: Vector3;
        L20: Vector3;
        L21: Vector3;
        L22: Vector3;
        addLight(direction: Vector3, color: Color3, deltaSolidAngle: number): void;
        scale(scale: number): void;
    }
    class SphericalPolynomial {
        x: Vector3;
        y: Vector3;
        z: Vector3;
        xx: Vector3;
        yy: Vector3;
        zz: Vector3;
        xy: Vector3;
        yz: Vector3;
        zx: Vector3;
        addAmbient(color: Color3): void;
        static getSphericalPolynomialFromHarmonics(harmonics: SphericalHarmonics): SphericalPolynomial;
    }
    class PositionNormalVertex {
        position: Vector3;
        normal: Vector3;
        constructor(position?: Vector3, normal?: Vector3);
        clone(): PositionNormalVertex;
    }
    class PositionNormalTextureVertex {
        position: Vector3;
        normal: Vector3;
        uv: Vector2;
        constructor(position?: Vector3, normal?: Vector3, uv?: Vector2);
        clone(): PositionNormalTextureVertex;
    }
    class Tmp {
        static Color3: Color3[];
        static Vector2: Vector2[];
        static Vector3: Vector3[];
        static Vector4: Vector4[];
        static Quaternion: Quaternion[];
        static Matrix: Matrix[];
    }
}

declare module BABYLON {
    class Particle {
        position: Vector3;
        direction: Vector3;
        color: Color4;
        colorStep: Color4;
        lifeTime: number;
        age: number;
        size: number;
        angle: number;
        angularSpeed: number;
        copyTo(other: Particle): void;
    }
}

declare module BABYLON {
    class ParticleSystem implements IDisposable, IAnimatable {
        name: string;
        static BLENDMODE_ONEONE: number;
        static BLENDMODE_STANDARD: number;
        animations: Animation[];
        id: string;
        renderingGroupId: number;
        emitter: any;
        emitRate: number;
        manualEmitCount: number;
        updateSpeed: number;
        targetStopDuration: number;
        disposeOnStop: boolean;
        minEmitPower: number;
        maxEmitPower: number;
        minLifeTime: number;
        maxLifeTime: number;
        minSize: number;
        maxSize: number;
        minAngularSpeed: number;
        maxAngularSpeed: number;
        particleTexture: Texture;
        layerMask: number;
        /**
        * An event triggered when the system is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<ParticleSystem>;
        private _onDisposeObserver;
        onDispose: () => void;
        updateFunction: (particles: Particle[]) => void;
        blendMode: number;
        forceDepthWrite: boolean;
        gravity: Vector3;
        direction1: Vector3;
        direction2: Vector3;
        minEmitBox: Vector3;
        maxEmitBox: Vector3;
        color1: Color4;
        color2: Color4;
        colorDead: Color4;
        textureMask: Color4;
        startDirectionFunction: (emitPower: number, worldMatrix: Matrix, directionToUpdate: Vector3, particle: Particle) => void;
        startPositionFunction: (worldMatrix: Matrix, positionToUpdate: Vector3, particle: Particle) => void;
        private particles;
        private _capacity;
        private _scene;
        private _stockParticles;
        private _newPartsExcess;
        private _vertexData;
        private _vertexBuffer;
        private _vertexBuffers;
        private _indexBuffer;
        private _effect;
        private _customEffect;
        private _cachedDefines;
        private _scaledColorStep;
        private _colorDiff;
        private _scaledDirection;
        private _scaledGravity;
        private _currentRenderId;
        private _alive;
        private _started;
        private _stopped;
        private _actualFrame;
        private _scaledUpdateSpeed;
        constructor(name: string, capacity: number, scene: Scene, customEffect?: Effect);
        recycleParticle(particle: Particle): void;
        getCapacity(): number;
        isAlive(): boolean;
        isStarted(): boolean;
        start(): void;
        stop(): void;
        _appendParticleVertex(index: number, particle: Particle, offsetX: number, offsetY: number): void;
        private _update(newParticles);
        private _getEffect();
        animate(): void;
        render(): number;
        dispose(): void;
        clone(name: string, newEmitter: any): ParticleSystem;
        serialize(): any;
        static Parse(parsedParticleSystem: any, scene: Scene, rootUrl: string): ParticleSystem;
    }
}

declare module BABYLON {
    class SolidParticle {
        idx: number;
        color: Color4;
        position: Vector3;
        rotation: Vector3;
        rotationQuaternion: Quaternion;
        scaling: Vector3;
        uvs: Vector4;
        velocity: Vector3;
        alive: boolean;
        isVisible: boolean;
        _pos: number;
        _model: ModelShape;
        shapeId: number;
        idxInShape: number;
        constructor(particleIndex: number, positionIndex: number, model: ModelShape, shapeId: number, idxInShape: number);
        scale: Vector3;
        quaternion: Quaternion;
    }
    class ModelShape {
        shapeID: number;
        _shape: Vector3[];
        _shapeUV: number[];
        _positionFunction: (particle: SolidParticle, i: number, s: number) => void;
        _vertexFunction: (particle: SolidParticle, vertex: Vector3, i: number) => void;
        constructor(id: number, shape: Vector3[], shapeUV: number[], posFunction: (particle: SolidParticle, i: number, s: number) => void, vtxFunction: (particle: SolidParticle, vertex: Vector3, i: number) => void);
    }
}

declare module BABYLON {
    /**
    * Full documentation here : http://doc.babylonjs.com/overviews/Solid_Particle_System
    */
    class SolidParticleSystem implements IDisposable {
        /**
        *  The SPS array of Solid Particle objects. Just access each particle as with any classic array.
        *  Example : var p = SPS.particles[i];
        */
        particles: SolidParticle[];
        /**
        * The SPS total number of particles. Read only. Use SPS.counter instead if you need to set your own value.
        */
        nbParticles: number;
        /**
        * If the particles must ever face the camera (default false). Useful for planar particles.
        */
        billboard: boolean;
        /**
        * This a counter ofr your own usage. It's not set by any SPS functions.
        */
        counter: number;
        /**
        * The SPS name. This name is also given to the underlying mesh.
        */
        name: string;
        /**
        * The SPS mesh. It's a standard BJS Mesh, so all the methods from the Mesh class are avalaible.
        */
        mesh: Mesh;
        /**
        * This empty object is intended to store some SPS specific or temporary values in order to lower the Garbage Collector activity.
        * Please read : http://doc.babylonjs.com/overviews/Solid_Particle_System#garbage-collector-concerns
        */
        vars: any;
        /**
        * This array is populated when the SPS is set as 'pickable'.
        * Each key of this array is a `faceId` value that you can get from a pickResult object.
        * Each element of this array is an object `{idx: int, faceId: int}`.
        * `idx` is the picked particle index in the `SPS.particles` array
        * `faceId` is the picked face index counted within this particle.
        * Please read : http://doc.babylonjs.com/overviews/Solid_Particle_System#pickable-particles
        */
        pickedParticles: {
            idx: number;
            faceId: number;
        }[];
        private _scene;
        private _positions;
        private _indices;
        private _normals;
        private _colors;
        private _uvs;
        private _positions32;
        private _normals32;
        private _fixedNormal32;
        private _colors32;
        private _uvs32;
        private _index;
        private _updatable;
        private _pickable;
        private _isVisibilityBoxLocked;
        private _alwaysVisible;
        private _shapeCounter;
        private _copy;
        private _shape;
        private _shapeUV;
        private _color;
        private _computeParticleColor;
        private _computeParticleTexture;
        private _computeParticleRotation;
        private _computeParticleVertex;
        private _computeBoundingBox;
        private _cam_axisZ;
        private _cam_axisY;
        private _cam_axisX;
        private _axisX;
        private _axisY;
        private _axisZ;
        private _camera;
        private _particle;
        private _fakeCamPos;
        private _rotMatrix;
        private _invertMatrix;
        private _rotated;
        private _quaternion;
        private _vertex;
        private _normal;
        private _yaw;
        private _pitch;
        private _roll;
        private _halfroll;
        private _halfpitch;
        private _halfyaw;
        private _sinRoll;
        private _cosRoll;
        private _sinPitch;
        private _cosPitch;
        private _sinYaw;
        private _cosYaw;
        private _w;
        private _minimum;
        private _maximum;
        /**
        * Creates a SPS (Solid Particle System) object.
        * `name` (String) is the SPS name, this will be the underlying mesh name.
        * `scene` (Scene) is the scene in which the SPS is added.
        * `updatable` (default true) : if the SPS must be updatable or immutable.
        * `isPickable` (default false) : if the solid particles must be pickable.
        */
        constructor(name: string, scene: Scene, options?: {
            updatable?: boolean;
            isPickable?: boolean;
        });
        /**
        * Builds the SPS underlying mesh. Returns a standard Mesh.
        * If no model shape was added to the SPS, the returned mesh is just a single triangular plane.
        */
        buildMesh(): Mesh;
        /**
        * Digests the mesh and generates as many solid particles in the system as wanted. Returns the SPS.
        * These particles will have the same geometry than the mesh parts and will be positioned at the same localisation than the mesh original places.
        * Thus the particles generated from `digest()` have their property `position` set yet.
        * `mesh` ( Mesh ) is the mesh to be digested
        * `facetNb` (optional integer, default 1) is the number of mesh facets per particle, this parameter is overriden by the parameter `number` if any
        * `delta` (optional integer, default 0) is the random extra number of facets per particle , each particle will have between `facetNb` and `facetNb + delta` facets
        * `number` (optional positive integer) is the wanted number of particles : each particle is built with `mesh_total_facets / number` facets
        */
        digest(mesh: Mesh, options?: {
            facetNb?: number;
            number?: number;
            delta?: number;
        }): SolidParticleSystem;
        private _resetCopy();
        private _meshBuilder(p, shape, positions, meshInd, indices, meshUV, uvs, meshCol, colors, idx, idxInShape, options);
        private _posToShape(positions);
        private _uvsToShapeUV(uvs);
        private _addParticle(idx, idxpos, model, shapeId, idxInShape);
        /**
        * Adds some particles to the SPS from the model shape. Returns the shape id.
        * Please read the doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#create-an-immutable-sps
        * `mesh` is any Mesh object that will be used as a model for the solid particles.
        * `nb` (positive integer) the number of particles to be created from this model
        * `positionFunction` is an optional javascript function to called for each particle on SPS creation.
        * `vertexFunction` is an optional javascript function to called for each vertex of each particle on SPS creation
        */
        addShape(mesh: Mesh, nb: number, options?: {
            positionFunction?: any;
            vertexFunction?: any;
        }): number;
        private _rebuildParticle(particle);
        /**
        * Rebuilds the whole mesh and updates the VBO : custom positions and vertices are recomputed if needed.
        */
        rebuildMesh(): void;
        /**
        *  Sets all the particles : this method actually really updates the mesh according to the particle positions, rotations, colors, textures, etc.
        *  This method calls `updateParticle()` for each particle of the SPS.
        *  For an animated SPS, it is usually called within the render loop.
        * @param start The particle index in the particle array where to start to compute the particle property values _(default 0)_
        * @param end The particle index in the particle array where to stop to compute the particle property values _(default nbParticle - 1)_
        * @param update If the mesh must be finally updated on this call after all the particle computations _(default true)_
        */
        setParticles(start?: number, end?: number, update?: boolean): void;
        private _quaternionRotationYPR();
        private _quaternionToRotationMatrix();
        /**
        * Disposes the SPS
        */
        dispose(): void;
        /**
        * Visibilty helper : Recomputes the visible size according to the mesh bounding box
        * doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility
        */
        refreshVisibleSize(): void;
        /**
        * Visibility helper : Sets the size of a visibility box, this sets the underlying mesh bounding box.
        * @param size the size (float) of the visibility box
        * note : this doesn't lock the SPS mesh bounding box.
        * doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility
        */
        setVisibilityBox(size: number): void;
        /**
        * Sets the SPS as always visible or not
        * doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility
        */
        isAlwaysVisible: boolean;
        /**
        * Sets the SPS visibility box as locked or not. This enables/disables the underlying mesh bounding box updates.
        * doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility
        */
        isVisibilityBoxLocked: boolean;
        /**
        * Tells to `setParticles()` to compute the particle rotations or not.
        * Default value : true. The SPS is faster when it's set to false.
        * Note : the particle rotations aren't stored values, so setting `computeParticleRotation` to false will prevents the particle to rotate.
        */
        computeParticleRotation: boolean;
        /**
        * Tells to `setParticles()` to compute the particle colors or not.
        * Default value : true. The SPS is faster when it's set to false.
        * Note : the particle colors are stored values, so setting `computeParticleColor` to false will keep yet the last colors set.
        */
        computeParticleColor: boolean;
        /**
        * Tells to `setParticles()` to compute the particle textures or not.
        * Default value : true. The SPS is faster when it's set to false.
        * Note : the particle textures are stored values, so setting `computeParticleTexture` to false will keep yet the last colors set.
        */
        computeParticleTexture: boolean;
        /**
        * Tells to `setParticles()` to call the vertex function for each vertex of each particle, or not.
        * Default value : false. The SPS is faster when it's set to false.
        * Note : the particle custom vertex positions aren't stored values.
        */
        computeParticleVertex: boolean;
        /**
        * Tells to `setParticles()` to compute or not the mesh bounding box when computing the particle positions.
        */
        computeBoundingBox: boolean;
        /**
        * This function does nothing. It may be overwritten to set all the particle first values.
        * The SPS doesn't call this function, you may have to call it by your own.
        * doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#particle-management
        */
        initParticles(): void;
        /**
        * This function does nothing. It may be overwritten to recycle a particle.
        * The SPS doesn't call this function, you may have to call it by your own.
        * doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#particle-management
        */
        recycleParticle(particle: SolidParticle): SolidParticle;
        /**
        * Updates a particle : this function should  be overwritten by the user.
        * It is called on each particle by `setParticles()`. This is the place to code each particle behavior.
        * doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#particle-management
        * ex : just set a particle position or velocity and recycle conditions
        */
        updateParticle(particle: SolidParticle): SolidParticle;
        /**
        * Updates a vertex of a particle : it can be overwritten by the user.
        * This will be called on each vertex particle by `setParticles()` if `computeParticleVertex` is set to true only.
        * @param particle the current particle
        * @param vertex the current index of the current particle
        * @param pt the index of the current vertex in the particle shape
        * doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#update-each-particle-shape
        * ex : just set a vertex particle position
        */
        updateParticleVertex(particle: SolidParticle, vertex: Vector3, pt: number): Vector3;
        /**
        * This will be called before any other treatment by `setParticles()` and will be passed three parameters.
        * This does nothing and may be overwritten by the user.
        * @param start the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
        * @param stop the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
        * @param update the boolean update value actually passed to setParticles()
        */
        beforeUpdateParticles(start?: number, stop?: number, update?: boolean): void;
        /**
        * This will be called  by `setParticles()` after all the other treatments and just before the actual mesh update.
        * This will be passed three parameters.
        * This does nothing and may be overwritten by the user.
        * @param start the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
        * @param stop the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
        * @param update the boolean update value actually passed to setParticles()
        */
        afterUpdateParticles(start?: number, stop?: number, update?: boolean): void;
    }
}

declare module BABYLON {
    class AbstractMesh extends Node implements IDisposable {
        private static _BILLBOARDMODE_NONE;
        private static _BILLBOARDMODE_X;
        private static _BILLBOARDMODE_Y;
        private static _BILLBOARDMODE_Z;
        private static _BILLBOARDMODE_ALL;
        static BILLBOARDMODE_NONE: number;
        static BILLBOARDMODE_X: number;
        static BILLBOARDMODE_Y: number;
        static BILLBOARDMODE_Z: number;
        static BILLBOARDMODE_ALL: number;
        /**
        * An event triggered when the mesh is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<AbstractMesh>;
        private _onDisposeObserver;
        onDispose: () => void;
        /**
        * An event triggered when this mesh collides with another one
        * @type {BABYLON.Observable}
        */
        onCollideObservable: Observable<AbstractMesh>;
        private _onCollideObserver;
        onCollide: () => void;
        /**
        * An event triggered when the collision's position changes
        * @type {BABYLON.Observable}
        */
        onCollisionPositionChangeObservable: Observable<Vector3>;
        private _onCollisionPositionChangeObserver;
        onCollisionPositionChange: () => void;
        /**
        * An event triggered after the world matrix is updated
        * @type {BABYLON.Observable}
        */
        onAfterWorldMatrixUpdateObservable: Observable<AbstractMesh>;
        definedFacingForward: boolean;
        position: Vector3;
        private _rotation;
        _rotationQuaternion: Quaternion;
        private _scaling;
        billboardMode: number;
        visibility: number;
        alphaIndex: number;
        infiniteDistance: boolean;
        isVisible: boolean;
        isPickable: boolean;
        showBoundingBox: boolean;
        showSubMeshesBoundingBox: boolean;
        isBlocker: boolean;
        renderingGroupId: number;
        material: Material;
        receiveShadows: boolean;
        renderOutline: boolean;
        outlineColor: Color3;
        outlineWidth: number;
        renderOverlay: boolean;
        overlayColor: Color3;
        overlayAlpha: number;
        hasVertexAlpha: boolean;
        useVertexColors: boolean;
        applyFog: boolean;
        computeBonesUsingShaders: boolean;
        scalingDeterminant: number;
        numBoneInfluencers: number;
        useOctreeForRenderingSelection: boolean;
        useOctreeForPicking: boolean;
        useOctreeForCollisions: boolean;
        layerMask: number;
        alwaysSelectAsActiveMesh: boolean;
        /**
         * This scene's action manager
         * @type {BABYLON.ActionManager}
        */
        actionManager: ActionManager;
        physicsImpostor: BABYLON.PhysicsImpostor;
        onPhysicsCollide: (collidedMesh: AbstractMesh, contact: any) => void;
        private _checkCollisions;
        ellipsoid: Vector3;
        ellipsoidOffset: Vector3;
        private _collider;
        private _oldPositionForCollisions;
        private _diffPositionForCollisions;
        private _newPositionForCollisions;
        private _meshToBoneReferal;
        edgesWidth: number;
        edgesColor: Color4;
        _edgesRenderer: EdgesRenderer;
        private _localWorld;
        _worldMatrix: Matrix;
        private _rotateYByPI;
        private _absolutePosition;
        private _collisionsTransformMatrix;
        private _collisionsScalingMatrix;
        _positions: Vector3[];
        private _isDirty;
        _masterMesh: AbstractMesh;
        _materialDefines: MaterialDefines;
        _boundingInfo: BoundingInfo;
        private _pivotMatrix;
        _isDisposed: boolean;
        _renderId: number;
        subMeshes: SubMesh[];
        _submeshesOctree: Octree<SubMesh>;
        _intersectionsInProgress: AbstractMesh[];
        private _isWorldMatrixFrozen;
        _unIndexed: boolean;
        _poseMatrix: Matrix;
        _waitingActions: any;
        _waitingFreezeWorldMatrix: boolean;
        private _skeleton;
        _bonesTransformMatrices: Float32Array;
        skeleton: Skeleton;
        constructor(name: string, scene: Scene);
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        /**
         * Getting the rotation object.
         * If rotation quaternion is set, this vector will (almost always) be the Zero vector!
         */
        rotation: Vector3;
        scaling: Vector3;
        rotationQuaternion: Quaternion;
        updatePoseMatrix(matrix: Matrix): void;
        getPoseMatrix(): Matrix;
        disableEdgesRendering(): void;
        enableEdgesRendering(epsilon?: number, checkVerticesInsteadOfIndices?: boolean): void;
        isBlocked: boolean;
        getLOD(camera: Camera): AbstractMesh;
        getTotalVertices(): number;
        getIndices(): number[] | Int32Array;
        getVerticesData(kind: string): number[] | Float32Array;
        isVerticesDataPresent(kind: string): boolean;
        getBoundingInfo(): BoundingInfo;
        useBones: boolean;
        _preActivate(): void;
        _preActivateForIntermediateRendering(renderId: number): void;
        _activate(renderId: number): void;
        getWorldMatrix(): Matrix;
        worldMatrixFromCache: Matrix;
        absolutePosition: Vector3;
        freezeWorldMatrix(): void;
        unfreezeWorldMatrix(): void;
        isWorldMatrixFrozen: boolean;
        rotate(axis: Vector3, amount: number, space?: Space): void;
        translate(axis: Vector3, distance: number, space?: Space): void;
        getAbsolutePosition(): Vector3;
        setAbsolutePosition(absolutePosition: Vector3): void;
        /**
         * Perform relative position change from the point of view of behind the front of the mesh.
         * This is performed taking into account the meshes current rotation, so you do not have to care.
         * Supports definition of mesh facing forward or backward.
         * @param {number} amountRight
         * @param {number} amountUp
         * @param {number} amountForward
         */
        movePOV(amountRight: number, amountUp: number, amountForward: number): void;
        /**
         * Calculate relative position change from the point of view of behind the front of the mesh.
         * This is performed taking into account the meshes current rotation, so you do not have to care.
         * Supports definition of mesh facing forward or backward.
         * @param {number} amountRight
         * @param {number} amountUp
         * @param {number} amountForward
         */
        calcMovePOV(amountRight: number, amountUp: number, amountForward: number): Vector3;
        /**
         * Perform relative rotation change from the point of view of behind the front of the mesh.
         * Supports definition of mesh facing forward or backward.
         * @param {number} flipBack
         * @param {number} twirlClockwise
         * @param {number} tiltRight
         */
        rotatePOV(flipBack: number, twirlClockwise: number, tiltRight: number): void;
        /**
         * Calculate relative rotation change from the point of view of behind the front of the mesh.
         * Supports definition of mesh facing forward or backward.
         * @param {number} flipBack
         * @param {number} twirlClockwise
         * @param {number} tiltRight
         */
        calcRotatePOV(flipBack: number, twirlClockwise: number, tiltRight: number): Vector3;
        setPivotMatrix(matrix: Matrix): void;
        getPivotMatrix(): Matrix;
        _isSynchronized(): boolean;
        _initCache(): void;
        markAsDirty(property: string): void;
        _updateBoundingInfo(): void;
        _updateSubMeshesBoundingInfo(matrix: Matrix): void;
        computeWorldMatrix(force?: boolean): Matrix;
        /**
        * If you'd like to be callbacked after the mesh position, rotation or scaling has been updated
        * @param func: callback function to add
        */
        registerAfterWorldMatrixUpdate(func: (mesh: AbstractMesh) => void): void;
        unregisterAfterWorldMatrixUpdate(func: (mesh: AbstractMesh) => void): void;
        setPositionWithLocalVector(vector3: Vector3): void;
        getPositionExpressedInLocalSpace(): Vector3;
        locallyTranslate(vector3: Vector3): void;
        lookAt(targetPoint: Vector3, yawCor: number, pitchCor: number, rollCor: number): void;
        attachToBone(bone: Bone, affectedMesh: AbstractMesh): void;
        detachFromBone(): void;
        isInFrustum(frustumPlanes: Plane[]): boolean;
        isCompletelyInFrustum(camera?: Camera): boolean;
        intersectsMesh(mesh: AbstractMesh, precise?: boolean): boolean;
        intersectsPoint(point: Vector3): boolean;
        /**
         *  @Deprecated. Use new PhysicsImpostor instead.
         * */
        setPhysicsState(impostor?: any, options?: PhysicsImpostorParameters): any;
        getPhysicsImpostor(): PhysicsImpostor;
        /**
         * @Deprecated. Use getPhysicsImpostor().getParam("mass");
         */
        getPhysicsMass(): number;
        /**
         * @Deprecated. Use getPhysicsImpostor().getParam("friction");
         */
        getPhysicsFriction(): number;
        /**
         * @Deprecated. Use getPhysicsImpostor().getParam("restitution");
         */
        getPhysicsRestitution(): number;
        getPositionInCameraSpace(camera?: Camera): Vector3;
        getDistanceToCamera(camera?: Camera): number;
        applyImpulse(force: Vector3, contactPoint: Vector3): void;
        setPhysicsLinkWith(otherMesh: Mesh, pivot1: Vector3, pivot2: Vector3, options?: any): void;
        /**
         * @Deprecated
         */
        updatePhysicsBodyPosition(): void;
        /**
         * @Deprecated
         * Calling this function is not needed anymore.
         * The physics engine takes care of transofmration automatically.
         */
        updatePhysicsBody(): void;
        checkCollisions: boolean;
        moveWithCollisions(velocity: Vector3): void;
        private _onCollisionPositionChange;
        /**
        * This function will create an octree to help select the right submeshes for rendering, picking and collisions
        * Please note that you must have a decent number of submeshes to get performance improvements when using octree
        */
        createOrUpdateSubmeshesOctree(maxCapacity?: number, maxDepth?: number): Octree<SubMesh>;
        _collideForSubMesh(subMesh: SubMesh, transformMatrix: Matrix, collider: Collider): void;
        _processCollisionsForSubMeshes(collider: Collider, transformMatrix: Matrix): void;
        _checkCollision(collider: Collider): void;
        _generatePointsArray(): boolean;
        intersects(ray: Ray, fastCheck?: boolean): PickingInfo;
        clone(name: string, newParent: Node, doNotCloneChildren?: boolean): AbstractMesh;
        releaseSubMeshes(): void;
        dispose(doNotRecurse?: boolean): void;
    }
}

declare module BABYLON {
    class Buffer {
        private _engine;
        private _buffer;
        private _data;
        private _updatable;
        private _strideSize;
        private _instanced;
        constructor(engine: any, data: number[] | Float32Array, updatable: boolean, stride: number, postponeInternalCreation?: boolean, instanced?: boolean);
        createVertexBuffer(kind: string, offset: number, size: number, stride?: number): VertexBuffer;
        isUpdatable(): boolean;
        getData(): number[] | Float32Array;
        getBuffer(): WebGLBuffer;
        getStrideSize(): number;
        getIsInstanced(): boolean;
        create(data?: number[] | Float32Array): void;
        update(data: number[] | Float32Array): void;
        updateDirectly(data: Float32Array, offset: number, vertexCount?: number): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class CSG {
        private polygons;
        matrix: Matrix;
        position: Vector3;
        rotation: Vector3;
        rotationQuaternion: Quaternion;
        scaling: Vector3;
        static FromMesh(mesh: Mesh): CSG;
        private static FromPolygons(polygons);
        clone(): CSG;
        private toPolygons();
        union(csg: CSG): CSG;
        unionInPlace(csg: CSG): void;
        subtract(csg: CSG): CSG;
        subtractInPlace(csg: CSG): void;
        intersect(csg: CSG): CSG;
        intersectInPlace(csg: CSG): void;
        inverse(): CSG;
        inverseInPlace(): void;
        copyTransformAttributes(csg: CSG): CSG;
        buildMeshGeometry(name: string, scene: Scene, keepSubMeshes: boolean): Mesh;
        toMesh(name: string, material: Material, scene: Scene, keepSubMeshes: boolean): Mesh;
    }
}

declare module BABYLON {
    class Geometry implements IGetSetVerticesData {
        id: string;
        delayLoadState: number;
        delayLoadingFile: string;
        onGeometryUpdated: (geometry: Geometry, kind?: string) => void;
        private _scene;
        private _engine;
        private _meshes;
        private _totalVertices;
        private _indices;
        private _vertexBuffers;
        private _isDisposed;
        private _extend;
        private _boundingBias;
        _delayInfo: any;
        private _indexBuffer;
        _boundingInfo: BoundingInfo;
        _delayLoadingFunction: (any: any, geometry: Geometry) => void;
        _softwareSkinningRenderId: number;
        /**
         *  The Bias Vector to apply on the bounding elements (box/sphere), the max extend is computed as v += v * bias.x + bias.y, the min is computed as v -= v * bias.x + bias.y
         * @returns The Bias Vector
         */
        boundingBias: Vector2;
        constructor(id: string, scene: Scene, vertexData?: VertexData, updatable?: boolean, mesh?: Mesh);
        extend: {
            minimum: Vector3;
            maximum: Vector3;
        };
        getScene(): Scene;
        getEngine(): Engine;
        isReady(): boolean;
        setAllVerticesData(vertexData: VertexData, updatable?: boolean): void;
        setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean, stride?: number): void;
        setVerticesBuffer(buffer: VertexBuffer): void;
        updateVerticesDataDirectly(kind: string, data: Float32Array, offset: number): void;
        updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean): void;
        private updateBoundingInfo(updateExtends, data);
        getTotalVertices(): number;
        getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Float32Array;
        getVertexBuffer(kind: string): VertexBuffer;
        getVertexBuffers(): {
            [key: string]: VertexBuffer;
        };
        isVerticesDataPresent(kind: string): boolean;
        getVerticesDataKinds(): string[];
        setIndices(indices: number[] | Int32Array, totalVertices?: number): void;
        getTotalIndices(): number;
        getIndices(copyWhenShared?: boolean): number[] | Int32Array;
        getIndexBuffer(): WebGLBuffer;
        releaseForMesh(mesh: Mesh, shouldDispose?: boolean): void;
        applyToMesh(mesh: Mesh): void;
        private updateExtend(data?, stride?);
        private _applyToMesh(mesh);
        private notifyUpdate(kind?);
        load(scene: Scene, onLoaded?: () => void): void;
        /**
         * Invert the geometry to move from a right handed system to a left handed one.
         */
        toLeftHanded(): void;
        isDisposed(): boolean;
        dispose(): void;
        copy(id: string): Geometry;
        serialize(): any;
        serializeVerticeData(): any;
        static ExtractFromMesh(mesh: Mesh, id: string): Geometry;
        static RandomId(): string;
        static ImportGeometry(parsedGeometry: any, mesh: Mesh): void;
        static Parse(parsedVertexData: any, scene: Scene, rootUrl: string): Geometry;
    }
    module Geometry.Primitives {
        class _Primitive extends Geometry {
            private _canBeRegenerated;
            private _beingRegenerated;
            constructor(id: string, scene: Scene, _canBeRegenerated?: boolean, mesh?: Mesh);
            canBeRegenerated(): boolean;
            regenerate(): void;
            asNewGeometry(id: string): Geometry;
            setAllVerticesData(vertexData: VertexData, updatable?: boolean): void;
            setVerticesData(kind: string, data: number[] | Int32Array | Float32Array, updatable?: boolean): void;
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
        }
        class Ribbon extends _Primitive {
            pathArray: Vector3[][];
            closeArray: boolean;
            closePath: boolean;
            offset: number;
            side: number;
            constructor(id: string, scene: Scene, pathArray: Vector3[][], closeArray: boolean, closePath: boolean, offset: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
        }
        class Box extends _Primitive {
            size: number;
            side: number;
            constructor(id: string, scene: Scene, size: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedBox: any, scene: Scene): Box;
        }
        class Sphere extends _Primitive {
            segments: number;
            diameter: number;
            side: number;
            constructor(id: string, scene: Scene, segments: number, diameter: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedSphere: any, scene: Scene): Geometry.Primitives.Sphere;
        }
        class Disc extends _Primitive {
            radius: number;
            tessellation: number;
            side: number;
            constructor(id: string, scene: Scene, radius: number, tessellation: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
        }
        class Cylinder extends _Primitive {
            height: number;
            diameterTop: number;
            diameterBottom: number;
            tessellation: number;
            subdivisions: number;
            side: number;
            constructor(id: string, scene: Scene, height: number, diameterTop: number, diameterBottom: number, tessellation: number, subdivisions?: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedCylinder: any, scene: Scene): Geometry.Primitives.Cylinder;
        }
        class Torus extends _Primitive {
            diameter: number;
            thickness: number;
            tessellation: number;
            side: number;
            constructor(id: string, scene: Scene, diameter: number, thickness: number, tessellation: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedTorus: any, scene: Scene): Geometry.Primitives.Torus;
        }
        class Ground extends _Primitive {
            width: number;
            height: number;
            subdivisions: number;
            constructor(id: string, scene: Scene, width: number, height: number, subdivisions: number, canBeRegenerated?: boolean, mesh?: Mesh);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedGround: any, scene: Scene): Geometry.Primitives.Ground;
        }
        class TiledGround extends _Primitive {
            xmin: number;
            zmin: number;
            xmax: number;
            zmax: number;
            subdivisions: {
                w: number;
                h: number;
            };
            precision: {
                w: number;
                h: number;
            };
            constructor(id: string, scene: Scene, xmin: number, zmin: number, xmax: number, zmax: number, subdivisions: {
                w: number;
                h: number;
            }, precision: {
                w: number;
                h: number;
            }, canBeRegenerated?: boolean, mesh?: Mesh);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
        }
        class Plane extends _Primitive {
            size: number;
            side: number;
            constructor(id: string, scene: Scene, size: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedPlane: any, scene: Scene): Geometry.Primitives.Plane;
        }
        class TorusKnot extends _Primitive {
            radius: number;
            tube: number;
            radialSegments: number;
            tubularSegments: number;
            p: number;
            q: number;
            side: number;
            constructor(id: string, scene: Scene, radius: number, tube: number, radialSegments: number, tubularSegments: number, p: number, q: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedTorusKnot: any, scene: Scene): Geometry.Primitives.TorusKnot;
        }
    }
}

declare module BABYLON {
    class GroundMesh extends Mesh {
        generateOctree: boolean;
        private _worldInverse;
        private _heightQuads;
        _subdivisions: number;
        _width: number;
        _height: number;
        _minX: number;
        _maxX: number;
        _minZ: number;
        _maxZ: number;
        constructor(name: string, scene: Scene);
        subdivisions: number;
        optimize(chunksCount: number, octreeBlocksSize?: number): void;
        /**
         * Returns a height (y) value in the Worl system :
         * the ground altitude at the coordinates (x, z) expressed in the World system.
         * Returns the ground y position if (x, z) are outside the ground surface.
         * Not pertinent if the ground is rotated.
         */
        getHeightAtCoordinates(x: number, z: number): number;
        /**
         * Returns a normalized vector (Vector3) orthogonal to the ground
         * at the ground coordinates (x, z) expressed in the World system.
         * Returns Vector3(0, 1, 0) if (x, z) are outside the ground surface.
         * Not pertinent if the ground is rotated.
         */
        getNormalAtCoordinates(x: number, z: number): Vector3;
        /**
         * Updates the Vector3 passed a reference with a normalized vector orthogonal to the ground
         * at the ground coordinates (x, z) expressed in the World system.
         * Doesn't uptade the reference Vector3 if (x, z) are outside the ground surface.
         * Not pertinent if the ground is rotated.
         */
        getNormalAtCoordinatesToRef(x: number, z: number, ref: Vector3): void;
        /**
        * Force the heights to be recomputed for getHeightAtCoordinates() or getNormalAtCoordinates()
        * if the ground has been updated.
        * This can be used in the render loop
        */
        updateCoordinateHeights(): void;
        private _getFacetAt(x, z);
        private _initHeightQuads();
        private _computeHeightQuads();
    }
}

declare module BABYLON {
    /**
     * Creates an instance based on a source mesh.
     */
    class InstancedMesh extends AbstractMesh {
        private _sourceMesh;
        private _currentLOD;
        constructor(name: string, source: Mesh);
        receiveShadows: boolean;
        material: Material;
        visibility: number;
        skeleton: Skeleton;
        renderingGroupId: number;
        getTotalVertices(): number;
        sourceMesh: Mesh;
        getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Float32Array;
        isVerticesDataPresent(kind: string): boolean;
        getIndices(): number[] | Int32Array;
        _positions: Vector3[];
        refreshBoundingInfo(): void;
        _preActivate(): void;
        _activate(renderId: number): void;
        getLOD(camera: Camera): AbstractMesh;
        _syncSubMeshes(): void;
        _generatePointsArray(): boolean;
        clone(name: string, newParent: Node, doNotCloneChildren?: boolean): InstancedMesh;
        dispose(doNotRecurse?: boolean): void;
    }
}

declare module BABYLON {
    class LinesMesh extends Mesh {
        color: Color3;
        alpha: number;
        private _positionBuffer;
        /**
         * The intersection Threshold is the margin applied when intersection a segment of the LinesMesh with a Ray.
         * This margin is expressed in world space coordinates, so its value may vary.
         * Default value is 0.1
         * @returns the intersection Threshold value.
         */
        /**
         * The intersection Threshold is the margin applied when intersection a segment of the LinesMesh with a Ray.
         * This margin is expressed in world space coordinates, so its value may vary.
         * @param value the new threshold to apply
         */
        intersectionThreshold: number;
        private _intersectionThreshold;
        private _colorShader;
        constructor(name: string, scene: Scene, parent?: Node, source?: LinesMesh, doNotCloneChildren?: boolean);
        material: Material;
        checkCollisions: boolean;
        createInstance(name: string): InstancedMesh;
        _bind(subMesh: SubMesh, effect: Effect, fillMode: number): void;
        _draw(subMesh: SubMesh, fillMode: number, instancesCount?: number): void;
        dispose(doNotRecurse?: boolean): void;
        clone(name: string, newParent?: Node, doNotCloneChildren?: boolean): LinesMesh;
    }
}

declare module BABYLON {
    class _InstancesBatch {
        mustReturn: boolean;
        visibleInstances: InstancedMesh[][];
        renderSelf: boolean[];
    }
    class Mesh extends AbstractMesh implements IGetSetVerticesData {
        static _FRONTSIDE: number;
        static _BACKSIDE: number;
        static _DOUBLESIDE: number;
        static _DEFAULTSIDE: number;
        static _NO_CAP: number;
        static _CAP_START: number;
        static _CAP_END: number;
        static _CAP_ALL: number;
        /**
         * Mesh side orientation : usually the external or front surface
         */
        static FRONTSIDE: number;
        /**
         * Mesh side orientation : usually the internal or back surface
         */
        static BACKSIDE: number;
        /**
         * Mesh side orientation : both internal and external or front and back surfaces
         */
        static DOUBLESIDE: number;
        /**
         * Mesh side orientation : by default, `FRONTSIDE`
         */
        static DEFAULTSIDE: number;
        /**
         * Mesh cap setting : no cap
         */
        static NO_CAP: number;
        /**
         * Mesh cap setting : one cap at the beginning of the mesh
         */
        static CAP_START: number;
        /**
         * Mesh cap setting : one cap at the end of the mesh
         */
        static CAP_END: number;
        /**
         * Mesh cap setting : two caps, one at the beginning  and one at the end of the mesh
         */
        static CAP_ALL: number;
        /**
         * An event triggered before rendering the mesh
         * @type {BABYLON.Observable}
         */
        onBeforeRenderObservable: Observable<Mesh>;
        /**
        * An event triggered after rendering the mesh
        * @type {BABYLON.Observable}
        */
        onAfterRenderObservable: Observable<Mesh>;
        /**
        * An event triggered before drawing the mesh
        * @type {BABYLON.Observable}
        */
        onBeforeDrawObservable: Observable<Mesh>;
        private _onBeforeDrawObserver;
        onBeforeDraw: () => void;
        delayLoadState: number;
        instances: InstancedMesh[];
        delayLoadingFile: string;
        _binaryInfo: any;
        private _LODLevels;
        onLODLevelSelection: (distance: number, mesh: Mesh, selectedLevel: Mesh) => void;
        _geometry: Geometry;
        _delayInfo: any;
        _delayLoadingFunction: (any: any, mesh: Mesh) => void;
        _visibleInstances: any;
        private _renderIdForInstances;
        private _batchCache;
        private _instancesBufferSize;
        private _instancesBuffer;
        private _instancesData;
        private _overridenInstanceCount;
        _shouldGenerateFlatShading: boolean;
        private _preActivateId;
        private _sideOrientation;
        private _areNormalsFrozen;
        private _sourcePositions;
        private _sourceNormals;
        /**
         * @constructor
         * @param {string} name The value used by scene.getMeshByName() to do a lookup.
         * @param {Scene} scene The scene to add this mesh to.
         * @param {Node} parent The parent of this mesh, if it has one
         * @param {Mesh} source An optional Mesh from which geometry is shared, cloned.
         * @param {boolean} doNotCloneChildren When cloning, skip cloning child meshes of source, default False.
         *                  When false, achieved by calling a clone(), also passing False.
         *                  This will make creation of children, recursive.
         */
        constructor(name: string, scene: Scene, parent?: Node, source?: Mesh, doNotCloneChildren?: boolean, clonePhysicsImpostor?: boolean);
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        hasLODLevels: boolean;
        private _sortLODLevels();
        /**
         * Add a mesh as LOD level triggered at the given distance.
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD
         * @param {number} distance The distance from the center of the object to show this level
         * @param {Mesh} mesh The mesh to be added as LOD level
         * @return {Mesh} This mesh (for chaining)
         */
        addLODLevel(distance: number, mesh: Mesh): Mesh;
        /**
         * Returns the LOD level mesh at the passed distance or null if not found.
         * It is related to the method `addLODLevel(distance, mesh)`.
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD
         */
        getLODLevelAtDistance(distance: number): Mesh;
        /**
         * Remove a mesh from the LOD array
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD
         * @param {Mesh} mesh The mesh to be removed.
         * @return {Mesh} This mesh (for chaining)
         */
        removeLODLevel(mesh: Mesh): Mesh;
        /**
         * Returns the registered LOD mesh distant from the parameter `camera` position if any, else returns the current mesh.
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD
         */
        getLOD(camera: Camera, boundingSphere?: BoundingSphere): AbstractMesh;
        /**
         * Returns the mesh internal Geometry object.
         */
        geometry: Geometry;
        /**
         * Returns a positive integer : the total number of vertices within the mesh geometry or zero if the mesh has no geometry.
         */
        getTotalVertices(): number;
        /**
         * Returns an array of integers or floats, or a Float32Array, depending on the requested `kind` (positions, indices, normals, etc).
         * If `copywhenShared` is true (default false) and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.
         * Returns null if the mesh has no geometry or no vertex buffer.
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Float32Array;
        /**
         * Returns the mesh VertexBuffer object from the requested `kind` : positions, indices, normals, etc.
         * Returns `undefined` if the mesh has no geometry.
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        getVertexBuffer(kind: any): VertexBuffer;
        /**
         * Returns a boolean depending on the existence of the Vertex Data for the requested `kind`.
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        isVerticesDataPresent(kind: string): boolean;
        /**
         * Returns a string : the list of existing `kinds` of Vertex Data for this mesh.
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        getVerticesDataKinds(): string[];
        /**
         * Returns a positive integer : the total number of indices in this mesh geometry.
         * Returns zero if the mesh has no geometry.
         */
        getTotalIndices(): number;
        /**
         * Returns an array of integers or a Int32Array populated with the mesh indices.
         * If the parameter `copyWhenShared` is true (default false) and and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.
         * Returns an empty array if the mesh has no geometry.
         */
        getIndices(copyWhenShared?: boolean): number[] | Int32Array;
        isBlocked: boolean;
        /**
         * Boolean : true once the mesh is ready after all the delayed process (loading, etc) are complete.
         */
        isReady(): boolean;
        /**
         * Boolean : true if the mesh has been disposed.
         */
        isDisposed(): boolean;
        /**
         * Sets the mesh side orientation : BABYLON.Mesh.FRONTSIDE, BABYLON.Mesh.BACKSIDE, BABYLON.Mesh.DOUBLESIDE or BABYLON.Mesh.DEFAULTSIDE
         * tuto : http://doc.babylonjs.com/tutorials/Discover_Basic_Elements#side-orientation
         */
        sideOrientation: number;
        /**
         * Boolean : true if the normals aren't to be recomputed on next mesh `positions` array update.
         * This property is pertinent only for updatable parametric shapes.
         */
        areNormalsFrozen: boolean;
        /**
         * This function affects parametric shapes on vertex position update only : ribbons, tubes, etc.
         * It has no effect at all on other shapes.
         * It prevents the mesh normals from being recomputed on next `positions` array update.
         */
        freezeNormals(): void;
        /**
         * This function affects parametric shapes on vertex position update only : ribbons, tubes, etc.
         * It has no effect at all on other shapes.
         * It reactivates the mesh normals computation if it was previously frozen.
         */
        unfreezeNormals(): void;
        /**
         * Overrides instance count. Only applicable when custom instanced InterleavedVertexBuffer are used rather than InstancedMeshs
         */
        overridenInstanceCount: number;
        _preActivate(): void;
        _preActivateForIntermediateRendering(renderId: number): void;
        _registerInstanceForRenderId(instance: InstancedMesh, renderId: number): void;
        /**
         * This method recomputes and sets a new BoundingInfo to the mesh unless it is locked.
         * This means the mesh underlying bounding box and sphere are recomputed.
         */
        refreshBoundingInfo(): void;
        _createGlobalSubMesh(): SubMesh;
        subdivide(count: number): void;
        /**
         * Sets the vertex data of the mesh geometry for the requested `kind`.
         * If the mesh has no geometry, a new Geometry object is set to the mesh and then passed this vertex data.
         * The `data` are either a numeric array either a Float32Array.
         * The parameter `updatable` is passed as is to the underlying Geometry object constructor (if initianilly none) or updater.
         * The parameter `stride` is an optional positive integer, it is usually automatically deducted from the `kind` (3 for positions or normals, 2 for UV, etc).
         * Note that a new underlying VertexBuffer object is created each call.
         * If the `kind` is the `PositionKind`, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.
         *
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean, stride?: number): void;
        setVerticesBuffer(buffer: VertexBuffer): void;
        /**
         * Updates the existing vertex data of the mesh geometry for the requested `kind`.
         * If the mesh has no geometry, it is simply returned as it is.
         * The `data` are either a numeric array either a Float32Array.
         * No new underlying VertexBuffer object is created.
         * If the `kind` is the `PositionKind` and if `updateExtends` is true, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.
         * If the parameter `makeItUnique` is true, a new global geometry is created from this positions and is set to the mesh.
         *
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean, makeItUnique?: boolean): void;
        /**
         * Deprecated since BabylonJS v2.3
         */
        updateVerticesDataDirectly(kind: string, data: Float32Array, offset?: number, makeItUnique?: boolean): void;
        /**
         * This method updates the vertex positions of an updatable mesh according to the `positionFunction` returned values.
         * tuto : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#other-shapes-updatemeshpositions
         * The parameter `positionFunction` is a simple JS function what is passed the mesh `positions` array. It doesn't need to return anything.
         * The parameter `computeNormals` is a boolean (default true) to enable/disable the mesh normal recomputation after the vertex position update.
         */
        updateMeshPositions(positionFunction: any, computeNormals?: boolean): void;
        makeGeometryUnique(): void;
        /**
         * Sets the mesh indices.
         * Expects an array populated with integers or a Int32Array.
         * If the mesh has no geometry, a new `Geometry` object is created and set to the mesh.
         * This method creates a new index buffer each call.
         */
        setIndices(indices: number[] | Int32Array, totalVertices?: number): void;
        /**
         * Invert the geometry to move from a right handed system to a left handed one.
         */
        toLeftHanded(): void;
        _bind(subMesh: SubMesh, effect: Effect, fillMode: number): void;
        _draw(subMesh: SubMesh, fillMode: number, instancesCount?: number): void;
        /**
         * Registers for this mesh a javascript function called just before the rendering process.
         * This function is passed the current mesh and doesn't return anything.
         */
        registerBeforeRender(func: (mesh: AbstractMesh) => void): void;
        /**
         * Disposes a previously registered javascript function called before the rendering.
         * This function is passed the current mesh and doesn't return anything.
         */
        unregisterBeforeRender(func: (mesh: AbstractMesh) => void): void;
        /**
         * Registers for this mesh a javascript function called just after the rendering is complete.
         * This function is passed the current mesh and doesn't return anything.
         */
        registerAfterRender(func: (mesh: AbstractMesh) => void): void;
        /**
         * Disposes a previously registered javascript function called after the rendering.
         * This function is passed the current mesh and doesn't return anything.
         */
        unregisterAfterRender(func: (mesh: AbstractMesh) => void): void;
        _getInstancesRenderList(subMeshId: number): _InstancesBatch;
        _renderWithInstances(subMesh: SubMesh, fillMode: number, batch: _InstancesBatch, effect: Effect, engine: Engine): void;
        _processRendering(subMesh: SubMesh, effect: Effect, fillMode: number, batch: _InstancesBatch, hardwareInstancedRendering: boolean, onBeforeDraw: (isInstance: boolean, world: Matrix) => void): void;
        /**
         * Triggers the draw call for the mesh.
         * Usually, you don't need to call this method by your own because the mesh rendering is handled by the scene rendering manager.
         */
        render(subMesh: SubMesh, enableAlphaMode: boolean): void;
        /**
         * Returns an array populated with ParticleSystem objects whose the mesh is the emitter.
         */
        getEmittedParticleSystems(): ParticleSystem[];
        /**
         * Returns an array populated with ParticleSystem objects whose the mesh or its children are the emitter.
         */
        getHierarchyEmittedParticleSystems(): ParticleSystem[];
        _checkDelayState(): void;
        /**
         * Boolean, true is the mesh in the frustum defined by the Plane objects from the `frustumPlanes` array parameter.
         */
        isInFrustum(frustumPlanes: Plane[]): boolean;
        /**
         * Sets the mesh material by the material or multiMaterial `id` property.
         * The material `id` is a string identifying the material or the multiMaterial.
         * This method returns nothing.
         */
        setMaterialByID(id: string): void;
        /**
         * Returns as a new array populated with the mesh material and/or skeleton, if any.
         */
        getAnimatables(): IAnimatable[];
        /**
         * Modifies the mesh geometry according to the passed transformation matrix.
         * This method returns nothing but it really modifies the mesh even if it's originally not set as updatable.
         * The mesh normals are modified accordingly the same transformation.
         * tuto : http://doc.babylonjs.com/tutorials/How_Rotations_and_Translations_Work#baking-transform
         * Note that, under the hood, this method sets a new VertexBuffer each call.
         */
        bakeTransformIntoVertices(transform: Matrix): void;
        /**
         * Modifies the mesh geometry according to its own current World Matrix.
         * The mesh World Matrix is then reset.
         * This method returns nothing but really modifies the mesh even if it's originally not set as updatable.
         * tuto : tuto : http://doc.babylonjs.com/tutorials/How_Rotations_and_Translations_Work#baking-transform
         * Note that, under the hood, this method sets a new VertexBuffer each call.
         */
        bakeCurrentTransformIntoVertices(): void;
        _resetPointsArrayCache(): void;
        _generatePointsArray(): boolean;
        /**
         * Returns a new Mesh object generated from the current mesh properties.
         * This method must not get confused with createInstance().
         * The parameter `name` is a string, the name given to the new mesh.
         * The optional parameter `newParent` can be any `Node` object (default `null`).
         * The optional parameter `doNotCloneChildren` (default `false`) allows/denies the recursive cloning of the original mesh children if any.
         * The parameter `clonePhysicsImpostor` (default `true`)  allows/denies the cloning in the same time of the original mesh `body` used by the physics engine, if any.
         */
        clone(name: string, newParent?: Node, doNotCloneChildren?: boolean, clonePhysicsImpostor?: boolean): Mesh;
        /**
         * Disposes the mesh.
         * This also frees the memory allocated under the hood to all the buffers used by WebGL.
         */
        dispose(doNotRecurse?: boolean): void;
        /**
         * Modifies the mesh geometry according to a displacement map.
         * A displacement map is a colored image. Each pixel color value (actually a gradient computed from red, green, blue values) will give the displacement to apply to each mesh vertex.
         * The mesh must be set as updatable. Its internal geometry is directly modified, no new buffer are allocated.
         * This method returns nothing.
         * The parameter `url` is a string, the URL from the image file is to be downloaded.
         * The parameters `minHeight` and `maxHeight` are the lower and upper limits of the displacement.
         * The parameter `onSuccess` is an optional Javascript function to be called just after the mesh is modified. It is passed the modified mesh and must return nothing.
         */
        applyDisplacementMap(url: string, minHeight: number, maxHeight: number, onSuccess?: (mesh: Mesh) => void): void;
        /**
         * Modifies the mesh geometry according to a displacementMap buffer.
         * A displacement map is a colored image. Each pixel color value (actually a gradient computed from red, green, blue values) will give the displacement to apply to each mesh vertex.
         * The mesh must be set as updatable. Its internal geometry is directly modified, no new buffer are allocated.
         * This method returns nothing.
         * The parameter `buffer` is a `Uint8Array` buffer containing series of `Uint8` lower than 255, the red, green, blue and alpha values of each successive pixel.
         * The parameters `heightMapWidth` and `heightMapHeight` are positive integers to set the width and height of the buffer image.
         * The parameters `minHeight` and `maxHeight` are the lower and upper limits of the displacement.
         */
        applyDisplacementMapFromBuffer(buffer: Uint8Array, heightMapWidth: number, heightMapHeight: number, minHeight: number, maxHeight: number): void;
        /**
         * Modify the mesh to get a flat shading rendering.
         * This means each mesh facet will then have its own normals. Usually new vertices are added in the mesh geometry to get this result.
         * This method returns nothing.
         * Warning : the mesh is really modified even if not set originally as updatable and, under the hood, a new VertexBuffer is allocated.
         */
        convertToFlatShadedMesh(): void;
        /**
         * This method removes all the mesh indices and add new vertices (duplication) in order to unfold facets into buffers.
         * In other words, more vertices, no more indices and a single bigger VBO.
         * This method returns nothing.
         * The mesh is really modified even if not set originally as updatable. Under the hood, a new VertexBuffer is allocated.
         *
         */
        convertToUnIndexedMesh(): void;
        /**
         * Inverses facet orientations and inverts also the normals with `flipNormals` (default `false`) if true.
         * This method returns nothing.
         * Warning : the mesh is really modified even if not set originally as updatable. A new VertexBuffer is created under the hood each call.
         */
        flipFaces(flipNormals?: boolean): void;
        /**
         * Creates a new InstancedMesh object from the mesh model.
         * An instance shares the same properties and the same material than its model.
         * Only these properties of each instance can then be set individually :
         * - position
         * - rotation
         * - rotationQuaternion
         * - setPivotMatrix
         * - scaling
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_Instances
         * Warning : this method is not supported for Line mesh and LineSystem
         */
        createInstance(name: string): InstancedMesh;
        /**
         * Synchronises all the mesh instance submeshes to the current mesh submeshes, if any.
         * After this call, all the mesh instances have the same submeshes than the current mesh.
         * This method returns nothing.
         */
        synchronizeInstances(): void;
        /**
         * Simplify the mesh according to the given array of settings.
         * Function will return immediately and will simplify async. It returns nothing.
         * @param settings a collection of simplification settings.
         * @param parallelProcessing should all levels calculate parallel or one after the other.
         * @param type the type of simplification to run.
         * @param successCallback optional success callback to be called after the simplification finished processing all settings.
         */
        simplify(settings: Array<ISimplificationSettings>, parallelProcessing?: boolean, simplificationType?: SimplificationType, successCallback?: (mesh?: Mesh, submeshIndex?: number) => void): void;
        /**
         * Optimization of the mesh's indices, in case a mesh has duplicated vertices.
         * The function will only reorder the indices and will not remove unused vertices to avoid problems with submeshes.
         * This should be used together with the simplification to avoid disappearing triangles.
         * @param successCallback an optional success callback to be called after the optimization finished.
         */
        optimizeIndices(successCallback?: (mesh?: Mesh) => void): void;
        /**
         * Returns a new Mesh object what is a deep copy of the passed mesh.
         * The parameter `parsedMesh` is the mesh to be copied.
         * The parameter `rootUrl` is a string, it's the root URL to prefix the `delayLoadingFile` property with
         */
        static Parse(parsedMesh: any, scene: Scene, rootUrl: string): Mesh;
        /**
         * Creates a ribbon mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The ribbon is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.
         *
         * Please read this full tutorial to understand how to design a ribbon : http://doc.babylonjs.com/tutorials/Ribbon_Tutorial
         * The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry.
         * The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array.
         * The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array.
         * The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path.
         * It's the offset to join together the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11.
         * The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#ribbon
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateRibbon(name: string, pathArray: Vector3[][], closeArray: boolean, closePath: boolean, offset: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh): Mesh;
        /**
         * Creates a plane polygonal mesh.  By default, this is a disc.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `radius` sets the radius size (float) of the polygon (default 0.5).
         * The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateDisc(name: string, radius: number, tessellation: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a box mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `size` sets the size (float) of each box side (default 1).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateBox(name: string, size: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a sphere mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `diameter` sets the diameter size (float) of the sphere (default 1).
         * The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateSphere(name: string, segments: number, diameter: number, scene?: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a cylinder or a cone mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).
         * The parameter `diameter` sets the diameter of the top and bottom cap at once (float, default 1).
         * The parameters `diameterTop` and `diameterBottom` overwrite the parameter `diameter` and set respectively the top cap and bottom cap diameter (floats, default 1). The parameter "diameterBottom" can't be zero.
         * The parameter `tessellation` sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance.
         * The parameter `subdivisions` sets the number of rings along the cylinder height (positive integer, default 1).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateCylinder(name: string, height: number, diameterTop: number, diameterBottom: number, tessellation: number, subdivisions: any, scene: Scene, updatable?: any, sideOrientation?: number): Mesh;
        /**
         * Creates a torus mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `diameter` sets the diameter size (float) of the torus (default 1).
         * The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5).
         * The parameter `tessellation` sets the number of torus sides (postive integer, default 16).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateTorus(name: string, diameter: number, thickness: number, tessellation: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a torus knot mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `radius` sets the global radius size (float) of the torus knot (default 2).
         * The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32).
         * The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32).
         * The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateTorusKnot(name: string, radius: number, tube: number, radialSegments: number, tubularSegments: number, p: number, q: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a line mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter.
         * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function.
         * The parameter `points` is an array successive Vector3.
         * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
         * When updating an instance, remember that only point positions can change, not the number of points.
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateLines(name: string, points: Vector3[], scene: Scene, updatable?: boolean, instance?: LinesMesh): LinesMesh;
        /**
         * Creates a dashed line mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter.
         * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function.
         * The parameter `points` is an array successive Vector3.
         * The parameter `dashNb` is the intended total number of dashes (positive integer, default 200).
         * The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3).
         * The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1).
         * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
         * When updating an instance, remember that only point positions can change, not the number of points.
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateDashedLines(name: string, points: Vector3[], dashSize: number, gapSize: number, dashNb: number, scene: Scene, updatable?: boolean, instance?: LinesMesh): LinesMesh;
        /**
         * Creates an extruded shape mesh.
         * The extrusion is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.
         * Please consider using the same method from the MeshBuilder class instead.
         *
         * Please read this full tutorial to understand how to design an extruded shape : http://doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion
         * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be
         * extruded along the Z axis.
         * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
         * The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.
         * The parameter `scale` (float, default 1) is the value to scale the shape.
         * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
         * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape
         * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static ExtrudeShape(name: string, shape: Vector3[], path: Vector3[], scale: number, rotation: number, cap: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh): Mesh;
        /**
         * Creates an custom extruded shape mesh.
         * The custom extrusion is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.
         * Please consider using the same method from the MeshBuilder class instead.
         *
         * Please read this full tutorial to understand how to design a custom extruded shape : http://doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion
         * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be
         * extruded along the Z axis.
         * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
         * The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path
         * and the distance of this point from the begining of the path :
         * ```javascript
         * var rotationFunction = function(i, distance) {
         *     // do things
         *     return rotationValue; }
         * ```
         * It must returns a float value that will be the rotation in radians applied to the shape on each path point.
         * The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path
         * and the distance of this point from the begining of the path :
         * ```javascript
         * var scaleFunction = function(i, distance) {
         *     // do things
         *    return scaleValue;}
         * ```
         * It must returns a float value that will be the scale value applied to the shape on each path point.
         * The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray`.
         * The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray`.
         * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
         * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape
         * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static ExtrudeShapeCustom(name: string, shape: Vector3[], path: Vector3[], scaleFunction: Function, rotationFunction: Function, ribbonCloseArray: boolean, ribbonClosePath: boolean, cap: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh): Mesh;
        /**
         * Creates lathe mesh.
         * The lathe is a shape with a symetry axis : a 2D model shape is rotated around this axis to design the lathe.
         * Please consider using the same method from the MeshBuilder class instead.
         *
         * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be
         * rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero.
         * The parameter `radius` (positive float, default 1) is the radius value of the lathe.
         * The parameter `tessellation` (positive integer, default 64) is the side number of the lathe.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateLathe(name: string, shape: Vector3[], radius: number, tessellation: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a plane mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `size` sets the size (float) of both sides of the plane at once (default 1).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreatePlane(name: string, size: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a ground mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameters `width` and `height` (floats, default 1) set the width and height sizes of the ground.
         * The parameter `subdivisions` (positive integer) sets the number of subdivisions per side.
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateGround(name: string, width: number, height: number, subdivisions: number, scene: Scene, updatable?: boolean): Mesh;
        /**
         * Creates a tiled ground mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameters `xmin` and `xmax` (floats, default -1 and 1) set the ground minimum and maximum X coordinates.
         * The parameters `zmin` and `zmax` (floats, default -1 and 1) set the ground minimum and maximum Z coordinates.
         * The parameter `subdivisions` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the
         * numbers of subdivisions on the ground width and height. Each subdivision is called a tile.
         * The parameter `precision` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the
         * numbers of subdivisions on the ground width and height of each tile.
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateTiledGround(name: string, xmin: number, zmin: number, xmax: number, zmax: number, subdivisions: {
            w: number;
            h: number;
        }, precision: {
            w: number;
            h: number;
        }, scene: Scene, updatable?: boolean): Mesh;
        /**
         * Creates a ground mesh from a height map.
         * tuto : http://doc.babylonjs.com/tutorials/14._Height_Map
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `url` sets the URL of the height map image resource.
         * The parameters `width` and `height` (positive floats, default 10) set the ground width and height sizes.
         * The parameter `subdivisions` (positive integer, default 1) sets the number of subdivision per side.
         * The parameter `minHeight` (float, default 0) is the minimum altitude on the ground.
         * The parameter `maxHeight` (float, default 1) is the maximum altitude on the ground.
         * The parameter `onReady` is a javascript callback function that will be called  once the mesh is just built (the height map download can last some time).
         * This function is passed the newly built mesh :
         * ```javascript
         * function(mesh) { // do things
         *     return; }
         * ```
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateGroundFromHeightMap(name: string, url: string, width: number, height: number, subdivisions: number, minHeight: number, maxHeight: number, scene: Scene, updatable?: boolean, onReady?: (mesh: GroundMesh) => void): GroundMesh;
        /**
         * Creates a tube mesh.
         * The tube is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.
         *
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `path` is a required array of successive Vector3. It is the curve used as the axis of the tube.
         * The parameter `radius` (positive float, default 1) sets the tube radius size.
         * The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface.
         * The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overwrittes the parameter `radius`.
         * This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path.
         * It must return a radius value (positive float) :
         * ```javascript
         * var radiusFunction = function(i, distance) {
         *     // do things
         *     return radius; }
         * ```
         * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
         * The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#tube
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateTube(name: string, path: Vector3[], radius: number, tessellation: number, radiusFunction: {
            (i: number, distance: number): number;
        }, cap: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh): Mesh;
        /**
         * Creates a polyhedron mesh.
         *
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial
         *  to choose the wanted type.
         * The parameter `size` (positive float, default 1) sets the polygon size.
         * You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value).
         * You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overwrittes the parameter `type`.
         * A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
         * You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`).
         * To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : http://doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors
         * The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreatePolyhedron(name: string, options: {
            type?: number;
            size?: number;
            sizeX?: number;
            sizeY?: number;
            sizeZ?: number;
            custom?: any;
            faceUV?: Vector4[];
            faceColors?: Color4[];
            updatable?: boolean;
            sideOrientation?: number;
        }, scene: Scene): Mesh;
        /**
         * Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `radius` sets the radius size (float) of the icosphere (default 1).
         * You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value than `radius`).
         * The parameter `subdivisions` sets the number of subdivisions (postive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size.
         * The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateIcoSphere(name: string, options: {
            radius?: number;
            flat?: boolean;
            subdivisions?: number;
            sideOrientation?: number;
            updatable?: boolean;
        }, scene: Scene): Mesh;
        /**
         * Creates a decal mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal.
         * The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates.
         * The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates.
         * The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling.
         * The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal.
         */
        static CreateDecal(name: string, sourceMesh: AbstractMesh, position: Vector3, normal: Vector3, size: Vector3, angle: number): Mesh;
        /**
         * @returns original positions used for CPU skinning.  Useful for integrating Morphing with skeletons in same mesh.
         */
        setPositionsForCPUSkinning(): Float32Array;
        /**
         * @returns original normals used for CPU skinning.  Useful for integrating Morphing with skeletons in same mesh.
         */
        setNormalsForCPUSkinning(): Float32Array;
        /**
         * Update the vertex buffers by applying transformation from the bones
         * @param {skeleton} skeleton to apply
         */
        applySkeleton(skeleton: Skeleton): Mesh;
        /**
         * Returns an object `{min: Vector3, max: Vector3}`
         * This min and max Vector3 are the minimum and maximum vectors of each mesh bounding box from the passed array, in the World system
         */
        static MinMax(meshes: AbstractMesh[]): {
            min: Vector3;
            max: Vector3;
        };
        /**
         * Returns a `Vector3`, the center of the `{min: Vector3, max: Vector3}` or the center of MinMax vector3 computed from a mesh array.
         */
        static Center(meshesOrMinMaxVector: any): Vector3;
        /**
         * Merge the array of meshes into a single mesh for performance reasons.
         * @param {Array<Mesh>} meshes - The vertices source.  They should all be of the same material.  Entries can empty
         * @param {boolean} disposeSource - When true (default), dispose of the vertices from the source meshes
         * @param {boolean} allow32BitsIndices - When the sum of the vertices > 64k, this must be set to true.
         * @param {Mesh} meshSubclass - When set, vertices inserted into this Mesh.  Meshes can then be merged into a Mesh sub-class.
         */
        static MergeMeshes(meshes: Array<Mesh>, disposeSource?: boolean, allow32BitsIndices?: boolean, meshSubclass?: Mesh): Mesh;
    }
}

declare module BABYLON {
    interface IGetSetVerticesData {
        isVerticesDataPresent(kind: string): boolean;
        getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Int32Array | Float32Array;
        getIndices(copyWhenShared?: boolean): number[] | Int32Array;
        setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean): void;
        updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean, makeItUnique?: boolean): void;
        setIndices(indices: number[] | Int32Array): void;
    }
    class VertexData {
        positions: number[] | Float32Array;
        normals: number[] | Float32Array;
        uvs: number[] | Float32Array;
        uvs2: number[] | Float32Array;
        uvs3: number[] | Float32Array;
        uvs4: number[] | Float32Array;
        uvs5: number[] | Float32Array;
        uvs6: number[] | Float32Array;
        colors: number[] | Float32Array;
        matricesIndices: number[] | Float32Array;
        matricesWeights: number[] | Float32Array;
        matricesIndicesExtra: number[] | Float32Array;
        matricesWeightsExtra: number[] | Float32Array;
        indices: number[] | Int32Array;
        set(data: number[] | Float32Array, kind: string): void;
        applyToMesh(mesh: Mesh, updatable?: boolean): void;
        applyToGeometry(geometry: Geometry, updatable?: boolean): void;
        updateMesh(mesh: Mesh, updateExtends?: boolean, makeItUnique?: boolean): void;
        updateGeometry(geometry: Geometry, updateExtends?: boolean, makeItUnique?: boolean): void;
        private _applyTo(meshOrGeometry, updatable?);
        private _update(meshOrGeometry, updateExtends?, makeItUnique?);
        transform(matrix: Matrix): void;
        merge(other: VertexData): void;
        private _mergeElement(source, other);
        serialize(): any;
        static ExtractFromMesh(mesh: Mesh, copyWhenShared?: boolean): VertexData;
        static ExtractFromGeometry(geometry: Geometry, copyWhenShared?: boolean): VertexData;
        private static _ExtractFrom(meshOrGeometry, copyWhenShared?);
        static CreateRibbon(options: {
            pathArray: Vector3[][];
            closeArray?: boolean;
            closePath?: boolean;
            offset?: number;
            sideOrientation?: number;
        }): VertexData;
        static CreateBox(options: {
            size?: number;
            width?: number;
            height?: number;
            depth?: number;
            faceUV?: Vector4[];
            faceColors?: Color4[];
            sideOrientation?: number;
        }): VertexData;
        static CreateSphere(options: {
            segments?: number;
            diameter?: number;
            diameterX?: number;
            diameterY?: number;
            diameterZ?: number;
            arc?: number;
            slice?: number;
            sideOrientation?: number;
        }): VertexData;
        static CreateCylinder(options: {
            height?: number;
            diameterTop?: number;
            diameterBottom?: number;
            diameter?: number;
            tessellation?: number;
            subdivisions?: number;
            arc?: number;
            faceColors?: Color4[];
            faceUV?: Vector4[];
            hasRings?: boolean;
            enclose?: boolean;
            sideOrientation?: number;
        }): VertexData;
        static CreateTorus(options: {
            diameter?: number;
            thickness?: number;
            tessellation?: number;
            sideOrientation?: number;
        }): VertexData;
        static CreateLineSystem(options: {
            lines: Vector3[][];
        }): VertexData;
        static CreateDashedLines(options: {
            points: Vector3[];
            dashSize?: number;
            gapSize?: number;
            dashNb?: number;
        }): VertexData;
        static CreateGround(options: {
            width?: number;
            height?: number;
            subdivisions?: number;
        }): VertexData;
        static CreateTiledGround(options: {
            xmin: number;
            zmin: number;
            xmax: number;
            zmax: number;
            subdivisions?: {
                w: number;
                h: number;
            };
            precision?: {
                w: number;
                h: number;
            };
        }): VertexData;
        static CreateGroundFromHeightMap(options: {
            width: number;
            height: number;
            subdivisions: number;
            minHeight: number;
            maxHeight: number;
            buffer: Uint8Array;
            bufferWidth: number;
            bufferHeight: number;
        }): VertexData;
        static CreatePlane(options: {
            size?: number;
            width?: number;
            height?: number;
            sideOrientation?: number;
        }): VertexData;
        static CreateDisc(options: {
            radius?: number;
            tessellation?: number;
            arc?: number;
            sideOrientation?: number;
        }): VertexData;
        static CreateIcoSphere(options: {
            radius?: number;
            radiusX?: number;
            radiusY?: number;
            radiusZ?: number;
            flat?: boolean;
            subdivisions?: number;
            sideOrientation?: number;
        }): VertexData;
        static CreatePolyhedron(options: {
            type?: number;
            size?: number;
            sizeX?: number;
            sizeY?: number;
            sizeZ?: number;
            custom?: any;
            faceUV?: Vector4[];
            faceColors?: Color4[];
            flat?: boolean;
            sideOrientation?: number;
        }): VertexData;
        static CreateTorusKnot(options: {
            radius?: number;
            tube?: number;
            radialSegments?: number;
            tubularSegments?: number;
            p?: number;
            q?: number;
            sideOrientation?: number;
        }): VertexData;
        /**
         * @param {any} - positions (number[] or Float32Array)
         * @param {any} - indices   (number[] or Uint16Array)
         * @param {any} - normals   (number[] or Float32Array)
         */
        static ComputeNormals(positions: any, indices: any, normals: any): void;
        private static _ComputeSides(sideOrientation, positions, indices, normals, uvs);
        static ImportVertexData(parsedVertexData: any, geometry: Geometry): void;
    }
}

declare module BABYLON {
    class MeshBuilder {
        /**
         * Creates a box mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#box
         * The parameter `size` sets the size (float) of each box side (default 1).
         * You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value than `size`).
         * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements).
         * Please read this tutorial : http://doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateBox(name: string, options: {
            size?: number;
            width?: number;
            height?: number;
            depth?: number;
            faceUV?: Vector4[];
            faceColors?: Color4[];
            sideOrientation?: number;
            updatable?: boolean;
        }, scene: Scene): Mesh;
        /**
         * Creates a sphere mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#sphere
         * The parameter `diameter` sets the diameter size (float) of the sphere (default 1).
         * You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value than `diameter`).
         * The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32).
         * You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio
         * You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateSphere(name: string, options: {
            segments?: number;
            diameter?: number;
            diameterX?: number;
            diameterY?: number;
            diameterZ?: number;
            arc?: number;
            slice?: number;
            sideOrientation?: number;
            updatable?: boolean;
        }, scene: any): Mesh;
        /**
         * Creates a plane polygonal mesh.  By default, this is a disc.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#disc
         * The parameter `radius` sets the radius size (float) of the polygon (default 0.5).
         * The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc.
         * You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateDisc(name: string, options: {
            radius?: number;
            tessellation?: number;
            arc?: number;
            updatable?: boolean;
            sideOrientation?: number;
        }, scene: Scene): Mesh;
        /**
         * Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#icosphere
         * The parameter `radius` sets the radius size (float) of the icosphere (default 1).
         * You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value than `radius`).
         * The parameter `subdivisions` sets the number of subdivisions (postive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size.
         * The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateIcoSphere(name: string, options: {
            radius?: number;
            radiusX?: number;
            radiusY?: number;
            radiusZ?: number;
            flat?: boolean;
            subdivisions?: number;
            sideOrientation?: number;
            updatable?: boolean;
        }, scene: Scene): Mesh;
        /**
         * Creates a ribbon mesh.
         * The ribbon is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.
         *
         * Please read this full tutorial to understand how to design a ribbon : http://doc.babylonjs.com/tutorials/Ribbon_Tutorial
         * The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry.
         * The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array.
         * The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array.
         * The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path.
         * It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11.
         * The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#ribbon
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateRibbon(name: string, options: {
            pathArray: Vector3[][];
            closeArray?: boolean;
            closePath?: boolean;
            offset?: number;
            updatable?: boolean;
            sideOrientation?: number;
            instance?: Mesh;
        }, scene?: Scene): Mesh;
        /**
         * Creates a cylinder or a cone mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#cylinder-or-cone
         * The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).
         * The parameter `diameter` sets the diameter of the top and bottom cap at once (float, default 1).
         * The parameters `diameterTop` and `diameterBottom` overwrite the parameter `diameter` and set respectively the top cap and bottom cap diameter (floats, default 1). The parameter "diameterBottom" can't be zero.
         * The parameter `tessellation` sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance.
         * The parameter `subdivisions` sets the number of rings along the cylinder height (positive integer, default 1).
         * The parameter `hasRings` (boolean, default false) makes the subdivisions independent from each other, so they become different faces.
         * The parameter `enclose`  (boolean, default false) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis.
         * The parameter `arc` (float, default 1) is the ratio (max 1) to apply to the circumference to slice the cylinder.
         * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of n Color3 elements) and `faceUV` (an array of n Vector4 elements).
         * The value of n is the number of cylinder faces. If the cylinder has only 1 subdivisions, n equals : top face + cylinder surface + bottom face = 3
         * Now, if the cylinder has 5 independent subdivisions (hasRings = true), n equals : top face + 5 stripe surfaces + bottom face = 2 + 5 = 7
         * Finally, if the cylinder has 5 independent subdivisions and is enclose, n equals : top face + 5 x (stripe surface + 2 closing faces) + bottom face = 2 + 5 * 3 = 17
         * Each array (color or UVs) is always ordered the same way : the first element is the bottom cap, the last element is the top cap. The other elements are each a ring surface.
         * If `enclose` is false, a ring surface is one element.
         * If `enclose` is true, a ring surface is 3 successive elements in the array : the tubular surface, then the two closing faces.
         * Example how to set colors and textures on a sliced cylinder : http://www.html5gamedevs.com/topic/17945-creating-a-closed-slice-of-a-cylinder/#comment-106379
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateCylinder(name: string, options: {
            height?: number;
            diameterTop?: number;
            diameterBottom?: number;
            diameter?: number;
            tessellation?: number;
            subdivisions?: number;
            arc?: number;
            faceColors?: Color4[];
            faceUV?: Vector4[];
            updatable?: boolean;
            hasRings?: boolean;
            enclose?: boolean;
            sideOrientation?: number;
        }, scene: any): Mesh;
        /**
         * Creates a torus mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#torus
         * The parameter `diameter` sets the diameter size (float) of the torus (default 1).
         * The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5).
         * The parameter `tessellation` sets the number of torus sides (postive integer, default 16).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateTorus(name: string, options: {
            diameter?: number;
            thickness?: number;
            tessellation?: number;
            updatable?: boolean;
            sideOrientation?: number;
        }, scene: any): Mesh;
        /**
         * Creates a torus knot mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#torus-knot
         * The parameter `radius` sets the global radius size (float) of the torus knot (default 2).
         * The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32).
         * The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32).
         * The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateTorusKnot(name: string, options: {
            radius?: number;
            tube?: number;
            radialSegments?: number;
            tubularSegments?: number;
            p?: number;
            q?: number;
            updatable?: boolean;
            sideOrientation?: number;
        }, scene: any): Mesh;
        /**
         * Creates a line system mesh.
         * A line system is a pool of many lines gathered in a single mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#linesystem
         * A line system mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of lines as an input parameter.
         * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineSystem to this static function.
         * The parameter `lines` is an array of lines, each line being an array of successive Vector3.
         * The optional parameter `instance` is an instance of an existing LineSystem object to be updated with the passed `lines` parameter. The way to update it is the same than for
         * updating a simple Line mesh, you just need to update every line in the `lines` array : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
         * When updating an instance, remember that only line point positions can change, not the number of points, neither the number of lines.
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateLineSystem(name: string, options: {
            lines: Vector3[][];
            updatable: boolean;
            instance?: LinesMesh;
        }, scene: Scene): LinesMesh;
        /**
         * Creates a line mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#lines
         * A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter.
         * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function.
         * The parameter `points` is an array successive Vector3.
         * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
         * When updating an instance, remember that only point positions can change, not the number of points.
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateLines(name: string, options: {
            points: Vector3[];
            updatable?: boolean;
            instance?: LinesMesh;
        }, scene: Scene): LinesMesh;
        /**
         * Creates a dashed line mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#dashed-lines
         * A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter.
         * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function.
         * The parameter `points` is an array successive Vector3.
         * The parameter `dashNb` is the intended total number of dashes (positive integer, default 200).
         * The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3).
         * The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1).
         * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
         * When updating an instance, remember that only point positions can change, not the number of points.
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateDashedLines(name: string, options: {
            points: Vector3[];
            dashSize?: number;
            gapSize?: number;
            dashNb?: number;
            updatable?: boolean;
            instance?: LinesMesh;
        }, scene: Scene): LinesMesh;
        /**
         * Creates an extruded shape mesh.
         * The extrusion is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#extruded-shapes
         *
         * Please read this full tutorial to understand how to design an extruded shape : http://doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion
         * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be
         * extruded along the Z axis.
         * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
         * The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.
         * The parameter `scale` (float, default 1) is the value to scale the shape.
         * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
         * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape
         * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static ExtrudeShape(name: string, options: {
            shape: Vector3[];
            path: Vector3[];
            scale?: number;
            rotation?: number;
            cap?: number;
            updatable?: boolean;
            sideOrientation?: number;
            instance?: Mesh;
        }, scene: Scene): Mesh;
        /**
         * Creates an custom extruded shape mesh.
         * The custom extrusion is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.
         * tuto :http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#custom-extruded-shapes
         *
         * Please read this full tutorial to understand how to design a custom extruded shape : http://doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion
         * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be
         * extruded along the Z axis.
         * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
         * The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path
         * and the distance of this point from the begining of the path :
         * ```javascript
         * var rotationFunction = function(i, distance) {
         *     // do things
         *     return rotationValue; }
         * ```
         * It must returns a float value that will be the rotation in radians applied to the shape on each path point.
         * The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path
         * and the distance of this point from the begining of the path :
         * ```javascript
         * var scaleFunction = function(i, distance) {
         *     // do things
         *     return scaleValue;}
         * ```
         * It must returns a float value that will be the scale value applied to the shape on each path point.
         * The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray`.
         * The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray`.
         * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
         * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape
         * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static ExtrudeShapeCustom(name: string, options: {
            shape: Vector3[];
            path: Vector3[];
            scaleFunction?: any;
            rotationFunction?: any;
            ribbonCloseArray?: boolean;
            ribbonClosePath?: boolean;
            cap?: number;
            updatable?: boolean;
            sideOrientation?: number;
            instance?: Mesh;
        }, scene: Scene): Mesh;
        /**
         * Creates lathe mesh.
         * The lathe is a shape with a symetry axis : a 2D model shape is rotated around this axis to design the lathe.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#lathe
         *
         * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be
         * rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero.
         * The parameter `radius` (positive float, default 1) is the radius value of the lathe.
         * The parameter `tessellation` (positive integer, default 64) is the side number of the lathe.
         * The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape.
         * The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc".
         * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateLathe(name: string, options: {
            shape: Vector3[];
            radius?: number;
            tessellation?: number;
            arc?: number;
            closed?: boolean;
            updatable?: boolean;
            sideOrientation?: number;
            cap?: number;
        }, scene: Scene): Mesh;
        /**
         * Creates a plane mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#plane
         * The parameter `size` sets the size (float) of both sides of the plane at once (default 1).
         * You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value than `size`).
         * The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreatePlane(name: string, options: {
            size?: number;
            width?: number;
            height?: number;
            sideOrientation?: number;
            updatable?: boolean;
            sourcePlane?: Plane;
        }, scene: Scene): Mesh;
        /**
         * Creates a ground mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#plane
         * The parameters `width` and `height` (floats, default 1) set the width and height sizes of the ground.
         * The parameter `subdivisions` (positive integer) sets the number of subdivisions per side.
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateGround(name: string, options: {
            width?: number;
            height?: number;
            subdivisions?: number;
            updatable?: boolean;
        }, scene: any): Mesh;
        /**
         * Creates a tiled ground mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#tiled-ground
         * The parameters `xmin` and `xmax` (floats, default -1 and 1) set the ground minimum and maximum X coordinates.
         * The parameters `zmin` and `zmax` (floats, default -1 and 1) set the ground minimum and maximum Z coordinates.
         * The parameter `subdivisions` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the
         * numbers of subdivisions on the ground width and height. Each subdivision is called a tile.
         * The parameter `precision` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the
         * numbers of subdivisions on the ground width and height of each tile.
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateTiledGround(name: string, options: {
            xmin: number;
            zmin: number;
            xmax: number;
            zmax: number;
            subdivisions?: {
                w: number;
                h: number;
            };
            precision?: {
                w: number;
                h: number;
            };
            updatable?: boolean;
        }, scene: Scene): Mesh;
        /**
         * Creates a ground mesh from a height map.
         * tuto : http://doc.babylonjs.com/tutorials/14._Height_Map
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#ground-from-a-height-map
         * The parameter `url` sets the URL of the height map image resource.
         * The parameters `width` and `height` (positive floats, default 10) set the ground width and height sizes.
         * The parameter `subdivisions` (positive integer, default 1) sets the number of subdivision per side.
         * The parameter `minHeight` (float, default 0) is the minimum altitude on the ground.
         * The parameter `maxHeight` (float, default 1) is the maximum altitude on the ground.
         * The parameter `onReady` is a javascript callback function that will be called  once the mesh is just built (the height map download can last some time).
         * This function is passed the newly built mesh :
         * ```javascript
         * function(mesh) { // do things
         *     return; }
         * ```
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateGroundFromHeightMap(name: string, url: string, options: {
            width?: number;
            height?: number;
            subdivisions?: number;
            minHeight?: number;
            maxHeight?: number;
            updatable?: boolean;
            onReady?: (mesh: GroundMesh) => void;
        }, scene: Scene): GroundMesh;
        /**
         * Creates a tube mesh.
         * The tube is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.
         *
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#tube
         * The parameter `path` is a required array of successive Vector3. It is the curve used as the axis of the tube.
         * The parameter `radius` (positive float, default 1) sets the tube radius size.
         * The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface.
         * The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overwrittes the parameter `radius`.
         * This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path.
         * It must return a radius value (positive float) :
         * ```javascript
         * var radiusFunction = function(i, distance) {
         *     // do things
         *     return radius; }
         * ```
         * The parameter `arc` (positive float, maximum 1, default 1) is the ratio to apply to the tube circumference : 2 x PI x arc.
         * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
         * The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#tube
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateTube(name: string, options: {
            path: Vector3[];
            radius?: number;
            tessellation?: number;
            radiusFunction?: {
                (i: number, distance: number): number;
            };
            cap?: number;
            arc?: number;
            updatable?: boolean;
            sideOrientation?: number;
            instance?: Mesh;
        }, scene: Scene): Mesh;
        /**
         * Creates a polyhedron mesh.
         *
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#polyhedron
         * The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial
         *  to choose the wanted type.
         * The parameter `size` (positive float, default 1) sets the polygon size.
         * You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value).
         * You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overwrittes the parameter `type`.
         * A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
         * You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`).
         * To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : http://doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors
         * The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreatePolyhedron(name: string, options: {
            type?: number;
            size?: number;
            sizeX?: number;
            sizeY?: number;
            sizeZ?: number;
            custom?: any;
            faceUV?: Vector4[];
            faceColors?: Color4[];
            flat?: boolean;
            updatable?: boolean;
            sideOrientation?: number;
        }, scene: Scene): Mesh;
        /**
         * Creates a decal mesh.
         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#decals
         * A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal.
         * The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates.
         * The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates.
         * The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling.
         * The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal.
         */
        static CreateDecal(name: string, sourceMesh: AbstractMesh, options: {
            position?: Vector3;
            normal?: Vector3;
            size?: Vector3;
            angle?: number;
        }): Mesh;
        private static _ExtrudeShapeGeneric(name, shape, curve, scale, rotation, scaleFunction, rotateFunction, rbCA, rbCP, cap, custom, scene, updtbl, side, instance);
    }
}

declare module BABYLON.Internals {
    class MeshLODLevel {
        distance: number;
        mesh: Mesh;
        constructor(distance: number, mesh: Mesh);
    }
}

declare module BABYLON {
    /**
     * A simplifier interface for future simplification implementations.
     */
    interface ISimplifier {
        /**
         * Simplification of a given mesh according to the given settings.
         * Since this requires computation, it is assumed that the function runs async.
         * @param settings The settings of the simplification, including quality and distance
         * @param successCallback A callback that will be called after the mesh was simplified.
         * @param errorCallback in case of an error, this callback will be called. optional.
         */
        simplify(settings: ISimplificationSettings, successCallback: (simplifiedMeshes: Mesh) => void, errorCallback?: () => void): void;
    }
    /**
     * Expected simplification settings.
     * Quality should be between 0 and 1 (1 being 100%, 0 being 0%);
     */
    interface ISimplificationSettings {
        quality: number;
        distance: number;
        optimizeMesh?: boolean;
    }
    class SimplificationSettings implements ISimplificationSettings {
        quality: number;
        distance: number;
        optimizeMesh: boolean;
        constructor(quality: number, distance: number, optimizeMesh?: boolean);
    }
    interface ISimplificationTask {
        settings: Array<ISimplificationSettings>;
        simplificationType: SimplificationType;
        mesh: Mesh;
        successCallback?: () => void;
        parallelProcessing: boolean;
    }
    class SimplificationQueue {
        private _simplificationArray;
        running: any;
        constructor();
        addTask(task: ISimplificationTask): void;
        executeNext(): void;
        runSimplification(task: ISimplificationTask): void;
        private getSimplifier(task);
    }
    /**
     * The implemented types of simplification.
     * At the moment only Quadratic Error Decimation is implemented.
     */
    enum SimplificationType {
        QUADRATIC = 0,
    }
    class DecimationTriangle {
        vertices: Array<DecimationVertex>;
        normal: Vector3;
        error: Array<number>;
        deleted: boolean;
        isDirty: boolean;
        borderFactor: number;
        deletePending: boolean;
        originalOffset: number;
        constructor(vertices: Array<DecimationVertex>);
    }
    class DecimationVertex {
        position: Vector3;
        id: any;
        q: QuadraticMatrix;
        isBorder: boolean;
        triangleStart: number;
        triangleCount: number;
        originalOffsets: Array<number>;
        constructor(position: Vector3, id: any);
        updatePosition(newPosition: Vector3): void;
    }
    class QuadraticMatrix {
        data: Array<number>;
        constructor(data?: Array<number>);
        det(a11: any, a12: any, a13: any, a21: any, a22: any, a23: any, a31: any, a32: any, a33: any): number;
        addInPlace(matrix: QuadraticMatrix): void;
        addArrayInPlace(data: Array<number>): void;
        add(matrix: QuadraticMatrix): QuadraticMatrix;
        static FromData(a: number, b: number, c: number, d: number): QuadraticMatrix;
        static DataFromNumbers(a: number, b: number, c: number, d: number): number[];
    }
    class Reference {
        vertexId: number;
        triangleId: number;
        constructor(vertexId: number, triangleId: number);
    }
    /**
     * An implementation of the Quadratic Error simplification algorithm.
     * Original paper : http://www1.cs.columbia.edu/~cs4162/html05s/garland97.pdf
     * Ported mostly from QSlim and http://voxels.blogspot.de/2014/05/quadric-mesh-simplification-with-source.html to babylon JS
     * @author RaananW
     */
    class QuadraticErrorSimplification implements ISimplifier {
        private _mesh;
        private triangles;
        private vertices;
        private references;
        private initialized;
        private _reconstructedMesh;
        syncIterations: number;
        aggressiveness: number;
        decimationIterations: number;
        boundingBoxEpsilon: number;
        constructor(_mesh: Mesh);
        simplify(settings: ISimplificationSettings, successCallback: (simplifiedMesh: Mesh) => void): void;
        private isTriangleOnBoundingBox(triangle);
        private runDecimation(settings, submeshIndex, successCallback);
        private initWithMesh(submeshIndex, callback, optimizeMesh?);
        private init(callback);
        private reconstructMesh(submeshIndex);
        private initDecimatedMesh();
        private isFlipped(vertex1, vertex2, point, deletedArray, borderFactor, delTr);
        private updateTriangles(origVertex, vertex, deletedArray, deletedTriangles);
        private identifyBorder();
        private updateMesh(identifyBorders?);
        private vertexError(q, point);
        private calculateError(vertex1, vertex2, pointResult?, normalResult?, uvResult?, colorResult?);
    }
}

declare module BABYLON {
    class Polygon {
        static Rectangle(xmin: number, ymin: number, xmax: number, ymax: number): Vector2[];
        static Circle(radius: number, cx?: number, cy?: number, numberOfSides?: number): Vector2[];
        static Parse(input: string): Vector2[];
        static StartingAt(x: number, y: number): Path2;
    }
    class PolygonMeshBuilder {
        private _points;
        private _outlinepoints;
        private _holes;
        private _name;
        private _scene;
        private _epoints;
        private _eholes;
        private _addToepoint(points);
        constructor(name: string, contours: Path2, scene: Scene);
        constructor(name: string, contours: Vector2[], scene: Scene);
        addHole(hole: Vector2[]): PolygonMeshBuilder;
        build(updatable?: boolean, depth?: number): Mesh;
        private addSide(positions, normals, uvs, indices, bounds, points, depth, flip);
    }
}

declare module BABYLON {
    class SubMesh {
        materialIndex: number;
        verticesStart: number;
        verticesCount: number;
        indexStart: any;
        indexCount: number;
        linesIndexCount: number;
        private _mesh;
        private _renderingMesh;
        private _boundingInfo;
        private _linesIndexBuffer;
        _lastColliderWorldVertices: Vector3[];
        _trianglePlanes: Plane[];
        _lastColliderTransformMatrix: Matrix;
        _renderId: number;
        _alphaIndex: number;
        _distanceToCamera: number;
        _id: number;
        constructor(materialIndex: number, verticesStart: number, verticesCount: number, indexStart: any, indexCount: number, mesh: AbstractMesh, renderingMesh?: Mesh, createBoundingBox?: boolean);
        IsGlobal: boolean;
        getBoundingInfo(): BoundingInfo;
        getMesh(): AbstractMesh;
        getRenderingMesh(): Mesh;
        getMaterial(): Material;
        refreshBoundingInfo(): void;
        _checkCollision(collider: Collider): boolean;
        updateBoundingInfo(world: Matrix): void;
        isInFrustum(frustumPlanes: Plane[]): boolean;
        render(enableAlphaMode: boolean): void;
        getLinesIndexBuffer(indices: number[] | Int32Array, engine: Engine): WebGLBuffer;
        canIntersects(ray: Ray): boolean;
        intersects(ray: Ray, positions: Vector3[], indices: number[] | Int32Array, fastCheck?: boolean): IntersectionInfo;
        clone(newMesh: AbstractMesh, newRenderingMesh?: Mesh): SubMesh;
        dispose(): void;
        static CreateFromIndices(materialIndex: number, startIndex: number, indexCount: number, mesh: AbstractMesh, renderingMesh?: Mesh): SubMesh;
    }
}

declare module BABYLON {
    class VertexBuffer {
        private _buffer;
        private _kind;
        private _offset;
        private _size;
        private _stride;
        private _ownsBuffer;
        constructor(engine: any, data: number[] | Float32Array | Buffer, kind: string, updatable: boolean, postponeInternalCreation?: boolean, stride?: number, instanced?: boolean, offset?: number, size?: number);
        getKind(): string;
        isUpdatable(): boolean;
        getData(): number[] | Float32Array;
        getBuffer(): WebGLBuffer;
        getStrideSize(): number;
        getOffset(): number;
        getSize(): number;
        getIsInstanced(): boolean;
        create(data?: number[] | Float32Array): void;
        update(data: number[] | Float32Array): void;
        updateDirectly(data: Float32Array, offset: number): void;
        dispose(): void;
        private static _PositionKind;
        private static _NormalKind;
        private static _UVKind;
        private static _UV2Kind;
        private static _UV3Kind;
        private static _UV4Kind;
        private static _UV5Kind;
        private static _UV6Kind;
        private static _ColorKind;
        private static _MatricesIndicesKind;
        private static _MatricesWeightsKind;
        private static _MatricesIndicesExtraKind;
        private static _MatricesWeightsExtraKind;
        static PositionKind: string;
        static NormalKind: string;
        static UVKind: string;
        static UV2Kind: string;
        static UV3Kind: string;
        static UV4Kind: string;
        static UV5Kind: string;
        static UV6Kind: string;
        static ColorKind: string;
        static MatricesIndicesKind: string;
        static MatricesWeightsKind: string;
        static MatricesIndicesExtraKind: string;
        static MatricesWeightsExtraKind: string;
    }
}

declare module BABYLON {
    interface PhysicsImpostorJoint {
        mainImpostor: PhysicsImpostor;
        connectedImpostor: PhysicsImpostor;
        joint: PhysicsJoint;
    }
    class PhysicsEngine {
        private _physicsPlugin;
        gravity: Vector3;
        constructor(gravity?: Vector3, _physicsPlugin?: IPhysicsEnginePlugin);
        setGravity(gravity: Vector3): void;
        /**
         * Set the time step of the physics engine.
         * default is 1/60.
         * To slow it down, enter 1/600 for example.
         * To speed it up, 1/30
         * @param {number} newTimeStep the new timestep to apply to this world.
         */
        setTimeStep(newTimeStep?: number): void;
        dispose(): void;
        getPhysicsPluginName(): string;
        /**
         * @Deprecated
         *
         */
        static NoImpostor: number;
        static SphereImpostor: number;
        static BoxImpostor: number;
        static PlaneImpostor: number;
        static MeshImpostor: number;
        static CylinderImpostor: number;
        static HeightmapImpostor: number;
        static CapsuleImpostor: number;
        static ConeImpostor: number;
        static ConvexHullImpostor: number;
        static Epsilon: number;
        private _impostors;
        private _joints;
        /**
         * Adding a new impostor for the impostor tracking.
         * This will be done by the impostor itself.
         * @param {PhysicsImpostor} impostor the impostor to add
         */
        addImpostor(impostor: PhysicsImpostor): void;
        /**
         * Remove an impostor from the engine.
         * This impostor and its mesh will not longer be updated by the physics engine.
         * @param {PhysicsImpostor} impostor the impostor to remove
         */
        removeImpostor(impostor: PhysicsImpostor): void;
        /**
         * Add a joint to the physics engine
         * @param {PhysicsImpostor} mainImpostor the main impostor to which the joint is added.
         * @param {PhysicsImpostor} connectedImpostor the impostor that is connected to the main impostor using this joint
         * @param {PhysicsJoint} the joint that will connect both impostors.
         */
        addJoint(mainImpostor: PhysicsImpostor, connectedImpostor: PhysicsImpostor, joint: PhysicsJoint): void;
        removeJoint(mainImpostor: PhysicsImpostor, connectedImpostor: PhysicsImpostor, joint: PhysicsJoint): void;
        /**
         * Called by the scene. no need to call it.
         */
        _step(delta: number): void;
        getPhysicsPlugin(): IPhysicsEnginePlugin;
        getImpostorForPhysicsObject(object: IPhysicsEnabledObject): PhysicsImpostor;
        getImpostorWithPhysicsBody(body: any): PhysicsImpostor;
    }
    interface IPhysicsEnginePlugin {
        world: any;
        name: string;
        setGravity(gravity: Vector3): any;
        setTimeStep(timeStep: number): any;
        executeStep(delta: number, impostors: Array<PhysicsImpostor>): void;
        applyImpulse(impostor: PhysicsImpostor, force: Vector3, contactPoint: Vector3): any;
        applyForce(impostor: PhysicsImpostor, force: Vector3, contactPoint: Vector3): any;
        generatePhysicsBody(impostor: PhysicsImpostor): any;
        removePhysicsBody(impostor: PhysicsImpostor): any;
        generateJoint(joint: PhysicsImpostorJoint): any;
        removeJoint(joint: PhysicsImpostorJoint): any;
        isSupported(): boolean;
        setTransformationFromPhysicsBody(impostor: PhysicsImpostor): any;
        setPhysicsBodyTransformation(impostor: PhysicsImpostor, newPosition: Vector3, newRotation: Quaternion): any;
        setLinearVelocity(impostor: PhysicsImpostor, velocity: Vector3): any;
        setAngularVelocity(impostor: PhysicsImpostor, velocity: Vector3): any;
        getLinearVelocity(impostor: PhysicsImpostor): Vector3;
        getAngularVelocity(impostor: PhysicsImpostor): Vector3;
        setBodyMass(impostor: PhysicsImpostor, mass: number): any;
        sleepBody(impostor: PhysicsImpostor): any;
        wakeUpBody(impostor: PhysicsImpostor): any;
        updateDistanceJoint(joint: DistanceJoint, maxDistance: number, minDistance?: number): any;
        setMotor(joint: IMotorEnabledJoint, speed: number, maxForce?: number, motorIndex?: number): any;
        setLimit(joint: IMotorEnabledJoint, upperLimit: number, lowerLimit?: number, motorIndex?: number): any;
        dispose(): any;
    }
}

declare module BABYLON {
    interface PhysicsImpostorParameters {
        mass: number;
        friction?: number;
        restitution?: number;
        nativeOptions?: any;
    }
    interface IPhysicsEnabledObject {
        position: Vector3;
        rotationQuaternion: Quaternion;
        scaling: Vector3;
        rotation?: Vector3;
        parent?: any;
        getBoundingInfo?(): BoundingInfo;
        computeWorldMatrix?(force: boolean): void;
        getChildMeshes?(): Array<AbstractMesh>;
        getVerticesData?(kind: string): Array<number> | Float32Array;
        getIndices?(): Array<number> | Int32Array;
        getScene?(): Scene;
    }
    class PhysicsImpostor {
        object: IPhysicsEnabledObject;
        type: number;
        private _options;
        private _scene;
        static DEFAULT_OBJECT_SIZE: Vector3;
        private _physicsEngine;
        private _physicsBody;
        private _bodyUpdateRequired;
        private _onBeforePhysicsStepCallbacks;
        private _onAfterPhysicsStepCallbacks;
        private _onPhysicsCollideCallbacks;
        private _deltaPosition;
        private _deltaRotation;
        private _deltaRotationConjugated;
        private _parent;
        uniqueId: number;
        private _joints;
        constructor(object: IPhysicsEnabledObject, type: number, _options?: PhysicsImpostorParameters, _scene?: Scene);
        /**
         * This function will completly initialize this impostor.
         * It will create a new body - but only if this mesh has no parent.
         * If it has, this impostor will not be used other than to define the impostor
         * of the child mesh.
         */
        _init(): void;
        private _getPhysicsParent();
        /**
         * Should a new body be generated.
         */
        isBodyInitRequired(): boolean;
        setScalingUpdated(updated: boolean): void;
        /**
         * Force a regeneration of this or the parent's impostor's body.
         * Use under cautious - This will remove all joints already implemented.
         */
        forceUpdate(): void;
        /**
         * Gets the body that holds this impostor. Either its own, or its parent.
         */
        /**
         * Set the physics body. Used mainly by the physics engine/plugin
         */
        physicsBody: any;
        parent: PhysicsImpostor;
        resetUpdateFlags(): void;
        getObjectExtendSize(): Vector3;
        getObjectCenter(): Vector3;
        /**
         * Get a specific parametes from the options parameter.
         */
        getParam(paramName: string): any;
        /**
         * Sets a specific parameter in the options given to the physics plugin
         */
        setParam(paramName: string, value: number): void;
        /**
         * Specifically change the body's mass option. Won't recreate the physics body object
         */
        setMass(mass: number): void;
        getLinearVelocity(): Vector3;
        /**
         * Set the body's linear velocity.
         */
        setLinearVelocity(velocity: Vector3): void;
        getAngularVelocity(): Vector3;
        /**
         * Set the body's linear velocity.
         */
        setAngularVelocity(velocity: Vector3): void;
        /**
         * Execute a function with the physics plugin native code.
         * Provide a function the will have two variables - the world object and the physics body object.
         */
        executeNativeFunction(func: (world: any, physicsBody: any) => void): void;
        /**
         * Register a function that will be executed before the physics world is stepping forward.
         */
        registerBeforePhysicsStep(func: (impostor: PhysicsImpostor) => void): void;
        unregisterBeforePhysicsStep(func: (impostor: PhysicsImpostor) => void): void;
        /**
         * Register a function that will be executed after the physics step
         */
        registerAfterPhysicsStep(func: (impostor: PhysicsImpostor) => void): void;
        unregisterAfterPhysicsStep(func: (impostor: PhysicsImpostor) => void): void;
        /**
         * register a function that will be executed when this impostor collides against a different body.
         */
        registerOnPhysicsCollide(collideAgainst: PhysicsImpostor | Array<PhysicsImpostor>, func: (collider: PhysicsImpostor, collidedAgainst: PhysicsImpostor) => void): void;
        unregisterOnPhysicsCollide(collideAgainst: PhysicsImpostor | Array<PhysicsImpostor>, func: (collider: PhysicsImpostor, collidedAgainst: PhysicsImpostor | Array<PhysicsImpostor>) => void): void;
        private _tmpPositionWithDelta;
        private _tmpRotationWithDelta;
        /**
         * this function is executed by the physics engine.
         */
        beforeStep: () => void;
        /**
         * this function is executed by the physics engine.
         */
        afterStep: () => void;
        onCollide: (e: {
            body: any;
        }) => void;
        /**
         * Apply a force
         */
        applyForce(force: Vector3, contactPoint: Vector3): void;
        /**
         * Apply an impulse
         */
        applyImpulse(force: Vector3, contactPoint: Vector3): void;
        /**
         * A help function to create a joint.
         */
        createJoint(otherImpostor: PhysicsImpostor, jointType: number, jointData: PhysicsJointData): void;
        /**
         * Add a joint to this impostor with a different impostor.
         */
        addJoint(otherImpostor: PhysicsImpostor, joint: PhysicsJoint): void;
        /**
         * Will keep this body still, in a sleep mode.
         */
        sleep(): void;
        /**
         * Wake the body up.
         */
        wakeUp(): void;
        clone(newObject: IPhysicsEnabledObject): PhysicsImpostor;
        dispose(): void;
        setDeltaPosition(position: Vector3): void;
        setDeltaRotation(rotation: Quaternion): void;
        static NoImpostor: number;
        static SphereImpostor: number;
        static BoxImpostor: number;
        static PlaneImpostor: number;
        static MeshImpostor: number;
        static CylinderImpostor: number;
        static ParticleImpostor: number;
        static HeightmapImpostor: number;
    }
}

declare module BABYLON {
    interface PhysicsJointData {
        mainPivot?: Vector3;
        connectedPivot?: Vector3;
        mainAxis?: Vector3;
        connectedAxis?: Vector3;
        collision?: boolean;
        nativeParams?: any;
    }
    /**
     * This is a holder class for the physics joint created by the physics plugin.
     * It holds a set of functions to control the underlying joint.
     */
    class PhysicsJoint {
        type: number;
        jointData: PhysicsJointData;
        private _physicsJoint;
        protected _physicsPlugin: IPhysicsEnginePlugin;
        constructor(type: number, jointData: PhysicsJointData);
        physicsJoint: any;
        physicsPlugin: IPhysicsEnginePlugin;
        /**
         * Execute a function that is physics-plugin specific.
         * @param {Function} func the function that will be executed.
         *                        It accepts two parameters: the physics world and the physics joint.
         */
        executeNativeFunction(func: (world: any, physicsJoint: any) => void): void;
        static DistanceJoint: number;
        static HingeJoint: number;
        static BallAndSocketJoint: number;
        static WheelJoint: number;
        static SliderJoint: number;
        static PrismaticJoint: number;
        static UniversalJoint: number;
        static Hinge2Joint: number;
        static PointToPointJoint: number;
        static SpringJoint: number;
        static LockJoint: number;
    }
    /**
     * A class representing a physics distance joint.
     */
    class DistanceJoint extends PhysicsJoint {
        constructor(jointData: DistanceJointData);
        /**
         * Update the predefined distance.
         */
        updateDistance(maxDistance: number, minDistance?: number): void;
    }
    class MotorEnabledJoint extends PhysicsJoint implements IMotorEnabledJoint {
        constructor(type: number, jointData: PhysicsJointData);
        /**
         * Set the motor values.
         * Attention, this function is plugin specific. Engines won't react 100% the same.
         * @param {number} force the force to apply
         * @param {number} maxForce max force for this motor.
         */
        setMotor(force?: number, maxForce?: number): void;
        /**
         * Set the motor's limits.
         * Attention, this function is plugin specific. Engines won't react 100% the same.
         */
        setLimit(upperLimit: number, lowerLimit?: number): void;
    }
    /**
     * This class represents a single hinge physics joint
     */
    class HingeJoint extends MotorEnabledJoint {
        constructor(jointData: PhysicsJointData);
        /**
         * Set the motor values.
         * Attention, this function is plugin specific. Engines won't react 100% the same.
         * @param {number} force the force to apply
         * @param {number} maxForce max force for this motor.
         */
        setMotor(force?: number, maxForce?: number): void;
        /**
         * Set the motor's limits.
         * Attention, this function is plugin specific. Engines won't react 100% the same.
         */
        setLimit(upperLimit: number, lowerLimit?: number): void;
    }
    /**
     * This class represents a dual hinge physics joint (same as wheel joint)
     */
    class Hinge2Joint extends MotorEnabledJoint {
        constructor(jointData: PhysicsJointData);
        /**
         * Set the motor values.
         * Attention, this function is plugin specific. Engines won't react 100% the same.
         * @param {number} force the force to apply
         * @param {number} maxForce max force for this motor.
         * @param {motorIndex} the motor's index, 0 or 1.
         */
        setMotor(force?: number, maxForce?: number, motorIndex?: number): void;
        /**
         * Set the motor limits.
         * Attention, this function is plugin specific. Engines won't react 100% the same.
         * @param {number} upperLimit the upper limit
         * @param {number} lowerLimit lower limit
         * @param {motorIndex} the motor's index, 0 or 1.
         */
        setLimit(upperLimit: number, lowerLimit?: number, motorIndex?: number): void;
    }
    interface IMotorEnabledJoint {
        physicsJoint: any;
        setMotor(force?: number, maxForce?: number, motorIndex?: number): any;
        setLimit(upperLimit: number, lowerLimit?: number, motorIndex?: number): any;
    }
    interface DistanceJointData extends PhysicsJointData {
        maxDistance: number;
    }
    interface SpringJointData extends PhysicsJointData {
        length: number;
        stiffness: number;
        damping: number;
    }
}

declare module BABYLON {
    class AnaglyphPostProcess extends PostProcess {
        private _passedProcess;
        constructor(name: string, options: number | PostProcessOptions, rigCameras: Camera[], samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare module BABYLON {
    class BlackAndWhitePostProcess extends PostProcess {
        constructor(name: string, options: number | PostProcessOptions, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare module BABYLON {
    class BlurPostProcess extends PostProcess {
        direction: Vector2;
        blurWidth: number;
        constructor(name: string, direction: Vector2, blurWidth: number, options: number | PostProcessOptions, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare module BABYLON {
    class ColorCorrectionPostProcess extends PostProcess {
        private _colorTableTexture;
        constructor(name: string, colorTableUrl: string, options: number | PostProcessOptions, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare module BABYLON {
    class ConvolutionPostProcess extends PostProcess {
        kernel: number[];
        constructor(name: string, kernel: number[], options: number | PostProcessOptions, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
        static EdgeDetect0Kernel: number[];
        static EdgeDetect1Kernel: number[];
        static EdgeDetect2Kernel: number[];
        static SharpenKernel: number[];
        static EmbossKernel: number[];
        static GaussianKernel: number[];
    }
}

declare module BABYLON {
    class DisplayPassPostProcess extends PostProcess {
        constructor(name: string, options: number | PostProcessOptions, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare module BABYLON {
    class FilterPostProcess extends PostProcess {
        kernelMatrix: Matrix;
        constructor(name: string, kernelMatrix: Matrix, options: number | PostProcessOptions, camera?: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare module BABYLON {
    class FxaaPostProcess extends PostProcess {
        texelWidth: number;
        texelHeight: number;
        constructor(name: string, options: number | PostProcessOptions, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare module BABYLON {
    class HDRRenderingPipeline extends PostProcessRenderPipeline implements IDisposable {
        /**
        * Public members
        */
        /**
        * Gaussian blur coefficient
        * @type {number}
        */
        gaussCoeff: number;
        /**
        * Gaussian blur mean
        * @type {number}
        */
        gaussMean: number;
        /**
        * Gaussian blur standard deviation
        * @type {number}
        */
        gaussStandDev: number;
        /**
        * Gaussian blur multiplier. Multiplies the blur effect
        * @type {number}
        */
        gaussMultiplier: number;
        /**
        * Exposure, controls the overall intensity of the pipeline
        * @type {number}
        */
        exposure: number;
        /**
        * Minimum luminance that the post-process can output. Luminance is >= 0
        * @type {number}
        */
        minimumLuminance: number;
        /**
        * Maximum luminance that the post-process can output. Must be suprerior to minimumLuminance
        * @type {number}
        */
        maximumLuminance: number;
        /**
        * Increase rate for luminance: eye adaptation speed to dark
        * @type {number}
        */
        luminanceIncreaserate: number;
        /**
        * Decrease rate for luminance: eye adaptation speed to bright
        * @type {number}
        */
        luminanceDecreaseRate: number;
        /**
        * Minimum luminance needed to compute HDR
        * @type {number}
        */
        brightThreshold: number;
        /**
        * Private members
        */
        private _guassianBlurHPostProcess;
        private _guassianBlurVPostProcess;
        private _brightPassPostProcess;
        private _textureAdderPostProcess;
        private _downSampleX4PostProcess;
        private _originalPostProcess;
        private _hdrPostProcess;
        private _hdrCurrentLuminance;
        private _hdrOutputLuminance;
        static LUM_STEPS: number;
        private _downSamplePostProcesses;
        private _scene;
        private _needUpdate;
        /**
         * @constructor
         * @param {string} name - The rendering pipeline name
         * @param {BABYLON.Scene} scene - The scene linked to this pipeline
         * @param {any} ratio - The size of the postprocesses (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)
         * @param {BABYLON.PostProcess} originalPostProcess - the custom original color post-process. Must be "reusable". Can be null.
         * @param {BABYLON.Camera[]} cameras - The array of cameras that the rendering pipeline will be attached to
         */
        constructor(name: string, scene: Scene, ratio: number, originalPostProcess?: PostProcess, cameras?: Camera[]);
        /**
        * Tells the pipeline to update its post-processes
        */
        update(): void;
        /**
        * Returns the current calculated luminance
        */
        getCurrentLuminance(): number;
        /**
        * Returns the currently drawn luminance
        */
        getOutputLuminance(): number;
        /**
        * Releases the rendering pipeline and its internal effects. Detaches pipeline from cameras
        */
        dispose(): void;
        /**
        * Creates the HDR post-process and computes the luminance adaptation
        */
        private _createHDRPostProcess(scene, ratio);
        /**
        * Texture Adder post-process
        */
        private _createTextureAdderPostProcess(scene, ratio);
        /**
        * Down sample X4 post-process
        */
        private _createDownSampleX4PostProcess(scene, ratio);
        /**
        * Bright pass post-process
        */
        private _createBrightPassPostProcess(scene, ratio);
        /**
        * Luminance generator. Creates the luminance post-process and down sample post-processes
        */
        private _createLuminanceGeneratorPostProcess(scene);
        /**
        * Gaussian blur post-processes. Horizontal and Vertical
        */
        private _createGaussianBlurPostProcess(scene, ratio);
    }
}

declare module BABYLON {
    class LensRenderingPipeline extends PostProcessRenderPipeline {
        /**
        * The chromatic aberration PostProcess id in the pipeline
        * @type {string}
        */
        LensChromaticAberrationEffect: string;
        /**
        * The highlights enhancing PostProcess id in the pipeline
        * @type {string}
        */
        HighlightsEnhancingEffect: string;
        /**
        * The depth-of-field PostProcess id in the pipeline
        * @type {string}
        */
        LensDepthOfFieldEffect: string;
        private _scene;
        private _depthTexture;
        private _grainTexture;
        private _chromaticAberrationPostProcess;
        private _highlightsPostProcess;
        private _depthOfFieldPostProcess;
        private _edgeBlur;
        private _grainAmount;
        private _chromaticAberration;
        private _distortion;
        private _highlightsGain;
        private _highlightsThreshold;
        private _dofDistance;
        private _dofAperture;
        private _dofDarken;
        private _dofPentagon;
        private _blurNoise;
        /**
         * @constructor
         *
         * Effect parameters are as follow:
         * {
         *      chromatic_aberration: number;       // from 0 to x (1 for realism)
         *      edge_blur: number;                  // from 0 to x (1 for realism)
         *      distortion: number;                 // from 0 to x (1 for realism)
         *      grain_amount: number;               // from 0 to 1
         *      grain_texture: BABYLON.Texture;     // texture to use for grain effect; if unset, use random B&W noise
         *      dof_focus_distance: number;         // depth-of-field: focus distance; unset to disable (disabled by default)
         *      dof_aperture: number;               // depth-of-field: focus blur bias (default: 1)
         *      dof_darken: number;                 // depth-of-field: darken that which is out of focus (from 0 to 1, disabled by default)
         *      dof_pentagon: boolean;              // depth-of-field: makes a pentagon-like "bokeh" effect
         *      dof_gain: number;                   // depth-of-field: highlights gain; unset to disable (disabled by default)
         *      dof_threshold: number;              // depth-of-field: highlights threshold (default: 1)
         *      blur_noise: boolean;                // add a little bit of noise to the blur (default: true)
         * }
         * Note: if an effect parameter is unset, effect is disabled
         *
         * @param {string} name - The rendering pipeline name
         * @param {object} parameters - An object containing all parameters (see above)
         * @param {BABYLON.Scene} scene - The scene linked to this pipeline
         * @param {number} ratio - The size of the postprocesses (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)
         * @param {BABYLON.Camera[]} cameras - The array of cameras that the rendering pipeline will be attached to
         */
        constructor(name: string, parameters: any, scene: Scene, ratio?: number, cameras?: Camera[]);
        setEdgeBlur(amount: number): void;
        disableEdgeBlur(): void;
        setGrainAmount(amount: number): void;
        disableGrain(): void;
        setChromaticAberration(amount: number): void;
        disableChromaticAberration(): void;
        setEdgeDistortion(amount: number): void;
        disableEdgeDistortion(): void;
        setFocusDistance(amount: number): void;
        disableDepthOfField(): void;
        setAperture(amount: number): void;
        setDarkenOutOfFocus(amount: number): void;
        enablePentagonBokeh(): void;
        disablePentagonBokeh(): void;
        enableNoiseBlur(): void;
        disableNoiseBlur(): void;
        setHighlightsGain(amount: number): void;
        setHighlightsThreshold(amount: number): void;
        disableHighlights(): void;
        /**
         * Removes the internal pipeline assets and detaches the pipeline from the scene cameras
         */
        dispose(disableDepthRender?: boolean): void;
        private _createChromaticAberrationPostProcess(ratio);
        private _createHighlightsPostProcess(ratio);
        private _createDepthOfFieldPostProcess(ratio);
        private _createGrainTexture();
    }
}

declare module BABYLON {
    class PassPostProcess extends PostProcess {
        constructor(name: string, options: number | PostProcessOptions, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare module BABYLON {
    type PostProcessOptions = {
        width: number;
        height: number;
    };
    class PostProcess {
        name: string;
        width: number;
        height: number;
        renderTargetSamplingMode: number;
        clearColor: Color4;
        enablePixelPerfectMode: boolean;
        private _camera;
        private _scene;
        private _engine;
        private _options;
        private _reusable;
        private _textureType;
        _textures: SmartArray<WebGLTexture>;
        _currentRenderTextureInd: number;
        private _effect;
        private _samplers;
        private _fragmentUrl;
        private _parameters;
        private _scaleRatio;
        /**
        * An event triggered when the postprocess is activated.
        * @type {BABYLON.Observable}
        */
        onActivateObservable: Observable<Camera>;
        private _onActivateObserver;
        onActivate: (camera: Camera) => void;
        /**
        * An event triggered when the postprocess changes its size.
        * @type {BABYLON.Observable}
        */
        onSizeChangedObservable: Observable<PostProcess>;
        private _onSizeChangedObserver;
        onSizeChanged: (postProcess: PostProcess) => void;
        /**
        * An event triggered when the postprocess applies its effect.
        * @type {BABYLON.Observable}
        */
        onApplyObservable: Observable<Effect>;
        private _onApplyObserver;
        onApply: (effect: Effect) => void;
        /**
        * An event triggered before rendering the postprocess
        * @type {BABYLON.Observable}
        */
        onBeforeRenderObservable: Observable<Effect>;
        private _onBeforeRenderObserver;
        onBeforeRender: (effect: Effect) => void;
        /**
        * An event triggered after rendering the postprocess
        * @type {BABYLON.Observable}
        */
        onAfterRenderObservable: Observable<Effect>;
        private _onAfterRenderObserver;
        onAfterRender: (efect: Effect) => void;
        constructor(name: string, fragmentUrl: string, parameters: string[], samplers: string[], options: number | PostProcessOptions, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean, defines?: string, textureType?: number);
        updateEffect(defines?: string): void;
        isReusable(): boolean;
        /** invalidate frameBuffer to hint the postprocess to create a depth buffer */
        markTextureDirty(): void;
        activate(camera: Camera, sourceTexture?: WebGLTexture): void;
        isSupported: boolean;
        apply(): Effect;
        dispose(camera?: Camera): void;
    }
}

declare module BABYLON {
    class PostProcessManager {
        private _scene;
        private _indexBuffer;
        private _vertexBuffers;
        constructor(scene: Scene);
        private _prepareBuffers();
        _prepareFrame(sourceTexture?: WebGLTexture): boolean;
        directRender(postProcesses: PostProcess[], targetTexture?: WebGLTexture): void;
        _finalizeFrame(doNotPresent?: boolean, targetTexture?: WebGLTexture, faceIndex?: number, postProcesses?: PostProcess[]): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class RefractionPostProcess extends PostProcess {
        color: Color3;
        depth: number;
        colorLevel: number;
        private _refRexture;
        constructor(name: string, refractionTextureUrl: string, color: Color3, depth: number, colorLevel: number, options: number | PostProcessOptions, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
        dispose(camera: Camera): void;
    }
}

declare module BABYLON {
    class SSAORenderingPipeline extends PostProcessRenderPipeline {
        /**
        * The PassPostProcess id in the pipeline that contains the original scene color
        * @type {string}
        */
        SSAOOriginalSceneColorEffect: string;
        /**
        * The SSAO PostProcess id in the pipeline
        * @type {string}
        */
        SSAORenderEffect: string;
        /**
        * The horizontal blur PostProcess id in the pipeline
        * @type {string}
        */
        SSAOBlurHRenderEffect: string;
        /**
        * The vertical blur PostProcess id in the pipeline
        * @type {string}
        */
        SSAOBlurVRenderEffect: string;
        /**
        * The PostProcess id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)
        * @type {string}
        */
        SSAOCombineRenderEffect: string;
        /**
        * The output strength of the SSAO post-process. Default value is 1.0.
        * @type {number}
        */
        totalStrength: number;
        /**
        * The radius around the analyzed pixel used by the SSAO post-process. Default value is 0.0006
        * @type {number}
        */
        radius: number;
        /**
        * Related to fallOff, used to interpolate SSAO samples (first interpolate function input) based on the occlusion difference of each pixel
        * Must not be equal to fallOff and superior to fallOff.
        * Default value is 0.975
        * @type {number}
        */
        area: number;
        /**
        * Related to area, used to interpolate SSAO samples (second interpolate function input) based on the occlusion difference of each pixel
        * Must not be equal to area and inferior to area.
        * Default value is 0.0
        * @type {number}
        */
        fallOff: number;
        /**
        * The base color of the SSAO post-process
        * The final result is "base + ssao" between [0, 1]
        * @type {number}
        */
        base: number;
        private _scene;
        private _depthTexture;
        private _randomTexture;
        private _originalColorPostProcess;
        private _ssaoPostProcess;
        private _blurHPostProcess;
        private _blurVPostProcess;
        private _ssaoCombinePostProcess;
        private _firstUpdate;
        private _ratio;
        /**
         * @constructor
         * @param {string} name - The rendering pipeline name
         * @param {BABYLON.Scene} scene - The scene linked to this pipeline
         * @param {any} ratio - The size of the postprocesses. Can be a number shared between passes or an object for more precision: { ssaoRatio: 0.5, combineRatio: 1.0 }
         * @param {BABYLON.Camera[]} cameras - The array of cameras that the rendering pipeline will be attached to
         */
        constructor(name: string, scene: Scene, ratio: any, cameras?: Camera[]);
        /**
         * Returns the horizontal blur PostProcess
         * @return {BABYLON.BlurPostProcess} The horizontal blur post-process
         */
        getBlurHPostProcess(): BlurPostProcess;
        /**
         * Returns the vertical blur PostProcess
         * @return {BABYLON.BlurPostProcess} The vertical blur post-process
         */
        getBlurVPostProcess(): BlurPostProcess;
        /**
         * Removes the internal pipeline assets and detatches the pipeline from the scene cameras
         */
        dispose(disableDepthRender?: boolean): void;
        private _createBlurPostProcess(ratio);
        private _createSSAOPostProcess(ratio);
        private _createSSAOCombinePostProcess(ratio);
        private _createRandomTexture();
    }
}

declare module BABYLON {
    class StereoscopicInterlacePostProcess extends PostProcess {
        private _stepSize;
        private _passedProcess;
        constructor(name: string, rigCameras: Camera[], isStereoscopicHoriz: boolean, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare module BABYLON {
    enum TonemappingOperator {
        Hable = 0,
        Reinhard = 1,
        HejiDawson = 2,
        Photographic = 3,
    }
    class TonemapPostProcess extends PostProcess {
        private _operator;
        exposureAdjustment: number;
        constructor(name: string, _operator: TonemappingOperator, exposureAdjustment: number, camera: Camera, samplingMode?: number, engine?: Engine, textureFormat?: number);
    }
}

declare module BABYLON {
    class VolumetricLightScatteringPostProcess extends PostProcess {
        private _volumetricLightScatteringPass;
        private _volumetricLightScatteringRTT;
        private _viewPort;
        private _screenCoordinates;
        private _cachedDefines;
        /**
        * If not undefined, the mesh position is computed from the attached node position
        * @type {{position: Vector3}}
        */
        attachedNode: {
            position: Vector3;
        };
        /**
        * Custom position of the mesh. Used if "useCustomMeshPosition" is set to "true"
        * @type {Vector3}
        */
        customMeshPosition: Vector3;
        /**
        * Set if the post-process should use a custom position for the light source (true) or the internal mesh position (false)
        * @type {boolean}
        */
        useCustomMeshPosition: boolean;
        /**
        * If the post-process should inverse the light scattering direction
        * @type {boolean}
        */
        invert: boolean;
        /**
        * The internal mesh used by the post-process
        * @type {boolean}
        */
        mesh: Mesh;
        useDiffuseColor: boolean;
        /**
        * Array containing the excluded meshes not rendered in the internal pass
        */
        excludedMeshes: AbstractMesh[];
        /**
        * Controls the overall intensity of the post-process
        * @type {number}
        */
        exposure: number;
        /**
        * Dissipates each sample's contribution in range [0, 1]
        * @type {number}
        */
        decay: number;
        /**
        * Controls the overall intensity of each sample
        * @type {number}
        */
        weight: number;
        /**
        * Controls the density of each sample
        * @type {number}
        */
        density: number;
        /**
         * @constructor
         * @param {string} name - The post-process name
         * @param {any} ratio - The size of the post-process and/or internal pass (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)
         * @param {BABYLON.Camera} camera - The camera that the post-process will be attached to
         * @param {BABYLON.Mesh} mesh - The mesh used to create the light scattering
         * @param {number} samples - The post-process quality, default 100
         * @param {number} samplingMode - The post-process filtering mode
         * @param {BABYLON.Engine} engine - The babylon engine
         * @param {boolean} reusable - If the post-process is reusable
         * @param {BABYLON.Scene} scene - The constructor needs a scene reference to initialize internal components. If "camera" is null (RenderPipelineà, "scene" must be provided
         */
        constructor(name: string, ratio: any, camera: Camera, mesh?: Mesh, samples?: number, samplingMode?: number, engine?: Engine, reusable?: boolean, scene?: Scene);
        isReady(subMesh: SubMesh, useInstances: boolean): boolean;
        /**
         * Sets the new light position for light scattering effect
         * @param {BABYLON.Vector3} The new custom light position
         */
        setCustomMeshPosition(position: Vector3): void;
        /**
         * Returns the light position for light scattering effect
         * @return {BABYLON.Vector3} The custom light position
         */
        getCustomMeshPosition(): Vector3;
        /**
         * Disposes the internal assets and detaches the post-process from the camera
         */
        dispose(camera: Camera): void;
        /**
         * Returns the render target texture used by the post-process
         * @return {BABYLON.RenderTargetTexture} The render target texture used by the post-process
         */
        getPass(): RenderTargetTexture;
        private _meshExcluded(mesh);
        private _createPass(scene, ratio);
        private _updateMeshScreenCoordinates(scene);
        /**
        * Creates a default mesh for the Volumeric Light Scattering post-process
        * @param {string} The mesh name
        * @param {BABYLON.Scene} The scene where to create the mesh
        * @return {BABYLON.Mesh} the default mesh
        */
        static CreateDefaultMesh(name: string, scene: Scene): Mesh;
    }
}

declare module BABYLON {
    class VRDistortionCorrectionPostProcess extends PostProcess {
        aspectRatio: number;
        private _isRightEye;
        private _distortionFactors;
        private _postProcessScaleFactor;
        private _lensCenterOffset;
        private _scaleIn;
        private _scaleFactor;
        private _lensCenter;
        constructor(name: string, camera: Camera, isRightEye: boolean, vrMetrics: VRCameraMetrics);
    }
}

declare module BABYLON {
    class ReflectionProbe {
        name: string;
        private _scene;
        private _renderTargetTexture;
        private _projectionMatrix;
        private _viewMatrix;
        private _target;
        private _add;
        private _attachedMesh;
        invertYAxis: boolean;
        position: Vector3;
        constructor(name: string, size: number, scene: Scene, generateMipMaps?: boolean);
        refreshRate: number;
        getScene(): Scene;
        cubeTexture: RenderTargetTexture;
        renderList: AbstractMesh[];
        attachToMesh(mesh: AbstractMesh): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class BoundingBoxRenderer {
        frontColor: Color3;
        backColor: Color3;
        showBackLines: boolean;
        renderList: SmartArray<BoundingBox>;
        private _scene;
        private _colorShader;
        private _vertexBuffers;
        private _indexBuffer;
        constructor(scene: Scene);
        private _prepareRessources();
        reset(): void;
        render(): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class DepthRenderer {
        private _scene;
        private _depthMap;
        private _effect;
        private _viewMatrix;
        private _projectionMatrix;
        private _transformMatrix;
        private _worldViewProjection;
        private _cachedDefines;
        constructor(scene: Scene, type?: number);
        isReady(subMesh: SubMesh, useInstances: boolean): boolean;
        getDepthMap(): RenderTargetTexture;
        dispose(): void;
    }
}

declare module BABYLON {
    class EdgesRenderer {
        edgesWidthScalerForOrthographic: number;
        edgesWidthScalerForPerspective: number;
        private _source;
        private _linesPositions;
        private _linesNormals;
        private _linesIndices;
        private _epsilon;
        private _indicesCount;
        private _lineShader;
        private _ib;
        private _buffers;
        private _checkVerticesInsteadOfIndices;
        constructor(source: AbstractMesh, epsilon?: number, checkVerticesInsteadOfIndices?: boolean);
        private _prepareRessources();
        dispose(): void;
        private _processEdgeForAdjacencies(pa, pb, p0, p1, p2);
        private _processEdgeForAdjacenciesWithVertices(pa, pb, p0, p1, p2);
        private _checkEdge(faceIndex, edge, faceNormals, p0, p1);
        _generateEdgesLines(): void;
        render(): void;
    }
}

declare module BABYLON {
    class OutlineRenderer {
        private _scene;
        private _effect;
        private _cachedDefines;
        constructor(scene: Scene);
        render(subMesh: SubMesh, batch: _InstancesBatch, useOverlay?: boolean): void;
        isReady(subMesh: SubMesh, useInstances: boolean): boolean;
    }
}

declare module BABYLON {
    class RenderingGroup {
        index: number;
        private _scene;
        private _opaqueSubMeshes;
        private _transparentSubMeshes;
        private _alphaTestSubMeshes;
        private _activeVertices;
        onBeforeTransparentRendering: () => void;
        constructor(index: number, scene: Scene);
        render(customRenderFunction: (opaqueSubMeshes: SmartArray<SubMesh>, transparentSubMeshes: SmartArray<SubMesh>, alphaTestSubMeshes: SmartArray<SubMesh>) => void): boolean;
        prepare(): void;
        dispatch(subMesh: SubMesh): void;
    }
}

declare module BABYLON {
    class RenderingManager {
        static MAX_RENDERINGGROUPS: number;
        private _scene;
        private _renderingGroups;
        private _depthBufferAlreadyCleaned;
        private _currentIndex;
        private _currentActiveMeshes;
        private _currentRenderParticles;
        private _currentRenderSprites;
        constructor(scene: Scene);
        private _renderParticles(index, activeMeshes);
        private _renderSprites(index);
        private _clearDepthBuffer();
        private _renderSpritesAndParticles();
        render(customRenderFunction: (opaqueSubMeshes: SmartArray<SubMesh>, transparentSubMeshes: SmartArray<SubMesh>, alphaTestSubMeshes: SmartArray<SubMesh>) => void, activeMeshes: AbstractMesh[], renderParticles: boolean, renderSprites: boolean): void;
        reset(): void;
        dispatch(subMesh: SubMesh): void;
    }
}

declare module BABYLON {
    class Sprite {
        name: string;
        position: Vector3;
        color: Color4;
        width: number;
        height: number;
        angle: number;
        cellIndex: number;
        invertU: number;
        invertV: number;
        disposeWhenFinishedAnimating: boolean;
        animations: Animation[];
        isPickable: boolean;
        actionManager: ActionManager;
        private _animationStarted;
        private _loopAnimation;
        private _fromIndex;
        private _toIndex;
        private _delay;
        private _direction;
        private _frameCount;
        private _manager;
        private _time;
        size: number;
        constructor(name: string, manager: SpriteManager);
        playAnimation(from: number, to: number, loop: boolean, delay: number): void;
        stopAnimation(): void;
        _animate(deltaTime: number): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class SpriteManager {
        name: string;
        cellSize: number;
        sprites: Sprite[];
        renderingGroupId: number;
        layerMask: number;
        fogEnabled: boolean;
        isPickable: boolean;
        /**
        * An event triggered when the manager is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<SpriteManager>;
        private _onDisposeObserver;
        onDispose: () => void;
        private _capacity;
        private _spriteTexture;
        private _epsilon;
        private _scene;
        private _vertexData;
        private _buffer;
        private _vertexBuffers;
        private _indexBuffer;
        private _effectBase;
        private _effectFog;
        texture: Texture;
        constructor(name: string, imgUrl: string, capacity: number, cellSize: number, scene: Scene, epsilon?: number, samplingMode?: number);
        private _appendSpriteVertex(index, sprite, offsetX, offsetY, rowSize);
        intersects(ray: Ray, camera: Camera, predicate?: (sprite: Sprite) => boolean, fastCheck?: boolean): PickingInfo;
        render(): void;
        dispose(): void;
    }
}

declare module BABYLON.Internals {
    class _AlphaState {
        private _isAlphaBlendDirty;
        private _isBlendFunctionParametersDirty;
        private _alphaBlend;
        private _blendFunctionParameters;
        isDirty: boolean;
        alphaBlend: boolean;
        setAlphaBlendFunctionParameters(value0: number, value1: number, value2: number, value3: number): void;
        reset(): void;
        apply(gl: WebGLRenderingContext): void;
    }
}

declare module BABYLON.Internals {
    class _DepthCullingState {
        private _isDepthTestDirty;
        private _isDepthMaskDirty;
        private _isDepthFuncDirty;
        private _isCullFaceDirty;
        private _isCullDirty;
        private _isZOffsetDirty;
        private _depthTest;
        private _depthMask;
        private _depthFunc;
        private _cull;
        private _cullFace;
        private _zOffset;
        isDirty: boolean;
        zOffset: number;
        cullFace: number;
        cull: boolean;
        depthFunc: number;
        depthMask: boolean;
        depthTest: boolean;
        reset(): void;
        apply(gl: WebGLRenderingContext): void;
    }
}

declare module BABYLON.Internals {
    class AndOrNotEvaluator {
        static Eval(query: string, evaluateCallback: (val: any) => boolean): boolean;
        private static _HandleParenthesisContent(parenthesisContent, evaluateCallback);
        private static _SimplifyNegation(booleanString);
    }
}

declare module BABYLON {
    interface IAssetTask {
        onSuccess: (task: IAssetTask) => void;
        onError: (task: IAssetTask) => void;
        isCompleted: boolean;
        run(scene: Scene, onSuccess: () => void, onError: () => void): any;
    }
    class MeshAssetTask implements IAssetTask {
        name: string;
        meshesNames: any;
        rootUrl: string;
        sceneFilename: string;
        loadedMeshes: Array<AbstractMesh>;
        loadedParticleSystems: Array<ParticleSystem>;
        loadedSkeletons: Array<Skeleton>;
        onSuccess: (task: IAssetTask) => void;
        onError: (task: IAssetTask) => void;
        isCompleted: boolean;
        constructor(name: string, meshesNames: any, rootUrl: string, sceneFilename: string);
        run(scene: Scene, onSuccess: () => void, onError: () => void): void;
    }
    class TextFileAssetTask implements IAssetTask {
        name: string;
        url: string;
        onSuccess: (task: IAssetTask) => void;
        onError: (task: IAssetTask) => void;
        isCompleted: boolean;
        text: string;
        constructor(name: string, url: string);
        run(scene: Scene, onSuccess: () => void, onError: () => void): void;
    }
    class BinaryFileAssetTask implements IAssetTask {
        name: string;
        url: string;
        onSuccess: (task: IAssetTask) => void;
        onError: (task: IAssetTask) => void;
        isCompleted: boolean;
        data: ArrayBuffer;
        constructor(name: string, url: string);
        run(scene: Scene, onSuccess: () => void, onError: () => void): void;
    }
    class ImageAssetTask implements IAssetTask {
        name: string;
        url: string;
        onSuccess: (task: IAssetTask) => void;
        onError: (task: IAssetTask) => void;
        isCompleted: boolean;
        image: HTMLImageElement;
        constructor(name: string, url: string);
        run(scene: Scene, onSuccess: () => void, onError: () => void): void;
    }
    class TextureAssetTask implements IAssetTask {
        name: string;
        url: string;
        noMipmap: boolean;
        invertY: boolean;
        samplingMode: number;
        onSuccess: (task: IAssetTask) => void;
        onError: (task: IAssetTask) => void;
        isCompleted: boolean;
        texture: Texture;
        constructor(name: string, url: string, noMipmap?: boolean, invertY?: boolean, samplingMode?: number);
        run(scene: Scene, onSuccess: () => void, onError: () => void): void;
    }
    class AssetsManager {
        private _tasks;
        private _scene;
        private _waitingTasksCount;
        onFinish: (tasks: IAssetTask[]) => void;
        onTaskSuccess: (task: IAssetTask) => void;
        onTaskError: (task: IAssetTask) => void;
        useDefaultLoadingScreen: boolean;
        constructor(scene: Scene);
        addMeshTask(taskName: string, meshesNames: any, rootUrl: string, sceneFilename: string): IAssetTask;
        addTextFileTask(taskName: string, url: string): IAssetTask;
        addBinaryFileTask(taskName: string, url: string): IAssetTask;
        addImageTask(taskName: string, url: string): IAssetTask;
        addTextureTask(taskName: string, url: string, noMipmap?: boolean, invertY?: boolean, samplingMode?: number): IAssetTask;
        private _decreaseWaitingTasksCount();
        private _runTask(task);
        reset(): AssetsManager;
        load(): AssetsManager;
    }
}

declare module BABYLON {
    class Database {
        private callbackManifestChecked;
        private currentSceneUrl;
        private db;
        private enableSceneOffline;
        private enableTexturesOffline;
        private manifestVersionFound;
        private mustUpdateRessources;
        private hasReachedQuota;
        private isSupported;
        private idbFactory;
        static IsUASupportingBlobStorage: boolean;
        static IDBStorageEnabled: boolean;
        constructor(urlToScene: string, callbackManifestChecked: (checked: boolean) => any);
        static parseURL: (url: string) => string;
        static ReturnFullUrlLocation: (url: string) => string;
        checkManifestFile(): void;
        openAsync(successCallback: any, errorCallback: any): void;
        loadImageFromDB(url: string, image: HTMLImageElement): void;
        private _loadImageFromDBAsync(url, image, notInDBCallback);
        private _saveImageIntoDBAsync(url, image);
        private _checkVersionFromDB(url, versionLoaded);
        private _loadVersionFromDBAsync(url, callback, updateInDBCallback);
        private _saveVersionIntoDBAsync(url, callback);
        private loadFileFromDB(url, sceneLoaded, progressCallBack, errorCallback, useArrayBuffer?);
        private _loadFileFromDBAsync(url, callback, notInDBCallback, useArrayBuffer?);
        private _saveFileIntoDBAsync(url, callback, progressCallback, useArrayBuffer?);
    }
}

declare module BABYLON {
    function serialize(sourceName?: string): (target: any, propertyKey: string | symbol) => void;
    function serializeAsTexture(sourceName?: string): (target: any, propertyKey: string | symbol) => void;
    function serializeAsColor3(sourceName?: string): (target: any, propertyKey: string | symbol) => void;
    function serializeAsFresnelParameters(sourceName?: string): (target: any, propertyKey: string | symbol) => void;
    function serializeAsVector2(sourceName?: string): (target: any, propertyKey: string | symbol) => void;
    function serializeAsVector3(sourceName?: string): (target: any, propertyKey: string | symbol) => void;
    function serializeAsMeshReference(sourceName?: string): (target: any, propertyKey: string | symbol) => void;
    function serializeAsColorCurves(sourceName?: string): (target: any, propertyKey: string | symbol) => void;
    class SerializationHelper {
        static Serialize<T>(entity: T, serializationObject?: any): any;
        static Parse<T>(creationFunction: () => T, source: any, scene: Scene, rootUrl?: string): T;
        static Clone<T>(creationFunction: () => T, source: T): T;
    }
}

declare module BABYLON {
    class DynamicFloatArrayElementInfo {
        offset: number;
    }
    /**
    * The purpose of this class is to store float32 based elements of a given size (defined by the stride argument) in a dynamic fashion, that is, you can add/free elements. You can then access to a defragmented/packed version of the underlying Float32Array by calling the pack() method.
    * The intent is to maintain through time data that will be bound to a WebGlBuffer with the ability to change add/remove elements.
    * It was first built to efficiently maintain the WebGlBuffer that contain instancing based data.
    * Allocating an Element will return a instance of DynamicFloatArrayElement which contains the offset into the Float32Array of where the element starts, you are then responsible to copy your data using this offset.
    * Beware, calling pack() may change the offset of some Entries because this method will defragment the Float32Array to replace empty elements by moving allocated ones at their location.
     * This method will return an ArrayBufferView on the existing Float32Array that describes the used elements. Use this View to update the WebGLBuffer and NOT the "buffer" field of the class. The pack() method won't shrink/reallocate the buffer to keep it GC friendly, all the empty space will be put at the end of the buffer, the method just ensure there are no "free holes".
    */
    class DynamicFloatArray {
        /**
         * Construct an instance of the dynamic float array
         * @param stride size of one element in float (i.e. not bytes!)
         * @param initialElementCount the number of available entries at construction
         */
        constructor(stride: number, initialElementCount: number);
        /**
         * Allocate an element in the array.
         * @return the element info instance that contains the offset into the main buffer of the element's location.
         * Beware, this offset may change when you call pack()
         */
        allocElement(): DynamicFloatArrayElementInfo;
        /**
         * Free the element corresponding to the given element info
         * @param elInfo the element that describe the allocated element
         */
        freeElement(elInfo: DynamicFloatArrayElementInfo): void;
        /**
         * This method will pack all the used elements into a linear sequence and put all the free space at the end.
         * Instances of DynamicFloatArrayElement may have their 'offset' member changed as data could be copied from one location to another, so be sure to read/write your data based on the value inside this member after you called pack().
         * @return the subArray that is the view of the used elements area, you can use it as a source to update a WebGLBuffer
         */
        pack(): Float32Array;
        private _moveElement(element, destOffset);
        private _growBuffer();
        /**
         * This is the main buffer, all elements are stored inside, you use the DynamicFloatArrayElement instance of a given element to know its location into this buffer, then you have the responsibility to perform write operations in this buffer at the right location!
         * Don't use this buffer for a WebGL bufferSubData() operation, but use the one returned by the pack() method.
         */
        buffer: Float32Array;
        /**
         * Get the total count of entries that can fit in the current buffer
         * @returns the elements count
         */
        totalElementCount: number;
        /**
         * Get the count of free entries that can still be allocated without resizing the buffer
         * @returns the free elements count
         */
        freeElementCount: number;
        /**
         * Get the count of allocated elements
         * @returns the allocated elements count
         */
        usedElementCount: number;
        /**
         * Return the size of one element in float
         * @returns the size in float
         */
        stride: number;
        compareValueOffset: number;
        sortingAscending: boolean;
        sort(): boolean;
        private _allEntries;
        private _freeEntries;
        private _stride;
        private _lastUsed;
        private _firstFree;
        private _sortTable;
        private _sortedTable;
    }
}

declare module Earcut {
    /**
     * The fastest and smallest JavaScript polygon triangulation library for your WebGL apps
     * @param data is a flat array of vertice coordinates like [x0, y0, x1, y1, x2, y2, ...].
     * @param holeIndices is an array of hole indices if any (e.g. [5, 8] for a 12- vertice input would mean one hole with vertices 5–7 and another with 8–11).
     * @param dim is the number of coordinates per vertice in the input array (2 by default).
     */
    function earcut(data: number[], holeIndices: number[], dim: number): any[];
    /**
     * return a percentage difference between the polygon area and its triangulation area;
     * used to verify correctness of triangulation
     */
    function deviation(data: number[], holeIndices: number[], dim: number, triangles: number[]): number;
    /**
     *  turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
     */
    function flatten(data: number[][][]): {
        vertices: any[];
        holes: any[];
        dimensions: number;
    };
}

declare module BABYLON {
    class FilesInput {
        private _engine;
        private _currentScene;
        private _canvas;
        private _sceneLoadedCallback;
        private _progressCallback;
        private _additionnalRenderLoopLogicCallback;
        private _textureLoadingCallback;
        private _startingProcessingFilesCallback;
        private _elementToMonitor;
        static FilesTextures: any[];
        static FilesToLoad: any[];
        private _sceneFileToLoad;
        private _filesToLoad;
        constructor(p_engine: Engine, p_scene: Scene, p_canvas: HTMLCanvasElement, p_sceneLoadedCallback: any, p_progressCallback: any, p_additionnalRenderLoopLogicCallback: any, p_textureLoadingCallback: any, p_startingProcessingFilesCallback: any);
        monitorElementForDragNDrop(p_elementToMonitor: HTMLElement): void;
        private renderFunction();
        private drag(e);
        private drop(eventDrop);
        loadFiles(event: any): void;
        reload(): void;
    }
}

declare module BABYLON {
    class Gamepads {
        private babylonGamepads;
        private oneGamepadConnected;
        private isMonitoring;
        private gamepadEventSupported;
        private gamepadSupportAvailable;
        private _callbackGamepadConnected;
        private _onGamepadConnectedEvent;
        private _onGamepadDisonnectedEvent;
        private static gamepadDOMInfo;
        constructor(ongamedpadconnected: (gamepad: Gamepad) => void);
        dispose(): void;
        private _onGamepadConnected(evt);
        private _addNewGamepad(gamepad);
        private _onGamepadDisconnected(evt);
        private _startMonitoringGamepads();
        private _stopMonitoringGamepads();
        private _checkGamepadsStatus();
        private _updateGamepadObjects();
    }
    class StickValues {
        x: any;
        y: any;
        constructor(x: any, y: any);
    }
    class Gamepad {
        id: string;
        index: number;
        browserGamepad: any;
        private _leftStick;
        private _rightStick;
        private _onleftstickchanged;
        private _onrightstickchanged;
        constructor(id: string, index: number, browserGamepad: any);
        onleftstickchanged(callback: (values: StickValues) => void): void;
        onrightstickchanged(callback: (values: StickValues) => void): void;
        leftStick: StickValues;
        rightStick: StickValues;
        update(): void;
    }
    class GenericPad extends Gamepad {
        id: string;
        index: number;
        gamepad: any;
        private _buttons;
        private _onbuttondown;
        private _onbuttonup;
        onbuttondown(callback: (buttonPressed: number) => void): void;
        onbuttonup(callback: (buttonReleased: number) => void): void;
        constructor(id: string, index: number, gamepad: any);
        private _setButtonValue(newValue, currentValue, buttonIndex);
        update(): void;
    }
    enum Xbox360Button {
        A = 0,
        B = 1,
        X = 2,
        Y = 3,
        Start = 4,
        Back = 5,
        LB = 6,
        RB = 7,
        LeftStick = 8,
        RightStick = 9,
    }
    enum Xbox360Dpad {
        Up = 0,
        Down = 1,
        Left = 2,
        Right = 3,
    }
    class Xbox360Pad extends Gamepad {
        private _leftTrigger;
        private _rightTrigger;
        private _onlefttriggerchanged;
        private _onrighttriggerchanged;
        private _onbuttondown;
        private _onbuttonup;
        private _ondpaddown;
        private _ondpadup;
        private _buttonA;
        private _buttonB;
        private _buttonX;
        private _buttonY;
        private _buttonBack;
        private _buttonStart;
        private _buttonLB;
        private _buttonRB;
        private _buttonLeftStick;
        private _buttonRightStick;
        private _dPadUp;
        private _dPadDown;
        private _dPadLeft;
        private _dPadRight;
        onlefttriggerchanged(callback: (value: number) => void): void;
        onrighttriggerchanged(callback: (value: number) => void): void;
        leftTrigger: number;
        rightTrigger: number;
        onbuttondown(callback: (buttonPressed: Xbox360Button) => void): void;
        onbuttonup(callback: (buttonReleased: Xbox360Button) => void): void;
        ondpaddown(callback: (dPadPressed: Xbox360Dpad) => void): void;
        ondpadup(callback: (dPadReleased: Xbox360Dpad) => void): void;
        private _setButtonValue(newValue, currentValue, buttonType);
        private _setDPadValue(newValue, currentValue, buttonType);
        buttonA: number;
        buttonB: number;
        buttonX: number;
        buttonY: number;
        buttonStart: number;
        buttonBack: number;
        buttonLB: number;
        buttonRB: number;
        buttonLeftStick: number;
        buttonRightStick: number;
        dPadUp: number;
        dPadDown: number;
        dPadLeft: number;
        dPadRight: number;
        update(): void;
    }
}
interface Navigator {
    getGamepads(func?: any): any;
    webkitGetGamepads(func?: any): any;
    msGetGamepads(func?: any): any;
    webkitGamepads(func?: any): any;
}

declare module BABYLON {
    interface ILoadingScreen {
        displayLoadingUI: () => void;
        hideLoadingUI: () => void;
        loadingUIBackgroundColor: string;
        loadingUIText: string;
    }
    class DefaultLoadingScreen implements ILoadingScreen {
        private _renderingCanvas;
        private _loadingText;
        private _loadingDivBackgroundColor;
        private _loadingDiv;
        private _loadingTextDiv;
        constructor(_renderingCanvas: HTMLCanvasElement, _loadingText?: string, _loadingDivBackgroundColor?: string);
        displayLoadingUI(): void;
        hideLoadingUI(): void;
        loadingUIText: string;
        loadingUIBackgroundColor: string;
        private _resizeLoadingUI;
    }
}

declare module BABYLON {
    /**
     * A class serves as a medium between the observable and its observers
     */
    class EventState {
        /**
        * If the callback of a given Observer set skipNextObservers to true the following observers will be ignored
        */
        constructor(mask: number, skipNextObservers?: boolean);
        /**
         * An Observer can set this property to true to prevent subsequent observers of being notified
         */
        skipNextObservers: boolean;
        /**
         * Get the mask value that were used to trigger the event corresponding to this EventState object
         */
        mask: number;
    }
    /**
     * Represent an Observer registered to a given Observable object.
     */
    class Observer<T> {
        callback: (eventData: T, eventState: EventState) => void;
        mask: number;
        constructor(callback: (eventData: T, eventState: EventState) => void, mask: number);
    }
    /**
     * The Observable class is a simple implementation of the Observable pattern.
     * There's one slight particularity though: a given Observable can notify its observer using a particular mask value, only the Observers registered with this mask value will be notified.
     * This enable a more fine grained execution without having to rely on multiple different Observable objects.
     * For instance you may have a given Observable that have four different types of notifications: Move (mask = 0x01), Stop (mask = 0x02), Turn Right (mask = 0X04), Turn Left (mask = 0X08).
     * A given observer can register itself with only Move and Stop (mask = 0x03), then it will only be notified when one of these two occurs and will never be for Turn Left/Right.
     */
    class Observable<T> {
        _observers: Observer<T>[];
        /**
         * Create a new Observer with the specified callback
         * @param callback the callback that will be executed for that Observer
         * @param mask the mask used to filter observers
         * @param insertFirst if true the callback will be inserted at the first position, hence executed before the others ones. If false (default behavior) the callback will be inserted at the last position, executed after all the others already present.
         */
        add(callback: (eventData: T, eventState: EventState) => void, mask?: number, insertFirst?: boolean): Observer<T>;
        /**
         * Remove an Observer from the Observable object
         * @param observer the instance of the Observer to remove. If it doesn't belong to this Observable, false will be returned.
         */
        remove(observer: Observer<T>): boolean;
        /**
         * Remove a callback from the Observable object
         * @param callback the callback to remove. If it doesn't belong to this Observable, false will be returned.
        */
        removeCallback(callback: (eventData: T, eventState: EventState) => void): boolean;
        /**
         * Notify all Observers by calling their respective callback with the given data
         * @param eventData
         * @param mask
         */
        notifyObservers(eventData: T, mask?: number): void;
        /**
         * return true is the Observable has at least one Observer registered
         */
        hasObservers(): boolean;
        /**
        * Clear the list of observers
        */
        clear(): void;
        /**
        * Clone the current observable
        */
        clone(): Observable<T>;
    }
}

declare module BABYLON {
    /**
  * This class describe a rectangle that were added to the map.
  * You have access to its coordinates either in pixel or normalized (UV)
  */
    class PackedRect {
        constructor(root: PackedRect, parent: PackedRect, pos: Vector2, size: Size);
        /**
         * @returns the position of this node into the map
         */
        pos: Vector2;
        /**
         * @returns the size of the rectangle this node handles
         */
        contentSize: Size;
        /**
         * Compute the UV of the top/left, top/right, bottom/right, bottom/left points of the rectangle this node handles into the map
         * @returns And array of 4 Vector2, containing UV coordinates for the four corners of the Rectangle into the map
         */
        UVs: Vector2[];
        /**
         * Free this rectangle from the map.
         * Call this method when you no longer need the rectangle to be in the map.
         */
        freeContent(): void;
        protected isUsed: boolean;
        protected findAndSplitNode(contentSize: Size): PackedRect;
        private findNode(size);
        private splitNode(contentSize);
        private attemptDefrag();
        private clearNode();
        private isRecursiveFree;
        protected evalFreeSize(size: number): number;
        protected _root: PackedRect;
        protected _parent: PackedRect;
        private _contentSize;
        private _initialSize;
        private _leftNode;
        private _rightNode;
        private _bottomNode;
        private _pos;
        protected _size: Size;
    }
    /**
     * The purpose of this class is to pack several Rectangles into a big map, while trying to fit everything as optimally as possible.
     * This class is typically used to build lightmaps, sprite map or to pack several little textures into a big one.
     * Note that this class allows allocated Rectangles to be freed: that is the map is dynamically maintained so you can add/remove rectangle based on their life-cycle.
     */
    class RectPackingMap extends PackedRect {
        /**
         * Create an instance of the object with a dimension using the given size
         * @param size The dimension of the rectangle that will contain all the sub ones.
         */
        constructor(size: Size);
        /**
         * Add a rectangle, finding the best location to store it into the map
         * @param size the dimension of the rectangle to store
         * @return the Node containing the rectangle information, or null if we couldn't find a free spot
         */
        addRect(size: Size): PackedRect;
        /**
         * Return the current space free normalized between [0;1]
         * @returns {}
         */
        freeSpace: number;
    }
}

declare module BABYLON {
    class SceneOptimization {
        priority: number;
        apply: (scene: Scene) => boolean;
        constructor(priority?: number);
    }
    class TextureOptimization extends SceneOptimization {
        priority: number;
        maximumSize: number;
        constructor(priority?: number, maximumSize?: number);
        apply: (scene: Scene) => boolean;
    }
    class HardwareScalingOptimization extends SceneOptimization {
        priority: number;
        maximumScale: number;
        private _currentScale;
        constructor(priority?: number, maximumScale?: number);
        apply: (scene: Scene) => boolean;
    }
    class ShadowsOptimization extends SceneOptimization {
        apply: (scene: Scene) => boolean;
    }
    class PostProcessesOptimization extends SceneOptimization {
        apply: (scene: Scene) => boolean;
    }
    class LensFlaresOptimization extends SceneOptimization {
        apply: (scene: Scene) => boolean;
    }
    class ParticlesOptimization extends SceneOptimization {
        apply: (scene: Scene) => boolean;
    }
    class RenderTargetsOptimization extends SceneOptimization {
        apply: (scene: Scene) => boolean;
    }
    class MergeMeshesOptimization extends SceneOptimization {
        static _UpdateSelectionTree: boolean;
        static UpdateSelectionTree: boolean;
        private _canBeMerged;
        apply: (scene: Scene, updateSelectionTree?: boolean) => boolean;
    }
    class SceneOptimizerOptions {
        targetFrameRate: number;
        trackerDuration: number;
        optimizations: SceneOptimization[];
        constructor(targetFrameRate?: number, trackerDuration?: number);
        static LowDegradationAllowed(targetFrameRate?: number): SceneOptimizerOptions;
        static ModerateDegradationAllowed(targetFrameRate?: number): SceneOptimizerOptions;
        static HighDegradationAllowed(targetFrameRate?: number): SceneOptimizerOptions;
    }
    class SceneOptimizer {
        static _CheckCurrentState(scene: Scene, options: SceneOptimizerOptions, currentPriorityLevel: number, onSuccess?: () => void, onFailure?: () => void): void;
        static OptimizeAsync(scene: Scene, options?: SceneOptimizerOptions, onSuccess?: () => void, onFailure?: () => void): void;
    }
}

declare module BABYLON {
    class SceneSerializer {
        static ClearCache(): void;
        static Serialize(scene: Scene): any;
        static SerializeMesh(toSerialize: any, withParents?: boolean, withChildren?: boolean): any;
    }
}

declare module BABYLON {
    class SmartArray<T> {
        data: Array<T>;
        length: number;
        private _id;
        private _duplicateId;
        constructor(capacity: number);
        push(value: any): void;
        pushNoDuplicate(value: any): boolean;
        sort(compareFn: any): void;
        reset(): void;
        concat(array: any): void;
        concatWithNoDuplicate(array: any): void;
        indexOf(value: any): number;
        private static _GlobalId;
    }
}

declare module BABYLON {
    /**
     * This class implement a typical dictionary using a string as key and the generic type T as value.
     * The underlying implementation relies on an associative array to ensure the best performances.
     * The value can be anything including 'null' but except 'undefined'
     */
    class StringDictionary<T> {
        /**
         * Get a value based from its key
         * @param key the given key to get the matching value from
         * @return the value if found, otherwise undefined is returned
         */
        get(key: string): T;
        /**
         * Get a value from its key or add it if it doesn't exist.
         * This method will ensure you that a given key/data will be present in the dictionary.
         * @param key the given key to get the matching value from
         * @param factory the factory that will create the value if the key is not present in the dictionary.
         * The factory will only be invoked if there's no data for the given key.
         * @return the value corresponding to the key.
         */
        getOrAddWithFactory(key: string, factory: (key: string) => T): T;
        /**
         * Get a value from its key if present in the dictionary otherwise add it
         * @param key the key to get the value from
         * @param val if there's no such key/value pair in the dictionary add it with this value
         * @return the value corresponding to the key
         */
        getOrAdd(key: string, val: T): T;
        /**
         * Check if there's a given key in the dictionary
         * @param key the key to check for
         * @return true if the key is present, false otherwise
         */
        contains(key: any): boolean;
        /**
         * Add a new key and its corresponding value
         * @param key the key to add
         * @param value the value corresponding to the key
         * @return true if the operation completed successfully, false if we couldn't insert the key/value because there was already this key in the dictionary
         */
        add(key: string, value: T): boolean;
        set(key: string, value: T): boolean;
        /**
         * Remove a key/value from the dictionary.
         * @param key the key to remove
         * @return true if the item was successfully deleted, false if no item with such key exist in the dictionary
         */
        remove(key: string): boolean;
        /**
         * Clear the whole content of the dictionary
         */
        clear(): void;
        count: number;
        /**
         * Execute a callback on each key/val of the dictionary.
         * Note that you can remove any element in this dictionary in the callback implementation
         * @param callback the callback to execute on a given key/value pair
         */
        forEach(callback: (key: string, val: T) => void): void;
        /**
         * Execute a callback on every occurrence of the dictionary until it returns a valid TRes object.
         * If the callback returns null or undefined the method will iterate to the next key/value pair
         * Note that you can remove any element in this dictionary in the callback implementation
         * @param callback the callback to execute, if it return a valid T instanced object the enumeration will stop and the object will be returned
         */
        first<TRes>(callback: (key: string, val: T) => TRes): TRes;
        private _count;
        private _data;
    }
}

declare module BABYLON {
    class Tags {
        static EnableFor(obj: any): void;
        static DisableFor(obj: any): void;
        static HasTags(obj: any): boolean;
        static GetTags(obj: any, asString?: boolean): any;
        static AddTagsTo(obj: any, tagsString: string): void;
        static _AddTagTo(obj: any, tag: string): void;
        static RemoveTagsFrom(obj: any, tagsString: string): void;
        static _RemoveTagFrom(obj: any, tag: string): void;
        static MatchesQuery(obj: any, tagsQuery: string): boolean;
    }
}

declare module BABYLON.Internals {
    interface DDSInfo {
        width: number;
        height: number;
        mipmapCount: number;
        isFourCC: boolean;
        isRGB: boolean;
        isLuminance: boolean;
        isCube: boolean;
    }
    class DDSTools {
        static GetDDSInfo(arrayBuffer: any): DDSInfo;
        private static GetRGBAArrayBuffer(width, height, dataOffset, dataLength, arrayBuffer);
        private static GetRGBArrayBuffer(width, height, dataOffset, dataLength, arrayBuffer);
        private static GetLuminanceArrayBuffer(width, height, dataOffset, dataLength, arrayBuffer);
        static UploadDDSLevels(gl: WebGLRenderingContext, ext: any, arrayBuffer: any, info: DDSInfo, loadMipmaps: boolean, faces: number): void;
    }
}

declare module BABYLON.Internals {
    class TGATools {
        private static _TYPE_NO_DATA;
        private static _TYPE_INDEXED;
        private static _TYPE_RGB;
        private static _TYPE_GREY;
        private static _TYPE_RLE_INDEXED;
        private static _TYPE_RLE_RGB;
        private static _TYPE_RLE_GREY;
        private static _ORIGIN_MASK;
        private static _ORIGIN_SHIFT;
        private static _ORIGIN_BL;
        private static _ORIGIN_BR;
        private static _ORIGIN_UL;
        private static _ORIGIN_UR;
        static GetTGAHeader(data: Uint8Array): any;
        static UploadContent(gl: WebGLRenderingContext, data: Uint8Array): void;
        static _getImageData8bits(header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number): Uint8Array;
        static _getImageData16bits(header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number): Uint8Array;
        static _getImageData24bits(header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number): Uint8Array;
        static _getImageData32bits(header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number): Uint8Array;
        static _getImageDataGrey8bits(header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number): Uint8Array;
        static _getImageDataGrey16bits(header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number): Uint8Array;
    }
}

declare module BABYLON {
    interface IAnimatable {
        animations: Array<Animation>;
    }
    class Tools {
        static BaseUrl: string;
        static CorsBehavior: any;
        static UseFallbackTexture: boolean;
        static Instantiate(className: string): any;
        static SetImmediate(action: () => void): void;
        static IsExponentOfTwo(value: number): boolean;
        static GetExponentOfTwo(value: number, max: number): number;
        static GetFilename(path: string): string;
        static GetDOMTextContent(element: HTMLElement): string;
        static ToDegrees(angle: number): number;
        static ToRadians(angle: number): number;
        static EncodeArrayBufferTobase64(buffer: ArrayBuffer): string;
        static ExtractMinAndMaxIndexed(positions: number[] | Float32Array, indices: number[] | Int32Array, indexStart: number, indexCount: number, bias?: Vector2): {
            minimum: Vector3;
            maximum: Vector3;
        };
        static ExtractMinAndMax(positions: number[] | Float32Array, start: number, count: number, bias?: Vector2, stride?: number): {
            minimum: Vector3;
            maximum: Vector3;
        };
        static Vector2ArrayFeeder(array: Array<Vector2> | Float32Array): (i) => Vector2;
        static ExtractMinAndMaxVector2(feeder: (index: number) => Vector2, bias?: Vector2): {
            minimum: Vector2;
            maximum: Vector2;
        };
        static MakeArray(obj: any, allowsNullUndefined?: boolean): Array<any>;
        static GetPointerPrefix(): string;
        static QueueNewFrame(func: any): void;
        static RequestFullscreen(element: any, options?: any): void;
        static ExitFullscreen(): void;
        static CleanUrl(url: string): string;
        static LoadImage(url: any, onload: any, onerror: any, database: any): HTMLImageElement;
        static LoadFile(url: string, callback: (data: any) => void, progressCallBack?: () => void, database?: any, useArrayBuffer?: boolean, onError?: () => void): void;
        static ReadFileAsDataURL(fileToLoad: any, callback: any, progressCallback: any): void;
        static ReadFile(fileToLoad: any, callback: any, progressCallBack: any, useArrayBuffer?: boolean): void;
        static FileAsURL(content: string): string;
        static Format(value: number, decimals?: number): string;
        static CheckExtends(v: Vector3, min: Vector3, max: Vector3): void;
        static DeepCopy(source: any, destination: any, doNotCopyList?: string[], mustCopyList?: string[]): void;
        static IsEmpty(obj: any): boolean;
        static RegisterTopRootEvents(events: {
            name: string;
            handler: EventListener;
        }[]): void;
        static UnregisterTopRootEvents(events: {
            name: string;
            handler: EventListener;
        }[]): void;
        static DumpFramebuffer(width: number, height: number, engine: Engine, successCallback?: (data: string) => void): void;
        static CreateScreenshot(engine: Engine, camera: Camera, size: any, successCallback?: (data: string) => void): void;
        static ValidateXHRData(xhr: XMLHttpRequest, dataType?: number): boolean;
        private static _NoneLogLevel;
        private static _MessageLogLevel;
        private static _WarningLogLevel;
        private static _ErrorLogLevel;
        private static _LogCache;
        static errorsCount: number;
        static OnNewCacheEntry: (entry: string) => void;
        static NoneLogLevel: number;
        static MessageLogLevel: number;
        static WarningLogLevel: number;
        static ErrorLogLevel: number;
        static AllLogLevel: number;
        private static _AddLogEntry(entry);
        private static _FormatMessage(message);
        static Log: (message: string) => void;
        private static _LogDisabled(message);
        private static _LogEnabled(message);
        static Warn: (message: string) => void;
        private static _WarnDisabled(message);
        private static _WarnEnabled(message);
        static Error: (message: string) => void;
        private static _ErrorDisabled(message);
        private static _ErrorEnabled(message);
        static LogCache: string;
        static ClearLogCache(): void;
        static LogLevels: number;
        private static _PerformanceNoneLogLevel;
        private static _PerformanceUserMarkLogLevel;
        private static _PerformanceConsoleLogLevel;
        private static _performance;
        static PerformanceNoneLogLevel: number;
        static PerformanceUserMarkLogLevel: number;
        static PerformanceConsoleLogLevel: number;
        static PerformanceLogLevel: number;
        static _StartPerformanceCounterDisabled(counterName: string, condition?: boolean): void;
        static _EndPerformanceCounterDisabled(counterName: string, condition?: boolean): void;
        static _StartUserMark(counterName: string, condition?: boolean): void;
        static _EndUserMark(counterName: string, condition?: boolean): void;
        static _StartPerformanceConsole(counterName: string, condition?: boolean): void;
        static _EndPerformanceConsole(counterName: string, condition?: boolean): void;
        static StartPerformanceCounter: (counterName: string, condition?: boolean) => void;
        static EndPerformanceCounter: (counterName: string, condition?: boolean) => void;
        static Now: number;
        /**
         * This method will return the name of the class used to create the instance of the given object.
         * It will works only on Javascript basic data types (number, string, ...) and instance of class declared with the @className decorator.
         * @param object the object to get the class name from
         * @return the name of the class, will be "object" for a custom data type not using the @className decorator
         */
        static getClassName(object: any, isType?: boolean): string;
        static first<T>(array: Array<T>, predicate: (item) => boolean): T;
        /**
         * This method can be used with hashCodeFromStream when your input is an array of values that are either: number, string, boolean or custom type implementing the getHashCode():number method.
         * @param array
         */
        static arrayOrStringFeeder(array: any): (i) => number;
        /**
         * Compute the hashCode of a stream of number
         * To compute the HashCode on a string or an Array of data types implementing the getHashCode() method, use the arrayOrStringFeeder method.
         * @param feeder a callback that will be called until it returns null, each valid returned values will be used to compute the hash code.
         * @return the hash code computed
         */
        static hashCodeFromStream(feeder: (index: number) => number): number;
    }
    /**
     * Use this className as a decorator on a given class definition to add it a name.
     * You can then use the Tools.getClassName(obj) on an instance to retrieve its class name.
     * This method is the only way to get it done in all cases, even if the .js file declaring the class is minified
     * @param name
     */
    function className(name: string): (target: Object) => void;
    /**
    * An implementation of a loop for asynchronous functions.
    */
    class AsyncLoop {
        iterations: number;
        private _fn;
        private _successCallback;
        index: number;
        private _done;
        /**
         * Constroctor.
         * @param iterations the number of iterations.
         * @param _fn the function to run each iteration
         * @param _successCallback the callback that will be called upon succesful execution
         * @param offset starting offset.
         */
        constructor(iterations: number, _fn: (asyncLoop: AsyncLoop) => void, _successCallback: () => void, offset?: number);
        /**
         * Execute the next iteration. Must be called after the last iteration was finished.
         */
        executeNext(): void;
        /**
         * Break the loop and run the success callback.
         */
        breakLoop(): void;
        /**
         * Helper function
         */
        static Run(iterations: number, _fn: (asyncLoop: AsyncLoop) => void, _successCallback: () => void, offset?: number): AsyncLoop;
        /**
         * A for-loop that will run a given number of iterations synchronous and the rest async.
         * @param iterations total number of iterations
         * @param syncedIterations number of synchronous iterations in each async iteration.
         * @param fn the function to call each iteration.
         * @param callback a success call back that will be called when iterating stops.
         * @param breakFunction a break condition (optional)
         * @param timeout timeout settings for the setTimeout function. default - 0.
         * @constructor
         */
        static SyncAsyncForLoop(iterations: number, syncedIterations: number, fn: (iteration: number) => void, callback: () => void, breakFunction?: () => boolean, timeout?: number): void;
    }
}

declare module BABYLON {
    enum JoystickAxis {
        X = 0,
        Y = 1,
        Z = 2,
    }
    class VirtualJoystick {
        reverseLeftRight: boolean;
        reverseUpDown: boolean;
        deltaPosition: Vector3;
        pressed: boolean;
        private static _globalJoystickIndex;
        private static vjCanvas;
        private static vjCanvasContext;
        private static vjCanvasWidth;
        private static vjCanvasHeight;
        private static halfWidth;
        private static halfHeight;
        private _action;
        private _axisTargetedByLeftAndRight;
        private _axisTargetedByUpAndDown;
        private _joystickSensibility;
        private _inversedSensibility;
        private _rotationSpeed;
        private _inverseRotationSpeed;
        private _rotateOnAxisRelativeToMesh;
        private _joystickPointerID;
        private _joystickColor;
        private _joystickPointerPos;
        private _joystickPreviousPointerPos;
        private _joystickPointerStartPos;
        private _deltaJoystickVector;
        private _leftJoystick;
        private _joystickIndex;
        private _touches;
        private _onPointerDownHandlerRef;
        private _onPointerMoveHandlerRef;
        private _onPointerUpHandlerRef;
        private _onPointerOutHandlerRef;
        private _onResize;
        constructor(leftJoystick?: boolean);
        setJoystickSensibility(newJoystickSensibility: number): void;
        private _onPointerDown(e);
        private _onPointerMove(e);
        private _onPointerUp(e);
        /**
        * Change the color of the virtual joystick
        * @param newColor a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000")
        */
        setJoystickColor(newColor: string): void;
        setActionOnTouch(action: () => any): void;
        setAxisForLeftRight(axis: JoystickAxis): void;
        setAxisForUpDown(axis: JoystickAxis): void;
        private _clearCanvas();
        private _drawVirtualJoystick();
        releaseCanvas(): void;
    }
}

declare module BABYLON {
    class ArcRotateCameraGamepadInput implements ICameraInput<ArcRotateCamera> {
        camera: ArcRotateCamera;
        gamepad: Gamepad;
        private _gamepads;
        gamepadRotationSensibility: number;
        gamepadMoveSensibility: number;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        checkInputs(): void;
        private _onNewGameConnected(gamepad);
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class ArcRotateCameraKeyboardMoveInput implements ICameraInput<ArcRotateCamera> {
        camera: ArcRotateCamera;
        private _keys;
        private _onKeyDown;
        private _onKeyUp;
        private _onLostFocus;
        keysUp: number[];
        keysDown: number[];
        keysLeft: number[];
        keysRight: number[];
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        checkInputs(): void;
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class ArcRotateCameraMouseWheelInput implements ICameraInput<ArcRotateCamera> {
        camera: ArcRotateCamera;
        private _wheel;
        private _observer;
        wheelPrecision: number;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class ArcRotateCameraPointersInput implements ICameraInput<ArcRotateCamera> {
        camera: ArcRotateCamera;
        angularSensibilityX: number;
        angularSensibilityY: number;
        pinchPrecision: number;
        panningSensibility: number;
        private _isRightClick;
        private _isCtrlPushed;
        pinchInwards: boolean;
        private _pointerInput;
        private _observer;
        private _onKeyDown;
        private _onKeyUp;
        private _onMouseMove;
        private _onGestureStart;
        private _onGesture;
        private _MSGestureHandler;
        private _onLostFocus;
        private _onContextMenu;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class ArcRotateCameraVRDeviceOrientationInput implements ICameraInput<ArcRotateCamera> {
        camera: ArcRotateCamera;
        alphaCorrection: number;
        betaCorrection: number;
        gammaCorrection: number;
        private _alpha;
        private _beta;
        private _gamma;
        private _dirty;
        private _offsetOrientation;
        private _deviceOrientationHandler;
        constructor();
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        _onOrientationEvent(evt: DeviceOrientationEvent): void;
        checkInputs(): void;
        detachControl(element: HTMLElement): void;
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class FreeCameraDeviceOrientationInput implements ICameraInput<FreeCamera> {
        private _camera;
        private _screenOrientationAngle;
        private _constantTranform;
        private _screenQuaternion;
        private _alpha;
        private _beta;
        private _gamma;
        constructor();
        camera: FreeCamera;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        private _orientationChanged;
        private _deviceOrientation;
        detachControl(element: HTMLElement): void;
        checkInputs(): void;
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class FreeCameraGamepadInput implements ICameraInput<FreeCamera> {
        camera: FreeCamera;
        gamepad: Gamepad;
        private _gamepads;
        gamepadAngularSensibility: number;
        gamepadMoveSensibility: number;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        checkInputs(): void;
        private _onNewGameConnected(gamepad);
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class FreeCameraKeyboardMoveInput implements ICameraInput<FreeCamera> {
        camera: FreeCamera;
        private _keys;
        private _onKeyDown;
        private _onKeyUp;
        keysUp: number[];
        keysDown: number[];
        keysLeft: number[];
        keysRight: number[];
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        checkInputs(): void;
        getTypeName(): string;
        _onLostFocus(e: FocusEvent): void;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class FreeCameraMouseInput implements ICameraInput<FreeCamera> {
        touchEnabled: boolean;
        camera: FreeCamera;
        angularSensibility: number;
        private _pointerInput;
        private _observer;
        private previousPosition;
        constructor(touchEnabled?: boolean);
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class FreeCameraTouchInput implements ICameraInput<FreeCamera> {
        camera: FreeCamera;
        private _offsetX;
        private _offsetY;
        private _pointerCount;
        private _pointerPressed;
        private _pointerInput;
        private _observer;
        private _onLostFocus;
        touchAngularSensibility: number;
        touchMoveSensibility: number;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        checkInputs(): void;
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class FreeCameraVirtualJoystickInput implements ICameraInput<FreeCamera> {
        camera: FreeCamera;
        private _leftjoystick;
        private _rightjoystick;
        getLeftJoystick(): VirtualJoystick;
        getRightJoystick(): VirtualJoystick;
        checkInputs(): void;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class FreeCameraVRDeviceOrientationInput implements ICameraInput<FreeCamera> {
        camera: FreeCamera;
        alphaCorrection: number;
        betaCorrection: number;
        gammaCorrection: number;
        private _alpha;
        private _beta;
        private _gamma;
        private _dirty;
        private _offsetOrientation;
        private _deviceOrientationHandler;
        constructor();
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        _onOrientationEvent(evt: DeviceOrientationEvent): void;
        checkInputs(): void;
        detachControl(element: HTMLElement): void;
        getTypeName(): string;
        getSimpleName(): string;
    }
}

declare module BABYLON {
    class VRCameraMetrics {
        hResolution: number;
        vResolution: number;
        hScreenSize: number;
        vScreenSize: number;
        vScreenCenter: number;
        eyeToScreenDistance: number;
        lensSeparationDistance: number;
        interpupillaryDistance: number;
        distortionK: number[];
        chromaAbCorrection: number[];
        postProcessScaleFactor: number;
        lensCenterOffset: number;
        compensateDistortion: boolean;
        aspectRatio: number;
        aspectRatioFov: number;
        leftHMatrix: Matrix;
        rightHMatrix: Matrix;
        leftPreViewMatrix: Matrix;
        rightPreViewMatrix: Matrix;
        static GetDefault(): VRCameraMetrics;
    }
}

declare module BABYLON {
    class VRDeviceOrientationFreeCamera extends FreeCamera {
        constructor(name: string, position: Vector3, scene: Scene, compensateDistortion?: boolean);
        getTypeName(): string;
    }
    class VRDeviceOrientationArcRotateCamera extends ArcRotateCamera {
        constructor(name: string, alpha: number, beta: number, radius: number, target: Vector3, scene: Scene, compensateDistortion?: boolean);
        getTypeName(): string;
    }
}

declare var HMDVRDevice: any;
declare var PositionSensorVRDevice: any;
declare module BABYLON {
    class WebVRFreeCamera extends FreeCamera {
        _hmdDevice: any;
        _sensorDevice: any;
        private _cacheState;
        _vrEnabled: boolean;
        constructor(name: string, position: Vector3, scene: Scene, compensateDistortion?: boolean);
        private _getWebVRDevices(devices);
        _checkInputs(): void;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        requestVRFullscreen(requestPointerlock: boolean): void;
        getTypeName(): string;
    }
}

declare module BABYLON {
    interface IOctreeContainer<T> {
        blocks: Array<OctreeBlock<T>>;
    }
    class Octree<T> {
        maxDepth: number;
        blocks: Array<OctreeBlock<T>>;
        dynamicContent: T[];
        private _maxBlockCapacity;
        private _selectionContent;
        private _creationFunc;
        constructor(creationFunc: (entry: T, block: OctreeBlock<T>) => void, maxBlockCapacity?: number, maxDepth?: number);
        update(worldMin: Vector3, worldMax: Vector3, entries: T[]): void;
        addMesh(entry: T): void;
        select(frustumPlanes: Plane[], allowDuplicate?: boolean): SmartArray<T>;
        intersects(sphereCenter: Vector3, sphereRadius: number, allowDuplicate?: boolean): SmartArray<T>;
        intersectsRay(ray: Ray): SmartArray<T>;
        static _CreateBlocks<T>(worldMin: Vector3, worldMax: Vector3, entries: T[], maxBlockCapacity: number, currentDepth: number, maxDepth: number, target: IOctreeContainer<T>, creationFunc: (entry: T, block: OctreeBlock<T>) => void): void;
        static CreationFuncForMeshes: (entry: AbstractMesh, block: OctreeBlock<AbstractMesh>) => void;
        static CreationFuncForSubMeshes: (entry: SubMesh, block: OctreeBlock<SubMesh>) => void;
    }
}

declare module BABYLON {
    class OctreeBlock<T> {
        entries: T[];
        blocks: Array<OctreeBlock<T>>;
        private _depth;
        private _maxDepth;
        private _capacity;
        private _minPoint;
        private _maxPoint;
        private _boundingVectors;
        private _creationFunc;
        constructor(minPoint: Vector3, maxPoint: Vector3, capacity: number, depth: number, maxDepth: number, creationFunc: (entry: T, block: OctreeBlock<T>) => void);
        capacity: number;
        minPoint: Vector3;
        maxPoint: Vector3;
        addEntry(entry: T): void;
        addEntries(entries: T[]): void;
        select(frustumPlanes: Plane[], selection: SmartArray<T>, allowDuplicate?: boolean): void;
        intersects(sphereCenter: Vector3, sphereRadius: number, selection: SmartArray<T>, allowDuplicate?: boolean): void;
        intersectsRay(ray: Ray, selection: SmartArray<T>): void;
        createInnerBlocks(): void;
    }
}

declare module BABYLON {
    class ShadowGenerator {
        private static _FILTER_NONE;
        private static _FILTER_VARIANCESHADOWMAP;
        private static _FILTER_POISSONSAMPLING;
        private static _FILTER_BLURVARIANCESHADOWMAP;
        static FILTER_NONE: number;
        static FILTER_VARIANCESHADOWMAP: number;
        static FILTER_POISSONSAMPLING: number;
        static FILTER_BLURVARIANCESHADOWMAP: number;
        private _filter;
        blurScale: number;
        private _blurBoxOffset;
        private _bias;
        private _lightDirection;
        forceBackFacesOnly: boolean;
        bias: number;
        blurBoxOffset: number;
        filter: number;
        useVarianceShadowMap: boolean;
        usePoissonSampling: boolean;
        useBlurVarianceShadowMap: boolean;
        private _light;
        private _scene;
        private _shadowMap;
        private _shadowMap2;
        private _darkness;
        private _transparencyShadow;
        private _effect;
        private _viewMatrix;
        private _projectionMatrix;
        private _transformMatrix;
        private _worldViewProjection;
        private _cachedPosition;
        private _cachedDirection;
        private _cachedDefines;
        private _currentRenderID;
        private _downSamplePostprocess;
        private _boxBlurPostprocess;
        private _mapSize;
        private _currentFaceIndex;
        private _currentFaceIndexCache;
        constructor(mapSize: number, light: IShadowLight);
        isReady(subMesh: SubMesh, useInstances: boolean): boolean;
        getShadowMap(): RenderTargetTexture;
        getShadowMapForRendering(): RenderTargetTexture;
        getLight(): IShadowLight;
        getTransformMatrix(): Matrix;
        getDarkness(): number;
        setDarkness(darkness: number): void;
        setTransparencyShadow(hasShadow: boolean): void;
        private _packHalf(depth);
        dispose(): void;
        serialize(): any;
        static Parse(parsedShadowGenerator: any, scene: Scene): ShadowGenerator;
    }
}

declare module BABYLON.Internals {
}

declare module BABYLON {
    class BaseTexture {
        name: string;
        hasAlpha: boolean;
        getAlphaFromRGB: boolean;
        level: number;
        coordinatesIndex: number;
        coordinatesMode: number;
        wrapU: number;
        wrapV: number;
        anisotropicFilteringLevel: number;
        isCube: boolean;
        isRenderTarget: boolean;
        toString(): string;
        animations: Animation[];
        /**
        * An event triggered when the texture is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<BaseTexture>;
        private _onDisposeObserver;
        onDispose: () => void;
        delayLoadState: number;
        _cachedAnisotropicFilteringLevel: number;
        private _scene;
        _texture: WebGLTexture;
        constructor(scene: Scene);
        getScene(): Scene;
        getTextureMatrix(): Matrix;
        getReflectionTextureMatrix(): Matrix;
        getInternalTexture(): WebGLTexture;
        isReady(): boolean;
        getSize(): ISize;
        getBaseSize(): ISize;
        scale(ratio: number): void;
        canRescale: boolean;
        _removeFromCache(url: string, noMipmap: boolean): void;
        _getFromCache(url: string, noMipmap: boolean, sampling?: number): WebGLTexture;
        delayLoad(): void;
        clone(): BaseTexture;
        releaseInternalTexture(): void;
        dispose(): void;
        serialize(): any;
    }
}

declare module BABYLON {
    /**
     * This represents a color grading texture. This acts as a lookup table LUT, useful during post process
     * It can help converting any input color in a desired output one. This can then be used to create effects
     * from sepia, black and white to sixties or futuristic rendering...
     *
     * The only supported format is currently 3dl.
     * More information on LUT: https://en.wikipedia.org/wiki/3D_lookup_table/
     */
    class ColorGradingTexture extends BaseTexture {
        /**
         * The current internal texture size.
         */
        private _size;
        /**
         * The current texture matrix. (will always be identity in color grading texture)
         */
        private _textureMatrix;
        /**
         * The texture URL.
         */
        url: string;
        /**
         * Empty line regex stored for GC.
         */
        private static _noneEmptyLineRegex;
        /**
         * Instantiates a ColorGradingTexture from the following parameters.
         *
         * @param url The location of the color gradind data (currently only supporting 3dl)
         * @param scene The scene the texture will be used in
         */
        constructor(url: string, scene: Scene);
        /**
         * Returns the texture matrix used in most of the material.
         * This is not used in color grading but keep for troubleshooting purpose (easily swap diffuse by colorgrading to look in).
         */
        getTextureMatrix(): Matrix;
        /**
         * Occurs when the file being loaded is a .3dl LUT file.
         */
        private load3dlTexture();
        /**
         * Starts the loading process of the texture.
         */
        private loadTexture();
        /**
         * Clones the color gradind texture.
         */
        clone(): ColorGradingTexture;
        /**
         * Called during delayed load for textures.
         */
        delayLoad(): void;
        /**
         * Parses a color grading texture serialized by Babylon.
         * @param parsedTexture The texture information being parsedTexture
         * @param scene The scene to load the texture in
         * @param rootUrl The root url of the data assets to load
         * @return A color gradind texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): ColorGradingTexture;
        /**
         * Serializes the LUT texture to json format.
         */
        serialize(): any;
    }
}

declare module BABYLON {
    class CubeTexture extends BaseTexture {
        url: string;
        coordinatesMode: number;
        private _noMipmap;
        private _files;
        private _extensions;
        private _textureMatrix;
        static CreateFromImages(files: string[], scene: Scene, noMipmap?: boolean): CubeTexture;
        constructor(rootUrl: string, scene: Scene, extensions?: string[], noMipmap?: boolean, files?: string[]);
        delayLoad(): void;
        getReflectionTextureMatrix(): Matrix;
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): CubeTexture;
        clone(): CubeTexture;
    }
}

declare module BABYLON {
    class DynamicTexture extends Texture {
        private _generateMipMaps;
        private _canvas;
        private _context;
        constructor(name: string, options: any, scene: Scene, generateMipMaps: boolean, samplingMode?: number);
        canRescale: boolean;
        scale(ratio: number): void;
        getContext(): CanvasRenderingContext2D;
        clear(): void;
        update(invertY?: boolean): void;
        drawText(text: string, x: number, y: number, font: string, color: string, clearColor: string, invertY?: boolean, update?: boolean): void;
        clone(): DynamicTexture;
    }
}

declare module BABYLON {
    /**
     * This class given information about a given character.
     */
    class CharInfo {
        /**
         * The normalized ([0;1]) top/left position of the character in the texture
         */
        topLeftUV: Vector2;
        /**
         * The normalized ([0;1]) right/bottom position of the character in the texture
         */
        bottomRightUV: Vector2;
        charWidth: number;
    }
    class FontTexture extends Texture {
        private _canvas;
        private _context;
        private _lineHeight;
        private _offset;
        private _currentFreePosition;
        private _charInfos;
        private _curCharCount;
        private _lastUpdateCharCount;
        private _spaceWidth;
        private _usedCounter;
        spaceWidth: number;
        lineHeight: number;
        static GetCachedFontTexture(scene: Scene, fontName: string): FontTexture;
        static ReleaseCachedFontTexture(scene: Scene, fontName: string): void;
        /**
         * Create a new instance of the FontTexture class
         * @param name the name of the texture
         * @param font the font to use, use the W3C CSS notation
         * @param scene the scene that owns the texture
         * @param maxCharCount the approximative maximum count of characters that could fit in the texture. This is an approximation because most of the fonts are proportional (each char has its own Width). The 'W' character's width is used to compute the size of the texture based on the given maxCharCount
         * @param samplingMode the texture sampling mode
         */
        constructor(name: string, font: string, scene: Scene, maxCharCount?: number, samplingMode?: number);
        /**
         * Make sure the given char is present in the font map.
         * @param char the character to get or add
         * @return the CharInfo instance corresponding to the given character
         */
        getChar(char: string): CharInfo;
        measureText(text: string, tabulationSize?: number): Size;
        private getFontHeight(font);
        canRescale: boolean;
        getContext(): CanvasRenderingContext2D;
        /**
         * Call this method when you've call getChar() at least one time, this will update the texture if needed.
         * Don't be afraid to call it, if no new character was added, this method simply does nothing.
         */
        update(): void;
        clone(): FontTexture;
    }
}

declare module BABYLON {
    /**
     * This represents a texture coming from an HDR input.
     *
     * The only supported format is currently panorama picture stored in RGBE format.
     * Example of such files can be found on HDRLib: http://hdrlib.com/
     */
    class HDRCubeTexture extends BaseTexture {
        private static _facesMapping;
        private _useInGammaSpace;
        private _generateHarmonics;
        private _noMipmap;
        private _extensions;
        private _textureMatrix;
        private _size;
        private _usePMREMGenerator;
        private _isBABYLONPreprocessed;
        /**
         * The texture URL.
         */
        url: string;
        /**
         * The texture coordinates mode. As this texture is stored in a cube format, please modify carefully.
         */
        coordinatesMode: number;
        /**
         * The spherical polynomial data extracted from the texture.
         */
        sphericalPolynomial: SphericalPolynomial;
        /**
         * Specifies wether the texture has been generated through the PMREMGenerator tool.
         * This is usefull at run time to apply the good shader.
         */
        isPMREM: boolean;
        /**
         * Instantiates an HDRTexture from the following parameters.
         *
         * @param url The location of the HDR raw data (Panorama stored in RGBE format)
         * @param scene The scene the texture will be used in
         * @param size The cubemap desired size (the more it increases the longer the generation will be) If the size is omitted this implies you are using a preprocessed cubemap.
         * @param noMipmap Forces to not generate the mipmap if true
         * @param generateHarmonics Specifies wether you want to extract the polynomial harmonics during the generation process
         * @param useInGammaSpace Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)
         * @param usePMREMGenerator Specifies wether or not to generate the CubeMap through CubeMapGen to avoid seams issue at run time.
         */
        constructor(url: string, scene: Scene, size?: number, noMipmap?: boolean, generateHarmonics?: boolean, useInGammaSpace?: boolean, usePMREMGenerator?: boolean);
        /**
         * Occurs when the file is a preprocessed .babylon.hdr file.
         */
        private loadBabylonTexture();
        /**
         * Occurs when the file is raw .hdr file.
         */
        private loadHDRTexture();
        /**
         * Starts the loading process of the texture.
         */
        private loadTexture();
        clone(): HDRCubeTexture;
        delayLoad(): void;
        getReflectionTextureMatrix(): Matrix;
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): HDRCubeTexture;
        serialize(): any;
        /**
         * Saves as a file the data contained in the texture in a binary format.
         * This can be used to prevent the long loading tie associated with creating the seamless texture as well
         * as the spherical used in the lighting.
         * @param url The HDR file url.
         * @param size The size of the texture data to generate (one of the cubemap face desired width).
         * @param onError Method called if any error happens during download.
         * @return The packed binary data.
         */
        static generateBabylonHDROnDisk(url: string, size: number, onError?: (() => void)): void;
        /**
         * Serializes the data contained in the texture in a binary format.
         * This can be used to prevent the long loading tie associated with creating the seamless texture as well
         * as the spherical used in the lighting.
         * @param url The HDR file url.
         * @param size The size of the texture data to generate (one of the cubemap face desired width).
         * @param onError Method called if any error happens during download.
         * @return The packed binary data.
         */
        static generateBabylonHDR(url: string, size: number, callback: ((ArrayBuffer) => void), onError?: (() => void)): void;
    }
}

declare module BABYLON {
    class MapTexture extends Texture {
        private _rectPackingMap;
        private _size;
        private _replacedViewport;
        constructor(name: string, scene: Scene, size: ISize, samplingMode?: number);
        /**
         * Allocate a rectangle of a given size in the texture map
         * @param size the size of the rectangle to allocation
         * @return the PackedRect instance corresponding to the allocated rect or null is there was not enough space to allocate it.
         */
        allocateRect(size: Size): PackedRect;
        /**
         * Free a given rectangle from the texture map
         * @param rectInfo the instance corresponding to the rect to free.
         */
        freeRect(rectInfo: PackedRect): void;
        /**
         * Return the available space in the range of [O;1]. 0 being not space left at all, 1 being an empty texture map.
         * This is the cumulated space, not the biggest available surface. Due to fragmentation you may not allocate a rect corresponding to this surface.
         * @returns {}
         */
        freeSpace: number;
        /**
         * Bind the texture to the rendering engine to render in the zone of a given rectangle.
         * Use this method when you want to render into the texture map with a clipspace set to the location and size of the given rect.
         * Don't forget to call unbindTexture when you're done rendering
         * @param rect the zone to render to
         * @param clear true to clear the portion's color/depth data
         */
        bindTextureForRect(rect: PackedRect, clear: boolean): void;
        /**
         * Bind the texture to the rendering engine to render in the zone of the given size at the given position.
         * Use this method when you want to render into the texture map with a clipspace set to the location and size of the given rect.
         * Don't forget to call unbindTexture when you're done rendering
         * @param pos the position into the texture
         * @param size the portion to fit the clip space to
         * @param clear true to clear the portion's color/depth data
         */
        bindTextureForPosSize(pos: Vector2, size: Size, clear: boolean): void;
        /**
         * Unbind the texture map from the rendering engine.
         * Call this method when you're done rendering. A previous call to bindTextureForRect has to be made.
         * @param dumpForDebug if set to true the content of the texture map will be dumped to a picture file that will be sent to the internet browser.
         */
        unbindTexture(dumpForDebug?: boolean): void;
        canRescale: boolean;
        clone(): MapTexture;
    }
}

declare module BABYLON {
    class MirrorTexture extends RenderTargetTexture {
        mirrorPlane: Plane;
        private _transformMatrix;
        private _mirrorMatrix;
        private _savedViewMatrix;
        constructor(name: string, size: number, scene: Scene, generateMipMaps?: boolean);
        clone(): MirrorTexture;
        serialize(): any;
    }
}

declare module BABYLON {
    class RawTexture extends Texture {
        format: number;
        constructor(data: ArrayBufferView, width: number, height: number, format: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number);
        update(data: ArrayBufferView): void;
        static CreateLuminanceTexture(data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number): RawTexture;
        static CreateLuminanceAlphaTexture(data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number): RawTexture;
        static CreateAlphaTexture(data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number): RawTexture;
        static CreateRGBTexture(data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number): RawTexture;
        static CreateRGBATexture(data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number): RawTexture;
    }
}

declare module BABYLON {
    /**
    * Creates a refraction texture used by refraction channel of the standard material.
    * @param name the texture name
    * @param size size of the underlying texture
    * @param scene root scene
    */
    class RefractionTexture extends RenderTargetTexture {
        refractionPlane: Plane;
        depth: number;
        constructor(name: string, size: number, scene: Scene, generateMipMaps?: boolean);
        clone(): RefractionTexture;
        serialize(): any;
    }
}

declare module BABYLON {
    class RenderTargetTexture extends Texture {
        isCube: boolean;
        static _REFRESHRATE_RENDER_ONCE: number;
        static _REFRESHRATE_RENDER_ONEVERYFRAME: number;
        static _REFRESHRATE_RENDER_ONEVERYTWOFRAMES: number;
        static REFRESHRATE_RENDER_ONCE: number;
        static REFRESHRATE_RENDER_ONEVERYFRAME: number;
        static REFRESHRATE_RENDER_ONEVERYTWOFRAMES: number;
        /**
        * Use this predicate to dynamically define the list of mesh you want to render.
        * If set, the renderList property will be overwritten.
        */
        renderListPredicate: (AbstractMesh) => boolean;
        /**
        * Use this list to define the list of mesh you want to render.
        */
        renderList: AbstractMesh[];
        renderParticles: boolean;
        renderSprites: boolean;
        coordinatesMode: number;
        activeCamera: Camera;
        customRenderFunction: (opaqueSubMeshes: SmartArray<SubMesh>, transparentSubMeshes: SmartArray<SubMesh>, alphaTestSubMeshes: SmartArray<SubMesh>, beforeTransparents?: () => void) => void;
        useCameraPostProcesses: boolean;
        /**
        * An event triggered when the texture is unbind.
        * @type {BABYLON.Observable}
        */
        onAfterUnbindObservable: Observable<RenderTargetTexture>;
        private _onAfterUnbindObserver;
        onAfterUnbind: () => void;
        /**
        * An event triggered before rendering the texture
        * @type {BABYLON.Observable}
        */
        onBeforeRenderObservable: Observable<number>;
        private _onBeforeRenderObserver;
        onBeforeRender: (faceIndex: number) => void;
        /**
        * An event triggered after rendering the texture
        * @type {BABYLON.Observable}
        */
        onAfterRenderObservable: Observable<number>;
        private _onAfterRenderObserver;
        onAfterRender: (faceIndex: number) => void;
        /**
        * An event triggered after the texture clear
        * @type {BABYLON.Observable}
        */
        onClearObservable: Observable<Engine>;
        private _onClearObserver;
        onClear: (Engine: Engine) => void;
        private _size;
        _generateMipMaps: boolean;
        private _renderingManager;
        _waitingRenderList: string[];
        private _doNotChangeAspectRatio;
        private _currentRefreshId;
        private _refreshRate;
        private _textureMatrix;
        constructor(name: string, size: any, scene: Scene, generateMipMaps?: boolean, doNotChangeAspectRatio?: boolean, type?: number, isCube?: boolean, samplingMode?: number);
        resetRefreshCounter(): void;
        refreshRate: number;
        _shouldRender(): boolean;
        isReady(): boolean;
        getRenderSize(): number;
        canRescale: boolean;
        scale(ratio: number): void;
        getReflectionTextureMatrix(): Matrix;
        resize(size: any, generateMipMaps?: boolean): void;
        render(useCameraPostProcess?: boolean, dumpForDebug?: boolean): void;
        renderToTarget(faceIndex: number, currentRenderList: AbstractMesh[], useCameraPostProcess: boolean, dumpForDebug: boolean): void;
        clone(): RenderTargetTexture;
        serialize(): any;
    }
}

declare module BABYLON {
    class Texture extends BaseTexture {
        static NEAREST_SAMPLINGMODE: number;
        static BILINEAR_SAMPLINGMODE: number;
        static TRILINEAR_SAMPLINGMODE: number;
        static EXPLICIT_MODE: number;
        static SPHERICAL_MODE: number;
        static PLANAR_MODE: number;
        static CUBIC_MODE: number;
        static PROJECTION_MODE: number;
        static SKYBOX_MODE: number;
        static INVCUBIC_MODE: number;
        static EQUIRECTANGULAR_MODE: number;
        static FIXED_EQUIRECTANGULAR_MODE: number;
        static CLAMP_ADDRESSMODE: number;
        static WRAP_ADDRESSMODE: number;
        static MIRROR_ADDRESSMODE: number;
        url: string;
        uOffset: number;
        vOffset: number;
        uScale: number;
        vScale: number;
        uAng: number;
        vAng: number;
        wAng: number;
        noMipmap: boolean;
        private _noMipmap;
        _invertY: boolean;
        private _rowGenerationMatrix;
        private _cachedTextureMatrix;
        private _projectionModeMatrix;
        private _t0;
        private _t1;
        private _t2;
        private _cachedUOffset;
        private _cachedVOffset;
        private _cachedUScale;
        private _cachedVScale;
        private _cachedUAng;
        private _cachedVAng;
        private _cachedWAng;
        private _cachedCoordinatesMode;
        _samplingMode: number;
        private _buffer;
        private _deleteBuffer;
        private _delayedOnLoad;
        private _delayedOnError;
        constructor(url: string, scene: Scene, noMipmap?: boolean, invertY?: boolean, samplingMode?: number, onLoad?: () => void, onError?: () => void, buffer?: any, deleteBuffer?: boolean);
        delayLoad(): void;
        updateSamplingMode(samplingMode: number): void;
        private _prepareRowForTextureGeneration(x, y, z, t);
        getTextureMatrix(): Matrix;
        getReflectionTextureMatrix(): Matrix;
        clone(): Texture;
        static CreateFromBase64String(data: string, name: string, scene: Scene, noMipmap?: boolean, invertY?: boolean, samplingMode?: number, onLoad?: () => void, onError?: () => void): Texture;
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): BaseTexture;
    }
}

declare module BABYLON {
    class VideoTexture extends Texture {
        video: HTMLVideoElement;
        private _autoLaunch;
        private _lastUpdate;
        private _generateMipMaps;
        /**
         * Creates a video texture.
         * Sample : https://doc.babylonjs.com/tutorials/01._Advanced_Texturing
         * @param {Array} urlsOrVideo can be used to provide an array of urls or an already setup HTML video element.
         * @param {BABYLON.Scene} scene is obviously the current scene.
         * @param {boolean} generateMipMaps can be used to turn on mipmaps (Can be expensive for videoTextures because they are often updated).
         * @param {boolean} invertY is false by default but can be used to invert video on Y axis
         * @param {number} samplingMode controls the sampling method and is set to TRILINEAR_SAMPLINGMODE by default
         */
        constructor(name: string, urlsOrVideo: string[] | HTMLVideoElement, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number);
        private _createTexture();
        update(): boolean;
    }
}

declare module BABYLON {
    class CannonJSPlugin implements IPhysicsEnginePlugin {
        private _useDeltaForWorldStep;
        world: any;
        name: string;
        private _physicsMaterials;
        private _fixedTimeStep;
        private _currentCollisionGroup;
        constructor(_useDeltaForWorldStep?: boolean, iterations?: number);
        setGravity(gravity: Vector3): void;
        setTimeStep(timeStep: number): void;
        executeStep(delta: number, impostors: Array<PhysicsImpostor>): void;
        applyImpulse(impostor: PhysicsImpostor, force: Vector3, contactPoint: Vector3): void;
        applyForce(impostor: PhysicsImpostor, force: Vector3, contactPoint: Vector3): void;
        generatePhysicsBody(impostor: PhysicsImpostor): void;
        private _processChildMeshes(mainImpostor);
        removePhysicsBody(impostor: PhysicsImpostor): void;
        generateJoint(impostorJoint: PhysicsImpostorJoint): void;
        removeJoint(impostorJoint: PhysicsImpostorJoint): void;
        private _addMaterial(name, friction, restitution);
        private _checkWithEpsilon(value);
        private _createShape(impostor);
        private _createHeightmap(object, pointDepth?);
        private _minus90X;
        private _plus90X;
        private _tmpPosition;
        private _tmpQuaternion;
        private _tmpDeltaPosition;
        private _tmpDeltaRotation;
        private _tmpUnityRotation;
        private _updatePhysicsBodyTransformation(impostor);
        setTransformationFromPhysicsBody(impostor: PhysicsImpostor): void;
        setPhysicsBodyTransformation(impostor: PhysicsImpostor, newPosition: Vector3, newRotation: Quaternion): void;
        isSupported(): boolean;
        setLinearVelocity(impostor: PhysicsImpostor, velocity: Vector3): void;
        setAngularVelocity(impostor: PhysicsImpostor, velocity: Vector3): void;
        getLinearVelocity(impostor: PhysicsImpostor): Vector3;
        getAngularVelocity(impostor: PhysicsImpostor): Vector3;
        setBodyMass(impostor: PhysicsImpostor, mass: number): void;
        sleepBody(impostor: PhysicsImpostor): void;
        wakeUpBody(impostor: PhysicsImpostor): void;
        updateDistanceJoint(joint: PhysicsJoint, maxDistance: number, minDistance?: number): void;
        private enableMotor(joint, motorIndex?);
        private disableMotor(joint, motorIndex?);
        setMotor(joint: IMotorEnabledJoint, speed?: number, maxForce?: number, motorIndex?: number): void;
        setLimit(joint: IMotorEnabledJoint, upperLimit: number, lowerLimit?: number): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class OimoJSPlugin {
        world: any;
        name: string;
        constructor(iterations?: number);
        setGravity(gravity: Vector3): void;
        setTimeStep(timeStep: number): void;
        private _tmpImpostorsArray;
        executeStep(delta: number, impostors: Array<PhysicsImpostor>): void;
        applyImpulse(impostor: PhysicsImpostor, force: Vector3, contactPoint: Vector3): void;
        applyForce(impostor: PhysicsImpostor, force: Vector3, contactPoint: Vector3): void;
        generatePhysicsBody(impostor: PhysicsImpostor): void;
        private _tmpPositionVector;
        removePhysicsBody(impostor: PhysicsImpostor): void;
        generateJoint(impostorJoint: PhysicsImpostorJoint): void;
        removeJoint(impostorJoint: PhysicsImpostorJoint): void;
        isSupported(): boolean;
        setTransformationFromPhysicsBody(impostor: PhysicsImpostor): void;
        setPhysicsBodyTransformation(impostor: PhysicsImpostor, newPosition: Vector3, newRotation: Quaternion): void;
        private _getLastShape(body);
        setLinearVelocity(impostor: PhysicsImpostor, velocity: Vector3): void;
        setAngularVelocity(impostor: PhysicsImpostor, velocity: Vector3): void;
        getLinearVelocity(impostor: PhysicsImpostor): Vector3;
        getAngularVelocity(impostor: PhysicsImpostor): Vector3;
        setBodyMass(impostor: PhysicsImpostor, mass: number): void;
        sleepBody(impostor: PhysicsImpostor): void;
        wakeUpBody(impostor: PhysicsImpostor): void;
        updateDistanceJoint(joint: IMotorEnabledJoint, maxDistance: number, minDistance?: number): void;
        setMotor(joint: IMotorEnabledJoint, speed: number, maxForce?: number, motorIndex?: number): void;
        setLimit(joint: IMotorEnabledJoint, upperLimit: number, lowerLimit?: number, motorIndex?: number): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class PostProcessRenderEffect {
        private _engine;
        private _postProcesses;
        private _getPostProcess;
        private _singleInstance;
        private _cameras;
        private _indicesForCamera;
        private _renderPasses;
        private _renderEffectAsPasses;
        _name: string;
        applyParameters: (postProcess: PostProcess) => void;
        constructor(engine: Engine, name: string, getPostProcess: () => PostProcess, singleInstance?: boolean);
        isSupported: boolean;
        _update(): void;
        addPass(renderPass: PostProcessRenderPass): void;
        removePass(renderPass: PostProcessRenderPass): void;
        addRenderEffectAsPass(renderEffect: PostProcessRenderEffect): void;
        getPass(passName: string): void;
        emptyPasses(): void;
        _attachCameras(cameras: Camera): any;
        _attachCameras(cameras: Camera[]): any;
        _detachCameras(cameras: Camera): any;
        _detachCameras(cameras: Camera[]): any;
        _enable(cameras: Camera): any;
        _enable(cameras: Camera[]): any;
        _disable(cameras: Camera): any;
        _disable(cameras: Camera[]): any;
        getPostProcess(camera?: Camera): PostProcess;
        private _linkParameters();
        private _linkTextures(effect);
    }
}

declare module BABYLON {
    class PostProcessRenderPass {
        private _enabled;
        private _renderList;
        private _renderTexture;
        private _scene;
        private _refCount;
        _name: string;
        constructor(scene: Scene, name: string, size: number, renderList: Mesh[], beforeRender: () => void, afterRender: () => void);
        _incRefCount(): number;
        _decRefCount(): number;
        _update(): void;
        setRenderList(renderList: Mesh[]): void;
        getRenderTexture(): RenderTargetTexture;
    }
}

declare module BABYLON {
    class PostProcessRenderPipeline {
        private _engine;
        private _renderEffects;
        private _renderEffectsForIsolatedPass;
        private _cameras;
        _name: string;
        private static PASS_EFFECT_NAME;
        private static PASS_SAMPLER_NAME;
        constructor(engine: Engine, name: string);
        isSupported: boolean;
        addEffect(renderEffect: PostProcessRenderEffect): void;
        _enableEffect(renderEffectName: string, cameras: Camera): any;
        _enableEffect(renderEffectName: string, cameras: Camera[]): any;
        _disableEffect(renderEffectName: string, cameras: Camera): any;
        _disableEffect(renderEffectName: string, cameras: Camera[]): any;
        _attachCameras(cameras: Camera, unique: boolean): any;
        _attachCameras(cameras: Camera[], unique: boolean): any;
        _detachCameras(cameras: Camera): any;
        _detachCameras(cameras: Camera[]): any;
        _enableDisplayOnlyPass(passName: any, cameras: Camera): any;
        _enableDisplayOnlyPass(passName: any, cameras: Camera[]): any;
        _disableDisplayOnlyPass(cameras: Camera): any;
        _disableDisplayOnlyPass(cameras: Camera[]): any;
        _update(): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class PostProcessRenderPipelineManager {
        private _renderPipelines;
        constructor();
        addPipeline(renderPipeline: PostProcessRenderPipeline): void;
        attachCamerasToRenderPipeline(renderPipelineName: string, cameras: Camera, unique?: boolean): any;
        attachCamerasToRenderPipeline(renderPipelineName: string, cameras: Camera[], unique?: boolean): any;
        detachCamerasFromRenderPipeline(renderPipelineName: string, cameras: Camera): any;
        detachCamerasFromRenderPipeline(renderPipelineName: string, cameras: Camera[]): any;
        enableEffectInPipeline(renderPipelineName: string, renderEffectName: string, cameras: Camera): any;
        enableEffectInPipeline(renderPipelineName: string, renderEffectName: string, cameras: Camera[]): any;
        disableEffectInPipeline(renderPipelineName: string, renderEffectName: string, cameras: Camera): any;
        disableEffectInPipeline(renderPipelineName: string, renderEffectName: string, cameras: Camera[]): any;
        enableDisplayOnlyPassInPipeline(renderPipelineName: string, passName: string, cameras: Camera): any;
        enableDisplayOnlyPassInPipeline(renderPipelineName: string, passName: string, cameras: Camera[]): any;
        disableDisplayOnlyPassInPipeline(renderPipelineName: string, cameras: Camera): any;
        disableDisplayOnlyPassInPipeline(renderPipelineName: string, cameras: Camera[]): any;
        update(): void;
    }
}

declare module BABYLON.Internals {
    /**
     * Helper class dealing with the extraction of spherical polynomial dataArray
     * from a cube map.
     */
    class CubeMapToSphericalPolynomialTools {
        private static FileFaces;
        /**
         * Converts a cubemap to the according Spherical Polynomial data.
         * This extracts the first 3 orders only as they are the only one used in the lighting.
         *
         * @param cubeInfo The Cube map to extract the information from.
         * @return The Spherical Polynomial data.
         */
        static ConvertCubeMapToSphericalPolynomial(cubeInfo: CubeMapInfo): SphericalPolynomial;
    }
}

declare module BABYLON.Internals {
    /**
     * Header information of HDR texture files.
     */
    interface HDRInfo {
        /**
         * The height of the texture in pixels.
         */
        height: number;
        /**
         * The width of the texture in pixels.
         */
        width: number;
        /**
         * The index of the beginning of the data in the binary file.
         */
        dataPosition: number;
    }
    /**
     * This groups tools to convert HDR texture to native colors array.
     */
    class HDRTools {
        private static Ldexp(mantissa, exponent);
        private static Rgbe2float(float32array, red, green, blue, exponent, index);
        private static readStringLine(uint8array, startIndex);
        /**
         * Reads header information from an RGBE texture stored in a native array.
         * More information on this format are available here:
         * https://en.wikipedia.org/wiki/RGBE_image_format
         *
         * @param uint8array The binary file stored in  native array.
         * @return The header information.
         */
        static RGBE_ReadHeader(uint8array: Uint8Array): HDRInfo;
        /**
         * Returns the cubemap information (each faces texture data) extracted from an RGBE texture.
         * This RGBE texture needs to store the information as a panorama.
         *
         * More information on this format are available here:
         * https://en.wikipedia.org/wiki/RGBE_image_format
         *
         * @param buffer The binary file stored in an array buffer.
         * @param size The expected size of the extracted cubemap.
         * @return The Cube Map information.
         */
        static GetCubeMapTextureData(buffer: ArrayBuffer, size: number): CubeMapInfo;
        /**
         * Returns the pixels data extracted from an RGBE texture.
         * This pixels will be stored left to right up to down in the R G B order in one array.
         *
         * More information on this format are available here:
         * https://en.wikipedia.org/wiki/RGBE_image_format
         *
         * @param uint8array The binary file stored in an array buffer.
         * @param hdrInfo The header information of the file.
         * @return The pixels data in RGB right to left up to down order.
         */
        static RGBE_ReadPixels(uint8array: Uint8Array, hdrInfo: HDRInfo): Float32Array;
        private static RGBE_ReadPixels_RLE(uint8array, hdrInfo);
    }
}

declare module BABYLON.Internals {
    /**
     * CubeMap information grouping all the data for each faces as well as the cubemap size.
     */
    interface CubeMapInfo {
        /**
         * The pixel array for the front face.
         * This is stored in RGB, left to right, up to down format.
         */
        front: Float32Array;
        /**
         * The pixel array for the back face.
         * This is stored in RGB, left to right, up to down format.
         */
        back: Float32Array;
        /**
         * The pixel array for the left face.
         * This is stored in RGB, left to right, up to down format.
         */
        left: Float32Array;
        /**
         * The pixel array for the right face.
         * This is stored in RGB, left to right, up to down format.
         */
        right: Float32Array;
        /**
         * The pixel array for the up face.
         * This is stored in RGB, left to right, up to down format.
         */
        up: Float32Array;
        /**
         * The pixel array for the down face.
         * This is stored in RGB, left to right, up to down format.
         */
        down: Float32Array;
        /**
         * The size of the cubemap stored.
         *
         * Each faces will be size * size pixels.
         */
        size: number;
    }
    /**
     * Helper class usefull to convert panorama picture to their cubemap representation in 6 faces.
     */
    class PanoramaToCubeMapTools {
        private static FACE_FRONT;
        private static FACE_BACK;
        private static FACE_RIGHT;
        private static FACE_LEFT;
        private static FACE_DOWN;
        private static FACE_UP;
        /**
         * Converts a panorma stored in RGB right to left up to down format into a cubemap (6 faces).
         *
         * @param float32Array The source data.
         * @param inputWidth The width of the input panorama.
         * @param inputhHeight The height of the input panorama.
         * @param size The willing size of the generated cubemap (each faces will be size * size pixels)
         * @return The cubemap data
         */
        static ConvertPanoramaToCubemap(float32Array: Float32Array, inputWidth: number, inputHeight: number, size: number): CubeMapInfo;
        private static CreateCubemapTexture(texSize, faceData, float32Array, inputWidth, inputHeight);
        private static CalcProjectionSpherical(vDir, float32Array, inputWidth, inputHeight);
    }
}

declare namespace BABYLON.Internals {
    /**
     * Helper class to PreProcess a cubemap in order to generate mipmap according to the level of blur
     * required by the glossinees of a material.
     *
     * This only supports the cosine drop power as well as Warp fixup generation method.
     *
     * This is using the process from CubeMapGen described here:
     * https://seblagarde.wordpress.com/2012/06/10/amd-cubemapgen-for-physically-based-rendering/
     */
    class PMREMGenerator {
        input: ArrayBufferView[];
        inputSize: number;
        outputSize: number;
        maxNumMipLevels: number;
        numChannels: number;
        isFloat: boolean;
        specularPower: number;
        cosinePowerDropPerMip: number;
        excludeBase: boolean;
        fixup: boolean;
        private static CP_MAX_MIPLEVELS;
        private static CP_UDIR;
        private static CP_VDIR;
        private static CP_FACEAXIS;
        private static CP_FACE_X_POS;
        private static CP_FACE_X_NEG;
        private static CP_FACE_Y_POS;
        private static CP_FACE_Y_NEG;
        private static CP_FACE_Z_POS;
        private static CP_FACE_Z_NEG;
        private static CP_EDGE_LEFT;
        private static CP_EDGE_RIGHT;
        private static CP_EDGE_TOP;
        private static CP_EDGE_BOTTOM;
        private static CP_CORNER_NNN;
        private static CP_CORNER_NNP;
        private static CP_CORNER_NPN;
        private static CP_CORNER_NPP;
        private static CP_CORNER_PNN;
        private static CP_CORNER_PNP;
        private static CP_CORNER_PPN;
        private static CP_CORNER_PPP;
        private static _vectorTemp;
        private static _sgFace2DMapping;
        private static _sgCubeNgh;
        private static _sgCubeEdgeList;
        private static _sgCubeCornerList;
        private _outputSurface;
        private _normCubeMap;
        private _filterLUT;
        private _numMipLevels;
        /**
         * Constructor of the generator.
         *
         * @param input The different faces data from the original cubemap in the order X+ X- Y+ Y- Z+ Z-
         * @param inputSize The size of the cubemap faces
         * @param outputSize The size of the output cubemap faces
         * @param maxNumMipLevels The max number of mip map to generate (0 means all)
         * @param numChannels The number of channels stored in the cubemap (3 for RBGE for instance)
         * @param isFloat Specifies if the input texture is in float or int (hdr is usually in float)
         * @param specularPower The max specular level of the desired cubemap
         * @param cosinePowerDropPerMip The amount of drop the specular power will follow on each mip
         * @param excludeBase Specifies wether to process the level 0 (original level) or not
         * @param fixup Specifies wether to apply the edge fixup algorythm or not
         */
        constructor(input: ArrayBufferView[], inputSize: number, outputSize: number, maxNumMipLevels: number, numChannels: number, isFloat: boolean, specularPower: number, cosinePowerDropPerMip: number, excludeBase: boolean, fixup: boolean);
        /**
         * Launches the filter process and return the result.
         *
         * @return the filter cubemap in the form mip0 [faces1..6] .. mipN [faces1..6]
         */
        filterCubeMap(): ArrayBufferView[][];
        private init();
        private filterCubeMapMipChain();
        private getBaseFilterAngle(cosinePower);
        private precomputeFilterLookupTables(srcCubeMapWidth);
        private buildNormalizerSolidAngleCubemap(size);
        private texelCoordToVect(faceIdx, u, v, size, fixup);
        private vectToTexelCoord(x, y, z, size);
        private areaElement(x, y);
        private texelCoordSolidAngle(faceIdx, u, v, size);
        private filterCubeSurfaces(srcCubeMap, srcSize, dstCubeMap, dstSize, filterConeAngle, specularPower);
        private clearFilterExtents(filterExtents);
        private determineFilterExtents(centerTapDir, srcSize, bboxSize, filterExtents);
        private processFilterExtents(centerTapDir, dotProdThresh, filterExtents, srcCubeMap, srcSize, specularPower);
        private fixupCubeEdges(cubeMap, cubeMapSize);
    }
}

declare module BABYLON {
    class CustomProceduralTexture extends ProceduralTexture {
        private _animate;
        private _time;
        private _config;
        private _texturePath;
        constructor(name: string, texturePath: any, size: number, scene: Scene, fallbackTexture?: Texture, generateMipMaps?: boolean);
        private loadJson(jsonUrl);
        isReady(): boolean;
        render(useCameraPostProcess?: boolean): void;
        updateTextures(): void;
        updateShaderUniforms(): void;
        animate: boolean;
    }
}

declare module BABYLON {
    class ProceduralTexture extends Texture {
        isCube: boolean;
        private _size;
        _generateMipMaps: boolean;
        isEnabled: boolean;
        private _doNotChangeAspectRatio;
        private _currentRefreshId;
        private _refreshRate;
        onGenerated: () => void;
        private _vertexBuffers;
        private _indexBuffer;
        private _effect;
        private _uniforms;
        private _samplers;
        private _fragment;
        _textures: Texture[];
        private _floats;
        private _floatsArrays;
        private _colors3;
        private _colors4;
        private _vectors2;
        private _vectors3;
        private _matrices;
        private _fallbackTexture;
        private _fallbackTextureUsed;
        constructor(name: string, size: any, fragment: any, scene: Scene, fallbackTexture?: Texture, generateMipMaps?: boolean, isCube?: boolean);
        reset(): void;
        isReady(): boolean;
        resetRefreshCounter(): void;
        setFragment(fragment: any): void;
        refreshRate: number;
        _shouldRender(): boolean;
        getRenderSize(): number;
        resize(size: any, generateMipMaps: any): void;
        private _checkUniform(uniformName);
        setTexture(name: string, texture: Texture): ProceduralTexture;
        setFloat(name: string, value: number): ProceduralTexture;
        setFloats(name: string, value: number[]): ProceduralTexture;
        setColor3(name: string, value: Color3): ProceduralTexture;
        setColor4(name: string, value: Color4): ProceduralTexture;
        setVector2(name: string, value: Vector2): ProceduralTexture;
        setVector3(name: string, value: Vector3): ProceduralTexture;
        setMatrix(name: string, value: Matrix): ProceduralTexture;
        render(useCameraPostProcess?: boolean): void;
        clone(): ProceduralTexture;
        dispose(): void;
    }
}

