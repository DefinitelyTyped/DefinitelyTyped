/// <reference lib="esnext.asynciterable" />
// Must reference esnext.asynciterable lib, since octokit uses AsyncIterable internally
const cp = require("child_process");
const os = require("os");
const { AllPackages, getDefinitelyTyped, parseDefinitions, clean } = require("@definitelytyped/definitions-parser");
const { loggerWithErrors } = require("@definitelytyped/utils");
const { writeFile } = require("fs-extra");

async function main() {
    const options = { definitelyTypedPath: ".", progress: false, parseInParallel: true };
    const log = loggerWithErrors()[0];

    clean();
    const dt = await getDefinitelyTyped(options, log);
    await parseDefinitions(dt, { nProcesses: os.cpus().length, definitelyTypedPath: "." }, log);
    const allPackages = await AllPackages.read(dt);
    const typings = allPackages.allTypings();
    const maxPathLen = Math.max(...typings.map(t => t.subDirectoryPath.length));
    const entries = mapDefined(typings, t => getEntry(t, maxPathLen));
    await writeFile([options.definitelyTypedPath, ".github", "CODEOWNERS"].join("/"), `${header}\n\n${entries.join("\n")}\n`, { encoding: "utf-8" });
}

runSequence([
    ["git", ["checkout", "."]], // reset any changes
]);

main().then(() => {
    runSequence([
        ["git", ["add", ".github/CODEOWNERS"]], // Add CODEOWNERS
        ["git", ["commit", "-m", `"🤖 Update CODEOWNERS"`]], // Commit all changes
        ["git", ["push"]] // push the branch
    ]);
    console.log(`Pushed new commit.`);
}).catch(e => {
    console.error(e);
    process.exit(1);
});

/** @param {[string, string[]][]} tasks */
function runSequence(tasks) {
    for (const task of tasks) {
        console.log(`${task[0]} ${task[1].join(" ")}`);
        const result = cp.spawnSync(task[0], task[1], { timeout: 100000, shell: true, stdio: "inherit" });
        if (result.status !== 0) throw new Error(`${task[0]} ${task[1].join(" ")} failed: ${result.stderr && result.stderr.toString()}`);
    }
}

const header =
`# This file is generated.
# Add yourself to the "Definitions by:" list instead.
# See https://github.com/DefinitelyTyped/DefinitelyTyped#definition-owners`;

/**
 * @param { { contributors: ReadonlyArray<{githubUsername?: string }>, subDirectoryPath: string} } pkg
 * @param {number} maxPathLen
 * @return {string | undefined}
 */
function getEntry(pkg, maxPathLen) {
    const users = mapDefined(pkg.contributors, c => c.githubUsername);
    if (!users.length) {
        return undefined;
    }

    const path = `${pkg.subDirectoryPath}/`.padEnd(maxPathLen);
    return `/types/${path} ${users.map(u => `@${u}`).join(" ")}`;
}

/**
 * @template T,U
 * @param {ReadonlyArray<T>} arr
 * @param {(t: T) => U | undefined} mapper
 * @return U[]
 */
function mapDefined(arr, mapper) {
    const out = [];
    for (const a of arr) {
        const res = mapper(a);
        if (res !== undefined) {
            out.push(res);
        }
    }
    return out;
}
