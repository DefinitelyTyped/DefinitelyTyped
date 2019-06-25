import MarkdownIt = require("markdown-it");
import lazyHeaders = require("markdown-it-lazy-headers");

const md = new MarkdownIt();

md.use(lazyHeaders);

const src = `# First header
Lorem ipsum.
## Next section!
This is totaly awesome.`;

md.render(src);
