import { InstancedMesh, NodeMaterial, SphereGeometry } from "three/webgpu";
import { LightProbeGrid } from "../lighting/LightProbeGrid.js";

declare class LightProbeGridHelper extends InstancedMesh<SphereGeometry, NodeMaterial> {
    probes: LightProbeGrid;

    constructor(probes: LightProbeGrid, sphereSize?: number);

    update(): void;
}

export { LightProbeGridHelper };
