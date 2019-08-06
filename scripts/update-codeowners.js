/// <reference lib="esnext.asynciterable" />
// Must reference esnext.asynciterable lib, since octokit uses AsyncIterable internally
const cp = require("child_process");
const Octokit = require("@octokit/rest");
const { AllPackages, getDefinitelyTyped, loggerWithErrors,
        parseDefinitions, parseNProcesses, clean } = require("types-publisher");
const { writeFile } = require("fs-extra");

async function main() {
    const options = { definitelyTypedPath: ".", progress: false, parseInParallel: true };
    const log = loggerWithErrors()[0];

    clean();
    const dt = await getDefinitelyTyped(options, log);
    await parseDefinitions(dt, { nProcesses: parseNProcesses(), definitelyTypedPath: "." }, log);
    const allPackages = await AllPackages.read(dt);
    const typings = allPackages.allTypings();
    const maxPathLen = Math.max(...typings.map(t => t.subDirectoryPath.length));
    const entries = mapDefined(typings, t => getEntry(t, maxPathLen));
    await writeFile([options.definitelyTypedPath, ".github", "CODEOWNERS"].join("/"), `${header}\n\n${entries.join("\n")}\n`, { encoding: "utf-8" });
}

const token = /** @type {string} */(process.env.GH_TOKEN);
const gh = new Octokit();
const reviewers = ["weswigham", "sandersn", "RyanCavanaugh"]
const now = new Date();
const branchName = `codeowner-update-${now.getFullYear()}${padNum(now.getMonth())}${padNum(now.getDay())}`;
const remoteUrl = `https://${token}@github.com/DefinitelyTyped/DefinitelyTyped.git`;
runSequence([
    ["git", ["checkout", "."]], // reset any changes
]);

main().then(() => {
    runSequence([
        ["git", ["checkout", "-b", branchName]], // create a branch
        ["git", ["add", ".github/CODEOWNERS"]], // Add CODEOWNERS
        ["git", ["commit", "-m", `"Update CODEOWNERS"`]], // Commit all changes
        ["git", ["remote", "add", "fork", remoteUrl]], // Add the remote fork
        ["git", ["push", "--set-upstream", "fork", branchName, "-f"]] // push the branch
    ]);

    gh.authenticate({
        type: "token",
        token,
    });
    return gh.pulls.create({
        owner: "DefinitelyTyped",
        repo: "DefinitelyTyped",
        maintainer_can_modify: true,
        title: `🤖 CODEOWNERS has changed`,
        head: `DefinitelyTyped:${branchName}`,
        base: "master",
        body:
        `Please review the diff and merge if no changes are unexpected.

cc ${reviewers.map(r => "@" + r).join(" ")}`,
    })
}).then(r => {
    const num = r.data.number;
    console.log(`Pull request ${num} created.`);
    return gh.pulls.createReviewRequest({
        owner: "DefinitelyTyped",
        repo: "DefinitelyTyped",
        number: num,
        reviewers,
    });
}).then(() => {
    console.log(`Reviewers requested, done.`);
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

/** @param {number} number */
function padNum(number) {
    const str = "" + number;
    return str.length >= 2 ? str : "0" + str;
}


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

