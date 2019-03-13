import * as querystring from 'querystring';

interface SampleObject { a: string; }

{
    const obj: SampleObject = { a: "" };
    const sep = '';
    const eq = '';
    const options: querystring.StringifyOptions = {
        encodeURIComponent: (d: string) => d,
    };
    let result: string;

    result = querystring.stringify(obj);
    result = querystring.stringify(obj, sep);
    result = querystring.stringify(obj, sep, eq);
    result = querystring.stringify(obj, sep, eq);
    result = querystring.stringify(obj, sep, eq, options);
}

{
    const str = '';
    const sep = '';
    const eq = '';
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
    const str = '';
    let result: string;

    result = querystring.escape(str);
    result = querystring.unescape(str);
}
