import * as querystring from 'querystring';

interface SampleObject { [key: string]: string; }

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

    querystring.stringify({ foo: () => {} }); // $ExpectError
    querystring.stringify({ foo: { bar: 1 } }); // $ExpectError

    querystring.stringify({
        foo: 'foo',
        bar: 1,
        baz: true,
        foo2: ['a', 'b'],
        bar2: [1, 2],
        baz2: [true, false],
        a: undefined,
        b: null
    });
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

{
    const queryInput: string | null | querystring.ParsedUrlQueryInput = {};
    // $ExpectError
    const query: string | null | querystring.ParsedUrlQuery = queryInput;
}
