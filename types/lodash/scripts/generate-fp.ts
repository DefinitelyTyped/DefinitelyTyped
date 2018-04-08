// Script for converting the lodash types into unctional programming (FP) format.
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
    tslintDisable?: string;
}
interface TypeParam {
    name: string;
    extends?: string;
    equals?: string;
}

let lineBreak = "\n";
async function main() {
    const commonTypes: string[] = [];
    const tsconfigPath = path.join("..", "tsconfig.json");
    const tsconfigFile = await readFile(tsconfigPath);
    lineBreak = _.find(["\r\n", "\n", "\r"], x => tsconfigFile.includes(x)) || "\n";

    // Read each function definition and fp-ify it
    const subfolders = ["common"];
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
        }));
    }

    let functionNames: string[];
    try {
        functionNames = _.flatten(await Promise.all(promises));
    } catch (err) {
        console.error("Failed to parse all functions: ", err);
        return;
    }
    functionNames = _.sortedUniq(_.sortBy(functionNames, _.toLower));
    const fpFile = [
        "// AUTO-GENERATED: do not modify this file directly.",
        "// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:",
        "// npm run fp",
        "",
        ...functionNames.map(f => `import ${f} = require("./fp/${f}");`),
        "",
        "export = _;",
        "",
        "declare const _: _.LoDashFp;",
        "declare namespace _ {",
        "    interface LoDashFp {",
        ...functionNames.map(f => `        ${f}: typeof ${f};`),
        "    }",
        "}",
        "",
        "// Backward compatibility with --target es5",
        "declare global {",
        "    // tslint:disable-next-line:no-empty-interface",
        "    interface Set<T> { }",
        "    // tslint:disable-next-line:no-empty-interface",
        "    interface Map<K, V> { }",
        "    // tslint:disable-next-line:no-empty-interface",
        "    interface WeakSet<T> { }",
        "    // tslint:disable-next-line:no-empty-interface",
        "    interface WeakMap<K extends object, V> { }",
        "}",
        "",
    ].join(lineBreak);
    fs.writeFile(path.join("..", "fp.d.ts"), fpFile, (err) => {
        if (err)
            console.error("Failed to write fp.d.ts: ", err);
    });

    // Make sure the generated files are listed in tsconfig.json, so they are included in the lint checks
    const tsconfig = tsconfigFile.split(lineBreak).filter(row => !row.includes("fp/") || row.includes("fp/convert.d.ts"));
    const newRows = functionNames.map(f => `        "fp/${f}.d.ts",`);
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
        const definitions = await parseFile(filePath, commonTypes);
        for (const definition of definitions) {
            if (definition.overloads.every(o => o.params.length <= 1 && o.returnType === "typeof _")) {
                // Our convert technique doesn't work well on "typeof _" functions (or at least runInContext)
                // Plus, if there are 0-1 parameters, there's nothing to curry anyways.
                unconvertedBuilder[definition.name] = (...args: number[][]) => {
                    return () => curryOverloads(definition.overloads, definition.name, args[0] || [], -1, false);
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
                    } else {
                        // For some reason, convert() doesn't seems to tell us which functions have unchanged argument order.
                        // So we have to hard-code it.
                        const unchangedOrders = ["add", "assign", "assignIn", "bind", "bindKey", "concat", "difference", "divide", "eq",
                            "gt", "gte", "isEqual", "lt", "lte", "matchesProperty", "merge", "multiply", "overArgs", "partial", "partialRight",
                            "propertyOf", "random", "range", "rangeRight", "subtract", "zip", "zipObject", "zipObjectDeep"];
                        if (unchangedOrders.includes(definition.name))
                            args = _.sortBy(args as number[][], (a: number[]) => a[0]);
                    }

                    return () => curryOverloads(definition.overloads, definition.name, _.flatten(args), spreadIndex, isFixed);
                };
            }
        }
    }

    // Use convert() to tell us how functions will be rearged and aliased
    const builderFp = convert(builder, { rearg: true, fixed: true, immutable: false, curry: false, cap: false });
    _.defaults(builderFp, unconvertedBuilder);

    const functionNames = Object.keys(builderFp).filter(key => key !== "convert" && typeof builderFp[key] === "function");
    for (const functionName of functionNames) {
        // Assuming the maximum arity is 4. Pass one more arg than the max arity so we can detect if arguments weren't fixed.
        const outputFn: (...args: any[]) => Interface[] = builderFp[functionName]([0], [1], [2], [3], [4]);
        const commonTypeSearch = new RegExp(`\\b(${commonTypes.join("|")})\\b`, "g");
        commonTypeSearch.lastIndex;
        let importCommon = false;
        let output = outputFn([0], [1], [2], [3], [4])
            .map(interfaceToString)
            .join(lineBreak)
            .replace(commonTypeSearch, match => {
                importCommon = true;
                return `_.${match}`;
            });
        if (!importCommon && output.includes("typeof _"))
            importCommon = true;
        const interfaceNameMatch = output.match(/(?:interface|type) ([A-Za-z0-9]+)/);
        const interfaceName = (interfaceNameMatch ? interfaceNameMatch[1] : undefined) || _.upperFirst(functionName);
        output = [
            "// AUTO-GENERATED: do not modify this file directly.",
            "// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:",
            "// npm run fp",
            importCommon ? `${lineBreak}import _ = require("../index");${lineBreak}` : '',
            output,
            "",
            `declare const ${functionName}: ${interfaceName};`,
            `export = ${functionName};`,
            "",
        ].join(lineBreak);
        const targetFile = `../fp/${functionName}.d.ts`;
        fs.writeFile(targetFile, output, (err) => {
            if (err)
                console.error(`failed to write file: ${targetFile}`, err);
        });
    }
    return functionNames;
}

