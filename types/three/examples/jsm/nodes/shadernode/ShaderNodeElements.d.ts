import Node from '../core/Node';
import RangeNode, { RangeModeBound } from '../geometry/RangeNode';
import { NodeRepresentation, Swizzable } from './ShaderNode';
import {
    CubeTexture,
    InstancedMesh,
    Light,
    SkinnedMesh,
    Texture,
    TextureEncoding,
    ToneMapping,
} from '../../../../src/Three';
import LightingContextNode, { LightingModelNode } from '../lighting/LightingContextNode';
import {
    CheckerNode,
    ColorAdjustmentNode,
    ColorSpaceNode,
    CubeTextureNode,
    FogNode,
    FogRangeNode,
    InstanceNode,
    LightsNode,
    MatcapUVNode,
    MaxMipLevelNode,
    NormalMapNode,
    OscNode,
    ReflectVectorNode,
    RotateUVNode,
    SkinningNode,
    SpriteSheetUVNode,
    TimerNode,
    ToneMappingNode,
} from '../Nodes';

//
// Node Material Shader Syntax
//

// shader node base

export * from './ShaderNodeBaseElements';

// functions

export { default as BRDF_GGX } from '../functions/BSDF/BRDF_GGX'; // see https://github.com/tc39/proposal-export-default-from
export { default as BRDF_Lambert } from '../functions/BSDF/BRDF_Lambert';
export { default as D_GGX } from '../functions/BSDF/D_GGX';
export { default as DFGApprox } from '../functions/BSDF/DFGApprox';
export { default as F_Schlick } from '../functions/BSDF/F_Schlick';
export { default as V_GGX_SmithCorrelated } from '../functions/BSDF/V_GGX_SmithCorrelated';

export { default as getDistanceAttenuation } from '../functions/light/getDistanceAttenuation';

export { default as getGeometryRoughness } from '../functions/material/getGeometryRoughness';
export { default as getRoughness } from '../functions/material/getRoughness';

export { default as PhysicalLightingModel } from '../functions/PhysicalLightingModel';

// accessors

export function cubeTexture(
    value: CubeTexture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
): Swizzable<CubeTextureNode>;
export function instance(instanceMesh: InstancedMesh): Swizzable<InstanceNode>;
export const reflectVector: Swizzable<ReflectVectorNode>;
export function skinning(skinnedMesh: SkinnedMesh): Swizzable<SkinningNode>;

// display

export function saturation(
    colorNode: NodeRepresentation,
    adjustmentNode?: NodeRepresentation,
): Swizzable<ColorAdjustmentNode>;
export function vibrance(
    colorNode: NodeRepresentation,
    adjustmentNode?: NodeRepresentation,
): Swizzable<ColorAdjustmentNode>;
export function hue(colorNode: NodeRepresentation, adjustmentNode?: NodeRepresentation): Swizzable<ColorAdjustmentNode>;

export function colorSpace(node: NodeRepresentation, encoding: TextureEncoding): Swizzable<ColorSpaceNode>;
export function normalMap(node: Node, scaleNode?: Node): Swizzable<NormalMapNode>;
export function toneMapping(
    mapping: ToneMapping,
    exposure: NodeRepresentation,
    color: NodeRepresentation,
): Swizzable<ToneMappingNode>;

// lighting

export function lights(lights: Light[]): Swizzable<LightsNode>;
export function lightingContext(node: Node, lightingModelNode?: LightingModelNode): Swizzable<LightingContextNode>;

// utils

export const matcapUV: Swizzable<MatcapUVNode>;
export function maxMipLevel(texture: Texture): Swizzable<MaxMipLevelNode>;

export function oscSine(timeNode?: NodeRepresentation): Swizzable<OscNode>;
export function oscSquare(timeNode?: NodeRepresentation): Swizzable<OscNode>;
export function oscTriangle(timeNode?: NodeRepresentation): Swizzable<OscNode>;
export function oscSawtooth(timeNode?: NodeRepresentation): Swizzable<OscNode>;

export function rotateUV(uvNode: Node, rotationNode: Node, centerNode?: Node): Swizzable<RotateUVNode>;

export function spritesheetUV(
    countNode: NodeRepresentation,
    uvNode?: NodeRepresentation,
    frameNode?: NodeRepresentation,
): Swizzable<SpriteSheetUVNode>;

export function timerLocal(timeScale: number, value?: number): Swizzable<TimerNode>;
export function timerGlobal(timeScale: number, value?: number): Swizzable<TimerNode>;
export function timerDelta(timeScale: number, value?: number): Swizzable<TimerNode>;

// geometry

export function range(min: RangeModeBound, max: RangeModeBound): Swizzable<RangeNode>;

// procedural

export function checker(uvNode?: NodeRepresentation): Swizzable<CheckerNode>;

// fog

export function fog(colorNode: NodeRepresentation, factorNode: NodeRepresentation): Swizzable<FogNode>;
export function rangeFog(colorNode: Node, nearNode: Node, farNode: Node): Swizzable<FogRangeNode>;
