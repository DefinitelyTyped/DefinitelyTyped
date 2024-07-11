import * as THREE from "three";
import Layer from "../../../Layer/Layer";

export type PlanarLayerOptions = any;

// TODO: Define public API
declare class PlanarLayer extends Layer {
    constructor(id: string, object3d: THREE.Object3D, config: PlanarLayerOptions);
}

export default PlanarLayer;
