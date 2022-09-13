/**
 * Copy of ShaderNodeElements.js converted to typescript. It it a good test as it creates
 * a lot of stuff.
 */

// accessors
import CubeTextureNode from 'three/examples/jsm/nodes/accessors/CubeTextureNode';
import InstanceNode from 'three/examples/jsm/nodes/accessors/InstanceNode';
import ReflectVectorNode from 'three/examples/jsm/nodes/accessors/ReflectVectorNode';
import SkinningNode from 'three/examples/jsm/nodes/accessors/SkinningNode';

// display
import ColorAdjustmentNode from 'three/examples/jsm/nodes/display/ColorAdjustmentNode';
import ColorSpaceNode from 'three/examples/jsm/nodes/display/ColorSpaceNode';
import NormalMapNode from 'three/examples/jsm/nodes/display/NormalMapNode';
import ToneMappingNode from 'three/examples/jsm/nodes/display/ToneMappingNode';

// lighting
import LightsNode from 'three/examples/jsm/nodes/lighting/LightsNode';
import LightingContextNode from 'three/examples/jsm/nodes/lighting/LightingContextNode';

// utils
import MatcapUVNode from 'three/examples/jsm/nodes/utils/MatcapUVNode';
import MaxMipLevelNode from 'three/examples/jsm/nodes/utils/MaxMipLevelNode';
import OscNode from 'three/examples/jsm/nodes/utils/OscNode';
import RotateUVNode from 'three/examples/jsm/nodes/utils/RotateUVNode';
import SpriteSheetUVNode from 'three/examples/jsm/nodes/utils/SpriteSheetUVNode';
import TimerNode from 'three/examples/jsm/nodes/utils/TimerNode';

// geometry
import RangeNode, { RangeModeBound } from 'three/examples/jsm/nodes/geometry/RangeNode';

// procedural
import CheckerNode from 'three/examples/jsm/nodes/procedural/CheckerNode';

// fog
import FogNode from 'three/examples/jsm/nodes/fog/FogNode';
import FogRangeNode from 'three/examples/jsm/nodes/fog/FogRangeNode';

// shader node utils
import { nodeObject, nodeProxy, nodeImmutable } from 'three/examples/jsm/nodes/shadernode/ShaderNode';
import { Node } from 'three/examples/jsm/nodes/Nodes';
import { TextureEncoding, ToneMapping } from 'three/src/constants';
import { Light } from 'three/src/Three';

//
// Node Material Shader Syntax
//

// shader node base

// accessors

export const cubeTexture = nodeProxy(CubeTextureNode);

export const instance = nodeProxy(InstanceNode);

export const reflectVector = nodeImmutable(ReflectVectorNode);

export const skinning = nodeProxy(SkinningNode);

// display

export const saturation = nodeProxy(ColorAdjustmentNode, ColorAdjustmentNode.SATURATION);
export const vibrance = nodeProxy(ColorAdjustmentNode, ColorAdjustmentNode.VIBRANCE);
export const hue = nodeProxy(ColorAdjustmentNode, ColorAdjustmentNode.HUE);

export const colorSpace = (node: Node, encoding: TextureEncoding) =>
    nodeObject(new ColorSpaceNode(null, nodeObject(node)).fromEncoding(encoding));
export const normalMap = nodeProxy(NormalMapNode);
export const toneMapping = (mapping: ToneMapping, exposure: Node, color: Node) =>
    nodeObject(new ToneMappingNode(mapping, nodeObject(exposure), nodeObject(color)));

// lighting

// export const lighting = nodeProxy( LightingNode ); // abstract
// export const light; // still needs to be added
export const lights = (lights: Light[]) => nodeObject(new LightsNode().fromLights(lights));
export const lightingContext = nodeProxy(LightingContextNode);

// utils

export const matcapUV = nodeImmutable(MatcapUVNode);
export const maxMipLevel = nodeProxy(MaxMipLevelNode);

export const oscSine = nodeProxy(OscNode, OscNode.SINE);
export const oscSquare = nodeProxy(OscNode, OscNode.SQUARE);
export const oscTriangle = nodeProxy(OscNode, OscNode.TRIANGLE);
export const oscSawtooth = nodeProxy(OscNode, OscNode.SAWTOOTH);

export const rotateUV = nodeProxy(RotateUVNode);

export const spritesheetUV = nodeProxy(SpriteSheetUVNode);

// @TODO: add supports to use node in timeScale
export const timerLocal = (timeScale: number, value = 0) =>
    nodeObject(new TimerNode(TimerNode.LOCAL, timeScale, value));
export const timerGlobal = (timeScale: number, value = 0) =>
    nodeObject(new TimerNode(TimerNode.GLOBAL, timeScale, value));
export const timerDelta = (timeScale: number, value = 0) =>
    nodeObject(new TimerNode(TimerNode.DELTA, timeScale, value));

// geometry

export const range = (min: RangeModeBound, max: RangeModeBound) => nodeObject(new RangeNode(min, max));

// procedural

export const checker = nodeProxy(CheckerNode);

// fog

export const fog = nodeProxy(FogNode);
export const rangeFog = nodeProxy(FogRangeNode);
