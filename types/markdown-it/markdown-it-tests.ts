import MarkdownIt = require('markdown-it');
import MarkdownIt1 = require('markdown-it/index');
import MarkdownIt2 = require('markdown-it/lib');
import MarkdownIt3 = require('markdown-it/lib/index');

import hljs = require('highlight.js');
import LinkifyIt = require('linkify-it');

{
    // check exports
    let md: typeof MarkdownIt;
    md = MarkdownIt1;
    md = MarkdownIt2;
    md = MarkdownIt3;
}

{
    // test constuctor usage
    let md: MarkdownIt;
    const options: MarkdownIt.Options = {};
    const presets: MarkdownIt.PresetName[] = ['commonmark', 'zero', 'default'];

    md = MarkdownIt();
    md = new MarkdownIt();
    md = MarkdownIt(options);
    md = new MarkdownIt(options);

    presets.forEach(p => {
        md = MarkdownIt(p);
        md = new MarkdownIt(p);
        md = MarkdownIt(p, options);
        md = new MarkdownIt(p, options);
    });

    md = MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
    });
    md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
    });

    md = MarkdownIt({
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: 'language-',
        linkify: false,
        typographer: false,
        quotes: '“”‘’',
        highlight: function(str: string, lang: string): string {
            return '';
        },
    });
    md = new MarkdownIt({
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: 'language-',
        linkify: false,
        typographer: false,
        quotes: '“”‘’',
        highlight: function(str: string, lang: string): string {
            return '';
        },
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

{
    var md = MarkdownIt({
        highlight: function(str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str, true).value;
                } catch (__) {}
            }

            return '';
        },
    });
}
{
    var md = MarkdownIt({
        highlight: function(str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
                } catch (__) {}
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        },
    });
}

{
    const linkify: LinkifyIt.LinkifyIt = md.linkify;
    md.linkify.tlds('.py', false);
}

{
    let md = MarkdownIt()
        .disable(['link', 'image'])
        .enable(['link'])
        .enable('image');

    md = MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
    });
}

{
    let md = MarkdownIt();
    let state = new md.inline.State('text `code`', md, {}, []);
    md.inline.tokenize(state);
    let hasNull = false
    for (let i of state.tokens_meta) {
        if (i === null) {
            hasNull = true 
        }
    }
}
