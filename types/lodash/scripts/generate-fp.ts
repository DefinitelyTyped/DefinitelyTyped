import * as fs from "fs";
import { ary, cloneDeep, flatMap, flatten, isEqual, pull, range, remove, trim, union, uniqWith, upperFirst, without } from "lodash";
import * as convert from "lodash/fp/convert";
import * as path from "path";

interface Definition {
    name: string;
    overloads: Overload[];
    jsdoc: string;
}
interface Interface {
    name: string;
    typeParams: TypeParam[];
    overloads: Overload[];
}
interface Overload {
    typeParams: TypeParam[];
    params: string[];
    returnType: string;
    jsdoc: string;
}
interface TypeParam {
    name: string;
    extends?: string;
    equals?: string;
}

async function main() {
    const common = await readFile("../common/common.d.ts");
    const commonTypes: string[] = [];
    const typeRegExp = /    (?:type|interface) +([A-Za-z0-9]+)/g;
    let match = typeRegExp.exec(common);
    while (match) {
        commonTypes.push(match[1]);
        match = typeRegExp.exec(common);
    }

    // Read each function definition and fp-ify it
    const subfolders = ["array", "collection", "date", "function", "lang", "math", "number", "object", "seq", "string", "util"];
    for (const subfolder of subfolders) {
        fs.readdir(path.join("..", subfolder), (err, files) => {
            if (err) {
                console.error(`failed to list directory contents for '${subfolder}': `, err);
                return;
            }
            for (const file of files) {
                const filePath = path.join("..", subfolder, file);
                try {
                    processDefinition(filePath, commonTypes);
                } catch (e) {
                    console.error(`failed to process file '${filePath}': `, e);
                }
            }
        });
    }
}

function readFile(filePath: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            try {
                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    });
}

async function processDefinition(filePath: string, commonTypes: string[]): Promise<void> {
    const definition = await parseFile(filePath);
    if (!definition)
        return;
    let interfaceName = upperFirst(definition.name);
    if (interfaceName === "Pick")
        interfaceName = "Lodash" + interfaceName;
    const builder = {
        [definition.name]: (...args: number[][]) => {
            // args were originally passed in as [0], [1], [2], [3]. IF they changed order, that indicates how the functoin was re-arged
            const interfaces = curryOverloads(definition.overloads, definition.name, flatten(args), definition.jsdoc);
            return () => interfaces.map(interfaceToString).join("\n");
        },
    }

    let builderFp: any;
    if (definition.overloads.every(o => o.params.length === 1)) {
        // Only 1 parameter. No need to rearg (in fact, reaging some funtions like runInContext causes issues)
        builderFp = {
            [definition.name]: ary(builder[definition.name], 1),
        };
    } else {
        builderFp = convert(builder, { rearg: true, fixed: true, immutable: false, curry: false, cap: false });
    }

    for (const functionName of Object.keys(builderFp)) {
        if (functionName === "convert" || typeof builderFp[functionName] !== "function")
            continue;
        let outputFn: (...args: any[]) => string = builderFp[functionName]([0], [1], [2], [3]); // Assuming the maximum arity is 4
        let output = outputFn([0], [1], [2], [3]).replace(new RegExp(`\\b(${commonTypes.join("|")})\\b`, "g"), "_.$1");
        output =
`import _ = require("../index");

declare namespace Lodash {
${tab(output, 1)}
}

declare const ${functionName}: Lodash.${interfaceName};
export = ${functionName};
`
        const targetFile = `../fp/${functionName}.d.ts`;
        fs.writeFile(targetFile, output, (err) => {
            if (err)
                console.error(`failed to write file: ${targetFile}`, err);
        });
    }
}

async function parseFile(filePath: string): Promise<Definition | undefined> {
    const name = path.basename(filePath, ".d.ts");
    const data = await readFile(filePath);
    return parseDefinition(name, data);
}

