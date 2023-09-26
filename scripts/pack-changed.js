import { execSync } from "node:child_process";
import { getAffectedPackagesFromDiff, getDefinitelyTyped, parseDefinitions } from "@definitelytyped/definitions-parser";
import { loggerWithErrors, writeTgz } from "@definitelytyped/utils";
import { makeTypesVersionsForPackageJson } from "@definitelytyped/header-parser";
import { mkdir, writeFile } from "node:fs/promises";
import { cpus, tmpdir } from "node:os";
import path from "node:path";

const dt = await getDefinitelyTyped({
    definitelyTypedPath: process.cwd(),
    progress: true,
    parseInParallel: true,
}, loggerWithErrors()[0]);

await parseDefinitions(dt, { definitelyTypedPath: process.cwd(), nProcesses: cpus().length }, loggerWithErrors()[0]);
const { changedPackages } = await getAffectedPackagesFromDiff(dt, process.cwd(), "affected");
if (changedPackages.length === 0 || changedPackages.length > 10) {
    console.log(`Skipping packing because ${changedPackages.length} packages were changed.`);
    process.exit(0);
}

const prereleaseNumber = process.env.PR_NUMBER || execSync("git rev-parse HEAD").toString().trim();
await mkdir("out", { recursive: true });
for (const pkg of changedPackages) {
    const typesDirectory = dt.subDir("types").subDir(pkg.name);
    const packageFS = pkg.isLatest || !pkg.versionDirectoryName
        ? typesDirectory
        : typesDirectory.subDir(pkg.versionDirectoryName);
    const tmpDir = path.join(tmpdir(), pkg.fullNpmName);
    await mkdir(tmpDir, { recursive: true });
    const packageJson = {
        name: pkg.fullNpmName,
        version: `${pkg.major}.${pkg.minor}.0-dev.${prereleaseNumber}`,
        main: "",
        types: "index.d.ts",
        typesVersions: makeTypesVersionsForPackageJson(pkg.typesVersions),
        scripts: {
            preinstall: `echo "This is not a working prerelease version of ${pkg.fullNpmName}; it was generated only for CI validation. Do not install." && exit 1`,
        }
    };
    await writeFile(path.join(tmpDir, "package.json"), JSON.stringify(packageJson, undefined, 4));
    await Promise.all(pkg.files.map(async fileName => {
        const outPath = path.join(tmpDir, fileName);
        await mkdir(path.dirname(outPath), { recursive: true });
        await writeFile(outPath, packageFS.readFile(fileName));
    }));
    await writeTgz(tmpDir, path.join("out", `${pkg.fullNpmName}-${packageJson.version}.tgz`));
}
