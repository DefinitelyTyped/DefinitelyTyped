import parse = require('spdx-expression-parse');
import parseTokens = require('spdx-expression-parse/parse');
import scan = require('spdx-expression-parse/scan');
import { Info } from 'spdx-expression-parse';

const source = '(MIT AND (LGPL-2.1+ AND BSD-3-Clause))';
scan(source); // $ExpectType Token[]
parseTokens(scan(source)); // $ExpectType Info
parse(source); // $ExpectType Info

const infos: Info[] = [
    {
        license: 'MIT',
    },
    {
        left: {
            license: 'MIT',
        },
        conjunction: 'and',
        right: {
            left: {
                license: 'LGPL-2.1',
                plus: true,
            },
            conjunction: 'and',
            right: {
                license: 'BSD-3-Clause',
            },
        },
    },
    {
        left: { license: 'LGPL-2.1' },
        conjunction: 'or',
        right: {
            left: { license: 'BSD-3-Clause' },
            conjunction: 'and',
            right: { license: 'MIT' },
        },
    },
];
