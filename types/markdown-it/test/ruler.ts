import MarkdownIt = require('markdown-it');
import StateCore = require('markdown-it/lib/rules_core/state_core');

const md = new MarkdownIt();

md.core.ruler.at('replacements', function replace(state) {
    //...
    return true;
});

md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
    //...
    return true;
});

md.inline.ruler.after('text', 'my_rule', function replace(state) {
    //...
    return true;
});

md.core.ruler.push('my_rule', function replace(state) {
    //...
    return true;
});

md.core.ruler.enable(['link']);
md.core.ruler.enable('image');
md.core.ruler.enableOnly(['link']);
md.core.ruler.enableOnly('image');
md.core.ruler.disable(['link', 'image']);
md.core.ruler.disable('link');

declare const state: StateCore;
const coreRules = md.core.ruler.getRules('');
coreRules.forEach(rule => {
    rule(state);
});

const terminatorRules = md.block.ruler.getRules('blockquote');

md.core.ruler.push('foobar', state => false, { alt: ['foo', 'bar'] });
