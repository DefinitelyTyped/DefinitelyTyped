import { InstancedMesh, ShaderMaterial, SphereGeometry } from "three";
import { LightProbeGridWebGL } from "../lighting/LightProbeGridWebGL.js";

declare class LightProbeGridHelperWebGL extends InstancedMesh<SphereGeometry, ShaderMaterial> {
    probes: LightProbeGridWebGL;

    constructor(probes: LightProbeGridWebGL, sphereSize?: number);

    update(): void;
}

export { LightProbeGridHelperWebGL };
