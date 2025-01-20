import { mkdirSync, readFileSync, renameSync, writeFileSync } from "fs";
import { copySync } from "fs-extra";
import { tmpdir } from "os";
import { join, resolve } from "path";

const nodeDir = resolve(__dirname, "../../");

const [, , newVersion] = process.argv;

if (!newVersion || !newVersion.match(/^\d+$/)) {
    throw new Error("Argument must be only major version number");
}

const indexPath = join(nodeDir, "index.d.ts");

const indexContents = readFileSync(indexPath, "utf-8");
const [, currentVersion] = indexContents.match(/\/\/ Type definitions for non-npm package Node.js (\d+).\d+/) ?? [];

const folderName = join(nodeDir, `v${currentVersion}`);

// cannot move tempdir, create subfolder
const tempSubfolder = join(tmpdir(), "v16");
mkdirSync(tempSubfolder);

copySync(nodeDir, tempSubfolder, {
    filter(src) {
        if (
            src.match(/v[^a-z]+$/)
            || src.endsWith("package-lock.json")
            || src.endsWith(".eslintrc.json")
            || src.includes("/script")
        ) {
            return false;
        }
        return true;
    },
});

renameSync(tempSubfolder, folderName);

const newIndexContents = indexContents.replace(
    /\/\/ Type definitions for non-npm package Node.js (\d+).\d+/,
    `// Type definitions for non-npm package Node.js ${newVersion}.0`,
);

writeFileSync(join(nodeDir, "index.d.ts"), newIndexContents);

const tsConfigPath = join(folderName, "tsconfig.json");

const oldTSConfig = JSON.parse(readFileSync(tsConfigPath, "utf-8"));

oldTSConfig.compilerOptions.baseUrl = "../../";
oldTSConfig.compilerOptions.typeRoots = ["../../"];
oldTSConfig.compilerOptions.paths = {
    "node": [
        `node/v${currentVersion}`,
    ],
};

writeFileSync(tsConfigPath, JSON.stringify(oldTSConfig, null, "  "), "utf8");

const tsConfigPath2 = join(folderName, "ts4.8", "tsconfig.json");

const oldTSConfig2 = JSON.parse(readFileSync(tsConfigPath2, "utf-8"));

oldTSConfig2.compilerOptions.baseUrl = "../../../";
oldTSConfig2.compilerOptions.typeRoots = ["../../../"];
oldTSConfig2.compilerOptions.paths = {
    "node": [
        `node/v${currentVersion}`,
    ],
};

writeFileSync(tsConfigPath2, JSON.stringify(oldTSConfig2, null, "  "), "utf8");
