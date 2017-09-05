// Usage: ts-node generate-modules.ts

/// <reference types="node" />

import * as fs from "fs";
import { get, STATUS_CODES } from "http";
import * as path from "path";

main().catch(console.error);

async function main(): Promise<void> {
    const all = allModuleNames();
    const allSet = new Set(allModuleNames());
    const notOnNpm = new Set(modulesNotOnNpm());
    for (const n of notOnNpm) {
        if (!allSet.has(n)) {
            throw new Error(n);
        }
    }

    const lodashEsDir = path.join("..", "..", "lodash-es");

    // Generate lodash/tsconfig.json
    fs.writeFileSync(path.join("..", "tsconfig.json"), lodashTsconfig(all));

    // Generate lodash-es index and tsconfig
    fs.writeFileSync(path.join(lodashEsDir, "index.d.ts"), lodashEsIndex(all));
    //`export {\n    ${all.join(",\n    ")}\n} from "lodash";\n`);
    fs.writeFileSync(path.join(lodashEsDir, "tsconfig.json"), lodashEsTsconfig(all));

    for (const module of all) {
        console.log(module);

        // Generate local module
        fs.writeFileSync(path.join("..", `${module}.d.ts`), `import { ${module} } from "./index";\nexport = ${module};\n`);

        // Generate lodash-es module
        fs.writeFileSync(path.join(lodashEsDir, `${module}.d.ts`), `import { ${module} } from "lodash";\nexport default ${module};\n`);

        // Generate `lodash.foo` module
        if (!notOnNpm.has(module)) {
            const dir = path.join("..", "..", `lodash.${module.toLowerCase()}`);
            ensureDir(dir);
            fs.writeFileSync(path.join(dir, "index.d.ts"), await globalDefinitionText(module));
            fs.writeFileSync(path.join(dir, "tsconfig.json"), lodashDotFooTsconfig());
            fs.writeFileSync(path.join(dir, "tslint.json"), tslint());
        }
    }
}

function ensureDir(dir: string): void {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

async function globalDefinitionText(moduleName: string): Promise<string> {
    const fullName = "lodash." + moduleName;
    const url = `http://registry.npmjs.org/${fullName.toLowerCase()}`;
    const npmInfo = JSON.parse(await loadString(url));
    const fullVersion = npmInfo["dist-tags"].latest;
    const majorMinor = fullVersion.split(".").slice(0, 2).join(".");

    return `
// Type definitions for ${fullName} ${majorMinor}
// Project: http://lodash.com/
// Definitions by: Brian Zengel <https://github.com/bczengel>, Ilya Mochalov <https://github.com/chrootsu>, Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// Generated from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/lodash/scripts/generate-modules.ts

import { ${moduleName} } from "lodash";
export = ${moduleName};
`.trim() + "\n";
}

function compilerOptions(): object {
    return {
        "module": "commonjs",
        "lib": [
            "es6"
        ],
        "noImplicitAny": true,
        "noImplicitThis": true,
        "strictNullChecks": true,
        "baseUrl": "../",
        "typeRoots": [
            "../"
        ],
        "types": [],
        "noEmit": true,
        "forceConsistentCasingInFileNames": true
    };
};

function lodashEsIndex(moduleNames: ReadonlyArray<string>): string {
    return `// Type definitions for lodash-es 4.14
// Project: http://lodash.com/
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// Generated from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/lodash/scripts/generate-modules.ts

export {
    ${moduleNames.join(",\n    ")}
} from "lodash";
`;
}

function lodashTsconfig(moduleNames: ReadonlyArray<string>): string {
    return JSON.stringify({
        compilerOptions: compilerOptions(),
        files: [
            "index.d.ts",
            "lodash-tests.ts",
            ...moduleNames.map(m => `${m}.d.ts`),
        ]
    }, undefined, 4);
}

function lodashEsTsconfig(moduleNames: ReadonlyArray<string>): string {
    return JSON.stringify({
        compilerOptions: compilerOptions(),
        files: [
            "index.d.ts",
            "lodash-es-tests.ts",
            ...moduleNames.map(m => `${m}.d.ts`),
        ]
    }, undefined, 4);
}

function lodashDotFooTsconfig(): string {
    return JSON.stringify({
        compilerOptions: compilerOptions(),
        files: ["index.d.ts"],
    }, undefined, 4);
}

function tslint(): string {
    return `{ "extends": "dtslint/dt.json" }\n`;
}

function loadString(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            if (res.statusCode !== 200) {
                return reject(new Error(`HTTP Error ${res.statusCode}: ${STATUS_CODES[res.statusCode || 500]} for ${url}`))
            }
            let rawData = ""
            res.on("data", chunk => rawData += chunk)
            res.on("end", () => resolve(rawData))
        }).on("error", e => reject(e))
    })
}

function modulesNotOnNpm(): string[] {
    return [
        "chain",
        "each",
        "eachRight",
        "extend",
        "extendWith",
        "noConflict",
        "runInContext",
        "tap",
        "thru",
    ];
}

// Note: "fb" is not a usual module, so it is made by hand.

