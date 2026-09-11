import { Camera } from "../../cameras/Camera.js";
import { BufferGeometry } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { Light } from "../../lights/Light.js";
import { LightShadow } from "../../lights/LightShadow.js";
import { Material } from "../../materials/Material.js";
import NodeMaterial from "../../materials/nodes/NodeMaterial.js";
import { Group } from "../../objects/Group.js";
import ClippingContext from "../../renderers/common/ClippingContext.js";
import Renderer from "../../renderers/common/Renderer.js";
import { Scene } from "../../scenes/Scene.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import LightsNode from "./LightsNode.js";

declare class ShadowBaseNode extends Node {
    light: Light;

    readonly isShadowBasedNode: true;

    constructor(light: Light);

    getShadowMaterial(): NodeMaterial;

    disposeShadowMaterial(): void;

    getShadowRenderObjectFunction(
        renderer: Renderer,
        shadow?: LightShadow,
    ): (
        object: Object3D,
        scene: Scene,
        _camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
        lightsNode: LightsNode,
        clippingContext?: ClippingContext | null,
        passId?: string | null,
    ) => void;

    setupShadowPosition(builder: NodeBuilder): void;
}

export const shadowPositionWorld: Node;

export default ShadowBaseNode;
