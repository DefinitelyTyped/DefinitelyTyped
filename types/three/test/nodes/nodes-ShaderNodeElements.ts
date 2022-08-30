/**
 * Copy of ShaderNodeElements.js converted to typescript. It it a good test as it creates
 * a lot of stuff.
 */

// accessors
import CubeTextureNode from 'three/examples/jsm/nodes/accessors/CubeTextureNode.js';
import InstanceNode from 'three/examples/jsm/nodes/accessors/InstanceNode.js';
import ReflectVectorNode from 'three/examples/jsm/nodes/accessors/ReflectVectorNode.js';
import SkinningNode from 'three/examples/jsm/nodes/accessors/SkinningNode.js';

// display
import ColorAdjustmentNode from 'three/examples/jsm/nodes/display/ColorAdjustmentNode.js';
import ColorSpaceNode from 'three/examples/jsm/nodes/display/ColorSpaceNode.js';
import NormalMapNode from 'three/examples/jsm/nodes/display/NormalMapNode.js';
import ToneMappingNode from 'three/examples/jsm/nodes/display/ToneMappingNode.js';

// lighting
import LightsNode from 'three/examples/jsm/nodes/lighting/LightsNode.js';
import LightingContextNode from 'three/examples/jsm/nodes/lighting/LightingContextNode.js';

// utils
import MatcapUVNode from 'three/examples/jsm/nodes/utils/MatcapUVNode.js';
import MaxMipLevelNode from 'three/examples/jsm/nodes/utils/MaxMipLevelNode.js';
import OscNode from 'three/examples/jsm/nodes/utils/OscNode.js';
import RotateUVNode from 'three/examples/jsm/nodes/utils/RotateUVNode.js';
import SpriteSheetUVNode from 'three/examples/jsm/nodes/utils/SpriteSheetUVNode.js';
import TimerNode from 'three/examples/jsm/nodes/utils/TimerNode.js';

// geometry
import RangeNode, { RangeModeBound } from 'three/examples/jsm/nodes/geometry/RangeNode.js';

// procedural
import CheckerNode from 'three/examples/jsm/nodes/procedural/CheckerNode.js';

// fog
import FogNode from 'three/examples/jsm/nodes/fog/FogNode.js';
import FogRangeNode from 'three/examples/jsm/nodes/fog/FogRangeNode.js';

// shader node utils
import { nodeObject, nodeProxy, nodeImmutable } from 'three/examples/jsm/nodes/shadernode/ShaderNode.js';
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
