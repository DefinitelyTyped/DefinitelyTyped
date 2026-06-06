import MarkdownIt = require("markdown-it");
import markdownItAttributes = require("markdown-it-attrs");

const md = new MarkdownIt();

md.use(markdownItAttributes);

const src = `This is [an example](https://example.com/) inline link.`;

// $ExpectType string
const result = md.render(src);
