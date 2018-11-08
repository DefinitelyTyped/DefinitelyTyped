import * as ESTree from "estree";
export { };

// #### Context ####
interface ContextConstructor {
    new(defs: any[]): Context;
}
export const Context: ContextConstructor;
export interface Context {
    topScope: Scope;
    /** The primitive number type. */
    num: Type;
    /** The primitive string type. */
    str: Type;
    /** The primitive boolean type. */
    bool: Type;
}
export function cx(): Context;
export function withContext(context: Context, f: () => void): void;

// #### Analysis ####
/** Parse a piece of code for use by Tern. Will automatically fall back to the error-tolerant parser if the regular parser can’t parse the code. */
export function parse(text: string, options?: {}): ESTree.Program;
/**
 * Analyze a syntax tree. `name` will be used to set the origin of types, properties, and variables produced by this code.
 * The optional `scope` argument can be used to specify a scope in which the code should be analyzed.
 * It will default to the top-level scope.
 */
export function analyze(ast: ESTree.Program, name: string, scope?: Scope): void;
/**
 * Purges the types that have one of the origins given from the context. `start` and `end` can be given to only purge
 * types that occurred in the source code between those offsets. This is not entirely precise — the state of the
 * context won’t be back where it was before the file was analyzed — but it prevents most of the
 * noticeable inaccuracies that re-analysis tends to produce.
 */
export function purgeTypes(origins: string[], start?: number, end?: number): void;
/**
 * Cleaning up variables is slightly trickier than cleaning up types. This does a first pass over the given scope,
 * and marks variables defined by the given origins. This is indended to be followed by a call to `analyze` and then a call to `purgeMarkedVariables`.
 */
export function markVariablesDefinedBy(scope: Scope, origins: string[], start?: number, end?: number): void;
/** Purges variables that were marked by a call to markVariablesDefinedBy and not re-defined in the meantime. */
export function purgeMarkedVariables(): void;

// #### Types ####
interface ObjConstructor {
    new(proto: object | true | null, name?: string): Obj;
}
/** Constructor for the type that represents JavaScript objects. `proto` may be another object, or `true` as a short-hand for `Object.prototype`, or `null` for prototype-less objects. */
export const Obj: ObjConstructor;
export interface Obj extends Type {
    /** The prototype of the object, or null. */
    proto: any;
    /** An object mapping the object’s known properties to AVals. Don’t manipulate this directly (ever), only use it if you have to iterate over the properties. */
    props: Readonly<{
        [key: string]: AVal;
    }>;
    /** Looks up the AVal associated with the given property, or returns null if it doesn’t exist. */
    hasProp(prop: string): AVal | null;
    /** Looks up the given property, or defines it if it did not yet exist (in which case it will be associated with the given AST node). */
    defProp(prop: string, originNode?: ESTree.Node): AVal;
}

interface FnConstructor {
    new(name: string | undefined, self: AVal, args: AVal[], argNames: string[], retval: AVal): Fn;
}
/** Constructor for the type that implements functions. Inherits from `Obj`. The `AVal` types are used to track the input and output types of the function. */
export const Fn: FnConstructor;
export type Fn = Obj;

interface ArrConstructor {
    /** Constructor that creates an array type with the given content type. */
    new(contentType: AVal): Arr;
}
export const Arr: ArrConstructor;
export type Arr = Obj;

export interface Type extends AVal {
    /** The name of the type, if any. */
    name: string;
    /** The origin file of the type. */
    origin: string;
    /**
     * The syntax node that defined the type. Only present for object and function types,
     * and even for those it may be missing (if the type was created by a type definition file,
     * or synthesized in some other way).
     */
    originNode?: ESTree.Node;
    /** Return a string that describes the type. maxDepth indicates the depth to which inner types should be shown. */
    toString(maxDepth: number): string;
    /** Get an `AVal` that represents the named property of this type. */
    getProp(prop: string): AVal;
    /** Call the given function for all properties of the object, including properties that are added in the future. */
    forAllProps(f: (prop: string, val: AVal, local: boolean) => void): void;
}

// #### Abstract Values ####

