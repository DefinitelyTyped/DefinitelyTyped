import TextureNode from '../accessors/TextureNode';
import Node from '../core/Node';

// shader node utils
import {
    ShaderNode,
    nodeObject,
    nodeObjects,
    nodeArray,
    nodeProxy,
    nodeImmutable,
    ConvertType,
    Swizzable,
    NodeRepresentation,
    NodeOrType,
    ProxiedObject,
    ProxiedTuple,
} from './ShaderNode';
import { Material, Texture } from '../../../../src/Three';
import { NodeTypeOption, NodeUserData, NodeValueOption } from '../core/constants';
import { NodeBuilderContext } from '../core/NodeBuilder';
import {
    BufferNode,
    BypassNode,
    CameraNode,
    CodeNode,
    CodeNodeInclude,
    ComputeNode,
    ContextNode,
    ExpressionNode,
    FrontFacingNode,
    FunctionCallNode,
    FunctionNode,
    FunctionNodeArguments,
    InstanceIndexNode,
    MaterialNode,
    MaterialReferenceNode,
    MathNode,
    ModelNode,
    ModelViewProjectionNode,
    NormalNode,
    PointUVNode,
    PositionNode,
    PropertyNode,
    ReferenceNode,
    UserDataNode,
    UVNode,
    VarNode,
    VaryNode,
} from '../Nodes';
import StorageBufferNode from '../accessors/StorageBufferNode';

// shader node base

export { ShaderNode, nodeObject, nodeObjects, nodeArray, nodeProxy, nodeImmutable, Swizzable };

export const color: ConvertType;

export const float: ConvertType;
export const int: ConvertType;
export const uint: ConvertType;
export const bool: ConvertType;

export const vec2: ConvertType;
export const ivec2: ConvertType;
export const uvec2: ConvertType;
export const bvec2: ConvertType;

export const vec3: ConvertType;
export const ivec3: ConvertType;
export const uvec3: ConvertType;
export const bvec3: ConvertType;

export const vec4: ConvertType;
export const ivec4: ConvertType;
export const uvec4: ConvertType;
export const bvec4: ConvertType;

export const mat3: ConvertType;
export const imat3: ConvertType;
export const umat3: ConvertType;
export const bmat3: ConvertType;

export const mat4: ConvertType;
export const imat4: ConvertType;
export const umat4: ConvertType;
export const bmat4: ConvertType;

export function uniform(nodeOrType: Node | Swizzable | NodeValueOption): Swizzable;

export function attribute(attributeName: string, nodeType: NodeTypeOption): Swizzable;
export function property(name: string, nodeOrType: Node | NodeTypeOption): Swizzable;

export function bypass(returnNode: NodeRepresentation, callNode: NodeRepresentation): Swizzable<BypassNode>;
export function code(code: string, nodeType?: NodeTypeOption): Swizzable<CodeNode>;
export function context(node: NodeRepresentation, context: NodeBuilderContext): Swizzable<ContextNode>;
export function expression(snipped?: string, nodeType?: NodeTypeOption): Swizzable<ExpressionNode>;

// definition: const call = nodeProxy(FunctionCallNode);
export function call<P extends FunctionNodeArguments>(
    functionNode?: FunctionNode<P>,
    parameters?: ProxiedObject<P>,
): Swizzable<FunctionCallNode<P>>;

export type Fn<P extends FunctionNodeArguments> = P extends readonly [...unknown[]]
    ? ProxiedTuple<P>
    : readonly [ProxiedObject<P>];

// tslint:disable:no-unnecessary-generics
export function func<P extends FunctionNodeArguments>(
    code: string,
    includes?: CodeNodeInclude[],
): { call: (...params: Fn<P>) => Swizzable };

export function fn<P extends FunctionNodeArguments>(
    code: string,
    includes?: CodeNodeInclude[],
): (...params: Fn<P>) => Swizzable;
// tslint:enable:no-unnecessary-generics

export const instanceIndex: Swizzable<InstanceIndexNode>;
export function label(node: NodeRepresentation, name?: string): Swizzable<VarNode>;
export function temp(node: NodeRepresentation, name?: string): Swizzable<VarNode>;
export function vary(node: NodeRepresentation, name?: string): Swizzable<VaryNode>;

// accesors

export function buffer(value: ArrayLike<number>, nodeOrType: NodeOrType, count: number): Swizzable<BufferNode>;
export function storage(value: ArrayLike<number>, nodeOrType: NodeOrType, count: number): Swizzable<StorageBufferNode>;

export const cameraProjectionMatrix: Swizzable<CameraNode>;
export const cameraViewMatrix: Swizzable<CameraNode>;
export const cameraNormalMatrix: Swizzable<CameraNode>;
export const cameraWorldMatrix: Swizzable<CameraNode>;
export const cameraPosition: Swizzable<CameraNode>;

