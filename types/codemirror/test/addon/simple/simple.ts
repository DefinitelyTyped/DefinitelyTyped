import * as CodeMirror from 'codemirror';
import 'codemirror/addon/mode/simple';

const value = /([^&!|*><~:=*()\\/\x00]|\\[0-9a-f]{2})+/;

// $ExpectError
CodeMirror.defineSimpleMode('property-start-is-required', {});

CodeMirror.defineSimpleMode('foobar', {
    start: [],
});

CodeMirror.defineSimpleMode('rfc2254', {
    meta: {
        dontIndentStates: ['prop'],
    },
    prop: [
        { regex: /\s+/, token: 'space' },
        { regex: /\*/, token: 'qualifier' },
        { regex: /:/, token: 'qualifier' },
        { regex: /[&!|]/, token: 'operator' },
        { regex: /=/, token: 'operator' },
        { regex: /~=/, token: 'operator' },
        { regex: />=/, token: 'operator' },
        { regex: /<=/, token: 'operator' },
        { indent: true, regex: /\(/, token: 'bracket' },
        { dedent: true, next: 'start', regex: /\)/, token: 'bracket' },
        { regex: value, token: 'string' },
    ],
    start: [
        {
            regex: /\s+/,
            token: 'space',
        },
        {
            regex: /\*/,
            token: 'qualifier',
        },
        {
            regex: /:/,
            token: 'qualifier',
        },
        {
            regex: /[&!|]/,
            token: 'operator',
        },
        {
            next: 'prop',
            regex: /=/,
            token: 'operator',
        },
        {
            next: 'prop',
            regex: /~=/,
            token: 'operator',
        },
        {
            next: 'prop',
            regex: />=/,
            token: 'operator',
        },
        {
            next: 'prop',
            regex: /<=/,
            token: 'operator',
        },
        {
            indent: true,
            regex: /\(/,
            token: 'bracket',
        },
        {
            dedent: true,
            regex: /\)/,
            token: 'bracket',
        },
        {
            regex: value,
            token: 'attribute',
        },
    ],
});
