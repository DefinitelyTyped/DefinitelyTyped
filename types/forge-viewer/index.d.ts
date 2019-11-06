// Type definitions for non-npm package Forge Viewer 7.4
// Project: https://forge.autodesk.com/en/docs/viewer/v7/reference/javascript/viewer3d/
// Definitions by: Autodesk Forge Partner Development <https://github.com/Autodesk-Forge>, Alan Smith <https://github.com/alansmithnbs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// Copyright (c) Autodesk, Inc. All rights reserved
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
//
/// <reference types="THREE" />

declare namespace Autodesk {
    namespace Viewing {
        enum ErrorCodes {
          UNKNOWN_FAILURE = 1,
          BAD_DATA = 2,
          NETWORK_FAILURE = 3,
          NETWORK_ACCESS_DENIED = 4,
          NETWORK_FILE_NOT_FOUND = 5,
          NETWORK_SERVER_ERROR = 6,
          NETWORK_UNHANDLED_RESPONSE_CODE = 7,
          BROWSER_WEBGL_NOT_SUPPORTED = 8,
          BAD_DATA_NO_VIEWABLE_CONTENT = 9,
          BROWSER_WEBGL_DISABLED = 10,
          BAD_DATA_MODEL_IS_EMPTY = 11,
          RTC_ERROR = 12,
          UNSUPORTED_FILE_EXTENSION = 13,
          VIEWER_INTERNAL_ERROR = 14,
        }

        enum SelectionMode {
          MIXED,
          REGULAR,
          OVERLAYED,
          LEAF_OBJECT,
          FIRST_OBJECT,
          LAST_OBJECT,
        }

        enum ProgressState {
          ROOT_LOADED,
          LOADING,
          RENDERING,
        }

        enum KeyCode {
          BACKSPACE = 8,
          TAB = 9,
          ENTER = 13,
          SHIFT = 16,
          CONTROL = 17,
          ALT = 18,
          ESCAPE = 27,
          SPACE = 32,
          PAGEUP = 33,
          PAGEDOWN = 34,
          END = 35,
          HOME = 36,
          LEFT = 37,
          UP = 38,
          RIGHT = 39,
          DOWN = 40,
          INSERT = 45,
          DELETE = 46,
          ZERO = 48,
          SEMICOLONMOZ = 59,
          EQUALSMOZ = 61,
          a = 65,
          b = 66,
          c = 67,
          d = 68,
          e = 69,
          f = 70,
          g = 71,
          h = 72,
          i = 73,
          j = 74,
          k = 75,
          l = 76,
          m = 77,
          n = 78,
          o = 79,
          p = 80,
          q = 81,
          r = 82,
          s = 83,
          t = 84,
          u = 85,
          v = 86,
          w = 87,
          x = 88,
          y = 89,
          z = 90,
          LCOMMAND = 91,
          RCOMMAND = 93,
          PLUS = 107,
          PLUSMOZ = 171,
          DASHMOZ = 109,
          F1 = 112,
          F2 = 113,
          F3 = 114,
          F4 = 115,
          F5 = 116,
          F6 = 117,
          F7 = 118,
          F8 = 119,
          F9 = 120,
          F10 = 121,
          F11 = 122,
          F12 = 123,
          DASHMOZNEW = 173,
          SEMICOLON = 186,
          EQUALS = 187,
          COMMA = 188,
          DASH = 189,
          PERIOD = 190,
          SLASH = 191,
          LBRACKET = 219,
          RBRACKET = 221,
          SINGLEQUOTE = 222,
          COMMANDMOZ = 224,
        }

        interface ViewerEvent {
          (event: any): void;
        }

        interface Viewer3DConfig {
          startOnInitialize?: boolean;
          theme?: 'dark-theme'|'light-theme'|string;
          [key: string]: any;
        }

        interface ViewerConfig {
          disableBrowserContextMenu?: boolean;
          disabledExtensions?: {
            bimwalk?: boolean;
            hyperlink?: boolean;
            measure?: boolean;
            scalarisSimulation?: boolean;
            section?: boolean;
          };
          extensions?: string[];
          useConsolidation?: boolean;
          consolidationMemoryLimit?: number;
          sharedPropertyDbPath?: string;
          bubbleNode?: BubbleNode;
          canvasConfig?: any;
          startOnInitialize?: boolean;
          experimental?: any[];
          theme?: 'dark-theme'|'light-theme'|string;
          [key: string]: any;
        }

        interface ItemSelectedObserver {
          onItemSelected(viewer: Viewer3D): void;
        }

        interface SelectionVisibility {
          hasVisible: boolean;
          hasHidden: boolean;
        }

        interface ThumbnailOptions {
          urn: string;
          width: number;
          height: number;
          guid: string;
          acmsession: (string);
        }

        interface FileLoaderOptions {
          ids?: string;
          sharedPropertyDbPath?: string;
          [key: string]: any;
        }

        interface LoadModelOptions {
          fileLoader?: FileLoader;
          loadOptions?: object;
          sharedPropertyDbPath?: string;
          ids?: string;
          [key: string]: any;
        }

        interface PropertyOptions {
          propFilter?: string[];
          ignoreHidden?: boolean;
          [key: string]: any;
        }

        interface ResizePanelOptions {
          dockingPanels?: UI.DockingPanel[];
          viewer?: Viewer3D;
          dimensions?: {
            width: number;
            height: number;
          };
        }

        class FileLoader {
          constructor(viewer: Viewer3D);

          is3d(): boolean;
          loadFile(url: string, options: FileLoaderOptions, onSuccess: () => void, onError: () => void): void;
        }

        interface ViewerItem {
          children?: ViewerItem[];
          guid: string;
          hasThumbnail: boolean;
          name: string;
          parent: ViewerItem;
          progress: string;
          role: '3d'|'2d'|string;
          size: number;
          status: string;
          success: string;
          type: 'view'|'geometry'|string;
          viewableID: string;
        }

        interface ExtensionOptions {
          defaultModelStructureTitle: string;
          extensions: string[];
          startOnInitialize: boolean;
          viewableName: string;
          [key: string]: any;
        }

