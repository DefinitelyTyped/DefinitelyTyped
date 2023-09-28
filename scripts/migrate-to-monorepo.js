// @ts-check

import { getLocallyInstalledDefinitelyTyped, parseDefinitions } from "@definitelytyped/definitions-parser";
import { parseHeaderOrFail } from "@definitelytyped/header-parser";
import tsVersions from "@definitelytyped/typescript-versions";
import { mangleScopedPackage } from "@definitelytyped/utils";
import assert from "assert";
import fs from "fs";
import module from "module";
import os from "os";
import PQueue from "p-queue";
import path from "path";
import url from "url";

const TypeScriptVersion = tsVersions.TypeScriptVersion;

const numCpus = os.cpus().length;

const __filename = url.fileURLToPath(new URL(import.meta.url));
const __dirname = path.dirname(__filename);

const dtRoot = path.resolve(__dirname, "..");
const typesRoot = path.resolve(dtRoot, "types");

const allPackages = await parseDefinitions(
    getLocallyInstalledDefinitelyTyped(dtRoot),
    { definitelyTypedPath: dtRoot, nProcesses: numCpus },
    console,
);

/**
 * @param {string} p
 */
function prettyPath(p) {
    return path.relative(dtRoot, p);
}

/**
 * @param {string | undefined} a
 * @param {string | undefined} b
 */
function compareComparableValues(a, b) {
    return a === b ? 0 : a === undefined ? -1 : b === undefined ? 1 : a < b ? -1 : 1;
}

const packageJsonOrder = [
    "private",
    "name",
    "version",
    "license",
    "nonNpm",
    "nonNpmDescription",
    "projects",
    "type",
    "exports",
    "types",
    "typeScriptVersion",
    "typesVersions",
    "dependencies",
    "devDependencies",
    "contributors",
];

/**
 * @param {Record<string, any>} obj
 */
function sortObject(obj) {
    return Object.fromEntries(Object.entries(obj).sort((a, b) => compareComparableValues(a[0], b[0])));
}

/**
 * @param {Record<string, any>} obj
 * @param {string[]} order
 * @param {string} msg
 */
function reorderObject(obj, order, msg) {
    obj = { ...obj };
    /** @type {Record<string, any>} */
    const result = {};
    for (const prop of order) {
        result[prop] = obj[prop];
        delete obj[prop];
    }
    assert.deepStrictEqual(obj, {}, msg);
    return result;
}

const nodePackages = new Set(module.builtinModules);

/**
 * @param {string} name
 */
function isNodeBuiltin(name) {
    return name.startsWith("node:") || nodePackages.has(name);
}

/**
 * @param {string} path
 * @param {unknown} obj
 */
function writeJSON(path, obj) {
    return fs.promises.writeFile(path, JSON.stringify(obj, undefined, 4) + "\n");
}

/**
 * @param {string} name
 */
function regularNameToTypesName(name) {
    return `@types/${mangleScopedPackage(name)}`;
}

/**
 * @param {import("@definitelytyped/definitions-parser").TypingsData} typingsData
 */
