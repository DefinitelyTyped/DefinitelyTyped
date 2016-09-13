// Type definitions for BabylonJS v2.3
// Project: http://www.babylonjs.com/
// Definitions by: David Catuhe <https://github.com/deltakosh/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace BABYLON {
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
    class EngineCapabilities {
        maxTexturesImageUnits: number;
        maxTextureSize: number;
        maxCubemapTextureSize: number;
        maxRenderTextureSize: number;
        standardDerivatives: boolean;
        s3tc: any;
        textureFloat: boolean;
        textureAnisotropicFilterExtension: any;
        maxAnisotropy: number;
        instancedArrays: any;
        uintIndices: boolean;
        highPrecisionShaderSupported: boolean;
        fragmentDepthSupported: boolean;
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
        static Epsilon: number;
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
        private _vertexAttribArrays;
        private _cachedViewport;
        private _cachedVertexBuffers;
        private _cachedIndexBuffer;
        private _cachedEffectForVertexBuffers;
        private _currentRenderTarget;
        private _uintIndicesCurrentlySet;
        private _workingCanvas;
        private _workingContext;
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
         * @param {Function} renderFunction - the function to continuesly execute starting the next render loop.
         * @example
         * engine.runRenderLoop(function () {
         *      scene.render()
         * })
         */
        runRenderLoop(renderFunction: () => void): void;
        /**
         * Toggle full screen mode.
         * @param {boolean} requestPointerLock - should a pointer lock be requested from the user
         */
        switchFullscreen(requestPointerLock: boolean): void;
        clear(color: any, backBuffer: boolean, depthStencil: boolean): void;
        /**
         * Set the WebGL's viewport
         * @param {BABYLON.Viewport} viewport - the viewport element to be used.
         * @param {number} [requiredWidth] - the width required for rendering. If not provided the rendering canvas' width is used.
         * @param {number} [requiredHeight] - the height required for rendering. If not provided the rendering canvas' height is used.
         */
        setViewport(viewport: Viewport, requiredWidth?: number, requiredHeight?: number): void;
        setDirectViewport(x: number, y: number, width: number, height: number): void;
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
        bindFramebuffer(texture: WebGLTexture, faceIndex?: number): void;
        unBindFramebuffer(texture: WebGLTexture, disableGenerateMipMaps?: boolean): void;
        generateMipMapsForCubemap(texture: WebGLTexture): void;
        flushFramebuffer(): void;
        restoreDefaultFramebuffer(): void;
        private _resetVertexBufferBinding();
        createVertexBuffer(vertices: number[] | Float32Array): WebGLBuffer;
        createDynamicVertexBuffer(capacity: number): WebGLBuffer;
        updateDynamicVertexBuffer(vertexBuffer: WebGLBuffer, vertices: number[] | Float32Array, offset?: number): void;
        private _resetIndexBufferBinding();
        createIndexBuffer(indices: number[] | Int32Array): WebGLBuffer;
        bindBuffers(vertexBuffer: WebGLBuffer, indexBuffer: WebGLBuffer, vertexDeclaration: number[], vertexStrideSize: number, effect: Effect): void;
        bindMultiBuffers(vertexBuffers: VertexBuffer[], indexBuffer: WebGLBuffer, effect: Effect): void;
        _releaseBuffer(buffer: WebGLBuffer): boolean;
        createInstancesBuffer(capacity: number): WebGLBuffer;
        deleteInstancesBuffer(buffer: WebGLBuffer): void;
        updateAndBindInstancesBuffer(instancesBuffer: WebGLBuffer, data: Float32Array, offsetLocations: number[]): void;
        unBindInstancesBuffer(instancesBuffer: WebGLBuffer, offsetLocations: number[]): void;
        applyStates(): void;
        draw(useTriangles: boolean, indexStart: number, indexCount: number, instancesCount?: number): void;
        drawPointClouds(verticesStart: number, verticesCount: number, instancesCount?: number): void;
        drawUnIndexed(useTriangles: boolean, verticesStart: number, verticesCount: number, instancesCount?: number): void;
        _releaseEffect(effect: Effect): void;
        createEffect(baseName: any, attributesNames: string[], uniformsNames: string[], samplers: string[], defines: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void): Effect;
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
        setAlphaMode(mode: number): void;
        getAlphaMode(): number;
        setAlphaTesting(enable: boolean): void;
        getAlphaTesting(): boolean;
        wipeCaches(): void;
        setSamplingMode(texture: WebGLTexture, samplingMode: number): void;
        createTexture(url: string, noMipmap: boolean, invertY: boolean, scene: Scene, samplingMode?: number, onLoad?: () => void, onError?: () => void, buffer?: any): WebGLTexture;
        updateRawTexture(texture: WebGLTexture, data: ArrayBufferView, format: number, invertY: boolean, compression?: string): void;
        createRawTexture(data: ArrayBufferView, width: number, height: number, format: number, generateMipMaps: boolean, invertY: boolean, samplingMode: number, compression?: string): WebGLTexture;
        createDynamicTexture(width: number, height: number, generateMipMaps: boolean, samplingMode: number, forceExponantOfTwo?: boolean): WebGLTexture;
        updateTextureSamplingMode(samplingMode: number, texture: WebGLTexture): void;
        updateDynamicTexture(texture: WebGLTexture, canvas: HTMLCanvasElement, invertY: boolean): void;
        updateVideoTexture(texture: WebGLTexture, video: HTMLVideoElement, invertY: boolean): void;
        createRenderTargetTexture(size: any, options: any): WebGLTexture;
        createRenderTargetCubeTexture(size: number, options?: any): WebGLTexture;
        createCubeTexture(rootUrl: string, scene: Scene, files: string[], noMipmap?: boolean): WebGLTexture;
        _releaseTexture(texture: WebGLTexture): void;
        bindSamplers(effect: Effect): void;
        _bindTexture(channel: number, texture: WebGLTexture): void;
        setTextureFromPostProcess(channel: number, postProcess: PostProcess): void;
        unbindAllTextures(): void;
        setTexture(channel: number, texture: BaseTexture): void;
        _setAnisotropicLevel(key: number, texture: BaseTexture): void;
        readPixels(x: number, y: number, width: number, height: number): Uint8Array;
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

declare namespace BABYLON {
    /**
     * Node is the basic class for all scene objects (Mesh, Light Camera).
     */
    class Node {
        parent: Node;
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
        _getDescendants(list: Node[], results: Node[]): void;
        /**
         * Will return all nodes that have this node as parent.
         * @return {BABYLON.Node[]} all children nodes of all types.
         */
        getDescendants(): Node[];
        _setReady(state: boolean): void;
        getAnimationByName(name: string): Animation;
        createAnimationRange(name: string, from: number, to: number): void;
        deleteAnimationRange(name: string, deleteFrames?: boolean): void;
        getAnimationRange(name: string): AnimationRange;
        beginAnimation(name: string, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void): void;
        serializeAnimationRanges(): any;
        static ParseAnimationRanges(node: Node, parsedNode: any, scene: Scene): void;
    }
}

declare namespace BABYLON {
    interface IDisposable {
        dispose(): void;
    }
    /**
     * Represents a scene to be rendered by the engine.
     * @see http://doc.babylonjs.com/page.php?p=21911
     */
    class Scene {
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
        /**
        * A function to be executed before rendering this scene
        * @type {Function}
        */
        beforeRender: () => void;
        /**
        * A function to be executed after rendering this scene
        * @type {Function}
        */
        afterRender: () => void;
        /**
        * A function to be executed when this scene is disposed.
        * @type {Function}
        */
        onDispose: () => void;
        beforeCameraRender: (camera: Camera) => void;
        afterCameraRender: (camera: Camera) => void;
        forceWireframe: boolean;
        forcePointsCloud: boolean;
        forceShowBoundingBoxes: boolean;
        clipPlane: Plane;
        animationsEnabled: boolean;
        constantlyUpdateMeshUnderPointer: boolean;
        private _onPointerMove;
        private _onPointerDown;
        private _onPointerUp;
        onPointerMove: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        onPointerDown: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        onPointerUp: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        onPointerPick: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        cameraToUseForPointers: Camera;
        private _pointerX;
        private _pointerY;
        private _meshUnderPointer;
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
        onNewLightAdded: (newLight?: Light, positionInArray?: number, scene?: Scene) => void;
        onLightRemoved: (removedLight?: Light) => void;
        /**
        * All of the cameras added to this scene.
        * @see BABYLON.Camera
        * @type {BABYLON.Camera[]}
        */
        cameras: Camera[];
        onNewCameraAdded: (newCamera?: Camera, positionInArray?: number, scene?: Scene) => void;
        onCameraRemoved: (removedCamera?: Camera) => void;
        activeCameras: Camera[];
        activeCamera: Camera;
        /**
        * All of the (abstract) meshes added to this scene.
        * @see BABYLON.AbstractMesh
        * @type {BABYLON.AbstractMesh[]}
        */
        meshes: AbstractMesh[];
        onNewMeshAdded: (newMesh?: AbstractMesh, positionInArray?: number, scene?: Scene) => void;
        onMeshRemoved: (removedMesh?: AbstractMesh) => void;
        private _geometries;
        onGeometryAdded: (newGeometry?: Geometry) => void;
        onGeometryRemoved: (removedGeometry?: Geometry) => void;
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
        _toBeDisposed: SmartArray<IDisposable>;
        private _onReadyCallbacks;
        private _pendingData;
        private _onBeforeRenderCallbacks;
        private _onAfterRenderCallbacks;
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
        private _debugLayer;
        private _depthRenderer;
        private _uniqueIdCounter;
        private _pickedMeshName;
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
        attachControl(): void;
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
         * Sets the gravity of the physics engine (and NOT of the scene)
         * @param {BABYLON.Vector3} [gravity] - the new gravity to be used
         */
        setGravity(gravity: Vector3): void;
        createCompoundImpostor(parts: any, options: PhysicsBodyCreationOptions): any;
        deleteCompoundImpostor(compound: any): void;
        createDefaultCameraOrLight(): void;
        private _getByTags(list, tagsQuery, forEach?);
        getMeshesByTags(tagsQuery: string, forEach?: (mesh: AbstractMesh) => void): Mesh[];
        getCamerasByTags(tagsQuery: string, forEach?: (camera: Camera) => void): Camera[];
        getLightsByTags(tagsQuery: string, forEach?: (light: Light) => void): Light[];
        getMaterialByTags(tagsQuery: string, forEach?: (material: Material) => void): Material[];
    }
}

declare namespace BABYLON {
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
    }
}

