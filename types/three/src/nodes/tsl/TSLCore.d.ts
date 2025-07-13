import { Color } from "../../math/Color.js";
import { Matrix2 } from "../../math/Matrix2.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import ConstNode from "../core/ConstNode.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import StackNode from "../core/StackNode.js";
import JoinNode from "../utils/JoinNode.js";

export interface NodeElements {
    toStack: typeof Stack;

    toColor: (node: Node) => ShaderNodeObject<Node>;
    toFloat: (node: Node) => ShaderNodeObject<Node>;
    toInt: (node: Node) => ShaderNodeObject<Node>;
    toUint: (node: Node) => ShaderNodeObject<Node>;
    toBool: (node: Node) => ShaderNodeObject<Node>;
    toVec2: (node: Node) => ShaderNodeObject<Node>;
    toIvec2: (node: Node) => ShaderNodeObject<Node>;
    toUvec2: (node: Node) => ShaderNodeObject<Node>;
    toBvec2: (node: Node) => ShaderNodeObject<Node>;
    toVec3: (node: Node) => ShaderNodeObject<Node>;
    toIvec3: (node: Node) => ShaderNodeObject<Node>;
    toUvec3: (node: Node) => ShaderNodeObject<Node>;
    toBvec3: (node: Node) => ShaderNodeObject<Node>;
    toVec4: (node: Node) => ShaderNodeObject<Node>;
    toIvec4: (node: Node) => ShaderNodeObject<Node>;
    toUvec4: (node: Node) => ShaderNodeObject<Node>;
    toBvec4: (node: Node) => ShaderNodeObject<Node>;
    toMat2: (node: Node) => ShaderNodeObject<Node>;
    toMat3: (node: Node) => ShaderNodeObject<Node>;
    toMat4: (node: Node) => ShaderNodeObject<Node>;

    element: typeof element;
    convert: typeof convert;

    append: typeof append;
}

export function addMethodChaining(name: string, nodeElement: unknown): void;

type XYZWCharacter = "x" | "y" | "z" | "w";
type RGBACharacter = "r" | "g" | "b" | "a";
type STPQCharacter = "s" | "t" | "p" | "q";

type XYZWSwizzle =
    | `${XYZWCharacter}`
    | `${XYZWCharacter}${XYZWCharacter}`
    | `${XYZWCharacter}${XYZWCharacter}${XYZWCharacter}`
    | `${XYZWCharacter}${XYZWCharacter}${XYZWCharacter}${XYZWCharacter}`;

type RGBASwizzle =
    | `${RGBACharacter}`
    | `${RGBACharacter}${RGBACharacter}`
    | `${RGBACharacter}${RGBACharacter}${RGBACharacter}`
    | `${RGBACharacter}${RGBACharacter}${RGBACharacter}${RGBACharacter}`;

type STPQSwizzle =
    | `${STPQCharacter}`
    | `${STPQCharacter}${STPQCharacter}`
    | `${STPQCharacter}${STPQCharacter}${STPQCharacter}`
    | `${STPQCharacter}${STPQCharacter}${STPQCharacter}${STPQCharacter}`;

export type SwizzleOption = XYZWSwizzle | RGBASwizzle | STPQSwizzle;

export type Swizzable<T extends Node = Node> =
    & T
    & {
        [Key in SwizzleOption | number]: ShaderNodeObject<Node>;
    }
    & {
        [Key in SwizzleOption as `set${Uppercase<Key>}`]: (value: Node) => ShaderNodeObject<Node>;
    }
    & {
        [Key in SwizzleOption as `flip${Uppercase<Key>}`]: () => ShaderNodeObject<Node>;
    };

export type ShaderNodeObject<T extends Node> =
    & T
    & {
        [Key in keyof NodeElements]: T extends { [K in Key]: infer M } ? M
            : NodeElements[Key] extends (node: T, ...args: infer Args) => infer R ? (...args: Args) => R
            : never;
    }
    & {
        [Key in keyof NodeElements as `${Key}Assign`]: T extends { [K in Key]: infer M } ? M
            : NodeElements[Key] extends (node: T, ...args: infer Args) => unknown
                ? (...args: Args) => ShaderNodeObject<T>
            : never;
    }
    & Swizzable<T>;

/** anything that can be passed to {@link nodeObject} */
export type NodeObjectOption = Node | number | string;

