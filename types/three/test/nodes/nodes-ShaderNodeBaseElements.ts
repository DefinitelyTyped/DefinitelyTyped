/**
 * A copy of ShaderNodeBaseElements.js from three source code with some
 * adjustements.
 *
 * a few not null assertions were added for getConstNodeType.
 * A bunch of lines were commented out, those would be difficult to get to typescheck propertly
 */

// core
import AttributeNode from 'three/examples/jsm/nodes/core/AttributeNode';
import BypassNode from 'three/examples/jsm/nodes/core/BypassNode';
import CodeNode from 'three/examples/jsm/nodes/core/CodeNode';
import ContextNode from 'three/examples/jsm/nodes/core/ContextNode';
import ExpressionNode from 'three/examples/jsm/nodes/core/ExpressionNode';
import FunctionCallNode from 'three/examples/jsm/nodes/core/FunctionCallNode';
import FunctionNode from 'three/examples/jsm/nodes/core/FunctionNode';
import InstanceIndexNode from 'three/examples/jsm/nodes/core/InstanceIndexNode';
import PropertyNode from 'three/examples/jsm/nodes/core/PropertyNode';
import UniformNode from 'three/examples/jsm/nodes/core/UniformNode';
import VarNode from 'three/examples/jsm/nodes/core/VarNode';
import VaryNode from 'three/examples/jsm/nodes/core/VaryNode';

// accessors
import BufferNode from 'three/examples/jsm/nodes/accessors/BufferNode';
import CameraNode from 'three/examples/jsm/nodes/accessors/CameraNode';
import MaterialNode from 'three/examples/jsm/nodes/accessors/MaterialNode';
import MaterialReferenceNode from 'three/examples/jsm/nodes/accessors/MaterialReferenceNode';
import ModelViewProjectionNode from 'three/examples/jsm/nodes/accessors/ModelViewProjectionNode';
import NormalNode from 'three/examples/jsm/nodes/accessors/NormalNode';
import ModelNode from 'three/examples/jsm/nodes/accessors/ModelNode';
import PointUVNode from 'three/examples/jsm/nodes/accessors/PointUVNode';
import PositionNode from 'three/examples/jsm/nodes/accessors/PositionNode';
import ReferenceNode from 'three/examples/jsm/nodes/accessors/ReferenceNode';
import StorageBufferNode from 'three/examples/jsm/nodes/accessors/StorageBufferNode';
import TextureNode from 'three/examples/jsm/nodes/accessors/TextureNode';
import UserDataNode from 'three/examples/jsm/nodes/accessors/UserDataNode';
import UVNode from 'three/examples/jsm/nodes/accessors/UVNode';

// display
import FrontFacingNode from 'three/examples/jsm/nodes/display/FrontFacingNode';

// gpgpu
import ComputeNode from 'three/examples/jsm/nodes/gpgpu/ComputeNode';

// math
import MathNode from 'three/examples/jsm/nodes/math/MathNode';
import OperatorNode from 'three/examples/jsm/nodes/math/OperatorNode';
import CondNode from 'three/examples/jsm/nodes/math/CondNode';

// utils
import ArrayElementNode from 'three/examples/jsm/nodes/utils/ArrayElementNode';
import ConvertNode from 'three/examples/jsm/nodes/utils/ConvertNode';

// shader node utils
import {
    ShaderNode,
    nodeObject,
    nodeObjects,
    nodeArray,
    nodeProxy,
    nodeImmutable,
    ConvertType,
    getConstNodeType,
    cacheMaps,
    NodeOrType,
    NodeRepresentation,
} from 'three/examples/jsm/nodes/shadernode/ShaderNode';
import { NodeTypeOption, NodeUserData } from 'three/examples/jsm/nodes/Nodes';
import { Material } from 'three/src/materials/Material';

// shader node base

export { ShaderNode, nodeObject, nodeObjects, nodeArray, nodeProxy, nodeImmutable };

export const color = new ConvertType('color');

export const float = new ConvertType('float', cacheMaps.float);
export const int = new ConvertType('int', cacheMaps.int);
export const uint = new ConvertType('uint', cacheMaps.uint);
export const bool = new ConvertType('bool', cacheMaps.bool);