interface AValConstructor {
    new(): AVal;
}
export const AVal: AValConstructor;
export interface AVal {
    /**
     * Add a type to this abstract value. If the type is already in there,
     * this is a no-op. weight can be given to give this type a non-default
     * weight, which is mostly useful when adding a provisionary type that
     * should be overridden later if a real type is found. The default weight
     * is 100, and passing a weight lower than that will make the type
     * assignment “weak”.
     */
    addType(type: Type, weight?: number): void;
    /**
     * Sets this AVal to propagate all types it receives to the given
     * constraint. This is the mechanism by which types are propagated
     * through the type graph.
     */
    propagate(target: Constraint): void;
    /** Queries whether the AVal _currently_ holds the given type. */
    hasType(type: Type): boolean;
    /** Queries whether the AVal is empty. */
    isEmpty(): boolean;
    /**
     * Asks the abstract value for its current type. May return `null`
     * when there is no type, or conflicting types are present. When
     * `guess` is true or not given, an empty AVal will try to use
     * heuristics based on its propagation edges to guess a type.
     */
    getType(guess?: boolean): Type | null;
    /**
     * Asks the AVal if it contains a function type. Useful when
     * you aren’t interested in other kinds of types.
     */
    getFunctionType(): Type | undefined;
    /**
     * Abstract values that are used to represent variables
     * or properties will have, when possible, an `originNode`
     * property pointing to an AST node.
     */
    originNode?: ESTree.Node;
}

export const ANull: ANull;
export interface ANull extends AVal {
    addType(): void;
    propagate(target: never): void;
    hasType(): false;
    isEmpty(): true;
    getFunctionType(): undefined;
    getType(): null;
    originNode: undefined;
}

// #### Constraints ####
interface ConstraintConstructor {
    new(methods: { [key: string]: any }): { new(): Constraint };
}
/**
 * This is a constructor-constructor for constraints. It’ll create a
 * constructor with all the given methods copied into its prototype,
 * which will run its construct method on its arguments when instantiated.
 */
export const constraint: ConstraintConstructor;
export interface Constraint extends AVal {
    /** May return a type that `getType` can use to “guess” its type based on the fact that it propagates to this constraint. */
    typeHint?(): Type | undefined;
    /** May return a string when this constraint is indicative of the presence of a specific property in the source AVal. */
    propHint?(): string | undefined;
}

// #### Scopes ####
interface ScopeConstructor {
    new(parent?: Scope): Scope;
}
export const Scope: ScopeConstructor;
export interface Scope extends Obj {
    /**
     * Ensures that this scope or some scope above it has a property by the given name
     * (defining it in the top scope if it is missing), and, if the property doesn’t
     * already have an `originNode`, assigns the given node to it.
     */
    defVar(name: string, originNode: ESTree.Node): AVal;
}

// #### Utilities ####
/**
 * Searches the given syntax tree for an expression that ends at the given `end` offset and,
 * if `start` is given, starts at the given start offset. `scope` can be given to override the
 * outer scope, which defaults to the context’s top scope. Will return a `{node, state}`
 * object if successful, where `node` is AST node, and `state` is the scope at that point.
 * Returns `null` if unsuccessful.
 */
export function findExpressionAt(ast: ESTree.Program, start: number | undefined, end: number, scope?: Scope): { node: ESTree.Node, state: Scope } | null;
/**
 * Similar to `findExpressionAt`, except that it will return the innermost expression
 * node that spans the given range, rather than only exact matches.
 */
export function findExpressionAround(ast: ESTree.Program, start: number | undefined, end: number, scope?: Scope): { node: ESTree.Node, state: Scope } | null;
/** Similar to `findExpressionAround`, except that it use the same AST walker as `findExpressionAt`. */
export function findClosestExpression(ast: ESTree.Program, start: number | undefined, end: number, scope?: Scope): { node: ESTree.Node, state: Scope } | null;
/** Determine an expression for the given node and scope (as returned by the functions above). Will return an `AVal` or plain `Type`. */
export function expressionType(expr: { node: ESTree.Node, state: Scope }): AVal | Type;
/** Find the scope at a given position in the syntax tree. The `scope` parameter can be used to override the scope used for code that isn’t wrapped in any function. */
export function scopeAt(ast: ESTree.Program, pos: number, scope?: Scope): Scope;
/**
 * Will traverse the given syntax tree, using `scope` as the starting scope, looking for references to variable `name` that
 * resolve to scope `refScope`, and call `f` with the node of the reference and its local scope for each of them.
 */
export function findRefs(ast: ESTree.Program, scope: Scope, name: string, refScope: Scope, f: (Node: ESTree.Node, Scope: Scope) => void): void;
/**
 * Analogous to `findRefs`, but used to look for references to a specific property instead. Whereas `findRefs`
 * is precise, this is dependent on type inference, and thus can not be relied on to be precise.
 */
export function findPropRefs(ast: ESTree.Program, scope: Scope, objType: Obj, propName: string, f: (Node: ESTree.Node) => void): void;
/** Whenever infer guesses a type through fuzzy heuristics (through `getType` or `expressionType`), it sets a flag. `didGuess` tests whether the guessing flag is set. */
export function didGuess(): boolean;
/** Whenever infer guesses a type through fuzzy heuristics (through `getType` or `expressionType`), it sets a flag. `resetGuessing` resets the guessing flag. */
export function resetGuessing(val?: boolean): void;
