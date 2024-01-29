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

export interface RendererOptions {
    antialias?: boolean;
    alpha?: boolean;
    logarithmicDepthBuffer?: boolean;
    /** @deprecated */
    isWebGL2?: boolean;
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

export type Event = MouseEvent | TouchEvent;

// TODO: Extends THREE.Event dispatcher ???
export default class View extends THREE.EventDispatcher<THREE.Event> {
    constructor(crs: string, viewerDiv: HTMLElement, options?: ViewOptions);

    domElement: HTMLElement;
    referenceCrs: string;
    mainLoop: MainLoop;
    scene: THREE.Scene;
    camera: Camera;
    // controls?: any; // TODO: References in dispose
    // tileLayer: any; // TODO: References in readDepthBuffer

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
        event: Event,
        target?: THREE.Vector2,
        touchIdx?: number,
    ): THREE.Vector2;

    eventToNormalizedCoords(event: Event, touchIdx?: number): THREE.Vector2;

    viewToNormalizedCoords(
        viewCoords: THREE.Vector2,
        target?: THREE.Vector2,
    ): THREE.Vector2;

    normalizedToViewCoords(ndcCoords: THREE.Vector2): THREE.Vector2;

    pickObjectsAt(
        mouseOrEvt: THREE.Vector2 | Event,
        radius?: number,
        ...where: any[]
    ): any[]; // TODO

    getScale(pitch?: number): number;

    // getScaleFromDistance(pitch?: number, distance?: number): number;

    getDistanceFromCamera(screenCoord?: THREE.Vector2): number;

    getPixelsToMeters(pixels?: number, screenCoord?: THREE.Vector2): number;

    // getPixelsToMetersFromDistance(pixels?: number, distance?: number): number;

    getMetersToPixels(meters?: number, screenCoord?: THREE.Vector2): number;

    // getMetersToPixelsFromDistance(meters?: number, distance?: number): number;

    // pickFeaturesAt TODO

    // readDepthBuffer TODO

    getPickingPositionFromDepth(
        mouse: THREE.Vector2,
        target?: THREE.Vector3,
    ): THREE.Vector3;

    // pickTerrainCoordinates TODO

    pickCoordinates(
        mouse?: THREE.Vector2 | Event,
        target?: Coordinates,
    ): Coordinates;

    resize(width?: number, height?: number): void;
}
