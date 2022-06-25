import * as cp from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { Configuration as Config, ILinterOptions, IRuleFailureJson, RuleFailure } from "tslint";

import { ignoredRules } from "./ignoredRules";
import { LintPackage } from "./LintPackage";
import { npmNamingDisabler } from "./npmNamingDisabler";

export function updatePackage(pkgPath: string, baseConfig: Config.IConfigurationFile): void {
    installDependencies(pkgPath);
    const packages = walkPackageDir(pkgPath);

    const linterOpts: ILinterOptions = {
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

function walkPackageDir(rootDir: string): LintPackage[] {
    const packages: LintPackage[] = [];

    function walk(curPackage: LintPackage, dir: string): void {
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
 */
function isVersionDir(dirName: string): boolean {
    return /^ts\d+\.\d$/.test(dirName) || /^v\d+(\.\d+)?$/.test(dirName);
}

function installDependencies(pkgPath: string): void {
    if (fs.existsSync(path.join(pkgPath, "package.json"))) {
        cp.execSync(
            "npm install --ignore-scripts --no-shrinkwrap --no-package-lock --no-bin-links",
            {
                encoding: "utf8",
                cwd: pkgPath,
            });
    }
}

function mergeConfigRules(
    config: Config.RawConfigFile,
    newRules: Config.RawRulesConfig,
    baseConfig: Config.IConfigurationFile): Config.RawConfigFile {
    const activeRules: string[] = [];
    baseConfig.rules.forEach((ruleOpts, ruleName) => {
        if (ruleOpts.ruleSeverity !== "off") {
            activeRules.push(ruleName);
        }
    });
    const oldRules: Config.RawRulesConfig = config.rules || {};
    let newRulesConfig: Config.RawRulesConfig = {};
    for (const rule of Object.keys(oldRules)) {
        if (activeRules.includes(rule)) {
            continue;
        }
        newRulesConfig[rule] = oldRules[rule];
    }
    newRulesConfig = { ...newRulesConfig, ...newRules };
    return { ...config, rules: newRulesConfig };
}

function disableRules(allFailures: RuleFailure[]): Config.RawRulesConfig {
    const ruleToFailures: Map<string, IRuleFailureJson[]> = new Map();
    for (const failure of allFailures) {
        const failureJson = failure.toJson();
        if (ruleToFailures.has(failureJson.ruleName)) {
            ruleToFailures.get(failureJson.ruleName)!.push(failureJson);
        } else {
            ruleToFailures.set(failureJson.ruleName, [failureJson]);
        }
    }

    const newRulesConfig: Config.RawRulesConfig = {};
    ruleToFailures.forEach((failures, rule) => {
        if (ignoredRules.has(rule)) {
            return;
        }
        const disabler = rule === "npm-naming" ? npmNamingDisabler : defaultDisabler;
        const opts: RuleOptions = disabler(failures);
        newRulesConfig[rule] = opts;
    });

    return newRulesConfig;
}

type RuleOptions = boolean | unknown[];
type RuleDisabler = (failures: IRuleFailureJson[]) => RuleOptions;

const defaultDisabler: RuleDisabler = () => {
    return false;
};
