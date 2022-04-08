import MarkdownIt = require('markdown-it');
import linkAttrs = require('markdown-it-link-attributes');

const md = new MarkdownIt();

md.use(linkAttrs, {
    attrs: {
        target: '_blank',
    },
});

const src = `This is [an example](http://example.com/) inline link.`;

// $ExpectType string
const result = md.render(src);
