import * as THREE from "three";
import { FeatureCollection } from "../Core/Feature";

export interface Feature2MeshOptions {
    batchId?: (props: unknown, featureId: number) => number;
    // pointsMaterial?: THREE.Material;
    // lineMaterial?: THREE.Material;
    // polygonMaterial?: THREE.Material;
    // layer?: Layer;
}

type Feature2Mesh = (collection: FeatureCollection) => THREE.Object3D;

declare namespace _default {
    function convert(options?: Feature2MeshOptions): Feature2Mesh;
}
export default _default;
