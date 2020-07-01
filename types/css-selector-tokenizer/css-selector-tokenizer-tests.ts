import cssSelectorTokenizer = require('css-selector-tokenizer');

const { parse, parseValues, stringify, stringifyValues } = cssSelectorTokenizer;

parse('.hidden'); // $ExpectType SelectorsNode
stringify({ type: 'selectors', nodes: [] }); // $ExpectType string

parseValues('url(abc)'); // $ExpectType ValuesNode
stringifyValues({ type: 'values', nodes: [] }); // $ExpectType string

// extracted from https://github.com/css-modules/css-selector-tokenizer/blob/v0.7.1/test/test-cases.js
export const selectorsNodes: cssSelectorTokenizer.SelectorsNode[] = [
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'body',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'h1',
                        namespace: 'foo',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'h1',
                        namespace: '*',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'h1',
                        namespace: '',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'class',
                        name: 'className',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'class',
                        name: 'class.Name',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'class',
                        name: '5#-.5',
                    },
                    {
                        type: 'spacing',
                        value: ' ',
                    },
                    {
                        type: 'class',
                        name: '--name',
                    },
                    {
                        type: 'class',
                        name: '-name',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'class',
                        name: '字',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'class',
                        name: '🤔',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'class',
                        name: '👍👌',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'id',
                        name: 'idName',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'id',
                        name: '5#-.5',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'id',
                        name: '¡',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'class',
                        name: '🖖🏼',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-class',
                        name: 'before',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-class',
                        name: 'be:fo#r.e',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-class',
                        name: 'abc',
                        content: '.className',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-class',
                        name: 'a:b.c',
                        content: '.className',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'nested-pseudo-class',
                        name: 'not',
                        nodes: [
                            {
                                type: 'selector',
                                nodes: [
                                    {
                                        type: 'class',
                                        name: 'className',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-element',
                        name: 'first-line',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-element',
                        name: 'fir::st.li#ne',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'universal',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'universal',
                        namespace: 'foo',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'universal',
                        namespace: 'f|o.o',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'universal',
                        namespace: '*',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'universal',
                        namespace: '',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'a',
                    },
                    {
                        type: 'attribute',
                        content: 'href="#xyz"',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'comment',
                        content: '** Hello *** World **',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'a',
                    },
                    {
                        type: 'operator',
                        operator: '>',
                        before: ' ',
                        after: ' ',
                    },
                    {
                        type: 'class',
                        name: 'class-name',
                    },
                    {
                        type: 'operator',
                        operator: '~',
                    },
                    {
                        type: 'class',
                        name: 'x123',
                    },
                    {
                        type: 'operator',
                        operator: '+',
                        after: ' ',
                    },
                    {
                        type: 'element',
                        name: 'div',
                    },
                    {
                        type: 'operator',
                        operator: '>>',
                        before: ' ',
                        after: ' ',
                    },
                    {
                        type: 'element',
                        name: 'col',
                    },
                    {
                        type: 'operator',
                        operator: '||',
                        before: ' ',
                        after: ' ',
                    },
                    {
                        type: 'element',
                        name: 'td',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'a',
                    },
                    {
                        type: 'spacing',
                        value: ' ',
                    },
                    {
                        type: 'element',
                        name: 'b',
                    },
                    {
                        type: 'spacing',
                        value: '\n\t',
                    },
                    {
                        type: 'element',
                        name: 'c',
                    },
                ],
                before: '\t',
                after: ' ',
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'a',
                    },
                    {
                        type: 'class',
                        name: 'class',
                    },
                ],
            },
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'id',
                        name: 'classB',
                    },
                ],
                before: ' ',
                after: ' ',
            },
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'c',
                    },
                    {
                        type: 'spacing',
                        value: ' ',
                    },
                    {
                        type: 'element',
                        name: 'div',
                    },
                    {
                        type: 'spacing',
                        value: ' ',
                    },
                    {
                        type: 'class',
                        name: 'class',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-class',
                        name: '--anything-new',
                        content: '/* here is difficult \')][ .content */\nurl(\'Hello)World\'), "Hello)\\".World"',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-class',
                        name: 'import',
                        content: '"./module.css"',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-class',
                        name: 'export',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'pseudo-class',
                        name: 'global',
                    },
                    {
                        type: 'spacing',
                        value: ' ',
                    },
                    {
                        type: 'pseudo-class',
                        name: 'local',
                    },
                    {
                        type: 'spacing',
                        value: ' ',
                    },
                    {
                        type: 'nested-pseudo-class',
                        name: 'global',
                        nodes: [
                            {
                                type: 'selector',
                                nodes: [
                                    {
                                        type: 'class',
                                        name: 'className',
                                    },
                                    {
                                        type: 'spacing',
                                        value: ' ',
                                    },
                                    {
                                        type: 'element',
                                        name: 'a',
                                    },
                                    {
                                        type: 'attribute',
                                        content: 'href',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'nested-pseudo-class',
                        name: 'local',
                        nodes: [
                            {
                                type: 'selector',
                                nodes: [
                                    {
                                        type: 'id',
                                        name: 'idName',
                                    },
                                ],
                                before: ' ',
                                after: ' ',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'nested-pseudo-class',
                        name: 'has',
                        nodes: [
                            {
                                type: 'selector',
                                nodes: [
                                    {
                                        type: 'element',
                                        name: 'h1',
                                    },
                                ],
                                before: ' ',
                            },
                            {
                                type: 'selector',
                                nodes: [
                                    {
                                        type: 'element',
                                        name: 'h2',
                                    },
                                ],
                                before: ' ',
                                after: ' ',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'nested-pseudo-class',
                        name: 'not',
                        nodes: [
                            {
                                type: 'selector',
                                nodes: [
                                    {
                                        type: 'pseudo-class',
                                        name: 'active',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'nested-pseudo-class',
                        name: 'matches',
                        nodes: [
                            {
                                type: 'selector',
                                nodes: [
                                    {
                                        type: 'pseudo-class',
                                        name: 'focus',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'nested-pseudo-class',
                        name: 'has',
                        nodes: [
                            {
                                type: 'selector',
                                nodes: [
                                    {
                                        type: 'element',
                                        name: 'h1',
                                    },
                                    {
                                        type: 'nested-pseudo-class',
                                        name: 'not',
                                        nodes: [
                                            {
                                                type: 'selector',
                                                nodes: [
                                                    {
                                                        type: 'nested-pseudo-class',
                                                        name: 'has',
                                                        nodes: [
                                                            {
                                                                type: 'selector',
                                                                nodes: [
                                                                    {
                                                                        type: 'pseudo-class',
                                                                        name: 'visited',
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'a',
                    },
                    {
                        type: 'invalid',
                        value: "'",
                    },
                    {
                        type: 'element',
                        name: 'b',
                    },
                    {
                        type: 'invalid',
                        value: '/',
                    },
                    {
                        type: 'element',
                        name: 'c',
                    },
                    {
                        type: 'invalid',
                        value: '"',
                    },
                    {
                        type: 'element',
                        name: 'd',
                    },
                    {
                        type: 'invalid',
                        value: '[',
                    },
                    {
                        type: 'element',
                        name: 'e',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'element',
                        name: 'a',
                    },
                    {
                        type: 'invalid',
                        value: ' )',
                    },
                    {
                        type: 'spacing',
                        value: ' ',
                    },
                    {
                        type: 'element',
                        name: 'b',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'invalid',
                        value: '0',
                    },
                    {
                        type: 'invalid',
                        value: '%',
                    },
                ],
            },
        ],
    },
    {
        type: 'selectors',
        nodes: [
            {
                type: 'selector',
                nodes: [
                    {
                        type: 'invalid',
                        value: '.',
                    },
                    {
                        type: 'invalid',
                        value: '1',
                    },
                    {
                        type: 'invalid',
                        value: '0',
                    },
                    {
                        type: 'element',
                        name: 'a0',
                    },
                ],
            },
        ],
    },
];

// extracted from https://github.com/css-modules/css-selector-tokenizer/blob/v0.7.1/test/test-cases-values.js
export const valuesNodes: cssSelectorTokenizer.ValuesNode[] = [
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'item',
                        name: 'item',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'item',
                        name: 'item',
                        after: ' ',
                    },
                    {
                        type: 'item',
                        name: 'other-item',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'item',
                        name: 'item',
                        after: ' ',
                    },
                    {
                        type: 'item',
                        name: 'other-item',
                    },
                ],
            },
            {
                type: 'value',
                nodes: [
                    {
                        type: 'item',
                        name: 'second-value',
                        after: ' ',
                    },
                    {
                        type: 'item',
                        name: '3rd-value',
                        after: ' ',
                    },
                ],
                before: ' ',
            },
            {
                type: 'value',
                nodes: [
                    {
                        type: 'item',
                        name: 'item',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'string',
                        value: 'ab\'"c d',
                        stringType: "'",
                        after: ' ',
                    },
                    {
                        type: 'string',
                        value: 'e" f',
                        stringType: '"',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'item',
                        name: 'item',
                        after: ' ',
                    },
                    {
                        type: 'comment',
                        content: ' hello world ',
                        after: ' ',
                    },
                    {
                        type: 'item',
                        name: 'item',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'url',
                        url: 'ab\'"c d',
                        stringType: "'",
                        after: ' ',
                    },
                    {
                        type: 'url',
                        url: 'e" f',
                        stringType: '"',
                        innerSpacingBefore: ' ',
                        innerSpacingAfter: ' ',
                        after: ' ',
                    },
                    {
                        type: 'url',
                        url: 'ghi)j"k',
                        innerSpacingBefore: ' ',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'url',
                        url: 'C:\\Users\\Test\\test.png',
                        stringType: "'",
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'nested-item',
                        name: 'format',
                        nodes: [
                            {
                                type: 'value',
                                nodes: [
                                    {
                                        type: 'string',
                                        stringType: "'",
                                        value: 'woff',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'nested-item',
                        name: 'format',
                        nodes: [
                            {
                                type: 'value',
                                nodes: [
                                    {
                                        type: 'string',
                                        stringType: "'",
                                        value: 'woff',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                type: 'value',
                nodes: [
                    {
                        type: 'nested-item',
                        name: 'format',
                        nodes: [
                            {
                                type: 'value',
                                nodes: [
                                    {
                                        type: 'string',
                                        stringType: '"',
                                        value: 'a b, c',
                                    },
                                ],
                                before: ' ',
                                after: ' ',
                            },
                        ],
                    },
                ],
                before: ' ',
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'nested-item',
                        name: 'image-set',
                        nodes: [
                            {
                                type: 'value',
                                nodes: [
                                    {
                                        type: 'url',
                                        url: 'a',
                                        after: ' ',
                                    },
                                    {
                                        type: 'item',
                                        name: '1x',
                                    },
                                ],
                            },
                            {
                                type: 'value',
                                nodes: [
                                    {
                                        type: 'url',
                                        stringType: "'",
                                        url: 'b',
                                        after: ' ',
                                    },
                                    {
                                        type: 'item',
                                        name: '2x',
                                    },
                                ],
                                before: ' ',
                            },
                        ],
                    },
                ],
            },
            {
                type: 'value',
                nodes: [
                    {
                        type: 'nested-item',
                        name: '-webkit-image-set',
                        nodes: [
                            {
                                type: 'value',
                                nodes: [
                                    {
                                        type: 'url',
                                        stringType: '"',
                                        url: 'a',
                                        after: ' ',
                                    },
                                    {
                                        type: 'item',
                                        name: '1x',
                                    },
                                ],
                            },
                            {
                                type: 'value',
                                nodes: [
                                    {
                                        type: 'url',
                                        url: 'b',
                                        after: ' ',
                                    },
                                    {
                                        type: 'item',
                                        name: '2x',
                                    },
                                ],
                                before: ' ',
                            },
                        ],
                    },
                ],
                before: ' ',
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'invalid',
                        value: ')',
                        after: ' ',
                    },
                    {
                        type: 'invalid',
                        value: ')',
                    },
                ],
                before: ' ',
                after: ' ',
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'item',
                        name: 'hello',
                        after: '\n\t ',
                    },
                    {
                        type: 'item',
                        name: 'world',
                    },
                ],
                before: '   ',
                after: '\t',
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'string',
                        stringType: "'",
                        value: '\\\'"',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'string',
                        stringType: '"',
                        value: '\\\'"',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'string',
                        stringType: '"',
                        value: '\u0010',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'string',
                        stringType: '"',
                        value: '🔎',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'string',
                        stringType: '"',
                        value: '\n',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'string',
                        stringType: '"',
                        value: '\n',
                    },
                ],
            },
        ],
    },
    {
        type: 'values',
        nodes: [
            {
                type: 'value',
                nodes: [
                    {
                        type: 'nested-item',
                        name: 'linear-gradient',
                        nodes: [
                            {
                                type: 'value',
                                nodes: [
                                    {
                                        type: 'item',
                                        name: '45deg',
                                    },
                                ],
                            },
                        ],
                        after: ' ',
                    },
                    {
                        type: 'item',
                        name: '25%',
                    },
                ],
            },
        ],
    },
];
