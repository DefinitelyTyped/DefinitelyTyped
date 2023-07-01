// Type definitions for json-fixer
// Project: https://github.com/Berkmann18/json-fixer
// Definitions by: zbone3 <https://github.com/zbone3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "json-fixer" {

    type JsonFixerDataReturnValue = string | { [k: string]: any }

    interface FixJsonOptions {
        verbose?: boolean;
        parse?: boolean;
    }

    interface CheckJsonResult {
        data: JsonFixerDataReturnValue;
        changed: boolean;
    }

    function checkJson(data: string, options?: FixJsonOptions | boolean): CheckJsonResult;

    export = checkJson;
}