function parseDefinition(name: string, definitionString: string): Definition | undefined {
    if (name === "chain" || name.startsWith("prototype."))
        return undefined;
    const jsdocStartIndex = definitionString.indexOf("/**");
    const jsdocEndIndex = definitionString.indexOf("*/", jsdocStartIndex);
    const definition: Definition = { name, overloads: [], jsdoc: "" };
    if (jsdocStartIndex !== -1 && jsdocEndIndex !== -1) {
        definition.jsdoc = definitionString.substring(jsdocStartIndex, jsdocEndIndex + 2).replace(/    /g, "");
    }
    let overloadIndex = definitionString.indexOf(name, jsdocEndIndex);
    let wrapperIndex = definitionString.indexOf("Wrapper<");
    if (wrapperIndex === -1)
        wrapperIndex = definitionString.length;

    while (overloadIndex !== -1 && overloadIndex < wrapperIndex) {
        let paramStartIndex = definitionString.indexOf("(", overloadIndex);
        const returnTypeEndIndex = definitionString.indexOf(";", paramStartIndex);
        if (returnTypeEndIndex !== -1) {
            if (paramStartIndex !== -1) {
                const overload: Overload = { typeParams: [], params: [], returnType: "", jsdoc: definition.jsdoc };
                const typeParamStartIndex = definitionString.indexOf("<", overloadIndex);
                if (typeParamStartIndex !== -1 && typeParamStartIndex < paramStartIndex) {
                    const typeParamEndIndex = definitionString.indexOf(">(", typeParamStartIndex);
                    paramStartIndex = typeParamEndIndex + 1;
                    if (typeParamEndIndex !== -1 && typeParamEndIndex < paramStartIndex) {
                        overload.typeParams = definitionString
                            .substring(typeParamStartIndex + 1, typeParamEndIndex)
                            .split(",")
                            .map((tpString): TypeParam => {
                                const typeParam: TypeParam = { name: tpString };
                                let parts = tpString.split("=");
                                if (parts[1])
                                    typeParam.equals = parts[1].trim();
                                parts = tpString.split("extends");
                                if (parts[1])
                                    typeParam.extends = parts[1].trim();
                                typeParam.name = parts[0].trim();
                                return typeParam;
                            });
                        if (overload.typeParams.some(tp => tp.name.includes("\n"))) {
                            // Invalid
                            // TODO: handle this case properly (e.g. _.partial)
                            return definition;
                        }
                    }
                }
                const paramEndIndex = definitionString.indexOf("):", paramStartIndex);
                if (paramEndIndex !== -1) {
                    overload.params = definitionString.substring(paramStartIndex + 1, paramEndIndex).split(/,(?=[^,]+:)/g).map(trim).filter(o => !!o);
                    overload.returnType = definitionString.substring(paramEndIndex + 2, returnTypeEndIndex).trim();
                    definition.overloads.push(overload);
                } else {
                    console.warn(`Failed to find parameter end position in overload for ${name}.`);
                }
            } else {
                console.warn(`Failed to find parameter start position in overload for ${name}.`);
            }
            overloadIndex = definitionString.indexOf(name, returnTypeEndIndex);
        } else {
            console.warn(`Failed to find return type end position (semicolon) in overload for ${name}.`);
            overloadIndex = definitionString.indexOf(name, overloadIndex + 1);
        }
    }
    return definition;
}

