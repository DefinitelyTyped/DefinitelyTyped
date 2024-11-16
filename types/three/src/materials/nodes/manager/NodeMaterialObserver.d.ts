import { BufferAttribute } from "../../../core/BufferAttribute.js";
import { Matrix4 } from "../../../math/Matrix4.js";
import NodeBuilder from "../../../nodes/core/NodeBuilder.js";
import NodeFrame from "../../../nodes/core/NodeFrame.js";
import RenderObject from "../../../renderers/common/RenderObject.js";
import { Material } from "../../Material.js";
declare const refreshUniforms: readonly [
    "alphaMap",
    "alphaTest",
    "anisotropy",
    "anisotropyMap",
    "anisotropyRotation",
    "aoMap",
    "attenuationColor",
    "attenuationDistance",
    "bumpMap",
    "clearcoat",
    "clearcoatMap",
    "clearcoatNormalMap",
    "clearcoatNormalScale",
    "clearcoatRoughness",
    "color",
    "dispersion",
    "displacementMap",
    "emissive",
    "emissiveMap",
    "envMap",
    "gradientMap",
    "ior",
    "iridescence",
    "iridescenceIOR",
    "iridescenceMap",
    "iridescenceThicknessMap",
    "lightMap",
    "map",
    "matcap",
    "metalness",
    "metalnessMap",
    "normalMap",
    "normalScale",
    "opacity",
    "roughness",
    "roughnessMap",
    "sheen",
    "sheenColor",
    "sheenColorMap",
    "sheenRoughnessMap",
    "shininess",
    "specular",
    "specularColor",
    "specularColorMap",
    "specularIntensity",
    "specularIntensityMap",
    "specularMap",
    "thickness",
    "transmission",
    "transmissionMap",
];
type RefreshUniform = (typeof refreshUniforms)[number];
type MaterialData = {
    [K in RefreshUniform]?: unknown;
};
interface AttributesData {
    [name: string]: {
        version: number;
    };
}
interface RenderObjectData {
    material: MaterialData;
    geometry: {
        attributes: AttributesData;
        indexVersion: number | null;
        drawRange: {
            start: number;
            count: number;
        };
    };
    worldMatrix: Matrix4;
    version?: number;
}
declare class NodeMaterialObserver {
    renderObjects: WeakMap<RenderObject, RenderObjectData>;
    hasNode: boolean;
    hasAnimation: boolean;
    refreshUniforms: readonly RefreshUniform[];
    renderId: number;
    constructor(builder: NodeBuilder);
    firstInitialization(renderObject: RenderObject): boolean;
    getRenderObjectData(renderObject: RenderObject): RenderObjectData;
    getAttributesData(attributes: Record<string, BufferAttribute>): AttributesData;
    containsNode(builder: NodeBuilder): boolean;
    getMaterialData(material: Material): MaterialData;
    equals(renderObject: RenderObject): boolean;
    needsRefresh(renderObject: RenderObject, nodeFrame: NodeFrame): boolean;
}
export default NodeMaterialObserver;