export const vec2 = new ConvertType('vec2');
export const ivec2 = new ConvertType('ivec2');
export const uvec2 = new ConvertType('uvec2');
export const bvec2 = new ConvertType('bvec2');

export const vec3 = new ConvertType('vec3');
export const ivec3 = new ConvertType('ivec3');
export const uvec3 = new ConvertType('uvec3');
export const bvec3 = new ConvertType('bvec3');

export const vec4 = new ConvertType('vec4');
export const ivec4 = new ConvertType('ivec4');
export const uvec4 = new ConvertType('uvec4');
export const bvec4 = new ConvertType('bvec4');

export const mat3 = new ConvertType('mat3');
export const imat3 = new ConvertType('imat3');
export const umat3 = new ConvertType('umat3');
export const bmat3 = new ConvertType('bmat3');

export const mat4 = new ConvertType('mat4');
export const imat4 = new ConvertType('imat4');
export const umat4 = new ConvertType('umat4');
export const bmat4 = new ConvertType('bmat4');

// core

// @TODO: ArrayUniformNode

export const func = (code: string) => {
    const node = nodeObject(new FunctionNode(code));

    const call = node.call.bind(node);
    node.call = params => nodeObject(call(params));

    return node;
};

export const uniform = (nodeOrType: NodeOrType) => {
    const nodeType = getConstNodeType(nodeOrType);

    // disabled: no tyings will make this typecheck correctly
    // const value = nodeOrType.isNode === true ? nodeOrType.node?.value || nodeOrType.value : nodeOrType;
    const value = 1;

    return nodeObject(new UniformNode(value, nodeType));
};

export const attribute = (name: string, nodeType: NodeTypeOption) => nodeObject(new AttributeNode(name, nodeType));
export const property = (name: string, nodeOrType: NodeOrType) =>
    nodeObject(new PropertyNode(name, getConstNodeType(nodeOrType)!));

export const bypass = nodeProxy(BypassNode);
export const code = nodeProxy(CodeNode);
export const context = nodeProxy(ContextNode);
export const expression = nodeProxy(ExpressionNode);
export const call = nodeProxy(FunctionCallNode);
export const instanceIndex = nodeImmutable(InstanceIndexNode);
export const label = nodeProxy(VarNode);
export const temp = label;
export const vary = nodeProxy(VaryNode);

// accesors

export const buffer = (value: ArrayLike<number>, nodeOrType: NodeOrType, count: number) =>
    nodeObject(new BufferNode(value, getConstNodeType(nodeOrType)!, count));
export const storage = (value: ArrayLike<number>, nodeOrType: NodeOrType, count: number) =>
    nodeObject(new StorageBufferNode(value, getConstNodeType(nodeOrType)!, count));

export const cameraProjectionMatrix = nodeImmutable(CameraNode, CameraNode.PROJECTION_MATRIX);
export const cameraViewMatrix = nodeImmutable(CameraNode, CameraNode.VIEW_MATRIX);
export const cameraNormalMatrix = nodeImmutable(CameraNode, CameraNode.NORMAL_MATRIX);
export const cameraWorldMatrix = nodeImmutable(CameraNode, CameraNode.WORLD_MATRIX);
export const cameraPosition = nodeImmutable(CameraNode, CameraNode.POSITION);

export const materialAlphaTest = nodeImmutable(MaterialNode, MaterialNode.ALPHA_TEST);
export const materialColor = nodeImmutable(MaterialNode, MaterialNode.COLOR);
export const materialEmissive = nodeImmutable(MaterialNode, MaterialNode.EMISSIVE);
export const materialOpacity = nodeImmutable(MaterialNode, MaterialNode.OPACITY);
// export const materialSpecular = nodeImmutable( MaterialNode, MaterialNode.SPECULAR );
export const materialRoughness = nodeImmutable(MaterialNode, MaterialNode.ROUGHNESS);
export const materialMetalness = nodeImmutable(MaterialNode, MaterialNode.METALNESS);
export const materialRotation = nodeImmutable(MaterialNode, MaterialNode.ROTATION);

