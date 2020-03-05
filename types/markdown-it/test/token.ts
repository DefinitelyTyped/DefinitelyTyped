import Token = require('markdown-it/lib/token');

const token = new Token('link_open', 'a', 1);

token.type = 'paragraph_open';
token.tag = 'p';
token.attrs = null;
token.map = null;
token.nesting = 1;
token.level = 0;
token.children = null;
token.content = '';
token.markup = '';
token.info = '';
token.meta = null;
token.block = false;
token.hidden = false;

const index: number = token.attrIndex('href');
token.attrPush(['data-foo', 'bar']);
token.attrSet('href', 'https://github.com/markdown-it/markdown-it');
const href: string | null = token.attrGet('href');
token.attrJoin('class', 'foobar');
