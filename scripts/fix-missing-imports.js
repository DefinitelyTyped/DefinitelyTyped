// @ts-check
import { $ as _$ } from "execa";
import assert from "node:assert";
import fs from "node:fs";
import { builtinModules } from "node:module";
import path from "node:path";
import os from "os";
import pLimit from "p-limit";

const $ = _$({});
// const $ = _$({ verbose: true, stdio: "inherit" });

const [brokenListFile] = process.argv.slice(2);
const brokenList = fs.readFileSync(brokenListFile, "utf8").trim().split("\n");

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
 * @param {string | undefined} a
 * @param {string | undefined} b
 */
function compareComparableValues(a, b) {
    return a === b ? 0 : a === undefined ? -1 : b === undefined ? 1 : a < b ? -1 : 1;
}

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

const fsLimit = pLimit(1);

/**
 * @param {string} pkgPath
 * @param {boolean} addReference
 */
async function addNode(pkgPath, addReference) {
    console.log(`${pkgPath}: needs node${addReference ? " and reference" : ""}`);

    const packageJsonPath = path.join(pkgPath, "package.json");
    const packageJsonContents = JSON.parse(
        await fsLimit(() => fs.promises.readFile(packageJsonPath, "utf8")),
    );

    packageJsonContents.dependencies ??= {};
    packageJsonContents.dependencies["@types/node"] = "*";
    packageJsonContents.dependencies = sortObject(packageJsonContents.dependencies);

    const sortedPackageJsonContents = reorderObject(
        packageJsonContents,
        packageJsonOrder,
        `${packageJsonPath} contains unknown properties`,
    );

    await fsLimit(() =>
        fs.promises.writeFile(packageJsonPath, JSON.stringify(sortedPackageJsonContents, undefined, 4) + "\n")
    );

    if (addReference) {
        const indexDtsPath = path.join(pkgPath, "index.d.ts");
        const indexDtsContents = await fsLimit(() => fs.promises.readFile(indexDtsPath, "utf8"));
        await fsLimit(() =>
            fs.promises.writeFile(indexDtsPath, `/// <reference types="node" />\n\n${indexDtsContents}`)
        );
    }
}

/**
 * @param {string} pkgPath
 * @param {string} stdout
 */
async function tryFix(pkgPath, stdout) {
    // Filter out ellaborations.
    stdout = stdout.split(/\r?\n/).filter(line => !line.startsWith(" ")).join("\n").trim();

    const stdoutOnlyNodeModules = stdout
        .split(/\r?\n/).filter(line => line.includes("node_modules")).join("\n").trim();
    let checkingNodeModules = false;

    stdout = stdout.split(/\r?\n/).filter(line => !line.includes("node_modules")).join("\n").trim();
    if (!stdout) {
        // TODO: handle this case, it may need node too.
        console.log(`${pkgPath}: all errors are in node_modules`);
        stdout = stdoutOnlyNodeModules;
        checkingNodeModules = true;
    }

    if (!checkingNodeModules) {
        stdout = stdout.split(/\r?\n/).filter(line => line.startsWith(`${pkgPath}/`)).join("\n").trim();
        if (!stdout) {
            // TODO: handle this case, it may need node too.
            console.log(`${pkgPath}: all errors are in other packages`);
            return false;
        }
    }

    if (stdout.includes("Cannot find type definition file for 'node'")) {
        await addNode(pkgPath, false);
        return true;
    }

    if (stdout.includes("Do you need to install type definitions for node?")) {
        await addNode(pkgPath, true && !checkingNodeModules);
        return true;
    }

    const cannotFindModuleRegex = /(?:Cannot find module|Could not find a declaration file for module) '([^']+)'/;
    const match = stdout.match(cannotFindModuleRegex);
    if (match) {
        const missingModule = match[1];
        if (builtinModules.includes(missingModule)) {
            await addNode(pkgPath, true && !checkingNodeModules);
            return true;
        }

        console.log(`${pkgPath}: needs ${missingModule} but it's not a node builtin`);
        return false;
    }

    if (!stdout.includes("node")) {
        console.log(`${pkgPath}: not related to node`);
        return false;
    }

    console.log(`${pkgPath}: unknown problem`);
    console.log(stdout);
    return false;
}

const numCpus = os.cpus().length;
const mainLimit = pLimit(numCpus);

/**
 * @param {string} pkgName
 */
async function pnpmInstall(pkgName) {
    await fsLimit(() => $`pnpm install --filter ${pkgName}...`);
}

/**
 * @param {string} pkgPath
 */
async function runTsc(pkgPath) {
    return (await $({ stdio: "pipe", reject: false })`tsc -p ${pkgPath}`).stdout;
}

for (const p of brokenList) {
    // if (!p.includes("async-eventemitter")) continue;
    mainLimit(async () => {
        const pkgPath = path.dirname(p);
        const packageJsonPath = path.join(pkgPath, "package.json");

        if (!fs.existsSync(packageJsonPath)) {
            console.log(`${pkgPath}: ignoring for now`);
            return;
        }

        const packageJsonContents = await fsLimit(() => fs.promises.readFile(packageJsonPath, "utf8"));
        const packageName = JSON.parse(packageJsonContents).name;
        if (!packageName || !packageName.startsWith("@types/")) {
            console.log(`${pkgPath}: ignoring for now`);
            return;
        }

        await pnpmInstall(packageName);
        let stdout = await runTsc(pkgPath);
        if (!stdout) {
            console.log(`${pkgPath}: not broken`);
            return;
        }

        const fixed = await tryFix(pkgPath, stdout);
        if (!fixed) {
            console.log(`${pkgPath}: not fixed`);
            return;
        }

        await pnpmInstall(packageName);
        stdout = await runTsc(pkgPath);
        if (!stdout.trim()) {
            console.log(`${pkgPath}: successfully fixed`);
            return;
        }

        console.log(`${pkgPath}: still broken, reverting`);
        await fsLimit(() => $`git restore ${pkgPath}`);
    });
}