function curryOverloads(overloads: Overload[], functionName: string, paramOrder: number[], jsdoc: string): Interface[] {
    paramOrder = paramOrder.filter(p => typeof p === "number");
    const arity = paramOrder.length;
    const filteredOverloads = overloads.filter(o => o.params.length === arity && !o.params[o.params.length - 1].startsWith("..."));
    if (filteredOverloads.length === 0) {
        const restOverloads = cloneDeep(overloads.filter(o => o.params.length > 0 && o.params.length <= arity + 1 && o.params[o.params.length - 1].startsWith("...")));
        for (const restOverload of restOverloads) {
            if (restOverload.params.length <= arity) {
                restOverload.params[restOverload.params.length - 1] = restOverload.params[restOverload.params.length - 1]
                    .substring(3)
                    .replace(/\[\]$/, "")
                    .replace(/: Array<(.+)>$/, ": $1");
                if (restOverload.params.length < arity) {
                    const paramToCopy = restOverload.params[restOverload.params.length - 1];
                    const copiedParams = range(2, arity - restOverload.params.length + 2).map(i => paramToCopy.replace(/(^.+?):/, `$1${i}:`));
                    restOverload.params.push(...copiedParams);
                }
            } else {
                // Remove the rest parameter
                restOverload.params.pop();
            }
            filteredOverloads.push(restOverload);
        }
    }
    if (filteredOverloads.length === 0) {
        const optionalOverloads = cloneDeep(overloads.filter(o => o.params.slice(arity).every(p => p.includes("?"))));
        for (const optionalOverload of optionalOverloads)
            optionalOverload.params = optionalOverload.params.slice(0, arity);
        filteredOverloads.push(...optionalOverloads);
    }
    for (const overload of filteredOverloads)
        overload.params = overload.params.map(p => p.replace(/\?:/g, ":"));

    filteredOverloads.forEach(preProcessOverload);
    const interfaces = flatMap(filteredOverloads, (o, i) => {
        const reargParams = o.params.map((p, i) => o.params[paramOrder[i]]);
        return curryOverload({
            typeParams: o.typeParams,
            params: reargParams,
            returnType: o.returnType,
            jsdoc,
        }, functionName, i + 1);
    });
    if (interfaces.length === 0)
        return [];
    // Merge interfaces with the same name
    const mainInterface = interfaces[0];
    const interfacesToMerge = interfaces.filter(i => i.name === mainInterface.name);
    mergeInterfaces(interfacesToMerge);
    remove(interfaces, i => i !== mainInterface && interfacesToMerge.includes(i));
    // Check for any non-main interfaces that should now be merged
    const conflictingOverloads = mainInterface.overloads.filter(
        o1 => mainInterface.overloads.some(
            o2 => o1 !== o2 && isEqual(o1.typeParams, o2.typeParams) && isEqual(o1.params, o2.params)));
    for (const overload of conflictingOverloads) {
        const returnInterface = interfaces.find(i => new RegExp(`\\b${i.name}\\b`).test(overload.returnType));
        const others = conflictingOverloads.filter(o2 => o2 !== overload && isEqual(overload.typeParams, o2.typeParams) && isEqual(overload.params, o2.params));
        for (const otherOverload of others) {
            if (otherOverload.returnType === overload.returnType) {
                // Exact duplicate - remove the second overload
                pull(mainInterface.overloads, otherOverload);
            } else {
                // Duplicate except for the return type. If the return types are both known interfaces,
                // merge the interfaces so we can remove the second overload
                const otherReturnInterface = interfaces.find(i => new RegExp(`\\b${i.name}\\b`).test(otherOverload.returnType));
                if (returnInterface && otherReturnInterface) {
                    remove(otherReturnInterface.overloads, o => new RegExp(`\\b${otherReturnInterface.name}\\b`).test(o.returnType));
                    mergeInterfaces([returnInterface, otherReturnInterface]);
                    pull(interfaces, otherReturnInterface);
                }
            }
        }
        pull(mainInterface.overloads, ...others);
        pull(conflictingOverloads, ...others);
    }
    return interfaces;
}

function preProcessOverload(overload: Overload): void {
    // No optional parameters
    //overload.params = overload.params.map(p => p.replace(/\?:/g, ":"));
    // Cap the number of callback arguments
    for (let i = 0; i < overload.params.length; ++i)
        overload.params[i] = capCallback(overload.params[i]);
}

