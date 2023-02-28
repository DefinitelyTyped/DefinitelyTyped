// This is a stand-alone script that updates TSLint configurations for DefinitelyTyped packages.
// It runs all rules specified in `dt.json`, and updates the existing configuration for a package
// by adding rule exemptions only for the rules that caused a lint failure.
// For example, if a configuration specifies `"no-trailing-whitespace": false` and this rule
// no longer produces an error, then it will not be disabled in the new configuration.
// If you update or create a rule and now it causes new failures in DT, you can update the `dt.json`
// configuration with your rule, then register a disabler function for your rule
// (check `disableRules` function below), then run this script with your rule as argument.

import * as fs from "node:fs";
import * as path from "node:path";
import { Configuration as Config } from "tslint";
import * as yargs from "yargs";
import { normalizePath } from "./dependencies";
import { ignoredRules } from "./ignoredRules";
import { updatePackage } from "./updatePackage";

async function main() {
    const args = await yargs
        .usage(`\`$0 --dt=path-to-dt\` or \`$0 --package=path-to-dt-package\`
'dt.json' is used as the base tslint config for running the linter.`)
        .option("package", {
            describe: "Path of DT package.",
            type: "string",
            conflicts: "dt",
        })
        .option("dt", {
            describe: "Path of local DefinitelyTyped repository.",
            type: "string",
            conflicts: "package",
        })
        .option("rules", {
            describe: "Names of the rules to be updated. Leave this empty to update all rules.",
            type: "array",
            string: true,
            default: [],
        })
        .check(arg => {
            if (!arg.package && !arg.dt) {
                throw new Error("You must provide either argument 'package' or 'dt'.");
            }
            // @ts-expect-error
            const unsupportedRules = arg.rules.filter(rule => ignoredRules.has(rule));
            if (unsupportedRules.length > 0) {
                throw new Error(`Rules ${unsupportedRules.join(", ")} are not supported at the moment.`);
            }
            return true;
        }).argv;

    const baseConfig = dtConfig(args.rules);

    if (args.package) {
        updatePackage(args.package, baseConfig);
    } else if (args.dt) {
        updateAll(args.dt, baseConfig);
    }
}

/**
 * @param {string[]} updatedRules
 */
function dtConfig(updatedRules) {
    const resolvedDtslint = require.resolve("dtslint");
    const dtConfigPath = normalizePath(
        path.join(
            resolvedDtslint.slice(0, resolvedDtslint.lastIndexOf("dtslint")),
            "dtslint/dt.json"
        ),
    );
    const config = Config.findConfiguration(dtConfigPath).results;
    if (!config) {
        throw new Error(`Could not load config at ${dtConfigPath}.`);
    }
    // Disable ignored or non-updated rules.
    for (const entry of config.rules.entries()) {
        const [rule, ruleOpts] = entry;
        if (ignoredRules.has(rule) || (updatedRules.length > 0 && !updatedRules.includes(rule))) {
            ruleOpts.ruleSeverity = "off";
        }
    }
    return config;
}

/**
 * @param {string} dtPath
 * @param {Config.IConfigurationFile} config
 */
function updateAll(dtPath, config) {
    const packages = fs.readdirSync(path.join(dtPath, "types"));
    for (const pkg of packages) {
        updatePackage(path.join(dtPath, "types", pkg), config);
    }
}

main().catch((error) => {
    console.error(`Error in update-config: ${error}`)
    process.exitCode = 1;
});
