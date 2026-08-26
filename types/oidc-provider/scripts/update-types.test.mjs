#!/usr/bin/env node

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const [providerArgument, ...extraArguments] = process.argv.slice(2);
if (!providerArgument || extraArguments.length) {
    throw new TypeError("usage: node scripts/update-types.test.mjs <provider-checkout>");
}

const packageDirectory = resolve(fileURLToPath(new URL("..", import.meta.url)));
const repositoryDirectory = resolve(packageDirectory, "..", "..");
const providerDirectory = resolve(providerArgument);
const providerPackage = JSON.parse(readFileSync(join(providerDirectory, "package.json"), "utf8"));

function run(command, args, cwd) {
    return spawnSync(command, args, {
        cwd,
        encoding: "utf8",
        maxBuffer: 16 * 1024 * 1024,
    });
}

const generated = run(
    process.execPath,
    ["docs/update-configuration.js", "--types-json"],
    providerDirectory,
);
assert.equal(generated.status, 0, generated.stderr);
const baselineArtifact = JSON.parse(generated.stdout);

function canonicalContent(artifact) {
    return JSON.stringify({
        indexFragments: {
            contracts: artifact.indexFragments.contracts,
            providerMembers: artifact.indexFragments.providerMembers,
            relatedContracts: artifact.indexFragments.relatedContracts,
        },
        files: {
            "lib/helpers/grants.d.ts": artifact.files["lib/helpers/grants.d.ts"],
        },
    });
}

function contentHash(artifact) {
    return createHash("sha256").update(canonicalContent(artifact)).digest("hex");
}

function nextPatch(version) {
    const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
    assert.ok(match, `expected a stable provider version, received ${version}`);
    return `${match[1]}.${match[2]}.${Number(match[3]) + 1}`;
}

const temporaryDirectory = mkdtempSync(join(tmpdir(), "oidc-provider-types-"));

try {
    const temporaryRepository = join(temporaryDirectory, "DefinitelyTyped");
    const temporaryPackage = join(temporaryRepository, "types", "oidc-provider");
    const temporaryScripts = join(temporaryPackage, "scripts");
    const temporaryGrants = join(temporaryPackage, "lib", "helpers");
    const fakeProvider = join(temporaryDirectory, "provider");
    const fakeProviderDocs = join(fakeProvider, "docs");

    mkdirSync(temporaryScripts, { recursive: true });
    mkdirSync(temporaryGrants, { recursive: true });
    mkdirSync(fakeProviderDocs, { recursive: true });
    mkdirSync(join(temporaryRepository, "node_modules"), { recursive: true });

    for (const path of ["index.d.ts", "package.json"]) {
        copyFileSync(join(packageDirectory, path), join(temporaryPackage, path));
    }
    copyFileSync(
        join(repositoryDirectory, ".dprint.jsonc"),
        join(temporaryRepository, ".dprint.jsonc"),
    );
    copyFileSync(
        join(packageDirectory, "lib", "helpers", "grants.d.ts"),
        join(temporaryGrants, "grants.d.ts"),
    );
    copyFileSync(
        join(packageDirectory, "scripts", "update-types.mjs"),
        join(temporaryScripts, "update-types.mjs"),
    );
    symlinkSync(
        join(repositoryDirectory, "node_modules", "dprint"),
        join(temporaryRepository, "node_modules", "dprint"),
        "dir",
    );

    function writeProvider(artifact, version = providerPackage.version) {
        writeFileSync(
            join(fakeProvider, "package.json"),
            `${JSON.stringify({ name: "oidc-provider", version })}\n`,
        );
        writeFileSync(
            join(fakeProviderDocs, "update-configuration.js"),
            `process.stdout.write(${JSON.stringify(`${JSON.stringify(artifact)}\n`)});\n`,
        );
    }

    function check() {
        return run(
            process.execPath,
            ["scripts/update-types.mjs", "--check", fakeProvider],
            temporaryPackage,
        );
    }

    function expectFailure(label, pattern) {
        const result = check();
        assert.notEqual(result.status, 0, `${label} unexpectedly passed`);
        assert.match(`${result.stdout}\n${result.stderr}`, pattern, label);
    }

    writeProvider(baselineArtifact);
    const baseline = check();
    assert.equal(
        baseline.status,
        0,
        `the baseline artifact must pass --check\n${baseline.stdout}\n${baseline.stderr}`,
    );

    const schemaMismatch = structuredClone(baselineArtifact);
    schemaMismatch.schemaVersion += 1;
    writeProvider(schemaMismatch);
    expectFailure("schema mismatch", /unsupported provider types schema version/);

    const versionMismatch = structuredClone(baselineArtifact);
    versionMismatch.providerVersion = nextPatch(providerPackage.version);
    writeProvider(versionMismatch);
    expectFailure("artifact/package version mismatch", /provider types artifact is for/);

    const hashMismatch = structuredClone(baselineArtifact);
    hashMismatch.hash = `${hashMismatch.hash.slice(0, -1)}${hashMismatch.hash.endsWith("0") ? "1" : "0"}`;
    writeProvider(hashMismatch);
    expectFailure("content hash mismatch", /provider types artifact hash mismatch/);

    const missingFragment = structuredClone(baselineArtifact);
    delete missingFragment.indexFragments.providerMembers;
    writeProvider(missingFragment);
    expectFailure("missing fragment", /indexFragments must have exactly these keys/);

    const patchDrift = structuredClone(baselineArtifact);
    patchDrift.providerVersion = nextPatch(providerPackage.version);
    writeProvider(patchDrift, patchDrift.providerVersion);
    expectFailure("provider patch provenance drift", /declaration mirrors are not up to date/);

    const normalizedContentDrift = structuredClone(baselineArtifact);
    normalizedContentDrift.indexFragments.contracts += "\n\n";
    normalizedContentDrift.hash = contentHash(normalizedContentDrift);
    writeProvider(normalizedContentDrift);
    expectFailure("normalized content hash drift", /declaration mirrors are not up to date/);

    writeProvider(baselineArtifact);
    const indexPath = join(temporaryPackage, "index.d.ts");
    const index = readFileSync(indexPath, "utf8");
    const altered = index.replace("export type TokenFormat =", "export type AlteredTokenFormat =");
    assert.notEqual(altered, index, "expected to alter the generated contracts region");
    writeFileSync(indexPath, altered);
    expectFailure("altered generated region", /declaration mirrors are not up to date/);

    process.stdout.write("update-types failure-path checks passed.\n");
} finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
}
