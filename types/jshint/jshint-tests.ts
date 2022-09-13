import { JSHINT, LintData, LintOptions } from 'jshint';

const source: string[] = ['function goo() {}', 'foo = 3;'];
const options: LintOptions = {
    undef: true,
};
const predef: Record<string, boolean> = {
    foo: false,
};

JSHINT(source, options, predef);

JSHINT(["'use strict';", "console.log('hello, world!');"]);

JSHINT(source, { undef: true });

JSHINT(source, options, { jQuery: false });

const data = JSHINT.data();

if (data) {
    data.errors;
}

const data2: LintData = {
    functions: [
        {
            name: 'goo',
            param: undefined,
            line: 1,
            character: 14,
            last: 1,
            lastcharacter: 18,
            metrics: {
                complexity: 1,
                parameters: 0,
                statements: 0,
            },
        },
    ],
    options: {
        undef: true,
        indent: 4,
        maxerr: 50,
    },
    errors: [
        {
            id: '(error)',
            raw: 'Read only.',
            code: 'W020',
            evidence: 'foo = 3;',
            line: 2,
            character: 1,
            scope: '(main)',
            a: undefined,
            b: undefined,
            c: undefined,
            d: undefined,
            reason: 'Read only.',
        },
    ],
    globals: ['goo', 'foo'],
    unused: [
        {
            name: 'goo',
            line: 1,
            character: 10,
        },
    ],
};

data2.errors;
