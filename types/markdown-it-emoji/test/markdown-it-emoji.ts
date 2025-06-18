import MarkdownIt = require("markdown-it");
import { Options } from "markdown-it-emoji";
import emoji = require("markdown-it-emoji");
import bare = require("markdown-it-emoji/dist/bare.cjs.js");
import light = require("markdown-it-emoji/dist/light.cjs.js");

{
    const md = MarkdownIt();

    md.use(emoji.full);
}

{
    const md = MarkdownIt();

    md.use(emoji.full, {
        defs: {
            one: "!!!one!!!",
            fifty: "!!50!!",
        },
        shortcuts: {
            fifty: [":50", "|50"],
            one: ":uno",
        },
    });
}

{
    const md = MarkdownIt();

    md.use(emoji.full, {
        enabled: ["smile", "grin"],
    });
    md.use(bare, {
        enabled: ["smile", "grin"],
    });
    md.use(light, {
        enabled: ["smile", "grin"],
    });
}

{
    const options: Partial<Options> = {
        shortcuts: {
            angry: "!!angry!!",
        },
    };
}
