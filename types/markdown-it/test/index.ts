import LinkifyIt = require('linkify-it');
import MarkdownIt = require('markdown-it/lib');
import ParserBlock = require('markdown-it/lib/parser_block');
import ParserCore = require('markdown-it/lib/parser_core');
import ParserInline = require('markdown-it/lib/parser_inline');
import Renderer = require('markdown-it/lib/renderer');

{
    const md = new MarkdownIt();
    let options: MarkdownIt.Options;
    // all empty
    options = {};

    // Commonmark
    options = {
        html: true,
        xhtmlOut: true,
        breaks: false,
        langPrefix: 'language-',
        linkify: false,
        typographer: false,
        quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,
        highlight: null,
    };

    // Zero
    options = {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: 'language-',
        linkify: false,
        typographer: false,
        quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,
        highlight: null,
    };

    // default
    options = {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: 'language-',
        linkify: false,
        typographer: false,
        quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,
        highlight: null,
    };

    // highlight
    options = {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: 'language-',
        linkify: false,
        typographer: false,
        quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,
        highlight: (str, lang, attrs) => "",
    };
}

{
    const md = new MarkdownIt();

    const inline: ParserInline = md.inline;
    const block: ParserBlock = md.block;
    const core: ParserCore = md.core;
    const renderer: Renderer = md.renderer;

    const linkify: LinkifyIt.LinkifyIt = md.linkify;

    const options: MarkdownIt.Options = md.options;
}

{
    const md = MarkdownIt()
        .set({ html: true, breaks: true })
        .set({ typographer: true });
}

{
    const md = MarkdownIt()
        .configure('default')
        .configure('zero')
        .configure('commonmark');
}

{
    const md = MarkdownIt()
        .enable(['sub', 'sup'])
        .enable(['sub', 'sup'], true)
        .disable(['sub', 'sup'])
        .disable(['sub', 'sup'], true)
        .enable('smartquotes')
        .enable('smartquotes', true)
        .disable('smartquotes')
        .disable('smartquotes', true);
}

{
    // Test plugin generic types

    const plugin: MarkdownIt.PluginSimple = (md: MarkdownIt) => {};
    const plugin1 = (md: MarkdownIt, param?: boolean) => {};
    const plugin2 = (md: MarkdownIt, param1?: string, param2?: number) => {};
    const plugin3 = (md: MarkdownIt, ...params: any[]) => {};
    const plugin4: MarkdownIt.PluginWithOptions<{ foo: boolean; bar: number }> = (md, options) => {};
    const plugin5: MarkdownIt.PluginWithParams = (md, flag?: boolean, str?: string, num?: number) => {};

    const md = MarkdownIt()
        .use(plugin)
        .use(plugin, 'foobar')
        .use(plugin1, false)
        .use(plugin2, 'foobar', 123)
        .use(plugin3, {})
        .use(plugin4)
        .use(plugin4, { foo: true, bar: 123 })
        .use(plugin5)
        .use(plugin5, true, 'foobar', 123);
}

{
    const md = new MarkdownIt();
    const flag: boolean = md.validateLink('https://github.com/');
    const link: string = md.normalizeLink('https://github.com/');
    const text: string = md.normalizeLinkText('http://host/');
}

{
    const md = new MarkdownIt();

    let result: string;
    result = md.render('# Foobar');
    result = md.render('# Foobar', {});

    const tokens = md.parse('# Foobar', {});
    result = md.renderer.render(tokens, md.options, {});
}
{
    const md = new MarkdownIt();

    let result: string;
    result = md.renderInline('__foobar__');
    result = md.renderInline('__foobar__', {});

    const tokens = md.parseInline('__foobar__', {});
    result = md.renderer.renderInline(tokens, md.options, {});
}
