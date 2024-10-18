declare function json2xml(
    json: unknown,
    opts?: { header?: boolean | undefined; attributes_key?: string | undefined },
): string;

export = json2xml;
