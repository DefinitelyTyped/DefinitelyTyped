import { ColorRepresentation } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class ClearPass extends Pass {
    constructor(clearColor?: ColorRepresentation, clearAlpha?: number);
    clearColor: ColorRepresentation;
    clearAlpha: number;
}