        const AGGREGATE_FIT_TO_VIEW_EVENT = 'aggregateFitToView';
        const AGGREGATE_ISOLATION_CHANGED_EVENT = 'aggregateIsolation';
        const AGGREGATE_SELECTION_CHANGED_EVENT = 'aggregateSelection';
        const ANIMATION_READY_EVENT = 'animationReady';
        const CAMERA_CHANGE_EVENT = 'cameraChanged';
        const CAMERA_TRANSITION_COMPLETED = 'cameraTransitionCompleted';
        const CUTPLANES_CHANGE_EVENT = 'cutplanesChanged';
        const CANCEL_LEAFLET_SCREENSHOT = 'cancelLeafletScreenshot';
        const ESCAPE_EVENT = 'escape';
        const EXPLODE_CHANGE_EVENT = 'explodeChanged';
        const EXTENSION_LOADED_EVENT = 'extensionLoaded';
        const EXTENSION_UNLOADED_EVENT = 'extensionUnloaded';
        const FINAL_FRAME_RENDERED_CHANGED_EVENT = 'finalFrameRenderedChanged';
        const FIT_TO_VIEW_EVENT = 'fitToView';
        const FRAGMENTS_LOADED_EVENT = 'fragmentsLoaded';
        const FULLSCREEN_MODE_EVENT = 'fullscreenMode';
        const GEOMETRY_LOADED_EVENT = 'geometryLoaded';
        const GEOMETRY_DOWNLOAD_COMPLETE_EVENT = 'geometryDownloadComplete';
        const HIDE_EVENT = 'hide';
        const HYPERLINK_EVENT = 'hyperlink';
        const ISOLATE_EVENT = 'isolate';
        const LAYER_VISIBILITY_CHANGED_EVENT = 'layerVisibilityChanged';
        const LOAD_GEOMETRY_EVENT = 'loadGeometry';
        const LOAD_MISSING_GEOMETRY = 'loadMissingGeometry';
        const MODEL_ADDED_EVENT = 'modelAdded';
        const MODEL_ROOT_LOADED_EVENT = 'modelRootLoaded';
        const MODEL_REMOVED_EVENT = 'modelRemoved';
        const MODEL_LAYERS_LOADED_EVENT = 'modelLayersLoaded';
        const MODEL_UNLOADED_EVENT = 'modelUnloaded';
        const NAVIGATION_MODE_CHANGED_EVENT = 'navigationModeChanged';
        const OBJECT_TREE_CREATED_EVENT = 'objectTreeCreated';
        const OBJECT_TREE_UNAVAILABLE_EVENT = 'objectTreeUnavailable';
        const PREF_CHANGED_EVENT = 'prefChanged';
        const PREF_RESET_EVENT = 'prefReset';
        const PROGRESS_UPDATE_EVENT = 'progressUpdate';
        const RENDER_FIRST_PIXEL = 'renderFirstPixel';
        const RENDER_OPTION_CHANGED_EVENT = 'renderOptionChanged';
        const RENDER_PRESENTED_EVENT = 'renderPresented';
        const RESET_EVENT = 'reset';
        const RESTORE_DEFAULT_SETTINGS_EVENT = 'restoreDefaultSettings';
        const SELECTION_CHANGED_EVENT = 'selection';
        const SHOW_EVENT = 'show';
        const TEXTURES_LOADED_EVENT = 'texturesLoaded';
        const TOOL_CHANGE_EVENT = 'toolChanged';
        const TOOLBAR_CREATED_EVENT = 'toolbarCreated';
        const VIEWER_INITIALIZED = 'viewerInitialized';
        const VIEWER_RESIZE_EVENT = 'viewerResize';
        const VIEWER_STATE_RESTORED_EVENT = 'viewerStateRestored';
        const VIEWER_UNINITIALIZED = 'viewerUninitialized';
        const WEBGL_CONTEXT_LOST_EVENT = 'webGlContextLost';

        interface ViewerEventArgs {
          target?: Viewer3D;
          model?: ViewerItem;
          type: string;
          [key: string]: any;
        }

        interface BubbleNodeSearchProps {
          role?: '3d'|'2d'|string;
          type?: 'view'|'geometry'|string;
          mime?: string;
        }

        class BubbleNode {
          static MODEL_NODE: BubbleNodeSearchProps;
          static GEOMETRY_SVF_NODE: BubbleNodeSearchProps;
          static SHEET_NODE: BubbleNodeSearchProps;
          static GEOMETRY_F2D_NODE: BubbleNodeSearchProps;
          static VIEWABLE_NODE: BubbleNodeSearchProps;

          parent: BubbleNode;
          id: number;
          data: ViewerItem;
          isLeaf: boolean;
          sharedPropertyDbPath: string;
          lodNode: object;
          children: BubbleNode[];

          constructor(rawNode: object, parent?: BubbleNode);

          findByGuid(guid: string): BubbleNode;
          findParentGeom2Dor3D(): BubbleNode;
          findPropertyDbPath(): string;
          findViewableParent(): BubbleNode;
          getDefaultGeometry(): any;
          getLodNode(): boolean;
          getNamedViews(): string[];
          getPlacementTransform(): object;
          getRootNode(): BubbleNode;
          getTag(tag: string): any;
          getViewableRootPath(): string;
          guid(): string;
          is2D(): boolean;
          is2DGeom(): boolean;
          is3D(): boolean;
          is3DGeom(): boolean;
          isGeometry(): boolean;
          isGeomLeaf(): boolean;
          isMetadata(): boolean;
          isViewable(): boolean;
          isViewPreset(): boolean;
          name(): string;
          search(propsToMatch: BubbleNodeSearchProps): BubbleNode[];
          searchByTag(tagsToMatch: object): BubbleNode[];
          setTag(tag: string, value: any): void;
          traverse(cb: (bubble: BubbleNode) => boolean): boolean;
          urn(searchParent?: boolean): string;
          useAsDefault(): boolean;
        }

        let theExtensionManager: ExtensionManager;

        interface InitializerOptions {
            api?: string;
            env?: string;
            webGLHelpLink?: string;
            getAccessToken?(callback?: (accessToken: string, expires: number) => void): void;
            refreshToken?(callback?: (accessToken: string, expires: number) => void): void;
            language?: string;
            accessToken?: string;
            useADP?: boolean;
            useConsolidation?: boolean;
            [key: string]: any;
        }

