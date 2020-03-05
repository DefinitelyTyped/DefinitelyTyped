import utils = require('markdown-it/lib/common/utils');

import entities = require('markdown-it/lib/common/entities');

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
