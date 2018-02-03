import * as fs from "fs";
import * as path from "path";
import ary = require("lodash/ary");
import without = require("lodash/without");
import convert = require("lodash/fp/convert");

interface Overload {
    typeParams: TypeParam[];
    params: string[];
    returnType: string;
}
interface TypeParam {
    name: string;
    extends?: string;
}

function preProcessOverload(overload: Overload) {
    // No optional parameters
    overload.params = overload.params.map(p => p.replace(/\?:/g, ":"));

    for (let i = 0; i < overload.params.length; ++i) {
        overload.params[i]
        overload.params[i] = capCallback(overload.params[i]);
    }
}

function capCallback(parameter: string) {
    if (parameter.match(/\([^,)]+,[^)]+\) ?=>/) || parameter.match(/Memo\w*Iterator/)) // We don't support capping these callbacks yet, so flag them if detected
        console.warn("Failed to cap callback: ", parameter);
    return parameter
        .replace(/(?:(?:Array|List|Object|Dictionary|NumericDictionary|String)Iteratee)<([^,>]+)>/, "ValueIteratee<$1>")
        .replace(/(?:(?:Array|List|Object|Dictionary|NumericDictionary|String)Iteratee(?:Custom)?)<([^,>]+),([^,>]+)>/, "ValueIterateeCustom<$1,$2>")
        .replace(/(?:(?:Array|List|Object|Dictionary|NumericDictionary|String)IteratorTypeGuard)<([^,>]+),([^,>]+)>/, "ValueIterateeTypeGuard<$1,$2>");
    // TODO: replace all StringIterator with ValueIteratee? ArrayIterator with ValueIterator?
}

function curryOverload(overload: Overload, functionName: string, overloadId: number) {
    const baseName = functionName[0].toUpperCase() + functionName.substr(1);
    let output = "";
    if (overload.params.length === 0) {
        // Nothing to curry. Just use a basic function type.
        output += `type ${baseName} = `;
        if (overload.typeParams.length > 0)
            output += `<${overload.typeParams.map(tp => tp.name + (tp.extends ? " extends " + tp.extends : "")).join(", ")}>`;
        output += `() => ${overload.returnType};`;
        return output;
    }

    const topInterface = curryParams(overload.params, overload.typeParams, overload.returnType, baseName, [], overloadId, 0);
    let passTypeParams: TypeParam[] = [];
    for (let i = 0; i < overload.params.length; ++i) {
        const interfaceName = getInterfaceName(baseName, overloadId, i, passTypeParams);
        output += `
interface ${interfaceName} {
${curryParams(overload.params.slice(i), without(overload.typeParams, ...passTypeParams), overload.returnType, baseName, passTypeParams, overloadId, i)}
}`;
        const joinedUnusedParams = overload.params.slice(i).concat(overload.returnType).join(", ");
        passTypeParams = overload.typeParams.filter(tp => new RegExp(`\\b${tp.name}\\b`).test(joinedUnusedParams));
    }
    return output;
}

function curryParams(params: string[], typeParams: TypeParam[], returnType: string, baseName: string, interfaceTypeParams: TypeParam[], overloadId: number, index: number) {
    // Assume params.length >= 1
    const interfaceName = getInterfaceName(baseName, overloadId, index, interfaceTypeParams);
    let output = `    (): ${interfaceName};`;
    for (let i = 1; i <= params.length; ++i) {
        const joinedParams = params.slice(0, i).join(", ");
        const usedTypeParams = i < params.length ? typeParams.filter(tp => new RegExp(`\\b${tp.name}\\b`).test(joinedParams)) : typeParams;
        const joinedUnusedParams = params.slice(i).concat(returnType).join(", ");
        const passTypeParams = typeParams.concat(interfaceTypeParams).filter(tp => new RegExp(`\\b${tp.name}\\b`).test(joinedUnusedParams));
        const currentReturnType = i < params.length ? getInterfaceName(baseName, overloadId, index + i, passTypeParams, false) : returnType;

        output += `\n    ${createTypeParamDefinition(usedTypeParams)}(${joinedParams}): ${currentReturnType};`;
    }
    return output;
}

function getInterfaceName(baseName: string, overloadId: number, index: number, typeParams: TypeParam[], includeConstraints = true) {
    let interfaceName = baseName;
    if (index > 0)
        interfaceName += `${overloadId}x${index}${createTypeParamDefinition(typeParams, includeConstraints)}`;
    return interfaceName;
}

function createTypeParamDefinition(typeParams: TypeParam[], includeConstraints = true) {
    return typeParams.length > 0 ? `<${typeParams.map(tp => tp.name + (includeConstraints && tp.extends ? " extends " + tp.extends : "")).join(", ")}>` : "";
}

const builder = {
    some: ary((...args: number[]) => {
        const name = "some";
        const overloads: Overload[] = [
            {
                typeParams: [{ name: "T" }],
                params: [
                    "collection: List<T> | null | undefined",
                    "predicate?: ListIterateeCustom<T, boolean>",
                ],
                returnType: "boolean",
            },
            {
                typeParams: [{ name: "T", extends: "object" }],
                params: [
                    "collection: T | null | undefined",
                    "predicate?: ObjectIterateeCustom<T, boolean>",
                ],
                returnType: "boolean",
            },
        ];
        overloads.forEach(preProcessOverload);
        return overloads
            .map((o, i) => {
                const reargParams = o.params.map((p, i) => o.params[args[i]]);
                return curryOverload({
                    typeParams: o.typeParams,
                    params: reargParams,
                    returnType: o.returnType,
                }, "some", i + 1);
            })
            .join("\n");
    }, 2),//TODO: is ary needed?
}

const builderFp = convert(builder);

console.log(builderFp.some(0, 1));

// Temp code for working out what we want...
type List<T> = ArrayLike<T>;
type NotVoid = {} | null | undefined;
type ArrayIterator<T, TResult> = (value: T, index: number, collection: T[]) => TResult;
type ListIterator<T, TResult> = (value: T, index: number, collection: List<T>) => TResult;
type ListIteratee<T> = ListIterator<T, NotVoid> | string | [string, any] | PartialDeep<T>;
type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | string | [string, any] | PartialDeep<T>;
type ListIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: List<T>) => value is S;
type ValueIteratee<T> = ((value: T) => NotVoid) | string | [string, any] | PartialDeep<T>;
type ValueIterateeCustom<T, TResult> = ((value: T) => TResult) | string | [string, any] | PartialDeep<T>;
type ValueIteratorTypeGuard<T, S extends T> = (value: T) => value is S;
type ValueKeyIteratee<T> = ((value: T, key: string) => NotVoid) | string | [string, any] | PartialDeep<T>;
type PartialDeep<T> = {
    [P in keyof T]?: PartialDeep<T[P]>;
};
type Dictionary<T> = {
    [P in string]?: T;
}
interface NumericDictionary<T> {
    [index: number]: T;
}

interface Some {
    (): Some;
    <T>(predicate: ValueIterateeCustom<any, boolean>): Some1x1<T>;
    <T>(predicate: ValueIterateeCustom<T, boolean>, collection: List<T> | null | undefined): boolean;
    <T extends object>(predicate: ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): boolean;
}
interface Some1x1<T> {
    (): Some1x1<T>;
    (collection: object | null | undefined): boolean;
}
