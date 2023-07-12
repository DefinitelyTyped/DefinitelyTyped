import { ColorRepresentation } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class ClearPass extends Pass {
    constructor(clearColor?: ColorRepresentation, clearAlpha?: number);
    clearColor: ColorRepresentation;
    clearAlpha: number;
}