async function parseFile(filePath: string, commonTypes: string[]): Promise<Definition[]> {
    const definitionString = await readFile(filePath);
    const newCommonTypeRegExp = /    (?:type|interface) ([A-Za-z0-9]+)/g;
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
        const definitions = parseDefinitions(definitionString, startIndex + lodashStaticMatch[0].length, endIndex, filePath, commonTypes);
        definitons.push(...definitions);
        lodashStaticMatch = lodashStaticRegExp.exec(definitionString);
    }
    return definitons;
}

function parseDefinitions(definitionString: string, startIndex: number, endIndex: number, filePath: string, commonTypes: string[], name?: string): Definition[] {
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
            currentDefinition = { name, overloads: [], jsdoc: "" };
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
                for (const overload of definition.overloads)
                    overload.jsdoc = currentDefinition.jsdoc;
                currentDefinition.overloads.push(...definition.overloads);
            }
        }
    }
    if (currentDefinition && !_.isEmpty(currentDefinition.overloads))
        definitons.push(currentDefinition);
    return definitons;
}

function curryOverloads(overloads: Overload[], functionName: string, paramOrder: number[], spreadIndex: number, isFixed: boolean): Interface[] {
    overloads = _.cloneDeep(overloads);

    // Remove unused type parameters
    for (const overload of overloads) {
        for (let i = 0; i < overload.typeParams.length; ++i) {
            const search = new RegExp(`\\b${overload.typeParams[i].name}\\b`);
            if (overload.params.every(p => !search.test(p)) && !search.test(overload.returnType)) {
                overload.typeParams.splice(i, 1);
                --i;
            }
        }
        if (overloads.some(o => o !== overload && _.isEqual(o, overload)))
            _.pull(overloads, overload);
    }

    if (!isFixed) {
        // Non-fixed arity functions cannot be curried.
        for (const overload of overloads)
            overload.params = overload.params.map(p => p.replace(/\?:/g, ":")); // No optional parameters
        return [{
            name: _.upperFirst(functionName),
            typeParams: [],
            overloads,
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
        // 3. The rest parameter is not the last parameter, e.g. assignWith(object, ...sources[], customizer)
        if (spreadIndex === arity - 1) {
            // cases 1-2
            for (let i = 0; i < overloads.length; ++i) {
                const overload = overloads[i];
                if (overload.params.length === arity && overload.params[spreadIndex] && overload.params[spreadIndex].startsWith("...")) {
                    overload.params[spreadIndex] = overload.params[spreadIndex].replace("...", "");
                } else if (overload.params.length === arity + 1 && overload.params[spreadIndex + 1] && overload.params[spreadIndex + 1].startsWith("...")) {
                    overload.params.splice(spreadIndex + 1, 1);
                    const parts = overload.params[spreadIndex].split(":").map(_.trim);
                    parts[1] = `ReadonlyArray<${parts[1]}>`;
                    overload.params[spreadIndex] = `${parts[0]}: ${parts[1]}`;
                } else {
                    _.pull(overloads, overload);
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
    return interfaces;
}

function getParamName(param: string) {
    return param.split(":", 1)[0];
}

function getParamType(param: string) {
    const index = param.indexOf(":");
    return index !== -1 ? param.substring(index + 1).trim() : "any";
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
    let baseName = _.upperFirst(functionName);
    if (baseName === "Pick") // A type called "Pick" already exists, so rename to avoid conflicts
        baseName = "Lodash" + baseName;
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
            typeParams: _.cloneDeep(passTypeParams),
            overloads: curryParams(
                overload.params.slice(i),
                _.without(overload.typeParams, ...passTypeParams),
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
            typeParams: _.cloneDeep(usedTypeParams),
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
    mainInterface.overloads = _.uniqWith(_.flatMap(interfaces, i => i.overloads), _.isEqual);
}

function mergeSimilarOverloads(overloads: Overload[]): Overload[] {
    const newOverloads = _.cloneDeep(overloads);
    for (const overload of newOverloads) {
        // We can merge if all param types are the same except one, and the return types are the same.
        const others = newOverloads.filter(o2 => o2 !== overload
            && _.isEqual(overload.typeParams, o2.typeParams)
            && overload.params.length === o2.params.length
            && overload.params.length >= 1
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
        for (let i = 0; i < overload.params.length; ++i) {
            const similarOverloads = [overload].concat(others);
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
            jsdoc += lineBreak;
        interfaceDef.overloads[0].jsdoc = "";
        return `type ${interfaceDef.name}${typeParamsToString(interfaceDef.typeParams)} =${lineBreak}${tab(jsdoc + overloadToString(interfaceDef.overloads[0], true), 1)}`;
    } else {
        const overloadStrings = interfaceDef.overloads.map(o => lineBreak + tab(overloadToString(o), 1)).join("");
        return `interface ${interfaceDef.name}${typeParamsToString(interfaceDef.typeParams)} {${overloadStrings}${lineBreak}}`;
    }
}

function overloadToString(overload: Overload, arrowSyntax = false): string {
    const joinedParams = overload.params.join(", ");
    let jsdoc = overload.jsdoc;
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

function getLineNumber(fileContents: string, index: number) {
    return fileContents.substring(0, index).split(lineBreak).length + 1;
}

function tab(s: string, count: number) {
    const prepend: string = " ".repeat(count * 4);
    return prepend + s.replace(/(?:\r\n|\n|\r)(.)/g, `${lineBreak}${prepend}$1`);
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
