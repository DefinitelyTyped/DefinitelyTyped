import { AllPackages, getDefinitelyTyped } from "@definitelytyped/definitions-parser";
import { loggerWithErrors } from "@definitelytyped/utils";
import cp from "child_process";
import fs from "fs";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const repoRoot = path.join(__dirname, "..");

const dtFS = await getDefinitelyTyped({
    definitelyTypedPath: repoRoot,
    progress: false,
}, loggerWithErrors()[0]);

const allPackages = AllPackages.fromFS(dtFS);

for (const pkg of await allPackages.allTypings()) {
    console.log(`Trying ${pkg.subDirectoryPath}...`);
    const tsconfigPath = path.join(repoRoot, "types", pkg.subDirectoryPath, "tsconfig.json");
    const tsconfigString = fs.readFileSync(tsconfigPath, "utf-8");
    const tsconfig = JSON.parse(tsconfigString);
    if (tsconfig.compilerOptions.module === "node16") {
        continue;
    }

    const newTsconfig = JSON.parse(tsconfigString);

    newTsconfig.compilerOptions.module = "node16";
    fs.writeFileSync(tsconfigPath, JSON.stringify(newTsconfig, undefined, 4) + "\n", "utf-8");

    try {
        cp.execFileSync(
            path.join(repoRoot, "node_modules/.bin/tsc"),
            ["-p", tsconfigPath, "--noEmit"],
            { stdio: "ignore" },
        );
    } catch {
        fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, undefined, 4) + "\n", "utf-8");
        console.log(tsconfigPath);
    }
}
