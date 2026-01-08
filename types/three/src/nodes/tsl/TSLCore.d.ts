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

export function addMethodChaining(name: string, nodeElement: unknown): void;

declare module "../Nodes.js" {
    interface Node {
        assign: (sourceNode: Node | number) => this;
        get: (value: string) => Node;
    }
}

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

export type ArrayElementIndex =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31;

export type Swizzable =
    & {
        [Key in SwizzleOption | ArrayElementIndex]: Node;
    }
    & {
        [Key in SwizzleOption as `set${Uppercase<Key>}`]: (value: Node) => Node;
    }
    & {
        [Key in SwizzleOption as `flip${Uppercase<Key>}`]: () => Node;
    };

declare module "../Nodes.js" {
    interface Node extends Swizzable {
    }
}

/** anything that can be passed to {@link nodeObject} */
export type NodeObjectOption = Node | number | string;

// same logic as in ShaderNodeObject: number,boolean,node->node, otherwise do nothing
export type NodeObject<T> = T extends Node ? T
    : T extends number | boolean ? ConstNode<number | boolean>
    : T;

// opposite of NodeObject: node -> node|boolean|number, otherwise do nothing
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
        inputs: { [key in keyof T]: T[key] extends Node ? Node : T[key] },
        builder?: NodeBuilder,
    ) => R;
}

export function nodeObject<T extends NodeObjectOption>(obj: T): NodeObject<T>;
export function nodeObjectIntent<T extends NodeObjectOption>(obj: T): NodeObject<T>;
export function nodeObjects<T>(obj: T): NodeObjects<T>;

export function nodeArray<T extends NodeObjectOption[]>(obj: readonly [...T]): NodeArray<T>;

export function nodeProxy<T>(
    nodeClass: T,
): (...params: ProxiedTuple<GetConstructors<T>>) => ConstructedNode<T>;

export function nodeProxy<T, S extends GetPossibleScopes<T>>(
    nodeClass: T,
    scope: S,
): (...params: ProxiedTuple<RemoveTail<GetConstructorsByScope<T, S>>>) => ConstructedNode<T>;

export function nodeProxy<T, S extends GetPossibleScopes<T>>(
    nodeClass: T,
    scope: S,
    factor: NodeObjectOption,
): (...params: ProxiedTuple<RemoveHeadAndTail<GetConstructorsByScope<T, S>>>) => ConstructedNode<T>;

export function nodeImmutable<T>(
    nodeClass: T,
    ...params: ProxiedTuple<GetConstructors<T>>
): ConstructedNode<T>;

export function nodeProxyIntent<T>(
    nodeClass: T,
): (...params: ProxiedTuple<GetConstructors<T>>) => ConstructedNode<T>;

export function nodeProxyIntent<T, S extends GetPossibleScopes<T>>(
    nodeClass: T,
    scope: S,
): (...params: ProxiedTuple<RemoveTail<GetConstructorsByScope<T, S>>>) => ConstructedNode<T>;

export function nodeProxyIntent<T, S extends GetPossibleScopes<T>>(
    nodeClass: T,
    scope: S,
    factor: NodeObjectOption,
): (...params: ProxiedTuple<RemoveHeadAndTail<GetConstructorsByScope<T, S>>>) => ConstructedNode<T>;

interface Layout {
    name: string;
    type: string;
    inputs: {
        name: string;
        type: string;
        qualifier?: "in" | "out" | "inout";
    }[];
}

export interface ShaderNodeFn<Args extends readonly unknown[]> {
    (...args: Args): ShaderCallNodeInternal;

    shaderNode: ShaderNodeInternal;
    id: number;

    getNodeType: (builder: NodeBuilder) => string | null;
    getCacheKey: (force?: boolean) => number;

    setLayout: (layout: Layout) => this;

    once: (subBuilds?: string[] | null) => this;
}

