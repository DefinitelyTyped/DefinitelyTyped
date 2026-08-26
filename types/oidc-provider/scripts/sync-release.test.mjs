import assert from "node:assert/strict";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

import {
    assertPackageChanges,
    githubRepository,
    parseArguments,
    pullRequestBody,
    releasePlan,
    shellCommand,
    submitPreparedBranch,
    synchronize,
    validateStatus,
} from "./sync-release.mjs";

const hash = "a".repeat(64);
const candidateHash = "b".repeat(64);
const packageDirectory = resolve(fileURLToPath(new URL("..", import.meta.url)));
const repositoryDirectory = resolve(packageDirectory, "..", "..");

function status(overrides = {}) {
    return {
        schemaVersion: 1,
        updateRequired: true,
        reasons: ["declarations"],
        providerVersion: "9.12.3",
        typesVersion: "9.11.9999",
        currentHash: hash,
        candidateHash,
        changedFiles: ["index.d.ts"],
        ...overrides,
    };
}

describe("sync-release argument and status validation", () => {
    it("accepts exactly one artifact source and resolves local paths", () => {
        assert.deepEqual(
            parseArguments(["--tag", "v9.12.3", "--artifact", "artifact.json"], "/fixture"),
            {
                artifact: "/fixture/artifact.json",
                keepTemp: false,
                runId: undefined,
                submit: false,
                tag: "v9.12.3",
            },
        );
        assert.deepEqual(
            parseArguments([
                "--run-id",
                "12345",
                "--keep-temp",
                "--submit",
                "--tag",
                "v9.12.3",
            ]),
            {
                artifact: undefined,
                keepTemp: true,
                runId: "12345",
                submit: true,
                tag: "v9.12.3",
            },
        );
    });

    for (
        const [label, argv, pattern] of [
            ["missing tag", ["--artifact", "a.json"], /--tag is required/],
            ["invalid tag", ["--tag", "9.12.3", "--artifact", "a.json"], /form vX\.Y\.Z/],
            ["missing source", ["--tag", "v9.12.3"], /exactly one/],
            [
                "both sources",
                ["--tag", "v9.12.3", "--artifact", "a.json", "--run-id", "123"],
                /exactly one/,
            ],
            ["invalid run", ["--tag", "v9.12.3", "--run-id", "latest"], /positive GitHub Actions/],
            ["unknown option", ["--tag", "v9.12.3", "--artifact", "a.json", "--force"], /unknown/],
            [
                "duplicate option",
                ["--tag", "v9.12.3", "--tag", "v9.12.4", "--artifact", "a.json"],
                /only be specified once/,
            ],
        ]
    ) {
        it(`rejects ${label}`, () => {
            assert.throws(() => parseArguments(argv), pattern);
        });
    }

    it("derives stable artifact, branch, commit, and pull request metadata", () => {
        const plan = releasePlan("v9.12.3");
        assert.deepEqual(plan, {
            artifactName: "oidc-provider-types-v9.12.3",
            branch: "oidc-provider-v9.12.3",
            commitTitle: "[oidc-provider] sync declarations for v9.12.3",
            tag: "v9.12.3",
            version: "9.12.3",
        });
        assert.equal(
            pullRequestBody(plan, status()),
            [
                "Synchronizes the generated oidc-provider declaration mirrors with oidc-provider v9.12.3.",
                "",
                `Rendered declaration hash: \`${candidateHash}\`.`,
            ].join("\n"),
        );
    });

    it("prints copyable shell commands without evaluating artifact paths", () => {
        assert.equal(
            shellCommand("node", ["script.mjs", "--artifact", "/tmp/a$(touch pwned)'types.json"]),
            `node script.mjs --artifact '/tmp/a$(touch pwned)'"'"'types.json'`,
        );
    });

    it("accepts the updater status contract and enforces the release tag", () => {
        assert.deepEqual(validateStatus(`${JSON.stringify(status())}\n`, "9.12.3"), status());
        assert.throws(() => validateStatus(status(), "9.12.4"), /does not match release/);
    });

    for (
        const [label, value, pattern] of [
            ["invalid JSON", "not-json", /invalid JSON/],
            ["schema", status({ schemaVersion: 2 }), /unsupported.*schema/],
            ["reason", status({ reasons: ["unknown"] }), /unsupported value/],
            ["duplicate reason", status({ reasons: ["declarations", "declarations"] }), /duplicates/],
            ["reason invariant", status({ reasons: [] }), /agree with reasons/],
            ["hash", status({ candidateHash: "bad" }), /SHA-256/],
            ["unsafe path", status({ changedFiles: ["../package.json"] }), /safe package-relative/],
            ["duplicate path", status({ changedFiles: ["index.d.ts", "index.d.ts"] }), /duplicates/],
            [
                "file invariant",
                status({ updateRequired: false, reasons: [], changedFiles: ["index.d.ts"] }),
                /agree with changedFiles/,
            ],
            ["empty warning", status({ warning: "" }), /non-empty string/],
            ["extra property", { ...status(), extra: true }, /unexpected extra/],
        ]
    ) {
        it(`rejects ${label} status`, () => {
            assert.throws(() => validateStatus(value, "9.12.3"), pattern);
        });
    }

    it("allows a warning-bearing no-update status", () => {
        const value = status({
            changedFiles: [],
            reasons: [],
            updateRequired: false,
            warning: "older release",
        });
        assert.deepEqual(validateStatus(value, "9.12.3"), value);
    });

    it("allows only the exact package-relative changes reported by the updater", () => {
        assert.deepEqual(
            assertPackageChanges(
                ["types/oidc-provider/lib/helpers/grants.d.ts", "types/oidc-provider/index.d.ts"],
                ["index.d.ts", "lib/helpers/grants.d.ts"],
            ),
            ["types/oidc-provider/index.d.ts", "types/oidc-provider/lib/helpers/grants.d.ts"],
        );
        assert.throws(
            () => assertPackageChanges(["pnpm-lock.yaml"], ["index.d.ts"]),
            /outside types\/oidc-provider/,
        );
        assert.throws(
            () => assertPackageChanges(["types/oidc-provider/index.d.ts"], ["package.json"]),
            /do not match/,
        );
    });

    it("parses SSH and HTTPS GitHub remotes", () => {
        assert.deepEqual(githubRepository("git@github.com:panva/DefinitelyTyped.git"), {
            owner: "panva",
            repository: "DefinitelyTyped",
        });
        assert.deepEqual(githubRepository("ssh://git@github.com/panva/DefinitelyTyped.git"), {
            owner: "panva",
            repository: "DefinitelyTyped",
        });
        assert.deepEqual(githubRepository("https://github.com/DefinitelyTyped/DefinitelyTyped.git"), {
            owner: "DefinitelyTyped",
            repository: "DefinitelyTyped",
        });
    });

    for (
        const remote of [
            "https://evilgithub.com/DefinitelyTyped/DefinitelyTyped.git",
            "git@evilgithub.com:DefinitelyTyped/DefinitelyTyped.git",
            "https://github.com.evil.example/DefinitelyTyped/DefinitelyTyped.git",
            "https://token@github.com/DefinitelyTyped/DefinitelyTyped.git",
        ]
    ) {
        it(`rejects the lookalike or credential-bearing remote ${remote}`, () => {
            assert.throws(() => githubRepository(remote), /exact github\.com/);
        });
    }
});