declare namespace BABYLON {
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
        static NothingTrigger: number;
        static OnPickTrigger: number;
        static OnLeftPickTrigger: number;
        static OnRightPickTrigger: number;
        static OnCenterPickTrigger: number;
        static OnPickDownTrigger: number;
        static OnPickUpTrigger: number;
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
        static Parse(parsedActions: any, object: AbstractMesh, scene: Scene): void;
    }
}

declare namespace BABYLON {
    class Condition {
        _actionManager: ActionManager;
        _evaluationId: number;
        _currentResult: boolean;
        constructor(actionManager: ActionManager);
        isValid(): boolean;
        _getProperty(propertyPath: string): string;
        _getEffectiveTarget(target: any, propertyPath: string): any;
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
        private _property;
        constructor(actionManager: ActionManager, target: any, propertyPath: string, value: any, operator?: number);
        isValid(): boolean;
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
    }
}

declare namespace BABYLON {
    class SwitchBooleanAction extends Action {
        propertyPath: string;
        private _target;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, condition?: Condition);
        _prepare(): void;
        execute(): void;
    }
    class SetStateAction extends Action {
        value: string;
        private _target;
        constructor(triggerOptions: any, target: any, value: string, condition?: Condition);
        execute(): void;
    }
    class SetValueAction extends Action {
        propertyPath: string;
        value: any;
        private _target;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, value: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
    }
    class IncrementValueAction extends Action {
        propertyPath: string;
        value: any;
        private _target;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, value: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
    }
    class PlayAnimationAction extends Action {
        from: number;
        to: number;
        loop: boolean;
        private _target;
        constructor(triggerOptions: any, target: any, from: number, to: number, loop?: boolean, condition?: Condition);
        _prepare(): void;
        execute(): void;
    }
    class StopAnimationAction extends Action {
        private _target;
        constructor(triggerOptions: any, target: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
    }
    class DoNothingAction extends Action {
        constructor(triggerOptions?: any, condition?: Condition);
        execute(): void;
    }
    class CombineAction extends Action {
        children: Action[];
        constructor(triggerOptions: any, children: Action[], condition?: Condition);
        _prepare(): void;
        execute(evt: ActionEvent): void;
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
    }
    class PlaySoundAction extends Action {
        private _sound;
        constructor(triggerOptions: any, sound: Sound, condition?: Condition);
        _prepare(): void;
        execute(): void;
    }
    class StopSoundAction extends Action {
        private _sound;
        constructor(triggerOptions: any, sound: Sound, condition?: Condition);
        _prepare(): void;
        execute(): void;
    }
}

declare namespace BABYLON {
    class InterpolateValueAction extends Action {
        propertyPath: string;
        value: any;
        duration: number;
        stopOtherAnimations: boolean;
        onInterpolationDone: () => void;
        private _target;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, value: any, duration?: number, condition?: Condition, stopOtherAnimations?: boolean, onInterpolationDone?: () => void);
        _prepare(): void;
        execute(): void;
    }
}

declare namespace BABYLON {
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
        goToFrame(frame: number): void;
        pause(): void;
        restart(): void;
        stop(): void;
        _animate(delay: number): boolean;
    }
}

declare namespace BABYLON {
    class AnimationRange {
        name: string;
        from: number;
        to: number;
        constructor(name: string, from: number, to: number);
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
    class Animation {
        name: string;
        targetProperty: string;
        framePerSecond: number;
        dataType: number;
        loopMode: number;
        private _keys;
        private _offsetsCache;
        private _highLimitsCache;
        private _stopped;
        _target: any;
        private _easingFunction;
        private _events;
        targetPropertyPath: string[];
        currentFrame: number;
        allowMatricesInterpolation: boolean;
        private _ranges;
        static _PrepareAnimation(name: string, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction): Animation;
        static CreateAndStartAnimation(name: string, node: Node, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction, onAnimationEnd?: () => void): Animatable;
        static CreateMergeAndStartAnimation(name: string, node: Node, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction, onAnimationEnd?: () => void): Animatable;
        constructor(name: string, targetProperty: string, framePerSecond: number, dataType: number, loopMode?: number);
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
        color3InterpolateFunction(startValue: Color3, endValue: Color3, gradient: number): Color3;
        matrixInterpolateFunction(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
        clone(): Animation;
        setKeys(values: Array<any>): void;
        private _getKeyValue(value);
        private _interpolate(currentFrame, repeatCount, loopMode, offsetValue?, highLimitValue?);
        setValue(currentValue: any): void;
        goToFrame(frame: number): void;
        animate(delay: number, from: number, to: number, loop: boolean, speedRatio: number): boolean;
        serialize(): any;
        private static _ANIMATIONTYPE_FLOAT;
        private static _ANIMATIONTYPE_VECTOR3;
        private static _ANIMATIONTYPE_QUATERNION;
        private static _ANIMATIONTYPE_MATRIX;
        private static _ANIMATIONTYPE_COLOR3;
        private static _ANIMATIONTYPE_VECTOR2;
        private static _ANIMATIONLOOPMODE_RELATIVE;
        private static _ANIMATIONLOOPMODE_CYCLE;
        private static _ANIMATIONLOOPMODE_CONSTANT;
        static ANIMATIONTYPE_FLOAT: number;
        static ANIMATIONTYPE_VECTOR3: number;
        static ANIMATIONTYPE_VECTOR2: number;
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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
        private _onRegisterAfterWorldMatrixUpdate(connectedMesh);
        clone(): Sound;
        getAudioBuffer(): AudioBuffer;
        static Parse(parsedSound: any, scene: Scene, rootUrl: string, sourceSound?: Sound): Sound;
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
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
        copyAnimationRange(source: Bone, rangeName: string, frameOffset: number, rescaleAsRequired?: boolean): boolean;
    }
}

declare namespace BABYLON {
    class Skeleton {
        name: string;
        id: string;
        bones: Bone[];
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
        createAnimationRange(name: string, from: number, to: number): void;
        deleteAnimationRange(name: string, deleteFrames?: boolean): void;
        getAnimationRange(name: string): AnimationRange;
        /**
         *  note: This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences
         */
        copyAnimationRange(source: Skeleton, name: string, rescaleAsRequired?: boolean): boolean;
        returnToRest(): void;
        private _getHighestAnimationFrame();
        beginAnimation(name: string, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void): void;
        _markAsDirty(): void;
        _registerMeshWithPoseMatrix(mesh: AbstractMesh): void;
        _unregisterMeshWithPoseMatrix(mesh: AbstractMesh): void;
        _computeTransformMatrices(targetMatrix: Float32Array, initialSkinMatrix: Matrix): void;
        prepare(): void;
        getAnimatables(): IAnimatable[];
        clone(name: string, id: string): Skeleton;
        dispose(): void;
        serialize(): any;
        static Parse(parsedSkeleton: any, scene: Scene): Skeleton;
    }
}

declare namespace BABYLON {
    class ArcRotateCamera extends TargetCamera {
        alpha: number;
        beta: number;
        radius: number;
        target: any;
        inertialAlphaOffset: number;
        inertialBetaOffset: number;
        inertialRadiusOffset: number;
        lowerAlphaLimit: any;
        upperAlphaLimit: any;
        lowerBetaLimit: number;
        upperBetaLimit: number;
        lowerRadiusLimit: any;
        upperRadiusLimit: any;
        angularSensibilityX: number;
        angularSensibilityY: number;
        wheelPrecision: number;
        pinchPrecision: number;
        panningSensibility: number;
        inertialPanningX: number;
        inertialPanningY: number;
        keysUp: number[];
        keysDown: number[];
        keysLeft: number[];
        keysRight: number[];
        zoomOnFactor: number;
        targetScreenOffset: Vector2;
        pinchInwards: boolean;
        allowUpsideDown: boolean;
        private _keys;
        _viewMatrix: Matrix;
        private _attachedElement;
        private _onContextMenu;
        private _onPointerDown;
        private _onPointerUp;
        private _onPointerMove;
        private _wheel;
        private _onMouseMove;
        private _onKeyDown;
        private _onKeyUp;
        private _onLostFocus;
        _reset: () => void;
        private _onGestureStart;
        private _onGesture;
        private _MSGestureHandler;
        panningAxis: Vector3;
        private _localDirection;
        private _transformedDirection;
        private _isRightClick;
        private _isCtrlPushed;
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
        angularSensibility: number;
        constructor(name: string, alpha: number, beta: number, radius: number, target: any, scene: Scene);
        _getTargetPosition(): Vector3;
        _initCache(): void;
        _updateCache(ignoreParentClass?: boolean): void;
        _isSynchronizedViewMatrix(): boolean;
        attachControl(element: HTMLElement, noPreventDefault?: boolean, useCtrlForPanning?: boolean): void;
        detachControl(element: HTMLElement): void;
        _checkInputs(): void;
        private _checkLimits();
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
        serialize(): any;
    }
}

declare namespace BABYLON {
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
    class Camera extends Node {
        position: Vector3;
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
        _cameraRigParams: any;
        _rigCameras: Camera[];
        private _computedViewMatrix;
        _projectionMatrix: Matrix;
        private _worldMatrix;
        _postProcesses: PostProcess[];
        _postProcessesTakenIndices: any[];
        _activeMeshes: SmartArray<Mesh>;
        private _globalPosition;
        constructor(name: string, position: Vector3, scene: Scene);
        globalPosition: Vector3;
        getActiveMeshes(): SmartArray<Mesh>;
        isActiveMesh(mesh: Mesh): boolean;
        _initCache(): void;
        _updateCache(ignoreParentClass?: boolean): void;
        _updateFromScene(): void;
        _isSynchronized(): boolean;
        _isSynchronizedViewMatrix(): boolean;
        _isSynchronizedProjectionMatrix(): boolean;
        attachControl(element: HTMLElement): void;
        detachControl(element: HTMLElement): void;
        _update(): void;
        _checkInputs(): void;
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
         * May needs to be overridden by children so sub has required properties to be copied
         */
        createRigCamera(name: string, cameraIndex: number): Camera;
        /**
         * May needs to be overridden by children
         */
        _updateRigCameras(): void;
        serialize(): any;
        static Parse(parsedCamera: any, scene: Scene): Camera;
    }
}

declare namespace BABYLON {
    class DeviceOrientationCamera extends FreeCamera {
        private _offsetX;
        private _offsetY;
        private _orientationGamma;
        private _orientationBeta;
        private _initialOrientationGamma;
        private _initialOrientationBeta;
        private _attachedCanvas;
        private _orientationChanged;
        angularSensibility: number;
        moveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        attachControl(canvas: HTMLCanvasElement, noPreventDefault: boolean): void;
        detachControl(canvas: HTMLCanvasElement): void;
        _checkInputs(): void;
    }
}

declare namespace BABYLON {
    class FollowCamera extends TargetCamera {
        radius: number;
        rotationOffset: number;
        heightOffset: number;
        cameraAcceleration: number;
        maxCameraSpeed: number;
        target: AbstractMesh;
        constructor(name: string, position: Vector3, scene: Scene);
        private getRadians(degrees);
        private follow(cameraTarget);
        _checkInputs(): void;
        serialize(): any;
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
        serialize(): any;
    }
}

declare namespace BABYLON {
    class FreeCamera extends TargetCamera {
        ellipsoid: Vector3;
        keysUp: number[];
        keysDown: number[];
        keysLeft: number[];
        keysRight: number[];
        checkCollisions: boolean;
        applyGravity: boolean;
        angularSensibility: number;
        onCollide: (collidedMesh: AbstractMesh) => void;
        private _keys;
        private _collider;
        private _needMoveForGravity;
        private _oldPosition;
        private _diffPosition;
        private _newPosition;
        private _attachedElement;
        private _localDirection;
        private _transformedDirection;
        private _onMouseDown;
        private _onMouseUp;
        private _onMouseOut;
        private _onMouseMove;
        private _onKeyDown;
        private _onKeyUp;
        _waitingLockedTargetId: string;
        constructor(name: string, position: Vector3, scene: Scene);
        _onLostFocus(e: FocusEvent): void;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        _collideWithWorld(velocity: Vector3): void;
        private _onCollisionPositionChange;
        _checkInputs(): void;
        _decideIfNeedsToMove(): boolean;
        _updatePosition(): void;
        serialize(): any;
    }
}

declare namespace BABYLON {
    class GamepadCamera extends UniversalCamera {
        constructor(name: string, position: Vector3, scene: Scene);
    }
}

declare namespace BABYLON {
    class AnaglyphFreeCamera extends FreeCamera {
        interaxialDistance: number;
        constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene);
    }
    class AnaglyphArcRotateCamera extends ArcRotateCamera {
        constructor(name: string, alpha: number, beta: number, radius: number, target: any, interaxialDistance: number, scene: Scene);
    }
    class AnaglyphGamepadCamera extends GamepadCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene);
    }
    class StereoscopicFreeCamera extends FreeCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, isSideBySide: boolean, scene: Scene);
    }
    class StereoscopicArcRotateCamera extends ArcRotateCamera {
        constructor(name: string, alpha: number, beta: number, radius: number, target: any, interaxialDistance: number, isSideBySide: boolean, scene: Scene);
    }
    class StereoscopicGamepadCamera extends GamepadCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, isSideBySide: boolean, scene: Scene);
    }
}