export function Fn(jsFunc: (builder: NodeBuilder) => void, layout?: string | Record<string, string>): ShaderNodeFn<[]>;
export function Fn<T extends readonly unknown[]>(
    jsFunc: (args: T, builder: NodeBuilder) => void,
    layout?: string | Record<string, string>,
): ShaderNodeFn<ProxiedTuple<T>>;
export function Fn<T extends { readonly [key: string]: unknown }>(
    jsFunc: (args: T, builder: NodeBuilder) => void,
    layout?: string | Record<string, string>,
): ShaderNodeFn<[ProxiedObject<T>]>;

export const setCurrentStack: (stack: StackNode | null) => void;

export const getCurrentStack: () => StackNode | null;

export const If: (boolNode: Node, method: () => void) => StackNode;
export const Switch: (expression: Node) => StackNode;

export function Stack(node: Node): Node;

declare module "../Nodes.js" {
    interface Node {
        toStack: () => Node;
        toStackAssign: () => this;
    }
}

interface ColorFunction {
    // The first branch in `ConvertType` will forward the parameters to the `Color` constructor if there are no
    //   parameters or all the parameters are non-objects
    (color?: string | number): ConstNode<Color>;
    (r: number, g: number, b: number): ConstNode<Color>;

    // The second branch does not apply because `cacheMap` is `null`

    // The third branch will be triggered if there is a single parameter.
    (color: Color): ConstNode<Color>;
    (node: Node): Node;

    // The fall-through branch will be triggered if there is more than one parameter, or one of the parameters is an
    // object. Not sure which cases are worth considering here.
}

export const color: ColorFunction;

interface NumberFunction {
    (value?: number): ConstNode<number>;
    (node: Node): Node;
}

export const float: NumberFunction;
export const int: NumberFunction;
export const uint: NumberFunction;

interface BooleanFunction {
    (value?: boolean): ConstNode<boolean>;
    (node: Node): Node;
}

export const bool: BooleanFunction;

interface Vector2Function {
    // The first branch in `ConvertType` will forward the parameters to the `Vector2` constructor if there are no
    //   parameters or all the parameters are non-objects
    (x?: number, y?: number): ConstNode<Vector2>;

    // The second branch does not apply because `cacheMap` is `null`

    // The third branch will be triggered if there is a single parameter.
    (value: Vector2): ConstNode<Vector2>;
    (node: Node): Node;

    // The fall-through branch will be triggered if there is more than one parameter, or one of the parameters is an
    // object.
    (x: Node | number, y: Node | number): JoinNode;
}

export const vec2: Vector2Function;
export const ivec2: Vector2Function;
export const uvec2: Vector2Function;
export const bvec2: (node: Node) => Node;

interface Vector3Function {
    // The first branch in `ConvertType` will forward the parameters to the `Vector3` constructor if there are no
    //   parameters or all the parameters are non-objects
    (x?: number, y?: number, z?: number): ConstNode<Vector3>;

    // The second branch does not apply because `cacheMap` is `null`

    // The third branch will be triggered if there is a single parameter.
    (value: Vector3): ConstNode<Vector3>;
    (node: Node): Node;

    // The fall-through branch will be triggered if there is more than one parameter, or one of the parameters is an
    // object.
    (x: Node | number, y: Node | number, z?: Node | number): JoinNode;
}

export const vec3: Vector3Function;
export const ivec3: Vector3Function;
export const uvec3: Vector3Function;
export const bvec3: (node: Node) => Node;

interface Vector4Function {
    // The first branch in `ConvertType` will forward the parameters to the `Vector4` constructor if there are no
    //   parameters or all the parameters are non-objects
    (x?: number, y?: number, z?: number, w?: number): ConstNode<Vector4>;

    // The second branch does not apply because `cacheMap` is `null`

    // The third branch will be triggered if there is a single parameter.
    (value: Vector4): ConstNode<Vector4>;
    (node: Node): Node;

    // The fall-through branch will be triggered if there is more than one parameter, or one of the parameters is an
    // object.
    (x: Node | number, y: Node | number, z?: Node | number, w?: Node | number): JoinNode;
}