        function getApiEndpoint(): string;
        function Initializer(options: InitializerOptions, callback?: () => void): void;

        class Document {
            constructor(dataJSON: object, path: string, acmsession: string);
            static load(documentId: string, successCallback: (doc: Document) => void,
            errorCallback: (errorCode: ErrorCodes, errorMsg: string, messages: any[]) => void, accessControlProperties?: any): void;
            static getSubItemsWithProperties(item: object, properties: Properties, recursive: boolean): object[];

            acmSessionId: string;
            myData: any;

            downloadAecModelData(onFinished?: (data: any) => void): Promise<any>;
            getAecModelData(node: BubbleNode): any;
            getFullPath(urn: string): string;
            getItemById(id: string): object;
            getMessages(itemId: string, excludeGlobal: boolean): object;
            getNumViews(item: object): number;
            getParentId(item: string): string;
            getPath(): string;
            getPropertyDbPath(): string;
            getRoot(): BubbleNode;
            getRootItem(): object;
            getSubItemsWithProperties(item: object, properties: object, recursive: boolean): object;
            getThumbnailOptions(item: object, width: number, height: number): ThumbnailOptions;
            getThumbnailPath(item: string, width: number, height: number): string;
            getViewableItems(document: Document): void;
            getViewablePath(item: object, outLoadOptions?: object): string;
            getViewGeometry(item: object): object;
            load(documentId: string, onSuccessCallback: () => void, onErrorCallback: () => void, accessControlProperties?: object): void;
            requestThumbnailWithSecurity(data: string, onComplete: (err: Error, response: any) => void): void;
        }

        function shutdown(): void;

        class EventDispatcher {
            constructor();

            addEventListener(type: string, listener: (event: any) => void, options?: any): void;
            removeEventListener(type: string, listener: (event: any) => void): void;
            dispatchEvent(event: any): void;
            hasEventListener(type: string, listener: (event: any) => void): boolean;
        }

        class Extension {
            viewer: GuiViewer3D;
            options: any;
            constructor(viewer: GuiViewer3D, options: any);

            load(): boolean;
            unload(): boolean;
            onToolbarCreated(toolbar?: UI.ToolBar): void;
        }

        class ExtensionManager {
            extensions: { [key: string]: Extension };
            extensionsAsync: { [key: string]: Extension };

            registerExtension(extensionId: string, extension: object): boolean;
            getExtension(extensionId: string): Extension|null;
            unregisterExtension(extensionId: string): boolean;
            registerExternalExtension(extensionId: string, urlPath: string): boolean;
            getExternalPath(extensionId: string): string|null;
            unregisterExternalExtension(extensionId: string): boolean;
            getRegisteredExtensions(): Array<{ id: string, inMemory: boolean, isAsync: boolean}>;
            popuplateOptions(options: any): void;
        }

        class InstanceTree {
            maxDepth: number;
            nodeAccess: InstanceTreeAccess;
            numHidden: number;
            numOff: number;
            objectCount: number;

            enumNodeChildren(node: any, callback: (dbId: number) => void, recursive?: boolean): void;
            enumNodeFragments(node: any, callback: (fragId: number) => void, recursive?: boolean): void;
            getChildCount(dbId: number): number;
            getNodeBox(dbId: number, nodeBox: Float32Array): void;
            getNodeParentId(dbId: number): number;
            getRootId(): number;
            setFlagGlobal(flag: any, value: any): void;
            setFlagNode(dbId: number, flag: any, value: any): boolean;
        }

        class InstanceTreeAccess {
            children: any;
            dbIdToIndex: any;
            nameSuffixes: any;
            names: any;
            nodeBoxes: any;
            nodes: any;
            numNodes: number;
            rootId: number;
            strings: string[];
            visibleIds: number;
        }

        interface InstanceTreeNode {
            dbId: number;
            name: string;
            fragments: number[];
            children: InstanceTreeNode[];
        }

        class Model {
            id: number;
            visibilityManager: Private.VisibilityManager;

            clearThemingColors(): void;
            fetchTopology(maxSizeMB: number): Promise<object>;
            getBoundingBox(): THREE.Box3;
            getBulkProperties(dbIds: number[], propFilter?: string[], successCallback?: (r: PropertyResult[]) => void, errorCallback?: (err: any) => void): void;
            getData(): any;
            getFragmentList(): any;
            getGeometryList(): any;
            getObjectTree(successCallback?: (result: InstanceTree) => void, errorCallback?: (err: any) => void): void;
            getProperties(dbId: number, successCallback?: (r: PropertyResult) => void, errorCallback?: (err: any) => void): void;
            geomPolyCount(): number;
            getDefaultCamera(): THREE.Camera;
            getDisplayUnit(): string;
            getDocumentNode(): object;
            getExternalIdMapping(onSuccessCallback: (idMapping: { [key: string]: number; }) => void, onErrorCallback: () => void): any;
            getFastLoadList(): any;
            getFragmentMap(): any;
            getInstanceTree(): InstanceTree;
            getLayersRoot(): object;
            getMetadata(itemName: string, subitemName?: string, defaultValue?: any): any;
            getRoot(): object;
            getRootId(): number;
            getTopoIndex(fragId: number): number;
            getTopology(index: number): object;
            getUnitData(unit: string): object;
            getUnitScale(): number;
            getUnitString(): string;
            getUpVector(): number[];
            hasTopology(): boolean;
            instancePolyCount(): number;
            is2d(): boolean;
            is3d(): boolean;
            isAEC(): boolean;
            isLoadDone(): boolean;
            isObjectTreeCreated(): boolean;
            isObjectTreeLoaded(): boolean;
            pageToModel(): void;
            pointInClip(): void;
            search(text: string, onSuccessCallback: () => void, onErrorCallback: () => void, attributeNames?: string[]): void;
            setData(data: object): void;
            setThemingColor(dbId: number, color: THREE.Vector4, recursive?: boolean): void;
            setUUID(urn: string): void;
        }

        interface PropertyResult {
            dbId: number;
            externalId?: string;
            name?: string;
            properties: Property[];
        }

        interface Property {
            attributeName: string;
            displayCategory: string;
            displayName: string;
            displayValue: string;
            hidden: boolean;
            type: number;
            units: string;
        }

