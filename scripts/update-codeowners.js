/// <reference lib="esnext.asynciterable" />
// Must reference esnext.asynciterable lib, since octokit uses AsyncIterable internally
const cp = require("child_process");
const Octokit = require("@octokit/rest");
const { AllPackages, getDefinitelyTyped, loggerWithErrors,
        parseDefinitions, parseNProcesses, clean } = require("types-publisher");
const { writeFile } = require("fs-extra");

async function main() {
    const options = { definitelyTypedPath: "..", progress: false, parseInParallel: true };
    const log = loggerWithErrors()[0];

    clean();
    const dt = await getDefinitelyTyped(options, log);
    await parseDefinitions(dt, { nProcesses: parseNProcesses(), definitelyTypedPath: ".." }, log);
    const allPackages = await AllPackages.read(dt);
    const typings = allPackages.allTypings();
    const maxPathLen = Math.max(...typings.map(t => t.subDirectoryPath.length));
    const entries = mapDefined(typings, t => getEntry(t, maxPathLen));
    await writeFile([options.definitelyTypedPath, ".github", "CODEOWNERS"].join("/"), `${header}\n\n${entries.join("\n")}\n`, { encoding: "utf-8" });
}

const userName = process.env.GH_USERNAME;
const reviewers = ["weswigham", "sandersn", "RyanCavanaugh"]
const now = new Date();
const branchName = `codeowner-update-${now.getFullYear()}${padNum(now.getMonth())}${padNum(now.getDay())}`;
const remoteUrl = `https://${process.argv[2]}@github.com/${userName}/DefinitelyTyped.git`;
runSequence([
    ["git", ["checkout", "."]], // reset any changes
]);

main().catch(e => {
    console.error(e);
    process.exit(1);
});

runSequence([
    ["git", ["checkout", "-b", branchName]], // create a branch
    ["git", ["add", "."]], // Add all changes
    ["git", ["commit", "-m", `"Update user baselines"`]], // Commit all changes
    ["git", ["remote", "add", "fork", remoteUrl]], // Add the remote fork
    ["git", ["push", "--set-upstream", "fork", branchName, "-f"]] // push the branch
]);

const opts = { timeout: 100000, shell: true, stdio: "inherit" }
/** @param {[string, string[]][]} tasks */
function runSequence(tasks) {
    for (const task of tasks) {
        console.log(`${task[0]} ${task[1].join(" ")}`);
        const result = cp.spawnSync(task[0], task[1], opts);
        if (result.status !== 0) throw new Error(`${task[0]} ${task[1].join(" ")} failed: ${result.stderr && result.stderr.toString()}`);
    }
}

/** @param {number} number */
function padNum(number) {
    const str = "" + number;
    return str.length >= 2 ? str : "0" + str;
}

const gh = new Octokit();
gh.authenticate({
    type: "token",
    token: process.argv[2]
});
gh.pulls.create({
    owner: process.env.TARGET_FORK,
    repo: "DefinitelyTyped",
    maintainer_can_modify: true,
    title: `🤖 User test baselines have changed`,
    head: `${userName}:${branchName}`,
    base: "master",
    body:
`Please review the diff and merge if no changes are unexpected.
You can view the build log [here](https://typescript.visualstudio.com/TypeScript/_build/index?buildId=${process.env.BUILD_BUILDID}&_a=summary).

cc ${reviewers.map(r => "@" + r).join(" ")}`,
}).then(r => {
    const num = r.data.number;
    console.log(`Pull request ${num} created.`);
    return gh.pulls.createReviewRequest({
        owner: process.env.TARGET_FORK,
        repo: "TypeScript",
        number: num,
        reviewers,
    });
}).then(() => {
    console.log(`Reviewers requested, done.`);
}).catch(e => {
    console.error(e);
    process.exit(1);
});


const header =
`# This file is generated.
# Add yourself to the "Definitions by:" list instead.
# See https://github.com/DefinitelyTyped/DefinitelyTyped#edit-an-existing-package`;

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