declare namespace BABYLON {
    class TargetCamera extends Camera {
        cameraDirection: Vector3;
        cameraRotation: Vector2;
        rotation: Vector3;
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
        _transformedReferencePoint: Vector3;
        _lookAtTemp: Matrix;
        _tempMatrix: Matrix;
        _reset: () => void;
        _waitingLockedTargetId: string;
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
        _getViewMatrix(): Matrix;
        _getVRViewMatrix(): Matrix;
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
        serialize(): any;
    }
}

declare namespace BABYLON {
    class TouchCamera extends FreeCamera {
        private _offsetX;
        private _offsetY;
        private _pointerCount;
        private _pointerPressed;
        private _attachedCanvas;
        private _onPointerDown;
        private _onPointerUp;
        private _onPointerMove;
        touchAngularSensibility: number;
        touchMoveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        _onLostFocus(e: FocusEvent): void;
        attachControl(canvas: HTMLCanvasElement, noPreventDefault: boolean): void;
        detachControl(canvas: HTMLCanvasElement): void;
        _checkInputs(): void;
    }
}

declare namespace BABYLON {
    class UniversalCamera extends TouchCamera {
        gamepad: Gamepad;
        private _gamepads;
        gamepadAngularSensibility: number;
        gamepadMoveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        private _onNewGameConnected(gamepad);
        attachControl(canvas: HTMLCanvasElement, noPreventDefault: boolean): void;
        detachControl(canvas: HTMLCanvasElement): void;
        _checkInputs(): void;
        dispose(): void;
    }
}

declare namespace BABYLON {
    class VirtualJoysticksCamera extends FreeCamera {
        private _leftjoystick;
        private _rightjoystick;
        constructor(name: string, position: Vector3, scene: Scene);
        getLeftJoystick(): VirtualJoystick;
        getRightJoystick(): VirtualJoystick;
        _checkInputs(): void;
        dispose(): void;
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class Layer {
        name: string;
        texture: Texture;
        isBackground: boolean;
        color: Color4;
        scale: Vector2;
        offset: Vector2;
        onDispose: () => void;
        alphaBlendingMode: number;
        private _scene;
        private _vertexDeclaration;
        private _vertexStrideSize;
        private _vertexBuffer;
        private _indexBuffer;
        private _effect;
        constructor(name: string, imgUrl: string, scene: Scene, isBackground?: boolean, color?: Color4);
        render(): void;
        dispose(): void;
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
    class LensFlareSystem {
        name: string;
        lensFlares: LensFlare[];
        borderLimit: number;
        meshesSelectionPredicate: (mesh: Mesh) => boolean;
        layerMask: number;
        private _scene;
        private _emitter;
        private _vertexDeclaration;
        private _vertexStrideSize;
        private _vertexBuffer;
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

declare namespace BABYLON {
    class DirectionalLight extends Light implements IShadowLight {
        direction: Vector3;
        position: Vector3;
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
        serialize(): any;
    }
}

declare namespace BABYLON {
    class HemisphericLight extends Light {
        direction: Vector3;
        groundColor: Color3;
        private _worldMatrix;
        constructor(name: string, direction: Vector3, scene: Scene);
        setDirectionToTarget(target: Vector3): Vector3;
        getShadowGenerator(): ShadowGenerator;
        transferToEffect(effect: Effect, directionUniformName: string, groundColorUniformName: string): void;
        _getWorldMatrix(): Matrix;
        serialize(): any;
    }
}

declare namespace BABYLON {
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
        _shadowGenerator: ShadowGenerator;
        private _parentedWorldMatrix;
        _excludedMeshesIds: string[];
        _includedOnlyMeshesIds: string[];
        constructor(name: string, scene: Scene);
        getShadowGenerator(): ShadowGenerator;
        getAbsolutePosition(): Vector3;
        transferToEffect(effect: Effect, uniformName0?: string, uniformName1?: string): void;
        _getWorldMatrix(): Matrix;
        canAffectMesh(mesh: AbstractMesh): boolean;
        getWorldMatrix(): Matrix;
        dispose(): void;
        serialize(): any;
        static Parse(parsedLight: any, scene: Scene): Light;
    }
}

declare namespace BABYLON {
    class PointLight extends Light implements IShadowLight {
        position: Vector3;
        private _worldMatrix;
        transformedPosition: Vector3;
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
        serialize(): any;
    }
}

declare namespace BABYLON {
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
        serialize(): any;
    }
}

declare namespace BABYLON {
    interface ISceneLoaderPlugin {
        extensions: string;
        importMesh: (meshesNames: any, scene: Scene, data: any, rootUrl: string, meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]) => boolean;
        load: (scene: Scene, data: string, rootUrl: string) => boolean;
    }
    class SceneLoader {
        private static _ForceFullSceneLoadingForIncremental;
        private static _ShowLoadingScreen;
        static ForceFullSceneLoadingForIncremental: boolean;
        static ShowLoadingScreen: boolean;
        private static _registeredPlugins;
        private static _getPluginForFilename(sceneFilename);
        static RegisterPlugin(plugin: ISceneLoaderPlugin): void;
        static ImportMesh(meshesNames: any, rootUrl: string, sceneFilename: string, scene: Scene, onsuccess?: (meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]) => void, progressCallBack?: () => void, onerror?: (scene: Scene, e: any) => void): void;
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class Color3 {
        r: number;
        g: number;
        b: number;
        constructor(r?: number, g?: number, b?: number);
        toString(): string;
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
        toString(): string;
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
        toArray(array: number[], index?: number): Vector2;
        asArray(): number[];
        copyFrom(source: Vector2): Vector2;
        copyFromFloats(x: number, y: number): Vector2;
        add(otherVector: Vector2): Vector2;
        addVector3(otherVector: Vector3): Vector2;
        subtract(otherVector: Vector2): Vector2;
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
        static Distance(value1: Vector2, value2: Vector2): number;
        static DistanceSquared(value1: Vector2, value2: Vector2): number;
    }
    class Vector3 {
        x: number;
        y: number;
        z: number;
        constructor(x: number, y: number, z: number);
        toString(): string;
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
    class Quaternion {
        x: number;
        y: number;
        z: number;
        w: number;
        constructor(x?: number, y?: number, z?: number, w?: number);
        toString(): string;
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
        multiply(other: Matrix): Matrix;
        copyFrom(other: Matrix): Matrix;
        copyToArray(array: Float32Array, offset?: number): Matrix;
        multiplyToRef(other: Matrix, result: Matrix): Matrix;
        multiplyToArray(other: Matrix, result: Float32Array, offset: number): Matrix;
        equals(value: Matrix): boolean;
        clone(): Matrix;
        decompose(scale: Vector3, rotation: Quaternion, translation: Vector3): boolean;
        static FromArray(array: number[], offset?: number): Matrix;
        static FromArrayToRef(array: number[], offset: number, result: Matrix): void;
        static FromFloat32ArrayToRefScaled(array: Float32Array, offset: number, scale: number, result: Matrix): void;
        static FromValuesToRef(initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number, result: Matrix): void;
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
        static LookAtLH(eye: Vector3, target: Vector3, up: Vector3): Matrix;
        static LookAtLHToRef(eye: Vector3, target: Vector3, up: Vector3, result: Matrix): void;
        static OrthoLH(width: number, height: number, znear: number, zfar: number): Matrix;
        static OrthoLHToRef(width: number, height: number, znear: number, zfar: number, result: Matrix): void;
        static OrthoOffCenterLH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
        static OrthoOffCenterLHToRef(left: number, right: any, bottom: number, top: number, znear: number, zfar: number, result: Matrix): void;
        static PerspectiveLH(width: number, height: number, znear: number, zfar: number): Matrix;
        static PerspectiveFovLH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
        static PerspectiveFovLHToRef(fov: number, aspect: number, znear: number, zfar: number, result: Matrix, fovMode?: number): void;
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
        toGlobal(engine: Engine): Viewport;
        toScreenGlobal(engine: Engine): Viewport;
    }
    class Frustum {
        static GetPlanes(transform: Matrix): Plane[];
        static GetPlanesToRef(transform: Matrix, frustumPlanes: Plane[]): void;
    }
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
        intersectsSphere(sphere: any): boolean;
        intersectsTriangle(vertex0: Vector3, vertex1: Vector3, vertex2: Vector3): IntersectionInfo;
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
        * path : an array of Vector3, the curve axis of the Path3D
        * normal (optional) : Vector3, the first wanted normal to the curve. Ex (0, 1, 0) for a vertical normal.
        * raw (optional, default false) : boolean, if true the returned Path3D isn't normalized. Useful to depict path acceleration or speed.
        */
        constructor(path: Vector3[], firstNormal?: Vector3, raw?: boolean);
        getCurve(): Vector3[];
        getTangents(): Vector3[];
        getNormals(): Vector3[];
        getBinormals(): Vector3[];
        getDistances(): number[];
        update(path: Vector3[], firstNormal?: Vector3): Path3D;
        private _compute(firstNormal);
        private _getFirstNonNullVector(index);
        private _getLastNonNullVector(index);
        private _normalVector(v0, vt, va);
    }
    class Curve3 {
        private _points;
        private _length;
        static CreateQuadraticBezier(v0: Vector3, v1: Vector3, v2: Vector3, nbPoints: number): Curve3;
        static CreateCubicBezier(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3, nbPoints: number): Curve3;
        static CreateHermiteSpline(p1: Vector3, t1: Vector3, p2: Vector3, t2: Vector3, nbPoints: number): Curve3;
        constructor(points: Vector3[]);
        getPoints(): Vector3[];
        length(): number;
        continue(curve: Curve3): Curve3;
        private _computeLength(path);
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
        static Vector2: Vector2[];
        static Vector3: Vector3[];
        static Vector4: Vector4[];
        static Quaternion: Quaternion[];
        static Matrix: Matrix[];
    }
}

declare namespace BABYLON {
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
        private _program;
        private _valueCache;
        constructor(baseName: any, attributesNames: string[], uniformsNames: string[], samplers: string[], engine: any, defines?: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void);
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
    }
}

