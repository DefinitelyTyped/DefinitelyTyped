import * as MarkdownIt from "markdown-it";

{
    const md = new MarkdownIt();
    var result = md.render('# markdown-it rulezz!');
}

{
    var md = MarkdownIt();
    var result = md.render('# markdown-it rulezz!');
    var result = md.renderInline('__markdown-it__ rulezz!');
}

{
    var md = MarkdownIt('commonmark');
}

{
    var md = MarkdownIt({
        html: true,
        linkify: true,
        typographer: true
    });
}

{
    var md = MarkdownIt({
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: 'language-',
        linkify: false,
        typographer: false,
        quotes: '“”‘’',
        highlight: function () { return ''; }
    });
}
declare const plugin1: any;
declare const plugin2: any;
declare const plugin3: any;
declare const opts: any;
{
    var md = MarkdownIt()
        .use(plugin1)
        .use(plugin2, opts)
        .use(plugin3);
}

import * as hljs from 'highlight.js';
{
    var md = MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (__) { }
            }

            return ''; // use external default escaping
        }
    });
}

{
    var md = MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                        hljs.highlight(lang, str, true).value +
                        '</code></pre>';
                } catch (__) { }
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    });
    md.linkify.tlds('.py', false);
}

{
    var md = MarkdownIt()
        .disable(['link', 'image'])
        .enable(['link'])
        .enable('image');

    // Enable everything
    md = MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
    });
}

{
    var md = MarkdownIt()
        .set({ html: true, breaks: true })
        .set({ typographer: true });
}

{
    var md = MarkdownIt()
        .use(plugin1, 'foo_replace', 'text', function (tokens: any[], idx: number) {
            tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
        });
}

{
    var md = MarkdownIt();
    // enable everything
    md.validateLink = function () { return true; }
}

function myToken(tokens: any, idx: number, options: any, env: any, self: any) {
    //...
    return result;
};
{
    var md = MarkdownIt();
    md.renderer.rules['my_token'] = myToken
}
