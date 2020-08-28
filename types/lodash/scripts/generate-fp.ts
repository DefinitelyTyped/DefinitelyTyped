// Script for converting the lodash types into functional programming (FP) format.
// The convertion is done based on this guide: https://github.com/lodash/lodash/wiki/FP-Guide

// Assumptions:
// - All functions are defined in one of the files in the "common" subfolder
// - All functions are defined inside of the LoDashStatic interface (although functions like _.partial may refer to another interface in the same file)
// - Consistent indentation is used for the start and end of the above interface
// - Consistent spacing is used for interface definitions: interface MyInterface {
// - Consistent line breaks (\n, \r, or \r\n) are used in all files
// - All overloads of a given function are defined in the same file

import fs from "fs";
import _ from "lodash";
import convert from "lodash/fp/convert";
import path from "path";
import { readFile, getLineBreak, tab, getLineNumber } from "./utils";

interface Definition {
    name: string;
    overloads: Overload[];
    constants: string[];
    jsdoc: string;
}
interface InterfaceGroup {
    functionName: string;
    interfaces: Interface[];
}
interface Interface {
    name: string;
    typeParams: TypeParam[];
    overloads: Overload[];
    constants: string[];
}
interface Overload {
    typeParams: TypeParam[];
    params: string[];
    returnType: string;
    jsdoc: string;
    tslintDisable?: string;
}
interface TypeParam {
    name: string;
    extends?: string;
    equals?: string;
}

let lineBreak = "\n";
async function main() {
    lineBreak = await getLineBreak();
    const commonTypes: string[] = [];

    // Read each function definition and fp-ify it
    const subfolders = ["common"];
    const promises: Array<Promise<InterfaceGroup[]>> = [];
    for (const subfolder of subfolders) {
        promises.push(new Promise<InterfaceGroup[]>((resolve, reject) => {
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
        }));
    }

    let interfaceGroups: InterfaceGroup[];
    try {
        interfaceGroups = _.flatten(await Promise.all(promises));
    } catch (err) {
        console.error("Failed to parse all functions: ", err);
        return;
    }
    interfaceGroups = _.sortBy(interfaceGroups, g => _.toLower(g.functionName));
    for (const interfaceGroup of interfaceGroups) {
        // Rename interfaces for different versions of the same function with different arity (to avoid name conflicts).
        // Don't rename aliases - instead they will be removed from the output when interfaces are written.
        const interfaceName = interfaceGroup.interfaces[0].name;
        const conflicts = interfaceGroups.filter(g => g.interfaces[0].name === interfaceName);
        if (conflicts.length > 1 && _.some(conflicts, c => !_.isEqual(c.interfaces, conflicts[0].interfaces))) {
            for (const conflict of conflicts) {
                const oldName = conflict.interfaces[0].name;
                const newName = getInterfaceBaseName(conflict.functionName);
                for (const interfaceDef of conflict.interfaces) {
                    interfaceDef.name = interfaceDef.name.replace(oldName, newName);
                    for (const overload of interfaceDef.overloads)
                        overload.returnType = overload.returnType.replace(oldName, newName);
                }
            }
        }
    }
    const interfaces = _.uniqBy(_.flatMap(interfaceGroups, g => g.interfaces), i => i.name);
    const commonTypeSearch = new RegExp(`\\b(${commonTypes.join("|")})\\b`, "g");
    const interfaceStrings = _(interfaces)
        .map(i => tab(interfaceToString(i), 1))
        .join(lineBreak)
        .replace(commonTypeSearch, match => `lodash.${match}`);
    const fpFile = [
        "// AUTO-GENERATED: do not modify this file directly.",
        "// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:",
        "// npm install && npm run generate",
        "",
        'import lodash = require("./index");',
        "",
        "export = _;",
        "",
        "declare const _: _.LoDashFp;",
        "declare namespace _ {",
        interfaceStrings,
        "",
        "    interface LoDashFp {",
        ...interfaceGroups.map(g => `        ${g.functionName}: ${g.interfaces[0].name};`),
        "        __: lodash.__;",
        "        placeholder: lodash.__;",
        "    }",
        "}",
        "",
    ].join(lineBreak);
    fs.writeFile(path.join("..", "fp.d.ts"), fpFile, (err) => {
        if (err)
            console.error("Failed to write fp.d.ts: ", err);
    });

    // Make sure the generated files are listed in tsconfig.json, so they are included in the lint checks
    const tsconfigPath = path.join("..", "tsconfig.json");
    const tsconfigFile = await readFile(tsconfigPath);
    const tsconfig = tsconfigFile.split(lineBreak).filter(row => !row.includes("fp/") || row.includes("fp/convert.d.ts"));
    const newRows = interfaceGroups.map(g => `        "fp/${g.functionName}.d.ts",`)
        .concat(["__", "placeholder"].map(p => `        "fp/${p}.d.ts",`));
    newRows[newRows.length - 1] = newRows[newRows.length - 1].replace(",", "");

    const insertIndex = _.findLastIndex(tsconfig, row => row.trim() === "]"); // Assume "files" is the last array
    if (!tsconfig[insertIndex - 1].endsWith(","))
        tsconfig[insertIndex - 1] += ",";
    tsconfig.splice(insertIndex, 0, ...newRows);

    fs.writeFile(tsconfigPath, tsconfig.join(lineBreak), (err) => {
        if (err)
            console.error(`Failed to write ${tsconfigPath}: `, err);
    });
}

