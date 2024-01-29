declare namespace safeJsonStringify {
    function ensureProperties(obj: any): object;
}

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter
type ReplacerFn = (key: any, value: any) => any;

declare function safeJsonStringify(
    data: object,
    replacer?: ReplacerFn | any[] | null,
    space?: string | number,
): string;

export = safeJsonStringify;