export const vec4: Vector4Function;
export const ivec4: Vector4Function;
export const uvec4: Vector4Function;
export const bvec4: (node: Node) => Node;

interface Matrix2Function {
    (value: Matrix2): ConstNode<Matrix2>;
    (node: Node): Node;
}

export const mat2: Matrix2Function;

interface Matrix3Function {
    (value: Matrix3): ConstNode<Matrix3>;
    (
        n11: number | Node,
        n12: number | Node,
        n13: number | Node,
        n21: number | Node,
        n22: number | Node,
        n23: number | Node,
        n31: number | Node,
        n32: number | Node,
        n33: number | Node,
    ): Node;
    (): ConstNode<Matrix3>;
    (
        p1: Node,
        p2: Node,
        p3: Node,
    ): Node;
    (node: Node): Node;
}

export const mat3: Matrix3Function;

interface Matrix4Function {
    (value: Matrix4): ConstNode<Matrix4>;
    (
        n11: number | Node,
        n12: number | Node,
        n13: number | Node,
        n14: number | Node,
        n21: number | Node,
        n22: number | Node,
        n23: number | Node,
        n24: number | Node,
        n31: number | Node,
        n32: number | Node,
        n33: number | Node,
        n34: number | Node,
        n41: number | Node,
        n42: number | Node,
        n43: number | Node,
        n44: number | Node,
    ): Node;
    (): ConstNode<Matrix4>;
    (
        p1: Node,
        p2: Node,
        p3: Node,
        p4: Node,
    ): Node;
    (node: Node): Node;
}

export const mat4: Matrix4Function;

export const string: (value?: string) => ConstNode<string>;
export const arrayBuffer: (value: ArrayBuffer) => ConstNode<ArrayBuffer>;

declare module "../Nodes.js" {
    interface Node {
        toColor: () => Node;
        toColorAssign: () => this;

        toFloat: () => Node;
        toFloatAssign: () => this;

        toInt: () => Node;
        toIntAssign: () => this;

        toUint: () => Node;
        toUintAssign: () => this;

        toBool: () => Node;
        toBoolAssign: () => this;

        toVec2: () => Node;
        toVec2Assign: () => this;

        toIVec2: () => Node;
        toIVec2Assign: () => this;

        toUVec2: () => Node;
        toUVec2Assign: () => this;

        toBVec2: () => Node;
        toBVec2Assign: () => this;

        toVec3: () => Node;
        toVec3Assign: () => this;

        toIVec3: () => Node;
        toIVec3Assign: () => this;

        toUVec3: () => Node;
        toUVec3Assign: () => this;

        toBVec3: () => Node;
        toBVec3Assign: () => this;

        toVec4: () => Node;
        toVec4Assign: () => this;

        toIVec4: () => Node;
        toIVec4Assign: () => this;

        toUVec4: () => Node;
        toUVec4Assign: () => this;

        toBVec4: () => Node;
        toBVec4Assign: () => this;

        toMat2: () => Node;
        toMat2Assign: () => this;

        toMat3: () => Node;
        toMat3Assign: () => this;

        toMat4: () => Node;
        toMat4Assign: () => this;
    }
}

export const element: (node: Node, indexNode: Node) => Node;
export const convert: (node: Node, types: string) => Node;
export const split: (node: Node, channels?: string) => Node;

declare module "../Nodes.js" {
    interface Node {
        element: (indexNode: Node) => Node;
        elementAssign: (indexNode: Node) => this;

        convert: (types: string) => Node;
        convertAssign: (types: string) => this;
    }
}

/**
 * @deprecated append() has been renamed to Stack().
 */
export const append: (node: Node) => Node;

declare module "../Nodes.js" {
    interface Node {
        /**
         * @deprecated append() has been renamed to Stack().
         */
        append: () => Node;
        /**
         * @deprecated append() has been renamed to Stack().
         */
        appendAssign: () => this;
    }
}