        class Navigation {
            dollyFromPoint(distance: number, point: THREE.Vector3): void;
            fitBounds(immediate: boolean, bounds: THREE.Box3): any;
            getAlignedUpVector(): THREE.Vector3;
            getCamera(): any;
            getCameraRightVector(worldAligned: boolean): THREE.Vector3;
            getCameraUpVector(): THREE.Vector3;
            setCameraUpVector(up: THREE.Vector): void;
            getEyeVector(): THREE.Vector3;
            getFovMin(): number;
            getFovMax(): number;
            getIs2D(): boolean;
            getPivotPoint(): THREE.Vector3;
            setPivotPoint(pivot: THREE.Vector3): void;
            getPivotSetFlag(): boolean;
            getUsePivotAlways(): boolean;
            setUsePivotAlways(value: boolean): any;
            getPosition(): THREE.Vector3;
            setPosition(pos: THREE.Vector3): void;
            getReverseZoomDirection(): boolean;
            setReverseZoomDirection(state: boolean): void;
            setOrbitPastWorldPoles(value: boolean): any;
            getTarget(): THREE.Vector3;
            setTarget(target: THREE.Vector3): void;
            getScreenViewport(): ClientRect;
            setScreenViewport(viewport: ClientRect): void;
            setView(position: THREE.Vector3, target: THREE.Vector3): void;
            setVerticalFov(fov: number, adjustPosition: boolean): void;
            setUseLeftHandedInput(value: boolean): any;
            setZoomTowardsPivot(value: boolean): any;
        }

        interface Properties {
            type: string;
            role: string;
        }

        class ToolController {
            activateTool(name: string): boolean;
            deactivateTool(name: string): boolean;
            registerTool(tool: any): boolean;
            deregisterTool(tool: any): boolean;
            getToolNames(): string[];
            getActiveToolName(): string;
        }

        interface ToolInterface {
            getCursor?(): string;
            getName(): string;
            getNames(): string[];
            register(): void;
            deregister(): void;
            activate(name: string, viewerApi?: GuiViewer3D): void;
            deactivate(name: string): void;
            update(): boolean;
            handleSingleClick?(event: MouseEvent, button: number): boolean;
            handleDoubleClick?(event: MouseEvent, button: number): boolean;
            handleSingleTap?(event: Event): boolean;
            handleDoubleTap?(event: Event): boolean;
            handleKeyDown?(event: KeyboardEvent, keyCode: number): boolean;
            handleKeyUp?(event: KeyboardEvent, keyCode: number): boolean;
            handleWheelInput?(delta: number): boolean;
            handleButtonDown?(event: MouseEvent, button: number): boolean;
            handleButtonUp?(event: MouseEvent, button: number): boolean;
            handleMouseMove?(event: MouseEvent): boolean;
            handleGesture?(event: Event): boolean;
            handleBlur?(event: Event): boolean;
            handleResize?(): void;
        }

        class UnifiedCamera extends THREE.Camera {
            isPerspective: boolean;
        }

        interface ContextMenuCallbackStatus {
            hasHidden: boolean;
            hasSelected: boolean;
            hasVisible: boolean;
            numSelected: number;
        }

        interface ContextMenuItem {
            target: () => void;
            title: string;
        }

        class ScreenMode {
        }

        abstract class ScreenModeDelegate {
          constructor(viewer: Viewer3D);

          doScreenModeChange(oldMode: ScreenMode, newMode: ScreenMode): void;
          fullscreenEventListener(): void;
          getEscapeMode(): ScreenMode | undefined;
          getMode(): ScreenMode;
          getNextMode(): ScreenMode | undefined;
          isModeSupported(mode: ScreenMode): boolean;
          onScreenModeChanged(oldMode: ScreenMode, newMode: ScreenMode): void;
          setMode(mode: ScreenMode): boolean;
          uninitialize(): void;
        }

        class AppScreenModeDelegate extends ScreenModeDelegate {
          constructor(viewer: Viewer3D);
        }

        class NullScreenModeDelegate extends ScreenModeDelegate {
          constructor(viewer: Viewer3D);
        }

        class Viewer3D {
            constructor(container: HTMLElement, config?: Viewer3DConfig);

            canvas: HTMLCanvasElement;
            container: Element;
            navigation: Navigation;
            id: number;
            impl: Private.Viewer3DImpl;
            model: Model;
            started: boolean;
            toolbar: UI.ToolBar;

