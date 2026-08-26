#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { lstatSync, mkdirSync, mkdtempSync, readdirSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, posix, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const STATUS_SCHEMA_VERSION = 1;
const UPSTREAM_REPOSITORY = "DefinitelyTyped/DefinitelyTyped";
const PROVIDER_REPOSITORY = "panva/node-oidc-provider";
const PACKAGE_PATH = "types/oidc-provider";
const HASH_PATTERN = /^[a-f0-9]{64}$/;
const VERSION_PATTERN = /^(\d+)\.(\d+)\.(\d+)$/;
const TAG_PATTERN = /^v(\d+\.\d+\.\d+)$/;
const STATUS_REASONS = new Set(["declarations", "major-version"]);
function usage() {
    return "usage: node scripts/sync-release.mjs --tag vX.Y.Z (--run-id <id> | --artifact <path>) [--submit] [--keep-temp]";
}

function fail(message) {
    throw new Error(message);
}

function optionValue(argv, index, option) {
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) fail(`${option} requires a value`);
    return value;
}

export function parseArguments(argv, cwd = process.cwd()) {
    const parsed = {
        artifact: undefined,
        keepTemp: false,
        runId: undefined,
        submit: false,
        tag: undefined,
    };

    for (let index = 0; index < argv.length; index += 1) {
        const argument = argv[index];
        switch (argument) {
            case "--artifact": {
                if (parsed.artifact !== undefined) fail("--artifact may only be specified once");
                parsed.artifact = resolve(cwd, optionValue(argv, index, argument));
                index += 1;
                break;
            }
            case "--keep-temp":
                if (parsed.keepTemp) fail("--keep-temp may only be specified once");
                parsed.keepTemp = true;
                break;
            case "--run-id":
                if (parsed.runId !== undefined) fail("--run-id may only be specified once");
                parsed.runId = optionValue(argv, index, argument);
                index += 1;
                break;
            case "--submit":
                if (parsed.submit) fail("--submit may only be specified once");
                parsed.submit = true;
                break;
            case "--tag":
                if (parsed.tag !== undefined) fail("--tag may only be specified once");
                parsed.tag = optionValue(argv, index, argument);
                index += 1;
                break;
            default:
                fail(`unknown argument ${JSON.stringify(argument)}\n${usage()}`);
        }
    }

    if (!parsed.tag) fail(`--tag is required\n${usage()}`);
    if (!TAG_PATTERN.test(parsed.tag)) fail("--tag must have the form vX.Y.Z");
    if ((parsed.artifact === undefined) === (parsed.runId === undefined)) {
        fail(`exactly one of --run-id or --artifact is required\n${usage()}`);
    }
    if (parsed.runId !== undefined && !/^[1-9]\d*$/.test(parsed.runId)) {
        fail("--run-id must be a positive GitHub Actions run ID");
    }

    return parsed;
}

export function releasePlan(tag) {
    const match = TAG_PATTERN.exec(tag);
    if (!match) fail("tag must have the form vX.Y.Z");
    const version = match[1];
    return {
        artifactName: `oidc-provider-types-${tag}`,
        branch: `oidc-provider-${tag}`,
        commitTitle: `[oidc-provider] sync declarations for ${tag}`,
        tag,
        version,
    };
}

function commandDescription(command, args) {
    return [command, ...args].map((part) => JSON.stringify(part)).join(" ");
}

function shellQuote(value) {
    if (/^[A-Za-z0-9_./:@%+=,-]+$/.test(value)) return value;
    return `'${value.replaceAll("'", `'"'"'`)}'`;
}

export function shellCommand(command, args) {
    return [command, ...args].map(shellQuote).join(" ");
}

export function runCommand(command, args, {
    allowStatuses = [0],
    capture = true,
    cwd,
} = {}) {
    const result = spawnSync(command, args, {
        cwd,
        encoding: "utf8",
        maxBuffer: 32 * 1024 * 1024,
        stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
    });
    if (result.error) {
        fail(`could not run ${commandDescription(command, args)}: ${result.error.message}`);
    }
    if (!allowStatuses.includes(result.status)) {
        const diagnostic = capture ? (result.stderr || result.stdout || "").trim() : "";
        fail(
            `${commandDescription(command, args)} exited with status ${result.status}${
                diagnostic ? `: ${diagnostic}` : ""
            }`,
        );
    }
    return {
        status: result.status,
        stderr: result.stderr || "",
        stdout: result.stdout || "",
    };
}