declare namespace BABYLON {
    class MaterialDefines {
        _keys: string[];
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
        onDispose: () => void;
        onBind: (material: Material, mesh: Mesh) => void;
        getRenderTargetTextures: () => SmartArray<RenderTargetTexture>;
        alphaMode: number;
        disableDepthWrite: boolean;
        fogEnabled: boolean;
        _effect: Effect;
        _wasPreviouslyReady: boolean;
        private _scene;
        private _fillMode;
        private _cachedDepthWriteState;
        pointSize: number;
        zOffset: number;
        wireframe: boolean;
        pointsCloud: boolean;
        fillMode: number;
        constructor(name: string, scene: Scene, doNotAdd?: boolean);
        isFrozen: boolean;
        freeze(): void;
        unfreeze(): void;
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        getEffect(): Effect;
        getScene(): Scene;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        getAlphaTestTexture(): BaseTexture;
        trackCreation(onCompiled: (effect: Effect) => void, onError: (effect: Effect, errors: string) => void): void;
        markDirty(): void;
        _preBind(): void;
        bind(world: Matrix, mesh?: Mesh): void;
        bindOnlyWorldMatrix(world: Matrix): void;
        unbind(): void;
        clone(name: string): Material;
        getBindedMeshes(): AbstractMesh[];
        dispose(forceDisposeEffect?: boolean): void;
        copyTo(other: Material): void;
        serialize(): any;
        static ParseMultiMaterial(parsedMultiMaterial: any, scene: Scene): MultiMaterial;
        static Parse(parsedMaterial: any, scene: Scene, rootUrl: string): any;
    }
}

declare namespace BABYLON {
    class MultiMaterial extends Material {
        subMaterials: Material[];
        constructor(name: string, scene: Scene);
        getSubMaterial(index: any): Material;
        isReady(mesh?: AbstractMesh): boolean;
        clone(name: string, cloneChildren?: boolean): MultiMaterial;
        serialize(): any;
    }
}

declare namespace BABYLON {
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
        dispose(forceDisposeEffect?: boolean): void;
        serialize(): any;
        static Parse(source: any, scene: Scene, rootUrl: string): ShaderMaterial;
    }
}

declare namespace BABYLON {
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
    class StandardMaterial extends Material {
        diffuseTexture: BaseTexture;
        ambientTexture: BaseTexture;
        opacityTexture: BaseTexture;
        reflectionTexture: BaseTexture;
        emissiveTexture: BaseTexture;
        specularTexture: BaseTexture;
        bumpTexture: BaseTexture;
        lightmapTexture: BaseTexture;
        ambientColor: Color3;
        diffuseColor: Color3;
        specularColor: Color3;
        specularPower: number;
        emissiveColor: Color3;
        useAlphaFromDiffuseTexture: boolean;
        useEmissiveAsIllumination: boolean;
        linkEmissiveWithDiffuse: boolean;
        useReflectionFresnelFromSpecular: boolean;
        useSpecularOverAlpha: boolean;
        disableLighting: boolean;
        roughness: number;
        useLightmapAsShadowmap: boolean;
        diffuseFresnelParameters: FresnelParameters;
        opacityFresnelParameters: FresnelParameters;
        reflectionFresnelParameters: FresnelParameters;
        emissiveFresnelParameters: FresnelParameters;
        useGlossinessFromSpecularMapAlpha: boolean;
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
        static PrepareDefinesForLights(scene: Scene, mesh: AbstractMesh, defines: MaterialDefines): boolean;
        private static _scaledDiffuse;
        private static _scaledSpecular;
        static BindLights(scene: Scene, mesh: AbstractMesh, effect: Effect, defines: MaterialDefines): void;
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        unbind(): void;
        bindOnlyWorldMatrix(world: Matrix): void;
        bind(world: Matrix, mesh?: Mesh): void;
        getAnimatables(): IAnimatable[];
        dispose(forceDisposeEffect?: boolean): void;
        clone(name: string): StandardMaterial;
        serialize(): any;
        static DiffuseTextureEnabled: boolean;
        static AmbientTextureEnabled: boolean;
        static OpacityTextureEnabled: boolean;
        static ReflectionTextureEnabled: boolean;
        static EmissiveTextureEnabled: boolean;
        static SpecularTextureEnabled: boolean;
        static BumpTextureEnabled: boolean;
        static FresnelEnabled: boolean;
        static LightmapEnabled: boolean;
        static Parse(source: any, scene: Scene, rootUrl: string): StandardMaterial;
    }
}

