interface OutputSuccess {
    value: any;
}

interface OutputError {
    error: Error;
}

declare function jsonParseSafe(
    text: string,
    reviver?: (this: any, key: string, value: any) => any,
): OutputSuccess | OutputError;

export = jsonParseSafe;
