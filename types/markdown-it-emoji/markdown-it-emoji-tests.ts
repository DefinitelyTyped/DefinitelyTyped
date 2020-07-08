import MarkdownIt = require('markdown-it');
import emoji = require('markdown-it-emoji');

{
    const md = MarkdownIt();

    md.use(emoji);
}

{
    const md = MarkdownIt();

    md.use(emoji, {
        defs: {
            one: '!!!one!!!',
            fifty: '!!50!!',
        },
        shortcuts: {
            fifty: [':50', '|50'],
            one: ':uno',
        },
    });
}

{
    const md = MarkdownIt();

    md.use(emoji, {
        enabled: ['smile', 'grin'],
    });
}
