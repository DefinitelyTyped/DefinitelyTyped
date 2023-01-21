import MarkdownIt = require("markdown-it");
import markdownItFootnote = require("markdown-it-footnote");

const md = new MarkdownIt();

md.use(markdownItFootnote);

const src = `Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.`;

// $ExpectType string
const result = md.render(src);