            start(urn?: string, onSuccesfullCallback?: () => void, onErrorCallback?: (errorCode: number, errorMessage: string, statusCode: number, statusText: string) => void): any;
            startWithDocumentNode(avDocument: Document, manifestNode: any, options: object): Promise<void>;
            registerUniversalHotkeys(): void;
            createControls(): void;
            initialize(): any;
            setUp(config: any): void;
            tearDown(): void;
            run(): void;
            localize(): void;
            uninitialize(): void;
            finish(): void;
            setLoadHeuristics(options: object): void;
            trackADPSettingsOptions(): void;
            trackADPExtensionsLoaded(): void;
            activateDefaultNavigationTools(is2d: boolean): void;
            registerDimensionSpecificHotkeys(is2d: boolean): void;
            onModelAdded(model: Model, preserveTools: boolean): void;
            loadModel(url: string, options: object, onSuccessCallback?: (model: Model) => void, onErrorCallback?: (errorCode: number, errorMessage: string, errorArgs: any) => void): any;
            unloadModel(model: Model): void;
            loadDocumentNode(avDocument: Document, manifestNode: any/*BubbleNode*/, options?: object): Promise<Model>;
            unloadDocumentNode(manifestNode: any/*BubbleNode*/): boolean;
            getDimensions(): Private.Dimensions;
            resize(): void;
            getHotkeyManager(): any/*HotkeyManager*/;
            getCamera(): THREE.Camera;
            getState(filter?: any): any;
            restoreState(viewerState: any, filter?: any, immediate?: boolean): boolean;
            setView(viewNode: any/*BubbleNode*/, options: object): boolean;
            setViewFromArray(params: number[]): void;
            getCameraFromViewArray(paramas: number[]): THREE.Camera;
            getViewArrayFromCamera(): number[];
            setViewFromViewBox(viewbox: number[], name: string, skipTransition: boolean): void;
            activateLayerState(name: string): void;
            getLayerStates(): any[];
            setViewFromFile(model: Model): void;
            getProperties(dbId: number, successCallback?: (r: PropertyResult) => void, errorCallback?: (errorCode: number, errorMessage: string, statusCode: number, statusText: string) => void): any;
            getObjectTree(onSuccessCallback?: (objTree: InstanceTree) => void, onErrorCallback?: (errorCode: number, errorMessage: string, statusCode: number, statusText: string) => void): any;
            setCanvasClickBehavior(config: any): void;
            search(text: string, onSuccess: any, onError: any, attributeNames: string[]): void;
            getHiddenNodes(): number[];
            getIsolatedNodes(): number[];
            isolate(node?: number[]|number, model?: Model): void;
            setBackgroundColor(red: number, green: number, blue: number, red2: number, green2: number, blue2: number): void;
            toggleSelect(dbId: number, model: Model, selectionType: number): void;
            select(dbIds: number[]|number, model?: Model, selectionType?: number): void;
            clearSelection(): void;
            getSelectionVisibility(): any;
            getSelectionCount(): number;
            setSelectionMode(mode: number): void;
            getSelection(): number[];
            getAggregateSelection(callback?: (model: Model, dbId: number) => void): any[];
            getAggregateIsolation(): any[];
            getAggregateHiddenNodes(): any[];
            hide(node: number|number[]): void;
            show(node: number|number[]): void;
            showAll(): void;
            toggleVisibility(dbId: number, model?: Model): void;
            areAllVisible(): boolean;
            isNodeVisible(node: number, model?: Model): boolean;
            explode(scale: number): void;
            getExplodeScale(): number;
            setQualityLevel(useSAO: boolean, useFXAA: boolean): void;
            setGhosting(value: boolean): void;
            setGroundShadow(value: boolean): void;
            setGroundReflection(value: boolean): void;
            setEnvMapBackground(value: boolean): void;
            setFirstPersonToolPopup(value: boolean): void;
            getFirstPersonToolPopup(): boolean;
            setBimWalkToolPopup(value: boolean): void;
            getBimWalkToolPopup(): boolean;
            setProgressiveRendering(value: boolean): void;
            setGrayscale(value: boolean): void;
            setSwapBlackAndWhite(value: boolean): void;
            setOptimizeNavigation(value: boolean): void;
            setNavigationLock(value: boolean): void;
            getNavigationLock(): boolean;
            setNavigationLockSettings(settings: any): void;
            getNavigationLockSettings(): any;
            setActiveNavigationTool(toolName?: string): void;
            getActiveNavigationTool(): string;
            setDefaultNavigationTool(name: string): void;
            getDefaultNavigationTool(): string;
            getFOV(): number;
            setFOV(degrees: number): void;
            getFocalLength(): number;
            setFocalLength(mm: number): void;
            hideLines(hide: boolean): void;
            hidePoints(hide: boolean): void;
            setDisplayEdges(show: boolean): void;
            applyCamera(camera: THREE.Camera, fit: boolean): void;
            fitToView(ids?: null|number[], model?: Model, immediate?: boolean): void;
            setClickConfig(what: string, where: string, newAction: string[]): boolean;
            getClickConfig(what: string, where: string): string[];
            setClickToSetCOI(state: boolean, updatePrefs?: boolean): void;
            initSettings(): void;
            setLightPreset(preset: number): void;
            setUsePivotAlways(value: boolean): void;
            setReverseZoomDirection(value: boolean): void;
            setReverseHorizontalLookDirection(value: boolean): void;
            setReverseVerticalLookDirection(value: boolean): void;
            setZoomTowardsPivot(value: boolean): void;
            setOrbitPastWorldPoles(value: boolean): void;
            setUseLeftHandedInput(value: boolean): void;
            setLayerVisible(nodes: any[], visible: boolean, isolate?: boolean): void;
            isLayerVisible(node: any): boolean;
            anyLayerHidden(): boolean;
            allLayersHidden(): boolean;
            setGroundShadowColor(color: THREE.Color): void;
            setGroundShadowAlpha(alpha: number): void;
            setGroundReflectionColor(color: THREE.Color): void;
            setGroundReflectionAlpha(alpha: number): void;
            getCutPlanes(): THREE.Vector4[];
            setCutPlanes(planes: THREE.Vector4[]): void;
            getScreenShot(w: number, h: number, cb: any): void;
            setContextMenu(menu: any): void;
            setDefaultContextMenu(): boolean;
            triggerContextMenu(event: any): boolean;
            triggerSelectionChanged(dbId: number): void;
            triggerDoubleTapCallback(event: any): void;
            triggerSingleTapCallback(event: any): void;
            triggerSwipeCallback(event: any): void;
            initContextMenu(): void;
            registerContextMenuCallback(id: string, callback: (menu: any, status: any) => void): void;
            unregisterContextMenuCallback(id: string): boolean;
            runContextMenuCallbacks(menu: any[], status: any): void;
            joinLiveReview(sessionId: string): void;
            leaveLiveReview(): void;
            setModelUnits(modelUnits: any): void;
            worldToClient(pt: THREE.Vector3): THREE.Vector3;
            clientToWorld(clientX: number, clientY: number, ignoreTransparent: boolean): object;
            modelHasTopology(): boolean;
            setSelectionColor(col: THREE.Color, selectionType: number): void;
            set2dSelectionColor(col: THREE.Color, opacity: number): void;
            setTheme(name: string): void;
            setThemingColor(dbId: number, color: THREE.Vector4, model?: Model, recursive?: boolean): void;
            clearThemingColors(model: Model): void;
            hideModel(model: number|Model): boolean;
            showModel(model: number|Model, preserveTools: boolean): boolean;
            getVisibleModels(): Model[];
            restoreDefaultSettings(): void;
            disableHighlight(disable: boolean): void;
            disableSelection(disable: boolean): void;
            isHighlightDisabled(): boolean;
            isHighlightPaused(): boolean;
            isHighlightActive(): boolean;
            isSelectionDisabled(): boolean;
            loadExtension(extensionId: string, options?: object): Promise<Extension>;
            getExtension(extensionId: string, callback?: (ext: Extension) => void): Extension;
            unloadExtension(extensionId: string): boolean;
            loadExtensionAsync(extensionId: string, url: string, options?: object): Promise<Extension>;
            forEachExtension(callback: (ext: Extension) => void): void;
            activateExtension(extensionId: string, mode: string): boolean;
            deactivateExtension(extensionId: string): boolean;
            isExtensionActive(extensionId: string, mode: string): boolean;
            isExtensionLoaded(extensionId: string): boolean;
            getLoadedExtensions(): string[];
            getExtensionModes(extensionId: string): string[];
            reorderElements(element: object): void;
            appendOrderedElementToViewer(layerOrderId: string): void;
            hitTest(x: number, y: number, ignoreTransparent: boolean): Private.HitTestResult;
            refresh(clear: boolean): void;
            addEventListener(type: string, callback: (event: any) => void): any;
            hasEventListener(type: string, callback: (event: any) => void): any;
            removeEventListener(type: string, callback: (event: any) => void): any;
            dispatchEvent(event: object): void;
        }