// same logic as in ShaderNodeObject: number,boolean,node->ShaderNodeObject, otherwise do nothing
export type NodeObject<T> = T extends Node ? ShaderNodeObject<T>
    : T extends number | boolean ? ShaderNodeObject<ConstNode<number | boolean>>
    : T;

// opposite of NodeObject: node -> node|ShaderNodeObject|boolean|number, otherwise do nothing
type Proxied<T> = T extends Node | number ? Node | number : T;
// https://github.com/microsoft/TypeScript/issues/42435#issuecomment-765557874
export type ProxiedTuple<T extends readonly [...unknown[]]> = [...{ [index in keyof T]: Proxied<T[index]> }];
export type ProxiedObject<T> = { [index in keyof T]: Proxied<T[index]> };
type RemoveTail<T extends readonly [...unknown[]]> = T extends [unknown, ...infer X] ? X : [];
type RemoveHeadAndTail<T extends readonly [...unknown[]]> = T extends [unknown, ...infer X, unknown] ? X : [];

/**
 * Temporary type to save signatures of 4 constructors. Each element may be tuple or undefined.
 *
 * We use an object instead of tuple or union as it makes stuff easier, especially in Typescript 4.0.
 */
interface Constructors<
    A extends undefined | [...unknown[]],
    B extends undefined | [...unknown[]],
    C extends undefined | [...unknown[]],
    D extends undefined | [...unknown[]],
> {
    a: A;
    b: B;
    c: C;
    d: D;
}

/**
 * Returns all constructors
 *
 * <https://github.com/microsoft/TypeScript/issues/37079>
 * <https://stackoverflow.com/a/52761156/1623826>
 */
type OverloadedConstructorsOf<T> = T extends {
    new(...args: infer A1): unknown;
    new(...args: infer A2): unknown;
    new(...args: infer A3): unknown;
    new(...args: infer A4): unknown;
} ? Constructors<A1, A2, A3, A4>
    : T extends {
        new(...args: infer A1): unknown;
        new(...args: infer A2): unknown;
        new(...args: infer A3): unknown;
    } ? Constructors<A1, A2, A3, undefined>
    : T extends {
        new(...args: infer A1): unknown;
        new(...args: infer A2): unknown;
    } ? Constructors<A1, A2, undefined, undefined>
    : T extends new(...args: infer A) => unknown ? Constructors<A, undefined, undefined, undefined>
    : Constructors<undefined, undefined, undefined, undefined>;

type AnyConstructors = Constructors<any, any, any, any>;

/**
 * Returns all constructors where the first parameter is assignable to given "scope"
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type FilterConstructorsByScope<T extends AnyConstructors, S> = {
    a: S extends T["a"][0] ? T["a"] : undefined;
    b: S extends T["b"][0] ? T["b"] : undefined;
    c: S extends T["c"][0] ? T["c"] : undefined;
    d: S extends T["d"][0] ? T["d"] : undefined;
};
/**
 * "flattens" the tuple into an union type
 */
type ConstructorUnion<T extends AnyConstructors> =
    | Exclude<T["a"], undefined>
    | Exclude<T["b"], undefined>
    | Exclude<T["c"], undefined>
    | Exclude<T["d"], undefined>;

/**
 * Extract list of possible scopes - union of the first parameter
 * of all constructors, should it be string
 */
type ExtractScopes<T extends AnyConstructors> =
    | (T["a"][0] extends string ? T["a"][0] : never)
    | (T["b"][0] extends string ? T["b"][0] : never)
    | (T["c"][0] extends string ? T["c"][0] : never)
    | (T["d"][0] extends string ? T["d"][0] : never);

type GetConstructorsByScope<T, S> = ConstructorUnion<FilterConstructorsByScope<OverloadedConstructorsOf<T>, S>>;
type GetConstructors<T> = ConstructorUnion<OverloadedConstructorsOf<T>>;
type GetPossibleScopes<T> = ExtractScopes<OverloadedConstructorsOf<T>>;

type NodeArray<T extends NodeObjectOption[]> = { [index in keyof T]: NodeObject<T[index]> };
type NodeObjects<T> = { [key in keyof T]: T[key] extends NodeObjectOption ? NodeObject<T[key]> : T[key] };
type ConstructedNode<T> = T extends new(...args: any[]) => infer R ? (R extends Node ? R : never) : never;

export type NodeOrType = Node | string;

declare class ShaderCallNodeInternal extends Node {
}