async function handlePackage(typingsData) {
    // Defer side effects to the end, so any thrown errors don't
    // leave the tree in an inconsistent state.
    /** @type {(() => void)[]} */
    const deferred = [];

    const packageRoot = path.join(typesRoot, typingsData.subDirectoryPath);
    const pkgName = typingsData.fullNpmName;

    const packageJsonPath = path.join(packageRoot, "package.json");
    const hasPackageJsonOriginally = fs.existsSync(packageJsonPath);

    /** @type {Record<string, any>} */
    const packageJsonContents = { name: pkgName, private: true };

    if (hasPackageJsonOriginally) {
        const existing = JSON.parse(await fs.promises.readFile(packageJsonPath, { encoding: "utf8" }));
        if (existing.version) {
            // we've already processed this; skip.
            return;
        }
        Object.assign(packageJsonContents, existing);
    }

    packageJsonContents.version = `${typingsData.major}.${typingsData.minor}.99999`;

    packageJsonContents.contributors = typingsData.contributors
        .map(author => {
            /** @type {{ name: string; url?: string | undefined; githubUsername?: string | undefined }} */
            const newAuthor = { ...author };
            if (newAuthor.githubUsername) {
                delete newAuthor.url;
            }
            return newAuthor;
        })
        .filter(author => author.githubUsername !== "DefinitelyTyped");

    // If it's not supported or it's the current minimum, there's no reason to note it.
    if (
        TypeScriptVersion.isSupported(typingsData.minTypeScriptVersion)
        && typingsData.minTypeScriptVersion !== TypeScriptVersion.lowest
    ) {
        packageJsonContents.typeScriptVersion = typingsData.minTypeScriptVersion;
    }

    const indexDtsPath = path.join(packageRoot, "index.d.ts");
    const indexDts = await fs.promises.readFile(indexDtsPath, { encoding: "utf8" });
    const header = parseHeaderOrFail(indexDtsPath, indexDts);

    if (header.nonNpm) {
        packageJsonContents.nonNpm = true;
        // TODO: bikeshed name
        packageJsonContents.nonNpmDescription = header.libraryName;
    }

    // TODO: bikeshed name
    packageJsonContents.projects = header.projects;

    // #region dependencies

    packageJsonContents.dependencies ??= {};

    for (let [dep, version] of Object.entries(typingsData.dependencies)) {
        if (isNodeBuiltin(dep)) {
            if (fs.existsSync(path.join(typesRoot, dep))) {
                throw new Error(`ambiguous node dep ${dep}`);
            } else {
                dep = "node";
            }
        }

        if (
            dep === pkgName
            || packageJsonContents.dependencies[dep]
            || packageJsonContents.dependencies[regularNameToTypesName(dep)]
        ) {
            continue;
        }

        const newVersion = typeof version === "string"
            ? version
            : `^${version.major}${version.minor ? `.${version.minor}` : ""}`;

        const localData = version === "*"
            ? allPackages.tryGetLatestVersion(dep)
            : allPackages.tryGetTypingsData({ name: dep, version: version });

        if (!localData) {
            console.log(`${prettyPath(packageJsonPath)}: could not find a local package for ${dep}`);
            continue;
        }

        if (localData.fullNpmName === pkgName) {
            continue;
        }

        const newName = localData.fullNpmName;
        packageJsonContents.dependencies[newName] = newVersion;
    }

    if (pkgName === "@types/material-ui-phone-number") {
        // This package depends on old material-ui which depends on @types/react at 16/17.
        packageJsonContents.dependencies["@types/react"] = "^16.8.6 || ^17.0.0";
    }

    // #endregion dependencies

    // #region devDependencies

    assert.deepStrictEqual(packageJsonContents.devDependencies, undefined);
    packageJsonContents.devDependencies ??= {};
    packageJsonContents.devDependencies[pkgName] = "workspace:.";

    for (let dep of typingsData.testDependencies) {
        const allDeps = { ...packageJsonContents.dependencies, ...packageJsonContents.devDependencies };
        /**
         * @param {string} dep
         */
        function hasDep(dep) {
            return allDeps[dep] || allDeps[regularNameToTypesName(dep)];
        }

        if (hasDep(dep)) continue;

        if (isNodeBuiltin(dep)) {
            if (!typingsData.dependencies["node"] && fs.existsSync(path.join(typesRoot, dep))) {
                console.log(
                    `${prettyPath(packageJsonPath)}: test dependency ${dep} could be node or ${
                        regularNameToTypesName(
                            dep,
                        )
                    }; skipping`,
                );
                continue;
            } else {
                dep = "node";
            }
        }

        if (!hasDep(dep)) {
            if (allPackages.tryGetLatestVersion(dep)) {
                packageJsonContents.devDependencies[regularNameToTypesName(dep)] = "*";
            } else {
                console.log(`${prettyPath(packageJsonPath)}: could not find a local package for ${dep}`);
            }
        }
    }

    // #endregion devDependencies

    // #region result sorting

    if (Object.keys(packageJsonContents.dependencies).length === 0) {
        delete packageJsonContents.dependencies;
    } else {
        packageJsonContents.dependencies = sortObject(packageJsonContents.dependencies);
    }

    packageJsonContents.devDependencies = sortObject(packageJsonContents.devDependencies);

    const sortedPackageJsonContents = reorderObject(
        packageJsonContents,
        packageJsonOrder,
        `${prettyPath(packageJsonPath)} contains unknown properties`,
    );

    // #endregion result sorting

    deferred.push(() => writeJSON(packageJsonPath, sortedPackageJsonContents));

    const tsconfigDirs = [packageRoot];

    if (sortedPackageJsonContents.typesVersions) {
        for (const range of Object.values(sortedPackageJsonContents.typesVersions)) {
            for (const x of Object.values(range)) {
                for (const subpath of x) {
                    tsconfigDirs.push(path.join(packageRoot, subpath.replace(/\/\*$/, "")));
                }
            }
        }
    }

    for (const t of tsconfigDirs) {
        const tsconfigPath = path.join(t, "tsconfig.json");
        const tsconfigContents = JSON.parse(await fs.promises.readFile(tsconfigPath, { encoding: "utf8" }));

        delete tsconfigContents.compilerOptions.baseUrl;
        delete tsconfigContents.compilerOptions.typeRoots;
        delete tsconfigContents.compilerOptions.paths;

        deferred.push(() => writeJSON(tsconfigPath, tsconfigContents));
    }

    const newline = indexDts.includes("\r") ? "\r\n" : "\n";
    const splitIndexDts = indexDts.split(/\r?\n/g);
    const firstLine = splitIndexDts.findIndex(line => !line.startsWith("// "));

    deferred.push(() => fs.promises.writeFile(indexDtsPath, splitIndexDts.slice(firstLine).join(newline).trimStart()));

    await Promise.all(deferred.map(fn => fn()));
}

const queue = new PQueue({ concurrency: numCpus });

let errorCount = 0;

// Something is wrong with allPackages.allTypings(); throws due to the data not
// being sorted. Just hack this so we can continue.
/** @type {ReadonlyMap<string, import("@definitelytyped/definitions-parser").TypingsVersions>} */
const data = /** @type {any} */ (allPackages).data;

const allTypingsData = [];

for (const v of data.values()) {
    for (const typingsData of v.getAll()) {
        allTypingsData.push(typingsData);
    }
}

allTypingsData.sort((a, b) => compareComparableValues(a.subDirectoryPath, b.subDirectoryPath));

for (const typingsData of allTypingsData) {
    queue.add(async () => {
        try {
            await handlePackage(typingsData);
        } catch (e) {
            console.log(`error in ${typingsData.fullNpmName}: ${e}`);
            errorCount++;
            if (errorCount > 5) {
                console.error("too many errors");
                queue.clear();
                process.exitCode = 1;
            }
        }
    });
}
