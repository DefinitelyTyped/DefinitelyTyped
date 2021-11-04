import MarkdownIt = require("markdown-it");
import linkAttrs = require("markdown-it-link-attributes");

const md = new MarkdownIt();

md.use(linkAttrs, {
    attrs: {
        target: "_blank",
    },
});

md.use(linkAttrs, [
    {
        pattern: /^https?:\/\//,
        attrs: {
            className: "external-link",
            target: "_blank",
            rel: "noopener",
        },
    },
    {
        attrs: {
            className: "other-link",
        },
    },
]);

const src = `This is [an example](https://example.com/) inline link.`;

// $ExpectType string
const result = md.render(src);

// $ExpectType RenderRule
linkAttrs.defaultRender;
