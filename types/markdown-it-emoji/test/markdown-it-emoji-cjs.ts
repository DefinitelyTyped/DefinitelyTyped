import MarkdownIt = require("markdown-it");
import { Options, Shortcut } from "markdown-it-emoji";
import emoji = require("markdown-it-emoji");
import bare = require("markdown-it-emoji/bare");
import light = require("markdown-it-emoji/light");

{
    const md = MarkdownIt();

    md.use(emoji);
}

{
    const md = MarkdownIt();

    md.use(emoji, {
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

    md.use(emoji, {
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
    const options: Options = {
        shortcuts: {
            angry: "!!angry!!",
        },
    };

    const annoyed: Shortcut = "annoyed";
}
