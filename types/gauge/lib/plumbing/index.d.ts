import { Status, Template } from "../../template";
import { ThemeName, ThemeObject, ThemeOpts } from "../themes";

/**
 * This is the super simple, assume nothing, do no magic internals used by gauge
 * to implement its ordinary interface.
 * @see {@link https://github.com/npm/gauge#plumbing}
 */
export default class Plumbing {
    /**
     * @param theme - The theme to use.
     * @param template - The template to use.
     * @param width - How wide your gauge should be.
     */
    constructor(
        theme: ThemeName | ThemeObject | ThemeOpts,
        template: Template,
        width: number,
    );

    /**
     * Return the string necessary to hide the progress bar.
     */
    hide(): string;

    /**
     * Using `status` for values, render the provided template with the theme and
     * return a string that is suitable for printing to update the gauge.
     */
    show(status: Status): string;

    /**
     * Return a string to hide the cursor.
     */
    hideCursor(): string;

    /**
     * Return a string to show the cursor.
     */
    showCursor(): string;

    /**
     * Change the width to render at.
     */
    setWidth(width: number): void;

    /**
     * Change the active theme.
     */
    setTheme(theme: ThemeName | ThemeObject | ThemeOpts): void;

    /**
     * Change the active template.
     */
    setTemplate(template: Template): void;
}
