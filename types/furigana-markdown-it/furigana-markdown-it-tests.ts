import furigana = require('furigana-markdown-it');
import MarkdownIt = require('markdown-it');

const md = MarkdownIt();
md.use(furigana());
md.use(furigana({}));
md.use(
    furigana({
        fallbackParens: '()',
        extraSeparators: '-',
        extraCombinators: "'",
    }),
);
// how does it work?
md.render('[猫]{ねこ}'); // <p><ruby>猫<rp>(</rp><rt>ねこ</rt><rp>)</rp></ruby></p>