        class GuiViewer3D extends Viewer3D {
            toolController: ToolController;
            autocam: any;
            progressbar: any;
            utilities: ViewingUtilities;
            prefs: any;
            dockingPanels: any;
            overlays: OverlayManager;

            addPanel(panel: UI.DockingPanel): boolean;
            createDebugSubmenu(button: UI.Button): void;
            createViewerOptionsMenu(model: Model): void;
            createUI(model: Model): void;
            onFullScreenModeEvent(event: object): void;
            onProgressBarUpdate(event: object): void;
            addOptionToggle(parent: Element, tooltip: string, initialState: any, onchange: (checked: boolean) => void, saveKey: boolean): void;
            addOptionList(parent: Element, label: string, optionList: string[], initialIndex: number, onchange: (index: number) => void, saveKey: boolean): void;
            showViewer3dOptions(show: boolean): void;
            showRenderingOptions(show: boolean): void;
            showLayerManager(show: boolean): void;
            initHotkeys(model: Model): void;
            setModelStructurePanel(modelStructurePanel: any/*Autodesk.Viewing.UI.ModelStructurePanel*/): void;
            setLayersPanel(layersPanel: any/*Autodesk.Viewing.UI.LayersPanel*/): void;
            setPropertyPanel(propertyPanel: any/*Autodesk.Viewing.UI.PropertyPanel*/): void;
            getPropertyPanel(createDefault?: boolean): any/*Autodesk.Viewing.UI.PropertyPanel*/;
            setSettingsPanel(settingsPanel: any/*Autodesk.Viewing.UI.SettingsPanel*/): void;
            getSettingsPanel(createDefault?: boolean, model?: Model): any/*Autodesk.Viewing.UI.SettingsPanel*/;
            createSettingsPanel(model: Model): void;
            initModelTools(model: Model): void;
            setPropertiesOnSelect(onSelect: boolean): void;
            addDivider(parent: Element): void;
            initDebugTools(): void;
            removeDebugTools(): void;
            initModelStats(): void;
            initEscapeHandlers(): void;
            getToolbar(create: boolean): UI.ToolBar;
            showModelStructurePanel(show: boolean): void;
            onPanelVisible(panel: UI.DockingPanel): void;
            updateFullscreenButton(mode: any): void;
            removePanel(panel: UI.DockingPanel): boolean;
            resizePanels(options: object): void;
            initExplodeSlider(): void;
            initInspectTools(): void;
            initModality(): void;
            updateToolbarButtons(width: number, height: number): void;
        }

        class OverlayManager {
            addScene(name: string): boolean;
            removeScene(name: string): void;
            clearScene(name: string): void;
            hasScene(name: string): boolean;
            addMesh(mesh: THREE.Mesh|THREE.Mesh[], name: string): boolean;
            removeMesh(mesh: THREE.Mesh|THREE.Mesh[], name: string): boolean;
            hasMesh(mesh: THREE.Mesh, name: string): boolean;
        }

        class ViewingUtilities {
            getHitPoint(x: number, y: number): THREE.Vector3;
            getBoundingBox(ignoreSelection?: boolean): THREE.Box3;
        }

        namespace Extensions {
          class ViewerPropertyPanel extends UI.PropertyPanel {
            constructor(viewer: GuiViewer3D);
            currentNodeIds: object[];
          }
        }

        namespace Private {
            function getHtmlTemplate(url: string, callback: (error: string, content: string) => void): void;

            const env: string;

            function formatValueWithUnits(value: number, units: string, type: number, precision: number): string;
            function convertUnits(fromUnits: string, toUnits: string, calibrationFactor: number,
                                  d: number, type: string): number;
            function calculatePrecision(value: string|number): number;

            interface PreferencesOptions {
              localStorage?: boolean;
              prefix?: string;
            }

            class Preferences {
              constructor(viewer: Viewer3D, options: PreferencesOptions);

              add(name: string, defaultValue: any, tags?: string[]|string): boolean;
              addListeners(name: string, onChangedCallback: () => void, onResetCallback: () => void): void;
              get(): any;
              hasTag(name: string, tag: string): boolean;
              load(defaultValues: object): void;
              remove(name: string, removeFromWebStorage?: boolean): boolean;
              removeListeners(name: string): void;
              reset(tag?: string, include?: boolean): void;
              set(name: string, value: any, notify?: boolean): boolean;
              tag(tag: string, names?: string[]|string): void;
              untag(tag: string, names?: string[]|string): void;
            }

            class ViewerState {
              constructor(viewer: Viewer3D);

              areEqual(viewerStateA: object, viewerStateB: object, filter?: object): boolean;
              getSeedUrn(): string;
              getState(filter?: object): object;
              restoreState(viewerState: object, filter?: object, immediate?: boolean): boolean;
            }

            interface HitTestResult {
                dbId: number;
                face: THREE.Face3;
                fragId: number;
                intersectPoint: THREE.Vector3;
                model: Model;
            }

            interface Dimensions {
                width: number;
                height: number;
            }

