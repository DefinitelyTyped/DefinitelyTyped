import { execa } from "execa";
import fs from "node:fs";
import path from "node:path";

const project = path.resolve(process.argv[2]);
const projectDirName = path.basename(path.dirname(project));
const projectPretty = path.relative(process.cwd(), project);

let packageRoot = path.dirname(project);

while (!fs.existsSync(path.join(packageRoot, "package.json"))) {
    packageRoot = path.dirname(packageRoot);
}

const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const { typesVersions } = packageJson;

let args = ["pnpm"];

if (typesVersions) {
    for (const [specifier, mapping] of Object.entries(typesVersions)) {
        const [dirGlob] = mapping["*"];
        if (dirGlob === `${projectDirName}/*`) {
            args.push(`--package=typescript@${specifier}`, "dlx");
            break;
        }
    }
}

args.push("tsc", "-p", projectPretty);

console.log(`Running ${args.join(" ")}`);

const result = await execa(args[0], args.slice(1), { stdio: "inherit", reject: false });
process.exitCode = result.exitCode;
