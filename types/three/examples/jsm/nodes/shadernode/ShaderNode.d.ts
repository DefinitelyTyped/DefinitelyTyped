import { AnyObject, NodeTypeOption, SwizzleOption } from "../core/constants.js";
import ConstNode from "../core/ConstNode.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";

export interface NodeElements {
    append: typeof append;

    color: typeof color;
    float: typeof float;
    int: typeof int;
    uint: typeof uint;
    bool: typeof bool;
    vec2: typeof vec2;
    ivec2: typeof ivec2;
    uvec2: typeof uvec2;
    bvec2: typeof bvec2;
    vec3: typeof vec3;
    ivec3: typeof ivec3;
    uvec3: typeof uvec3;
    bvec3: typeof bvec3;
    vec4: typeof vec4;
    ivec4: typeof ivec4;
    uvec4: typeof uvec4;
    bvec4: typeof bvec4;
    mat2: typeof mat2;
    imat2: typeof imat2;
    umat2: typeof umat2;
    bmat2: typeof bmat2;
    mat3: typeof mat3;
    imat3: typeof imat3;
    umat3: typeof umat3;
    bmat3: typeof bmat3;
    mat4: typeof mat4;
    imat4: typeof imat4;
    umat4: typeof umat4;
    bmat4: typeof bmat4;
    string: typeof string;
    arrayBuffer: typeof arrayBuffer;

    element: typeof element;
    convert: typeof convert;
}

export function addNodeElement(name: string, nodeElement: unknown): void;

export type Swizzable<T extends Node = Node> =
    & T
    & {
        [key in SwizzleOption | number]: ShaderNodeObject<Node>;
    };

export type ShaderNodeObject<T extends Node> =
    & T
    & {
        [Key in keyof NodeElements]: NodeElements[Key] extends (node: T, ...args: infer Args) => infer R
            ? (...args: Args) => R
            : never;
    }
    & Swizzable<T>;

/** anything that can be passed to {@link nodeObject} and returns a proxy */
export type NodeRepresentation<T extends Node = Node> = number | boolean | Node | ShaderNodeObject<T>;

/** anything that can be passed to {@link nodeObject} */
export type NodeObjectOption = NodeRepresentation | string;

// same logic as in ShaderNodeObject: number,boolean,node->ShaderNodeObject, otherwise do nothing
export type NodeObject<T> = T extends Node ? ShaderNodeObject<T>
    : T extends number | boolean ? ShaderNodeObject<ConstNode<number | boolean>>
    : T;

// opposite of NodeObject: node -> node|ShaderNodeObject|boolean|number, otherwise do nothing
type Proxied<T> = T extends Node ? NodeRepresentation<T> : T;
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
interface Construtors<
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
} ? Construtors<A1, A2, A3, A4>
    : T extends {
        new(...args: infer A1): unknown;
        new(...args: infer A2): unknown;
        new(...args: infer A3): unknown;
    } ? Construtors<A1, A2, A3, undefined>
    : T extends {
        new(...args: infer A1): unknown;
        new(...args: infer A2): unknown;
    } ? Construtors<A1, A2, undefined, undefined>
    : T extends new(...args: infer A) => unknown ? Construtors<A, undefined, undefined, undefined>
    : Construtors<undefined, undefined, undefined, undefined>;

type AnyConstructors = Construtors<any, any, any, any>;

/**
 * Returns all constructors where the first paramter is assignable to given "scope"
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
 * Extract list of possible scopes - union of the first paramter
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

export type ConvertType = (...params: unknown[]) => ShaderNodeObject<Node>;

type NodeArray<T extends NodeObjectOption[]> = { [index in keyof T]: NodeObject<T[index]> };
type NodeObjects<T> = { [key in keyof T]: T[key] extends NodeObjectOption ? NodeObject<T[key]> : T[key] };
type ConstructedNode<T> = T extends new(...args: any[]) => infer R ? (R extends Node ? R : never) : never;

export type NodeOrType = Node | NodeTypeOption;

export const getConstNodeType: (value: NodeOrType) => NodeTypeOption | null;

export class ShaderNode<T = {}, R extends Node = Node> {
    constructor(jsFunc: (inputs: NodeObjects<T>, builder: NodeBuilder) => NodeRepresentation);
    call: (
        inputs: { [key in keyof T]: T[key] extends NodeRepresentation ? ShaderNodeObject<Node> | Node : T[key] },
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

export function tslFn<R extends Node = ShaderNodeObject<Node>>(jsFunc: () => R): () => R;
export function tslFn<T extends AnyObject, R extends Node = ShaderNodeObject<Node>>(
    jsFunc: (args: T) => R,
): (args: T) => R;

export function append(node: Node): Node;

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

export const mat2: ConvertType;
export const imat2: ConvertType;
export const umat2: ConvertType;
export const bmat2: ConvertType;

export const mat3: ConvertType;
export const imat3: ConvertType;
export const umat3: ConvertType;
export const bmat3: ConvertType;

export const mat4: ConvertType;
export const imat4: ConvertType;
export const umat4: ConvertType;
export const bmat4: ConvertType;

export const string: (value?: string) => ShaderNodeObject<ConstNode<string>>;
export const arrayBuffer: (value: ArrayBuffer) => ShaderNodeObject<ConstNode<ArrayBuffer>>;

export const element: (node: NodeRepresentation, indexNode: NodeRepresentation) => ShaderNodeObject<Node>;
export const convert: (node: NodeRepresentation, types: NodeTypeOption) => ShaderNodeObject<Node>;
