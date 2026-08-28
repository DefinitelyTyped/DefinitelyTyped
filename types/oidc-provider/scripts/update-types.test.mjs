#!/usr/bin/env node

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const arguments_ = process.argv.slice(2);
let providerDirectory;
let baselineArtifact;
if (arguments_.length === 1 && arguments_[0] !== "--artifact") {
    providerDirectory = resolve(arguments_[0]);
} else if (arguments_.length === 2 && arguments_[0] === "--artifact") {
    baselineArtifact = JSON.parse(readFileSync(resolve(arguments_[1]), "utf8"));
} else {
    throw new TypeError(
        "usage: node scripts/update-types.test.mjs (<provider-checkout> | --artifact <types-json-path>)",
    );
}

const packageDirectory = resolve(fileURLToPath(new URL("..", import.meta.url)));
const repositoryDirectory = resolve(packageDirectory, "..", "..");

function run(command, args, cwd) {
    return spawnSync(command, args, {
        cwd,
        encoding: "utf8",
        maxBuffer: 16 * 1024 * 1024,
    });
}

if (providerDirectory !== undefined) {
    const generated = run(
        process.execPath,
        ["docs/update-configuration.js", "--types-json"],
        providerDirectory,
    );
    assert.equal(generated.status, 0, generated.stderr);
    baselineArtifact = JSON.parse(generated.stdout);
}

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

function updateHash(artifact) {
    artifact.hash = createHash("sha256").update(canonicalContent(artifact)).digest("hex");
    return artifact;
}

function parseVersion(version) {
    const match = /^(\d+)\.(\d+)\.(\d+)/.exec(version);
    assert.ok(match, `expected a stable provider version, received ${version}`);
    return { major: Number(match[1]), minor: Number(match[2]), patch: Number(match[3]) };
}

function version(major, minor, patch = 0) {
    return `${major}.${minor}.${patch}`;
}

const baselineVersion = parseVersion(baselineArtifact.providerVersion);
const patchVersion = version(baselineVersion.major, baselineVersion.minor, baselineVersion.patch + 1);
const minorVersion = version(baselineVersion.major, baselineVersion.minor + 1);
const majorVersion = version(baselineVersion.major + 1, 0);
const olderVersion = baselineVersion.minor > 0
    ? version(baselineVersion.major, baselineVersion.minor - 1, 999)
    : version(baselineVersion.major - 1, 999, 999);

const temporaryDirectory = mkdtempSync(join(tmpdir(), "oidc-provider-types-"));

