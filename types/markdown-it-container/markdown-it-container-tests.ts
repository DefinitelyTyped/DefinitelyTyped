import MarkdownIt = require("markdown-it");
import Token = require("markdown-it/lib/token");

import MarkdownItContainer = require("markdown-it-container");

const md = new MarkdownIt();

md.use(MarkdownItContainer, 'spoiler', {
    validate: (params: any) => params.trim().match(/^spoiler\s+(.*)$/),
    render: (tokens: Token[], index: number) => {
        const match = tokens[index].info.trim().match(/^spoiler\s+(.*)$/);
        const onClick =
            "this.parentNode.classList.toggle('_expanded');" +
            "event.preventDefault();";

        if (tokens[index].nesting === 1) {
            return (
                // tslint:disable-next-line prefer-template
                '<div class="markdown__spoiler">\n' +
                '<div class="markdown__spoiler-title" onclick="' + onClick + '">\n' +
                md.utils.escapeHtml(match && match[1] || '') + '\n' +
                '</div>\n' +
                '<div class="markdown__spoiler-content">\n'
            );
        } else {
            return '</div></div>\n';
        }
    }
});

const src = `:::spoiler This Is Spoiler Title
Here is spoiler content.
:::`;

md.render(src);
