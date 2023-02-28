import muxml = require('muxml');
import concatStream = require('concat-stream');
import assert = require('assert');

const mux = muxml({
    indentSpaces: 4,
    indentStyle: 'tabs',
    indentTabs: 2,
    pretty: false,
    stripAttributes: true,
    stripCdata: false,
    stripComments: false,
    stripDoctype: false,
    stripInstruction: false,
    tagFilter: 'b',
});

const expected = '<a id="aa"><b><c>d</c></b></a>';
const xml = [
    '<a id="aa">',
    '<b>',
    '<c>',
    '<a>',
    '<b>',
    '<c>d</c>',
    '</b>',
    '</a>',
    '</c>',
    '</b>',
    '<b>',
    '<e>f</e>',
    '</b>',
    '<g>',
    '<b attr="foo">h</b>',
    '</g>',
    '</a>',
].join('\n');

mux.on('data', () => {})
    .on('opentag', tag => {})
    .on('closetag', tag => {})
    .on('comment', comment => {})
    .on('doctype', doctype => {})
    .on('instruction', instruction => {})
    .on('opencdata', () => {})
    .on('closecdata', () => {})
    .on('cdata', text => {})
    .on('attribute', attr => {})
    .pipe(
        concatStream({ encoding: 'string' }, data => {
            assert.strictEqual(data, expected);
        }),
    )
    .end(xml);
