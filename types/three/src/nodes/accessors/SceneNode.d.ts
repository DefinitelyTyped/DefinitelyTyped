import { Scene } from "../../scenes/Scene.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export type SceneNodeScope = typeof SceneNode.BACKGROUND_BLURRINESS | typeof SceneNode.BACKGROUND_INTENSITY;

declare class SceneNode extends Node {
    scope: SceneNodeScope;
    scene: Scene | null;

    constructor(scope?: SceneNodeScope, scene?: Scene | null);

    static BACKGROUND_BLURRINESS: "backgroundBlurriness";
    static BACKGROUND_INTENSITY: "backgroundIntensity";
}

export default SceneNode;

export const backgroundBlurriness: ShaderNodeObject<SceneNode>;
export const backgroundIntensity: ShaderNodeObject<SceneNode>;
