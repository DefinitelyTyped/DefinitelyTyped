import { InstancedMesh, ShaderMaterial, SphereGeometry } from "three";
import { LightProbeGrid } from "../lighting/LightProbeGrid.js";

declare class LightProbeGridHelper extends InstancedMesh<SphereGeometry, ShaderMaterial> {
    probes: LightProbeGrid;

    constructor(probes: LightProbeGrid, sphereSize?: number);

    update(): void;
}

export { LightProbeGridHelper };
