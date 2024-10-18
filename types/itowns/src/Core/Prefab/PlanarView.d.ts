import Extent from "../Geographic/Extent";
import View, { ViewOptions } from "../View";

import PlanarControls, { PlanarControlsOptions } from "../../Controls/PlanarControls";
import Layer from "../../Layer/Layer";
import CameraUtils from "../../Utils/CameraUtils";

export interface PlanarViewOptions extends ViewOptions {
    noControls?: boolean;
    controls?: PlanarControlsOptions;
    placement?: CameraUtils.CameraTransformOptions | Extent;
    disableSkirt?: boolean; // TODO: Not documented
    maxSubdivisionLevel?: number; // TODO: Not documented
}

declare class PlanarView extends View {
    constructor(
        viewerDiv: HTMLDivElement,
        extent: Extent,
        options?: PlanarViewOptions,
    );

    readonly isPlanarView: true;

    controls?: PlanarControls;
    tileLayer: /* PlanarLayer */ any; // TODO
    addLayer<L extends Layer>(layer: L): Promise<L>;
}

export default PlanarView;
