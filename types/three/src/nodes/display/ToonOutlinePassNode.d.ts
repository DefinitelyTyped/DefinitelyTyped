import { Camera } from "../../cameras/Camera.js";
import { Color } from "../../math/Color.js";
import { Scene } from "../../scenes/Scene.js";
import Node from "../core/Node.js";
import PassNode from "./PassNode.js";

declare class ToonOutlinePassNode extends PassNode {
    colorNode: Node;
    thicknessNode: Node;
    alphaNode: Node;

    constructor(scene: Scene, camera: Camera, colorNode: Node, thicknessNode: Node, alphaNode: Node);
}

export default ToonOutlinePassNode;

export const toonOutlinePass: (
    scene: Scene,
    camera: Camera,
    color?: Color,
    thickness?: number,
    alpha?: number,
) => ToonOutlinePassNode;
