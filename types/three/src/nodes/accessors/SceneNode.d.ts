import { Scene } from "../../scenes/Scene.js";
import Node from "../core/Node.js";

export type SceneNodeScope = typeof SceneNode.BACKGROUND_BLURRINESS | typeof SceneNode.BACKGROUND_INTENSITY;

declare class SceneNode extends Node {
    scope: SceneNodeScope;
    scene: Scene | null;

    constructor(scope?: SceneNodeScope, scene?: Scene | null);

    static BACKGROUND_BLURRINESS: "backgroundBlurriness";
    static BACKGROUND_INTENSITY: "backgroundIntensity";
    static BACKGROUND_ROTATION: "backgroundRotation";
}

export default SceneNode;

export const backgroundBlurriness: SceneNode;
export const backgroundIntensity: SceneNode;
export const backgroundRotation: SceneNode;