async function processDefinitions(filePaths: string[], commonTypes: string[]): Promise<InterfaceGroup[]> {
    const builder: { [name: string]: (...args: number[][]) => () => Interface[] } = {};
    const unconvertedBuilder: { [name: string]: (...args: number[][]) => () => Interface[] } = {};
    for (const filePath of filePaths) {
        const definitions = await parseFile(filePath, commonTypes);
        for (const definition of definitions) {
            definition.overloads = definition.overloads.filter(o => !o.params.some(p => p.includes('StringIterator')));
            if (definition.overloads.every(o => o.params.length <= 1 && (o.returnType === "typeof _" || o.returnType === "LoDashStatic"))) {
                // Our convert technique doesn't work well on "typeof _" functions (or at least runInContext)
                // Plus, if there are 0-1 parameters, there's nothing to curry anyways.
                unconvertedBuilder[definition.name] = (...args: number[][]) => {
                    return () => curryDefinition(definition, args[0] || [], -1, false);
                };
            } else {
                builder[definition.name] = (...args: Array<number | number[]>) => {
                    // args were originally passed in as [0], [1], [2], [3], [4]. If they changed order, that indicates how the functoin was re-arged
                    // Return a function because some definitons (like rearg) expect to have a function return value

                    // If any argument is a number instead of an array, then the argument at that index is being spread (e.g. assignAll, invokeArgs, partial, without)
                    const spreadIndex = args.findIndex(a => typeof a === "number");
                    let isFixed = true;
                    if (spreadIndex !== -1) {
                        // If there's a spread parameter, convert() won't cap the number of arguments, so we need to do it manually
                        const arity = Math.max(spreadIndex, args[spreadIndex] as number) + 1;
                        args = args.slice(0, arity);
                    } else if (args.length > 4 || definition.name === "flow" || definition.name === "flowRight") {
                        // Arity wasn't fixed by convert()
                        isFixed = false;
                    }
                    // For some reason, convert() doesn't seems to tell us which functions have unchanged argument order.
                    // So we have to hard-code it.
                    const unchangedOrders = ["add", "assign", "assignIn", "bind", "bindKey", "concat", "difference", "divide", "eq",
                        "gt", "gte", "isEqual", "lt", "lte", "matchesProperty", "merge", "multiply", "overArgs", "partial", "partialRight",
                        "propertyOf", "random", "range", "rangeRight", "subtract", "zip", "zipObject", "zipObjectDeep"];
                    if (unchangedOrders.includes(definition.name))
                        args = _.sortBy(args, a => typeof a === "number" ? a : a[0]);

                    return () => curryDefinition(definition, _.flatten(args), spreadIndex, isFixed);
                };
            }
        }
    }

    // Use convert() to tell us how functions will be rearged and aliased
    const builderFp = convert(builder, { rearg: true, fixed: true, immutable: false, curry: false, cap: false });
    _.defaults(builderFp, unconvertedBuilder);

    const functionNames = Object.keys(builderFp).filter(key => key !== "convert" && typeof builderFp[key] === "function");
    const interfaceGroups: InterfaceGroup[] = functionNames.map((functionName): InterfaceGroup => ({
        functionName,
        // Assuming the maximum arity is 4. Pass one more arg than the max arity so we can detect if arguments weren't fixed.
        interfaces: builderFp[functionName]([0], [1], [2], [3], [4])([0], [1], [2], [3], [4]),
    }));
    for (const functionName of functionNames) {
        const output = [
            `import { ${functionName} } from "../fp";`,
            `export = ${functionName};`,
            "",
        ].join(lineBreak);
        const targetFile = `../fp/${functionName}.d.ts`;
        fs.writeFile(targetFile, output, (err) => {
            if (err)
                console.error(`failed to write file: ${targetFile}`, err);
        });
    }
    return interfaceGroups;
}