export const diffuseColor = nodeImmutable(PropertyNode, 'DiffuseColor', 'vec4');
export const roughness = nodeImmutable(PropertyNode, 'Roughness', 'float');
export const metalness = nodeImmutable(PropertyNode, 'Metalness', 'float');
export const alphaTest = nodeImmutable(PropertyNode, 'AlphaTest', 'float');
export const specularColor = nodeImmutable(PropertyNode, 'SpecularColor', 'color');

// eslint-disable-next-line no-unnecessary-generics
export const reference = <T>(name: string, nodeOrType: NodeOrType, object: T) =>
    nodeObject(new ReferenceNode<T>(name, getConstNodeType(nodeOrType)!, object));
export const materialReference = (name: string, nodeOrType: NodeOrType, material: Material) =>
    nodeObject(new MaterialReferenceNode(name, getConstNodeType(nodeOrType)!, material));
export const userData = (name: string, inputType: NodeTypeOption, userData?: NodeUserData) =>
    nodeObject(new UserDataNode(name, inputType, userData));

export const modelViewProjection = nodeProxy(ModelViewProjectionNode);

export const normalGeometry = nodeImmutable(NormalNode, NormalNode.GEOMETRY);
export const normalLocal = nodeImmutable(NormalNode, NormalNode.LOCAL);
export const normalView = nodeImmutable(NormalNode, NormalNode.VIEW);
export const transformedNormalView = nodeImmutable(VarNode, normalView, 'TransformedNormalView');

export const modelViewMatrix = nodeImmutable(ModelNode, ModelNode.VIEW_MATRIX);
export const modelNormalMatrix = nodeImmutable(ModelNode, ModelNode.NORMAL_MATRIX);
export const modelWorldMatrix = nodeImmutable(ModelNode, ModelNode.WORLD_MATRIX);
export const modelPosition = nodeImmutable(ModelNode, ModelNode.POSITION);
export const modelViewPosition = nodeImmutable(ModelNode, ModelNode.VIEW_POSITION);

export const positionGeometry = nodeImmutable(PositionNode, PositionNode.GEOMETRY);
export const positionLocal = nodeImmutable(PositionNode, PositionNode.LOCAL);
export const positionWorld = nodeImmutable(PositionNode, PositionNode.WORLD);
export const positionView = nodeImmutable(PositionNode, PositionNode.VIEW);
export const positionViewDirection = nodeImmutable(PositionNode, PositionNode.VIEW_DIRECTION);

export const texture = nodeProxy(TextureNode);
// disabled: no typings will make this typecheck correctly
// export const sampler = ( texture ) => nodeObject( new ConvertNode( texture.isNode === true ? texture : new TextureNode( texture ), 'sampler' ) );
// export const uv = ( ...params: number[] ) => nodeObject( new UVNode( ...params ) );
export const pointUV = nodeImmutable(PointUVNode);

// gpgpu

export const compute = (node: NodeRepresentation, count: number, workgroupSize: number[]) =>
    nodeObject(new ComputeNode(nodeObject(node), count, workgroupSize));

// math

export const EPSILON = float(1e-6);
export const INFINITY = float(1e6);

export const cond = nodeProxy(CondNode);

export const add = nodeProxy(OperatorNode, '+');
export const sub = nodeProxy(OperatorNode, '-');
export const mul = nodeProxy(OperatorNode, '*');
export const div = nodeProxy(OperatorNode, '/');
export const remainder = nodeProxy(OperatorNode, '%');
export const equal = nodeProxy(OperatorNode, '==');
export const assign = nodeProxy(OperatorNode, '=');
export const lessThan = nodeProxy(OperatorNode, '<');
export const greaterThan = nodeProxy(OperatorNode, '>');
export const lessThanEqual = nodeProxy(OperatorNode, '<=');
export const greaterThanEqual = nodeProxy(OperatorNode, '>=');
export const and = nodeProxy(OperatorNode, '&&');
export const or = nodeProxy(OperatorNode, '||');
export const xor = nodeProxy(OperatorNode, '^^');
export const bitAnd = nodeProxy(OperatorNode, '&');
export const bitOr = nodeProxy(OperatorNode, '|');
export const bitXor = nodeProxy(OperatorNode, '^');
export const shiftLeft = nodeProxy(OperatorNode, '<<');
export const shiftRight = nodeProxy(OperatorNode, '>>');