            namespace HudMessage {
               function displayMessage(container: Element, messageSpec: {
                    msgTitleKey: string,
                    msgTitleDefault?: string,
                    messageKey: string,
                    messageDefaultValue?: string,
                    buttonText?: string,
                    checkboxChecked?: boolean
                }, closeCallback?: (event: any) => void, buttonCallback?: (event: any) => void, checkboxCallback?: (event: any) => void): void;

                function dismiss(): boolean;
            }

            class Viewer3DImpl {
                constructor(thecanvas: any, theapi: any);

                visibilityManager: VisibilityManager;

                addOverlay(overlayName: string, mesh: any): void;
                clientToViewport(clientX: number, clientY: number): THREE.Vector3;
                createOverlayScene(name: string, materialPre?: THREE.Material, materialPost?: THREE.Material, camera?: any): void;
                hitTest(clientX: number, clientY: number, ignoreTransparent: boolean): HitTestResult;
                hitTestViewport(vpVec: THREE.Vector3, ignoreTransparent: boolean): HitTestResult;
                initialize(needsClear: boolean, needsRender: boolean, overlayDirty: boolean): void;
                invalidate(needsClear: boolean, needsRender?: boolean, overlayDirty?: boolean): void;
                setLightPreset(index: number, force?: boolean): void;
                selector: any;
                model: any;
                scene: THREE.Scene;
                sceneAfter: THREE.Scene;
                viewportToClient(viewportX: number, viewportY: number): THREE.Vector3;
                modelqueue(): any;
                matman(): any;
                getMaterials(): any;
                getScreenShotProgressive(w: number, h: number, onFinished?: () => void, options?: any): any;
                removeOverlayScene(name: string): any;
                removeOverlay(name: string, mesh: any): any;
                getFitBounds(p: boolean): THREE.Box3;
                rayIntersect(ray: THREE.Ray): HitTestResult;

                getRenderProxy(model: Model, fragId: number): any;
                sceneUpdated(param: boolean): void;
                setViewFromCamera(camera: THREE.Camera, skipTransition?: boolean, useExactCamera?: boolean): void;
            }

            class VisibilityManager {
                constructor(viewerImpl: any, model: any);

                getHiddenNodes(): any;
                getInstanceTree(): InstanceTree;
                getIsolatedNodes(): any;
                hide(node: number | object): void;
                isNodeVisible(dbId: number): boolean;
                isolate(node: number | object): void;
                isolateMultiple(nodeList: any[]): void;
                isolateNone(): void;
                setAllVisibility(visible: boolean): void;
                setVisibilityOnNode(node: number | object, visible: boolean): void;
                setNodeOff(node: number | object, isOff: boolean): void;
                show(node: number | object): void;
                toggleVisibility(node: number | object): void;
                updateNodeVisibilityTracking(node: number | object, visible: boolean): void;
            }
        }

        namespace UI {
          interface DockingPanelOptions {
            localizeTitle?: boolean;
            [key: string]: any;
          }

          interface ScrollContainerOptions {
            left: boolean;
            heightAdjustment: number;
            marginTop: number;
            [key: string]: any;
          }

          interface ContentSize {
            height: number;
            width: number;
          }

          interface ResizeOptions {
            maxHeight: number;
            [key: string]: any;
          }

          interface AddPropertyOptions {
            localizeCategory: boolean;
            localizeProperty: boolean;
            [key: string]: any;
          }

          interface ControlOptions {
            collapsible?: boolean;
            [key: string]: any;
          }

          interface AddControlOptions {
            index?: object;
            [key: string]: any;
          }

          interface DisplayCategoryOptions {
            localize?: boolean;
            [key: string]: any;
          }

          interface MenuItem {
            title: string;
            target: () => void | MenuItem[];
          }

          const COLLAPSED_CHANGED = 'Control.VisibilityChanged';
          const VISIBILITY_CHANGED = 'Control.CollapsedChanged';
          const CONTROL_ADDED = 'ControlGroup.ControlAdded';
          const CONTROL_REMOVED = 'ControlGroup.ControlRemoved';
          const SIZE_CHANGED = 'ControlGroup.SizeChanged';

          class DockingPanel {
            constructor(parentContainer: HTMLElement, id: string, title: string, options?: DockingPanelOptions);

            closer: HTMLElement;
            container: HTMLElement;
            content: Node;
            footer: HTMLElement;
            scrollContainer: HTMLElement;
            title: HTMLElement;
            titleLabel: string;

            addEventListener(target: object, eventId: string, callback: () => void): void;
            addVisibilityListener(callback: (state: boolean) => void): void;
            createCloseButton(): HTMLElement;
            createFooter(): HTMLElement;
            createScrollContainer(options: ScrollContainerOptions): void;
            createTitleBar(title: string): HTMLElement;
            getContainerBoundingRect(): ClientRect;
            getContentSize(): ContentSize;
            initialize(): void;
            initializeCloseHandler(closer: HTMLElement): void;
            initializeMoveHandlers(mover: HTMLElement): void;
            isVisible(): boolean;
            onEndMove(event: MouseEvent, endX: number, endY: number): void;
            onMove(event: MouseEvent, currentX: number, currentY: number): void;
            onStartMove(event: MouseEvent, startX: number, startY: number): void;
            onTitleClick(event: Event): void;
            onTitleDoubleClick(event: Event): void;
            removeEventListener(target: object, eventId: string, callback: () => void): boolean;
            resizeToContent(options: ResizeOptions): void;
            setTitle(text: string, options: DockingPanelOptions): void;
            setVisible(show: boolean): void;
            uninitialize(): void;
            visibilityChanged(): void;
          }

          class LayersPanel extends DockingPanel {
            build(): void;
            createNode(node: object, parent: HTMLElement): void;
            getNodeClass(node: object): string;
            getNodeLabel(node: object): string;
            isGroupCollapsed(node: object): boolean;
            isGroupNode(node: object): boolean;
            onClick(node: object, event: Event): void;
            onDoubleClick(node: object, event: Event): void;
            onIconClick(node: object, event: Event): void;
            onImageClick(node: object, event: Event): void;
            onRightClick(node: object, event: Event): void;
            setGroupCollapsed(node: object, collapse: boolean): void;
            setLayerVisible(node: object, collapse: boolean): void;
            shouldInclude(node: object): boolean;
            update(): void;
          }

