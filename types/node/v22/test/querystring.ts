import * as querystring from "node:querystring";

interface SampleObject {
    [key: string]: string;
}

{
    const obj: SampleObject = { a: "" };
    const sep = "";
    const eq = "";
    const options: querystring.StringifyOptions = {
        encodeURIComponent: (d: string) => d,
    };
    let result: string;

    result = querystring.stringify(obj);
    result = querystring.stringify(obj, sep);
    result = querystring.stringify(obj, sep, eq);
    result = querystring.stringify(obj, sep, eq);
    result = querystring.stringify(obj, sep, eq, options);

    // @ts-expect-error
    querystring.stringify({ foo: () => {} });
    // @ts-expect-error
    querystring.stringify({ foo: { bar: 1 } });

    querystring.stringify({
        str: "foo",
        num: 1,
        bool: true,
        bigInt: 1n,
        list: ["a", 1, true, 1n],
        listReadonly: ["a", 1, true, 1n] as const,
        undef: undefined,
        nul: null,
    });
}

{
    const str = "";
    const sep = "";
    const eq = "";
    const options: querystring.ParseOptions = {
        decodeURIComponent: (d: string) => d,
    };
    let result: querystring.ParsedUrlQuery;

    result = querystring.parse(str);
    result = querystring.parse(str, sep);
    result = querystring.parse(str, sep, eq);
    result = querystring.parse(str, sep, eq, options);
}

{
    const str = "";
    let result: string;

    result = querystring.escape(str);
    result = querystring.unescape(str);
}

{
    const queryInput: string | null | querystring.ParsedUrlQueryInput = {};
    // @ts-expect-error
    const query: string | null | querystring.ParsedUrlQuery = queryInput;
}
