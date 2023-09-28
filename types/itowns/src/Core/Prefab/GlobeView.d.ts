import Layer from "../../Layer/Layer";
import Extent from "../Geographic/Extent";
import View, { VIEW_EVENTS } from "../View";
// import GlobeLayer from "./Globe/GlobeLayer";
import GlobeControls from "../../Controls/GlobeControls";
import CameraUtils from "../../Utils/CameraUtils";

export enum GLOBE_VIEW_EVENTS {
    GLOBE_INITIALIZED = "initialized",
    LAYER_ADDED = "layer-added",
    LAYER_REMOVED = "layer-removed",
    COLOR_LAYERS_ORDER_CHANGED = "layers-order-changed",
}

// TODO GlobeViewOptions
// -> View options
// object3d: THREE.Object3D
// -> GlobeLayer options
// noControls: boolean
// -> GlobeControls options
// handleCollision: boolean
// -> Atmosphere options
export type GlobeViewOptions = any;

declare class GlobeView extends View {
    constructor(
        viewerDiv: HTMLDivElement,
        placement?: CameraUtils.CameraTransformOptions | Extent,
        options?: GlobeViewOptions,
    );

    readonly isGlobeView: boolean;
    tileLayer: /* GlobeLayer */ any; // TODO
    controls?: GlobeControls;

    addLayer<L extends Layer>(layer: L): Promise<L>;
    // TODO: screenCoord is optional and same type as gfxEngin.getWindowSize()
    getPixelsToDegrees(pixels?: number, screenCoord?: any): number;
    getPixelsToDegreesFromDistance(pixels?: number, distance?: number): number;
    getMetersToDegrees(meters?: number): number;
}

export default GlobeView;
