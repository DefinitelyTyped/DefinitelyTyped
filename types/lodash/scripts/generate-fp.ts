import * as fs from "fs";
import { ary, cloneDeep, defaults, flatMap, flatten, isArray, isEqual, min, pull, range, remove, sortBy, sortedUniq, trim, union, uniqWith, upperFirst, without } from "lodash";
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
    const promises: Array<Promise<string[]>> = [];
    for (const subfolder of subfolders) {
        promises.push(new Promise<string[]>((resolve, reject) => {
            fs.readdir(path.join("..", subfolder), (err, files) => {
                if (err) {
                    console.error(`failed to list directory contents for '${subfolder}': `, err);
                    reject(err);
                    return;
                }
                const filePaths = files.map(f => path.join("..", subfolder, f));
                try {
                    resolve(processDefinitions(filePaths, commonTypes));
                } catch (e) {
                    console.error(`failed to process files in '${subfolder}': `, e);
                    reject(e);
                }
            });
        }))
    }

    let functionNames: string[];
    try {
        functionNames = flatten(await Promise.all(promises));
    } catch (err) {
        console.error("Failed to parse all functions: ", err);
        return;
    }
    functionNames = sortedUniq(sortBy(functionNames));
    const fpFile =
`// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

${functionNames.map(f => `import ${f} = require("./fp/${f}");`).join("\n")}

export = _;

declare const _: _.LoDashFp;
declare namespace _ {
    interface LoDashFp {
${functionNames.map(f => `        ${f}: typeof ${f};`).join("\n")}
    }
}

// Backward compatibility with --target es5
declare global {
    // tslint:disable-next-line:no-empty-interface
    interface Set<T> { }
    // tslint:disable-next-line:no-empty-interface
    interface Map<K, V> { }
    // tslint:disable-next-line:no-empty-interface
    interface WeakSet<T> { }
    // tslint:disable-next-line:no-empty-interface
    interface WeakMap<K extends object, V> { }
}
`;
    fs.writeFile(path.join("..", "fp.d.ts"), fpFile, (err) => {
        if (err)
            console.error("Failed to write fp.d.ts: ", err);
    });
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

