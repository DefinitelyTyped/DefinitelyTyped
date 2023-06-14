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
    BlendModeNode,
    CheckerNode,
    ColorAdjustmentNode,
    ColorSpaceNode,
    CubeTextureNode,
    EquirectUVNode,
    FogNode,
    FogRangeNode,
    FogExp2Node,
    InstanceNode,
    LightsNode,
    MatcapUVNode,
    NormalMapNode,
    OscNode,
    PosterizeNode,
    RemapNode,
    ReflectVectorNode,
    RotateUVNode,
    SkinningNode,
    SpriteSheetUVNode,
    TimerNode,
    ToneMappingNode,
    TriplanarTexturesNode,
    SpecularMIPLevelNode,
    ViewportNode,
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

export function burn(baseNode: NodeRepresentation, blendNode?: NodeRepresentation): Swizzable<BlendModeNode>;
export function dodge(baseNode: NodeRepresentation, blendNode?: NodeRepresentation): Swizzable<BlendModeNode>;
export function overlay(baseNode: NodeRepresentation, blendNode?: NodeRepresentation): Swizzable<BlendModeNode>;
export function screen(baseNode: NodeRepresentation, blendNode?: NodeRepresentation): Swizzable<BlendModeNode>;

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

export function posterize(sourceNode: NodeRepresentation, stepsNode: NodeRepresentation): Swizzable<PosterizeNode>;

export const viewportCoordinate: Swizzable<ViewportNode>;
export const viewportResolution: Swizzable<ViewportNode>;
export const viewportTopLeft: Swizzable<ViewportNode>;
export const viewportBottomLeft: Swizzable<ViewportNode>;
export const viewportTopRight: Swizzable<ViewportNode>;
export const viewportBottomRight: Swizzable<ViewportNode>;

// lighting

export function lights(lights: Light[]): Swizzable<LightsNode>;
export function lightingContext(node: Node, lightingModelNode?: LightingModelNode): Swizzable<LightingContextNode>;

// utils

export const matcapUV: Swizzable<MatcapUVNode>;
export const equirectUV: Swizzable<EquirectUVNode>;

export function specularMIPLevel(): Swizzable<SpecularMIPLevelNode>;

export function oscSine(timeNode?: NodeRepresentation): Swizzable<OscNode>;
export function oscSquare(timeNode?: NodeRepresentation): Swizzable<OscNode>;
export function oscTriangle(timeNode?: NodeRepresentation): Swizzable<OscNode>;
export function oscSawtooth(timeNode?: NodeRepresentation): Swizzable<OscNode>;

export function remap(node: Node, inLowNode: Node): Swizzable<RemapNode>;
export function remapClamp(node: Node, inLowNode: Node): Swizzable<RemapNode>;

export function rotateUV(uvNode: Node, rotationNode: Node, centerNode?: Node): Swizzable<RotateUVNode>;

export function spritesheetUV(
    countNode: NodeRepresentation,
    uvNode?: NodeRepresentation,
    frameNode?: NodeRepresentation,
): Swizzable<SpriteSheetUVNode>;

export function timerLocal(timeScale: number, value?: number): Swizzable<TimerNode>;
export function timerGlobal(timeScale: number, value?: number): Swizzable<TimerNode>;
export function timerDelta(timeScale: number, value?: number): Swizzable<TimerNode>;
export const frameId: Swizzable<TimerNode>;
export function triplanarTextures(
    textureXNode: NodeRepresentation,
    textureYNode?: NodeRepresentation,
    textureZNode?: NodeRepresentation,
    scaleNode?: NodeRepresentation,
    positionNode?: NodeRepresentation,
    normalNode?: NodeRepresentation,
): Swizzable<TriplanarTexturesNode>;
export function triplanarTexture(
    texture: NodeRepresentation,
    ...params: NodeRepresentation[]
): Swizzable<TriplanarTexturesNode>;

// geometry

export function range(min: RangeModeBound, max: RangeModeBound): Swizzable<RangeNode>;

// procedural

export function checker(uvNode?: NodeRepresentation): Swizzable<CheckerNode>;

// fog

export function fog(colorNode: NodeRepresentation, factorNode: NodeRepresentation): Swizzable<FogNode>;
export function rangeFog(colorNode: Node, nearNode: Node, farNode: Node): Swizzable<FogRangeNode>;
export function exp2Fog(colorNode: Node, densityNode: Node): Swizzable<FogExp2Node>;
