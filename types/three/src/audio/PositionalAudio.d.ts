import { AudioListener } from './AudioListener';
import { Audio } from './Audio';

export class PositionalAudio extends Audio<PannerNode> {
    constructor(listener: AudioListener);

    panner: PannerNode;

    getOutput(): PannerNode;
    setRefDistance(value: number): this;
    getRefDistance(): number;
    setRolloffFactor(value: number): this;
    getRolloffFactor(): number;
    setDistanceModel(value: string): this;
    getDistanceModel(): string;
    setMaxDistance(value: number): this;
    getMaxDistance(): number;
    setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): this;
    updateMatrixWorld(force?: boolean): void;
}
