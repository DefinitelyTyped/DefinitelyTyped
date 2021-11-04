/// <reference lib="dom" />
/// <reference types="markdown-it-emoji" />

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