declare namespace BABYLON {
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
        definedFacingForward: boolean;
        position: Vector3;
        rotation: Vector3;
        rotationQuaternion: Quaternion;
        scaling: Vector3;
        billboardMode: number;
        visibility: number;
        alphaIndex: number;
        infiniteDistance: boolean;
        isVisible: boolean;
        isPickable: boolean;
        showBoundingBox: boolean;
        showSubMeshesBoundingBox: boolean;
        onDispose: any;
        isBlocker: boolean;
        renderingGroupId: number;
        material: Material;
        receiveShadows: boolean;
        actionManager: ActionManager;
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
        _physicImpostor: number;
        _physicsMass: number;
        _physicsFriction: number;
        _physicRestitution: number;
        onPhysicsCollide: (collidedMesh: AbstractMesh, contact: any) => void;
        private _checkCollisions;
        ellipsoid: Vector3;
        ellipsoidOffset: Vector3;
        private _collider;
        private _oldPositionForCollisions;
        private _diffPositionForCollisions;
        private _newPositionForCollisions;
        onCollide: (collidedMesh: AbstractMesh) => void;
        onCollisionPositionChange: (newPosition: Vector3) => void;
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
        private _onAfterWorldMatrixUpdate;
        private _isWorldMatrixFrozen;
        _unIndexed: boolean;
        _poseMatrix: Matrix;
        _waitingActions: any;
        _waitingFreezeWorldMatrix: boolean;
        private _skeleton;
        _bonesTransformMatrices: Float32Array;
        skeleton: Skeleton;
        constructor(name: string, scene: Scene);
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
        setPhysicsState(impostor?: any, options?: PhysicsBodyCreationOptions): any;
        getPhysicsImpostor(): number;
        getPhysicsMass(): number;
        getPhysicsFriction(): number;
        getPhysicsRestitution(): number;
        getPositionInCameraSpace(camera?: Camera): Vector3;
        getDistanceToCamera(camera?: Camera): number;
        applyImpulse(force: Vector3, contactPoint: Vector3): void;
        setPhysicsLinkWith(otherMesh: Mesh, pivot1: Vector3, pivot2: Vector3, options?: any): void;
        updatePhysicsBodyPosition(): void;
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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
        _delayInfo: any;
        private _indexBuffer;
        _boundingInfo: BoundingInfo;
        _delayLoadingFunction: (any: any, geometry: Geometry) => void;
        _softwareSkinningRenderId: number;
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
        updateVerticesDataDirectly(kind: string, data: Float32Array, offset: number): void;
        updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean): void;
        getTotalVertices(): number;
        getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Float32Array;
        getVertexBuffer(kind: string): VertexBuffer;
        getVertexBuffers(): VertexBuffer[];
        isVerticesDataPresent(kind: string): boolean;
        getVerticesDataKinds(): string[];
        setIndices(indices: number[] | Int32Array, totalVertices?: number): void;
        getTotalIndices(): number;
        getIndices(copyWhenShared?: boolean): number[] | Int32Array;
        getIndexBuffer(): any;
        releaseForMesh(mesh: Mesh, shouldDispose?: boolean): void;
        applyToMesh(mesh: Mesh): void;
        private _applyToMesh(mesh);
        private notifyUpdate(kind?);
        load(scene: Scene, onLoaded?: () => void): void;
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
    namespace Geometry.Primitives {
        class _Primitive extends Geometry {
            private _beingRegenerated;
            private _canBeRegenerated;
            constructor(id: string, scene: Scene, vertexData?: VertexData, canBeRegenerated?: boolean, mesh?: Mesh);
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

declare namespace BABYLON {
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
        private _getFacetAt(x, z);
        private _computeHeightQuads();
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
    class LinesMesh extends Mesh {
        color: Color3;
        alpha: number;
        private _colorShader;
        constructor(name: string, scene: Scene, parent?: Node, source?: Mesh, doNotCloneChildren?: boolean);
        material: Material;
        isPickable: boolean;
        checkCollisions: boolean;
        _bind(subMesh: SubMesh, effect: Effect, fillMode: number): void;
        _draw(subMesh: SubMesh, fillMode: number, instancesCount?: number): void;
        intersects(ray: Ray, fastCheck?: boolean): any;
        dispose(doNotRecurse?: boolean): void;
        clone(name: string, newParent?: Node, doNotCloneChildren?: boolean): LinesMesh;
    }
}

declare namespace BABYLON {
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
        static FRONTSIDE: number;
        static BACKSIDE: number;
        static DOUBLESIDE: number;
        static DEFAULTSIDE: number;
        static NO_CAP: number;
        static CAP_START: number;
        static CAP_END: number;
        static CAP_ALL: number;
        delayLoadState: number;
        instances: InstancedMesh[];
        delayLoadingFile: string;
        _binaryInfo: any;
        private _LODLevels;
        onLODLevelSelection: (distance: number, mesh: Mesh, selectedLevel: Mesh) => void;
        onBeforeDraw: () => void;
        _geometry: Geometry;
        private _onBeforeRenderCallbacks;
        private _onAfterRenderCallbacks;
        _delayInfo: any;
        _delayLoadingFunction: (any: any, mesh: Mesh) => void;
        _visibleInstances: any;
        private _renderIdForInstances;
        private _batchCache;
        private _worldMatricesInstancesBuffer;
        private _worldMatricesInstancesArray;
        private _instancesBufferSize;
        _shouldGenerateFlatShading: boolean;
        private _preActivateId;
        private _sideOrientation;
        private _areNormalsFrozen;
        private _sourcePositions;
        private _sourceNormals;
        /**
         * @constructor
         * @param {string} name - The value used by scene.getMeshByName() to do a lookup.
         * @param {Scene} scene - The scene to add this mesh to.
         * @param {Node} parent - The parent of this mesh, if it has one
         * @param {Mesh} source - An optional Mesh from which geometry is shared, cloned.
         * @param {boolean} doNotCloneChildren - When cloning, skip cloning child meshes of source, default False.
         *                  When false, achieved by calling a clone(), also passing False.
         *                  This will make creation of children, recursive.
         */
        constructor(name: string, scene: Scene, parent?: Node, source?: Mesh, doNotCloneChildren?: boolean);
        hasLODLevels: boolean;
        private _sortLODLevels();
        /**
         * Add a mesh as LOD level triggered at the given distance.
         * @param {number} distance - the distance from the center of the object to show this level
         * @param {Mesh} mesh - the mesh to be added as LOD level
         * @return {Mesh} this mesh (for chaining)
         */
        addLODLevel(distance: number, mesh: Mesh): Mesh;
        getLODLevelAtDistance(distance: number): Mesh;
        /**
         * Remove a mesh from the LOD array
         * @param {Mesh} mesh - the mesh to be removed.
         * @return {Mesh} this mesh (for chaining)
         */
        removeLODLevel(mesh: Mesh): Mesh;
        getLOD(camera: Camera, boundingSphere?: BoundingSphere): AbstractMesh;
        geometry: Geometry;
        getTotalVertices(): number;
        getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Float32Array;
        getVertexBuffer(kind: any): VertexBuffer;
        isVerticesDataPresent(kind: string): boolean;
        getVerticesDataKinds(): string[];
        getTotalIndices(): number;
        getIndices(copyWhenShared?: boolean): number[] | Int32Array;
        isBlocked: boolean;
        isReady(): boolean;
        isDisposed(): boolean;
        sideOrientation: number;
        areNormalsFrozen: boolean;
        /**  This function affects parametric shapes on update only : ribbons, tubes, etc. It has no effect at all on other shapes */
        freezeNormals(): void;
        /**  This function affects parametric shapes on update only : ribbons, tubes, etc. It has no effect at all on other shapes */
        unfreezeNormals(): void;
        _preActivate(): void;
        _registerInstanceForRenderId(instance: InstancedMesh, renderId: number): void;
        refreshBoundingInfo(): void;
        _createGlobalSubMesh(): SubMesh;
        subdivide(count: number): void;
        setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean, stride?: number): void;
        updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean, makeItUnique?: boolean): void;
        updateVerticesDataDirectly(kind: string, data: Float32Array, offset?: number, makeItUnique?: boolean): void;
        updateMeshPositions(positionFunction: any, computeNormals?: boolean): void;
        makeGeometryUnique(): void;
        setIndices(indices: number[] | Int32Array, totalVertices?: number): void;
        _bind(subMesh: SubMesh, effect: Effect, fillMode: number): void;
        _draw(subMesh: SubMesh, fillMode: number, instancesCount?: number): void;
        registerBeforeRender(func: (mesh: AbstractMesh) => void): void;
        unregisterBeforeRender(func: (mesh: AbstractMesh) => void): void;
        registerAfterRender(func: (mesh: AbstractMesh) => void): void;
        unregisterAfterRender(func: (mesh: AbstractMesh) => void): void;
        _getInstancesRenderList(subMeshId: number): _InstancesBatch;
        _renderWithInstances(subMesh: SubMesh, fillMode: number, batch: _InstancesBatch, effect: Effect, engine: Engine): void;
        _processRendering(subMesh: SubMesh, effect: Effect, fillMode: number, batch: _InstancesBatch, hardwareInstancedRendering: boolean, onBeforeDraw: (isInstance: boolean, world: Matrix) => void): void;
        render(subMesh: SubMesh, enableAlphaMode: boolean): void;
        getEmittedParticleSystems(): ParticleSystem[];
        getHierarchyEmittedParticleSystems(): ParticleSystem[];
        getChildren(): Node[];
        _checkDelayState(): void;
        isInFrustum(frustumPlanes: Plane[]): boolean;
        setMaterialByID(id: string): void;
        getAnimatables(): IAnimatable[];
        bakeTransformIntoVertices(transform: Matrix): void;
        bakeCurrentTransformIntoVertices(): void;
        _resetPointsArrayCache(): void;
        _generatePointsArray(): boolean;
        clone(name: string, newParent?: Node, doNotCloneChildren?: boolean): Mesh;
        dispose(doNotRecurse?: boolean): void;
        applyDisplacementMap(url: string, minHeight: number, maxHeight: number, onSuccess?: (mesh: Mesh) => void): void;
        applyDisplacementMapFromBuffer(buffer: Uint8Array, heightMapWidth: number, heightMapHeight: number, minHeight: number, maxHeight: number): void;
        convertToFlatShadedMesh(): void;
        convertToUnIndexedMesh(): void;
        flipFaces(flipNormals?: boolean): void;
        createInstance(name: string): InstancedMesh;
        synchronizeInstances(): void;
        /**
         * Simplify the mesh according to the given array of settings.
         * Function will return immediately and will simplify async.
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
        static Parse(parsedMesh: any, scene: Scene, rootUrl: string): Mesh;
        static CreateRibbon(name: string, pathArray: Vector3[][], closeArray: boolean, closePath: boolean, offset: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh): Mesh;
        static CreateDisc(name: string, radius: number, tessellation: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        static CreateBox(name: string, size: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        static CreateSphere(name: string, segments: number, diameter: number, scene?: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        static CreateCylinder(name: string, height: number, diameterTop: number, diameterBottom: number, tessellation: number, subdivisions: any, scene: Scene, updatable?: any, sideOrientation?: number): Mesh;
        static CreateTorus(name: string, diameter: number, thickness: number, tessellation: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        static CreateTorusKnot(name: string, radius: number, tube: number, radialSegments: number, tubularSegments: number, p: number, q: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        static CreateLines(name: string, points: Vector3[], scene: Scene, updatable?: boolean, instance?: LinesMesh): LinesMesh;
        static CreateDashedLines(name: string, points: Vector3[], dashSize: number, gapSize: number, dashNb: number, scene: Scene, updatable?: boolean, instance?: LinesMesh): LinesMesh;
        static ExtrudeShape(name: string, shape: Vector3[], path: Vector3[], scale: number, rotation: number, cap: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh): Mesh;
        static ExtrudeShapeCustom(name: string, shape: Vector3[], path: Vector3[], scaleFunction: any, rotationFunction: any, ribbonCloseArray: boolean, ribbonClosePath: boolean, cap: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh): Mesh;
        static CreateLathe(name: string, shape: Vector3[], radius: number, tessellation: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        static CreatePlane(name: string, size: number, scene: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        static CreateGround(name: string, width: number, height: number, subdivisions: number, scene: Scene, updatable?: boolean): Mesh;
        static CreateTiledGround(name: string, xmin: number, zmin: number, xmax: number, zmax: number, subdivisions: {
            w: number;
            h: number;
        }, precision: {
            w: number;
            h: number;
        }, scene: Scene, updatable?: boolean): Mesh;
        static CreateGroundFromHeightMap(name: string, url: string, width: number, height: number, subdivisions: number, minHeight: number, maxHeight: number, scene: Scene, updatable?: boolean, onReady?: (mesh: GroundMesh) => void): GroundMesh;
        static CreateTube(name: string, path: Vector3[], radius: number, tessellation: number, radiusFunction: {
            (i: number, distance: number): number;
        }, cap: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh): Mesh;
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
        static CreateIcoSphere(name: string, options: {
            radius?: number;
            flat?: boolean;
            subdivisions?: number;
            sideOrientation?: number;
            updatable?: boolean;
        }, scene: Scene): Mesh;
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
        static MinMax(meshes: AbstractMesh[]): {
            min: Vector3;
            max: Vector3;
        };
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

declare namespace BABYLON {
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
        static CreateLines(options: {
            points: Vector3[];
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

declare namespace BABYLON {
    class MeshBuilder {
        static CreateBox(name: string, options: {
            width?: number;
            height?: number;
            depth?: number;
            faceUV?: Vector4[];
            faceColors?: Color4[];
            sideOrientation?: number;
            updatable?: boolean;
        }, scene: Scene): Mesh;
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
        static CreateDisc(name: string, options: {
            radius?: number;
            tessellation?: number;
            arc?: number;
            updatable?: boolean;
            sideOrientation?: number;
        }, scene: Scene): Mesh;
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
        static CreateRibbon(name: string, options: {
            pathArray: Vector3[][];
            closeArray?: boolean;
            closePath?: boolean;
            offset?: number;
            updatable?: boolean;
            sideOrientation?: number;
            instance?: Mesh;
        }, scene?: Scene): Mesh;
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
        static CreateTorus(name: string, options: {
            diameter?: number;
            thickness?: number;
            tessellation?: number;
            updatable?: boolean;
            sideOrientation?: number;
        }, scene: any): Mesh;
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
        static CreateLines(name: string, options: {
            points: Vector3[];
            updatable?: boolean;
            instance?: LinesMesh;
        }, scene: Scene): LinesMesh;
        static CreateDashedLines(name: string, options: {
            points: Vector3[];
            dashSize?: number;
            gapSize?: number;
            dashNb?: number;
            updatable?: boolean;
            instance?: LinesMesh;
        }, scene: Scene): LinesMesh;
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
        static ExtrudeShapeCustom(name: string, options: {
            shape: Vector3[];
            path: Vector3[];
            scaleFunction?:any;
            rotationFunction?:any;
            ribbonCloseArray?: boolean;
            ribbonClosePath?: boolean;
            cap?: number;
            updatable?: boolean;
            sideOrientation?: number;
            instance?: Mesh;
        }, scene: Scene): Mesh;
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
        static CreatePlane(name: string, options: {
            size?: number;
            width?: number;
            height?: number;
            sideOrientation?: number;
            updatable?: boolean;
            sourcePlane?: Plane;
        }, scene: Scene): Mesh;
        static CreateGround(name: string, options: {
            width?: number;
            height?: number;
            subdivisions?: number;
            updatable?: boolean;
        }, scene: any): Mesh;
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
        static CreateGroundFromHeightMap(name: string, url: string, options: {
            width?: number;
            height?: number;
            subdivisions?: number;
            minHeight?: number;
            maxHeight?: number;
            updatable?: boolean;
            onReady?: (mesh: GroundMesh) => void;
        }, scene: Scene): GroundMesh;
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
        static CreateDecal(name: string, sourceMesh: AbstractMesh, options: {
            position?: Vector3;
            normal?: Vector3;
            size?: Vector3;
            angle?: number;
        }): Mesh;
        private static _ExtrudeShapeGeneric(name, shape, curve, scale, rotation, scaleFunction, rotateFunction, rbCA, rbCP, cap, custom, scene, updtbl, side, instance);
    }
}

declare namespace BABYLON.Internals {
    class MeshLODLevel {
        distance: number;
        mesh: Mesh;
        constructor(distance: number, mesh: Mesh);
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
    class Polygon {
        static Rectangle(xmin: number, ymin: number, xmax: number, ymax: number): Vector2[];
        static Circle(radius: number, cx?: number, cy?: number, numberOfSides?: number): Vector2[];
        static Parse(input: string): Vector2[];
        static StartingAt(x: number, y: number): Path2;
    }
    class PolygonMeshBuilder {
        private _swctx;
        private _points;
        private _outlinepoints;
        private _holes;
        private _name;
        private _scene;
        constructor(name: string, contours: Path2, scene: Scene);
        constructor(name: string, contours: Vector2[], scene: Scene);
        addHole(hole: Vector2[]): PolygonMeshBuilder;
        build(updatable?: boolean, depth?: number): Mesh;
        private addSide(positions, normals, uvs, indices, bounds, points, depth, flip);
    }
}

declare namespace BABYLON {
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
        getLinesIndexBuffer(indices: number[] | Int32Array, engine: any): WebGLBuffer;
        canIntersects(ray: Ray): boolean;
        intersects(ray: Ray, positions: Vector3[], indices: number[] | Int32Array, fastCheck?: boolean): IntersectionInfo;
        clone(newMesh: AbstractMesh, newRenderingMesh?: Mesh): SubMesh;
        dispose(): void;
        static CreateFromIndices(materialIndex: number, startIndex: number, indexCount: number, mesh: AbstractMesh, renderingMesh?: Mesh): SubMesh;
    }
}

declare namespace BABYLON {
    class VertexBuffer {
        private _mesh;
        private _engine;
        private _buffer;
        private _data;
        private _updatable;
        private _kind;
        private _strideSize;
        constructor(engine: any, data: number[] | Float32Array, kind: string, updatable: boolean, postponeInternalCreation?: boolean, stride?: number);
        isUpdatable(): boolean;
        getData(): number[] | Float32Array;
        getBuffer(): WebGLBuffer;
        getStrideSize(): number;
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class ParticleSystem implements IDisposable {
        name: string;
        static BLENDMODE_ONEONE: number;
        static BLENDMODE_STANDARD: number;
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
        private _vertexDeclaration;
        private _vertexStrideSize;
        private _stockParticles;
        private _newPartsExcess;
        private _vertexBuffer;
        private _indexBuffer;
        private _vertices;
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

declare namespace BABYLON {
    class SolidParticle {
        idx: number;
        color: Color4;
        position: Vector3;
        rotation: Vector3;
        quaternion: Vector4;
        scale: Vector3;
        uvs: Vector4;
        velocity: Vector3;
        alive: boolean;
        _pos: number;
        _model: ModelShape;
        shapeId: number;
        idxInShape: number;
        constructor(particleIndex: number, positionIndex: number, model: ModelShape, shapeId: number, idxInShape: number);
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

declare namespace BABYLON {
    /**
    * Full documentation here : http://doc.babylonjs.com/tutorials/Solid_Particle_System
    */
    class SolidParticleSystem implements IDisposable {
        particles: SolidParticle[];
        nbParticles: number;
        billboard: boolean;
        counter: number;
        name: string;
        mesh: Mesh;
        vars: any;
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
        /**
        * Creates a SPS (Solid Particle System) object.
        * @param name the SPS name, this will be the underlying mesh name
        * @param updatable (default true) if the SPS must be updatable or immutable
        * @param isPickable (default false) if the solid particles must be pickable
        */
        constructor(name: string, scene: Scene, options?: {
            updatable?: boolean;
            isPickable?: boolean;
        });
        /**
        * Builds the SPS underlying mesh. Returns a standard Mesh.
        * If no model shape was added to the SPS, the return mesh is only a single triangular plane.
        */
        buildMesh(): Mesh;
        private _resetCopy();
        private _meshBuilder(p, shape, positions, meshInd, indices, meshUV, uvs, meshCol, colors, idx, idxInShape, options);
        private _posToShape(positions);
        private _uvsToShapeUV(uvs);
        private _addParticle(idx, idxpos, model, shapeId, idxInShape);
        /**
        * Adds some particles to the SPS from the model shape.
        * Please read the doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#create-an-immutable-sps
        * @param mesh any Mesh object that will be used as a model for the solid particles.
        * @param nb the number of particles to be created from this model
        * @param positionFunction an optional javascript function to called for each particle on SPS creation
        * @param vertexFunction an optional javascript function to called for each vertex of each particle on SPS creation
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
        *  This method calls updateParticle() for each particles of the SPS.
        *  For an animated SPS, it is usually called within the render loop.
        * @param start (default 0) the particle index in the particle array where to start to compute the particle property values
        * @param end (default nbParticle - 1)  the particle index in the particle array where to stop to compute the particle property values
        * @param update (default true) if the mesh must be finally updated on this call after all the particle computations.
        */
        setParticles(start?: number, end?: number, update?: boolean): void;
        private _quaternionRotationYPR();
        private _quaternionToRotationMatrix();
        /**
        * Disposes the SPS
        */
        dispose(): void;
        /**
        *  Visibilty helper : Recomputes the visible size according to the mesh bounding box
        * doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#sps-visibility
        */
        refreshVisibleSize(): void;
        /** Visibility helper : Sets the size of a visibility box, this sets the underlying mesh bounding box.
        * @param size the size (float) of the visibility box
        * note : this doesn't lock the SPS mesh bounding box.
        * doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#sps-visibility
        */
        setVisibilityBox(size: number): void;
        /**
        * True if the SPS is set as always visible
        */
        /**
        * Sets the SPS as always visible or not
        * doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#sps-visibility
        */
        isAlwaysVisible: boolean;
        /**
        * True if the SPS visibility box is locked. The underlying mesh bounding box is then not updatable any more.
        */
        /**
        * Sets the SPS visibility box as locked or not. This enables/disables the underlying mesh bounding box updates.
        * doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#sps-visibility
        */
        isVisibilityBoxLocked: boolean;
        /**
        * Tells to setParticle() to compute the particle rotations or not.
        * Default value : true. The SPS is faster when it's set to false.
        * Note : the particle rotations aren't stored values, so setting computeParticleRotation to false will prevents the particle to rotate.
        */
        computeParticleRotation: boolean;
        /**
        * Tells to setParticle() to compute the particle colors or not.
        * Default value : true. The SPS is faster when it's set to false.
        * Note : the particle colors are stored values, so setting computeParticleColor to false will keep yet the last colors set.
        */
        computeParticleColor: boolean;
        /**
        * Tells to setParticle() to compute the particle textures or not.
        * Default value : true. The SPS is faster when it's set to false.
        * Note : the particle textures are stored values, so setting computeParticleTexture to false will keep yet the last colors set.
        */
        computeParticleTexture: boolean;
        /**
        * Tells to setParticle() to call the vertex function for each vertex of each particle, or not.
        * Default value : false. The SPS is faster when it's set to false.
        * Note : the particle custom vertex positions aren't stored values.
        */
        computeParticleVertex: boolean;
        /**
        * This function does nothing. It may be overwritten to set all the particles first values.
        * The SPS doesn't call this function, you may have to call it by your own.
        * doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#particle-management
        */
        initParticles(): void;
        /**
        * This function does nothing. It may be overwritten to recycle a particle.
        * The SPS doesn't call this function, you may have to call it by your own.
        * doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#particle-management
        */
        recycleParticle(particle: SolidParticle): SolidParticle;
        /**
        * Updates a particle : this function should  be overwritten by the user.
        * It is called on each particle by setParticles(). This is the place to code each particle behavior.
        * doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#particle-management
        * ex : just set a particle position or velocity and recycle conditions
        */
        updateParticle(particle: SolidParticle): SolidParticle;
        /**
        * Updates a vertex of a particle : it can be overwritten by the user.
        * This will be called on each vertex particle by setParticles() if computeParticleVertex is set to true only.
        * @param particle the current particle
        * @param vertex the current index of the current particle
        * @param pt the index of the current vertex in the particle shape
        * doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#update-each-particle-shape
        * ex : just set a vertex particle position
        */
        updateParticleVertex(particle: SolidParticle, vertex: Vector3, pt: number): Vector3;
        /**
        * This will be called before any other treatment by setParticles() and will be passed three parameters.
        * This does nothing and may be overwritten by the user.
        * @param start the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
        * @param stop the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
        * @param update the boolean update value actually passed to setParticles()
        */
        beforeUpdateParticles(start?: number, stop?: number, update?: boolean): void;
        /**
        * This will be called  by setParticles() after all the other treatments and just before the actual mesh update.
        * This will be passed three parameters.
        * This does nothing and may be overwritten by the user.
        * @param start the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
        * @param stop the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
        * @param update the boolean update value actually passed to setParticles()
        */
        afterUpdateParticles(start?: number, stop?: number, update?: boolean): void;
    }
}

