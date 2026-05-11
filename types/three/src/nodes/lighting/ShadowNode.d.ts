import { Camera } from "../../cameras/Camera.js";
import { BufferGeometry } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { Light } from "../../lights/Light.js";
import { LightShadow } from "../../lights/LightShadow.js";
import { Material } from "../../materials/Material.js";
import { Group } from "../../objects/Group.js";
import ClippingContext from "../../renderers/common/ClippingContext.js";
import Renderer from "../../renderers/common/Renderer.js";
import { Scene } from "../../scenes/Scene.js";
import LightsNode from "./LightsNode.js";
import ShadowBaseNode from "./ShadowBaseNode.js";

export const getShadowRenderObjectFunction: (
    renderer: Renderer,
    shadow: LightShadow,
    shadowType: number,
    useVelocity: boolean,
) => (
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

declare class ShadowNode extends ShadowBaseNode {
    constructor(light: Light, shadow: LightShadow | null);
}

export default ShadowNode;

export const shadow: (light: Light, shadow?: LightShadow) => ShadowNode;
