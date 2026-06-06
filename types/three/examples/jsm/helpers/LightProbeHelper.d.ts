import { LightProbe, Mesh } from "three";

declare class LightProbeHelper extends Mesh {
    lightProbe: LightProbe;
    size: number;

    constructor(lightProbe: LightProbe, size?: number);

    dispose(): void;
}

export { LightProbeHelper };