function output(execute, command, args, options) {
    return execute(command, args, options).stdout.trim();
}

export function githubRepository(remote) {
    const patterns = [
        /^git@github\.com:([^/\s:]+)\/([^/\s?#:]+?)(?:\.git)?\/?$/,
        /^ssh:\/\/git@github\.com\/([^/\s:]+)\/([^/\s?#:]+?)(?:\.git)?\/?$/,
        /^https:\/\/github\.com\/([^/\s:]+)\/([^/\s?#:]+?)(?:\.git)?\/?$/,
    ];
    for (const pattern of patterns) {
        const match = pattern.exec(remote);
        if (match) return { owner: match[1], repository: match[2] };
    }
    fail("remote must use an exact github.com HTTPS or SSH URL");
}

function assertNodeVersion(version) {
    const match = VERSION_PATTERN.exec(version);
    if (!match) fail(`could not parse Node.js version ${JSON.stringify(version)}`);
    const major = Number(match[1]);
    const minor = Number(match[2]);
    if (major < 20 || (major === 20 && minor < 17)) {
        fail(`Node.js 20.17.0 or newer is required, found ${version}`);
    }
}

function preflight(packageDirectory, execute) {
    assertNodeVersion(process.versions.node);

    const repositoryDirectory = output(
        execute,
        "git",
        ["-C", packageDirectory, "rev-parse", "--show-toplevel"],
    );
    const packageRelative = relative(repositoryDirectory, packageDirectory).split(sep).join("/");
    if (packageRelative !== PACKAGE_PATH) {
        fail(`sync-release must be run from ${PACKAGE_PATH} in a DefinitelyTyped checkout`);
    }

    output(execute, "git", ["--version"]);
    output(execute, "gh", ["--version"]);
    execute("gh", ["auth", "status", "--hostname", "github.com"], { capture: true });
    const githubLogin = output(execute, "gh", ["api", "user", "--jq", ".login"]);
    const pnpmVersion = output(execute, "pnpm", ["--version"]);
    if (!VERSION_PATTERN.test(pnpmVersion)) fail(`could not parse pnpm version ${JSON.stringify(pnpmVersion)}`);

    const userName = output(execute, "git", ["-C", repositoryDirectory, "config", "--get", "user.name"]);
    const userEmail = output(execute, "git", ["-C", repositoryDirectory, "config", "--get", "user.email"]);
    if (!userName || !userEmail) fail("git user.name and user.email must both be configured");

    const upstreamUrl = output(
        execute,
        "git",
        ["-C", repositoryDirectory, "remote", "get-url", "upstream"],
    );
    const originUrl = output(
        execute,
        "git",
        ["-C", repositoryDirectory, "remote", "get-url", "origin"],
    );
    const originPushUrls = parseLines(output(
        execute,
        "git",
        ["-C", repositoryDirectory, "remote", "get-url", "--push", "--all", "origin"],
    ));
    const upstream = githubRepository(upstreamUrl);
    const origin = githubRepository(originUrl);
    if (`${upstream.owner}/${upstream.repository}`.toLowerCase() !== UPSTREAM_REPOSITORY.toLowerCase()) {
        fail(`upstream must point to ${UPSTREAM_REPOSITORY}, found ${upstream.owner}/${upstream.repository}`);
    }
    if (origin.repository.toLowerCase() !== "definitelytyped") {
        fail(`origin must point to a DefinitelyTyped fork, found ${origin.owner}/${origin.repository}`);
    }
    if (origin.owner.toLowerCase() !== githubLogin.toLowerCase()) {
        fail(`origin fork owner ${origin.owner} does not match authenticated GitHub user ${githubLogin}`);
    }
    if (
        !originPushUrls.length || originPushUrls.some((url) => {
            const push = githubRepository(url);
            return push.owner.toLowerCase() !== origin.owner.toLowerCase()
                || push.repository.toLowerCase() !== origin.repository.toLowerCase();
        })
    ) {
        fail("every origin push URL must point to the authenticated DefinitelyTyped fork");
    }

    return { originOwner: origin.owner, repositoryDirectory };
}

function regularFile(path, label, rejectSymlink = false) {
    let stats;
    try {
        stats = rejectSymlink ? lstatSync(path) : statSync(path);
    } catch (error) {
        fail(`${label} is not readable at ${path}: ${error.message}`);
    }
    if (!stats.isFile()) fail(`${label} must be a regular file: ${path}`);
    return path;
}

function acquireArtifact(options, plan, temporaryDirectory, execute) {
    if (options.artifact !== undefined) {
        return regularFile(options.artifact, "provider types artifact");
    }

    const downloadDirectory = join(temporaryDirectory, "artifact");
    mkdirSync(downloadDirectory);
    execute("gh", [
        "run",
        "download",
        options.runId,
        "--repo",
        PROVIDER_REPOSITORY,
        "--name",
        plan.artifactName,
        "--dir",
        downloadDirectory,
    ], { capture: false });

    const entries = readdirSync(downloadDirectory);
    if (entries.length !== 1 || entries[0] !== "oidc-provider-types.json") {
        fail(
            `${plan.artifactName} must contain exactly one top-level file named oidc-provider-types.json`,
        );
    }
    return regularFile(
        join(downloadDirectory, "oidc-provider-types.json"),
        "downloaded provider types artifact",
        true,
    );
}

function exactObjectKeys(value, required, optional, label) {
    if (!value || typeof value !== "object" || Array.isArray(value)) fail(`${label} must be an object`);
    const allowed = new Set([...required, ...optional]);
    const keys = Object.keys(value);
    const missing = required.filter((key) => !Object.hasOwn(value, key));
    const extra = keys.filter((key) => !allowed.has(key));
    if (missing.length || extra.length) {
        fail(
            `${label} has invalid keys${missing.length ? `; missing ${missing.join(", ")}` : ""}${
                extra.length ? `; unexpected ${extra.join(", ")}` : ""
            }`,
        );
    }
}

function safePackagePath(path) {
    return typeof path === "string"
        && path.length > 0
        && path !== "."
        && !path.includes("\\")
        && path === posix.normalize(path)
        && !posix.isAbsolute(path)
        && path !== ".."
        && !path.startsWith("../");
}

export function validateStatus(stdout, expectedVersion) {
    let status;
    try {
        status = typeof stdout === "string" ? JSON.parse(stdout) : stdout;
    } catch (error) {
        fail(`update-types --status returned invalid JSON: ${error.message}`);
    }
    exactObjectKeys(
        status,
        [
            "schemaVersion",
            "updateRequired",
            "reasons",
            "providerVersion",
            "typesVersion",
            "currentHash",
            "candidateHash",
            "changedFiles",
        ],
        ["warning"],
        "update-types status",
    );
    if (status.schemaVersion !== STATUS_SCHEMA_VERSION) {
        fail(`unsupported update-types status schema ${JSON.stringify(status.schemaVersion)}`);
    }
    if (typeof status.updateRequired !== "boolean") fail("update-types status updateRequired must be a Boolean");
    if (!Array.isArray(status.reasons) || status.reasons.some((reason) => !STATUS_REASONS.has(reason))) {
        fail("update-types status reasons contains an unsupported value");
    }
    if (new Set(status.reasons).size !== status.reasons.length) {
        fail("update-types status reasons must not contain duplicates");
    }
    if (status.updateRequired !== (status.reasons.length > 0)) {
        fail("update-types status updateRequired must agree with reasons");
    }
    if (status.providerVersion !== expectedVersion) {
        fail(
            `provider artifact version ${
                JSON.stringify(status.providerVersion)
            } does not match release ${expectedVersion}`,
        );
    }
    if (typeof status.typesVersion !== "string" || !VERSION_PATTERN.test(status.typesVersion)) {
        fail("update-types status typesVersion must be an X.Y.Z version");
    }
    if (!HASH_PATTERN.test(status.currentHash) || !HASH_PATTERN.test(status.candidateHash)) {
        fail("update-types status hashes must be lowercase hexadecimal SHA-256 digests");
    }
    if (!Array.isArray(status.changedFiles) || status.changedFiles.some((path) => !safePackagePath(path))) {
        fail("update-types status changedFiles must contain safe package-relative paths");
    }
    if (new Set(status.changedFiles).size !== status.changedFiles.length) {
        fail("update-types status changedFiles must not contain duplicates");
    }
    if (status.updateRequired !== (status.changedFiles.length > 0)) {
        fail("update-types status updateRequired must agree with changedFiles");
    }
    if (status.warning !== undefined && (typeof status.warning !== "string" || !status.warning)) {
        fail("update-types status warning must be a non-empty string");
    }
    return status;
}

function parseLines(value) {
    return value.split("\n").map((line) => line.trim()).filter(Boolean);
}

export function assertPackageChanges(repositoryPaths, expectedPackagePaths) {
    const actual = [...new Set(repositoryPaths)].sort();
    for (const path of actual) {
        if (path !== PACKAGE_PATH && !path.startsWith(`${PACKAGE_PATH}/`)) {
            fail(`unexpected change outside ${PACKAGE_PATH}: ${path}`);
        }
    }
    if (expectedPackagePaths !== undefined) {
        const expected = expectedPackagePaths.map((path) => `${PACKAGE_PATH}/${path}`).sort();
        if (actual.length !== expected.length || actual.some((path, index) => path !== expected[index])) {
            fail(
                `updated files do not match update-types status; expected ${expected.join(", ")}, found ${
                    actual.join(", ") || "none"
                }`,
            );
        }
    }
    return actual;
}

function workingChanges(repositoryDirectory, execute) {
    const commands = [
        ["diff", "--name-only", "--no-ext-diff"],
        ["diff", "--cached", "--name-only", "--no-ext-diff"],
        ["ls-files", "--others", "--exclude-standard"],
    ];
    return commands.flatMap((args) =>
        parseLines(output(
            execute,
            "git",
            ["-C", repositoryDirectory, ...args],
        ))
    );
}

function installDependencies(worktreeDirectory, execute) {
    execute(
        "pnpm",
        [
            "install",
            "--no-frozen-lockfile",
            "--ignore-scripts",
            "--filter",
            ".",
            "--filter",
            "@types/oidc-provider...",
        ],
        { capture: false, cwd: worktreeDirectory },
    );
}

function updaterStatus(packageDirectory, artifactPath, expectedVersion, execute) {
    const result = execute(
        "node",
        ["scripts/update-types.mjs", "--status", "--artifact", artifactPath],
        { capture: true, cwd: packageDirectory },
    );
    if (result.stderr) process.stderr.write(result.stderr);
    return validateStatus(result.stdout, expectedVersion);
}

function runChecks(worktreeDirectory, artifactPath, execute) {
    const packageDirectory = join(worktreeDirectory, PACKAGE_PATH);
    execute(
        "node",
        ["scripts/update-types.mjs", "--check", "--artifact", artifactPath],
        { capture: false, cwd: packageDirectory },
    );
    execute(
        "node",
        ["scripts/update-types.test.mjs", "--artifact", artifactPath],
        { capture: false, cwd: packageDirectory },
    );
    execute(
        "pnpm",
        ["exec", "dprint", "check", PACKAGE_PATH],
        { capture: false, cwd: worktreeDirectory },
    );
    execute(
        "pnpm",
        ["test", "oidc-provider"],
        { capture: false, cwd: worktreeDirectory },
    );
}

function matchingPullRequest(plan, originOwner, execute) {
    const result = execute("gh", [
        "pr",
        "list",
        "--repo",
        UPSTREAM_REPOSITORY,
        "--state",
        "all",
        "--head",
        plan.branch,
        "--json",
        "number,url,state,mergedAt,headRefName,headRepositoryOwner",
        "--limit",
        "100",
    ], { capture: true });
    let pullRequests;
    try {
        pullRequests = JSON.parse(result.stdout);
    } catch (error) {
        fail(`gh pr list returned invalid JSON: ${error.message}`);
    }
    if (!Array.isArray(pullRequests)) fail("gh pr list did not return an array");
    const matching = pullRequests.filter(({ headRefName, headRepositoryOwner }) =>
        headRefName === plan.branch
        && headRepositoryOwner?.login?.toLowerCase() === originOwner.toLowerCase()
    );
    if (matching.length > 1) fail(`multiple pull requests use ${originOwner}:${plan.branch}`);
    if (!matching.length) return undefined;
    const [{ mergedAt, number, state, url }] = matching;
    if (
        !Number.isSafeInteger(number)
        || number <= 0
        || typeof url !== "string"
        || !url
        || !["OPEN", "CLOSED", "MERGED"].includes(state)
        || (mergedAt !== null && typeof mergedAt !== "string")
    ) {
        fail("gh pr list returned invalid pull request metadata");
    }
    return { merged: state === "MERGED" || mergedAt !== null, number, state, url };
}

function successfulPullRequest(pullRequest, plan) {
    if (!pullRequest) return undefined;
    if (pullRequest.state === "OPEN" || pullRequest.merged) return pullRequest;
    fail(
        `${pullRequest.url} for ${plan.branch} was closed without merging; recover or remove the branch before retrying`,
    );
}

function remoteBranchHead(repositoryDirectory, branch, execute) {
    const remote = output(
        execute,
        "git",
        ["-C", repositoryDirectory, "ls-remote", "--heads", "origin", `refs/heads/${branch}`],
    );
    if (!remote) return undefined;
    const rows = parseLines(remote);
    if (rows.length !== 1 || !/^[a-f0-9]{40,64}\s+refs\/heads\//.test(rows[0])) {
        fail(`could not determine the state of origin/${branch}`);
    }
    return rows[0].split(/\s+/)[0];
}

export function pullRequestBody(plan, status) {
    return [
        `Synchronizes the generated oidc-provider declaration mirrors with oidc-provider ${plan.tag}.`,
        "",
        `Rendered declaration hash: \`${status.candidateHash}\`.`,
    ].join("\n");
}

export function submitPreparedBranch({
    execute = runCommand,
    originOwner,
    plan,
    repositoryDirectory,
    status,
    worktreeDirectory,
}) {
    const existing = successfulPullRequest(matchingPullRequest(plan, originOwner, execute), plan);
    if (existing) return { created: false, ...existing };

    if (remoteBranchHead(repositoryDirectory, plan.branch, execute)) {
        fail(
            `origin/${plan.branch} exists without a pull request; refusing to overwrite or adopt the orphaned branch`,
        );
    }
    execute(
        "git",
        ["-C", worktreeDirectory, "push", "--set-upstream", "origin", plan.branch],
        { capture: false },
    );

    const raced = successfulPullRequest(matchingPullRequest(plan, originOwner, execute), plan);
    if (raced) return { created: false, ...raced };

    const result = execute("gh", [
        "pr",
        "create",
        "--repo",
        UPSTREAM_REPOSITORY,
        "--base",
        "master",
        "--head",
        `${originOwner}:${plan.branch}`,
        "--title",
        plan.commitTitle,
        "--body",
        pullRequestBody(plan, status),
    ], { capture: true, cwd: worktreeDirectory });
    const url = result.stdout.trim();
    if (!url) fail("gh pr create did not return a pull request URL");
    return { created: true, url };
}

function localBranchExists(repositoryDirectory, branch, execute) {
    const result = execute(
        "git",
        ["-C", repositoryDirectory, "show-ref", "--verify", "--quiet", `refs/heads/${branch}`],
        { allowStatuses: [0, 1], capture: true },
    );
    return result.status === 0;
}

function verifyPreparedBranch(worktreeDirectory, plan, expectedPackagePaths, execute) {
    const ancestry = execute(
        "git",
        ["-C", worktreeDirectory, "merge-base", "--is-ancestor", "upstream/master", plan.branch],
        { allowStatuses: [0, 1], capture: true },
    );
    if (ancestry.status !== 0) {
        fail(
            `${plan.branch} is not based on the fetched upstream/master; inspect and delete or rename it before retrying`,
        );
    }
    const commitCount = output(
        execute,
        "git",
        ["-C", worktreeDirectory, "rev-list", "--count", `upstream/master..${plan.branch}`],
    );
    const subject = output(
        execute,
        "git",
        ["-C", worktreeDirectory, "log", "-1", "--format=%s", plan.branch],
    );
    if (commitCount !== "1" || subject !== plan.commitTitle) {
        fail(
            `${plan.branch} exists but is not the expected single prepared commit; inspect and delete or rename it before retrying`,
        );
    }
    const changes = parseLines(output(
        execute,
        "git",
        ["-C", worktreeDirectory, "diff", "--name-only", `upstream/master...${plan.branch}`],
    ));
    if (!changes.length) fail(`${plan.branch} does not contain any package changes`);
    assertPackageChanges(changes, expectedPackagePaths);
    const comparison = execute(
        "git",
        ["-C", worktreeDirectory, "diff", "--quiet", plan.branch, "--", PACKAGE_PATH],
        { allowStatuses: [0, 1], capture: true },
    );
    if (comparison.status !== 0) {
        fail(`${plan.branch} does not contain the exact declaration update for ${plan.tag}`);
    }
}

function cleanupTemporaryWorktree(repositoryDirectory, worktreeDirectory, temporaryDirectory, execute) {
    if (worktreeDirectory !== undefined) {
        execute(
            "git",
            ["-C", repositoryDirectory, "worktree", "remove", worktreeDirectory],
            { capture: true },
        );
    }
    rmSync(temporaryDirectory, { force: true, recursive: true });
}

export function synchronize(options, execute = runCommand) {
    const packageDirectory = resolve(fileURLToPath(new URL("..", import.meta.url)));
    const plan = releasePlan(options.tag);
    const preflightResult = preflight(packageDirectory, execute);
    const temporaryDirectory = mkdtempSync(join(tmpdir(), "oidc-provider-sync-"));
    let worktreeDirectory;
    let succeeded = false;

    try {
        const artifactPath = acquireArtifact(options, plan, temporaryDirectory, execute);
        execute(
            "git",
            [
                "-C",
                preflightResult.repositoryDirectory,
                "fetch",
                "--no-tags",
                "upstream",
                "refs/heads/master:refs/remotes/upstream/master",
            ],
            { capture: false },
        );

        const branchExists = localBranchExists(
            preflightResult.repositoryDirectory,
            plan.branch,
            execute,
        );
        worktreeDirectory = join(temporaryDirectory, "worktree");
        execute(
            "git",
            [
                "-C",
                preflightResult.repositoryDirectory,
                "worktree",
                "add",
                "--detach",
                worktreeDirectory,
                "upstream/master",
            ],
            { capture: false },
        );
        installDependencies(worktreeDirectory, execute);

        const worktreePackage = join(worktreeDirectory, PACKAGE_PATH);
        const status = updaterStatus(worktreePackage, artifactPath, plan.version, execute);
        if (status.warning) console.warn(`sync-release: ${status.warning}`);

        const existing = successfulPullRequest(
            matchingPullRequest(plan, preflightResult.originOwner, execute),
            plan,
        );
        if (existing) {
            console.log(`${existing.merged ? "Merged" : "Open"} pull request already exists: ${existing.url}`);
            succeeded = true;
            return { branch: plan.branch, pullRequest: existing.url, reused: true };
        }
        if (remoteBranchHead(preflightResult.repositoryDirectory, plan.branch, execute)) {
            fail(
                `origin/${plan.branch} exists without a pull request; recover or remove the orphaned branch before retrying`,
            );
        }

        if (!status.updateRequired) {
            if (branchExists) {
                fail(
                    `${plan.branch} exists even though ${plan.tag} requires no update; inspect and delete or rename it before retrying`,
                );
            }
            console.log(`No declaration update is required for oidc-provider ${plan.tag}.`);
            succeeded = true;
            return { branch: undefined, updated: false };
        }

        execute(
            "node",
            ["scripts/update-types.mjs", "--artifact", artifactPath],
            { capture: false, cwd: worktreePackage },
        );
        assertPackageChanges(
            workingChanges(worktreeDirectory, execute),
            status.changedFiles,
        );
        runChecks(worktreeDirectory, artifactPath, execute);
        assertPackageChanges(
            workingChanges(worktreeDirectory, execute),
            status.changedFiles,
        );

        if (branchExists) {
            verifyPreparedBranch(worktreeDirectory, plan, status.changedFiles, execute);
            execute(
                "git",
                ["-C", worktreeDirectory, "restore", "--source=HEAD", "--staged", "--worktree", "--", PACKAGE_PATH],
                { capture: true },
            );
            if (workingChanges(worktreeDirectory, execute).length) {
                fail("the temporary validation worktree could not be restored");
            }
        } else {
            execute(
                "git",
                ["-C", worktreeDirectory, "switch", "-c", plan.branch],
                { capture: false },
            );
            execute(
                "git",
                ["-C", worktreeDirectory, "add", "--", PACKAGE_PATH],
                { capture: true },
            );
            const staged = parseLines(output(
                execute,
                "git",
                ["-C", worktreeDirectory, "diff", "--cached", "--name-only"],
            ));
            assertPackageChanges(staged, status.changedFiles);
            const preparedTree = output(
                execute,
                "git",
                ["-C", worktreeDirectory, "write-tree"],
            );
            execute(
                "git",
                ["-C", worktreeDirectory, "commit", "-m", plan.commitTitle],
                { capture: false },
            );
            const committedTree = output(
                execute,
                "git",
                ["-C", worktreeDirectory, "rev-parse", "HEAD^{tree}"],
            );
            if (committedTree !== preparedTree) {
                fail("commit hooks changed the prepared declaration update");
            }
            execute(
                "node",
                ["scripts/update-types.mjs", "--check", "--artifact", artifactPath],
                { capture: false, cwd: worktreePackage },
            );
            const committed = parseLines(output(
                execute,
                "git",
                ["-C", worktreeDirectory, "diff-tree", "--no-commit-id", "--name-only", "-r", "HEAD"],
            ));
            assertPackageChanges(committed, status.changedFiles);
            if (workingChanges(worktreeDirectory, execute).length) {
                fail("the prepared branch is not clean after committing");
            }
        }

        let pullRequest;
        if (options.submit) {
            const submitted = submitPreparedBranch({
                execute,
                originOwner: preflightResult.originOwner,
                plan,
                repositoryDirectory: preflightResult.repositoryDirectory,
                status,
                worktreeDirectory,
            });
            pullRequest = submitted.url;
            console.log(`${submitted.created ? "Created" : "Reused"} pull request: ${submitted.url}`);
        } else {
            console.log(`Prepared local branch ${plan.branch}.`);
            console.log(`Inspect it with: git show --stat ${plan.branch}`);
            const source = options.artifact === undefined
                ? ["--run-id", options.runId]
                : ["--artifact", options.artifact];
            console.log(
                `Submit it with: ${
                    shellCommand("node", [
                        fileURLToPath(import.meta.url),
                        "--tag",
                        plan.tag,
                        ...source,
                        "--submit",
                    ])
                }`,
            );
        }

        succeeded = true;
        return { branch: plan.branch, pullRequest, updated: true };
    } catch (error) {
        error.temporaryDirectory = temporaryDirectory;
        throw error;
    } finally {
        if (succeeded && !options.keepTemp) {
            cleanupTemporaryWorktree(
                preflightResult.repositoryDirectory,
                worktreeDirectory,
                temporaryDirectory,
                execute,
            );
        } else if (temporaryDirectory) {
            console.error(`sync-release: preserved temporary state at ${temporaryDirectory}`);
        }
    }
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
    try {
        synchronize(parseArguments(process.argv.slice(2)));
    } catch (error) {
        console.error(`sync-release: ${error.message}`);
        process.exitCode = 1;
    }
}
