import cp from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { danger, fail, markdown } from "risk";
if (danger.git.created_files.some(f => path.basename(f) === ".editorconfig")) {
    fail(
        "A nested .editorconfig file may not be added to a package on DefinitelyTyped. Please respect the root .editorconfig.",
        danger.git.created_files.find(f => path.basename(f) === ".editorconfig"),
        1,
    );
}

// Tell people that they've added @me to their lib and not themselves
const newPackageJsonFiles = danger.git.created_files.filter(f => f.endsWith("package.json"));
newPackageJsonFiles.forEach(p => {
    const file = fs.readFileSync(p, "utf8");
    if (/"githubUsername":\s*"me"/.test(file)) {
        fail("package.json should have your github username in it, not \"me\".", p);
    }
});

const allFiles = [...danger.git.created_files, ...danger.git.modified_files];
// The file paths are provided over stdin to avoid hitting max arg length issues.
const result = cp.spawnSync(
    process.execPath,
    ["node_modules/dprint/bin.cjs", "check", "--list-different", "--stdin-files"],
    { encoding: "utf8", input: allFiles.join("\n"), maxBuffer: 100 * 1024 * 1024 },
);
// https://dprint.dev/cli/#exit-codes
switch (result.status) {
    case 0:
    case 14:
        // No change or no files matched
        break;
    case 20: {
        const unformatted = result.stdout.split(/\r?\n/)
            .filter(line => line)
            .map(line => path.relative(process.cwd(), line));
        const message = [
            "## Formatting",
            "",
        ];

        message.push(
            `The following files are not formatted:
1. ` + unformatted.slice(0, 5).join("\n1. "),
        );
        if (unformatted.length > 5) {
            const extras = unformatted.slice(5);
            message.push(`
<details>
<summary>as well as these ${extras.length} other files...</summary>
<p>${extras.join(", ")}</p>
</details>
`);
        }

        message.push("\nConsider running `pnpm dprint fmt` on these files to make review easier.");

        markdown(message.join("\n"));
        break;
    }
    default: {
        fail("dprint failed to execute");

        // Try and make sure no reasonable error could ever close the code block.
        // You can open a code block with as many backticks as you want, so long as
        // you close it with the same string. Inside of the code block, any lower
        // number of backticks cannot close the block.
        const codeBlock = "``````````";
        const message = [
            "## Formatting errors",
            "",
            codeBlock,
            result.stderr.trim(),
            codeBlock,
        ];

        markdown(message.join("\n"));
        break;
    }
}
