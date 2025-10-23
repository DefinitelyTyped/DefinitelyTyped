import * as THREE from "three";

import GlobeControls, { GlobeControlsOptions } from "../../Controls/GlobeControls";
import Layer from "../../Layer/Layer";
import CameraUtils from "../../Utils/CameraUtils";
import Extent from "../Geographic/Extent";
import View, { VIEW_EVENTS, ViewOptions } from "../View";
import GlobeLayer from "./Globe/GlobeLayer";

export enum GLOBE_VIEW_EVENTS {
    GLOBE_INITIALIZED = "initialized",
    LAYER_ADDED = "layer-added",
    LAYER_REMOVED = "layer-removed",
    COLOR_LAYERS_ORDER_CHANGED = "layers-order-changed",
}

export interface GlobeViewOptions extends ViewOptions {
    // object3d?: THREE.Object3D; // TODO: Not documented
    // TODO: options passed to GlobeLayer
    // noControls?: boolean; // TODO: Not documented
    controls?: GlobeControlsOptions;
    handleCollision?: boolean; // TODO: Not documented
    // atmosphere?: any; TODO: options passed to Atmosphere
    // diffuse?: THREE.Color; // TODO: documented but still used?
}

declare class GlobeView extends View {
    constructor(
        viewerDiv: HTMLDivElement,
        placement?: CameraUtils.CameraTransformOptions | Extent,
        options?: GlobeViewOptions,
    );

    readonly isGlobeView: true;

    tileLayer: /* GlobeLayer */ any;
    controls?: GlobeControls;

    addLayer<L extends Layer>(layer: L): Promise<L>;
    // TODO: screenCoord is optional and same type as gfxEngin.getWindowSize()
    getPixelsToDegrees(pixels?: number, screenCoord?: any): number;
    getPixelsToDegreesFromDistance(pixels?: number, distance?: number): number;
    getMetersToDegrees(meters?: number): number;
}

export default GlobeView;
