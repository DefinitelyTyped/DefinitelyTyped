/// <reference types="markdown-it/dist/markdown-it.js" />
/// <reference types="markdown-it-emoji/dist/markdown-it-emoji.js" />

{
    const md = markdownit();

    md.use(markdownitEmoji);
}

{
    const md = markdownit();

    md.use(markdownitEmoji, {
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