          class PropertyPanel extends DockingPanel {
            addProperty(name: string, value: string, category: string, options?: AddPropertyOptions): boolean;
            areDefaultPropertiesShown(): void;
            displayCategory(category: object, parent: HTMLElement, options: DisplayCategoryOptions): HTMLElement[];
            displayProperty(property: object, parent: HTMLElement, options: DisplayCategoryOptions): HTMLElement[];
            getCategoryClass(category: object): string;
            getPropertyClass(property: object): string;
            hasProperties(): boolean;
            highlight(text: string, options: object): void;
            isCategoryCollapsed(category: object): boolean;
            onCategoryClick(category: object, event: Event): void;
            onCategoryDoubleClick(category: object, event: Event): void;
            onCategoryIconClick(category: object, event: Event): void;
            onCategoryRightClick(category: object, event: Event): void;
            onPropertyClick(property: object, event: Event): void;
            onPropertyDoubleClick(property: object, event: Event): void;
            onPropertyIconClick(property: object, event: Event): void;
            onPropertyRightClick(property: object, event: Event): void;
            removeAllProperties(): void;
            removeProperty(name: string, value: string, category: string, options?: object): boolean;
            setCategoryCollapsed(category: object, collapsed: boolean): void;
            setProperties(properties: Array<{displayName: string, displayValue: any}>, options?: object): void;
            showDefaultProperties(): void;
            showNoProperties(): void;
          }

          class SettingsPanel extends DockingPanel {
            addCheckbox(tabId: string, caption: string, initialState: boolean,
                        onchange: () => void, options?: object): string;
            addControl(tabId: string, control: object|HTMLElement, options: object|undefined): string;
            addDropDownMenu(tabId: string, caption: string, items: MenuItem[],
                            initialItemIndex: number, onchange: () => void, options: object|undefined): string;
            addSlider(tabId: string, caption: string, min: number, max: number, initialValue: number,
                      onchange: () => void, options: object|undefined): string;
            addTab(tabId: string, tabTitle: string, options: object|undefined): boolean;
            getControl(controlId: string): object;
            hasTab(tabId: string): boolean;
            isTabSelected(tabId: string): boolean;
            removeCheckbox(checkboxId: string|Control): boolean;
            removeControl(controlId: string|Control): boolean;
            removeDropdownMenu(dropdownMenuId: string|Control): boolean;
            removeSlider(sliderId: string|Control): boolean;
            removeTab(tabId: string): boolean;
            selectTab(tabId: string): boolean;
            setVisible(show: boolean, skipTransition?: boolean): void;
          }

          class ModelStructurePanel extends DockingPanel {
            addClass(id: string, className: string): boolean;
            getNodeClass(node: object): string;
            getNodeLabel(node: object): string;
            isGroupCollapsed(node: object): boolean;
            isGroupNode(node: object): boolean;
            onClick(node: object, event: Event): void;
            onDoubleClick(node: object, event: Event): void;
            onHover(node: object, event: Event): void;
            onIconClick(node: object, event: Event): void;
            onRightClick(node: object, event: Event): void;
            removeClass(id: string, className: string): boolean;
            setGroupCollapsed(node: object, collapsed: boolean): void;
            setModel(instanceTree: object, modelTitle: string): void;
            setSelection(nodes: Model[]): void;
            shouldInclude(node: Model): boolean;
          }

          class ObjectContextMenu {
            constructor(viewer: Viewer3D);

            buildMenu(event: Event, status: object): MenuItem[];
            hide(): boolean;
            show(event: Event): void;
          }

          class ControlEventArgs {
            VISIBILITY_CHANGED: 'Control.VisibilityChanged';
            COLLAPSED_CHANGED: 'Control.CollapsedChanged';
            ACTIVE_BUTTON_CHANGED: 'RadioButtonGroup.ActiveButtonChanged';
            STATE_CHANGED: 'Button.StateChanged';
            CLICK: 'click';
          }

          class Control {
            constructor(id?: string, options?: ControlOptions);

            Event: ControlEventArgs;
            addClass(cssClass: string): void;
            getDimensions(): object;
            getId(): string;
            getPosition(): object;
            getToolTip(): string;
            isCollapsed(): boolean;
            isCollapsible(): boolean;
            isVisible(): boolean;
            removeClass(cssClass: string): void;
            setCollapsed(collapsed: boolean): boolean;
            setToolTip(toolTipText: string): boolean;
            setVisible(visible: boolean): boolean;

            // Events
            addEventListener(type: string,
                             listener?: ViewerEvent,
                             options?: boolean | AddEventListenerOptions): void;
            dispatchEvent(evt: Event): boolean;
            removeEventListener(type: string,
                                listener?: ViewerEvent,
                                options?: boolean | EventListenerOptions): void;
          }

          class ControlGroup extends Control {
            container: HTMLElement;

            addControl(control: Control, options?: AddControlOptions): boolean;
            getControl(controlId: string): Control;
            getControlId(index: number): string;
            getNumberOfControls(): number;
            indexOf(control: string|Control): number;
            removeControl(control: string|Control): boolean;
            setCollapsed(collapsed: boolean): boolean;
          }

          class ToolBar extends ControlGroup {
            constructor(id: string, options?: object);
          }

          class RadioButtonGroup extends ControlGroup {
            constructor(id: string, options?: object);

            Event: ControlEventArgs;

            addControl(control: Control, options: object): boolean;
            getActiveButton(): Button;
            removeControl(control: string | Control): boolean;
          }

          class Button extends Control {
            constructor(id: string, options?: object);

            Event: ControlEventArgs;

            getState(): Button.State;
            onClick: (event: Event) => void;
            onMouseOut: (event: Event) => void;
            onMouseOver: (event: Event) => void;
            setIcon(iconClass: string): void;
            setState(state: Button.State): boolean;
          }

          // NOTE: TypeScript doesn't support enum inside class. This seems to be commonly used workaround.
          namespace Button {
            enum State { ACTIVE, INACTIVE, DISABLED }
          }

          class ComboButton extends Button {
            constructor(id: string, options?: object);

            addControl(): void;
            restoreDefault(): void;
            saveAsDefault(): void;
          }
        }
    }
}
