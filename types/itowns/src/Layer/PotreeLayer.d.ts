import * as THREE from "three";
import PointCloudLayer, { PointCloudLayerOptions } from "./PointCloudLayer";
// import PotreeNode from "../Core/PotreeNode";
import Extent from "../Core/Geographic/Extent";

export interface PotreeLayerOptions extends PointCloudLayerOptions {}

declare class PotreeLayer extends PointCloudLayer {
    constructor(id: string, config: PotreeLayerOptions);

    readonly isPotreeLayer: boolean;

    scale: THREE.Vector3;
    spacing: number;
    hierarchyStepSize: number;
    supportsProgressiveDisplay: boolean;

    root: /* PotreeNode */ any;
    extent: Extent; // TODO: defined in layer?
}

export default PotreeLayer;