async function processDefinitions(filePaths: string[], commonTypes: string[]): Promise<string[]> {
    const builder: { [name: string]: (...args: number[][]) => () => Interface[] } = {};
    const unconvertedBuilder: { [name: string]: (...args: number[][]) => () => Interface[] } = {};
    for (const filePath of filePaths) {
        const definition = await parseFile(filePath, commonTypes);
        if (!definition)
            continue;

        if (definition.overloads.every(o => o.params.length <= 1 && o.returnType === "typeof _")) {
            // Our convert technique doesn't work well on "typeof _" functions (or at least runInContext)
            // Plus, if there are 0-1 parameters, there's nothing to curry anyways.
            unconvertedBuilder[definition.name] = (...args: number[][]) => {
                return () => curryOverloads(definition.overloads, definition.name, args[0] || [], -1, definition.jsdoc);
            };
        } else {
            builder[definition.name] = (...args: number[][]) => {
                // args were originally passed in as [0], [1], [2], [3]. If they changed order, that indicates how the functoin was re-arged
                // Return a function because some definitons (like rearg) expect to have a function return value

                // If any argument is a number instead of an array, then the argument at that index is being spread (e.g. assignAll, invokeArgs, partial, without)
                const spreadIndex = args.findIndex(a => typeof a === "number");
                if (spreadIndex !== -1) {
                    // If there's a spread parameter, convert() won't cap the number of arguments, so we need to do it manually
                    const arity = Math.max(spreadIndex, args[spreadIndex] as any) + 1;
                    args = args.slice(0, arity);
                }

                return () => curryOverloads(definition.overloads, definition.name, flatten(args), spreadIndex, definition.jsdoc);
            };
        }
    }

    // Use convert() to tell us how functions will be rearged and aliased
    let builderFp = convert(builder, { rearg: true, fixed: true, immutable: false, curry: false, cap: false });
    defaults(builderFp, unconvertedBuilder);

    let functionNames = Object.keys(builderFp).filter(key => key !== "convert" && typeof builderFp[key] === "function");
    for (const functionName of functionNames) {
        let outputFn: (...args: any[]) => Interface[] = builderFp[functionName]([0], [1], [2], [3]); // Assuming the maximum arity is 4
        let output = outputFn([0], [1], [2], [3])
            .map(interfaceToString)
            .join("\n")
            .replace(new RegExp(`\\b(${commonTypes.join("|")})\\b`, "g"), "_.$1");
        const interfaceNameMatch = output.match(/(?:interface|type) ([A-Za-z0-9]+)/);
        const interfaceName = (interfaceNameMatch ? interfaceNameMatch[1] : undefined) || upperFirst(functionName);
        output =
`// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

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
    return functionNames;
}

async function parseFile(filePath: string, commonTypes: string[]): Promise<Definition | undefined> {
    const name = path.basename(filePath, ".d.ts");
    const data = await readFile(filePath);
    return parseDefinition(name, data, filePath, commonTypes);
}

async function parseDefinition(name: string, definitionString: string, filePath: string, commonTypes: string[]): Promise<Definition | undefined> {
    if (name === "chain" || name === "mixin" || name.startsWith("prototype."))
        return undefined;
    const newCommonTypeRegExp = /    (?:type|interface) ([A-Za-z0-9]+)/g;
    let newCommonType = newCommonTypeRegExp.exec(definitionString);
    while (newCommonType) {
        if (!commonTypes.includes(newCommonType[1]))
            commonTypes.push(newCommonType[1]);
        newCommonType = newCommonTypeRegExp.exec(definitionString);
    }

    let getNextOverloadIndex = (position?: number) => definitionString.indexOf("    " + name, position);
    let overloadIndex = getNextOverloadIndex();
    const jsdocStartIndex = definitionString.lastIndexOf("/**", overloadIndex);
    const jsdocEndIndex = definitionString.indexOf("*/", jsdocStartIndex);
    const definition: Definition = { name, overloads: [], jsdoc: "" };
    if (jsdocStartIndex !== -1 && jsdocEndIndex !== -1 && jsdocEndIndex < overloadIndex) {
        definition.jsdoc = definitionString.substring(jsdocStartIndex, jsdocEndIndex + 2).replace(/    /g, "");
    }
    const overloadEndIndex = definitionString.indexOf(";", overloadIndex);
    const firstOverload = definitionString.substring(overloadIndex, overloadEndIndex);
    if (!firstOverload.includes("(")) {
        // This overload actually points to an interface. Try to find said interface and get the overloads from there.
        const interfaceName = firstOverload.split(":")[1].trim();
        if (interfaceName.startsWith("typeof ") || interfaceName.startsWith("LoDashStatic[")) {
            // This is an alias (e.g. first: typeof _.head, or first: LoDashStatic['head']).
            // Ignore it since convert() will create this alias based on the original function.
            return undefined;
        }
        const interfaceIndex = definitionString.indexOf(`interface ${interfaceName} {`);
        if (interfaceIndex !== -1) {
            pull(commonTypes, interfaceName);
            getNextOverloadIndex = (position?: number) => indexOfAny(definitionString, ["    (", "    <"], position);
            overloadIndex = getNextOverloadIndex(interfaceIndex);
        } else {
            console.warn(`Failed to parse function '${name}': interface '${interfaceName}' not found.`);
            return undefined;
        }
    }
    let interfaceEndIndex = definitionString.indexOf("    }", overloadIndex);
    if (interfaceEndIndex === -1)
        interfaceEndIndex = definitionString.length;

    while (overloadIndex !== -1 && overloadIndex < interfaceEndIndex) {
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
                    }
                }
                const paramEndIndex = definitionString.indexOf("):", paramStartIndex);
                if (paramEndIndex !== -1) {
                    overload.params = definitionString
                        .substring(paramStartIndex + 1, paramEndIndex)
                        .split(/,(?=[^,]+:)(?=(?:[^()]*|.*\(.*\).*)$)/m) // split on commas, but ignore Generic<T, U> and (a, b) => c
                        .map(trim)
                        .map(o => trim(o, ","))
                        .filter(o => !!o);
                    overload.returnType = definitionString.substring(paramEndIndex + 2, returnTypeEndIndex).trim();
                    definition.overloads.push(overload);
                } else {
                    console.warn(`Failed to find parameter end position in overload for ${name}.`);
                }
            } else {
                console.warn(`Failed to find parameter start position in overload for ${name}.`);
            }
            overloadIndex = getNextOverloadIndex(returnTypeEndIndex);
        } else {
            console.warn(`Failed to find return type end position (semicolon) in overload for ${name}.`);
            overloadIndex = getNextOverloadIndex(overloadIndex + 1);
        }
    }
    return definition;
}

function curryOverloads(overloads: Overload[], functionName: string, paramOrder: number[], spreadIndex: number, jsdoc: string): Interface[] {
    if (functionName === "noop") {
        // This function is not transformed. Leave it as-is.
        return [{
            name: upperFirst(functionName),
            typeParams: [],
            overloads,
        }];
    }
    overloads = cloneDeep(overloads);
    paramOrder = paramOrder.filter(p => typeof p === "number");
    const arity = paramOrder.length;

    if (spreadIndex !== -1) {
        // The parameter at this index is an array that will be spread when passed down to the actual function (e.g. assignAll, invokeArgs, partial, without).
        // For these parameters, we expect the input to be an array (so remove the "...")

        // Spread/rest parameters could be in any of the following formats:
        // 1. The rest parameter is at spreadIndex, and it is the last parameter.
        // 2. The rest parameter is immediately after spreadIndex, e.g. assign(object, ...sources[]). In this case, convert it to assignAll(...object[])
        // 3. The rest parameter is not the last parameter, e.g. assignWith(object, ...sources[], customizer)
        if (spreadIndex === arity - 1) {
            // cases 1-2
            for (let i = 0; i < overloads.length; ++i) {
                const overload = overloads[i]
                if (overload.params.length === arity && overload.params[spreadIndex] && overload.params[spreadIndex].startsWith("...")) {
                    overload.params[spreadIndex] = overload.params[spreadIndex].replace("...", "");
                } else if (overload.params.length === arity + 1 && overload.params[spreadIndex + 1] && overload.params[spreadIndex + 1].startsWith("...")) {
                    overload.params.splice(spreadIndex + 1, 1);
                    const parts = overload.params[spreadIndex].split(":").map(trim);
                    parts[1] = `ReadonlyArray<${parts[1]}>`;
                    overload.params[spreadIndex] = `${parts[0]}: ${parts[1]}`;
                } else {
                    pull(overloads, overload);
                    --i;
                }
            }
        } else {
            // case 3
            const overload = overloads[0];
            overloads = [{
                jsdoc: overload.jsdoc,
                typeParams: [],
                params: [
                    ...overload.params.slice(0, spreadIndex),
                    "args: ReadonlyArray<any>",
                    ...overload.params.slice(overload.params.length - (arity - spreadIndex - 1)),
                ],
                returnType: "any",
            }];
        }
    }

    const filteredOverloads = overloads.filter(o => o.params.length === arity && !o.params[o.params.length - 1].startsWith("..."));
    if (filteredOverloads.length === 0) {
        const restOverloads = overloads.filter(o => o.params.length > 0 && o.params.length <= arity + 1 && o.params[o.params.length - 1].startsWith("..."));
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
        const optionalOverloads = overloads.filter(o => o.params.slice(arity).every(p => p.includes("?")));
        for (const optionalOverload of optionalOverloads)
            optionalOverload.params = optionalOverload.params.slice(0, arity);
        filteredOverloads.push(...optionalOverloads);
    }
    for (const overload of filteredOverloads)
        overload.params = overload.params.map(p => p
            .replace(/\?:/g, ":") // No optional parameters
            .replace(/: *(?:Array<(.+)>|([^ |]+)\[\]|\((.+)\)\[\])$/, ": ReadonlyArray<$1$2$3>")); // Convert Array to ReadonlyArray because lodash/fp treats everything as immutable

    filteredOverloads.forEach(o => preProcessOverload(o, functionName));
    const interfaces = flatMap(filteredOverloads, (o, i) => {
        const reargParams = o.params.map((p, i) => o.params[paramOrder.indexOf(i)]);
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
                    // Rename any other references to the removed interface(s)
                    for (const overload of flatMap(interfaces, i => i.overloads))
                        overload.returnType = overload.returnType.replace(new RegExp(`\\b${otherReturnInterface.name}\\b`), returnInterface.name);
                }
            }
        }
        pull(mainInterface.overloads, ...others);
        pull(conflictingOverloads, ...others);
    }
    return interfaces;
}

function preProcessOverload(overload: Overload, functionName: string): void {
    // No optional parameters
    //overload.params = overload.params.map(p => p.replace(/\?:/g, ":"));
    // Cap the number of callback arguments
    for (let i = 0; i < overload.params.length; ++i)
        overload.params[i] = capCallback(overload.params[i], functionName);
}

function capCallback(parameter: string, functionName: string): string {
    // We don't support capping these callbacks yet, so flag them if detected
    if (functionName !== "zipWith" && functionName !== "unzipWith" && /(?:iteratee|predicate|callback): *\((?:[^,)]+,[^)]+| *\.\.\..+)\) ?=>/.test(parameter))
        console.warn(`${functionName}: Failed to cap callback: ${parameter}`);

    // Special case for mapKeys: callback is capped to the key parameter only
    if (functionName === "mapKeys") {
        parameter = parameter
            .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary|String)Iteratee<([^,>]+)>/g, "$1: ValueIteratee<string>")
            .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary|String)Iteratee(?:Custom)?<([^,>]+),([^,>]+)>/g, "$1: ValueIterateeCustom<string,$3>");
    }

    return parameter
        .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary|String)Iteratee<([^,>]+)>/g, "$1: ValueIteratee<$2>")
        .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary|String)Iteratee(?:Custom)?<([^,>]+),([^,>]+)>/g, "$1: ValueIterateeCustom<$2,$3>")
        .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary|String)IteratorTypeGuard<([^,>]+),([^,>]+)>/g, "$1: ValueIteratorTypeGuard<$2,$3>")
        .replace(/(iteratee|predicate|callback): *ObjectIteratee<([^,>]+)>/g, "$1: ValueIteratee<$2[keyof $2]>")
        .replace(/(iteratee|predicate|callback): *ObjectIterateeCustom<([^,>]+),([^,>]+)>/g, "$1: ValueIterateeCustom<$2[keyof $2],$3>")
        .replace(/(iteratee|predicate|callback): *ObjectIteratorTypeGuard<([^,>]+),([^,>]+)>/g, "$1: ValueIteratorTypeGuard<$2[keyof $2],$3>")
        .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary)Iterator<([^,>]+), *([^,>]+)>/g, "$1: (value: $2) => $3")
        .replace(/(iteratee|predicate|callback): *StringIterator<([^,>]+)>/g, "$1: (value: string) => $2")
        .replace(/(iteratee|predicate|callback): *ObjectIterator<([^,>]+), *([^,>]+)>/g, "$1: (value: $2[keyof $2]) => $3")
        .replace(/(iteratee|predicate|callback): *Memo(Void)?(?:List|Object|Dictionary)Iterator<([^,>]+),([^,>]+)(?:,[^,>]+?(<T>)?)?>/g, "$1: Memo$2IteratorCapped<$3,$4>");
}

function curryOverload(overload: Overload, functionName: string, overloadId: number): Interface[] {
    let baseName = upperFirst(functionName);
    if (baseName === "Pick") // A type called "Pick" already exists, so rename to avoid conflicts
        baseName = "Lodash" + baseName;
    let output = "";
    if (overload.params.length <= 1) {
        // Functions with 0 or 1 arguments are not curried. Just use a basic function type.
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
        let jsdoc = interfaceDef.overloads[0].jsdoc;
        if (jsdoc)
            jsdoc += "\n";
        interfaceDef.overloads[0].jsdoc = "";
        return `${jsdoc}type ${interfaceDef.name}${typeParamsToString(interfaceDef.typeParams)} = ${overloadToString(interfaceDef.overloads[0], true)}`;
    } else {
        const overloadStrings = interfaceDef.overloads.map(o => "\n" + tab(overloadToString(o), 1)).join("");
        return `interface ${interfaceDef.name}${typeParamsToString(interfaceDef.typeParams)} {${overloadStrings}\n}`;
    }
}

function overloadToString(overload: Overload, arrowSyntax = false): string {
    const joinedParams = overload.params.join(", ");
    let jsdoc = overload.jsdoc;
    if (jsdoc)
        jsdoc += "\n";
    return `${jsdoc}${typeParamsToString(overload.typeParams)}(${joinedParams})${arrowSyntax ? " =>" : ":"} ${overload.returnType};`;
}

function typeParamsToString(typeParams: TypeParam[], includeConstraints = true): string {
    return typeParams.length > 0 ? `<${typeParams.map(tp => tp.name + (includeConstraints && tp.extends ? " extends " + tp.extends : "")).join(", ")}>` : "";
}

function tab(s: string, count: number) {
    const prepend: string = " ".repeat(count * 4);
    return prepend + s.replace(/\n(.)/g, `\n${prepend}$1`);
}

function indexOfAny(source: string, values: string[], position?: number): number {
    const indexes: number[] = [];
    for (const value of values) {
        const index = source.indexOf(value, position);
        if (index !== -1)
            indexes.push(index);
    }
    return indexes.length > 0 ? min(indexes)! : -1;
}

main();
