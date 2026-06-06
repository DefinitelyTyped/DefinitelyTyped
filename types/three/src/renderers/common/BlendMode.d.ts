import { Blending, BlendingDstFactor, BlendingEquation, BlendingSrcFactor } from "../../constants.js";

declare class BlendMode {
    blending: Blending;

    blendSrc: BlendingSrcFactor;
    blendDst: BlendingDstFactor;
    blendEquation: BlendingEquation;

    blendSrcAlpha: BlendingSrcFactor | null;
    blendDstAlpha: BlendingDstFactor | null;
    blendEquationAlpha: BlendingEquation | null;
    premultiplyAlpha: boolean;

    constructor(blending: Blending);

    copy(source: BlendMode): this;

    clone(): BlendMode;
}

export default BlendMode;
