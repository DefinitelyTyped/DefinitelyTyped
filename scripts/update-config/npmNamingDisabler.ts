import { defaultErrors, ErrorKind, ExportErrorKind, Mode } from "dts-critic";
import * as Lint from "tslint";

/**
 * Given npm-naming lint failures, returns a rule configuration that prevents such failures.
 */
export function npmNamingDisabler(failures: Lint.IRuleFailureJson[]) {
    const disabledErrors = new Set<ExportErrorKind>();
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

    if ((defaultErrors as ExportErrorKind[]).every(error => disabledErrors.has(error))) {
        return [true, { mode: Mode.NameOnly }];
    }
    const errors: Array<[ExportErrorKind, boolean]> = [];
    disabledErrors.forEach(error => errors.push([error, false]));
    return [true, { mode: Mode.Code, errors }];
}
