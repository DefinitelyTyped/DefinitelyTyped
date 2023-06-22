import Reveal = require('../../../.');

/**
 * Reveal plugin math
 *
 * @see {@link https://github.com/hakimel/reveal.js/tree/master/plugin/math}
 */
declare const RevealMath: Reveal.PluginFunction & {
    KaTeX: Reveal.PluginFunction;
    MathJax2: Reveal.PluginFunction;
    MathJax3: Reveal.PluginFunction;
};

export = RevealMath;
