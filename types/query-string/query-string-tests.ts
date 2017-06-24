import * as queryString from 'query-string';

// stringify
{
    let result: string;
    // test obj
    result = queryString.stringify({
        str: 'bar',
        strArray: ['baz'],
        num: 123,
        numArray: [456],
        bool: true,
        boolArray: [false]
    });

    // test options
    result = queryString.stringify({ foo: 'bar' }, { strict: false });
    result = queryString.stringify({ foo: 'bar' }, { encode: false });
    result = queryString.stringify({ foo: 'bar' }, { strict: false, encode: false });
}

// parse
{
    let fooBar: { foo: 'bar' };
    fooBar = queryString.parse('?foo=bar');
    fooBar = queryString.parse('#foo=bar');

    let fooBarBaz: { foo: ['bar', 'baz'] };
    fooBarBaz = queryString.parse('&foo=bar&foo=baz');
}

// extract
{
    let result: string;
    result = queryString.extract('http://foo.bar/?abc=def&hij=klm');
    result = queryString.extract('http://foo.bar/?foo=bar');
}
