import { ConstNode, Node, NodeBuilder, NodeTypeOption, SwizzleOption } from '../Nodes.js';
// lot of private typescript magic here
export {};
export type Swizzable<T extends Node = Node> = T & {
    [key in SwizzleOption | number]: Swizzable;
};

/** anything that can be passed to {@link nodeObject} and returns a proxy */
export type NodeRepresentation<T extends Node = Node> = number | boolean | Node | Swizzable<T>;

/** anything that can be passed to {@link nodeObject} */
export type NodeObjectOption = NodeRepresentation | string;

// same logic as in ShaderNodeObject: number,boolean,node->swizzable, otherwise do nothing
export type NodeObject<T> = T extends Node ? Swizzable<T> : T extends number | boolean ? Swizzable<ConstNode> : T;

// opposite of NodeObject: node -> node|swizzable|boolean|number, otherwise do nothing
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
    new (...args: infer A1): unknown;
    new (...args: infer A2): unknown;
    new (...args: infer A3): unknown;
    new (...args: infer A4): unknown;
}
    ? Construtors<A1, A2, A3, A4>
    : T extends {
          new (...args: infer A1): unknown;
          new (...args: infer A2): unknown;
          new (...args: infer A3): unknown;
      }
    ? Construtors<A1, A2, A3, undefined>
    : T extends {
          new (...args: infer A1): unknown;
          new (...args: infer A2): unknown;
      }
    ? Construtors<A1, A2, undefined, undefined>
    : T extends new (...args: infer A) => unknown
    ? Construtors<A, undefined, undefined, undefined>
    : Construtors<undefined, undefined, undefined, undefined>;

type AnyConstructors = Construtors<any, any, any, any>;

/**
 * Returns all constructors where the first paramter is assignable to given "scope"
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type FilterConstructorsByScope<T extends AnyConstructors, S> = {
    a: S extends T['a'][0] ? T['a'] : undefined;
    b: S extends T['b'][0] ? T['b'] : undefined;
    c: S extends T['c'][0] ? T['c'] : undefined;
    d: S extends T['d'][0] ? T['d'] : undefined;
};
/**
 * "flattens" the tuple into an union type
 */
type ConstructorUnion<T extends AnyConstructors> =
    | Exclude<T['a'], undefined>
    | Exclude<T['b'], undefined>
    | Exclude<T['c'], undefined>
    | Exclude<T['d'], undefined>;

/**
 * Extract list of possible scopes - union of the first paramter
 * of all constructors, should it be string
 */
type ExtractScopes<T extends AnyConstructors> =
    | (T['a'][0] extends string ? T['a'][0] : never)
    | (T['b'][0] extends string ? T['b'][0] : never)
    | (T['c'][0] extends string ? T['c'][0] : never)
    | (T['d'][0] extends string ? T['d'][0] : never);

type GetConstructorsByScope<T, S> = ConstructorUnion<FilterConstructorsByScope<OverloadedConstructorsOf<T>, S>>;
type GetConstructors<T> = ConstructorUnion<OverloadedConstructorsOf<T>>;
type GetPossibleScopes<T> = ExtractScopes<OverloadedConstructorsOf<T>>;

export type ConvertType = (...params: unknown[]) => Swizzable;

export const ConvertType: {
    new (type: NodeTypeOption, cacheMap?: Map<unknown, ConstNode>): ConvertType;
};

type NodeArray<T extends NodeObjectOption[]> = { [index in keyof T]: NodeObject<T[index]> };
type NodeObjects<T> = { [key in keyof T]: T[key] extends NodeObjectOption ? NodeObject<T[key]> : T[key] };
type ConstructedNode<T> = T extends new (...args: any[]) => infer R ? (R extends Node ? R : never) : never;

export type NodeOrType = Node | NodeTypeOption;

export function getConstNodeType(value: NodeOrType): NodeTypeOption | null;
export function nodeObject<T extends NodeObjectOption>(obj: T): NodeObject<T>;
export function nodeObjects<T>(obj: T): NodeObjects<T>;

export function nodeArray<T extends NodeObjectOption[]>(obj: readonly [...T]): NodeArray<T>;

export function nodeProxy<T>(
    nodeClass: T,
): (...params: ProxiedTuple<GetConstructors<T>>) => Swizzable<ConstructedNode<T>>;

export function nodeProxy<T, S extends GetPossibleScopes<T>>(
    nodeClass: T,
    scope: S,
): (...params: ProxiedTuple<RemoveTail<GetConstructorsByScope<T, S>>>) => Swizzable<ConstructedNode<T>>;

export function nodeProxy<T, S extends GetPossibleScopes<T>>(
    nodeClass: T,
    scope: S,
    factor: NodeObjectOption,
): (...params: ProxiedTuple<RemoveHeadAndTail<GetConstructorsByScope<T, S>>>) => Swizzable<ConstructedNode<T>>;

export function nodeImmutable<T>(
    nodeClass: T,
    ...params: ProxiedTuple<GetConstructors<T>>
): Swizzable<ConstructedNode<T>>;

export class ShaderNode<T = {}, R extends Node = Node> {
    constructor(jsFunc: (inputs: NodeObjects<T>, builder: NodeBuilder) => NodeRepresentation);
    call: (
        inputs: { [key in keyof T]: T[key] extends NodeRepresentation ? Swizzable | Node : T[key] },
        builder?: NodeBuilder,
    ) => Swizzable<R>;
}

export const cacheMaps: {
    bool: Map<boolean, ConstNode>;
    uint: Map<number, ConstNode>;
    int: Map<number, ConstNode>;
    float: Map<number, ConstNode>;
};
