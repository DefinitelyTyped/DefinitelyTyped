// Type definitions for json-fixer 1.6
// Project: https://github.com/Berkmann18/json-fixer
// Definitions by: zbone3 <https://github.com/zbone3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

type JsonFixerDataReturnValue = string | { [k: string]: any };

interface FixJsonOptions {
    verbose?: boolean;
    parse?: boolean;
}

interface CheckJsonResult {
    data: JsonFixerDataReturnValue;
    changed: boolean;
}

declare function checkJson(data: string, options?: FixJsonOptions | boolean): CheckJsonResult;

export = checkJson;
