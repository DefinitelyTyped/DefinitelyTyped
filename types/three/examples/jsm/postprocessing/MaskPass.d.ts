import { Scene, Camera } from '../../../src/Three';

import { Pass, FullScreenQuad } from './Pass';

export class MaskPass extends Pass {
    constructor(scene: Scene, camera: Camera);
    scene: Scene;
    camera: Camera;
    inverse: boolean;
}

export class ClearMaskPass extends Pass {
    constructor();
}
