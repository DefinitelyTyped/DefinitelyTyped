#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { isAbsolute, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SCHEMA_VERSION = 1;
const GRANTS_PATH = "lib/helpers/grants.d.ts";
const FRAGMENT_NAMES = ["contracts", "providerMembers", "relatedContracts"];
const REGIONS = {
    contracts: {
        start: "// BEGIN GENERATED OIDC-PROVIDER CONTRACTS",
        end: "// END GENERATED OIDC-PROVIDER CONTRACTS",
    },
    providerMembers: {
        start: "    // BEGIN GENERATED OIDC-PROVIDER MEMBERS",
        end: "    // END GENERATED OIDC-PROVIDER MEMBERS",
    },
    relatedContracts: {
        start: "// BEGIN GENERATED OIDC-PROVIDER RELATED CONTRACTS",
        end: "// END GENERATED OIDC-PROVIDER RELATED CONTRACTS",
    },
};

function fail(message) {
    console.error(`update-types: ${message}`);
    process.exit(1);
}

function parseArguments(argv) {
    let check = false;
    const positional = [];

    for (const argument of argv) {
        if (argument === "--check") {
            check = true;
        } else if (argument.startsWith("-")) {
            fail(`unknown option ${JSON.stringify(argument)}`);
        } else {
            positional.push(argument);
        }
    }

    if (positional.length !== 1) {
        fail("usage: node scripts/update-types.mjs [--check] <provider-checkout>");
    }

    return { check, providerDirectory: resolve(positional[0]) };
}

function readJson(path, label) {
    try {
        return JSON.parse(readFileSync(path, "utf8"));
    } catch (error) {
        fail(`could not read ${label} at ${path}: ${error.message}`);
    }
}

function majorMinor(version, label) {
    const match = /^(\d+)\.(\d+)(?:\.|$)/.exec(version);
    if (!match) {
        fail(`${label} has an invalid version: ${JSON.stringify(version)}`);
    }
    return `${match[1]}.${match[2]}`;
}

function exactKeys(value, expected, label) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        fail(`${label} must be an object`);
    }

    const actual = Object.keys(value).sort();
    const sortedExpected = [...expected].sort();
    if (actual.length !== sortedExpected.length || actual.some((key, index) => key !== sortedExpected[index])) {
        fail(`${label} must have exactly these keys: ${sortedExpected.join(", ")}`);
    }
}

function declarationText(value, label) {
    if (typeof value !== "string" || !value.trim()) {
        fail(`${label} must be a non-empty string`);
    }
    if (value.includes("\r")) {
        fail(`${label} must use LF line endings`);
    }
    return value;
}

function dprintExecutable(repositoryDirectory) {
    const directory = resolve(repositoryDirectory, "node_modules", "dprint");
    const packageMetadata = readJson(resolve(directory, "package.json"), "dprint package.json");
    const declared = typeof packageMetadata.bin === "string" ? packageMetadata.bin : packageMetadata.bin?.dprint;
    if (typeof declared !== "string" || !declared) {
        fail("dprint package.json must declare a dprint executable");
    }

    const executable = resolve(directory, declared);
    const relativeExecutable = relative(directory, executable);
    if (
        !relativeExecutable
        || isAbsolute(relativeExecutable)
        || relativeExecutable === ".."
        || relativeExecutable.startsWith(`..${sep}`)
    ) {
        fail("dprint package.json declares an invalid executable path");
    }
    return executable;
}

function canonicalContent(indexFragments, files) {
    return JSON.stringify({
        indexFragments: {
            contracts: indexFragments.contracts,
            providerMembers: indexFragments.providerMembers,
            relatedContracts: indexFragments.relatedContracts,
        },
        files: {
            [GRANTS_PATH]: files[GRANTS_PATH],
        },
    });
}

function validateArtifact(payload, providerVersion) {
    exactKeys(
        payload,
        ["schemaVersion", "providerVersion", "hash", "indexFragments", "files"],
        "provider types artifact",
    );
    if (payload.schemaVersion !== SCHEMA_VERSION) {
        fail(`unsupported provider types schema version ${JSON.stringify(payload.schemaVersion)}`);
    }
    if (payload.providerVersion !== providerVersion) {
        fail(
            `provider types artifact is for ${JSON.stringify(payload.providerVersion)}, expected ${providerVersion}`,
        );
    }
    if (typeof payload.hash !== "string" || !/^[a-f0-9]{64}$/.test(payload.hash)) {
        fail("provider types artifact hash must be a lowercase hexadecimal SHA-256 digest");
    }

    exactKeys(payload.indexFragments, FRAGMENT_NAMES, "provider types indexFragments");
    exactKeys(payload.files, [GRANTS_PATH], "provider types files");
    for (const name of FRAGMENT_NAMES) {
        declarationText(payload.indexFragments[name], `provider types indexFragments.${name}`);
    }
    declarationText(payload.files[GRANTS_PATH], `provider types files.${GRANTS_PATH}`);

    const actualHash = createHash("sha256")
        .update(canonicalContent(payload.indexFragments, payload.files))
        .digest("hex");
    if (actualHash !== payload.hash) {
        fail(`provider types artifact hash mismatch: expected ${payload.hash}, calculated ${actualHash}`);
    }

    return payload;
}