declare class ShaderNodeInternal extends Node {}

export const defined: (v: unknown) => unknown;

export const getConstNodeType: (value: NodeOrType) => string | null;

export class ShaderNode<T = {}, R extends Node = Node> {
    constructor(jsFunc: (inputs: NodeObjects<T>, builder: NodeBuilder) => Node);
    call: (
        inputs: { [key in keyof T]: T[key] extends Node ? ShaderNodeObject<Node> | Node : T[key] },
        builder?: NodeBuilder,
    ) => ShaderNodeObject<R>;
}

export function nodeObject<T extends NodeObjectOption>(obj: T): NodeObject<T>;
export function nodeObjects<T>(obj: T): NodeObjects<T>;

export function nodeArray<T extends NodeObjectOption[]>(obj: readonly [...T]): NodeArray<T>;

export function nodeProxy<T>(
    nodeClass: T,
): (...params: ProxiedTuple<GetConstructors<T>>) => ShaderNodeObject<ConstructedNode<T>>;

export function nodeProxy<T, S extends GetPossibleScopes<T>>(
    nodeClass: T,
    scope: S,
): (...params: ProxiedTuple<RemoveTail<GetConstructorsByScope<T, S>>>) => ShaderNodeObject<ConstructedNode<T>>;

export function nodeProxy<T, S extends GetPossibleScopes<T>>(
    nodeClass: T,
    scope: S,
    factor: NodeObjectOption,
): (...params: ProxiedTuple<RemoveHeadAndTail<GetConstructorsByScope<T, S>>>) => ShaderNodeObject<ConstructedNode<T>>;

export function nodeImmutable<T>(
    nodeClass: T,
    ...params: ProxiedTuple<GetConstructors<T>>
): ShaderNodeObject<ConstructedNode<T>>;

interface Layout {
    name: string;
    type: string;
    inputs: {
        name: string;
        type: string;
        qualifier?: "in" | "out" | "inout";
    }[];
}

interface ShaderNodeFn<Args extends readonly unknown[]> {
    (...args: Args): ShaderNodeObject<ShaderCallNodeInternal>;

    shaderNode: ShaderNodeObject<ShaderNodeInternal>;
    id: number;

    getNodeType: (builder: NodeBuilder) => string | null;
    getCacheKey: (force?: boolean) => number;

    setLayout: (layout: Layout) => this;

    once: (subBuilds?: string[] | null) => this;
}

export function Fn(jsFunc: (builder: NodeBuilder) => void): ShaderNodeFn<[]>;
export function Fn<T extends readonly unknown[]>(
    jsFunc: (args: T, builder: NodeBuilder) => void,
): ShaderNodeFn<ProxiedTuple<T>>;
export function Fn<T extends { readonly [key: string]: unknown }>(
    jsFunc: (args: T, builder: NodeBuilder) => void,
): ShaderNodeFn<[ProxiedObject<T>]>;

export const setCurrentStack: (stack: StackNode | null) => void;

export const getCurrentStack: () => StackNode | null;

export const If: (boolNode: Node, method: () => void) => StackNode;
export const Switch: (expression: Node) => StackNode;

export function Stack(node: Node): Node;

interface ColorFunction {
    // The first branch in `ConvertType` will forward the parameters to the `Color` constructor if there are no
    //   parameters or all the parameters are non-objects
    (color?: string | number): ShaderNodeObject<ConstNode<Color>>;
    (r: number, g: number, b: number): ShaderNodeObject<ConstNode<Color>>;

    // The second branch does not apply because `cacheMap` is `null`

    // The third branch will be triggered if there is a single parameter.
    (color: Color): ShaderNodeObject<ConstNode<Color>>;
    (node: Node): ShaderNodeObject<Node>;

    // The fall-through branch will be triggered if there is more than one parameter, or one of the parameters is an
    // object. Not sure which cases are worth considering here.
}

export const color: ColorFunction;

interface NumberFunction {
    (value?: number): ShaderNodeObject<ConstNode<number>>;
    (node: Node): ShaderNodeObject<Node>;
}

export const float: NumberFunction;
export const int: NumberFunction;
export const uint: NumberFunction;

interface BooleanFunction {
    (value?: boolean): ShaderNodeObject<ConstNode<boolean>>;
    (node: Node): ShaderNodeObject<Node>;
}

export const bool: BooleanFunction;

