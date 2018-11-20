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
import path from "path";
import { getLineBreak, getLineNumber } from "./utils";

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

// Get the correct line break for the current OS (git for windows will generally convert \n to \r\n during checkout)
let lineBreak = "\n";
async function main() {
    lineBreak = await getLineBreak();
    const commonTypes: string[] = [];
    const tsconfigPath = path.join("..", "tsconfig.json");

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

    let functions: string;
    try {
        functions = _.flatten(await Promise.all(promises)).join(lineBreak);
    } catch (err) {
        console.error("Failed to parse all functions: ", err);
        return;
    }
    _.pull(commonTypes, "LoDashExplicitWrapper");
    const commonTypeSearch = new RegExp(`\\b(${commonTypes.join("|")})\\b`, "g");
    functions = functions.replace(commonTypeSearch, "_.$1");
    const syncFunctions = functions.replace(/\bLoDashExplicitWrapper\b/g, "LoDashExplicitSyncWrapper");
    const asyncFunctions = functions.replace(/\bLoDashExplicitWrapper\b/g, "LoDashExplicitAsyncWrapper");

    const lodashFile = [
        "// AUTO-GENERATED: do not modify this file directly.",
        "// If you need to make changes, modify types/lodash/scripts/generate-lowdb.ts (if necessary), then open a terminal in types/lodash/scripts, and do:",
        "// npm install && npm run generate",
        "",
        'import _ = require("lodash");',
        'declare module "./index" {',
        "    interface LoDashExplicitSyncWrapper<TValue> {",
        syncFunctions,
        "    }",
        "",
        "    interface LoDashExplicitAsyncWrapper<TValue> {",
        asyncFunctions,
        "    }",
        "}",
        "",
    ].join(lineBreak);
    const lodashFilePath = path.resolve(__dirname, "..", "..", "lowdb", "_lodash.d.ts");
    fs.writeFile(lodashFilePath, lodashFile, (err) => {
        if (err)
            console.error(`Failed to write ${lodashFilePath}: `, err);
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
    const functions: string[] = [];
    for (const filePath of filePaths)
        functions.push(...await parseFile(filePath, commonTypes));
    return functions;
}

async function parseFile(filePath: string, commonTypes: string[]): Promise<string[]> {
    const definitionString = await readFile(filePath);
    const newCommonTypeRegExp = /    (?:type|interface) ([A-Za-z0-9_]+)/g;
    let newCommonType = newCommonTypeRegExp.exec(definitionString);
    while (newCommonType) {
        if (!commonTypes.includes(newCommonType[1]))
            commonTypes.push(newCommonType[1]);
        newCommonType = newCommonTypeRegExp.exec(definitionString);
    }

    const functions: string[] = [];
    const lodashWrapperRegExp = /( *)interface +LoDashExplicitWrapper<\w+> *(?:extends .+)? *{/g;
    let lodashWrapperMatch = lodashWrapperRegExp.exec(definitionString);
    while (lodashWrapperMatch) {
        const startIndex = definitionString.indexOf(lineBreak, lodashWrapperMatch.index) + lineBreak.length;
        const endIndex = definitionString.indexOf(`${lineBreak}${lodashWrapperMatch[1]}}`, startIndex);
        if (endIndex === -1) {
            const lineNumber = getLineNumber(definitionString, startIndex);
            console.warn(`Failed to find end of interface 'LoDashExplicitWrapper' (starting at ${filePath} line ${lineNumber}).`);
            break;
        }
        let functionString = definitionString.substring(startIndex, endIndex);
        // Remove comments since they're generally useless (e.g. @see XXXX)
        functionString = functionString.replace(/ *\/\*\*[\s\S]+?\*\/(?:\r\n|\n|\r)/g, "");
        functionString = functionString.replace(/(?:(\r\n){2,}|(\n){2,}|(\r){2,})/g, "$1$2$3");
        functions.push(functionString);
        lodashWrapperMatch = lodashWrapperRegExp.exec(definitionString);
    }
    return functions;
}

main();
