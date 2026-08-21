/// <reference types="node" />

import { LiteralUnion, Primitive, Status } from "../../template";

export default Themes;

declare const Themes: Themes;

interface Themes {
    (opts?: ThemeOpts): ThemeObject;

    /**
     * Theme objects are a function that fetches the default theme based on
     * platform, unicode, and color support. If no compatible theme can be found
     * then an error will be thrown with a `code` of `EMISSINGTHEME`.
     */
    getDefault(opts?: ThemeOpts): ThemeObject;

    /**
     * @param opts - an object with the following properties: `platform`, `hasUnicode`, `hasColor`
     * @param themeName - the name of the theme (as given to `addTheme`) to use for this set of `opts`.
     */
    setDefault<T extends SetDefaultOpts | ThemeName = SetDefaultOpts>(
        opts: T,
        themeName?: T extends SetDefaultOpts ? ThemeName : never,
    ): void;

    /**
     * Copy the current themeset into a new one. This allows you to easily inherit
     * one themeset from another.
     */
    newThemeSet(): Themes;

    /**
     * Create a new theme object based on `parentTheme`. If no `parentTheme` is
     * provided then a minimal parentTheme that defines functions for rendering
     * the activity indicator (spinner) and progress bar will be defined. (This
     * fallback parent is defined in `gauge/base-theme`.)
     */
    newTheme(parentTheme: ThemeObject, newTheme?: ThemeObject): ThemeObject;

    /**
     * Returns the theme object from this theme set named `name`. If `name` does not
     * exist in this themeset an error will be thrown with a code of
     * `EMISSINGTHEME`.
     */
    getTheme(name: ThemeName): ThemeObject;

    /**
     * Return a list of all of the names of the themes in this themeset. Suitable
     * for use in `themes.getTheme(…)`.
     */
    getThemeNames(): ThemeName[];

    /**
     * Adds a named theme to the themeset. You can pass in either a theme object,
     * as returned by `themes.newTheme` or the arguments you'd pass to
     * `themes.newTheme`.
     */
    addTheme(
        themeName: ThemeName,
        themeObj: ThemeObject,
        newTheme?: ThemeObject,
    ): void;

    /**
     * This mixes-in `theme` into all themes currently defined. It also adds it to
     * the default parent theme for this themeset, so future themes added to this
     * themeset will get the values from `theme` by default.
     */
    addToAllThemes(theme: ThemeObject): void;

    baseTheme: ThemeObject;
    themes: Record<ThemeName, ThemeObject>;
    defaults: {
        linux: Record<"true" | "false", ThemeObject>;
        darwin: Record<"true" | "false", ThemeObject>;
        fallback: Record<"true" | "false", ThemeObject>;
    };
}

export type ThemeName = LiteralUnion<
    "ASCII" | "colorASCII" | "brailleSpinner" | "colorBrailleSpinner",
    string
>;

export type ThemeObject = Record<string, Primitive | ThemeFn> & {
    /**
     * displayed as a separator between the `section` and `subsection` when the latter
     * is printed.
     */
    preSubsection?: string;

    /**
     * displayed prior to the progress bar, if the progress bar is displayed.
     */
    preProgressbar?: string;

    /**
     * displayed after the progress bar, if the progress bar is displayed.
     */
    postProgressbar?: string;

    /**
     * The theme for the activity indicator (spinner), this can either be a
     * string, in which each character is a different step, or an array of
     * strings.
     */
    activityIndicatorTheme?: string | string[];

    /**
     * The subtheme passed through to the progress bar renderer, it's an object
     * with `complete` and `remaining` properties that are the strings you want
     * repeated for those sections of the progress bar.
     */
    progressbarTheme?: {
        complete?: string;
        remaining?: string;
        preComplete?: string;
        postComplete?: string;
        preRemaining?: string;
        postRemaining?: string;
    };
};

export interface ThemeOpts {
    /**
     * If true, fetch a unicode theme, if no unicode theme is available then a
     * non-unicode theme will be used.
     */
    hasUnicode: boolean;

    /**
     * If true, fetch a color theme, if no color theme is available a non-color
     * theme will be used.
     */
    hasColor: boolean;

    /**
     * If no platform match is available then `fallback` is used instead.
     * @defaultValue `process.platform`
     */
    platform?: NodeJS.Platform;
}

interface SetDefaultOpts {
    /**
     * If your theme uses unicode you should set this to true.
     * @defaultValue `false`
     */
    hasUnicode?: boolean;

    /**
     * If your theme uses color you should set this to true.
     * @defaultValue `false`
     */
    hasColor?: boolean;

    /**
     * If your theme is platform specific, specify that here with the platform
     * from process.platform, eg, `win32`, `darwin`, etc
     * @defaultValue `fallback`
     */
    platform?: NodeJS.Platform | "fallback";
}

/**
 * @param values - an object with values provided via `gauge.show`.
 * @param theme - the theme specific to this item or this theme object.
 * @param width - the number of characters wide your result should be.
 */
type ThemeFn = (
    values: Status,
    theme: ThemeObject,
    width: number,
) => ThemeObject;
