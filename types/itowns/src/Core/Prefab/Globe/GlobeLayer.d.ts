import * as THREE from "three";
import Layer from "../../../Layer/Layer";

export type GlobeLayerOptions = any;

// TODO: Define public API
declare class GlobeLayer extends Layer {
    constructor(id: string, object3d: THREE.Object3D, config: GlobeLayerOptions);
}

export default GlobeLayer;