function artifactMetadata(payload) {
    return `// oidc-provider types artifact ${
        JSON.stringify(payload.providerVersion)
    }; schema ${payload.schemaVersion}; sha256 ${payload.hash}`;
}

function replaceRegion(source, fragment, { start, end }, label) {
    const startIndex = source.indexOf(start);
    const endIndex = source.indexOf(end);
    if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
        fail(`index.d.ts does not contain the generated ${label} region`);
    }
    if (
        source.indexOf(start, startIndex + start.length) !== -1
        || source.indexOf(end, endIndex + end.length) !== -1
    ) {
        fail(`index.d.ts must contain exactly one generated ${label} region`);
    }
    if (fragment.includes(start) || fragment.includes(end)) {
        fail(`provider ${label} fragment contains a generated-region marker`);
    }

    const normalized = fragment.replace(/^\n+|\n+$/g, "");
    return `${source.slice(0, startIndex + start.length)}\n${normalized}\n${source.slice(endIndex)}`;
}

function formatDeclaration(source, packageDirectory, declarationPath) {
    const repositoryDirectory = resolve(packageDirectory, "..", "..");
    const executable = dprintExecutable(repositoryDirectory);
    const result = spawnSync(process.execPath, [executable, "fmt", "--stdin", declarationPath], {
        cwd: repositoryDirectory,
        encoding: "utf8",
        input: source,
        maxBuffer: 16 * 1024 * 1024,
    });
    if (result.error) {
        fail(
            `could not run DefinitelyTyped's dprint executable at ${executable}: ${result.error.message}. Install the repository dependencies first`,
        );
    }
    if (result.status !== 0) {
        if (result.stderr) process.stderr.write(result.stderr);
        fail(`dprint exited with status ${result.status}`);
    }
    return result.stdout;
}

function generateArtifact(providerDirectory) {
    const result = spawnSync(process.execPath, ["docs/update-configuration.js", "--types-json"], {
        cwd: providerDirectory,
        encoding: "utf8",
        maxBuffer: 16 * 1024 * 1024,
    });
    if (result.error) {
        fail(`could not run the provider types generator: ${result.error.message}`);
    }
    if (result.status !== 0) {
        if (result.stderr) process.stderr.write(result.stderr);
        fail(`provider types generator exited with status ${result.status}`);
    }

    try {
        return JSON.parse(result.stdout);
    } catch (error) {
        fail(`provider types generator returned invalid JSON: ${error.message}`);
    }
}

const { check, providerDirectory } = parseArguments(process.argv.slice(2));
const packageDirectory = resolve(fileURLToPath(new URL("..", import.meta.url)));
const indexPath = resolve(packageDirectory, "index.d.ts");
const grantsPath = resolve(packageDirectory, GRANTS_PATH);
const typesPackage = readJson(resolve(packageDirectory, "package.json"), "@types package.json");
const providerPackage = readJson(resolve(providerDirectory, "package.json"), "provider package.json");

if (typesPackage.name !== "@types/oidc-provider") {
    fail(`expected @types/oidc-provider, found ${JSON.stringify(typesPackage.name)}`);
}
if (providerPackage.name !== "oidc-provider") {
    fail(`expected oidc-provider, found ${JSON.stringify(providerPackage.name)}`);
}
const typesVersion = majorMinor(typesPackage.version, "@types/oidc-provider");
const providerVersion = majorMinor(providerPackage.version, "oidc-provider");
if (typesVersion !== providerVersion) {
    fail(
        `version mismatch: @types/oidc-provider is ${typesVersion}.x but oidc-provider is ${providerVersion}.x`,
    );
}

const artifact = validateArtifact(generateArtifact(providerDirectory), providerPackage.version);
let generatedIndex = readFileSync(indexPath, "utf8");
for (const name of FRAGMENT_NAMES) {
    const fragment = name === "contracts"
        ? `${artifactMetadata(artifact)}\n${artifact.indexFragments[name]}`
        : artifact.indexFragments[name];
    generatedIndex = replaceRegion(generatedIndex, fragment, REGIONS[name], name);
}

const outputs = new Map([
    [indexPath, formatDeclaration(generatedIndex, packageDirectory, indexPath)],
    [grantsPath, artifact.files[GRANTS_PATH]],
]);
const changed = [...outputs].filter(([path, contents]) => readFileSync(path, "utf8") !== contents);

if (!changed.length) {
    console.log("oidc-provider declaration mirrors are up to date.");
} else if (check) {
    fail(
        `declaration mirrors are not up to date: ${
            changed.map(([path]) => path.slice(packageDirectory.length + 1)).join(", ")
        }`,
    );
} else {
    for (const [path, contents] of changed) writeFileSync(path, contents);
    console.log(
        `Updated oidc-provider declaration mirrors: ${
            changed.map(([path]) => path.slice(packageDirectory.length + 1)).join(", ")
        }.`,
    );
}
