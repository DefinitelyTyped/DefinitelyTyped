import { defaultErrors, ErrorKind, Mode } from "@definitelytyped/dts-critic";

/**
 * Given npm-naming lint failures, returns a rule configuration that prevents such failures.
 * @param {import("tslint").IRuleFailureJson[]} failures
 */
export function npmNamingDisabler(failures) {
    const disabledErrors = new Set();
    for (const ruleFailure of failures) {
        if (ruleFailure.ruleName !== "npm-naming") {
            throw new Error(`Expected failures of rule "npm-naming", found failures of rule ${ruleFailure.ruleName}.`);
        }
        const message = ruleFailure.failure;
        // Name errors.
        if (message.includes("must have a matching npm package")
            || message.includes("must match a version that exists on npm")
            || message.includes("conflicts with the existing npm package")) {
            return false;
        }
        // Code errors.
        if (message.includes("declaration should use 'export =' syntax")) {
            disabledErrors.add(ErrorKind.NeedsExportEquals);
        } else if (message.includes("declaration specifies 'export default' but the JavaScript source \
            does not mention 'default' anywhere")) {
            disabledErrors.add(ErrorKind.NoDefaultExport);
        } else {
            return [true, { mode: Mode.NameOnly }];
        }
    }

    if (defaultErrors.every(error => disabledErrors.has(error))) {
        return [true, { mode: Mode.NameOnly }];
    }
    const errors = [...disabledErrors].map(error => [error, false]);
    return [true, { mode: Mode.Code, errors }];
}
