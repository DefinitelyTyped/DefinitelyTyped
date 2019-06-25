import MarkdownIt = require("markdown-it");
import Renderer = require("markdown-it/lib/renderer");
import Token = require("markdown-it/lib/token");

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

{
    const md = MarkdownIt({
        linkify: true,
        highlight: (str: string, lang: string) => {
            if (hljs) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(lang, str).value;
                    } catch (error) {
                        console.log(error);
                    }
                }
                try {
                    return hljs.highlightAuto(str).value;
                } catch (error) {
                    console.log(error);
                }
            }
            return "";
        },
    });
    md.renderer.rules["image"] = (tokens: Token[], index: number, options: any, env: any, self: Renderer) => {
        const token = tokens[index];
        const aIndex = token.attrIndex("src");
        token.attrs[aIndex][1];
        token.attrPush(["style", "color: red"]);

        return md.renderer.rules["image"](tokens, index, options, env, self);
    };

    let defaultLinkRender: MarkdownIt.TokenRender;
    if (md.renderer.rules["link_open"]) {
        defaultLinkRender = md.renderer.rules["link_open"];
    } else {
        defaultLinkRender = (tokens: Token[], index: number, options: any, env: any, self: Renderer) => {
            return self.renderToken(tokens, index, options);
        };
    }
    md.renderer.rules["link_open"] = (tokens: Token[], index: number, options: any, env: any, self: Renderer) => {
        tokens[index].attrPush(["target", "_blank"]);
        tokens[index].attrPush(["rel", "nofollow"]);
        return defaultLinkRender(tokens, index, options, env, self);
    };
}