export const materialAlphaTest: Swizzable<MaterialNode>;
export const materialColor: Swizzable<MaterialNode>;
export const materialEmissive: Swizzable<MaterialNode>;
export const materialOpacity: Swizzable<MaterialNode>;
export const materialRoughness: Swizzable<MaterialNode>;
export const materialMetalness: Swizzable<MaterialNode>;
export const materialRotation: Swizzable<MaterialNode>;

export const diffuseColor: Swizzable<PropertyNode>;
export const roughness: Swizzable<PropertyNode>;
export const metalness: Swizzable<PropertyNode>;
export const alphaTest: Swizzable<PropertyNode>;
export const specularColor: Swizzable<PropertyNode>;

export function reference<T>(name: string, nodeOrType: NodeOrType, object: T): Swizzable<ReferenceNode<T>>;
export function materialReference(
    name: string,
    nodeOrType: NodeOrType,
    material: Material,
): Swizzable<MaterialReferenceNode>;
export function userData(name: string, inputType: NodeTypeOption, userData?: NodeUserData): Swizzable<UserDataNode>;

export function modelViewProjection(position?: NodeRepresentation): Swizzable<ModelViewProjectionNode>;

export const normalGeometry: Swizzable<NormalNode>;
export const normalLocal: Swizzable<NormalNode>;
export const normalWorld: Swizzable<NormalNode>;
export const normalView: Swizzable<NormalNode>;
export const transformedNormalView: Swizzable<VarNode>;

export const modelViewMatrix: Swizzable<ModelNode>;
export const modelNormalMatrix: Swizzable<ModelNode>;
export const modelWorldMatrix: Swizzable<ModelNode>;
export const modelPosition: Swizzable<ModelNode>;
export const modelViewPosition: Swizzable<ModelNode>;

export const positionGeometry: Swizzable<PositionNode>;
export const positionLocal: Swizzable<PositionNode>;
export const positionWorld: Swizzable<PositionNode>;
export const positionView: Swizzable<PositionNode>;
export const positionViewDirection: Swizzable<PositionNode>;

export function texture(
    value: Texture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
): Swizzable<TextureNode>;
export function sampler(texture: Texture | TextureNode): Swizzable;
export function uv(index?: number): Swizzable<UVNode>;
export const pointUV: Swizzable<PointUVNode>;

// gpgpu

export function compute(node: NodeRepresentation, count: number, workgroupSize: number[]): Swizzable<ComputeNode>;

// math

export const EPSILON: Swizzable;
export const INFINITY: Swizzable;

export function cond(condNode: NodeRepresentation, ifNode: NodeRepresentation, elseNode: NodeRepresentation): Swizzable;

type Operator = (a: NodeRepresentation, b: NodeRepresentation, ...others: NodeRepresentation[]) => Swizzable;
type Unary = (a: NodeRepresentation) => Swizzable<MathNode>;
type Binary = (a: NodeRepresentation, b: NodeRepresentation) => Swizzable<MathNode>;
type Ternary = (a: NodeRepresentation, b: NodeRepresentation, c: NodeRepresentation) => Swizzable<MathNode>;

export const add: Operator;
export const sub: Operator;
export const mul: Operator;
export const div: Operator;
export const remainder: Operator;
export const equal: Operator;
export const assign: Operator;
export const lessThan: Operator;
export const greaterThan: Operator;
export const lessThanEqual: Operator;
export const greaterThanEqual: Operator;
export const and: Operator;
export const or: Operator;
export const xor: Operator;
export const bitAnd: Operator;
export const bitOr: Operator;
export const bitXor: Operator;
export const shiftLeft: Operator;
export const shiftRight: Operator;

export const radians: Unary;
export const degrees: Unary;
export const exp: Unary;
export const exp2: Unary;
export const log: Unary;
export const log2: Unary;
export const sqrt: Unary;
export const inversesqrt: Unary;
export const floor: Unary;
export const ceil: Unary;
export const normalize: Unary;
export const fract: Unary;
export const sin: Unary;
export const cos: Unary;
export const tan: Unary;
export const asin: Unary;
export const acos: Unary;
export const atan: Unary;
export const abs: Unary;
export const sign: Unary;
export const length: Unary;
export const negate: Unary;
export const invert: Unary;
export const dFdx: Unary;
export const dFdy: Unary;
export const saturate: Unary;
export const round: Unary;

export const atan2: Binary;
export const min: Binary;
export const max: Binary;
export const mod: Binary;
export const step: Binary;
export const reflect: Binary;
export const distance: Binary;
export const dot: Binary;
export const cross: Binary;
export const pow: Binary;
export const pow2: Binary;
export const pow3: Binary;
export const pow4: Binary;
export const transformDirection: Binary;

export const mix: Ternary;
export const clamp: Ternary;
export const refract: Ternary;
export const smoothstep: Ternary;
export const faceforward: Ternary;

// display

export const frontFacing: Swizzable<FrontFacingNode>;
export const faceDirection: Swizzable;

// lighting

// utils
export function element(node: NodeRepresentation, indexNode: NodeRepresentation): Swizzable;

// miscellaneous
export const dotNV: Swizzable<MathNode>;
export const transformedNormalWorld: Swizzable<MathNode>;
