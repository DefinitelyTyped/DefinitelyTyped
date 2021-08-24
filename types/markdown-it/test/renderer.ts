import MarkdownIt = require('markdown-it');
import Renderer = require('markdown-it/lib/renderer');
import Token = require('markdown-it/lib/token');

const md = new MarkdownIt();
const src = '# Foobar';
const env = {};

{
    md.renderer.rules.strong_open = () => '<b>';
    md.renderer.rules.strong_close = () => '</b>';
    const result = md.renderInline('__foobar__');
}

{
    md.renderer.rules.foobar = (
        tokens: Token[],
        idx: number,
        options: MarkdownIt.Options,
        env: any,
        slf: Renderer,
    ): string => {
        return 'foobar';
    };
}

{
    const result = md.renderer.render(md.parse(src, env), md.options, env);
}

{
    const result = md.renderer.render(md.parseInline(src, env), md.options, env);
}

{
    const tokens = md.parse(src, env);
    let result = '';
    for (const token of tokens) {
        if (token.type === 'inline' && token.children) {
            result += md.renderer.renderInline(token.children, md.options, env);
        }
    }
}

{
    const tokens = md.parse(src, env);
    let result = '';
    for (const token of tokens) {
        if (token.type === 'image' && token.children) {
            result += md.renderer.renderInlineAsText(token.children, md.options, env);
        }
    }
}

{
    const tokens = md.parse(src, env);
    let result = '';
    for (let index = 0; index < tokens.length; index++) {
        result += md.renderer.renderToken(tokens, index, md.options);
    }
}

{
    const tokens = md.parse(src, env);
    for (const token of tokens) {
        const attr = md.renderer.renderAttrs(token);
    }
}
