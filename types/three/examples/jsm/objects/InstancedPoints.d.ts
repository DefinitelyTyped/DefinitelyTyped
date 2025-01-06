import { InstancedPointsNodeMaterial, Mesh } from "three/webgpu";
import InstancedPointsGeometry from "../geometries/InstancedPointsGeometry.js";

declare class InstancedPoints extends Mesh<InstancedPointsGeometry, InstancedPointsNodeMaterial> {
    readonly isInstancedPoints: true;

    constructor(geometry?: InstancedPointsGeometry, material?: InstancedPointsNodeMaterial);
}

export default InstancedPoints;