async function parseFile(filePath: string, commonTypes: string[]): Promise<Definition[]> {
    const definitionString = await readFile(filePath);
    const newCommonTypeRegExp = /    (?:type|interface) ([A-Za-z0-9_]+)/g;
    let newCommonType = newCommonTypeRegExp.exec(definitionString);
    while (newCommonType) {
        if (!commonTypes.includes(newCommonType[1]))
            commonTypes.push(newCommonType[1]);
        newCommonType = newCommonTypeRegExp.exec(definitionString);
    }

    const definitons: Definition[] = [];
    const lodashStaticRegExp = /( *)interface LoDashStatic {/g;
    let lodashStaticMatch = lodashStaticRegExp.exec(definitionString);
    while (lodashStaticMatch) {
        const startIndex = lodashStaticMatch.index;
        const endIndex = definitionString.indexOf(`${lineBreak}${lodashStaticMatch[1]}}`, startIndex);
        if (endIndex === -1) {
            const lineNumber = getLineNumber(definitionString, startIndex);
            console.warn(`Failed to find end of interface 'LoDashStatic' (starting at ${filePath} line ${lineNumber}).`);
            break;
        }
        const parsedDefinitions = parseDefinitions(definitionString, startIndex + lodashStaticMatch[0].length, endIndex, filePath, commonTypes);
        definitons.push(...parsedDefinitions);
        lodashStaticMatch = lodashStaticRegExp.exec(definitionString);
    }
    return definitons;
}

function parseDefinitions(definitionString: string, startIndex: number, endIndex: number, filePath: string, commonTypes: string[], name?: string): Definition[] {
    const parentName = name;
    const overloadRegExp = name ? /     [<(]/g : /     (\w+)[<(:]/g;
    overloadRegExp.lastIndex = startIndex;
    let overloadMatch = overloadRegExp.exec(definitionString);
    if (!overloadMatch) {
        const lineNumber = getLineNumber(definitionString, startIndex);
        console.warn(`No function definitions were found in interface at ${filePath} line ${lineNumber}.`);
        return [];
    }
    const definitons: Definition[] = [];
    let currentDefinition: Definition | undefined;
    for (; overloadMatch && overloadMatch.index < endIndex; overloadMatch = overloadRegExp.exec(definitionString)) {
        name = overloadMatch[1] || name!;

        const overloadStartIndex = overloadMatch.index;
        if (!currentDefinition || name !== currentDefinition.name) {
            if (currentDefinition && !_.isEmpty(currentDefinition.overloads))
                definitons.push(currentDefinition);
            currentDefinition = { name, overloads: [], constants: [], jsdoc: "" };
            const jsdocStartIndex = definitionString.lastIndexOf("/**", overloadStartIndex);
            const jsdocEndIndex = definitionString.indexOf("*/", jsdocStartIndex);
            if (jsdocStartIndex !== -1 && jsdocStartIndex > startIndex && jsdocEndIndex !== -1 && jsdocEndIndex < overloadStartIndex) {
                // Verify that the comment is for this overload
                const overloadTestIndex = definitionString.indexOf("     " + name, jsdocEndIndex);
                if (overloadTestIndex === overloadStartIndex)
                    currentDefinition.jsdoc = definitionString.substring(jsdocStartIndex, jsdocEndIndex + 2).replace(/    /g, "");
            }
        }
        let overloadEndIndex = definitionString.indexOf(";", overloadStartIndex);
        if (overloadEndIndex === -1 || overloadEndIndex > endIndex) {
            const lineNumber = getLineNumber(definitionString, overloadStartIndex);
            console.warn(`Overload does not end with semicolon! ${filePath} line ${lineNumber}`);
            break;
        }
        overloadRegExp.lastIndex = overloadEndIndex;
        if (name === "chain" || name === "mixin" || name.startsWith("prototype."))
            continue;

        const overloadString = definitionString.substring(overloadStartIndex, overloadEndIndex);
        let paramStartIndex = overloadString.indexOf("(");
        if (paramStartIndex !== -1) {
            const overload: Overload = { typeParams: [], params: [], returnType: "", jsdoc: currentDefinition.jsdoc };

            const previousLine = getPreviousLine(definitionString, overloadStartIndex).trim();
            if (previousLine.startsWith("// tslint:disable"))
                overload.tslintDisable = previousLine;

            const typeParamStartIndex = overloadString.indexOf("<");
            if (typeParamStartIndex !== -1 && typeParamStartIndex < paramStartIndex) {
                const typeParamEndIndex = overloadString.indexOf(">(", typeParamStartIndex);
                if (typeParamEndIndex !== -1) {
                    paramStartIndex = typeParamEndIndex + 1;
                    overload.typeParams = overloadString
                        .substring(typeParamStartIndex + 1, typeParamEndIndex)
                        .split(",")
                        .map((tpString): TypeParam => {
                            const typeParam: TypeParam = { name: tpString };
                            let parts = tpString.split(/=[^>]/);
                            if (parts[1])
                                typeParam.equals = parts[1].trim();
                            parts = tpString.split(" extends ");
                            if (parts[1])
                                typeParam.extends = parts[1].trim();
                            typeParam.name = parts[0].trim();
                            return typeParam;
                        });
                }
            }
            const paramEndIndex = overloadString.indexOf("):", paramStartIndex);
            if (paramEndIndex === -1) {
                console.warn(`Failed to find parameter end position in overload for '${name}' (${filePath}).`);
                continue;
            }
            overload.params = overloadString
                .substring(paramStartIndex + 1, paramEndIndex)
                .split(/,(?=[^,]+:)(?=(?:[^()]*|.*\(.*\).*)$)/m) // split on commas, but ignore Generic<T, U> and (a, b) => c
                .map(_.trim)
                .map(o => _.trim(o, ","))
                .filter(o => !!o);
            overload.returnType = overloadString.substring(paramEndIndex + 2).trim();
            // Special case for unset: the return type should be the input type, not bolean. See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25361
            if (name === "unset") {
                overload.typeParams = [{ name: "T" }];
                overload.params[0] = overload.params[0].replace(/\bany\b/, "T");
                overload.returnType = "T";
            }
            currentDefinition.overloads.push(overload);
        } else {
            // This overload actually points to an interface. Try to find said interface and get the overloads from there.
            const overloadParts = overloadString.split(":");
            const interfaceName = overloadParts[1].trim();
            if (interfaceName.startsWith("typeof ") || interfaceName.startsWith("LoDashStatic[")) {
                // This is an alias (e.g. first: typeof _.head, or first: LoDashStatic['head']).
                // Ignore it since convert() will create this alias based on the original function.
                continue;
            }
            let interfaceStartIndex: number;
            let interfaceEndIndex: number;
            if (!interfaceName.startsWith("{")) {
                const ignoreInterfaceNames = ["string", "TemplateSettings", "MapCacheConstructor"];
                if (ignoreInterfaceNames.includes(interfaceName))
                    continue;
                const interfaceRegExp = new RegExp(`( *)interface ${interfaceName} {`);
                const interfaceMatch = interfaceRegExp.exec(definitionString);
                if (!interfaceMatch) {
                    const lineNumber = getLineNumber(definitionString, overloadStartIndex);
                    console.warn(`Failed to parse function '${name}': interface '${interfaceName}' not found. (${filePath} line ${lineNumber})`);
                    continue;
                }
                interfaceStartIndex = interfaceMatch.index + interfaceMatch[0].length;
                interfaceEndIndex = definitionString.indexOf(`${lineBreak}${interfaceMatch[1]}}`, interfaceStartIndex);
                if (interfaceEndIndex === -1) {
                    const lineNumber = getLineNumber(definitionString, interfaceStartIndex);
                    console.warn(`Failed to find end of interface '${interfaceName}' (starting at ${filePath} line ${lineNumber}).`);
                    continue;
                }
                _.pull(commonTypes, interfaceName);
            } else {
                // This is an inline type definition
                interfaceStartIndex = definitionString.indexOf("{", overloadStartIndex + overloadParts[0].length) + 1;
                interfaceEndIndex = definitionString.indexOf("}", interfaceStartIndex);
                if (interfaceEndIndex === -1 || interfaceEndIndex >= endIndex) {
                    console.warn(`Failed to find closing '}' character for property '${name}' (${filePath}).`);
                    continue;
                }
                overloadEndIndex = definitionString.indexOf(";", interfaceEndIndex);
                if (overloadEndIndex === -1 || overloadEndIndex >= endIndex) {
                    const lineNumber = getLineNumber(definitionString, overloadStartIndex);
                    console.warn(`Overload does not end with semicolon! ${filePath} line ${lineNumber}`);
                    continue;
                }
                overloadRegExp.lastIndex = overloadEndIndex;
            }
            const [definition] = parseDefinitions(definitionString, interfaceStartIndex, interfaceEndIndex, filePath, commonTypes, name);
            if (definition) {
                if (currentDefinition.jsdoc)
                    for (const overload of definition.overloads)
                        overload.jsdoc = currentDefinition.jsdoc;
                currentDefinition.overloads.push(...definition.overloads);
                currentDefinition.constants.push(...definition.constants);
            }
        }
    }
    if (parentName && currentDefinition) {
        const constantRexExp = /    (\w+): *([^()\r\n]+);[\r\n]/g;
        constantRexExp.lastIndex = startIndex;
        for (let constantMatch = constantRexExp.exec(definitionString); constantMatch && constantMatch.index < endIndex; constantMatch = constantRexExp.exec(definitionString)) {
            currentDefinition.constants.push(`${constantMatch[1]}: ${constantMatch[2]}`);
        }
    }

    if (currentDefinition && !_.isEmpty(currentDefinition.overloads))
        definitons.push(currentDefinition);
    return definitons;
}

function curryDefinition(definition: Definition, paramOrder: number[], spreadIndex: number, isFixed: boolean): Interface[] {
    // Remove any duplicate/redundant overloads
    let overloads = _.uniqWith(_.cloneDeep(definition.overloads),
        (a, b) => _.isEqual(a.params, b.params) && _.isEqual(getUsedTypeParams(a.params, a.typeParams), getUsedTypeParams(b.params, b.typeParams)));
    const functionName = definition.name;
    // Remove unused type parameters
    for (const overload of overloads) {
        for (let i = 0; i < overload.typeParams.length; ++i) {
            const typeParam = overload.typeParams[i];
            const search = new RegExp(`\\b${typeParam.name}\\b`);
            if (overload.params.every(p => !search.test(p)) && !search.test(overload.returnType)) {
                // overload.returnType = overload.returnType.replace(search, typeParam.extends || "any");
                overload.typeParams.splice(i, 1);
                --i;
            }
        }
    }

    if (!isFixed) {
        // Non-fixed arity functions cannot be curried.
        for (const overload of overloads)
            overload.params = overload.params.map(p => p.replace(/\?:/g, ":")); // No optional parameters
        return [{
            name: getInterfaceBaseName(functionName),
            typeParams: [],
            overloads,
            constants: definition.constants,
        }];
    }
    paramOrder = paramOrder.filter(p => typeof p === "number");
    const arity = paramOrder.length;

    if (spreadIndex !== -1) {
        // The parameter at this index is an array that will be spread when passed down to the actual function (e.g. assignAll, invokeArgs, partial, without).
        // For these parameters, we expect the input to be an array (so remove the "...")

        // Spread/rest parameters could be in any of the following formats:
        // 1. The rest parameter is at spreadIndex, and it is the last parameter.
        // 2. The rest parameter is immediately after spreadIndex, e.g. assign(object, ...sources[]). In this case, convert it to assignAll(...object[])
        // 3. The overload defines no rest parameters, e.g. mergeAll(T1, T2, T3)
        // 4. The rest parameter is not the last parameter, e.g. assignWith(object, ...sources[], customizer)
        if (spreadIndex === arity - 1) {
            for (let i = 0; i < overloads.length; ++i) {
                const overload = overloads[i];
                if (overload.params.length === arity && overload.params[spreadIndex] && overload.params[spreadIndex].startsWith("...")) {
                    // case 1
                    overload.params[spreadIndex] = overload.params[spreadIndex].replace("...", "");
                } else if (overload.params.length === arity + 1 && overload.params[spreadIndex + 1] && overload.params[spreadIndex + 1].startsWith("...")) {
                    // case 2
                    overload.params.splice(spreadIndex + 1, 1);
                    const parts = overload.params[spreadIndex].split(":").map(_.trim);
                    parts[1] = `ReadonlyArray<${parts[1]}>`;
                    overload.params[spreadIndex] = `${parts[0]}: ${parts[1]}`;
                } else if (overload.params.length >= arity && overload.params[spreadIndex] && !overload.params.some(p => p.startsWith("..."))) {
                    // case 3
                    const paramName = getParamName(overload.params[spreadIndex]);
                    const spreadParamTypes = overload.params.slice(spreadIndex).map(getParamType);
                    overload.params = overload.params.slice(0, spreadIndex);
                    overload.params.push(`${paramName}: [${spreadParamTypes.join(", ")}]`);
                } else {
                    _.pull(overloads, overload);
                    --i;
                }
            }
        } else {
            // case 4
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

    let filteredOverloads = overloads.filter(o => o.params.length >= arity && o.params.slice(arity).every(p => p.includes("?") && !p.startsWith("iteratee"))
        && o.params.every(p => !p.startsWith("...") && !p.startsWith("guard:")));
    if (filteredOverloads.length === 0)
        filteredOverloads = overloads.filter(o => o.params.length >= arity && o.params.slice(arity).every(p => p.includes("?") || p.startsWith("..."))
            && o.params.every(p => !p.startsWith("guard:")));
    if (filteredOverloads.length === 0)
        filteredOverloads = overloads.filter(o => o.params.length > 0 && o.params.length <= arity + 1 && o.params[o.params.length - 1].startsWith("..."));
    if (filteredOverloads.length === 0)
        console.warn(`No matching overloads found for ${functionName} with arity ${arity}`);

    const restOverloads = overloads.filter(o => o.params.length > 0 && o.params[o.params.length - 1].startsWith("..."));
    for (const restOverload of restOverloads) {
        restOverload.params[restOverload.params.length - 1] = restOverload.params[restOverload.params.length - 1]
            .substring(3)
            .replace(/\[\]$/, "")
            .replace(/: Array<(.+)>$/, ": $1");
        if (restOverload.params.length < arity) {
            const paramToCopy = restOverload.params[restOverload.params.length - 1];
            const copiedParams = _.range(2, arity - restOverload.params.length + 2).map(i => paramToCopy.replace(/(^.+?):/, `$1${i}:`));
            restOverload.params.push(...copiedParams);
        }
    }

    for (const overload of filteredOverloads)
        preProcessOverload(overload, functionName, arity);

    const interfaces = _.flatMap(filteredOverloads, (o, i) => {
        const reargParams = o.params.map((p, i) => o.params[paramOrder.indexOf(i)]);
        return curryOverload({
            typeParams: o.typeParams,
            params: reargParams,
            returnType: o.returnType,
            jsdoc: o.jsdoc,
        }, functionName, i + 1);
    });
    if (interfaces.length === 0)
        return [];
    // Merge interfaces with the same name
    const mainInterface = interfaces[0];
    const interfacesToMerge = interfaces.filter(i => i.name === mainInterface.name);
    mergeInterfaces(interfacesToMerge);
    _.remove(interfaces, i => i !== mainInterface && interfacesToMerge.includes(i));
    // Check for any non-main interfaces that should now be merged
    for (const overload of mainInterface.overloads) {
        const others = mainInterface.overloads.filter(o2 => o2 !== overload
            && _.isEqual(overload.typeParams, o2.typeParams)
            && _.isEqual(overload.params.map(getParamType), o2.params.map(getParamType)));
        const returnInterface = interfaces.find(i => new RegExp(`\\b${i.name}\\b`).test(overload.returnType));
        for (const otherOverload of others) {
            for (let i = 0; i < overload.params.length; ++i) {
                const paramNames = _.uniq([overload].concat(others).map(o => getParamName(o.params[i])));
                if (paramNames.length > 1) {
                    // Some param names are different. Merge them.
                    const paramType = getParamType(overload.params[i]);
                    overload.params[i] = `${paramNames[0]}Or${paramNames.slice(1).map(_.upperFirst).join("Or")}: ${paramType}`;
                }
            }
            if (otherOverload.returnType === overload.returnType) {
                // Exact duplicate - remove the second overload
                _.pull(mainInterface.overloads, otherOverload);
            } else {
                // Duplicate except for the return type. If the return types are both known interfaces,
                // merge the interfaces so we can remove the second overload
                const otherReturnInterface = interfaces.find(i => new RegExp(`\\b${i.name}\\b`).test(otherOverload.returnType));
                if (returnInterface && otherReturnInterface) {
                    _.remove(otherReturnInterface.overloads, o => new RegExp(`\\b${otherReturnInterface.name}\\b`).test(o.returnType));
                    mergeInterfaces([returnInterface, otherReturnInterface]);
                    _.pull(interfaces, otherReturnInterface);
                    // Rename any other references to the removed interface(s)
                    for (const overload of _.flatMap(interfaces, i => i.overloads))
                        overload.returnType = overload.returnType.replace(new RegExp(`\\b${otherReturnInterface.name}\\b`), returnInterface.name);
                }
            }
        }
        _.pull(mainInterface.overloads, ...others);
    }
    for (const interfaceDef of interfaces)
        interfaceDef.overloads = mergeSimilarOverloads(interfaceDef.overloads);
    interfaces[0].constants = definition.constants;
    return interfaces;
}

function getParamName(param: string) {
    return param.split(":", 1)[0];
}

function getParamType(param: string) {
    const index = param.indexOf(":");
    return index !== -1 ? param.substring(index + 1).trim() : "any";
}

function isPlaceholder(param: string) {
    return param.endsWith("__");
}

function preProcessOverload(overload: Overload, functionName: string, arity: number): void {
    overload.params = overload.params
            .slice(0, arity)
            .map(p => p
                .replace(/\?:/g, ":") // No optional parameters
                .replace(/: *(?:Array<(.+)>|([^ |]+)\[\]|\((.+)\)\[\])$/, ": ReadonlyArray<$1$2$3>")); // Convert Array to ReadonlyArray because lodash/fp treats everything as immutable
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
            .replace(/(iteratee|predicate|callback): *(?:Array|List|NumericDictionary|String)Iteratee<(.+)>$/g, "$1: ValueIteratee<number>")
            .replace(/(iteratee|predicate|callback): *(?:Dictionary|Object)Iteratee<(.+)>$/g, "$1: ValueIteratee<string>")
            .replace(/(iteratee|predicate|callback): *(?:Array|List|NumericDictionary|String)Iteratee(?:Custom)?<(.+?),(.+)>$/g, "$1: ValueIterateeCustom<number,$3>")
            .replace(/(iteratee|predicate|callback): *(?:Dictionary|Object)Iteratee(?:Custom)?<(.+?),(.+)>$/g, "$1: ValueIterateeCustom<string,$3>");
    }

    // Special case for reduceRight: callback argument order of (b, a)
    if (functionName === "reduceRight") {
        parameter = parameter
            .replace(/(iteratee|predicate|callback): *Memo(Void)?(?:List|Object|Dictionary)Iterator<([^,>]+),([^,>]+)(?:,[^,>]+?(<T>)?)?>/g, "$1: Memo$2IteratorCappedRight<$3,$4>");
    }

    return parameter
        .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary|String)Iteratee<(.+)>$/g, "$1: ValueIteratee<$2>")
        .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary|String)Iteratee(?:Custom)?<(.+?),(.+)>$/g, "$1: ValueIterateeCustom<$2,$3>")
        .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary|String)IteratorTypeGuard<(.+?),(.+)>$/g, "$1: ValueIteratorTypeGuard<$2,$3>")
        .replace(/(iteratee|predicate|callback): *ObjectIteratee<(.+)>$/g, "$1: ValueIteratee<$2[keyof $2]>")
        .replace(/(iteratee|predicate|callback): *ObjectIterateeCustom<(.+?),(.+)>$/g, "$1: ValueIterateeCustom<$2[keyof $2],$3>")
        .replace(/(iteratee|predicate|callback): *ObjectIteratorTypeGuard<(.+?),(.+)>$/g, "$1: ValueIteratorTypeGuard<$2[keyof $2],$3>")
        .replace(/(iteratee|predicate|callback): *(?:Array|List|Dictionary|NumericDictionary)Iterator<(.+?), *(.+)>$/g, "$1: (value: $2) => $3")
        .replace(/(iteratee|predicate|callback): *StringIterator<(.+)>$/g, "$1: (value: string) => $2")
        .replace(/(iteratee|predicate|callback): *ObjectIterator<(.+?), *(.+?)>$/g, "$1: (value: $2[keyof $2]) => $3")
        .replace(/(iteratee|predicate|callback): *Memo(Void)?(?:Array|List|Object|Dictionary)Iterator<([^,>]+),([^,>]+)(?:,[^,>]+?(<T>)?)?>/g, "$1: Memo$2IteratorCapped<$3,$4>")
        .replace(/(iteratees|predicates|callbacks): *Many<(?:Array|List|Dictionary|NumericDictionary|String)Iteratee<(.+?)>>/g, "$1: Many<ValueIteratee<$2>>")
        .replace(/(iteratees|predicates|callbacks): *Many<ObjectIteratee<(.+?)>>/g, "$1: Many<ValueIteratee<$2[keyof $2]>>")
        .replace(/(iteratees|predicates|callbacks): *Many<(?:Array|List|Dictionary|NumericDictionary)Iterator<(.+?), *(.+?)>>/g, "$1: Many<(value: $2) => $3>")
        .replace(/(iteratees|predicates|callbacks): *Many<ObjectIterator<(.+?), *(.+?)>>/g, "$1: Many<(value: $2[keyof $2]) => $3>");
}

