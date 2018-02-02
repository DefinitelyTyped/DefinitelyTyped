import * as fs from "fs";
import * as path from "path";
import ary = require("lodash/ary");
import without = require("lodash/without");
import convert = require("lodash/fp/convert");
import { overlayMode } from "codemirror";

interface Overload {
    typeParams: TypeParam[];
    params: string[];
    returnType: string;
}
interface TypeParam {
    name: string;
    extends?: string;
}

function curryOverload(overload: Overload, name: string) {
    const baseName = name[0].toUpperCase() + name.substr(1);
    let output = "";
    if (overload.params.length === 0) {
        // Nothing to curry. Just use a basic function type.
        output += `type ${baseName} = `;
        if (overload.typeParams.length > 0)
            output += `<${overload.typeParams.map(tp => tp.name + (tp.extends ? " extends " + tp.extends : "")).join(", ")}>`;
        output += `() => ${overload.returnType};`;
        return output;
    }

    for (let i = 0; i < overload.params.length; ++i) {
        // TODO: filter out used typeParams, and pass them as interfaceTypeParams instead
        output += curryParams(overload.params.slice(i), overload.typeParams, overload.returnType, baseName, [], i);
    }
    return output;
}

function curryParams(params: string[], typeParams: TypeParam[], returnType: string, baseName: string, interfaceTypeParams: TypeParam[], index: number) {
    // Assume params.length >= 1
    const interfaceName = baseName + (index > 0 ? index : "");
    // TODO: we can't declare the top-level interface like this, because the top-level interface will contain multiple overloads
    let output = `interface ${interfaceName} {
    (): ${interfaceName};`;
    for (let i = 1; i <= params.length; ++i) {
        const joinedParams = params.slice(0, i).join(", ");
        let currentReturnType = i < params.length ? `${baseName}${index + i}` : returnType;
        const usedTypeParams = i < params.length ? typeParams.filter(tp => new RegExp(`\\b${tp.name}\\b`).test(joinedParams)) : typeParams;
        const unusedTypeParams = without(typeParams, ...usedTypeParams);
        if (usedTypeParams.length > 0 && i < params.length)
            currentReturnType += `<${usedTypeParams.map(tp => tp.name).join(", ")}>`;

        output += `\n    ${createTypeParamDefinition(usedTypeParams)}(${joinedParams}): ${currentReturnType};`;
    }
    output += "\n}\n";
    return output;
}

function createTypeParamDefinition(typeParams: TypeParam[]) {
    return typeParams.length > 0 ? `<${typeParams.map(tp => tp.name + (tp.extends ? " extends " + tp.extends : "")).join(", ")}>` : "";
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
            }
        ];
        for (const o of overloads) {
            o.params = o.params.map(p => p.replace(/\?:/g, ":"));
        }
        return overloads
            .map(o => {
                const reargParams = o.params.map((p, i) => o.params[args[i]]);
                return curryOverload({
                    typeParams: o.typeParams,
                    params: reargParams,
                    returnType: o.returnType,
                }, "some");
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
type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | string | object | [string, any] | PartialDeep<T>;
type ListIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: List<T>) => value is S;
type PartialDeep<T> = {
    [P in keyof T]?: PartialDeep<T[P]>;
};

interface ExpectedSome {
    (): ExpectedSome;
    <T>(predicate: ListIterateeCustom<T, boolean>): ExpectedSome1<T>;
    <T>(predicate: ListIterateeCustom<T, boolean>, collection: List<T> | null | undefined): boolean;
}
interface ExpectedSome1<T> {
    (): ExpectedSome1<T>;
    (collection: List<T> | null | undefined): boolean;
}