function submissionFixture(responses) {
    const calls = [];
    const execute = (command, args, options = {}) => {
        calls.push({ args, command, options });
        const response = responses.shift();
        assert.ok(response, `unexpected command: ${command} ${args.join(" ")}`);
        if (response.error) throw response.error;
        return { status: 0, stderr: "", stdout: response.stdout || "" };
    };
    const plan = releasePlan("v9.12.3");
    const invoke = () =>
        submitPreparedBranch({
            execute,
            originOwner: "panva",
            plan,
            repositoryDirectory: "/repo",
            status: status(),
            worktreeDirectory: "/worktree",
        });
    return { calls, invoke, plan };
}

describe("sync-release submission safety", () => {
    it("reuses an existing open pull request without pushing or creating another", () => {
        const fixture = submissionFixture([
            {
                stdout:
                    "[{\"headRefName\":\"oidc-provider-v9.12.3\",\"headRepositoryOwner\":{\"login\":\"panva\"},\"mergedAt\":null,\"number\":123,\"state\":\"OPEN\",\"url\":\"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/123\"}]\n",
            },
        ]);
        assert.deepEqual(fixture.invoke(), {
            created: false,
            merged: false,
            number: 123,
            state: "OPEN",
            url: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/123",
        });
        assert.equal(fixture.calls.length, 1);
        assert.deepEqual(fixture.calls[0].args.slice(0, 2), ["pr", "list"]);
    });

    it("pushes a new branch without force and creates the deterministic pull request", () => {
        const fixture = submissionFixture([
            { stdout: "[]\n" },
            { stdout: "" },
            { stdout: "" },
            { stdout: "[]\n" },
            { stdout: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/456\n" },
        ]);
        assert.deepEqual(fixture.invoke(), {
            created: true,
            url: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/456",
        });
        const push = fixture.calls.find(({ args }) => args.includes("push"));
        assert.ok(push);
        assert.deepEqual(push.args, [
            "-C",
            "/worktree",
            "push",
            "--set-upstream",
            "origin",
            fixture.plan.branch,
        ]);
        assert.equal(push.args.some((argument) => argument === "-f" || argument.startsWith("--force")), false);
        const create = fixture.calls.at(-1);
        assert.deepEqual(create.args.slice(0, 2), ["pr", "create"]);
        assert.ok(create.args.includes(fixture.plan.commitTitle));
    });

    it("refuses to overwrite or adopt an orphaned remote branch", () => {
        const fixture = submissionFixture([
            { stdout: "[]\n" },
            { stdout: `${"d".repeat(40)}\trefs/heads/oidc-provider-v9.12.3\n` },
        ]);
        assert.throws(fixture.invoke, /orphaned branch/);
        assert.equal(fixture.calls.some(({ args }) => args.includes("push")), false);
        assert.equal(fixture.calls.some(({ args }) => args.includes("create")), false);
    });

    it("treats a merged pull request as a successful no-op", () => {
        const fixture = submissionFixture([
            {
                stdout:
                    "[{\"headRefName\":\"oidc-provider-v9.12.3\",\"headRepositoryOwner\":{\"login\":\"panva\"},\"mergedAt\":\"2026-08-26T10:00:00Z\",\"number\":789,\"state\":\"MERGED\",\"url\":\"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/789\"}]\n",
            },
        ]);
        assert.deepEqual(fixture.invoke(), {
            created: false,
            merged: true,
            number: 789,
            state: "MERGED",
            url: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/789",
        });
        assert.equal(fixture.calls.some(({ args }) => args.includes("push")), false);
    });

    it("requires recovery for a pull request closed without merging", () => {
        const fixture = submissionFixture([
            {
                stdout:
                    "[{\"headRefName\":\"oidc-provider-v9.12.3\",\"headRepositoryOwner\":{\"login\":\"panva\"},\"mergedAt\":null,\"number\":987,\"state\":\"CLOSED\",\"url\":\"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/987\"}]\n",
            },
        ]);
        assert.throws(fixture.invoke, /closed without merging/);
        assert.equal(fixture.calls.length, 1);
    });
});

function orchestrationFixture({
    branchExists = false,
    downloadLayout = "valid",
    failApply = false,
    failStatus = false,
    keepTemp = false,
    mutateCommit = false,
    pullRequest,
    runId = false,
} = {}) {
    const fixtureDirectory = mkdtempSync(join(tmpdir(), "sync-release-test-"));
    const artifactPath = join(fixtureDirectory, "oidc-provider-types.json");
    writeFileSync(artifactPath, "{}\n");

    const calls = [];
    let applied = false;
    let committed = false;
    let staged = false;
    let downloadDirectory;
    let worktreeDirectory;
    const updatedStatus = status();

    const result = (stdout = "", statusCode = 0) => ({ status: statusCode, stderr: "", stdout });
    const execute = (command, args, options = {}) => {
        calls.push({ args, command, options });
        if (command === "gh") {
            if (args[0] === "--version") return result("gh version 2.98.0\n");
            if (args[0] === "auth") return result();
            if (args[0] === "api") return result("panva\n");
            if (args[0] === "pr" && args[1] === "list") {
                return result(`${JSON.stringify(pullRequest ? [pullRequest] : [])}\n`);
            }
            if (args[0] === "run" && args[1] === "download") {
                downloadDirectory = args[args.indexOf("--dir") + 1];
                if (downloadLayout !== "missing") {
                    writeFileSync(join(downloadDirectory, "oidc-provider-types.json"), "{}\n");
                }
                if (downloadLayout === "extra") {
                    writeFileSync(join(downloadDirectory, "unexpected.json"), "{}\n");
                }
                return result();
            }
        }
        if (command === "pnpm") {
            if (args[0] === "--version") return result("10.30.1\n");
            return result();
        }
        if (command === "node") {
            if (args.includes("--status")) {
                if (failStatus) throw new Error("injected artifact validation failure");
                return result(`${JSON.stringify(updatedStatus)}\n`);
            }
            if (args[0] === "scripts/update-types.mjs" && args.includes("--artifact") && !args.includes("--check")) {
                if (failApply) throw new Error("injected updater failure");
                applied = true;
            }
            return result();
        }
        if (command !== "git") throw new Error(`unexpected command ${command}`);

        if (args[0] === "--version") return result("git version 2.51.0\n");
        if (args.includes("rev-parse") && args.includes("--show-toplevel")) {
            return result(`${repositoryDirectory}\n`);
        }
        if (args.includes("rev-parse") && args.includes("HEAD^{tree}")) {
            return result(`${mutateCommit ? "changed-tree" : "prepared-tree"}\n`);
        }
        if (args.includes("config")) {
            return result(`${args.at(-1) === "user.name" ? "Test User" : "test@example.com"}\n`);
        }
        if (args.includes("remote") && args.includes("get-url")) {
            return result(
                args.at(-1) === "upstream"
                    ? "git@github.com:DefinitelyTyped/DefinitelyTyped.git\n"
                    : "git@github.com:panva/DefinitelyTyped.git\n",
            );
        }
        if (args.includes("fetch") || args.includes("switch")) return result();
        if (args.includes("ls-remote")) return result();
        if (args.includes("show-ref")) return result("", branchExists ? 0 : 1);
        if (args.includes("worktree") && args.includes("add")) {
            const addIndex = args.indexOf("add");
            worktreeDirectory = args[addIndex + (args[addIndex + 1] === "--detach" ? 2 : 1)];
            mkdirSync(join(worktreeDirectory, "types", "oidc-provider"), { recursive: true });
            return result();
        }
        if (args.includes("worktree") && args.includes("remove")) return result();
        if (args.includes("merge-base")) return result();
        if (args.includes("rev-list")) return result("1\n");
        if (args.includes("log")) return result("[oidc-provider] sync declarations for v9.12.3\n");
        if (args.includes("diff-tree")) return result("types/oidc-provider/index.d.ts\n");
        if (args.includes("diff") && args.some((argument) => argument.startsWith("upstream/master..."))) {
            return result("types/oidc-provider/index.d.ts\n");
        }
        if (args.includes("diff") && args.includes("--quiet")) return result();
        if (args.includes("diff") && args.includes("--cached")) {
            return result(staged && !committed ? "types/oidc-provider/index.d.ts\n" : "");
        }
        if (args.includes("write-tree")) return result("prepared-tree\n");
        if (args.includes("diff")) {
            return result(applied && !staged && !committed ? "types/oidc-provider/index.d.ts\n" : "");
        }
        if (args.includes("ls-files")) return result();
        if (args.includes("add")) {
            staged = true;
            return result();
        }
        if (args.includes("commit")) {
            committed = true;
            return result();
        }
        if (args.includes("restore")) {
            applied = false;
            staged = false;
            return result();
        }
        throw new Error(`unexpected git command: ${args.join(" ")}`);
    };

    const options = parseArguments([
        "--tag",
        "v9.12.3",
        ...(runId ? ["--run-id", "123456789"] : ["--artifact", artifactPath]),
        ...(keepTemp ? ["--keep-temp"] : []),
    ]);
    return {
        calls,
        cleanup() {
            rmSync(fixtureDirectory, { force: true, recursive: true });
            if (worktreeDirectory) rmSync(dirname(worktreeDirectory), { force: true, recursive: true });
        },
        execute,
        get temporaryDirectory() {
            return worktreeDirectory
                ? dirname(worktreeDirectory)
                : downloadDirectory
                ? dirname(downloadDirectory)
                : undefined;
        },
        options,
    };
}

describe("sync-release worktree lifecycle", () => {
    it("removes the temporary worktree after preparing a local branch", (t) => {
        t.mock.method(console, "log", () => {});
        const fixture = orchestrationFixture();
        try {
            assert.deepEqual(synchronize(fixture.options, fixture.execute), {
                branch: "oidc-provider-v9.12.3",
                pullRequest: undefined,
                updated: true,
            });
            assert.equal(existsSync(fixture.temporaryDirectory), false);
            assert.ok(fixture.calls.some(({ args }) => args.includes("commit")));
            assert.ok(fixture.calls.some(({ args }) => args.includes("remove")));
            const install = fixture.calls.find(({ args, command }) => command === "pnpm" && args[0] === "install");
            assert.ok(install.args.includes("--no-frozen-lockfile"));
            assert.ok(install.args.includes("--ignore-scripts"));
        } finally {
            fixture.cleanup();
        }
    });

    it("preserves the temporary worktree after success with --keep-temp", (t) => {
        t.mock.method(console, "log", () => {});
        t.mock.method(console, "error", () => {});
        const fixture = orchestrationFixture({ keepTemp: true });
        try {
            synchronize(fixture.options, fixture.execute);
            assert.equal(existsSync(fixture.temporaryDirectory), true);
            assert.equal(fixture.calls.some(({ args }) => args.includes("remove")), false);
        } finally {
            fixture.cleanup();
        }
    });

    it("preserves the temporary worktree after a failure", (t) => {
        t.mock.method(console, "error", () => {});
        const fixture = orchestrationFixture({ failApply: true });
        try {
            assert.throws(
                () => synchronize(fixture.options, fixture.execute),
                /injected updater failure/,
            );
            assert.equal(existsSync(fixture.temporaryDirectory), true);
            assert.equal(fixture.calls.some(({ args }) => args.includes("remove")), false);
        } finally {
            fixture.cleanup();
        }
    });

    it("validates the artifact before reusing an existing pull request", (t) => {
        t.mock.method(console, "error", () => {});
        const fixture = orchestrationFixture({
            failStatus: true,
            pullRequest: {
                headRefName: "oidc-provider-v9.12.3",
                headRepositoryOwner: { login: "panva" },
                mergedAt: null,
                number: 123,
                state: "OPEN",
                url: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/123",
            },
        });
        try {
            assert.throws(
                () => synchronize(fixture.options, fixture.execute),
                /injected artifact validation failure/,
            );
            assert.equal(
                fixture.calls.some(({ args, command }) => command === "gh" && args[0] === "pr" && args[1] === "list"),
                false,
            );
        } finally {
            fixture.cleanup();
        }
    });

    it("revalidates the committed files after commit hooks run", (t) => {
        t.mock.method(console, "error", () => {});
        const fixture = orchestrationFixture({ mutateCommit: true });
        try {
            assert.throws(
                () => synchronize(fixture.options, fixture.execute),
                /commit hooks changed the prepared declaration update/,
            );
            const exactChecks = fixture.calls.filter(({ args, command }) =>
                command === "node" && args.includes("--check")
            );
            assert.equal(exactChecks.length, 1);
            assert.equal(fixture.calls.some(({ args }) => args.includes("push")), false);
        } finally {
            fixture.cleanup();
        }
    });

    it("reuses an existing matching prepared local branch", (t) => {
        t.mock.method(console, "log", () => {});
        const fixture = orchestrationFixture({ branchExists: true });
        try {
            const result = synchronize(fixture.options, fixture.execute);
            assert.equal(result.branch, "oidc-provider-v9.12.3");
            assert.equal(fixture.calls.some(({ args }) => args.includes("switch")), false);
            assert.equal(fixture.calls.some(({ args }) => args.includes("commit")), false);
            assert.ok(
                fixture.calls.some(({ args }) =>
                    args.some((argument) => argument === "upstream/master...oidc-provider-v9.12.3")
                ),
            );
            assert.equal(existsSync(fixture.temporaryDirectory), false);
        } finally {
            fixture.cleanup();
        }
    });

    it("downloads the exact release artifact and consumes its sole JSON file", (t) => {
        t.mock.method(console, "log", () => {});
        const fixture = orchestrationFixture({ runId: true });
        try {
            synchronize(fixture.options, fixture.execute);
            const download = fixture.calls.find(({ args, command }) => command === "gh" && args[0] === "run");
            assert.deepEqual(download.args, [
                "run",
                "download",
                "123456789",
                "--repo",
                "panva/node-oidc-provider",
                "--name",
                "oidc-provider-types-v9.12.3",
                "--dir",
                download.args.at(-1),
            ]);
            assert.equal(existsSync(fixture.temporaryDirectory), false);
        } finally {
            fixture.cleanup();
        }
    });

    for (const downloadLayout of ["missing", "extra"]) {
        it(`rejects a downloaded artifact with a ${downloadLayout} top-level entry`, (t) => {
            t.mock.method(console, "error", () => {});
            const fixture = orchestrationFixture({ downloadLayout, runId: true });
            try {
                assert.throws(
                    () => synchronize(fixture.options, fixture.execute),
                    /exactly one top-level file named oidc-provider-types\.json/,
                );
                assert.equal(existsSync(fixture.temporaryDirectory), true);
                assert.equal(fixture.calls.some(({ args }) => args.includes("fetch")), false);
            } finally {
                fixture.cleanup();
            }
        });
    }
});
