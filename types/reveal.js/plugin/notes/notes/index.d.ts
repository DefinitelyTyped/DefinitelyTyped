import Reveal = require("../../../.");

/**
 * Reveal plugin notes
 *
 * @see {@link https://github.com/hakimel/reveal.js/tree/master/plugin/notes}
 */
declare const RevealNotes: Reveal.PluginFunction;

export = RevealNotes;

declare module "reveal.js" {
    interface Options {
        totalTime?: number | undefined;
        minTimePerSlide?: number | undefined;
    }
}
