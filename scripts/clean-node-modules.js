import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(new URL(import.meta.url));
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

function* iterateNodeModules(p) {
    const dirents = fs.readdirSync(p, { withFileTypes: true });
    for (const dirent of dirents) {
        if (dirent.isDirectory()) {
            const subDir = path.join(p, dirent.name);
            if (dirent.name == "node_modules") {
                yield subDir;
                continue;
            }
            yield* iterateNodeModules(subDir);
        }
    }
}

function rimraf(p) {
    // The rimraf package uses maxRetries=10 on Windows, but Node's fs.rm does not have that special case.
    return fs.rmSync(p, { recursive: true, force: true, maxRetries: process.platform === "win32" ? 10 : 0 });
}

for (const nodeModules of iterateNodeModules(repoRoot)) {
    console.log(path.relative(repoRoot, nodeModules));
    rimraf(nodeModules);
}