function capCallback(parameter: string): string {
    if (/\([^,)]+,[^)]+\) ?=>/.test(parameter) || /Memo\w*Iterator/.test(parameter) || /\w*Iterator/.test(parameter)) // We don't support capping these callbacks yet, so flag them if detected
        console.warn("Failed to cap callback: ", parameter);
    return parameter
        .replace(/(?:Array|List|Dictionary|NumericDictionary|String)Iteratee<([^,>]+)>/g, "ValueIteratee<$1>")
        .replace(/(?:Array|List|Dictionary|NumericDictionary|String)Iteratee(?:Custom)?<([^,>]+),([^,>]+)>/g, "ValueIterateeCustom<$1,$2>")
        .replace(/(?:Array|List|Dictionary|NumericDictionary|String)IteratorTypeGuard<([^,>]+),([^,>]+)>/g, "ValueIteratorTypeGuard<$1,$2>")
        .replace(/ObjectIteratee<([^,>]+)>/g, "ValueIteratee<$1[keyof $1]>")
        .replace(/ObjectIterateeCustom<([^,>]+),([^,>]+)>/g, "ValueIterateeCustom<$1[keyof $1],$2>")
        .replace(/ObjectIteratorTypeGuard<([^,>]+),([^,>]+)>/g, "ValueIteratorTypeGuard<$1[keyof $1],$2>");
    // TODO: replace all StringIterator with ValueIteratee? ArrayIterator with ValueIterator?
}

function curryOverload(overload: Overload, functionName: string, overloadId: number): Interface[] {
    let baseName = upperFirst(functionName);
    if (baseName === "Pick")
        baseName = "Lodash" + baseName;
    let output = "";
    if (overload.params.length === 0) {
        // Nothing to curry. Just use a basic function type.
        return [{
            name: baseName,
            overloads: [overload],
            typeParams: [],
        }];
    }

    const interfaces: Interface[] = [];
    let passTypeParams: TypeParam[] = [];
    for (let i = 0; i < overload.params.length; ++i) {
        const interfaceDef = {
            name: getInterfaceName(baseName, overloadId, i, []),
            typeParams: cloneDeep(passTypeParams),
            overloads: curryParams(
                overload.params.slice(i),
                without(overload.typeParams, ...passTypeParams),
                overload.returnType,
                baseName,
                passTypeParams,
                overloadId,
                i,
                overload.jsdoc,
            ),
        };
        interfaces.push(interfaceDef);
        const currentParams = overload.params.slice(0, i + 1);
        const usedTypeParams = overload.typeParams.filter(tp => currentParams.some(p => new RegExp(`\\b${tp.name}\\b`).test(p)));
        usedTypeParams.unshift(...overload.typeParams.filter(tp => !usedTypeParams.includes(tp) && usedTypeParams.some(tp2 => !!tp2.extends && new RegExp(`\\b${tp.name}\\b`).test(tp2.extends))));
        const unusedParams = overload.params.slice(i + 1).concat(overload.returnType);
        passTypeParams = usedTypeParams.filter(tp => unusedParams.some(p => new RegExp(`\\b${tp.name}\\b`).test(p)));
    }
    // The T[keyof T] constraint doesn't work so well if it's the only constraint. Convert to a plain old T constraint so it can be merged with
    // other ValueIteratee<T> overloads
    for (const interfaceDef of interfaces) {
        for (const overload of interfaceDef.overloads) {
            const objectTypeParam = overload.typeParams.find(tp => tp.name === "T" && (tp.extends === "object" || !tp.extends));
            if (objectTypeParam && overload.params.some(p => p.includes("T[keyof T]")) && !overload.params.some(p => /T(?!]|\[keyof T])/.test(p))) {
                delete objectTypeParam.extends;
                overload.params = overload.params.map(p => p.replace("T[keyof T]", "T"));
                const fixInterfaceName = overload.returnType.split("<")[0];
                const fixInterface = interfaces.find(i => i.name === fixInterfaceName);
                if (fixInterface) {
                    const fixTypeParam = fixInterface.typeParams.find(tp => tp.name === objectTypeParam.name && (tp.extends === "object" || !tp.extends));
                    if (fixTypeParam) {
                        delete fixTypeParam.extends;
                        for (const fixOverload of fixInterface.overloads)
                            fixOverload.params = fixOverload.params.map(p => p.replace(new RegExp(`\\b${fixTypeParam.name}\\b`, "g"), "object"));
                    }
                } else {
                    console.warn(`Fixed T[keyof T] overload, but could not find corresponding interface '${fixInterfaceName}'.`);
                }
            }
        }
    }
    return interfaces;
}

