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