declare namespace BABYLON {
    interface IPhysicsEnginePlugin {
        name: string;
        initialize(iterations?: number): any;
        setGravity(gravity: Vector3): void;
        getGravity(): Vector3;
        runOneStep(delta: number): void;
        registerMesh(mesh: AbstractMesh, impostor: number, options: PhysicsBodyCreationOptions): any;
        registerMeshesAsCompound(parts: PhysicsCompoundBodyPart[], options: PhysicsBodyCreationOptions): any;
        unregisterMesh(mesh: AbstractMesh): any;
        applyImpulse(mesh: AbstractMesh, force: Vector3, contactPoint: Vector3): void;
        createLink(mesh1: AbstractMesh, mesh2: AbstractMesh, pivot1: Vector3, pivot2: Vector3, options?: any): boolean;
        dispose(): void;
        isSupported(): boolean;
        updateBodyPosition(mesh: AbstractMesh): void;
        getWorldObject(): any;
        getPhysicsBodyOfMesh(mesh: AbstractMesh): any;
    }
    interface PhysicsBodyCreationOptions {
        mass: number;
        friction: number;
        restitution: number;
    }
    interface PhysicsCompoundBodyPart {
        mesh: Mesh;
        impostor: number;
    }
    class PhysicsEngine {
        gravity: Vector3;
        private _currentPlugin;
        constructor(plugin?: IPhysicsEnginePlugin);
        _initialize(gravity?: Vector3): void;
        _runOneStep(delta: number): void;
        _setGravity(gravity: Vector3): void;
        _getGravity(): Vector3;
        _registerMesh(mesh: AbstractMesh, impostor: number, options: PhysicsBodyCreationOptions): any;
        _registerMeshesAsCompound(parts: PhysicsCompoundBodyPart[], options: PhysicsBodyCreationOptions): any;
        _unregisterMesh(mesh: AbstractMesh): void;
        _applyImpulse(mesh: AbstractMesh, force: Vector3, contactPoint: Vector3): void;
        _createLink(mesh1: AbstractMesh, mesh2: AbstractMesh, pivot1: Vector3, pivot2: Vector3, options?: any): boolean;
        _updateBodyPosition(mesh: AbstractMesh): void;
        dispose(): void;
        isSupported(): boolean;
        getPhysicsBodyOfMesh(mesh: AbstractMesh): any;
        getPhysicsPluginName(): string;
        static NoImpostor: number;
        static SphereImpostor: number;
        static BoxImpostor: number;
        static PlaneImpostor: number;
        static MeshImpostor: number;
        static CapsuleImpostor: number;
        static ConeImpostor: number;
        static CylinderImpostor: number;
        static ConvexHullImpostor: number;
        static HeightmapImpostor: number;
        static Epsilon: number;
    }
}

