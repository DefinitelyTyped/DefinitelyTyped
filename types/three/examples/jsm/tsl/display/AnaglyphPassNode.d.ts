import { Camera, Scene } from "three/webgpu";
import StereoCompositePassNode from "./StereoCompositePassNode.js";

declare const AnaglyphAlgorithm: {
    TRUE: "true";
    GREY: "grey";
    COLOUR: "colour";
    HALF_COLOUR: "halfColour";
    DUBOIS: "dubois";
    OPTIMISED: "optimised";
    COMPROMISE: "compromise";
};
type AnaglyphAlgorithm = (typeof AnaglyphAlgorithm)[keyof typeof AnaglyphAlgorithm];

declare const AnaglyphColorMode: {
    RED_CYAN: "redCyan";
    MAGENTA_CYAN: "magentaCyan";
    MAGENTA_GREEN: "magentaGreen";
};
type AnaglyphColorMode = (typeof AnaglyphColorMode)[keyof typeof AnaglyphColorMode];

declare class AnaglyphPassNode extends StereoCompositePassNode {
    readonly isAnaglyphPassNode: true;

    eyeSep: number;

    planeDistance: number;

    constructor(scene: Scene, camera: Camera);

    get algorithm(): AnaglyphAlgorithm;
    set algorithm(algorithm: AnaglyphAlgorithm);

    get colorMode(): AnaglyphColorMode;
    set colorMode(color: AnaglyphColorMode);
}

export default AnaglyphPassNode;

export { AnaglyphAlgorithm, AnaglyphColorMode };

export const anaglyphPass: (scene: Scene, camera: Camera) => AnaglyphPassNode;