interface Vector2Function {
    // The first branch in `ConvertType` will forward the parameters to the `Vector2` constructor if there are no
    //   parameters or all the parameters are non-objects
    (x?: number, y?: number): ShaderNodeObject<ConstNode<Vector2>>;

    // The second branch does not apply because `cacheMap` is `null`

    // The third branch will be triggered if there is a single parameter.
    (value: Vector2): ShaderNodeObject<ConstNode<Vector2>>;
    (node: Node): ShaderNodeObject<Node>;

    // The fall-through branch will be triggered if there is more than one parameter, or one of the parameters is an
    // object.
    (x: Node | number, y: Node | number): ShaderNodeObject<JoinNode>;
}

export const vec2: Vector2Function;
export const ivec2: Vector2Function;
export const uvec2: Vector2Function;
export const bvec2: (node: Node) => ShaderNodeObject<Node>;

interface Vector3Function {
    // The first branch in `ConvertType` will forward the parameters to the `Vector3` constructor if there are no
    //   parameters or all the parameters are non-objects
    (x?: number, y?: number, z?: number): ShaderNodeObject<ConstNode<Vector3>>;

    // The second branch does not apply because `cacheMap` is `null`

    // The third branch will be triggered if there is a single parameter.
    (value: Vector3): ShaderNodeObject<ConstNode<Vector3>>;
    (node: Node): ShaderNodeObject<Node>;

    // The fall-through branch will be triggered if there is more than one parameter, or one of the parameters is an
    // object.
    (x: Node | number, y: Node | number, z?: Node | number): ShaderNodeObject<JoinNode>;
}

export const vec3: Vector3Function;
export const ivec3: Vector3Function;
export const uvec3: Vector3Function;
export const bvec3: (node: Node) => ShaderNodeObject<Node>;

interface Vector4Function {
    // The first branch in `ConvertType` will forward the parameters to the `Vector4` constructor if there are no
    //   parameters or all the parameters are non-objects
    (x?: number, y?: number, z?: number, w?: number): ShaderNodeObject<ConstNode<Vector4>>;

    // The second branch does not apply because `cacheMap` is `null`

    // The third branch will be triggered if there is a single parameter.
    (value: Vector4): ShaderNodeObject<ConstNode<Vector4>>;
    (node: Node): ShaderNodeObject<Node>;

    // The fall-through branch will be triggered if there is more than one parameter, or one of the parameters is an
    // object.
    (x: Node | number, y: Node | number, z?: Node | number, w?: Node | number): ShaderNodeObject<JoinNode>;
}

export const vec4: Vector4Function;
export const ivec4: Vector4Function;
export const uvec4: Vector4Function;
export const bvec4: (node: Node) => ShaderNodeObject<Node>;

interface Matrix2Function {
    (value: Matrix2): ShaderNodeObject<ConstNode<Matrix2>>;
    (node: Node): ShaderNodeObject<Node>;
}

export const mat2: Matrix2Function;

interface Matrix3Function {
    (value: Matrix3): ShaderNodeObject<ConstNode<Matrix3>>;
    (
        n11: number,
        n12: number,
        n13: number,
        n21: number,
        n22: number,
        n23: number,
        n31: number,
        n32: number,
        n33: number,
    ): ShaderNodeObject<ConstNode<Matrix3>>;
    (): ShaderNodeObject<ConstNode<Matrix3>>;
    (node: Node): ShaderNodeObject<Node>;
}

export const mat3: Matrix3Function;

interface Matrix4Function {
    (value: Matrix4): ShaderNodeObject<ConstNode<Matrix4>>;
    (
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number,
    ): ShaderNodeObject<ConstNode<Matrix4>>;
    (): ShaderNodeObject<ConstNode<Matrix4>>;
    (node: Node): ShaderNodeObject<Node>;
}

export const mat4: Matrix4Function;

export const string: (value?: string) => ShaderNodeObject<ConstNode<string>>;
export const arrayBuffer: (value: ArrayBuffer) => ShaderNodeObject<ConstNode<ArrayBuffer>>;

export const element: (node: Node, indexNode: Node) => ShaderNodeObject<Node>;
export const convert: (node: Node, types: string) => ShaderNodeObject<Node>;
export const split: (node: Node, channels?: string) => ShaderNodeObject<Node>;

/**
 * @deprecated append() has been renamed to Stack().
 */
export const append: (node: Node) => Node;
