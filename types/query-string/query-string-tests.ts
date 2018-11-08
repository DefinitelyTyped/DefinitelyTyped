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

// For each section below, the second line ensures the real answer is of the declared
// type. You can find the real answer by running the first line of each section.

// parse
{
    let fooBar = queryString.parse('?foo=bar');
    fooBar = {foo: "bar"};

    let fooBarBaz1 = queryString.parse('&foo=bar&foo=baz');
    fooBarBaz1 = { foo: [ 'bar', 'baz' ] };

    let fooBarBaz2 = queryString.parse('&foo[]=bar&foo[]=baz', {arrayFormat: 'bracket'});
    fooBarBaz2 = { foo: [ 'bar', 'baz' ] };
}

// extract
{
    let result1 = queryString.extract('http://foo.bar/?abc=def&hij=klm');
    result1 = 'abc=def&hij=klm';

    let result2 = queryString.extract('http://foo.bar/?foo=bar');
    result2 = 'foo=bar';
}