function allModuleNames(): string[] {
    return [
        "add",
        "after",
        "ary",
        "assign",
        "assignIn",
        "assignInWith",
        "assignWith",
        "at",
        "attempt",
        "before",
        "bind",
        "bindAll",
        "bindKey",
        "camelCase",
        "capitalize",
        "castArray",
        "ceil",
        "chain",
        "chunk",
        "clamp",
        "clone",
        "cloneDeep",
        "cloneDeepWith",
        "cloneWith",
        "compact",
        "concat",
        "constant",
        "countBy",
        "create",
        "curry",
        "curryRight",
        "debounce",
        "deburr",
        "defaults",
        "defaultsDeep",
        "defer",
        "delay",
        "difference",
        "differenceBy",
        "differenceWith",
        "drop",
        "dropRight",
        "dropRightWhile",
        "dropWhile",
        "each",
        "eachRight",
        "endsWith",
        "eq",
        "escape",
        "escapeRegExp",
        "every",
        "extend",
        "extendWith",
        "fill",
        "filter",
        "find",
        "findIndex",
        "findKey",
        "findLast",
        "findLastIndex",
        "findLastKey",
        "first",
        "flatMap",
        "flatten",
        "flattenDeep",
        "flattenDepth",
        "flip",
        "floor",
        "flow",
        "flowRight",
        "forEach",
        "forEachRight",
        "forIn",
        "forInRight",
        "forOwn",
        "forOwnRight",
        "fromPairs",
        "functions",
        "functionsIn",
        "get",
        "groupBy",
        "gt",
        "gte",
        "has",
        "hasIn",
        "head",
        "identity",
        "inRange",
        "includes",
        "indexOf",
        "initial",
        "intersection",
        "intersectionBy",
        "intersectionWith",
        "invert",
        "invertBy",
        "invoke",
        "invokeMap",
        "isArguments",
        "isArray",
        "isArrayBuffer",
        "isArrayLike",
        "isArrayLikeObject",
        "isBoolean",
        "isBuffer",
        "isDate",
        "isElement",
        "isEmpty",
        "isEqual",
        "isEqualWith",
        "isError",
        "isFinite",
        "isFunction",
        "isInteger",
        "isLength",
        "isMap",
        "isMatch",
        "isMatchWith",
        "isNaN",
        "isNative",
        "isNil",
        "isNull",
        "isNumber",
        "isObject",
        "isObjectLike",
        "isPlainObject",
        "isRegExp",
        "isSafeInteger",
        "isSet",
        "isString",
        "isSymbol",
        "isTypedArray",
        "isUndefined",
        "isWeakMap",
        "isWeakSet",
        "iteratee",
        "join",
        "kebabCase",
        "keyBy",
        "keys",
        "keysIn",
        "last",
        "lastIndexOf",
        "lowerCase",
        "lowerFirst",
        "lt",
        "lte",
        "map",
        "mapKeys",
        "mapValues",
        "matches",
        "matchesProperty",
        "max",
        "maxBy",
        "mean",
        "meanBy",
        "memoize",
        "merge",
        "mergeWith",
        "method",
        "methodOf",
        "min",
        "minBy",
        "mixin",
        "negate",
        "noConflict",
        "noop",
        "now",
        "nthArg",
        "omit",
        "omitBy",
        "once",
        "orderBy",
        "over",
        "overArgs",
        "overEvery",
        "overSome",
        "pad",
        "padEnd",
        "padStart",
        "parseInt",
        "partial",
        "partialRight",
        "partition",
        "pick",
        "pickBy",
        "property",
        "propertyOf",
        "pull",
        "pullAll",
        "pullAllBy",
        "pullAt",
        "random",
        "range",
        "rangeRight",
        "rearg",
        "reduce",
        "reduceRight",
        "reject",
        "remove",
        "repeat",
        "replace",
        "rest",
        "result",
        "reverse",
        "round",
        "runInContext",
        "sample",
        "sampleSize",
        "set",
        "setWith",
        "shuffle",
        "size",
        "slice",
        "snakeCase",
        "some",
        "sortBy",
        "sortedIndex",
        "sortedIndexBy",
        "sortedIndexOf",
        "sortedLastIndex",
        "sortedLastIndexBy",
        "sortedLastIndexOf",
        "sortedUniq",
        "sortedUniqBy",
        "split",
        "spread",
        "startCase",
        "startsWith",
        "subtract",
        "sum",
        "sumBy",
        "tail",
        "take",
        "takeRight",
        "takeRightWhile",
        "takeWhile",
        "tap",
        "template",
        "throttle",
        "thru",
        "times",
        "toArray",
        "toInteger",
        "toLength",
        "toLower",
        "toNumber",
        "toPairs",
        "toPairsIn",
        "toPath",
        "toPlainObject",
        "toSafeInteger",
        "toString",
        "toUpper",
        "transform",
        "trim",
        "trimEnd",
        "trimStart",
        "truncate",
        "unary",
        "unescape",
        "union",
        "unionBy",
        "unionWith",
        "uniq",
        "uniqBy",
        "uniqWith",
        "uniqueId",
        "unset",
        "unzip",
        "unzipWith",
        "update",
        "upperCase",
        "upperFirst",
        "values",
        "valuesIn",
        "without",
        "words",
        "wrap",
        "xor",
        "xorBy",
        "xorWith",
        "zip",
        "zipObject",
        "zipWith"
    ];
}
