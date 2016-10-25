/// <reference path="./query-string.d.ts" />

import qs = require('query-string');


namespace stringify_tests {
    let result: string;
    // test obj
    result = qs.stringify({
        str: 'bar',
        strArray: ['baz'],
        num: 123,
        numArray: [456],
        bool: true,
        boolArray: [false],
    });

    // test options
    result = qs.stringify({ foo: 'bar' }, { strict: false })
    result = qs.stringify({ foo: 'bar' }, { encode: false })
    result = qs.stringify({ foo: 'bar' }, { strict: false, encode: false })
}

namespace parse_tests {
    let result: { [key: string]: string | string[] };
    result = qs.parse('?foo=bar');
    result = qs.parse('#foo=bar');
    result = qs.parse('&foo=bar&foo=baz');
}

namespace extract_tests {
    let result: string;
    result = qs.extract('http://foo.bar/?abc=def&hij=klm');
    result = qs.extract('http://foo.bar/?foo=bar');
}
