import utils = require('markdown-it/lib/common/utils');

import entities = require('markdown-it/lib/common/entities');
import htmlBlocks = require('markdown-it/lib/common/html_blocks');
import htmlRE = require('markdown-it/lib/common/html_re');
import StateBlock = require('markdown-it/lib/rules_block/state_block');
import StateInline = require('markdown-it/lib/rules_inline/state_inline');

utils.lib.mdurl.parse('https://github.com/markdown-it/markdown-it', true);

const options = utils.assign({}, {});
utils.isString(options);
utils.has(options, 'foobar');
utils.unescapeMd('# Foobar');
utils.unescapeAll('<span>foobar</span>');
utils.isValidEntityCode(1);
utils.fromCodePoint(0xfffd);
utils.escapeHtml('<div>foobar</div>');
utils.arrayReplaceAt([1], 0, [1, 2, 3]);
utils.isSpace('foobar'.charCodeAt(0));
utils.isWhiteSpace('foobar'.charCodeAt(0));
utils.isMdAsciiPunct('foobar'.charCodeAt(0));
utils.isPunctChar(String.fromCharCode(0x20));
utils.escapeRE('foobar');
utils.normalizeReference('foobar');

const encoded = '<div>foo&bar</div>'.replace(entities.amp, `&amp;`);

const blocks: string[] = htmlBlocks;

declare const stateBlock: StateBlock;
{
    const re = new RegExp(htmlRE.HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$');
}

declare const stateInline: StateInline;
{
    const match = stateInline.src.slice(stateInline.pos).match(htmlRE.HTML_TAG_RE);
    if (match) {
        stateInline.pos += match[0].length;
    }
}
