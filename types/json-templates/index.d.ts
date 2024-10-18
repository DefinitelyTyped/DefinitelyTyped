declare function parse(
    atemplate: string | object,
): { parameters: [{ key: string; defaultValue: string }] } & ((parameters?: object) => string);
export = parse;
