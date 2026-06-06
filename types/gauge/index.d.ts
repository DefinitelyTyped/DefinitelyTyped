/// <reference types="node" />

import { Stream } from "stream";
import Plumbing from "./lib/plumbing";
import Themes, { ThemeName, ThemeObject, ThemeOpts } from "./lib/themes";
import { Status, Template, TemplateObject } from "./template";

export = Gauge;
declare namespace Gauge {
    type TemplateEntry = string | TemplateObject;
    export { Options, Plumbing, TemplateEntry, ThemeName, ThemeObject, ThemeOpts, Themes };
}

/**
 * This is the typical interface to the module– it provides a pretty
 * fire-and-forget interface to displaying your status information.
 * @see {@link https://github.com/npm/gauge#the-gauge-class}
 */
declare class Gauge<T extends Options | Stream = Options> {
    /**
     * Constructs a new gauge. Gauges are drawn on a single line, and are not
     * drawn if stream isn't a tty and a tty isn't explicitly provided.
     * @param options - An option object.
     * @param stream - A stream that progress bar updates are to be written to. Gauge honors backpressure and will pause most writing if it is indicated. (default STDERR)
     */
    constructor(options?: T, stream?: T extends Options ? Stream : Options);

    /**
     * Spins the spinner in the gauge to show output. If `subsection` is included
     * then it will be combined with the last name passed to `gauge.show`.
     */
    pulse(subsection?: string): void;

    /**
     * The first argument is either the section, the name of the current thing
     * contributing to progress, or an object with keys like section, subsection &
     * completed (or any others you have types for in a custom template). If you
     * don't want to update or set any of these you can pass `null` and it will be
     * ignored.
     *
     * The second argument is the percent completed as a value between 0 and 1.
     * Without it, completion is just not updated. You'll also note that
     * completion can be passed in as part of a status object as the first
     * argument. If both it and the completed argument are passed in, the
     * completed argument wins.
     */
    show(status: Status | string | null, completed?: number): void;

    /**
     * Removes the gauge from the terminal.
     *
     * @remarks
     * Optionally, takes argument callback `cb` that is called after IO has had an
     * opportunity to happen (currently this just means after `setImmediate` has
     * called back). It turns out this is important when you're pausing the
     * progress bar on one filehandle and printing to another– otherwise (with a
     * big enough print) node can end up printing the "end progress bar" bits to
     * the progress bar filehandle while other stuff is printing to another
     * filehandle. These getting interleaved can cause corruption in some
     * terminals.
     */
    hide(cb?: () => void): void;

    /**
     * Shows the gauge and resumes updating when `show` or `pulse` is called.
     */
    enable(): void;

    /**
     * Hides the gauge and ignores further calls to `show` or `pulse`.
     */
    disable(): void;

    /**
     * Returns `true` if the gauge is enabled.
     */
    isEnabled(): boolean;

    /**
     * Change the active theme, will be displayed with the next `show` or `pulse`.
     */
    setTheme<
        T extends ThemeName | ThemeObject | ThemeOpts = ThemeObject | ThemeOpts,
    >(theme: T extends string ? ThemeName : T): void;

    /**
     * Change the themeset to select a theme from. The same as the `themes` option
     * used in the constructor. The theme will be reselected from this themeset.
     */
    setThemeset(themes: Themes): void;

    /**
     * Change the active template, will be displayed with the next `show` or `pulse`.
     */
    setTemplate(template: Template): void;
}

interface Options {
    /**
     * How often gauge updates should be drawn, in milliseconds.
     * @defaultValue `50`
     */
    updateInterval?: number;

    /**
     * When this is true a timer is created to trigger once every updateInterval
     * ms, when false, updates are printed as soon as they come in but updates
     * more often than updateInterval are ignored.
     * @defaultValue `true`
     */
    fixedFramerate?: boolean;

    /**
     * A themeset to use when selecting the theme to use.
     * @defaultValue `require('gauge/themes')`
     * @see {@link https://github.com/npm/gauge#themes}
     */
    themes?: Themes;

    /**
     * Select a theme for use. Possible values:
     * - Theme object, in which case the `themes` is not used.
     * - The name of a theme, which will be looked up in the current `themes` object.
     * - A configuration object with any of `hasUnicode`, `hasColor`, or `platform` keys.
     * @defaultValue picked using a combination of best guesses at current OS, color support, and unicode support
     */
    theme?: ThemeName | ThemeObject | ThemeOpts;

    /**
     * A template is an array of objects and strings that, after being evaluated,
     * will be turned into the gauge line. The various template elements can
     * either be plain strings, in which case they will be be included verbatum in
     * the output, or a `Template` object.
     * @defaultValue The default is what npm uses.
     * @see {@link https://github.com/npm/gauge#templates}
     */
    template?: Template;

    /**
     * If true, then the cursor will be hidden while the gauge is displayed.
     * @defaultValue `true`
     */
    hideCursor?: boolean;

    /**
     * The tty that you're ultimately writing to. This is used for detecting the
     * width of the terminal and resizes. The width used is tty.columns - 1. If no
     * tty is available then a width of 79 is assumed.
     * @defaultValue the same as stream
     */
    tty?: Stream;

    /**
     * If true the gauge starts enabled. If disabled then all update commands are
     * ignored and no gauge will be printed until you call .enable().
     * @defaultValue `true` if tty is a TTY, `false` otherwise
     */
    enabled?: boolean;

    /**
     * The class to use to actually generate the gauge for printing. Ordinarily
     * you shouldn't need to override this.
     * @defaultValue `require('gauge/plumbing')`
     * @see {@link https://github.com/npm/gauge#plumbing}
     */
    Plumbing?: typeof Plumbing;

    /**
     * Ordinarily an exit handler is registered to make sure the cursor is turned
     * back on and the progress bar erased when the process exits, even if you
     * Ctrl-C out or otherwise exit unexpectedly. You can disable this and it
     * won't register the exit handler.
     * @defaultValue `true`
     */
    cleanupOnExit?: boolean;
}
