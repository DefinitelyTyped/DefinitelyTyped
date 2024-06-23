import MarkdownIt = require("markdown-it");
import markdownItExternalLinks = require("markdown-it-external-links");

const md = new MarkdownIt();

md.use(markdownItExternalLinks);

const src = `This is [an example](https://example.com/) inline link.`;

// $ExpectType string
const result = md.render(src);
