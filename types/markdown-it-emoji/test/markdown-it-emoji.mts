import MarkdownIt from "markdown-it";
import { bare, full, light, Options } from "markdown-it-emoji";

{
    const md = MarkdownIt();

    md.use(full);
}

{
    const md = MarkdownIt();

    md.use(full, {
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

    md.use(full, {
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