function curryOverload(overload: Overload, functionName: string, overloadId: number): Interface[] {
    const baseName = getInterfaceBaseName(functionName);
    if (overload.params.length <= 1) {
        // Functions with 0 or 1 arguments are not curried. Just use a basic function type.
        return [{
            name: baseName,
            overloads: [overload],
            typeParams: [],
            constants: [],
        }];
    }

    // Create a separate interface for each possible combination of parameters that could be passed.
    // i = binary representation of which parameters were passed to result in this interface (reversed), e.g.
    //   1 = 0001 = 1st parameter was passed; 2nd-4th remain
    //   6 = 1010 = 2nd and 4th parameters were passed; 1st and 3rd remain
    const interfaces: Interface[] = [];
    const interfaceCount = (1 << overload.params.length) - 1;
    for (let i = 0; i < interfaceCount; ++i) {
        const interfaceDef = curryParams(baseName, overloadId, overload, i);
        interfaces.push(interfaceDef);
    }
    // The T[keyof T] constraint doesn't work so well if it's the only constraint. Convert to a plain old T constraint so it can be merged with
    // other ValueIteratee<T> overloads
    for (const interfaceDef of interfaces) {
        for (const overload of interfaceDef.overloads) {
            const objectTypeParam = overload.typeParams.find(tp => tp.name === "T" && (tp.extends === "object" || !tp.extends));
            if (objectTypeParam && overload.params.some(p => p.includes("T[keyof T]")) && !overload.params.some(p => /T(?!]|\[keyof T])/.test(p))) {
                delete objectTypeParam.extends;
                overload.params = overload.params.map(p => p.replace(/\bArray<T\[keyof T]>/g, " T[]").replace(/\bT\[keyof T]/g, "T"));
                const fixInterfaceName = overload.returnType.split("<")[0];
                const fixInterface = interfaces.find(i => i.name === fixInterfaceName);
                if (fixInterface) {
                    const fixTypeParam = fixInterface.typeParams.find(tp => tp.name === objectTypeParam.name && (tp.extends === "object" || !tp.extends));
                    if (fixTypeParam) {
                        delete fixTypeParam.extends;
                        for (const fixOverload of fixInterface.overloads) {
                            // This overload has T referring to a whole object. But now T refers to a single element, so fix it.
                            // If there's only 1 usage, replace it with 'object'. If there are multiple, create a new type constraint.
                            const typeParamSearch = new RegExp(`\\b${fixTypeParam.name}\\b(?:(?!(?:\\[keyof ${fixTypeParam.name})?\\])|$)`);
                            const matches = fixOverload.params.concat(fixOverload.returnType).filter(value => typeParamSearch.test(value));
                            let replacement = "object";
                            if (matches.length >= 2) {
                                let i = 1;
                                const newTypeParam: TypeParam = { name: "T" + i, extends: replacement };
                                while (fixInterface.typeParams.some(t => t.name === newTypeParam.name) || fixOverload.typeParams.some(t => t.name === newTypeParam.name))
                                    newTypeParam.name = "T" + (++i);
                                fixOverload.typeParams.push(newTypeParam);
                                replacement = newTypeParam.name;
                            }
                            fixOverload.params = fixOverload.params
                                .map(p => p.replace(new RegExp(typeParamSearch, "g"), replacement)
                                           .replace(new RegExp(`\\bArray<${fixTypeParam.name}\\[keyof ${fixTypeParam.name}]>`, "g"), fixTypeParam.name + "[]")
                                           .replace(new RegExp(`\\b${fixTypeParam.name}\\[keyof ${fixTypeParam.name}]`, "g"), fixTypeParam.name));
                            if (!new RegExp(`\\b${baseName}[0-9]+x[0-9]+\\b`).test(fixOverload.returnType)) {
                                fixOverload.returnType = fixOverload.returnType
                                    .replace(new RegExp(typeParamSearch, "g"), replacement)
                                    .replace(new RegExp(`\\bArray<${fixTypeParam.name}\\[keyof ${fixTypeParam.name}]>`, "g"), fixTypeParam.name + "[]")
                                    .replace(new RegExp(`\\b${fixTypeParam.name}\\[keyof ${fixTypeParam.name}]`, "g"), fixTypeParam.name);
                            }
                        }
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
    baseName: string,
    sourceOverloadId: number,
    sourceOverload: Overload,
    interfaceIndex: number,
): Interface {
    const params = getInterfaceParams(sourceOverload, interfaceIndex);
    const interfaceTypeParams = getInterfaceTypeParams(sourceOverload, interfaceIndex);

    const prevParams = _.without(sourceOverload.params, ...params);
    const prevTypeParams = getUsedTypeParams(prevParams, sourceOverload.typeParams);
    const typeParams = _.without(sourceOverload.typeParams, ...prevTypeParams);
    // 1st overload takes no parameters and just returns the same interface (effectively a no-op)
    // HACK: omit the parameterless overload because it's not very useful, and it causes the build to run out of memory
    // This assumes params.length > 0, which is true because curryParams is only called when params.length >= 2.
    /*const overloads: Overload[] = [{
        typeParams: [],
        params: [],
        returnType: getInterfaceName(baseName, sourceOverloadId, interfaceIndex, interfaceTypeParams),
        jsdoc: sourceOverload.jsdoc,
    }];*/
    const overloads: Overload[] = [];
    const lastOverload = (1 << params.length) - 1;
    for (let i = 1; i <= lastOverload; ++i) {
        // xxxx i = number of parameters used by this overload
        // const totalCombinations = nCk(params.length, i);
        // i = binary representation of which parameters are used for this overload (reversed), e.g.
        //   1 = 0001 -> 1000 = 1st parameter
        //   6 = 1010 -> 0101 = 2nd and 4th parameters
        const currentParams = params.map((p, j) => (i & (1 << j)) ? p : `${getParamName(p)}: __`);
        while (currentParams.length > 0 && _.last(currentParams)!.endsWith("__"))
            currentParams.pop(); // There's no point in passing a placeholder as the last parameter, so don't allow it.

        const usedTypeParams = i < lastOverload ? getUsedTypeParams(currentParams, typeParams) : typeParams;
        const combinedIndex = combineIndexes(interfaceIndex, i);
        const passTypeParams = getInterfaceTypeParams(sourceOverload, combinedIndex);
        const currentReturnType = i < lastOverload ? getInterfaceName(baseName, sourceOverloadId, combinedIndex, passTypeParams) : sourceOverload.returnType;

        overloads.push({
            typeParams: _.cloneDeep(usedTypeParams),
            params: currentParams,
            returnType: currentReturnType,
            jsdoc: interfaceIndex === 0 ? sourceOverload.jsdoc : "",
        });
    }
    const interfaceDef: Interface = {
        name: getInterfaceName(baseName, sourceOverloadId, interfaceIndex, []),
        typeParams: _.cloneDeep(interfaceTypeParams),
        overloads,
        constants: [],
    };
    // Remove the `extends` constraint from interface type parameters, because sometimes they extend things that aren't passed to the interface.
    for (const typeParam of interfaceDef.typeParams) {
        // 1. retain `extends keyof X` constraints so that TObject[TKey] still works.
        // 2. retain `any[]` constraints so that variadic generics work.
        if (!_.startsWith(typeParam.extends, "keyof ") && typeParam.extends !== "any[]")
            delete typeParam.extends;
    }
    return interfaceDef;
}

function getInterfaceBaseName(functionName: string) {
    return "Lodash" + _.upperFirst(functionName);
}

function getInterfaceParams(overload: Overload, interfaceIndex: number) {
    return overload.params.filter((p, j) => !(interfaceIndex & (1 << j)));
}

function getUsedTypeParams(params: string[], typeParams: TypeParam[]) {
    const usedTypeParams = typeParams.filter(tp => params.some(p => new RegExp(`\\b${tp.name}\\b`).test(p)));
    usedTypeParams.unshift(...typeParams.filter(tp =>
        !usedTypeParams.includes(tp) && usedTypeParams.some(tp2 => !!tp2.extends && new RegExp(`\\b${tp.name}\\b`).test(tp2.extends))));
    return usedTypeParams;
}

function getInterfaceTypeParams(overload: Overload, interfaceIndex: number) {
    const currentParams = getInterfaceParams(overload, interfaceIndex);
    const passedParams = _.without(overload.params, ...currentParams);
    const passedTypeParams = getUsedTypeParams(passedParams, overload.typeParams);
    const interfaceTypeParams = passedTypeParams.filter(tp => currentParams.concat(overload.returnType).some(p => new RegExp(`\\b${tp.name}\\b`).test(p)));
    interfaceTypeParams.unshift(...overload.typeParams.filter(tp =>
        !interfaceTypeParams.includes(tp) && interfaceTypeParams.some(tp2 => !!tp2.extends && new RegExp(`^keyof ${tp.name}\\b`).test(tp2.extends))));
    return interfaceTypeParams;
}

function mergeInterfaces(interfaces: Interface[]): void {
    const mainInterface = interfaces[0];
    if (!mainInterface)
        return;
    mainInterface.overloads = _.uniqWith(_.flatMap(interfaces, i => i.overloads), _.isEqual);
}

function mergeSimilarOverloads(overloads: Overload[]): Overload[] {
    const newOverloads = _.cloneDeep(overloads);
    for (const overload of newOverloads) {
        // We can merge if all param types are the same except one, and the return types are the same.
        // Also, we can't merge a placeholder param with a non-placeholder.
        const others = newOverloads.filter(o2 => o2 !== overload
            && _.isEqual(overload.typeParams, o2.typeParams)
            && overload.params.length === o2.params.length
            && overload.params.length >= 1
            && overload.params.every((p, i) => isPlaceholder(p) === isPlaceholder(o2.params[i]))
            && overload.params.filter((p, i) => getParamType(p) !== getParamType(o2.params[i])).length <= 1
            && overload.returnType === o2.returnType);
        if (_.isEmpty(others))
            continue;

        const differingParamIndexes = _(others)
            .map(o2 => overload.params.findIndex((p, i) => getParamType(p) !== getParamType(o2.params[i])))
            .filter(i => i !== -1)
            .uniq()
            .value();
        if (differingParamIndexes.length > 1)
            continue; // Only one param is different, but it's a different param for some overloads, so we can't merge
        const similarOverloads = [overload].concat(others);
        for (let i = 0; i < overload.params.length; ++i) {
            const paramNames = _.uniq(similarOverloads.map(o => getParamName(o.params[i])));
            const newParamName = (paramNames.length > 1) ? `${paramNames[0]}Or${paramNames.slice(1).map(_.upperFirst).join("Or")}` : paramNames[0];

            const newParamType = _(similarOverloads)
                .map(o => o.params[i])
                .flatMap(p => getParamType(p).split("|"))
                .map(_.trim)
                .uniq()
                .sortBy(type => type === "undefined" ? 2 : (type === "null" ? 1 : 0))
                .join(" | ");
            overload.params[i] = `${newParamName}: ${newParamType}`;
        }
        _.pull(newOverloads, ...others);
    }
    return newOverloads;
}

function combineIndexes(i1: number, i2: number): number {
    let result = i1;
    let resultMask = 1;
    for (let i2mask = 1; i2mask <= i2; i2mask <<= 1) {
        while (result & resultMask)
            resultMask <<= 1;
        if (i2 & i2mask)
            result += resultMask;
        resultMask <<= 1;
    }
    return result;
}

function getInterfaceName(baseName: string, overloadId: number, index: number, typeParams: TypeParam[]): string {
    let interfaceName = baseName;
    if (index > 0)
        interfaceName += `${overloadId}x${index}${typeParamsToString(typeParams, false)}`;
    return interfaceName;
}

function interfaceToString(interfaceDef: Interface): string {
    if (_.isEmpty(interfaceDef.overloads)) {
        // No point in creating an empty interface
        return "";
    } else if (interfaceDef.overloads.length === 1 && _.isEmpty(interfaceDef.constants)) {
        // Don't create an interface for a single type. Instead use a basic type def.
        const overload = interfaceDef.overloads[0];
        // HACK: omit jsdoc comments because they cause the build to run out of memory
        // const jsdoc = overload.jsdoc;
        const jsdoc = "";
        overload.jsdoc = "";
        let overloadString = overloadToString(overload, true);
        overloadString = jsdoc ? lineBreak + tab(jsdoc + lineBreak + overloadString, 1) : " " + overloadString;
        return `type ${interfaceDef.name}${typeParamsToString(interfaceDef.typeParams)} =${overloadString}`;
    } else {
        const overloadStrings = interfaceDef.overloads.map(o => lineBreak + tab(overloadToString(o), 1)).join("")
            + interfaceDef.constants.map(c => `${lineBreak}${tab(c, 1)};`).join("");
        return `interface ${interfaceDef.name}${typeParamsToString(interfaceDef.typeParams)} {${overloadStrings}${lineBreak}}`;
    }
}

function overloadToString(overload: Overload, arrowSyntax = false): string {
    const joinedParams = overload.params.join(", ");
    // HACK: omit jsdoc comments because they cause the build to run out of memory
    // let jsdoc = overload.jsdoc;
    let jsdoc = "";
    if (jsdoc)
        jsdoc += lineBreak;
    if (overload.tslintDisable)
        jsdoc += overload.tslintDisable + lineBreak;
    return `${jsdoc}${typeParamsToString(overload.typeParams)}(${joinedParams})${arrowSyntax ? " =>" : ":"} ${overload.returnType};`;
}

function typeParamsToString(typeParams: TypeParam[], includeConstraints = true): string {
    return typeParams.length > 0 ? `<${typeParams.map(tp =>
        tp.name
            + (includeConstraints && tp.extends ? " extends " + tp.extends : "")
            + (includeConstraints && tp.equals ? " = " + tp.equals : "")
        ).join(", ")}>` : "";
}

function getPreviousLine(s: string, index: number): string {
    const eol = s.lastIndexOf(lineBreak, index);
    if (eol === -1)
        return "";
    const bol = s.lastIndexOf(lineBreak, eol - 1);
    if (bol === -1)
        return "";
    return s.substring(bol + 1, eol);
}

function indexOfAny(source: string, values: string[], position?: number): number {
    const indexes: number[] = [];
    for (const value of values) {
        const index = source.indexOf(value, position);
        if (index !== -1)
            indexes.push(index);
    }
    return indexes.length > 0 ? _.min(indexes)! : -1;
}

main();
