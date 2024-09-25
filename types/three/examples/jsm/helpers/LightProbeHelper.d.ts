import { LightProbe, Mesh } from "three";

export class LightProbeHelper extends Mesh {
    constructor(lightProbe: LightProbe, size: number);

    lightProbe: LightProbe;
    size: number;

    dispose(): void;
}
