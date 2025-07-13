import MarkdownIt from "markdown-it";
import markdownItColorInline from "markdown-it-color-inline";
import inlinecolor from "markdown-it-color-inline/lib/inlinecolor";

declare let md: MarkdownIt;
markdownItColorInline(md); // $ExpectType void

declare let state: MarkdownIt.StateInline;
declare let silent: boolean;
inlinecolor(state, silent); // $ExpectType boolean