export const radians = nodeProxy(MathNode, MathNode.RADIANS);
export const degrees = nodeProxy(MathNode, MathNode.DEGREES);
export const exp = nodeProxy(MathNode, MathNode.EXP);
export const exp2 = nodeProxy(MathNode, MathNode.EXP2);
export const log = nodeProxy(MathNode, MathNode.LOG);
export const log2 = nodeProxy(MathNode, MathNode.LOG2);
export const sqrt = nodeProxy(MathNode, MathNode.SQRT);
export const inversesqrt = nodeProxy(MathNode, MathNode.INVERSE_SQRT);
export const floor = nodeProxy(MathNode, MathNode.FLOOR);
export const ceil = nodeProxy(MathNode, MathNode.CEIL);
export const normalize = nodeProxy(MathNode, MathNode.NORMALIZE);
export const fract = nodeProxy(MathNode, MathNode.FRACT);
export const sin = nodeProxy(MathNode, MathNode.SIN);
export const cos = nodeProxy(MathNode, MathNode.COS);
export const tan = nodeProxy(MathNode, MathNode.TAN);
export const asin = nodeProxy(MathNode, MathNode.ASIN);
export const acos = nodeProxy(MathNode, MathNode.ACOS);
export const atan = nodeProxy(MathNode, MathNode.ATAN);
export const abs = nodeProxy(MathNode, MathNode.ABS);
export const sign = nodeProxy(MathNode, MathNode.SIGN);
export const length = nodeProxy(MathNode, MathNode.LENGTH);
export const negate = nodeProxy(MathNode, MathNode.NEGATE);
export const invert = nodeProxy(MathNode, MathNode.INVERT);
export const dFdx = nodeProxy(MathNode, MathNode.DFDX);
export const dFdy = nodeProxy(MathNode, MathNode.DFDY);
export const round = nodeProxy(MathNode, MathNode.ROUND);

export const atan2 = nodeProxy(MathNode, MathNode.ATAN2);
export const min = nodeProxy(MathNode, MathNode.MIN);
export const max = nodeProxy(MathNode, MathNode.MAX);
export const mod = nodeProxy(MathNode, MathNode.MOD);
export const step = nodeProxy(MathNode, MathNode.STEP);
export const reflect = nodeProxy(MathNode, MathNode.REFLECT);
export const distance = nodeProxy(MathNode, MathNode.DISTANCE);
export const dot = nodeProxy(MathNode, MathNode.DOT);
export const cross = nodeProxy(MathNode, MathNode.CROSS);
export const pow = nodeProxy(MathNode, MathNode.POW);
export const pow2 = nodeProxy(MathNode, MathNode.POW, 2);
export const pow3 = nodeProxy(MathNode, MathNode.POW, 3);
export const pow4 = nodeProxy(MathNode, MathNode.POW, 4);
export const transformDirection = nodeProxy(MathNode, MathNode.TRANSFORM_DIRECTION);

export const mix = nodeProxy(MathNode, MathNode.MIX);
export const clamp = (value: NodeRepresentation, low: NodeRepresentation = 1, high: NodeRepresentation = 1) =>
    nodeObject(new MathNode(MathNode.CLAMP, nodeObject(value), nodeObject(low), nodeObject(high)));
export const refract = nodeProxy(MathNode, MathNode.REFRACT);
export const smoothstep = nodeProxy(MathNode, MathNode.SMOOTHSTEP);
export const faceforward = nodeProxy(MathNode, MathNode.FACEFORWARD);

// display

export const frontFacing = nodeImmutable(FrontFacingNode);
export const faceDirection = sub(mul(float(frontFacing), 2), 1);

// lighting

// utils

export const element = nodeProxy(ArrayElementNode);

// miscellaneous

export const dotNV = clamp(dot(transformedNormalView, positionViewDirection));
export const transformedNormalWorld = normalize(transformDirection(transformedNormalView, cameraViewMatrix));
