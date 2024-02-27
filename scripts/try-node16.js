import cp from "child_process";
import fs from "fs";
import path from "path";
import url from "url";

const tsconfigs = process.argv.slice(2);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

for (const tsconfigPath of tsconfigs) {
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
            path.join(__dirname, "node_modules/.bin/tsc"),
            ["-p", tsconfigPath, "--noEmit"],
            { stdio: "ignore" },
        );
    } catch {
        fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, undefined, 4) + "\n", "utf-8");
        console.log(tsconfigPath);
    }
}
