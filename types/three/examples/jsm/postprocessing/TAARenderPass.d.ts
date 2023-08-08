import { Scene, Camera, ColorRepresentation } from '../../../src/Three.js';

import { SSAARenderPass } from './SSAARenderPass.js';

export class TAARenderPass extends SSAARenderPass {
    constructor(scene: Scene, camera: Camera, clearColor?: ColorRepresentation, clearAlpha?: number);
    accumulate: boolean;
}
