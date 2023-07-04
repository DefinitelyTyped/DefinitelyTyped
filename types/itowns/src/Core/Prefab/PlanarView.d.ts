import Extent from "../Geographic/Extent";
import Layer from "../../Layer/Layer";
import View from "../View";
import type PlanarControls from "../../Controls/PlanarControls";
// import PlanarLayer from "./Planar/PlanarLayer";

// TODO
export type PlanerViewOptions = any;

export default class PlanarView extends View {
    constructor(
        viewerDiv: HTMLDivElement,
        extent: Extent,
        options?: PlanerViewOptions);

    readonly isPlanarView: boolean;
    controls?: PlanarControls;
    tileLayer: /* PlanarLayer */ any; // TODO
    addLayer<L extends Layer>(layer: L): Promise<L>;
}