function curryParams(
    params: string[],
    typeParams: TypeParam[],
    returnType: string,
    baseName: string,
    interfaceTypeParams: TypeParam[],
    overloadId: number,
    index: number,
    jsdoc: string,
): Overload[] {
    // Assume params.length >= 1
    const overloads: Overload[] = [{
        typeParams: [],
        params: [],
        returnType: getInterfaceName(baseName, overloadId, index, interfaceTypeParams),
        jsdoc,
    }];
    for (let i = 1; i <= params.length; ++i) {
        const currentParams = params.slice(0, i);
        const usedTypeParams = i < params.length ? typeParams.filter(tp => currentParams.some(p => new RegExp(`\\b${tp.name}\\b`).test(p))) : typeParams;
        usedTypeParams.unshift(...typeParams.filter(tp => !usedTypeParams.includes(tp) && usedTypeParams.some(tp2 => !!tp2.extends && new RegExp(`\\b${tp.name}\\b`).test(tp2.extends))));
        const unusedParams = params.slice(i).concat(returnType);
        const passTypeParams = usedTypeParams.concat(interfaceTypeParams).filter(tp => unusedParams.some(p => new RegExp(`\\b${tp.name}\\b`).test(p)));
        const currentReturnType = i < params.length ? getInterfaceName(baseName, overloadId, index + i, passTypeParams) : returnType;

        overloads.push({
            typeParams: cloneDeep(usedTypeParams),
            params: currentParams,
            returnType: currentReturnType,
            jsdoc,
        });
    }
    return overloads;
}

function mergeInterfaces(interfaces: Interface[]): void {
    const mainInterface = interfaces[0];
    if (!mainInterface)
        return;
    mainInterface.overloads = uniqWith(flatMap(interfaces, i => i.overloads), isEqual);
}

function getInterfaceName(baseName: string, overloadId: number, index: number, typeParams: TypeParam[]): string {
    let interfaceName = baseName;
    if (index > 0)
        interfaceName += `${overloadId}x${index}${typeParamsToString(typeParams, false)}`;
    return interfaceName;
}

function interfaceToString(interfaceDef: Interface): string {
    if (interfaceDef.overloads.length === 0) {
        // No point in creating an empty interface
        return "";
    } else if (interfaceDef.overloads.length === 1) {
        // Don't create an interface for a single type. Instead use a basic type def.
        return `type ${interfaceDef.name}${typeParamsToString(interfaceDef.typeParams)} = ${overloadToString(interfaceDef.overloads[0], true)};`;
    } else {
        const overloadStrings = interfaceDef.overloads.map(o => "\n" + tab(overloadToString(o), 1)).join("");
        return `interface ${interfaceDef.name}${typeParamsToString(interfaceDef.typeParams)} {${overloadStrings}\n}`;
    }
}

function overloadToString(overload: Overload, arrowSyntax = false): string {
    const joinedParams = overload.params.join(", ");
    return `${overload.jsdoc}\n${typeParamsToString(overload.typeParams)}(${joinedParams})${arrowSyntax ? " =>" : ":"} ${overload.returnType};`;
}

function typeParamsToString(typeParams: TypeParam[], includeConstraints = true): string {
    return typeParams.length > 0 ? `<${typeParams.map(tp => tp.name + (includeConstraints && tp.extends ? " extends " + tp.extends : "")).join(", ")}>` : "";
}

function tab(s: string, count: number) {
    const prepend: string = " ".repeat(count * 4);
    return prepend + s.replace(/\n(.)/g, `\n${prepend}$1`);
}

main();
