// @ts-check

import assert from "assert";
import { execa } from "execa";
import fs from "fs";
import { glob } from "glob";
import path from "path";

const packageJsonOrder = [
    "private",
    "name",
    "version",
    "license",
    "nonNpm",
    "nonNpmDescription",
    "projects",
    "type",
    "files",
    "exports",
    "types",
    "minimumTypeScriptVersion",
    "typesVersions",
    "dependencies",
    "devDependencies",
    "owners",
    "pnpm",
];

/**
 * @param {Record<string, any>} obj
 */
function packageJsonToString(obj) {
    obj = { ...obj };
    /** @type {Record<string, any>} */
    const result = {};
    for (const prop of packageJsonOrder) {
        result[prop] = obj[prop];
        delete obj[prop];
    }
    assert.deepStrictEqual(obj, {});
    return JSON.stringify(result, undefined, 4) + "\n";
}

const versionedDirRegExp = /^v(\d+)(\.(\d+))?$/;
const declarationGlob = "*.d.{ts,cts,mts,*.ts}";
const declarationGlobRecursive = `**/${declarationGlob}`;

/**
 * @param {string} filename
 */
async function fixPackage(filename) {
    filename = path.resolve(filename);

    const packageJsonContents = JSON.parse(await fs.promises.readFile(filename, "utf8"));

    if (!packageJsonContents.name || !packageJsonContents.name.startsWith("@types/") && !packageJsonContents.owners) {
        return;
    }

    const versionDirs = [];
    const packageDir = path.dirname(filename);

    if (path.dirname(packageDir) !== "types") {
        for (const entry of await fs.promises.readdir(packageDir, { withFileTypes: true })) {
            if (entry.isDirectory() && versionedDirRegExp.test(entry.name)) {
                versionDirs.push(entry.name);
            }
        }
    }

    // const files = [
    //     declarationGlobRecursive,
    //     // `**/*.d.ts`,
    //     // `**/*.d.cts`,
    //     // `**/*.d.mts`,
    //     // `**/*.d.*.ts`,
    // ];
    // // for (const versionDir of versionDirs) {
    // //     files.push(`!${versionDir}`);
    // // }
    // packageJsonContents.files = files;
    // await fs.promises.writeFile(filename, packageJsonToString(packageJsonContents));

    const npmIgnore = [
        `*`,
        // `!${declarationGlobRecursive}`,
        // `!*.d.ts`,
        `!**/*.d.ts`,
        // `!*.d.cts`,
        `!**/*.d.cts`,
        // `!*.d.mts`,
        `!**/*.d.mts`,
        // `!*.d.*.ts`,
        `!**/*.d.*.ts`,
    ];

    for (const versionDir of versionDirs) {
        npmIgnore.push(`/${versionDir}/`);
        // npmIgnore.push(`/${versionDir}/${declarationGlobRecursive}`);
    }

    // npmIgnore.push("**/node_modules/**");

    if (npmIgnore.length !== 0) {
        const npmIgnorePath = path.join(packageDir, ".npmignore");
        await fs.promises.writeFile(npmIgnorePath, npmIgnore.join("\n") + "\n");
    }

    await fs.promises.rm(path.join(packageDir, "OTHER_FILES.txt"), { force: true });
}

await execa("git", ["restore", "types"], { stdio: "ignore", reject: false });
await execa("git", ["clean", "-fd", "types"], { stdio: "ignore", reject: false });
const allPackageJsons = await glob("**/package.json", { ignore: "**/node_modules/**" });

await Promise.all(allPackageJsons.map(fixPackage));