try {
    const temporaryRepository = join(temporaryDirectory, "DefinitelyTyped");
    const temporaryPackage = join(temporaryRepository, "types", "oidc-provider");
    const temporaryScripts = join(temporaryPackage, "scripts");
    const temporaryGrants = join(temporaryPackage, "lib", "helpers");
    const fakeProvider = join(temporaryDirectory, "provider");
    const fakeProviderDocs = join(fakeProvider, "docs");
    const artifactPath = join(temporaryDirectory, "types.json");
    const indexPath = join(temporaryPackage, "index.d.ts");
    const packagePath = join(temporaryPackage, "package.json");
    const grantsPath = join(temporaryGrants, "grants.d.ts");

    mkdirSync(temporaryScripts, { recursive: true });
    mkdirSync(temporaryGrants, { recursive: true });
    mkdirSync(fakeProviderDocs, { recursive: true });
    mkdirSync(join(temporaryRepository, "node_modules"), { recursive: true });

    for (const path of ["index.d.ts", "package.json"]) {
        copyFileSync(join(packageDirectory, path), join(temporaryPackage, path));
    }
    copyFileSync(join(repositoryDirectory, ".dprint.jsonc"), join(temporaryRepository, ".dprint.jsonc"));
    copyFileSync(join(packageDirectory, "lib", "helpers", "grants.d.ts"), grantsPath);
    copyFileSync(join(packageDirectory, "scripts", "update-types.mjs"), join(temporaryScripts, "update-types.mjs"));
    symlinkSync(
        join(repositoryDirectory, "node_modules", "dprint"),
        join(temporaryRepository, "node_modules", "dprint"),
        "dir",
    );

    function restorePackage() {
        copyFileSync(join(packageDirectory, "index.d.ts"), indexPath);
        copyFileSync(join(packageDirectory, "package.json"), packagePath);
        copyFileSync(join(packageDirectory, "lib", "helpers", "grants.d.ts"), grantsPath);
    }

    function writeProvider(artifact, providerVersion = artifact.providerVersion) {
        writeFileSync(
            join(fakeProvider, "package.json"),
            `${JSON.stringify({ name: "oidc-provider", version: providerVersion })}\n`,
        );
        writeFileSync(
            join(fakeProviderDocs, "update-configuration.js"),
            `process.stdout.write(${JSON.stringify(`${JSON.stringify(artifact)}\n`)});\n`,
        );
    }

    function writeArtifact(artifact) {
        writeFileSync(artifactPath, `${JSON.stringify(artifact)}\n`);
    }

    function updater(args) {
        return run(process.execPath, ["scripts/update-types.mjs", ...args], temporaryPackage);
    }

    function check(args = [fakeProvider]) {
        return updater(["--check", ...args]);
    }

    function status(artifact) {
        writeArtifact(artifact);
        const result = updater(["--status", "--artifact", artifactPath]);
        assert.equal(result.status, 0, result.stderr);
        assert.equal(result.stderr, "", "status diagnostics must not pollute stderr on success");
        assert.doesNotThrow(() => JSON.parse(result.stdout), "status stdout must be JSON only");
        return JSON.parse(result.stdout);
    }

    function expectFailure(label, args, pattern) {
        const result = updater(args);
        assert.notEqual(result.status, 0, `${label} unexpectedly passed`);
        assert.match(`${result.stdout}\n${result.stderr}`, pattern, label);
    }

    function withProviderVersion(artifact, providerVersion) {
        const result = structuredClone(artifact);
        result.providerVersion = providerVersion;
        return result;
    }

    function contractsChange(artifact, text = "export interface StatusOnlyContract { value: string; }") {
        const result = structuredClone(artifact);
        result.indexFragments.contracts += `\n${text}\n`;
        return updateHash(result);
    }

    writeProvider(baselineArtifact);
    writeArtifact(baselineArtifact);
    const baselineCheckoutCheck = check();
    assert.equal(
        baselineCheckoutCheck.status,
        0,
        `the baseline checkout must pass --check\n${baselineCheckoutCheck.stdout}\n${baselineCheckoutCheck.stderr}`,
    );
    const baselineArtifactCheck = check(["--artifact", artifactPath]);
    assert.equal(baselineArtifactCheck.status, 0, baselineArtifactCheck.stderr);
    const baselineStatus = status(baselineArtifact);
    const baselineCheckoutStatus = updater(["--status", fakeProvider]);
    assert.equal(baselineCheckoutStatus.status, 0, baselineCheckoutStatus.stderr);
    assert.deepEqual(JSON.parse(baselineCheckoutStatus.stdout), baselineStatus);
    assert.deepEqual(baselineStatus, {
        schemaVersion: 1,
        updateRequired: false,
        reasons: [],
        providerVersion: baselineArtifact.providerVersion,
        typesVersion: JSON.parse(readFileSync(packagePath, "utf8")).version,
        currentHash: baselineStatus.currentHash,
        candidateHash: baselineStatus.currentHash,
        changedFiles: [],
    });

    const schemaMismatch = structuredClone(baselineArtifact);
    schemaMismatch.schemaVersion += 1;
    writeArtifact(schemaMismatch);
    expectFailure(
        "schema mismatch",
        ["--status", "--artifact", artifactPath],
        /unsupported provider types schema version/,
    );

    const versionMismatch = withProviderVersion(baselineArtifact, patchVersion);
    writeProvider(versionMismatch, baselineArtifact.providerVersion);
    expectFailure("artifact/package version mismatch", ["--check", fakeProvider], /provider types artifact is for/);

    const hashMismatch = structuredClone(baselineArtifact);
    hashMismatch.hash = `${hashMismatch.hash.slice(0, -1)}${hashMismatch.hash.endsWith("0") ? "1" : "0"}`;
    writeArtifact(hashMismatch);
    expectFailure(
        "content hash mismatch",
        ["--status", "--artifact", artifactPath],
        /provider types artifact hash mismatch/,
    );

    const missingFragment = structuredClone(baselineArtifact);
    delete missingFragment.indexFragments.providerMembers;
    writeArtifact(missingFragment);
    expectFailure(
        "missing fragment",
        ["--status", "--artifact", artifactPath],
        /indexFragments must have exactly these keys/,
    );

    writeFileSync(artifactPath, "not json\n");
    expectFailure(
        "malformed artifact",
        ["--status", "--artifact", artifactPath],
        /could not read provider types artifact/,
    );

    const patchDrift = withProviderVersion(baselineArtifact, patchVersion);
    const patchStatus = status(patchDrift);
    assert.equal(patchStatus.updateRequired, false);
    assert.deepEqual(patchStatus.reasons, []);
    assert.equal(patchStatus.currentHash, patchStatus.candidateHash);
    assert.deepEqual(patchStatus.changedFiles, []);
    writeArtifact(patchDrift);
    expectFailure(
        "provider patch provenance drift",
        ["--check", "--artifact", artifactPath],
        /declaration mirrors are not up to date/,
    );
    const originalIndex = readFileSync(indexPath, "utf8");
    const patchOnlyUpdate = updater(["--artifact", artifactPath]);
    assert.equal(patchOnlyUpdate.status, 0, patchOnlyUpdate.stderr);
    assert.match(patchOnlyUpdate.stdout, /No declaration update is required/);
    assert.equal(readFileSync(indexPath, "utf8"), originalIndex);

    const minorStatus = status(withProviderVersion(baselineArtifact, minorVersion));
    assert.equal(minorStatus.updateRequired, false);
    assert.deepEqual(minorStatus.reasons, []);
    assert.equal(minorStatus.currentHash, minorStatus.candidateHash);

    const majorStatus = status(withProviderVersion(baselineArtifact, majorVersion));
    assert.equal(majorStatus.updateRequired, true);
    assert.deepEqual(majorStatus.reasons, ["major-version"]);
    assert.equal(majorStatus.currentHash, majorStatus.candidateHash);
    assert.deepEqual(majorStatus.changedFiles, ["index.d.ts", "package.json"]);

    const olderArtifact = withProviderVersion(contractsChange(baselineArtifact), olderVersion);
    const olderStatus = status(olderArtifact);
    assert.equal(olderStatus.updateRequired, false);
    assert.deepEqual(olderStatus.reasons, []);
    assert.deepEqual(olderStatus.changedFiles, []);
    assert.match(olderStatus.warning, /older than the tracked/);

    const changedContracts = contractsChange(baselineArtifact);
    const declarationStatus = status(changedContracts);
    assert.equal(declarationStatus.updateRequired, true);
    assert.deepEqual(declarationStatus.reasons, ["declarations"]);
    assert.notEqual(declarationStatus.currentHash, declarationStatus.candidateHash);
    assert.deepEqual(declarationStatus.changedFiles, ["index.d.ts"]);

    const documentationChange = contractsChange(
        baselineArtifact,
        "/** Status-only generated documentation. */\nexport interface DocumentedStatusContract {}",
    );
    const documentationStatus = status(documentationChange);
    assert.equal(documentationStatus.updateRequired, true);
    assert.deepEqual(documentationStatus.reasons, ["declarations"]);

    const grantsChange = structuredClone(baselineArtifact);
    grantsChange.files["lib/helpers/grants.d.ts"] += "\nexport interface StatusOnlyGrantHelper {}\n";
    updateHash(grantsChange);
    const grantsStatus = status(grantsChange);
    assert.equal(grantsStatus.updateRequired, true);
    assert.deepEqual(grantsStatus.reasons, ["declarations"]);
    assert.deepEqual(grantsStatus.changedFiles, ["index.d.ts", "lib/helpers/grants.d.ts"]);

    const formattingOnly = structuredClone(baselineArtifact);
    formattingOnly.indexFragments.contracts += "\n\n";
    formattingOnly.files["lib/helpers/grants.d.ts"] += "\n\n";
    updateHash(formattingOnly);
    const formattingStatus = status(formattingOnly);
    assert.equal(formattingStatus.updateRequired, false);
    assert.deepEqual(formattingStatus.reasons, []);
    assert.equal(formattingStatus.currentHash, formattingStatus.candidateHash);

    writeArtifact(formattingOnly);
    expectFailure(
        "exact check retains normalized content drift",
        ["--check", "--artifact", artifactPath],
        /declaration mirrors are not up to date/,
    );

    restorePackage();
    const nextMinorChange = withProviderVersion(changedContracts, minorVersion);
    writeArtifact(nextMinorChange);
    const updateMinor = updater(["--artifact", artifactPath]);
    assert.equal(updateMinor.status, 0, updateMinor.stderr);
    assert.equal(
        JSON.parse(readFileSync(packagePath, "utf8")).version,
        `${baselineVersion.major}.${baselineVersion.minor + 1}.9999`,
    );
    const updatedMinorCheck = check(["--artifact", artifactPath]);
    assert.equal(updatedMinorCheck.status, 0, updatedMinorCheck.stderr);

    restorePackage();
    const majorOnly = withProviderVersion(baselineArtifact, majorVersion);
    writeArtifact(majorOnly);
    const updateMajor = updater(["--artifact", artifactPath]);
    assert.equal(updateMajor.status, 0, updateMajor.stderr);
    assert.equal(JSON.parse(readFileSync(packagePath, "utf8")).version, `${baselineVersion.major + 1}.0.9999`);
    const updatedMajorCheck = check(["--artifact", artifactPath]);
    assert.equal(updatedMajorCheck.status, 0, updatedMajorCheck.stderr);

    restorePackage();
    writeArtifact(withProviderVersion(baselineArtifact, minorVersion));
    const minorOnlyUpdate = updater(["--artifact", artifactPath]);
    assert.equal(minorOnlyUpdate.status, 0, minorOnlyUpdate.stderr);
    assert.match(minorOnlyUpdate.stdout, /No declaration update is required/);
    assert.equal(readFileSync(packagePath, "utf8"), readFileSync(join(packageDirectory, "package.json"), "utf8"));
    expectFailure(
        "exact check retains major/minor compatibility check",
        ["--check", "--artifact", artifactPath],
        /version mismatch/,
    );

    restorePackage();
    writeArtifact(olderArtifact);
    const olderUpdate = updater(["--artifact", artifactPath]);
    assert.equal(olderUpdate.status, 0, olderUpdate.stderr);
    assert.match(olderUpdate.stderr, /older than the tracked/);
    assert.equal(readFileSync(indexPath, "utf8"), readFileSync(join(packageDirectory, "index.d.ts"), "utf8"));

    restorePackage();
    const index = readFileSync(indexPath, "utf8");
    const altered = index.replace("export type TokenFormat =", "export type AlteredTokenFormat =");
    assert.notEqual(altered, index, "expected to alter the generated contracts region");
    writeFileSync(indexPath, altered);
    writeArtifact(baselineArtifact);
    expectFailure(
        "altered generated region",
        ["--check", "--artifact", artifactPath],
        /declaration mirrors are not up to date/,
    );

    if (providerDirectory !== undefined) {
        const artifactOnlyRun = run(
            process.execPath,
            [fileURLToPath(import.meta.url), "--artifact", artifactPath],
            packageDirectory,
        );
        assert.equal(artifactOnlyRun.status, 0, artifactOnlyRun.stderr);
        assert.match(artifactOnlyRun.stdout, /update-types artifact and status checks passed/);
    }

    process.stdout.write("update-types artifact and status checks passed.\n");
} finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
}
