import * as ESTree from "estree";

// #### Context ####
interface ContextConstructor {
    new(defs: any[]): Context;
}
export const Context: ContextConstructor;
export interface Context {
    topScope: Scope;
}
export function cx(): Context;
export function withContext(context: Context, f: () => void): void;

// #### Analysis ####
export function parse(text: string, options?: {}): ESTree.Program;
export function analyze(ast: ESTree.Program, name: string, scope?: Scope): void;
export function purgeTypes(origins: string[], start?: number, end?: number): void;
export function markVariablesDefinedBy(scope: Scope, origins: string[], start?: number, end?: number): void;
export function purgeMarkedVariables(): void;

// #### Types ####
interface ObjConstructor {
    new(proto: object | true | null, name?: string): Obj;
}
export const Obj: ObjConstructor;
export interface Obj {
    proto: any;
    props: Readonly<{
        [key: string]: AVal;
    }>;
    hasProp(prop: string): AVal | null;
    defProp(prop: string, originNode?: ESTree.Node): AVal;
}

interface FnConstructor {
    new(name: string | undefined, self: AVal, args: AVal[], argNames: string[], retval: AVal): Fn;
}
export const Fn: FnConstructor;
export interface Fn extends Obj { }

interface ArrConstructor {
    new(contentType: AVal): Arr;
}
export const Arr: ArrConstructor;
export interface Arr extends Obj { }

export interface Type {
    name: string;
    origin: string;
    originNode: ESTree.Node;
    toString(maxDepth: number): string;
    getProp(prop: string): AVal;
    forAllProps(f: (prop: string, val: AVal, local: boolean) => void): void;
}



// #### Abstract Values ####
export const ANull: ANull;
export interface ANull {
    addType(type?: never, weight?: never): void;
    propagate(target: never): void;
    getProp(): ANull;
    forAllProps(): void;
    hasType(type?: never): boolean; //always false
    isEmpty(): boolean; //always true
    getFunctionType(): void;
    getObjType(): void;
    getSymbolType(): void;
    getType(guess?: never): void;
    gatherProperties(): void;
    propagatesTo(): void;
    typeHint(): void;
    propHint(): void;
    toString(): "?";
}

interface AValConstructor {
    new(): AVal;
}
export const AVal: AValConstructor;
export interface AVal extends ANull {
    addType(type: Type, weight?: number): void;
    propagate(target: Constraint): void;
    hasType(type: Type): boolean;
    isEmpty(): boolean;
    getType(guess?: boolean): Type | undefined;
    getFunctionType(): Type | undefined;
    originNode?: ESTree.Node;
}

// #### Constraints ####
interface ConstraintConstructor {
    new(methods: object): { new(): any };
}
export const constraint: ConstraintConstructor;
export interface Constraint {
    addType: AVal["addType"];
    typeHint(): Type | undefined;
    propHint(): string | undefined;
}

// #### Scopes ####
interface ScopeConstructor {
    new(parent?: Scope): Scope;
}
export const Scope: ScopeConstructor;
export interface Scope {
    defVar(name: string, originNode: ESTree.Node): AVal;
}

// #### Utilities ####
export function findExpressionAt(ast: ESTree.Program, start: number | undefined, end: number, scope?: Scope): { node: ESTree.Node, state: Scope } | null;
export function findExpressionAround(ast: ESTree.Program, start: number | undefined, end: number, scope?: Scope): { node: ESTree.Node, state: Scope } | null;
export function expressionType(expr: { node: ESTree.Node, state: Scope }): AVal | Type;
export function scopeAt(ast: ESTree.Program, pos: number, scope?: Scope): Scope;
export function findRefs(ast: ESTree.Program, scope: Scope, name: string, refScope: Scope, f: (Node: ESTree.Node, Scope: Scope) => void): void;
export function findPropRefs(ast: ESTree.Program, scope: Scope, objType: Obj, propName: string, f: (Node: ESTree.Node) => void): void;
export function didGuess(): boolean;
export function resetGuessing(val?: boolean): void;

