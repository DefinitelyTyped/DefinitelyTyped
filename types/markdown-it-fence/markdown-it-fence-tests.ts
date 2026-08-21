import MarkdownIt = require("markdown-it");
import markdownItFence, { Option } from "markdown-it-fence";

declare let md: MarkdownIt;

// $ExpectType void
markdownItFence(md, "name");

// $ExpectType void
markdownItFence(md, "name", {});

// $ExpectType void
markdownItFence(md, "name", {
    marker: "`",

    render: (tokens, idx, options, env, self) => {
        // $ExpectType Token[]
        tokens;
        // $ExpectType number
        idx;
        // $ExpectType Options
        options;
        // $ExpectType any
        env;
        // $ExpectType Renderer
        self;

        return "";
    },

    validate: (params) => {
        // $ExpectType string
        params;

        return false;
    },
});
