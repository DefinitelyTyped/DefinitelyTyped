import * as MarkdownIt from "markdown-it";
import anchor = require("markdown-it-anchor");

const md = new MarkdownIt();

md.use(anchor, {
	level: 1,
	// slugify: string => string,
	permalink: false,
	// renderPermalink: (slug, opts, state, permalink) => {},
	permalinkClass: 'header-anchor',
	permalinkSymbol: '¶',
	permalinkBefore: false
});

const src = `# First header
Lorem ipsum.
## Next section!
This is totaly awesome.`;

md.render(src);
