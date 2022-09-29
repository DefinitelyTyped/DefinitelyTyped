import * as cp from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

import { ignoredRules } from "./ignoredRules";
import { LintPackage } from "./LintPackage";
import { npmNamingDisabler } from "./npmNamingDisabler";

/**
 * @param {string} pkgPath
 * @param {import("tslint").Configuration.IConfigurationFile} baseConfig
 */
export function updatePackage(pkgPath, baseConfig) {
    installDependencies(pkgPath);
    const packages = walkPackageDir(pkgPath);

    const linterOpts = {
        fix: false,
    };

    for (const pkg of packages) {
        const results = pkg.lint(linterOpts, baseConfig);
        if (results.failures.length > 0) {
            const disabledRules = disableRules(results.failures);
            const newConfig = mergeConfigRules(pkg.config(), disabledRules, baseConfig);
            pkg.updateConfig(newConfig);
        }
    }
}

/**
 * @param {string} rootDir
 */
function walkPackageDir(rootDir) {
    const packages = [];

    /**
     * @param {LintPackage} curPackage
     * @param {string} dir
     */
    function walk(curPackage, dir) {
        for (const ent of fs.readdirSync(dir, { encoding: "utf8", withFileTypes: true })) {
            const entPath = path.join(dir, ent.name);
            if (ent.isFile()) {
                curPackage.addFile(entPath);
            } else if (ent.isDirectory() && ent.name !== "node_modules") {
                if (isVersionDir(ent.name)) {
                    const newPackage = new LintPackage(entPath);
                    packages.push(newPackage);
                    walk(newPackage, entPath);
                } else {
                    walk(curPackage, entPath);
                }
            }
        }
    }

    const lintPackage = new LintPackage(rootDir);
    packages.push(lintPackage);
    walk(lintPackage, rootDir);
    return packages;
}

/**
 * Returns true if directory name matches a TypeScript or package version directory.
 * Examples: `ts3.5`, `v11`, `v0.6` are all version names.
 * @param {string} dirName
 */
function isVersionDir(dirName) {
    return /^ts\d+\.\d$/.test(dirName) || /^v\d+(\.\d+)?$/.test(dirName);
}

/**
 * @param {string} pkgPath
 */
function installDependencies(pkgPath) {
    if (fs.existsSync(path.join(pkgPath, "package.json"))) {
        cp.execSync(
            "npm install --ignore-scripts --no-shrinkwrap --no-package-lock --no-bin-links",
            {
                encoding: "utf8",
                cwd: pkgPath,
            });
    }
}

/**
 * @param {import("tslint").Configuration.RawConfigFile} config
 * @param {import("tslint").Configuration.RawRulesConfig} newRules
 * @param {import("tslint").Configuration.IConfigurationFile} baseConfig
 */
function mergeConfigRules(config, newRules, baseConfig) {
    const activeRules = [...baseConfig.rules.entries()]
        .filter(([, ruleOpts]) => ruleOpts.ruleSeverity !== "off")
        .map(([ruleName]) => ruleName);
    const oldRules = config.rules || {};
    const newRulesConfig = {
        ...Object.fromEntries(Object.entries(oldRules).filter(([rule]) => !activeRules.includes(rule))),
        ...newRules,
    };
    return { ...config, rules: newRulesConfig };
}

/**
 * @param {import("tslint").RuleFailure[]} allFailures
 */
function disableRules(allFailures) {
    /** @type {Record<string, import("tslint").IRuleFailureJson[]>} */
    const ruleToFailures = {};
    for (const failure of allFailures) {
        const failureJson = failure.toJson();
        if (ignoredRules.has(failureJson.ruleName)) continue;
        (ruleToFailures[failureJson.ruleName] ||= []).push(failureJson);
    }

    return Object.fromEntries(
        Object.entries(ruleToFailures).map(([rule, failures]) => [
            rule,
            (rule === "npm-naming" ? npmNamingDisabler : defaultDisabler)(failures),
        ])
    );
}

const defaultDisabler = () => false;
