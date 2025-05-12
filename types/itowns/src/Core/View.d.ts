import * as THREE from "three";
import Coordinates from "../Core/Geographic/Coordinates";
import type Layer from "../Layer/Layer";
import Camera, { CameraOptions } from "../Renderer/Camera";
import MainLoop, { MAIN_LOOP_EVENTS } from "./MainLoop";

export enum VIEW_EVENTS {
    LAYERS_INITIALIZED = "layers-initialized",
    LAYER_REMOVED = "layer-removed",
    LAYER_ADDED = "layer-added",
    INITIALIZED = "initialized",
    COLOR_LAYERS_ORDER_CHANGED = "layers-order-changed",
    CAMERA_MOVED = "camera-moved",
}

export interface ViewEventMap {
    "layers-initialized": {};
    "layer-removed": { layerId: string };
    "layer-added": { layerId: string };
    "initialized": {};
    "layers-order-changed": {
        previous: { sequence: string[] };
        new: { sequence: string[] };
    };
    "camera-moved": {
        coord: Coordinates;
        range: number;
        heading: number;
        tilt: number;
    };
}

export interface RendererOptions {
    antialias?: boolean;
    alpha?: boolean;
    // webxr?: { // TODO: Experimental option
    //     scale: number;
    // };
    logarithmicDepthBuffer?: boolean;
}

export interface ViewOptions {
    camera?: CameraOptions;
    mainLoop?: MainLoop;
    renderer?: RendererOptions | THREE.WebGLRenderer;
    scene3D?: THREE.Scene;
    diffuse?: THREE.Color;
    disableFocusOnStart?: boolean;
}

export type FrameRequester = (dt: number, updateLoopRestarted: boolean, ...args: any) => void;

// TODO: Define public API
export default class View extends THREE.EventDispatcher<ViewEventMap> {
    constructor(crs: string, viewerDiv: HTMLElement, options?: ViewOptions);

    domElement: HTMLElement;
    referenceCrs: string;
    mainLoop: MainLoop;
    scene: THREE.Scene;
    camera: Camera;
    // controls?: any; // TODO: References in dispose
    // tileLayer: any; // TODO: References in readDepthBuffer

    get renderer(): THREE.WebGLRenderer;
    get camera3D(): THREE.Camera;

    dispose(clearCache?: boolean): void;

    addLayer<L extends Layer>(layer: L, parentLayer?: Layer): Promise<L>;
    removeLayer(layerId: string, clearCache?: boolean): boolean;

    notifyChange(changeSource?: any, needsRedraw?: boolean): void;

    getLayers(filter: (layer: Layer, root: Layer) => boolean): Layer[];
    getLayerById(layerId: string): Layer;

    addFrameRequester(
        when: MAIN_LOOP_EVENTS,
        frameRequester: FrameRequester,
    ): void;
    removeFrameRequester(when: string, frameRequester: FrameRequester): void;
    removeAllFrameRequesters(): void;
    removeAllEvents(): void;
    execFrameRequesters(
        when: MAIN_LOOP_EVENTS,
        dt: number,
        updateLoopRestarted: boolean,
        ...args: any[]
    ): void;

    eventToViewCoords(
        event: MouseEvent | TouchEvent,
        target?: THREE.Vector2,
        touchIdx?: number,
    ): THREE.Vector2;
    eventToNormalizedCoords(
        event: MouseEvent | TouchEvent,
        touchIdx?: number,
    ): THREE.Vector2;

    viewToNormalizedCoords(
        viewCoords: THREE.Vector2,
        target?: THREE.Vector2,
    ): THREE.Vector2;
    normalizedToViewCoords(ndcCoords: THREE.Vector2): THREE.Vector2;

    pickObjectsAt(
        mouseOrEvt: THREE.Vector2 | MouseEvent | TouchEvent,
        radius?: number,
        ...where: any[]
    ): any[]; // TODO

    getScale(pitch?: number): number;
    // getScaleFromDistance(pitch?: number, distance?: number): number; // TODO: Not documented

    getDistanceFromCamera(screenCoord?: THREE.Vector2): number;

    getPixelsToMeters(pixels?: number, screenCoord?: THREE.Vector2): number;
    // getPixelsToMetersFromDistance(pixels?: number, distance?: number): number; // TODO: Not documented

    getMetersToPixels(meters?: number, screenCoord?: THREE.Vector2): number;
    // getMetersToPixelsFromDistance(meters?: number, distance?: number): number; // TODO: Not documented

    pickFeaturesAt(
        mouseOrEvt: THREE.Vector2 | MouseEvent | TouchEvent,
        radius?: number,
        ...where: string[] | Layer[]
    ): any /* Record<string, FeatureCollection[]> */; // TODO: Result type

    // readDepthBuffer(x: number, y: number, width: number, height: number, buffer: any): any; // TODO: Not documented

    getPickingPositionFromDepth(
        mouse: THREE.Vector2,
        target?: THREE.Vector3,
    ): THREE.Vector3;

    pickTerrainCoordinates(
        mouse: THREE.Vector2 | MouseEvent | TouchEvent,
        target?: Coordinates,
    ): Coordinates;
    // pickCoordinates(mouse?: THREE.Vector2 | Event, target?: Coordinates): Coordinates; // Deprecated

    resize(width?: number, height?: number): void;
}