declare namespace BABYLON {
    class AnaglyphPostProcess extends PostProcess {
        constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare namespace BABYLON {
    class BlackAndWhitePostProcess extends PostProcess {
        constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare namespace BABYLON {
    class BlurPostProcess extends PostProcess {
        direction: Vector2;
        blurWidth: number;
        constructor(name: string, direction: Vector2, blurWidth: number, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare namespace BABYLON {
    class ColorCorrectionPostProcess extends PostProcess {
        private _colorTableTexture;
        constructor(name: string, colorTableUrl: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare namespace BABYLON {
    class ConvolutionPostProcess extends PostProcess {
        kernel: number[];
        constructor(name: string, kernel: number[], ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
        static EdgeDetect0Kernel: number[];
        static EdgeDetect1Kernel: number[];
        static EdgeDetect2Kernel: number[];
        static SharpenKernel: number[];
        static EmbossKernel: number[];
        static GaussianKernel: number[];
    }
}

declare namespace BABYLON {
    class DisplayPassPostProcess extends PostProcess {
        constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare namespace BABYLON {
    class FilterPostProcess extends PostProcess {
        kernelMatrix: Matrix;
        constructor(name: string, kernelMatrix: Matrix, ratio: number, camera?: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare namespace BABYLON {
    class FxaaPostProcess extends PostProcess {
        texelWidth: number;
        texelHeight: number;
        constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class PassPostProcess extends PostProcess {
        constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
    }
}

declare namespace BABYLON {
    class PostProcess {
        name: string;
        onApply: (effect: Effect) => void;
        onBeforeRender: (effect: Effect) => void;
        onAfterRender: (effect: Effect) => void;
        onSizeChanged: () => void;
        onActivate: (camera: Camera) => void;
        width: number;
        height: number;
        renderTargetSamplingMode: number;
        clearColor: Color4;
        private _camera;
        private _scene;
        private _engine;
        private _renderRatio;
        private _reusable;
        private _textureType;
        _textures: SmartArray<WebGLTexture>;
        _currentRenderTextureInd: number;
        private _effect;
        private _samplers;
        private _fragmentUrl;
        private _parameters;
        constructor(name: string, fragmentUrl: string, parameters: string[], samplers: string[], ratio: number | any, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean, defines?: string, textureType?: number);
        updateEffect(defines?: string): void;
        isReusable(): boolean;
        activate(camera: Camera, sourceTexture?: WebGLTexture): void;
        isSupported: boolean;
        apply(): Effect;
        dispose(camera?: Camera): void;
    }
}

declare namespace BABYLON {
    class PostProcessManager {
        private _scene;
        private _indexBuffer;
        private _vertexDeclaration;
        private _vertexStrideSize;
        private _vertexBuffer;
        constructor(scene: Scene);
        private _prepareBuffers();
        _prepareFrame(sourceTexture?: WebGLTexture): boolean;
        directRender(postProcesses: PostProcess[], targetTexture?: WebGLTexture): void;
        _finalizeFrame(doNotPresent?: boolean, targetTexture?: WebGLTexture, faceIndex?: number, postProcesses?: PostProcess[]): void;
        dispose(): void;
    }
}

declare namespace BABYLON {
    class RefractionPostProcess extends PostProcess {
        color: Color3;
        depth: number;
        colorLevel: number;
        private _refRexture;
        constructor(name: string, refractionTextureUrl: string, color: Color3, depth: number, colorLevel: number, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean);
        dispose(camera: Camera): void;
    }
}

declare namespace BABYLON {
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
        private _createSSAOPostProcess(ratio);
        private _createSSAOCombinePostProcess(ratio);
        private _createRandomTexture();
    }
}

declare namespace BABYLON {
    class StereoscopicInterlacePostProcess extends PostProcess {
        private _stepSize;
        constructor(name: string, camB: Camera, postProcessA: PostProcess, isStereoscopicHoriz: boolean, samplingMode?: number);
    }
}

declare namespace BABYLON {
    enum TonemappingOperator {
        Hable = 0,
        Reinhard = 1,
        HejiDawson = 2,
        Photographic = 3,
    }
    class TonemapPostProcess extends PostProcess {
        private _operator;
        private _exposureAdjustment;
        constructor(name: string, operator: TonemappingOperator, exposureAdjustment: number, camera: Camera, samplingMode?: number, engine?: Engine, textureFormat?: number);
    }
}

declare namespace BABYLON {
    class VolumetricLightScatteringPostProcess extends PostProcess {
        private _volumetricLightScatteringPass;
        private _volumetricLightScatteringRTT;
        private _viewPort;
        private _screenCoordinates;
        private _cachedDefines;
        private _customMeshPosition;
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
        /**
        * Set to true to use the diffuseColor instead of the diffuseTexture
        * @type {boolean}
        */
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
         * @param {BABYLON.Scene} scene - The constructor needs a scene reference to initialize internal components. If "camera" is null (RenderPipelineÃ , "scene" must be provided
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class ReflectionProbe {
        name: string;
        private _scene;
        private _renderTargetTexture;
        private _projectionMatrix;
        private _viewMatrix;
        private _target;
        private _add;
        private _attachedMesh;
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

declare namespace BABYLON {
    class BoundingBoxRenderer {
        frontColor: Color3;
        backColor: Color3;
        showBackLines: boolean;
        renderList: SmartArray<BoundingBox>;
        private _scene;
        private _colorShader;
        private _vb;
        private _ib;
        constructor(scene: Scene);
        private _prepareRessources();
        reset(): void;
        render(): void;
        dispose(): void;
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
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
        private _vb0;
        private _vb1;
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

declare namespace BABYLON {
    class OutlineRenderer {
        private _scene;
        private _effect;
        private _cachedDefines;
        constructor(scene: Scene);
        render(subMesh: SubMesh, batch: _InstancesBatch, useOverlay?: boolean): void;
        isReady(subMesh: SubMesh, useInstances: boolean): boolean;
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class SpriteManager {
        name: string;
        cellSize: number;
        sprites: Sprite[];
        renderingGroupId: number;
        layerMask: number;
        onDispose: () => void;
        fogEnabled: boolean;
        isPickable: boolean;
        private _capacity;
        private _spriteTexture;
        private _epsilon;
        private _scene;
        private _vertexDeclaration;
        private _vertexStrideSize;
        private _vertexBuffer;
        private _indexBuffer;
        private _vertices;
        private _effectBase;
        private _effectFog;
        constructor(name: string, imgUrl: string, capacity: number, cellSize: number, scene: Scene, epsilon?: number, samplingMode?: number);
        private _appendSpriteVertex(index, sprite, offsetX, offsetY, rowSize);
        intersects(ray: Ray, camera: Camera, predicate?: (sprite: Sprite) => boolean, fastCheck?: boolean): PickingInfo;
        render(): void;
        dispose(): void;
    }
}

declare namespace BABYLON.Internals {
    class AndOrNotEvaluator {
        static Eval(query: string, evaluateCallback: (val: any) => boolean): boolean;
        private static _HandleParenthesisContent(parenthesisContent, evaluateCallback);
        private static _SimplifyNegation(booleanString);
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class Gamepads {
        private babylonGamepads;
        private oneGamepadConnected;
        private isMonitoring;
        private gamepadEventSupported;
        private gamepadSupportAvailable;
        private _callbackGamepadConnected;
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class SceneSerializer {
        static Serialize(scene: Scene): any;
        static SerializeMesh(toSerialize: any, withParents?: boolean, withChildren?: boolean): any;
    }
}

declare namespace BABYLON {
    class SmartArray<T> {
        data: Array<T>;
        length: number;
        private _id;
        private _duplicateId;
        constructor(capacity: number);
        push(value: any): void;
        pushNoDuplicate(value: any): void;
        sort(compareFn: any): void;
        reset(): void;
        concat(array: any): void;
        concatWithNoDuplicate(array: any): void;
        indexOf(value: any): number;
        private static _GlobalId;
    }
}

declare namespace BABYLON {
    class SmartCollection {
        count: number;
        items: any;
        private _keys;
        private _initialCapacity;
        constructor(capacity?: number);
        add(key: any, item: any): number;
        remove(key: any): number;
        removeItemOfIndex(index: number): number;
        indexOf(key: any): number;
        item(key: any): any;
        getAllKeys(): any[];
        getKeyByIndex(index: number): any;
        getItemByIndex(index: number): any;
        empty(): void;
        forEach(block: (item: any) => void): void;
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON.Internals {
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

declare namespace BABYLON.Internals {
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

declare namespace BABYLON {
    interface IAnimatable {
        animations: Array<Animation>;
    }
    interface ISize {
        width: number;
        height: number;
    }
    class Tools {
        static BaseUrl: string;
        static CorsBehavior: any;
        static UseFallbackTexture: boolean;
        static Instantiate(className: string): any;
        static GetConstructorName(obj: any): any;
        static ToHex(i: number): string;
        static SetImmediate(action: () => void): void;
        static IsExponentOfTwo(value: number): boolean;
        static GetExponentOfTwo(value: number, max: number): number;
        static GetFilename(path: string): string;
        static GetDOMTextContent(element: HTMLElement): string;
        static ToDegrees(angle: number): number;
        static ToRadians(angle: number): number;
        static EncodeArrayBufferTobase64(buffer: ArrayBuffer): string;
        static ExtractMinAndMaxIndexed(positions: number[] | Float32Array, indices: number[] | Int32Array, indexStart: number, indexCount: number): {
            minimum: Vector3;
            maximum: Vector3;
        };
        static ExtractMinAndMax(positions: number[] | Float32Array, start: number, count: number): {
            minimum: Vector3;
            maximum: Vector3;
        };
        static MakeArray(obj: any, allowsNullUndefined?: boolean): Array<any>;
        static GetPointerPrefix(): string;
        static QueueNewFrame(func: any): void;
        static RequestFullscreen(element: any): void;
        static ExitFullscreen(): void;
        static CleanUrl(url: string): string;
        static LoadImage(url: any, onload: any, onerror: any, database: any): HTMLImageElement;
        static LoadFile(url: string, callback: (data: any) => void, progressCallBack?: () => void, database?: any, useArrayBuffer?: boolean, onError?: () => void): void;
        static ReadFileAsDataURL(fileToLoad: any, callback: any, progressCallback: any): void;
        static ReadFile(fileToLoad: any, callback: any, progressCallBack: any, useArrayBuffer?: boolean): void;
        static FileAsURL(content: string): string;
        static Clamp(value: number, min?: number, max?: number): number;
        static Sign(value: number): number;
        static Format(value: number, decimals?: number): string;
        static CheckExtends(v: Vector3, min: Vector3, max: Vector3): void;
        static WithinEpsilon(a: number, b: number, epsilon?: number): boolean;
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
    }
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class VRDeviceOrientationFreeCamera extends FreeCamera {
        _alpha: number;
        _beta: number;
        _gamma: number;
        private _offsetOrientation;
        private _deviceOrientationHandler;
        constructor(name: string, position: Vector3, scene: Scene, compensateDistortion?: boolean);
        _onOrientationEvent(evt: DeviceOrientationEvent): void;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
    }
}

declare var HMDVRDevice: any;
declare var PositionSensorVRDevice: any;
declare namespace BABYLON {
    class WebVRFreeCamera extends FreeCamera {
        _hmdDevice: any;
        _sensorDevice: any;
        _cacheState: any;
        _cacheQuaternion: Quaternion;
        _cacheRotation: Vector3;
        _vrEnabled: boolean;
        constructor(name: string, position: Vector3, scene: Scene, compensateDistortion?: boolean);
        private _getWebVRDevices(devices);
        _checkInputs(): void;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON.Internals {
}

declare namespace BABYLON {
    class BaseTexture {
        name: string;
        delayLoadState: number;
        hasAlpha: boolean;
        getAlphaFromRGB: boolean;
        level: number;
        isCube: boolean;
        isRenderTarget: boolean;
        animations: Animation[];
        onDispose: () => void;
        coordinatesIndex: number;
        coordinatesMode: number;
        wrapU: number;
        wrapV: number;
        anisotropicFilteringLevel: number;
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

declare namespace BABYLON {
    class CubeTexture extends BaseTexture {
        url: string;
        coordinatesMode: number;
        private _noMipmap;
        private _files;
        private _extensions;
        private _textureMatrix;
        static CreateFromImages(files: string[], scene: Scene, noMipmap?: boolean): CubeTexture;
        constructor(rootUrl: string, scene: Scene, extensions?: string[], noMipmap?: boolean, files?: string[]);
        clone(): CubeTexture;
        delayLoad(): void;
        getReflectionTextureMatrix(): Matrix;
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): CubeTexture;
        serialize(): any;
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class RenderTargetTexture extends Texture {
        isCube: boolean;
        static _REFRESHRATE_RENDER_ONCE: number;
        static _REFRESHRATE_RENDER_ONEVERYFRAME: number;
        static _REFRESHRATE_RENDER_ONEVERYTWOFRAMES: number;
        static REFRESHRATE_RENDER_ONCE: number;
        static REFRESHRATE_RENDER_ONEVERYFRAME: number;
        static REFRESHRATE_RENDER_ONEVERYTWOFRAMES: number;
        renderList: AbstractMesh[];
        renderParticles: boolean;
        renderSprites: boolean;
        coordinatesMode: number;
        onBeforeRender: (faceIndex: number) => void;
        onAfterRender: (faceIndex: number) => void;
        onAfterUnbind: () => void;
        onClear: (engine: Engine) => void;
        activeCamera: Camera;
        customRenderFunction: (opaqueSubMeshes: SmartArray<SubMesh>, transparentSubMeshes: SmartArray<SubMesh>, alphaTestSubMeshes: SmartArray<SubMesh>, beforeTransparents?: () => void) => void;
        private _size;
        _generateMipMaps: boolean;
        private _renderingManager;
        _waitingRenderList: string[];
        private _doNotChangeAspectRatio;
        private _currentRefreshId;
        private _refreshRate;
        private _textureMatrix;
        constructor(name: string, size: any, scene: Scene, generateMipMaps?: boolean, doNotChangeAspectRatio?: boolean, type?: number, isCube?: boolean);
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

declare namespace BABYLON {
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
        constructor(url: string, scene: Scene, noMipmap?: boolean, invertY?: boolean, samplingMode?: number, onLoad?: () => void, onError?: () => void, buffer?: any, deleteBuffer?: boolean);
        delayLoad(): void;
        updateSamplingMode(samplingMode: number): void;
        private _prepareRowForTextureGeneration(x, y, z, t);
        getTextureMatrix(): Matrix;
        getReflectionTextureMatrix(): Matrix;
        clone(): Texture;
        serialize(): any;
        static CreateFromBase64String(data: string, name: string, scene: Scene, noMipmap?: boolean, invertY?: boolean, samplingMode?: number, onLoad?: () => void, onError?: () => void): Texture;
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): BaseTexture;
    }
}

declare namespace BABYLON {
    class VideoTexture extends Texture {
        video: HTMLVideoElement;
        private _autoLaunch;
        private _lastUpdate;
        constructor(name: string, urls: string[], scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number);
        update(): boolean;
    }
}

declare namespace BABYLON {
    class CannonJSPlugin implements IPhysicsEnginePlugin {
        private _useDeltaForWorldStep;
        private _world;
        private _registeredMeshes;
        private _physicsMaterials;
        private _gravity;
        private _fixedTimeStep;
        name: string;
        constructor(_useDeltaForWorldStep?: boolean);
        initialize(iterations?: number): void;
        private _checkWithEpsilon(value);
        runOneStep(delta: number): void;
        setGravity(gravity: Vector3): void;
        getGravity(): Vector3;
        registerMesh(mesh: AbstractMesh, impostor: number, options?: PhysicsBodyCreationOptions): any;
        private _createShape(mesh, impostor);
        private _createConvexPolyhedron(rawVerts, rawFaces, mesh);
        private _createHeightmap(mesh, pointDepth?);
        private _addMaterial(friction, restitution);
        private _createRigidBodyFromShape(shape, mesh, options);
        registerMeshesAsCompound(parts: PhysicsCompoundBodyPart[], options: PhysicsBodyCreationOptions): any;
        private _unbindBody(body);
        unregisterMesh(mesh: AbstractMesh): void;
        applyImpulse(mesh: AbstractMesh, force: Vector3, contactPoint: Vector3): void;
        updateBodyPosition: (mesh: AbstractMesh) => void;
        createLink(mesh1: AbstractMesh, mesh2: AbstractMesh, pivot1: Vector3, pivot2: Vector3): boolean;
        dispose(): void;
        isSupported(): boolean;
        getWorldObject(): any;
        getPhysicsBodyOfMesh(mesh: AbstractMesh): any;
    }
}

declare namespace BABYLON {
    class OimoJSPlugin implements IPhysicsEnginePlugin {
        private _world;
        private _registeredMeshes;
        name: string;
        private _gravity;
        private _checkWithEpsilon(value);
        initialize(iterations?: number): void;
        setGravity(gravity: Vector3): void;
        getGravity(): Vector3;
        registerMesh(mesh: AbstractMesh, impostor: number, options: PhysicsBodyCreationOptions): any;
        registerMeshesAsCompound(parts: PhysicsCompoundBodyPart[], options: PhysicsBodyCreationOptions): any;
        private _createBodyAsCompound(part, options, initialMesh);
        unregisterMesh(mesh: AbstractMesh): void;
        private _unbindBody(body);
        /**
         * Update the body position according to the mesh position
         * @param mesh
         */
        updateBodyPosition: (mesh: AbstractMesh) => void;
        applyImpulse(mesh: AbstractMesh, force: Vector3, contactPoint: Vector3): void;
        createLink(mesh1: AbstractMesh, mesh2: AbstractMesh, pivot1: Vector3, pivot2: Vector3, options?: any): boolean;
        dispose(): void;
        isSupported(): boolean;
        getWorldObject(): any;
        getPhysicsBodyOfMesh(mesh: AbstractMesh): any;
        private _getLastShape(body);
        runOneStep(time: number): void;
    }
}

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
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

declare namespace BABYLON {
    class ProceduralTexture extends Texture {
        isCube: boolean;
        private _size;
        _generateMipMaps: boolean;
        isEnabled: boolean;
        private _doNotChangeAspectRatio;
        private _currentRefreshId;
        private _refreshRate;
        onGenerated: () => void;
        private _vertexBuffer;
        private _indexBuffer;
        private _effect;
        private _vertexDeclaration;
        private _vertexStrideSize;
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
